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

var _jsxFileName = "D:\\sr_gir\\chat\\pages\\third.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display:none;\n  ", ";\n"], ["\n  display:none;\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  width:240px;\n  height:150px;\n  border:1px #555 solid;\n  position:relative;\n"], ["\n  width:240px;\n  height:150px;\n  border:1px #555 solid;\n  position:relative;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:150px;\n    overflow:auto;\n"], ["\n    width:100%;\n    position:absolute;\n    bottom:0;\n    left:0;\n    max-height:150px;\n    overflow:auto;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  ", ";\n"], ["\n  ", ";\n"]);

var _ = __webpack_require__(577);

var ChatContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.name != "" && "\n    display:block;\n  ";
});
var ChatBoxWrapper = _styledComponents2.default.div(_templateObject2);
var ChatBox = _styledComponents2.default.div(_templateObject3);
var SubmitButton = _styledComponents2.default.button(_templateObject4, function (props) {
  return props.name != "" && "\n    display:none;\n  ";
});
var NameInput = _styledComponents2.default.input(_templateObject4, function (props) {
  return props.name != "" && "\n    display:none;\n  ";
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
      time: 0,
      msg: "",
      sending: 0,
      scanning: 0,

      chatContent: {}
    };
    _this.contentAdder = _this.contentAdder.bind(_this);
    _this.nameEntered = _this.nameEntered.bind(_this);
    _this.chatFetcher = _this.chatFetcher.bind(_this);
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
    key: "extend",
    value: function extend(obj, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
      }
      return obj;
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
                // var contentObj = $.merge(response.data, e.state.chatContent);
                var contentObj = _.extend(response.data, e.state.chatContent);
                console.log(contentObj);
                e.setState({ chatContent: contentObj });

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
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "My page title"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      })), _react2.default.createElement(ChatContainer, { name: this.state.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "Name: ", this.state.name), _react2.default.createElement(ChatBoxWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement(ChatBox, { className: "chatBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "dfsxas"), _react2.default.createElement("input", {
        value: this.state.msg,
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }), _react2.default.createElement("button", { onClick: function onClick() {
          return _this2.sendMsg(_this2);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Snd Msg")), _react2.default.createElement(NameInput, {
        value: this.state.nameField,
        onChange: function onChange(e) {
          _this2.setState({ nameField: e.target.value });
        },
        name: this.state.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement(SubmitButton, { onClick: this.nameEntered, name: this.state.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, "Submit Name"));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\sr_gir\\chat\\pages\\third.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\sr_gir\\chat\\pages\\third.js"); } } })();
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
    })(module.exports.default || module.exports, "/third")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mZTIwZjdhMmUyNzllODdmMWNiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGhpcmQuanM/NmRhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbnZhciBfID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7XHJcblxyXG5jb25zdCBDaGF0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5uYW1lICE9IFwiXCIgJiYgYFxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICBgfTtcclxuYDtcclxuY29uc3QgQ2hhdEJveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjI0MHB4O1xyXG4gIGhlaWdodDoxNTBweDtcclxuICBib3JkZXI6MXB4ICM1NTUgc29saWQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbmA7XHJcbmNvbnN0IENoYXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBtYXgtaGVpZ2h0OjE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuYDtcclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAke3Byb3BzID0+IHByb3BzLm5hbWUgIT0gXCJcIiAmJiBgXHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgYH07XHJcbmA7XHJcbmNvbnN0IE5hbWVJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAke3Byb3BzID0+IHByb3BzLm5hbWUgIT0gXCJcIiAmJiBgXHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBuYW1lRmllbGQ6IFwiXCIsXHJcbiAgICAgIHRpbWU6IDAsXHJcbiAgICAgIG1zZzogXCJcIixcclxuICAgICAgc2VuZGluZzogMCxcclxuICAgICAgc2Nhbm5pbmc6IDAsXHJcblxyXG4gICAgICBjaGF0Q29udGVudDoge31cclxuICAgIH07XHJcbiAgICB0aGlzLmNvbnRlbnRBZGRlciA9IHRoaXMuY29udGVudEFkZGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5hbWVFbnRlcmVkID0gdGhpcy5uYW1lRW50ZXJlZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaGF0RmV0Y2hlciA9IHRoaXMuY2hhdEZldGNoZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgY29udGVudEFkZGVyKGRhdGEpIHtcclxuICAgIGlmIChkYXRhLm5hbWUgIT0gdGhpcy5zdGF0ZS5uYW1lKSB7XHJcbiAgICAgICQoXCIuY2hhdEJveFwiKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgIFwiPGRpdiBzdHlsZT0nZmxvYXQ6bGVmdDsnPlwiICtcclxuICAgICAgICAgICAgZGF0YS5tc2cgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PjxkaXYgc3R5bGU9J2NsZWFyOmJvdGg7Jz48L2Rpdj5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLmNoYXRCb3hcIilcclxuICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICBcIjxkaXYgc3R5bGU9J2Zsb2F0OnJpZ2h0Oyc+XCIgK1xyXG4gICAgICAgICAgICBkYXRhLm1zZyArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+PGRpdiBzdHlsZT0nY2xlYXI6Ym90aDsnPjwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHZhciB3dGYgPSAkKFwiLmNoYXRCb3hcIikuZmlyc3QoKTtcclxuICAgIHZhciBoZWlnaHQgPSB3dGZbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgd3RmLnNjcm9sbFRvcChoZWlnaHQpO1xyXG4gIH1cclxuICBuYW1lRW50ZXJlZCgpIHtcclxuICAgIHZhciB0aGVOYW1lID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlLm5hbWVGaWVsZCA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBcIlVua25vd25cIiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiB0aGlzLnN0YXRlLm5hbWVGaWVsZCB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhdEZldGNoZXIoKTtcclxuICB9XHJcbiAgZXh0ZW5kKG9iaiwgc3JjKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XHJcbiAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkgb2JqW2tleV0gPSBzcmNba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG4gIHNlbmRNc2coKSB7XHJcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA9PSAwKSB7XHJcbiAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZC5nZXRUaW1lKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiBjdXJyZW50VGltZSB9KTtcclxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhc3RUaW1lID0gdGhpcy5zdGF0ZS50aW1lO1xyXG4gICAgfVxyXG4gICAgLy8gYWxlcnQobGFzdFRpbWUpO1xyXG4gICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2Nhbm5pbmcgPT0gMCAmJiB0aGlzLnN0YXRlLm1zZyAhPSBcIlwiKSB7XHJcbiAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5zdGF0ZS5tc2c7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kaW5nOiAxLCBtc2c6IFwiXCIgfSk7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2hhdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgIG1zZzogbWVzc2FnZSxcclxuICAgICAgICAgIHRpbWU6IGxhc3RUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKGUuc3RhdGUuc2Nhbm5pbmcgPT0gMCkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgZS5zZXRTdGF0ZSh7IHRpbWU6IHJlc3BvbnNlLmRhdGFbcmVzcG9uc2UuZGF0YS5sZW5ndGggLSAxXS5kYXRlIH0pO1xyXG4gICAgICAgICAgICAvLyBhbGVydChyZXNwb25zZS5kYXRhWzBdW1wiZGF0ZVwiXSk7XHJcbiAgICAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIC8vIHZhciBjb250ZW50T2JqID0gJC5tZXJnZShyZXNwb25zZS5kYXRhLCBlLnN0YXRlLmNoYXRDb250ZW50KTtcclxuICAgICAgICAgICAgICB2YXIgY29udGVudE9iaiA9IF8uZXh0ZW5kKHJlc3BvbnNlLmRhdGEsIGUuc3RhdGUuY2hhdENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRPYmopO1xyXG4gICAgICAgICAgICAgIGUuc2V0U3RhdGUoeyBjaGF0Q29udGVudDogY29udGVudE9iaiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgZS5jb250ZW50QWRkZXIocmVzcG9uc2UuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUuc2V0U3RhdGUoeyBzZW5kaW5nOiAwIH0pO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubGVuZ3RoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYXRGZXRjaGVyKCkge1xyXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWUgPT0gMCkge1xyXG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGQuZ2V0VGltZSgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZTogY3VycmVudFRpbWUgfSk7XHJcbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXN0VGltZSA9IHRoaXMuc3RhdGUudGltZTtcclxuICAgIH1cclxuICAgIC8vIGFsZXJ0KGxhc3RUaW1lKTtcclxuICAgIHZhciBlID0gdGhpcztcclxuICAgIGlmICh0aGlzLnN0YXRlLnNlbmRpbmcgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Nhbm5pbmc6IDEgfSk7XHJcblxyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NoYXQtZmV0Y2hlclwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRpbWU6IGxhc3RUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKGUuc3RhdGUuc2VuZGluZyA9PSAwKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBlLnNldFN0YXRlKHsgdGltZTogcmVzcG9uc2UuZGF0YVtyZXNwb25zZS5kYXRhLmxlbmd0aCAtIDFdLmRhdGUgfSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3BvbnNlLmRhdGFbMF1bXCJkYXRlXCJdKTtcclxuICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgZS5jb250ZW50QWRkZXIocmVzcG9uc2UuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUuc2V0U3RhdGUoeyBzY2FubmluZzogMCB9KTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCh0aGlzLmNoYXRGZXRjaGVyLCAzMDAwKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5NeSBwYWdlIHRpdGxlPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMi4xL2pxdWVyeS5taW4uanNcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q2hhdENvbnRhaW5lciBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgTmFtZToge3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENoYXRCb3hXcmFwcGVyPjxDaGF0Qm94IGNsYXNzTmFtZT1cImNoYXRCb3hcIiAvPjwvQ2hhdEJveFdyYXBwZXI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBkZnN4YXNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1zZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtc2c6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kTXNnKHRoaXMpfT5TbmQgTXNnPC9idXR0b24+XHJcbiAgICAgICAgPC9DaGF0Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYW1lSW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWVGaWVsZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVGaWVsZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm5hbWVFbnRlcmVkfSBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9PlxyXG4gICAgICAgICAgU3VibWl0IE5hbWVcclxuICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3RoaXJkLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBTUE7QUFNQTtBQVFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBVkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVNBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUNBO0FBRUE7QUFBQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=