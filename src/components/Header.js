import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import Favicon from './Favicon'
import Tab from './Tab'
import TabNavWrapper from './TabNavWrapper'

import {colors} from '../config'

const HeaderWrapper = styled.header`
  height: 37px;

  // Make window draggable by header
  -webkit-user-select: none;
  -webkit-app-region: drag;

  display: flex;
  background-color: ${colors.backgroundColor};

  // Make space for traffic lights in non-fullscreen
  ${props => !props.fullscreen ? `
    padding-left: 70px;
  `: ``}
`
const TabLabel = styled.p`
  display: none;
  
  @media screen and (min-width: 500px) {
    display: block;
  }
`

const Header = props => (
  <HeaderWrapper {...props}>
    <Nav tabs={props.tabs} onNavButtonClick={props.onNavButtonClick} />
    <TabNavWrapper>
      {props.tabs.map(tab => (
        <Tab key={tab.id} onClick={() => props.onTabSelect(tab.id)} active={tab.active}>
          <Favicon url={tab.url}/>
          <TabLabel>{tab.title}</TabLabel>
        </Tab>
      ))}
    </TabNavWrapper>
  </HeaderWrapper>
)

export default Header