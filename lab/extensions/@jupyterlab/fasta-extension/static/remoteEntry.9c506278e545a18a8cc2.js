var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,u,l,s,f,d,c,p,h,b,v,g,m={},y={};function w(e){if(y[e])return y[e].exports;var r=y[e]={id:e,loaded:!1,exports:{}};return m[e].call(r.exports,r,r.exports,w),r.loaded=!0,r.exports}w.m=m,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{513:"e7dc18fe5a73fd2adf63",568:"761dbc3966ac7bd30a96",681:"80b3439aec1db6dfd35f",689:"319ca43e2e69eaa657b1"}[e]+".js?v="+{513:"e7dc18fe5a73fd2adf63",568:"761dbc3966ac7bd30a96",681:"80b3439aec1db6dfd35f",689:"319ca43e2e69eaa657b1"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlab/fasta-extension:",w.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var o=w.S[t],i="@jupyterlab/fasta-extension",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];switch(t){case"default":u("@jupyterlab/fasta-extension","3.1.1",(()=>w.e(568).then((()=>()=>w(1568))))),u("msa","1.0.3",(()=>Promise.all([w.e(681),w.e(689)]).then((()=>()=>w(9681)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():a(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==d?u>n&&!a:""==d!=a);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=n){if(s!=e[u])return!1}else{if(a?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||f<d!=a)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",s=(e,r,t,n)=>{var a=u(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,a,n)),d(e[t][a])},f=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},d=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,a){var o=w.I(r);return o&&o.then?o.then(e.bind(e,r,w.S[r],t,n,a)):e(r,w.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),h=c(((e,r,t,n,a)=>{var o=r&&w.o(r,t)&&f(r,t,n);return o?d(o):a()})),b={},v={4176:()=>h("default","msa",[1,1,0,3],(()=>Promise.all([w.e(681),w.e(689)]).then((()=>()=>w(9681))))),6510:()=>p("default","@lumino/widgets",[1,1,16,1])},g={568:[4176,6510]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,m[e]=t=>{delete y[e],t.exports=r()}},n=r=>{delete b[e],m[e]=t=>{throw delete y[e],r}};try{var a=v[e]();a.then?r.push(b[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={982:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=w.p+w.u(r),i=new Error;w.l(o,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[o,i,u]=t,l=0,s=[];l<o.length;l++)a=o[l],w.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(n in i)w.o(i,n)&&(w.m[n]=i[n]);for(u&&u(w),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_jupyterlab_fasta_extension=self.webpackChunk_jupyterlab_fasta_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S={};(()=>{var e=S,r={"./index":()=>w.e(568).then((()=>()=>w(1568))),"./mimeExtension":()=>w.e(568).then((()=>()=>w(1568))),"./style":()=>w.e(513).then((()=>()=>w(3513)))},t=(e,t)=>(w.R=t,t=w.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),w.R=void 0,t),n=(e,r)=>{if(w.S){var t=w.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return w.S[n]=e,w.I(n,r)}};w.d(e,{get:()=>t,init:()=>n})})(),(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlab/fasta-extension"]=S})();