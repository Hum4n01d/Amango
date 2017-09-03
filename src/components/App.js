// import {remote} from 'electron'
import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'

import Store from '../store'
import Header from './Header'
import TabPanels from './TabPanels'

const {remote} = window.require('electron')

const store = new Store()

// eslint-disable-next-line
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
    tabs: [],
    activeTab: this.props.activeTab
  }
  constructor(props) {
    super(props)

    this.updateFullScreen = this.updateFullScreen.bind(this)
    this.onTabSelect = this.onTabSelect.bind(this)
    this.onNavButtonClick = this.onNavButtonClick.bind(this)
    this.onWebViewLoaded = this.onWebViewLoaded.bind(this)
  }
  componentWillMount() {
    const updatedTabs = this.props.tabs.map(tab => {
      return {...tab, loading: true}
    })

    this.setState({
      tabs: updatedTabs
    })
  }
  componentDidMount() {
    const win = remote.getCurrentWindow()

    win.on('enter-full-screen', this.updateFullScreen)
    win.on('leave-full-screen', this.updateFullScreen)
  }
  isFullScreen() {
    return remote.getCurrentWindow().isFullScreen()
  }
  updateFullScreen() {
    this.setState({
      fullScreen: this.isFullScreen()
    })
  }
  onTabSelect(id) {
    let updatedTabs = this.state.tabs

    updatedTabs.find(tab => tab.active).active = false

    updatedTabs.find(tab => tab.id === id).active = true

    this.setState({
      tabs: updatedTabs
    })

    store.set('tabs', updatedTabs)
  }
  onNavButtonClick(direction) {
    const activeTab = this.state.tabs.find(tab => tab.active)
   
    this.TabPanels.executeJavaScript(activeTab.id, `window.history.go(${direction})`)
  }
  onWebViewLoaded(id) {
    const updatedTabs = this.state.tabs
    
    const tabThatFinishedLoading = updatedTabs.find(tab => tab.id === id)

    tabThatFinishedLoading.loading = false

    this.setState({
      tabs: updatedTabs
    })
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
        <TabPanels {...sharedProps} 
          ref={TabPanels => this.TabPanels = TabPanels}
          onWebViewLoaded={this.onWebViewLoaded}
        />
      </AppWrapper>
    )
  }
}