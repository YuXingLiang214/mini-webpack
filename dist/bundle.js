(function(graph){
        function require(file) {
            var exports = {};
            function absRequire(relPath){
                return require(graph[file].deps[relPath])
            }
            (function(require, exports, code){
                eval(code)
            })(absRequire, exports, graph[file].code)
            return exports
        }
        require('./src/index.js')
    })({"./src/index.js":{"deps":{"./minus.js":"./src/minus.js","./add.js":"./src/add.js"},"code":"\"use strict\";\n\nvar _minus = _interopRequireDefault(require(\"./minus.js\"));\nvar _add = _interopRequireDefault(require(\"./add.js\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nconsole.log('3-1 = >>>>>>', (0, _minus[\"default\"])(3, 1));\nconsole.log('3+1 = >>>>>>', (0, _add[\"default\"])(3, 1));"},"./src/minus.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n// minus.js \nvar _default = exports[\"default\"] = function _default(a, b) {\n  return a - b;\n};"},"./src/add.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n// add.js \nvar _default = exports[\"default\"] = function _default(a, b) {\n  return a + b;\n};"}})