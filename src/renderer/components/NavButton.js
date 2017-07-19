import styled from 'styled-components'

import {colors} from '../config'

const NavButton = styled.button`
  padding: 6px;
  background-color: ${colors.navigationButtonBackground};
  color: ${colors.navigationButtonTextColor};
  border-radius: 5px;
  border: 1px solid ${colors.activeTabColor};
  -webkit-app-region: no-drag
  margin-right: 5px;
`

export default NavButton