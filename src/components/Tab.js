import styled, {css} from 'styled-components'

import {colors} from '../config'

const TabNav = styled.div`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`
const Tab = styled.div`
  flex-grow: 1;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Exo 2';
  border-left: 1px solid ${colors.tabDividerColor};

  ${props => props.active && css`
    background-color: ${colors.activeTabColor};
  `}
`
const TabLabel = styled.p`
  margin: 0;
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`

export {TabNav, Tab, TabLabel}