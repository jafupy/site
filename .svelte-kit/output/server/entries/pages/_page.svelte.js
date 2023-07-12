import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";h2.svelte-aopo23.svelte-aopo23{font-size:2.25rem;line-height:2.5rem}#sections\\:about.svelte-aopo23 p.svelte-aopo23{text-align:justify}#sections\\.hero.svelte-aopo23.svelte-aopo23{align-items:baseline;display:flex;flex-direction:column;justify-content:center;gap:0rem}#sections\\.hero.svelte-aopo23 h1.svelte-aopo23{margin:1rem;font-weight:300;font-size:6rem;line-height:1}#sections\\.hero.svelte-aopo23 h3.svelte-aopo23{font-weight:300;font-size:1.875rem;line-height:2.25rem}#sections\\.hero.svelte-aopo23 .scrollArrow.svelte-aopo23{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);width:2.5rem;height:2.5rem;margin-bottom:1rem;animation:svelte-aopo23-bounce 5s infinite ease-in-out;stroke:rgb(219, 219, 221)}@keyframes svelte-aopo23-bounce{0%{transform:translateX(-50%) translateY(0)}40%{transform:translateX(-50%) translateY(2rem) rotate(0deg)}50%{transform:translateX(-50%) translateY(2rem) rotate(180deg)}90%{transform:translateX(-50%) translateY(0) rotate(180deg)}100%{transform:translateX(-50%) translateY(0) rotate(360deg)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const words = ["Jacob", "JaFu.py"];
  let currentWordIndex = 0;
  let Jacob = words[currentWordIndex];
  $$result.css.add(css);
  return `

<section id="sections.hero" class="flex flex-col justify-center h-screen w-screen p-8 gap-5 svelte-aopo23"><h3 class=" svelte-aopo23">Hey, I am</h3>
  <h1 class=" svelte-aopo23">${escape(Jacob)}</h1>
  <h3 class=" svelte-aopo23">${escape(Math.random() < 0.99 ? "A professional Apple Sheep" : "The end is never the end")}</h3>

  <svg xmlns="http://www.w3.org/2000/svg" class="scrollArrow svelte-aopo23" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 11v10"></path><path d="M9 18l3 3l3 -3"></path><path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path></svg></section>


<section id="sections:about" class="svelte-aopo23"><h2 class="md:text-4xl sm:text:3xl svelte-aopo23">About</h2>
  <p class="svelte-aopo23">I&#39;m Jacob, a professional apple sheep with a passion for web development.
    Coding is my creative outlet, and I love building user-friendly web
    applications. As an &quot;Apple sheep,&quot; I draw inspiration from their design and
    innovation. Currently I&#39;m in school so I can&#39;t work on my projects full
    time.
  </p></section>



<section><h2 class="svelte-aopo23">Projects</h2>
  <p class="text-lg">Mainly JS. Find &#39;em here.</p>

  <ul><li></li></ul></section>





`;
});
export {
  Page as default
};
