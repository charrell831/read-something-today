(()=>{var e={};e.id=301,e.ids=[301],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},47970:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(75433),s(32029),s(35866);var r=s(23191),a=s(88716),n=s(37922),i=s.n(n),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,75433)),"/Users/camrynharrell/code/projects/resistance-learn/src/app/about/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"/Users/camrynharrell/code/projects/resistance-learn/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/camrynharrell/code/projects/resistance-learn/src/app/about/page.tsx"],x="/about/page",h={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},83862:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},58876:()=>{},79968:(e,t,s)=>{Promise.resolve().then(s.bind(s,18158))},18158:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var r=s(10326),a=s(49100),n=s(51646),i=s(17581),o=s(21550),l=s(35047),c=s(85718),d=s(38182),x=s(34651),h=s(9066),u=s(61307);function p(){let e=(0,l.useRouter)(),t=(0,c.Z)("(max-width: 576px)");return r.jsx("div",{children:t?(0,r.jsxs)(d.F,{className:"bg-slate-500",children:[r.jsx(x.S,{children:r.jsx("button",{"data-collapse-toggle":"navbar-default",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false",children:r.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:r.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})})})}),(0,r.jsxs)(h.a,{"aria-label":"Dynamic Actions",children:[r.jsx(u.W,{onClick:()=>e.push("/"),onTouchStart:()=>e.push("/"),children:"Home"}),r.jsx(u.W,{onClick:()=>e.push("/podcasts"),onTouchStart:()=>e.push("/podcasts"),children:"Podcasts"}),r.jsx(u.W,{onClick:()=>e.push("/about"),onTouchStart:()=>e.push("/about"),children:"About"})]})]}):r.jsx(a.R,{className:"bg-black **nav.scrolled { @apply shadow-2xl; border-bottom: 0px; }",children:(0,r.jsxs)(n.U,{justify:"center",children:[r.jsx(i.k,{}),r.jsx(i.k,{children:r.jsx(o.A,{className:"p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-bold",onClick:()=>e.push("/"),children:"Home"})}),r.jsx(i.k,{children:r.jsx(o.A,{className:"p-0 bg-transparent data-[hover=true]:bg-transparent text-white",onClick:()=>e.push("/podcasts"),children:"Podcasts"})}),r.jsx(i.k,{children:r.jsx(o.A,{className:"p-0 bg-transparent data-[hover=true]:bg-transparent text-white",onClick:()=>e.push("/about"),children:"About"})})]})})})}},85718:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(17577);let a=e=>{let[t,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let r=window.matchMedia(e);r.matches!==t&&s(r.matches);let a=()=>s(r.matches);return r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[t,e]),t}},75433:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(19510),a=s(7320);function n(){return(0,r.jsxs)("div",{className:"overflow-x-hidden bg-black",children:[r.jsx(a.ZP,{}),r.jsx("h1",{className:"px-20 pt-6 mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white",children:"Welcome."}),r.jsx("p",{className:"px-20 flex justify-center",children:"This website was created with the intention of educating those with a willingness to learn. I believe that education is an essential tool in the fight for liberation and this website is (hopefully) a tool that will assist people in doing so."}),r.jsx("br",{}),(0,r.jsxs)("h2",{className:"italic px-20 pt-6 mb-4 flex text-1xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-1xl sm:text-1xl md:text-2xl lg:text-3xl dark:text-white",children:["How does it  \xa0 ",r.jsx("div",{className:"text-red-500",children:"work"}),"?"]}),(0,r.jsxs)("p",{className:"px-20 flex justify-center",children:["Each time you load this site, a reading or podcast will be randomly suggested to you. If you'd like to read or listen to something that aligns with a specific topic, you can click the 'Topics' button, select whichever subject you'd prefer to learn more about and the site will randomly suggest a reading/podcast that aligns with your choice.",r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),"Included in this website are various readings (fiction and nonfiction) and podcasts that revolve around topics such as Palestine, Sudan, Congo, Racial Justice and LGBTQIA+ rights.",r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),"My hope is that anyone who comes across this site will walk away with new knowledge that aligns with progressive values and empathy towards marginalized groups.",r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),"Thank you.",r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{})]})]})}},7320:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o});var r=s(68570);let a=(0,r.createProxy)(String.raw`/Users/camrynharrell/code/projects/resistance-learn/src/app/components/navBar.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`/Users/camrynharrell/code/projects/resistance-learn/src/app/components/navBar.tsx#default`)},32029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>i});var r=s(19510),a=s(45317),n=s.n(a);s(5023);let i={title:"Read Something Today",description:"a site by cam"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,children:e})})}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"500x500",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,347,621,557,613],()=>s(47970));module.exports=r})();