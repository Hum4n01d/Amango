import React from 'react'
import styled from 'styled-components'

import {BackForwardWrapper, BackForwardButton, ReloadButton} from './NavButtons'
import {LoadingIcon} from './Icons'

const NavWrapper = styled.nav`
  display: flex;
  margin-right: 5px;

  > div,
  > button {
    margin-right: 5px;
  }
`

const Nav = props => {
  return (
    <NavWrapper>
      <BackForwardWrapper>
        <BackForwardButton onClick={() => props.onNavButtonClick(-1)}>
          &#9664;
        </BackForwardButton>

        <BackForwardButton onClick={() => props.onNavButtonClick(1)}>
          &#9654;
        </BackForwardButton>
      </BackForwardWrapper>

      <ReloadButton size={20} loading={props.tabs.find(tab => tab.active).loading} onClick={() => props.onReloadClick(props.tabs.find(tab => tab.active).id)}>
        <LoadingIcon/>
      </ReloadButton>
    </NavWrapper>
  )
}

export default Nav