'use strict';

const Service = require('egg').Service;

class Words extends Service {
  constructor(ctx) {
    super(ctx);
    this.WordModel = ctx.model.Word;
    this.ServerResponse = ctx.response.ServerResponse;
  }
  async list(body) {
    const { pageSize = 20, page = 1 } = body;
    // const s = this.app.Sequelize;
    // const Op = s.Op;
    const ps = parseInt(pageSize || 10);
    const pn = parseInt(page ? parseInt(page) - 1 : 0);
    try {
      const list = await this.WordModel.findAll({
        offset: ps * pn, limit: ps,
        order: [[ 'created_at', 'DESC' ]],
      });
      const total = await this.WordModel.count();
      return this.ServerResponse.onSuccess({
        list, total,
      });
    } catch (err) {
      this.ctx.logger.error(err.message);
      return this.ServerResponse.onError();
    }

    // const { pageSize, page, search } = body;
    // const s = this.app.Sequelize;
    // const Op = s.Op;
    // const ps = parseInt(pageSize || 10);
    // const pn = parseInt(page ? parseInt(page) - 1 : 0);
    // const obj = {
    //   attributes: [ 'id', 'username', 'role', 'create_time', 'update_time' ],
    //   offset: ps * pn, limit: ps,
    //   order: [[ 'create_time', 'DESC' ]],
    // };
    // let list = [];
    // let total = 0;
    // try {
    //   if (search) {
    //     list = await this.UserModel.findAll(Object.assign({}, obj, { where: { username: { [Op.like]: `%${search}%` } } }));
    //     total = await this.UserModel.count(Object.assign({}, obj, { where: { username: { [Op.like]: `%${search}%` } } }));
    //   } else {
    //     list = await this.UserModel.findAll(obj);
    //     total = await this.UserModel.count();
    //   }
    //   return this.ServerResponse.onSuccess({ list, total });
    // } catch (e) {
    //   this.ctx.logger.error(e.message);
    //   return this.ServerResponse.onError();
    // }
  }
  async add({ word = '', phonetic = '', desc = '', tags = '' }) {
    try {
      const result = this.WordModel.create({
        word, phonetic, desc, tags,
      });
      if (!result) {
        return this.ServerResponse.onError();
      }
      return this.ServerResponse.onSuccess();
    } catch (err) {
      this.ctx.logger.error(err.message);
      return this.ServerResponse.onError();
    }
  }
  async delete({ id }) {
    if (!id) {
      return this.ServerResponse.onError('miss id');
    }
    try {
      const result = this.WordModel.destroy({ where: { id } });
      if (!result) {
        return this.ServerResponse.onError();
      }
      return this.ServerResponse.onSuccess();
    } catch (err) {
      this.ctx.logger.error(err.message);
      return this.ServerResponse.onError();
    }
  }
}

module.exports = Words;
