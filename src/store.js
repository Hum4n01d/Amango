import {initialDevTabs} from './config'

const {remote} = window.require('electron')
const {join} = window.require('path')
const {readFileSync, writeFileSync} = window.require('fs')

export default class Store {
  constructor() {
    const path = remote.app.getPath('appData')

    this.configFile = join(path, `Amango/save.json`)
    
    try {
      this.data = JSON.parse(readFileSync(this.configFile))
    } catch(e) {
      this.data = {
        tabs: initialDevTabs
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