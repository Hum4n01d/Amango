import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import Favicon from './Favicon'
import {TabNav, Tab, TabLabel} from './Tab'

import {colors} from '../config'

const Header = styled.header`
  // height: 37px;

  display: flex;
  background-color: ${colors.backgroundColor};

  padding: 5px;

  // Make window draggable by header
  -webkit-user-select: none;
  -webkit-app-region: drag;

  // Make space for traffic lights in non-fullscreen
  ${props => !props.fullscreen ? `
    padding-left: 75px;
  `: ``}
`

export default props => (
  <Header {...props}>
    <Nav tabs={props.tabs} onNavButtonClick={props.onNavButtonClick} />
    
    <TabNav>
      {props.tabs.map(tab => (
        <Tab key={tab.id} onClick={() => props.onTabSelect(tab.id)} active={tab.active}>
          <Favicon url={tab.url}/>
          <TabLabel>{tab.title}</TabLabel>
        </Tab>
      ))}
    </TabNav>
  </Header>
)