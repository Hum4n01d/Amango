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
  render() {
    return (
      <div>
        {this.props.tabs.map(tab => (
          <WebViewWrapper active={tab.active} key={tab.id}>
            <WebView src={tab.url} partition={`persist:${tab.id}`}/>
          </WebViewWrapper>
        ))}
      </div>
    )
  }
}