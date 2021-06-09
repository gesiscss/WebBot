'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable multiline-ternary, no-void */


var _babelCore = require('babel-core');

var _babelPresetMinify = require('babel-preset-minify');

var _babelPresetMinify2 = _interopRequireDefault(_babelPresetMinify);

var _webpackSources = require('webpack-sources');

var _ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');

var _ModuleFilenameHelpers2 = _interopRequireDefault(_ModuleFilenameHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDefault(actualValue, defaultValue) {
  return actualValue !== void 0 ? actualValue : defaultValue;
}

function optimizeChunkAssets(compilation, options, chunks) {
  chunks.reduce(function (acc, chunk) {
    return acc.concat(chunk.files || []);
  }, []).concat(compilation.additionalChunkAssets || []).filter(_ModuleFilenameHelpers2.default.matchObject.bind(null, options)).forEach(function (file) {
    try {
      var asset = compilation.assets[file];

      if (asset.__babelminified) {
        compilation.assets[file] = asset.__babelminified;
        return;
      }

      var input = void 0;
      var inputSourceMap = void 0;

      if (options.sourceMap) {
        if (asset.sourceAndMap) {
          var sourceAndMap = asset.sourceAndMap();
          inputSourceMap = sourceAndMap.map;
          input = sourceAndMap.source;
        } else {
          inputSourceMap = asset.map();
          input = asset.source();
        }
      } else {
        input = asset.source();
      }

      // do the transformation
      var result = options.babel.transform(input, {
        parserOpts: options.parserOpts,
        presets: [[options.minifyPreset, options.minifyOpts]],
        sourceMaps: options.sourceMap,
        babelrc: false,
        inputSourceMap,
        shouldPrintComment(contents) {
          return shouldPrintComment(contents, options.comments);
        }
      });

      asset.__babelminified = compilation.assets[file] = result.map ? new _webpackSources.SourceMapSource(result.code, file, result.map, input, inputSourceMap) : new _webpackSources.RawSource(result.code);
    } catch (e) {
      compilation.errors.push(e);
    }
  });
}

function compilationFn(compilation) {
  var options = this.options,
      plugin = this.plugin;


  if (compilation.hooks) {
    if (options.sourceMap) {
      compilation.hooks.buildModule.tap(plugin, function (module) {
        module.useSourceMap = true;
      });
    }

    compilation.hooks.optimizeChunkAssets.tapAsync(plugin, function (chunks, callback) {
      optimizeChunkAssets(compilation, options, chunks);
      callback();
    });
  } else {
    if (options.sourceMap) {
      compilation.plugin('build-module', function (module) {
        module.useSourceMap = true;
      });
    }

    compilation.plugin('optimize-chunk-assets', function (chunks, callback) {
      optimizeChunkAssets(compilation, options, chunks);
      callback();
    });
  }
}

var BabelMinifyPlugin = function () {
  function BabelMinifyPlugin() {
    var minifyOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var pluginOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BabelMinifyPlugin);

    this.plugin = { name: 'BabelMinifyPlugin' };

    this.options = {
      parserOpts: pluginOpts.parserOpts || {},
      minifyPreset: pluginOpts.minifyPreset || _babelPresetMinify2.default,
      minifyOpts,
      babel: pluginOpts.babel || { transform: _babelCore.transform },
      comments: getDefault(pluginOpts.comments, /^\**!|@preserve|@license|@cc_on/),
      // compiler.options.devtool overrides options.sourceMap if NOT set
      // so we set it to void 0 as the default value
      sourceMap: getDefault(pluginOpts.sourceMap, void 0),
      test: pluginOpts.test || /\.js($|\?)/i,
      include: pluginOpts.include || void 0,
      exclude: pluginOpts.exclude || void 0
    };
  }

  _createClass(BabelMinifyPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var options = this.options;
      // if sourcemap is not set

      options.sourceMap = getDefault(options.sourceMap, !!compiler.options.devtool);

      if (compiler.hooks) {
        var compilation = compiler.hooks.compilation;


        compilation.tap(this.plugin, compilationFn.bind(this));
      } else {
        compiler.plugin('compilation', compilationFn.bind(this));
      }
    }
  }]);

  return BabelMinifyPlugin;
}();

exports.default = BabelMinifyPlugin;


function shouldPrintComment(contents, checker) {
  switch (typeof checker) {
    case 'function':
      return checker(contents);
    case 'object':
      return checker.test(contents);
    default:
      return !!checker;
  }
}