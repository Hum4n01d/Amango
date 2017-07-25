// import {remote} from 'electron'
import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'

const {remote} = window.require('electron')

import Store from '../store'

const store = new Store()

import Header from './Header'
import TabContent from './TabContent'

injectGlobal`
  body {
    margin: 0;
  }
`

export default class App extends Component {
  state = {
    fullScreen: this.isFullScreen(),
    tabs: this.props.tabs,
    activeTab: this.props.activeTab
  }
  constructor(props) {
    super(props)

    this.updateFullScreen = this.updateFullScreen.bind(this)
    this.onTabSelect = this.onTabSelect.bind(this)
  }
  getCurrentWindow() {
    return remote.getCurrentWindow()
  }
  componentDidMount() {
    const win = this.getCurrentWindow()

    win.on('enter-full-screen', this.updateFullScreen)
    win.on('leave-full-screen', this.updateFullScreen)
  }
  isFullScreen() {
    return this.getCurrentWindow().isFullScreen()
  }
  updateFullScreen() {
    this.setState({
      fullScreen: this.isFullScreen()
    })
  }
  onTabSelect(index) {
    this.setState({
      activeTab: index
    })
    store.set('activeTab', index)

    console.log(this.state.activeTab)
    console.log(store.get('activeTab'))
  }
  render() {
    return (
      <div>
        <Header fullscreen={this.state.fullScreen} tabs={this.state.tabs} onTabSelect={this.onTabSelect} activeTab={this.state.activeTab}/>
        <TabContent tabs={this.state.tabs}/>
      </div>
    )
  }
}