import React from 'react'
import styled from 'styled-components'

import {BackForwardWrapper, BackForwardButton, ReloadButton} from './NavButtons'
import {LoadingIcon} from './Icons'

const NavWrapper = styled.nav`
  display: flex;

  > div,
  > button {
    margin-right: 5px;

  }
`

const Nav = props => {
  const isLoading = true //props.tabs.find(tab => tab.active).loading

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

      <ReloadButton size={20} loading={isLoading}>
        <LoadingIcon/>
      </ReloadButton>
    </NavWrapper>
  )
}

export default Nav