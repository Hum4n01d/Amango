import React from 'react'
import styled from 'styled-components'
import {TabList} from 'react-tabs'

import {colors} from '../config'

const TabListWrapper = styled(TabList)`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;

  > li {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Exo 2';
    background-color: ${colors.tabBackgroundColor};
    border-left: 1px solid ${colors.tabDividerColor};

    &:first-child {
      border: 0;
    }
  }
`

export default props => (
  <TabListWrapper>
    {props.children}
  </TabListWrapper>
)