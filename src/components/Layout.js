import React from 'react'
import styledNormalize from 'styled-normalize'
import {injectGlobal} from 'styled-components'

import Header from './Header'

injectGlobal`
  ${styledNormalize}
`

export default props => (
  <div>
    <Header />

    <div className='body'>
      {props.children}
    </div>
  </div>
)
