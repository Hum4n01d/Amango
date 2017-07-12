import React from 'react'
import styled from 'styled-components'

import SectionWrapper from './SectionWrapper'

const Body = styled.div`
  margin: 10px 0;
`

export default props => (
  <SectionWrapper>
    <Body>
      {props.children}
    </Body>
  </SectionWrapper>
)