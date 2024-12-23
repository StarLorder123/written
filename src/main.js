const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

try {
    require('electron-reloader')(module, {
        debug: true, // 可选：启用调试模式
        watchRenderer: true, // 可选：监听渲染进程文件变化
    });
} catch (err) {
    console.error('Error loading electron-reloader:', err);
}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})