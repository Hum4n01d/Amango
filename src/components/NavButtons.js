import styled, {keyframes} from 'styled-components'

import {colors} from '../config'

const NavButton = styled.button`
  padding: 6px;
  background-color: ${colors.navigationButtonBackground};
  border-radius: 5px;
  border: 1px solid ${colors.activeTabColor};
  -webkit-app-region: no-drag;

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    background-color: ${colors.navigationButtonTextColorActive}
  }
`
const BackForwardWrapper = styled.div`
  > button:first-child {
    margin-right: 1px;
  }
`
const BackForwardButton = NavButton.extend`
  color: ${colors.navigationButtonTextColor};
`
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const ReloadButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0 5px;

  transition: 0.5s;
  transform: rotate(0deg);

  svg {
    fill: ${colors.navigationButtonTextColor};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }

  ${props => props.loading && `
    animation: ${spin} 0.5s linear infinite;
  `}

  &:focus {
    outline: none;
  }
`

export {NavButton, BackForwardWrapper, BackForwardButton, ReloadButton}