import React, {Component} from 'react'
import styled from 'styled-components'

import NavButton from './NavButton'
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
const Nav = styled.nav`
  display: flex;
  padding: 5px;
`
const TabLabel = styled.p`
  display: none;
  
  @media screen and (min-width: 500px) {
    display: block;
  }
`

export default props => (
  <HeaderWrapper {...props}>
    <Nav>
      <NavButton>&#9664;</NavButton>
      <NavButton>&#9654;</NavButton>
    </Nav>
    <TabNavWrapper>
      {props.tabs.map((tab, index) => (
        <Tab key={tab.id} onClick={() => props.onTabSelect(index)} active={props.activeTab === index}>
          <Favicon url={tab.url}/>
          <TabLabel>{tab.title}</TabLabel>
        </Tab>
      ))}
    </TabNavWrapper>
  </HeaderWrapper>
)