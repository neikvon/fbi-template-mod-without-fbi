const rm = require('rimraf')

module.exports = function clean () {
  // rm.sync(ctx.options.dist)
  rm.sync('./dst/')
  console.log(`deleted:   ./dst/`)
}
