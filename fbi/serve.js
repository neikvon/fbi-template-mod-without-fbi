global.ctx = {
  log(msg) {
    console.log(msg)
  }
}
ctx.options = require('./my.config')

const copy = require('./helpers/copy')
const clean = require('./helpers/clean')
const watch = require('./helpers/watch')
const complier = require('./helpers/complier')
const nodemon = require('nodemon')

// start server
function startServer () {
  // nodemon(`${ctx.options.mainFile} --config fbi/config/nodemon.json`)
  nodemon(`dst/index.js --config fbi/config/nodemon.json`)

  nodemon
    .on('start', () => {
      console.log('Service started', 1)
    })
    .on('quit', () => {
      console.log('Service quit', -1)
    })
    .on('restart', files => {
      console.log(`Service restarted`, 1)
    })
    .on('crash', () => {
      console.log('Service crashed for some reason', 0)
    })
}

clean()
complier()
copy()
watch()
startServer()
