import React from 'react'
import ReactDOM from 'react-dom'

import Store from './store'
import App from './components/App'

const store = new Store()

ReactDOM.render(
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
