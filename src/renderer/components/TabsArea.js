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
    tabs: this.props.initalTabs
  }
  
  constructor(props) {
    super(props)
    Tabs.setUseDefaultStyles(false)
    
    this.handleSelect = this.handleSelect.bind(this)
  }
  
  handleSelect(index, last) {
    let lastTab = this.state.tabs.length - 1

    if (index === lastTab) {
      let newTabs = this.state.tabs.slice()

      newTabs.splice(newTabs.length - 1, 0, {
        title: 'bad website',
        url: 'http://isuch.pro'
      })

      this.setState({
        tabs: newTabs
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