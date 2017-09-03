import React from 'react'
import styled from 'styled-components'
import {MoonLoader as Loader} from 'react-spinners';

import NavButton from './NavButton'

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 5px;

  > div {
    margin-right: 10px;

    &:first-child {
      margin-left: 5px;
    }
  }
`
const ReloadStatus = styled.div`
  display: flex;
  align-items: center;
`

const Nav = props => {
  const activeTab = props.tabs.find(tab => tab.active)

  return (
    <NavWrapper>
      <div>
        <NavButton onClick={() => props.onNavButtonClick(-1)}>&#9664;</NavButton>
        <NavButton onClick={() => props.onNavButtonClick(1)}>&#9654;</NavButton>
      </div>
      <ReloadStatus>
        <Loader size={20} loading={activeTab.loading}/>
      </ReloadStatus>
    </NavWrapper>
  )
}

export default Nav