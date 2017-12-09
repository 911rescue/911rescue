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

var _Auth = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      name: '',
      fname: '',
      lname: '',
      email: '',
      callbackNum: '',
      password: '',
      confirmPwd: ''
    };
    _this.handleFname = _this.handleFname.bind(_this);
    _this.handleLname = _this.handleLname.bind(_this);
    _this.handleEmail = _this.handleEmail.bind(_this);
    _this.handleCallbackNum = _this.handleCallbackNum.bind(_this);
    _this.handlePassword = _this.handlePassword.bind(_this);
    _this.handleConfirmPwd = _this.handleConfirmPwd.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'handleFname',
    value: function handleFname(e) {
      this.setState({ fname: e.target.value });
    }
  }, {
    key: 'handleLname',
    value: function handleLname(e) {
      this.setState({ lname: e.target.value });
    }
  }, {
    key: 'handleEmail',
    value: function handleEmail(e) {
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'handleCallbackNum',
    value: function handleCallbackNum(e) {
      this.setState({ callbackNum: e.target.value });
    }
  }, {
    key: 'handlePassword',
    value: function handlePassword(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'handleConfirmPwd',
    value: function handleConfirmPwd(e) {
      this.setState({ confirmPwd: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.state.password === this.state.confirmPwd) {
        //if true, signupUser
        console.log('*** request signUp ***');
        this.props.dispatch((0, _Auth.signupUser)(this.state, this.props.history));
      } else {
        console.log('password mismatch');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return !this.props.errorMessage || this.props.errorMessage.length < 0 ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'New User Registration'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'First Name:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'fname', onChange: function onChange(e) {
              e.preventDefault();_this2.handleFname(e);
            }, value: this.state.fname }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Last Name:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'lname', onChange: function onChange(e) {
              e.preventDefault();_this2.handleLname(e);
            }, value: this.state.lname }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Email:'
          ),
          _react2.default.createElement('input', { type: 'email', name: 'email', onChange: function onChange(e) {
              e.preventDefault();_this2.handleEmail(e);
            }, value: this.state.email }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Callback Phone Number:'
          ),
          _react2.default.createElement('input', { type: 'tel', name: 'callback', onChange: function onChange(e) {
              e.preventDefault();_this2.handleCallbackNum(e);
            }, value: this.state.callbackNum }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Password:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'password', onChange: function onChange(e) {
              e.preventDefault();_this2.handlePassword(e);
            }, value: this.state.password }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Confirm Password:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'confirm-password', onChange: function onChange(e) {
              e.preventDefault();_this2.handleConfirmPwd(e);
            }, value: this.state.confirmPwd }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                e.preventDefault();_this2.handleSubmit();
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
          this.props.errorMessage
        ),
        _react2.default.createElement(
          'h2',
          null,
          'New User Registration'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'First Name:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'fname', onChange: function onChange(e) {
              e.preventDefault();_this2.handleFname(e);
            }, value: this.state.fname }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Last Name:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'lname', onChange: function onChange(e) {
              e.preventDefault();_this2.handleLname(e);
            }, value: this.state.lname }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Email:'
          ),
          _react2.default.createElement('input', { type: 'email', name: 'email', onChange: function onChange(e) {
              e.preventDefault();_this2.handleEmail(e);
            }, value: this.state.email }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Callback Phone Number:'
          ),
          _react2.default.createElement('input', { type: 'tel', name: 'callback', onChange: function onChange(e) {
              e.preventDefault();_this2.handleCallbackNum(e);
            }, value: this.state.callbackNum }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Password:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'password', onChange: function onChange(e) {
              e.preventDefault();_this2.handlePassword(e);
            }, value: this.state.password }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { 'class': 'register' },
            'Confirm Password:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'confirm-password', onChange: function onChange(e) {
              e.preventDefault();_this2.handleConfirmPwd(e);
            }, value: this.state.confirmPwd }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                e.preventDefault();_this2.handleSubmit();
              } },
            'Submit'
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

exports.default = Register;

/***/ })

})
//# sourceMappingURL=0.8ccfa7e52169960e0495.hot-update.js.map