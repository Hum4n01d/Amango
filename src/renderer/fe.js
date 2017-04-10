const {join} = require('path')
const {readFileSync} = require('fs')

const savePath = join(__dirname, "save/tabs.json")

const initalTabs = JSON.parse(readFileSync(savePath).toString()).tabs

console.log(initalTabs)