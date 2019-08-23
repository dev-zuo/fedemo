
var CookieUtil = {

  // 获取cookie值
  get: function (name) {
    var cookieName = encodeURIComponent(name) + '=';
    var startIndex = document.cookie.indexOf(cookieName);
    var cookieVal = null;

    // 如果存在该cookie
    if (startIndex !== -1) {
      var endIndex = document.cookie.indexOf(';', startIndex);

      if (endIndex === -1) { // 如果找不到，就是字符串末尾
        endIndex = document.cookie.length;
      }

      cookieVal = decodeURIComponent(document.cookie.substring(startIndex + cookieName.length, endIndex));
    }

    return cookieVal;
  },

  // 设置cookie
  // options: { expires, maxAge, path, domain, secure, httpOnly}
  set: function (name, value, options) {
    var tempVal = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if (options.expires instanceof Date) {
      tempVal += "; expires=" + options.expires.toGMTString();
    }

    if (options.maxAge && typeof options.maxAge === 'number') {
      tempVal += '; max-age=' + options.maxAge;
    }

    if (options.path) {
      tempVal += '; path=' + options.path
    }

    if (options.domain) {
      tempVal += '; domain=' + options.domain
    }

    if (options.secure) {
      tempVal += '; secure';
    }

    if (options.HttpOnly) {
      tempVal += '; HttpOnly';
    }

    document.cookie = tempVal
  },

  // 删除cookie
  // options { path, domain, secure, ... }
  unset: function (name, options) {
    if (typeof options === 'object') {
      options.expires = new Date(0);
    } else {
      options = {expires: new Date(0)}
    }
    this.set(name, "", options);
  }
};