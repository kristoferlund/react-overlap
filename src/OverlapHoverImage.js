import React from "react";

const OverlapHoverImage = ({
  img,
  href,
  className = "",
  darkMode = false,
  expand,
  index,
  size,
  spacing,
  overlap,
  direction,
}) => {
  const positionStyle =
    direction === "right"
      ? {
          left: expand
            ? `${index * size + index * spacing}px`
            : `${index * size - index * (size * overlap)}px`,
        }
      : {
          right: expand
            ? `${index * size + index * spacing}px`
            : `${index * size - index * (size * overlap)}px`,
        };

  const darkModeClass = darkMode ? "dark-mode" : "";

  return (
    <div
      className={`overlap-hover-image ${darkModeClass}`}
      style={positionStyle}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer ${className}`}
      >
        <img src={img} alt="Logo" width={size} height={size} />
      </a>
    </div>
  );
};

export default OverlapHoverImage;
