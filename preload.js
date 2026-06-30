const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => ipcRenderer.invoke('dialog:openFolder'),
  openFiles: () => ipcRenderer.invoke('dialog:openFiles'),
  inputDialog: (title, label, defaultValue) => ipcRenderer.invoke('dialog:input', title, label, defaultValue),
  scanFolder: (dirPath) => ipcRenderer.invoke('fs:scanFolder', dirPath),
  getFileUrl: (filePath) => ipcRenderer.invoke('fs:getFileUrl', filePath),
  readFile: (filePath) => ipcRenderer.invoke('fs:readFile', filePath),
  findSubtitles: (dirPath, fileName) => ipcRenderer.invoke('fs:findSubtitles', dirPath, fileName),
  extractSubtitles: (filePath) => ipcRenderer.invoke('fs:extractSubtitles', filePath),
  probeSubtitles: (filePath) => ipcRenderer.invoke('fs:probeSubtitles', filePath),
  getBasePath: () => ipcRenderer.invoke('fs:getBasePath'),
});
