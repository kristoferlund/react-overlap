import React from "react";

const OverlapHoverImage = ({
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
  alt,
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
        className={`overlap-hover-link ${className}`}
      >
        <img src={src} width={size} height={size} alt={alt} />
      </a>
    </div>
  );
};

export default OverlapHoverImage;
