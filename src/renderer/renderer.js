import React from "react"
import { render } from "react-dom"
import { readFileSync } from "fs"
import { join } from "path"
import Application from './components/Application'

const savePath = join(__dirname, "save/tabs.json")
const initalTabs = JSON.parse(readFileSync(savePath).toString()).tabs

render(
  <Application initalTabs={initalTabs} />,
  document.getElementById('root')
)