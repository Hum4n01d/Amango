const {BrowserWindow, app} = require('electron')
const {default: installExtension, REACT_DEVELOPER_TOOLS} = require('electron-devtools-installer')
const waitOn = require('wait-on')

let mainWindow

const APP_URL = 'http://localhost:5000'

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 400,
    minHeight: 500,
    show: false,
    titleBarStyle: 'hidden-inset'
  })

  installExtension(REACT_DEVELOPER_TOOLS)

  mainWindow.loadURL(APP_URL)

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

app.on('ready', () => {
  console.log(`Waiting on ${APP_URL}`)

  // Wait for app to be available
  waitOn({
    resources: [APP_URL]
  }, function (err) {
    if (err) { return console.error(err) }
    
    console.log(`${APP_URL} is now available`)
    createWindow()
  })
})

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
