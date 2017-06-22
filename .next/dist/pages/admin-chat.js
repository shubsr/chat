"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = require("axios");

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