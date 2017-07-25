import React from 'react'
import styled from 'styled-components'
import {Tab} from 'react-tabs'

import {colors} from '../config'
import NavButton from './NavButton'
import Favicon from './Favicon'
import TabNavWrapper from './TabNavWrapper'

const Header = styled.header`
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
  
  nav {
    display: flex;
    padding: 5px;
  }
`
const TabLabel = styled.p`
  display: none;
  
  @media screen and (min-width: 400px) {
    display: block;
  }
`

export default props => (
  <Header {...props}>
    <nav>
      <NavButton>&#9664;</NavButton>
      <NavButton>&#9654;</NavButton>
    </nav>
    <TabNavWrapper>
      {props.tabs.map(tab => (
        <Tab key={tab.id}>
          <Favicon url={tab.url}/>
          <TabLabel>{tab.title}</TabLabel>
        </Tab>
      ))}
    </TabNavWrapper>
  </Header>
)