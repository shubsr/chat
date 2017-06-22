
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 582:
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

var _jsxFileName = "D:\\sr_gir\\chat\\pages\\index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display:none;\n  ", ";\n"], ["\n  display:none;\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  width:240px;\n  height:150px;\n  border:1px #555 solid;\n  position:relative;\n"], ["\n  width:240px;\n  height:150px;\n  border:1px #555 solid;\n  position:relative;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:150px;\n    overflow:auto;\n"], ["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:150px;\n    overflow:auto;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n"], ["\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  \n"], ["\n  \n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  ", ";\n"], ["\n  ", ";\n"]);

var ChatContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.code != "" && "\n    display:block;\n  ";
});
var ChatBoxWrapper = _styledComponents2.default.div(_templateObject2);
var ChatBox = _styledComponents2.default.div(_templateObject3);
var SubmitButton = _styledComponents2.default.input(_templateObject4);
var NameInput = _styledComponents2.default.input(_templateObject5);
var InputForm = _styledComponents2.default.form(_templateObject6, function (props) {
  return props.code != "" && "\n    display:none;\n  ";
});

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = {
      value: "",
      name: "",
      nameField: "",
      email: "",
      mobile: "",
      code: "",
      time: 0,
      msg: "",
      sending: 0,
      scanning: 0
    };
    _this.contentAdder = _this.contentAdder.bind(_this);
    _this.validator = _this.validator.bind(_this);
    _this.msgGrabber = _this.msgGrabber.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "contentAdder",
    value: function contentAdder(data) {
      if (data.sender != 1) {
        $(".chatBox").first().append("<div style='float:left;'>" + data.msg + "</div><div style='clear:both;'></div>");
      } else {
        $(".chatBox").first().append("<div style='float:right;'>" + data.msg + "</div><div style='clear:both;'></div>");
      }
      var wtf = $(".chatBox").first();
      var height = wtf[0].scrollHeight;
      wtf.scrollTop(height);
    }
  }, {
    key: "validator",
    value: function validator() {
      if (this.state.name != "" && this.state.email != "" && this.state.mobile != "" && this.state.msg != "") {
        return true;
      } else {
        return false;
      }
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
          url: "http://localhost:3001/user-chat",
          data: { msg: msg_val, code: this.state.code }
        });
      }
    }
  }, {
    key: "msgGrabber",
    value: function msgGrabber() {
      var time_val = this.state.time;
      var code_val = this.state.code;
      var e = this;
      (0, _axios2.default)({
        method: "post",
        url: "http://localhost:3001/user-chat-grabber",
        data: {
          time: time_val,
          code: code_val
        }
      }).then(function (response) {
        if (response.data.length != 0) {
          e.setState({ time: response.data[response.data.length - 1].time });
          // alert(response.data[0]["date"]);
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
    key: "charStart",
    value: function charStart(e) {
      e.preventDefault();
      var dis = this;
      if (this.validator()) {
        var name_val = this.state.name;
        var email_val = this.state.email;
        var mobile_val = this.state.mobile;
        var msg_val = this.state.msg;
        var d = new Date();
        var crrTime = d.getTime();
        this.setState({ time: crrTime });
        this.setState({ name: "", email: "", mobile: "", msg: "" });
        (0, _axios2.default)({
          method: "post",
          url: "http://localhost:3001/user-register",
          data: {
            name: name_val,
            email: email_val,
            mobile: mobile_val,
            msg: msg_val
          }
        }).then(function (response) {
          // console.log(response.data.code);
          dis.setState({ code: response.data.code });
          // dis.msgGrabber(response.data.code);
          dis.msgGrabber();
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
          lineNumber: 158
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "My page title"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), _react2.default.createElement(ChatContainer, { code: this.state.code, __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement(ChatBoxWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement(ChatBox, { className: "chatBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), _react2.default.createElement("form", {
        onSubmit: function onSubmit(e) {
          _this2.msgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement("input", {
        value: this.state.msg,
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }), _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, "Snd Msg"))), _react2.default.createElement(InputForm, {
        code: this.state.code,
        onSubmit: function onSubmit(e) {
          _this2.charStart(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(NameInput, {
        value: this.state.name,
        onChange: function onChange(e) {
          _this2.setState({ name: e.target.value });
        },
        placeholder: "Enter Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), _react2.default.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({ email: e.target.value });
        },
        value: this.state.email,
        placeholder: "Enter Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }), _react2.default.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({ mobile: e.target.value });
        },
        value: this.state.mobile,
        placeholder: "Enter Mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value });
        },
        value: this.state.msg,
        placeholder: "Enter Your Message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, "Start Chat")));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\sr_gir\\chat\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\sr_gir\\chat\\pages\\index.js"); } } })();
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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(582);


/***/ })

},[583]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDA3MDU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDaGF0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5jb2RlICE9IFwiXCIgJiYgYFxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICBgfTtcclxuYDtcclxuY29uc3QgQ2hhdEJveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjI0MHB4O1xyXG4gIGhlaWdodDoxNTBweDtcclxuICBib3JkZXI6MXB4ICM1NTUgc29saWQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbmA7XHJcbmNvbnN0IENoYXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBtYXgtaGVpZ2h0OjE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuYDtcclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmlucHV0YFxyXG5gO1xyXG5jb25zdCBOYW1lSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgXHJcbmA7XHJcbmNvbnN0IElucHV0Rm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuY29kZSAhPSBcIlwiICYmIGBcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIG5hbWVGaWVsZDogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1vYmlsZTogXCJcIixcclxuICAgICAgY29kZTogXCJcIixcclxuICAgICAgdGltZTogMCxcclxuICAgICAgbXNnOiBcIlwiLFxyXG4gICAgICBzZW5kaW5nOiAwLFxyXG4gICAgICBzY2FubmluZzogMFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29udGVudEFkZGVyID0gdGhpcy5jb250ZW50QWRkZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubXNnR3JhYmJlciA9IHRoaXMubXNnR3JhYmJlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBjb250ZW50QWRkZXIoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEuc2VuZGVyICE9IDEpIHtcclxuICAgICAgJChcIi5jaGF0Qm94XCIpXHJcbiAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgXCI8ZGl2IHN0eWxlPSdmbG9hdDpsZWZ0Oyc+XCIgK1xyXG4gICAgICAgICAgICBkYXRhLm1zZyArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+PGRpdiBzdHlsZT0nY2xlYXI6Ym90aDsnPjwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuY2hhdEJveFwiKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgIFwiPGRpdiBzdHlsZT0nZmxvYXQ6cmlnaHQ7Jz5cIiArXHJcbiAgICAgICAgICAgIGRhdGEubXNnICtcclxuICAgICAgICAgICAgXCI8L2Rpdj48ZGl2IHN0eWxlPSdjbGVhcjpib3RoOyc+PC9kaXY+XCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIHd0ZiA9ICQoXCIuY2hhdEJveFwiKS5maXJzdCgpO1xyXG4gICAgdmFyIGhlaWdodCA9IHd0ZlswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICB3dGYuc2Nyb2xsVG9wKGhlaWdodCk7XHJcbiAgfVxyXG4gIHZhbGlkYXRvcigpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5uYW1lICE9IFwiXCIgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5lbWFpbCAhPSBcIlwiICYmXHJcbiAgICAgIHRoaXMuc3RhdGUubW9iaWxlICE9IFwiXCIgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5tc2cgIT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBtc2dTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGRpcyA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tc2cgIT0gXCJcIikge1xyXG4gICAgICB2YXIgbXNnX3ZhbCA9IHRoaXMuc3RhdGUubXNnO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbXNnOiBcIlwiIH0pO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXItY2hhdFwiLFxyXG4gICAgICAgIGRhdGE6IHsgbXNnOiBtc2dfdmFsLCBjb2RlOiB0aGlzLnN0YXRlLmNvZGUgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgbXNnR3JhYmJlcigpIHtcclxuICAgIHZhciB0aW1lX3ZhbCA9IHRoaXMuc3RhdGUudGltZTtcclxuICAgIHZhciBjb2RlX3ZhbCA9IHRoaXMuc3RhdGUuY29kZTtcclxuICAgIHZhciBlID0gdGhpcztcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2VyLWNoYXQtZ3JhYmJlclwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGltZTogdGltZV92YWwsXHJcbiAgICAgICAgY29kZTogY29kZV92YWxcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGUuc2V0U3RhdGUoeyB0aW1lOiByZXNwb25zZS5kYXRhW3Jlc3BvbnNlLmRhdGEubGVuZ3RoIC0gMV0udGltZSB9KTtcclxuICAgICAgICAvLyBhbGVydChyZXNwb25zZS5kYXRhWzBdW1wiZGF0ZVwiXSk7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIGUuY29udGVudEFkZGVyKHJlc3BvbnNlLmRhdGFbaV0pO1xyXG4gICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KGUubXNnR3JhYmJlciwgODAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjaGFyU3RhcnQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGRpcyA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0b3IoKSkge1xyXG4gICAgICB2YXIgbmFtZV92YWwgPSB0aGlzLnN0YXRlLm5hbWU7XHJcbiAgICAgIHZhciBlbWFpbF92YWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xyXG4gICAgICB2YXIgbW9iaWxlX3ZhbCA9IHRoaXMuc3RhdGUubW9iaWxlO1xyXG4gICAgICB2YXIgbXNnX3ZhbCA9IHRoaXMuc3RhdGUubXNnO1xyXG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHZhciBjcnJUaW1lID0gZC5nZXRUaW1lKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiBjcnJUaW1lIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1vYmlsZTogXCJcIiwgbXNnOiBcIlwiIH0pO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXItcmVnaXN0ZXJcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lX3ZhbCxcclxuICAgICAgICAgIGVtYWlsOiBlbWFpbF92YWwsXHJcbiAgICAgICAgICBtb2JpbGU6IG1vYmlsZV92YWwsXHJcbiAgICAgICAgICBtc2c6IG1zZ192YWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNvZGUpO1xyXG4gICAgICAgIGRpcy5zZXRTdGF0ZSh7IGNvZGU6IHJlc3BvbnNlLmRhdGEuY29kZSB9KTtcclxuICAgICAgICAvLyBkaXMubXNnR3JhYmJlcihyZXNwb25zZS5kYXRhLmNvZGUpO1xyXG4gICAgICAgIGRpcy5tc2dHcmFiYmVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4yLjEvanF1ZXJ5Lm1pbi5qc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDaGF0Q29udGFpbmVyIGNvZGU9e3RoaXMuc3RhdGUuY29kZX0+XHJcbiAgICAgICAgICA8Q2hhdEJveFdyYXBwZXI+PENoYXRCb3ggY2xhc3NOYW1lPVwiY2hhdEJveFwiIC8+PC9DaGF0Qm94V3JhcHBlcj5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm1zZ1N1Ym1pdChlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXNnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtc2c6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNuZCBNc2dcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9DaGF0Q29udGFpbmVyPlxyXG4gICAgICAgIDxJbnB1dEZvcm1cclxuICAgICAgICAgIGNvZGU9e3RoaXMuc3RhdGUuY29kZX1cclxuICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RhcnQoZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOYW1lSW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1vYmlsZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtc2c6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tc2d9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdGFydCBDaGF0PC9idXR0b24+XHJcbiAgICAgICAgPC9JbnB1dEZvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFGQTtBQU1BO0FBTUE7QUFRQTtBQUVBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFTQTtBQVFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQU1BO0FBUEE7QUFTQTtBQUNBOzs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFIQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUtBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        