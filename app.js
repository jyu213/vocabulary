'use strict';

module.exports = app => {
  app.ready(async () => {
    if (app.config.env === 'local' || app.config.env === 'unittest') {
      await app.model.sync();
    }
  });
};
