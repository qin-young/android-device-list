const fs = require('fs')
const devices = require( './devices.json' );
var performance = {}
const LEVELMAP = {
  "极低": 1,
  "低": 2,
  "中": 3,
  "高": 4
}
try{

  const data = fs.readFileSync('./performance.txt', 'utf-8')
  const lines = data.split('&')
  // console.log(lines.length)
  lines.forEach(line => {
    let tmp = line.split("|")
    if(tmp.length !== 2){
      console.log(line)
    }else {
      let model = tmp[0].trim()
      let level = LEVELMAP[tmp[1].trim()]
      performance[model] = level
    }
  })
  // console.log(performance)
}catch(err) {
  console.log(err)
}
console.log(performance['PADT00'])



devices.forEach(device => {
  device.level = performance[device.model] ? performance[device.model] : 0
  let data = JSON.stringify(device, null , 2)
  fs.appendFileSync('./devices_bak.json', data)
  fs.appendFileSync('./devices_bak.json', ",\n")
})

