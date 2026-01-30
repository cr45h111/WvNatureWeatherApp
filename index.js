const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: true
    },
    icon: path.join(__dirname, 'icon.ico'),
    show: false
  });

  win.loadFile('WvW.html');
  
  // Set flag to indicate we're in Electron
  win.webContents.executeJavaScript('window.isElectron = true;');
  
  // Show window when ready
  win.once('ready-to-show', () => {
    win.show();
  });
  
  // Open DevTools in development (comment out for production)
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});