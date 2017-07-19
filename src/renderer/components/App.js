import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'
import {Tabs} from 'react-tabs'

import Header from './Header'
import TabContent from './TabContent'

const {remote} = window.require('electron')

injectGlobal`
  body {
    margin: 0;
  }
`

export default class App extends Component {
  state = {
    fullScreen: this.isFullScreen()
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
  render() {
    return (
      <Tabs>
        <Header fullscreen={this.state.fullScreen}/>
        <TabContent/>
      </Tabs>
    )
  }
}