import React from 'react'
import {render} from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
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
registerServiceWorker()


if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    
    render(
      <NextApp/>,
      document.getElementById('root')
    )
  })
}