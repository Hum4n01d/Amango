// import {remote} from 'electron'
import {join} from 'path'
import {readFileSync, writeFileSync} from 'fs'

import {initalDevTabs} from './config'

const {remote} = window.require('electron')

export default class Store {
  constructor() {
    const path = remote.app.getPath('appData')

    this.configFile = join(path, `Amango/save.json`)
    
    try {
      this.data = JSON.parse(readFileSync(this.configFile))
    } catch(e) {
      this.data = {
        tabs: initalDevTabs,
        activeTab: 1
      }
      this.update()
    }
  }
  update() {
    writeFileSync(this.configFile, JSON.stringify(this.data))
  }
  get(key) {
    return this.data[key]
  }
  set(key, value) {
    this.data[key] = value

    this.update()
  }
}