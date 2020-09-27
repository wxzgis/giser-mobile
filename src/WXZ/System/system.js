import CryptoJS from './modules/crypto-js.min.js'

namespace.reg('WXZ.System')

WXZ.System = {
  /** 
   * @function createGuid
   * @description 生成guid
   * @memberof js.ext
   * @param {String} joiner 连接符，默认无连接符.
   * @param {Number} length 长度，默认8位.
   * @returns {String} guid.
   */
  createGuid (joiner = '', length = 8) {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    var num = length / 4;
    var s = [];
    for (var i = 0; i < num; i++) {
      s.push(S4());
    }
    return s.join(joiner);
  },
  /**
   * 设置Cookie
   * @memberof js.system
   * @param {String} name Cookie名称.
   * @param {Object} value Cookie值.
   */
  setCookie (name, value, time = 5) {
    var exp = new Date();  //获得当前时间  
    exp.setTime(exp.getTime() + time * 60 * 1000);  //换成毫秒  
    var cookieinfo = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    document.cookie = cookieinfo;
  },
  /**
  * 删除Cookie
  * @memberof js.system
  * @param {String} name Cookie名称.
  */
  delCookie (name) {
    var exp = new Date();  //当前时间  
    exp.setTime(exp.getTime() - 1);
    var cval = WXZ.System.getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  },
  /**
  * 获取Cookie
  * @memberof js.system
  * @param {String} name Cookie名称.
  * @returns {Object} Cookie值.
  */
  getCookie (name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return unescape(arr[2]);
    } else {
        return null;
    }
  },
  
  enCrypt (msg) {
    return CryptoJS.AES.encrypt(msg,  CryptoJS.enc.Utf8.parse('wjwxzwzgdwsgiser'), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  },
  
  deCrypt (msg) {
    return CryptoJS.AES.decrypt(msg, CryptoJS.enc.Utf8.parse('wjwxzwzgdwsgiser'), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
  }
}
