import React from "react"
import {render} from "react-dom"
import {readFileSync} from "fs"
import {join} from "path"
import {AppContainer} from "react-hot-loader"

const savePath = join(__dirname, 'save/saved_tabs.json')
const savedTabs = JSON.parse(readFileSync(savePath).toString()).tabs
const initalTabs = [
  {
    title: 'Amango',
    url: join(__dirname, 'templates/info.html'),
    udid: '5735d0a6-e05e-40f5-a465-083071186a40'
  },
  ...savedTabs,
  {
    title: '+',
    url: join(__dirname, 'templates/info.html'),
    uuid: 'aa983783-545b-47d5-a454-82c7986ad38b'
  }
]

const renderApp = () => {
  const Application = require('./components/Application').default
  render(
    <AppContainer><Application initalTabs={initalTabs}/></AppContainer>,
    document.getElementById('root')
  )
}

renderApp()
if (module.hot) {
  module.hot.accept(renderApp)
}
