import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TabsArea from './TabsArea'

const Application = props => {
  return (
    <div>
        <header></header>
        <TabsArea initalTabs={props.initalTabs}/>
    </div>
  )
}
Application.PropTypes = {
  initalTabs: PropTypes.array.isRequired
}

export default Application