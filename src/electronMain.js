const {BrowserWindow, app} = require('electron')
const {default: installExtension, REACT_DEVELOPER_TOOLS} = require('electron-devtools-installer')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    titleBarStyle: 'hidden-inset'
  })

  installExtension(REACT_DEVELOPER_TOOLS)


  mainWindow.loadURL(url.format({
    pathname: 'localhost:5000',
    protocol: 'http:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
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
