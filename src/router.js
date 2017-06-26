import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Layout>
  </Router>
)
export default Routes
