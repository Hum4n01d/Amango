import React from "react"
import {render} from "react-dom"
import Application from "./components/Application"

const initalTabs = [
  {
    url: "https://soundcloud.com/hum4n01dmusic",
    title: "Hum4n01d Soundcloud"
  }, {
    url: "https://google.com",
    title: "Google"
  }, {
    url: "https://mail.google.com",
    title: "Gmail"
  }
]

render(
  <Application initalTabs={initalTabs}/>,
  document.querySelector('#root')
)
