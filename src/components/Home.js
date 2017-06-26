import React from 'react'
import {Link} from 'react-router-dom'

import Layout from './Layout.js'

const Home = () => (
  <div>
    <h1>Hi! I'm Hum4n01d (Humanoid)</h1>
    <p>
      This is my website! Go to the <Link to='/about'>about page</Link> for more information about me. If you want to see my work, go to the <Link to='/portfolio'>portfolio page</Link>.
    </p>
  </div>
);

export default Home