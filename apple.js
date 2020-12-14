const fs = require('fs')
// var apples = {}

const data = fs.readFileSync('./apple.txt', 'utf-8')
const lines = data.split('&')

lines.forEach(line => {
  let device = line.split('|')
  let tmp = {}
  tmp.device_model = device[0].trim()
  tmp.device_model_alias = device[0].trim()
  tmp.device_level = 3
  tmp.manufacturer = "APPLE"
  tmp.manufacturer_ext = "苹果apple"
  tmp.device_model_alias_ext = device[1].trim()
  let data = JSON.stringify(tmp, null , 2)
  fs.appendFileSync('./devices_bak.json', data)
  fs.appendFileSync('./devices_bak.json', ",\n")
})