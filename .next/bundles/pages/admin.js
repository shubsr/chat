
          window.__NEXT_REGISTER_PAGE('/admin', function() {
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _styledComponents = __webpack_require__(567);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = __webpack_require__(548);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\sr_gir\\chat\\pages\\admin.js?entry";


var my_api = "http://192.168.1.15:3001";

var Admin = function (_Component) {
  (0, _inherits3.default)(Admin, _Component);

  function Admin(props) {
    (0, _classCallCheck3.default)(this, Admin);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).call(this, props));

    _this.AllChatGrabber = _this.AllChatGrabber.bind(_this);
    _this.contentAdder = _this.contentAdder.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Admin, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.AllChatGrabber();
    }
  }, {
    key: "contentAdder",
    value: function contentAdder(data) {
      var i = 0;
      while (i < data.length) {
        if (data[i].responded != 1) {
          $(".chats-contrainer").first().append("<div style='background:#ddd' onClick=window.open('/admin-chat/" + data[i].code + "','_self')>" + data[i].name + "</div><div style='clear:both;'></div>");
        } else {
          $(".chats-contrainer").first().append("<div onClick=window.open('/admin-chat/" + data[i].code + "','_self')>" + data[i].name + "</div><div style='clear:both;'></div>");
        }
        i++;
      }
    }
  }, {
    key: "AllChatGrabber",
    value: function AllChatGrabber() {
      var e = this;
      (0, _axios2.default)({
        method: "post",
        url: my_api + "/all-chats-admin",
        data: { code: "admin" }
      }).then(function (response) {
        // console.log(response.data);
        e.contentAdder(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "My page title"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Admin Panel"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "All Chats"), _react2.default.createElement("div", { className: "chats-contrainer", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }));
    }
  }]);

  return Admin;
}(_react.Component);

exports.default = Admin;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\sr_gir\\chat\\pages\\admin.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\sr_gir\\chat\\pages\\admin.js"); } } })();
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
    })(module.exports.default || module.exports, "/admin")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

},[569]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGFkbWluLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4uanM/M2U4Y2Y5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBteV9hcGkgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTU6MzAwMVwiO1xyXG5cclxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLkFsbENoYXRHcmFiYmVyID0gdGhpcy5BbGxDaGF0R3JhYmJlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb250ZW50QWRkZXIgPSB0aGlzLmNvbnRlbnRBZGRlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLkFsbENoYXRHcmFiYmVyKCk7XHJcbiAgfVxyXG4gIGNvbnRlbnRBZGRlcihkYXRhKSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChkYXRhW2ldLnJlc3BvbmRlZCAhPSAxKSB7XHJcbiAgICAgICAgJChcIi5jaGF0cy1jb250cmFpbmVyXCIpXHJcbiAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgXCI8ZGl2IHN0eWxlPSdiYWNrZ3JvdW5kOiNkZGQnIG9uQ2xpY2s9d2luZG93Lm9wZW4oJy9hZG1pbi1jaGF0L1wiICtcclxuICAgICAgICAgICAgICBkYXRhW2ldLmNvZGUgK1xyXG4gICAgICAgICAgICAgIFwiJywnX3NlbGYnKT5cIiArXHJcbiAgICAgICAgICAgICAgZGF0YVtpXS5uYW1lICtcclxuICAgICAgICAgICAgICBcIjwvZGl2PjxkaXYgc3R5bGU9J2NsZWFyOmJvdGg7Jz48L2Rpdj5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmNoYXRzLWNvbnRyYWluZXJcIilcclxuICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICBcIjxkaXYgb25DbGljaz13aW5kb3cub3BlbignL2FkbWluLWNoYXQvXCIgK1xyXG4gICAgICAgICAgICAgIGRhdGFbaV0uY29kZSArXHJcbiAgICAgICAgICAgICAgXCInLCdfc2VsZicpPlwiICtcclxuICAgICAgICAgICAgICBkYXRhW2ldLm5hbWUgK1xyXG4gICAgICAgICAgICAgIFwiPC9kaXY+PGRpdiBzdHlsZT0nY2xlYXI6Ym90aDsnPjwvZGl2PlwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICB9XHJcbiAgQWxsQ2hhdEdyYWJiZXIoKSB7XHJcbiAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogbXlfYXBpICsgXCIvYWxsLWNoYXRzLWFkbWluXCIsXHJcbiAgICAgIGRhdGE6IHsgY29kZTogXCJhZG1pblwiIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIGUuY29udGVudEFkZGVyKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZSB0aXRsZTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjIuMS9qcXVlcnkubWluLmpzXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgQWRtaW4gUGFuZWxcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwPkFsbCBDaGF0czwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRzLWNvbnRyYWluZXJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWRtaW4uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFXQTtBQVVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQUE7O0FBR0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUhBOzs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        