import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import WebView from 'react-electron-web-view'

class TabsArea extends Component {
  PropTypes = {
    initalTabs: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)
    // Tabs.setUseDefaultStyles(false)
  }
  handleSelect(index, last) {
    console.log(`Tab ${index} selected`)
  }
  render() {
    return (
      <Tabs onSelect={this.handleSelect} forceRenderTabPanel={true}>
        <TabList>
          <Tab>Amango</Tab>
          {
            this.props.initalTabs.map((site, index) => {
              return (
                <Tab key={index}>{site.title}</Tab>
              )
            })
          }
          <Tab>+</Tab>
        </TabList>

        <TabPanel>
          <p>Amango Info!</p>
        </TabPanel>
        {
          this.props.initalTabs.map((site, index) => {
            return (
              <TabPanel key={index}>
                <WebView src={site.url} partition={"persist" + index}></WebView>
              </TabPanel>
            )
          })
        }
        {/* Invisible tab for new tab */}
        <TabPanel>New Tab</TabPanel>
      </Tabs>
    )
  }
}

export default TabsArea