"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5476],{76440:(r,e,n)=>{n.d(e,{Z:()=>i});var c=n(1799),a=n.n(c),o=n(82609),t=n.n(o)()(a());t.push([r.id,"/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }\n.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }\n.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }\n.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }\n.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }\n.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }\n.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-mirage span.cm-property { color: #f29e74; }\n.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  \n.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } \n.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }\n.cm-s-ayu-mirage span.cm-string { color: #bae67e; }\n\n.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }\n.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }\n.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-type { color: #ffa759; }\n.cm-s-ayu-mirage span.cm-def { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }\n.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-header { color: #bae67e; }\n.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }\n.cm-s-ayu-mirage .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/ayu-mirage.css"],names:[],mappings:"AAAA,2CAA2C;;AAE3C,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,mBAAmB,EAAE;AACrL,+KAA+K,gCAAgC,EAAE;AACjN,uCAAuC,mBAAmB,EAAE,iBAAiB,EAAE;AAC/E,4CAA4C,YAAY,EAAE;AAC1D,mDAAmD,+BAA+B,EAAE;AACpF,0CAA0C,2BAA2B,EAAE;AACvE,sCAAsC,8BAA8B,EAAE;;AAEtE,mCAAmC,cAAc,EAAE,iBAAiB,EAAE;AACtE,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;;AAElD,gDAAgD,cAAc,EAAE;AAChE,0CAA0C,cAAc,EAAE;AAC1D,0CAA0C,cAAc,EAAE;AAC1D,2CAA2C,cAAc,EAAE;;AAE3D,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;AACrD,mCAAmC,cAAc,EAAE;AACnD,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,cAAc,EAAE;;AAElD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE;AACtD,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,mCAAmC,6BAA6B,EAAE;AAClE,+BAA+B,cAAc,EAAE;AAC/C,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;AAChD,iCAAiC,cAAc,EAAE;;AAEjD,qDAAqD,mBAAmB,EAAE;AAC1E;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }\n.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }\n.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }\n.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }\n.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }\n.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }\n.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-mirage span.cm-property { color: #f29e74; }\n.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  \n.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } \n.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }\n.cm-s-ayu-mirage span.cm-string { color: #bae67e; }\n\n.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }\n.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }\n.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-type { color: #ffa759; }\n.cm-s-ayu-mirage span.cm-def { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }\n.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-header { color: #bae67e; }\n.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }\n.cm-s-ayu-mirage .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const i=t},82609:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(r,n,c){"string"==typeof r&&(r=[[null,r,""]]);var a={};if(c)for(var o=0;o<this.length;o++){var t=this[o][0];null!=t&&(a[t]=!0)}for(var i=0;i<r.length;i++){var m=[].concat(r[i]);c&&a[m[0]]||(n&&(m[2]?m[2]="".concat(n," and ").concat(m[2]):m[2]=n),e.push(m))}},e}},1799:r=>{function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=r[n];return c}r.exports=function(r){var n,c,a=(c=4,function(r){if(Array.isArray(r))return r}(n=r)||function(r,e){var n=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=n){var c,a,o=[],t=!0,i=!1;try{for(n=n.call(r);!(t=(c=n.next()).done)&&(o.push(c.value),!e||o.length!==e);t=!0);}catch(r){i=!0,a=r}finally{try{t||null==n.return||n.return()}finally{if(i)throw a}}return o}}(n,c)||function(r,n){if(r){if("string"==typeof r)return e(r,n);var c=Object.prototype.toString.call(r).slice(8,-1);return"Object"===c&&r.constructor&&(c=r.constructor.name),"Map"===c||"Set"===c?Array.from(r):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?e(r,n):void 0}}(n,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],t=a[3];if(!t)return o;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),m="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(m," */"),s=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[o].concat(s).concat([A]).join("\n")}return[o].join("\n")}},25476:(r,e,n)=>{n.r(e),n.d(e,{default:()=>t});var c=n(46062),a=n.n(c),o=n(76440);a()(o.Z,{insert:"head",singleton:!1});const t=o.Z.locals||{}},46062:(r,e,n)=>{var c,a=function(){var r={};return function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[e]=n}return r[e]}}(),o=[];function t(r){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===r){e=n;break}return e}function i(r,e){for(var n={},c=[],a=0;a<r.length;a++){var i=r[a],m=e.base?i[0]+e.base:i[0],A=n[m]||0,s="".concat(m," ").concat(A);n[m]=A+1;var u=t(s),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(l)):o.push({identifier:s,updater:g(l,e),references:1}),c.push(s)}return c}function m(r){var e=document.createElement("style"),c=r.attributes||{};if(void 0===c.nonce){var o=n.nc;o&&(c.nonce=o)}if(Object.keys(c).forEach((function(r){e.setAttribute(r,c[r])})),"function"==typeof r.insert)r.insert(e);else{var t=a(r.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}return e}var A,s=(A=[],function(r,e){return A[r]=e,A.filter(Boolean).join("\n")});function u(r,e,n,c){var a=n?"":c.media?"@media ".concat(c.media," {").concat(c.css,"}"):c.css;if(r.styleSheet)r.styleSheet.cssText=s(e,a);else{var o=document.createTextNode(a),t=r.childNodes;t[e]&&r.removeChild(t[e]),t.length?r.insertBefore(o,t[e]):r.appendChild(o)}}function l(r,e,n){var c=n.css,a=n.media,o=n.sourceMap;if(a?r.setAttribute("media",a):r.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=c;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(c))}}var f=null,d=0;function g(r,e){var n,c,a;if(e.singleton){var o=d++;n=f||(f=m(e)),c=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=m(e),c=l.bind(null,n,e),a=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return c(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;c(r=e)}else a()}}r.exports=function(r,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===c&&(c=Boolean(window&&document&&document.all&&!window.atob)),c));var n=i(r=r||[],e);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var c=0;c<n.length;c++){var a=t(n[c]);o[a].references--}for(var m=i(r,e),A=0;A<n.length;A++){var s=t(n[A]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}n=m}}}}}]);
//# sourceMappingURL=5476.34c6bdf3b03971e19a47.js.map