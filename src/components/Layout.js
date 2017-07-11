import React from 'react'
import styledNormalize from 'styled-normalize'
import {injectGlobal} from 'styled-components'

import Header from './Header'

injectGlobal`
  ${styledNormalize}

  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  }

  a {
    color: inherit;
  }
`

export default props => (
  <div>
    <Header />

    <div className='body'>
      {props.children}
    </div>
  </div>
)
