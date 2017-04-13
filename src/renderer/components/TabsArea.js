import React, {Component} from "react"
import PropTypes from "prop-types"

import {Tab, TabList, TabPanel, Tabs} from "react-tabs"

import WebViewWrapper from "./WebViewWrapper"
import Favicon from "./Favicon"

class TabsArea extends Component {
  PropTypes = {
    initalTabs: PropTypes.array.isRequired
  }
  state = {
    tabs: this.props.initalTabs,
    randomThing: 'nothing yet'
  }
  
  constructor(props) {
    super(props)
    Tabs.setUseDefaultStyles(false)
    
    this.handleSelect = this.handleSelect.bind(this)
  }
  
  handleSelect(index, last) {
    const newTabClicked = index + 1 === this.state.tabs.length
    
    if (newTabClicked) {
      // Copy current tabs
      let newTabs = [...this.state.tabs]
      
      // Insert new tab
      newTabs.splice(newTabs.length - 1, 0, {
        url: 'https://heroku.com',
        title: 'Heroku'
      })
      
      // Update state
      this.setState((prevState, props) => {
        return {
          tabs: newTabs
        }
      })
    }
  }
  
  render() {
    return (
      <Tabs onSelect={this.handleSelect} forceRenderTabPanel={true} selectedIndex={2}>
        <TabList>
          {
            this.state.tabs.map((site, index) => {
              return (
                <Tab key={index}>
                  <Favicon url={site.url}/>
                  <p>{site.title}</p>
                </Tab>
              )
            })
          }
        </TabList>
        {
          this.state.tabs.map((site, index) => {
            return (
              <TabPanel key={index}>
                <WebViewWrapper src={site.url} index={index}/>
              </TabPanel>
            )
          })
        }
      </Tabs>
    )
  }
}

export default TabsArea