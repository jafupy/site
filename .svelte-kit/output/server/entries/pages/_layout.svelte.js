import { c as create_ssr_component, e as escape, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@charset "UTF-8";#BG.svelte-cnnppg.svelte-cnnppg{position:fixed;top:0;left:0;width:100vw;height:5rem;background:linear-gradient(180deg, rgb(8, 8, 13), rgba(8, 8, 13, 0.8) 66%, transparent);z-index:1}nav.svelte-cnnppg.svelte-cnnppg{box-sizing:border-box;z-index:2;position:fixed;top:0;left:0;width:100vw;height:4rem;padding:1rem;margin:0;border-bottom:1px solid rgb(88, 88, 95);display:flex;gap:1rem;justify-content:end;align-items:center;padding:1rem;margin-bottom:1rem}nav.svelte-cnnppg a.svelte-cnnppg{text-decoration:none;color:rgb(219, 219, 221);font-size:1.25rem;font-weight:300;transition:200ms ease-in-out;margin:0;padding:0}nav.svelte-cnnppg a.svelte-cnnppg:hover{font-size:1.5rem}nav.svelte-cnnppg svg.svelte-cnnppg{height:2.5rem;aspect-ratio:1402/313;fill:rgb(219, 219, 221);position:absolute;left:0}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="svelte-cnnppg"><svg viewBox="0 0 1422 333" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-cnnppg"><path d="M10 323H223C278.228 323 323 278.228 323 223V10" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M423 323V110C423 54.7715 467.772 9.99999 523 9.99999H636C691.228 9.99999 736 54.7715 736 110V323" stroke="white" stroke-width="20" stroke-linecap="round" fill="none" stroke-linejoin="round"></path><path d="M1149 10H936C880.772 10 836 54.7715 836 110V323" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M1099 114.5V223C1099 278.228 1143.77 323 1199 323H1312C1367.23 323 1412 278.228 1412 223V10" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M626 208L730.25 208M933 208L836.5 208" stroke="white" stroke-width="20" stroke-linecap="round" fill="none"></path></svg>
  <a href="/" class="svelte-cnnppg">Home</a><a href="#sections:about" class="svelte-cnnppg">About</a><a href="/projects" class="svelte-cnnppg">Projects</a></nav>

<div id="BG" class="svelte-cnnppg"></div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@charset "UTF-8";footer.svelte-1dp6ust{padding:10px;text-align:center;border-top:1px solid rgb(88, 88, 95)}p.svelte-1dp6ust{margin:0;font-size:14px;color:rgb(219, 219, 221)}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$1);
  return `<footer class="svelte-1dp6ust"><p class="svelte-1dp6ust">© ${escape(year)} JaFu.py Studios. All rights reserved.</p></footer>
<div id="BG"></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";@keyframes svelte-c5suf5-rotate{from{rotate:0deg}50%{scale:1 1.5}to{rotate:360deg}}#blob.svelte-c5suf5{height:clamp(10rem, 34vmax, 30rem);aspect-ratio:1;position:fixed;left:50%;top:50%;translate:-50% -50%;border-radius:50%;background:linear-gradient(to right, rgb(69, 173, 218), rgb(119, 125, 219));animation:svelte-c5suf5-rotate 20s infinite;opacity:0.8;z-index:-1;pointer-events:none}#blur.svelte-c5suf5{position:fixed;inset:0;z-index:-1;pointer-events:none;backdrop-filter:blur(100px)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const path = $page.route.id;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${!path.startsWith("/r/") ? `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  <div id="blob" class="svelte-c5suf5"></div>
  <div id="blur" class="svelte-c5suf5"></div>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
