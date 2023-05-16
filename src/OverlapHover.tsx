import React, { useState } from 'react';

type OverlapHoverProps = {
  children: JSX.Element | JSX.Element[];
  size?: number;
  spacing?: number;
  overlap?: number;
  direction?: string;
  className?: string;
  darkMode?: boolean;
};

const OverlapHover = ({
  children,
  size = 25,
  spacing = 16,
  overlap = 0.33,
  direction = 'right',
  className = '',
  darkMode = false,
}: OverlapHoverProps): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const childCount = React.Children.count(children);
  const wrapperWidth = `calc(${size}px * ${childCount} + ${spacing}px * ${
    childCount - 1
  })`;

  return (
    <>
      <style>
        {`
          .overlap-hover {
            display: flex;
            justify-content: center;
            display: inline-block;
            position: relative;
          }

          .overlap-hover-image,
          .overlap-hover-svg {
            position: absolute;
            transition: all 0.3s;
          }

          .overlap-hover-image.dark-mode ,
          .overlap-hover-svg.dark-mode {
            filter: invert(1);
          }

          .overlap-hover-link {
            cursor: pointer;
          }
        `}
      </style>
      <div
        className={`overlap-hover ${className}`}
        style={{ width: wrapperWidth, height: size }}
      >
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{ width: wrapperWidth, height: size }}
        >
          {React.Children.map(children, (child, index) => {
            const logoProps = {
              ...child.props,
              expand: hovered,
              index,
              size,
              spacing,
              overlap,
              direction,
              darkMode,
            };
            return React.cloneElement(child, logoProps);
          })}
        </div>
      </div>
    </>
  );
};

export default OverlapHover;
