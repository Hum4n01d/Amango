import React, {Component} from "react"
import PropTypes from "prop-types"

import {Tabs, TabPanel, Tab, TabList} from "react-tabs"
import uuidV4 from 'uuid/v4'
import isUrl from 'is-url'

import Favicon from './Favicon'
import WebViewWrapper from './WebViewWrapper'

export default class TabsArea extends Component {
  PropTypes = {
    initalTabs: PropTypes.array.isRequired
  }
  state = {
    tabs: this.props.initalTabs,
    selectedTabIndex: 2
  }
  constructor(props) {
    super(props)
    Tabs.setUseDefaultStyles(false)
    
    this.handleSelect = this.handleSelect.bind(this)
  }
  closeTab(index) {
    const newTabs = this.state.tabs.slice()
    
    newTabs.splice(index, 1)

    this.setState({
      tabs: newTabs
    })
  }
  handleSelect(index, last) {
    let lastTab = this.state.tabs.length - 1

    if (index === lastTab) {
      let newTabs = this.state.tabs.slice() 

      const newTabData = {
        title: 'New Tab',
        url: '',
        uuid: uuidV4()
      }
      newTabs.splice(newTabs.length - 1, 0, newTabData)

      this.setState({
        tabs: newTabs,
        selectedTabIndex: newTabs.length-2 // Minus two because -1 for tab before new tab and then minus one again because react tabs starts at 1
      })
    }
  }
  render() {
    return (
      <Tabs onSelect={this.handleSelect} forceRenderTabPanel={true} selectedIndex={this.state.selectedTabIndex}>
        <TabList>
          {
            this.state.tabs.map((site, index) => {
              const shouldHaveCloseTab = isUrl(site.url)

              return (
                <Tab key={site.uuid}>
                  <Favicon url={site.url}/>
                  <p>{site.title}</p>

                  {
                    shouldHaveCloseTab ? <img className='close-button' src='./images/close.svg' onClick={() => this.closeTab(index)}/> : <span></span>
                  }
                </Tab>
              )
            })
          }
        </TabList>
        {
          this.state.tabs.map(site => {
            return (
              <TabPanel key={site.uuid}>
                <WebViewWrapper src={site.url} index={site.uuid}/>
              </TabPanel>
            )
          })
        }
        {/*Fake for new tab button*/}
      </Tabs>
    )
  }
}