'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // API
  router.get('/api/words/list', controller.home.list);
  router.post('/api/words/add', controller.home.add);
  router.post('/api/words/delete', controller.home.delete);
};
