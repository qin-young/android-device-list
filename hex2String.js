// const devices = require( './devices.json' );
// const fs = require('fs')
// const devicesBak = []

function hex2String(str) {
  str = str.split('\\x').join('%')
  return decodeURI(str)
}


// devices.forEach(device => {
//   if(device.name.indexOf('\\x') !== -1){
//      device.name = hex2String(device.name)
//   }
//   if(device.brand.indexOf('\\') !== -1){
//     device.brand = hex2String(device.brand)
//   }
//   let data = JSON.stringify(device, null , 2)
//   fs.appendFileSync('./devices_bak.json', data)
//   fs.appendFileSync('./devices_bak.json', ",\n")
// })


