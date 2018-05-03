'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.generator = generator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generator() {

  function run(fn) {
    var gen = fn();

    function next(data) {
      var result = gen.next(data);
      if (result.done) return;
      result.value(next);
    }

    next();
  }

  var Thunk = function Thunk(fileName) {
    return function (callback) {
      setTimeout(function () {
        console.log(fileName);
        callback();
      }, 300);
    };
  };

  var g = /*#__PURE__*/_regenerator2.default.mark(function g() {
    var f1, f2, fn;
    return _regenerator2.default.wrap(function g$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Thunk('fileA');

          case 2:
            f1 = _context.sent;
            _context.next = 5;
            return Thunk('fileB');

          case 5:
            f2 = _context.sent;
            _context.next = 8;
            return Thunk('fileC');

          case 8:
            fn = _context.sent;

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, g, this);
  });

  run(g);
}
//# sourceMappingURL=generator.js.map
