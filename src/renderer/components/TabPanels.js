import React from 'react'
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

export default props => (
  <div>
    {props.tabs.map(tab => (
      <WebViewWrapper active={props.activeTab === tab.id} key={tab.id}>
        <WebView src={tab.url} partition={`persist:${tab.id}`}/>
      </WebViewWrapper>
    ))}
  </div>
)