import "./App.css";

import {
  OverlapHover,
  OverlapHoverImage,
  OverlapHoverSvg,
} from "./lib/components";

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
        <div className="w-full max-w-md mx-5 my-auto">
          <article className="mt-10 mb-4 font-sans prose lg:prose-xl">
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
          <div className="inset-0 flex justify-end p-4 mb-4 border border-black/5 rounded-xl bg-slate-100">
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
          <article className="mb-4 font-sans prose lg:prose-xl">
            <h3>Left to right</h3>
          </article>
          <div className="inset-0 flex p-4 mb-4 border border-black/5 rounded-xl bg-slate-100">
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
          <article className="mb-4 font-sans prose lg:prose-xl">
            <h3>Size/overlap/spacing</h3>
          </article>
          <div className="inset-0 flex p-4 mb-4 border border-black/5 rounded-xl bg-slate-100">
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
          <article className="mb-4 font-sans prose lg:prose-xl">
            <h3>Dark mode</h3>
          </article>
          <div className="inset-0 flex p-4 mb-4 border border-black/5 rounded-xl bg-slate-600">
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
          <article className="mb-4 font-sans prose lg:prose-xl">
            <h3>PNG images</h3>
          </article>
          <div className="inset-0 flex p-4 mb-4 border border-black/5 rounded-xl bg-slate-100">
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
          <article className="mb-4 font-sans prose lg:prose-xl">
            <h3>PNG images, dark mode</h3>
          </article>
          <div className="inset-0 flex p-4 mb-4 border border-black/5 rounded-xl bg-slate-600">
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
          <article className="mb-4 font-sans prose lg:prose-xl">
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
