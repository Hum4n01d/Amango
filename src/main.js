const { BrowserWindow, app } = require('electron')
const { enableLiveReload } = require('electron-compile')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  enableLiveReload({strategy: 'react-hmr'})

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    titleBarStyle: 'hidden'
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/renderer/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    // mainWindow.webContents.openDevTools()
  })
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.on('crashed', (event, killed) => {
    console.log('APP CRASH')
    console.log(event)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
