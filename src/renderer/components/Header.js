import React from 'react'
import styled from 'styled-components'
import {Tab} from 'react-tabs'

import {colors} from '../config'
import NavButton from './NavButton'
import TabListWrapper from './TabListWrapper'

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

export default props => (
  <Header {...props}>
    <nav className="nav-buttons">
      <NavButton>&#9664;</NavButton>
      <NavButton>&#9654;</NavButton>
    </nav>
    <TabListWrapper>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabListWrapper>
  </Header>
)