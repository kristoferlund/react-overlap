# React Overlap

![](./media/hover.png)

`react-overlap` is a React component that creates a hover effect where images or SVG graphics overlap each other. Use this component is to display logos or icons in a compact space that expands on hover.

## Installation

```bash
npm install react-overlap
```

```bash
yarn add react-overlap
```

## Using SVG Images

```javascript
import React from "react";
import { OverlapHover, OverlapHoverImage } from "react-overlap";

const logoData = [
  {
    href: "https://link.com",
    svg: <GithubLogo />,
  },
  {
    href: "https://link.com",
    svg: <DiscordLogo />,
  },
  {
    href: "https://link.com",
    svg: <TwitterLogo />,
  },
];

const App = () => {
  return (
    <div>
      <OverlapHover size={30} spacing={10} overlap={0.4} direction="left">
        {logoData.map((data, index) => (
          <OverlapHoverSvg key={index} href={data.href} svg={data.svg} />
        ))}
      </OverlapHover>
    </div>
  );
};

export default App;
```

## Using PNG Images

```javascript
import React from "react";
import { OverlapHover, OverlapHoverImage } from "react-overlap";

const App = () => {
  return (
    <OverlapHover direction="right">
      <OverlapHoverImage img="/path/to/image1.png" href="https://example.com" />
      <OverlapHoverImage img="/path/to/image2.png" href="https://example.com" />
      <OverlapHoverImage img="/path/to/image3.png" href="https://example.com" />
    </OverlapHover>
  );
};

export default App;
```

## Animation direction

To change the direction of the animation, pass the direction prop with either "left" or "right" (default is "right").

```javascript
<OverlapHover direction="left">
  // Your OverlapHoverImage or OverlapHoverSvg components
</OverlapHover>
```

## Dark Mode

The OverlapHover component supports dark mode, which can be enabled by setting the `darkMode` prop to `true`. When dark mode is enabled, the component will invert the colors of the images or SVGs to provide better contrast and visibility against a dark background.

To enable dark mode, simply pass the `darkMode` prop to the `OverlapHover` component:

```jsx
<OverlapHover darkMode={true}>// Your child components</OverlapHover>
```

## Props

| Prop      | Type   | Default | Description                                                                                 |
| --------- | ------ | ------- | ------------------------------------------------------------------------------------------- |
| direction | string | "right" | The direction of the animation on hover. Can be "left" or "right"                           |
| size      | number | 25      | The size of the images or SVGs in pixels                                                    |
| spacing   | number | 16      | The spacing between images or SVGs in pixels                                                |
| overlap   | number | 0.33    | The overlap percentage                                                                      |
| darkMode  | bool   | false   | Whether to enable dark mode or not. By default, darkmode inverts the colours of the images. |

## License

MIT
