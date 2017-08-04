import React from 'react'
import styled, {css} from 'styled-components'

import {colors} from '../config'

const Tab = styled.div`
  flex-grow: 1;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Exo 2';
  border-left: 1px solid ${colors.tabDividerColor};
  margin: 5px 0;

  ${props => props.active && css`
    background-color: ${colors.activeTabColor};
  `}
`

export default Tab