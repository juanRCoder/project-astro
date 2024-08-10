import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead, f as createTransitionScope, g as renderSlot } from './astro/server_D2cOWH87.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';
/* empty css                         */

function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCount(count + 1),
        className: "bg-orange-500 w-24 py-1 rounded-sm",
        children: "Agregar"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCount(0),
        className: "bg-orange-500 w-24 py-1 rounded-sm",
        children: "Resetear"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-center text-lg", children: count })
  ] });
}

function Navbar() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("nav", { className: "flex bg-stone-800 items-center py-2 px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-orange-500", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/launcher", className: "hover:text-orange-500", children: "Launcher" }),
      /* @__PURE__ */ jsx("a", { href: "/posts", className: "hover:text-orange-500", children: "posts" })
    ] }),
    /* @__PURE__ */ jsx(Counter, {})
  ] }) });
}

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/User/Desktop/Programming/Projects/project-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$HomeLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><title>Astro | ${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-stone-900 text-white"> <header> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Desktop/Programming/Projects/project-astro/src/components/Navbar", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "lylokyai") })} </header> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/User/Desktop/Programming/Projects/project-astro/src/layouts/HomeLayout.astro", "self");

export { $$HomeLayout as $ };
