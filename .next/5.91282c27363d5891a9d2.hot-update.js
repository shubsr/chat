webpackHotUpdate(5,{

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

var _jsxFileName = "D:\\sr_gir\\chat\\pages\\index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display:none;\n  ", ";\n"], ["\n  display:none;\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  width:240px;\n  height:500px;\n  border:1px #555 solid;\n  position:relative;\n"], ["\n  width:240px;\n  height:500px;\n  border:1px #555 solid;\n  position:relative;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:500px;\n    overflow:auto;\n"], ["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:500px;\n    overflow:auto;\n"]),
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
    _this.nameEntered = _this.nameEntered.bind(_this);
    _this.chatFetcher = _this.chatFetcher.bind(_this);
    _this.validator = _this.validator.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "contentAdder",
    value: function contentAdder(data) {
      if (data.name != this.state.name) {
        $(".chatBox").first().append("<div style='float:left;'>" + data.msg + "</div><div style='clear:both;'></div>");
      } else {
        $(".chatBox").first().append("<div style='float:right;'>" + data.msg + "</div><div style='clear:both;'></div>");
      }
      var wtf = $(".chatBox").first();
      var height = wtf[0].scrollHeight;
      wtf.scrollTop(height);
    }
  }, {
    key: "nameEntered",
    value: function nameEntered() {
      var theName = "";
      if (this.state.nameField == "") {
        this.setState({ name: "Unknown" });
      } else {
        this.setState({ name: this.state.nameField });
      }
      this.chatFetcher();
    }
  }, {
    key: "sendMsg",
    value: function sendMsg() {
      var lastTime = 0;
      if (this.state.time == 0) {
        var d = new Date();
        var currentTime = d.getTime();
        this.setState({ time: currentTime });
        lastTime = currentTime;
      } else {
        lastTime = this.state.time;
      }
      // alert(lastTime);
      var e = this;
      if (this.state.scanning == 0 && this.state.msg != "") {
        var message = this.state.msg;
        this.setState({ sending: 1, msg: "" });
        (0, _axios2.default)({
          method: "post",
          url: "http://localhost:3001/chat",
          data: {
            name: this.state.name,
            msg: message,
            time: lastTime
          }
        }).then(function (response) {
          if (e.state.scanning == 0) {
            if (response.data.length != 0) {
              e.setState({ time: response.data[response.data.length - 1].date });
              // alert(response.data[0]["date"]);
              var i = 0;
              while (i < response.data.length) {
                e.contentAdder(response.data[i]);
                i += 1;
              }
            }
          }
          e.setState({ sending: 0 });

          //console.log(response.data.length);
        });
      }
    }
  }, {
    key: "chatFetcher",
    value: function chatFetcher() {
      var lastTime = 0;
      if (this.state.time == 0) {
        var d = new Date();
        var currentTime = d.getTime();
        this.setState({ time: currentTime });
        lastTime = currentTime;
      } else {
        lastTime = this.state.time;
      }
      // alert(lastTime);
      var e = this;
      if (this.state.sending == 0) {
        this.setState({ scanning: 1 });

        (0, _axios2.default)({
          method: "post",
          url: "http://localhost:3001/chat-fetcher",
          data: {
            time: lastTime
          }
        }).then(function (response) {
          if (e.state.sending == 0) {
            if (response.data.length != 0) {
              e.setState({ time: response.data[response.data.length - 1].date });
              // alert(response.data[0]["date"]);
              var i = 0;
              while (i < response.data.length) {
                e.contentAdder(response.data[i]);
                i += 1;
              }
            }
          }
          e.setState({ scanning: 0 });

          //console.log(response.data.length);
        });
      }
      setTimeout(this.chatFetcher, 3000);
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
    key: "charStart",
    value: function charStart(e) {
      e.preventDefault();
      var dis = this;
      if (this.validator()) {
        var name_val = this.state.name;
        var email_val = this.state.email;
        var mobile_val = this.state.mobile;
        var msg_val = this.state.msg;
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
          console.log(response.data.code);
          dis.setState({ code: response.data.code });
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
          lineNumber: 207
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "My page title"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })), _react2.default.createElement(ChatContainer, { code: this.state.code, __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "Name: ", this.state.name), _react2.default.createElement(ChatBoxWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react2.default.createElement(ChatBox, { className: "chatBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      })), _react2.default.createElement("input", {
        value: this.state.msg,
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), _react2.default.createElement("button", { onClick: function onClick() {
          return _this2.sendMsg(_this2);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Snd Msg")), _react2.default.createElement(InputForm, {
        code: this.state.code,
        onSubmit: function onSubmit(e) {
          _this2.charStart(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement(NameInput, {
        value: this.state.name,
        onChange: function onChange(e) {
          _this2.setState({ name: e.target.value });
        },
        placeholder: "Enter Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
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
          lineNumber: 242
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
          lineNumber: 250
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
          lineNumber: 258
        }
      }), _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 266
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MTI4MmMyNzM2M2Q1ODkxYTlkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDaGF0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5jb2RlICE9IFwiXCIgJiYgYFxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICBgfTtcclxuYDtcclxuY29uc3QgQ2hhdEJveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjI0MHB4O1xyXG4gIGhlaWdodDo1MDBweDtcclxuICBib3JkZXI6MXB4ICM1NTUgc29saWQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbmA7XHJcbmNvbnN0IENoYXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBtYXgtaGVpZ2h0OjUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuYDtcclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmlucHV0YFxyXG5gO1xyXG5jb25zdCBOYW1lSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgXHJcbmA7XHJcbmNvbnN0IElucHV0Rm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICR7cHJvcHMgPT4gcHJvcHMuY29kZSAhPSBcIlwiICYmIGBcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIG5hbWVGaWVsZDogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1vYmlsZTogXCJcIixcclxuICAgICAgY29kZTogXCJcIixcclxuICAgICAgdGltZTogMCxcclxuICAgICAgbXNnOiBcIlwiLFxyXG4gICAgICBzZW5kaW5nOiAwLFxyXG4gICAgICBzY2FubmluZzogMFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29udGVudEFkZGVyID0gdGhpcy5jb250ZW50QWRkZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubmFtZUVudGVyZWQgPSB0aGlzLm5hbWVFbnRlcmVkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoYXRGZXRjaGVyID0gdGhpcy5jaGF0RmV0Y2hlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBjb250ZW50QWRkZXIoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEubmFtZSAhPSB0aGlzLnN0YXRlLm5hbWUpIHtcclxuICAgICAgJChcIi5jaGF0Qm94XCIpXHJcbiAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgXCI8ZGl2IHN0eWxlPSdmbG9hdDpsZWZ0Oyc+XCIgK1xyXG4gICAgICAgICAgICBkYXRhLm1zZyArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+PGRpdiBzdHlsZT0nY2xlYXI6Ym90aDsnPjwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuY2hhdEJveFwiKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgIFwiPGRpdiBzdHlsZT0nZmxvYXQ6cmlnaHQ7Jz5cIiArXHJcbiAgICAgICAgICAgIGRhdGEubXNnICtcclxuICAgICAgICAgICAgXCI8L2Rpdj48ZGl2IHN0eWxlPSdjbGVhcjpib3RoOyc+PC9kaXY+XCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIHd0ZiA9ICQoXCIuY2hhdEJveFwiKS5maXJzdCgpO1xyXG4gICAgdmFyIGhlaWdodCA9IHd0ZlswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICB3dGYuc2Nyb2xsVG9wKGhlaWdodCk7XHJcbiAgfVxyXG4gIG5hbWVFbnRlcmVkKCkge1xyXG4gICAgdmFyIHRoZU5hbWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZUZpZWxkID09IFwiXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IFwiVW5rbm93blwiIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHRoaXMuc3RhdGUubmFtZUZpZWxkIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGF0RmV0Y2hlcigpO1xyXG4gIH1cclxuICBzZW5kTXNnKCkge1xyXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWUgPT0gMCkge1xyXG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGQuZ2V0VGltZSgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZTogY3VycmVudFRpbWUgfSk7XHJcbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXN0VGltZSA9IHRoaXMuc3RhdGUudGltZTtcclxuICAgIH1cclxuICAgIC8vIGFsZXJ0KGxhc3RUaW1lKTtcclxuICAgIHZhciBlID0gdGhpcztcclxuICAgIGlmICh0aGlzLnN0YXRlLnNjYW5uaW5nID09IDAgJiYgdGhpcy5zdGF0ZS5tc2cgIT0gXCJcIikge1xyXG4gICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuc3RhdGUubXNnO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZGluZzogMSwgbXNnOiBcIlwiIH0pO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NoYXRcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICBtc2c6IG1lc3NhZ2UsXHJcbiAgICAgICAgICB0aW1lOiBsYXN0VGltZVxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChlLnN0YXRlLnNjYW5uaW5nID09IDApIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGUuc2V0U3RhdGUoeyB0aW1lOiByZXNwb25zZS5kYXRhW3Jlc3BvbnNlLmRhdGEubGVuZ3RoIC0gMV0uZGF0ZSB9KTtcclxuICAgICAgICAgICAgLy8gYWxlcnQocmVzcG9uc2UuZGF0YVswXVtcImRhdGVcIl0pO1xyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBlLmNvbnRlbnRBZGRlcihyZXNwb25zZS5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZS5zZXRTdGF0ZSh7IHNlbmRpbmc6IDAgfSk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5sZW5ndGgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hhdEZldGNoZXIoKSB7XHJcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA9PSAwKSB7XHJcbiAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZC5nZXRUaW1lKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiBjdXJyZW50VGltZSB9KTtcclxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RUaW1lID0gdGhpcy5zdGF0ZS50aW1lO1xyXG4gICAgfVxyXG4gICAgLy8gYWxlcnQobGFzdFRpbWUpO1xyXG4gICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VuZGluZyA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY2FubmluZzogMSB9KTtcclxuXHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2hhdC1mZXRjaGVyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdGltZTogbGFzdFRpbWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoZS5zdGF0ZS5zZW5kaW5nID09IDApIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGUuc2V0U3RhdGUoeyB0aW1lOiByZXNwb25zZS5kYXRhW3Jlc3BvbnNlLmRhdGEubGVuZ3RoIC0gMV0uZGF0ZSB9KTtcclxuICAgICAgICAgICAgLy8gYWxlcnQocmVzcG9uc2UuZGF0YVswXVtcImRhdGVcIl0pO1xyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBlLmNvbnRlbnRBZGRlcihyZXNwb25zZS5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZS5zZXRTdGF0ZSh7IHNjYW5uaW5nOiAwIH0pO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubGVuZ3RoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuY2hhdEZldGNoZXIsIDMwMDApO1xyXG4gIH1cclxuICB2YWxpZGF0b3IoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc3RhdGUubmFtZSAhPSBcIlwiICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuZW1haWwgIT0gXCJcIiAmJlxyXG4gICAgICB0aGlzLnN0YXRlLm1vYmlsZSAhPSBcIlwiICYmXHJcbiAgICAgIHRoaXMuc3RhdGUubXNnICE9IFwiXCJcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hhclN0YXJ0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBkaXMgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdG9yKCkpIHtcclxuICAgICAgdmFyIG5hbWVfdmFsID0gdGhpcy5zdGF0ZS5uYW1lO1xyXG4gICAgICB2YXIgZW1haWxfdmFsID0gdGhpcy5zdGF0ZS5lbWFpbDtcclxuICAgICAgdmFyIG1vYmlsZV92YWwgPSB0aGlzLnN0YXRlLm1vYmlsZTtcclxuICAgICAgdmFyIG1zZ192YWwgPSB0aGlzLnN0YXRlLm1zZztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBtb2JpbGU6IFwiXCIsIG1zZzogXCJcIiB9KTtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2VyLXJlZ2lzdGVyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZV92YWwsXHJcbiAgICAgICAgICBlbWFpbDogZW1haWxfdmFsLFxyXG4gICAgICAgICAgbW9iaWxlOiBtb2JpbGVfdmFsLFxyXG4gICAgICAgICAgbXNnOiBtc2dfdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5jb2RlKTtcclxuICAgICAgICBkaXMuc2V0U3RhdGUoeyBjb2RlOiByZXNwb25zZS5kYXRhLmNvZGUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4yLjEvanF1ZXJ5Lm1pbi5qc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDaGF0Q29udGFpbmVyIGNvZGU9e3RoaXMuc3RhdGUuY29kZX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBOYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2hhdEJveFdyYXBwZXI+PENoYXRCb3ggY2xhc3NOYW1lPVwiY2hhdEJveFwiIC8+PC9DaGF0Qm94V3JhcHBlcj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tc2d9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbXNnOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZE1zZyh0aGlzKX0+U25kIE1zZzwvYnV0dG9uPlxyXG4gICAgICAgIDwvQ2hhdENvbnRhaW5lcj5cclxuICAgICAgICA8SW5wdXRGb3JtXHJcbiAgICAgICAgICBjb2RlPXt0aGlzLnN0YXRlLmNvZGV9XHJcbiAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0YXJ0KGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TmFtZUlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNb2JpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbXNnOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXNnfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3RhcnQgQ2hhdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvSW5wdXRGb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUZBO0FBTUE7QUFNQTtBQVFBO0FBRUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBU0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBR0E7QUFDQTtBQU1BO0FBUEE7QUFTQTtBQUNBOzs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=