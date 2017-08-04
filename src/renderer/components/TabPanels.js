import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import WebView from 'react-electron-web-view'
import {MoonLoader as Loader} from 'react-spinners'

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
  }
  render() {
    return (
      <div>
        {this.props.tabs.map(tab => (
          <WebViewWrapper active={this.props.activeTab === tab.id} key={tab.id}>
            <WebView src={tab.url} partition={`persist:${tab.id}`}/>
          </WebViewWrapper>
        ))}
      </div>
    )
  }
}