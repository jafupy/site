import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const routes = {
  cafe: {
    link: "https://discord.gg/bNjW3Jxshe",
    name: "JaFu's Cafe",
    description: "Welcome to JaFu's Cafe, a community of developers and designers dedicated to learning, sharing, and creating together. Join us to share your expertise, and collaborate on exciting projects with those with similar interests!",
    image: "https://cdn.discordapp.com/icons/1027098556739371120/6e9c9215dfa24fe7dc05557b138eb008.webp?size=2048",
    color: "#65adda"
  },
  github: {
    link: "https://github.com/JaFu-py",
    name: "Github - JaFu-py",
    description: "Jacob (JaFu.py)'s Github",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png?size=2048",
    color: "#000000"
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const slug = $page.params.id;
  const data = routes[slug];
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-2pyixb_START -->${$$result.title = `<title>${escape(data.name)}</title>`, ""}<meta name="title"${add_attribute("content", data.name, 0)}><meta name="description"${add_attribute("content", data.description, 0)}><meta http-equiv="refresh"${add_attribute("content", `0; url=${data.link}`, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", data.link, 0)}><meta property="og:title"${add_attribute("content", data.name, 0)}><meta property="og:description"${add_attribute("content", data.description, 0)}><meta property="og:image"${add_attribute("content", data.image, 0)}><meta property="twitter:card" content="summary"><meta property="twitter:url"${add_attribute("content", data.link, 0)}><meta property="twitter:title"${add_attribute("content", data.name, 0)}><meta property="twitter:description"${add_attribute("content", data.description, 0)}><meta property="twitter:image"${add_attribute("content", data.image, 0)}><!-- HEAD_svelte-2pyixb_END -->`, ""}

${slug in routes ? `<section>${escape(JSON.stringify(data))}</section>
  ${slots.default ? slots.default({}) : ``}` : `<section><h1>404 | Not Found</h1>
    <p>This isn&#39;t a valid shortened link.</p></section>`}`;
});
export {
  Page as default
};
