'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// NOTE: OutboundLink use ref as replacement for GAs eventLabel?

var useGoatCounter = function useGoatCounter() {
  var _useState = react.useState({
    count: function count(_) {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  react.useEffect(function () {
    var t = window.setInterval(function () {
      var _window$goatcounter;

      if ((_window$goatcounter = window.goatcounter) === null || _window$goatcounter === void 0 ? void 0 : _window$goatcounter.count) {
        window.clearInterval(t);
        setCount({
          count: window.goatcounter.count
        });
      }
    }, 100);
    return function () {
      window.clearInterval(t);
    };
  }, []);
  return count.count;
};

exports.useGoatCounter = useGoatCounter;
//# sourceMappingURL=index.js.map
