global.ctx = {
  log(msg) {
    console.log(msg)
  }
}
ctx.options = require('./my.config')

const copy = require('./helpers/copy')
const clean = require('./helpers/clean')
const complier = require('./helpers/complier')

process.env.NODE_ENV = 'production'
clean()
complier()
copy()
