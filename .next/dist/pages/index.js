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