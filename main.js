const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

app.commandLine.appendSwitch('disk-cache-dir', path.join(app.getPath('userData'), 'cache'));
app.commandLine.appendSwitch('gpu-cache-dir', path.join(app.getPath('userData'), 'gpu-cache'));

const VIDEO_EXTS = ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.flv', '.wmv', '.m4v'];
const AUDIO_EXTS = ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a'];
const SUB_EXTS = ['.srt', '.vtt', '.ass', '.ssa', '.sub'];
const ALL_MEDIA_EXTS = [...VIDEO_EXTS, ...AUDIO_EXTS];

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 400,
    minHeight: 300,
    title: 'Media Tracker',
    backgroundColor: '#0f0f1a',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

function scanDir(dirPath, basePath) {
  basePath = basePath || '';
  const results = [];
  let entries;
  try { entries = fs.readdirSync(dirPath, { withFileTypes: true }); } catch (e) { return results; }

  for (const entry of entries) {
    const relPath = basePath ? basePath + '/' + entry.name : entry.name;
    if (entry.isDirectory()) {
      results.push(...scanDir(path.join(dirPath, entry.name), relPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ALL_MEDIA_EXTS.includes(ext)) {
        results.push({
          name: entry.name,
          path: relPath,
          ext,
          subfolder: basePath,
          isVideo: VIDEO_EXTS.includes(ext),
          isAudio: AUDIO_EXTS.includes(ext),
          fullPath: path.join(dirPath, entry.name),
        });
      }
    }
  }

  results.sort((a, b) => {
    const fc = a.subfolder.localeCompare(b.subfolder);
    return fc !== 0 ? fc : a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });
  return results;
}

ipcMain.handle('dialog:openFolder', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });
  if (result.canceled || !result.filePaths.length) return null;
  return result.filePaths[0];
});

ipcMain.handle('dialog:openFiles', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Media Files', extensions: [...VIDEO_EXTS, ...AUDIO_EXTS].map(e => e.slice(1)) },
      { name: 'All Files', extensions: ['*'] },
    ],
  });
  if (result.canceled || !result.filePaths.length) return null;
  return result.filePaths;
});

ipcMain.handle('fs:scanFolder', async (event, dirPath) => {
  return scanDir(dirPath);
});

ipcMain.handle('fs:getFileUrl', async (event, filePath) => {
  try {
    if (!fs.existsSync(filePath)) return null;
    return 'file://' + filePath.replace(/\\/g, '/');
  } catch (e) {
    return null;
  }
});

ipcMain.handle('fs:readFile', async (event, filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    return null;
  }
});

ipcMain.handle('fs:findSubtitles', async (event, dirPath, fileName) => {
  const langs = ['en', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'zh', 'ar'];
  const baseName = path.basename(fileName, path.extname(fileName));
  const results = [];

  let entries;
  try { entries = fs.readdirSync(dirPath, { withFileTypes: true }); } catch (e) { return results; }

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!SUB_EXTS.includes(ext)) continue;
    const nameNoExt = path.basename(entry.name, ext);
    if (nameNoExt === baseName || langs.some(lang => nameNoExt === baseName + '.' + lang)) {
      results.push(path.join(dirPath, entry.name));
    }
  }
  return results;
});

ipcMain.handle('fs:getBasePath', async () => {
  return app.getPath('userData');
});

ipcMain.handle('dialog:input', async (event, title, label, defaultValue) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  // Use a simple BrowserWindow-based input dialog
  return new Promise((resolve) => {
    const inputWin = new BrowserWindow({
      parent: win,
      modal: true,
      width: 400,
      height: 180,
      resizable: false,
      title: title || 'Input',
      backgroundColor: '#1a1a2e',
      webPreferences: { nodeIntegration: true, contextIsolation: false },
      autoHideMenuBar: true,
    });
    inputWin.setMenuBarVisibility(false);
    const html = `<!DOCTYPE html><html><head><style>
      body { font-family: -apple-system, sans-serif; background: #1a1a2e; color: #eaeaea; padding: 20px; margin: 0; display: flex; flex-direction: column; gap: 12px; }
      label { font-size: 13px; color: #a0a0b0; }
      input { padding: 8px 12px; border: 1px solid #2a2a40; border-radius: 6px; background: #0f0f1a; color: #eaeaea; font-size: 14px; outline: none; }
      input:focus { border-color: #e94560; }
      .btns { display: flex; gap: 8px; justify-content: flex-end; margin-top: 8px; }
      button { padding: 8px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; }
      .ok { background: #e94560; color: white; }
      .cancel { background: #2a2a40; color: #a0a0b0; }
    </style></head><body>
      <label>${label || ''}</label>
      <input id="inp" type="text" value="${(defaultValue || '').replace(/"/g, '&quot;')}" autofocus />
      <div class="btns"><button class="cancel" onclick="require('electron').ipcRenderer.send('input-result', null)">Cancel</button><button class="ok" onclick="require('electron').ipcRenderer.send('input-result', document.getElementById('inp').value)">OK</button></div>
      <script>document.getElementById('inp').addEventListener('keydown', e => { if(e.key==='Enter') require('electron').ipcRenderer.send('input-result', document.getElementById('inp').value); if(e.key==='Escape') require('electron').ipcRenderer.send('input-result', null); });</script>
    </body></html>`;
    inputWin.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
    const { ipcMain: ipc } = require('electron');
    const handler = (event, value) => {
      ipc.removeAllListeners('input-result');
      try { inputWin.close(); } catch (e) {}
      resolve(value);
    };
    ipc.on('input-result', handler);
    inputWin.on('closed', () => {
      ipc.removeAllListeners('input-result');
      resolve(null);
    });
  });
});

function findFfmpeg() {
  if (ffmpegPath && fs.existsSync(ffmpegPath)) return ffmpegPath;
  const fallbacks = ['ffmpeg', 'C:\\ffmpeg\\bin\\ffmpeg.exe', '/usr/bin/ffmpeg', '/usr/local/bin/ffmpeg'];
  for (const c of fallbacks) {
    try { if (fs.existsSync(c)) return c; } catch (e) {}
  }
  return 'ffmpeg';
}

ipcMain.handle('fs:extractSubtitles', async (event, filePath) => {
  const ffmpeg = findFfmpeg();
  const tmpPath = path.join(app.getPath('temp'), 'media-tracker-sub-' + Date.now() + '.srt');

  // For URLs, follow redirects first then pipe to ffmpeg
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return new Promise((resolve) => {
      const https = filePath.startsWith('https') ? require('https') : require('http');
      const { spawn } = require('child_process');

      function fetchUrl(url) {
        https.get(url, (res) => {
          if (res.statusCode === 301 || res.statusCode === 302) {
            fetchUrl(res.headers.location);
            return;
          }
          const proc = spawn(ffmpeg, [
            '-probesize', '5000000', '-analyzeduration', '5000000',
            '-i', 'pipe:0',
            '-map', '0:s:0', '-c:s', 'srt', '-f', 'srt', '-y', tmpPath
          ], { stdio: ['pipe', 'ignore', 'ignore'] });
          res.pipe(proc.stdin);
          res.on('error', () => { try { proc.kill(); } catch (e) {} });
          proc.on('close', () => {
            try {
              if (fs.existsSync(tmpPath)) {
                const content = fs.readFileSync(tmpPath, 'utf-8');
                fs.unlinkSync(tmpPath);
                resolve(content.trim() ? { content, ext: '.srt' } : null);
              } else {
                resolve(null);
              }
            } catch (e) { resolve(null); }
          });
          proc.on('error', () => { try { fs.unlinkSync(tmpPath); } catch (e) {} resolve(null); });
        }).on('error', () => resolve(null));
      }
      fetchUrl(filePath);
    });
  }

  // For local files, use ffmpeg directly
  return new Promise((resolve) => {
    const { spawn } = require('child_process');
    const proc = spawn(ffmpeg, [
      '-probesize', '5000000', '-analyzeduration', '5000000',
      '-i', filePath,
      '-map', '0:s:0', '-c:s', 'srt', '-f', 'srt', '-y', tmpPath
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
    proc.on('close', () => {
      try {
        if (fs.existsSync(tmpPath)) {
          const content = fs.readFileSync(tmpPath, 'utf-8');
          fs.unlinkSync(tmpPath);
          resolve(content.trim() ? { content, ext: '.srt' } : null);
        } else {
          resolve(null);
        }
      } catch (e) { resolve(null); }
    });
    proc.on('error', () => { try { fs.unlinkSync(tmpPath); } catch (e) {} resolve(null); });
  });
});

ipcMain.handle('fs:probeSubtitles', async (event, filePath) => {
  const ffmpeg = findFfmpeg();
  return new Promise((resolve) => {
    const { spawn } = require('child_process');
    const proc = spawn(ffmpeg, ['-i', filePath]);
    let output = '';
    proc.stderr.on('data', (data) => { output += data.toString(); });
    proc.on('close', () => {
      resolve(/Stream #\d+:\d+.*: Subtitle/i.test(output));
    });
    proc.on('error', () => resolve(false));
  });
});
