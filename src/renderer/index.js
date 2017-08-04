import React from 'react'
import {render} from 'react-dom'
import isDev from 'electron-is-dev'
import { AppContainer } from 'react-hot-loader'

import Store from './store'
import App from './components/App'

const store = new Store()

render(
  <App 
    tabs={store.get('tabs')} 
    activeTab={store.get('activeTab')} 
  />,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept()
}
