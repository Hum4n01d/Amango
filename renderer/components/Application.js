import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import WebView from 'react-electron-web-view'

class Application extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>Amango</h1>

        <Tabs onSelect={this.handleSelect} forceRenderTabPanel={true}>
          <TabList>
            {
              this.props.initalTabs.map((site, index) => {
                return (
                  <Tab key={index}>{site.title}</Tab>
                )
              })
            }
          </TabList>

          {
            this.props.initalTabs.map((site, index) => {
              return (
                <TabPanel key={index}>
                  <WebView src={site.url} partition={"persist" + index}></WebView>
                </TabPanel>
              )
            })
          }
        </Tabs>
      </div>
    )
  }
}
Application.PropTypes = {
  initalTabs: PropTypes.array.isRequired
}

export default Application