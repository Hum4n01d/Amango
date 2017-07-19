import React from 'react'
import styled from 'styled-components'
import {TabPanel} from 'react-tabs'

const TabContent = styled.div`
  background-color: red;
`

export default props => (
  <TabContent>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </TabContent>
)