import React from 'react'
import styledNormalize from 'styled-normalize'
import styled, {injectGlobal} from 'styled-components'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

injectGlobal`
  ${styledNormalize}

  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  }
  a {
    color: inherit;
  }
  h1,
  h2,
  h3,
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
`

export default props => (
  <div>
    <Header />

    <Body>
      {props.children}
    </Body>

    <Footer></Footer>
  </div>
)
