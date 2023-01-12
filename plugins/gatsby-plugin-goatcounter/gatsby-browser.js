Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var isProduction = process.env.NODE_ENV === 'production';
var onRouteUpdate = function onRouteUpdate(_ref) {
  var _opts$localStorageKey, _window, _window$GPGC_ExcludeP;

  var location = _ref.location;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var lsKey = (_opts$localStorageKey = opts.localStorageKey) !== null && _opts$localStorageKey !== void 0 ? _opts$localStorageKey : 'skipgc';

  if (opts.allowLocal !== true) {
    if (window.location.hash === "#".concat(lsKey)) {
      localStorage.setItem(lsKey, 't');
    }

    if (window.localStorage.getItem(lsKey) === 't') {
      return null;
    }
  }

  var pathIsExcluded = window.location && ((_window = window) === null || _window === void 0 ? void 0 : (_window$GPGC_ExcludeP = _window.GPGC_ExcludePaths) === null || _window$GPGC_ExcludeP === void 0 ? void 0 : _window$GPGC_ExcludeP.some(function (rx) {
    return rx.test(window.location.pathname);
  }));
  if (!isProduction && !opts.allowLocal || pathIsExcluded) return null; // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299

  var sendPageView = function sendPageView() {
    var _ref2, _window2, _window2$GPGC_CleanPa, _window3, _window3$GPGC_PostCou;

    var path = (_ref2 = (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$GPGC_CleanPa = _window2.GPGC_CleanPath) === null || _window2$GPGC_CleanPa === void 0 ? void 0 : _window2$GPGC_CleanPa.call(_window2)) !== null && _ref2 !== void 0 ? _ref2 : location.pathname + location.search + location.hash;

    var settings = _objectSpread2({}, window.goatcounter, {
      path: path
    });

    settings.referrer = function () {
      var _ref3, _ref4, _window$goatcounter, _window$goatcounter$g, _window$goatcounter2, _window$goatcounter2$;

      return (_ref3 = (_ref4 = (_window$goatcounter = window.goatcounter) === null || _window$goatcounter === void 0 ? void 0 : (_window$goatcounter$g = _window$goatcounter.get_query) === null || _window$goatcounter$g === void 0 ? void 0 : _window$goatcounter$g.call(_window$goatcounter, 'ref')) !== null && _ref4 !== void 0 ? _ref4 : (_window$goatcounter2 = window.goatcounter) === null || _window$goatcounter2 === void 0 ? void 0 : (_window$goatcounter2$ = _window$goatcounter2.get_query) === null || _window$goatcounter2$ === void 0 ? void 0 : _window$goatcounter2$.call(_window$goatcounter2, 'utm_source')) !== null && _ref3 !== void 0 ? _ref3 : document.referrer;
    };

    window.goatcounter.count(settings);
    (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$GPGC_PostCou = _window3.GPGC_PostCountCallback) === null || _window3$GPGC_PostCou === void 0 ? void 0 : _window3$GPGC_PostCou.call(_window3);
  }; // ensure asynchronously loaded window.goatcounter.count is available


  var t = window.setInterval(function () {
    var _window$goatcounter3;

    if ((_window$goatcounter3 = window.goatcounter) === null || _window$goatcounter3 === void 0 ? void 0 : _window$goatcounter3.count) {
      window.clearInterval(t); // Minimum delay for reactHelmet's requestAnimationFrame

      var delay = Math.max(32, opts.pageTransitionDelay || 0);
      window.setTimeout(sendPageView, delay);
    }
  }, 100);
  return null;
};

exports.onRouteUpdate = onRouteUpdate;
//# sourceMappingURL=gatsby-browser.js.map
