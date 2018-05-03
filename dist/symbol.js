'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getOwnPropertySymbols = require('babel-runtime/core-js/object/get-own-property-symbols');

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

exports.symbol = symbol;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function symbol() {
    var _console, _console2, _console3;

    var size = (0, _symbol2.default)('size');

    var Collection = function () {
        function Collection() {
            (0, _classCallCheck3.default)(this, Collection);

            this[size] = 0;
        }

        (0, _createClass3.default)(Collection, [{
            key: 'add',
            value: function add(item) {
                this[this[size]] = item;
                this[size]++;
            }
        }], [{
            key: 'sizeOf',
            value: function sizeOf(instance) {
                return instance[size];
            }
        }]);
        return Collection;
    }();

    var x = new Collection();
    console.log(Collection.sizeOf(x));

    x.add('foo');
    console.log(Collection.sizeOf(x));

    console.log((0, _keys2.default)(x));
    console.log((0, _getOwnPropertyNames2.default)(x));
    console.log((0, _getOwnPropertySymbols2.default)(x));

    var array = [5, 5, 6, 6, 7, 7, 7, 5, 3, 2, 2];
    var newArr = [].concat((0, _toConsumableArray3.default)(new _set2.default(array)));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(newArr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            console.log("setArray: " + i);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var a = new _set2.default([1, 2, 3]);
    var b = new _set2.default([4, 3, 2]);

    // 并集
    var union = new _set2.default([].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b)));
    (_console = console).log.apply(_console, (0, _toConsumableArray3.default)(union));

    // 交集
    var intersect = new Array([].concat((0, _toConsumableArray3.default)(a)).filter(function (x) {
        return b.has(x);
    }));
    (_console2 = console).log.apply(_console2, intersect);

    // 差集
    var difference = new Array([].concat((0, _toConsumableArray3.default)(a)).filter(function (x) {
        return !b.has(x);
    }));
    (_console3 = console).log.apply(_console3, difference);
}
//# sourceMappingURL=symbol.js.map
