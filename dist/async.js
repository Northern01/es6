"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.async = async;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function async() {
  var asyncPrint = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(value, ms) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("start");
              _context.prev = 1;
              _context.next = 4;
              return timeout(ms);

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);

              console.log(_context.t0);

            case 9:
              console.log("end - " + value);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 6]]);
    }));

    return function asyncPrint(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  function timeout(ms) {
    return new _promise2.default(function (resolve, reject) {
      setTimeout(function () {
        console.log("Hello I am here!!");
        reject("I reject it");
      }, ms);
    });
  }

  asyncPrint('Test', 50);
}
//# sourceMappingURL=async.js.map
