webpackHotUpdate(0,{

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = __webpack_require__(483);

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _videoReact = __webpack_require__(495);

var _path = __webpack_require__(510);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var introVideoPath = _path2.default.join(__dirname, 'media', 'introVideo.mp4');
console.log('path', introVideoPath);
var sources = { introVideo: introVideoPath };

var Landing = function (_Component) {
  _inherits(Landing, _Component);

  function Landing(props) {
    _classCallCheck(this, Landing);

    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

    _this.state = {
      source: sources['introVideo']
    };
    return _this;
  }

  _createClass(Landing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('state', this.state);
      this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }
  }, {
    key: 'handleStateChange',
    value: function handleStateChange(state, prevState) {
      this.setState({ player: state });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _videoReact.Player,
          {
            ref: 'player',
            autoPlay: true
          },
          _react2.default.createElement('source', { src: this.state.source })
        )
      );
    }
  }]);

  return Landing;
}(_react.Component);

exports.default = Landing;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })

})
//# sourceMappingURL=0.24e31c32b95b0e9ff139.hot-update.js.map