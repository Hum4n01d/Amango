import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import WebView from 'react-electron-web-view'

class TabsArea extends Component {
  PropTypes = {
    initalTabs: PropTypes.array.isRequired
  }
  state = {
    tabs: this.props.initalTabs
  }
  constructor(props) {
    super(props)
    Tabs.setUseDefaultStyles(false)

    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(index, last) {
    console.log(`Tab ${index} selected`)

    if (index+1 === this.state.tabs.length) {
      // Clones the current tabs
      const updatedTabs = this.state.tabs.slice() 
      
      updatedTabs.splice(this.state.tabs.length-1, 0, {
        url: 'https://apple.com',
        title: 'Apple\'s Website'
      })

      this.setState({
        tabs: updatedTabs
      })
    }
  }
  render() {
    return (
      <Tabs onSelect={this.handleSelect} forceRenderTabPanel={true}>
        <TabList>
          {
            this.state.tabs.map((site, index) => {
              return (
                <Tab key={index}>{site.title}</Tab>
              )
            })
          }
        </TabList>
        {
          this.state.tabs.map((site, index) => {
            return (
              <TabPanel key={index}>
                <WebView src={site.url} partition={"persist" + index}></WebView>
              </TabPanel>
            )
          })
        }
      </Tabs>
    )
  }
}

export default TabsArea