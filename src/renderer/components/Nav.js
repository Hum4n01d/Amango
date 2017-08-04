import React from 'react'
import styled from 'styled-components'
import {MoonLoader as Loader} from 'react-spinners';

import {colors} from '../config'

const NavButtonsWrapper = styled.div`
  margin-right: 10px;
`
const NavButton = styled.button`
  padding: 6px;
  background-color: ${colors.navigationButtonBackground};
  color: ${colors.navigationButtonTextColor};
  border-radius: 5px;
  border: 1px solid ${colors.activeTabColor};
  -webkit-app-region: no-drag;

  &:first-child {
    margin-right: 1px;
  }
`
const Nav = styled.nav`
  display: flex;
  padding: 5px;
`
const ReloadStatus = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
`

export default props => (
  <Nav>
    <NavButtonsWrapper>
      <NavButton onClick={() => props.onNavButtonClick(-1)}>&#9664;</NavButton>
      <NavButton onClick={() => props.onNavButtonClick(1)}>&#9654;</NavButton>
    </NavButtonsWrapper>
    <ReloadStatus>
      <Loader size={20} loading={props.loading}/>
    </ReloadStatus>
  </Nav>
)