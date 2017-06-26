import React from 'react'
import {Link} from 'react-router-dom'

import styles from '../styles/styles.styl'

export default props => (
  <header className={styles.header}>
    <h1>
      <Link to='/'>React App</Link>
    </h1>

    <nav>
      <Link to='/about'>About</Link>
    </nav>
  </header>
)