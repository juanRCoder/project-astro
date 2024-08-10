import{r as x}from"./index.DhYZZe0J.js";var i={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=x,f=Symbol.for("react.element"),m=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function p(s,e,l){var t,n={},a=null,c=null;l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)d.call(e,t)&&!_.hasOwnProperty(t)&&(n[t]=e[t]);if(s&&s.defaultProps)for(t in e=s.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:f,type:s,key:a,ref:c,props:n,_owner:h.current}}o.Fragment=m;o.jsx=p;o.jsxs=p;i.exports=o;var r=i.exports;function j(){const[s,e]=x.useState(0);return r.jsxs("div",{className:"flex gap-4",children:[r.jsx("button",{onClick:()=>e(s+1),className:"bg-orange-500 w-24 py-1 rounded-sm",children:"Agregar"}),r.jsx("button",{onClick:()=>e(0),className:"bg-orange-500 w-24 py-1 rounded-sm",children:"Resetear"}),r.jsx("p",{className:"text-center text-lg",children:s})]})}function g(){return r.jsx(r.Fragment,{children:r.jsxs("nav",{className:"flex bg-stone-800 items-center py-2 px-4",children:[r.jsxs("div",{className:"flex-1 flex gap-4",children:[r.jsx("a",{href:"/",className:"hover:text-orange-500",children:"Home"}),r.jsx("a",{href:"/launcher",className:"hover:text-orange-500",children:"Launcher"}),r.jsx("a",{href:"/posts",className:"hover:text-orange-500",children:"posts"})]}),r.jsx(j,{})]})})}export{g as default};
