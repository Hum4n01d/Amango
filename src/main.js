const {BrowserWindow, app, Menu} = require('electron')
const {enableLiveReload} = require('electron-compile')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  enableLiveReload({
    strategy: 'react-hmr'
  })
  
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    titleBarStyle: 'hidden-inset'
  })
  
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/renderer/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    mainWindow.setMinimumSize(480, 320)
    // mainWindow.webContents.openDevTools()
  })
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.on('crashed', (event, killed) => {
    console.log('APP CRASH')
    console.log(event)
  })
  
  const template = [{
    label: 'Amango',
    submenu: [{
      label: 'About Amango',
      selector: 'orderFrontStandardAboutPanel:'
    },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function () {
          app.quit()
        }
      }
    ]
  }, {
    label: 'Edit',
    submenu: [{
      label: 'Undo',
      accelerator: 'CmdOrCtrl+Z',
      selector: 'undo:'
    },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:'
      }
    ]
  }]
  
  // Menu.setApplicationMenu(Menu.buildFromTemplate(template))
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