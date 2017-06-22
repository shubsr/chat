
          window.__NEXT_REGISTER_PAGE('/admin-chat', function() {
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

var _jsxFileName = "D:\\sr_gir\\chat\\pages\\admin-chat.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width:240px;\n  height:150px;\n  border:1px #555 solid;\n  position:relative;\n"], ["\n  width:240px;\n  height:150px;\n  border:1px #555 solid;\n  position:relative;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:150px;\n    overflow:auto;\n"], ["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:150px;\n    overflow:auto;\n"]);

var ChatBoxWrapper = _styledComponents2.default.div(_templateObject);
var ChatBox = _styledComponents2.default.div(_templateObject2);

var AdminChat = function (_Component) {
  (0, _inherits3.default)(AdminChat, _Component);

  function AdminChat(props) {
    (0, _classCallCheck3.default)(this, AdminChat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdminChat.__proto__ || (0, _getPrototypeOf2.default)(AdminChat)).call(this, props));

    _this.state = {
      code: "admin",
      time: 0,
      msg: "",
      userCode: props.url.query.code
    };
    _this.contentAdder = _this.contentAdder.bind(_this);
    _this.msgGrabber = _this.msgGrabber.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AdminChat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _axios2.default)({
        method: "post",
        url: "http://localhost:3001/admin-responded",
        data: {
          code: this.state.code,
          userCode: this.state.userCode
        }
      });
      this.msgGrabber();
    }
  }, {
    key: "msgSubmit",
    value: function msgSubmit(e) {
      e.preventDefault();
      var dis = this;
      if (this.state.msg != "") {
        var msg_val = this.state.msg;
        this.setState({ msg: "" });
        (0, _axios2.default)({
          method: "post",
          url: "http://localhost:3001/admin-sender",
          data: {
            msg: msg_val,
            code: this.state.code,
            userCode: this.state.userCode
          }
        });
      }
    }
  }, {
    key: "contentAdder",
    value: function contentAdder(data) {
      if (data.sender != 1) {
        $(".chatBox").first().append("<div style='float:right;'>" + data.msg + "</div><div style='clear:both;'></div>");
      } else {
        $(".chatBox").first().append("<div style='float:left;'>" + data.msg + "</div><div style='clear:both;'></div>");
      }
      var wtf = $(".chatBox").first();
      var height = wtf[0].scrollHeight;
      wtf.scrollTop(height);
    }
  }, {
    key: "msgGrabber",
    value: function msgGrabber() {
      var time_val = this.state.time;
      if (this.state.time == 0) {
        time_val = 1111;
        this.setState({ time: time_val });
      }
      var code_val = this.state.code;
      var e = this;
      (0, _axios2.default)({
        method: "post",
        url: "http://localhost:3001/admin-chat",
        data: {
          time: time_val,
          code: code_val,
          userCode: this.state.userCode
        }
      }).then(function (response) {
        if (response.data.length != 0) {
          e.setState({ time: response.data[response.data.length - 1].time });
          var i = 0;
          while (i < response.data.length) {
            e.contentAdder(response.data[i]);
            i += 1;
          }
        }
        setTimeout(e.msgGrabber, 800);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Chat With User"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(ChatBoxWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(ChatBox, { className: "chatBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), _react2.default.createElement("form", {
        onSubmit: function onSubmit(e) {
          _this2.msgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement("input", {
        value: this.state.msg,
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "Snd Msg"))));
    }
  }]);

  return AdminChat;
}(_react.Component);

exports.default = AdminChat;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\sr_gir\\chat\\pages\\admin-chat.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\sr_gir\\chat\\pages\\admin-chat.js"); } } })();
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
    })(module.exports.default || module.exports, "/admin-chat")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

},[576]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGFkbWluLWNoYXQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi1jaGF0LmpzPzc2NTU4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2hhdEJveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjI0MHB4O1xyXG4gIGhlaWdodDoxNTBweDtcclxuICBib3JkZXI6MXB4ICM1NTUgc29saWQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbmA7XHJcbmNvbnN0IENoYXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBtYXgtaGVpZ2h0OjE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuYDtcclxuXHJcbmNsYXNzIEFkbWluQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvZGU6IFwiYWRtaW5cIixcclxuICAgICAgdGltZTogMCxcclxuICAgICAgbXNnOiBcIlwiLFxyXG4gICAgICB1c2VyQ29kZTogcHJvcHMudXJsLnF1ZXJ5LmNvZGVcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbnRlbnRBZGRlciA9IHRoaXMuY29udGVudEFkZGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1zZ0dyYWJiZXIgPSB0aGlzLm1zZ0dyYWJiZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4tcmVzcG9uZGVkXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb2RlOiB0aGlzLnN0YXRlLmNvZGUsXHJcbiAgICAgICAgdXNlckNvZGU6IHRoaXMuc3RhdGUudXNlckNvZGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1zZ0dyYWJiZXIoKTtcclxuICB9XHJcbiAgbXNnU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBkaXMgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubXNnICE9IFwiXCIpIHtcclxuICAgICAgdmFyIG1zZ192YWwgPSB0aGlzLnN0YXRlLm1zZztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1zZzogXCJcIiB9KTtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi1zZW5kZXJcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBtc2c6IG1zZ192YWwsXHJcbiAgICAgICAgICBjb2RlOiB0aGlzLnN0YXRlLmNvZGUsXHJcbiAgICAgICAgICB1c2VyQ29kZTogdGhpcy5zdGF0ZS51c2VyQ29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnRlbnRBZGRlcihkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5zZW5kZXIgIT0gMSkge1xyXG4gICAgICAkKFwiLmNoYXRCb3hcIilcclxuICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICBcIjxkaXYgc3R5bGU9J2Zsb2F0OnJpZ2h0Oyc+XCIgK1xyXG4gICAgICAgICAgICBkYXRhLm1zZyArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+PGRpdiBzdHlsZT0nY2xlYXI6Ym90aDsnPjwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuY2hhdEJveFwiKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgIFwiPGRpdiBzdHlsZT0nZmxvYXQ6bGVmdDsnPlwiICtcclxuICAgICAgICAgICAgZGF0YS5tc2cgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PjxkaXYgc3R5bGU9J2NsZWFyOmJvdGg7Jz48L2Rpdj5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB2YXIgd3RmID0gJChcIi5jaGF0Qm94XCIpLmZpcnN0KCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gd3RmWzBdLnNjcm9sbEhlaWdodDtcclxuICAgIHd0Zi5zY3JvbGxUb3AoaGVpZ2h0KTtcclxuICB9XHJcbiAgbXNnR3JhYmJlcigpIHtcclxuICAgIHZhciB0aW1lX3ZhbCA9IHRoaXMuc3RhdGUudGltZTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWUgPT0gMCkge1xyXG4gICAgICB0aW1lX3ZhbCA9IDExMTE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiB0aW1lX3ZhbCB9KTtcclxuICAgIH1cclxuICAgIHZhciBjb2RlX3ZhbCA9IHRoaXMuc3RhdGUuY29kZTtcclxuICAgIHZhciBlID0gdGhpcztcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi1jaGF0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0aW1lOiB0aW1lX3ZhbCxcclxuICAgICAgICBjb2RlOiBjb2RlX3ZhbCxcclxuICAgICAgICB1c2VyQ29kZTogdGhpcy5zdGF0ZS51c2VyQ29kZVxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgZS5zZXRTdGF0ZSh7IHRpbWU6IHJlc3BvbnNlLmRhdGFbcmVzcG9uc2UuZGF0YS5sZW5ndGggLSAxXS50aW1lIH0pO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICBlLmNvbnRlbnRBZGRlcihyZXNwb25zZS5kYXRhW2ldKTtcclxuICAgICAgICAgIGkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dChlLm1zZ0dyYWJiZXIsIDgwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5DaGF0IFdpdGggVXNlcjwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjIuMS9qcXVlcnkubWluLmpzXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDaGF0Qm94V3JhcHBlcj48Q2hhdEJveCBjbGFzc05hbWU9XCJjaGF0Qm94XCIgLz48L0NoYXRCb3hXcmFwcGVyPlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubXNnU3VibWl0KGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tc2d9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1zZzogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU25kIE1zZ1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5DaGF0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi1jaGF0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQU1BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7OztBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBSEE7QUFTQTs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBU0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBS0E7QUFMQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBSEE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFPQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        