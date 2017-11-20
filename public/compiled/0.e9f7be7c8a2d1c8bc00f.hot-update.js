webpackHotUpdate(0,{

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecureProperties = function (_Component) {
  _inherits(SecureProperties, _Component);

  function SecureProperties(props) {
    _classCallCheck(this, SecureProperties);

    var _this = _possibleConstructorReturn(this, (SecureProperties.__proto__ || Object.getPrototypeOf(SecureProperties)).call(this, props));

    _this.state = {};
    _this.requestEmergencyResponders = _this.requestEmergencyResponders.bind(_this);
    return _this;
  }

  _createClass(SecureProperties, [{
    key: 'requestEmergencyResponders',
    value: function requestEmergencyResponders() {
      axios.post('/emergency', { user: this.props.user }).then(function (response) {
        console.log("RESPONSE IS: ", response.data);
      }).catch(function (err) {
        return console.log('ERROR IS: ', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          this.props.user.name
        ),
        _react2.default.createElement(
          _reactBootstrap.DropdownButton,
          { title: 'Add Property', id: 'addProp' },
          _react2.default.createElement(
            _reactBootstrap.MenuItem,
            { eventKey: '1' },
            'Add Home/Residence'
          ),
          _react2.default.createElement(
            _reactBootstrap.MenuItem,
            { eventKey: '2' },
            'Add Vehicle'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                e.preventDefault();_this2.requestEmergencyResponders();
              } },
            'HELP'
          )
        )
      );
    }
  }]);

  return SecureProperties;
}(_react.Component);

exports.default = SecureProperties;

/***/ })

})
//# sourceMappingURL=0.e9f7be7c8a2d1c8bc00f.hot-update.js.map