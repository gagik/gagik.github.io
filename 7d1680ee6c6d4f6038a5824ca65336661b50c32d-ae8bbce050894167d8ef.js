(self.webpackChunkgagik_co=self.webpackChunkgagik_co||[]).push([[372],{4129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r,o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var c=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));u(c);c.BLOCKS;var E=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));u(E);E.INLINES;var d=s((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));u(d);var f=s((function(e,t){var n,r=l&&l.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},a=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var i=a(d);t.TOP_LEVEL_BLOCKS=[c.BLOCKS.PARAGRAPH,c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6,c.BLOCKS.OL_LIST,c.BLOCKS.UL_LIST,c.BLOCKS.HR,c.BLOCKS.QUOTE,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,c.BLOCKS.EMBEDDED_RESOURCE,c.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[c.BLOCKS.PARAGRAPH,c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6,c.BLOCKS.OL_LIST,c.BLOCKS.UL_LIST,c.BLOCKS.HR,c.BLOCKS.QUOTE,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,c.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[c.BLOCKS.TABLE,c.BLOCKS.TABLE_ROW,c.BLOCKS.TABLE_CELL,c.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[c.BLOCKS.HR,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,c.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[c.BLOCKS.OL_LIST]=[c.BLOCKS.LIST_ITEM],n[c.BLOCKS.UL_LIST]=[c.BLOCKS.LIST_ITEM],n[c.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[c.BLOCKS.QUOTE]=[c.BLOCKS.PARAGRAPH],n[c.BLOCKS.TABLE]=[c.BLOCKS.TABLE_ROW],n[c.BLOCKS.TABLE_ROW]=[c.BLOCKS.TABLE_CELL,c.BLOCKS.TABLE_HEADER_CELL],n[c.BLOCKS.TABLE_CELL]=[c.BLOCKS.PARAGRAPH],n[c.BLOCKS.TABLE_HEADER_CELL]=[c.BLOCKS.PARAGRAPH],n),t.HEADINGS=[c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([c.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[c.BLOCKS.DOCUMENT,c.BLOCKS.PARAGRAPH,c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6,c.BLOCKS.OL_LIST,c.BLOCKS.UL_LIST,c.BLOCKS.LIST_ITEM,c.BLOCKS.HR,c.BLOCKS.QUOTE,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[i.default.BOLD,i.default.CODE,i.default.ITALIC,i.default.UNDERLINE]}));u(f);f.V1_MARKS,f.V1_NODE_TYPES,f.TEXT_CONTAINERS,f.HEADINGS,f.CONTAINERS,f.VOID_BLOCKS,f.TABLE_BLOCKS,f.LIST_ITEM_BLOCKS,f.TOP_LEVEL_BLOCKS;var L=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(L);var S=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(S);var p=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:c.BLOCKS.DOCUMENT,data:{},content:[{nodeType:c.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));u(p);var O=s((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(E.INLINES,e.nodeType)},t.isBlock=function(e){return n(c.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));u(O);O.isText,O.isBlock,O.isInline;var _=s((function(e,t){var n=l&&l.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=l&&l.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},i=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},o=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return c.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return o(d).default}}),a(f,t),a(L,t),a(S,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return o(p).default}});var u=i(O);t.helpers=u}));u(_);var y,C,B=_.helpers,I=(_.EMPTY_DOCUMENT,_.MARKS),T=_.INLINES,g=_.BLOCKS;function m(e,t){return e.map((function(e,n){return r=A(e,t),i=n,a.isValidElement(r)&&null===r.key?a.cloneElement(r,{key:i}):r;var r,i}))}function A(e,t){var n=t.renderNode,r=t.renderMark,a=t.renderText,o=t.preserveWhitespace;if(B.isText(e)){var l=a?a(e.value):e.value;if(o){var u=(l=l.replace(/ {2,}/g,(function(e){return"&nbsp;".repeat(e.length)}))).split("\n"),s=[];u.forEach((function(e,t){s.push(e),t!==u.length-1&&s.push(i.createElement("br",null))})),l=s}return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),l)}var c=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,c):i.createElement(i.Fragment,null,c)}var D=((y={})[g.DOCUMENT]=function(e,t){return t},y[g.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},y[g.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},y[g.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},y[g.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},y[g.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},y[g.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},y[g.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},y[g.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},y[g.EMBEDDED_RESOURCE]=function(e,t){return i.createElement("div",null,t)},y[g.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},y[g.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},y[g.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},y[g.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},y[g.HR]=function(){return i.createElement("hr",null)},y[g.TABLE]=function(e,t){return i.createElement("table",null,i.createElement("tbody",null,t))},y[g.TABLE_ROW]=function(e,t){return i.createElement("tr",null,t)},y[g.TABLE_HEADER_CELL]=function(e,t){return i.createElement("th",null,t)},y[g.TABLE_CELL]=function(e,t){return i.createElement("td",null,t)},y[T.ASSET_HYPERLINK]=function(e){return h(T.ASSET_HYPERLINK,e)},y[T.ENTRY_HYPERLINK]=function(e){return h(T.ENTRY_HYPERLINK,e)},y[T.RESOURCE_HYPERLINK]=function(e){return K(T.RESOURCE_HYPERLINK,e)},y[T.EMBEDDED_ENTRY]=function(e){return h(T.EMBEDDED_ENTRY,e)},y[T.EMBEDDED_RESOURCE]=function(e,t){return K(T.EMBEDDED_RESOURCE,e)},y[T.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},y),N=((C={})[I.BOLD]=function(e){return i.createElement("b",null,e)},C[I.ITALIC]=function(e){return i.createElement("i",null,e)},C[I.UNDERLINE]=function(e){return i.createElement("u",null,e)},C[I.CODE]=function(e){return i.createElement("code",null,e)},C[I.SUPERSCRIPT]=function(e){return i.createElement("sup",null,e)},C[I.SUBSCRIPT]=function(e){return i.createElement("sub",null,e)},C);function h(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}function K(e,t){return i.createElement("span",{key:t.data.target.sys.urn},"type: ",t.nodeType," urn: ",t.data.target.sys.urn)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?A(e,{renderNode:o(o({},D),t.renderNode),renderMark:o(o({},N),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},549:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(549),a={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=a},6061:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(549),a=n(7845);function i(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return i(a.INLINES,e.nodeType)},t.isBlock=function(e){return i(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var u=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}});var s=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return s.INLINES}});var c=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(c).default}}),i(n(7951),t),i(n(167),t),i(n(1911),t);var E=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(E).default}});var d=o(n(6061));t.helpers=d},7845:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},1911:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){"use strict";var r,a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=n(549),l=n(7845),u=i(n(1376));t.TOP_LEVEL_BLOCKS=[o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.EMBEDDED_RESOURCE,o.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[o.BLOCKS.TABLE,o.BLOCKS.TABLE_ROW,o.BLOCKS.TABLE_CELL,o.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[o.BLOCKS.HR,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((r={})[o.BLOCKS.OL_LIST]=[o.BLOCKS.LIST_ITEM],r[o.BLOCKS.UL_LIST]=[o.BLOCKS.LIST_ITEM],r[o.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[o.BLOCKS.QUOTE]=[o.BLOCKS.PARAGRAPH],r[o.BLOCKS.TABLE]=[o.BLOCKS.TABLE_ROW],r[o.BLOCKS.TABLE_ROW]=[o.BLOCKS.TABLE_CELL,o.BLOCKS.TABLE_HEADER_CELL],r[o.BLOCKS.TABLE_CELL]=[o.BLOCKS.PARAGRAPH],r[o.BLOCKS.TABLE_HEADER_CELL]=[o.BLOCKS.PARAGRAPH],r),t.HEADINGS=[o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=a([o.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[o.BLOCKS.DOCUMENT,o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.LIST_ITEM,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,l.INLINES.HYPERLINK,l.INLINES.ENTRY_HYPERLINK,l.INLINES.ASSET_HYPERLINK,l.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[u.default.BOLD,u.default.CODE,u.default.ITALIC,u.default.UNDERLINE]},167:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},3903:function(e,t,n){"use strict";n.r(t);var r=n(3346),a=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u={},s=function(e,t){var n=t.entryId,r=t.linkType,a=t.spaceId,i=t.environmentId;return a&&i?e.get(a+"!"+i+"!"+r+"!"+n):e.get(r+"!"+n)},c=function(e,t){var n=t.sys,r=n.type,a=n.linkType;if("ResourceLink"===r){var i=function(e){var t=/.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;if(t.test(e)){var n=e.match(t),r=o(n,4),a=(r[0],r[1]),i=r[2];return{spaceId:a,environmentId:void 0===i?"master":i,entryId:r[3]}}}(t.sys.urn),l=i.spaceId,c=i.environmentId,E=i.entryId,d=a.split(":")[1];return s(e,{linkType:d,entryId:E,spaceId:l,environmentId:c})||u}var f=t.sys.id;return s(e,{linkType:a,entryId:f})||u},E=function e(t,n,r,a){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":i(t))){for(var o in t)t.hasOwnProperty(o)&&(t[o]=e(t[o],n,r,a));a&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==u}));for(var t in e)e[t]===u&&delete e[t];return e}(t))}return t};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=a()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(l(t),l(e.includes[n]))}),[]),i=[].concat(l(n.items),l(r)).filter((function(e){return Boolean(e.sys)})),o=new Map(i.reduce((function(e,t){var n,r=(n=t.sys,n.space&&n.environment?[n.type+"!"+n.id,n.space.sys.id+"!"+n.environment.sys.id+"!"+n.type+"!"+n.id]:[n.type+"!"+n.id]).map((function(e){return[e,t]}));return e.push.apply(e,l(r)),e}),[]));return i.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,E(n,(function(e){return(t=e)&&t.sys&&"Link"===t.sys.type||function(e){return e&&e.sys&&"ResourceLink"===e.sys.type}(e);var t}),(function(e){return function(e,t,n){var r=c(e,t);return r===u?n?r:t:r}(o,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},3346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,u=Object.prototype,s=u.hasOwnProperty,c=u.propertyIsEnumerable,E="function"==typeof o,d="function"==typeof WeakMap,f=function(){if(d)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),L=function(n,r){var a=n.__proto__||l(n);if(!a)return t(null);var i=a.constructor;if(i===r.Object)return a===r.Object.prototype?{}:t(a);if(~e.call(i).indexOf("[native code]"))try{return new i}catch(u){}return t(a)},S=function(e,t,n,r){var a=L(e,t);for(var i in r.set(e,a),e)s.call(e,i)&&(a[i]=n(e[i],r));if(E)for(var l=o(e),u=0,d=l.length,f=void 0;u<d;++u)f=l[u],c.call(e,f)&&(a[f]=n(e[f],r));return a},p=function(e,t,n,l){var u=L(e,t);l.set(e,u);for(var s=E?i(e).concat(o(e)):i(e),c=0,d=s.length,f=void 0,S=void 0;c<d;++c)if("callee"!==(f=s[c])&&"caller"!==f)if(S=a(e,f)){S.get||S.set||(S.value=n(e[f],l));try{r(u,f,S)}catch(p){u[f]=S.value}}else u[f]=n(e[f],l);return u},O=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},_=Array.isArray,y=Object.getPrototypeOf,C=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function B(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||C,a=n?p:S,i=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var o,l=e.__proto__||y(e),u=l&&l.constructor;if(!u||u===r.Object)return a(e,r,i,t);if(_(e)){if(n)return p(e,r,i,t);o=new u,t.set(e,o);for(var s=0,c=e.length;s<c;++s)o[s]=i(e[s],t);return o}if(e instanceof r.Date)return new u(e.getTime());if(e instanceof r.RegExp)return(o=new u(e.source,e.flags||O(e))).lastIndex=e.lastIndex,o;if(r.Map&&e instanceof r.Map)return o=new u,t.set(e,o),e.forEach((function(e,n){o.set(n,i(e,t))})),o;if(r.Set&&e instanceof r.Set)return o=new u,t.set(e,o),e.forEach((function(e){o.add(i(e,t))})),o;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return o=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new u(e.length),t.set(e,o),e.copy(o),o;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return o=new u(e.buffer.slice(0)),t.set(e,o),o;if(e instanceof r.ArrayBuffer)return o=e.slice(0),t.set(e,o),o}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:a(e,r,i,t)};return i(e,f())}return B.default=B,B.strict=function(e,t){return B(e,{isStrict:!0,realm:t?t.realm:void 0})},B}()},8032:function(e,t,n){"use strict";n.d(t,{G:function(){return M},L:function(){return p},M:function(){return g},P:function(){return T},_:function(){return l},a:function(){return o},b:function(){return d},c:function(){return s},d:function(){return c},g:function(){return f},h:function(){return u}});var r=n(7294),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}const u=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const s=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},c=e=>{var t,n,r;return null==(t=s(e))||null==(n=t.images)||null==(r=n.fallback)?void 0:r.src};function E(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function f(e,t,n,r,a,i,l,u){const s={};i&&(s.backgroundColor=i,"fixed"===n?(s.width=r,s.height=a,s.backgroundColor=i,s.position="relative"):("constrained"===n||"fullWidth"===n)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),l&&(s.objectFit=l),u&&(s.objectPosition=u);const c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return c}const L=["children"],S=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,n=l(e,L);return r.createElement(r.Fragment,null,r.createElement(S,o({},n)),t,null)},O=["src","srcSet","loading","alt","shouldLoad"],_=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:i="",shouldLoad:u}=e,s=l(e,O);return r.createElement("img",o({},s,{decoding:"async",loading:a,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?n:void 0,"data-srcset":u?void 0:n,alt:i}))},C=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,i=l(e,_);const u=i.sizes||(null==t?void 0:t.sizes),s=r.createElement(y,o({},i,t,{sizes:u,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:u})})),s):s};var B;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},C.displayName="Picture",C.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const I=["fallback"],T=function(e){let{fallback:t}=e,n=l(e,I);return t?r.createElement(C,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};T.displayName="Placeholder",T.propTypes={fallback:a.string,sources:null==(B=C.propTypes)?void 0:B.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const g=function(e){return r.createElement(r.Fragment,null,r.createElement(C,o({},e)),r.createElement("noscript",null,r.createElement(C,o({},e,{shouldLoad:!0}))))};g.displayName="MainImage",g.propTypes=C.propTypes;const m=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],A=["style","className"],D=e=>e.replace(/\n/g,""),N=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},h={image:i().object.isRequired,alt:N},K=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],v=["style","className"],b=new Set;let R,P;const H=function(e){let{as:t="div",image:a,style:i,backgroundColor:s,className:c,class:d,onStartLoad:f,onLoad:L,onError:S}=e,p=l(e,K);const{width:O,height:_,layout:y}=a,C=E(O,_,y),{style:B,className:I}=C,T=l(C,v),g=(0,r.useRef)(),m=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(c=d);const A=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,O,_);return(0,r.useEffect)((()=>{R||(R=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=g.current.querySelector("[data-gatsby-image-ssr]");if(e&&u())return e.complete?(null==f||f({wasCached:!0}),null==L||L({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==L||L({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void b.add(m);if(P&&b.has(m))return;let t,r;return R.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;g.current&&(g.current.innerHTML=n(o({isLoading:!0,isLoaded:b.has(m),image:a},p)),b.has(m)||(t=requestAnimationFrame((()=>{g.current&&(r=l(g.current,m,b,i,f,L,S))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{b.has(m)&&P&&(g.current.innerHTML=P(o({isLoading:b.has(m),isLoaded:b.has(m),image:a},p)),null==f||f({wasCached:!0}),null==L||L({wasCached:!0}))}),[a]),(0,r.createElement)(t,o({},T,{style:o({},B,i,{backgroundColor:s}),className:I+(c?" "+c:""),ref:g,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(H,e):null}));M.propTypes=h,M.displayName="GatsbyImage";const w=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function G(e){return function(t){let{src:n,__imageData:a,__error:i}=t,u=l(t,w);return i&&console.warn(i),a?r.createElement(e,o({image:a},u)):(console.warn("Image not loaded",n),null)}}const k=G((function(e){let{as:t="div",className:n,class:a,style:i,image:u,loading:s="lazy",imgClassName:c,imgStyle:L,backgroundColor:S,objectFit:O,objectPosition:_}=e,y=l(e,m);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),L=o({objectFit:O,objectPosition:_,backgroundColor:S},L);const{width:C,height:B,layout:I,images:N,placeholder:h,backgroundColor:K}=u,v=E(C,B,I),{style:b,className:R}=v,P=l(v,A),H={fallback:void 0,sources:[]};return N.fallback&&(H.fallback=o({},N.fallback,{srcSet:N.fallback.srcSet?D(N.fallback.srcSet):void 0})),N.sources&&(H.sources=N.sources.map((e=>o({},e,{srcSet:D(e.srcSet)})))),r.createElement(t,o({},P,{style:o({},b,i,{backgroundColor:S}),className:R+(n?" "+n:"")}),r.createElement(p,{layout:I,width:C,height:B},r.createElement(T,o({},f(h,!1,I,C,B,K,O,_))),r.createElement(g,o({"data-gatsby-image-ssr":"",className:c},y,d("eager"===s,!1,H,s,L)))))})),j=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),x={src:i().string.isRequired,alt:N,width:j,height:j,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};k.displayName="StaticImage",k.propTypes=x;const Y=G(M);Y.displayName="StaticImage",Y.propTypes=x},2369:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),l=new RegExp(i.source+a.source,"gu"),u=new RegExp("\\d+"+a.source,"gu"),s=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),s=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?s(e):i(e);return e!==i(e)&&(e=((e,r,a)=>{let i=!1,o=!1,l=!1;for(let u=0;u<e.length;u++){const s=e[u];i&&t.test(s)?(e=e.slice(0,u)+"-"+e.slice(u),i=!1,l=o,o=!0,u++):o&&l&&n.test(s)?(e=e.slice(0,u-1)+"-"+e.slice(u-1),l=o,o=!1,i=!0):(i=r(s)===s&&a(s)!==s,l=o,o=a(s)===s&&r(s)!==s)}return e})(e,i,s)),e=e.replace(o,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),a.pascalCase&&(e=s(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,u.lastIndex=0,e.replace(l,((e,n)=>t(n))).replace(u,(e=>t(e)))))(e,s)};e.exports=s,e.exports.default=s},8872:function(e,t,n){"use strict";var r=n(4836);t.Z=function(e,t){let{raw:n,references:r}=e;void 0===t&&(t={});const o=JSON.parse(n||null);if(!r||!r.length)return(0,a.documentToReactComponents)(o,t);const l={items:[{sys:{type:"Entry"},richText:o}],includes:{Entry:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"!==t})).map((e=>({...e,sys:{type:"Entry",id:e.contentful_id}}))),Asset:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"===t})).map((e=>({...e,sys:{type:"Asset",id:e.contentful_id}})))}},u=(0,i.default)(l,{removeUnresolved:!0});return(0,a.documentToReactComponents)(u[0].richText,t)};var a=n(4129),i=r(n(3903))}}]);
//# sourceMappingURL=7d1680ee6c6d4f6038a5824ca65336661b50c32d-ae8bbce050894167d8ef.js.map