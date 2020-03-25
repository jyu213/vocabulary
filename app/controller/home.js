'use strict';
const Controller = require('./baseController');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('index');
  }
  async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.word.list({});
  }
  async add() {
    const { ctx } = this;
    const { word, phonetic, desc, tags } = ctx.request.body;

    const result = await ctx.service.word.add({
      word, phonetic, desc, tags,
    });
    ctx.body = result;
  }
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    const result = await ctx.service.word.delete({
      id,
    });
    ctx.body = result;
  }
}

module.exports = HomeController;
