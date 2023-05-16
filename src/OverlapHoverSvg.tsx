type OverlapHoverSvgProps = {
  svg: string;
  href: string;
  className?: string;
  darkMode?: boolean;
  expand?: boolean;
  index?: number;
  size?: number;
  spacing?: number;
  overlap?: number;
  direction?: string;
  alt: string;
};

const OverlapHoverSvg = ({
  svg,
  href,
  className = '',
  darkMode = false,
  expand,
  index = 0,
  size = 25,
  spacing = 16,
  overlap = 0.33,
  direction = 'right',
  alt,
}: OverlapHoverSvgProps) => {
  const positionStyle =
    direction === 'right'
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

  const darkModeClass = darkMode ? 'dark-mode' : '';

  return (
    <div
      className={`overlap-hover-svg ${darkModeClass}`}
      style={{ width: size, height: size, ...positionStyle }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`overlap-hover-link ${className}`}
      >
        <img src={svg} alt={alt} />
      </a>
    </div>
  );
};

export default OverlapHoverSvg;
