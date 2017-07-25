import React from 'react'
import styled, {css} from 'styled-components'
import {TabList} from 'react-tabs'

import {colors} from '../config'

const TabNavWrapper = styled(TabList)`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;

  // Tab
  > li {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Exo 2';
    border-right: 1px solid ${colors.tabDividerColor};
    margin: 5px 0;
    
    &:last-child {
      border: 0;
    }
    
    ${props => props.selected && css`
      background-color: ${colors.activeTabColor};
    `}
  }
`

export default props => (
  <TabNavWrapper>
    {props.children}
  </TabNavWrapper>
)