import React from 'react'
import styled from 'styled-components'

const TabContent = styled.div`
  background-color: red;
`

export default props => (
  <TabContent>
    <div>
      <h2>Any content 1</h2>
    </div>
    <div>
      <h2>Any content 2</h2>
    </div>
  </TabContent>
)