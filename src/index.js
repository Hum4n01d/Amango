import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader' // AppContainer is a necessary wrapper component for HMR

import Router from './router'

ReactDOM.render(
  <Router/>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept()
}