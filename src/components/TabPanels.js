import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import WebView from 'react-electron-web-view'

const WebViewWrapper = styled.div`
  display: none;
  
  webview {
    height: calc(100vh - 37px);
  }

  ${props => props.active && css`
    display: block;
  `}
`

export default class TabPanels extends Component {
  constructor(props) {
    super(props)

    this.webviews = []
    this.executeJavaScript = this.executeJavaScript.bind(this)
  }
  executeJavaScript(id, javaScript) {
    const webview = this.webviews.find(webview => webview.props.id === id)

    webview.executeJavaScript(javaScript)
  }
  render() {
    return (
      <div>
        {this.props.tabs.map(tab => (
          <WebViewWrapper active={tab.active} key={tab.id}>
            <WebView src={tab.url} partition={`persist:${tab.id}`} id={tab.id} ref={webview => this.webviews.push(webview)}/>
          </WebViewWrapper>
        ))}
      </div>
    )
  }
}