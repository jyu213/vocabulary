const Code = {
  SUCCESS: 0,
  ERROR: 1,
  NEED_LOGIN: 10,
  CANNOT_LOGIN: 12,
  NO_AUTH: 20,
  ILLEGAL_ARGUMENT: 2,
};

module.exports = class ServerResponse {
  constructor(code, msg, data) {
    this.code = code;
    this.message = msg;
    this.data = data;
  }
  static onSuccess(data) {
    return new ServerResponse(Code.SUCCESS, null, data || null);
  }
  static onError(msg, code = Code.ERROR) {
    return new ServerResponse(code, msg, null);
  }
  static needLogin() {
    return new ServerResponse(Code.NEED_LOGIN, 'User login failed');
  }
  static noAuth() {
    return new ServerResponse(Code.NO_AUTH, 'User does not have permission');
  }
};
