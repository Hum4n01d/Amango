// import {remote} from 'electron'
import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'
import {Tabs} from 'react-tabs'

const {remote} = window.require('electron')

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
    tabs: this.props.tabs
  }
  constructor(props) {
    super(props)
    
    this.updateFullScreen = this.updateFullScreen.bind(this)
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
    console.log(`Tab ${tabIndex} selected`)
  }
  render() {
    return (
      <Tabs onSelect={this.props.onTabSelect}>
        <Header fullscreen={this.state.fullScreen} tabs={this.state.tabs} onTabSelect={this.onTabSelect}/>
        <TabContent tabs={this.state.tabs}/>
      </Tabs>
    )
  }
}