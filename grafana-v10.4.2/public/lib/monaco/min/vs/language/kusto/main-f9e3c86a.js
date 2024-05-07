/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-kusto version: 7.7.0(4c0354ddfc7103811088dadcb6c4ed9e00f6a34e)
 * Released under the MIT license
 * https://https://github.com/Azure/monaco-kusto/blob/master/README.md
 *-----------------------------------------------------------------------------*/define("vs/language/kusto/main-f9e3c86a",["exports"],function(s){"use strict";function T(n){return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(n)}var D,_,g,O,P,F,L,N,U,K,V,S,x,z,W,X,m,w,v,f,h,A,y,b,E,j;(function(n){n.MIN_VALUE=-2147483648,n.MAX_VALUE=2147483647})(D||(D={})),function(n){n.MIN_VALUE=0,n.MAX_VALUE=2147483647}(_||(_={})),function(n){n.create=function(t,e){return t===Number.MAX_VALUE&&(t=_.MAX_VALUE),e===Number.MAX_VALUE&&(e=_.MAX_VALUE),{line:t,character:e}},n.is=function(t){var e=t;return r.objectLiteral(e)&&r.uinteger(e.line)&&r.uinteger(e.character)}}(g||(g={})),s.Range=void 0,(O=s.Range||(s.Range={})).create=function(n,t,e,i){if(r.uinteger(n)&&r.uinteger(t)&&r.uinteger(e)&&r.uinteger(i))return{start:g.create(n,t),end:g.create(e,i)};if(g.is(n)&&g.is(t))return{start:n,end:t};throw new Error("Range#create called with invalid arguments["+n+", "+t+", "+e+", "+i+"]")},O.is=function(n){var t=n;return r.objectLiteral(t)&&g.is(t.start)&&g.is(t.end)},s.Location=void 0,(P=s.Location||(s.Location={})).create=function(n,t){return{uri:n,range:t}},P.is=function(n){var t=n;return r.defined(t)&&s.Range.is(t.range)&&(r.string(t.uri)||r.undefined(t.uri))},function(n){n.create=function(t,e,i,o){return{targetUri:t,targetRange:e,targetSelectionRange:i,originSelectionRange:o}},n.is=function(t){var e=t;return r.defined(e)&&s.Range.is(e.targetRange)&&r.string(e.targetUri)&&(s.Range.is(e.targetSelectionRange)||r.undefined(e.targetSelectionRange))&&(s.Range.is(e.originSelectionRange)||r.undefined(e.originSelectionRange))}}(F||(F={})),function(n){n.create=function(t,e,i,o){return{red:t,green:e,blue:i,alpha:o}},n.is=function(t){var e=t;return r.numberRange(e.red,0,1)&&r.numberRange(e.green,0,1)&&r.numberRange(e.blue,0,1)&&r.numberRange(e.alpha,0,1)}}(L||(L={})),function(n){n.create=function(t,e){return{range:t,color:e}},n.is=function(t){var e=t;return s.Range.is(e.range)&&L.is(e.color)}}(N||(N={})),function(n){n.create=function(t,e,i){return{label:t,textEdit:e,additionalTextEdits:i}},n.is=function(t){var e=t;return r.string(e.label)&&(r.undefined(e.textEdit)||s.TextEdit.is(e))&&(r.undefined(e.additionalTextEdits)||r.typedArray(e.additionalTextEdits,s.TextEdit.is))}}(U||(U={})),function(n){n.Comment="comment",n.Imports="imports",n.Region="region"}(K||(K={})),function(n){n.create=function(t,e,i,o,a){var c={startLine:t,endLine:e};return r.defined(i)&&(c.startCharacter=i),r.defined(o)&&(c.endCharacter=o),r.defined(a)&&(c.kind=a),c},n.is=function(t){var e=t;return r.uinteger(e.startLine)&&r.uinteger(e.startLine)&&(r.undefined(e.startCharacter)||r.uinteger(e.startCharacter))&&(r.undefined(e.endCharacter)||r.uinteger(e.endCharacter))&&(r.undefined(e.kind)||r.string(e.kind))}}(V||(V={})),function(n){n.create=function(t,e){return{location:t,message:e}},n.is=function(t){var e=t;return r.defined(e)&&s.Location.is(e.location)&&r.string(e.message)}}(S||(S={})),s.DiagnosticSeverity=void 0,(x=s.DiagnosticSeverity||(s.DiagnosticSeverity={})).Error=1,x.Warning=2,x.Information=3,x.Hint=4,function(n){n.Unnecessary=1,n.Deprecated=2}(z||(z={})),function(n){n.is=function(t){var e=t;return e!=null&&r.string(e.href)}}(W||(W={})),s.Diagnostic=void 0,(X=s.Diagnostic||(s.Diagnostic={})).create=function(n,t,e,i,o,a){var c={range:n,message:t};return r.defined(e)&&(c.severity=e),r.defined(i)&&(c.code=i),r.defined(o)&&(c.source=o),r.defined(a)&&(c.relatedInformation=a),c},X.is=function(n){var t,e=n;return r.defined(e)&&s.Range.is(e.range)&&r.string(e.message)&&(r.number(e.severity)||r.undefined(e.severity))&&(r.integer(e.code)||r.string(e.code)||r.undefined(e.code))&&(r.undefined(e.codeDescription)||r.string((t=e.codeDescription)===null||t===void 0?void 0:t.href))&&(r.string(e.source)||r.undefined(e.source))&&(r.undefined(e.relatedInformation)||r.typedArray(e.relatedInformation,S.is))},function(n){n.create=function(t,e){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a={title:t,command:e};return r.defined(i)&&i.length>0&&(a.arguments=i),a},n.is=function(t){var e=t;return r.defined(e)&&r.string(e.title)&&r.string(e.command)}}(m||(m={})),s.TextEdit=void 0,(w=s.TextEdit||(s.TextEdit={})).replace=function(n,t){return{range:n,newText:t}},w.insert=function(n,t){return{range:{start:n,end:n},newText:t}},w.del=function(n){return{range:n,newText:""}},w.is=function(n){var t=n;return r.objectLiteral(t)&&r.string(t.newText)&&s.Range.is(t.range)},function(n){n.create=function(t,e,i){var o={label:t};return e!==void 0&&(o.needsConfirmation=e),i!==void 0&&(o.description=i),o},n.is=function(t){var e=t;return e!==void 0&&r.objectLiteral(e)&&r.string(e.label)&&(r.boolean(e.needsConfirmation)||e.needsConfirmation===void 0)&&(r.string(e.description)||e.description===void 0)}}(v||(v={})),function(n){n.is=function(t){return typeof t=="string"}}(f||(f={})),function(n){n.replace=function(t,e,i){return{range:t,newText:e,annotationId:i}},n.insert=function(t,e,i){return{range:{start:t,end:t},newText:e,annotationId:i}},n.del=function(t,e){return{range:t,newText:"",annotationId:e}},n.is=function(t){var e=t;return s.TextEdit.is(e)&&(v.is(e.annotationId)||f.is(e.annotationId))}}(h||(h={})),function(n){n.create=function(t,e){return{textDocument:t,edits:e}},n.is=function(t){var e=t;return r.defined(e)&&C.is(e.textDocument)&&Array.isArray(e.edits)}}(A||(A={})),function(n){n.create=function(t,e,i){var o={kind:"create",uri:t};return e===void 0||e.overwrite===void 0&&e.ignoreIfExists===void 0||(o.options=e),i!==void 0&&(o.annotationId=i),o},n.is=function(t){var e=t;return e&&e.kind==="create"&&r.string(e.uri)&&(e.options===void 0||(e.options.overwrite===void 0||r.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||r.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||f.is(e.annotationId))}}(y||(y={})),function(n){n.create=function(t,e,i,o){var a={kind:"rename",oldUri:t,newUri:e};return i===void 0||i.overwrite===void 0&&i.ignoreIfExists===void 0||(a.options=i),o!==void 0&&(a.annotationId=o),a},n.is=function(t){var e=t;return e&&e.kind==="rename"&&r.string(e.oldUri)&&r.string(e.newUri)&&(e.options===void 0||(e.options.overwrite===void 0||r.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||r.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||f.is(e.annotationId))}}(b||(b={})),function(n){n.create=function(t,e,i){var o={kind:"delete",uri:t};return e===void 0||e.recursive===void 0&&e.ignoreIfNotExists===void 0||(o.options=e),i!==void 0&&(o.annotationId=i),o},n.is=function(t){var e=t;return e&&e.kind==="delete"&&r.string(e.uri)&&(e.options===void 0||(e.options.recursive===void 0||r.boolean(e.options.recursive))&&(e.options.ignoreIfNotExists===void 0||r.boolean(e.options.ignoreIfNotExists)))&&(e.annotationId===void 0||f.is(e.annotationId))}}(E||(E={})),function(n){n.is=function(t){var e=t;return e&&(e.changes!==void 0||e.documentChanges!==void 0)&&(e.documentChanges===void 0||e.documentChanges.every(function(i){return r.string(i.kind)?y.is(i)||b.is(i)||E.is(i):A.is(i)}))}}(j||(j={}));var q,B,C,H,Q,M,u,$,G,J,Y,k,Z,ee,te,ne,ie,re,oe,ae,se,ce,ue,de,fe,ge,le,he,I=function(){function n(t,e){this.edits=t,this.changeAnnotations=e}return n.prototype.insert=function(t,e,i){var o,a;if(i===void 0?o=s.TextEdit.insert(t,e):f.is(i)?(a=i,o=h.insert(t,e,i)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(i),o=h.insert(t,e,a)),this.edits.push(o),a!==void 0)return a},n.prototype.replace=function(t,e,i){var o,a;if(i===void 0?o=s.TextEdit.replace(t,e):f.is(i)?(a=i,o=h.replace(t,e,i)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(i),o=h.replace(t,e,a)),this.edits.push(o),a!==void 0)return a},n.prototype.delete=function(t,e){var i,o;if(e===void 0?i=s.TextEdit.del(t):f.is(e)?(o=e,i=h.del(t,e)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(e),i=h.del(t,o)),this.edits.push(i),o!==void 0)return o},n.prototype.add=function(t){this.edits.push(t)},n.prototype.all=function(){return this.edits},n.prototype.clear=function(){this.edits.splice(0,this.edits.length)},n.prototype.assertChangeAnnotations=function(t){if(t===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},n}(),ve=function(){function n(t){this._annotations=t===void 0?Object.create(null):t,this._counter=0,this._size=0}return n.prototype.all=function(){return this._annotations},Object.defineProperty(n.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),n.prototype.manage=function(t,e){var i;if(f.is(t)?i=t:(i=this.nextId(),e=t),this._annotations[i]!==void 0)throw new Error("Id "+i+" is already in use.");if(e===void 0)throw new Error("No annotation provided for id "+i);return this._annotations[i]=e,this._size++,i},n.prototype.nextId=function(){return this._counter++,this._counter.toString()},n}();(function(){function n(t){var e=this;this._textEditChanges=Object.create(null),t!==void 0?(this._workspaceEdit=t,t.documentChanges?(this._changeAnnotations=new ve(t.changeAnnotations),t.changeAnnotations=this._changeAnnotations.all(),t.documentChanges.forEach(function(i){if(A.is(i)){var o=new I(i.edits,e._changeAnnotations);e._textEditChanges[i.textDocument.uri]=o}})):t.changes&&Object.keys(t.changes).forEach(function(i){var o=new I(t.changes[i]);e._textEditChanges[i]=o})):this._workspaceEdit={}}Object.defineProperty(n.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),n.prototype.getTextEditChange=function(t){if(C.is(t)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e={uri:t.uri,version:t.version};if(!(o=this._textEditChanges[e.uri])){var i={textDocument:e,edits:a=[]};this._workspaceEdit.documentChanges.push(i),o=new I(a,this._changeAnnotations),this._textEditChanges[e.uri]=o}return o}if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var o;if(!(o=this._textEditChanges[t])){var a=[];this._workspaceEdit.changes[t]=a,o=new I(a),this._textEditChanges[t]=o}return o},n.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ve,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},n.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},n.prototype.createFile=function(t,e,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o,a,c;if(v.is(e)||f.is(e)?o=e:i=e,o===void 0?a=y.create(t,i):(c=f.is(o)?o:this._changeAnnotations.manage(o),a=y.create(t,i,c)),this._workspaceEdit.documentChanges.push(a),c!==void 0)return c},n.prototype.renameFile=function(t,e,i,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a,c,d;if(v.is(i)||f.is(i)?a=i:o=i,a===void 0?c=b.create(t,e,o):(d=f.is(a)?a:this._changeAnnotations.manage(a),c=b.create(t,e,o,d)),this._workspaceEdit.documentChanges.push(c),d!==void 0)return d},n.prototype.deleteFile=function(t,e,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o,a,c;if(v.is(e)||f.is(e)?o=e:i=e,o===void 0?a=E.create(t,i):(c=f.is(o)?o:this._changeAnnotations.manage(o),a=E.create(t,i,c)),this._workspaceEdit.documentChanges.push(a),c!==void 0)return c}})(),function(n){n.create=function(t){return{uri:t}},n.is=function(t){var e=t;return r.defined(e)&&r.string(e.uri)}}(q||(q={})),function(n){n.create=function(t,e){return{uri:t,version:e}},n.is=function(t){var e=t;return r.defined(e)&&r.string(e.uri)&&r.integer(e.version)}}(B||(B={})),function(n){n.create=function(t,e){return{uri:t,version:e}},n.is=function(t){var e=t;return r.defined(e)&&r.string(e.uri)&&(e.version===null||r.integer(e.version))}}(C||(C={})),function(n){n.create=function(t,e,i,o){return{uri:t,languageId:e,version:i,text:o}},n.is=function(t){var e=t;return r.defined(e)&&r.string(e.uri)&&r.string(e.languageId)&&r.integer(e.version)&&r.string(e.text)}}(H||(H={})),s.MarkupKind=void 0,(Q=s.MarkupKind||(s.MarkupKind={})).PlainText="plaintext",Q.Markdown="markdown",function(n){n.is=function(t){var e=t;return e===n.PlainText||e===n.Markdown}}(s.MarkupKind||(s.MarkupKind={})),function(n){n.is=function(t){var e=t;return r.objectLiteral(t)&&s.MarkupKind.is(e.kind)&&r.string(e.value)}}(M||(M={})),s.CompletionItemKind=void 0,(u=s.CompletionItemKind||(s.CompletionItemKind={})).Text=1,u.Method=2,u.Function=3,u.Constructor=4,u.Field=5,u.Variable=6,u.Class=7,u.Interface=8,u.Module=9,u.Property=10,u.Unit=11,u.Value=12,u.Enum=13,u.Keyword=14,u.Snippet=15,u.Color=16,u.File=17,u.Reference=18,u.Folder=19,u.EnumMember=20,u.Constant=21,u.Struct=22,u.Event=23,u.Operator=24,u.TypeParameter=25,s.InsertTextFormat=void 0,($=s.InsertTextFormat||(s.InsertTextFormat={})).PlainText=1,$.Snippet=2,function(n){n.Deprecated=1}(G||(G={})),function(n){n.create=function(t,e,i){return{newText:t,insert:e,replace:i}},n.is=function(t){var e=t;return e&&r.string(e.newText)&&s.Range.is(e.insert)&&s.Range.is(e.replace)}}(J||(J={})),function(n){n.asIs=1,n.adjustIndentation=2}(Y||(Y={})),s.CompletionItem=void 0,(s.CompletionItem||(s.CompletionItem={})).create=function(n){return{label:n}},s.CompletionList=void 0,(s.CompletionList||(s.CompletionList={})).create=function(n,t){return{items:n||[],isIncomplete:!!t}},function(n){n.fromPlainText=function(t){return t.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},n.is=function(t){var e=t;return r.string(e)||r.objectLiteral(e)&&r.string(e.language)&&r.string(e.value)}}(k||(k={})),function(n){n.is=function(t){var e=t;return!!e&&r.objectLiteral(e)&&(M.is(e.contents)||k.is(e.contents)||r.typedArray(e.contents,k.is))&&(t.range===void 0||s.Range.is(t.range))}}(Z||(Z={})),function(n){n.create=function(t,e){return e?{label:t,documentation:e}:{label:t}}}(ee||(ee={})),function(n){n.create=function(t,e){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a={label:t};return r.defined(e)&&(a.documentation=e),r.defined(i)?a.parameters=i:a.parameters=[],a}}(te||(te={})),function(n){n.Text=1,n.Read=2,n.Write=3}(ne||(ne={})),function(n){n.create=function(t,e){var i={range:t};return r.number(e)&&(i.kind=e),i}}(ie||(ie={})),function(n){n.File=1,n.Module=2,n.Namespace=3,n.Package=4,n.Class=5,n.Method=6,n.Property=7,n.Field=8,n.Constructor=9,n.Enum=10,n.Interface=11,n.Function=12,n.Variable=13,n.Constant=14,n.String=15,n.Number=16,n.Boolean=17,n.Array=18,n.Object=19,n.Key=20,n.Null=21,n.EnumMember=22,n.Struct=23,n.Event=24,n.Operator=25,n.TypeParameter=26}(re||(re={})),function(n){n.Deprecated=1}(oe||(oe={})),function(n){n.create=function(t,e,i,o,a){var c={name:t,kind:e,location:{uri:o,range:i}};return a&&(c.containerName=a),c}}(ae||(ae={})),function(n){n.create=function(t,e,i,o,a,c){var d={name:t,detail:e,kind:i,range:o,selectionRange:a};return c!==void 0&&(d.children=c),d},n.is=function(t){var e=t;return e&&r.string(e.name)&&r.number(e.kind)&&s.Range.is(e.range)&&s.Range.is(e.selectionRange)&&(e.detail===void 0||r.string(e.detail))&&(e.deprecated===void 0||r.boolean(e.deprecated))&&(e.children===void 0||Array.isArray(e.children))&&(e.tags===void 0||Array.isArray(e.tags))}}(se||(se={})),function(n){n.Empty="",n.QuickFix="quickfix",n.Refactor="refactor",n.RefactorExtract="refactor.extract",n.RefactorInline="refactor.inline",n.RefactorRewrite="refactor.rewrite",n.Source="source",n.SourceOrganizeImports="source.organizeImports",n.SourceFixAll="source.fixAll"}(ce||(ce={})),function(n){n.create=function(t,e){var i={diagnostics:t};return e!=null&&(i.only=e),i},n.is=function(t){var e=t;return r.defined(e)&&r.typedArray(e.diagnostics,s.Diagnostic.is)&&(e.only===void 0||r.typedArray(e.only,r.string))}}(ue||(ue={})),function(n){n.create=function(t,e,i){var o={title:t},a=!0;return typeof e=="string"?(a=!1,o.kind=e):m.is(e)?o.command=e:o.edit=e,a&&i!==void 0&&(o.kind=i),o},n.is=function(t){var e=t;return e&&r.string(e.title)&&(e.diagnostics===void 0||r.typedArray(e.diagnostics,s.Diagnostic.is))&&(e.kind===void 0||r.string(e.kind))&&(e.edit!==void 0||e.command!==void 0)&&(e.command===void 0||m.is(e.command))&&(e.isPreferred===void 0||r.boolean(e.isPreferred))&&(e.edit===void 0||j.is(e.edit))}}(de||(de={})),function(n){n.create=function(t,e){var i={range:t};return r.defined(e)&&(i.data=e),i},n.is=function(t){var e=t;return r.defined(e)&&s.Range.is(e.range)&&(r.undefined(e.command)||m.is(e.command))}}(fe||(fe={})),function(n){n.create=function(t,e){return{tabSize:t,insertSpaces:e}},n.is=function(t){var e=t;return r.defined(e)&&r.uinteger(e.tabSize)&&r.boolean(e.insertSpaces)}}(ge||(ge={})),function(n){n.create=function(t,e,i){return{range:t,target:e,data:i}},n.is=function(t){var e=t;return r.defined(e)&&s.Range.is(e.range)&&(r.undefined(e.target)||r.string(e.target))}}(le||(le={})),function(n){n.create=function(t,e){return{range:t,parent:e}},n.is=function(t){var e=t;return e!==void 0&&s.Range.is(e.range)&&(e.parent===void 0||n.is(e.parent))}}(he||(he={})),s.TextDocument=void 0,function(n){function t(e,i){if(e.length<=1)return e;var o=e.length/2|0,a=e.slice(0,o),c=e.slice(o);t(a,i),t(c,i);for(var d=0,l=0,p=0;d<a.length&&l<c.length;){var R=i(a[d],c[l]);e[p++]=R<=0?a[d++]:c[l++]}for(;d<a.length;)e[p++]=a[d++];for(;l<c.length;)e[p++]=c[l++];return e}n.create=function(e,i,o,a){return new be(e,i,o,a)},n.is=function(e){var i=e;return!!(r.defined(i)&&r.string(i.uri)&&(r.undefined(i.languageId)||r.string(i.languageId))&&r.uinteger(i.lineCount)&&r.func(i.getText)&&r.func(i.positionAt)&&r.func(i.offsetAt))},n.applyEdits=function(e,i){for(var o=e.getText(),a=t(i,function(pe,me){var ye=pe.range.start.line-me.range.start.line;return ye===0?pe.range.start.character-me.range.start.character:ye}),c=o.length,d=a.length-1;d>=0;d--){var l=a[d],p=e.offsetAt(l.range.start),R=e.offsetAt(l.range.end);if(!(R<=c))throw new Error("Overlapping edit");o=o.substring(0,p)+l.newText+o.substring(R,o.length),c=p}return o}}(s.TextDocument||(s.TextDocument={}));var r,be=function(){function n(t,e,i,o){this._uri=t,this._languageId=e,this._version=i,this._content=o,this._lineOffsets=void 0}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),n.prototype.getText=function(t){if(t){var e=this.offsetAt(t.start),i=this.offsetAt(t.end);return this._content.substring(e,i)}return this._content},n.prototype.update=function(t,e){this._content=t.text,this._version=e,this._lineOffsets=void 0},n.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var t=[],e=this._content,i=!0,o=0;o<e.length;o++){i&&(t.push(o),i=!1);var a=e.charAt(o);i=a==="\r"||a===`
`,a==="\r"&&o+1<e.length&&e.charAt(o+1)===`
`&&o++}i&&e.length>0&&t.push(e.length),this._lineOffsets=t}return this._lineOffsets},n.prototype.positionAt=function(t){t=Math.max(Math.min(t,this._content.length),0);var e=this.getLineOffsets(),i=0,o=e.length;if(o===0)return g.create(0,t);for(;i<o;){var a=Math.floor((i+o)/2);e[a]>t?o=a:i=a+1}var c=i-1;return g.create(c,t-e[c])},n.prototype.offsetAt=function(t){var e=this.getLineOffsets();if(t.line>=e.length)return this._content.length;if(t.line<0)return 0;var i=e[t.line],o=t.line+1<e.length?e[t.line+1]:this._content.length;return Math.max(Math.min(i+t.character,o),i)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),n}();(function(n){var t=Object.prototype.toString;n.defined=function(e){return e!==void 0},n.undefined=function(e){return e===void 0},n.boolean=function(e){return e===!0||e===!1},n.string=function(e){return t.call(e)==="[object String]"},n.number=function(e){return t.call(e)==="[object Number]"},n.numberRange=function(e,i,o){return t.call(e)==="[object Number]"&&i<=e&&e<=o},n.integer=function(e){return t.call(e)==="[object Number]"&&-2147483648<=e&&e<=2147483647},n.uinteger=function(e){return t.call(e)==="[object Number]"&&0<=e&&e<=2147483647},n.func=function(e){return t.call(e)==="[object Function]"},n.objectLiteral=function(e){return e!==null&&T(e)==="object"},n.typedArray=function(e,i){return Array.isArray(e)&&e.every(i)}})(r||(r={}))});

//# sourceMappingURL=main-f9e3c86a.js.map