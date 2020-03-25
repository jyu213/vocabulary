const Controller = require('egg').Controller;

class BaseController extends Controller {
  check(res, text, req, msg) {
    if (res && res.status === 0) {
      this.serverSuccess(res.data);
    } else {
      this.serverError(res.msg || text, req, msg);
    }
  }
  serverSuccess(data) {
    const { ctx } = this;
    ctx.body = ctx.response.ServerResponse.onSuccess(data);
    ctx.status = 200;
  }
  serverError(msg, code) {
    const { ctx } = this;
    ctx.body = ctx.response.ServerResponse.onError(msg, code);
    ctx.status = 200;
  }
}

module.exports = BaseController;