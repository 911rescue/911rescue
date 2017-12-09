webpackHotUpdate(0,{

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Auth = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };
    _this.handleEmail = _this.handleEmail.bind(_this);
    _this.handlePassword = _this.handlePassword.bind(_this);
    _this.LoginUser = _this.LoginUser.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleEmail',
    value: function handleEmail(e) {
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'handlePassword',
    value: function handlePassword(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'LoginUser',
    value: function LoginUser() {
      if (this.state.email.length > 6 && this.state.password.length > 6) {
        this.props.dispatch((0, _Auth.loginUser)(this.state, this.props.history));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('props', this.props);
      return !this.props.errorMessage || this.props.errorMessage.length < 0 ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'User Log-In'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { 'class': 'login' },
            'Email:'
          ),
          _react2.default.createElement('input', { type: 'email', name: 'email', onChange: function onChange(e) {
              e.preventDefault();_this2.handleEmail(e);
            }, value: this.state.email }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'login' },
            'Password:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'password', onChange: function onChange(e) {
              e.preventDefault();_this2.handlePassword(e);
            }, value: this.state.password }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                e.preventDefault();_this2.LoginUser();
              } },
            'Submit'
          )
        )
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          this.props.errorMesage
        ),
        _react2.default.createElement(
          'h2',
          null,
          'User Log-In'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { 'class': 'login' },
            'Email:'
          ),
          _react2.default.createElement('input', { type: 'email', name: 'email', onChange: function onChange(e) {
              e.preventDefault();_this2.handleEmail(e);
            }, value: this.state.email }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'login' },
            'Password:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'password', onChange: function onChange(e) {
              e.preventDefault();_this2.handlePassword(e);
            }, value: this.state.password }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                e.preventDefault();_this2.LoginUser();
              } },
            'Submit'
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ })

})
//# sourceMappingURL=0.7d5e0d7dab50c66a3646.hot-update.js.map