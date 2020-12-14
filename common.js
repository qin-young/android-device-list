const devices = require('./devices_new.json')
const fs = require('fs')
const common = ['OPPO', 'LGE', 'APPLE', 'Google', 'HUAWEI', 'Xiaomi', 'vivo', 'OnePlus', 'deltainno', 'samsung', 'SHARP', 'asus', 'smartisan'
, 'HTC', 'meizu', 'nubia', 'blackshark', 'unknown', 'alps', 'china', 'realme', 'LeMobile', 'motorola', 'GIONEE', 'Lenovo', 'Meitu', 'Letv',
'Coolpad', 'Sony', 'Hisense', 'YuLong'
]

devices.forEach(device => {
  if(common.indexOf(device.manufacturer) !== -1){
    let data = JSON.stringify(device, null , 2)
    fs.appendFileSync('./devices_common.json', data)
    fs.appendFileSync('./devices_common.json', ",\n")
  }else{
    return
  }
});