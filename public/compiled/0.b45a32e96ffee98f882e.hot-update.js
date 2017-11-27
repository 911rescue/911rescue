webpackHotUpdate(0,{

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(130);

var _reactRouterDom = __webpack_require__(56);

var _GuestNavBar = __webpack_require__(339);

var _GuestNavBar2 = _interopRequireDefault(_GuestNavBar);

var _UserNavBar = __webpack_require__(479);

var _UserNavBar2 = _interopRequireDefault(_UserNavBar);

var _Login = __webpack_require__(480);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(481);

var _Register2 = _interopRequireDefault(_Register);

var _SecureProperties = __webpack_require__(482);

var _SecureProperties2 = _interopRequireDefault(_SecureProperties);

var _Auth = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Profile from './Profile';


// import Signup from './Logging/Signup';
// import FrontPageUser from './FrontPage/FrontPageUser';
// import FrontPageGuest from './FrontPage/FrontPageGuest';
// import Login from './Logging/Login';


var Router = function (_Component) {
  _inherits(Router, _Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

    _this.state = {
      errorMessage: ''
    };
    return _this;
  }

  _createClass(Router, [{
    key: 'render',
    value: function render() {
      console.log("props are: ", this.props);
      var _props = this.props,
          dispatch = _props.dispatch,
          errorMessage = _props.errorMessage,
          isAuthenticated = _props.isAuthenticated,
          history = _props.history,
          user = _props.user;

      return isAuthenticated === false ? _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GuestNavBar2.default, {
              dispatch: dispatch,
              errorMessage: errorMessage,
              isAuthenticated: isAuthenticated,
              history: history
            })
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/login' },
          _react2.default.createElement(_Login2.default, {
            dispatch: dispatch,
            errorMessage: errorMessage,
            isAuthenticated: isAuthenticated,
            history: history
          })
        ),
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/register' },
          _react2.default.createElement(_Register2.default, {
            dispatch: dispatch,
            errorMessage: errorMessage,
            isAuthenticated: isAuthenticated,
            history: history
          })
        )
      ) : _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_UserNavBar2.default, {
              dispatch: dispatch,
              errorMessage: errorMessage,
              isAuthenticated: isAuthenticated,
              history: history,
              user: user
            }),
            _react2.default.createElement(_SecureProperties2.default, {
              dispatch: dispatch,
              errorMessage: errorMessage,
              isAuthenticated: isAuthenticated,
              history: history,
              user: user
            })
          )
        )
      );
    }
  }]);

  return Router;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(state) {
  var auth = state.auth;
  var isAuthenticated = auth.isAuthenticated,
      errorMessage = auth.errorMessage,
      user = auth.user;

  return {
    isAuthenticated: isAuthenticated,
    errorMessage: errorMessage,
    user: user
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Router));

/***/ })

})
//# sourceMappingURL=0.b45a32e96ffee98f882e.hot-update.js.map