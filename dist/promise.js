"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.promise = promise;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function promise() {

  //Node Env don't load image.
  var preloadImage = function preloadImage(path) {
    return new _promise2.default(function (resolve, reject) {
      /*  const image = new Image();
        image.onload  = resolve;
        image.onerror = rejecct;
        image.src = path;
        */
      resolve();
    });
  };

  preloadImage("http://www.baidu.com/img/bd_logo1.png?where=super").then(function () {
    console.log("Baidu Image Loaded!");
  }).catch(function (err) {
    console.log("Baidu Image Load error. error: " + err.message);
  });

  function timeout(ms) {
    return new _promise2.default(function (resolve, reject) {
      setTimeout(resolve, ms, 'time done');
    });
  }

  timeout(100).then(function (value) {
    console.log(value);
  });
}
//# sourceMappingURL=promise.js.map
