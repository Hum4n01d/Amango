import React from "react"
import {render} from "react-dom"
import {readFileSync} from "fs"
import {join} from "path"
import {AppContainer} from "react-hot-loader"

const savePath = join(__dirname, 'save/tabs.json')
const initalTabs = [
  {
    title: 'Amango',
    url: join(__dirname, 'templates/info.html')
  },
  ...JSON.parse(readFileSync(savePath).toString()).tabs,
  {
    title: '+',
    url: join(__dirname, 'templates/info.html')
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
