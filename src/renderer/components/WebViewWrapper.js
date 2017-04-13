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
    const webview = document.querySelector(`webview[src='${this.props.src}']`)
    
    webview.addEventListener('dom-ready', this.loadWebView)
    // webview.addEventListener('dom-ready', () => {
    //   console.log("READY")
    // })
  }
  
  loadWebView() {
    this.setState({
      loading: false
    })
  }
  
  render() {
    const webviewClass = this.state.loading ? 'hide' : ''
    
    return (
      <div className="webview-wrapper">
        <WebView src={this.props.src} partition={`persist:${this.props.index}`} className={webviewClass}/>
        {
          this.state.loading ?
            <div className='webview-loading'>
              <p>Loading...</p>
              <img src='images/loading.gif'/>
            </div>
            :
            <div></div>
        }
      </div>
    )
  }
}

export default WebViewWrapper