
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(568);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _styledComponents = __webpack_require__(574);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = __webpack_require__(548);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\chat\\pages\\index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    width:200px;\n    height:200px;\n    overflow:auto;\n"], ["\n    width:200px;\n    height:200px;\n    overflow:auto;\n"]);

var ChatBox = _styledComponents2.default.div(_templateObject);

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = { value: "Hello", name: "", nameField: "" };
    _this.contentAdder = _this.contentAdder.bind(_this);
    _this.nameEntered = _this.nameEntered.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "contentAdder",
    value: function contentAdder() {
      $(".chatBox").first().append("<br/>" + this.state.value);
      var wtf = $(".chatBox").first();
      var height = wtf[0].scrollHeight;
      wtf.scrollTop(height);
    }
  }, {
    key: "nameEntered",
    value: function nameEntered() {
      var theName = "";
      if (this.state.nameField == "") {
        this.setState({ name: "" });
      } else {
        this.setState({ name: this.state.nameField });
        (0, _axios2.default)({
          method: "post",
          url: "http://localhost:3001/names",
          data: { name: "Goon3" }
          // axios({
          //   method: "get",
          //   url: "http://localhost:3001/names?name=Goon3"
          // })
          // axios
          //   .get("http://localhost/save/Goon")
          // axios
          //   .get("http://localhost:3001/names?name=Goon1")
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "My page title"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement("input", {
        value: this.state.nameField,
        onChange: function onChange(e) {
          _this2.setState({ nameField: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement("button", { onClick: this.nameEntered, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Submit Name"), _react2.default.createElement(ChatBox, { className: "chatBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.state.name));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\chat\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\chat\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

},[576]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZDk5Nzk0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDaGF0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuYDtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IFwiSGVsbG9cIiwgbmFtZTogXCJcIiwgbmFtZUZpZWxkOiBcIlwiIH07XHJcbiAgICB0aGlzLmNvbnRlbnRBZGRlciA9IHRoaXMuY29udGVudEFkZGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5hbWVFbnRlcmVkID0gdGhpcy5uYW1lRW50ZXJlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBjb250ZW50QWRkZXIoKSB7XHJcbiAgICAkKFwiLmNoYXRCb3hcIikuZmlyc3QoKS5hcHBlbmQoXCI8YnIvPlwiICsgdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICB2YXIgd3RmID0gJChcIi5jaGF0Qm94XCIpLmZpcnN0KCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gd3RmWzBdLnNjcm9sbEhlaWdodDtcclxuICAgIHd0Zi5zY3JvbGxUb3AoaGVpZ2h0KTtcclxuICB9XHJcbiAgbmFtZUVudGVyZWQoKSB7XHJcbiAgICB2YXIgdGhlTmFtZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lRmllbGQgPT0gXCJcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogXCJcIiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiB0aGlzLnN0YXRlLm5hbWVGaWVsZCB9KTtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9uYW1lc1wiLFxyXG4gICAgICAgIGRhdGE6IHsgbmFtZTogXCJHb29uM1wiIH1cclxuICAgICAgfSlcclxuICAgICAgICAvLyBheGlvcyh7XHJcbiAgICAgICAgLy8gICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgLy8gICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVzP25hbWU9R29vbjNcIlxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gYXhpb3NcclxuICAgICAgICAvLyAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0L3NhdmUvR29vblwiKVxyXG4gICAgICAgIC8vIGF4aW9zXHJcbiAgICAgICAgLy8gICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVzP25hbWU9R29vbjFcIilcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZSB0aXRsZTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjIuMS9qcXVlcnkubWluLmpzXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lRmllbGR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lRmllbGQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5uYW1lRW50ZXJlZH0+U3VibWl0IE5hbWU8L2J1dHRvbj5cclxuICAgICAgICA8Q2hhdEJveCBjbGFzc05hbWU9XCJjaGF0Qm94XCIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFhQTtBQWRBO0FBaUJBO0FBRUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBRUE7QUFGQTs7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        