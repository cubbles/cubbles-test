'use strict';

module.exports = {
  verbose: true,
  root: '.',
  plugins: {
    local: {
      browsers: [ 'chrome', 'firefox' ],
      options: { remote: false }
    }
  }
};
