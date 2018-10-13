var path = require('path');
var rootPath = path.normalize(__dirname);

module.exports = {
  dev: {
      root: rootPath,
      app: {
        name: 'LiveModularSynth'
      }
  },
  prod: {
      root: rootPath,
      app: {
        name: ''
      }
  }
}
