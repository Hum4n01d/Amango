// import {remote} from 'electron'
import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'

const {remote} = window.require('electron')

import Store from '../store'

const store = new Store()

import Header from './Header'
import TabPanels from './TabPanels'

injectGlobal`
  body {
    margin: 0;
  }
`
const AppWrapper = styled.div`

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
    this.onNavButtonClick = this.onNavButtonClick.bind(this)
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
  onTabSelect(id) {
    this.setState({
      activeTab: id
    })
    store.set('activeTab', id)
  }
  onNavButtonClick(direction) {
    console.log(`Moving history in direction ${direction}`)  
  }
  render() {
    const sharedProps = {
      tabs: this.state.tabs,
      activeTab: this.state.activeTab
    }
    return (
      <AppWrapper>
        <Header {...sharedProps} 
          fullscreen={this.state.fullScreen} 
          onTabSelect={this.onTabSelect} 
          onNavButtonClick={this.onNavButtonClick}
        />
        <TabPanels {...sharedProps}/>
      </AppWrapper>
    )
  }
}