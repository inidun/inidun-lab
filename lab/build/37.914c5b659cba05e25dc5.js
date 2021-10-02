"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[37],{26563:(o,n,r)=>{r.d(n,{Z:()=>d});var e=r(1799),t=r.n(e),a=r(82609),c=r.n(a)()(t());c.push([o.id,"/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/duotone-dark.css"],names:[],mappings:"AAAA;;;;;CAKC;;AAED,gCAAgC,mBAAmB,EAAE,cAAc,EAAE;AACrE,6CAA6C,6BAA6B,EAAE;AAC5E,yCAAyC,mBAAmB,EAAE,iBAAiB,EAAE;AACjF,4CAA4C,cAAc,EAAE;;AAE5D,iBAAiB;AACjB,wCAAwC,8BAA8B,EAAE,sCAAsC,EAAE,gCAAgC,EAAE,wCAAwC,EAAE,WAAW,EAAE;AACzM,uDAAuD,mBAAmB,EAAE,4BAA4B,EAAE,WAAW,CAAC;AACtH,uDAAuD,mBAAmB,EAAE,2BAA2B,EAAE,WAAW,CAAC;AACrH,eAAe;;AAEf,sRAAsR,cAAc,EAAE;;AAEtS,sCAAsC,cAAc,EAAE;AACtD,+GAA+G,cAAc,EAAE;AAC/H,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE;;AAEtD,qLAAqL,cAAc,EAAE;AACrM,6MAA6M,cAAc,EAAE;AAC7N,yEAAyE,cAAc,EAAE;;AAEzF,iJAAiJ;AACjJ,2EAA2E,WAAW,EAAE;;AAExF,oCAAoC,mBAAmB,EAAE;AACzD,iDAAiD,0BAA0B,EAAE,yBAAyB,EAAE",sourcesContent:["/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n"],sourceRoot:""}]);const d=c},82609:o=>{o.exports=function(o){var n=[];return n.toString=function(){return this.map((function(n){var r=o(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(o,r,e){"string"==typeof o&&(o=[[null,o,""]]);var t={};if(e)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(t[c]=!0)}for(var d=0;d<o.length;d++){var s=[].concat(o[d]);e&&t[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},1799:o=>{function n(o,n){(null==n||n>o.length)&&(n=o.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=o[r];return e}o.exports=function(o){var r,e,t=(e=4,function(o){if(Array.isArray(o))return o}(r=o)||function(o,n){var r=o&&("undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"]);if(null!=r){var e,t,a=[],c=!0,d=!1;try{for(r=r.call(o);!(c=(e=r.next()).done)&&(a.push(e.value),!n||a.length!==n);c=!0);}catch(o){d=!0,t=o}finally{try{c||null==r.return||r.return()}finally{if(d)throw t}}return a}}(r,e)||function(o,r){if(o){if("string"==typeof o)return n(o,r);var e=Object.prototype.toString.call(o).slice(8,-1);return"Object"===e&&o.constructor&&(e=o.constructor.name),"Map"===e||"Set"===e?Array.from(o):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(o,r):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=t[1],c=t[3];if(!c)return a;if("function"==typeof btoa){var d=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),i="/*# ".concat(s," */"),u=c.sources.map((function(o){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(o," */")}));return[a].concat(u).concat([i]).join("\n")}return[a].join("\n")}},10037:(o,n,r)=>{r.r(n),r.d(n,{default:()=>c});var e=r(46062),t=r.n(e),a=r(26563);t()(a.Z,{insert:"head",singleton:!1});const c=a.Z.locals||{}},46062:(o,n,r)=>{var e,t=function(){var o={};return function(n){if(void 0===o[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(o){r=null}o[n]=r}return o[n]}}(),a=[];function c(o){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===o){n=r;break}return n}function d(o,n){for(var r={},e=[],t=0;t<o.length;t++){var d=o[t],s=n.base?d[0]+n.base:d[0],i=r[s]||0,u="".concat(s," ").concat(i);r[s]=i+1;var m=c(u),A={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(a[m].references++,a[m].updater(A)):a.push({identifier:u,updater:f(A,n),references:1}),e.push(u)}return e}function s(o){var n=document.createElement("style"),e=o.attributes||{};if(void 0===e.nonce){var a=r.nc;a&&(e.nonce=a)}if(Object.keys(e).forEach((function(o){n.setAttribute(o,e[o])})),"function"==typeof o.insert)o.insert(n);else{var c=t(o.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var i,u=(i=[],function(o,n){return i[o]=n,i.filter(Boolean).join("\n")});function m(o,n,r,e){var t=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(o.styleSheet)o.styleSheet.cssText=u(n,t);else{var a=document.createTextNode(t),c=o.childNodes;c[n]&&o.removeChild(c[n]),c.length?o.insertBefore(a,c[n]):o.appendChild(a)}}function A(o,n,r){var e=r.css,t=r.media,a=r.sourceMap;if(t?o.setAttribute("media",t):o.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}var l=null,p=0;function f(o,n){var r,e,t;if(n.singleton){var a=p++;r=l||(l=s(n)),e=m.bind(null,r,a,!1),t=m.bind(null,r,a,!0)}else r=s(n),e=A.bind(null,r,n),t=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(r)};return e(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;e(o=n)}else t()}}o.exports=function(o,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var r=d(o=o||[],n);return function(o){if(o=o||[],"[object Array]"===Object.prototype.toString.call(o)){for(var e=0;e<r.length;e++){var t=c(r[e]);a[t].references--}for(var s=d(o,n),i=0;i<r.length;i++){var u=c(r[i]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=s}}}}}]);
//# sourceMappingURL=37.914c5b659cba05e25dc5.js.map