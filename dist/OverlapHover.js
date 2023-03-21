"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const OverlapHover = _ref => {
  let {
    children,
    size = 25,
    spacing = 16,
    overlap = 0.33,
    direction = "right",
    className = "",
    darkMode = false
  } = _ref;
  const [hovered, setHovered] = (0, _react.useState)(false);
  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };
  const childCount = _react.default.Children.count(children);
  const wrapperWidth = "calc(".concat(size, "px * ").concat(childCount, " + ").concat(spacing, "px * ").concat(childCount - 1, ")");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", null, "\n          .overlap-hover {\n            display: flex;\n            justify-content: center;\n            display: inline-block;\n            position: relative;\n          }\n\n          .overlap-hover-image,\n          .overlap-hover-svg {\n            position: absolute;\n            transition: all 0.3s;\n          }\n\n          .overlap-hover-image.dark-mode ,\n          .overlap-hover-svg.dark-mode {\n            filter: invert(1);\n          }\n\n          .overlap-hover-link {\n            cursor: pointer;\n          }\n        "), /*#__PURE__*/_react.default.createElement("div", {
    className: "overlap-hover ".concat(className),
    style: {
      width: wrapperWidth,
      height: size
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: {
      width: wrapperWidth,
      height: size
    }
  }, _react.default.Children.map(children, (child, index) => {
    const logoProps = _objectSpread(_objectSpread({}, child.props), {}, {
      expand: hovered,
      index: index,
      size: size,
      spacing: spacing,
      overlap: overlap,
      direction: direction,
      darkMode: darkMode
    });
    return /*#__PURE__*/_react.default.cloneElement(child, logoProps);
  }))));
};
var _default = OverlapHover;
exports.default = _default;