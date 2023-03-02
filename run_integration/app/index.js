const configs = require('./config');
const smoke = require('./smoke');
const matrix = require('./matrix');

function run() {
    if (configs.isSmoke()) {
        smoke.run();
      } else {
        matrix.run();
    }
}

module.exports = { run };