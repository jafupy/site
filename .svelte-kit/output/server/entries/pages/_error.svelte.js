import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h1>Woah! How did we get here?</h1>
  <a href="/#">Lets get back to safety ;)</a></section>`;
});
export {
  Error as default
};
