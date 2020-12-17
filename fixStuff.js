const fse = require('fs-extra')

// let files = fse.readdirSync('public/img')
// files.forEach(filename => {
//   let newName = Buffer.from(
//     Buffer.from(filename.slice(0, -4), 'base64').toString('ascii').slice(0, -1).split(' // ')[0]
//   ).toString('base64') + '.png'
//   fse.copy('public/img/'+filename, 'public/img/'+newName)
// })

fse.writeJSONSync('public/data/cube.json', {
  ...fse.readJSONSync('public/data/cube.json'),
  ...fse.readJSONSync('public/data/basics.json')
})
