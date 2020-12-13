const fs = require('fs')
const devices = require('./devices_with_level.json' )
var manufacturers = {}
try{

  const data = fs.readFileSync('./manufacturer.txt', 'utf-8')
  const lines = data.split('&')
  // console.log(lines.length)
  lines.forEach(line => {
    let tmp = line.split("|")
    if(tmp.length !== 2){
      console.log(line)
    }else {
      let brand = tmp[0].trim()
      let manufacturer_ext = tmp[1].trim()
      manufacturers[brand] = manufacturer_ext
    }
  })
  // console.log(performance)
}catch(err) {
  console.log(err)
}



devices.forEach(device => {
  let tmp = {}
  if(!device.name || !device.brand) return;
  // device.manufacturer_ext = manufacturers[device.brand] ? manufacturers[device.brand] : device.brand.toLowerCase().toString().replace(/ /g, "")
  // device.device_model_alias_ext = device.name.toLowerCase().toString().replace(/ /g, "")
  // device.
  tmp.device_model = device.model
  tmp.device_model_alias = device.name
  tmp.device_level = device.level
  tmp.manufacturer = device.brand 
  tmp.manufacturer_ext = manufacturers[device.brand] ? manufacturers[device.brand] : device.brand.toLowerCase().toString().replace(/ /g, "")
  tmp.device_model_alias_ext = device.name.toLowerCase().toString().replace(/ /g, "")
  let data = JSON.stringify(tmp, null , 2)
  fs.appendFileSync('./devices_bak.json', data)
  fs.appendFileSync('./devices_bak.json', ",\n")
})

