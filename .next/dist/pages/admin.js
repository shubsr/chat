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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = require("axios");

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