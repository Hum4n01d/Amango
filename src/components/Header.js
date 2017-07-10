import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
  <header>
    <h1>
      <Link to='/'>React App</Link>
    </h1>

    <nav>
      <Link to='/about'>About</Link>
    </nav>
  </header>
)
