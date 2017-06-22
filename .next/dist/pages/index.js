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