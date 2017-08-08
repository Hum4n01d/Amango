import styled from 'styled-components'

import {colors} from '../config'

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
  
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    background-color: ${colors.navigationButtonTextColorActive}
  }
`

export default NavButton