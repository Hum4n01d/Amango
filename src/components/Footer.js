import React from 'react'
import styled from 'styled-components'

import SectionWrapper from './SectionWrapper'

const Footer = styled.div`
  text-align: center;
`

export default props => (
  <SectionWrapper>
    <Footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </Footer>
  </SectionWrapper>
)