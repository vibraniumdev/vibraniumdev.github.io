(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{IP2g:function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));r("E9XD");var n=r("7O5W"),a=r("17x9"),o=r.n(a),i=r("q1tI"),l=r.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function m(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),a=y(e.slice(0,n)),o=e.slice(n+1).trim();return a.startsWith("webkit")?t[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:t[a]=o,t}),{})}var O=!1;try{O=!0}catch(h){}function d(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function j(t){var e=t.forwardedRef,r=b(t,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,l=r.className,c=r.title,u=r.titleId,y=d(a),m=g("classes",[].concat(p(function(t){var e,r=t.spin,n=t.pulse,a=t.fixedWidth,o=t.inverse,i=t.border,l=t.listItem,c=t.flip,u=t.size,f=t.rotation,b=t.pull,p=(s(e={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(e,"fa-rotate-".concat(f),null!=f&&0!==f),s(e,"fa-pull-".concat(b),null!=b),s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map((function(t){return p[t]?t:null})).filter((function(t){return t}))}(r)),p(l.split(" ")))),h=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),w=g("mask",d(o)),x=Object(n.icon)(y,f({},m,{},h,{},w,{symbol:i,title:c,titleId:u}));if(!x)return function(){var t;!O&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var k=x.abstract,z={ref:e};return Object.keys(r).forEach((function(t){j.defaultProps.hasOwnProperty(t)||(z[t]=r[t])})),v(k[0],z)}j.displayName="FontAwesomeIcon",j.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return t(e,r)})),o=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=m(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[y(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=b(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},l),e.apply(void 0,[r.tag,f({},o.attrs,{},c)].concat(p(a)))}.bind(null,l.a.createElement)},RXBc:function(t,e,r){"use strict";r.r(e);r("q1tI");var n=r("Wbzz"),a=r("wTIg");var o=Object(a.a)("div",{target:"e1ky1pz80"})({name:"xi606m",styles:"text-align:center;"}),i=Object(a.a)("div",{target:"e1ky1pz81"})({name:"1rgy1dx",styles:"display:flex;align-items:center;justify-content:center;flex-direction:row;"}),l=Object(a.a)("p",{target:"e1ky1pz82"})({name:"ekrh3a",styles:"padding:0;margin-bottom:1rem;font-size:1.4rem;"}),c=Object(a.a)("h1",{target:"e1ky1pz83"})({name:"1gpk0wj",styles:"font-size:3.5rem;margin-bottom:1.5rem;"}),s=Object(a.a)("p",{target:"e1ky1pz84"})({name:"1msjh1x",styles:"font-style:italic;"}),u=r("qKvR"),f=function(){return Object(u.b)(n.StaticQuery,{query:"3139552914",render:function(t){return Object(u.b)(i,null,Object(u.b)(o,null,Object(u.b)(c,null,t.site.siteMetadata.title),Object(u.b)(l,null,t.site.siteMetadata.subtitle),Object(u.b)(s,null,"(Currently under construction)")))}})},b=r("Bl7J"),p=r("vrFN"),y=r("IP2g"),m=r("8tEE");var O=Object(a.a)("div",{target:"e2puxoz0"})({name:"smqnnt",styles:"text-align:center;padding:1rem 0;svg{margin:0 1.5rem;padding:0;font-size:1.5rem;:hover{color:#6c757d;transition-duration:0.2s;}}"}),d=Object(a.a)("div",{target:"e2puxoz1"})({name:"gmuwbf",styles:"display:flex;align-items:center;justify-content:center;"}),g=function(){return Object(u.b)(d,null,Object(u.b)(O,null,Object(u.b)("a",{href:"https://github.com/vibraniumdev/",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(y.a,{icon:m.a})),Object(u.b)("a",{href:"https://twitter.com/vibraniumdev",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(y.a,{icon:m.e})),Object(u.b)("a",{href:"https://medium.com/@guiemi",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(y.a,{icon:m.d})),Object(u.b)("a",{href:"https://www.instagram.com/violaodeinverno/",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(y.a,{icon:m.b})),Object(u.b)("a",{href:"https://www.linkedin.com/in/guiemi/",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(y.a,{icon:m.c}))))};e.default=function(){return Object(u.b)(b.a,null,Object(u.b)(p.a,{title:"Home",keywords:["gatsby","application","react"]}),Object(u.b)(f,null),Object(u.b)(g,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ec90e0c53554c6558602.js.map