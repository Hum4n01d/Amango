import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TabsArea from './TabsArea'

class Application extends Component {
  state = {
    fullScreen: this.isFullScreen(),
  }
  constructor(props) {
    super(props)

    this.updateFullScreen = this.updateFullScreen.bind(this)
  }
  componentDidMount() {
    const win = this.getCurrentWindow()

    win.on('enter-full-screen', this.updateFullScreen)
    win.on('leave-full-screen', this.updateFullScreen)
  }
  getCurrentWindow() {
    return require('electron').remote.getCurrentWindow()
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
      <div>
        <header className={this.state.fullScreen ? "fullscreen" : ""} onClick={()=>console.log('clicked header')}></header>
        <TabsArea initalTabs={this.props.initalTabs}/> 
      </div>
    )
  }
}
Application.PropTypes = {
  initalTabs: PropTypes.array.isRequired
}

export default Application