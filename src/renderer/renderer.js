import React from "react"
import { render } from "react-dom"
import { readFileSync } from "fs"
import { join } from "path"
import Application from './components/Application'
import { AppContainer } from 'react-hot-loader';

const savePath = join(__dirname, "save/tabs.json")
const initalTabs = JSON.parse(readFileSync(savePath).toString()).tabs

const renderApp = () => {
  const Application = require('./components/Application').default
  render(
    <AppContainer><Application initalTabs={initalTabs} /></AppContainer>,
    document.getElementById('root')
  )
}

renderApp();
if (module.hot) { module.hot.accept(renderApp) }