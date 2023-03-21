import "./App.css";

import { OverlapHover, OverlapHoverImage, OverlapHoverSvg } from "./lib";

import DiscordPng from "./img/png/Discord.png";
import DiscordSvg from "./img/svg/Discord.svg";
import GithubPng from "./img/png/Github.png";
import GithubSvg from "./img/svg/Github.svg";
import TwitterPng from "./img/png/Twitter.png";
import TwitterSvg from "./img/svg/Twitter.svg";

function App() {
  const logoData = [
    {
      svg: GithubSvg,
      img: GithubPng,
      href: "https://github.com",
      alt: "Github",
    },
    {
      svg: DiscordSvg,
      img: DiscordPng,
      href: "https://discord.com",
      alt: "Discord",
    },
    {
      svg: TwitterSvg,
      img: TwitterPng,
      href: "https://twitter.com",
      alt: "Twitter",
    },
  ];

  return (
    <div>
      <div className="flex justify-center min-h-screen">
        <div className="max-w-md w-full mx-5 my-auto">
          <article className="font-sans prose lg:prose-xl mb-4 mt-10">
            <h1>React Overlap</h1>
            <p>
              Create a hover effect where images or SVG graphics overlap each
              other. Use this component is to display logos or icons in a
              compact space that expands on hover.
            </p>
            <p>
              Setup instructions:{" "}
              <a href="https://github.com/kristoferlund/react-overlap">
                https://github.com/kristoferlund/react-overlap
              </a>
            </p>
            <h3>Right to left</h3>
          </article>
          <div className="flex justify-end inset-0 border border-black/5 rounded-xl p-4 bg-slate-100 mb-4">
            <OverlapHover size={30} spacing={10} overlap={0.4} direction="left">
              {logoData.map((data, index) => (
                <OverlapHoverSvg
                  key={index}
                  alt={data.alt}
                  href={data.href}
                  className="opacity-100 hover:opacity-70"
                  svg={data.svg}
                />
              ))}
            </OverlapHover>
          </div>
          <article className="font-sans prose lg:prose-xl mb-4">
            <h3>Left to right</h3>
          </article>
          <div className="flex inset-0 border border-black/5 rounded-xl p-4 bg-slate-100 mb-4">
            <OverlapHover
              size={30}
              spacing={10}
              overlap={0.4}
              direction="right"
            >
              {logoData.map((data, index) => (
                <OverlapHoverSvg
                  key={index}
                  alt={data.alt}
                  href={data.href}
                  className="opacity-100 hover:opacity-70"
                  svg={data.svg}
                />
              ))}
            </OverlapHover>
          </div>
          <article className="font-sans prose lg:prose-xl mb-4">
            <h3>Size/overlap/spacing</h3>
          </article>
          <div className="flex inset-0 border border-black/5 rounded-xl p-4 bg-slate-100 mb-4">
            <OverlapHover
              size={60}
              spacing={30}
              overlap={0.6}
              direction="right"
            >
              {logoData.map((data, index) => (
                <OverlapHoverSvg
                  key={index}
                  alt={data.alt}
                  href={data.href}
                  className="opacity-100 hover:opacity-70"
                  svg={data.svg}
                />
              ))}
            </OverlapHover>
          </div>
          <article className="font-sans prose lg:prose-xl mb-4">
            <h3>Dark mode</h3>
          </article>
          <div className="flex inset-0 border border-black/5 rounded-xl p-4 bg-slate-600 mb-4">
            <OverlapHover
              size={30}
              spacing={10}
              overlap={0.4}
              direction="right"
              darkMode={true}
            >
              {logoData.map((data, index) => (
                <OverlapHoverSvg
                  key={index}
                  alt={data.alt}
                  href={data.href}
                  className="opacity-100 hover:opacity-70"
                  svg={data.svg}
                />
              ))}
            </OverlapHover>
          </div>
          <article className="font-sans prose lg:prose-xl mb-4">
            <h3>PNG images</h3>
          </article>
          <div className="flex inset-0 border border-black/5 rounded-xl p-4 bg-slate-100 mb-4">
            <OverlapHover
              size={30}
              spacing={10}
              overlap={0.4}
              direction="right"
            >
              {logoData.map((data, index) => (
                <OverlapHoverImage
                  key={index}
                  alt={data.alt}
                  href={data.href}
                  className="opacity-100 hover:opacity-70"
                  src={data.img}
                />
              ))}
            </OverlapHover>
          </div>
          <article className="font-sans prose lg:prose-xl mb-4">
            <h3>PNG images, dark mode</h3>
          </article>
          <div className="flex inset-0 border border-black/5 rounded-xl p-4 bg-slate-600 mb-4">
            <OverlapHover
              size={30}
              spacing={10}
              overlap={0.4}
              direction="right"
              darkMode={true}
            >
              {logoData.map((data, index) => (
                <OverlapHoverImage
                  key={index}
                  alt={data.alt}
                  href={data.href}
                  className="opacity-100 hover:opacity-70"
                  src={data.img}
                />
              ))}
            </OverlapHover>
          </div>
          <article className="font-sans prose lg:prose-xl mb-4">
            <h3>License</h3>
            <p>
              MIT License
              <br />
              2023,{" "}
              <a href="https://github.com/kristoferlund">Kristofer Lund</a>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
