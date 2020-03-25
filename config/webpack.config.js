'use strict';

const path = require('path');

module.exports = (app, defaultConfig) => {

  return {
    ...defaultConfig,
    // entry: {
    //   login: [path.join(__dirname, '../client/pages/login/index.jsx')],
    //   main: [path.join(__dirname, '../client/pages/dashboard/index.jsx')],
    // },

    resolve: {
      // extensions: ['.json', '.js', '.jsx'],
      alias: {
        client: path.join(__dirname, '../client'),
      },
    },
  };
};
