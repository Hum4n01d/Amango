import React, { Component } from 'react'
import PropTypes from 'prop-types'

import WebView from 'react-electron-web-view'

class WebViewWrapper extends Component {
  PropTypes = {
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="webview-loading">
        <div>
            <p>Loading...</p>
            <img src='images/loading.gif' />
        </div>
      </div>
    )
  }
}

export default WebViewWrapper