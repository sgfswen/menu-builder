webpackHotUpdate(0,{

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(181);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(182);

	var _index6 = _interopRequireDefault(_index5);

	var _reactBootstrap = __webpack_require__(319);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/Menulist.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/MASTER/code/menu-builder/src/components/Menulist.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMASTERCodeMenuBuilderNode_modulesReactTransformHmrLibIndexJs2(_UsersMASTERCodeMenuBuilderNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var MenuList = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'MenuList',
	  getInitalState: function getInitalState() {
	    return {
	      menu: this.props.menu
	    };
	  },
	  render: function render() {
	    var menuItems = this.props.menu.map(function (item) {
	      console.log(item);
	      return;
	      _react3.default.createElement(
	        'div',
	        { className: 'col-xs-4', key: item.id },
	        _react3.default.createElement(
	          'h3',
	          null,
	          item.name
	        ),
	        _react3.default.createElement(_reactBootstrap.Image, { src: item.picUrl, rounded: true, responsive: true })
	      );
	    });
	    return _react3.default.createElement(
	      'tr',
	      null,
	      menuItems
	    );
	  }
	}));

	exports.default = MenuList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})