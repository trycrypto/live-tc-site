(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var s,l=(s=r(7294))&&s.__esModule?s:{default:s},i=r(1063),a=r(4651),o=r(7426);var c={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,s=a.useRouter(),f=l.default.useMemo((function(){var t=i.resolveHref(s,e.href,!0),r=n(t,2),l=r[0],a=r[1];return{href:l,as:e.as?i.resolveHref(s,e.as):a||l}}),[s,e.href,e.as]),d=f.href,h=f.as,m=e.children,x=e.replace,p=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var j=(t=l.default.Children.only(m))&&"object"===typeof t&&t.ref,b=o.useIntersection({rootMargin:"200px"}),w=n(b,2),y=w[0],C=w[1],N=l.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);l.default.useEffect((function(){var e=C&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:s&&s.locale,n=c[d+"%"+h+(t?"%"+t:"")];e&&!n&&u(s,d,h,{locale:t})}),[h,d,C,g,r,s]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,l,a,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[s?"replace":"push"](r,n,{shallow:l,locale:o,scroll:a}))}(e,s,d,h,x,p,v,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(s,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof g?g:s&&s.locale,P=s&&s.isLocaleDomain&&i.getDomainLocale(h,O,s&&s.locales,s&&s.domainLocales);k.href=P||i.addBasePath(i.addLocale(h,O,s&&s.defaultLocale))}return l.default.cloneElement(t,k)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,o=s.useRef(),c=s.useState(!1),u=n(c,2),f=u[0],d=u[1],h=s.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:s,elements:n}),r}(r),s=n.id,l=n.observer,i=n.elements;return i.set(e,t),l.observe(e),function(){i.delete(e),l.unobserve(e),0===i.size&&(l.disconnect(),a.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return s.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[h,f]};var s=r(7294),l=r(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},6525:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return j}});r(3498);var s=r(7294),l=r(9120),i=r(1664),a=r(5893),o=[{name:"Home",href:"/"},{name:"Community",href:"/join-us"},{name:"About",href:"/about"}],c=[{name:"NftyFile",href:"/nifty-file"},{name:"PhotoKey",href:"/photo-key"},{name:"DecentPage",href:"/decent-page"}],u=function(){var e=(0,s.useState)(null),t=e[0],r=e[1],n=(0,s.useState)(!1),u=n[0],f=n[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"h-full w-full shadow-md",children:[(0,a.jsx)("nav",{className:" xl:block hidden",children:(0,a.jsx)("div",{className:"mx-auto container px-6 py-2",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("div",{className:"flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start",children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("img",{className:"h-6 w-auto md:h-8 cursor-pointer",src:"/images/Logo.svg",alt:""})})}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"hidden xl:flex text-grey-extralight tracking-wider text-base space-x-6",children:o.map((function(e){var t=e.href,r=e.name;return(0,a.jsx)(i.default,{href:t,passHref:!0,children:(0,a.jsx)("a",{className:"flex px-5 items-center py-6 leading-5 hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow  transition duration-150 ease-in-out",children:r})},r)}))})}),(0,a.jsxs)("div",{className:"hidden xl:flex items-center",children:[(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("div",{className:"flex items-center relative",onClick:function(){return f(!u)},children:u&&(0,a.jsx)("ul",{className:"p-2 z-10 w-44 bg-home-bkg bg-cover absolute rounded right-0 shadow top-0 mt-16 text-grey-extralight shadow-md tracking-wide space-y-5",children:c.map((function(e){var t=e.name,r=e.href;return(0,a.jsx)(i.default,{href:r,passHref:!0,children:(0,a.jsx)("li",{className:"cursor-pointer leading-3 tracking-normal py-2 hover:text-yellow focus:text-yellow focus:outline-none ml-2 pb-4 border-b-2 border-opacity-10",children:t})})}))})})}),(0,a.jsx)("div",{className:"relative md:ml-6 my-2",children:(0,a.jsx)(i.default,{href:"/join-us",passHref:!0,children:(0,a.jsx)("a",{className:"focus:outline-none bg-button  transition duration-150 ease-in-out bg-cover  hover:bg-grey rounded text-grey font-semibold tracking-wide px-5 py-3 text-sm",children:"Join Us"})})})]})]})})}),(0,a.jsxs)("nav",{children:[(0,a.jsxs)("div",{className:"py-6 px-6 w-full flex xl:hidden justify-between items-center bg-black-light fixed top-0 z-40 shadow-md",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("img",{className:"h-6 w-auto md:h-8 cursor-pointer",src:"/images/Logo.svg",alt:""})})}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"relative mr-4",children:(0,a.jsx)(i.default,{href:"/join-us",passHref:!0,children:(0,a.jsx)("button",{className:"w-24 focus:outline-none bg-yellow-bkg transition duration-150 ease-in-out rounded-xl text-grey  px-5 py-2 text-sm font-semibold",children:"Join Us"})})}),(0,a.jsx)("div",{id:"menu",className:"text-grey cursor-pointer",onClick:function(){return r(!t)},children:t?"":(0,a.jsx)(i.default,{href:"#nav",children:(0,a.jsx)(l.kds,{className:"icon icon-tabler icon-tabler-menu-2",width:24,height:24})})})]})]}),(0,a.jsxs)("div",{id:"nav",className:t?"w-full xl:hidden h-full absolute z-40 transform translate-x-0":"w-full xl:hidden h-full absolute z-40 transform -translate-x-full",children:[(0,a.jsx)("div",{className:"bg-gray-800 opacity-50 w-full h-full",onClick:function(){return r(!t)}}),(0,a.jsx)("div",{className:"w-full z-40 fixed overflow-y-auto top-0 bg-home-bkg shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out",children:(0,a.jsx)("div",{className:"px-6 h-full",children:(0,a.jsx)("div",{className:"flex flex-col justify-between h-full w-full",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mt-8 flex w-full items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("img",{className:"h-6 w-auto md:h-8 cursor-pointer",src:"/images/Logo.svg",alt:""})})}),(0,a.jsx)("div",{id:"cross",className:"text-grey ml-6 cursor-pointer",onClick:function(){return r(!t)},children:(0,a.jsx)(l.b0D,{className:"icon icon-tabler icon-tabler-x",width:24,height:24})})]})}),(0,a.jsxs)("ul",{className:"f-m-m text-grey ",children:[o.map((function(e){var t=e.href,n=e.name;return(0,a.jsx)(i.default,{href:t,passHref:!0,children:(0,a.jsx)("a",{onClick:function(){return r(!1)},children:(0,a.jsx)("li",{className:"pt-10",children:(0,a.jsx)("span",{className:"font-thin tracking-wider text-base ml-3",children:n})})})},n)})),(0,a.jsx)("div",{className:" relative pt-8",children:(0,a.jsx)("div",{className:"flex items-center relative text-grey",onClick:function(){return f(!u)},children:u&&(0,a.jsx)("ul",{className:"p-2 w-full bg-home-bkg bg-cover absolute rounded shadow top-0 ml-2 mt-8 shadow-md space-y-4",children:c.map((function(e){var t=e.name,r=e.href;return(0,a.jsx)(i.default,{href:r,passHref:!0,children:(0,a.jsx)("li",{className:"cursor-pointer  leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none ml-2",children:t})})}))})})})]})]})})})})]})]})]})})};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=[{name:"Join Us",href:"/join-us"},{name:"About",href:"/about"}],m=[{name:"Discord",href:"https://discord.gg/trycrypto",icon:function(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 71 55",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("g",{clipPath:"url(#clip0)",children:(0,a.jsx)("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0",children:(0,a.jsx)("rect",{width:"71",height:"55",fill:"white"})})})]})}},{name:"Twitter",href:"https://twitter.com/TryCrypto",icon:function(e){return(0,a.jsx)("svg",d(d({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,a.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}))}},{name:"GitHub",href:"https://github.com/trycrypto",icon:function(e){return(0,a.jsx)("svg",d(d({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}))}}],x=function(){return(0,a.jsx)("footer",{className:"relative bg-footer bg-cover ",children:(0,a.jsxs)("div",{className:"flex flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("img",{className:"h-6 w-auto md:h-8",src:"/images/Logo.svg",alt:""}),(0,a.jsx)("nav",{className:"my-4 flex flex-wrap justify-center","aria-label":"Footer",children:h.map((function(e){return(0,a.jsx)("div",{className:"px-5 py-2",children:(0,a.jsx)("a",{href:e.href,className:"text-base text-grey-extralight hover:text-yellow-200",children:e.name})},e.name)}))}),(0,a.jsx)("div",{className:" flex justify-center space-x-6",children:m.map((function(e){return(0,a.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-grey-extralight hover:text-yellow-200",children:[(0,a.jsx)("span",{className:"sr-only",children:e.name}),(0,a.jsx)(e.icon,{className:"h-6 w-6"})]},e.name)}))}),(0,a.jsxs)("p",{className:"mt-8 text-center text-sm text-grey-extralight",children:["\xa9 ",(new Date).getFullYear()," TryCrypto, Inc. All rights reserved."]})]})})},p=function(e){var t=e.children;return(0,a.jsxs)("main",{className:"bg-home-bkg bg-cover",children:[(0,a.jsx)(u,{}),t,(0,a.jsx)(x,{})]})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.Component,r=e.pageProps;return(0,a.jsx)(p,{children:(0,a.jsx)(t,g({},r))})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6525)}])},3498:function(){},1664:function(e,t,r){e.exports=r(2167)},9120:function(e,t,r){"use strict";r.d(t,{BZ6:function(){return s},kds:function(){return l},b0D:function(){return i}});var n=r(7294);var s=function(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"}))};var l=function(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8h16M4 16h16"}))};var i=function(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);