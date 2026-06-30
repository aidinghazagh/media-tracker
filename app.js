// SVG Icons
const Icons = {
  rewind: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/><text x="12" y="16" text-anchor="middle" font-size="7" font-weight="bold">10</text></svg>',
  play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  skip: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/><text x="12" y="16" text-anchor="middle" font-size="7" font-weight="bold">10</text></svg>',
  pause: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
  playLarge: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  pauseLarge: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
  volumeHigh: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>',
  volumeMute: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>',
  volumeLow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>',
  check: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  close: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  folder: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>',
  video: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>',
  music: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V4h-6z"/></svg>',
  rescan: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  arrow: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  search: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  edit: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  fullscreen: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
  sortAsc: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>',
  sortDesc: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>',
  openExternal: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  logo: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  subtitle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4zm2-2h4v-2H6v2zm0-4h12v-2H6v2zm0-4h12V6H6v2z"/></svg>',
  project: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>',
};

// Subtitle Parser
const SubtitleParser = {
  parseSRT(content) {
    const cues = [];
    const blocks = content.trim().split(/\n\s*\n/);
    for (const block of blocks) {
      const lines = block.trim().split('\n');
      if (lines.length < 3) continue;
      const timeMatch = lines[1].match(/(\d{2}):(\d{2}):(\d{2})[,.](\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})[,.](\d{3})/);
      if (!timeMatch) continue;
      const start = parseInt(timeMatch[1])*3600 + parseInt(timeMatch[2])*60 + parseInt(timeMatch[3]) + parseInt(timeMatch[4])/1000;
      const end = parseInt(timeMatch[5])*3600 + parseInt(timeMatch[6])*60 + parseInt(timeMatch[7]) + parseInt(timeMatch[8])/1000;
      const text = lines.slice(2).join('\n').replace(/<[^>]+>/g, '');
      cues.push({ start, end, text });
    }
    return cues;
  },

  parseVTT(content) {
    const cues = [];
    const lines = content.trim().split('\n');
    let i = 0;
    if (lines[0] && lines[0].startsWith('WEBVTT')) i = 1;
    const parseTime = (str) => {
      const parts = str.trim().split(':');
      if (parts.length === 3) return parseInt(parts[0])*3600 + parseInt(parts[1])*60 + parseFloat(parts[2]);
      if (parts.length === 2) return parseInt(parts[0])*60 + parseFloat(parts[1]);
      return 0;
    };
    while (i < lines.length) {
      const line = lines[i].trim();
      if (line.includes('-->')) {
        const timeParts = line.split('-->');
        if (timeParts.length === 2) {
          const start = parseTime(timeParts[0]);
          const end = parseTime(timeParts[1]);
          if (start > 0 || end > 0) {
            i++;
            let text = '';
            while (i < lines.length && lines[i].trim() !== '') {
              text += (text ? '\n' : '') + lines[i].replace(/<[^>]+>/g, '');
              i++;
            }
            if (text.trim()) cues.push({ start, end, text: text.trim() });
          }
        }
      }
      i++;
    }
    return cues;
  },

  parseASS(content) {
    const cues = [];
    const lines = content.split('\n');
    let inEvents = false;
    let format = [];
    for (const line of lines) {
      if (line.trim() === '[Events]') { inEvents = true; continue; }
      if (line.trim().startsWith('[') && line.trim() !== '[Events]') { inEvents = false; continue; }
      if (!inEvents) continue;
      if (line.startsWith('Format:')) {
        format = line.replace('Format:', '').split(',').map(s => s.trim());
        continue;
      }
      if (line.startsWith('Dialogue:')) {
        const parts = line.replace('Dialogue:', '').split(',');
        if (format.length === 0) continue;
        const data = {};
        for (let j = 0; j < format.length - 1 && j < parts.length; j++) data[format[j]] = parts[j];
        data.Text = parts.slice(format.length - 1).join(',');
        const start = this.parseASSTime(data.Start);
        const end = this.parseASSTime(data.End);
        const text = data.Text.replace(/\\N/g, '\n').replace(/\{[^}]*\}/g, '');
        if (start !== null && end !== null) cues.push({ start, end, text });
      }
    }
    return cues;
  },

  parseASSTime(timeStr) {
    if (!timeStr) return null;
    const match = timeStr.trim().match(/(\d+):(\d{2}):(\d{2})[.](\d{2})/);
    if (!match) return null;
    return parseInt(match[1])*3600 + parseInt(match[2])*60 + parseInt(match[3]) + parseInt(match[4])/100;
  },

  parse(content, ext) {
    switch(ext) {
      case '.srt': return this.parseSRT(content);
      case '.vtt': return this.parseVTT(content);
      case '.ass':
      case '.ssa': return this.parseASS(content);
      default: return [];
    }
  }
};



// Electron API wrapper
const API = {
  isElectron: typeof window.electronAPI !== 'undefined',

  async prompt(title, label, defaultValue) {
    if (this.isElectron) return window.electronAPI.inputDialog(title, label, defaultValue);
    return window.prompt(label || title, defaultValue || '');
  },

  async openFolder() {
    if (this.isElectron) return window.electronAPI.openFolder();
    return null;
  },

  async openFiles() {
    if (this.isElectron) return window.electronAPI.openFiles();
    return null;
  },

  async scanFolder(dirPath) {
    if (this.isElectron) return window.electronAPI.scanFolder(dirPath);
    return [];
  },

  async getFileUrl(filePath) {
    if (this.isElectron) return window.electronAPI.getFileUrl(filePath);
    return null;
  },

  async readFile(filePath) {
    if (this.isElectron) return window.electronAPI.readFile(filePath);
    return null;
  },

  async findSubtitles(dirPath, fileName) {
    if (this.isElectron) return window.electronAPI.findSubtitles(dirPath, fileName);
    return [];
  },

  async extractSubtitles(filePath) {
    if (this.isElectron) return window.electronAPI.extractSubtitles(filePath);
    return null;
  },

  async probeSubtitles(filePath) {
    if (this.isElectron) return window.electronAPI.probeSubtitles(filePath);
    return false;
  },
};

// Storage (localStorage)
const Storage = {
  data: null,
  _key: null,

  getKey() {
    return 'media-tracker-data';
  },

  async load() {
    this._key = this.getKey();
    const raw = localStorage.getItem(this._key);
    this.data = raw ? JSON.parse(raw) : { projects: {}, settings: { autoAdvance: true, lastProject: null }, projectOrder: [] };
    if (!this.data.projectOrder) this.data.projectOrder = Object.keys(this.data.projects);
    for (const p of Object.values(this.data.projects)) {
      if (!p.linkedFolder && p.path) p.linkedFolder = p.path;
      if (!p.fileOrder) p.fileOrder = Object.keys(p.files);
      for (const f of Object.values(p.files)) { if (!f.source) f.source = 'folder'; }
    }
    return this.data;
  },

  async save() {
    if (this.data) localStorage.setItem(this._key, JSON.stringify(this.data));
  },

  addProject(id, name, folderPath) {
    this.data.projects[id] = { id, name, path: folderPath || null, linkedFolder: folderPath || null, addedAt: new Date().toISOString(), files: {}, fileOrder: [] };
    this.data.projectOrder.push(id);
  },

  removeProject(id) {
    delete this.data.projects[id];
    this.data.projectOrder = this.data.projectOrder.filter(pid => pid !== id);
    if (this.data.settings.lastProject === id) this.data.settings.lastProject = null;
  },

  reorderProjects(fromIdx, toIdx) {
    const order = this.data.projectOrder;
    const [moved] = order.splice(fromIdx, 1);
    order.splice(toIdx, 0, moved);
  },

  addFile(projectId, fileInfo) {
    const project = this.data.projects[projectId];
    if (!project) return;
    const entry = {
      path: fileInfo.path, name: fileInfo.name, ext: fileInfo.ext,
      subfolder: fileInfo.subfolder || '', isVideo: fileInfo.isVideo, isAudio: fileInfo.isAudio,
      duration: 0, watched: 0, completed: false, lastWatched: null,
      addedAt: new Date().toISOString(), subtitles: fileInfo.subtitles || [],
      source: fileInfo.source || 'folder'
    };
    if (fileInfo._fullPath) entry._fullPath = fileInfo._fullPath;
    if (fileInfo.url) entry.url = fileInfo.url;
    project.files[fileInfo.path] = entry;
    if (!project.fileOrder) project.fileOrder = [];
    if (!project.fileOrder.includes(fileInfo.path)) project.fileOrder.push(fileInfo.path);
  },

  removeFile(projectId, filePath) {
    const project = this.data.projects[projectId];
    if (!project) return;
    delete project.files[filePath];
    if (project.fileOrder) project.fileOrder = project.fileOrder.filter(p => p !== filePath);
  },

  reorderFiles(projectId, fromPath, toPath) {
    const project = this.data.projects[projectId];
    if (!project) return;
    if (!project.fileOrder) project.fileOrder = Object.keys(project.files);
    const order = project.fileOrder;
    const fromIdx = order.indexOf(fromPath);
    const toIdx = order.indexOf(toPath);
    if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return;
    const [moved] = order.splice(fromIdx, 1);
    order.splice(toIdx, 0, moved);
  },

  getFileOrder(projectId) {
    const project = this.data.projects[projectId];
    if (!project) return [];
    if (!project.fileOrder) project.fileOrder = Object.keys(project.files);
    return project.fileOrder.filter(p => project.files[p]);
  },

  toggleCompleted(projectId, filePath) {
    const project = this.data.projects[projectId];
    if (!project || !project.files[filePath]) return;
    const file = project.files[filePath];
    file.completed = !file.completed;
    if (file.completed && file.duration > 0) file.watched = file.duration;
    else if (!file.completed) file.watched = 0;
    file.lastWatched = new Date().toISOString();
  },

  updateProgress(projectId, filePath, watched, duration) {
    const project = this.data.projects[projectId];
    if (!project || !project.files[filePath]) return;
    const file = project.files[filePath];
    file.watched = watched;
    file.duration = duration;
    file.lastWatched = new Date().toISOString();
    file.completed = (duration > 0 && watched / duration > 0.95);
  },

  getProject(id) { return this.data.projects[id]; },

  getProjects() {
    const order = this.data.projectOrder || Object.keys(this.data.projects);
    return order.filter(id => this.data.projects[id]).map(id => this.data.projects[id]);
  }
};

// Player Controller
const Player = {
  video: null, currentProject: null, currentFile: null, currentCues: [],
  activeSubtitleTrack: -1, subtitleTracks: [], isPlaying: false, saveInterval: null,
  speeds: [0.5, 1, 1.5, 1.75, 2, 3], currentSpeedIdx: 1,
  currentFileUrl: null,

  init() {
    this.video = document.getElementById('media-player');
    this.setupEvents();
  },

  setupEvents() {
    this.video.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.video.addEventListener('loadedmetadata', () => this.onMetadataLoaded());
    this.video.addEventListener('ended', () => this.onEnded());
    this.video.addEventListener('play', () => this.updatePlayButton(true));
    this.video.addEventListener('pause', () => this.updatePlayButton(false));

    let lastClickTime = 0;
    document.getElementById('player-container').addEventListener('click', (e) => {
      if (e.target.closest('#player-controls') || e.target.closest('#subtitle-display') || e.target.closest('#pip-overlay')) return;
      const now = Date.now();
      if (now - lastClickTime < 350) { this.togglePlay(); this.toggleFullscreen(); lastClickTime = 0; }
      else { this.togglePlay(); lastClickTime = now; }
    });

    document.getElementById('btn-rewind').addEventListener('click', () => this.video.currentTime = Math.max(0, this.video.currentTime - 10));
    document.getElementById('btn-play').addEventListener('click', () => this.togglePlay());
    document.getElementById('btn-skip').addEventListener('click', () => this.video.currentTime = Math.min(this.video.duration, this.video.currentTime + 10));
    document.getElementById('seek-bar').addEventListener('input', (e) => this.seek(e));
    document.getElementById('progress-bar').addEventListener('click', (e) => this.seekClick(e));
    document.getElementById('btn-volume').addEventListener('click', () => this.toggleMute());
    document.getElementById('volume-bar').addEventListener('input', (e) => this.setVolume(e.target.value / 100));
    this.setupSpeedControl();
    document.getElementById('btn-fullscreen').addEventListener('click', () => Player.toggleFullscreen());
    document.getElementById('btn-subtitle').addEventListener('click', (e) => this.toggleSubtitleMenu(e));
    document.getElementById('btn-load-subtitle').addEventListener('click', () => this.loadExternalSubtitle());

    const subOptions = document.getElementById('subtitle-options');
    subOptions.addEventListener('click', (e) => {
      const row = e.target.closest('.sub-option-row');
      if (!row) return;
      if (e.target.closest('.sub-delete')) return;
      const trackIdx = parseInt(row.dataset.track);
      if (!isNaN(trackIdx)) {
        this.setSubtitleTrack(trackIdx);
        subOptions.querySelectorAll('.sub-option-row').forEach(r => r.classList.remove('active'));
        row.classList.add('active');
      }
    });

    this.setupSubtitleSettings();
    document.getElementById('subtitle-menu').addEventListener('click', (e) => e.stopPropagation());
  },

  async loadFile(projectId, filePath) {
    this.currentProject = projectId;
    this.currentFile = filePath;
    this.seekPending = true;
    const project = Storage.getProject(projectId);
    const file = project.files[filePath];
    if (!file) return;

    if (this.currentFileUrl) { URL.revokeObjectURL(this.currentFileUrl); this.currentFileUrl = null; }
    let url;
    if (file.url) {
      url = file.url;
    } else if (file._fullPath) {
      url = await API.getFileUrl(file._fullPath);
    } else if (project.linkedFolder) {
      const dirPath = project._linkedDir || project.linkedFolder;
      const fullPath = dirPath + '/' + (file.subfolder ? file.subfolder + '/' : '') + file.name;
      url = await API.getFileUrl(fullPath);
    }
    if (!url) {
      document.getElementById('current-file-name').textContent = 'Unable to play — file not found';
      return;
    }
    this.currentFileUrl = url;
    this.video.src = url;
    this.video.playbackRate = 1;
    document.getElementById('speed-label').textContent = '1x';
    document.getElementById('current-file-name').textContent = file.name;

    this.subtitleTracks = [];
    this.currentCues = [];
    this.activeSubtitleTrack = -1;

    const subOptions = document.getElementById('subtitle-options');
    subOptions.innerHTML = '';
    this.buildSubtitleOffBtn(subOptions);

    let firstAutoTrack = -1;
    let allSubs = [...(file.subtitles || [])];

    // Find subtitles: try linked folder's subfolder, then file's own directory
    let subSearchDir = null;
    if (project.linkedFolder) {
      const baseDir = project._linkedDir || project.linkedFolder;
      subSearchDir = file.subfolder ? baseDir + '/' + file.subfolder : baseDir;
    } else if (file._fullPath) {
      subSearchDir = file._fullPath.replace(/[\\/][^\\/]+$/, '');
    }
    if (subSearchDir) {
      const foundSubs = await API.findSubtitles(subSearchDir, file.name);
      allSubs = [...new Set([...allSubs, ...foundSubs])];
      file.subtitles = allSubs;
      Storage.save();
    }

    // If no external subs found, try extracting embedded subtitles in background (local files only)
    if (allSubs.length === 0 && file._fullPath) {
      const ext = file._fullPath.toLowerCase();
      if (ext.endsWith('.mkv') || ext.endsWith('.mp4') || ext.endsWith('.avi')) {
        this._extractEmbeddedSubs(file._fullPath);
      }
    }

    for (let i = 0; i < allSubs.length; i++) {
      try {
        const subPath = allSubs[i];
        const content = await API.readFile(subPath);
        if (!content) continue;
        const ext = ('.' + subPath.split('.').pop()).toLowerCase();
        const cues = SubtitleParser.parse(content, ext);
        if (cues.length === 0) continue;
        const name = subPath.split(/[\\/]/).pop();
        this.subtitleTracks.push({ name, cues, filePath: subPath });
        const trackIdx = this.subtitleTracks.length - 1;
        this.buildSubtitleRow(subOptions, trackIdx, name, subPath);
        if (firstAutoTrack === -1) firstAutoTrack = trackIdx;
      } catch (err) { }
    }

    if (firstAutoTrack >= 0) {
      this.setSubtitleTrack(firstAutoTrack);
      subOptions.querySelector(`[data-track="${firstAutoTrack}"]`)?.classList.add('active');
      document.getElementById('btn-subtitle').classList.add('active');
    }

    this.video.load();
    this.startAutoSave();
  },

  async loadExternalSubtitle() {
    const filePaths = await API.openFiles();
    if (!filePaths || !filePaths.length) return;
    const filePath = filePaths[0];
    const content = await API.readFile(filePath);
    if (!content) return;
    const name = filePath.split(/[\\/]/).pop();
    const ext = ('.' + name.split('.').pop()).toLowerCase();
    const subData = { name, content, ext };
    const cues = SubtitleParser.parse(subData.content, subData.ext);
    if (cues.length === 0) return;

    this.subtitleTracks.push({ name: subData.name, cues, filePath: subData.name });
    const trackIdx = this.subtitleTracks.length - 1;
    const subOptions = document.getElementById('subtitle-options');
    this.buildSubtitleRow(subOptions, trackIdx, subData.name, subData.name);

    this.setSubtitleTrack(trackIdx);
    subOptions.querySelectorAll('.sub-option-row').forEach(r => r.classList.remove('active'));
    subOptions.querySelector(`[data-track="${trackIdx}"]`)?.classList.add('active');
    document.getElementById('subtitle-menu').style.display = 'none';
  },

  removeSubtitle(trackIdx, filePath) {
    this.subtitleTracks[trackIdx] = null;
    if (this.activeSubtitleTrack === trackIdx) this.setSubtitleTrack(-1);
    this.currentCues = [];
    document.getElementById('subtitle-display').innerHTML = '';
  },

  setSubtitleTrack(idx) {
    this.activeSubtitleTrack = idx;
    this.currentCues = idx >= 0 && this.subtitleTracks[idx] ? this.subtitleTracks[idx].cues : [];
    document.getElementById('btn-subtitle').classList.toggle('active', idx >= 0);
  },

  closeAllMenus() {
    document.getElementById('subtitle-menu').style.display = 'none';
    document.getElementById('speed-popup').style.display = 'none';
  },

  buildSubtitleOffBtn(container) {
    const row = document.createElement('div');
    row.className = 'sub-option-row';
    row.dataset.track = '-1';
    row.textContent = 'Off';
    row.addEventListener('click', (e) => {
      e.stopPropagation();
      this.setSubtitleTrack(-1);
      container.querySelectorAll('.sub-option-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
    container.appendChild(row);
  },

  buildSubtitleRow(container, trackIdx, name, filePath) {
    const row = document.createElement('div');
    row.className = 'sub-option-row';
    row.dataset.track = String(trackIdx);
    const nameSpan = document.createElement('span');
    nameSpan.className = 'sub-option-name';
    nameSpan.textContent = name;
    nameSpan.addEventListener('click', (e) => {
      e.stopPropagation();
      this.setSubtitleTrack(trackIdx);
      container.querySelectorAll('.sub-option-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
    const delBtn = document.createElement('span');
    delBtn.className = 'sub-delete';
    delBtn.innerHTML = Icons.close;
    delBtn.title = 'Remove subtitle';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.removeSubtitle(trackIdx, filePath);
      if (this.activeSubtitleTrack === trackIdx) {
        this.setSubtitleTrack(-1);
        container.querySelector('[data-track="-1"]')?.classList.add('active');
      }
      row.remove();
    });
    row.appendChild(nameSpan);
    row.appendChild(delBtn);
    container.appendChild(row);
  },

  toggleSubtitleMenu(e) {
    e.stopPropagation();
    const menu = document.getElementById('subtitle-menu');
    const isOpen = menu.style.display !== 'none';
    this.closeAllMenus();
    if (!isOpen) menu.style.display = 'block';
  },

  subSettings: { size: 'medium', textColor: '#ffffff', bgColor: '#000000', bgOpacity: 80 },

  setupSubtitleSettings() {
    document.querySelectorAll('.sub-size-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.sub-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.subSettings.size = btn.dataset.size;
        this.applySubtitleStyle();
      });
    });
    document.getElementById('sub-text-color').addEventListener('input', (e) => { e.stopPropagation(); this.subSettings.textColor = e.target.value; this.applySubtitleStyle(); });
    document.getElementById('sub-bg-color').addEventListener('input', (e) => { e.stopPropagation(); this.subSettings.bgColor = e.target.value; this.applySubtitleStyle(); });
    document.getElementById('sub-bg-opacity').addEventListener('input', (e) => { e.stopPropagation(); this.subSettings.bgOpacity = parseInt(e.target.value); this.applySubtitleStyle(); });
    this.applySubtitleStyle();
  },

  applySubtitleStyle() {
    const display = document.getElementById('subtitle-display');
    const isFullscreen = !!document.fullscreenElement;
    const scale = isFullscreen ? 1.5 : 1;
    const baseSizes = { small: 16, medium: 22, large: 30 };
    const base = baseSizes[this.subSettings.size] || 22;
    display.style.setProperty('--sub-size', Math.round(base * scale) + 'px');
    const r = parseInt(this.subSettings.bgColor.slice(1,3), 16);
    const g = parseInt(this.subSettings.bgColor.slice(3,5), 16);
    const b = parseInt(this.subSettings.bgColor.slice(5,7), 16);
    const alpha = this.subSettings.bgOpacity / 100;
    display.style.setProperty('--sub-bg', `rgba(${r},${g},${b},${alpha})`);
    display.style.setProperty('--sub-color', this.subSettings.textColor);
  },

  togglePlay() { if (!this.video.src || this.video.src === location.href) return; if (this.video.paused) this.video.play().catch(() => {}); else this.video.pause(); },
  updatePlayButton(playing) { this.isPlaying = playing; document.getElementById('btn-play').innerHTML = playing ? Icons.pause : Icons.play; },

  onTimeUpdate() {
    const current = this.video.currentTime;
    const duration = this.video.duration || 0;
    const progress = duration ? (current / duration) * 100 : 0;
    document.getElementById('progress-played').style.width = progress + '%';
    document.getElementById('seek-bar').value = progress * 10;
    document.getElementById('time-display').textContent = this.formatTime(current) + ' / ' + this.formatTime(duration);
    this.updateSubtitles(current);
    if (this.seekPending) return;
    if (this.currentProject && this.currentFile) Storage.updateProgress(this.currentProject, this.currentFile, current, duration);
  },

  updateSubtitles(time) {
    const display = document.getElementById('subtitle-display');
    if (this.currentCues.length === 0) { display.innerHTML = ''; return; }
    const active = this.currentCues.filter(c => time >= c.start && time <= c.end);
    display.innerHTML = active.length > 0 ? active.map(c => `<span>${c.text}</span>`).join('<br>') : '';
  },

  onMetadataLoaded() {
    const duration = this.video.duration;
    const file = Storage.data.projects[this.currentProject]?.files[this.currentFile];
    if (file) {
      if (file.duration !== duration) { file.duration = duration; Storage.save(); App.updateFileList(); App.updateDashboard(); }
      if (file.watched > 0 && file.watched < duration * 0.95) this.video.currentTime = file.watched;
    }
    this.seekPending = false;
  },

  onEnded() {
    Storage.save();
    App.updateFileList();
    App.updateDashboard();
    if (Storage.data.settings.autoAdvance) App.playNextFile();
  },

  seek(e) { this.video.currentTime = (e.target.value / 1000) * this.video.duration; },
  seekClick(e) { const rect = e.currentTarget.getBoundingClientRect(); this.video.currentTime = ((e.clientX - rect.left) / rect.width) * this.video.duration; },
  toggleMute() { this.video.muted = !this.video.muted; document.getElementById('btn-volume').innerHTML = this.video.muted ? Icons.volumeMute : Icons.volumeHigh; },
  setVolume(val) { this.video.volume = val; this.video.muted = val === 0; document.getElementById('btn-volume').innerHTML = val === 0 ? Icons.volumeMute : val < 0.5 ? Icons.volumeLow : Icons.volumeHigh; },

  setupSpeedControl() {
    const label = document.getElementById('speed-label');
    const popup = document.getElementById('speed-popup');
    label.addEventListener('click', (e) => { e.stopPropagation(); const isOpen = popup.style.display === 'flex'; this.closeAllMenus(); if (!isOpen) { popup.style.display = 'flex'; this.updateSpeedButtons(); } });
    popup.addEventListener('click', (e) => { const btn = e.target.closest('.speed-btn'); if (!btn) return; this.applySpeed(parseFloat(btn.dataset.speed)); popup.style.display = 'none'; });
    document.addEventListener('click', (e) => { if (!e.target.closest('#speed-control') && !e.target.closest('#subtitle-menu')) this.closeAllMenus(); });
  },

  updateSpeedButtons() { document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.toggle('active', parseFloat(btn.dataset.speed) === this.video.playbackRate)); },
  applySpeed(speed) { this.video.playbackRate = speed; document.getElementById('speed-label').textContent = speed + 'x'; },
  setSpeed(idx) { if (idx >= 0 && idx < this.speeds.length) this.applySpeed(this.speeds[idx]); },
  cycleSpeed() { const current = this.video.playbackRate; const idx = this.speeds.indexOf(current); this.applySpeed(this.speeds[idx === -1 ? 1 : (idx + 1) % this.speeds.length]); },

  toggleFullscreen() {
    const container = document.getElementById('player-container');
    if (document.fullscreenElement) {
      document.exitFullscreen();
      if (screen.orientation) screen.orientation.unlock().catch(() => {});
    } else {
      container.requestFullscreen().then(() => {
        if (screen.orientation && this.video.videoWidth > this.video.videoHeight) {
          screen.orientation.lock('landscape').catch(() => {});
        }
      }).catch(() => {});
    }
    setTimeout(() => App.applySubtitleStyle(), 150);
  },

  async _extractEmbeddedSubs(mediaPath) {
    const subOptions = document.getElementById('subtitle-options');
    const loadingRow = document.createElement('div');
    loadingRow.className = 'sub-option-row';
    loadingRow.textContent = 'Loading embedded subtitles...';
    loadingRow.style.cssText = 'color:var(--text-muted);font-size:12px;padding:4px 12px;';
    subOptions.appendChild(loadingRow);
    try {
      const embedded = await API.extractSubtitles(mediaPath);
      loadingRow.remove();
      if (embedded && embedded.content) {
        const cues = SubtitleParser.parse(embedded.content, embedded.ext);
        if (cues.length > 0) {
          this.subtitleTracks.push({ name: 'Embedded', cues, filePath: 'embedded' });
          const trackIdx = this.subtitleTracks.length - 1;
          this.buildSubtitleRow(subOptions, trackIdx, 'Embedded', 'embedded');
          if (this.activeSubtitleTrack === -1) {
            this.setSubtitleTrack(trackIdx);
            subOptions.querySelector(`[data-track="${trackIdx}"]`)?.classList.add('active');
            document.getElementById('btn-subtitle').classList.add('active');
          }
        }
      }
    } catch (e) { loadingRow.remove(); }
  },

  startAutoSave() { if (this.saveInterval) clearInterval(this.saveInterval); this.saveInterval = setInterval(() => Storage.save(), 5000); },
  formatTime(seconds) { if (isNaN(seconds)) return '0:00'; const h = Math.floor(seconds / 3600); const m = Math.floor((seconds % 3600) / 60); const s = Math.floor(seconds % 60); return h > 0 ? `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}` : `${m}:${s.toString().padStart(2,'0')}`; }
};

// App Controller
const App = {
  currentProjectId: null, sortMode: 'name', sortAsc: true, searchQuery: '', hideWatched: false,

  async init() {
    await Storage.load();
    let isNew = false;
    if (Object.keys(Storage.data.projects).length === 0) {
      Storage.addProject('default', 'Default', null);
      Storage.save();
      isNew = true;
    }
    this.initIcons();
    Player.init();
    this.setupUI();
    this.setupPiP();
    this.renderProjects();
    this.setupKeyboard();
    document.getElementById('app').style.display = 'flex';
    if (isNew) {
      this.selectProject('default');
    } else if (Storage.data.settings.lastProject && Storage.data.projects[Storage.data.settings.lastProject]) {
      this.selectProject(Storage.data.settings.lastProject);
    }
  },



  initIcons() {
    document.getElementById('app-logo').innerHTML = Icons.logo;
    document.getElementById('btn-rescan').innerHTML = Icons.rescan + ' Rescan';
    document.getElementById('welcome-icon').innerHTML = Icons.video;
    document.getElementById('pip-play').innerHTML = Icons.playLarge;
    document.getElementById('pip-fullscreen').innerHTML = Icons.fullscreen;
    document.getElementById('btn-rewind').innerHTML = Icons.rewind;
    document.getElementById('btn-play').innerHTML = Icons.play;
    document.getElementById('btn-skip').innerHTML = Icons.skip;
    document.getElementById('btn-subtitle').innerHTML = Icons.subtitle;
    document.getElementById('btn-volume').innerHTML = Icons.volumeHigh;
    document.getElementById('btn-fullscreen').innerHTML = Icons.fullscreen;
    document.getElementById('sort-direction').innerHTML = Icons.sortAsc;
    document.getElementById('ctx-open-project').innerHTML = Icons.folder + ' Open Project';
    document.getElementById('ctx-open-folder').innerHTML = Icons.openExternal + ' Open Folder';
    document.getElementById('ctx-rename-project').innerHTML = Icons.edit + ' Rename';
    document.getElementById('ctx-delete-project').innerHTML = Icons.trash + ' Delete';
    document.getElementById('ctx-play-file').innerHTML = Icons.play + ' Play';
    document.getElementById('ctx-rename-file').innerHTML = Icons.edit + ' Rename';
    document.getElementById('ctx-remove-file').innerHTML = Icons.trash + ' Remove';
  },

  setupUI() {
    document.getElementById('btn-add-project').addEventListener('click', () => this.addProject());
    document.getElementById('btn-start').addEventListener('click', () => this.addProject());
    document.getElementById('btn-rescan').addEventListener('click', () => this.rescanProject());
    document.getElementById('sort-select').addEventListener('change', (e) => { this.sortMode = e.target.value; this.updateFileList(); });
    document.getElementById('sort-direction').addEventListener('click', () => { this.sortAsc = !this.sortAsc; document.getElementById('sort-direction').innerHTML = this.sortAsc ? Icons.sortAsc : Icons.sortDesc; this.updateFileList(); });

    document.getElementById('ctx-open-project').addEventListener('click', () => { if (this.contextProjectId) this.selectProject(this.contextProjectId); this.hideContextMenu(); });
    document.getElementById('ctx-rename-project').addEventListener('click', () => { if (this.contextProjectId) this.renameProject(this.contextProjectId); this.hideContextMenu(); });
    document.getElementById('ctx-delete-project').addEventListener('click', () => { if (this.contextProjectId) this.removeProject(this.contextProjectId); this.hideContextMenu(); });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#project-context-menu')) this.hideContextMenu();
      if (!e.target.closest('#file-context-menu')) this.hideFileContextMenu();
    });
    document.getElementById('ctx-play-file').addEventListener('click', () => {
      const first = [...this._selectedFiles][0];
      if (first) this.playFile(first);
      this.hideFileContextMenu();
    });
    document.getElementById('ctx-rename-file').addEventListener('click', () => {
      const first = [...this._selectedFiles][0];
      if (first) this.renameFile(first);
      this.hideFileContextMenu();
    });
    document.getElementById('ctx-remove-file').addEventListener('click', () => {
      this.removeFile();
      this.hideFileContextMenu();
    });
    document.getElementById('search-input').addEventListener('input', (e) => { this.searchQuery = e.target.value.toLowerCase(); this.updateFileList(); });
    document.getElementById('hide-watched').addEventListener('change', (e) => { this.hideWatched = e.target.checked; this.updateFileList(); });
    document.addEventListener('click', (e) => { if (!e.target.closest('#subtitle-control')) document.getElementById('subtitle-menu').style.display = 'none'; });
    document.getElementById('btn-link-folder').addEventListener('click', () => this.linkFolder());
    document.getElementById('btn-add-files').addEventListener('click', () => this.addFiles());
    document.getElementById('btn-add-link').addEventListener('click', () => this.addLink());
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    document.getElementById('btn-sidebar-toggle').addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-open');
      overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('sidebar-open');
      overlay.classList.remove('active');
    });
    sidebar.addEventListener('click', (e) => {
      if (e.target.closest('.project-item') && window.innerWidth <= 768) {
        sidebar.classList.remove('sidebar-open');
        overlay.classList.remove('active');
      }
    });
    const projectView = document.getElementById('project-view');
    projectView.addEventListener('dragover', (e) => {
      if (e.dataTransfer.types.includes('text/file-path')) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      projectView.classList.add('drag-hover');
    });
    projectView.addEventListener('dragleave', (e) => { if (!projectView.contains(e.relatedTarget)) projectView.classList.remove('drag-hover'); });
    projectView.addEventListener('drop', async (e) => {
      projectView.classList.remove('drag-hover');
      if (e.dataTransfer.types.includes('text/file-path')) return;
      e.preventDefault();
      if (!this.currentProjectId) return;
      await this.handleFileDrop(e);
    });
    const projectList = document.getElementById('project-list');
    projectList.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; const item = e.target.closest('.project-item'); projectList.querySelectorAll('.project-item').forEach(i => i.classList.remove('drag-over')); if (item) item.classList.add('drag-over'); });
    projectList.addEventListener('dragleave', (e) => { if (!projectList.contains(e.relatedTarget)) projectList.querySelectorAll('.project-item').forEach(i => i.classList.remove('drag-over')); });
    projectList.addEventListener('drop', async (e) => {
      e.preventDefault();
      projectList.querySelectorAll('.project-item').forEach(i => i.classList.remove('drag-over'));
      const targetItem = e.target.closest('.project-item');
      const filePaths = [...e.dataTransfer.files].map(f => f.path).filter(Boolean);
      if (filePaths.length === 0) return;
      if (targetItem) {
        const pid = targetItem.dataset.id;
        if (!pid) return;
        await this._addFilesToProject(pid, filePaths);
      } else {
        for (const fp of filePaths) {
          await this._addFolderAsProject(fp);
        }
      }
    });
  },

  setupPiP() {
    const playerSection = document.getElementById('player-section');
    const pipPlay = document.getElementById('pip-play');
    const pipFullscreen = document.getElementById('pip-fullscreen');
    const projectView = document.getElementById('project-view');
    let pipTransitioning = false;
    const PIP_ANIM_MS = 100;

    const isPiP = () => playerSection.classList.contains('pip-active') || playerSection.classList.contains('pip-shrinking');
    const transitionToPiP = () => { if (isPiP() || pipTransitioning) return; pipTransitioning = true; playerSection.classList.add('pip-shrinking'); setTimeout(() => { playerSection.classList.remove('pip-shrinking'); playerSection.classList.add('pip-active'); pipTransitioning = false; }, PIP_ANIM_MS); };
    const transitionFromPiP = () => { if (!isPiP() && !playerSection.classList.contains('pip-active')) return; if (pipTransitioning) return; pipTransitioning = true; playerSection.classList.remove('pip-active'); playerSection.classList.add('pip-expanding'); setTimeout(() => { playerSection.classList.remove('pip-expanding'); pipTransitioning = false; }, PIP_ANIM_MS); };

    let suppressCheck = false;
    const checkPiP = () => { if (!Player.currentFile || pipTransitioning || suppressCheck) return; const sectionRect = playerSection.getBoundingClientRect(); const shouldPiP = sectionRect.bottom < 0; if (shouldPiP && !isPiP()) transitionToPiP(); else if (!shouldPiP && (isPiP() || playerSection.classList.contains('pip-expanding'))) transitionFromPiP(); };
    projectView.addEventListener('scroll', checkPiP, { passive: true });

    const returnToMain = (callback) => { suppressCheck = true; playerSection.classList.remove('pip-active', 'pip-shrinking', 'pip-expanding'); pipTransitioning = false; playerSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(() => { suppressCheck = false; if (callback) callback(); }, 500); };

    pipPlay.addEventListener('click', (e) => { e.stopPropagation(); returnToMain(() => Player.togglePlay()); });
    pipFullscreen.addEventListener('click', (e) => { e.stopPropagation(); returnToMain(() => { if (!Player.isPlaying) Player.video.play(); document.getElementById('player-container').requestFullscreen(); setTimeout(() => this.applySubtitleStyle(), 150); }); });

    Player.video.addEventListener('play', () => { pipPlay.innerHTML = Icons.pauseLarge; });
    Player.video.addEventListener('pause', () => { pipPlay.innerHTML = Icons.playLarge; });

    document.addEventListener('fullscreenchange', () => {
      setTimeout(() => this.applySubtitleStyle(), 100);
      if (!document.fullscreenElement) {
        if (screen.orientation) screen.orientation.unlock().catch(() => {});
        if (Player.currentFile) { const rect = playerSection.getBoundingClientRect(); if (rect.bottom < 0) transitionToPiP(); }
      }
    });
  },

  setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      switch(e.key) {
        case ' ': e.preventDefault(); Player.togglePlay(); break;
        case 'ArrowLeft': Player.video.currentTime -= 10; break;
        case 'ArrowRight': Player.video.currentTime += 10; break;
        case 'ArrowUp': e.preventDefault(); Player.setVolume(Math.min(1, Player.video.volume + 0.1)); document.getElementById('volume-bar').value = Player.video.volume * 100; break;
        case 'ArrowDown': e.preventDefault(); Player.setVolume(Math.max(0, Player.video.volume - 0.1)); document.getElementById('volume-bar').value = Player.video.volume * 100; break;
        case 'n': case 'N': this.playNextFile(); break;
        case 'p': case 'P': this.playPrevFile(); break;
        case 'f': case 'F': Player.toggleFullscreen(); break;
        case 'c': case 'C': this.cycleSubtitle(); break;
        case '-': Player.setSpeed(Math.max(0, Player.currentSpeedIdx - 1)); break;
        case '+': Player.setSpeed(Math.min(Player.speeds.length - 1, Player.currentSpeedIdx + 1)); break;
        case '=': Player.setSpeed(1); break;
      }
    });
  },

  cycleSubtitle() {
    if (Player.subtitleTracks.length === 0) return;
    const next = Player.activeSubtitleTrack + 1;
    if (next >= Player.subtitleTracks.length) Player.setSubtitleTrack(-1);
    else Player.setSubtitleTrack(next);
    const subOptions = document.getElementById('subtitle-options');
    subOptions.querySelectorAll('.sub-option-row').forEach(r => r.classList.toggle('active', parseInt(r.dataset.track) === Player.activeSubtitleTrack));
  },

  async addProject() {
    const name = await API.prompt('New Project', 'Project name:');
    if (!name || !name.trim()) return;
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    Storage.addProject(id, name.trim(), null);
    await Storage.save();
    this.renderProjects();
    this.selectProject(id);
  },

  async linkFolder() {
    try {
      if (!this.currentProjectId) return;
      const project = Storage.getProject(this.currentProjectId);
      if (!project) return;
      const dirPath = await API.openFolder();
      if (!dirPath) return;
      project.linkedFolder = dirPath;
      project._linkedDir = dirPath;
      const list = document.getElementById('file-list');
      list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Loading files...</div>';
      const files = await API.scanFolder(dirPath);
      for (const file of files) {
        if (!project.files[file.path]) {
          file.source = 'folder';
          file._fullPath = file.fullPath;
          Storage.addFile(this.currentProjectId, file);
        }
      }
      await Storage.save();
      document.getElementById('welcome-screen').style.display = 'none';
      document.getElementById('project-view').style.display = 'block';
      document.getElementById('btn-rescan').style.display = '';
      this.renderProjects();
      this.updateFileList();
      this.updateDashboard();
      this.loadDurations(this.currentProjectId);
    } catch (err) {
      console.error('linkFolder error:', err);
    }
  },

  async addLink() {
    if (!this.currentProjectId) return;
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const url = await API.prompt('Add Link', 'Enter video URL:');
    if (!url || !url.trim()) return;
    const trimmed = url.trim();
    let name = trimmed.split('/').pop().split('?')[0];
    try { name = decodeURIComponent(name); } catch (e) {}
    if (!name) name = 'Stream';
    const ext = ('.' + name.split('.').pop()).toLowerCase();
    const videoExts = ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.flv', '.wmv', '.m4v'];
    const audioExts = ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a'];
    const isVideo = videoExts.includes(ext);
    const isAudio = audioExts.includes(ext);
    const filePath = name;
    if (!project.files[filePath]) {
      Storage.addFile(this.currentProjectId, {
        name, path: filePath, ext, subfolder: '',
        isVideo, isAudio: isAudio || (!isVideo && !isAudio),
        subtitles: [], source: 'url'
      });
    }
    project.files[filePath].url = trimmed;
    await Storage.save();
    this.updateFileList();
    this.updateDashboard();
  },

  async addFiles() {
    if (!this.currentProjectId) return;
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const filePaths = await API.openFiles();
    if (!filePaths) return;
    const videoExts = ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.flv', '.wmv', '.m4v'];
    const audioExts = ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a'];
    const subExts = ['.srt', '.vtt', '.ass', '.ssa', '.sub'];
    const langs = ['en', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'zh', 'ar'];
    const addedVideos = [];
    const pickedSubs = [];
    for (const fp of filePaths) {
      const name = fp.split(/[\\/]/).pop();
      const ext = ('.' + name.split('.').pop()).toLowerCase();
      if (subExts.includes(ext)) {
        pickedSubs.push({ name, path: fp });
      } else if ([...videoExts, ...audioExts].includes(ext)) {
        if (project.files[name]) continue;
        Storage.addFile(this.currentProjectId, {
          name, path: name, ext, subfolder: '',
          isVideo: videoExts.includes(ext), isAudio: audioExts.includes(ext),
          subtitles: [], source: 'manual', _fullPath: fp
        });
        if (videoExts.includes(ext)) addedVideos.push({ name, path: name });
      }
    }
    if (pickedSubs.length > 0 && addedVideos.length > 0) {
      this._matchSubtitles(this.currentProjectId, addedVideos, pickedSubs);
    }
    await Storage.save();
    this.updateFileList();
    this.updateDashboard();
    this.loadDurations(this.currentProjectId);
  },

  async handleFileDrop(e) {
    if (!this.currentProjectId) return;
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const videoExts = ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.flv', '.wmv', '.m4v'];
    const audioExts = ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a'];
    const subExts = ['.srt', '.vtt', '.ass', '.ssa', '.sub'];
    const allMediaExts = [...videoExts, ...audioExts];
    const droppedSubs = [];
    const addedVideos = [];
    for (const file of e.dataTransfer.files) {
      const filePath = file.path;
      if (!filePath) continue;
      const ext = ('.' + file.name.split('.').pop()).toLowerCase();
      if (subExts.includes(ext)) {
        droppedSubs.push({ name: file.name, path: filePath });
        continue;
      }
      if (!allMediaExts.includes(ext)) continue;
      if (project.files[file.name]) continue;
      Storage.addFile(this.currentProjectId, {
        name: file.name, path: file.name, ext, subfolder: '',
        isVideo: videoExts.includes(ext), isAudio: audioExts.includes(ext),
        subtitles: [], source: 'manual', _fullPath: filePath
      });
      if (videoExts.includes(ext)) addedVideos.push({ name: file.name, path: file.name });
    }
    if (droppedSubs.length > 0 && addedVideos.length > 0) {
      this._matchSubtitles(this.currentProjectId, addedVideos, droppedSubs);
    }
    await Storage.save();
    this.updateFileList();
    this.updateDashboard();
    this.loadDurations(this.currentProjectId);
  },

  async _addFolderEntryToProject(projectId, dirPath) {
    const project = Storage.getProject(projectId);
    if (!project) return;
    const files = await API.scanFolder(dirPath);
    for (const file of files) {
      if (!project.files[file.path]) {
        file.source = 'folder';
        file._fullPath = file.fullPath;
        Storage.addFile(projectId, file);
      }
    }
    await Storage.save();
    if (this.currentProjectId === projectId) { this.updateFileList(); this.updateDashboard(); }
    this.loadDurations(projectId);
  },

  async _addFolderAsProject(dirPath) {
    const name = dirPath.split(/[\\/]/).pop();
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    Storage.addProject(id, name, null);
    const project = Storage.getProject(id);
    project.linkedFolder = dirPath;
    project._linkedDir = dirPath;
    await this._addFolderEntryToProject(id, dirPath);
    this.renderProjects();
    this.selectProject(id);
  },

  async _addFilesToProject(projectId, filePaths) {
    const videoExts = ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.flv', '.wmv', '.m4v'];
    const audioExts = ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a'];
    const project = Storage.getProject(projectId);
    if (!project) return;
    for (const fp of filePaths) {
      const name = fp.split(/[\\/]/).pop();
      const ext = ('.' + name.split('.').pop()).toLowerCase();
      if (![...videoExts, ...audioExts].includes(ext)) continue;
      if (project.files[name]) continue;
      Storage.addFile(projectId, {
        name, path: name, ext, subfolder: '',
        isVideo: videoExts.includes(ext), isAudio: audioExts.includes(ext),
        subtitles: [], source: 'manual', _fullPath: fp
      });
    }
    await Storage.save();
    if (this.currentProjectId === projectId) { this.updateFileList(); this.updateDashboard(); }
    this.loadDurations(projectId);
  },

  removeProject(id) {
    if (!confirm('Remove this project? Progress will be lost.')) return;
    Storage.removeProject(id);
    Storage.save();
    if (this.currentProjectId === id) {
      const remaining = Storage.getProjects();
      if (remaining.length > 0) this.selectProject(remaining[0].id);
      else {
        this.currentProjectId = null;
        Player.video.pause(); Player.video.src = ''; Player.currentFile = null;
        document.getElementById('current-file-name').textContent = 'No file selected';
        document.getElementById('welcome-screen').style.display = 'flex';
        document.getElementById('project-view').style.display = 'none';
      }
    }
    this.renderProjects();
  },

  async rescanProject() {
    if (!this.currentProjectId) return;
    const project = Storage.getProject(this.currentProjectId);
    if (!project || !project.linkedFolder) return;
    const dirPath = project._linkedDir || project.linkedFolder;
    const files = await API.scanFolder(dirPath);
    for (const file of files) {
      if (!project.files[file.path]) {
        file.source = 'folder';
        file._fullPath = file.fullPath;
        Storage.addFile(this.currentProjectId, file);
      }
    }
    await Storage.save();
    this.updateFileList();
    this.updateDashboard();
    this.loadDurations(this.currentProjectId);
  },

  async selectProject(id) {
    if (this.currentProjectId !== id) { Player.video.pause(); Player.video.src = ''; Player.currentFile = null; }
    this.currentProjectId = id;
    Storage.data.settings.lastProject = id;
    Storage.save();
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('project-view').style.display = 'block';
    const project = Storage.getProject(id);
    document.getElementById('btn-rescan').style.display = project && project.linkedFolder ? '' : 'none';
    this.renderProjects();
    this.updateFileList();
    this.updateDashboard();
    this.loadDurations(id);
    this.autoLoadUnfinished(id);
  },

  autoLoadUnfinished(projectId) {
    const project = Storage.getProject(projectId);
    if (!project) return;
    const files = Object.values(project.files).sort((a,b) => { const fc = (a.subfolder || '').localeCompare(b.subfolder || ''); return fc !== 0 ? fc : a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }); });
    const lastWatched = files.filter(f => f.lastWatched && !f.completed).sort((a,b) => new Date(b.lastWatched) - new Date(a.lastWatched));
    const target = lastWatched[0] || files.find(f => !f.completed) || files[0];
    if (target) Player.loadFile(this.currentProjectId, target.path);
  },

  durationLoading: false, _durationLoadId: 0,

  _getDuration(url) {
    return new Promise((resolve) => {
      const v = document.createElement('video');
      v.preload = 'metadata';
      v.muted = true;
      const timeout = setTimeout(() => { v.src = ''; URL.revokeObjectURL(url); resolve(0); }, 5000);
      v.onloadedmetadata = () => { clearTimeout(timeout); const d = v.duration; v.src = ''; URL.revokeObjectURL(url); resolve(isFinite(d) && d > 0 ? d : 0); };
      v.onerror = () => { clearTimeout(timeout); v.src = ''; URL.revokeObjectURL(url); resolve(0); };
      v.src = url;
    });
  },

  async loadDurations(projectId) {
    this._durationLoadId++;
    const loadId = this._durationLoadId;
    const project = Storage.getProject(projectId);
    if (!project) return;
    const filesToLoad = Object.values(project.files).filter(f => f.duration === 0);
    if (filesToLoad.length === 0) return;

    const BATCH = 3;
    let dirty = false;
    let lastRender = 0;

    for (let i = 0; i < filesToLoad.length; i += BATCH) {
      if (this._durationLoadId !== loadId) break;
      const batch = filesToLoad.slice(i, i + BATCH);
      const results = await Promise.all(batch.map(async (file) => {
        try {
          let url;
          if (file.url) {
            url = file.url;
          } else if (file._fullPath) {
            url = await API.getFileUrl(file._fullPath);
          } else if (project.linkedFolder) {
            const dirPath = project._linkedDir || project.linkedFolder;
            const fullPath = dirPath + '/' + (file.subfolder ? file.subfolder + '/' : '') + file.name;
            url = await API.getFileUrl(fullPath);
          }
          if (!url) return null;
          const dur = await this._getDuration(url);
          return dur > 0 ? { path: file.path, dur } : null;
        } catch (e) { return null; }
      }));
      for (const r of results) {
        if (!r) continue;
        const f = Storage.data.projects[projectId]?.files[r.path];
        if (f && f.duration === 0) { f.duration = r.dur; dirty = true; }
      }
      if (dirty && Date.now() - lastRender > 1000) {
        lastRender = Date.now();
        if (this.currentProjectId === projectId) { this.updateFileList(); this.updateDashboard(); }
      }
      await new Promise(r => setTimeout(r, 0));
    }

    if (dirty) {
      Storage.save();
      if (this.currentProjectId === projectId) { this.updateFileList(); this.updateDashboard(); }
    }
  },

  contextProjectId: null,
  contextFilePath: null,

  renderProjects() {
    const list = document.getElementById('project-list');
    const projects = Storage.getProjects();
    list.innerHTML = '';

    for (let idx = 0; idx < projects.length; idx++) {
      const project = projects[idx];
      const files = Object.values(project.files);
      const completed = files.filter(f => f.completed).length;
      const progress = files.length > 0 ? Math.round((completed / files.length) * 100) : 0;

      const div = document.createElement('div');
      div.className = 'project-item' + (this.currentProjectId === project.id ? ' active' : '');
      div.dataset.id = project.id;
      div.dataset.idx = idx;
      div.draggable = true;
      const pathText = project.linkedFolder || (files.length > 0 ? files.length + ' files' : 'No folder linked');
      div.innerHTML = `
        <span class="project-icon">${Icons.project}</span>
        <div class="project-info">
          <div class="project-name">${project.name}</div>
          <div class="project-path">${pathText}</div>
        </div>
        <div class="project-progress" style="--progress: ${progress}%">${progress}%</div>
      `;
      div.addEventListener('click', () => this.selectProject(project.id));
      div.addEventListener('contextmenu', (e) => { e.preventDefault(); this.showProjectContextMenu(e.clientX, e.clientY, project.id); });
      div.addEventListener('dragstart', (e) => { div.classList.add('dragging'); e.dataTransfer.setData('text/plain', idx); e.dataTransfer.effectAllowed = 'move'; });
      div.addEventListener('dragend', () => { div.classList.remove('dragging'); list.querySelectorAll('.project-item').forEach(item => item.classList.remove('drag-over')); });
      div.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; const dragging = list.querySelector('.dragging'); if (dragging && dragging !== div) div.classList.add('drag-over'); });
      div.addEventListener('dragleave', () => { div.classList.remove('drag-over'); });
      div.addEventListener('drop', (e) => { e.preventDefault(); div.classList.remove('drag-over'); const fromIdx = parseInt(e.dataTransfer.getData('text/plain')); const toIdx = parseInt(div.dataset.idx); if (fromIdx !== toIdx) { Storage.reorderProjects(fromIdx, toIdx); Storage.save(); this.renderProjects(); } });
      list.appendChild(div);
    }
  },

  showProjectContextMenu(x, y, projectId) {
    this.contextProjectId = projectId;
    const menu = document.getElementById('project-context-menu');
    menu.style.display = 'block';
    menu.style.left = Math.min(x, window.innerWidth - 180) + 'px';
    menu.style.top = Math.min(y, window.innerHeight - 160) + 'px';
  },

  hideContextMenu() { document.getElementById('project-context-menu').style.display = 'none'; this.contextProjectId = null; },

  showFileContextMenu(x, y) {
    const count = this._selectedFiles.size;
    const removeBtn = document.getElementById('ctx-remove-file');
    const renameBtn = document.getElementById('ctx-rename-file');
    removeBtn.textContent = count > 1 ? `Remove ${count} Files` : 'Remove';
    renameBtn.style.display = count > 1 ? 'none' : '';
    const menu = document.getElementById('file-context-menu');
    menu.style.display = 'block';
    menu.style.left = Math.min(x, window.innerWidth - 180) + 'px';
    menu.style.top = Math.min(y, window.innerHeight - 120) + 'px';
  },

  hideFileContextMenu() { document.getElementById('file-context-menu').style.display = 'none'; },

  removeFile() {
    const files = [...this._selectedFiles];
    if (files.length === 0) return;
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const names = files.map(f => project.files[f]?.name || f).slice(0, 5).join(', ') + (files.length > 5 ? ` and ${files.length - 5} more` : '');
    if (!confirm(`Remove ${files.length} file(s)?\n${names}`)) return;
    for (const filePath of files) {
      if (Player.currentFile === filePath) {
        Player.video.pause(); Player.video.src = ''; Player.currentFile = null;
        document.getElementById('current-file-name').textContent = 'No file selected';
      }
      Storage.removeFile(this.currentProjectId, filePath);
    }
    this._selectedFiles.clear();
    Storage.save();
    this.updateFileList();
    this.updateDashboard();
  },

  hideFileContextMenu() { document.getElementById('file-context-menu').style.display = 'none'; this.contextFilePath = null; },

  _selectedFiles: new Set(),


  _matchSubtitles(projectId, videos, subs) {
    const langs = ['en', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'zh', 'ar'];
    const project = Storage.getProject(projectId);
    if (!project) return;
    for (const v of videos) {
      const baseName = v.name.substring(0, v.name.lastIndexOf('.'));
      const matching = subs.filter(s => {
        const nameNoExt = s.name.substring(0, s.name.lastIndexOf('.'));
        return nameNoExt === baseName || langs.some(lang => nameNoExt === baseName + '.' + lang);
      });
      if (matching.length > 0 && project.files[v.path]) {
        project.files[v.path].subtitles = matching.map(s => s.path || s.name);
      }
    }
  },

  renameFile(filePath) {
    if (!filePath) filePath = [...this._selectedFiles][0];
    const project = Storage.getProject(this.currentProjectId);
    if (!project || !filePath || !project.files[filePath]) return;
    const fileEl = document.querySelector(`.file-item[data-path="${CSS.escape(filePath)}"]`);
    if (!fileEl) return;
    const nameEl = fileEl.querySelector('.file-name');
    const oldName = project.files[filePath].name;
    nameEl.innerHTML = `<input type="text" class="rename-input" value="${oldName}">`;
    const input = nameEl.querySelector('input');
    input.focus(); input.select();
    const commit = () => {
      const newName = input.value.trim();
      if (newName && newName !== oldName) {
        const file = project.files[filePath];
        const oldPath = file.path;
        file.name = newName;
        const ext = file.ext || '';
        const baseName = newName.endsWith(ext) ? newName.slice(0, -ext.length) : newName;
        const newPath = file.subfolder ? file.subfolder + '/' + newName : newName;
        if (newPath !== oldPath && !project.files[newPath]) {
          file.path = newPath;
          delete project.files[oldPath];
          project.files[newPath] = file;
          if (project.fileOrder) {
            const idx = project.fileOrder.indexOf(oldPath);
            if (idx !== -1) project.fileOrder[idx] = newPath;
          }
          if (Player.currentFile === oldPath) Player.currentFile = newPath;
        }
        Storage.save();
      }
      this.updateFileList();
    };
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') input.blur(); if (e.key === 'Escape') { input.value = oldName; input.blur(); } });
  },

  renameProject(id) {
    const project = Storage.getProject(id);
    if (!project) return;
    const item = document.querySelector(`.project-item[data-id="${id}"]`);
    if (!item) return;
    const nameEl = item.querySelector('.project-name');
    const oldName = project.name;
    nameEl.innerHTML = `<input type="text" class="rename-input" value="${oldName}">`;
    const input = nameEl.querySelector('input');
    input.focus(); input.select();
    const commit = () => { const newName = input.value.trim(); if (newName && newName !== oldName) { project.name = newName; Storage.save(); } this.renderProjects(); };
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') input.blur(); if (e.key === 'Escape') { input.value = oldName; input.blur(); } });
  },

  updateFileList() {
    const list = document.getElementById('file-list');
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;

    let files = Object.values(project.files);
    if (this.searchQuery) files = files.filter(f => f.name.toLowerCase().includes(this.searchQuery));
    if (this.hideWatched) files = files.filter(f => !f.completed);

    const dir = this.sortAsc ? 1 : -1;
    const fileOrder = Storage.getFileOrder(this.currentProjectId);
    const orderIndex = new Map(fileOrder.map((p, i) => [p, i]));
    const sortFn = {
      manual: (a,b) => {
        const aIdx = orderIndex.has(a.path) ? orderIndex.get(a.path) : Infinity;
        const bIdx = orderIndex.has(b.path) ? orderIndex.get(b.path) : Infinity;
        return aIdx - bIdx;
      },
      name: (a,b) => { const fc = (a.subfolder || '').localeCompare(b.subfolder || ''); return fc !== 0 ? fc : dir * a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }); },
      progress: (a,b) => dir * ((b.duration ? b.watched / b.duration : 0) - (a.duration ? a.watched / a.duration : 0)),
      lastWatched: (a,b) => { if (!a.lastWatched) return 1 * dir; if (!b.lastWatched) return -1 * dir; return dir * (new Date(b.lastWatched) - new Date(a.lastWatched)); },
      dateAdded: (a,b) => { if (!a.addedAt) return 1 * dir; if (!b.addedAt) return -1 * dir; return dir * (new Date(b.addedAt) - new Date(a.addedAt)); }
    };
    files.sort(sortFn[this.sortMode] || sortFn.name);

    const fragment = document.createDocumentFragment();
    const hasSubfolders = files.some(f => f.subfolder);

    if (hasSubfolders) {
      const groups = {};
      for (const file of files) { const key = file.subfolder || ''; if (!groups[key]) groups[key] = []; groups[key].push(file); }
      const sortedKeys = Object.keys(groups).sort((a, b) => { if (a === '') return -1; if (b === '') return 1; return a.localeCompare(b, undefined, { numeric: true }); });

      for (const folderKey of sortedKeys) {
        const groupFiles = groups[folderKey];
        if (folderKey !== '' || sortedKeys.length > 1) {
          const completedCount = groupFiles.filter(f => f.completed).length;
          const totalDuration = groupFiles.reduce((s, f) => s + (f.duration || 0), 0);
          const watchedDuration = groupFiles.reduce((s, f) => s + (f.watched || 0), 0);
          const folderProgress = totalDuration > 0 ? Math.round((watchedDuration / totalDuration) * 100) : 0;
          const allCompleted = completedCount === groupFiles.length;
          const details = document.createElement('details');
          details.className = 'folder-group';
          if (folderKey === '') details.open = true;

          const summary = document.createElement('summary');
          summary.className = 'folder-header';
          summary.innerHTML = `<span class="folder-arrow">${Icons.arrow}</span><div class="folder-check${allCompleted ? ' has-check' : ''}" title="Toggle all in folder">${allCompleted ? Icons.check : ''}</div><span class="folder-icon">${Icons.folder}</span><span class="folder-name">${folderKey === '' ? project.name : folderKey}</span><span class="folder-count">${completedCount}/${groupFiles.length}</span><div class="folder-progress-bar"><div class="folder-progress-fill" style="width:${folderProgress}%"></div></div>`;
          summary.querySelector('.folder-check').addEventListener('click', (e) => {
            e.stopPropagation();
            const markComplete = !allCompleted;
            for (const f of groupFiles) { if (f.completed !== markComplete) Storage.toggleCompleted(this.currentProjectId, f.path); }
            Storage.save();
            if (markComplete && Player.currentFile) {
              const isInFolder = groupFiles.some(f => f.path === Player.currentFile);
              if (isInFolder) {
                Player.video.pause();
                const currentFolderIdx = sortedKeys.indexOf(folderKey);
                for (let ki = currentFolderIdx + 1; ki < sortedKeys.length; ki++) { const nextFiles = groups[sortedKeys[ki]]; const nextUncompleted = nextFiles.find(f => !f.completed); if (nextUncompleted) { Player.loadFile(this.currentProjectId, nextUncompleted.path); break; } }
              }
            }
            this.updateFileList();
            this.updateDashboard();
          });
          details.appendChild(summary);
          for (const file of groupFiles) details.appendChild(this.createFileItem(file));
          fragment.appendChild(details);
        } else {
          for (const file of groupFiles) fragment.appendChild(this.createFileItem(file));
        }
      }
    } else {
      for (const file of files) fragment.appendChild(this.createFileItem(file));
    }

    list.innerHTML = '';
    list.appendChild(fragment);
    const activeItem = list.querySelector('.file-item.active');
    if (activeItem) activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    document.getElementById('empty-project').style.display = files.length === 0 ? 'flex' : 'none';
  },

  createFileItem(file) {
    const progress = file.duration ? Math.round((file.watched / file.duration) * 100) : 0;
    const isActive = Player.currentFile === file.path;
    const div = document.createElement('div');
    div.className = 'file-item' + (file.completed ? ' completed' : '') + (isActive ? ' active' : '');
    div.dataset.path = file.path;
    div.draggable = true;
    const iconHtml = file.source === 'url' ? `<span class="file-icon file-icon-link">${Icons.openExternal}</span>` : `<span class="file-icon">${file.isVideo ? Icons.video : Icons.music}</span>`;
    div.innerHTML = `<div class="file-check" title="Toggle completed">${file.completed ? Icons.check : ''}</div>${iconHtml}<div class="file-info"><div class="file-name">${file.name}</div></div><div class="file-progress-container"><div class="file-progress-bar"><div class="file-progress-fill" style="width: ${progress}%"></div></div><span class="file-progress-text">${progress}%</span></div><span class="file-duration">${Player.formatTime(file.duration)}</span>`;
    div.querySelector('.file-check').addEventListener('click', (e) => {
      e.stopPropagation();
      Storage.toggleCompleted(this.currentProjectId, file.path);
      Storage.save();
      if (Player.currentFile === file.path && file.completed) {
        Player.video.pause(); Player.video.src = ''; Player.currentFile = null;
        document.getElementById('current-file-name').textContent = 'No file selected';
        if (Storage.data.settings.autoAdvance) this.playNextFile();
      }
      this.updateFileList();
      this.updateDashboard();
    });
    div.addEventListener('click', (e) => {
      if (e.target.closest('.file-check')) return;
      if (e.ctrlKey || e.metaKey) {
        if (this._selectedFiles.has(file.path)) this._selectedFiles.delete(file.path);
        else this._selectedFiles.add(file.path);
        div.classList.toggle('selected', this._selectedFiles.has(file.path));
        return;
      }
      if (e.shiftKey && this._lastClickedFile) {
        const list = [...document.querySelectorAll('.file-item[data-path]')];
        const fromIdx = list.findIndex(el => el.dataset.path === this._lastClickedFile);
        const toIdx = list.findIndex(el => el.dataset.path === file.path);
        if (fromIdx !== -1 && toIdx !== -1) {
          const [start, end] = fromIdx < toIdx ? [fromIdx, toIdx] : [toIdx, fromIdx];
          for (let i = start; i <= end; i++) {
            this._selectedFiles.add(list[i].dataset.path);
            list[i].classList.add('selected');
          }
        }
        return;
      }
      this._selectedFiles.clear();
      document.querySelectorAll('.file-item.selected').forEach(el => el.classList.remove('selected'));
      this._lastClickedFile = file.path;
      this.playFile(file.path);
    });
    div.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this._selectedFiles.has(file.path)) {
        this._selectedFiles.clear();
        document.querySelectorAll('.file-item.selected').forEach(el => el.classList.remove('selected'));
        this._selectedFiles.add(file.path);
        div.classList.add('selected');
      }
      this.showFileContextMenu(e.clientX, e.clientY);
    });
    div.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'INPUT') { e.preventDefault(); return; }
      if (this.sortMode !== 'manual') {
        e.preventDefault();
        this.sortMode = 'manual';
        document.getElementById('sort-select').value = 'manual';
        this.updateFileList();
        return;
      }
      div.classList.add('file-dragging');
      e.dataTransfer.setData('text/file-path', file.path);
      e.dataTransfer.effectAllowed = 'move';
      e.stopPropagation();
    });
    div.addEventListener('dragend', () => {
      div.classList.remove('file-dragging');
      this._commitFileReorder();
    });
    div.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!e.dataTransfer.types.includes('text/file-path')) return;
      e.dataTransfer.dropEffect = 'move';
      const dragging = document.querySelector('.file-dragging');
      if (!dragging || dragging === div) return;
      const rect = div.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      const parent = div.parentNode;
      if (e.clientY < mid) {
        parent.insertBefore(dragging, div);
      } else {
        parent.insertBefore(dragging, div.nextSibling);
      }
    });
    return div;
  },

  _commitFileReorder() {
    const list = document.getElementById('file-list');
    const items = list.querySelectorAll('.file-item[data-path]');
    const newOrder = [...items].map(el => el.dataset.path);
    if (newOrder.length === 0) return;
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    project.fileOrder = newOrder;
    Storage.save();
  },

  async playFile(filePath) {
    try {
      await Player.loadFile(this.currentProjectId, filePath);
      this.updateFileList();
    } catch (err) {
      console.error('playFile error:', err);
    }
  },

  playNextFile() {
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const files = Object.values(project.files).sort((a,b) => { const fc = (a.subfolder || '').localeCompare(b.subfolder || ''); return fc !== 0 ? fc : a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }); });
    const currentIdx = files.findIndex(f => f.path === Player.currentFile);
    for (let i = currentIdx + 1; i < files.length; i++) { if (!files[i].completed) { this.playFile(files[i].path); return; } }
  },

  playPrevFile() {
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const files = Object.values(project.files).sort((a,b) => { const fc = (a.subfolder || '').localeCompare(b.subfolder || ''); return fc !== 0 ? fc : a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }); });
    const currentIdx = files.findIndex(f => f.path === Player.currentFile);
    if (currentIdx > 0) this.playFile(files[currentIdx - 1].path);
  },

  updateDashboard() {
    const project = Storage.getProject(this.currentProjectId);
    if (!project) return;
    const files = Object.values(project.files);
    const totalDuration = files.reduce((sum, f) => sum + (f.duration || 0), 0);
    const totalWatched = files.reduce((sum, f) => sum + (f.watched || 0), 0);
    const remaining = totalDuration - totalWatched;
    const progress = totalDuration > 0 ? Math.round((totalWatched / totalDuration) * 100) : 0;
    document.getElementById('stat-total').textContent = this.formatDuration(totalDuration);
    document.getElementById('stat-watched').textContent = this.formatDuration(totalWatched);
    document.getElementById('stat-remaining').textContent = this.formatDuration(remaining);
    document.getElementById('stat-progress').textContent = progress + '%';
    document.getElementById('stat-progress-bar').style.width = progress + '%';
    this.renderProjects();
  },

  formatDuration(seconds) {
    if (seconds < 60) return Math.round(seconds) + 's';
    if (seconds < 3600) return Math.round(seconds / 60) + 'm';
    const h = Math.floor(seconds / 3600);
    const m = Math.round((seconds % 3600) / 60);
    return h + 'h ' + m + 'm';
  },

  applySubtitleStyle() { Player.applySubtitleStyle(); }
};

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => App.init());
setInterval(() => { if (App.currentProjectId) App.updateDashboard(); }, 10000);
