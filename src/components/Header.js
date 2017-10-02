import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import {TabNav, Tab, TabLabel} from './Tab'

import {colors} from '../config'

const Header = styled.header`
  display: flex;
  background-color: ${colors.backgroundColor};

  padding: 5px;

  // Make window draggable by header
  -webkit-user-select: none;
  -webkit-app-region: drag;

  // Make space for traffic lights in non-fullscreen
  ${props => !props.fullscreen && `
    padding-left: 75px;
  `}
`
const Favicon = styled.img`
  height: 16px;
  margin-right: 5px;
`

export default props => (
  <Header {...props}>
    <Nav tabs={props.tabs} onNavButtonClick={props.onNavButtonClick} onReloadClick={props.onReloadClick}/>
    
    <TabNav>
      {props.tabs.map(tab => (
        <Tab 
          key={tab.id} 
          onClick={() => props.onTabSelect(tab.id)} 
          active={tab.active}>

          <Favicon 
            src={`http://www.google.com/s2/favicons?domain=${tab.url}`} 
            alt="Favicon"/>

          <TabLabel>{tab.title}</TabLabel>
        </Tab>
      ))}
    </TabNav>
  </Header>
)