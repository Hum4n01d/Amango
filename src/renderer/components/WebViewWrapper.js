import React, {Component} from "react"
import PropTypes from "prop-types"

import WebView from "react-electron-web-view"

class WebViewWrapper extends Component {
  PropTypes = {
    src: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }
  state = {
    loading: true
  }
  
  constructor(props) {
    super(props)
    
    this.loadWebView = this.loadWebView.bind(this)
  }
  
  componentDidMount() {
    const partition = `webview[src='${this.props.src}']`
    const webview = document.querySelector(partition)
    
    webview.addEventListener('dom-ready', this.loadWebView)
  }
  
  loadWebView() {
    this.setState({
      loading: false
    })
  }
  
  render() {
    return (
      <div className="webview-wrapper">
        <WebView src={this.props.src} partition={`persist:${this.props.index}`} />
        {
          this.state.loading ?
            <div className='webview-loading'>
              <p>Loading...</p>
              <img src='images/loading.gif'/>
            </div>
            :
            <span></span>
        }
      </div>
    )
  }
}

export default WebViewWrapper