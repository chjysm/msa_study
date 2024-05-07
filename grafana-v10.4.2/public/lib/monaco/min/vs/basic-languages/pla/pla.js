"use strict";/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
* Released under the MIT license
* https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
*-----------------------------------------------------------------------------*/define("vs/basic-languages/pla/pla",["require","require"],y=>{var i=(()=>{var r=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,d=(t,e)=>{for(var n in e)r(t,n,{get:e[n],enumerable:!0})},u=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of l(e))!c.call(t,o)&&o!==n&&r(t,o,{get:()=>e[o],enumerable:!(a=p(e,o))||a.enumerable});return t},k=t=>u(r({},"__esModule",{value:!0}),t),s={};d(s,{conf:()=>m,language:()=>f});var m={comments:{lineComment:"#"},brackets:[["[","]"],["<",">"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"<",close:">"},{open:"(",close:")"}],surroundingPairs:[{open:"[",close:"]"},{open:"<",close:">"},{open:"(",close:")"}]},f={defaultToken:"",tokenPostfix:".pla",brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"<",close:">",token:"delimiter.angle"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:[".i",".o",".mv",".ilb",".ob",".label",".type",".phase",".pair",".symbolic",".symbolic-output",".kiss",".p",".e",".end"],comment:/#.*$/,identifier:/[a-zA-Z]+[a-zA-Z0-9_\-]*/,plaContent:/[01\-~\|]+/,tokenizer:{root:[{include:"@whitespace"},[/@comment/,"comment"],[/\.([a-zA-Z_\-]+)/,{cases:{"@eos":{token:"keyword.$1"},"@keywords":{cases:{".type":{token:"keyword.$1",next:"@type"},"@default":{token:"keyword.$1",next:"@keywordArg"}}},"@default":{token:"keyword.$1"}}}],[/@identifier/,"identifier"],[/@plaContent/,"string"]],whitespace:[[/[ \t\r\n]+/,""]],type:[{include:"@whitespace"},[/\w+/,{token:"type",next:"@pop"}]],keywordArg:[[/[ \t\r\n]+/,{cases:{"@eos":{token:"",next:"@pop"},"@default":""}}],[/@comment/,"comment","@pop"],[/[<>()\[\]]/,{cases:{"@eos":{token:"@brackets",next:"@pop"},"@default":"@brackets"}}],[/\-?\d+/,{cases:{"@eos":{token:"number",next:"@pop"},"@default":"number"}}],[/@identifier/,{cases:{"@eos":{token:"identifier",next:"@pop"},"@default":"identifier"}}],[/[;=]/,{cases:{"@eos":{token:"delimiter",next:"@pop"},"@default":"delimiter"}}]]}};return k(s)})();return i});

//# sourceMappingURL=pla.js.map