const devices = require('./devices_common.json')
const fs = require('fs')


devices.forEach(device => {
   switch(device.device_level) {
     case 1:
       device.device_level = '极低'
       break
     case 2:
       device.device_level = '低'
       break
     case 3:
       device.device_level = '中'
       break
     case 4:
       device.device_level = '高'
       break
     default:
       device.device_level = '低'
       break
   }
    let data = JSON.stringify(device, null , 2)
    fs.appendFileSync('./devices_bak.json', data)
    fs.appendFileSync('./devices_bak.json', ",\n")

});