webpackHotUpdate(0,{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(83);

var _reactRouterDom = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GuestNavBar = function GuestNavBar(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactBootstrap.Navbar,
      null,
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar.Brand,
          null,
          _react2.default.createElement('img', { src: '../../../media/call911.jpg', alt: '' }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            '911Rescue'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Nav,
        null,
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login' },
            'Login'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/register' },
            'Register'
          )
        )
      )
    )
  );
};

exports.default = GuestNavBar;

/***/ })

})
//# sourceMappingURL=0.1feb36a6637cef94fa59.hot-update.js.map