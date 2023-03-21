"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const OverlapHoverImage = _ref => {
  let {
    src,
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "overlap-hover-image ".concat(darkModeClass),
    style: positionStyle
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "overlap-hover-link ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: alt
  })));
};
var _default = OverlapHoverImage;
exports.default = _default;