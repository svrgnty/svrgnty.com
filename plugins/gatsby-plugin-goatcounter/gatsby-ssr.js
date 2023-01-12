'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPreBodyComponents = _ref.setPreBodyComponents,
      setPostBodyComponents = _ref.setPostBodyComponents,
      pathname = _ref.pathname;
  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  var excludePaths = [];

  if (Array.isArray(pluginOptions.exclude)) {
    var Minimatch = require('minimatch').Minimatch;

    pluginOptions.exclude.map(function (exclude) {
      var mm = new Minimatch(exclude);
      excludePaths.push(mm.makeRe(exclude));
    });
  }

  var settings = {
    no_onload: true
  };
  if (pluginOptions.allowLocal) settings.allow_local = true;
  setComponents([React.createElement("script", {
    key: "gatsby-plugin-goatcounter-config",
    dangerouslySetInnerHTML: {
      // prettier-ignore
      __html: 'window.goatcounter={' + Object.entries(settings).reduce(function (acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            val = _ref3[1];

        return "".concat(acc).concat(key, ":").concat(val, ",");
      }, '') + (pluginOptions.referrer === true ? "referrer:function(){return window.goatcounter.get_query('ref')||window.goatcounter.get_query('utm_source')||document.referrer;}," : '') + (typeof pluginOptions.referrer === 'function' ? "referrer:".concat(pluginOptions.referrer) : '') + '};' + (excludePaths.length ? "window.GPGC_ExcludePaths=[".concat(excludePaths, "];") : '') + (pluginOptions.urlCleanup === true ? "window.GPGC_CleanPath=function(){var l=document.location;var p=l.pathname;var s=l.search.substring(1).split('&').filter(function(x){return !/^(utm_.*=|ref=)/.test(x)}).join('&');return p+(s.length?'?'+s:'')+l.hash;};window.GPGC_PostCountCallback=function(){window.history.replaceState({},document.title,window.GPGC_CleanPath());};" : '') // (typeof pluginOptions.postCountCallback === 'function' ? `window.GPGC_PostCountCallback=${pluginOptions.postCountCallback};` : '')

    }
  }), React.createElement("script", {
    key: "gatsby-plugin-goatcounter",
    async: true,
    "data-goatcounter": "https://".concat(pluginOptions.code, ".goatcounter.com/count"),
    src: "https://gc.zgo.at/count.js"
  })]);

  if (pluginOptions.pixel) {
    setPreBodyComponents([React.createElement("noscript", {
      key: "gatsby-plugin-goatcounter-noscript"
    }, React.createElement("img", {
      src: "https://".concat(pluginOptions.code, ".goatcounter.com/count?p=").concat(pathname)
    }))]);
  }
};

exports.onRenderBody = onRenderBody;
//# sourceMappingURL=gatsby-ssr.js.map
