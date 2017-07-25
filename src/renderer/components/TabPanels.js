import React from 'react'
import styled, {css} from 'styled-components'
import WebView from 'react-electron-web-view'

const TabPanelsWrapper = styled.div`
  background-color: red;
`
const TempWV = styled.div`
  background-color: red;
  color: yellow;
  width: 100%;
  height: 100%;
  display: none;

  ${props => props.active && css`
    display: block;
  `}
`

const TabPanels = props => (
  <TabPanelsWrapper>
    {props.tabs.map(tab => (
      <TempWV active={props.activeTab === tab.id} key={tab.id}>
        {tab.url}
      </TempWV>
    ))}
  </TabPanelsWrapper>
)

export default TabPanels