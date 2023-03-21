"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const OverlapHoverSvg = _ref => {
  let {
    svg,
    href,
    className = "",
    darkMode = false,
    expand,
    index,
    size,
    spacing,
    overlap,
    direction,
    alt
  } = _ref;
  const positionStyle = direction === "right" ? {
    left: expand ? "".concat(index * size + index * spacing, "px") : "".concat(index * size - index * (size * overlap), "px")
  } : {
    right: expand ? "".concat(index * size + index * spacing, "px") : "".concat(index * size - index * (size * overlap), "px")
  };
  const darkModeClass = darkMode ? "dark-mode" : "";
  console.log(darkMode);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "overlap-hover-svg ".concat(darkModeClass),
    style: _objectSpread({
      width: size,
      height: size
    }, positionStyle)
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "overlap-hover-link ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: svg,
    alt: alt
  })));
};
var _default = OverlapHoverSvg;
exports.default = _default;