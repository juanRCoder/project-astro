/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_D2cOWH87.mjs';
import 'kleur/colors';
import { $ as $$HomeLayout } from '../../chunks/HomeLayout_Cfl2Ckww.mjs';
import { g as getPostsId } from '../../chunks/posts_rWciMnYj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let post;
  if (id) {
    post = await getPostsId(id);
  }
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": `Post ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="m-6"> <h1 class="text-xl">Post ${id}:</h1> <h4 class="text-orange-400 text-lg font-bold">${post?.title}</h4> <p>${post?.body}</p> <a href="/posts"> <button class="bg-slate-300 text-black font-semibold hover:bg-orange-500 hover:text-white transition px-4 py-1 rounded-md mt-2">Volver</button> </a> </section> ` })}`;
}, "C:/Users/User/Desktop/Programming/Projects/project-astro/src/pages/posts/[id].astro", void 0);

const $$file = "C:/Users/User/Desktop/Programming/Projects/project-astro/src/pages/posts/[id].astro";
const $$url = "/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
