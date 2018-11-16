/*! RESOURCE: /scripts/js_includes_knowledge.js */
/*! RESOURCE: /scripts/lib/jquery_includes.js */
/*! RESOURCE: /scripts/lib/jquery/jquery_clean.js */
(function() {
if (!window.jQuery)
return;
if (!window.$j_glide)
window.$j = jQuery.noConflict();
if (window.$j_glide && jQuery != window.$j_glide) {
if (window.$j_glide)
jQuery.noConflict(true);
window.$j = window.$j_glide;
}
})();
;
/*! RESOURCE: /scripts/lib/jquery/jquery-1.12.3.min.js */
/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;
})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*! RESOURCE: /scripts/lib/jquery/jquery_no_conflict.js */
(function() {
if (window.$j_glide) {
jQuery.noConflict(true);
window.jQuery = $j_glide;
}
window.$j = window.$j_glide = jQuery.noConflict();
})();
;
;
/*! RESOURCE: /scripts/heisenberg/heisenberg_all.js */
/*! RESOURCE: /scripts/heisenberg/bootstrap/affix.js */
+function ($) {
'use strict';
var Affix = function (element, options) {
this.options = $.extend({}, Affix.DEFAULTS, options)
this.$target = $(this.options.target)
.on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
.on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
this.$element     = $(element)
this.affixed      =
this.unpin        =
this.pinnedOffset = null
this.checkPosition()
}
Affix.VERSION  = '3.2.0'
Affix.RESET    = 'affix affix-top affix-bottom'
Affix.DEFAULTS = {
offset: 0,
target: window
}
Affix.prototype.getPinnedOffset = function () {
if (this.pinnedOffset) return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop = this.$target.scrollTop()
var position  = this.$element.offset()
return (this.pinnedOffset = position.top - scrollTop)
}
Affix.prototype.checkPositionWithEventLoop = function () {
setTimeout($.proxy(this.checkPosition, this), 1)
}
Affix.prototype.checkPosition = function () {
if (!this.$element.is(':visible')) return
var scrollHeight = $(document).height()
var scrollTop    = this.$target.scrollTop()
var position     = this.$element.offset()
var offset       = this.options.offset
var offsetTop    = offset.top
var offsetBottom = offset.bottom
if (typeof offset != 'object')         offsetBottom = offsetTop = offset
if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false
if (this.affixed === affix) return
if (this.unpin != null) this.$element.css('top', '')
var affixType = 'affix' + (affix ? '-' + affix : '')
var e         = $.Event(affixType + '.bs.affix')
this.$element.trigger(e)
if (e.isDefaultPrevented()) return
this.affixed = affix
this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
this.$element
.removeClass(Affix.RESET)
.addClass(affixType)
.trigger($.Event(affixType.replace('affix', 'affixed')))
if (affix == 'bottom') {
this.$element.offset({
top: scrollHeight - this.$element.height() - offsetBottom
})
}
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.affix')
var options = typeof option == 'object' && option
if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
if (typeof option == 'string') data[option]()
})
}
var old = $.fn.affix
$.fn.affix             = Plugin
$.fn.affix.Constructor = Affix
$.fn.affix.noConflict = function () {
$.fn.affix = old
return this
}
$(window).on('load', function () {
$('[data-spy="affix"]').each(function () {
var $spy = $(this)
var data = $spy.data()
data.offset = data.offset || {}
if (data.offsetBottom) data.offset.bottom = data.offsetBottom
if (data.offsetTop)    data.offset.top    = data.offsetTop
Plugin.call($spy, data)
})
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/alert.js */
+function ($) {
'use strict';
var dismiss = '[data-dismiss="alert"]'
var Alert   = function (el) {
$(el).on('click', dismiss, this.close)
}
Alert.VERSION = '3.2.0'
Alert.prototype.close = function (e) {
var $this    = $(this)
var selector = $this.attr('data-target')
if (!selector) {
selector = $this.attr('href')
selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
}
var $parent = $(selector)
if (e) e.preventDefault()
if (!$parent.length) {
$parent = $this.hasClass('alert') ? $this : $this.parent()
}
$parent.trigger(e = $.Event('close.bs.alert'))
if (e.isDefaultPrevented()) return
$parent.removeClass('in')
function removeElement() {
$parent.detach().trigger('closed.bs.alert').remove()
}
$.support.transition && $parent.hasClass('fade') ?
$parent
.one('bsTransitionEnd', removeElement)
.emulateTransitionEnd(150) :
removeElement()
}
function Plugin(option) {
return this.each(function () {
var $this = $(this)
var data  = $this.data('bs.alert')
if (!data) $this.data('bs.alert', (data = new Alert(this)))
if (typeof option == 'string') data[option].call($this)
})
}
var old = $.fn.alert
$.fn.alert             = Plugin
$.fn.alert.Constructor = Alert
$.fn.alert.noConflict = function () {
$.fn.alert = old
return this
}
$(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/button.js */
+function ($) {
'use strict';
var Button = function (element, options) {
this.$element  = $(element)
this.options   = $.extend({}, Button.DEFAULTS, options)
this.isLoading = false
}
Button.VERSION  = '3.2.0'
Button.DEFAULTS = {
loadingText: 'loading...'
}
Button.prototype.setState = function (state) {
var d    = 'disabled'
var $el  = this.$element
var val  = $el.is('input') ? 'val' : 'html'
var data = $el.data()
state = state + 'Text'
if (data.resetText == null) $el.data('resetText', $el[val]())
$el[val](data[state] == null ? this.options[state] : data[state])
setTimeout($.proxy(function () {
if (state == 'loadingText') {
this.isLoading = true
$el.addClass(d).attr(d, d)
} else if (this.isLoading) {
this.isLoading = false
$el.removeClass(d).removeAttr(d)
}
}, this), 0)
}
Button.prototype.toggle = function () {
var changed = true
var $parent = this.$element.closest('[data-toggle="buttons"]')
if ($parent.length) {
var $input = this.$element.find('input')
if ($input.prop('type') == 'radio') {
if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
else $parent.find('.active').removeClass('active')
}
if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
}
if (changed) this.$element.toggleClass('active')
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.button')
var options = typeof option == 'object' && option
if (!data) $this.data('bs.button', (data = new Button(this, options)))
if (option == 'toggle') data.toggle()
else if (option) data.setState(option)
})
}
var old = $.fn.button
$.fn.button             = Plugin
$.fn.button.Constructor = Button
$.fn.button.noConflict = function () {
$.fn.button = old
return this
}
$(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
var $btn = $(e.target)
if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
Plugin.call($btn, 'toggle')
e.preventDefault()
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/carousel.js */
+function ($) {
'use strict';
var Carousel = function (element, options) {
this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
this.$indicators = this.$element.find('.carousel-indicators')
this.options     = options
this.paused      =
this.sliding     =
this.interval    =
this.$active     =
this.$items      = null
this.options.pause == 'hover' && this.$element
.on('mouseenter.bs.carousel', $.proxy(this.pause, this))
.on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
}
Carousel.VERSION  = '3.2.0'
Carousel.DEFAULTS = {
interval: 5000,
pause: 'hover',
wrap: true
}
Carousel.prototype.keydown = function (e) {
switch (e.which) {
case 37: this.prev(); break
case 39: this.next(); break
default: return
}
e.preventDefault()
}
Carousel.prototype.cycle = function (e) {
e || (this.paused = false)
this.interval && clearInterval(this.interval)
this.options.interval
&& !this.paused
&& (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
return this
}
Carousel.prototype.getItemIndex = function (item) {
this.$items = item.parent().children('.item')
return this.$items.index(item || this.$active)
}
Carousel.prototype.to = function (pos) {
var that        = this
var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))
if (pos > (this.$items.length - 1) || pos < 0) return
if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
if (activeIndex == pos) return this.pause().cycle()
return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
}
Carousel.prototype.pause = function (e) {
e || (this.paused = true)
if (this.$element.find('.next, .prev').length && $.support.transition) {
this.$element.trigger($.support.transition.end)
this.cycle(true)
}
this.interval = clearInterval(this.interval)
return this
}
Carousel.prototype.next = function () {
if (this.sliding) return
return this.slide('next')
}
Carousel.prototype.prev = function () {
if (this.sliding) return
return this.slide('prev')
}
Carousel.prototype.slide = function (type, next) {
var $active   = this.$element.find('.item.active')
var $next     = next || $active[type]()
var isCycling = this.interval
var direction = type == 'next' ? 'left' : 'right'
var fallback  = type == 'next' ? 'first' : 'last'
var that      = this
if (!$next.length) {
if (!this.options.wrap) return
$next = this.$element.find('.item')[fallback]()
}
if ($next.hasClass('active')) return (this.sliding = false)
var relatedTarget = $next[0]
var slideEvent = $.Event('slide.bs.carousel', {
relatedTarget: relatedTarget,
direction: direction
})
this.$element.trigger(slideEvent)
if (slideEvent.isDefaultPrevented()) return
this.sliding = true
isCycling && this.pause()
if (this.$indicators.length) {
this.$indicators.find('.active').removeClass('active')
var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator && $nextIndicator.addClass('active')
}
var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction })
if ($.support.transition && this.$element.hasClass('slide')) {
$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active
.one('bsTransitionEnd', function () {
$next.removeClass([type, direction].join(' ')).addClass('active')
$active.removeClass(['active', direction].join(' '))
that.sliding = false
setTimeout(function () {
that.$element.trigger(slidEvent)
}, 0)
})
.emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
} else {
$active.removeClass('active')
$next.addClass('active')
this.sliding = false
this.$element.trigger(slidEvent)
}
isCycling && this.cycle()
return this
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.carousel')
var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
var action  = typeof option == 'string' ? option : options.slide
if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
if (typeof option == 'number') data.to(option)
else if (action) data[action]()
else if (options.interval) data.pause().cycle()
})
}
var old = $.fn.carousel
$.fn.carousel             = Plugin
$.fn.carousel.Constructor = Carousel
$.fn.carousel.noConflict = function () {
$.fn.carousel = old
return this
}
$(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
var href
var $this   = $(this)
var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''))
if (!$target.hasClass('carousel')) return
var options = $.extend({}, $target.data(), $this.data())
var slideIndex = $this.attr('data-slide-to')
if (slideIndex) options.interval = false
Plugin.call($target, options)
if (slideIndex) {
$target.data('bs.carousel').to(slideIndex)
}
e.preventDefault()
})
$(window).on('load', function () {
$('[data-ride="carousel"]').each(function () {
var $carousel = $(this)
Plugin.call($carousel, $carousel.data())
})
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/collapse.js */
+function ($) {
'use strict';
var Collapse = function (element, options) {
this.$element      = $(element)
this.options       = $.extend({}, Collapse.DEFAULTS, options)
this.transitioning = null
if (this.options.parent) this.$parent = $(this.options.parent)
if (this.options.toggle) this.toggle()
}
Collapse.VERSION  = '3.2.0'
Collapse.DEFAULTS = {
toggle: true
}
Collapse.prototype.dimension = function () {
var hasWidth = this.$element.hasClass('width')
return hasWidth ? 'width' : 'height'
}
Collapse.prototype.show = function () {
if (this.transitioning || this.$element.hasClass('in')) return
var startEvent = $.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if (startEvent.isDefaultPrevented()) return
var actives = this.$parent && this.$parent.find('> .panel > .in')
if (actives && actives.length) {
var hasData = actives.data('bs.collapse')
if (hasData && hasData.transitioning) return
Plugin.call(actives, 'hide')
hasData || actives.data('bs.collapse', null)
}
var dimension = this.dimension()
this.$element
.removeClass('collapse')
.addClass('collapsing')[dimension](0)
this.transitioning = 1
var complete = function () {
this.$element
.removeClass('collapsing')
.addClass('collapse in')[dimension]('')
this.transitioning = 0
this.$element
.trigger('shown.bs.collapse')
}
if (!$.support.transition) return complete.call(this)
var scrollSize = $.camelCase(['scroll', dimension].join('-'))
this.$element
.one('bsTransitionEnd', $.proxy(complete, this))
.emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
}
Collapse.prototype.hide = function () {
if (this.transitioning || !this.$element.hasClass('in')) return
var startEvent = $.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if (startEvent.isDefaultPrevented()) return
var dimension = this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element
.addClass('collapsing')
.removeClass('collapse')
.removeClass('in')
this.transitioning = 1
var complete = function () {
this.transitioning = 0
this.$element
.trigger('hidden.bs.collapse')
.removeClass('collapsing')
.addClass('collapse')
}
if (!$.support.transition) return complete.call(this)
this.$element
[dimension](0)
.one('bsTransitionEnd', $.proxy(complete, this))
.emulateTransitionEnd(350)
}
Collapse.prototype.toggle = function () {
this[this.$element.hasClass('in') ? 'hide' : 'show']()
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.collapse')
var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
if (!data && options.toggle && option == 'show') option = !option
if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
if (typeof option == 'string') data[option]()
})
}
var old = $.fn.collapse
$.fn.collapse             = Plugin
$.fn.collapse.Constructor = Collapse
$.fn.collapse.noConflict = function () {
$.fn.collapse = old
return this
}
$(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
var href
var $this   = $(this)
var target  = $this.attr('data-target')
|| e.preventDefault()
|| (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
var $target = $(target)
var data    = $target.data('bs.collapse')
var option  = data ? 'toggle' : $this.data()
var parent  = $this.attr('data-parent')
var $parent = parent && $(parent)
if (!data || !data.transitioning) {
if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
$this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
}
Plugin.call($target, option)
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/dropdown.js */
+function ($) {
'use strict';
var backdrop = '.dropdown-backdrop'
var toggle   = '[data-toggle="dropdown"]'
var Dropdown = function (element) {
$(element).on('click.bs.dropdown', this.toggle)
}
Dropdown.VERSION = '3.2.0'
Dropdown.prototype.toggle = function (e) {
var $this = $(this)
if ($this.is('.disabled, :disabled')) return
var $parent  = getParent($this)
var isActive = $parent.hasClass('open')
clearMenus()
if (!isActive) {
if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
}
var relatedTarget = { relatedTarget: this }
$parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
if (e.isDefaultPrevented()) return
$this.trigger('focus')
$parent
.toggleClass('open')
.trigger('shown.bs.dropdown', relatedTarget)
}
return false
}
Dropdown.prototype.keydown = function (e) {
if (!/(38|40|27|32)/.test(e.keyCode) || /input|textarea/i.test(e.target.tagName)) return
var $this = $(this)
e.preventDefault()
e.stopPropagation()
if ($this.is('.disabled, :disabled')) return
var $parent  = getParent($this)
var isActive = $parent.hasClass('open')
if ((!isActive && e.keyCode != 27) || (isActive && e.keyCode == 27)) {
if (e.which == 27) $parent.find(toggle).trigger('focus')
return $this.trigger('click')
}
var desc = ' li:not(.divider):visible a'
var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)
if (!$items.length) return
var index = $items.index($items.filter(':focus'))
if (e.keyCode == 38 && index > 0)                 index--
if (e.keyCode == 40 && index < $items.length - 1) index++
if (!~index)                                      index = 0
$items.eq(index).trigger('focus')
}
function clearMenus(e) {
if (e && e.which === 3) return
$(backdrop).remove()
$(toggle).each(function () {
var $parent = getParent($(this))
var relatedTarget = { relatedTarget: this }
if (!$parent.hasClass('open')) return
$parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
if (e.isDefaultPrevented()) return
$parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
})
}
function getParent($this) {
var selector = $this.attr('data-target')
if (!selector) {
selector = $this.attr('href')
selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
}
var $parent = selector && $(selector)
return $parent && $parent.length ? $parent : $this.parent()
}
function Plugin(option) {
return this.each(function () {
var $this = $(this)
var data  = $this.data('bs.dropdown')
if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
if (typeof option == 'string') data[option].call($this)
})
}
var old = $.fn.dropdown
$.fn.dropdown             = Plugin
$.fn.dropdown.Constructor = Dropdown
$.fn.dropdown.noConflict = function () {
$.fn.dropdown = old
return this
}
$(document)
.on('click.bs.dropdown.data-api', clearMenus)
.on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
.on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
.on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/tooltip.js */
+function ($) {
'use strict';
var Tooltip = function (element, options) {
this.type       =
this.options    =
this.enabled    =
this.timeout    =
this.hoverState =
this.orphanCheck=
this.$element   = null
this.init('tooltip', element, options)
}
Tooltip.VERSION  = '3.2.0'
Tooltip.DEFAULTS = {
animation: true,
placement: 'top',
selector: false,
template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
trigger: 'hover focus',
title: '',
delay: 0,
html: false,
container: false,
viewport: {
selector: 'body',
padding: 0
}
}
Tooltip.prototype.init = function (type, element, options) {
this.enabled   = true
this.type      = type
this.$element  = $(element)
this.options   = this.getOptions(options)
this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)
var triggers = this.options.trigger.split(' ')
for (var i = triggers.length; i--;) {
var trigger = triggers[i]
if (trigger == 'click') {
this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
} else if (trigger != 'manual') {
var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
}
}
this.options.selector ?
(this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
this.fixTitle()
}
Tooltip.prototype.getDefaults = function () {
return Tooltip.DEFAULTS
}
Tooltip.prototype.getOptions = function (options) {
options = $.extend({}, this.getDefaults(), this.$element.data(), options)
if (options.delay && typeof options.delay == 'number') {
options.delay = {
show: options.delay,
hide: options.delay
}
}
return options
}
Tooltip.prototype.getDelegateOptions = function () {
var options  = {}
var defaults = this.getDefaults()
this._options && $.each(this._options, function (key, value) {
if (defaults[key] != value) options[key] = value
})
return options
}
Tooltip.prototype.enter = function (obj) {
var self = obj instanceof this.constructor ?
obj : $(obj.currentTarget).data('bs.' + this.type)
if (!self) {
self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
$(obj.currentTarget).data('bs.' + this.type, self)
}
clearTimeout(self.timeout)
clearInterval(self.orphanCheck);
self.hoverState = 'in'
if (!self.options.delay || !self.options.delay.show) return self.show()
self.timeout = setTimeout(function () {
if (self.hoverState == 'in') self.show()
}, self.options.delay.show)
self.orphanCheck = setInterval(function() {
if (self.$element && !self.$element.is(':visible')) {
self.hide()
clearInterval(self.orphanCheck)
}
}, 1000)
}
Tooltip.prototype.leave = function (obj) {
var self = obj instanceof this.constructor ?
obj : $(obj.currentTarget).data('bs.' + this.type)
if (!self) {
self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
$(obj.currentTarget).data('bs.' + this.type, self)
}
clearTimeout(self.timeout)
clearInterval(self.orphanCheck);
self.hoverState = 'out'
if (!self.options.delay || !self.options.delay.hide) return self.hide()
self.timeout = setTimeout(function () {
if (self.hoverState == 'out') self.hide()
}, self.options.delay.hide)
}
Tooltip.prototype.show = function () {
var e = $.Event('show.bs.' + this.type)
if (this.hasContent() && this.enabled) {
this.$element.trigger(e)
var inDom = $.contains(document.documentElement, this.$element[0])
if (e.isDefaultPrevented() || !inDom) return
var that = this
var $tip = this.tip()
var tipId = this.getUID(this.type)
this.setContent()
$tip.attr('id', tipId)
this.$element.attr('aria-describedby', tipId)
if (this.options.animation) $tip.addClass('fade')
var placement = typeof this.options.placement == 'function' ?
this.options.placement.call(this, $tip[0], this.$element[0]) :
this.options.placement
var autoToken = /\s?auto?\s?/i
var autoPlace = autoToken.test(placement)
if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
$tip
.detach()
.css({ top: 0, left: 0, display: 'block' })
.addClass(placement)
.data('bs.' + this.type, this)
this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
var pos          = this.getPosition()
var actualWidth  = $tip[0].offsetWidth
var actualHeight = $tip[0].offsetHeight
if (autoPlace) {
var orgPlacement = placement
var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
var containerDim = this.getPosition($container)
placement = placement == 'bottom' && pos.top   + pos.height          + actualHeight - containerDim.scroll > containerDim.height ? 'top'    :
placement == 'top'    && pos.top   - containerDim.scroll - actualHeight < containerDim.top                          ? 'bottom' :
placement == 'right'  && pos.right + actualWidth         > containerDim.width                                       ? 'left'   :
placement == 'left'   && pos.left  - actualWidth         < containerDim.left										  ? 'right'  :
placement
$tip
.removeClass(orgPlacement)
.addClass(placement)
}
var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
this.applyPlacement(calculatedOffset, placement)
var complete = function () {
var prevHoverState = that.hoverState
that.$element.trigger('shown.bs.' + that.type)
that.hoverState = null
if (prevHoverState == 'out') that.leave(that)
}
$.support.transition && this.$tip.hasClass('fade') ?
$tip
.one('bsTransitionEnd', complete)
.emulateTransitionEnd(150) :
complete()
}
}
Tooltip.prototype.applyPlacement = function (offset, placement) {
var $tip   = this.tip()
var width  = $tip[0].offsetWidth
var height = $tip[0].offsetHeight
var marginTop = parseInt($tip.css('margin-top'), 10)
var marginLeft = parseInt($tip.css('margin-left'), 10)
if (isNaN(marginTop))  marginTop  = 0
if (isNaN(marginLeft)) marginLeft = 0
offset.top  = offset.top  + marginTop
offset.left = offset.left + marginLeft
$.offset.setOffset($tip[0], $.extend({
using: function (props) {
$tip.css({
top: Math.round(props.top),
left: Math.round(props.left)
})
}
}, offset), 0)
$tip.addClass('in')
var actualWidth  = $tip[0].offsetWidth
var actualHeight = $tip[0].offsetHeight
if (placement == 'top' && actualHeight != height) {
offset.top = offset.top + height - actualHeight
}
var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
if (delta.left) offset.left += delta.left
else offset.top += delta.top
var isVertical          = /top|bottom/.test(placement)
var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
}
Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
this.arrow()
.css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
.css(isHorizontal ? 'top' : 'left', '')
}
Tooltip.prototype.setContent = function () {
var $tip  = this.tip()
var title = this.getTitle()
$tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
$tip.removeClass('fade in top bottom left right')
}
Tooltip.prototype.hide = function (callback) {
var that = this
var $tip = this.tip()
var e    = $.Event('hide.bs.' + this.type)
function complete() {
if (that.hoverState != 'in') $tip.detach()
that.$element
.removeAttr('aria-describedby')
.trigger('hidden.bs.' + that.type)
callback && callback()
}
this.$element.trigger(e)
if (e.isDefaultPrevented()) return
$tip.removeClass('in')
$.support.transition && this.$tip.hasClass('fade') ?
$tip
.one('bsTransitionEnd', complete)
.emulateTransitionEnd(150) :
complete()
this.hoverState = null
return this
}
Tooltip.prototype.fixTitle = function () {
var $e = this.$element
if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
$e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
}
}
Tooltip.prototype.hasContent = function () {
return this.getTitle()
}
Tooltip.prototype.getPosition = function ($element) {
$element   = $element || this.$element
var el     = $element[0]
var isBody = el.tagName == 'BODY'
return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
width: isBody ? document.documentElement.scrollWidth : $element.outerWidth(),
height: isBody ? $(window).height() : $element.outerHeight()
}, isBody ? { top: 0, left: 0 } : $element.offset())
}
Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
}
Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
var delta = { top: 0, left: 0 }
if (!this.$viewport) return delta
var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
var viewportDimensions = this.getPosition(this.$viewport)
if (/right|left/.test(placement)) {
var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
if (topEdgeOffset < viewportDimensions.top) {
delta.top = viewportDimensions.top - topEdgeOffset
} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
}
} else {
var leftEdgeOffset  = pos.left - viewportPadding
var rightEdgeOffset = pos.left + viewportPadding + actualWidth
if (leftEdgeOffset < viewportDimensions.left) {
delta.left = viewportDimensions.left - leftEdgeOffset
} else if (rightEdgeOffset > viewportDimensions.width) {
delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
}
}
return delta
}
Tooltip.prototype.getTitle = function () {
var title
var $e = this.$element
var o  = this.options
title = $e.attr('data-original-title')
|| (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
return title
}
Tooltip.prototype.getUID = function (prefix) {
do prefix += ~~(Math.random() * 1000000)
while (document.getElementById(prefix))
return prefix
}
Tooltip.prototype.tip = function () {
return (this.$tip = this.$tip || $(this.options.template))
}
Tooltip.prototype.arrow = function () {
return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
}
Tooltip.prototype.validate = function () {
if (!this.$element[0].parentNode) {
this.hide()
this.$element = null
this.options  = null
}
}
Tooltip.prototype.enable = function () {
this.enabled = true
}
Tooltip.prototype.disable = function () {
this.enabled = false
}
Tooltip.prototype.toggleEnabled = function () {
this.enabled = !this.enabled
}
Tooltip.prototype.toggle = function (e) {
var self = this
if (e) {
self = $(e.currentTarget).data('bs.' + this.type)
if (!self) {
self = new this.constructor(e.currentTarget, this.getDelegateOptions())
$(e.currentTarget).data('bs.' + this.type, self)
}
}
self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
}
Tooltip.prototype.destroy = function () {
var that = this
clearTimeout(this.timeout)
this.hide(function () {
that.$element.off('.' + that.type).removeData('bs.' + that.type)
})
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.tooltip')
var options = typeof option == 'object' && option
if (!data && option == 'destroy') return
if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
if (typeof option == 'string') data[option]()
})
}
var old = $.fn.tooltip
$.fn.tooltip             = Plugin
$.fn.tooltip.Constructor = Tooltip
$.fn.tooltip.noConflict = function () {
$.fn.tooltip = old
return this
}
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/modal.js */
+function ($) {
'use strict';
var Modal = function (element, options) {
this.options        = options
this.$body          = $(document.body)
this.$element       = $(element)
this.$backdrop      =
this.isShown        = null
this.scrollbarWidth = 0
if (this.options.remote) {
this.$element
.find('.modal-content')
.load(this.options.remote, $.proxy(function () {
this.$element.trigger('loaded.bs.modal')
}, this))
}
}
Modal.VERSION  = '3.2.0'
Modal.DEFAULTS = {
backdrop: true,
keyboard: true,
show: true
}
Modal.prototype.toggle = function (_relatedTarget) {
return this.isShown ? this.hide() : this.show(_relatedTarget)
}
Modal.prototype.show = function (_relatedTarget) {
var that = this
var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
this.$element.trigger(e)
if (this.isShown || e.isDefaultPrevented()) return
this.isShown = true
this.checkScrollbar()
this.$body.addClass('modal-open')
this.setScrollbar()
this.escape()
this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
this.backdrop(function () {
var transition = $.support.transition && that.$element.hasClass('fade')
if (!that.$element.parent().length) {
that.$element.appendTo(that.$body)
}
that.$element
.show()
.scrollTop(0)
if (transition) {
that.$element[0].offsetWidth
}
that.$element
.addClass('in')
.attr('aria-hidden', false)
that.enforceFocus()
var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
transition ?
that.$element.find('.modal-dialog')
.one('bsTransitionEnd', function () {
that.$element.trigger('focus').trigger(e)
})
.emulateTransitionEnd(300) :
that.$element.trigger('focus').trigger(e)
})
}
Modal.prototype.hide = function (e) {
if (e) e.preventDefault()
e = $.Event('hide.bs.modal')
this.$element.trigger(e)
if (!this.isShown || e.isDefaultPrevented()) return
this.isShown = false
this.$body.removeClass('modal-open')
this.resetScrollbar()
this.escape()
$(document).off('focusin.bs.modal')
this.$element
.removeClass('in')
.attr('aria-hidden', true)
.off('click.dismiss.bs.modal')
$.support.transition && this.$element.hasClass('fade') ?
this.$element
.one('bsTransitionEnd', $.proxy(this.hideModal, this))
.emulateTransitionEnd(300) :
this.hideModal()
}
Modal.prototype.enforceFocus = function () {
$(document)
.off('focusin.bs.modal')
.on('focusin.bs.modal', $.proxy(function (e) {
if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
this.$element.trigger('focus')
}
}, this))
}
Modal.prototype.escape = function () {
if (this.isShown && this.options.keyboard) {
this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
e.which == 27 && this.hide()
}, this))
} else if (!this.isShown) {
this.$element.off('keyup.dismiss.bs.modal')
}
}
Modal.prototype.hideModal = function () {
var that = this
this.$element.hide()
this.backdrop(function () {
that.$element.trigger('hidden.bs.modal')
})
}
Modal.prototype.removeBackdrop = function () {
this.$backdrop && this.$backdrop.remove()
this.$backdrop = null
}
Modal.prototype.backdrop = function (callback) {
var that = this
var animate = this.$element.hasClass('fade') ? 'fade' : ''
if (this.isShown && this.options.backdrop) {
var doAnimate = $.support.transition && animate
this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
.appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
if (e.target !== e.currentTarget) return
this.options.backdrop == 'static'
? this.$element[0].focus.call(this.$element[0])
: this.hide.call(this)
}, this))
if (doAnimate) this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if (!callback) return
doAnimate ?
this.$backdrop
.one('bsTransitionEnd', callback)
.emulateTransitionEnd(150) :
callback()
} else if (!this.isShown && this.$backdrop) {
this.$backdrop.removeClass('in')
var callbackRemove = function () {
that.removeBackdrop()
callback && callback()
}
$.support.transition && this.$element.hasClass('fade') ?
this.$backdrop
.one('bsTransitionEnd', callbackRemove)
.emulateTransitionEnd(150) :
callbackRemove()
} else if (callback) {
callback()
}
}
Modal.prototype.checkScrollbar = function () {
if (document.body.clientWidth >= window.innerWidth) return
this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
}
Modal.prototype.setScrollbar = function () {
var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
}
Modal.prototype.resetScrollbar = function () {
this.$body.css('padding-right', '')
}
Modal.prototype.measureScrollbar = function () {
var scrollDiv = document.createElement('div')
scrollDiv.className = 'modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth
}
function Plugin(option, _relatedTarget) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.modal')
var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
if (typeof option == 'string') data[option](_relatedTarget)
else if (options.show) data.show(_relatedTarget)
})
}
var old = $.fn.modal
$.fn.modal             = Plugin
$.fn.modal.Constructor = Modal
$.fn.modal.noConflict = function () {
$.fn.modal = old
return this
}
$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
var $this   = $(this)
var href    = $this.attr('href')
var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')))
var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
if ($this.is('a')) e.preventDefault()
$target.one('show.bs.modal', function (showEvent) {
if (showEvent.isDefaultPrevented()) return
$target.one('hidden.bs.modal', function () {
$this.is(':visible') && $this.trigger('focus')
})
})
Plugin.call($target, option, this)
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/popover.js */
+function ($) {
'use strict';
var Popover = function (element, options) {
this.init('popover', element, options)
}
if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
Popover.VERSION  = '3.2.0'
Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
placement: 'right',
trigger: 'click',
content: '',
template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
})
Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor = Popover
Popover.prototype.getDefaults = function () {
return Popover.DEFAULTS
}
Popover.prototype.setContent = function () {
var $tip    = this.tip()
var title   = this.getTitle()
var content = this.getContent()
$tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
$tip.find('.popover-content').empty()[
this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
](content)
$tip.removeClass('fade top bottom left right in')
if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
}
Popover.prototype.hasContent = function () {
return this.getTitle() || this.getContent()
}
Popover.prototype.getContent = function () {
var $e = this.$element
var o  = this.options
return $e.attr('data-content')
|| (typeof o.content == 'function' ?
o.content.call($e[0]) :
o.content)
}
Popover.prototype.arrow = function () {
return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
}
Popover.prototype.tip = function () {
if (!this.$tip) this.$tip = $(this.options.template)
return this.$tip
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.popover')
var options = typeof option == 'object' && option
if (!data && option == 'destroy') return
if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
if (typeof option == 'string') data[option]()
})
}
var old = $.fn.popover
$.fn.popover             = Plugin
$.fn.popover.Constructor = Popover
$.fn.popover.noConflict = function () {
$.fn.popover = old
return this
}
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/scrollspy.js */
+function ($) {
'use strict';
function ScrollSpy(element, options) {
var process  = $.proxy(this.process, this)
this.$body          = $('body')
this.$scrollElement = $(element).is('body') ? $(window) : $(element)
this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
this.selector       = (this.options.target || '') + ' .nav li > a'
this.offsets        = []
this.targets        = []
this.activeTarget   = null
this.scrollHeight   = 0
this.$scrollElement.on('scroll.bs.scrollspy', process)
this.refresh()
this.process()
}
ScrollSpy.VERSION  = '3.2.0'
ScrollSpy.DEFAULTS = {
offset: 10
}
ScrollSpy.prototype.getScrollHeight = function () {
return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}
ScrollSpy.prototype.refresh = function () {
var offsetMethod = 'offset'
var offsetBase   = 0
if (!$.isWindow(this.$scrollElement[0])) {
offsetMethod = 'position'
offsetBase   = this.$scrollElement.scrollTop()
}
this.offsets = []
this.targets = []
this.scrollHeight = this.getScrollHeight()
var self     = this
this.$body
.find(this.selector)
.map(function () {
var $el   = $(this)
var href  = $el.data('target') || $el.attr('href')
var $href = /^#./.test(href) && $(href)
return ($href
&& $href.length
&& $href.is(':visible')
&& [[$href[offsetMethod]().top + offsetBase, href]]) || null
})
.sort(function (a, b) { return a[0] - b[0] })
.each(function () {
self.offsets.push(this[0])
self.targets.push(this[1])
})
}
ScrollSpy.prototype.process = function () {
var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
var scrollHeight = this.getScrollHeight()
var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
var offsets      = this.offsets
var targets      = this.targets
var activeTarget = this.activeTarget
var i
if (this.scrollHeight != scrollHeight) {
this.refresh()
}
if (scrollTop >= maxScroll) {
return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
}
if (activeTarget && scrollTop <= offsets[0]) {
return activeTarget != (i = targets[0]) && this.activate(i)
}
for (i = offsets.length; i--;) {
activeTarget != targets[i]
&& scrollTop >= offsets[i]
&& (!offsets[i + 1] || scrollTop <= offsets[i + 1])
&& this.activate(targets[i])
}
}
ScrollSpy.prototype.activate = function (target) {
this.activeTarget = target
$(this.selector)
.parentsUntil(this.options.target, '.active')
.removeClass('active')
var selector = this.selector +
'[data-target="' + target + '"],' +
this.selector + '[href="' + target + '"]'
var active = $(selector)
.parents('li')
.addClass('active')
if (active.parent('.dropdown-menu').length) {
active = active
.closest('li.dropdown')
.addClass('active')
}
active.trigger('activate.bs.scrollspy')
}
function Plugin(option) {
return this.each(function () {
var $this   = $(this)
var data    = $this.data('bs.scrollspy')
var options = typeof option == 'object' && option
if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
if (typeof option == 'string') data[option]()
})
}
var old = $.fn.scrollspy
$.fn.scrollspy             = Plugin
$.fn.scrollspy.Constructor = ScrollSpy
$.fn.scrollspy.noConflict = function () {
$.fn.scrollspy = old
return this
}
$(window).on('load.bs.scrollspy.data-api', function () {
$('[data-spy="scroll"]').each(function () {
var $spy = $(this)
Plugin.call($spy, $spy.data())
})
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/bootstrap/transition.js */
+function ($) {
'use strict';
function transitionEnd() {
var el = document.createElement('bootstrap')
var transEndEventNames = {
WebkitTransition : 'webkitTransitionEnd',
MozTransition    : 'transitionend',
OTransition      : 'oTransitionEnd otransitionend',
transition       : 'transitionend'
}
for (var name in transEndEventNames) {
if (el.style[name] !== undefined) {
return { end: transEndEventNames[name] }
}
}
return false
}
$.fn.emulateTransitionEnd = function (duration) {
var called = false
var $el = this
$(this).one('bsTransitionEnd', function () { called = true })
var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
setTimeout(callback, duration)
return this
}
$(function () {
$.support.transition = transitionEnd()
if (!$.support.transition) return
$.event.special.bsTransitionEnd = {
bindType: $.support.transition.end,
delegateType: $.support.transition.end,
handle: function (e) {
if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
}
}
})
}(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/prototype.hidefix.js */
(function($) {
"use strict";
$.fn.hideFix = function() {
return this.each(function() {
if (!window.Prototype)
return this;
this.hide = function() {
if (!jQuery.event.triggered)
Element.hide(this);
}
this.show = function() {
if (!jQuery.event.triggered)
Element.show(this);
}
return this;
})
}
})(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/collapse.js */
(function($) {
"use strict";
var bsCollapse = $.fn.collapse;
$.fn.collapse = function(options) {
var $this = this;
$this.hideFix();
return bsCollapse.call($this, options);
};
$(document).on('click.bs.collapse.data-api', '[data-sn-toggle="collapse"]', function(e) {
var href
var $this   = $(this)
var target  = $this.attr('data-target')
|| e.preventDefault()
|| (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
var $target = $(target)
var data    = $target.data('bs.collapse')
var option  = data ? 'toggle' : $this.data()
var parent  = $this.attr('data-parent')
var $parent = parent && $(parent)
if (!data || !data.transitioning) {
if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
$this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
}
$.fn.collapse.call($target, option)
});
})(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/dropdowns.js */
(function($) {
"use strict";
$(document).on('show.bs.dropdown', function(evt) {
$(evt.relatedTarget).hideFix()
.parent().hideFix()
.closest('.dropup, .dropdown').hideFix();
$('.dropdown-menu', evt.target).data('menu-trigger', evt.relatedTarget);
});
})(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/modals.js */
jQuery(function($) {
"use strict";
var bsModal = $.fn.modal.Constructor;
var bsModalShow = bsModal.prototype.show;
var bsModalHide = bsModal.prototype.hide;
var modalCount = 0;
function isMobileSafari() {
return navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
}
function forceRedraw(element) {
return element.offsetLeft;
}
bsModal.prototype.show = function() {
bsModalShow.apply(this, arguments);
modalCount++;
var $backdrop = $('body').find('.modal-backdrop').not('.stacked');
var zmodal = this.$element.css('z-index');
var zbackdrop = $backdrop.css('z-index');
this.$element.css('z-index', (~~zmodal) + (10 * modalCount));
$backdrop.css('z-index', (~~zbackdrop) + (10 * modalCount));
$backdrop.addClass('stacked');
forceRedraw(this.$element[0]);
};
bsModal.prototype.hide = function(e) {
bsModalHide.apply(this, arguments);
if (this.isShown) return;
modalCount--;
this.$element.css('z-index', '');
forceRedraw(this.$element[0]);
};
$(document).on('shown.bs.modal hidden.bs.modal', function() {
if (window._frameChanged)
_frameChanged();
})
});
;
/*! RESOURCE: /scripts/heisenberg/custom/tooltips.js */
(function($) {
"use strict";
var bsTooltip = $.fn.tooltip.Constructor;
bsTooltip.DEFAULTS.placement = 'auto';
bsTooltip.DEFAULTS.delay = {
'show': 500,
'hide': 100
};
var SN_TOOLTIP_SELECTOR = '.sn-tooltip-basic, *[title]:not(.accessibility_no_tooltip), *[data-dynamic-title]:not(.accessibility_no_tooltip)';
$(function() {
if ('ontouchstart' in document.documentElement)
return;
var $tooltips = $('.sn-tooltip-basic, *[title]:not(.accessibility_no_tooltip), *[data-dynamic-title]:not(.accessibility_no_tooltip)');
(function setupTooltips() {
$tooltips.each(function() {
var $this = $(this);
$this.hideFix();
if (this.hasAttribute('title') && !this.hasAttribute('data-original-title'))
this.setAttribute('data-original-title', this.getAttribute('title'));
})
})();
$(document.body).on('mouseenter focus', SN_TOOLTIP_SELECTOR, function(evt) {
if (this.tagName == 'IFRAME' || this.tagName == 'OPTION')
return;
var $this = $(this);
if ($this.data('bs.tooltip'))
return;
$this.hideFix();
if (this.hasAttribute('title') && !this.hasAttribute('data-original-title'))
this.setAttribute('data-original-title', this.getAttribute('title'));
$this.tooltip({
container: $this.attr('data-container') || 'body',
title: function() {
return $(this).attr('data-dynamic-title');
}
});
$this.on('click', function() {
$this.tooltip('hide');
});
$this.on('shown.bs.tooltip', function() {
setTimeout(function() {
$this.tooltip('hide');
}, 10000);
});
$this.data('hover', setTimeout(function() {
$this.tooltip('show');
}, bsTooltip.DEFAULTS.delay.show));
});
$(document.body).on('mouseleave blur', SN_TOOLTIP_SELECTOR, function() {
var $this = $(this);
var hover = $this.data('hover');
if (hover) {
clearTimeout($this.data('hover'));
$this.removeData('hover')
}
});
$(document).bind('mouseleave', function(evt) {
if ($('.tooltip').length === 0)
return;
$('.sn-tooltip-basic, *[title]').each(function() {
if (this.tagName == 'IFRAME')
return;
var $this = $(this);
if ($this.data('bs.tooltip'))
$this.tooltip('hide');
})
})
});
})(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/snPopover.js */
(function($) {
"use strict";
var Popover = $.fn.popover.Constructor;
var popoverCount = 0;
var bsPopoverInit = Popover.prototype.init;
var bsPopoverShow = Popover.prototype.show;
var bsPopoverHide = Popover.prototype.hide;
var bsPopoverFixTitle = Popover.prototype.fixTitle;
Popover.prototype.init = function (type, element, options) {
var $e = $(element);
var $target = $($e.data('target'));
var popoverId = popoverCount++;
var wide = !!$e.data('wide');
$e.hideFix();
this.$target = $target;
this.$target.hide();
this.popoverId = popoverId;
options = $.extend({}, {
html: true,
content: function () {
if (wide)
this.tip().addClass('wide');
var placeholderId = 'popover-placeholder-' + popoverId;
if (!document.getElementById(placeholderId))
$target.before('<div id="' + placeholderId + '" class="popover-placeholder" />');
$target.show();
return $target;
}.bind(this)
}, options);
bsPopoverInit.call(this, type, element, options);
};
Popover.prototype.fixTitle = function() {
var trigger = this.options.trigger;
if (typeof trigger === "undefined" || trigger === "" || /hover/.test(trigger))
bsPopoverFixTitle.apply(this, arguments);
};
Popover.prototype.show = function () {
var $e = this.$element;
bsPopoverShow.apply(this, arguments);
$e.addClass('active');
this.tip().one('click', '[data-dismiss=popover]', function () {
$e.popover('hide');
$e[0].focus();
});
};
Popover.prototype.hide = function () {
var $e = this.$element;
var $target = this.$target;
var $popover = $target.closest('.popover');
var popoverId = this.popoverId;
function saveOffContent() {
$e.removeClass('active');
var $placeholder = $('#popover-placeholder-' + popoverId);
if (!$placeholder.length || !$target.length)
return;
var $innerContent = $target.detach();
if ($innerContent.length === 0)
return;
$innerContent.hide();
$placeholder.replaceWith($innerContent);
}
if ($.support.transition && $popover.hasClass('fade'))
$popover.one('bsTransitionEnd', saveOffContent);
else
saveOffContent();
bsPopoverHide.apply(this, arguments);
};
Popover.prototype.getTitle = function() {
var $e = this.$element;
var title = $e.data('popover-title');
var expectingHtml = this.options && this.options.html;
var isHtml = typeof $e.data('popover-title-is-html') !== 'undefined' ? $e.data('popover-title-is-html') : expectingHtml;
if (expectingHtml && !isHtml) {
title  = $('<div />').text(title).html();
}
return title || $.fn.tooltip.Constructor.prototype.getTitle.call(this);
}
})(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/popovers.js */
(function($) {
"use strict";
$(function() {
$('.sn-popover-basic').each(function() {
var $this = $(this);
if (!$this.data('bs.popover'))
$(this).popover();
});
function hideOpenPopovers() {
$('.sn-popover-basic').each(function() {
var $this = $(this);
if ($this.attr('aria-describedby') !== undefined)
$this.popover('hide');
});
}
function resetContainer() {
$('.sn-popover-basic').each(function() {
var $this = $(this);
$this.popover({container: $this.data('container')});
});
}
function debounce(fn, threshold, fireOnStart) {
var timeout;
return function() {
var obj = this,
args = arguments;
threshold = (threshold !== undefined) ? threshold : 500;
function delayed() {
if (!fireOnStart)
fn.apply(obj, args);
timeout = null;
}
if (timeout)
clearTimeout(timeout);
else if (fireOnStart)
fn.apply(obj, args);
timeout = setTimeout(delayed, threshold);
};
}
function closeOnBlur(e) {
function eventTargetInElement(elem) {
return elem.is(e.target) || elem.has(e.target).length !== 0
}
$('.sn-popover-basic').each(function() {
var $popoverButton = $(this);
var $popoverContent = $($popoverButton.data('target'));
if (!$popoverButton.hasClass('active'))
return;
if (eventTargetInElement($popoverButton) || eventTargetInElement($popoverContent))
return;
if ($popoverButton.data('auto-close') === false && !$(e.target).is('.sn-popover-basic'))
return;
$popoverButton.popover('hide');
});
}
var debouncedResetContainer = debounce(resetContainer);
var debouncedHideOpenPopovers = debounce(hideOpenPopovers, 0, true);
var debouncedCloseOnBlur = debounce(closeOnBlur, 10);
$(window).on('resize', function() {
if ('ontouchstart' in document.documentElement && document.activeElement.type === 'text')
return;
debouncedHideOpenPopovers();
debouncedResetContainer();
});
$('html').on('click', function(e) {
debouncedCloseOnBlur(e);
});
if (CustomEvent && CustomEvent.observe) {
CustomEvent.observe('body_clicked', function(e) {
debouncedCloseOnBlur(e);
});
}
});
$(document).on('show.bs.popover hide.bs.popover', function() {
if (window._frameChanged)
_frameChanged();
})
})(jQuery);
;
/*! RESOURCE: /scripts/select2_doctype/select2.min.js */
/*
Copyright 2014 Igor Vaynberg

Version: 3.5.1 Timestamp: Tue Jul 22 18:58:56 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function o(a){function b(a){return m[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function p(a,b){for(var c=0,d=b.length;d>c;c+=1)if(r(a,b[c]))return c;return-1}function q(){var b=a(l);b.appendTo("body");var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function r(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function s(b,c){var d,e,f;if(null===b||b.length<1)return[];for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d}function t(a){return a.outerWidth(!1)-a.width()}function u(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function v(c){c.on("mousemove",function(c){var d=i;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function w(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function x(a,b){var c=w(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){p(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus();var e=b.offsetWidth>0||b.offsetHeight>0;e&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!h){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);h=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),h.attr("class","select2-sizer"),a("body").append(h)}return h.text(b.val()),h.width()}function D(b,c,d){var e,g,f=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(g))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=o(a.toUpperCase()).indexOf(o(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page,i);i.callback(b)},error:function(a,b,c){var d={hasError:!0,jqXHR:a,textStatus:b,errorThrown:c};i.callback(d)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function K(b,c){if(a.isFunction(b)){var d=Array.prototype.slice.call(arguments,2);return b.apply(c,d)}return b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(r(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(){var b=this;a.each(arguments,function(a,c){b[c].remove(),b[c]=null})}function O(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,h,j,k,i={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case c.SHIFT:case c.CTRL:case c.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};j=a(document),g=function(){var a=1;return function(){return a++}}(),d=O(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,f=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a("body"),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss,this.opts.element)),this.container.addClass(K(c.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",f,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",f,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",f,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",f,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",f,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),k=k||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2"),d=this;this.close(),a.length&&a[0].detachEvent&&a.each(function(){this.detachEvent("onpropertychange",d._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show()),N.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:r(a.attr("locked"),"locked")||r(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,f,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,f){var h,j=this.opts.id,k=this.liveRegion;h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;d=c.sortResults(d,e,f);var w=[];for(m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+g()),t.attr("role","option"),v=c.formatResult(o,t,f,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),w.push(s[0]);e.append(w),k.text(c.formatMatches(d.length))},h(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,h,c={results:[],more:!1},e=a.term;h=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(i.optionToData(b)):b.is("optgroup")&&(d=i.optionToData(b),b.children().each2(function(a,b){h(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){h(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(s(b.val(),c.separator)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return r(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var d,c=this.opts.element,e=this;c.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),this._sync=this.bind(function(){var a=c.prop("disabled");a===b&&(a=!1),this.enable(!a);var d=c.prop("readonly");d===b&&(d=!1),this.readonly(d),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass,this.opts.element)),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass,this.opts.element))}),c.length&&c[0].attachEvent&&c.each(function(){this.attachEvent("onpropertychange",e._sync)}),d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(b){a.each(b,e._sync)}),this.propertyObserver.observe(c.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b,choice:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1},positionDropdown:function(){var t,u,v,w,x,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window),h=g.width(),i=g.height(),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,o=l>=m+f,p=c.top-f>=g.scrollTop(),q=b.outerWidth(!1),r=j>=n+q,s=b.hasClass("select2-drop-above");s?(u=!0,!p&&o&&(v=!0,u=!1)):(u=!1,!o&&p&&(v=!0,u=!0)),v&&(b.hide(),c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,q=b.outerWidth(!1),r=j>=n+q,b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(x=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),q=b.outerWidth(!1)+(x.scrollHeight===x.clientHeight?0:k.width),q>e?e=q:q=e,f=b.outerHeight(!1),r=j>=n+q):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(t=this.body.offset(),m-=t.top,n-=t.left),r||(n=c.left+this.container.outerWidth(!1)-q),w={left:n,width:e},u?(w.top=c.top-f,w.bottom="auto",this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(w.top=m,w.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),w=a.extend(w,K(this.opts.dropdownCss,this.opts.element)),b.css(w)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),j.on("mousemove.select2Event",function(a){i.x=a.pageX,i.y=a.pageY}),!0):!1},opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",function(b){n(f);var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close(),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){g.opened()&&g.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),j.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,j,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),j=(e.offset()||{}).top||0,f=j+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=j-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);
break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?p(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",d.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(d.text()),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(K(e.opts.formatLoadMore,e.opts.element,d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown(),e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?h.liveRegion.text(e.text()):h.liveRegion.text(h.opts.formatMatches(e.find(".select2-result-selectable").length))}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,f.element,o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+K(f.formatInputTooShort,f.element,d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+K(f.formatInputTooLong,f.element,d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching,f.element)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(g.hasError!==b&&J(f.formatAjaxError,"formatAjaxError"))return n("<li class='select2-ajax-error'>"+K(f.formatAjaxError,f.element,g.jqXHR,g.textStatus,g.errorThrown)+"</li>"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return r(h.id(this),h.id(i))}).length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,f.element,d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+f.escapeMarkup(K(f.formatLoadMore,f.element,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){if(this._touchMoved)return this.clearTouchMoved(),void 0;var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function c(){var c,d,e,f,g,h;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(h=d[f].replace(/\s/g,""),e=h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),e=O(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e))),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,h,d=this.container,e=this.dropdown,f=g();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+f),this.focusser.attr("aria-labelledby","select2-chosen-"+f),this.results.attr("id","select2-results-"+f),this.search.attr("aria-owns","select2-results-"+f),this.focusser.attr("id","s2id_autogen"+f),h=a("label[for='"+this.opts.element.attr("id")+"']"),this.focusser.prev().text(h.text()).attr("for",this.focusser.attr("id"));var i=this.opts.element.attr("title");this.opts.element.attr("title",i||h.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&229!=a.keyCode){if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),void 0;case c.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.ESC){if(this.opts.openOnEnter===!1&&a.which===c.ENTER)return A(a),void 0;if(a.which==c.DOWN||a.which==c.UP||a.which==c.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==c.DELETE||a.which==c.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),u(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(c){n(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(c)})),e.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder(),c.nextSearchTerm=c.opts.nextSearchTerm(a,c.search.val()))})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=r(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return r(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),r(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),f=O(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=s(c.val(),b.separator),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return r(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(r(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"searchContainer","selection")},initContainer:function(){var d,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);var e=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(){e.search[0].focus(),e.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+g()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=d.find(".select2-search-choice-focus"),e=b.prev(".select2-search-choice:not(.select2-locked)"),f=b.next(".select2-search-choice:not(.select2-locked)"),g=z(this.search);if(b.length&&(a.which==c.LEFT||a.which==c.RIGHT||a.which==c.BACKSPACE||a.which==c.DELETE||a.which==c.ENTER)){var h=b;return a.which==c.LEFT&&e.length?h=e:a.which==c.RIGHT?h=f.length?f:null:a.which===c.BACKSPACE?this.unselect(b.first())&&(this.search.width(10),h=e.length?e:f):a.which==c.DELETE?this.unselect(b.first())&&(this.search.width(10),h=f.length?f:null):a.which==c.ENTER&&(h=null),this.selectChoice(h),A(a),h&&h.length||this.open(),void 0}if((a.which===c.BACKSPACE&&1==this.keydowns||a.which==c.LEFT)&&0==g.offset&&!g.length)return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),this.close(),void 0;case c.ESC:return this.cancel(a),A(a),void 0}if(a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.BACKSPACE&&a.which!==c.ESC){if(a.which===c.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)&&A(a),a.which===c.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){p(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,c){this.triggerSelect(a)&&""!==a.text&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),c&&c.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith("<div>"+j+"</div>"),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),A(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(b){var d,e,c=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(d=b.data("select2-data")){var f=a.Event("select2-removing");if(f.val=this.id(d),f.choice=d,this.opts.element.trigger(f),f.isDefaultPrevented())return!1;for(;(e=p(this.id(d),c))>=0;)c.splice(e,1),this.setVal(c),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(d),choice:d}),this.triggerChange({removed:d}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));p(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.opts.element,g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-t(this.search)},resizeSearch:function(){var a,b,c,d,e,f=t(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),s(a,this.opts.separator))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){p(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)r(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c>0&&c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,e,f,g,h,c=Array.prototype.slice.call(arguments,0),i=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],j=["opened","isFocused","container","dropdown"],k=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?h=d.element.prop("multiple"):(h=d.multiple||!1,"tags"in d&&(d.multiple=h=!0)),e=h?new window.Select2["class"].multi:new window.Select2["class"].single,e.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(p(c[0],i)<0)throw"Unknown method: "+c[0];if(g=b,e=a(this).data("select2"),e===b)return;if(f=c[0],"container"===f?g=e.container:"dropdown"===f?g=e.dropdown:(l[f]&&(f=l[f]),g=e[f].apply(e,c.slice(1))),p(c[0],j)>=0||p(c[0],k)>=0&&1==c.length)return!1}}),g===b?this:g},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(a.text,c.term,e,d),e.join("")},formatSelection:function(a,c,d){return a?d(a.text):b},sortResults:function(a){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(){return b},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},matcher:function(a,b){return o(""+b).toUpperCase().indexOf(o(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b?a.opts.minimumResultsForSearch<0?!1:!0:!0}},a.fn.select2.locales=[],a.fn.select2.locales.en={formatMatches:function(a){return 1===a?"One result is available, press enter to select it.":a+" results are available, use up and down arrow keys to navigate."
},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(){return"Loading failed"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.en),a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":d,single:e,multi:f}}}}(jQuery);
/*! RESOURCE: /scripts/heisenberg/custom/selects.js */
jQuery(function($) {
"use strict";
window.NOW = window.NOW || {};
var $select2 = $('select.select2, select.sn-select-basic');
$select2
.each(function() {
var required = $(this).prop('required');
if (required)
$(this).addClass('required');
})
.select2()
.bind('select2-focus', function() {
NOW.select2LabelWorkaround($(this));
});
$(window).bind('blur', function() {
$select2.select2('close');
});
window.NOW.select2LabelWorkaround = function($select2Element) {
var $cont = $select2Element.select2('container');
var $label = $cont.find('label').first();
if ($label.length == 0)
return;
var id = $label.attr('id');
if (!id) {
window.select_id_counter = window.select_id_counter || 0;
id = 'select-label-' + ++window.select_id_counter;
$label.attr('id', id);
}
var focusser = $cont.find('#' + $label.attr('for'));
var focusserAttr = focusser.attr('aria-labelledby');
if (!focusserAttr.startsWith(id + ' '))
focusser.attr('aria-labelledby', id + ' ' + focusserAttr);
if ($select2Element.attr('aria-required'))
focusser.attr('aria-required', $select2Element.attr('aria-required'));
}
});
;
/*! RESOURCE: /scripts/heisenberg/custom/tabs.js */
(function($) {
"use strict";
$.fn.tabs = (function() {
return function() {
var $elem = this;
var api = {};
$elem.data('sn.tabs', api);
attachTabClickHandler($elem);
attachFocusHandler($elem);
};
function attachTabClickHandler($elem) {
$elem.on('click', 'li, [data-toggle=tab], [data-toggle=segmented]', function (e) {
var $el = $(this);
var $tabLi, $tabTrigger;
if ($el.is('li')) {
$tabLi = $el;
$tabTrigger = $el.find('[data-toggle]').first();
} else {
$tabTrigger = $el;
$tabLi = $el.closest('li');
}
if ($tabLi.hasClass('disabled'))
return;
var $selectedTab = $tabLi.siblings('.active');
var $selectedTabTrigger = $selectedTab.find('[data-toggle]').first();
setTabDisplay($selectedTab, $selectedTabTrigger, false);
setTabDisplay($tabLi, $tabTrigger, true);
e.preventDefault();
})
}
function attachFocusHandler($elem) {
$elem.on('focusin focusout', '[data-toggle=tab], [data-toggle=segmented]', function(e) {
var $el = $(this).closest('li');
switch (e.type) {
case 'focusin':
$el.addClass('focus');
break;
case 'focusout':
$el.removeClass('focus');
break;
}
})
}
function setTabDisplay($tabLi, $tabTrigger, display) {
$tabTrigger.attr('aria-selected', display ? 'true' : 'false');
var selector = $tabTrigger.data('tab-target') || $tabTrigger.attr('href');
selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
var $tabpanel = $(selector);
$tabpanel.attr('aria-hidden', display ? 'false' : 'true');
if (display) {
$tabLi.addClass('active justselected');
$tabpanel.addClass('active');
$tabLi.one('focusout', function () {
$tabLi.removeClass('justselected');
})
} else {
$tabLi.removeClass('active');
$tabpanel.removeClass('active');
}
}
})();
$(function() {
$('.sn-tabs-basic').each(function() {
var $this = $(this);
if (!$this.data('sn.tabs'))
$this.tabs();
});
});
})(jQuery);
;
/*! RESOURCE: /scripts/heisenberg/custom/tables.js */
(function($) {
"use strict";
$.fn.tableDetailRowHover = function() {
this.each(function() {
$(this)
.on('mouseenter mouseleave', 'tr', function(evt) {
var row = getTargetAdjRow($(this));
evt.type == 'mouseenter'
? row.addClass('hover') : row.removeClass('hover');
});
})
}
function getTargetAdjRow(row) {
return row.hasClass('detail-row') ? row.prev() : row.next();
}
})(jQuery);
jQuery(function($) {
"use strict";
$('.detail-row:nth-child(2)').closest('table.table').addClass('table-detail-row');
$('.table-hover.table-detail-row').tableDetailRowHover();
});
;
/*! RESOURCE: /scripts/lib/tabbable/tabbable.js */
(function() {
window.tabbable = function(el) {
var basicTabbables = [];
var orderedTabbables = [];
var isHidden = createIsHidden();
var candidates = el.querySelectorAll('input, select, a[href], textarea, button, [tabindex]');
var candidate, candidateIndex;
for (var i = 0, l = candidates.length; i < l; i++) {
candidate = candidates[i];
candidateIndex = candidate.tabIndex;
if (
candidateIndex < 0
|| (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
|| candidate.disabled
|| isHidden(candidate)
) {
continue;
}
if (candidateIndex === 0) {
basicTabbables.push(candidate);
} else {
orderedTabbables.push({
tabIndex: candidateIndex,
node: candidate,
});
}
}
var tabbableNodes = orderedTabbables
.sort(function(a, b) {
return a.tabIndex - b.tabIndex;
})
.map(function(a) {
return a.node
});
Array.prototype.push.apply(tabbableNodes, basicTabbables);
return tabbableNodes;
}
function createIsHidden() {
var nodeCache = [];
return function isHidden(node) {
if (node === document.documentElement) return false;
for (var i = 0, length = nodeCache.length; i < length; i++) {
if (nodeCache[i][0] === node) return nodeCache[i][1];
}
var result = false;
var style = window.getComputedStyle(node);
if (style.visibility === 'hidden' || style.display === 'none') {
result = true;
} else if (node.parentNode) {
result = isHidden(node.parentNode);
}
nodeCache.push([node, result]);
return result;
}
}
})();
;
/*! RESOURCE: /scripts/lib/focus-trap/focus-trap.js */
(function() {
var listeningFocusTrap = null;
function focusTrap(element, userOptions) {
var tabbableNodes = [];
var nodeFocusedBeforeActivation = null;
var active = false;
var container = (typeof element === 'string')
? document.querySelector(element)
: element;
var config = userOptions || {};
config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate != undefined)
? userOptions.returnFocusOnDeactivate
: true;
config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates != undefined)
? userOptions.escapeDeactivates
: true;
var trap = {
activate: activate,
deactivate: deactivate,
pause: removeListeners,
unpause: addListeners
};
return trap;
function activate(activateOptions) {
var defaultedActivateOptions = {
onActivate: (activateOptions && activateOptions.onActivate !== undefined)
? activateOptions.onActivate
: config.onActivate,
};
active = true;
nodeFocusedBeforeActivation = document.activeElement;
if (defaultedActivateOptions.onActivate) {
defaultedActivateOptions.onActivate();
}
addListeners();
return trap;
}
function deactivate(deactivateOptions) {
var defaultedDeactivateOptions = {
returnFocus: (deactivateOptions && deactivateOptions.returnFocus != undefined)
? deactivateOptions.returnFocus
: config.returnFocusOnDeactivate,
onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
? deactivateOptions.onDeactivate
: config.onDeactivate,
};
removeListeners();
if (defaultedDeactivateOptions.onDeactivate) {
defaultedDeactivateOptions.onDeactivate();
}
if (defaultedDeactivateOptions.returnFocus) {
setTimeout(function() {
tryFocus(nodeFocusedBeforeActivation);
}, 0);
}
active = false;
return this;
}
function addListeners() {
if (!active) return;
if (listeningFocusTrap) {
listeningFocusTrap.pause();
}
listeningFocusTrap = trap;
updateTabbableNodes();
tryFocus(firstFocusNode());
document.addEventListener('focus', checkFocus, true);
document.addEventListener('click', checkClick, true);
document.addEventListener('mousedown', checkPointerDown, true);
document.addEventListener('touchstart', checkPointerDown, true);
document.addEventListener('keydown', checkKey, true);
return trap;
}
function removeListeners() {
if (!active || !listeningFocusTrap) return;
document.removeEventListener('focus', checkFocus, true);
document.removeEventListener('click', checkClick, true);
document.removeEventListener('mousedown', checkPointerDown, true);
document.removeEventListener('touchstart', checkPointerDown, true);
document.removeEventListener('keydown', checkKey, true);
listeningFocusTrap = null;
return trap;
}
function firstFocusNode() {
var node;
if (!config.initialFocus) {
node = tabbableNodes[0];
if (!node) {
throw new Error('You can\'t have a focus-trap without at least one focusable element');
}
return node;
}
node = (typeof config.initialFocus === 'string')
? document.querySelector(config.initialFocus)
: config.initialFocus;
if (!node) {
throw new Error('`initialFocus` refers to no known node');
}
return node;
}
function checkPointerDown(e) {
if (config.clickOutsideDeactivates) {
deactivate({ returnFocus: false });
}
}
function checkClick(e) {
if (config.clickOutsideDeactivates) return;
if (container.contains(e.target)) return;
e.preventDefault();
e.stopImmediatePropagation();
}
function checkFocus(e) {
if (config.focusOutsideDeactivates === false) return;
if (container.contains(e.target)) return;
e.preventDefault();
e.stopImmediatePropagation();
e.target.blur();
}
function checkKey(e) {
if (e.key === 'Tab' || e.keyCode === 9) {
handleTab(e);
}
if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
deactivate();
}
}
function handleTab(e) {
e.preventDefault();
updateTabbableNodes();
var currentFocusIndex = tabbableNodes.indexOf(e.target);
var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
var firstTabbableNode = tabbableNodes[0];
if (e.shiftKey) {
if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
return tryFocus(lastTabbableNode);
}
return tryFocus(tabbableNodes[currentFocusIndex - 1]);
}
if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);
tryFocus(tabbableNodes[currentFocusIndex + 1]);
}
function updateTabbableNodes() {
tabbableNodes = tabbable(container);
}
}
function isEscapeEvent(e) {
return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}
function tryFocus(node) {
if (!node || !node.focus) return;
node.focus();
if (node.tagName.toLowerCase() === 'input') {
node.select();
}
}
window.focusTrap = focusTrap;
})();
;
/*! RESOURCE: /scripts/heisenberg/custom/accessibility.js */
jQuery(function($) {
if (!window.WeakMap)
return;
window.NOW = window.NOW || {};
if (window.NOW.accessibilityJSLoaded) {
return;
}
window.NOW.accessibilityJSLoaded = true;
var $document = $(document),
store = new WeakMap();
var modalIds = [];
$document.on('show.bs.modal', function(evt) {
var modal = evt.target,
previouslyFocusedElement = document.activeElement;
if (hasOptions(modal))
return;
createOptions(modal);
rememberTrigger(modal, previouslyFocusedElement);
if (modal.getAttribute('focus-escape') == 'true')
return;
createFocusTrap(modal, {
escapeDeactivates: false,
focusOutsideDeactivates: false,
clickOutsideDeactivates: false
});
});
$document.on('shown.bs.modal', function(evt) {
var modal = evt.target;
modalIds.push(modal.id);
activateFocusTrap(modal);
});
$document.on('hide.bs.modal', function(evt) {
var modal = evt.target;
deactivateFocusTrap(modal);
});
$document.on('hidden.bs.modal', function(evt) {
var modal = evt.target;
activateFocusTrapForNextModal();
restoreTriggerFocus(modal);
destroyOptions(modal);
});
function createOptions(modal) {
store.set(modal, {});
}
function hasOptions(modal) {
return !!store.get(modal);
}
function destroyOptions(modal) {
store.delete(modal);
}
function getOption(modal, key) {
var options = store.get(modal);
return options && options[key];
}
function setOption(modal, key, value) {
var options = store.get(modal);
if (options) {
options[key] = value;
}
}
function rememberTrigger(modal, triggerElement) {
setOption(modal, 'trigger-element', triggerElement);
}
function restoreTriggerFocus(modal) {
var $target = $(getOption(modal, 'trigger-element'));
var isFocusable = function($el) {
if ($el.filter(':visible').length > 0) {
return $el[0].tabIndex > -1;
}
return false;
}
var tryFocus = function(el) {
var $el = $(el);
if (isFocusable($el)) {
$el.focus();
return true;
}
return false;
}
do {
if (tryFocus($target) || tryFocus($target.data('menu-trigger'))) {
return;
}
$target = $target.parent();
} while ($target.length > 0);
}
function createFocusTrap(modal, options) {
if (!window.focusTrap)
return;
var focusTrap = window.focusTrap(modal, options);
setOption(modal, 'focus-trap', focusTrap);
}
function activateFocusTrap(modal) {
var d = $.Deferred();
var focusTrap = getOption(modal, 'focus-trap');
if (!focusTrap) {
d.reject('Focus trap not found');
} else {
try {
focusTrap.activate({
onActivate: function() {
d.resolve();
}
});
} catch(e) {
console.warn('Error while activating focus trap', e);
}
}
return d.promise();
}
function deactivateFocusTrap(modal) {
var d = $.Deferred();
var focusTrap = getOption(modal, 'focus-trap');
if (!focusTrap) {
d.reject('Focus trap not found');
} else {
try {
focusTrap.deactivate({
onDeactivate: function() {
d.resolve();
}
});
} catch(e) {
console.warn('Error while deactivating focus trap', e);
}
}
return d.promise();
}
function activateFocusTrapForNextModal() {
modalIds.pop();
if (modalIds.length > 0) {
var nextModalId = modalIds[modalIds.length - 1];
var nextModal = $('#' + nextModalId);
if (!nextModal || nextModal.length == 0)
return;
if (nextModal[0].getAttribute('focus-escape') == 'true')
return;
activateFocusTrap(nextModal[0]);
}
}
});
;
;
/*! RESOURCE: /scripts/angular_includes_1.4.js */
/*! RESOURCE: /scripts/angular_1.4.8/angular.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,X,u){'use strict';function G(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function za(a){if(null==a||Xa(a))return!1;if(I(a)||E(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||za(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Td(){return++nb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],r=g[m];d&&H(r)?da(r)?a[m]=new Date(r.valueOf()):Ma(r)?a[m]=new RegExp(r):r.nodeName?a[m]=r.cloneNode(!0):
Nb(r)?a[m]=r.clone():(H(a[m])||(a[m]=I(r)?[]:{}),Mb(a[m],[r],!0)):a[m]=r}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function M(a){return Mb(a,ra.call(arguments,1),!1)}function Ud(a){return Mb(a,ra.call(arguments,1),!0)}function ea(a){return parseInt(a,10)}function Ob(a,b){return M(Object.create(a),b)}function x(){}function Ya(a){return a}function na(a){return function(){return a}}function qc(a){return z(a.toString)&&a.toString!==sa}function q(a){return"undefined"===typeof a}function y(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function E(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function da(a){return"[object Date]"===sa.call(a)}function z(a){return"function"===typeof a}function Ma(a){return"[object RegExp]"===sa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&Q(a.length)&&
Vd.test(sa.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Wd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return F(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)qa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Aa("cpws");var b=!1,c;I(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):da(a)?c=new Date(a.getTime()):Ma(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):z(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Aa("cpta");
if(a===b)throw Aa("cpi");I(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function ia(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(I(a)){if(!I(b))return!1;if((d=a.length)==b.length){for(c=
0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?ma(a.getTime(),b.getTime()):!1;if(Ma(a))return Ma(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||I(b)||da(b)||Ma(b))return!1;d=$();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!z(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(ra.call(b,d))}function tc(a,b){var d=2<arguments.length?ra.call(arguments,2):
[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Xd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;Q(b)||(b=b?2:null);return JSON.stringify(a,Xd,b)}function uc(a){return E(a)?JSON.parse(a):a}function vc(a,
b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function ua(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?F(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(c){return F(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,qa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];n(a,function(a,c){I(a)?n(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Yd(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,E(d=a.getAttribute(d)))return d;return null}function Zd(a,b){var d,c,e={};n(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==Yd(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){H(d)||(d={});d=M({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===X?"document":ua(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(d.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return c();S.name=S.name.replace(f,"");fa.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};z(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function $d(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}
function ae(a){a=fa.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(be,function(a,c){return(c?b:"")+a.toLowerCase()})}function ce(){var a;if(!Ac){var b=pb();(oa=q(b)?S.jQuery:b?S[b]:u)&&oa.fn.on?(B=oa,M(oa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
oa._data(f,"events"))&&c.$destroy&&oa(f).triggerHandler("$destroy");a(b)}):B=N;fa.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);qb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
z(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ra.call(a,0,e))),c.push(b);return c||a}function $(){return Object.create(null)}function de(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return v}}function b(a,d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return v}}if(!g)throw d("nomod",f);var c=[],e=[],t=[],A=a("$injector","invoke","push",e),v={_invokeQueue:c,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:A,run:function(a){t.push(a);return this}};h&&A(h);return v})}})}function ee(a){M(a,{bootstrap:yc,copy:bb,extend:M,merge:Ud,equals:ma,element:B,forEach:n,injector:eb,noop:x,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:q,isDefined:y,isString:E,isFunction:z,isObject:H,isNumber:Q,isElement:Nb,isArray:I,
version:fe,isDate:da,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:G,$$csp:Ba,reloadWithDebugInfo:$d});Sb=de(S);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function fb(a){return a.replace(Af,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Bf,"Moz$1")}function Kc(a){a=a.nodeType;
return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Cf.exec(a)||["",""])[1].toLowerCase();c=ka[c]||ka._default;d.innerHTML=c[1]+a.replace(Df,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function N(a){if(a instanceof N)return a;var b;E(a)&&(a=U(a),
b=!0);if(!(this instanceof N)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new N(a)}if(b){b=X;var d;a=(d=Ef.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Mc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||vb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)vb(d[c])}function Nc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&ab(c||[],d);y(d)&&c&&0<c.length||
(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function vb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Nc(a)),delete gb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Ff,d=gb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Kc(a)){var c=y(d),e=!c&&b&&!H(b),f=!b;a=(a=wb(a,
!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];M(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",U((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(b.split(" "),
function(a){a=U(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",U(d))}}function Mc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Oc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&
a.host}}function Pc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Gf(a,b){b=b||S;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Qc(a,b){var d=Cb[b.toLowerCase()];return d&&Rc[ta(a)]&&d}function Hf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(q(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||If;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function If(a,b,d){d.call(a,b)}function Jf(a,b,d){var c=b.relatedTarget;c&&(c===a||Kf.call(a,c))||d.call(a,b)}function xf(){this.$get=function(){return M(N,
{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Td)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Lf(a){return(a=a.toString().replace(Sc,"").match(Tc))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(H(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||I(b))b=t.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(q(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(q(a)||I(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(t.invoke(a)):I(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,t;m=0;for(l=k.length;m<l;m++){t=k[m];if("string"!==typeof t)throw Da("itkn",t);h.push(f&&f.hasOwnProperty(t)?f[t]:d(t,g))}I(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((I(a)?a[a.length-1]:a).prototype||
null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return r.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),r={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,na(b),!1)}),constant:d(function(a,b){Ra(a,"constant");r[a]=b;A[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=
v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},t=r.$injector=h(r,function(a,b){fa.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),A={},v=A.$injector=h(A,function(a,b){var c=t.get(a+"Provider",b);return v.invoke(c.$get,c,u,a)});n(g(a),function(a){a&&v.invoke(a)});return v}function Qe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=
a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Gf(function(){c.$evalAsync(g)})});
return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function Mf(a){E(a)&&(a=a.split(" "));var b=$();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ea(a){return H(a)?a:{}}function Nf(a,b,d,c){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(v--,0===v)for(;T.length;)try{T.pop()()}catch(b){d.error(b)}}}function f(){L=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=q(p)?
null:p;ma(p,J)&&(p=J);J=p}function h(){if(w!==k.url()||C!==p)w=k.url(),C=p,n(aa,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,r=a.setTimeout,t=a.clearTimeout,A={};k.isMock=!1;var v=0,T=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){0===v?a():T.push(a)};var p,C,w=l.href,ga=b.find("base"),L=null;g();C=p;k.url=function(b,d,e){q(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=
C===e;if(w===b&&(!c.history||f))return k;var h=w&&Fa(w)===Fa(b);w=b;C=e;if(!c.history||h&&f){if(!h||L)L=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(L=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),C=p;return k}return L||l.href.replace(/%27/g,"'")};k.state=function(){return p};var aa=[],D=!1,J=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);D=!0}aa.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",
f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ga.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;v++;c=r(function(){delete A[c];e(a)},b||0);A[c]=!0;return c};k.defer.cancel=function(a){return A[a]?(delete A[a],t(a),e(x),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Nf(a,c,b,d)}]}function We(){this.$get=function(){function a(a,c){function e(a){a!=r&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,r),r=a,
r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=M({},c,{id:a}),k=$(),l=c&&c.capacity||Number.MAX_VALUE,m=$(),r=null,t=null;return b[a]={put:function(a,b){if(!q(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(t.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==t&&
(t=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=$();g=0;m=$();r=t=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return M({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function rf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);
if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function t(b,f){Ra(b,"directive");
E(b)?(c(b),qb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);z(h)?h={compile:na(h)}:!h.compile&&h.link&&(h.compile=na(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,t={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(t.bindToController=d(l.scope,
m,!0),t.isolateScope={}):t.isolateScope=d(l.scope,m,!1));H(l.bindToController)&&(t.bindToController=d(l.bindToController,m,!0));if(H(t.bindToController)){var v=l.controller,R=l.controllerAs;if(!v)throw ha("noctrl",m);var V;a:if(R&&E(R))V=R;else{if(E(v)){var n=Uc.exec(v);if(n){V=n[3];break a}}V=void 0}if(!V)throw ha("noident",m);}var s=k.$$bindings=t;H(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(u){c(u)}});return f}])),e[b].push(f)):n(b,pc(t));
return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,
b,c,d,p,C,w,ga,L,aa,D){function J(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e){a instanceof B||(a=B(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);K.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=
d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Yb(g,B("<div>").append(a).html())):c?Pa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);K.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,t,w,D;if(p)for(D=Array(c.length),m=0;m<h.length;m+=3)f=h[m],D[f]=c[f];else D=c;m=0;for(t=h.length;m<t;)k=D[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),K.$$addScopeInfo(B(k),
l)):l=a,w=c.transcludeOnThisElement?R(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?R(a,b):null,c(f,l,k,d,w)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,t,p,w=0;w<a.length;w++){k=new fa;l=V(a[w],[],k,0===w?d:u,e);(f=l.length?Z(l,a[w],k,b,c,null,[],[],f):null)&&f.scope&&K.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[w].childNodes)||!m.length?null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(w,f,k),t=!0,p=p||f;f=null}return t?g:null}function R(a,
b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function V(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:P(b,va(ta(a)),"E",d,e);for(var l,m,t,p=a.attributes,w=0,D=p&&p.length;w<D;w++){var K=!1,A=!1;l=p[w];k=l.name;m=U(l.value);l=va(k);if(t=ka.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(la))&&G(l[1])&&(K=k,A=k.substr(0,k.length-
5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(t||!c.hasOwnProperty(l))c[l]=m,Qc(a,l)&&(c[l]=!0);W(a,b,m,l,t);P(b,l,"A",d,e,K,A)}a=a.className;H(a)&&(a=a.animVal);if(E(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),P(b,l,"C",d,e)&&(c[l]=U(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);N(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=
va(k[1]),P(b,l,"M",d,e)&&(c[l]=U(k[2]))}catch(R){}}b.sort(Ia);return b}function Ta(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ta(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,d,e,f,g,h,l,m){function t(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=q.require;a.directiveName=x;if(O===
q||q.$$isolateScope)a=ca(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=q.require;b.directiveName=x;if(O===q||q.$$isolateScope)b=ca(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;if(E(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||
null}function w(a,b,c,d,e,f){var g=$(),h;for(h in d){var k=d[h],l={$scope:k===O||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=C(m,l,!0,k.controllerAs);g[k.name]=l;aa||a.data("$"+k.name+"Controller",l.instance)}return g}function D(a,c,e,f,g){function k(a,b,c){var d;Za(a)||(c=b,b=a,a=u);aa&&(d=v);c||(c=aa?V.parent():V);return g(a,b,d,c,Ta)}var m,t,A,v,C,V,Ga;b===e?(f=d,V=d.$$element):(V=B(e),f=new fa(V,d));A=c;O?t=c.$new(!0):R&&(A=c.$parent);g&&(C=k,
C.$$boundTransclude=g);T&&(v=w(V,f,C,T,t,c));O&&(K.$$addScopeInfo(V,t,!0,!(J&&(J===O||J===O.$$originalDirective))),K.$$addScopeClass(V,!0),t.$$isolateBindings=O.$$isolateBindings,(Ga=ba(c,f,t,t.$$isolateBindings,O))&&t.$on("$destroy",Ga));for(var n in v){Ga=T[n];var ga=v[n],L=Ga.$$bindings.bindToController;ga.identifier&&L&&(m=ba(A,f,ga.instance,L,Ga));var q=ga();q!==ga.instance&&(ga.instance=q,V.data("$"+Ga.name+"Controller",q),m&&m(),m=ba(A,f,ga.instance,L,Ga))}F=0;for(M=h.length;F<M;F++)m=h[F],
ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C);var Ta=c;O&&(O.template||null===O.templateUrl)&&(Ta=t);a&&a(Ta,e.childNodes,u,g);for(F=l.length-1;0<=F;F--)m=l[F],ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C)}m=m||{};for(var A=-Number.MAX_VALUE,R=m.newScopeDirective,T=m.controllerDirectives,O=m.newIsolateScopeDirective,J=m.templateDirective,n=m.nonTlbTranscludeDirective,ga=!1,L=!1,aa=m.hasElementTranscludeDirective,Z=d.$$element=B(b),q,x,P,Ia=
e,G,F=0,M=a.length;F<M;F++){q=a[F];var N=q.$$start,Q=q.$$end;N&&(Z=Ta(b,N,Q));P=u;if(A>q.priority)break;if(P=q.scope)q.templateUrl||(H(P)?(Ua("new/isolated scope",O||R,q,Z),O=q):Ua("new/isolated scope",O,q,Z)),R=R||q;x=q.name;!q.templateUrl&&q.controller&&(P=q.controller,T=T||$(),Ua("'"+x+"' controller",T[x],q,Z),T[x]=q);if(P=q.transclude)ga=!0,q.$$tlb||(Ua("transclusion",n,q,Z),n=q),"element"==P?(aa=!0,A=q.priority,P=Z,Z=d.$$element=B(X.createComment(" "+x+": "+d[x]+" ")),b=Z[0],Y(f,ra.call(P,0),
b),Ia=K(P,e,A,g&&g.name,{nonTlbTranscludeDirective:n})):(P=B(Vb(b)).contents(),Z.empty(),Ia=K(P,e,u,u,{needsNewScope:q.$$isolateScope||q.$$newScope}));if(q.template)if(L=!0,Ua("template",J,q,Z),J=q,P=z(q.template)?q.template(Z,d):q.template,P=ja(P),q.replace){g=q;P=Tb.test(P)?Xc(Yb(q.templateNamespace,U(P))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ha("tplrt",x,"");Y(f,Z,b);P={$attr:{}};var Wc=V(b,[],P),W=a.splice(F+1,a.length-(F+1));(O||R)&&y(Wc,O,R);a=a.concat(Wc).concat(W);S(d,P);M=a.length}else Z.html(P);
if(q.templateUrl)L=!0,Ua("template",J,q,Z),J=q,q.replace&&(g=q),D=Of(a.splice(F,a.length-F),Z,d,f,ga&&Ia,h,l,{controllerDirectives:T,newScopeDirective:R!==q&&R,newIsolateScopeDirective:O,templateDirective:J,nonTlbTranscludeDirective:n}),M=a.length;else if(q.compile)try{G=q.compile(Z,d,Ia),z(G)?t(null,G,N,Q):G&&t(G.pre,G.post,N,Q)}catch(da){c(da,ua(Z))}q.terminal&&(D.terminal=!0,A=Math.max(A,q.priority))}D.scope=R&&!0===R.scope;D.transcludeOnThisElement=ga;D.templateOnThisElement=L;D.transclude=Ia;
m.hasElementTranscludeDirective=aa;return D}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function P(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,w=d.length;p<w;p++)try{m=d[p],(q(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Ob(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(D){c(D)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
c[d],b.multiElement)return!0;return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(J(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Of(a,b,c,e,f,g,h,k){var l=[],m,t,p=b[0],w=a.shift(),D=Ob(w,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:w}),A=z(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,K=w.templateNamespace;b.empty();d(A).then(function(d){var T,v;d=ja(d);if(w.replace){d=Tb.test(d)?Xc(Yb(K,U(d))):[];T=d[0];if(1!=d.length||1!==T.nodeType)throw ha("tplrt",w.name,A);d={$attr:{}};Y(e,b,T);var C=V(T,[],d);H(w.scope)&&y(C,!0);a=C.concat(a);S(c,d)}else T=p,b.html(d);a.unshift(D);m=Z(a,T,c,f,b,w,g,h,k);n(e,function(a,c){a==T&&(e[c]=b[0])});for(t=O(b[0].childNodes,f);l.length;){d=l.shift();
v=l.shift();var ga=l.shift(),L=l.shift(),C=b[0];if(!d.$$destroyed){if(v!==p){var q=v.className;k.hasElementTranscludeDirective&&w.replace||(C=Vb(T));Y(ga,B(v),C);J(B(C),q)}v=m.transcludeOnThisElement?R(d,m.transclude,L):L;m(t,d,C,e,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=R(b,m.transclude,e)),m(t,b,c,d,a)))}}function Ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,
b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function N(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&K.$$addBindingClass(a);return function(a,c){var e=c.parent();b||K.$$addBindingClass(e);K.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return L.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function W(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===ta(a))throw ha("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=$());if(l.test(e))throw ha("nodomevents");
var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);
B.hasData(d)&&(B.data(c,B.data(d)),oa?(Rb=!0,oa.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ca(a,b){return M(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ba(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,t,w,D;switch(e.mode){case "@":l||qa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){E(a)&&
(d[h]=a)});c.$$observers[k].$$scope=a;E(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!qa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;t=p(c[k]);D=t.literal?ma:function(a,b){return a===b||a!==a&&b!==b};w=t.assign||function(){m=d[h]=t(a);throw ha("nonassign",c[k],f.name);};m=d[h]=t(a);l=function(b){D(b,d[h])||(D(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,t.literal);g.push(l);break;case "&":t=c.hasOwnProperty(k)?p(c[k]):
x;if(t===x&&l)break;d[h]=function(b){return t(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var fa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};fa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&aa.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&aa.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Yc(a,b);c&&c.length&&aa.addClass(this.$$element,
c);(c=Yc(b,a))&&c.length&&aa.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Qc(this.$$element[0],a),g=Zc[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=ta(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<
k;l++)var m=2*l,f=f+D(U(g[m]),!0),f=f+(" "+U(g[m+1]));g=U(g[2*l]).split(/\s/);f+=D(U(g[0]),!0);2===g.length&&(f+=" "+U(g[1]));this[a]=b=f}!1!==d&&(null===b||q(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=$()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||q(c[a])||b(c[a])});return function(){ab(e,b)}}};var da=b.startSymbol(),
ia=b.endSymbol(),ja="{{"==da||"}}"==ia?Ya:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ia)},ka=/^ngAttr[A-Z]/,la=/^(.+)Start$/;K.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;K.$$addBindingClass=m?function(a){J(a,"ng-binding")}:x;K.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;K.$$addScopeClass=m?function(a,b){J(a,b?"ng-isolate-scope":"ng-scope")}:x;return K}]}function va(a){return fb(a.replace(Vc,
""))}function Yc(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Pf.call(a,b,1);return a}function Xe(){var a={},b=!1;this.register=function(b,c){Ra(b,"controller");H(b)?M(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!H(a.$scope))throw G("$controller")("noscp",
d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,r;h=!0===h;k&&E(k)&&(r=k);if(E(f)){k=f.match(Uc);if(!k)throw Qf("ctrlfmt",f);m=k[1];r=r||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Qa(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),r&&e(g,r,l,m||f.name),M(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,r&&e(g,r,l,m||f.name));return l},{instance:l,identifier:r});l=d.instantiate(f,g,m);r&&e(g,r,l,m||f.name);return l}}]}function Ye(){this.$get=
["$window",function(a){return B(a.document)}]}function Ze(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return H(a)?da(a)?a.toISOString():db(a):a}function df(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||q(a)||(I(a)?n(a,function(a,d){b.push(ja(c)+"="+ja(Zb(a)))}):b.push(ja(c)+"="+ja(Zb(a))))});return b.join("&")}}}function ef(){this.$get=function(){return function(a){function b(a,e,f){null===a||q(a)||
(I(a)?n(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!da(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(E(a)){var d=a.replace(Rf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf($c))||(c=(c=d.match(Sf))&&Tf[c[0]].test(d));c&&(a=uc(d))}}return a}function ad(a){var b=$(),d;E(a)?n(a.split("\n"),function(a){d=a.indexOf(":");var e=F(U(a.substr(0,d)));a=U(a.substr(d+1));e&&
(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&n(a,function(a,d){var f=F(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function bd(a){var b;return function(d){b||(b=ad(a));return d?(d=b[F(d)],void 0===d&&(d=null),d):b}}function cd(a,b,d,c){if(z(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function cf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a){var b=M({},a);b.data=cd(a.data,a.headers,a.status,f.transformResponse);
a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!fa.isObject(b))throw G("$http")("badreq",b);var f=M({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=M({},b.headers),f,g,h,c=M({},c.common,c[F(b.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);
f.method=sb(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=cd(b.data,bd(d),u,b.transformRequest);q(e)&&n(d,function(a,b){"content-type"===F(b)&&delete d[b]});q(b.withCredentials)&&!q(a.withCredentials)&&(b.withCredentials=a.withCredentials);return r(b,e).then(c,c)},u],h=k.when(f);for(n(v,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=
g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=dd("success"),h.error=dd("error"));return h}function r(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}J&&(200<=a&&300>a?J.put(R,[a,c,ad(d),e]):J.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?n.resolve:
n.reject)({data:a,status:b,headers:bd(d),config:c,statusText:e})}function r(a){l(a.data,a.status,ia(a.headers()),a.statusText)}function v(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var n=k.defer(),D=n.promise,J,K,O=c.headers,R=t(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);D.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=H(c.cache)?c.cache:H(a.cache)?a.cache:A);J&&(K=J.get(R),y(K)?K&&z(K.then)?K.then(r,r):I(K)?l(K[1],
K[0],ia(K[2]),K[3]):l(K,200,{},"OK"):J.put(R,D));q(K)&&((K=ed(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||a.xsrfHeaderName]=K),e(c.method,R,d,g,O,c.timeout,c.withCredentials,c.responseType));return D}function t(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var A=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];n(c,function(a){v.unshift(E(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,
function(a){m[a]=function(b,c){return m(M({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(M({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function gf(){this.$get=function(){return function(){return new S.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Uf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Uf(a,b,d,
c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,A="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),A=a.type,g="error"===a.type?404:200);d&&d(g,A)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,r,t,A){function v(){C&&C();w&&w.abort()}
function T(b,c,e,f,g){y(L)&&d.cancel(L);C=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(x)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==F(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var C=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){T(l,a,c[p].data,"",b);c[p]=x})}else{var w=b(e,h);w.open(e,h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==wa(h).protocol?404:0);T(l,c,b,w.getAllResponseHeaders(),a)};e=function(){T(l,-1,null,null,"")};w.onerror=e;w.onabort=e;t&&(w.withCredentials=!0);if(A)try{w.responseType=A}catch(ga){if("json"!==A)throw ga;}w.send(q(k)?null:k)}if(0<r)var L=d(v,r);else r&&z(r.then)&&r.then(v)}}function af(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(f,h,m,r){function p(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var d;if(r&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}r=!!r;for(var C,w,n=0,L=[],s=[],D=f.length,J=[],K=[];n<D;)if(-1!=(C=f.indexOf(a,n))&&-1!=(w=f.indexOf(b,C+k)))n!==C&&J.push(g(f.substring(n,C))),n=f.substring(C+
k,w),L.push(n),s.push(d(n,p)),n=w+l,K.push(J.length),J.push("");else{n!==D&&J.push(g(f.substring(n)));break}m&&1<J.length&&Ja.throwNoconcat(f);if(!h||L.length){var O=function(a){for(var b=0,c=L.length;b<c;b++){if(r&&q(a[b]))return;J[K[b]]=a[b]}return J.join("")};return M(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=s[b](a);return O(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:L,$$watchDelegate:function(a,b){var c;return a.$watchGroup(s,function(d,e){var f=O(d);z(b)&&b.call(this,
f,d!==e?c:f,a);c=f})}})}}var k=a.length,l=b.length,m=new RegExp(a.replace(/./g,f),"g"),r=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,l){var m=4<arguments.length,r=m?ra.call(arguments,4):[],t=b.setInterval,A=b.clearInterval,v=0,n=y(l)&&!l,p=(n?c:d).defer(),C=p.promise;k=y(k)?k:0;C.then(null,null,m?function(){e.apply(null,r)}:e);C.$$intervalId=
t(function(){p.notify(v++);0<k&&v>=k&&(p.resolve(v),A(C.$$intervalId),delete f[C.$$intervalId]);n||a.$apply()},h);f[C.$$intervalId]=p;return C}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function fd(a,b){var d=wa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||Vf[d.protocol]||
null}function gd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=wa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function pa(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Fa(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function ib(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
fd(a,this);this.$$parse=function(a){var d=pa(b,a);if(!E(d))throw Db("ipthprfx",a,b);gd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=pa(a,c))?(g=f,g=y(f=pa(d,f))?b+(pa("/",f)||f):a+g):y(f=pa(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
return!!g}}function dc(a,b,d){fd(a,this);this.$$parse=function(c){var e=pa(a,c)||pa(b,c),f;q(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",q(e)&&(a=c,this.replace())):(f=pa(d,e),q(f)&&(f=e));gd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Fa(a)==Fa(b)?(this.$$parse(b),!0):!1}}function hd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Fa(c)?f=c:(g=pa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Eb(a){return function(){return this[a]}}
function id(a,b){return function(d){if(q(d))return this[a];this[a]=b(d);this.$$compose();return this}}function hf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):H(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var r=c.url(),t;if(b.enabled){if(!m&&b.requireBase)throw Db("nobase");t=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?cc:hd}else t=Fa(r),m=dc;var A=t.substr(0,Fa(t).lastIndexOf("/")+1);l=new m(t,A,"#"+a);l.$$parseLinkUrl(r,r);l.$$state=
c.state();var v=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=wa(h.animVal).href);v.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});ib(l.absUrl())!=ib(r)&&c.url(l.absUrl(),!0);var n=!0;c.onUrlChange(function(a,b){q(pa(A,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=ib(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(n=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=ib(c.url()),b=ib(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(n||
m)n=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function jf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw ba("isecfld",b);return a}function jd(a,b){a+="";if(!E(a))throw ba("iseccst",b);return a}function xa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function kd(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===Wf||a===Xf||a===Yf)throw ba("isecff",b);}}function ld(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function Zf(a,b){return"undefined"!==typeof a?a:b}function md(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function W(a,b){var d,c;switch(a.type){case s.Program:d=!0;n(a.body,function(a){W(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:W(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:W(a.test,b);W(a.alternate,b);W(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:W(a.object,b);a.computed&&W(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];n(a.elements,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];n(a.properties,function(a){W(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function nd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}
function od(a){return a.type===s.Identifier||a.type===s.MemberExpression}function pd(a){if(1===a.body.length&&od(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function rd(a,b){this.astBuilder=a;this.$filter=b}function sd(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return z(a.valueOf)?a.valueOf():$f.call(a)}function kf(){var a=$(),b=$();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],r=0,n=
g.length;r<n;r++)l[r]=c,m[r]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=
e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Ba().noUnsafeEval,m={csp:l,expensiveChecks:!1},r={csp:l,expensiveChecks:!0};return function(c,l,v){var n,p,q;switch(typeof c){case "string":q=c=c.trim();var w=v?b:a;n=w[q];n||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),v=v?r:m,n=new fc(v),n=(new gc(n,d,v)).parse(c),n.constant?n.$$watchDelegate=h:p?n.$$watchDelegate=n.literal?g:f:n.inputs&&(n.$$watchDelegate=e),w[q]=n);return k(n,l);case "function":return k(c,l);default:return x}}}]}
function mf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return td(function(b){a.$evalAsync(b)},b)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(a,b){return td(function(b){a.defer(b)},b)}]}function td(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,
d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);M(c.prototype,{then:function(a,b,c){if(q(a)&&q(b)&&q(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];
this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});M(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(H(a)||z(a))c=a&&a.then;z(c)?(this.promise.$$state.status=
-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?
a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function A(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof A))return new A(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.resolve=m;r.all=function(a){var b=new g,c=0,d=I(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function wf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function lf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function l(a){a.currentScope.$$destroyed=!0}function m(a){9===Ha&&(a.$$childHead&&m(a.$$childHead),a.$$nextSibling&&m(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function r(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function t(a){if(w.$$phase)throw d("inprog",w.$$phase);w.$$phase=a}function A(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function v(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function p(){for(;aa.length;)try{aa.shift()()}catch(a){g(a)}e=null}function C(){null===e&&(e=k.defer(function(){w.$apply(p)}))}r.prototype={constructor:r,
$new:function(b,c){var d;c=c||this;b?(d=new r,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",l);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=x);k||
(k=g.$$watchers=[]);k.unshift(l);A(this,1);return function(){0<=ab(k,l)&&A(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!q(e)){if(H(e))if(za(e))for(f!==r&&(f=r,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==t&&(f=t={},n=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)qa.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=
h(a,c),r=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(za(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)qa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,r,n=b,A,q=[],v,C;t("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),p());c=null;do{r=!1;for(A=this;u.length;){try{C=u.shift(),C.scope.$eval(C.expression,C.locals)}catch(aa){g(aa)}c=null}a:do{if(l=A.$$watchers)for(m=l.length;m--;)try{if(a=
l[m])if((f=a.get(A))!==(h=a.last)&&!(a.eq?ma(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,c=a,a.last=a.eq?bb(f,null):f,a.fn(f,h===s?f:h,A),5>n&&(v=4-n,q[v]||(q[v]=[]),q[v].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){r=!1;break a}}catch(y){g(y)}if(!(l=A.$$watchersCount&&A.$$childHead||A!==this&&A.$$nextSibling))for(;A!==this&&!(l=A.$$nextSibling);)A=A.$parent}while(A=l);if((r||u.length)&&!n--)throw w.$$phase=null,d("infdig",
b,q);}while(r||u.length);for(w.$$phase=null;L.length;)try{L.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();A(this,-this.$$watchersCount);for(var b in this.$$listenerCount)v(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$$nextSibling=null;m(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||u.length||k.defer(function(){u.length&&w.$digest()});u.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){L.push(a)},$apply:function(a){try{t("$apply");
try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&aa.push(b);C()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,v(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h=
{name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};
if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new r,u=w.$$asyncQueue=[],L=w.$$postDigestQueue=[],aa=w.$$applyAsyncQueue=[];return w}]}function ge(){var a=/^\s*(https?|ftp|mailto|tel|file):/,
b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=wa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ag(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=ud(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Ma(a))return new RegExp("^"+
a.source+"$");throw ya("imatcher");}function vd(a){var b=[];y(a)&&n(a,function(a){b.push(ag(a))});return b}function pf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=vd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=vd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=
new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||q(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",
a);return new c(b)},getTrusted:function(d,e){if(null===e||q(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=wa(e.toString()),r,t,n=!1;r=0;for(t=a.length;r<t;r++)if(c(a[r],g)){n=!0;break}if(n)for(r=0,t=b.length;r<t;r++)if(c(b[r],g)){n=!1;break}if(n)return e;throw ya("insecurl",e.toString());}if(d===la.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
function of(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw ya("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(la,function(a,
b){var d=F(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function qf(){this.$get=["$window","$document",function(a,b){var d={},c=ea((/android (\d+)/.exec(F((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var r in k)if(l=h.exec(r)){g=l[0];g=g.substr(0,1).toUpperCase()+
g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=E(k.webkitTransition),m=E(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(q(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",
function(a,b,d,c){function e(f,g){e.totalPendingRequests++;E(f)&&a.get(f)||(f=c.getTrustedResourceUrl(f));var h=b.defaults&&b.defaults.transformResponse;I(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ha("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope",
"$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=fa.element(a).data("$binding");c&&n(c,function(c){d?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},
setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function uf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=x);var m=ra.call(arguments,3),r=y(l)&&!l,t=(r?c:d).defer(),n=t.promise,q;q=b.defer(function(){try{t.resolve(f.apply(null,m))}catch(b){t.reject(b),e(b)}finally{delete g[n.$$timeoutId]}r||a.$apply()},k);n.$$timeoutId=q;g[q]=t;return n}var g={};
f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function wa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function ed(a){a=
E(a)?wa(a):a;return a.protocol===wd.protocol&&a.host===wd.host}function vf(){this.$get=na(S)}function xd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),q(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function zf(){this.$get=xd}function Jc(a){function b(d,c){if(H(d)){var e={};n(d,function(a,c){e[c]=
b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",yd);b("date",zd);b("filter",bg);b("json",cg);b("limitTo",dg);b("lowercase",eg);b("number",Ad);b("orderBy",Bd);b("uppercase",fg)}function bg(){return function(a,b,d){if(!za(a)){if(null==a)return a;throw G("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=
gg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function gg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=ma:z(b)||(b=function(a,b){if(q(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(I(a))return a.some(function(a){return Ka(a,b,d,c)});
switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!q(e)&&(f="$"===h,!Ka(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function yd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){q(c)&&(c=b.CURRENCY_SYM);q(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Cd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,
e).replace(/\u00A4/g,c)}}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Cd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Cd(a,b,d,c,e){if(H(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;
q(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",r=0,t=b.lgSize,n=b.gSize;if(h.length>=t+n)for(r=h.length-t,l=0;l<r;l++)0===(r-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=r;l<h.length;l++)0===(h.length-l)%t&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Gb(a,b,d){var c="";
0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function ca(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=sb(b?"SHORT"+a:a);return c[f][e]}}function Dd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Ed(a){return function(b){var d=Dd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function zd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));h.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;h=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=hg.test(c)?ea(c):b(c));Q(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ig.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(b){k=jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function cg(){return function(a,b){q(b)&&(b=2);return db(a,b)}}function dg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!I(a)&&!E(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Bd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(z(b))h=b;else if(E(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!za(a))return a;I(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&
(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return na(a)}function Fd(a,b,d,c,e){var f=this,g=[];f.$error=
{};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Ib};Gd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};
f.$setPristine=function(){c.setClass(a,Wa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=F(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});
b.on("compositionend",function(){h=!1;k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",k);c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(da(d))return d;if(E(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(kg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,
mm:0,ss:0,sss:0},n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)&&!da(a)?d(a)||u:a}Hd(e,f,g,h);jb(e,f,g,h,k,l);var A=h&&h.$options&&h.$options.timezone,v;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,v),A&&(a=Pb(a,A)),a):u});h.$formatters.push(function(a){if(a&&
!da(a))throw lb("datefmt",a);if(r(a))return(v=a)&&A&&(v=Pb(v,A,!0)),m("date")(a,c,A);v=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!r(a)||q(s)||d(a)>=s};g.$observe("min",function(a){s=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!r(a)||q(p)||d(a)<=p};g.$observe("max",function(a){p=n(a);h.$validate()})}}}function Hd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
return c.badInput&&!c.typeMismatch?u:a})}function Id(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return I(a)?(n(a,function(a){b=b.concat(e(a))}),b):E(a)?a.split(" "):H(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||$(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!ma(a,m)){var q=e(m),n=c(l,q),l=c(q,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=ia(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==
a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Gd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Jd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Jd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){q(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Kd(c.$pending)&&(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Ld,!0),c.$valid=c.$invalid=u,d("",null)):(b(Ld,!1),c.$valid=Kd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Kd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var lg=/^\/(.+)\/([a-z]*)$/,
F=function(a){return E(a)?a.toLowerCase():a},qa=Object.prototype.hasOwnProperty,sb=function(a){return E(a)?a.toUpperCase():a},Ha,B,oa,ra=[].slice,Pf=[].splice,mg=[].push,sa=Object.prototype.toString,rc=Object.getPrototypeOf,Aa=G("ng"),fa=S.angular||(S.angular={}),Sb,nb=0;Ha=X.documentMode;x.$inject=[];Ya.$inject=[];var I=Array.isArray,Vd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,U=function(a){return E(a)?a.trim():a},ud=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!y(Ba.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},pb=function(){if(y(pb.name_))return pb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<
d;++b)if(c=Oa[b],a=X.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Rb,Na=3,fe={full:"1.4.8",major:1,minor:4,dot:8,codeName:"ice-manipulation"};N.expando="ng339";var gb=N.cache={},Ff=1;N._data=function(a){return this.cache[a[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=G("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,
Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Kf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Pa=N.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),N(S).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:mg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[F(a)]=a});var Rc={};n("input select option textarea button form details".split(" "),
function(a){Rc[a]=!0});var Zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:vb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1}},function(a,b){N[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return B.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Oc,injector:function(a){return Bb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=F(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||x).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
text:function(){function a(a,d){if(q(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(q(b)){if(a.multiple&&"select"===ta(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(q(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Pc},function(a,b){N.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Pc&&q(2==a.length&&a!==yb&&a!==Oc?
b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=q(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:vb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Kc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Hf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Jf),h(b,u,!0)):h(b)}},off:Nc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);n(new N(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
a.nodeType;if(1===d||11===d){b=new N(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new N(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=B(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new N(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;q(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:f,target:a},b.type&&(c=M(c,b)),b=ia(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){N.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)q(f)?(f=a(this[g],b,c,e),y(f)&&(f=B(f))):Mc(f,a(this[g],b,c,e));return y(f)?f:this};N.prototype.bind=N.prototype.on;
N.prototype.unbind=N.prototype.off});Sa.prototype={put:function(a,b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var yf=[function(){this.$get=[function(){return Sa}]}],Tc=/^[^\(]*\(\s*([^\)]*)\)/m,ng=/,/,og=/^\s*(_?)(\S+?)\1\s*$/,Sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=G("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&
d||(d=a.name||Lf(a)),Da("strictdi",d);b=a.toString().replace(Sc,"");b=b.match(Tc);n(b[1].split(ng),function(a){a.replace(og,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Md=G("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Te=function(){var a=
new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Mf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:x,on:x,off:x,pin:x,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Re=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ea(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ea(h))},leave:function(b,c){return a.push(b,"leave",Ea(c),function(){b.remove()})},addClass:function(b,c,g){g=Ea(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ea(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ea(h);h.addClass=hb(h.addClass,
c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ea(k);k.from=k.from?M(k.from,c):c;k.to=k.to?M(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
null);var g,h=new d;return{start:f,end:f}}}]},ha=G("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Qf=G("$controller"),Uc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},$c="application/json",ac={"Content-Type":$c+";charset=utf-8"},Sf=/^\[|^\{(?!\{)/,Tf={"[":/]$/,"{":/}$/},Rf=/^\)\]\}',?\n/,pg=G("$http"),dd=function(a){return function(){throw pg("legacy",
a);}},Ja=fa.$interpolateMinErr=G("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var qg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Vf={http:80,https:443,ftp:21},Db=G("$location"),rg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(q(a))return this.$$url;var b=qg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Eb("$$protocol"),
host:Eb("$$host"),port:Eb("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(H(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Db("isrcharg");break;default:q(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:id("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([hd,dc,cc],function(a){a.prototype=Object.create(rg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Db("nostate");this.$$state=q(b)?null:b;return this}});var ba=G("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,Yf=Function.prototype.bind,Lb=$();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var sg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=sg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal=
"Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,
body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,
operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},
throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:u},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};W(c,d.$filter);var e="",f;this.stage="assign";if(f=pd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=nd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,xa,kd,jd,ld,Zf,md,a);this.state=this.stage=u;e.literal=qd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
d,c,e,f){var g,h,k=this,l,m;c=c||x;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!od(a.left))throw ba("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;W(c,d.$filter);var e,f;if(e=pd(c))f=this.recurse(e);e=nd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=qd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var r=[],n=0;n<g.length;++n)r.push(g[n](a,c,d,f));a=e.apply(u,r,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,m){var r=e(a,c,d,m),n;if(null!=r.value){xa(r.context,f.expression);kd(r.value,f.expression);n=[];for(var q=0;q<g.length;++q)n.push(xa(g[q](a,c,d,m),f.expression));n=xa(r.value.apply(r.context,n),f.expression)}return b?{value:n}:n};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);xa(n.value,f.expression);ld(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=md(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&xa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=jd(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],xa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Fb(b))&&xa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,b):new rd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};$();$();var $f=Object.prototype.valueOf,ya=G("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),Y=X.createElement("a"),wd=wa(S.location.href);
xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var ic=".",jg={yyyy:ca("FullYear",4),yy:ca("FullYear",2,0,!0),y:ca("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,b){return 12>
a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ig=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,hg=/^\-?\d+$/;zd.$inject=["$locale"];var eg=na(F),fg=na(sb);Bd.$inject=["$parse"];var he=na({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===sa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});n(Zc,function(a,b){tb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(lg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=va("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Ib={$addControl:x,$$renameControl:function(a,b){a.$name=b},$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x,$setSubmitted:x};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||x}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Fd,compile:function(d,f){d.addClass(Wa).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):x;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,u),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
s(a,u);M(n,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),kg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,tg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,ug=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,vg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,
Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,b){if(da(a))return a;if(E(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Dd(c),e=7*(e-1);b&&(d=b.getHours(),f=
b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hd(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:vg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
q(g)||a>=g};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||q(h)||a<=h};d.$observe("max",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||tg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);
c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||ug.test(d)}},radio:function(a,b,d,c){q(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Id(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Id(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:x,button:x,submit:x,reset:x,file:x},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Sd[F(g.type)]||Sd.text)(e,f,g,h[0],b,a,d,c)}}}}],wg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,
b){return wg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=q(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=q(a)?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Me=na({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=La({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},xg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var s=0,v,u,p,C=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
b()},u=++s;f?(a(f,!0).then(function(a){if(u===s){var b=c.$new();n.template=a;a=q(b,function(a){C();d.enter(a,null,e).then(m)});v=b;p=a;v.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){u===s&&(C(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(C(),n.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,X).childNodes)(b,function(a){d.append(a)},
{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],ze=La({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!q(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){return I(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Jd="ng-invalid",Wa="ng-pristine",Jb="ng-dirty",Ld="ng-pending",lb=G("ngModel"),yg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Ib;var m=e(d.ngModel),r=m.assign,t=m,s=r,v=null,B,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");t=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!m.assign)throw lb("nonassign",d.ngModel,ua(c));};this.$render=x;this.$isEmpty=
function(a){return q(a)||""===a||null===a||a!==a};var C=0;Gd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,Jb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=
!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=
!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw lb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},x):g(!0)}function f(a,b){h===C&&p.$setValidity(a,b)}function g(a){h===C&&c(a)}C++;var h=C;(function(){var a=p.$$parserName||"parse";if(q(B))f(a,
null);else return B||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(B=q(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),
q(b)){B=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=t(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=
a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=t(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;B=u;for(var c=p.$formatters,
d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,x))}return b})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:yg,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,
a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],zg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?
(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(zg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=La({terminal:!0,priority:1E3}),Ag=G("ngOptions"),Bg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,
b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&za(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Bg);if(!m)throw Ag("iexp",a,ua(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];c=b(m[2]?m[1]:n);var v=a&&b(a)||c,u=s&&b(s),p=s?function(a,b){return u(d,b)}:function(a){return Ca(a)},C=function(a,b){return p(a,z(a,b))},w=b(m[2]||
m[1]),y=b(m[3]||""),B=b(m[4]||""),x=b(m[8]),D={},z=q?function(a,b){D[q]=b;D[n]=a;return D}:function(a){D[n]=a;return D};return{trackBy:s,getTrackByValue:C,getWatchables:b(x,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=z(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=B(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=x(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],r=z(c[n],n),q=v(d,r),n=p(q,r),t=w(d,
r),u=y(d,r),r=B(d,r),q=new e(n,q,t,u,r);a.push(q);b[n]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[C(a)]},getViewValueFromOption:function(a){return s?fa.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=x},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&F(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function r(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=z&&z[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function s(){var a=D&&u.readValue();D=E.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);D.items.forEach(function(a){var f,h;a.group?
(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){r(b[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var f=u.readValue();(E.trackBy?ma(a,f):a===f)||(v.$setViewValue(f),v.$render())}}var v=k[1];if(v){var u=k[0];k=
h.multiple;for(var p,C=0,w=g.children(),y=w.length;C<y;C++)if(""===w[C].value){p=w.eq(C);break}var x=!!p,z=B(c.cloneNode(!1));z.val("?");var D,E=d(h.ngOptions,g,b);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=D.selectValueMap[a])&&!a.disabled&&b.push(D.getViewValueFromOption(a))});
return b},E.trackBy&&b.$watchCollection(function(){if(I(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var b=D.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(z.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(z.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(z),
g.val("?"),z.prop("selected",!0),z.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),z.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&b.$watch(function(){return E.getTrackByValue(v.$viewValue)},function(){v.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=B(c.cloneNode(!1));s();b.$watchCollection(E.getWatchables,s)}}}}}],Be=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,s=f.$eval(m)||{},u={},v=b.startSymbol(),y=b.endSymbol(),p=v+l+"-"+r+y,C=fa.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+F(c[2]),s[c]=g.attr(h.$attr[b]))});n(s,function(a,d){u[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-r));c===w||e&&Q(w)&&isNaN(w)||(C(),e=u[c],q(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
m),C=x,k()):C=f.$watch(e,k),w=c)})}}}],Ce=["$parse","$animate",function(a,b){var d=G("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var l=k[1],m=k[2],r=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var s=k[3]||k[1],v=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var x,p,y,w,z={$id:Ca};q?x=a(q):(y=function(a,b){return Ca(b)},w=function(a){return a});return function(a,e,f,k,l){x&&(p=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=
d;return x(a,z)});var q=$();a.$watchCollection(m,function(f){var k,m,t=e[0],x,z=$(),D,E,H,F,I,G,J;r&&(a[r]=f);if(za(f))I=f,m=p||y;else for(J in m=p||w,I=[],f)qa.call(f,J)&&"$"!==J.charAt(0)&&I.push(J);D=I.length;J=Array(D);for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],F=m(E,H,k),q[F])G=q[F],delete q[F],z[F]=G,J[k]=G;else{if(z[F])throw n(J,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,H);J[k]={id:F,scope:u,clone:u};z[F]=!0}for(x in q){G=q[x];F=rb(G.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
m;k++)F[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],G=J[k],G.scope){x=t;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);G.clone[0]!=x&&b.move(rb(G.clone),null,B(t));t=G.clone[G.clone.length-1];c(G.scope,k,s,H,v,E,D)}else l(function(a,d){G.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,B(t));t=e;G.clone=a;z[G.id]=G;c(G.scope,k,s,H,v,E,D)});q=z})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=La(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var q=rb(g[c].clone);k[c].$destroy();(h[c]=a.leave(q)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Ge=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),He=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Je=La({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw G("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Cg={$setViewValue:x,$render:x},Dg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Sa;c.ngModelCtrl=Cg;c.unknownOption=B(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=x});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Ra(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=
!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],ke=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Dg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==
e.$viewValue||ma(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],le=na({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
q(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};S.angular.bootstrap?
console.log("WARNING: Tried to load angular more than once."):(ce(),ee(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",
negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(X).ready(function(){Zd(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
/*! RESOURCE: /scripts/angular_1.4.8/angular-sanitize.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
/*! RESOURCE: /scripts/angular_1.4.8/angular-animate.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,u,Sa){'use strict';function wa(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function xa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ia(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function T(a,b,c){var d="";a=X(a)?a:a&&I(a)&&a.length?a.split(/\s+/):[];q(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Ja(a){if(a instanceof L)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return L(ma(a))}if(1===a.nodeType)return L(a)}function ma(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ka(a,b,c){q(b,function(b){a.addClass(b,c)})}function La(a,b,c){q(b,function(b){a.removeClass(b,c)})}function N(a){return function(b,c){c.addClass&&(Ka(a,b,c.addClass),c.addClass=null);c.removeClass&&(La(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
M;a.domOperation=function(){a.$$domOperationFired=!0;b();b=M};a.$$prepared=!0}return a}function da(a,b){ya(a,b);za(a,b)}function ya(a,b){b.from&&(a.css(b.from),b.from=null)}function za(a,b){b.to&&(a.css(b.to),b.to=null)}function Q(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ma(a.attr("class"),d,e);c.preparationClasses&&(b.preparationClasses=Y(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==M?b.domOperation:
null;Aa(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ma(a,b,c){function d(a){I(a)&&(a=a.split(" "));var b={};q(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);q(b,function(a,b){e[b]=1});c=d(c);q(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};q(e,function(b,c){var e,d;1===b?(e="addClass",d=!a[c]):-1===b&&(e="removeClass",d=a[c]);d&&(s[e].length&&(s[e]+=" "),s[e]+=c)});
return s}function B(a){return a instanceof u.element?a[0]:a}function Na(a,b,c){var d="";b&&(d=T(b,"ng-",!0));c.addClass&&(d=Y(d,T(c.addClass,"-add")));c.removeClass&&(d=Y(d,T(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ja(a,b){var c=b?"-"+b+"s":"";ea(a,[fa,c]);return[fa,c]}function na(a,b){var c=b?"paused":"",d=U+"PlayState";ea(a,[d,c]);return[d,c]}function ea(a,b){a.style[b[0]]=b[1]}function Y(a,b){return a?b?a+" "+b:a:b}function Ba(a,b,c){var d=Object.create(null),
e=a.getComputedStyle(b)||{};q(c,function(a,b){var c=e[a];if(c){var v=c.charAt(0);if("-"===v||"+"===v||0<=v)c=Oa(c);0===c&&(c=null);d[b]=c}});return d}function Oa(a){var b=0;a=a.split(/\s*,\s*/);q(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function oa(a){return 0===a||null!=a}function Ca(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Da(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ea(a,b,c){q(c,function(c){a[c]=V(a[c])?a[c]:b.style.getPropertyValue(c)})}var M=u.noop,Aa=u.extend,L=u.element,q=u.forEach,X=u.isArray,I=u.isString,pa=u.isObject,qa=u.isUndefined,V=u.isDefined,Fa=u.isFunction,ra=u.isElement,O,sa,U,ta;qa(H.ontransitionend)&&V(H.onwebkittransitionend)?(O="WebkitTransition",sa="webkitTransitionEnd transitionend"):
(O="transition",sa="transitionend");qa(H.onanimationend)&&V(H.onwebkitanimationend)?(U="WebkitAnimation",ta="webkitAnimationEnd animationend"):(U="animation",ta="animationend");var ka=U+"Delay",ua=U+"Duration",fa=O+"Delay";H=O+"Duration";var Pa={transitionDuration:H,transitionDelay:fa,transitionProperty:O+"Property",animationDuration:ua,animationDelay:ka,animationIterationCount:U+"IterationCount"},Qa={transitionDuration:H,transitionDelay:fa,animationDuration:ua,animationDelay:ka};u.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;u.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),h=0;h<b.length;h++)b[h]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=
null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$sniffer","$$animateAsyncRun",function(a,b,c){function d(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=c();this._state=0}d.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};d.all=function(a,b){function c(h){v=v&&h;++d===a.length&&b(v)}var d=0,v=!0;q(a,function(a){a.done(c)})};d.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?
a():this._doneCallbacks.push(a)},progress:M,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();
this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return d}]).factory("$$animateAsyncRun",["$$rAF",function(a){function b(b){c.push(b);1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=
!1;b(function(){a=!0});return function(c){a?c():b(c)}}}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,q){return d[a].some(function(a){return a(b,c,q)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==
c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",
"$$forceReflow",function(d,s,h,g,v,r,$,u,R,C){function D(){var a=!1;return function(b){a?b():s.$$postDigest(function(){a=!0;b()})}}function K(a,b,c){var f=B(b),d=B(a),n=[];(a=t[c])&&q(a,function(a){a.node.contains(f)?n.push(a.callback):"leave"===c&&a.node.contains(d)&&n.push(a.callback)});return n}function l(a,f,k){function n(b,c,f,t){R(function(){var b=K(v,a,c);b.length&&d(function(){q(b,function(b){b(a,f,t)})})});b.progress(c,f,t)}function t(b){var c=a,f=k;f.preparationClasses&&(c.removeClass(f.preparationClasses),
f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);Ha(a,k);da(a,k);k.domOperation();h.complete(!b)}var A,v;if(a=Ja(a))A=B(a),v=a.parent();k=ia(k);var h=new $,R=D();X(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!I(k.addClass)&&(k.addClass=null);X(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!I(k.removeClass)&&(k.removeClass=null);k.from&&!pa(k.from)&&(k.from=null);k.to&&!pa(k.to)&&(k.to=null);if(!A)return t(),h;
var z=[A.className,k.addClass,k.removeClass].join(" ");if(!Ra(z))return t(),h;var l=0<=["enter","move","leave"].indexOf(f),g=!G||F.get(A),z=!g&&m.get(A)||{},C=!!z.state;g||C&&1==z.state||(g=!la(a,v,f));if(g)return t(),h;l&&y(a);g={structural:l,element:a,event:f,close:t,options:k,runner:h};if(C){if(b("skip",a,g,z)){if(2===z.state)return t(),h;Q(a,z.options,k);return z.runner}if(b("cancel",a,g,z))if(2===z.state)z.runner.end();else if(z.structural)z.close();else return Q(a,z.options,g.options),z.runner;
else if(b("join",a,g,z))if(2===z.state)Q(a,k,{});else return Na(a,l?f:null,k),f=g.event=z.event,k=Q(a,z.options,g.options),z.runner}else Q(a,k,{});(C=g.structural)||(C="animate"===g.event&&0<Object.keys(g.options.to||{}).length||c(g.options));if(!C)return t(),w(a),h;var u=(z.counter||0)+1;g.counter=u;x(a,1,g);s.$$postDigest(function(){var b=m.get(A),d=!b,b=b||{},K=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||c(b.options));if(d||b.counter!==u||!K){d&&(Ha(a,k),da(a,k));if(d||l&&b.event!==
f)k.domOperation(),h.end();K||w(a)}else f=!b.structural&&c(b.options,!0)?"setClass":b.event,x(a,2),b=r(a,f,b.options),b.done(function(b){t(!b);(b=m.get(A))&&b.counter===u&&w(B(a));n(h,f,"close",{})}),h.setHost(b),n(h,f,"start",{})});return h}function y(a){a=B(a).querySelectorAll("[data-ng-animate]");q(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function w(a){a=B(a);a.removeAttribute("data-ng-animate");m.remove(a)}
function f(a,b){return B(a)===B(b)}function la(a,b,c){c=L(g[0].body);var d=f(a,c)||"HTML"===a[0].nodeName,t=f(a,h),n=!1,w;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){t||(t=f(b,h));a=b[0];if(1!==a.nodeType)break;var x=m.get(a)||{};n||(n=x.structural||F.get(a));if(qa(w)||!0===w)a=b.data("$$ngAnimateChildren"),V(a)&&(w=a);if(n&&!1===w)break;t||(t=f(b,h),t||(a=b.data("$ngAnimatePin"))&&(b=a));d||(d=f(b,c));b=b.parent()}return(!n||w)&&t&&d}function x(a,b,c){c=c||{};c.state=b;a=B(a);a.setAttribute("data-ng-animate",
b);c=(b=m.get(a))?Aa(b,c):c;m.put(a,c)}var m=new v,F=new v,G=null,A=s.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(A(),s.$$postDigest(function(){s.$$postDigest(function(){null===G&&(G=!0)})}))}),t={},n=a.classNameFilter(),Ra=n?function(a){return n.test(a)}:function(){return!0},Ha=N(R);return{on:function(a,b,c){b=ma(b);t[a]=t[a]||[];t[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,b,c){var d=ma(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===
c))})}var d=t[a];d&&(t[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){wa(ra(a),"element","not an element");wa(ra(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return l(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!G;else if(ra(a)){var f=B(a),d=F.get(f);1===c?b=!d:(b=!!b)?d&&F.remove(f):F.put(f,!0)}else b=G=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}
var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,e,s,h,g,v){function r(a){function b(a){if(a.processed)return a;a.processed=!0;var f=a.domNode,d=f.parentNode;e.put(f,a);for(var x;d;){if(x=e.get(d)){x.processed||(x=b(x));break}d=d.parentNode}(x||c).children.push(a);return a}var c={children:[]},d,e=new g;for(d=0;d<a.length;d++){var h=a[d];e.put(h.domNode,a[d]={domNode:h.domNode,fn:h.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);
return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var m=0,e=[];for(d=0;d<c.length;d++){var h=c[d];0>=a&&(a=m,m=0,b.push(e),e=[]);e.push(h.fn);h.children.forEach(function(a){m++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var $=[],u=N(a);return function(g,C,D){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];q(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}
function l(a){var b=[],c={};q(a,function(a,f){var d=B(a.element),t=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var m=t?"to":"from";q(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][m]={animationID:f,element:L(a)}})}else b.push(a)});var f={},d={};q(c,function(c,m){var w=c.from,e=c.to;if(w&&e){var h=a[w.animationID],g=a[e.animationID],x=w.animationID.toString();if(!d[x]){var A=d[x]={structural:!0,beforeStart:function(){h.beforeStart();g.beforeStart()},
close:function(){h.close();g.close()},classes:y(h.classes,g.classes),from:h,to:g,anchors:[]};A.classes.length?b.push(A):(b.push(h),b.push(g))}d[x].anchors.push({out:w.element,"in":e.element})}else w=w?w.animationID:e.animationID,e=w.toString(),f[e]||(f[e]=!0,b.push(a[w]))});return b}function y(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var m=0;m<b.length;m++)if(d===b[m]){c.push(d);break}}return c.join(" ")}function w(a){for(var b=
c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}function f(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function la(){var a=b(g);!a||"leave"===C&&D.$$domOperationFired||a.end()}function x(b){g.off("$destroy",la);g.removeData("$$animationRunner");u(g,D);da(g,D);D.domOperation();A&&a.removeClass(g,A);g.removeClass("ng-animate");F.complete(!b)}D=ia(D);var m=0<=["enter","move","leave"].indexOf(C),F=new h({end:function(){x()},
cancel:function(){x(!0)}});if(!c.length)return x(),F;g.data("$$animationRunner",F);var G=xa(g.attr("class"),xa(D.addClass,D.removeClass)),A=D.tempClasses;A&&(G+=" "+A,D.tempClasses=null);$.push({element:g,classes:G,event:C,structural:m,options:D,beforeStart:function(){g.addClass("ng-animate");A&&a.addClass(g,A)},close:x});g.on("$destroy",la);if(1<$.length)return F;e.$$postDigest(function(){var a=[];q($,function(c){b(c.element)?a.push(c):c.close()});$.length=0;var c=l(a),d=[];q(c,function(a){d.push({domNode:B(a.from?
a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var m=w(a);m&&(c=m.start)}c?(c=c(),c.done(function(a){d(!a)}),f(a,c)):d()}})});v(r(d))});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Da(),c=Da();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$animate",function(a,e,s,h,g,v,r,u){function Ga(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||
(c.$$ngAnimateParentKey=++l))+"-"+a.getAttribute("class")+"-"+b}function R(w,f,h,g){var m;0<b.count(h)&&(m=c.get(h),m||(f=T(f,"-stagger"),e.addClass(w,f),m=Ba(a,w,g),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(w,f),c.put(h,m)));return m||{}}function C(a){y.push(a);r.waitUntilQuiet(function(){b.flush();c.flush();for(var a=g(),d=0;d<y.length;d++)y[d](a);y.length=0})}function D(c,f,e){f=b.get(e);f||(f=Ba(a,c,Pa),"infinite"===
f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var K=N(e),l=0,y=[];return function(a,c){function d(){m()}function g(){m(!0)}function m(b){if(!(ga||va&&k)){ga=!0;k=!1;c.$$skipPreparationClasses||e.removeClass(a,Z);e.removeClass(a,Y);na(n,!1);ja(n,!1);q(y,function(a){n.style[a[0]]=""});K(a,c);da(a,c);Object.keys(t).length&&
q(t,function(a,b){a?n.style.setProperty(b,a):n.style.removeProperty(b)});if(c.onDone)c.onDone();H&&H.complete(!b)}}function F(a){p.blockTransition&&ja(n,a);p.blockKeyframeAnimation&&na(n,!!a)}function G(){H=new s({end:d,cancel:g});C(M);m();return{$$willAnimate:!1,start:function(){return H},end:d}}function A(){function b(){if(!ga){F(!1);q(y,function(a){n.style[a[0]]=a[1]});K(a,c);e.addClass(a,Y);if(p.recalculateTimingStyles){ha=n.className+" "+Z;aa=Ga(n,ha);E=D(n,ha,aa);W=E.maxDelay;I=Math.max(W,0);
J=E.maxDuration;if(0===J){m();return}p.hasTransitions=0<E.transitionDuration;p.hasAnimations=0<E.animationDuration}p.applyAnimationDelay&&(W="boolean"!==typeof c.delay&&oa(c.delay)?parseFloat(c.delay):W,I=Math.max(W,0),E.animationDelay=W,ca=[ka,W+"s"],y.push(ca),n.style[ca[0]]=ca[1]);N=1E3*I;z=1E3*J;if(c.easing){var k,l=c.easing;p.hasTransitions&&(k=O+"TimingFunction",y.push([k,l]),n.style[k]=l);p.hasAnimations&&(k=U+"TimingFunction",y.push([k,l]),n.style[k]=l)}E.transitionDuration&&x.push(sa);E.animationDuration&&
x.push(ta);A=Date.now();var v=N+1.5*z;k=A+v;var l=a.data("$$animateCss")||[],r=!0;if(l.length){var G=l[0];(r=k>G.expectedEndTime)?h.cancel(G.timer):l.push(m)}r&&(v=h(d,v,!1),l[0]={timer:v,expectedEndTime:k},l.push(m),a.data("$$animateCss",l));a.on(x.join(" "),g);c.to&&(c.cleanupStyles&&Ea(t,n,Object.keys(c.to)),za(a,c))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}function g(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||
b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-A,0)>=N&&b>=J&&(va=!0,m())}if(!ga)if(n.parentNode){var A,x=[],l=function(a){if(va)k&&a&&(k=!1,m());else if(k=!a,E.animationDuration)if(a=na(n,k),k)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},v=0<V&&(E.transitionDuration&&0===S.transitionDuration||E.animationDuration&&0===S.animationDuration)&&Math.max(S.animationDelay,S.transitionDelay);v?h(b,Math.floor(v*V*1E3),!1):b();L.resume=function(){l(!0)};L.pause=function(){l(!1)}}else m()}
var t={},n=B(a);if(!n||!n.parentNode||!u.enabled())return G();c=ia(c);var y=[],r=a.attr("class"),l=Ia(c),ga,k,va,H,L,I,N,J,z;if(0===c.duration||!v.animations&&!v.transitions)return G();var ba=c.event&&X(c.event)?c.event.join(" "):c.event,Q="",P="";ba&&c.structural?Q=T(ba,"ng-",!0):ba&&(Q=ba);c.addClass&&(P+=T(c.addClass,"-add"));c.removeClass&&(P.length&&(P+=" "),P+=T(c.removeClass,"-remove"));c.applyClassesEarly&&P.length&&K(a,c);var Z=[Q,P].join(" ").trim(),ha=r+" "+Z,Y=T(Z,"-active"),r=l.to&&0<
Object.keys(l.to).length;if(!(0<(c.keyframeStyle||"").length||r||Z))return G();var aa,S;0<c.stagger?(l=parseFloat(c.stagger),S={transitionDelay:l,animationDelay:l,transitionDuration:0,animationDuration:0}):(aa=Ga(n,ha),S=R(n,Z,aa,Qa));c.$$skipPreparationClasses||e.addClass(a,Z);c.transitionStyle&&(l=[O,c.transitionStyle],ea(n,l),y.push(l));0<=c.duration&&(l=0<n.style[O].length,l=Ca(c.duration,l),ea(n,l),y.push(l));c.keyframeStyle&&(l=[U,c.keyframeStyle],ea(n,l),y.push(l));var V=S?0<=c.staggerIndex?
c.staggerIndex:b.count(aa):0;(ba=0===V)&&!c.skipBlocking&&ja(n,9999);var E=D(n,ha,aa),W=E.maxDelay;I=Math.max(W,0);J=E.maxDuration;var p={};p.hasTransitions=0<E.transitionDuration;p.hasAnimations=0<E.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"==E.transitionProperty;p.applyTransitionDuration=r&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=c.duration&&p.hasAnimations;p.applyTransitionDelay=oa(c.delay)&&(p.applyTransitionDuration||
p.hasTransitions);p.applyAnimationDelay=oa(c.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<P.length;if(p.applyTransitionDuration||p.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,p.applyTransitionDuration&&(p.hasTransitions=!0,E.transitionDuration=J,l=0<n.style[O+"Property"].length,y.push(Ca(J,l))),p.applyAnimationDuration&&(p.hasAnimations=!0,E.animationDuration=J,y.push([ua,J+"s"]));if(0===J&&!p.recalculateTimingStyles)return G();if(null!=c.delay){var ca=parseFloat(c.delay);
p.applyTransitionDelay&&y.push([fa,ca+"s"]);p.applyAnimationDelay&&y.push([ka,ca+"s"])}null==c.duration&&0<E.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||ba);N=1E3*I;z=1E3*J;c.skipBlocking||(p.blockTransition=0<E.transitionDuration,p.blockKeyframeAnimation=0<E.animationDuration&&0<S.animationDelay&&0===S.animationDuration);c.from&&(c.cleanupStyles&&Ea(t,n,Object.keys(c.from)),ya(a,c));p.blockTransition||p.blockKeyframeAnimation?F(J):c.skipBlocking||ja(n,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!ga)return L={end:d,cancel:g,resume:null,pause:null},H=new s(L),C(A),H}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,s,h,g){function v(a){return a.replace(/\bng-\S+\b/g,"")}function r(a,b){I(a)&&(a=a.split(" "));I(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function u(c,e,g){function h(a){var b={},c=B(a).getBoundingClientRect();q(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=C.scrollTop;break;case "left":d+=C.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function f(){var c=v(g.attr("class")||""),d=r(c,m),c=r(m,c),d=a(x,{to:h(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function s(){x.remove();e.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var x=
L(B(e).cloneNode(!0)),m=v(x.attr("class")||"");e.addClass("ng-animate-shim");g.addClass("ng-animate-shim");x.addClass("ng-anchor");D.append(x);var F;c=function(){var c=a(x,{addClass:"ng-anchor-out",delay:!0,from:h(e)});return c.$$willAnimate?c:null}();if(!c&&(F=f(),!F))return s();var G=c||F;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!F&&(F=f()))return c=F.start(),c.done(function(){c=null;s();b.complete()}),c;s();b.complete()});return b=new d({end:a,
cancel:a})}}}function H(a,b,c,e){var f=R(a,M),g=R(b,M),h=[];q(e,function(a){(a=u(c,a.out,a["in"]))&&h.push(a)});if(f||g||0!==h.length)return{start:function(){function a(){q(b,function(a){a.end()})}var b=[];f&&b.push(f.start());g&&b.push(g.start());q(h,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function R(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=Y(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!s.animations&&!s.transitions)return M;var C=g[0].body;c=B(e);var D=L(c.parentNode&&11===c.parentNode.nodeType||C.contains(c)?c:C);N(h);return function(a){return a.from&&a.to?H(a.from,a.to,a.classes,a.anchors):R(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=X(c)?c:c.split(" ");
for(var d=[],e={},r=0;r<c.length;r++){var q=c[r],s=a.$$registeredAnimations[q];s&&!e[q]&&(d.push(b.get(s)),e[q]=!0)}return d}var s=N(d);return function(a,b,d,r){function u(){r.domOperation();s(a,r)}function H(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,D,K,f];break;case "addClass":b=[b,D,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Fa(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Fa(a))return a;return M}
function B(a,b,d,e,f){var g=[];q(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||M)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=H(h,a,b,d,function(a){k(!1===a)});return e})});return g}function C(a,b,d,e,f){var g=B(a,b,d,e,f);if(0===g.length){var h,l;"beforeSetClass"===f?(h=B(a,"removeClass",d,e,"beforeRemoveClass"),l=B(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=B(a,"removeClass",d,e,"removeClass"),l=B(a,"addClass",
d,e,"addClass"));h&&(g=g.concat(h));l&&(g=g.concat(l))}if(0!==g.length)return function(a){var b=[];g.length&&q(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){q(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&pa(d)&&(r=d,d=null);r=ia(r);d||(d=a.attr("class")||"",r.addClass&&(d+=" "+r.addClass),r.removeClass&&(d+=" "+r.removeClass));var D=r.addClass,K=r.removeClass,l=e(d),y,w;if(l.length){var f,I;"leave"==b?(I="leave",f="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+
b.substr(1),f=b);"enter"!==b&&"move"!==b&&(y=C(a,b,r,l,I));w=C(a,b,r,l,f)}if(y||w)return{start:function(){function b(c){f=!0;u();da(a,r);g.complete(c)}var d,e=[];y&&e.push(function(a){d=y(a)});e.length?e.push(function(a){u();a(!0)}):u();w&&e.push(function(a){d=w(a)});var f=!1,g=new c({end:function(){f||((d||M)(void 0),b(void 0))},cancel:function(){f||((d||M)(!0),b(!0))}});c.chain(e,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");
this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),h=d(a.to);if(b||h)return{start:function(){function a(){return function(){q(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());h&&d.push(h.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
/*! RESOURCE: /scripts/angular_1.4.8/angular-resource.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,f,C){'use strict';function D(t,e){e=e||{};f.forEach(e,function(f,k){delete e[k]});for(var k in t)!t.hasOwnProperty(k)||"$"===k.charAt(0)&&"$"===k.charAt(1)||(e[k]=t[k]);return e}var y=f.$$minErr("$resource"),B=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;f.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,e=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(k,F){function w(f,g){this.template=f;this.defaults=r({},e.defaults,g);this.urlParams={}}function z(l,g,s,h){function c(a,q){var c={};q=r({},g,q);u(q,function(b,q){x(b)&&(b=b());var m;if(b&&b.charAt&&"@"==b.charAt(0)){m=a;var d=b.substr(1);if(null==d||""===d||"hasOwnProperty"===d||!B.test("."+d))throw y("badmember",d);for(var d=d.split("."),n=0,g=d.length;n<g&&f.isDefined(m);n++){var e=d[n];m=null!==m?m[e]:C}}else m=b;c[q]=m});return c}function G(a){return a.resource}
function d(a){D(a||{},this)}var t=new w(l,h);s=r({},e.defaults.actions,s);d.prototype.toJSON=function(){var a=r({},this);delete a.$promise;delete a.$resolved;return a};u(s,function(a,q){var g=/^(POST|PUT|PATCH)$/i.test(a.method);d[q]=function(b,A,m,e){var n={},h,l,s;switch(arguments.length){case 4:s=e,l=m;case 3:case 2:if(x(A)){if(x(b)){l=b;s=A;break}l=A;s=m}else{n=b;h=A;l=m;break}case 1:x(b)?l=b:g?h=b:n=b;break;case 0:break;default:throw y("badargs",arguments.length);}var w=this instanceof d,p=w?
h:a.isArray?[]:new d(h),v={},z=a.interceptor&&a.interceptor.response||G,B=a.interceptor&&a.interceptor.responseError||C;u(a,function(a,b){switch(b){default:v[b]=H(a);break;case "params":case "isArray":case "interceptor":break;case "timeout":v[b]=a}});g&&(v.data=h);t.setUrlParams(v,r({},c(h,a.params||{}),n),a.url);n=k(v).then(function(b){var c=b.data,m=p.$promise;if(c){if(f.isArray(c)!==!!a.isArray)throw y("badcfg",q,a.isArray?"array":"object",f.isArray(c)?"array":"object",v.method,v.url);a.isArray?
(p.length=0,u(c,function(b){"object"===typeof b?p.push(new d(b)):p.push(b)})):(D(c,p),p.$promise=m)}p.$resolved=!0;b.resource=p;return b},function(b){p.$resolved=!0;(s||E)(b);return F.reject(b)});n=n.then(function(b){var a=z(b);(l||E)(a,b.headers);return a},B);return w?n:(p.$promise=n,p.$resolved=!1,p)};d.prototype["$"+q]=function(b,a,c){x(b)&&(c=a,a=b,b={});b=d[q].call(this,b,this,a,c);return b.$promise||b}});d.bind=function(a){return z(l,r({},g,a),s)};return d}var E=f.noop,u=f.forEach,r=f.extend,
H=f.copy,x=f.isFunction;w.prototype={setUrlParams:function(l,g,e){var h=this,c=e||h.template,k,d,r="",a=h.urlParams={};u(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw y("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]=!0)});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){r=a;return""});g=g||{};u(h.urlParams,function(a,e){k=g.hasOwnProperty(e)?g[e]:h.defaults[e];f.isDefined(k)&&null!==k?(d=encodeURIComponent(k).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(b,a){return d+a})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});h.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");l.url=r+c.replace(/\/\\\./,"/.");u(g,function(a,c){h.urlParams[c]||(l.params=l.params||{},l.params[c]=
a)})}};return z}]})})(window,window.angular);
/*! RESOURCE: /scripts/angular_1.4.8/angular-route.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
/*! RESOURCE: /scripts/angular_1.4.8/angular-touch.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,s,y){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(c,e){return function(l,m,g){function h(a){if(!b)return!1;var d=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return r&&75>d&&0<a&&30<a&&.3>d/a}var d=c(g[f]),b,r,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,d){b=a;r=!0},cancel:function(a){r=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);d(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
[function(){function f(c){c=c.originalEvent||c;var e=c.touches&&c.touches.length?c.touches:[c];c=c.changedTouches&&c.changedTouches[0]||e[0];return{x:c.clientX,y:c.clientY}}function k(c,e){var l=[];s.forEach(c,function(c){(c=p[c][e])&&l.push(c)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(c,e,l){var m,g,h,d,b=!1;l=l||["mouse","touch"];c.on(k(l,"start"),function(a){h=
f(a);b=!0;g=m=0;d=h;e.start&&e.start(h,a)});var r=k(l,"cancel");if(r)c.on(r,function(a){b=!1;e.cancel&&e.cancel(a)});c.on(k(l,"move"),function(a){if(b&&h){var c=f(a);m+=Math.abs(c.x-d.x);g+=Math.abs(c.y-d.y);d=c;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(c,a)))}});c.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
["$parse","$timeout","$rootElement",function(f,k,p){function c(d,b,c){for(var a=0;a<d.length;a+=2){var e=d[a+1],g=c;if(25>Math.abs(d[a]-b)&&25>Math.abs(e-g))return d.splice(a,a+2),!0}return!1}function e(d){if(!(2500<Date.now()-m)){var b=d.touches&&d.touches.length?d.touches:[d],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=d.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);c(g,e,b)||(d.stopPropagation(),d.preventDefault(),d.target&&
d.target.blur&&d.target.blur())}}}function l(d){d=d.touches&&d.touches.length?d.touches:[d];var b=d[0].clientX,c=d[0].clientY;g.push(b,c);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==c){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(d,b,h){var a=f(h.ngClick),k=!1,q,n,t,v;b.on("touchstart",function(a){k=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);b.addClass("ng-click-active");n=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:
[a])[0];t=a.clientX;v=a.clientY});b.on("touchcancel",function(a){k=!1;b.removeClass("ng-click-active")});b.on("touchend",function(a){var d=Date.now()-n,f=a.originalEvent||a,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,w=Math.sqrt(Math.pow(f-t,2)+Math.pow(u-v,2));k&&750>d&&12>w&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),c(g,f,u),q&&q.blur(),s.isDefined(h.disabled)&&
!1!==h.disabled||b.triggerHandler("click",[a]));k=!1;b.removeClass("ng-click-active")});b.onclick=function(a){};b.on("click",function(b,c){d.$apply(function(){a(d,{$event:c||b})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
/*! RESOURCE: /scripts/angular_1.4.8/angular-cookies.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,n){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,n,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
/*! RESOURCE: /scripts/angular_1.4.8/angular-aria.min.js */
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u,n,v){'use strict';var r="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),p=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};n.module("ngAria",["ng"]).provider("$aria",function(){function a(a,f,l,m){return function(d,e,b){var g=b.$normalize(f);!c[g]||p(e,l)||b[g]||d.$watch(b[a],function(b){b=m?!b:!!b;e.attr(f,b)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=n.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngModel",["$aria",function(a){function c(c,m,d){return a.config(m)&&!d.attr(c)}function k(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function f(a,c){var d=
a.type,e=a.role;return"checkbox"===(d||e)||"menuitemcheckbox"===e?"checkbox":"radio"===(d||e)||"menuitemradio"===e?"radio":"range"===d||"progressbar"===e||"slider"===e?"range":"textbox"===(d||e)||"TEXTAREA"===c[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",priority:200,compile:function(l,m){var d=f(m,l);return{pre:function(a,b,c,h){"checkbox"===d&&"checkbox"!==c.type&&(h.$isEmpty=function(b){return!1===b})},post:function(e,b,g,h){function f(){return h.$modelValue}function m(){return q?
(q=!1,function(a){a=g.value==h.$viewValue;b.attr("aria-checked",a);b.attr("tabindex",0-!a)}):function(a){b.attr("aria-checked",g.value==h.$viewValue)}}function l(){b.attr("aria-checked",!h.$isEmpty(h.$viewValue))}var q=c("tabindex","tabindex",b)&&!p(b,r);switch(d){case "radio":case "checkbox":k(d,b)&&b.attr("role",d);c("aria-checked","ariaChecked",b)&&e.$watch(f,"radio"===d?m():l);q&&b.attr("tabindex",0);break;case "range":k(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var n=!b.attr("aria-valuemin")&&
(g.hasOwnProperty("min")||g.hasOwnProperty("ngMin")),s=!b.attr("aria-valuemax")&&(g.hasOwnProperty("max")||g.hasOwnProperty("ngMax")),t=!b.attr("aria-valuenow");n&&g.$observe("min",function(a){b.attr("aria-valuemin",a)});s&&g.$observe("max",function(a){b.attr("aria-valuemax",a)});t&&e.$watch(f,function(a){b.attr("aria-valuenow",a)})}q&&b.attr("tabindex",0);break;case "multiline":c("aria-multiline","ariaMultiline",b)&&b.attr("aria-multiline",!0)}h.$validators.required&&c("aria-required","ariaRequired",
b)&&e.$watch(function(){return h.$error.required},function(a){b.attr("aria-required",!!a)});c("aria-invalid","ariaInvalid",b)&&e.$watch(function(){return h.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",[])}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,c,k,f){c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",
function(a,c){return{restrict:"A",compile:function(k,f){var l=c(f.ngClick,null,!0);return function(c,d,e){if(!p(d,r)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!e.ngKeypress))d.on("keypress",function(a){function d(){l(c,{$event:a})}var e=a.which||a.keyCode;32!==e&&13!==e||c.$apply(d)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,k,f){!a.config("tabindex")||
k.attr("tabindex")||p(k,r)||k.attr("tabindex",0)}}])})(window,window.angular);
/*! RESOURCE: /scripts/app/base/_module.js */
angular.module('sn.base', ['sn.common.auth']);
window.countWatchers = window.countWatchers || function (root) {
var watchers = [];
var f = function (element) {
angular.forEach(['$scope', '$isolateScope'], function (scopeProperty) {
if (element.data() && element.data().hasOwnProperty(scopeProperty)) {
angular.forEach(element.data()[scopeProperty].$$watchers, function (watcher) {
watchers.push(watcher);
});
}
});
angular.forEach(element.children(), function (childElement) {
f(angular.element(childElement));
});
};
f(root);
var watchersWithoutDuplicates = [];
angular.forEach(watchers, function(item) {
if(watchersWithoutDuplicates.indexOf(item) < 0) {
watchersWithoutDuplicates.push(item);
}
});
console.log(watchersWithoutDuplicates.length);
};
;
/*! RESOURCE: /scripts/sn/common/auth/_module.js */
angular.module('sn.common.auth', []);
angular.module('sn.auth', ['sn.common.auth']);
;
/*! RESOURCE: /scripts/sn/common/auth/service.authInterceptor.js */
angular.module('sn.common.auth').config(function($httpProvider) {
$httpProvider.interceptors.push(function($rootScope, $q, $injector, $window, $log) {
var LOG_PREFIX = '(authIntercepter) ';
function error(response) {
var status = response.status;
if (status == 401) {
var newPromise = handle401(response);
if (newPromise)
return newPromise;
}
return $q.reject(response);
}
function handle401(response) {
if (canResendRequest(response)) {
var deferredAgain = $q.defer();
var $http = $injector.get('$http');
$http(response.config).then(function success(newResponse) {
deferredAgain.resolve(newResponse);
}, function error(newResponse) {
deferredAgain.reject(newResponse);
});
return deferredAgain.promise;
}
$log.info(LOG_PREFIX + 'User has been logged out');
$rootScope.$broadcast("@page.login");
return null;
}
function canResendRequest(response) {
var headers = response.headers();
var requestToken = response.config.headers['X-UserToken'];
if (!requestToken) {
requestToken = headers['x-usertoken-request'];
}
if ($window.g_ck && (requestToken !== $window.g_ck)) {
$log.info(LOG_PREFIX + 'Token refreshed since request -- retrying');
response.config.headers['X-UserToken'] = $window.g_ck;
return true;
}
if (headers['x-sessionloggedin'] != 'true')
return false;
if (headers['x-usertoken-allowresubmit'] == 'false')
return false;
var token = headers['x-usertoken-response'];
if (token) {
$log.info(LOG_PREFIX +  'Received new token -- retrying');
response.config.headers['X-UserToken'] = token;
setToken(token);
return true;
}
return false;
}
function setToken(token) {
$window.g_ck = token;
if (!token) {
$httpProvider.defaults.headers.common["X-UserToken"] = 'token_intentionally_left_blank';
} else {
$httpProvider.defaults.headers.common["X-UserToken"] = token;
}
if ($window.jQuery) {
jQuery.ajaxSetup({
headers: {
'X-UserToken': token
}
});
}
if ($window.Zepto) {
if (!Zepto.ajaxSettings.headers)
Zepto.ajaxSettings.headers = {};
Zepto.ajaxSettings.headers['X-UserToken'] = token;
}
}
setToken($window.g_ck);
return {
responseError: error
}
});
});
;
;
/*! RESOURCE: /scripts/sn/common/js_includes_common.js */
/*! RESOURCE: /scripts/sn/common/_module.js */
angular.module('sn.common', [
'ngSanitize',
'ngAnimate',
'sn.common.avatar',
'sn.common.controls',
'sn.common.datetime',
'sn.common.glide',
'sn.common.i18n',
'sn.common.link',
'sn.common.mention',
'sn.common.messaging',
'sn.common.notification',
'sn.common.presence',
'sn.common.stream',
'sn.common.ui',
'sn.common.user_profile',
'sn.common.util'
]);
angular.module('ng.common', [
'sn.common'
]);
;
/*! RESOURCE: /scripts/sn/common/dist/templates.js */
angular.module('sn.common.dist.templates', []);
;
/*! RESOURCE: /scripts/sn/common/datetime/js_includes_datetime.js */
/*! RESOURCE: /scripts/sn/common/datetime/_module.js */
angular.module('sn.common.datetime', [
'sn.common.i18n'
]);
angular.module('sn.timeAgo', [
'sn.common.datetime'
]);
;
/*! RESOURCE: /scripts/sn/common/datetime/directive.snTimeAgo.js */
angular.module('sn.common.datetime').constant('DATE_GRANULARITY', {
DATETIME: 1,
DATE: 2
});
angular.module('sn.common.datetime').factory('timeAgoTimer', function($interval, $rootScope, DATE_GRANULARITY) {
"use strict";
var digestInterval;
return function(displayGranularityType) {
displayGranularityType = typeof displayGranularityType !== 'undefined' ? displayGranularityType : DATE_GRANULARITY.DATETIME;
if (!digestInterval && displayGranularityType == DATE_GRANULARITY.DATETIME)
digestInterval = $interval(function() {
$rootScope.$broadcast('sn.TimeAgo.tick');
}, 30 * 1000);
return Date.now();
};
});
angular.module('sn.common.datetime').factory('timeAgo', function(timeAgoSettings, DATE_GRANULARITY) {
var service = {
settings: timeAgoSettings.get(),
allowFuture: function allowFuture(bool) {
this.settings.allowFuture = bool;
return this;
},
toWords: function toWords(distanceMillis, messageGranularity) {
messageGranularity = messageGranularity || DATE_GRANULARITY.DATETIME;
var $l = service.settings.strings;
var seconds = Math.abs(distanceMillis) / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24;
var years = days / 365;
var ago = $l.ago;
if ((seconds < 45 && messageGranularity == DATE_GRANULARITY.DATETIME)
|| (hours < 24 && messageGranularity == DATE_GRANULARITY.DATE)
|| (!service.settings.allowFuture && distanceMillis < 0))
ago = '%d';
if (service.settings.allowFuture) {
if (distanceMillis < 0) {
ago = $l.fromNow;
}
}
function substitute(stringOrFunction, number) {
var string = angular.isFunction(stringOrFunction) ?
stringOrFunction(number, distanceMillis) : stringOrFunction;
if (!string)
return "";
var value = ($l.numbers && $l.numbers[number]) || number;
return string.replace(/%d/i, value);
}
var wantDate = messageGranularity == DATE_GRANULARITY.DATE;
var wantDateTime = messageGranularity == DATE_GRANULARITY.DATETIME;
var words = distanceMillis <= 0 && wantDateTime && substitute($l.justNow, 0) ||
distanceMillis <= 0 && wantDate && substitute($l.today, 0) ||
seconds < 45 && (distanceMillis >= 0 || !service.settings.allowFuture) && wantDateTime && substitute($l.justNow, Math.round(seconds)) ||
seconds < 45 && wantDateTime && substitute($l.seconds, Math.round(seconds)) ||
seconds < 90 && wantDateTime && substitute($l.minute, 1) ||
minutes < 45 && wantDateTime && substitute($l.minutes, Math.round(minutes)) ||
minutes < 90 && wantDateTime && substitute($l.hour, 1) ||
hours < 24 && wantDateTime && substitute($l.hours, Math.round(hours)) ||
hours < 24 && wantDate && substitute($l.today, 0) ||
hours < 42 && substitute($l.day, 1) ||
days < 30 && substitute($l.days, Math.ceil(days)) ||
days < 45 && substitute($l.month, 1) ||
days < 365 && substitute($l.months, Math.round(days / 30)) ||
years < 1.5 && substitute($l.year, 1) ||
substitute($l.years, Math.round(years));
return substitute(ago, words);
},
parse: function(iso8601) {
if (angular.isNumber(iso8601))
return new Date(parseInt(iso8601, 10));
var s = iso8601.trim();
s = s.replace(/\.\d+/,"");
s = s.replace(/-/,"/").replace(/-/,"/");
s = s.replace(/T/," ").replace(/Z/," UTC");
s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");
return new Date(s);
}
};
return service;
});
angular.module('sn.common.datetime').directive("snTimeAgo", function(timeAgoSettings, $rootScope, timeAgo, timeAgoTimer, DATE_GRANULARITY) {
"use strict";
return {
restrict: "E",
template: '<time title="{{ ::titleTime }}">{{timeAgo}}</time>',
scope: {
timestamp: "=",
local: "="
},
link: function(scope) {
timeAgoSettings.ready.then(function() {
timeAgoTimer(DATE_GRANULARITY.DATETIME)
scope.$on('sn.TimeAgo.tick', setTimeAgo);
setTimeAgo();
});
function setTimeAgo() {
scope.timeAgo = timeAgoConverter(scope.timestamp, true);
}
function timeAgoConverter(input, noFuture) {
if (!input)
return;
var allowFuture = !noFuture;
var date = timeAgo.parse(input);
if (scope.local) {
scope.titleTime = input;
return timeAgo.allowFuture(allowFuture).toWords(new Date() - date);
}
if (Object.prototype.toString.call(date) !== "[object Date]" && Object.prototype.toString.call(date) !== "[object Number]")
return input;
else if (Object.prototype.toString.call(date) == "[object Date]" && isNaN(date.getTime()))
return input;
setTitleTime(date);
var currentDate = new Date();
currentDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds() );
var diff = currentDate - date;
return timeAgo.allowFuture(allowFuture).toWords(diff);
}
function setTitleTime(date) {
var t = date.getTime();
var o = date.getTimezoneOffset();
t -= o * 60 * 1000;
scope.titleTime = new Date(t).toLocaleString();
}
}
}
});
angular.module('sn.common.datetime').directive("snTimeAgoStatic", function(timeAgoSettings, $rootScope, timeAgo, timeAgoTimer, DATE_GRANULARITY) {
"use strict";
return {
restrict: "E",
template: '<time title="{{ ::titleTime }}">{{timeAgo}}</time>',
scope: {
timestamp: "@",
local: "@"
},
link: function(scope) {
timeAgoSettings.ready.then(function() {
timeAgoTimer(DATE_GRANULARITY.DATETIME)
scope.$on('sn.TimeAgo.tick', setTimeAgo);
setTimeAgo();
});
function setTimeAgo() {
scope.timeAgo = timeAgoConverter(scope.timestamp, true);
}
function timeAgoConverter(input, noFuture) {
if (!input)
return;
var allowFuture = !noFuture;
var date = timeAgo.parse(input);
if (scope.local) {
scope.titleTime = input;
return timeAgo.allowFuture(allowFuture).toWords(new Date() - date);
}
if (Object.prototype.toString.call(date) !== "[object Date]" && Object.prototype.toString.call(date) !== "[object Number]")
return input;
else if (Object.prototype.toString.call(date) == "[object Date]" && isNaN(date.getTime()))
return input;
setTitleTime(date);
var currentDate = new Date();
currentDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds() );
var diff = currentDate - date;
return timeAgo.allowFuture(allowFuture).toWords(diff);
}
function setTitleTime(date) {
var t = date.getTime();
var o = date.getTimezoneOffset();
t -= o * 60 * 1000;
scope.titleTime = new Date(t).toLocaleString();
}
}
}
});
;
/*! RESOURCE: /scripts/sn/common/datetime/directive.snDayAgo.js */
angular.module('sn.common.datetime').directive("snDayAgo", function(timeAgoSettings, $rootScope, timeAgo, timeAgoTimer, DATE_GRANULARITY) {
"use strict";
return {
restrict: "E",
template: '<time>{{dayAgo}}</time>',
scope: {
date: "="
},
link: function(scope) {
timeAgoSettings.ready.then(function() {
setDayAgo();
});
function setDayAgo() {
scope.dayAgo = dayAgoConverter(scope.date, "noFuture");
}
function dayAgoConverter(input, option) {
if (!input) return;
var allowFuture = !((option === 'noFuture') || (option === 'no_future'));
var date = timeAgo.parse(input);
if ( Object.prototype.toString.call(date) !== "[object Date]" )
return input;
else if ( isNaN(date.getTime()) )
return input;
var diff = timeAgoTimer(DATE_GRANULARITY.DATE) - date;
return timeAgo.allowFuture(allowFuture).toWords(diff, DATE_GRANULARITY.DATE);
}
}
}
});
;
/*! RESOURCE: /scripts/sn/common/datetime/snTimeAgoSettings.js */
angular.module('sn.common.datetime').provider('snTimeAgoSettings', function() {
"use strict";
var INIT_NEVER = 'never';
var INIT_AUTO = 'auto';
var INIT_MANUAL = 'manual';
var _initMethod = INIT_AUTO;
this.setInitializationMethod = function(init) {
switch (init) {
default:
init = INIT_AUTO;
case INIT_NEVER:
case INIT_AUTO:
case INIT_MANUAL:
_initMethod = init;
break;
}
};
this.$get = function(i18n, $q) {
var settings = {
allowFuture: true,
dateOnly: false,
strings: {}
};
var _initialized = false;
var ready = $q.defer();
function initialize() {
if (_initMethod === INIT_NEVER) {
return $q.reject();
}
if (!_initialized) {
_initialized = true;
i18n.getMessages(['%d ago', '%d from now', 'just now',
'less than a minute', 'about a minute', '%d minutes', 'about an hour', 'about %d hours', 'today', 'a day', '%d days',
'about a month', '%d months', 'about a year', 'about a year', '%d years'], function (msgs) {
settings.strings = {
ago: msgs['%d ago'],
fromNow: msgs['%d from now'],
justNow: msgs["just now"],
seconds: msgs["less than a minute"],
minute: msgs["about a minute"],
minutes: msgs["%d minutes"],
hour: msgs["about an hour"],
hours: msgs["about %d hours"],
day: msgs["a day"],
days: msgs["%d days"],
month: msgs["about a month"],
months: msgs["%d months"],
year: msgs["about a year"],
years: msgs["%d years"],
today: msgs["today"],
wordSeparator: msgs["timeago_number_separator"],
numbers: []
};
ready.resolve();
});
}
return ready.promise;
}
if (_initMethod === INIT_AUTO) {
initialize();
}
return {
initialize: initialize,
ready: ready.promise,
get: function get() {
return settings;
},
set: function set(translated) {
settings = angular.extend(settings, translated);
}
};
};
}).factory('timeAgoSettings', function(snTimeAgoSettings) {
return snTimeAgoSettings;
});
;
;
/*! RESOURCE: /scripts/sn/common/glide/js_includes_glide.js */
/*! RESOURCE: /scripts/sn/common/glide/_module.js */
angular.module('sn.common.glide', [
'sn.common.util'
]);
;
/*! RESOURCE: /scripts/sn/common/glide/factory.glideUrlBuilder.js */
angular.module('sn.common.glide').factory('glideUrlBuilder', ['$window', function($window) {
"use strict";
function GlideUrl(contextPath){
var objDef = {
contextPath: '',
params: {},
encodedString: '',
encode: true,
setFromCurrent: function() {
this.setFromString($window.location.href);
},
setFromString:function(href) {
var pos = href.indexOf('?');
if (pos < 0) {
this.contextPath = href;
return;
}
this.contextPath = href.slice(0, pos);
var hashes = href.slice(pos + 1).split('&');
var i = hashes.length;
while (i--) {
var pos = hashes[i].indexOf('=');
this.params[hashes[i].substring(0, pos)] = hashes[i].substring(++pos);
}
},
setContextPath: function(c) {
this.contextPath = c;
},
getParam: function(p) {
return this.params[p];
},
getParams: function() {
return this.params;
},
addParam: function(name, value) {
this.params[name] = value;
return this;
},
addToken: function() {
if (typeof g_ck != 'undefined' && g_ck != "")
this.addParam('sysparm_ck', g_ck);
return this;
},
deleteParam: function(name) {
delete this.params[name];
},
addEncodedString: function(s) {
if (!s)
return;
if (s.substr(0, 1) != "&")
this.encodedString += "&";
this.encodedString += s;
return this;
},
getQueryString: function(additionalParams) {
var qs = this._getParamsForURL(this.params);
qs += this._getParamsForURL(additionalParams);
qs += this.encodedString;
if (qs.length == 0)
return "";
return qs.substring(1);
},
_getParamsForURL: function(params) {
if (!params)
return '';
var url = '';
for (var n in params) {
var p = params[n] || '';
url += '&' + n + '=' + (this.encode ? encodeURIComponent(p + '') : p);
}
return url;
},
getURL: function(additionalParams) {
var url = this.contextPath;
var qs = this.getQueryString(additionalParams);
if (qs)
url += "?" + qs;
return url;
},
setEncode: function(b) {
this.encode = b;
},
toString: function() { return 'GlideURL'; }
}
return objDef;
}
return {
newGlideUrl: function(contextPath) {
var glideUrl = new GlideUrl();
glideUrl.setFromString(contextPath ? contextPath : '');
return glideUrl;
},
refresh: function(){
$window.location.replace( $window.location.href );
},
getCancelableLink: function(link) {
if ($window.NOW && $window.NOW.g_cancelPreviousTransaction) {
var nextChar = link.indexOf('?') > -1 ? '&' : '?';
link += nextChar + "sysparm_cancelable=true";
}
return link;
}
};
}]);
;
/*! RESOURCE: /scripts/sn/common/glide/service.queryFilter.js */
angular.module('sn.common.glide').factory('queryFilter', function() {
"use strict";
return {
create : function() {
var that = {};
that.conditions = [];
function newCondition(field, operator, value, label, displayValue, type){
var condition = {
field: field,
operator: operator,
value: value,
displayValue: displayValue,
label: label,
left: null,
right: null,
type: null,
setValue: function(value, displayValue){
this.value = value;
this.displayValue = displayValue ? displayValue : value;
}
};
if (type)
condition.type = type;
return condition;
}
function addCondition(condition) {
that.conditions.push(condition);
return condition;
}
function removeCondition(condition) {
for (var i = that.conditions.length-1; i >= 0; i--) {
if (that.conditions[i] === condition)
that.conditions.splice(i, 1);
}
}
function getConditionsByField(conditions, field){
var conditionsToReturn = [];
for(var condition in conditions){
if (conditions.hasOwnProperty(condition)){
if (conditions[condition].field == field)
conditionsToReturn.push(conditions[condition]);
}
}
return conditionsToReturn;
}
function encodeCondition(condition){
var output = "";
if (condition.hasOwnProperty("left") && condition.left){
output += encodeCondition(condition.left);
}
if (condition.hasOwnProperty("right") && condition.right){
var right = encodeCondition(condition.right);
if (right.length > 0){
output += "^" + condition.type + right;
}
}
if (condition.field){
output += condition.field;
output += condition.operator;
if (condition.value !== null && typeof condition.value !== "undefined")
output += condition.value;
}
return output;
}
function createEncodedQuery() {
var eq = "";
var ca = that.conditions;
for (var i = 0; i < ca.length; i++) {
var condition = ca[i];
if (eq.length)
eq += '^';
eq += encodeCondition(condition);
}
eq += "^EQ";
return eq;
}
that.addCondition = addCondition;
that.newCondition = newCondition;
that.createEncodedQuery = createEncodedQuery;
that.getConditionsByField = getConditionsByField;
that.removeCondition = removeCondition;
return that;
}
};
});
;
/*! RESOURCE: /scripts/sn/common/glide/service.filterExpressionParser.js */
angular.module('sn.common.glide').factory('filterExpressionParser', function() {
'use strict';
var operatorExpressions = [{
wildcardExp: '(.*)',
operator: 'STARTSWITH',
toExpression: function(filter) {
return filter;
}
},{
wildcardExp: '^\\*(.*)',
operator: 'LIKE',
toExpression: function(filter) {
return (filter === '*' ? filter : '*' + filter);
}
},{
wildcardExp: '^\\.(.*)',
operator: 'LIKE',
toExpression: function(filter) {
return '.' + filter;
}
},{
wildcardExp: '^%(.*)',
operator: 'ENDSWITH',
toExpression: function(filter) {
return (filter === '%' ? filter : '%' + filter);
}
},{
wildcardExp: '(.*)%',
operator: 'LIKE',
toExpression: function(filter) {
return filter + '%';
}
},{
wildcardExp: '^=(.*)',
operator: '=',
toExpression: function(filter) {
return (filter === '=' ? filter : '=' + filter);
}
},{
wildcardExp: '^!\\*(.*)',
operator: 'NOT LIKE',
toExpression: function(filter) {
return (filter === '!*' || filter === '!' ? filter : '!*' + filter);
}
},{
wildcardExp: '^!=(.*)',
operator: '!=',
toExpression: function(filter) {
return (filter === '!=' || filter === '!' ? filter : '!=' + filter);
}
}];
return {
getOperatorExpressionForOperator: function(operator) {
for (var i = 0; i < operatorExpressions.length; i++) {
var item = operatorExpressions[i];
if (item.operator === operator)
return item;
}
throw {
name: 'OperatorNotSupported',
message: 'The operator ' + operator + ' is not in the list of operatorExpressions.'
};
},
parse: function(val, defaultOperator) {
var parsedValue = {
filterText: val,
operator: defaultOperator || 'STARTSWITH'
};
for (var i = 1; i < operatorExpressions.length; i++) {
var operatorItem = operatorExpressions[i];
var match = val.match(operatorItem.wildcardExp);
if (match && match[1] !== '') {
parsedValue.operator = operatorItem.operator;
parsedValue.filterText = match[1];
}
}
return parsedValue;
}
};
});
;
/*! RESOURCE: /scripts/sn/common/glide/service.userPreferences.js */
angular.module('sn.common.glide').factory("userPreferences", function ($http, $q, unwrappedHTTPPromise, urlTools) {
"use strict";
var	preferencesCache = {};
function getPreference(preferenceName) {
if (preferenceName in preferencesCache)
return preferencesCache[preferenceName];
var targetURL = urlTools.getURL('user_preference', {
"sysparm_pref_name": preferenceName,
"sysparm_action": "get"
}),
deferred = $q.defer();
$http.get(targetURL).success(function (response) {
deferred.resolve(response.sysparm_pref_value);
}).error(function (data, status) {
deferred.reject("Error getting preference " + preferenceName + ": " + status);
});
preferencesCache[preferenceName] = deferred.promise;
return deferred.promise;
}
function setPreference(preferenceName, preferenceValue) {
var targetURL = urlTools.getURL('user_preference', {
"sysparm_pref_name": preferenceName,
"sysparm_action": "set",
"sysparm_pref_value": "" + preferenceValue
});
var httpPromise = $http.get(targetURL);
addToCache(preferenceName, preferenceValue);
return unwrappedHTTPPromise(httpPromise);
}
function addToCache(preferenceName, preferenceValue){
preferencesCache[preferenceName] = $q.when(preferenceValue);
}
var userPreferences = {
getPreference: getPreference,
setPreference: setPreference,
addToCache: addToCache
};
return userPreferences;
});
;
/*! RESOURCE: /scripts/sn/common/glide/service.nowStream.js */
angular.module('sn.common.glide').constant('nowStreamTimerInterval', 5000);
angular.module('sn.common.glide').factory('nowStream', function($q, $timeout, urlTools, nowStreamTimerInterval, snResource, $log) {
'use strict';
var Stream = function() {
this.initialize.apply(this, arguments);
};
Stream.prototype = {
initialize: function(table, query, sys_id, processor, interval, source, includeAttachments) {
this.table = table;
this.query = query;
this.sysparmQuery = null;
this.sys_id = sys_id;
this.processor = processor;
this.lastTimestamp = 0;
this.inflightRequest = null;
this.requestImmediateUpdate = false;
this.interval = interval;
this.source = source;
this.includeAttachments = includeAttachments;
this.stopped = true;
},
setQuery: function(sysparmQuery) {
this.sysparmQuery = sysparmQuery;
},
poll: function(callback, preRequestCallback) {
this.callback = callback;
this.preRequestCallback = preRequestCallback;
this._stopPolling();
this._startPolling();
},
tap: function() {
if (!this.inflightRequest) {
this._stopPolling();
this._startPolling();
}
else
this.requestImmediateUpdate = true;
},
insert: function(field, text) {
this.insertForEntry(field, text, this.table, this.sys_id);
},
insertForEntry: function(field, text, table, sys_id) {
return this.insertEntries([{
field: field,
text: text
}], table, sys_id);
},
expandMentions: function (entryText, mentionIDMap) {
return entryText.replace(/@\[(.+?)\]/gi, function (mention) {
var mentionedName = mention.substring(2, mention.length - 1);
if (mentionIDMap[mentionedName]) {
return "@[" + mentionIDMap[mentionedName] + ":" + mentionedName + "]";
} else {
return mention;
}
});
},
insertEntries: function(entries, table, sys_id, mentionIDMap) {
mentionIDMap = mentionIDMap || {};
var sanitizedEntries = [];
for (var i = 0; i < entries.length; i++) {
var entryText = entries[i].text;
if (entryText && entryText.endsWith('\n'))
entryText = entryText.substring(0, entryText.length - 1);
if (!entryText)
continue;
entries[i].text = this.expandMentions(entryText, mentionIDMap);
sanitizedEntries.push(entries[i]);
}
if (sanitizedEntries.length === 0)
return;
this._isInserting = true;
var url = this._getInsertURL(table, sys_id);
var that = this;
return snResource().post(url, {
entries: sanitizedEntries
}).then(this._successCallback.bind(this), function() {
$log.warn('Error submitting entries', sanitizedEntries);
}).then(function() {
that._isInserting = false;
});
},
cancel: function() {
this._stopPolling();
},
_startPolling : function() {
var interval = this._getInterval();
var that = this;
var successCallback = this._successCallback.bind(this);
that.stopped = false;
function runPoll() {
if (that._isInserting) {
establishNextRequest();
return;
}
if (!that.inflightRequest) {
that.inflightRequest = that._executeRequest();
that.inflightRequest.then(successCallback);
that.inflightRequest.finally(function() {
that.inflightRequest = null;
if (that.requestImmediateUpdate) {
that.requestImmediateUpdate = false;
establishNextRequest(0);
}
else {
establishNextRequest();
}
});
}
}
function establishNextRequest(intervalOverride) {
if (that.stopped)
return;
intervalOverride = (parseFloat(intervalOverride) >= 0) ? intervalOverride : interval;
$timeout.cancel(that.timer);
that.timer = $timeout(runPoll, intervalOverride);
}
runPoll();
},
_stopPolling : function() {
if (this.timer)
$timeout.cancel(this.timer);
this.stopped = true;
},
_executeRequest: function() {
var url = this._getURL();
if (this.preRequestCallback) {
this.preRequestCallback();
}
return snResource().get(url);
},
_getURL: function() {
var params = {
table: this.table,
action: this._getAction(),
sysparm_silent_request: true,
sysparm_auto_request: true,
sysparm_timestamp: this.lastTimestamp,
include_attachments: this.includeAttachments
};
if (this.sys_id) {
params['sys_id'] = this.sys_id;
} else if (this.sysparmQuery) {
params['sysparm_query'] = this.sysparmQuery;
}
var url = urlTools.getURL(this.processor, params);
if (!this.sys_id) {
url += "&p=" + this.query;
}
return url;
},
_getInsertURL: function(table, sys_id) {
return urlTools.getURL(this.processor, {
action: 'insert',
table: table,
sys_id: sys_id,
sysparm_timestamp: this.timestamp || 0,
sysparm_source: this.source
});
},
_successCallback: function(response) {
var response = response.data;
if (response.entries && response.entries.length) {
response.entries = this._filterOld(response.entries);
if (response.entries.length > 0) {
this.lastEntry = angular.copy(response.entries[0]);
this.lastTimestamp = response.sys_timestamp || response.entries[0].sys_timestamp;
}
}
this.callback.call(null, response);
},
_filterOld: function(entries) {
for (var i = 0; i < entries.length; i++) {
if (entries[i].sys_timestamp == this.lastTimestamp) {
if (this.lastEntry) {
if (!angular.equals(this._makeComparable(entries[i]), this._makeComparable(this.lastEntry)))
continue;
}
}
if (entries[i].sys_timestamp <= this.lastTimestamp)
return entries.slice(0, i);
}
return entries;
},
_makeComparable: function(entry) {
var copy = angular.copy(entry);
delete copy.short_description;
delete copy.display_value;
return copy;
},
_getAction: function() {
return this.sys_id ? 'get_new_entries' : 'get_set_entries';
},
_getInterval: function() {
if (this.interval)
return this.interval;
else if (window.NOW && NOW.stream_poll_interval)
return NOW.stream_poll_interval * 1000;
else
return nowStreamTimerInterval;
}
};
return {
create: function(table, query, sys_id, processor, interval, source) {
return new Stream(table, query, sys_id, processor, interval, source);
}
};
});
;
/*! RESOURCE: /scripts/sn/common/glide/service.nowServer.js */
angular.module('sn.common.glide').factory('nowServer', function($http, $q, userPreferences, angularProcessorUrl, urlTools) {
return {
getBaseURL: function () {
return angularProcessorUrl;
},
getPartial: function(scope, partial, parms, callback) {
var url = this.getPartialURL(partial, parms);
if (url === scope.url) {
callback.call();
return;
}
var fn = scope.$on('$includeContentLoaded', function() {
fn.call();
callback.call();
});
scope.url = url;
},
replaceView: function($location, newView) {
var p = $location.path();
var a = p.split("/");
a[1] = newView;
p = a.join("/");
return p;
},
getPartialURL: urlTools.getPartialURL,
getURL: urlTools.getURL,
urlFor : urlTools.urlFor,
getPropertyURL: urlTools.getPropertyURL,
setPreference: userPreferences.setPreference,
getPreference: userPreferences.getPreference
}
});
;
;
/*! RESOURCE: /scripts/sn/common/avatar/js_includes_avatar.js */
/*! RESOURCE: /scripts/sn/common/presence/js_includes_presence.js */
/*! RESOURCE: /scripts/js_includes_ng_amb.js */
/*! RESOURCE: /scripts/js_includes_amb.js */
/*! RESOURCE: /scripts/thirdparty/cometd/org/cometd.js */
(function(root) {
var org = root.org || {};
root.org = org;
org.cometd = {};
org.cometd.JSON = {};
org.cometd.JSON.toJSON = org.cometd.JSON.fromJSON = function(object)
{
throw 'Abstract';
};
org.cometd.Utils = {};
org.cometd.Utils.isString = function(value)
{
if (value === undefined || value === null)
{
return false;
}
return typeof value === 'string' ||  value instanceof String;
};
org.cometd.Utils.isArray = function(value)
{
if (value === undefined || value === null)
{
return false;
}
return value instanceof Array;
};
org.cometd.Utils.inArray = function(element, array)
{
for (var i = 0; i < array.length; ++i)
{
if (element === array[i])
{
return i;
}
}
return -1;
};
org.cometd.Utils.setTimeout = function(cometd, funktion, delay)
{
return window.setTimeout(function()
{
try
{
funktion();
}
catch (x)
{
cometd._debug('Exception invoking timed function', funktion, x);
}
}, delay);
};
org.cometd.Utils.clearTimeout = function(timeoutHandle)
{
window.clearTimeout(timeoutHandle);
};
org.cometd.TransportRegistry = function()
{
var _types = [];
var _transports = {};
this.getTransportTypes = function()
{
return _types.slice(0);
};
this.findTransportTypes = function(version, crossDomain, url)
{
var result = [];
for (var i = 0; i < _types.length; ++i)
{
var type = _types[i];
if (_transports[type].accept(version, crossDomain, url) === true)
{
result.push(type);
}
}
return result;
};
this.negotiateTransport = function(types, version, crossDomain, url)
{
for (var i = 0; i < _types.length; ++i)
{
var type = _types[i];
for (var j = 0; j < types.length; ++j)
{
if (type === types[j])
{
var transport = _transports[type];
if (transport.accept(version, crossDomain, url) === true)
{
return transport;
}
}
}
}
return null;
};
this.add = function(type, transport, index)
{
var existing = false;
for (var i = 0; i < _types.length; ++i)
{
if (_types[i] === type)
{
existing = true;
break;
}
}
if (!existing)
{
if (typeof index !== 'number')
{
_types.push(type);
}
else
{
_types.splice(index, 0, type);
}
_transports[type] = transport;
}
return !existing;
};
this.find = function(type)
{
for (var i = 0; i < _types.length; ++i)
{
if (_types[i] === type)
{
return _transports[type];
}
}
return null;
};
this.remove = function(type)
{
for (var i = 0; i < _types.length; ++i)
{
if (_types[i] === type)
{
_types.splice(i, 1);
var transport = _transports[type];
delete _transports[type];
return transport;
}
}
return null;
};
this.clear = function()
{
_types = [];
_transports = {};
};
this.reset = function()
{
for (var i = 0; i < _types.length; ++i)
{
_transports[_types[i]].reset();
}
};
};
org.cometd.Transport = function()
{
var _type;
var _cometd;
this.registered = function(type, cometd)
{
_type = type;
_cometd = cometd;
};
this.unregistered = function()
{
_type = null;
_cometd = null;
};
this._debug = function()
{
_cometd._debug.apply(_cometd, arguments);
};
this._mixin = function()
{
return _cometd._mixin.apply(_cometd, arguments);
};
this.getConfiguration = function()
{
return _cometd.getConfiguration();
};
this.getAdvice = function()
{
return _cometd.getAdvice();
};
this.setTimeout = function(funktion, delay)
{
return org.cometd.Utils.setTimeout(_cometd, funktion, delay);
};
this.clearTimeout = function(handle)
{
org.cometd.Utils.clearTimeout(handle);
};
this.convertToMessages = function (response)
{
if (org.cometd.Utils.isString(response))
{
try
{
return org.cometd.JSON.fromJSON(response);
}
catch(x)
{
this._debug('Could not convert to JSON the following string', '"' + response + '"');
throw x;
}
}
if (org.cometd.Utils.isArray(response))
{
return response;
}
if (response === undefined || response === null)
{
return [];
}
if (response instanceof Object)
{
return [response];
}
throw 'Conversion Error ' + response + ', typeof ' + (typeof response);
};
this.accept = function(version, crossDomain, url)
{
throw 'Abstract';
};
this.getType = function()
{
return _type;
};
this.send = function(envelope, metaConnect)
{
throw 'Abstract';
};
this.reset = function()
{
this._debug('Transport', _type, 'reset');
};
this.abort = function()
{
this._debug('Transport', _type, 'aborted');
};
this.toString = function()
{
return this.getType();
};
};
org.cometd.Transport.derive = function(baseObject)
{
function F() {}
F.prototype = baseObject;
return new F();
};
org.cometd.RequestTransport = function()
{
var _super = new org.cometd.Transport();
var _self = org.cometd.Transport.derive(_super);
var _requestIds = 0;
var _metaConnectRequest = null;
var _requests = [];
var _envelopes = [];
function _coalesceEnvelopes(envelope)
{
while (_envelopes.length > 0)
{
var envelopeAndRequest = _envelopes[0];
var newEnvelope = envelopeAndRequest[0];
var newRequest = envelopeAndRequest[1];
if (newEnvelope.url === envelope.url &&
newEnvelope.sync === envelope.sync)
{
_envelopes.shift();
envelope.messages = envelope.messages.concat(newEnvelope.messages);
this._debug('Coalesced', newEnvelope.messages.length, 'messages from request', newRequest.id);
continue;
}
break;
}
}
function _transportSend(envelope, request)
{
this.transportSend(envelope, request);
request.expired = false;
if (!envelope.sync)
{
var maxDelay = this.getConfiguration().maxNetworkDelay;
var delay = maxDelay;
if (request.metaConnect === true)
{
delay += this.getAdvice().timeout;
}
this._debug('Transport', this.getType(), 'waiting at most', delay, 'ms for the response, maxNetworkDelay', maxDelay);
var self = this;
request.timeout = this.setTimeout(function()
{
request.expired = true;
var errorMessage = 'Request ' + request.id + ' of transport ' + self.getType() + ' exceeded ' + delay + ' ms max network delay';
var failure = {
reason: errorMessage
};
var xhr = request.xhr;
failure.httpCode = self.xhrStatus(xhr);
self.abortXHR(xhr);
self._debug(errorMessage);
self.complete(request, false, request.metaConnect);
envelope.onFailure(xhr, envelope.messages, failure);
}, delay);
}
}
function _queueSend(envelope)
{
var requestId = ++_requestIds;
var request = {
id: requestId,
metaConnect: false
};
if (_requests.length < this.getConfiguration().maxConnections - 1)
{
_requests.push(request);
_transportSend.call(this, envelope, request);
}
else
{
this._debug('Transport', this.getType(), 'queueing request', requestId, 'envelope', envelope);
_envelopes.push([envelope, request]);
}
}
function _metaConnectComplete(request)
{
var requestId = request.id;
this._debug('Transport', this.getType(), 'metaConnect complete, request', requestId);
if (_metaConnectRequest !== null && _metaConnectRequest.id !== requestId)
{
throw 'Longpoll request mismatch, completing request ' + requestId;
}
_metaConnectRequest = null;
}
function _complete(request, success)
{
var index = org.cometd.Utils.inArray(request, _requests);
if (index >= 0)
{
_requests.splice(index, 1);
}
if (_envelopes.length > 0)
{
var envelopeAndRequest = _envelopes.shift();
var nextEnvelope = envelopeAndRequest[0];
var nextRequest = envelopeAndRequest[1];
this._debug('Transport dequeued request', nextRequest.id);
if (success)
{
if (this.getConfiguration().autoBatch)
{
_coalesceEnvelopes.call(this, nextEnvelope);
}
_queueSend.call(this, nextEnvelope);
this._debug('Transport completed request', request.id, nextEnvelope);
}
else
{
var self = this;
this.setTimeout(function()
{
self.complete(nextRequest, false, nextRequest.metaConnect);
var failure = {
reason: 'Previous request failed'
};
var xhr = nextRequest.xhr;
failure.httpCode = self.xhrStatus(xhr);
nextEnvelope.onFailure(xhr, nextEnvelope.messages, failure);
}, 0);
}
}
}
_self.complete = function(request, success, metaConnect)
{
if (metaConnect)
{
_metaConnectComplete.call(this, request);
}
else
{
_complete.call(this, request, success);
}
};
_self.transportSend = function(envelope, request)
{
throw 'Abstract';
};
_self.transportSuccess = function(envelope, request, responses)
{
if (!request.expired)
{
this.clearTimeout(request.timeout);
this.complete(request, true, request.metaConnect);
if (responses && responses.length > 0)
{
envelope.onSuccess(responses);
}
else
{
envelope.onFailure(request.xhr, envelope.messages, {
httpCode: 204
});
}
}
};
_self.transportFailure = function(envelope, request, failure)
{
if (!request.expired)
{
this.clearTimeout(request.timeout);
this.complete(request, false, request.metaConnect);
envelope.onFailure(request.xhr, envelope.messages, failure);
}
};
function _metaConnectSend(envelope)
{
if (_metaConnectRequest !== null)
{
throw 'Concurrent metaConnect requests not allowed, request id=' + _metaConnectRequest.id + ' not yet completed';
}
var requestId = ++_requestIds;
this._debug('Transport', this.getType(), 'metaConnect send, request', requestId, 'envelope', envelope);
var request = {
id: requestId,
metaConnect: true
};
_transportSend.call(this, envelope, request);
_metaConnectRequest = request;
}
_self.send = function(envelope, metaConnect)
{
if (metaConnect)
{
_metaConnectSend.call(this, envelope);
}
else
{
_queueSend.call(this, envelope);
}
};
_self.abort = function()
{
_super.abort();
for (var i = 0; i < _requests.length; ++i)
{
var request = _requests[i];
this._debug('Aborting request', request);
this.abortXHR(request.xhr);
}
if (_metaConnectRequest)
{
this._debug('Aborting metaConnect request', _metaConnectRequest);
this.abortXHR(_metaConnectRequest.xhr);
}
this.reset();
};
_self.reset = function()
{
_super.reset();
_metaConnectRequest = null;
_requests = [];
_envelopes = [];
};
_self.abortXHR = function(xhr)
{
if (xhr)
{
try
{
xhr.abort();
}
catch (x)
{
this._debug(x);
}
}
};
_self.xhrStatus = function(xhr)
{
if (xhr)
{
try
{
return xhr.status;
}
catch (x)
{
this._debug(x);
}
}
return -1;
};
return _self;
};
org.cometd.LongPollingTransport = function()
{
var _super = new org.cometd.RequestTransport();
var _self = org.cometd.Transport.derive(_super);
var _supportsCrossDomain = true;
_self.accept = function(version, crossDomain, url)
{
return _supportsCrossDomain || !crossDomain;
};
_self.xhrSend = function(packet)
{
throw 'Abstract';
};
_self.transportSend = function(envelope, request)
{
this._debug('Transport', this.getType(), 'sending request', request.id, 'envelope', envelope);
var self = this;
try
{
var sameStack = true;
request.xhr = this.xhrSend({
transport: this,
url: envelope.url,
sync: envelope.sync,
headers: this.getConfiguration().requestHeaders,
body: org.cometd.JSON.toJSON(envelope.messages),
onSuccess: function(response)
{
self._debug('Transport', self.getType(), 'received response', response);
var success = false;
try
{
var received = self.convertToMessages(response);
if (received.length === 0)
{
_supportsCrossDomain = false;
self.transportFailure(envelope, request, {
httpCode: 204
});
}
else
{
success = true;
self.transportSuccess(envelope, request, received);
}
}
catch(x)
{
self._debug(x);
if (!success)
{
_supportsCrossDomain = false;
var failure = {
exception: x
};
failure.httpCode = self.xhrStatus(request.xhr);
self.transportFailure(envelope, request, failure);
}
}
},
onError: function(reason, exception)
{
_supportsCrossDomain = false;
var failure = {
reason: reason,
exception: exception
};
failure.httpCode = self.xhrStatus(request.xhr);
if (sameStack)
{
self.setTimeout(function()
{
self.transportFailure(envelope, request, failure);
}, 0);
}
else
{
self.transportFailure(envelope, request, failure);
}
}
});
sameStack = false;
}
catch (x)
{
_supportsCrossDomain = false;
this.setTimeout(function()
{
self.transportFailure(envelope, request, {
exception: x
});
}, 0);
}
};
_self.reset = function()
{
_super.reset();
_supportsCrossDomain = true;
};
return _self;
};
org.cometd.CallbackPollingTransport = function()
{
var _super = new org.cometd.RequestTransport();
var _self = org.cometd.Transport.derive(_super);
var _maxLength = 2000;
_self.accept = function(version, crossDomain, url)
{
return true;
};
_self.jsonpSend = function(packet)
{
throw 'Abstract';
};
_self.transportSend = function(envelope, request)
{
var self = this;
var start = 0;
var length = envelope.messages.length;
var lengths = [];
while (length > 0)
{
var json = org.cometd.JSON.toJSON(envelope.messages.slice(start, start + length));
var urlLength = envelope.url.length + encodeURI(json).length;
if (urlLength > _maxLength)
{
if (length === 1)
{
this.setTimeout(function()
{
self.transportFailure(envelope, request, {
reason: 'Bayeux message too big, max is ' + _maxLength
});
}, 0);
return;
}
--length;
continue;
}
lengths.push(length);
start += length;
length = envelope.messages.length - start;
}
var envelopeToSend = envelope;
if (lengths.length > 1)
{
var begin = 0;
var end = lengths[0];
this._debug('Transport', this.getType(), 'split', envelope.messages.length, 'messages into', lengths.join(' + '));
envelopeToSend = this._mixin(false, {}, envelope);
envelopeToSend.messages = envelope.messages.slice(begin, end);
envelopeToSend.onSuccess = envelope.onSuccess;
envelopeToSend.onFailure = envelope.onFailure;
for (var i = 1; i < lengths.length; ++i)
{
var nextEnvelope = this._mixin(false, {}, envelope);
begin = end;
end += lengths[i];
nextEnvelope.messages = envelope.messages.slice(begin, end);
nextEnvelope.onSuccess = envelope.onSuccess;
nextEnvelope.onFailure = envelope.onFailure;
this.send(nextEnvelope, request.metaConnect);
}
}
this._debug('Transport', this.getType(), 'sending request', request.id, 'envelope', envelopeToSend);
try
{
var sameStack = true;
this.jsonpSend({
transport: this,
url: envelopeToSend.url,
sync: envelopeToSend.sync,
headers: this.getConfiguration().requestHeaders,
body: org.cometd.JSON.toJSON(envelopeToSend.messages),
onSuccess: function(responses)
{
var success = false;
try
{
var received = self.convertToMessages(responses);
if (received.length === 0)
{
self.transportFailure(envelopeToSend, request, {
httpCode: 204
});
}
else
{
success = true;
self.transportSuccess(envelopeToSend, request, received);
}
}
catch (x)
{
self._debug(x);
if (!success)
{
self.transportFailure(envelopeToSend, request, {
exception: x
});
}
}
},
onError: function(reason, exception)
{
var failure = {
reason: reason,
exception: exception
};
if (sameStack)
{
self.setTimeout(function()
{
self.transportFailure(envelopeToSend, request, failure);
}, 0);
}
else
{
self.transportFailure(envelopeToSend, request, failure);
}
}
});
sameStack = false;
}
catch (xx)
{
this.setTimeout(function()
{
self.transportFailure(envelopeToSend, request, {
exception: xx
});
}, 0);
}
};
return _self;
};
org.cometd.WebSocketTransport = function()
{
var _super = new org.cometd.Transport();
var _self = org.cometd.Transport.derive(_super);
var _cometd;
var _webSocketSupported = true;
var _webSocketConnected = false;
var _stickyReconnect = true;
var _envelopes = {};
var _timeouts = {};
var _connecting = false;
var _webSocket = null;
var _connected = false;
var _successCallback = null;
_self.reset = function()
{
_super.reset();
_webSocketSupported = true;
_webSocketConnected = false;
_stickyReconnect = true;
_envelopes = {};
_timeouts = {};
_connecting = false;
_webSocket = null;
_connected = false;
_successCallback = null;
};
function _websocketConnect()
{
if (_connecting)
{
return;
}
_connecting = true;
var url = _cometd.getURL().replace(/^http/, 'ws');
this._debug('Transport', this.getType(), 'connecting to URL', url);
try
{
var protocol = _cometd.getConfiguration().protocol;
var webSocket = protocol ? new org.cometd.WebSocket(url, protocol) : new org.cometd.WebSocket(url);
}
catch (x)
{
_webSocketSupported = false;
this._debug('Exception while creating WebSocket object', x);
throw x;
}
_stickyReconnect = _cometd.getConfiguration().stickyReconnect !== false;
var self = this;
var connectTimer = null;
var connectTimeout = _cometd.getConfiguration().connectTimeout;
if (connectTimeout > 0)
{
connectTimer = this.setTimeout(function()
{
connectTimer = null;
self._debug('Transport', self.getType(), 'timed out while connecting to URL', url, ':', connectTimeout, 'ms');
var event = { code: 1000, reason: 'Connect Timeout' };
self.webSocketClose(webSocket, event.code, event.reason);
self.onClose(webSocket, event);
}, connectTimeout);
}
var onopen = function()
{
self._debug('WebSocket opened', webSocket);
_connecting = false;
if (connectTimer)
{
self.clearTimeout(connectTimer);
connectTimer = null;
}
if (_webSocket)
{
_cometd._warn('Closing Extra WebSocket Connections', webSocket, _webSocket);
self.webSocketClose(webSocket, 1000, 'Extra Connection');
}
else
{
self.onOpen(webSocket);
}
};
var onclose = function(event)
{
event = event || { code: 1000 };
self._debug('WebSocket closing', webSocket, event);
_connecting = false;
if (connectTimer)
{
self.clearTimeout(connectTimer);
connectTimer = null;
}
if (_webSocket !== null && webSocket !== _webSocket)
{
self._debug('Closed Extra WebSocket Connection', webSocket);
}
else
{
self.onClose(webSocket, event);
}
};
var onmessage = function(message)
{
self._debug('WebSocket message', message, webSocket);
if (webSocket !== _webSocket)
{
_cometd._warn('Extra WebSocket Connections', webSocket, _webSocket);
}
self.onMessage(webSocket, message);
};
webSocket.onopen = onopen;
webSocket.onclose = onclose;
webSocket.onerror = function()
{
onclose({ code: 1002, reason: 'Error' });
};
webSocket.onmessage = onmessage;
this._debug('Transport', this.getType(), 'configured callbacks on', webSocket);
}
function _webSocketSend(webSocket, envelope, metaConnect)
{
var json = org.cometd.JSON.toJSON(envelope.messages);
webSocket.send(json);
this._debug('Transport', this.getType(), 'sent', envelope, 'metaConnect =', metaConnect);
var maxDelay = this.getConfiguration().maxNetworkDelay;
var delay = maxDelay;
if (metaConnect)
{
delay += this.getAdvice().timeout;
_connected = true;
}
var self = this;
var messageIds = [];
for (var i = 0; i < envelope.messages.length; ++i)
{
(function()
{
var message = envelope.messages[i];
if (message.id)
{
messageIds.push(message.id);
_timeouts[message.id] = this.setTimeout(function()
{
self._debug('Transport', self.getType(), 'timing out message', message.id, 'after', delay, 'on', webSocket);
var event = { code: 1000, reason: 'Message Timeout' };
self.webSocketClose(webSocket, event.code, event.reason);
self.onClose(webSocket, event);
}, delay);
}
})();
}
this._debug('Transport', this.getType(), 'waiting at most', delay, 'ms for messages', messageIds, 'maxNetworkDelay', maxDelay, ', timeouts:', _timeouts);
}
function _send(webSocket, envelope, metaConnect)
{
try
{
if (webSocket === null)
{
_websocketConnect.call(this);
}
else
{
_webSocketSend.call(this, webSocket, envelope, metaConnect);
}
}
catch (x)
{
this.setTimeout(function()
{
envelope.onFailure(webSocket, envelope.messages, {
exception: x
});
}, 0);
}
}
_self.onOpen = function(webSocket)
{
this._debug('Transport', this.getType(), 'opened', webSocket);
_webSocket = webSocket;
_webSocketConnected = true;
this._debug('Sending pending messages', _envelopes);
for (var key in _envelopes)
{
var element = _envelopes[key];
var envelope = element[0];
var metaConnect = element[1];
_successCallback = envelope.onSuccess;
_webSocketSend.call(this, webSocket, envelope, metaConnect);
}
};
_self.onMessage = function(webSocket, wsMessage)
{
this._debug('Transport', this.getType(), 'received websocket message', wsMessage, webSocket);
var close = false;
var messages = this.convertToMessages(wsMessage.data);
var messageIds = [];
for (var i = 0; i < messages.length; ++i)
{
var message = messages[i];
if (/^\/meta\//.test(message.channel) || message.successful !== undefined)
{
if (message.id)
{
messageIds.push(message.id);
var timeout = _timeouts[message.id];
if (timeout)
{
this.clearTimeout(timeout);
delete _timeouts[message.id];
this._debug('Transport', this.getType(), 'removed timeout for message', message.id, ', timeouts', _timeouts);
}
}
}
if ('/meta/connect' === message.channel)
{
_connected = false;
}
if ('/meta/disconnect' === message.channel && !_connected)
{
close = true;
}
}
var removed = false;
for (var j = 0; j < messageIds.length; ++j)
{
var id = messageIds[j];
for (var key in _envelopes)
{
var ids = key.split(',');
var index = org.cometd.Utils.inArray(id, ids);
if (index >= 0)
{
removed = true;
ids.splice(index, 1);
var envelope = _envelopes[key][0];
var metaConnect = _envelopes[key][1];
delete _envelopes[key];
if (ids.length > 0)
{
_envelopes[ids.join(',')] = [envelope, metaConnect];
}
break;
}
}
}
if (removed)
{
this._debug('Transport', this.getType(), 'removed envelope, envelopes', _envelopes);
}
_successCallback.call(this, messages);
if (close)
{
this.webSocketClose(webSocket, 1000, 'Disconnect');
}
};
_self.onClose = function(webSocket, event)
{
this._debug('Transport', this.getType(), 'closed', webSocket, event);
_webSocketSupported = _stickyReconnect && _webSocketConnected;
for (var id in _timeouts)
{
this.clearTimeout(_timeouts[id]);
}
_timeouts = {};
for (var key in _envelopes)
{
var envelope = _envelopes[key][0];
var metaConnect = _envelopes[key][1];
if (metaConnect)
{
_connected = false;
}
envelope.onFailure(webSocket, envelope.messages, {
websocketCode: event.code,
reason: event.reason
});
}
_envelopes = {};
_webSocket = null;
};
_self.registered = function(type, cometd)
{
_super.registered(type, cometd);
_cometd = cometd;
};
_self.accept = function(version, crossDomain, url)
{
return _webSocketSupported && !!org.cometd.WebSocket && _cometd.websocketEnabled !== false;
};
_self.send = function(envelope, metaConnect)
{
this._debug('Transport', this.getType(), 'sending', envelope, 'metaConnect =', metaConnect);
var messageIds = [];
for (var i = 0; i < envelope.messages.length; ++i)
{
var message = envelope.messages[i];
if (message.id)
{
messageIds.push(message.id);
}
}
_envelopes[messageIds.join(',')] = [envelope, metaConnect];
this._debug('Transport', this.getType(), 'stored envelope, envelopes', _envelopes);
_send.call(this, _webSocket, envelope, metaConnect);
};
_self.webSocketClose = function(webSocket, code, reason)
{
try
{
webSocket.close(code, reason);
}
catch (x)
{
this._debug(x);
}
};
_self.abort = function()
{
_super.abort();
if (_webSocket)
{
var event = { code: 1001, reason: 'Abort' };
this.webSocketClose(_webSocket, event.code, event.reason);
this.onClose(_webSocket, event);
}
this.reset();
};
return _self;
};
org.cometd.Cometd = function(name)
{
var _cometd = this;
var _name = name || 'default';
var _crossDomain = false;
var _transports = new org.cometd.TransportRegistry();
var _transport;
var _status = 'disconnected';
var _messageId = 0;
var _clientId = null;
var _batch = 0;
var _messageQueue = [];
var _internalBatch = false;
var _listeners = {};
var _backoff = 0;
var _scheduledSend = null;
var _extensions = [];
var _advice = {};
var _handshakeProps;
var _handshakeCallback;
var _callbacks = {};
var _reestablish = false;
var _connected = false;
var _config = {
protocol: null,
stickyReconnect: true,
connectTimeout: 0,
maxConnections: 2,
backoffIncrement: 1000,
maxBackoff: 60000,
logLevel: 'info',
reverseIncomingExtensions: true,
maxNetworkDelay: 10000,
requestHeaders: {},
appendMessageTypeToURL: true,
autoBatch: false,
advice: {
timeout: 60000,
interval: 0,
reconnect: 'retry'
}
};
function _fieldValue(object, name)
{
try
{
return object[name];
}
catch (x)
{
return undefined;
}
}
this._mixin = function(deep, target, objects)
{
var result = target || {};
for (var i = 2; i < arguments.length; ++i)
{
var object = arguments[i];
if (object === undefined || object === null)
{
continue;
}
for (var propName in object)
{
var prop = _fieldValue(object, propName);
var targ = _fieldValue(result, propName);
if (prop === target)
{
continue;
}
if (prop === undefined)
{
continue;
}
if (deep && typeof prop === 'object' && prop !== null)
{
if (prop instanceof Array)
{
result[propName] = this._mixin(deep, targ instanceof Array ? targ : [], prop);
}
else
{
var source = typeof targ === 'object' && !(targ instanceof Array) ? targ : {};
result[propName] = this._mixin(deep, source, prop);
}
}
else
{
result[propName] = prop;
}
}
}
return result;
};
function _isString(value)
{
return org.cometd.Utils.isString(value);
}
function _isFunction(value)
{
if (value === undefined || value === null)
{
return false;
}
return typeof value === 'function';
}
function _log(level, args)
{
if (window.console)
{
var logger = window.console[level];
if (_isFunction(logger))
{
logger.apply(window.console, args);
}
}
}
this._warn = function()
{
_log('warn', arguments);
};
this._info = function()
{
if (_config.logLevel !== 'warn')
{
_log('info', arguments);
}
};
this._debug = function()
{
if (_config.logLevel === 'debug')
{
_log('debug', arguments);
}
};
this._isCrossDomain = function(hostAndPort)
{
return hostAndPort && hostAndPort !== window.location.host;
};
function _configure(configuration)
{
_cometd._debug('Configuring cometd object with', configuration);
if (_isString(configuration))
{
configuration = { url: configuration };
}
if (!configuration)
{
configuration = {};
}
_config = _cometd._mixin(false, _config, configuration);
var url = _cometd.getURL();
if (!url)
{
throw 'Missing required configuration parameter \'url\' specifying the Bayeux server URL';
}
var urlParts = /(^https?:\/\/)?(((\[[^\]]+\])|([^:\/\?#]+))(:(\d+))?)?([^\?#]*)(.*)?/.exec(url);
var hostAndPort = urlParts[2];
var uri = urlParts[8];
var afterURI = urlParts[9];
_crossDomain = _cometd._isCrossDomain(hostAndPort);
if (_config.appendMessageTypeToURL)
{
if (afterURI !== undefined && afterURI.length > 0)
{
_cometd._info('Appending message type to URI ' + uri + afterURI + ' is not supported, disabling \'appendMessageTypeToURL\' configuration');
_config.appendMessageTypeToURL = false;
}
else
{
var uriSegments = uri.split('/');
var lastSegmentIndex = uriSegments.length - 1;
if (uri.match(/\/$/))
{
lastSegmentIndex -= 1;
}
if (uriSegments[lastSegmentIndex].indexOf('.') >= 0)
{
_cometd._info('Appending message type to URI ' + uri + ' is not supported, disabling \'appendMessageTypeToURL\' configuration');
_config.appendMessageTypeToURL = false;
}
}
}
}
function _removeListener(subscription)
{
if (subscription)
{
var subscriptions = _listeners[subscription.channel];
if (subscriptions && subscriptions[subscription.id])
{
delete subscriptions[subscription.id];
_cometd._debug('Removed', subscription.listener ? 'listener' : 'subscription', subscription);
}
}
}
function _removeSubscription(subscription)
{
if (subscription && !subscription.listener)
{
_removeListener(subscription);
}
}
function _clearSubscriptions()
{
for (var channel in _listeners)
{
var subscriptions = _listeners[channel];
if (subscriptions)
{
for (var i = 0; i < subscriptions.length; ++i)
{
_removeSubscription(subscriptions[i]);
}
}
}
}
function _setStatus(newStatus)
{
if (_status !== newStatus)
{
_cometd._debug('Status', _status, '->', newStatus);
_status = newStatus;
}
}
function _isDisconnected()
{
return _status === 'disconnecting' || _status === 'disconnected';
}
function _nextMessageId()
{
return ++_messageId;
}
function _applyExtension(scope, callback, name, message, outgoing)
{
try
{
return callback.call(scope, message);
}
catch (x)
{
_cometd._debug('Exception during execution of extension', name, x);
var exceptionCallback = _cometd.onExtensionException;
if (_isFunction(exceptionCallback))
{
_cometd._debug('Invoking extension exception callback', name, x);
try
{
exceptionCallback.call(_cometd, x, name, outgoing, message);
}
catch(xx)
{
_cometd._info('Exception during execution of exception callback in extension', name, xx);
}
}
return message;
}
}
function _applyIncomingExtensions(message)
{
for (var i = 0; i < _extensions.length; ++i)
{
if (message === undefined || message === null)
{
break;
}
var index = _config.reverseIncomingExtensions ? _extensions.length - 1 - i : i;
var extension = _extensions[index];
var callback = extension.extension.incoming;
if (_isFunction(callback))
{
var result = _applyExtension(extension.extension, callback, extension.name, message, false);
message = result === undefined ? message : result;
}
}
return message;
}
function _applyOutgoingExtensions(message)
{
for (var i = 0; i < _extensions.length; ++i)
{
if (message === undefined || message === null)
{
break;
}
var extension = _extensions[i];
var callback = extension.extension.outgoing;
if (_isFunction(callback))
{
var result = _applyExtension(extension.extension, callback, extension.name, message, true);
message = result === undefined ? message : result;
}
}
return message;
}
function _notify(channel, message)
{
var subscriptions = _listeners[channel];
if (subscriptions && subscriptions.length > 0)
{
for (var i = 0; i < subscriptions.length; ++i)
{
var subscription = subscriptions[i];
if (subscription)
{
try
{
subscription.callback.call(subscription.scope, message);
}
catch (x)
{
_cometd._debug('Exception during notification', subscription, message, x);
var listenerCallback = _cometd.onListenerException;
if (_isFunction(listenerCallback))
{
_cometd._debug('Invoking listener exception callback', subscription, x);
try
{
listenerCallback.call(_cometd, x, subscription, subscription.listener, message);
}
catch (xx)
{
_cometd._info('Exception during execution of listener callback', subscription, xx);
}
}
}
}
}
}
}
function _notifyListeners(channel, message)
{
_notify(channel, message);
var channelParts = channel.split('/');
var last = channelParts.length - 1;
for (var i = last; i > 0; --i)
{
var channelPart = channelParts.slice(0, i).join('/') + '/*';
if (i === last)
{
_notify(channelPart, message);
}
channelPart += '*';
_notify(channelPart, message);
}
}
function _cancelDelayedSend()
{
if (_scheduledSend !== null)
{
org.cometd.Utils.clearTimeout(_scheduledSend);
}
_scheduledSend = null;
}
function _delayedSend(operation)
{
_cancelDelayedSend();
var delay = _advice.interval + _backoff;
_cometd._debug('Function scheduled in', delay, 'ms, interval =', _advice.interval, 'backoff =', _backoff, operation);
_scheduledSend = org.cometd.Utils.setTimeout(_cometd, operation, delay);
}
var _handleMessages;
var _handleFailure;
function _send(sync, messages, longpoll, extraPath)
{
for (var i = 0; i < messages.length; ++i)
{
var message = messages[i];
var messageId = '' + _nextMessageId();
message.id = messageId;
if (_clientId)
{
message.clientId = _clientId;
}
var callback = undefined;
if (_isFunction(message._callback))
{
callback = message._callback;
delete message._callback;
}
message = _applyOutgoingExtensions(message);
if (message !== undefined && message !== null)
{
message.id = messageId;
messages[i] = message;
if (callback)
{
_callbacks[messageId] = callback;
}
}
else
{
messages.splice(i--, 1);
}
}
if (messages.length === 0)
{
return;
}
var url = _cometd.getURL();
if (_config.appendMessageTypeToURL)
{
if (!url.match(/\/$/))
{
url = url + '/';
}
if (extraPath)
{
url = url + extraPath;
}
}
var envelope = {
url: url,
sync: sync,
messages: messages,
onSuccess: function(rcvdMessages)
{
try
{
_handleMessages.call(_cometd, rcvdMessages);
}
catch (x)
{
_cometd._debug('Exception during handling of messages', x);
}
},
onFailure: function(conduit, messages, failure)
{
try
{
failure.connectionType = _cometd.getTransport().getType();
_handleFailure.call(_cometd, conduit, messages, failure);
}
catch (x)
{
_cometd._debug('Exception during handling of failure', x);
}
}
};
_cometd._debug('Send', envelope);
_transport.send(envelope, longpoll);
}
function _queueSend(message)
{
if (_batch > 0 || _internalBatch === true)
{
_messageQueue.push(message);
}
else
{
_send(false, [message], false);
}
}
this.send = _queueSend;
function _resetBackoff()
{
_backoff = 0;
}
function _increaseBackoff()
{
if (_backoff < _config.maxBackoff)
{
_backoff += _config.backoffIncrement;
}
}
function _startBatch()
{
++_batch;
}
function _flushBatch()
{
var messages = _messageQueue;
_messageQueue = [];
if (messages.length > 0)
{
_send(false, messages, false);
}
}
function _endBatch()
{
--_batch;
if (_batch < 0)
{
throw 'Calls to startBatch() and endBatch() are not paired';
}
if (_batch === 0 && !_isDisconnected() && !_internalBatch)
{
_flushBatch();
}
}
function _connect()
{
if (!_isDisconnected())
{
var message = {
channel: '/meta/connect',
connectionType: _transport.getType()
};
if (!_connected)
{
message.advice = { timeout: 0 };
}
_setStatus('connecting');
_cometd._debug('Connect sent', message);
_send(false, [message], true, 'connect');
_setStatus('connected');
}
}
function _delayedConnect()
{
_setStatus('connecting');
_delayedSend(function()
{
_connect();
});
}
function _updateAdvice(newAdvice)
{
if (newAdvice)
{
_advice = _cometd._mixin(false, {}, _config.advice, newAdvice);
_cometd._debug('New advice', _advice);
}
}
function _disconnect(abort)
{
_cancelDelayedSend();
if (abort)
{
_transport.abort();
}
_clientId = null;
_setStatus('disconnected');
_batch = 0;
_resetBackoff();
_transport = null;
if (_messageQueue.length > 0)
{
_handleFailure.call(_cometd, undefined, _messageQueue, {
reason: 'Disconnected'
});
_messageQueue = [];
}
}
function _notifyTransportFailure(oldTransport, newTransport, failure)
{
var callback = _cometd.onTransportFailure;
if (_isFunction(callback))
{
_cometd._debug('Invoking transport failure callback', oldTransport, newTransport, failure);
try
{
callback.call(_cometd, oldTransport, newTransport, failure);
}
catch (x)
{
_cometd._info('Exception during execution of transport failure callback', x);
}
}
}
function _handshake(handshakeProps, handshakeCallback)
{
if (_isFunction(handshakeProps))
{
handshakeCallback = handshakeProps;
handshakeProps = undefined;
}
_clientId = null;
_clearSubscriptions();
if (_isDisconnected())
{
_transports.reset();
_updateAdvice(_config.advice);
}
else
{
_updateAdvice(_cometd._mixin(false, _advice, {reconnect: 'retry'}));
}
_batch = 0;
_internalBatch = true;
_handshakeProps = handshakeProps;
_handshakeCallback = handshakeCallback;
var version = '1.0';
var url = _cometd.getURL();
var transportTypes = _transports.findTransportTypes(version, _crossDomain, url);
var bayeuxMessage = {
version: version,
minimumVersion: version,
channel: '/meta/handshake',
supportedConnectionTypes: transportTypes,
_callback: handshakeCallback,
advice: {
timeout: _advice.timeout,
interval: _advice.interval
}
};
var message = _cometd._mixin(false, {}, _handshakeProps, bayeuxMessage);
if (!_transport)
{
_transport = _transports.negotiateTransport(transportTypes, version, _crossDomain, url);
if (!_transport)
{
var failure = 'Could not find initial transport among: ' + _transports.getTransportTypes();
_cometd._warn(failure);
throw failure;
}
}
_cometd._debug('Initial transport is', _transport.getType());
_setStatus('handshaking');
_cometd._debug('Handshake sent', message);
_send(false, [message], false, 'handshake');
}
function _delayedHandshake()
{
_setStatus('handshaking');
_internalBatch = true;
_delayedSend(function()
{
_handshake(_handshakeProps, _handshakeCallback);
});
}
function _handleCallback(message)
{
var callback = _callbacks[message.id];
if (_isFunction(callback))
{
delete _callbacks[message.id];
callback.call(_cometd, message);
}
}
function _failHandshake(message)
{
_handleCallback(message);
_notifyListeners('/meta/handshake', message);
_notifyListeners('/meta/unsuccessful', message);
var retry = !_isDisconnected() && _advice.reconnect !== 'none';
if (retry)
{
_increaseBackoff();
_delayedHandshake();
}
else
{
_disconnect(false);
}
}
function _handshakeResponse(message)
{
if (message.successful)
{
_clientId = message.clientId;
var url = _cometd.getURL();
var newTransport = _transports.negotiateTransport(message.supportedConnectionTypes, message.version, _crossDomain, url);
if (newTransport === null)
{
var failure = 'Could not negotiate transport with server; client=[' +
_transports.findTransportTypes(message.version, _crossDomain, url) +
'], server=[' + message.supportedConnectionTypes + ']';
var oldTransport = _cometd.getTransport();
_notifyTransportFailure(oldTransport.getType(), null, {
reason: failure,
connectionType: oldTransport.getType(),
transport: oldTransport
});
_cometd._warn(failure);
_transport.reset();
_failHandshake(message);
return;
}
else if (_transport !== newTransport)
{
_cometd._debug('Transport', _transport.getType(), '->', newTransport.getType());
_transport = newTransport;
}
_internalBatch = false;
_flushBatch();
message.reestablish = _reestablish;
_reestablish = true;
_handleCallback(message);
_notifyListeners('/meta/handshake', message);
var action = _isDisconnected() ? 'none' : _advice.reconnect;
switch (action)
{
case 'retry':
_resetBackoff();
_delayedConnect();
break;
case 'none':
_disconnect(false);
break;
default:
throw 'Unrecognized advice action ' + action;
}
}
else
{
_failHandshake(message);
}
}
function _handshakeFailure(message)
{
var version = '1.0';
var url = _cometd.getURL();
var oldTransport = _cometd.getTransport();
var transportTypes = _transports.findTransportTypes(version, _crossDomain, url);
var newTransport = _transports.negotiateTransport(transportTypes, version, _crossDomain, url);
if (!newTransport)
{
_notifyTransportFailure(oldTransport.getType(), null, message.failure);
_cometd._warn('Could not negotiate transport; client=[' + transportTypes + ']');
_transport.reset();
_failHandshake(message);
}
else
{
_cometd._debug('Transport', oldTransport.getType(), '->', newTransport.getType());
_notifyTransportFailure(oldTransport.getType(), newTransport.getType(), message.failure);
_failHandshake(message);
_transport = newTransport;
}
}
function _failConnect(message)
{
_notifyListeners('/meta/connect', message);
_notifyListeners('/meta/unsuccessful', message);
var action = _isDisconnected() ? 'none' : _advice.reconnect;
switch (action)
{
case 'retry':
_delayedConnect();
_increaseBackoff();
break;
case 'handshake':
_transports.reset();
_resetBackoff();
_delayedHandshake();
break;
case 'none':
_disconnect(false);
break;
default:
throw 'Unrecognized advice action' + action;
}
}
function _connectResponse(message)
{
_connected = message.successful;
if (_connected)
{
_notifyListeners('/meta/connect', message);
var action = _isDisconnected() ? 'none' : _advice.reconnect;
switch (action)
{
case 'retry':
_resetBackoff();
_delayedConnect();
break;
case 'none':
_disconnect(false);
break;
default:
throw 'Unrecognized advice action ' + action;
}
}
else
{
_failConnect(message);
}
}
function _connectFailure(message)
{
_connected = false;
_failConnect(message);
}
function _failDisconnect(message)
{
_disconnect(true);
_handleCallback(message);
_notifyListeners('/meta/disconnect', message);
_notifyListeners('/meta/unsuccessful', message);
}
function _disconnectResponse(message)
{
if (message.successful)
{
_disconnect(false);
_handleCallback(message);
_notifyListeners('/meta/disconnect', message);
}
else
{
_failDisconnect(message);
}
}
function _disconnectFailure(message)
{
_failDisconnect(message);
}
function _failSubscribe(message)
{
var subscriptions = _listeners[message.subscription];
if (subscriptions)
{
for (var i = subscriptions.length - 1; i >= 0; --i)
{
var subscription = subscriptions[i];
if (subscription && !subscription.listener)
{
delete subscriptions[i];
_cometd._debug('Removed failed subscription', subscription);
break;
}
}
}
_handleCallback(message);
_notifyListeners('/meta/subscribe', message);
_notifyListeners('/meta/unsuccessful', message);
}
function _subscribeResponse(message)
{
if (message.successful)
{
_handleCallback(message);
_notifyListeners('/meta/subscribe', message);
}
else
{
_failSubscribe(message);
}
}
function _subscribeFailure(message)
{
_failSubscribe(message);
}
function _failUnsubscribe(message)
{
_handleCallback(message);
_notifyListeners('/meta/unsubscribe', message);
_notifyListeners('/meta/unsuccessful', message);
}
function _unsubscribeResponse(message)
{
if (message.successful)
{
_handleCallback(message);
_notifyListeners('/meta/unsubscribe', message);
}
else
{
_failUnsubscribe(message);
}
}
function _unsubscribeFailure(message)
{
_failUnsubscribe(message);
}
function _failMessage(message)
{
_handleCallback(message);
_notifyListeners('/meta/publish', message);
_notifyListeners('/meta/unsuccessful', message);
}
function _messageResponse(message)
{
if (message.successful === undefined)
{
if (message.data !== undefined)
{
_notifyListeners(message.channel, message);
}
else
{
_cometd._warn('Unknown Bayeux Message', message);
}
}
else
{
if (message.successful)
{
_handleCallback(message);
_notifyListeners('/meta/publish', message);
}
else
{
_failMessage(message);
}
}
}
function _messageFailure(failure)
{
_failMessage(failure);
}
function _receive(message)
{
message = _applyIncomingExtensions(message);
if (message === undefined || message === null)
{
return;
}
_updateAdvice(message.advice);
var channel = message.channel;
switch (channel)
{
case '/meta/handshake':
_handshakeResponse(message);
break;
case '/meta/connect':
_connectResponse(message);
break;
case '/meta/disconnect':
_disconnectResponse(message);
break;
case '/meta/subscribe':
_subscribeResponse(message);
break;
case '/meta/unsubscribe':
_unsubscribeResponse(message);
break;
default:
_messageResponse(message);
break;
}
}
this.receive = _receive;
_handleMessages = function(rcvdMessages)
{
_cometd._debug('Received', rcvdMessages);
for (var i = 0; i < rcvdMessages.length; ++i)
{
var message = rcvdMessages[i];
_receive(message);
}
};
_handleFailure = function(conduit, messages, failure)
{
_cometd._debug('handleFailure', conduit, messages, failure);
failure.transport = conduit;
for (var i = 0; i < messages.length; ++i)
{
var message = messages[i];
var failureMessage = {
id: message.id,
successful: false,
channel: message.channel,
failure: failure
};
failure.message = message;
switch (message.channel)
{
case '/meta/handshake':
_handshakeFailure(failureMessage);
break;
case '/meta/connect':
_connectFailure(failureMessage);
break;
case '/meta/disconnect':
_disconnectFailure(failureMessage);
break;
case '/meta/subscribe':
failureMessage.subscription = message.subscription;
_subscribeFailure(failureMessage);
break;
case '/meta/unsubscribe':
failureMessage.subscription = message.subscription;
_unsubscribeFailure(failureMessage);
break;
default:
_messageFailure(failureMessage);
break;
}
}
};
function _hasSubscriptions(channel)
{
var subscriptions = _listeners[channel];
if (subscriptions)
{
for (var i = 0; i < subscriptions.length; ++i)
{
if (subscriptions[i])
{
return true;
}
}
}
return false;
}
function _resolveScopedCallback(scope, callback)
{
var delegate = {
scope: scope,
method: callback
};
if (_isFunction(scope))
{
delegate.scope = undefined;
delegate.method = scope;
}
else
{
if (_isString(callback))
{
if (!scope)
{
throw 'Invalid scope ' + scope;
}
delegate.method = scope[callback];
if (!_isFunction(delegate.method))
{
throw 'Invalid callback ' + callback + ' for scope ' + scope;
}
}
else if (!_isFunction(callback))
{
throw 'Invalid callback ' + callback;
}
}
return delegate;
}
function _addListener(channel, scope, callback, isListener)
{
var delegate = _resolveScopedCallback(scope, callback);
_cometd._debug('Adding', isListener ? 'listener' : 'subscription', 'on', channel, 'with scope', delegate.scope, 'and callback', delegate.method);
var subscription = {
channel: channel,
scope: delegate.scope,
callback: delegate.method,
listener: isListener
};
var subscriptions = _listeners[channel];
if (!subscriptions)
{
subscriptions = [];
_listeners[channel] = subscriptions;
}
subscription.id = subscriptions.push(subscription) - 1;
_cometd._debug('Added', isListener ? 'listener' : 'subscription', subscription);
subscription[0] = channel;
subscription[1] = subscription.id;
return subscription;
}
this.registerTransport = function(type, transport, index)
{
var result = _transports.add(type, transport, index);
if (result)
{
this._debug('Registered transport', type);
if (_isFunction(transport.registered))
{
transport.registered(type, this);
}
}
return result;
};
this.getTransportTypes = function()
{
return _transports.getTransportTypes();
};
this.unregisterTransport = function(type)
{
var transport = _transports.remove(type);
if (transport !== null)
{
this._debug('Unregistered transport', type);
if (_isFunction(transport.unregistered))
{
transport.unregistered();
}
}
return transport;
};
this.unregisterTransports = function()
{
_transports.clear();
};
this.findTransport = function(name)
{
return _transports.find(name);
};
this.configure = function(configuration)
{
_configure.call(this, configuration);
};
this.init = function(configuration, handshakeProps)
{
this.configure(configuration);
this.handshake(handshakeProps);
};
this.handshake = function(handshakeProps, handshakeCallback)
{
_setStatus('disconnected');
_reestablish = false;
_handshake(handshakeProps, handshakeCallback);
};
this.disconnect = function(sync, disconnectProps, disconnectCallback)
{
if (_isDisconnected())
{
return;
}
if (typeof sync !== 'boolean')
{
disconnectCallback = disconnectProps;
disconnectProps = sync;
sync = false;
}
if (_isFunction(disconnectProps))
{
disconnectCallback = disconnectProps;
disconnectProps = undefined;
}
var bayeuxMessage = {
channel: '/meta/disconnect',
_callback: disconnectCallback
};
var message = this._mixin(false, {}, disconnectProps, bayeuxMessage);
_setStatus('disconnecting');
_send(sync === true, [message], false, 'disconnect');
};
this.startBatch = function()
{
_startBatch();
};
this.endBatch = function()
{
_endBatch();
};
this.batch = function(scope, callback)
{
var delegate = _resolveScopedCallback(scope, callback);
this.startBatch();
try
{
delegate.method.call(delegate.scope);
this.endBatch();
}
catch (x)
{
this._info('Exception during execution of batch', x);
this.endBatch();
throw x;
}
};
this.addListener = function(channel, scope, callback)
{
if (arguments.length < 2)
{
throw 'Illegal arguments number: required 2, got ' + arguments.length;
}
if (!_isString(channel))
{
throw 'Illegal argument type: channel must be a string';
}
return _addListener(channel, scope, callback, true);
};
this.removeListener = function(subscription)
{
if (!subscription || !subscription.channel || !("id" in subscription))
{
throw 'Invalid argument: expected subscription, not ' + subscription;
}
_removeListener(subscription);
};
this.clearListeners = function()
{
_listeners = {};
};
this.subscribe = function(channel, scope, callback, subscribeProps, subscribeCallback)
{
if (arguments.length < 2)
{
throw 'Illegal arguments number: required 2, got ' + arguments.length;
}
if (!_isString(channel))
{
throw 'Illegal argument type: channel must be a string';
}
if (_isDisconnected())
{
throw 'Illegal state: already disconnected';
}
if (_isFunction(scope))
{
subscribeCallback = subscribeProps;
subscribeProps = callback;
callback = scope;
scope = undefined;
}
if (_isFunction(subscribeProps))
{
subscribeCallback = subscribeProps;
subscribeProps = undefined;
}
var send = !_hasSubscriptions(channel);
var subscription = _addListener(channel, scope, callback, false);
if (send)
{
var bayeuxMessage = {
channel: '/meta/subscribe',
subscription: channel,
_callback: subscribeCallback
};
var message = this._mixin(false, {}, subscribeProps, bayeuxMessage);
_queueSend(message);
}
return subscription;
};
this.unsubscribe = function(subscription, unsubscribeProps, unsubscribeCallback)
{
if (arguments.length < 1)
{
throw 'Illegal arguments number: required 1, got ' + arguments.length;
}
if (_isDisconnected())
{
throw 'Illegal state: already disconnected';
}
if (_isFunction(unsubscribeProps))
{
unsubscribeCallback = unsubscribeProps;
unsubscribeProps = undefined;
}
this.removeListener(subscription);
var channel = subscription.channel;
if (!_hasSubscriptions(channel))
{
var bayeuxMessage = {
channel: '/meta/unsubscribe',
subscription: channel,
_callback: unsubscribeCallback
};
var message = this._mixin(false, {}, unsubscribeProps, bayeuxMessage);
_queueSend(message);
}
};
this.resubscribe = function(subscription, subscribeProps)
{
_removeSubscription(subscription);
if (subscription)
{
return this.subscribe(subscription.channel, subscription.scope, subscription.callback, subscribeProps);
}
return undefined;
};
this.clearSubscriptions = function()
{
_clearSubscriptions();
};
this.publish = function(channel, content, publishProps, publishCallback)
{
if (arguments.length < 1)
{
throw 'Illegal arguments number: required 1, got ' + arguments.length;
}
if (!_isString(channel))
{
throw 'Illegal argument type: channel must be a string';
}
if (/^\/meta\//.test(channel))
{
throw 'Illegal argument: cannot publish to meta channels';
}
if (_isDisconnected())
{
throw 'Illegal state: already disconnected';
}
if (_isFunction(content))
{
publishCallback = content;
content = publishProps = {};
}
else if (_isFunction(publishProps))
{
publishCallback = publishProps;
publishProps = {};
}
var bayeuxMessage = {
channel: channel,
data: content,
_callback: publishCallback
};
var message = this._mixin(false, {}, publishProps, bayeuxMessage);
_queueSend(message);
};
this.getStatus = function()
{
return _status;
};
this.isDisconnected = _isDisconnected;
this.setBackoffIncrement = function(period)
{
_config.backoffIncrement = period;
};
this.getBackoffIncrement = function()
{
return _config.backoffIncrement;
};
this.getBackoffPeriod = function()
{
return _backoff;
};
this.setLogLevel = function(level)
{
_config.logLevel = level;
};
this.registerExtension = function(name, extension)
{
if (arguments.length < 2)
{
throw 'Illegal arguments number: required 2, got ' + arguments.length;
}
if (!_isString(name))
{
throw 'Illegal argument type: extension name must be a string';
}
var existing = false;
for (var i = 0; i < _extensions.length; ++i)
{
var existingExtension = _extensions[i];
if (existingExtension.name === name)
{
existing = true;
break;
}
}
if (!existing)
{
_extensions.push({
name: name,
extension: extension
});
this._debug('Registered extension', name);
if (_isFunction(extension.registered))
{
extension.registered(name, this);
}
return true;
}
else
{
this._info('Could not register extension with name', name, 'since another extension with the same name already exists');
return false;
}
};
this.unregisterExtension = function(name)
{
if (!_isString(name))
{
throw 'Illegal argument type: extension name must be a string';
}
var unregistered = false;
for (var i = 0; i < _extensions.length; ++i)
{
var extension = _extensions[i];
if (extension.name === name)
{
_extensions.splice(i, 1);
unregistered = true;
this._debug('Unregistered extension', name);
var ext = extension.extension;
if (_isFunction(ext.unregistered))
{
ext.unregistered();
}
break;
}
}
return unregistered;
};
this.getExtension = function(name)
{
for (var i = 0; i < _extensions.length; ++i)
{
var extension = _extensions[i];
if (extension.name === name)
{
return extension.extension;
}
}
return null;
};
this.getName = function()
{
return _name;
};
this.getClientId = function()
{
return _clientId;
};
this.getURL = function()
{
if (_transport && typeof _config.urls === 'object')
{
var url = _config.urls[_transport.getType()];
if (url)
{
return  url;
}
}
return _config.url;
};
this.getTransport = function()
{
return _transport;
};
this.getConfiguration = function()
{
return this._mixin(true, {}, _config);
};
this.getAdvice = function()
{
return this._mixin(true, {}, _advice);
};
org.cometd.WebSocket = window.WebSocket;
if (!org.cometd.WebSocket)
{
org.cometd.WebSocket = window.MozWebSocket;
}
};
if (typeof define === 'function' && define.amd)
{
define(function()
{
return org.cometd;
});
}
})(this);
;
/*! RESOURCE: /scripts/thirdparty/cometd/vanilla/vanilla.cometd.js */
(function(global, org_cometd)
{
org_cometd.JSON.toJSON = window.JSON.stringify;
org_cometd.JSON.fromJSON = window.JSON.parse;
function _setHeaders(xhr, headers) {
if (headers) {
for (var headerName in headers) {
if (headerName.toLowerCase() === 'content-type') {
continue;
}
xhr.setRequestHeader(headerName, headers[headerName]);
}
}
}
function LongPollingTransport() {
var _super = new org_cometd.LongPollingTransport();
var that = org_cometd.Transport.derive(_super);
that.xhrSend = function(packet)
{
var request = new XMLHttpRequest();
request.open('POST', packet.url, true);
_setHeaders(request, packet.headers);
request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
request.xhrFields = {
withCredentials: true
};
request.onload = function() {
var state = this.status;
if (state >= 200 && state < 400)
packet.onSuccess(this.response);
else
packet.onError(state, this.statusText);
};
request.send(packet.body);
return request;
};
return that;
}
global.Cometd = function(name)
{
var CometD = org_cometd.Cometd || org_cometd.CometD;
var cometd = new CometD(name);
if (org_cometd.WebSocket) {
cometd.registerTransport('websocket', new org_cometd.WebSocketTransport());
}
cometd.registerTransport('long-polling', new LongPollingTransport());
return cometd;
};
})(window, org.cometd);
;
/*! RESOURCE: /scripts/amb_properties.js */
var amb = amb || {
properties: {
servletURI:  'amb/',
logLevel: 	 'info',
loginWindow: 'true'
}
};
;
/*! RESOURCE: /scripts/amb.Logger.js */
amb['Logger'] = function(callerType) {
var _debugEnabled = amb['properties']['logLevel'] == 'debug';
function print( message) {
if (window.console)
console.log(callerType + ' ' + message);
}
return {
debug: function( message) {
if (_debugEnabled)
print('[DEBUG] ' + message);
},
addInfoMessage:  function( message) {
print('[INFO] ' + message);
},
addErrorMessage:  function( message) {
print('[ERROR] ' + message);
}
}
};
;
/*! RESOURCE: /scripts/amb.EventManager.js */
amb.EventManager = function EventManager(events) {
var _subscriptions = [];
var _idCounter = 0;
function _getSubscriptions( event) {
var subscriptions = [];
for (var i = 0; i < _subscriptions.length; i++) {
if (_subscriptions[i].event == event)
subscriptions.push(_subscriptions[i]);
}
return subscriptions;
}
return {
subscribe:  function( event,  callback) {
var id = _idCounter++;
_subscriptions.push({ event: event, callback: callback,  id: id});
return id;
},
unsubscribe:  function( id) {
for (var i = 0; i < _subscriptions.length; i++)
if(id == _subscriptions[i].id)
_subscriptions.splice(i, 1);
},
publish:  function(event, args) {
var subscriptions = _getSubscriptions(event);
for (var i = 0; i < subscriptions.length; i++)
subscriptions[i].callback.apply(null, args);
},
getEvents:  function() {
return events;
}
}
};
;
/*! RESOURCE: /scripts/amb.ServerConnection.js */
amb.ServerConnection = function ServerConnection(cometd) {
var connected = false;
var disconnecting = false;
var eventManager = new amb.EventManager({
CONNECTION_INITIALIZED: 'connection.initialized',
CONNECTION_OPENED: 'connection.opened',
CONNECTION_CLOSED: 'connection.closed',
CONNECTION_BROKEN: 'connection.broken',
SESSION_LOGGED_IN: 'session.logged.in',
SESSION_LOGGED_OUT: 'session.logged.out',
SESSION_INVALIDATED: 'session.invalidated'
});
var state = "closed";
var LOGGER = new amb.Logger('amb.ServerConnection');
_initializeMetaChannelListeners();
var loggedIn = true;
var loginWindow = null;
var loginWindowEnabled = amb.properties['loginWindow'] === 'true';
var lastError = null;
var errorMessages = {'UNKNOWN_CLIENT': '402::Unknown client'};
var loginWindowOverride = false;
var ambServerConnection = {};
ambServerConnection.connect =  function() {
if (connected) {
console.log(">>> connection exists, request satisfied");
return;
}
LOGGER.debug('Connecting to glide amb server -> ' + amb['properties']['servletURI']);
cometd.configure({
url: _getRelativePath(amb['properties']['servletURI']),
logLevel: amb['properties']['logLevel']
});
cometd.handshake();
};
ambServerConnection.reload =  function() {
cometd.reload();
};
ambServerConnection.abort =  function() {
cometd.getTransport().abort();
};
ambServerConnection.disconnect =  function() {
LOGGER.debug('Disconnecting from glide amb server..');
disconnecting = true;
cometd.disconnect();
};
function _initializeMetaChannelListeners() {
cometd.addListener('/meta/handshake', this, _metaHandshake);
cometd.addListener('/meta/connect', this, _metaConnect);
}
function _metaHandshake( message) {
setTimeout(function() {
if (message['successful'])
_connectionInitialized();
}, 0);
}
function applyAMBProperties(message) {
if (message.ext) {
if (message.ext['glide.amb.active'] === false) {
ambServerConnection.disconnect();
}
if (message.ext['glide.amb.client.log.level'] !== undefined
&& message.ext['glide.amb.client.log.level'] !== '') {
amb.properties.logLevel = message.ext['glide.amb.client.log.level'];
cometd.setLogLevel(amb.properties.logLevel);
}
}
}
function _metaConnect( message) {
applyAMBProperties(message);
if (disconnecting) {
setTimeout(function() {
connected = false;
_connectionClosed();
}, 0);
return;
}
var error = message['error'];
if (error)
lastError = error;
_sessionStatus(message);
var wasConnected = connected;
connected = (message['successful'] === true);
if (!wasConnected && connected)
_connectionOpened();
else if (wasConnected && !connected)
_connectionBroken();
}
function _connectionInitialized() {
LOGGER.debug('Connection initialized');
state = "initialized";
_publishEvent(eventManager.getEvents().CONNECTION_INITIALIZED);
}
function _connectionOpened() {
LOGGER.debug('Connection opened');
state = "opened";
_publishEvent(eventManager.getEvents().CONNECTION_OPENED);
}
function _connectionClosed() {
LOGGER.debug('Connection closed');
state = "closed";
_publishEvent(eventManager.getEvents().CONNECTION_CLOSED);
}
function _connectionBroken() {
LOGGER.addErrorMessage('Connection broken');
state = "broken";
_publishEvent(eventManager.getEvents().CONNECTION_BROKEN);
}
function _sessionStatus( message) {
var ext = message['ext'];
if (ext) {
var sessionStatus = ext['glide.session.status'];
loginWindowOverride = ext['glide.amb.login.window.override'] === true;
LOGGER.debug('session.status - ' + sessionStatus);
switch (sessionStatus) {
case 'session.logged.out':
if (loggedIn)
_logout();
break;
case 'session.logged.in':
if (!loggedIn)
_login();
break;
case 'session.invalidated':
case null:
if (loggedIn)
_invalidated();
break;
default:
LOGGER.debug("unknown session status - " + sessionStatus);
break;
}
}
}
function _login() {
loggedIn = true;
LOGGER.debug("LOGGED_IN event fire!");
_publishEvent(eventManager.getEvents().SESSION_LOGGED_IN);
ambServerConnection.loginHide();
}
function _logout() {
loggedIn = false;
LOGGER.debug("LOGGED_OUT event fire!");
_publishEvent(eventManager.getEvents().SESSION_LOGGED_OUT);
ambServerConnection.loginShow();
}
function _invalidated() {
loggedIn = false;
LOGGER.debug("INVALIDATED event fire!");
_publishEvent(eventManager.getEvents().SESSION_INVALIDATED);
}
function _publishEvent(event) {
try {
eventManager.publish(event);
} catch(e) {
LOGGER.addErrorMessage("error publishing '" + event + "' - " + e);
}
}
var modalContent = '<iframe src="/amb_login.do" frameborder="0" height="400px" width="405px" scrolling="no"></iframe>';
var modalTemplate = '<div id="amb_disconnect_modal" tabindex="-1" aria-hidden="true" class="modal" role="dialog">' +
'  <div class="modal-dialog small-modal" style="width:450px">' +
'     <div class="modal-content">' +
'        <header class="modal-header">' +
'           <h4 id="small_modal1_title" class="modal-title">Login</h4>' +
'        </header>' +
'        <div class="modal-body">' +
'        </div>' +
'     </div>' +
'  </div>' +
'</div>';
function _loginShow() {
LOGGER.debug("Show login window");
if (!loginWindowEnabled || loginWindowOverride)
return;
var dialog = new GlideModal('amb_disconnect_modal');
if (dialog['renderWithContent']) {
dialog.template = modalTemplate;
dialog.renderWithContent(modalContent);
} else {
dialog.setBody(modalContent);
dialog.render();
}
loginWindow = dialog;
}
function _loginHide() {
if (!loginWindow)
return;
loginWindow.destroy();
loginWindow = null;
}
function loginComplete() {
_login();
}
function _getRelativePath ( uri) {
var relativePath = "";
for (var i = 0; i < window.location.pathname.match(/\//g).length - 1; i++) {
relativePath = "../" + relativePath;
}
return relativePath + uri;
}
ambServerConnection.getEvents = function() {
return eventManager.getEvents();
};
ambServerConnection.getConnectionState = function() {
return state;
};
ambServerConnection.getLastError = function() {
return lastError;
};
ambServerConnection.setLastError = function(error) {
lastError = error;
};
ambServerConnection.getErrorMessages =  function() {
return errorMessages;
};
ambServerConnection.isLoggedIn = function() {
return loggedIn;
};
ambServerConnection.loginShow = function() {
_loginShow();
};
ambServerConnection.loginHide =function() {
_loginHide();
};
ambServerConnection.loginComplete = function() {
_login();
};
ambServerConnection.subscribeToEvent =  function( event,  callback) {
if (eventManager.getEvents().CONNECTION_OPENED == event && connected)
callback();
return eventManager.subscribe(event, callback);
};
ambServerConnection.unsubscribeFromEvent =  function( id) {
eventManager.unsubscribe(id);
};
ambServerConnection.getConnectionState =  function() {
return state;
};
ambServerConnection.isLoginWindowEnabled =  function() {
return loginWindowEnabled;
};
ambServerConnection.isLoginWindowOverride =   function() {
return loginWindowOverride;
}
return ambServerConnection;
};
;
/*! RESOURCE: /scripts/amb.ChannelRedirect.js */
amb.ChannelRedirect = function ChannelRedirect(cometd,  serverConnection,
channelProvider) {
var initialized = false;
var _cometd = cometd;
var eventManager = new amb.EventManager({
CHANNEL_REDIRECT: 'channel.redirect'
});
var LOGGER = new amb.Logger('amb.ChannelRedirect');
function _onAdvice(advice) {
LOGGER.debug('_onAdvice:' + advice.data.clientId);
var fromChannel = channelProvider(advice.data.fromChannel);
var toChannel = channelProvider(advice.data.toChannel);
eventManager.publish(eventManager.getEvents().CHANNEL_REDIRECT, [fromChannel, toChannel]);
LOGGER.debug(
'published channel switch event, fromChannel:' + fromChannel.getName()
+ ', toChannel:' + toChannel.getName());
}
return {
subscribeToEvent:  function( event, callback) {
return eventManager.subscribe(event, callback);
},
unsubscribeToEvent:  function( id) {
eventManager.unsubscribe(id);
},
getEvents:  function() {
return eventManager.getEvents();
},
initialize: function() {
if (!initialized) {
var channelName = '/sn/meta/channel_redirect/' + _cometd.getClientId();
var metaChannel = channelProvider(channelName);
metaChannel.newListener(serverConnection, null).subscribe(_onAdvice);
LOGGER.debug("ChannelRedirect initialized: " + channelName);
initialized = true;
}
}
}
};
;
/*! RESOURCE: /scripts/amb.ChannelListener.js */
amb.ChannelListener = function ChannelListener( channel,  serverConnection,
channelRedirect) {
var id;
var subscriberCallback;
var LOGGER = new amb.Logger('amb.ChannelListener');
var channelRedirectId = null;
var connectOpenedEventId;
var currentChannel = channel;
return {
getCallback:  function() {
return subscriberCallback;
},
getID:  function() {
return id;
},
subscribe:  function( callback) {
subscriberCallback = callback;
if (channelRedirect)
channelRedirectId = channelRedirect.subscribeToEvent(
channelRedirect.getEvents().CHANNEL_REDIRECT, this._switchToChannel.bind(this));
connectOpenedEventId = serverConnection.subscribeToEvent(serverConnection.getEvents().CONNECTION_OPENED, this._subscribeWhenReady.bind(this));
return this;
},
resubscribe:  function() {
return this.subscribe(subscriberCallback);
},
_switchToChannel: function( fromChannel,  toChannel) {
if (!fromChannel || !toChannel)
return;
if (fromChannel.getName() != currentChannel.getName())
return;
this.unsubscribe();
currentChannel = toChannel;
this.subscribe(subscriberCallback);
},
_subscribeWhenReady: function() {
LOGGER.debug("Subscribing to '" + currentChannel.getName() + "'...");
id = currentChannel.subscribe(this);
},
unsubscribe:  function() {
channelRedirect.unsubscribeToEvent(channelRedirectId);
currentChannel.unsubscribe(this);
serverConnection.unsubscribeFromEvent(connectOpenedEventId);
LOGGER.debug("Unsubscribed from channel: " + currentChannel.getName());
return this;
},
publish:  function( message) {
currentChannel.publish(message);
},
getName:  function() {
return currentChannel.getName();
}
}
};
;
/*! RESOURCE: /scripts/amb.Channel.js */
amb.Channel = function Channel(cometd, channelName, initialized) {
var subscription = null;
var listeners = [];
var LOGGER = new amb.Logger('amb.Channel');
var idCounter = 0;
var _initialized = initialized;
function _disconnected() {
var status = cometd.getStatus();
return status === 'disconnecting' || status === 'disconnected';
}
return {
newListener:  function( serverConnection,
channelRedirect) {
return new amb.ChannelListener(this, serverConnection, channelRedirect);
},
subscribe:  function( listener) {
if (_disconnected()) {
LOGGER.addErrorMessage('Illegal state: already disconnected');
return;
}
if (!listener.getCallback()) {
LOGGER.addErrorMessage('Cannot subscribe to channel: ' + channelName
+ ', callback not provided');
return;
}
if (!subscription && _initialized) {
try {
this.subscribeToCometD();
} catch (e) {
LOGGER.addErrorMessage(e);
return;
}
}
for (var i = 0; i < listeners.length; i++) {
if (listeners[i] === listener) {
LOGGER.debug('Channel listener already in the list');
return listener.getID();
}
}
var id = idCounter++;
listeners.push(listener);
return id;
},
resubscribe:  function() {
subscription = null;
for (var i = 0; i < listeners.length; i++)
listeners[i].resubscribe();
},
subscribeOnInitCompletion: function(redirect) {
_initialized = true;
subscription = null;
for (var i = 0; i < listeners.length; i++) {
listeners[i].subscribe();
LOGGER.debug('Successfully subscribed to channel: ' + channelName);
}
},
_handleResponse:  function( message) {
for (var i = 0; i < listeners.length; i++)
listeners[i].getCallback()(message);
},
unsubscribe:  function( listener) {
if (!listener) {
LOGGER.addErrorMessage('Cannot unsubscribe from channel: ' + channelName
+ ', listener argument does not exist');
return;
}
for (var i = 0; i < listeners.length; i++) {
if (listeners[i].getID() == listener.getID())
listeners.splice(i, 1);
}
if (listeners.length < 1 && subscription && !_disconnected())
this.unsubscribeFromCometD();
},
publish:  function( message) {
cometd.publish(channelName, message);
},
subscribeToCometD:  function() {
subscription = cometd.subscribe(channelName, this._handleResponse.bind(this));
LOGGER.debug('Successfully subscribed to channel: ' + channelName);
},
unsubscribeFromCometD:  function() {
if (!subscription)
return;
cometd.unsubscribe(subscription);
subscription = null;
LOGGER.debug('Successfully unsubscribed from channel: ' + channelName);
},
resubscribeToCometD:  function() {
this.subscribeToCometD();
},
getName:  function() {
return channelName;
}
}
};
;
/*! RESOURCE: /scripts/amb.MessageClient.js */
(function() {
amb.MessageClient = function MessageClient() {
var cometd = new window.Cometd();
cometd.unregisterTransport('websocket');
cometd.unregisterTransport('callback-polling');
var serverConnection = new amb.ServerConnection(cometd);
var channels = {};
var LOGGER = new amb.Logger('amb.MessageClient');
var channelRedirect = null;
var connected = false;
var initialized = false;
var uninitializedChannels = [];
serverConnection.subscribeToEvent(serverConnection.getEvents().CONNECTION_BROKEN, _connectionBroken);
serverConnection.subscribeToEvent(serverConnection.getEvents().CONNECTION_OPENED, _connectionOpened);
serverConnection.subscribeToEvent(serverConnection.getEvents().CONNECTION_INITIALIZED, _connectionInitialized);
serverConnection.subscribeToEvent(serverConnection.getEvents().SESSION_LOGGED_OUT, _unsubscribeAll);
serverConnection.subscribeToEvent(serverConnection.getEvents().SESSION_INVALIDATED, _unsubscribeAll);
serverConnection.subscribeToEvent(serverConnection.getEvents().SESSION_LOGGED_IN, _resubscribeAll);
var _connectionBrokenEvent = false;
function _connectionBroken() {
LOGGER.debug("connection broken!");
_connectionBrokenEvent = true;
}
function _connectionInitialized() {
initialized = true;
_initChannelRedirect();
channelRedirect.initialize();
LOGGER.debug("Connection initialized. Initializing " + uninitializedChannels.length + " channels.");
for (var i = 0; i <  uninitializedChannels.length; i++) {
uninitializedChannels[i].subscribeOnInitCompletion();
}
uninitializedChannels = [];
}
function _connectionOpened() {
if (_connectionBrokenEvent) {
LOGGER.debug("connection opened!");
var sc = serverConnection;
if (sc.getLastError() !== sc.getErrorMessages().UNKNOWN_CLIENT)
return;
sc.setLastError(null);
LOGGER.debug("channel resubscribe!");
var request = new XMLHttpRequest();
request.open("GET", "/amb_session_setup.do", true);
request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
request.setRequestHeader("X-UserToken", window.g_ck);
request.send();
request.onload = function() {
if (this.status != 200) {
return;
}
_resubscribeAll();
_connectionBrokenEvent = false;
};
}
}
function _unsubscribeAll() {
LOGGER.debug("Unsubscribing from all!");
for (var name in channels) {
var channel = channels[name];
channel.unsubscribeFromCometD();
}
}
function _resubscribeAll() {
LOGGER.debug("Resubscribing to all!");
for (var name in channels) {
var channel = channels[name];
channel.resubscribeToCometD();
}
}
function _initChannelRedirect() {
if (channelRedirect)
return;
channelRedirect = new amb.ChannelRedirect(cometd, serverConnection, _getChannel);
}
function _getChannel( channelName) {
if (channelName in channels)
return channels[channelName];
var channel = new amb.Channel(cometd, channelName, initialized);
channels[channelName] = channel;
if (!initialized)
uninitializedChannels.push(channel);
return channel;
}
function _removeChannel(channelName) {
delete channels[channelName];
}
return {
getServerConnection: function() {
return serverConnection;
},
isLoggedIn: function() {
return serverConnection.isLoggedIn();
},
loginComplete: function() {
serverConnection.loginComplete();
},
connect:  function() {
if (connected) {
LOGGER.addInfoMessage(">>> connection exists, request satisfied");
return;
}
connected = true;
serverConnection.connect();
},
reload:  function() {
connected = false;
serverConnection.reload();
},
abort:  function() {
connected = false;
serverConnection.abort();
},
disconnect:  function() {
connected = false;
serverConnection.disconnect();
},
getConnectionEvents:  function() {
return serverConnection.getEvents();
},
subscribeToEvent:  function( event,  callback) {
return serverConnection.subscribeToEvent(event, callback);
},
unsubscribeFromEvent:  function( id) {
serverConnection.unsubscribeFromEvent(id);
},
getConnectionState:  function() {
return serverConnection.getConnectionState();
},
getClientId:  function() {
return cometd.getClientId();
},
getChannel:  function( channelName) {
_initChannelRedirect();
var channel = _getChannel(channelName);
return channel.newListener(serverConnection, channelRedirect);
},
registerExtension:  function( extensionName,  extension) {
cometd.registerExtension(extensionName, extension);
},
unregisterExtension:  function( extensionName) {
cometd.unregisterExtension(extensionName);
},
batch:  function( block) {
cometd.batch(block);
},
removeChannel: function(channelName) {
_removeChannel(channelName)
}
}
};
})();
;
/*! RESOURCE: /scripts/amb.MessageClientBuilder.js */
(function() {
'use strict';
amb.getClient = function() {
return getClient();
};
function getClient() {
var client = getParentAmbClient(window);
if (client) {
return wrapClient(client, window);
}
client = wrapClient(buildClient(), window);
setClient(client);
return client;
}
function getParentAmbClient(clientWindow) {
try {
if (!(clientWindow.MSInputMethodContext && clientWindow.document.documentMode)) {
while (clientWindow !== clientWindow.parent) {
if (clientWindow.g_ambClient) {
break;
}
clientWindow = clientWindow.parent;
}
}
if (clientWindow.g_ambClient) {
return clientWindow.g_ambClient;
}
} catch(e) {
console.log('AMB getClient() tried to access parent from an iFrame. Caught error: ' + e);
}
return null;
}
function wrapClient(client, clientWindow) {
if (typeof client.getClientWindow !== 'undefined') {
var context = client.getClientWindow();
if (context === clientWindow) {
return client;
}
}
var wrappedClient = clone({}, client);
wrappedClient.getChannel = function(channelName, overrideWindow) {
return client.getChannel(channelName, overrideWindow || clientWindow);
};
wrappedClient.subscribeToEvent = function(event, callback, overrideWindow) {
return client.subscribeToEvent(event, callback, overrideWindow || clientWindow);
};
wrappedClient.unsubscribeFromEvent = function(id, overrideWindow) {
return client.unsubscribeFromEvent(id, overrideWindow || clientWindow);
};
wrappedClient.getClientWindow = function() {
return clientWindow;
};
return wrappedClient;
}
function clone(dest, source) {
for (var prop in source) {
if (Object.prototype.hasOwnProperty.call(source, prop)) {
dest[prop] = source[prop];
}
}
return dest;
}
function setClient(client) {
var _window = window.self;
_window.g_ambClient = client;
_window.addEventListener("unload", function() {
_window.g_ambClient.disconnect();
});
var documentReadyState = _window.document ? _window.document.readyState : null;
if (documentReadyState === 'complete') {
autoConnect();
} else {
_window.addEventListener('load', autoConnect);
}
setTimeout(autoConnect, 10000);
var initiatedConnection = false;
function autoConnect() {
if (!initiatedConnection) {
initiatedConnection = true;
_window.g_ambClient.connect();
}
}
}
function buildClient() {
return (function () {
var ambClient = new amb.MessageClient();
var clientSubscriptions = buildClientSubscriptions();
return {
getServerConnection: function() {
return ambClient.getServerConnection();
},
connect:  function () {
ambClient.connect();
},
abort:  function () {
ambClient.abort();
},
disconnect:  function () {
ambClient.disconnect();
},
getConnectionState:  function () {
return ambClient.getConnectionState();
},
getState:  function () {
return ambClient.getConnectionState();
},
getClientId:  function () {
return ambClient.getClientId();
},
getChannel:  function ( channelName,  windowContext) {
var channel = ambClient.getChannel(channelName);
var originalSubscribe = channel.subscribe;
var originalUnsubscribe = channel.unsubscribe;
windowContext = windowContext || window;
channel.subscribe = function(listener) {
clientSubscriptions.add(windowContext, channel, listener, function() {
channel.unsubscribe(listener);
});
windowContext.addEventListener('unload', function() {
ambClient.removeChannel(channelName);
});
originalSubscribe.call(channel, listener);
return channel;
};
channel.unsubscribe = function(listener) {
clientSubscriptions.remove(windowContext, channel, listener);
return originalUnsubscribe.call(channel, listener);
};
return channel;
},
getChannel0:  function ( channelName) {
return ambClient.getChannel(channelName);
},
registerExtension:  function ( extensionName,  extension) {
ambClient.registerExtension(extensionName, extension);
},
unregisterExtension:  function ( extensionName) {
ambClient.unregisterExtension(extensionName);
},
batch:  function ( block) {
ambClient.batch(block);
},
subscribeToEvent:  function ( event,  callback,  windowContext) {
windowContext = windowContext || window;
var id = ambClient.subscribeToEvent(event, callback);
clientSubscriptions.add(windowContext, id, true, function() {
ambClient.unsubscribeFromEvent(id);
});
return id;
},
unsubscribeFromEvent:  function( id,  windowContext) {
windowContext = windowContext || window;
clientSubscriptions.remove(windowContext, id, true);
ambClient.unsubscribeFromEvent(id);
},
isLoggedIn:  function () {
return ambClient.isLoggedIn();
},
getConnectionEvents:  function () {
return ambClient.getConnectionEvents();
},
getEvents:  function () {
return ambClient.getConnectionEvents();
},
loginComplete: function () {
ambClient.loginComplete();
}
};
})();
function buildClientSubscriptions() {
var contexts = [];
function addSubscription(clientWindow, id, callback, unsubscribe) {
if (!clientWindow || !callback || !unsubscribe) {
return;
}
removeSubscription(clientWindow, id, callback);
var context = getContext(clientWindow);
if (!context) {
context = createContext(clientWindow);
}
if (context.unloading) {
return;
}
context.subscriptions.push({
id: id,
callback: callback,
unsubscribe: unsubscribe
});
}
function removeSubscription(clientWindow, id, callback) {
if (!clientWindow || !callback) {
return;
}
var context = getContext(clientWindow);
if (!context) {
return;
}
var subscriptions = context.subscriptions;
for (var i = subscriptions.length - 1; i >= 0; i--) {
if (subscriptions[i].id === id && subscriptions[i].callback === callback) {
subscriptions.splice(i, 1);
}
}
}
function getContext(clientWindow) {
for (var i = 0, iM = contexts.length; i < iM; i++) {
if (contexts[i].window === clientWindow) {
return contexts[i];
}
}
return null;
}
function createContext(clientWindow) {
var context = {
window: clientWindow,
onUnload: function() {
context.unloading = true;
var subscriptions = context.subscriptions;
var subscription;
while (subscription = subscriptions.pop()) {
subscription.unsubscribe();
}
destroyContext(context);
},
unloading: false,
subscriptions: []
};
clientWindow.addEventListener('unload', context.onUnload);
contexts.push(context);
return context;
}
function destroyContext(context) {
for (var i = 0, iM = contexts.length; i < iM; i++) {
if (contexts[i].window === context.window) {
contexts.splice(i, 1);
break;
}
}
context.subscriptions = [];
context.window.removeEventListener('unload', context.onUnload);
context.onUnload = null;
context.window = null;
}
return {
add: addSubscription,
remove: removeSubscription
};
}
}
})();
;
;
/*! RESOURCE: /scripts/app.ng.amb/app.ng.amb.js */
angular.module("ng.amb", ['sn.common.presence', 'sn.common.util'])
.value("ambLogLevel", 'info')
.value("ambServletURI", '/amb')
.value("cometd", angular.element.cometd)
.value("ambLoginWindow", 'true');
;
/*! RESOURCE: /scripts/app.ng.amb/service.AMB.js */
angular.module("ng.amb").service("amb", function (AMBOverlay, $window, $q, $log, $rootScope, $timeout) {
"use strict";
var ambClient = null;
var _window = $window.self;
var loginWindow = null;
var sameScope = false;
ambClient = amb.getClient();
if (_window.g_ambClient) {
sameScope = true;
}
if (sameScope) {
var serverConnection = ambClient.getServerConnection();
serverConnection.loginShow = function() {
if (!serverConnection.isLoginWindowEnabled())
return;
if (loginWindow && loginWindow.isVisible())
return;
if (serverConnection.isLoginWindowOverride())
return;
loginWindow = new AMBOverlay();
loginWindow.render();
loginWindow.show();
};
serverConnection.loginHide = function() {
if (!loginWindow)
return;
loginWindow.hide();
loginWindow.destroy();
loginWindow = null;
}
}
var AUTO_CONNECT_TIMEOUT = 20 * 1000;
var connected = $q.defer();
var connectionInterrupted = false;
var monitorAMB = false;
$timeout(startMonitoringAMB, AUTO_CONNECT_TIMEOUT);
connected.promise.then(startMonitoringAMB);
function startMonitoringAMB() {
monitorAMB = true;
}
function ambInterrupted() {
var state = ambClient.getState();
return monitorAMB && state !== "opened" && state !== "initialized"
}
var interruptionTimeout;
var extendedInterruption = false;
function setInterrupted(eventName) {
connectionInterrupted = true;
$rootScope.$broadcast(eventName);
if (!interruptionTimeout) {
interruptionTimeout = $timeout(function () {
extendedInterruption = true;
}, 30 * 1000)
}
connected = $q.defer();
}
var connectOpenedEventId = ambClient.subscribeToEvent("connection.opened", function () {
$rootScope.$broadcast("amb.connection.opened");
if (interruptionTimeout) {
$timeout.cancel(interruptionTimeout);
interruptionTimeout = null;
}
extendedInterruption = false;
if(connectionInterrupted) {
connectionInterrupted = false;
$rootScope.$broadcast("amb.connection.recovered");
}
connected.resolve();
});
var connectClosedEventId = ambClient.subscribeToEvent("connection.closed", function () {
setInterrupted("amb.connection.closed");
});
var connectBrokenEventId = ambClient.subscribeToEvent("connection.broken", function () {
setInterrupted("amb.connection.broken");
});
var onUnloadWindow = function() {
ambClient.unsubscribeFromEvent(connectOpenedEventId);
ambClient.unsubscribeFromEvent(connectClosedEventId);
ambClient.unsubscribeFromEvent(connectBrokenEventId);
angular.element($window).off('unload', onUnloadWindow);
};
angular.element($window).on('unload', onUnloadWindow);
var documentReadyState = $window.document ? $window.document.readyState : null;
if(documentReadyState === 'complete') {
autoConnect();
} else {
angular.element($window).on('load', autoConnect);
}
$timeout(autoConnect, 10000);
var initiatedConnection = false;
function autoConnect() {
if (!initiatedConnection) {
initiatedConnection = true;
ambClient.connect();
}
}
return {
getServerConnection: function() {
return ambClient.getServerConnection();
},
connect: function() {
if (initiatedConnection) {
ambClient.connect();
}
return connected.promise;
},
get interrupted() {
return ambInterrupted();
},
get extendedInterruption() {
return extendedInterruption;
},
get connected() {
return connected.promise;
},
abort: function() {
ambClient.abort();
},
disconnect: function() {
ambClient.disconnect();
},
getConnectionState: function () {
return ambClient.getConnectionState();
},
getClientId: function () {
return ambClient.getClientId();
},
getChannel: function(channelName) {
return ambClient.getChannel(channelName);
},
registerExtension: function(extensionName, extension) {
ambClient.registerExtension(extensionName, extension);
},
unregisterExtension: function(extensionName) {
ambClient.unregisterExtension(extensionName);
},
batch: function(batch) {
ambClient.batch(batch);
},
getState: function() {
return ambClient.getState();
},
getFilterString: function(filter) {
filter = filter.
replace(/\^EQ/g, '').
replace(/\^ORDERBY(?:DESC)?[^^]*/g, '').
replace(/^GOTO/, '');
return btoa(filter).replace(/=/g, '-');
},
getChannelRW: function(table, filter) {
var t = '/rw/default/' + table + '/' + this.getFilterString(filter);
return this.getChannel(t);
},
isLoggedIn: function() {
return ambClient.isLoggedIn();
},
subscribeToEvent: function(event, callback) {
return ambClient.subscribeToEvent(event, callback);
},
getConnectionEvents: function() {
return ambClient.getConnectionEvents();
},
getEvents: function() {
return ambClient.getConnectionEvents();
},
loginComplete: function() {
ambClient.loginComplete();
}
};
});
;
/*! RESOURCE: /scripts/app.ng.amb/controller.AMBRecordWatcher.js */
angular.module("ng.amb").controller("AMBRecordWatcher", function($scope, $timeout, $window) {
"use strict";
var amb = $window.top.g_ambClient;
$scope.messages = [];
var lastFilter;
var watcherChannel;
var watcher;
function onMessage(message) {
$scope.messages.push(message.data);
}
$scope.getState = function() {
return amb.getState();
};
$scope.initWatcher = function() {
angular.element(":focus").blur();
if(!$scope.filter || $scope.filter === lastFilter)
return;
lastFilter = $scope.filter;
console.log("initiating watcher on " + $scope.filter);
$scope.messages = [];
if(watcher) {
watcher.unsubscribe();
}
var base64EncodeQuery = btoa($scope.filter).replace(/=/g, '-');
var channelId = '/rw/' + base64EncodeQuery;
watcherChannel = amb.getChannel(channelId)
watcher = watcherChannel.subscribe(onMessage);
};
amb.connect();
})
;
/*! RESOURCE: /scripts/app.ng.amb/factory.snRecordWatcher.js */
angular.module("ng.amb").factory('snRecordWatcher', function($rootScope, amb, $timeout, snPresence, $log, urlTools) {
"use strict";
var watcherChannel;
var connected = false;
var diagnosticLog = true;
function initWatcher(table, sys_id, query) {
if (!table)
return;
if (sys_id)
var filter = "sys_id=" + sys_id;
else
filter = query;
if (!filter)
return;
return initChannel(table, filter);
}
function initList(table, query) {
if (!table)
return;
query = query || "sys_idISNOTEMPTY";
return initChannel(table, query);
}
function initTaskList(list, prevChannel) {
if (prevChannel)
prevChannel.unsubscribe();
var sys_ids = list.toString();
var filter = "sys_idIN" + sys_ids;
return initChannel("task", filter);
}
function initChannel(table, filter) {
if (isBlockedTable(table)) {
$log.log("Blocked from watching", table);
return null;
}
if (diagnosticLog)
log(">>> init " + table + "?" + filter);
watcherChannel = amb.getChannelRW(table, filter);
watcherChannel.subscribe(onMessage);
amb.connect();
return watcherChannel;
}
function onMessage(message) {
var r = message.data;
var c = message.channel;
if (diagnosticLog)
log(">>> record " + r.operation + ": " + r.table_name + "." + r.sys_id + " " + r.display_value);
$rootScope.$broadcast('record.updated', r);
$rootScope.$broadcast("sn.stream.tap");
$rootScope.$broadcast('list.updated', r, c);
}
function log(message) {
$log.log(message);
}
function isBlockedTable(table) {
return table == 'sys_amb_message' || table.startsWith('sys_rw');
}
return {
initTaskList: initTaskList,
initChannel: initChannel,
init: function () {
var location = urlTools.parseQueryString(window.location.search);
var table = location['table'] || location['sysparm_table'];
var sys_id = location['sys_id'] || location['sysparm_sys_id'];
var query = location['sysparm_query'];
initWatcher(table, sys_id, query);
snPresence.init(table, sys_id, query);
},
initList:  initList,
initRecord: function(table, sysId) {
initWatcher(table, sysId, null);
snPresence.initPresence(table, sysId);
},
_initWatcher: initWatcher
}
});
;
/*! RESOURCE: /scripts/app.ng.amb/factory.AMBOverlay.js */
angular.module("ng.amb").factory("AMBOverlay", function($templateCache, $compile, $rootScope) {
"use strict";
var showCallbacks = [],
hideCallbacks = [],
isRendered = false,
modal,
modalScope,
modalOptions;
var defaults = {
backdrop: 'static',
keyboard: false,
show: true
};
function AMBOverlay(config) {
config = config || {};
if(angular.isFunction(config.onShow))
showCallbacks.push(config.onShow);
if(angular.isFunction(config.onHide))
hideCallbacks.push(config.onHide);
function lazyRender() {
if(!angular.element('html')['modal']) {
var bootstrapInclude = "/scripts/bootstrap3/bootstrap.js";
ScriptLoader.getScripts([bootstrapInclude], renderModal);
} else
renderModal();
}
function renderModal() {
if(isRendered)
return;
modalScope = angular.extend($rootScope.$new(), config);
modal = $compile($templateCache.get("amb_disconnect_modal.xml"))(modalScope);
angular.element("body").append(modal);
modal.on("shown.bs.modal", function(e) {
for(var i = 0, len = showCallbacks.length; i < len; i++)
showCallbacks[i](e);
});
modal.on("hidden.bs.modal", function(e) {
for(var i = 0, len = hideCallbacks.length; i < len; i++)
hideCallbacks[i](e);
});
modalOptions = angular.extend({}, defaults, config);
modal.modal(modalOptions);
isRendered = true;
}
function showModal() {
if(isRendered)
modal.modal('show');
}
function hideModal() {
if(isRendered)
modal.modal('hide');
}
function destroyModal() {
if(!isRendered)
return;
modal.modal('hide');
modal.remove();
modalScope.$destroy();
modalScope = void(0);
isRendered = false;
var pos = showCallbacks.indexOf(config.onShow);
if(pos >= 0)
showCallbacks.splice(pos, 1);
pos = hideCallbacks.indexOf(config.onShow);
if(pos >= 0)
hideCallbacks.splice(pos, 1);
}
return {
render: lazyRender,
destroy: destroyModal,
show: showModal,
hide: hideModal,
isVisible: function() {
if(!isRendered)
false;
return modal.visible();
}
}
}
$templateCache.put('amb_disconnect_modal.xml',
'<div id="amb_disconnect_modal" tabindex="-1" aria-hidden="true" class="modal" role="dialog">' +
'	<div class="modal-dialog small-modal" style="width:450px">' +
'		<div class="modal-content">' +
'			<header class="modal-header">' +
'				<h4 id="small_modal1_title" class="modal-title">{{title || "Login"}}</h4>' +
'			</header>' +
'			<div class="modal-body">' +
'			<iframe class="concourse_modal" ng-src=\'{{iframe || "/amb_login.do"}}\' frameborder="0" scrolling="no" height="400px" width="405px"></iframe>' +
'			</div>' +
'		</div>' +
'	</div>' +
'</div>'
);
return AMBOverlay;
});
;
;
/*! RESOURCE: /scripts/sn/common/presence/snPresenceLite.js */
(function(exports, $) {
'use strict';
var PRESENCE_DISABLED = "false" === "true";
if (PRESENCE_DISABLED) {
return;
}
if (typeof $.Deferred === "undefined") {
return;
}
var USER_KEY = '{{SYSID}}';
var REPLACE_REGEX = new RegExp(USER_KEY, 'g');
var COLOR_ONLINE = '#71e279';
var COLOR_AWAY = '#fc8a3d';
var COLOR_OFFLINE = 'transparent';
var BASE_STYLES = [
'.sn-presence-lite { display: inline-block; width: 1rem; height: 1rem; border-radius: 50%; }'
];
var USER_STYLES = [
'.sn-presence-'+ USER_KEY +'-online [data-presence-id="'+ USER_KEY +'"] { background-color: '+ COLOR_ONLINE +'; }',
'.sn-presence-'+ USER_KEY +'-away [data-presence-id="'+ USER_KEY +'"] { background-color: '+ COLOR_AWAY +'; }',
'.sn-presence-'+ USER_KEY +'-offline [data-presence-id="'+ USER_KEY +'"] { background-color: '+ COLOR_OFFLINE +'; }'
];
var $head = $('head');
var stylesheet = $.Deferred();
var registeredUsers = {};
var registeredUsersLength = 0;
$(function() {
updateRegisteredUsers();
});
$head.ready(function() {
var styleElement = document.createElement('style');
$head.append(styleElement);
var $styleElement = $(styleElement);
stylesheet.resolve($styleElement);
});
function updateStyles(styles) {
stylesheet.done(function($styleElement) {
$styleElement.empty();
BASE_STYLES.forEach(function(baseStyle) {
$styleElement.append(baseStyle);
});
$styleElement.append(styles);
});
}
function getUserStyles(sysId) {
var newStyles = '';
for (var i = 0, iM = USER_STYLES.length; i < iM; i++) {
newStyles += USER_STYLES[i].replace(REPLACE_REGEX, sysId);
}
return newStyles;
}
function updateUserStyles() {
var userKeys = Object.keys(registeredUsers);
var userStyles = "";
userKeys.forEach(function(userKey) {
userStyles += getUserStyles(userKey);
});
updateStyles(userStyles);
}
exports.applyPresenceArray = applyPresenceArray;
function applyPresenceArray(presenceArray) {
if (!presenceArray || !presenceArray.length) {
return;
}
var users = presenceArray.filter(function(presence) {
return typeof registeredUsers[presence.user] !== "undefined";
});
updateUserPresenceStatus(users);
}
function updateUserPresenceStatus(users) {
var presenceStatus = getBaseCSSClasses();
for (var i = 0, iM = users.length; i < iM; i++) {
var presence = users[i];
var status = getNormalizedStatus(presence.status);
if (status === 'offline') {
continue;
}
presenceStatus.push('sn-presence-' + presence.user + '-' + status);
}
setCSSClasses(presenceStatus.join(' '));
}
function getNormalizedStatus(status) {
switch (status) {
case 'probably offline':
case 'maybe offline':
return 'away';
default:
return 'offline';
case 'online':
case 'offline':
return status;
}
}
function updateRegisteredUsers() {
var presenceIndicators = document.querySelectorAll('[data-presence-id]');
var obj = {};
for (var i = 0, iM = presenceIndicators.length; i < iM; i++) {
var uid = presenceIndicators[i].getAttribute('data-presence-id');
obj[uid] = true;
}
if (Object.keys(obj).length === registeredUsersLength){
return;
}
registeredUsers = obj;
registeredUsersLength = Object.keys(registeredUsers).length;
updateUserStyles();
}
function setCSSClasses(classes) {
$('html')[0].className = classes;
}
function getBaseCSSClasses() {
return $('html')[0].className.split(' ').filter(function(item){
return item.indexOf('sn-presence-') !== 0;
});
}
})(window, window.jQuery || window.Zepto);
;
/*! RESOURCE: /scripts/sn/common/presence/_module.js */
angular.module('sn.common.presence', ['ng.amb', 'sn.common.glide']).config(function($provide) {
"use strict";
$provide.constant("PRESENCE_DISABLED", "false" === "true");
});
;
/*! RESOURCE: /scripts/sn/common/presence/factory.snPresence.js */
angular.module("sn.common.presence").factory('snPresence', function($rootScope, $window, $log, amb, $timeout, $http, snRecordPresence, snTabActivity, urlTools, PRESENCE_DISABLED) {
"use strict";
var REST = {
PRESENCE: "/api/now/ui/presence"
};
var RETRY_INTERVAL = ($window.NOW.presence_interval || 15) * 1000;
var MAX_RETRY_DELAY = RETRY_INTERVAL * 10;
var initialized = false;
var primary = false;
var presenceArray = [];
var serverTimeMillis;
var skew = 0;
var st = 0;
function init() {
var location = urlTools.parseQueryString($window.location.search);
var table = location['table'] || location['sysparm_table'];
var sys_id = location['sys_id'] || location['sysparm_sys_id'];
return initPresence(table, sys_id);
}
function initPresence(t, id) {
if(PRESENCE_DISABLED)
return;
if (!initialized) {
initialized = true;
initRootScopes();
if (!primary) {
CustomEvent.observe('sn.presence', onPresenceEvent);
CustomEvent.fireTop('sn.presence.ping');
} else {
presenceArray = getLocalPresence($window.localStorage.getItem('snPresence'));
if (presenceArray)
$timeout(schedulePresence, 100);
else
updatePresence();
}
}
return snRecordPresence.initPresence(t, id);
}
function onPresenceEvent(parms) {
presenceArray = parms;
$timeout(broadcastPresence);
}
function initRootScopes() {
if ($window.NOW.presence_scopes) {
var ps = $window.NOW.presence_scopes;
if (ps.indexOf($rootScope) == -1)
ps.push($rootScope);
} else {
$window.NOW.presence_scopes = [$rootScope];
primary = CustomEvent.isTopWindow();
}
}
function setPresence(data, st) {
var rt = new Date().getTime() - st;
if (rt > 500)
console.log("snPresence response time " + rt + "ms");
if (data.result && data.result.presenceArray) {
presenceArray = data.result.presenceArray;
setLocalPresence(presenceArray);
serverTimeMillis = data.result.serverTimeMillis;
skew = new Date().getTime() - serverTimeMillis;
var t  = Math.floor(skew / 1000);
if (t < -15 )
console.log(">>>>> server ahead " + Math.abs(t) + " seconds");
else if (t > 15)
console.log(">>>>> browser time ahead " + t + " seconds");
}
schedulePresence();
}
function updatePresence(numAttempts) {
presenceArray = getLocalPresence($window.localStorage.getItem('snPresence'));
if (presenceArray) {
determineStatus(presenceArray);
$timeout(schedulePresence);
return;
}
if (!amb.isLoggedIn() || !snTabActivity.isPrimary) {
$timeout(schedulePresence);
return;
}
var p = {
user_agent: navigator.userAgent,
ua_time: new Date().toISOString(),
href: window.location.href,
pathname: window.location.pathname,
search: window.location.search,
path: window.location.pathname + window.location.search
};
st = new Date().getTime();
$http.post(REST.PRESENCE + '?sysparm_auto_request=true&cd=' + st, p).success(function(data) {
setPresence(data, st);
}).error(function(response, status) {
console.log("snPresence " + status);
schedulePresence(numAttempts);
})
}
function schedulePresence(numAttempts) {
numAttempts = isFinite(numAttempts) ? numAttempts + 1 : 0;
var interval = getDecayingRetryInterval(numAttempts);
$timeout(function() {
updatePresence(numAttempts)
}, interval);
determineStatus(presenceArray);
broadcastPresence();
}
function broadcastPresence() {
if (angular.isDefined($window.applyPresenceArray)) {
$window.applyPresenceArray(presenceArray);
}
$rootScope.$emit("sn.presence", presenceArray);
if (!primary)
return;
CustomEvent.fireAll('sn.presence', presenceArray);
}
function determineStatus(presenceArray) {
if (!presenceArray || !presenceArray.forEach)
return;
var t = new Date().getTime();
t -= skew;
presenceArray.forEach(function (p) {
var x = 0 + p.last_on;
var y = t - x;
p.status = "online";
if (y > (5 * RETRY_INTERVAL))
p.status = "offline";
else if (y > (3 * RETRY_INTERVAL))
p.status = "probably offline";
else if (y > (2.5 * RETRY_INTERVAL))
p.status = "maybe offline";
})
}
function setLocalPresence(value) {
var p = {
saved: new $window.Date().getTime(),
presenceArray: value
};
$window.localStorage.setItem('snPresence', angular.toJson(p));
}
function getLocalPresence(p) {
if (!p)
return null;
try {
p = angular.fromJson(p);
} catch (e) {
p = {};
}
if (!p.presenceArray)
return null;
var now = new Date().getTime();
if (now - p.saved >= RETRY_INTERVAL)
return null;
return p.presenceArray;
}
function getDecayingRetryInterval(numAttempts) {
return Math.min(RETRY_INTERVAL * Math.pow(2, numAttempts), MAX_RETRY_DELAY);
}
return {
init: init,
initPresence: initPresence,
_getLocalPresence: getLocalPresence,
_setLocalPresence: setLocalPresence,
_determineStatus: determineStatus
}
});
;
/*! RESOURCE: /scripts/sn/common/presence/factory.snRecordPresence.js */
angular.module("sn.common.presence").factory('snRecordPresence', function($rootScope, $location, amb, $timeout, $window, PRESENCE_DISABLED, snTabActivity) {
"use strict";
var statChannel;
var interval = ($window.NOW.record_presence_interval || 20) * 1000;
var sessions = {};
var primary = false;
var table;
var sys_id;
function initPresence(t, id) {
if(PRESENCE_DISABLED)
return;
if (!t || !id)
return;
if (t == table && id == sys_id)
return;
initRootScopes();
if (!primary)
return;
termPresence();
table = t;
sys_id = id;
var recordPresence = "/sn/rp/" + table + "/" + sys_id;
$rootScope.me = NOW.session_id;
statChannel = amb.getChannel(recordPresence);
statChannel.subscribe(onStatus);
amb.connected.then(function() {
setStatus("entered");
$rootScope.status = "viewing";
});
return statChannel;
}
function initRootScopes() {
if ($window.NOW.record_presence_scopes) {
var ps = $window.NOW.record_presence_scopes;
if (ps.indexOf($rootScope) == -1) {
ps.push($rootScope);
CustomEvent.observe('sn.sessions', onPresenceEvent);
}
} else {
$window.NOW.record_presence_scopes = [$rootScope];
primary = true;
}
}
function onPresenceEvent(sessionsToSend) {
$rootScope.$emit("sn.sessions", sessionsToSend);
$rootScope.$emit("sp.sessions", sessionsToSend);
}
function termPresence() {
if (!statChannel)
return;
statChannel.unsubscribe();
statChannel = table = sys_id = null;
}
function setStatus(status) {
if (status == $rootScope.status)
return;
$rootScope.status = status;
if (Object.keys(sessions).length == 0)
return;
if (getStatusPrecedence(status) > 1)
return;
publish($rootScope.status);
}
function publish(status) {
if (!statChannel)
return;
if (amb.getState() !== "opened")
return;
statChannel.publish({ presences: [{
status : status,
session_id : NOW.session_id,
user_name : NOW.user_name,
user_id: NOW.user_id,
user_display_name : NOW.user_display_name,
user_initials : NOW.user_initials,
user_avatar: NOW.user_avatar,
ua : navigator.userAgent,
table: table,
sys_id: sys_id,
time: new Date().toString().substring(0,24)
}]});
}
function onStatus(message) {
message.data.presences.forEach(function(d){
if (!d.session_id || d.session_id == NOW.session_id)
return;
var s = sessions[d.session_id];
if (s)
angular.extend(s, d);
else
s = sessions[d.session_id] = d;
s.lastUpdated = new Date();
if (s.status == 'exited')
delete sessions[d.session_id];
});
broadcastSessions();
}
function broadcastSessions() {
var sessionsToSend = getUniqueSessions();
$rootScope.$emit("sn.sessions", sessionsToSend);
$rootScope.$emit("sp.sessions", sessionsToSend);
if (primary)
$timeout(function() {CustomEvent.fire('sn.sessions', sessionsToSend);})
}
function getUniqueSessions() {
var uniqueSessionsByUser = {};
var sessionKeys = Object.keys(sessions);
sessionKeys.forEach(function(key) {
var session = sessions[key];
if (session.user_id == NOW.user_id)
return;
if (session.user_id in uniqueSessionsByUser) {
var otherSession = uniqueSessionsByUser[session.user_id];
var thisPrecedence = getStatusPrecedence(session.status);
var otherPrecedence = getStatusPrecedence(otherSession.status);
uniqueSessionsByUser[session.user_id] = thisPrecedence < otherPrecedence ? session : otherSession;
return
}
uniqueSessionsByUser[session.user_id] = session;
});
var uniqueSessions = {};
angular.forEach(uniqueSessionsByUser, function(item) {
uniqueSessions[item.session_id] = item;
});
return uniqueSessions;
}
function getStatusPrecedence(status) {
switch (status) {
case 'typing':
return 0;
case 'viewing':
return 1;
case 'entered':
return 2;
case 'exited':
case 'probably left':
return 4;
case 'offline':
return 5;
default:
return 3;
}
}
$rootScope.$on("record.typing", function(evt, data) {
setStatus(data.status);
});
var idleTable, idleSysID;
snTabActivity.onIdle({
onIdle: function RecordPresenceTabIdle() {
idleTable = table;
idleSysID = sys_id;
sessions = {};
termPresence();
broadcastSessions();
},
onReturn: function RecordPresenceTabActive() {
initPresence(idleTable, idleSysID, true);
idleTable = idleSysID = void(0);
},
delay: interval * 4
});
return {
initPresence: initPresence,
termPresence: termPresence
}
});
;
/*! RESOURCE: /scripts/sn/common/presence/directive.snPresence.js */
angular.module('sn.common.presence').directive('snPresence', function(snPresence, $rootScope, $timeout, i18n) {
'use strict';
$timeout(snPresence.init, 100);
var presenceStatus = {};
i18n.getMessages(['maybe offline', 'probably offline', 'offline', 'online', 'entered', 'viewing'], function (results) {
presenceStatus.maybe_offline = results['maybe offline'];
presenceStatus.probably_offline = results['probably offline'];
presenceStatus.offline = results['offline'];
presenceStatus.online = results['online'];
presenceStatus.entered = results['entered'];
presenceStatus.viewing = results['viewing'];
});
var presences = {};
$rootScope.$on('sn.presence', function (event, presenceArray) {
if (!presenceArray) {
angular.forEach(presences, function (p) {
p.status = "offline";
});
return;
}
presenceArray.forEach(function (presence) {
presences[presence.user] = presence;
});
});
return {
restrict: 'EA',
replace: false,
scope: {
userId: '@?',
snPresence: '=?',
user: '=?',
profile: '=?',
displayName: '=?'
},
link: function (scope, element) {
if (scope.profile) {
scope.user = scope.profile.userID;
scope.profile.tabIndex = -1;
if (scope.profile.isAccessible)
scope.profile.tabIndex = 0;
}
if (!element.hasClass('presence'))
element.addClass('presence');
function updatePresence () {
var id = scope.snPresence || scope.user;
if (!angular.isDefined(id) && angular.isDefined(scope.userId)) {
id = scope.userId;
}
if (presences[id]) {
var status = presences[id].status;
if (status === 'maybe offline' || status === 'probably offline') {
element.removeClass('presence-online presence-offline presence-away');
element.addClass('presence-away');
} else if (status == "offline" && !element.hasClass('presence-offline')) {
element.removeClass('presence-online presence-away');
element.addClass('presence-offline');
} else if ( (status == "online" || status == "entered" || status == "viewing") && !element.hasClass('presence-online')) {
element.removeClass('presence-offline presence-away');
element.addClass('presence-online');
}
status = status.replace(/ /g,"_");
if (scope.profile)
angular.element('div[user-avatar-id="' + id + '"]').attr("aria-label", scope.profile.userName + ' ' + presenceStatus[status]);
else
angular.element('div[user-avatar-id="' + id + '"]').attr("aria-label", scope.displayName + ' ' + presenceStatus[status]);
} else {
if (!element.hasClass('presence-offline'))
element.addClass('presence-offline');
}
}
var unbind = $rootScope.$on('sn.presence', updatePresence);
scope.$on('$destroy', unbind);
updatePresence();
}
};
});
;
/*! RESOURCE: /scripts/sn/common/presence/directive.snComposing.js */
angular.module('sn.common.presence').directive('snComposing', function(getTemplateUrl, snComposingPresence) {
"use strict";
return {
restrict: 'E',
templateUrl: getTemplateUrl("snComposing.xml"),
replace: true,
scope: {
conversation: "="
},
controller: function($scope, $element) {
var child = $element.children();
if (child && child.tooltip)
child.tooltip({
'template':	'<div class="tooltip" style="white-space: pre-wrap" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
'placement': 'top',
'container': 'body'
});
$scope.snComposingPresence = snComposingPresence;
}
}
});
;
/*! RESOURCE: /scripts/sn/common/presence/service.snComposingPresence.js */
angular.module('sn.common.presence').service('snComposingPresence', function(i18n) {
"use strict";
var viewing = {};
var typing = {};
var allStrings = {};
var shortStrings = {};
var typing1="{0} is typing", typing2="{0} and {1} are typing", typingMore="{0}, {1}, and {2} more are typing", viewing1="{0} is viewing",viewing2="{0} and {1} are viewing",viewingMore="{0}, {1}, and {2} more are viewing";
i18n.getMessages(
[
typing1,
typing2,
typingMore,
viewing1,
viewing2,
viewingMore
],
function (results) {
typing1=results[typing1];
typing2=results[typing2];
typingMore=results[typingMore];
viewing1=results[viewing1];
viewing2=results[viewing2];
viewingMore=results[viewingMore];
});
function set(conversationID, newPresenceValues) {
if (newPresenceValues.viewing)
viewing[conversationID] = newPresenceValues.viewing;
if (newPresenceValues.typing)
typing[conversationID] = newPresenceValues.typing;
generateAllString(conversationID, {viewing: viewing[conversationID],typing: typing[conversationID]});
generateShortString(conversationID, {viewing: viewing[conversationID],typing: typing[conversationID]});
return {
viewing: viewing[conversationID],
typing: typing[conversationID]
}
}
function get(conversationID) {
return {
viewing: viewing[conversationID] || [],
typing: typing[conversationID] || []
}
}
function generateAllString(conversationID, members) {
var result = "";
var typingLength = members.typing.length;
var viewingLength = members.viewing.length;
if (typingLength < 4 && viewingLength < 4)
return "";
switch (typingLength) {
case 0:
break;
case 1:
result += i18n.format(typing1, members.typing[0].name); break;
case 2:
result += i18n.format(typing2, members.typing[0].name, members.typing[1].name); break;
default:
var allButLastTyper = "";
for (var i = 0; i < typingLength; i++) {
if (i < typingLength -2)
allButLastTyper += members.typing[i].name + ", ";
else if (i === typingLength-2)
allButLastTyper += members.typing[i].name + ",";
else
result += i18n.format(typing2, allButLastTyper, members.typing[i].name);
}
}
if (viewingLength > 0 && typingLength > 0)
result += "\n\n";
switch (viewingLength) {
case 0:
break;
case 1:
result += i18n.format(viewing1, members.viewing[0].name); break;
case 2:
result += i18n.format(viewing2, members.viewing[0].name, members.viewing[1].name); break;
default:
var allButLastViewer = "";
for (var i = 0; i < viewingLength; i++) {
if (i < viewingLength -2)
allButLastViewer += members.viewing[i].name + ", ";
else if (i === viewingLength - 2)
allButLastViewer += members.viewing[i].name + ",";
else
result += i18n.format(viewing2, allButLastViewer, members.viewing[i].name);
}
}
allStrings[conversationID] = result;
}
function generateShortString(conversationID, members) {
var typingLength = members.typing.length;
var viewingLength = members.viewing.length;
var typingString = "", viewingString = "";
var inBetween = " ";
switch (typingLength ) {
case 0:
break;
case 1:
typingString = i18n.format(typing1, members.typing[0].name); break;
case 2:
typingString = i18n.format(typing2, members.typing[0].name, members.typing[1].name); break;
case 3:
typingString = i18n.format(typing2, members.typing[0].name + ", " + members.typing[1].name + ",",members.typing[2].name); break;
default:
typingString = i18n.format(typingMore, members.typing[0].name, members.typing[1].name, (typingLength - 2));
}
if (viewingLength > 0 && typingLength > 0)
inBetween = ". ";
switch (viewingLength) {
case 0:
break;
case 1:
viewingString = i18n.format(viewing1,  members.viewing[0].name); break;
case 2:
viewingString = i18n.format(viewing2, members.viewing[0].name, members.viewing[1].name); break;
case 3:
viewingString = i18n.format(viewing2, members.viewing[0].name + ", " + members.viewing[1].name + ",", members.viewing[2].name); break;
default:
viewingString = i18n.format(viewingMore, members.viewing[0].name, members.viewing[1].name, (viewingLength - 2));
}
shortStrings[conversationID] = typingString + inBetween + viewingString;
}
function getAllString(conversationID) {
if ((viewing[conversationID] && viewing[conversationID].length > 3)
|| (typing[conversationID] && typing[conversationID].length > 3))
return allStrings[conversationID];
return "";
}
function getShortString(conversationID) {
return shortStrings[conversationID];
}
function remove(conversationID) {
delete viewing[conversationID];
}
return {
set: set,
get: get,
generateAllString: generateAllString,
getAllString: getAllString,
generateShortString: generateShortString,
getShortString: getShortString,
remove: remove
}
});
;
;
/*! RESOURCE: /scripts/sn/common/user_profile/js_includes_user_profile.js */
/*! RESOURCE: /scripts/sn/common/user_profile/_module.js */
angular.module("sn.common.user_profile", ['sn.common.ui']);
;
/*! RESOURCE: /scripts/sn/common/user_profile/directive.snUserProfile.js */
angular.module('sn.common.user_profile').directive('snUserProfile', function(getTemplateUrl, snCustomEvent, $window, avatarProfilePersister, $timeout, $http) {
"use strict";
return {
replace: true,
restrict: 'E',
templateUrl: getTemplateUrl('snUserProfile.xml'),
scope: {
profile: "=",
showDirectMessagePrompt: "="
},
link: function(scope, element) {
scope.showDirectMessagePromptFn = function() {
if (scope.showDirectMessagePrompt) {
var activeUserID = $window.NOW.user_id || "";
return !(!scope.profile
|| activeUserID === scope.profile.sysID
|| (scope.profile.document && activeUserID === scope.profile.document));
} else {
return false;
}
};
$timeout(function() {
element.find("#direct-message-popover-trigger").on("click", scope.openDirectMessageConversation);
}, 0, false);
},
controller: function($scope, snConnectService) {
if ($scope.profile && $scope.profile.userID && avatarProfilePersister.getAvatar($scope.profile.userID)) {
$scope.profile = avatarProfilePersister.getAvatar($scope.profile.userID);
$scope.$emit("sn-user-profile.ready");
} else {
$http.get('/api/now/live/profiles/sys_user.' + $scope.profile.userID).then(function (response) {
angular.merge($scope.profile, response.data.result);
avatarProfilePersister.setAvatar($scope.profile.userID, $scope.profile);
$scope.$emit("sn-user-profile.ready");
})
}
$scope.openDirectMessageConversation = function(evt) {
if (evt && evt.keyCode === 9)
return;
$timeout(function () {
snConnectService.openWithProfile($scope.profile);
}, 0, false);
angular.element('.popover').each(function() {
angular.element('body').off('click.snUserAvatarPopoverClose');
angular.element(this).popover('hide');
});
};
}
}
});
;
;
/*! RESOURCE: /scripts/sn/common/avatar/_module.js */
angular.module('sn.common.avatar', ['sn.common.presence', 'sn.common.messaging', 'sn.common.user_profile']).config(function($provide) {
$provide.value("liveProfileID", '');
});
;
/*! RESOURCE: /scripts/sn/common/avatar/directive.snAvatarPopover.js */
angular.module('sn.common.avatar').directive('snAvatarPopover', function($http, $compile, getTemplateUrl, avatarProfilePersister, $injector) {
'use strict';
return {
restrict : 'E',
templateUrl: getTemplateUrl('sn_avatar_popover.xml'),
replace: true,
transclude: true,
scope : {
members: '=',
primary: '=?',
showPresence: '=?',
enableContextMenu: '=?',
enableTooltip: '=?',
enableBindOnce: '@',
displayMemberCount: "=?",
groupAvatar: "@",
nopopover: "=",
directconversation: '@',
conversation: '=',
primaryNonAssign: '=?'
},
compile: function(tElement) {
var template = tElement.html();
return function (scope, element, attrs, controller, transcludeFn) {
if (scope.directconversation) {
if (scope.directconversation === "true")
scope.directconversation = true;
else
scope.directconversation = false;
scope.showdirectconversation = !scope.directconversation;
} else {
scope.showdirectconversation = true;
}
if ($injector.has('inSupportClient') && $injector.get('inSupportClient'))
scope.showdirectconversation = false;
if (scope.primaryNonAssign) {
scope.primary = angular.extend({}, scope.primary, scope.primaryNonAssign);
if (scope.users && scope.users[0])
scope.users[0] = scope.primary;
}
function recompile () {
if (scope.primaryNonAssign) {
scope.primary = angular.extend({}, scope.primary, scope.primaryNonAssign);
if (scope.users && scope.users[0])
scope.users[0] = scope.primary;
}
var newElement = $compile(template, transcludeFn)(scope);
element.html(newElement);
if (scope.enableTooltip) {
element.tooltip({
placement: 'auto top',
container: 'body'
}).attr('data-original-title', scope.users[0].name).tooltip('fixTitle');
if (element.hideFix)
element.hideFix();
}
}
if (attrs.enableBindOnce === 'false') {
scope.$watch('primary', recompile);
scope.$watch('primaryNonAssign', recompile);
scope.$watch('members', recompile);
}
if (scope.enableTooltip && scope.nopopover) {
var usersWatch = scope.$watch('users', function () {
if (scope.users && scope.users.length === 1 && scope.users[0] && scope.users[0].name) {
element.tooltip({
placement: 'auto top',
container: 'body'
}).attr('data-original-title', scope.users[0].name).tooltip('fixTitle');
if (element.hideFix)
element.hideFix();
usersWatch();
}
});
}
};
},
controller: function($scope, liveProfileID, $timeout, $element, $document, snCustomEvent) {
$scope.randId = Math.random();
$scope.loadEvent = 'sn-user-profile.ready';
$scope.closeEvent = ['chat:open_conversation', 'snAvatar.closePopover', 'body_clicked'];
$scope.popoverConfig = {
template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
};
$scope.displayMemberCount = $scope.displayMemberCount || false;
$scope.liveProfileID = liveProfileID;
if ($scope.primaryNonAssign) {
$scope.primary =  angular.extend({}, $scope.primary, $scope.primaryNonAssign);
if ($scope.users && $scope.users[0])
$scope.users[0] = $scope.primary;
}
$scope.$watch('members', function(newVal, oldVal) {
if(newVal === oldVal)
return;
if ($scope.members)
buildAvatar();
});
$scope.noPopover = function () {
$scope.popoverCursor = ($scope.nopopover || ($scope.members && $scope.members.length > 2) ) ? "default" : "pointer";
return ($scope.nopopover || ($scope.members && $scope.members.length > 2));
}
$scope.avatarType = function() {
var result = [];
if($scope.groupAvatar || !$scope.users)
return result;
if ($scope.users.length > 1)
result.push("group")
if ($scope.users.length === 2)
result.push("avatar-duo")
if ($scope.users.length === 3)
result.push("avatar-trio")
if ($scope.users.length >= 4)
result.push("avatar-quad")
return result;
}
$scope.getBackgroundStyle = function(user) {
var avatar = (user ? user.avatar  : '');
if ($scope.groupAvatar)
avatar = $scope.groupAvatar;
if (avatar && avatar !== '')
return { 'background-image' : 'url(' + avatar + ')' };
if (user && user.name)
return '';
return void(0);
};
$scope.stopPropCheck = function (evt) {
$scope.$broadcast("snAvatar.closeOtherPopovers", $scope.randId);
if (!$scope.nopopover) {
evt.stopPropagation();
}
};
$scope.$on("snAvatar.closeOtherPopovers", function (id) {
if (id !== $scope.randId)
snCustomEvent.fireTop('snAvatar.closePopover');
});
$scope.maxStringWidth = function() {
var paddedWidth = parseInt($scope.avatarWidth * 0.8, 10);
return $scope.users.length === 1 ? paddedWidth : paddedWidth / 2;
};
function buildInitials(name) {
if (!name)
return "--";
var initials = name.split(" ").map(function(word) {
return word.toUpperCase();
}).filter(function(word) {
return word.match(/^[A-Z]/);
}).map(function(word) {
return word.substring(0,1);
}).join("");
return (initials.length > 3)
? initials.substr(0, 3)
: initials;
}
$scope.avatartooltip = function() {
if (!$scope.enableTooltip) {
return '';
}
if (!$scope.users) {
return '';
}
var names = [];
$scope.users.forEach(function(user) {
if(!user) { return; }
names.push(user.name);
});
return names.join(', ');
};
function buildAvatar() {
if (typeof $scope.primary === 'string') {
$http.get('/api/now/live/profiles/sys_user.' + $scope.primary).then(function (response) {
$scope.users = [{
userID: $scope.primary,
name: response.data.result.name,
initials: buildInitials(response.data.result.name),
avatar: response.data.result.avatar
}];
});
return;
}
if ($scope.primary) {
if ($scope.primary.userImage)
$scope.primary.avatar = $scope.primary.userImage;
if (!$scope.primary.userID && $scope.primary.sys_id)
$scope.primary.userID = $scope.primary.sys_id;
}
$scope.isGroup = $scope.conversation && $scope.conversation.isGroup;
$scope.users = [$scope.primary];
if ($scope.primary && (!$scope.members || $scope.members.length <= 0) && ($scope.primary.avatar || $scope.primary.initials) && $scope.isDocument) {
$scope.users = [$scope.primary];
} else if ($scope.members && $scope.members.length > 0) {
$scope.users = buildCompositeAvatar($scope.members);
}
$scope.presenceEnabled = $scope.showPresence && !$scope.isGroup && $scope.users.length === 1;
}
function buildCompositeAvatar(members) {
var currentUser = window.NOW.user ? window.NOW.user.userID : window.NOW.user_id;
var users = angular.isArray(members) ? members.slice() : [members];
users = users.sort(function(a, b) {
var aID = a.userID || a.document;
var bID = b.userID || b.document;
if (a.table === "chat_queue_entry")
return 1;
if (aID === currentUser)
return 1;
else if (bID === currentUser)
return -1;
return 0;
});
if (users.length === 2)
users = [users[0]];
if (users.length > 2 && $scope.primary && $scope.primary.name && $scope.primary.table === "sys_user") {
var index = -1;
angular.forEach(users, function(user, i) {
if (user.sys_id === $scope.primary.sys_id) {
index = i;
}
});
if (index > -1) {
users.splice(index, 1);
}
users.splice(1, 0, $scope.primary);
}
return users;
}
buildAvatar();
$scope.loadFullProfile = function () {
if ($scope.primary && !$scope.primary.sys_id && !avatarProfilePersister.getAvatar($scope.primary.userID)) {
$http.get('/api/now/live/profiles/' + $scope.primary.userID).then(
function (response) {
try{
angular.extend($scope.primary, response.data.result);
avatarProfilePersister.setAvatar($scope.primary.userID, $scope.primary);
}catch(e){}
});
}
}
}
}
});
;
/*! RESOURCE: /scripts/sn/common/avatar/directive.snAvatar.js */
angular.module('sn.common.avatar')
.factory('snAvatarFactory', function($http, $compile, $templateCache, $q, snCustomEvent, snConnectService) {
'use strict';
return function() {
return {
restrict : 'E',
replace: true,
transclude: true,
scope : {
members: '=',
primary: '=',
showPresence: '=?',
enableContextMenu: '=?',
enableTooltip: '=?',
enableBindOnce: '@',
displayMemberCount: "=?",
groupAvatar: "@"
},
compile: function(tElement) {
var template = tElement.html();
return function (scope, element, attrs, controller, transcludeFn) {
var newElement = $compile(template, transcludeFn)(scope);
element.html(newElement);
if (scope.enableTooltip) {
element.tooltip({
placement: 'auto top',
container: 'body'
}).attr('data-original-title', scope.users[0].name).tooltip('fixTitle');
if (element.hideFix)
element.hideFix();
}
if (attrs.enableBindOnce === 'false') {
scope.$watch('primary', recompile);
scope.$watch('members', recompile);
}
if (scope.enableTooltip) {
var usersWatch = scope.$watch('users', function () {
if (scope.users && scope.users.length === 1 && scope.users[0] && scope.users[0].name) {
element.tooltip({
placement: 'auto top',
container: 'body'
}).attr('data-original-title', scope.users[0].name).tooltip('fixTitle');
if (element.hideFix)
element.hideFix();
usersWatch();
}
});
}
if (scope.enableContextMenu !== false) {
scope.contextOptions = [];
var gUser = null;
try { gUser = g_user; } catch (err) {}
if (scope.users && scope.users.length === 1 && scope.users[0] && (scope.users[0].userID || scope.users[0].sys_id)) {
scope.contextOptions = [
["Open user's profile", function () {
if (scope.users && scope.users.length > 0) {
window.open('/nav_to.do?uri=' + encodeURIComponent('sys_user.do?sys_id=' + scope.users[0].userID), '_blank');
}
}]];
if ((gUser && scope.users[0].userID && scope.users[0].userID !== gUser.userID) ||
(scope.liveProfileID && scope.users[0] && scope.users[0].sysID !== scope.liveProfileID)) {
scope.contextOptions.push(["Open a new chat", function () {
snConnectService.openWithProfile(scope.users[0]);
}]);
}
}
} else {
scope.contextOptions = [];
}
};
},
controller: function($scope, liveProfileID) {
var firstBuildAvatar = true;
$scope.displayMemberCount = $scope.displayMemberCount || false;
$scope.liveProfileID = liveProfileID;
$scope.$watch('primary', function(newValue, oldValue) {
if ($scope.primary && newValue !== oldValue) {
if(!firstBuildAvatar)
buildAvatar();
if ($scope.contextOptions.length > 0) {
$scope.contextOptions = [
["Open user's profile", function () {
if ($scope.users && $scope.users.length > 0) {
window.location.href = 'sys_user.do?sys_id=' + $scope.users[0].userID || $scope.users[0].userID;
}
}]];
var gUser = null;
try {
gUser = g_user;
} catch (err) {
}
if ((!gUser && !liveProfileID) || ($scope.users && $scope.users.length === 1 && $scope.users[0])) {
if ((gUser && $scope.users[0].userID && $scope.users[0].userID !== gUser.userID) ||
($scope.liveProfileID && $scope.users[0] && $scope.users[0].sysID !== $scope.liveProfileID)) {
$scope.contextOptions.push(["Open a new chat", function () {
snConnectService.openWithProfile($scope.users[0]);
}]);
}
}
}
}
});
$scope.$watch('members', function() {
if ($scope.members && !firstBuildAvatar)
buildAvatar();
});
$scope.avatarType = function() {
var result = [];
if($scope.groupAvatar || !$scope.users)
return result;
if ($scope.users.length > 1)
result.push("group");
if ($scope.users.length === 2)
result.push("avatar-duo");
if ($scope.users.length === 3)
result.push("avatar-trio");
if ($scope.users.length >= 4)
result.push("avatar-quad");
return result;
};
$scope.getBackgroundStyle = function(user) {
var avatar = (user ? user.avatar  : '');
if ($scope.groupAvatar)
avatar = $scope.groupAvatar;
if (avatar && avatar !== '')
return { 'background-image' : 'url(' + avatar + ')' };
if (user && user.name)
return '';
return void(0);
};
$scope.maxStringWidth = function() {
var paddedWidth = parseInt($scope.avatarWidth * 0.8, 10);
return $scope.users.length === 1 ? paddedWidth : paddedWidth / 2;
};
function buildInitials(name) {
if (!name)
return "--";
var initials = name.split(" ").map(function(word) {
return word.toUpperCase();
}).filter(function(word) {
return word.match(/^[A-ZÀ-Ÿ]/);
}).map(function(word) {
return word.substring(0,1);
}).join("");
return (initials.length > 3)
? initials.substr(0, 3)
: initials;
}
$scope.avatartooltip = function() {
if (!$scope.enableTooltip) {
return '';
}
if (!$scope.users) {
return '';
}
var names = [];
$scope.users.forEach(function(user) {
if(!user) { return; }
names.push(user.name);
});
return names.join(', ');
};
function setPresence(){
$scope.presenceEnabled = $scope.showPresence && !$scope.isDocument && $scope.users.length === 1;
return $scope.presenceEnabled;
}
function buildAvatar() {
if(firstBuildAvatar)
firstBuildAvatar = false;
if (typeof $scope.primary === 'string') {
return $http.get('/api/now/live/profiles/sys_user.' + $scope.primary).then(function (response) {
$scope.users = [{
userID: $scope.primary,
name: response.data.result.name,
initials: buildInitials(response.data.result.name),
avatar: response.data.result.avatar
}];
return setPresence();
});
}
if ($scope.primary) {
if ($scope.primary.userImage)
$scope.primary.avatar = $scope.primary.userImage;
if (!$scope.primary.userID && $scope.primary.sys_id)
$scope.primary.userID = $scope.primary.sys_id;
}
$scope.isDocument = $scope.primary && $scope.primary.table && $scope.primary.table !== "sys_user" && $scope.primary.table !== "chat_queue_entry";
$scope.users = [$scope.primary];
if ($scope.primary && (!$scope.members || $scope.members.length <= 0) && ($scope.primary.avatar || $scope.primary.initials) && $scope.isDocument) {
$scope.users = [$scope.primary];
} else if ($scope.members && $scope.members.length > 0) {
$scope.users = buildCompositeAvatar($scope.members);
}
return $q.when(setPresence());
}
function buildCompositeAvatar(members) {
var currentUser = window.NOW.user ? window.NOW.user.userID : window.NOW.user_id;
var users = angular.isArray(members) ? members.slice() : [members];
users = users.sort(function(a, b) {
var aID = a.userID || a.document;
var bID = b.userID || b.document;
if (a.table === "chat_queue_entry")
return 1;
if (aID === currentUser)
return 1;
else if (bID === currentUser)
return -1;
return 0;
});
if (users.length === 2)
users = [users[0]];
if (users.length > 2 && $scope.primary && $scope.primary.name && $scope.primary.table === "sys_user") {
var index = -1;
angular.forEach(users, function(user, i) {
if (user.sys_id === $scope.primary.sys_id) {
index = i;
}
});
if (index > -1) {
users.splice(index, 1);
}
users.splice(1, 0, $scope.primary);
}
return users;
}
buildAvatar();
}
}
}
})
.directive('snAvatar', function (snAvatarFactory, getTemplateUrl){
var directive = snAvatarFactory();
directive.templateUrl = getTemplateUrl('sn_avatar.xml');
return directive;
})
.directive('snAvatarOnce', function (snAvatarFactory, getTemplateUrl) {
var directive = snAvatarFactory();
directive.templateUrl = getTemplateUrl('sn_avatar_once.xml');
return directive;
});
;
/*! RESOURCE: /scripts/sn/common/avatar/service.avatarProfilePersister.js */
angular.module('sn.common.avatar').service('avatarProfilePersister', function () {
"use strict";
var avatars = {};
function setAvatar (id, payload) {
avatars[id] = payload;
}
function getAvatar (id) {
return avatars[id];
}
return {
setAvatar: setAvatar,
getAvatar: getAvatar
}
});
;
/*! RESOURCE: /scripts/sn/common/avatar/directive.snUserAvatar.js */
angular.module('sn.common.avatar').directive('snUserAvatar', function(getTemplateUrl) {
"use strict";
return {
restrict: 'E',
templateUrl: getTemplateUrl('sn_user_avatar.xml'),
replace: true,
scope: {
profile: '=?',
userId: '=?',
avatarUrl: '=?',
initials: '=?',
enablePresence: '@',
disablePopover: '=?',
directConversationButton: '=?',
userName: '=?',
isAccessible: '=?'
},
link: function (scope, element) {
scope.evaluatedProfile = undefined;
scope.backgroundStyle = undefined;
scope.enablePresence = scope.enablePresence !== 'false';
if (scope.profile) {
scope.evaluatedProfile = scope.profile;
scope.userId = scope.profile.userID || "";
scope.avatarUrl = scope.profile.avatar || "";
scope.initials = scope.profile.initials || "";
scope.backgroundStyle = scope.getBackgroundStyle();
} else if (scope.userId || scope.avatarUrl || scope.initials || scope.userName) {
scope.evaluatedProfile = scope.profile = {
'userID': scope.userId || "",
'avatar': scope.avatarUrl || "",
'initials': scope.initials || "",
'userName': scope.userName || "",
'isAccessible': scope.isAccessible || false
};
scope.backgroundStyle = scope.getBackgroundStyle();
} else {
var unwatch = scope.$watch('profile', function (newVal) {
if (newVal) {
scope.evaluatedProfile = newVal;
scope.backgroundStyle = scope.getBackgroundStyle();
unwatch();
}
})
}
scope.directConversationButton = scope.directConversationButton !== 'false' && scope.directConversationButton !== false;
scope.template = '<sn-user-profile tabindex="-1" id="sn-bootstrap-popover" profile="evaluatedProfile" show-direct-message-prompt="::directConversationButton" class="avatar-popover avatar-popover-padding"></sn-user-profile>';
scope.ariaRole = scope.disablePopover ? 'presentation' : 'button';
},
controller: function($scope) {
$scope.getBackgroundStyle = function() {
if ( ($scope.avatarUrl && $scope.avatarUrl !== '') || $scope.evaluatedProfile && $scope.evaluatedProfile.avatar !== '' )
return {"background-image": 'url(' + ($scope.avatarUrl || $scope.evaluatedProfile.avatar) + ')'};
return {"background-image": ""};
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/avatar/directive.snGroupAvatar.js */
angular.module('sn.common.avatar').directive('snGroupAvatar', function($http, $compile, getTemplateUrl, avatarProfilePersister) {
'use strict';
return {
restrict : 'E',
templateUrl: getTemplateUrl('sn_group_avatar.xml'),
replace: true,
transclude: true,
scope : {
members: '=',
primary: '=?',
groupAvatar: "@"
},
controller: function($scope, liveProfileID) {
$scope.liveProfileID = liveProfileID;
$scope.$watch('members', function(newVal, oldVal) {
if(newVal === oldVal)
return;
if ($scope.members)
$scope.users = buildCompositeAvatar($scope.members);
});
$scope.avatarType = function() {
var result = [];
if($scope.groupAvatar || !$scope.users)
return result;
if ($scope.users.length > 1)
result.push("group")
if ($scope.users.length === 2)
result.push("sn-avatar_duo")
if ($scope.users.length === 3)
result.push("sn-avatar_trio")
if ($scope.users.length >= 4)
result.push("sn-avatar_quad")
return result;
};
$scope.getBackgroundStyle = function(user) {
var avatar = (user ? user.avatar  : '');
if ($scope.groupAvatar)
avatar = $scope.groupAvatar;
if (avatar && avatar !== '')
return {"background-image" : "url(" + avatar + ")"};
return {};
};
$scope.users = buildCompositeAvatar($scope.members);
function buildCompositeAvatar(members) {
var currentUser = window.NOW.user ? window.NOW.user.userID : window.NOW.user_id;
var users = angular.isArray(members) ? members.slice() : [members];
users = users.sort(function(a, b) {
var aID = a.userID || a.document;
var bID = b.userID || b.document;
if (a.table === "chat_queue_entry")
return 1;
if (aID === currentUser)
return 1;
else if (bID === currentUser)
return -1;
return 0;
});
if (users.length === 2)
users = [users[0]];
if (users.length > 2 && $scope.primary && $scope.primary.name && $scope.primary.table === "sys_user") {
var index = -1;
angular.forEach(users, function(user, i) {
if (user.sys_id === $scope.primary.sys_id) {
index = i;
}
});
if (index > -1) {
users.splice(index, 1);
}
users.splice(1, 0, $scope.primary);
}
return users;
}
}
}
});
;
;
/*! RESOURCE: /scripts/sn/common/controls/js_includes_controls.js */
/*! RESOURCE: /scripts/sn/common/controls/_module.js */
angular.module('sn.common.controls', []);
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snChoiceList.js */
angular.module('sn.common.controls').directive('snChoiceList', function($timeout) {
"use strict";
return {
restrict : 'E',
replace : true,
scope : {
snModel: "=",
snTextField: "@",
snValueField: "@",
snOptions: "=?",
snItems: "=?",
snOnChange: "&",
snDisabled: "=",
snDialogName: "="
},
template :
'<select ng-disabled="snDisabled" ' +
'        ng-model="model" ' +
'        ng-options="item[snValueField] as item[snTextField] for item in snItems">' +
'  <option value="" ng-show="snOptions.placeholder">{{snOptions.placeholder}}</option>' +
'</select>',
link : function (scope, element, attrs) {
if (scope.snDialogName)
scope.$on("dialog." + scope.snDialogName + ".close", function() {
$timeout(function() {
$(element).select2("destroy");
})
});
$(element).css("opacity", 0);
var config = {
width: "100%"
};
if (scope.snOptions){
if (scope.snOptions.placeholder){
config.placeholder = scope.snOptions.placeholder;
config.placeholderOption = "first";
}
if (scope.snOptions.hideSearch && scope.snOptions.hideSearch === true){
config.minimumResultsForSearch = -1;
}
}
function init(){
scope.model = scope.snModel;
render();
}
function render(){
if (!attrs){
$timeout(function(){render();});
return;
}
$timeout(function(){
$(element).css("opacity", 1);
$(element).select2("destroy");
$(element).select2(config);
});
}
init();
scope.$watch("snItems", function(newValue, oldValue){
if (newValue !== oldValue){
init();
}
}, true);
scope.$watch("snModel", function(newValue){
if (newValue !== undefined && newValue !== scope.model){
init();
}
});
scope.$watch("model", function(newValue, oldValue){
if (newValue !== oldValue){
scope.snModel = newValue;
if (scope.snOnChange)
scope.snOnChange({selectedValue:newValue});
}
});
scope.$on('$destroy', function() {
$(element).select2("destroy");
});
},
controller : function($scope) {
}
}
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snReferencePicker.js */
angular.module('sn.common.controls').directive('snReferencePicker', function($timeout, $http, urlTools, filterExpressionParser, $sanitize, i18n) {
"use strict";
return {
restrict: 'E',
replace: true,
scope: {
ed: "=?",
field: "=",
refTable: "=?",
refId: "=?",
snOptions: "=?",
snOnChange: "&",
snOnBlur: "&",
snOnClose: "&",
snOnOpen: '&',
minimumInputLength : "@",
snDisabled: "=",
snPageSize: "@",
dropdownCssClass: "@",
formatResultCssClass: "&",
overlay: "=",
additionalDisplayColumns: "@",
displayColumn: "@",
recordValues: '&',
getGlideForm: '&glideForm',
domain: "@",
snSelectWidth: '@',
},
template: '<input type="text" name="{{field.name}}" ng-disabled="snDisabled" style="min-width: 150px;" ng-model="field.displayValue" />',
link: function(scope, element, attrs, ctrl) {
scope.ed = scope.ed || scope.field.ed;
scope.selectWidth = scope.snSelectWidth || '100%';
element.css("opacity", 0);
var fireReadyEvent = true;
var g_form;
if (angular.isDefined(scope.getGlideForm))
g_form = scope.getGlideForm();
var fieldAttributes = {};
if (angular.isDefined(scope.field) && angular.isDefined(scope.field.attributes) && typeof scope.ed.attributes == 'undefined')
if (Array.isArray(scope.field.attributes))
fieldAttributes = scope.field.attributes;
else
fieldAttributes = parseAttributes(scope.field.attributes);
else
fieldAttributes = parseAttributes(scope.ed.attributes);
if (!angular.isDefined(scope.additionalDisplayColumns) && angular.isDefined(fieldAttributes['ref_ac_columns']))
scope.additionalDisplayColumns = fieldAttributes['ref_ac_columns'];
var select2AjaxHelpers = {
formatSelection: function(item) {
return $sanitize(getDisplayValue(item));
},
formatResult: function(item) {
var displayValues = getDisplayValues(item);
if (displayValues.length == 1)
return $sanitize(displayValues[0]);
if (displayValues.length > 1) {
var width = 100 / displayValues.length;
var markup = "";
for (var i = 0; i < displayValues.length; i++)
markup += "<div style='width: " + width + "%;' class='select2-result-cell'>" + $sanitize(displayValues[i])  + "</div>";
return markup;
}
return "";
},
search: function(queryParams) {
if ('sysparm_include_variables' in queryParams.data) {
var url = urlTools.getURL('ref_list_data', queryParams.data);
return $http.get(url).then(queryParams.success);
}else {
var url = urlTools.getURL('ref_list_data');
return $http.post(url, queryParams.data).then(queryParams.success);
}
},
initSelection: function(elem, callback) {
if (scope.field.displayValue)
callback({
sys_id: scope.field.value,
name: scope.field.displayValue
});
}
};
var config = {
width : scope.selectWidth,
minimumInputLength: scope.minimumInputLength ? parseInt(scope.minimumInputLength, 10) : 0,
overlay: scope.overlay,
containerCssClass : 'select2-reference ng-form-element',
placeholder : '   ',
formatSearching: '',
allowClear: attrs.allowClear !== 'false',
id: function(item) {
return item.sys_id;
},
sortResults: (scope.snOptions && scope.snOptions.sortResults) ? scope.snOptions.sortResults : undefined,
ajax: {
quietMillis: NOW.ac_wait_time,
data: function(filterText, page) {
var q = _getReferenceQuery(filterText);
var params = {
start: (scope.pageSize * (page - 1)),
count: scope.pageSize,
sysparm_target_table: scope.refTable,
sysparm_target_sys_id: scope.refId,
sysparm_target_field: scope.ed.dependent_field || scope.ed.name,
table: scope.ed.reference,
qualifier: scope.ed.qualifier,
data_adapter: scope.ed.data_adapter,
attributes: scope.ed.attributes,
dependent_field: scope.ed.dependent_field,
dependent_table: scope.ed.dependent_table,
dependent_value: scope.ed.dependent_value,
p: scope.ed.reference + ';q:' + q + ';r:' + scope.ed.qualifier
};
if (scope.domain) {
params.sysparm_domain = scope.domain;
}
if (angular.isDefined(scope.field) && scope.field['_cat_variable'] === true){
delete params['sysparm_target_table'];
params['sysparm_include_variables'] = true;
params['variable_ids'] = scope.field.sys_id;
var getFieldSequence = g_form.$private.options('getFieldSequence');
if (getFieldSequence) {
params['variable_sequence1'] = getFieldSequence();
}
var itemSysId = g_form.$private.options('itemSysId');
params['sysparm_id'] = itemSysId;
var getFieldParams = g_form.$private.options('getFieldParams');
if (getFieldParams) {
angular.extend(params, getFieldParams());
}
}
if (scope.recordValues)
params.sysparm_record_values = scope.recordValues();
return params;
},
results: function(data, page) {
return ctrl.filterResults(data, page, scope.pageSize);
},
transport: select2AjaxHelpers.search
},
formatSelection: select2AjaxHelpers.formatSelection,
formatResult: select2AjaxHelpers.formatResult,
initSelection: select2AjaxHelpers.initSelection,
dropdownCssClass: attrs.dropdownCssClass,
formatResultCssClass: scope.formatResultCssClass || null
};
if (scope.snOptions) {
if (scope.snOptions.placeholder) {
config.placeholder = scope.snOptions.placeholder;
}
if (scope.snOptions.width) {
config.width = scope.snOptions.width;
}
}
function _getReferenceQuery(filterText) {
var filterExpression = filterExpressionParser.parse(filterText, scope.ed.defaultOperator);
var colToSearch = getReferenceColumnsToSearch();
var excludedValues = getExcludedValues();
return colToSearch.map(function(column) {
return column + filterExpression.operator + filterExpression.filterText +
'^' + column + 'ISNOTEMPTY' + excludedValues;
}).join("^NQ");
}
function getReferenceColumnsToSearch() {
var colName = ['name'];
if (scope.ed.searchField) {
colName = scope.ed.searchField.split(";");
} else if (fieldAttributes['ref_ac_columns_search'] == 'true' && 'ref_ac_columns' in fieldAttributes && fieldAttributes['ref_ac_columns'] != '') {
colName = fieldAttributes['ref_ac_columns'].split(';');
} else if (fieldAttributes['ref_ac_order_by']) {
colName = [fieldAttributes['ref_ac_order_by']];
}
return colName;
}
function getExcludedValues () {
if (scope.ed.excludeValues && scope.ed.excludeValues != '') {
return '^sys_idNOT IN' + scope.ed.excludeValues;
}
return '';
}
function parseAttributes(strAttributes) {
var attributeArray = (strAttributes && strAttributes.length ? strAttributes.split(',') : []);
var attributeObj = {};
for (var i = 0; i < attributeArray.length; i++) {
if (attributeArray[i].length > 0) {
var attribute = attributeArray[i].split('=');
attributeObj[attribute[0]] = attribute.length > 1 ? attribute[1] : '';
}
}
return attributeObj;
}
function init() {
scope.model = scope.snModel;
render();
}
function render() {
$timeout(function() {
i18n.getMessage('Searching...', function(searchingMsg) {
config.formatSearching = function() {
return searchingMsg;
};
});
element.css("opacity", 1);
element.select2("destroy");
var select2 = element.select2(config);
select2.bind("change", select2Change);
select2.bind("select2-removed", select2Change);
select2.bind("select2-blur", function() {
scope.$apply(function() {
scope.snOnBlur();
});
});
select2.bind("select2-close", function() {
scope.$apply(function() {
scope.snOnClose();
});
});
select2.bind("select2-open", function() {
scope.$apply(function() {
if (scope.snOnOpen)
scope.snOnOpen();
});
});
select2.bind('select2-focus', function() {
redirectLabel(element);
});
if (fireReadyEvent) {
scope.$emit('select2.ready', element);
fireReadyEvent = false;
}
});
}
function select2Change(e) {
e.stopImmediatePropagation();
if (e.added) {
if (scope.$$phase || scope.$root.$$phase)
return;
var selectedItem = e.added;
var value = selectedItem.sys_id;
var displayValue = value ? getDisplayValue(selectedItem) : '';
if (scope.snOptions && scope.snOptions.useGlideForm === true) {
g_form.setValue(scope.field.name, value, displayValue);
scope.rowSelected();
e.displayValue = displayValue;
triggerSnOnChange();
} else {
scope.$apply(function() {
scope.field.value = value;
scope.field.displayValue = displayValue;
scope.rowSelected();
e.displayValue = displayValue;
triggerSnOnChange();
});
}
} else if (e.removed) {
if (scope.snOptions && scope.snOptions.useGlideForm === true) {
g_form.clearValue(scope.field.name);
triggerSnOnChange();
} else {
scope.$apply(function() {
scope.field.displayValue = '';
scope.field.value = '';
triggerSnOnChange();
});
}
}
function triggerSnOnChange(){
if (scope.snOnChange)
scope.snOnChange(e);
}
}
function redirectLabel($select2) {
if (NOW.select2LabelWorkaround)
NOW.select2LabelWorkaround($select2);
}
function getDisplayValue(selectedItem) {
var displayValue = '';
if (selectedItem && selectedItem.sys_id) {
if (scope.displayColumn && typeof selectedItem[scope.displayColumn] != "undefined")
displayValue = selectedItem[scope.displayColumn];
else if (selectedItem.$$displayValue)
displayValue = selectedItem.$$displayValue;
else if (selectedItem.name)
displayValue = selectedItem.name;
else if (selectedItem.title)
displayValue = selectedItem.title;
}
return displayValue;
}
function getDisplayValues(selectedItem) {
var displayValues = [];
if (selectedItem && selectedItem.sys_id) {
var current = "";
if (scope.displayColumn && typeof selectedItem[scope.displayColumn] != "undefined")
current = selectedItem[scope.displayColumn];
else if (selectedItem.$$displayValue)
current = selectedItem.$$displayValue;
else if (selectedItem.name)
current = selectedItem.name;
else if (selectedItem.title)
current = selectedItem.title;
displayValues.push(current);
}
if (scope.additionalDisplayColumns) {
var columns = scope.additionalDisplayColumns.split(",");
for (var i = 0; i < columns.length; i++) {
var column = columns[i];
if (selectedItem[column])
displayValues.push(selectedItem[column]);
}
}
return displayValues;
}
scope.$watch("field.displayValue", function(newValue, oldValue) {
if (newValue != oldValue && newValue !== scope.model) {
init();
}
});
scope.$on("snReferencePicker.activate", function(evt, parms) {
$timeout(function() {
element.select2("open");
})
});
init();
},
controller: function($scope, $rootScope) {
$scope.pageSize = 20;
if ($scope.snPageSize)
$scope.pageSize = parseInt($scope.snPageSize);
$scope.rowSelected = function() {
$rootScope.$broadcast("@page.reference.selected", {
field: $scope.field,
ed: $scope.ed
});
};
this.filterResults = function(data, page) {
return {
results: data.data.items,
more: (page * $scope.pageSize < data.data.total)
};
};
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snRecordPicker.js */
angular.module('sn.common.controls').directive('snRecordPicker', function($timeout, $http, urlTools, filterExpressionParser, $sanitize, i18n) {
"use strict";
var cache = {};
function cleanLabel(val) {
if (typeof val == "object")
return "";
return typeof val == "string" ? val.trim() : val;
}
return {
restrict: 'E',
replace: true,
scope: {
field: '=',
table: '=',
defaultQuery: '=?',
startswith: '=?',
searchFields: '=?',
valueField: '=?',
displayField: '=?',
displayFields: '=?',
pageSize: '=?',
onChange: '&',
snDisabled: '=',
multiple: '=?',
options: '=?',
placeholder: '@'
},
template: '<input type="text" ng-disabled="snDisabled" style="min-width: 150px;" name="{{field.name}}" ng-model="field.value" />',
controller: function($scope) {
if (!angular.isNumber($scope.pageSize))
$scope.pageSize = 20;
if (!angular.isDefined($scope.valueField))
$scope.valueField = 'sys_id';
this.filterResults = function(data, page) {
return {
results: data.data.result,
more: (page * $scope.pageSize < parseInt(data.headers('x-total-count'), 10))
};
};
},
link: function(scope, element, attrs, ctrl) {
var isExecuting = false;
var select2Helpers = {
formatSelection: function(item) {
return $sanitize(getDisplayValue(item));
},
formatResult: function(item) {
var displayFields = getdisplayFields(item);
if (displayFields.length == 1)
return $sanitize(cleanLabel(displayFields[0]));
if (displayFields.length > 1) {
var markup = $sanitize(displayFields[0]);
var width = 100 / (displayFields.length - 1);
markup += "<div>";
for (var i = 1; i < displayFields.length; i++)
markup += "<div style='width: " + width + "%;' class='select2-additional-display-field'>" + $sanitize(cleanLabel(displayFields[i]))  + "</div>";
markup += "</div>";
return markup;
}
return "";
},
search: function(queryParams) {
var url = '/api/now/table/' + scope.table + '?' + urlTools.encodeURIParameters(queryParams.data);
if (scope.options && scope.options.cache && cache[url])
return queryParams.success(cache[url]);
return $http.get(url).then(function(response) {
if (scope.options && scope.options.cache) {
cache[url] = response;
}
return queryParams.success(response)
});
},
initSelection: function(elem, callback) {
if (scope.field.displayValue) {
if (scope.multiple){
var items = [], sel;
var values = scope.field.value.split(',');
var displayValues = scope.field.displayValue.split(',');
for(var i=0; i<values.length; i++){
sel = {};
sel[scope.valueField] = values[i];
sel[scope.displayField] = displayValues[i];
items.push(sel);
}
callback(items);
}
else {
var sel = {};
sel[scope.valueField] = scope.field.value;
sel[scope.displayField] = scope.field.displayValue;
callback(sel);
}
} else
callback([]);
}
};
var config = {
width : '100%',
containerCssClass : 'select2-reference ng-form-element',
placeholder : scope.placeholder || '    ',
formatSearching: '',
allowClear: (scope.options && typeof scope.options.allowClear !== "undefined") ? scope.options.allowClear : true,
id: function(item) {
return item[scope.valueField];
},
ajax: {
quietMillis: NOW.ac_wait_time,
data: function(filterText, page) {
var params = {
sysparm_offset: (scope.pageSize * (page - 1)),
sysparm_limit: scope.pageSize,
sysparm_query: buildQuery(filterText, scope.searchFields, scope.defaultQuery)
};
return params;
},
results: function(data, page) {
return ctrl.filterResults(data, page, scope.pageSize);
},
transport: select2Helpers.search
},
formatSelection: select2Helpers.formatSelection,
formatResult: select2Helpers.formatResult,
formatResultCssClass: function(){ return ''; },
initSelection: select2Helpers.initSelection,
multiple: scope.multiple
};
function buildQuery(filterText, searchFields, defaultQuery) {
var queryParts = [];
var operator = "CONTAINS";
if (scope.startswith)
operator = "STARTSWITH";
if (filterText.startsWith("*")) {
filterText = filterText.substring(1);
operator = "CONTAINS";
}
if (defaultQuery)
queryParts.push(defaultQuery);
var filterExpression = filterExpressionParser.parse(filterText, operator);
if (searchFields != null) {
var fields = searchFields.split(',');
if (filterExpression.filterText != '') {
var OR = "";
for (var i = 0; i < fields.length; i++) {
queryParts.push(OR + fields[i] + filterExpression.operator + filterExpression.filterText);
OR = "OR";
}
}
for (var i = 0; i < fields.length; i++)
queryParts.push('ORDERBY' + fields[i]);
queryParts.push('EQ');
}
return queryParts.join('^');
}
scope.field = scope.field || {};
var initTimeout = null;
var value = scope.field.value;
var oldValue = scope.field.value;
var $select;
function init() {
element.css("opacity", 0);
$timeout.cancel(initTimeout);
initTimeout = $timeout(function() {
i18n.getMessage('Searching...', function(searchingMsg) {
config.formatSearching = function() {
return searchingMsg;
};
});
element.css("opacity", 1);
element.select2("destroy");
$select = element.select2(config);
$select.bind("change", onChanged);
$select.bind("select2-removed", onChanged);
$select.bind("select2-selecting", onSelecting);
$select.bind("select2-removing", onRemoving);
scope.$emit('select2.ready', element);
});
}
function onSelecting(e) {
isExecuting = true;
oldValue = scope.field.value;
var selectedItem = e.choice;
if (scope.multiple && selectedItem[scope.valueField] != '') {
var values = !scope.field.value ? [] : scope.field.value.split(',');
var displayValues = !scope.field.displayValue ? [] : scope.field.displayValue.split(',');
values.push(selectedItem[scope.valueField]);
displayValues.push(getDisplayValue(selectedItem));
scope.field.value = values.join(',');
scope.field.displayValue = displayValues.join(',');
e.preventDefault();
$select.select2('val', values).select2('close');
scope.$apply(function() {
callChange(oldValue, e);
});
}
}
function onRemoving(e) {
isExecuting = true;
oldValue = scope.field.value;
var removed = e.choice;
if (scope.multiple){
var values = scope.field.value.split(',');
var displayValues = scope.field.displayValue.split(',');
for(var i = values.length-1; i>=0; i--){
if (removed[scope.valueField] == values[i]) {
values.splice(i, 1);
displayValues.splice(i, 1);
break;
}
}
scope.field.value = values.join(',');
scope.field.displayValue = displayValues.join(',');
e.preventDefault();
$select.select2('val', scope.field.value.split(','));
scope.$apply(function() {
callChange(oldValue, e);
});
}
}
function callChange(oldValue, e) {
var f = scope.field;
var p = {
field: f,
newValue: f.value,
oldValue: oldValue,
displayValue: f.displayValue
}
scope.$emit("field.change", p);
scope.$emit("field.change." + f.name, p);
if (scope.onChange)
try {
scope.onChange(e);
} catch(ex) {
console.log("directive.snRecordPicker error in onChange")
console.log(ex)
}
isExecuting = false;
}
function onChanged(e) {
e.stopImmediatePropagation();
if (scope.$$phase || scope.$root.$$phase) {
console.warn('in digest, returning early');
return;
}
if (e.added) {
var selectedItem = e.added;
if (!scope.multiple){
scope.field.value = selectedItem[scope.valueField];
if (scope.field.value) {
scope.field.displayValue = getDisplayValue(selectedItem);
} else
scope.field.displayValue = '';
}
} else if (e.removed) {
if (!scope.multiple) {
scope.field.displayValue = '';
scope.field.value = '';
}
}
scope.$apply(function() {
callChange(oldValue, e);
});
}
function getDisplayValue(selectedItem) {
var displayValue = selectedItem[scope.valueField];
if (selectedItem) {
if (scope.displayField && angular.isDefined(selectedItem[scope.displayField]))
displayValue = selectedItem[scope.displayField];
else if (selectedItem.name)
displayValue = selectedItem.name;
else if (selectedItem.title)
displayValue = selectedItem.title;
}
return cleanLabel(displayValue);
}
function getdisplayFields(selectedItem) {
var displayFields = [];
if (selectedItem && selectedItem[scope.valueField]) {
var current = "";
if (scope.displayField && angular.isDefined(selectedItem[scope.displayField]))
current = selectedItem[scope.displayField];
else if (selectedItem.name)
current = selectedItem.name;
else if (selectedItem.title)
current = selectedItem.title;
displayFields.push(current);
}
if (scope.displayFields) {
var columns = scope.displayFields.split(",");
for (var i = 0; i < columns.length; i++) {
var column = columns[i];
if (selectedItem[column])
displayFields.push(selectedItem[column]);
}
}
return displayFields;
}
scope.$watch("field.value", function(newValue) {
if (isExecuting) return;
if (angular.isDefined(newValue) && $select) {
if (scope.multiple)
$select.select2('val', newValue.split(',')).select2('close');
else
$select.select2('val', newValue).select2('close');
}
});
if (attrs.displayValue) {
attrs.$observe('displayValue', function(value){
scope.field.value = value;
});
}
init();
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snSelectBasic.js */
angular.module('sn.common.controls').directive('snSelectBasic', function($timeout) {
return {
restrict: 'C',
priority: 1,
require: '?ngModel',
scope: {
'snAllowClear': '@',
'snSelectWidth': '@',
'snChoices': '=?'
},
link: function (scope, element, attrs, ngModel) {
if (angular.isFunction(element.select2)) {
element.css("opacity", 0);
scope.selectWidth = scope.snSelectWidth || '100%';
scope.selectAllowClear = scope.snAllowClear === "true";
$timeout(function(){
element.css("opacity", 1);
element.select2({
allowClear: scope.selectAllowClear,
width: scope.selectWidth
});
if (ngModel === null)
return;
ngModel.$render = function(){
element.select2('val', ngModel.$viewValue);
element.val(ngModel.$viewValue);
};
});
element.on('change', function() {
scope.$evalAsync(setModelValue);
});
scope.$watch('snChoices', function(newValue, oldValue){
if (angular.isDefined(newValue) && newValue != oldValue) {
$timeout(function(){
setModelValue();
});
}
}, true);
function setModelValue(){
if (ngModel === null)
return;
ngModel.$setViewValue(element.val());
}
}
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snTableReference.js */
angular.module('sn.common.controls').directive('snTableReference', function($timeout) {
"use strict";
return {
restrict: 'E',
replace: true,
scope: {
field: "=",
snChange: "&",
snDisabled: "="
},
template: '<select ng-disabled="snDisabled" style="min-width: 150px;" name="{{::field.name}}" ng-model="fieldValue" ng-model-options="{getterSetter: true}" ng-options="choice.value as choice.label for choice in field.choices"></select>',
controller: function($scope){
$scope.fieldValue = function(selected){
if (angular.isDefined(selected)) {
$scope.snChange({ newValue: selected });
}
return $scope.field.value;
}
},
link: function(scope, element) {
var initTimeout = null;
var fireReadyEvent = true;
element.css("opacity", 0);
function render() {
$timeout.cancel(initTimeout);
initTimeout = $timeout(function() {
element.css("opacity", 1);
element.select2("destroy");
element.select2();
if (fireReadyEvent) {
scope.$emit('select2.ready', element);
fireReadyEvent = false;
}
});
}
scope.$watch("field.displayValue", function(newValue, oldValue) {
if (newValue !== undefined && newValue != oldValue) {
render();
}
});
render();
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snFieldReference.js */
angular.module('sn.common.controls').directive('snFieldReference', function($timeout, $http, nowServer) {
"use strict";
return {
restrict: 'E',
replace: true,
scope: {
field: "=",
snChange: "&",
snDisabled: "=",
getGlideForm: '&glideForm'
},
template: '<select ng-disabled="snDisabled" name="{{field.name}}" style="min-width: 150px;" ng-model="fieldValue" ng-model-options="{getterSetter: true}" ng-options="choice.name as choice.label for choice in field.choices"></select>',
controller: function($scope){
$scope.fieldValue = function(selected){
if (angular.isDefined(selected))
$scope.snChange({ newValue: selected });
return $scope.field.value;
}
$scope.$watch('field.dependentValue', function(newVal, oldVal){
if (!angular.isDefined(newVal))
return;
var src = nowServer.getURL('table_fields', 'exclude_formatters=true&fd_table=' + newVal);
$http.post(src).success(function(response) {
$scope.field.choices = response;
$scope.render();
});
});
},
link: function(scope, element) {
var initTimeout = null;
var fireReadyEvent = true;
scope.render = function() {
$timeout.cancel(initTimeout);
initTimeout = $timeout(function() {
element.select2("destroy");
element.select2();
if (fireReadyEvent) {
scope.$emit('select2.ready', element);
fireReadyEvent = false;
}
});
};
scope.$watch("field.displayValue", function(newValue, oldValue) {
if (newValue !== undefined && newValue != oldValue) {
scope.render();
}
});
scope.render();
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snSyncWith.js */
angular.module("sn.common.controls").directive('snSyncWith', function() {
return {
restrict: 'A',
require: 'ngModel',
link: function (scope, elem, attr) {
var journalField = scope.$eval(attr.snSyncWith);
var journalValue =  scope.$eval(attr.ngModel);
if(attr.snSyncWithValueInFn)
scope.$eval(attr.ngModel + "=" + attr.snSyncWithValueInFn, {text: scope.value});
scope.$watch(function() {
return scope.$eval(attr.snSyncWith);
}, function(nv, ov) {
if (nv !== ov)
journalField = nv;
});
scope.$watch(function() {
return scope.$eval(attr.ngModel);
}, function(nv, ov) {
if (nv !== ov)
journalValue = nv;
});
if (!window.g_form)
return;
scope.$watch(function(){
return journalValue;
}, function (n, o) {
if (n !== o)
setFieldValue();
});
function setFieldValue() {
setValue(journalField, journalValue);
}
function setValue(field, value) {
value = !!value ? value : '';
var control = g_form.getControl(field);
if(attr.snSyncWithValueOutFn)
value = scope.$eval(attr.snSyncWithValueOutFn,  {text: value})
control.value = value;
onChange(control.id);
}
scope.$watch(function(){
return journalField;
}, function(newValue, oldValue) {
if (newValue !== oldValue){
if (oldValue)
setValue(oldValue, '');
if (newValue)
setFieldValue();
}
}, true);
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.contenteditable.js */
angular.module('sn.common.controls').directive('contenteditable', function($timeout, $sanitize) {
return {
require: 'ngModel',
link: function(scope, elem, attrs, ctrl) {
var changehandler = scope.changehandler;
scope.usenewline = scope.usenewline + "" != "false";
var newLine = "\n";
var nodeBR = "BR";
var nodeDIV = "DIV";
var nodeText = "#text";
var nbspRegExp = new RegExp(String.fromCharCode(160), "g");
if (!scope.usenewline)
elem.keypress(function(event) {
if (event.which == "13") {
if (scope.entercallback)
scope.entercallback(elem);
event.preventDefault();
}
});
function processNodes(nodes) {
var val = "";
for (var i = 0; i < nodes.length; i++) {
var node = nodes[i];
var follow = true;
switch (node.nodeName) {
case nodeText:
val += node.nodeValue.replace(nbspRegExp, " ");
break;
case nodeDIV:
val += newLine;
if (node.childNodes.length == 1 && node.childNodes[0].nodeName == nodeBR)
follow = false;
break;
case nodeBR:
val += scope.usenewline ? newLine : "";
}
if (follow)
val += processNodes(node.childNodes)
}
return val;
}
function readHtml() {
var val = processNodes(elem[0].childNodes);
ctrl.$setViewValue(val);
}
function writeHtml() {
var val = ctrl.$viewValue;
if (!val || val === null)
val = "";
val = val.replace(/\n/gi,	scope.usenewline ? "<br/>" : "");
val = val.replace(/  /gi,	" &nbsp;");
try {
if (attrs.contenteditableEscapeHtml == "true")
val = $sanitize(val);
} catch (err) {
var replacement = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;'};
val = val.replace(/[&<>"'\/]/g, function (pattern) {return replacement[pattern]});
};
elem.html(val);
}
function processPlaceholder() {
if (elem[0].dataset) {
if (elem[0].textContent)
elem[0].dataset.divPlaceholderContent = 'true';
else if (elem[0].dataset.divPlaceholderContent)
delete(elem[0].dataset.divPlaceholderContent);
}
}
elem.bind('keyup', function() {
scope.$apply(function() {
readHtml();
processPlaceholder();
});
});
function selectText(elem) {
var range;
var selection;
if (document.body.createTextRange) {
range = document.body.createTextRange();
range.moveToElementText(elem);
range.select();
} else if (window.getSelection) {
selection = window.getSelection();
range = document.createRange();
range.selectNodeContents(elem);
selection.removeAllRanges();
selection.addRange(range);
}
}
elem.bind('focus', function() {
if (scope[attrs.tracker] && scope[attrs.tracker]['isDefault_' + attrs.trackeratt])
$timeout(function() {
selectText(elem[0]);
});
elem.original = ctrl.$viewValue;
});
elem.bind('blur', function() {
scope.$apply(function() {
readHtml();
processPlaceholder();
if (elem.original != ctrl.$viewValue && changehandler) {
if (scope[attrs.tracker] && typeof scope[attrs.tracker]['isDefault_' + attrs.trackeratt] != "undefined")
scope[attrs.tracker]['isDefault_' + attrs.trackeratt] = false;
changehandler(scope[attrs.tracker], attrs.trackeratt);
}
});
});
elem.bind('paste', function() {
scope.$apply(function() {
setTimeout(function() {
readHtml();
writeHtml();
}, 0);
return false;
});
});
ctrl.$render = function() {
writeHtml();
};
scope.$watch('field.readonly', function(){
elem[0].contentEditable = !scope.$eval('field.readonly');
});
scope.$watch(
function () {
return {
val: elem[0].textContent
};
},
function (newValue, oldValue) {
if (newValue.val != oldValue.val)
processPlaceholder();
},
true);
writeHtml();
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snGlyph.js */
angular.module("sn.common.controls").directive("snGlyph", function() {
"use strict";
return {
restrict : 'E',
replace : true,
scope : {
char : "@",
},
template : '<span class="glyphicon glyphicon-{{char}}" />',
link : function(scope) {}
}
});
angular.module("sn.common.controls").directive('fa', function () {
return {
restrict: 'E',
template: '<span class="fa" aria-hidden="true"></span>',
replace: true,
link: function (scope, element, attrs) {
'use strict';
var currentClasses = {};
function _observeStringAttr (attr, baseClass) {
var className;
attrs.$observe(attr, function () {
baseClass = baseClass || 'fa-' + attr;
element.removeClass(currentClasses[attr]);
if (attrs[attr]) {
className = [baseClass, attrs[attr]].join('-');
element.addClass(className);
currentClasses[attr] = className;
}
});
}
_observeStringAttr('name', 'fa');
_observeStringAttr('rotate');
_observeStringAttr('flip');
_observeStringAttr('stack');
attrs.$observe('size', function () {
var className;
element.removeClass(currentClasses.size);
if (attrs.size === 'large') {
className = 'fa-lg';
} else if (!isNaN(parseInt(attrs.size, 10))) {
className = 'fa-' + attrs.size + 'x';
}
element.addClass(className);
currentClasses.size = className;
});
attrs.$observe('stack', function () {
var className;
element.removeClass(currentClasses.stack);
if (attrs.stack === 'large') {
className = 'fa-stack-lg';
} else if (!isNaN(parseInt(attrs.stack, 10))) {
className = 'fa-stack-' + attrs.stack + 'x';
}
element.addClass(className);
currentClasses.stack = className;
});
function _observeBooleanAttr (attr, className) {
var value;
attrs.$observe(attr, function () {
className = className || 'fa-' + attr;
value = attr in attrs && attrs[attr] !== 'false' && attrs[attr] !== false;
element.toggleClass(className, value);
});
}
_observeBooleanAttr('border');
_observeBooleanAttr('fw');
_observeBooleanAttr('inverse');
_observeBooleanAttr('spin');
element.toggleClass('fa-li',
element.parent() &&
element.parent().prop('tagName') === 'LI' &&
element.parent().parent() &&
element.parent().parent().hasClass('fa-ul') &&
element.parent().children()[0] === element[0] &&
attrs.list !== 'false' &&
attrs.list !== false
);
attrs.$observe('alt', function () {
var altText = attrs.alt,
altElem = element.next(),
altElemClass = 'fa-alt-text';
if (altText) {
element.removeAttr('alt');
if (!altElem || !altElem.hasClass(altElemClass)) {
element.after('<span class="sr-only fa-alt-text"></span>');
altElem = element.next();
}
altElem.text(altText);
} else if (altElem && altElem.hasClass(altElemClass)) {
altElem.remove();
}
});
}
};
})
.directive('faStack', function () {
return {
restrict: 'E',
transclude: true,
template: '<span ng-transclude class="fa-stack fa-lg"></span>',
replace: true,
link: function (scope, element, attrs) {
var currentClasses = {};
function _observeStringAttr (attr, baseClass) {
var className;
attrs.$observe(attr, function () {
baseClass = baseClass || 'fa-' + attr;
element.removeClass(currentClasses[attr]);
if (attrs[attr]) {
className = [baseClass, attrs[attr]].join('-');
element.addClass(className);
currentClasses[attr] = className;
}
});
}
_observeStringAttr('size');
attrs.$observe('size', function () {
var className;
element.removeClass(currentClasses.size);
if (attrs.size === 'large') {
className = 'fa-lg';
} else if (!isNaN(parseInt(attrs.size, 10))) {
className = 'fa-' + attrs.size + 'x';
}
element.addClass(className);
currentClasses.size = className;
});
}
};
});
;
/*! RESOURCE: /scripts/sn/common/controls/directive.snImageUploader.js */
angular.module('sn.common.controls').directive('snImageUploader', function($window, $rootScope, $timeout, getTemplateUrl, i18n, snAttachmentHandler) {
var DRAG_IMAGE_SELECT = i18n.getMessage('Drag image or click to select');
return {
restrict: 'E',
replace: true,
templateUrl: getTemplateUrl('directive.snImageUploader'),
transclude: true,
scope: {
readOnly: '@',
tableName: '@',
sysId: '@',
fieldName: '@',
onUpload: '&',
onDelete: '&',
uploadMessage: '@',
src: '='
},
controller: function($scope) {
$scope.uploading = false;
$scope.getTitle = function() {
if($scope.readOnly !== 'true')
return DRAG_IMAGE_SELECT;
return '';
}
},
link: function(scope, element) {
function isValidImage(file) {
if (file.type.indexOf('image') != 0) {
$alert(i18n.getMessage('Please select an image'));
return false;
}
if (file.type.indexOf('tiff') > 0) {
$alert(i18n.getMessage('Please select a common image format such as gif, jpeg or png'));
return false;
}
return true;
}
function $alert(message) {
alert(message);
}
scope.onFileSelect = function($files) {
if (scope.readOnly === 'true')
return;
if ($files.length == 0)
return;
var file = $files[0];
if(!isValidImage(file))
return;
var uploadParams = {
sysparm_fieldname: scope.fieldName
};
scope.uploading = true;
snAttachmentHandler.create(scope.tableName, scope.sysId).uploadAttachment(file, uploadParams).then(function(response) {
$timeout(function() {
scope.uploading = false;
});
if (scope.onUpload)
scope.onUpload({thumbnail: response.thumbnail});
$rootScope.$broadcast("snImageUploader:complete", scope.sysId, response);
});
}
scope.openFileSelector = function($event) {
$event.stopPropagation();
var input = element.find('input[type=file]');
input.click();
}
scope.activateUpload = function($event) {
if (scope.readOnly !== 'true')
scope.openFileSelector($event);
else
scope.showUpload = !scope.showUpload;
}
scope.deleteAttachment = function () {
var sys_id = scope.src.split(".")[0];
snAttachmentHandler.deleteAttachment(sys_id).then(function () {
scope.src = null;
if (scope.onDelete)
scope.onDelete();
$rootScope.$broadcast("snImageUploader:delete", scope.sysId, sys_id);
});
}
}
}
});
;
;
/*! RESOURCE: /scripts/sn/common/i18n/js_includes_i18n.js */
/*! RESOURCE: /scripts/sn/common/i18n/_module.js */
angular.module('sn.common.i18n', ['sn.common.glide']);
angular.module('sn.i18n', ['sn.common.i18n']);
;
/*! RESOURCE: /scripts/sn/common/i18n/directive.snBindI18n.js */
angular.module('sn.common.i18n').directive('snBindI18n', function(i18n, $sanitize) {
return {
restrict: 'A',
link : function(scope, iElem, iAttrs) {
i18n.getMessage(iAttrs.snBindI18n, function(translatedValue) {
var sanitizedValue = $sanitize(translatedValue);
iElem.append(sanitizedValue);
});
}
}
});
;
/*! RESOURCE: /scripts/sn/common/i18n/directive.message.js */
angular.module('sn.common.i18n').directive('nowMessage', function(i18n) {
return {
restrict: 'E',
priority: 0,
template: '',
replace: true,
compile: function(element, attrs, transclude) {
var value = element.attr('value');
if (!attrs.key || !value)
return;
i18n.loadMessage(attrs.key, value);
}
};
});
;
/*! RESOURCE: /scripts/sn/common/i18n/service.i18n.js */
angular.module('sn.common.i18n').provider('i18n', function() {
var messageMap = {};
function loadMessage(msgKey, msgValue) {
messageMap[msgKey] = msgValue;
}
this.preloadMessages = function(messages) {
angular.forEach(messages, function(key, val) {
loadMessage(key, val);
});
};
function interpolate(param) {
return this.replace(/{([^{}]*)}/g,
function (a, b) {
var r = param[b];
return typeof r === 'string' || typeof r === 'number' ? r : a;
}
);
}
if (!String.prototype.withValues)
String.prototype.withValues = interpolate;
this.$get = function(nowServer, $http, $window, $log) {
var isDebug = $window.NOW ? $window.NOW.i18n_debug : true;
function debug(msg) {
if (!isDebug)
return;
$log.log('i18n: ' + msg);
}
function getMessageFromServer( msgKey, callback) {
getMessagesFromServer([msgKey], function() {
if (callback)
callback(messageMap[msgKey]);
});
}
function getMessagesFromServer( msgArray, callback,  msgArrayFull) {
var url = nowServer.getURL('message');
$http.post(url, { messages: msgArray }).success(function(response) {
var messages = response.messages;
for (var i in messages) {
loadMessage(i, messages[i]);
}
var returnMessages = {},
allMessages = msgArrayFull || msgArray;
for (var j = 0; j < allMessages.length; j++) {
var key = allMessages[j];
returnMessages[key] = messageMap[key];
}
if (callback)
callback(returnMessages);
});
}
return {
getMessage: function( msgKey, callback) {
debug('getMessage: Checking for ' + msgKey);
if (messageMap.hasOwnProperty(msgKey)) {
var message = messageMap[msgKey];
if (typeof(callback) == 'function')
callback(message);
debug('getMessage: Found: ' + msgKey + ', message: ' + message);
return message;
}
debug('getMessage: Not found: ' + msgKey + ', querying server');
getMessageFromServer(msgKey, callback);
msgKey.withValues = interpolate;
if (typeof(callback) != 'function')
$log.warn('getMessage (key="' + msgKey + '"): synchronous use not supported in Mobile or Service Portal unless message is already cached');
return msgKey;
},
format: function(message) {
if(arguments.length == 1)
return message;
if(arguments.length == 2 && (typeof arguments[1] === 'object'))
return interpolate.call(message, arguments[1]);
return interpolate.call(message, [].slice.call(arguments, 1));
},
getMessages: function( msgArray, callback) {
debug('getMessages: Checking for ' + msgArray.join(','));
var results = {},
needMessage = [],
needServerRequest = false;
for (var i = 0; i < msgArray.length; i++) {
var key = msgArray[i];
if (!messageMap.hasOwnProperty(key)) {
debug('getMessages: Did not find ' + key);
needMessage.push(key);
needServerRequest = true;
results[key] = key;
continue;
}
results[key] = messageMap[key];
debug('getMessages: Found ' + key + ', message: ' + results[key]);
}
if (needServerRequest) {
debug('getMessages: Querying server for ' + needMessage.join(','));
getMessagesFromServer(needMessage, callback, msgArray);
} else if (typeof(callback) == 'function') {
debug('getMessages: Found all messages');
callback(results);
}
return results;
},
clearMessages: function() {
debug('clearMessages: clearing messages');
messageMap = {};
},
loadMessage: function(msgKey, msgValue) {
loadMessage(msgKey, msgValue);
debug('loadMessage: loaded key: ' + msgKey + ', value: ' + msgValue);
},
preloadMessages: function() {
var that = this
angular.element('now-message').each(function() {
var elem = angular.element(this);
that.loadMessage(elem.attr('key'), elem.attr('value'));
})
}
};
};
});
;
;
/*! RESOURCE: /scripts/sn/common/link/js_includes_link.js */
/*! RESOURCE: /scripts/sn/common/link/_module.js */
angular.module("sn.common.link", []);
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContent.js */
angular.module('sn.common.link').directive('snLinkContent', function($compile, linkContentTypes) {
'use strict';
return {
restrict: 'E',
replace: true,
template: "<span />",
scope: {
link: "="
},
link: function(scope, elem) {
scope.isShowing = function() {
return (scope.link.isActive || scope.link.isUnauthorized) && !scope.link.isPending;
};
var linkDirective = linkContentTypes.forType(scope.link);
elem.attr(linkDirective, "");
elem.attr('ng-if', 'isShowing()');
$compile(elem)(scope);
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentYoutube.js */
angular.module('sn.common.link').directive('snLinkContentYoutube', function(getTemplateUrl, $sce, inFrameSet) {
'use strict';
return {
restrict: 'A',
replace: true,
templateUrl: getTemplateUrl('snLinkContentYoutube.xml'),
scope: {
link: "="
},
controller: function($scope) {
$scope.playerActive = false;
$scope.width = (inFrameSet) ? '248px' : '500px';
$scope.height = (inFrameSet) ? '139px' : '281px';
$scope.showPlayer = function() {
$scope.playerActive = true;
};
$scope.getVideoEmbedLink = function() {
if ($scope.link.embedLink) {
var videoLink = $scope.link.embedLink + "?autoplay=1";
return $sce.trustAsHtml("<iframe width='" + $scope.width + "' height='" + $scope.height + "' autoplay='1' frameborder='0' allowfullscreen='' src='" + videoLink + "'></iframe>");
}
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentSoundcloud.js */
angular.module('sn.common.link').directive('snLinkContentSoundcloud', function(getTemplateUrl, $sce, inFrameSet) {
'use strict';
return {
restrict: 'A',
replace: true,
templateUrl: getTemplateUrl('snLinkContentSoundcloud.xml'),
scope: {
link: "="
},
controller: function($scope) {
$scope.playerActive = false;
$scope.width = (inFrameSet) ? '248px' : '500px';
$scope.height = (inFrameSet) ? '139px' : '281px';
$scope.showPlayer = function() {
$scope.playerActive = true;
};
$scope.getVideoEmbedLink = function() {
if ($scope.link.embedLink) {
var videoLink = $scope.link.embedLink + "&amp;auto_play=true";
var width = (inFrameSet) ? 248 : 500;
return $sce.trustAsHtml("<iframe width='" + $scope.width + "' height='" + $scope.height + "' autoplay='1' frameborder='0' allowfullscreen='' src='" + videoLink + "'></iframe>");
}
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentArticle.js */
angular.module('sn.common.link').directive('snLinkContentArticle', function(getTemplateUrl) {
'use strict';
return {
restrict: 'A',
replace: true,
templateUrl: getTemplateUrl('snLinkContentArticle.xml'),
scope: {
link: "="
},
controller: function($scope) {
$scope.backgroundImageStyle = $scope.link.imageLink
? {"background-image": 'url(' + $scope.link.imageLink + ')'}
: {};
$scope.isVisible = function() {
var link = $scope.link;
return !!link.shortDescription || !!link.imageLink;
};
$scope.hasDescription = function() {
var link = $scope.link;
return link.shortDescription && (link.shortDescription !== link.title);
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentError.js */
angular.module('sn.common.link').directive('snLinkContentError', function(getTemplateUrl) {
'use strict';
return {
restrict: 'A',
replace: true,
templateUrl: getTemplateUrl('snLinkContentError.xml'),
scope: {
link: "="
},
controller: function($scope) {
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentImage.js */
angular.module('sn.common.link').directive('snLinkContentImage', function(getTemplateUrl) {
'use strict';
return {
restrict: 'A',
replace: true,
templateUrl: getTemplateUrl('snLinkContentImage.xml'),
scope: {
link: "="
},
controller: function($scope) {
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentAttachment.js */
angular.module('sn.common.link').directive('snLinkContentAttachment', function(getTemplateUrl) {
'use strict';
return {
restrict: 'EA',
replace: true,
templateUrl: getTemplateUrl('snLinkContentAttachment.xml'),
scope: {
attachment: '=',
link: '='
},
controller: function($scope, $element, snCustomEvent) {
$scope.attachment = $scope.attachment || $scope.link.attachment;
$scope.calcImageSize = function() {
var imageWidth = $scope.width;
var imageHeight = $scope.height;
var MAX_IMAGE_SIZE = $element.width() < 298 ? $element.width() : 298;
if (imageHeight < 0 || imageWidth < 0)
return "";
if (imageHeight > imageWidth) {
if (imageHeight >= MAX_IMAGE_SIZE) {
imageWidth *= MAX_IMAGE_SIZE / imageHeight;
imageHeight = MAX_IMAGE_SIZE;
}
} else {
if (imageWidth >= MAX_IMAGE_SIZE) {
imageHeight *= MAX_IMAGE_SIZE / imageWidth;
imageWidth = MAX_IMAGE_SIZE
}
}
return "height: " + imageHeight + "px; width: " + imageWidth + "px;";
};
$scope.aspectRatioClass = function() {
return ($scope.height > $scope.width) ? 'limit-height' : 'limit-width';
};
$scope.showImage = function(event) {
if (event.keyCode === 9)
return;
snCustomEvent.fire('sn.attachment.preview', event, $scope.attachment.rawData);
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/directive.snLinkContentRecord.js */
angular.module('sn.common.link').directive('snLinkContentRecord', function(getTemplateUrl) {
'use strict';
return {
restrict: 'A',
replace: true,
templateUrl: getTemplateUrl('snLinkContentRecord.xml'),
scope: {
link: '='
},
controller: function($scope) {
$scope.isTitleVisible = function() {
return !$scope.isDescriptionVisible() && $scope.link.title;
};
$scope.isDescriptionVisible = function() {
return $scope.link.shortDescription;
};
$scope.hasNoHeader = function() {
return !$scope.isTitleVisible() && !$scope.isDescriptionVisible();
};
$scope.isUnassigned = function() {
return $scope.link.isTask && !$scope.link.avatarID;
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/link/provider.linkContentTypes.js */
angular.module('sn.common.link').provider('linkContentTypes', function linkContentTypesProvider() {
"use strict";
var linkDirectiveMap = {
'record' : "sn-link-content-record",
'attachment' : "sn-link-content-attachment",
'video' : "sn-link-content-youtube",
'music.song': "sn-link-content-soundcloud",
'link'   : 'sn-link-content-article',
'article': 'sn-link-content-article',
'website': 'sn-link-content-article',
'image': 'sn-link-content-image'
};
this.$get = function linkContentTypesFactory() {
return {
forType: function(link) {
if (link.isUnauthorized)
return "sn-link-content-error";
return linkDirectiveMap[link.type] || "no-card";
}
}
};
});
;
;
/*! RESOURCE: /scripts/sn/common/mention/js_includes_mention.js */
/*! RESOURCE: /scripts/sn/common/mention/_module.js */
angular.module("sn.common.mention", []);
;
/*! RESOURCE: /scripts/sn/common/mention/directive.snMentionPopover.js */
angular.module('sn.common.mention').directive("snMentionPopover", function(getTemplateUrl, $timeout) {
'use strict';
return {
restrict: 'E',
replace: true,
templateUrl: getTemplateUrl('snMentionPopover.xml'),
link: function(scope, elem, $attrs) {
elem.detach().appendTo(document.body);
scope.dontPositionManually = scope.$eval($attrs.dontpositionmanually) || false;
scope.onClick = function(event) {
if (!angular.element(event.target).closest("#mention-popover").length
|| angular.element(event.target).closest("#direct-message-popover-trigger").length) {
scope.$evalAsync(function() {
scope.$parent.showPopover = false;
scope.$emit("snMentionPopover.showPopoverIsFalse");
if (scope.dontPositionManually && !(scope.$eval($attrs.snavatarpopover))) {
elem.remove();
} else {
scope.$broadcast("sn-avatar-popover-destroy");
}
angular.element('.popover').each(function () {
var object = angular.element(this);
if (object.popover) {
object.popover('hide');
}
})
});
}
};
scope.clickListener = $timeout(function() {
angular.element('html').on('click.mentionPopover', scope.onClick);
}, 0, false);
scope.$on('sn-bootstrap-popover.close-other-popovers', scope.onClick);
function setPopoverPosition(clickX, clickY) {
var topPosition;
var leftPosition;
var windowHeight = window.innerHeight;
var windowWidth  = window.innerWidth;
if (((clickY - (elem.height() / 2))) < 10)
topPosition = 10;
else
topPosition = ((clickY + (elem.height() / 2)) > windowHeight) ? windowHeight - elem.height() - 15 : clickY - (elem.height() / 2);
leftPosition = ((clickX + 20 + (elem.width())) > windowWidth) ? windowWidth - elem.width() - 15: clickX  + 20;
elem.css("top", topPosition + "px").css("left", leftPosition + "px");
}
if (!scope.dontPositionManually) {
$timeout(function () {
var clickX = (scope.$parent && scope.$parent.clickEvent && scope.$parent.clickEvent.pageX) ? scope.$parent.clickEvent.pageX : clickX || 300;
var clickY = (scope.$parent && scope.$parent.clickEvent && scope.$parent.clickEvent.pageY) ? scope.$parent.clickEvent.pageY : clickY || 300;
setPopoverPosition(clickX, clickY);
elem.velocity({
opacity: 1
}, {
duration: 100,
easing: "cubic"
});
});
}
},
controller: function($scope, $element, $attrs) {
$scope.profile = $scope.$eval($attrs.profile);
$scope.$on("$destroy", function() {
angular.element('html').off('click.mentionPopover', $scope.onClick);
$element.remove();
});
}
}
});
;
/*! RESOURCE: /scripts/sn/common/mention/service.snMention.js */
angular.module("sn.common.mention").factory("snMention", function(liveProfileID, $q, $http) {
"use strict";
var MENTION_PATH = "/api/now/form/mention/record";
var USER_PATH = '/api/now/ui/user/';
var avatarCache = {};
function retrieveMembers(table, document, term) {
if(!term || !document || !table) {
var deferred = $q.defer();
deferred.resolve([]);
return deferred.promise;
}
return $http( {
url: MENTION_PATH + "/" + table + "/" + document,
method: "GET",
params: {
term: term
}
}).then(function(response) {
var members = response.data.result;
var promises = [];
angular.forEach(members, function(user) {
if (avatarCache[user.sys_id]) {
user.initials = avatarCache[user.sys_id].initials;
user.avatar = avatarCache[user.sys_id].avatar;
} else {
var promise = $http.get(USER_PATH + user.sys_id).success(function(response) {
user.initials = response.result.user_initials;
user.avatar = response.result.user_avatar;
avatarCache[user.sys_id] = {initials: user.initials, avatar: user.avatar};
});
promises.push(promise);
}
});
return $q.all(promises).then(function() {
return members;
});
})
}
return {
retrieveMembers: retrieveMembers
}
});
;
;
/*! RESOURCE: /scripts/sn/common/messaging/js_includes_messaging.js */
/*! RESOURCE: /scripts/doctype/CustomEventManager.js */
var NOW = NOW || {};
var CustomEventManager = (function (existingCustomEvent) {
"use strict";
var events = (existingCustomEvent && existingCustomEvent.events) || {};
var isFiringFlag = false;
var trace = false;
var suppressEvents = false;
var NOW_MSG = 'NOW.PostMessage';
function observe(eventName, fn){
if (trace)
jslog("$CustomEventManager observing: " + eventName);
on(eventName, fn);
}
function on(name, func) {
if (!func || typeof func !== 'function')
return;
if (typeof name === 'undefined')
return;
if (!events[name])
events[name] = [];
events[name].push(func);
}
function un(name, func) {
if (!events[name])
return;
var idx = -1;
for (var i = 0; i < events[name].length; i++) {
if (events[name][i] === func) {
idx = i;
break;
}
}
if (idx >= 0)
events[name].splice(idx, 1)
}
function unAll(name) {
if (events[name])
delete events[name];
}
function fire(eventName, args){
if (trace)
jslog("$CustomEventManager firing: " + eventName + " args: " + arguments.length);
return fireEvent.apply(null, arguments);
}
function fireUp(eventName, args){
var win = window;
while (win){
try {
if (win.CustomEvent.fireEvent.apply(null, arguments) === false)
return;
win = win.parent === win ? null : win.parent;
}catch(e){
return;
}
}
}
function fireEvent() {
if (suppressEvents)
return true;
var args = Array.prototype.slice.apply(arguments);
var name = args.shift();
var eventList = events[name];
if (!eventList)
return true;
var event = eventList.slice();
isFiringFlag = true;
for (var i = 0, l = event.length; i < l; i++) {
var ev = event[i];
if (!ev)
continue;
if (ev.apply(null, args) === false) {
isFiringFlag = false;
return false;
}
}
isFiringFlag = false;
return true;
}
function isFiring() {
return isFiringFlag;
}
function forward(name, element, func) {
on(name, func);
element.addEventListener(name, function(e) {
fireEvent(e.type, this, e);
}.bind(api));
}
function registerPostMessageEvent() {
if (NOW.registeredPostMessageEvent) {
return;
}
if (!window.postMessage) {
return;
}
window.addEventListener('message', function (event) {
var nowMessageJSON = event.data;
var nowMessage;
try {
nowMessage = JSON.parse(nowMessageJSON.toString());
} catch (e) {
return;
}
if (!nowMessage.type == NOW_MSG) {
return;
}
fire(nowMessage.eventName, nowMessage.args);
}, false);
NOW.registeredPostMessageEvent = true;
}
function doPostMessage(win, event, msg, targetOrigin) {
var nowMessage = {type: NOW_MSG, eventName: event, args: msg};
var nowMessageJSON;
if (!win || !win.postMessage) {
return
}
nowMessageJSON = JSON.stringify(nowMessage);
win.postMessage(nowMessageJSON, targetOrigin);
}
function fireTop(eventName, args){
if (trace)
jslog("$CustomEventManager firing: " + eventName + " args: " + arguments.length);
fireEvent.apply(null, arguments);
var t = getTopWindow();
if (t !== null && window !== t)
t.CustomEvent.fire(eventName, args);
}
function fireAll(eventName, args) {
if (trace)
jslog("$CustomEventManager firing: " + eventName + " args: " + arguments.length);
var topWindow = getTopWindow();
notifyAllFrom(topWindow);
function notifyAllFrom(rootFrame) {
var childFrame;
rootFrame.CustomEvent.fireEvent(eventName, args);
for (var i = 0; i < rootFrame.length; i++) {
try {
childFrame = rootFrame[i];
if (!childFrame)
continue;
if (childFrame.CustomEvent && typeof childFrame.CustomEvent.fireEvent === "function") {
notifyAllFrom(childFrame);
}
} catch(e) {
}
}
}
}
function fireToWindow(targetWindow, eventName, args, usePostMessage, targetOrigin) {
if (trace)
jslog("$CustomEventManager firing: " + eventName + " args: " + args.length);
if (usePostMessage) {
doPostMessage(targetWindow, eventName, args, targetOrigin);
} else {
targetWindow.CustomEvent.fireEvent(eventName, args);
}
}
function getTopWindow() {
var topWindow = window.self;
try {
while (topWindow.CustomEvent.fireEvent && topWindow !== topWindow.parent && topWindow.parent.CustomEvent.fireEvent) {
topWindow = topWindow.parent;
}
} catch (e) {}
return topWindow;
}
function isTopWindow() {
return getTopWindow() == window.self;
}
function jslog(msg, src, dateTime) {
try {
if (!src) {
var path = window.self.location.pathname;
src = path.substring(path.lastIndexOf('/') + 1);
}
if (window.self.opener && window != window.self.opener) {
if (window.self.opener.jslog) {
window.self.opener.jslog(msg, src, dateTime);
}
} else if (parent && parent.jslog && jslog != parent.jslog) {
parent.jslog(msg, src, dateTime);
} else {
if (window.console && window.console.log)
console.log(msg);
}
} catch (e) {
}
}
var api =  {
set trace(value) {
trace = !!value;
},
get trace() {
return trace;
},
set suppressEvents(value) {
suppressEvents = !!value;
},
get suppressEvents() {
return suppressEvents;
},
get events() {
return events;
},
on: on,
un: un,
unAll: unAll,
forward: forward,
isFiring: isFiring,
fireEvent: fireEvent,
observe: observe,
fire: fire,
fireTop: fireTop,
fireAll: fireAll,
fireToWindow: fireToWindow,
isTopWindow: isTopWindow,
fireUp: fireUp,
toString: function() { return 'CustomEventManager'; }
};
registerPostMessageEvent();
return api;
})(NOW.CustomEvent);
NOW.CustomEvent = CustomEventManager;
if (typeof CustomEvent !== "undefined") {
CustomEvent.observe = NOW.CustomEvent.observe.bind(NOW.CustomEvent);
CustomEvent.fire = NOW.CustomEvent.fire.bind(NOW.CustomEvent);
CustomEvent.fireUp = NOW.CustomEvent.fireUp.bind(NOW.CustomEvent);
CustomEvent.fireTop = NOW.CustomEvent.fireTop.bind(NOW.CustomEvent);
CustomEvent.fireAll = NOW.CustomEvent.fireAll.bind(NOW.CustomEvent);
CustomEvent.fireToWindow = NOW.CustomEvent.fireToWindow.bind(NOW.CustomEvent);
CustomEvent.on = NOW.CustomEvent.on.bind(NOW.CustomEvent);
CustomEvent.un = NOW.CustomEvent.un.bind(NOW.CustomEvent);
CustomEvent.unAll = NOW.CustomEvent.unAll.bind(NOW.CustomEvent);
CustomEvent.forward = NOW.CustomEvent.forward.bind(NOW.CustomEvent);
CustomEvent.isFiring = NOW.CustomEvent.isFiring.bind(NOW.CustomEvent);
CustomEvent.fireEvent = NOW.CustomEvent.fireEvent.bind(NOW.CustomEvent);
CustomEvent.events = NOW.CustomEvent.events;
CustomEvent.isTopWindow = NOW.CustomEvent.isTopWindow.bind(NOW.CustomEvent);
} else {
window.CustomEvent = NOW.CustomEvent;
}
;
/*! RESOURCE: /scripts/sn/common/messaging/_module.js */
angular.module('sn.common.messaging', []);
angular.module('sn.messaging', ['sn.common.messaging']);
;
/*! RESOURCE: /scripts/sn/common/messaging/service.snCustomEvent.js */
angular.module('sn.common.messaging').factory('snCustomEvent',  function() {
"use strict";
if (typeof NOW.CustomEvent === 'undefined')
throw "CustomEvent not found in NOW global";
return NOW.CustomEvent;
});
;
;
/*! RESOURCE: /scripts/sn/common/notification/js_includes_notification.js */
/*! RESOURCE: /scripts/sn/common/notification/_module.js */
angular.module('sn.common.notification', ['sn.common.util', 'ngSanitize', 'sn.common.i18n']);
;
/*! RESOURCE: /scripts/sn/common/notification/factory.notificationWrapper.js */
angular.module("sn.common.notification").factory("snNotificationWrapper", function($window, $timeout) {
"use strict";
function assignHandler(notification, handlerName, options){
if (typeof options[handlerName] === "function")
notification[handlerName.toLowerCase()] = options[handlerName];
}
return function NotificationWrapper(title, options) {
var defaults = {
dir: 'auto',
lang: 'en_US',
decay: true,
lifespan: 4000,
body: "",
tag: "",
icon: '/native_notification_icon.png'
};
var optionsOnClick = options.onClick;
options.onClick = function() {
if(angular.isFunction($window.focus))
$window.focus();
if(typeof optionsOnClick === "function")
optionsOnClick();
}
var result = {};
options = angular.extend(defaults, options);
var previousOnClose = options.onClose;
options.onClose = function() {
if(angular.isFunction(result.onclose))
result.onclose();
if(angular.isFunction(previousOnClose))
previousOnClose();
}
var notification = new $window.Notification(title, options);
assignHandler(notification, "onShow", options);
assignHandler(notification, "onClick", options);
assignHandler(notification, "onError", options);
assignHandler(notification, "onClose", options);
if (options.decay && options.lifespan > 0)
$timeout(function() {
notification.close();
}, options.lifespan)
result.close = function() {
notification.close();
}
return result;
}
})
;
/*! RESOURCE: /scripts/sn/common/notification/service.snNotifier.js */
angular.module("sn.common.notification").factory("snNotifier", function ($window, snNotificationWrapper) {
"use strict";
return function(settings) {
function requestNotificationPermission() {
if($window.Notification && $window.Notification.permission === "default")
$window.Notification.requestPermission();
}
function canUseNativeNotifications() {
return ($window.Notification && $window.Notification.permission === "granted");
}
var currentNotifications = [];
settings = angular.extend({
notifyMethods: ["native", "glide"]
}, settings);
var methods = {
'native': nativeNotify,
'glide': glideNotify
};
function nativeNotify(title, options) {
if(canUseNativeNotifications()) {
var newNotification = snNotificationWrapper(title, options);
newNotification.onclose = function () {
stopTrackingNotification(newNotification)
};
currentNotifications.push(newNotification);
return true;
}
return false;
}
function glideNotify(title, options) {
return false;
}
function stopTrackingNotification(newNotification) {
var index = currentNotifications.indexOf(newNotification);
if(index > -1)
currentNotifications.splice(index, 1);
}
function notify(title, options) {
if(typeof options === "string")
options = {body: options};
options = options || {};
for(var i = 0, len = settings.notifyMethods.length; i < len; i++)
if(typeof settings.notifyMethods[i] == "string") {
if(methods[settings.notifyMethods[i]](title, options))
break;
} else {
if(settings.notifyMethods[i](title, options))
break;
}
}
function clearAllNotifications() {
while(currentNotifications.length > 0)
currentNotifications.pop().close();
}
return {
notify: notify,
canUseNativeNotifications: canUseNativeNotifications,
clearAllNotifications: clearAllNotifications,
requestNotificationPermission: requestNotificationPermission
}
}
});
;
/*! RESOURCE: /scripts/sn/common/notification/directive.snNotification.js */
angular.module('sn.common.notification').directive('snNotification', function($timeout, $rootScope) {
"use strict";
return {
restrict: 'E',
replace: true,
template: '<div class="notification-container"></div>',
link: function(scope, element) {
scope.addNotification = function(payload) {
if (!payload)
payload = {};
if (!payload.text)
payload.text = '';
if (!payload.classes)
payload.classes = '';
if (!payload.duration)
payload.duration = 5000;
angular.element('<div/>').qtip({
content: {
text: payload.text,
title: {
button: false
}
},
position: {
target: [0, 0],
container: angular.element('.notification-container')
},
show: {
event: false,
ready: true,
effect: function () {
angular.element(this).stop(0, 1).animate({ height: 'toggle' }, 400, 'swing');
},
delay: 0,
persistent: false
},
hide: {
event: false,
effect: function (api) {
angular.element(this).stop(0, 1).animate({ height: 'toggle' }, 400, 'swing');
}
},
style: {
classes: 'jgrowl' + ' ' + payload.classes,
tip: false
},
events: {
render: function (event, api) {
if (!api.options.show.persistent) {
angular.element(this).bind('mouseover mouseout', function(e) {
clearTimeout(api.timer);
if (e.type !== 'mouseover') {
api.timer = setTimeout(function() {
api.hide(e);
}, payload.duration);
}
})
.triggerHandler('mouseout');
}
}
}
});
},
scope.$on('notification.notify', function(event, payload) {
scope.addNotification(payload);
});
}
};
});
;
/*! RESOURCE: /scripts/sn/common/notification/service.snNotification.js */
angular.module('sn.common.notification').factory('snNotification', function($document, $templateCache, $compile, $rootScope, $timeout, $q, getTemplateUrl, $http, i18n) {
'use strict';
var openNotifications = [],
timeouts = {},
options = {
top: 20,
gap: 10,
duration: 5000
};
return {
show: function(type, message, duration, onClick, container) {
return createNotificationElement(type, message).then(function(element) {
displayNotification(element, container);
checkAndSetDestroyDuration(element, duration);
return element;
});
},
hide: hide,
setOptions: function(opts) {
if (angular.isObject(opts))
angular.extend(options, opts);
}
};
function getTemplate() {
var templateName = 'sn_notification.xml',
template = $templateCache.get(templateName),
deferred = $q.defer();
if (!template) {
var url = getTemplateUrl(templateName);
$http.get(url).then(function(result) {
$templateCache.put(templateName, result.data);
deferred.resolve(result.data);
},
function(reason) {
return $q.reject(reason);
});
} else
deferred.resolve(template);
return deferred.promise;
}
function createNotificationElement(type, message) {
var thisScope, thisElement;
var icon = 'icon-info';
if (type == 'error') {
icon = 'icon-cross-circle';
} else if (type == 'warning') {
icon = 'icon-alert';
} else if (type = 'success') {
icon = 'icon-check-circle';
}
return getTemplate().then(function(template) {
thisScope = $rootScope.$new();
thisScope.type = type;
thisScope.message = message;
thisScope.icon = icon;
thisElement = $compile(template)(thisScope);
return angular.element(thisElement[0]);
});
}
function displayNotification(element, container) {
var container = $document.find(container || 'body'),
id = 'elm' + Date.now(),
pos;
container.append(element);
pos = options.top + openNotifications.length * getElementHeight(element);
positionElement(element, pos);
element.addClass('visible');
element.attr('id', id);
element.find('button').bind('click', function(e) {
hideElement(element);
});
openNotifications.push(element);
if (options.duration > 0)
timeouts[id] = $timeout(function () {
hideNext();
}, options.duration);
}
function hide(element) {
$timeout.cancel(timeouts[element.attr('id')]);
element.removeClass('visible');
element.addClass('hidden');
element.find('button').eq(0).unbind();
element.scope().$destroy();
element.remove();
repositionAll();
}
function hideElement(element) {
var index = openNotifications.indexOf(element);
openNotifications.splice(index, 1);
hide(element);
}
function hideNext() {
var element = openNotifications.shift();
if (element)
hide(element);
}
function getElementHeight(element) {
return element[0].offsetHeight + options.gap;
}
function positionElement(element, pos) {
element[0].style.top = pos + 'px';
}
function repositionAll() {
var pos = options.top;
openNotifications.forEach(function(element) {
positionElement(element, pos);
pos += getElementHeight(element);
});
}
function checkAndSetDestroyDuration(element, duration){
if (duration){
timeouts[element.attr('id')] = $timeout(function(){
hideElement(element);
}, duration);
}
}
});
;
;
/*! RESOURCE: /scripts/sn/common/presence/js_includes_presence.js */
/*! RESOURCE: /scripts/js_includes_ng_amb.js */
/*! RESOURCE: /scripts/js_includes_amb.js */
;
/*! RESOURCE: /scripts/app.ng.amb/app.ng.amb.js */
angular.module("ng.amb", ['sn.common.presence', 'sn.common.util'])
.value("ambLogLevel", 'info')
.value("ambServletURI", '/amb')
.value("cometd", angular.element.cometd)
.value("ambLoginWindow", 'true');
;
/*! RESOURCE: /scripts/app.ng.amb/service.AMB.js */
angular.module("ng.amb").service("amb", function (AMBOverlay, $window, $q, $log, $rootScope, $timeout) {
"use strict";
var ambClient = null;
var _window = $window.self;
var loginWindow = null;
var sameScope = false;
ambClient = amb.getClient();
if (_window.g_ambClient) {
sameScope = true;
}
if (sameScope) {
var serverConnection = ambClient.getServerConnection();
serverConnection.loginShow = function() {
if (!serverConnection.isLoginWindowEnabled())
return;
if (loginWindow && loginWindow.isVisible())
return;
if (serverConnection.isLoginWindowOverride())
return;
loginWindow = new AMBOverlay();
loginWindow.render();
loginWindow.show();
};
serverConnection.loginHide = function() {
if (!loginWindow)
return;
loginWindow.hide();
loginWindow.destroy();
loginWindow = null;
}
}
var AUTO_CONNECT_TIMEOUT = 20 * 1000;
var connected = $q.defer();
var connectionInterrupted = false;
var monitorAMB = false;
$timeout(startMonitoringAMB, AUTO_CONNECT_TIMEOUT);
connected.promise.then(startMonitoringAMB);
function startMonitoringAMB() {
monitorAMB = true;
}
function ambInterrupted() {
var state = ambClient.getState();
return monitorAMB && state !== "opened" && state !== "initialized"
}
var interruptionTimeout;
var extendedInterruption = false;
function setInterrupted(eventName) {
connectionInterrupted = true;
$rootScope.$broadcast(eventName);
if (!interruptionTimeout) {
interruptionTimeout = $timeout(function () {
extendedInterruption = true;
}, 30 * 1000)
}
connected = $q.defer();
}
var connectOpenedEventId = ambClient.subscribeToEvent("connection.opened", function () {
$rootScope.$broadcast("amb.connection.opened");
if (interruptionTimeout) {
$timeout.cancel(interruptionTimeout);
interruptionTimeout = null;
}
extendedInterruption = false;
if(connectionInterrupted) {
connectionInterrupted = false;
$rootScope.$broadcast("amb.connection.recovered");
}
connected.resolve();
});
var connectClosedEventId = ambClient.subscribeToEvent("connection.closed", function () {
setInterrupted("amb.connection.closed");
});
var connectBrokenEventId = ambClient.subscribeToEvent("connection.broken", function () {
setInterrupted("amb.connection.broken");
});
var onUnloadWindow = function() {
ambClient.unsubscribeFromEvent(connectOpenedEventId);
ambClient.unsubscribeFromEvent(connectClosedEventId);
ambClient.unsubscribeFromEvent(connectBrokenEventId);
angular.element($window).off('unload', onUnloadWindow);
};
angular.element($window).on('unload', onUnloadWindow);
var documentReadyState = $window.document ? $window.document.readyState : null;
if(documentReadyState === 'complete') {
autoConnect();
} else {
angular.element($window).on('load', autoConnect);
}
$timeout(autoConnect, 10000);
var initiatedConnection = false;
function autoConnect() {
if (!initiatedConnection) {
initiatedConnection = true;
ambClient.connect();
}
}
return {
getServerConnection: function() {
return ambClient.getServerConnection();
},
connect: function() {
if (initiatedConnection) {
ambClient.connect();
}
return connected.promise;
},
get interrupted() {
return ambInterrupted();
},
get extendedInterruption() {
return extendedInterruption;
},
get connected() {
return connected.promise;
},
abort: function() {
ambClient.abort();
},
disconnect: function() {
ambClient.disconnect();
},
getConnectionState: function () {
return ambClient.getConnectionState();
},
getClientId: function () {
return ambClient.getClientId();
},
getChannel: function(channelName) {
return ambClient.getChannel(channelName);
},
registerExtension: function(extensionName, extension) {
ambClient.registerExtension(extensionName, extension);
},
unregisterExtension: function(extensionName) {
ambClient.unregisterExtension(extensionName);
},
batch: function(batch) {
ambClient.batch(batch);
},
getState: function() {
return ambClient.getState();
},
getFilterString: function(filter) {
filter = filter.
replace(/\^EQ/g, '').
replace(/\^ORDERBY(?:DESC)?[^^]*/g, '').
replace(/^GOTO/, '');
return btoa(filter).replace(/=/g, '-');
},
getChannelRW: function(table, filter) {
var t = '/rw/default/' + table + '/' + this.getFilterString(filter);
return this.getChannel(t);
},
isLoggedIn: function() {
return ambClient.isLoggedIn();
},
subscribeToEvent: function(event, callback) {
return ambClient.subscribeToEvent(event, callback);
},
getConnectionEvents: function() {
return ambClient.getConnectionEvents();
},
getEvents: function() {
return ambClient.getConnectionEvents();
},
loginComplete: function() {
ambClient.loginComplete();
}
};
});
;
/*! RESOURCE: /scripts/app.ng.amb/controller.AMBRecordWatcher.js */
angular.module("ng.amb").controller("AMBRecordWatcher", function($scope, $timeout, $window) {
"use strict";
var amb = $window.top.g_ambClient;
$scope.messages = [];
var lastFilter;
var watcherChannel;
var watcher;
function onMessage(message) {
$scope.messages.push(message.data);
}
$scope.getState = function() {
return amb.getState();
};
$scope.initWatcher = function() {
angular.element(":focus").blur();
if(!$scope.filter || $scope.filter === lastFilter)
return;
lastFilter = $scope.filter;
console.log("initiating watcher on " + $scope.filter);
$scope.messages = [];
if(watcher) {
watcher.unsubscribe();
}
var base64EncodeQuery = btoa($scope.filter).replace(/=/g, '-');
var channelId = '/rw/' + base64EncodeQuery;
watcherChannel = amb.getChannel(channelId)
watcher = watcherChannel.subscribe(onMessage);
};
amb.connect();
})
;
/*! RESOURCE: /scripts/app.ng.amb/factory.snRecordWatcher.js */
angular.module("ng.amb").factory('snRecordWatcher', function($rootScope, amb, $timeout, snPresence, $log, urlTools) {
"use strict";
var watcherChannel;
var connected = false;
var diagnosticLog = true;
function initWatcher(table, sys_id, query) {
if (!table)
return;
if (sys_id)
var filter = "sys_id=" + sys_id;
else
filter = query;
if (!filter)
return;
return initChannel(table, filter);
}
function initList(table, query) {
if (!table)
return;
query = query || "sys_idISNOTEMPTY";
return initChannel(table, query);
}
function initTaskList(list, prevChannel) {
if (prevChannel)
prevChannel.unsubscribe();
var sys_ids = list.toString();
var filter = "sys_idIN" + sys_ids;
return initChannel("task", filter);
}
function initChannel(table, filter) {
if (isBlockedTable(table)) {
$log.log("Blocked from watching", table);
return null;
}
if (diagnosticLog)
log(">>> init " + table + "?" + filter);
watcherChannel = amb.getChannelRW(table, filter);
watcherChannel.subscribe(onMessage);
amb.connect();
return watcherChannel;
}
function onMessage(message) {
var r = message.data;
var c = message.channel;
if (diagnosticLog)
log(">>> record " + r.operation + ": " + r.table_name + "." + r.sys_id + " " + r.display_value);
$rootScope.$broadcast('record.updated', r);
$rootScope.$broadcast("sn.stream.tap");
$rootScope.$broadcast('list.updated', r, c);
}
function log(message) {
$log.log(message);
}
function isBlockedTable(table) {
return table == 'sys_amb_message' || table.startsWith('sys_rw');
}
return {
initTaskList: initTaskList,
initChannel: initChannel,
init: function () {
var location = urlTools.parseQueryString(window.location.search);
var table = location['table'] || location['sysparm_table'];
var sys_id = location['sys_id'] || location['sysparm_sys_id'];
var query = location['sysparm_query'];
initWatcher(table, sys_id, query);
snPresence.init(table, sys_id, query);
},
initList:  initList,
initRecord: function(table, sysId) {
initWatcher(table, sysId, null);
snPresence.initPresence(table, sysId);
},
_initWatcher: initWatcher
}
});
;
/*! RESOURCE: /scripts/app.ng.amb/factory.AMBOverlay.js */
angular.module("ng.amb").factory("AMBOverlay", function($templateCache, $compile, $rootScope) {
"use strict";
var showCallbacks = [],
hideCallbacks = [],
isRendered = false,
modal,
modalScope,
modalOptions;
var defaults = {
backdrop: 'static',
keyboard: false,
show: true
};
function AMBOverlay(config) {
config = config || {};
if(angular.isFunction(config.onShow))
showCallbacks.push(config.onShow);
if(angular.isFunction(config.onHide))
hideCallbacks.push(config.onHide);
function lazyRender() {
if(!angular.element('html')['modal']) {
var bootstrapInclude = "/scripts/bootstrap3/bootstrap.js";
ScriptLoader.getScripts([bootstrapInclude], renderModal);
} else
renderModal();
}
function renderModal() {
if(isRendered)
return;
modalScope = angular.extend($rootScope.$new(), config);
modal = $compile($templateCache.get("amb_disconnect_modal.xml"))(modalScope);
angular.element("body").append(modal);
modal.on("shown.bs.modal", function(e) {
for(var i = 0, len = showCallbacks.length; i < len; i++)
showCallbacks[i](e);
});
modal.on("hidden.bs.modal", function(e) {
for(var i = 0, len = hideCallbacks.length; i < len; i++)
hideCallbacks[i](e);
});
modalOptions = angular.extend({}, defaults, config);
modal.modal(modalOptions);
isRendered = true;
}
function showModal() {
if(isRendered)
modal.modal('show');
}
function hideModal() {
if(isRendered)
modal.modal('hide');
}
function destroyModal() {
if(!isRendered)
return;
modal.modal('hide');
modal.remove();
modalScope.$destroy();
modalScope = void(0);
isRendered = false;
var pos = showCallbacks.indexOf(config.onShow);
if(pos >= 0)
showCallbacks.splice(pos, 1);
pos = hideCallbacks.indexOf(config.onShow);
if(pos >= 0)
hideCallbacks.splice(pos, 1);
}
return {
render: lazyRender,
destroy: destroyModal,
show: showModal,
hide: hideModal,
isVisible: function() {
if(!isRendered)
false;
return modal.visible();
}
}
}
$templateCache.put('amb_disconnect_modal.xml',
'<div id="amb_disconnect_modal" tabindex="-1" aria-hidden="true" class="modal" role="dialog">' +
'	<div class="modal-dialog small-modal" style="width:450px">' +
'		<div class="modal-content">' +
'			<header class="modal-header">' +
'				<h4 id="small_modal1_title" class="modal-title">{{title || "Login"}}</h4>' +
'			</header>' +
'			<div class="modal-body">' +
'			<iframe class="concourse_modal" ng-src=\'{{iframe || "/amb_login.do"}}\' frameborder="0" scrolling="no" height="400px" width="405px"></iframe>' +
'			</div>' +
'		</div>' +
'	</div>' +
'</div>'
);
return AMBOverlay;
});
;
;
/*! RESOURCE: /scripts/sn/common/presence/snPresenceLite.js */
(function(exports, $) {
'use strict';
var PRESENCE_DISABLED = "false" === "true";
if (PRESENCE_DISABLED) {
return;
}
if (typeof $.Deferred === "undefined") {
return;
}
var USER_KEY = '{{SYSID}}';
var REPLACE_REGEX = new RegExp(USER_KEY, 'g');
var COLOR_ONLINE = '#71e279';
var COLOR_AWAY = '#fc8a3d';
var COLOR_OFFLINE = 'transparent';
var BASE_STYLES = [
'.sn-presence-lite { display: inline-block; width: 1rem; height: 1rem; border-radius: 50%; }'
];
var USER_STYLES = [
'.sn-presence-'+ USER_KEY +'-online [data-presence-id="'+ USER_KEY +'"] { background-color: '+ COLOR_ONLINE +'; }',
'.sn-presence-'+ USER_KEY +'-away [data-presence-id="'+ USER_KEY +'"] { background-color: '+ COLOR_AWAY +'; }',
'.sn-presence-'+ USER_KEY +'-offline [data-presence-id="'+ USER_KEY +'"] { background-color: '+ COLOR_OFFLINE +'; }'
];
var $head = $('head');
var stylesheet = $.Deferred();
var registeredUsers = {};
var registeredUsersLength = 0;
$(function() {
updateRegisteredUsers();
});
$head.ready(function() {
var styleElement = document.createElement('style');
$head.append(styleElement);
var $styleElement = $(styleElement);
stylesheet.resolve($styleElement);
});
function updateStyles(styles) {
stylesheet.done(function($styleElement) {
$styleElement.empty();
BASE_STYLES.forEach(function(baseStyle) {
$styleElement.append(baseStyle);
});
$styleElement.append(styles);
});
}
function getUserStyles(sysId) {
var newStyles = '';
for (var i = 0, iM = USER_STYLES.length; i < iM; i++) {
newStyles += USER_STYLES[i].replace(REPLACE_REGEX, sysId);
}
return newStyles;
}
function updateUserStyles() {
var userKeys = Object.keys(registeredUsers);
var userStyles = "";
userKeys.forEach(function(userKey) {
userStyles += getUserStyles(userKey);
});
updateStyles(userStyles);
}
exports.applyPresenceArray = applyPresenceArray;
function applyPresenceArray(presenceArray) {
if (!presenceArray || !presenceArray.length) {
return;
}
var users = presenceArray.filter(function(presence) {
return typeof registeredUsers[presence.user] !== "undefined";
});
updateUserPresenceStatus(users);
}
function updateUserPresenceStatus(users) {
var presenceStatus = getBaseCSSClasses();
for (var i = 0, iM = users.length; i < iM; i++) {
var presence = users[i];
var status = getNormalizedStatus(presence.status);
if (status === 'offline') {
continue;
}
presenceStatus.push('sn-presence-' + presence.user + '-' + status);
}
setCSSClasses(presenceStatus.join(' '));
}
function getNormalizedStatus(status) {
switch (status) {
case 'probably offline':
case 'maybe offline':
return 'away';
default:
return 'offline';
case 'online':
case 'offline':
return status;
}
}
function updateRegisteredUsers() {
var presenceIndicators = document.querySelectorAll('[data-presence-id]');
var obj = {};
for (var i = 0, iM = presenceIndicators.length; i < iM; i++) {
var uid = presenceIndicators[i].getAttribute('data-presence-id');
obj[uid] = true;
}
if (Object.keys(obj).length === registeredUsersLength){
return;
}
registeredUsers = obj;
registeredUsersLength = Object.keys(registeredUsers).length;
updateUserStyles();
}
function setCSSClasses(classes) {
$('html')[0].className = classes;
}
function getBaseCSSClasses() {
return $('html')[0].className.split(' ').filter(function(item){
return item.indexOf('sn-presence-') !== 0;
});
}
})(window, window.jQuery || window.Zepto);
;
/*! RESOURCE: /scripts/sn/common/presence/_module.js */
angular.module('sn.common.presence', ['ng.amb', 'sn.common.glide']).config(function($provide) {
"use strict";
$provide.constant("PRESENCE_DISABLED", "false" === "true");
});
;
/*! RESOURCE: /scripts/sn/common/presence/factory.snPresence.js */
angular.module("sn.common.presence").factory('snPresence', function($rootScope, $window, $log, amb, $timeout, $http, snRecordPresence, snTabActivity, urlTools, PRESENCE_DISABLED) {
"use strict";
var REST = {
PRESENCE: "/api/now/ui/presence"
};
var RETRY_INTERVAL = ($window.NOW.presence_interval || 15) * 1000;
var MAX_RETRY_DELAY = RETRY_INTERVAL * 10;
var initialized = false;
var primary = false;
var presenceArray = [];
var serverTimeMillis;
var skew = 0;
var st = 0;
function init() {
var location = urlTools.parseQueryString($window.location.search);
var table = location['table'] || location['sysparm_table'];
var sys_id = location['sys_id'] || location['sysparm_sys_id'];
return initPresence(table, sys_id);
}
function initPresence(t, id) {
if(PRESENCE_DISABLED)
return;
if (!initialized) {
initialized = true;
initRootScopes();
if (!primary) {
CustomEvent.observe('sn.presence', onPresenceEvent);
CustomEvent.fireTop('sn.presence.ping');
} else {
presenceArray = getLocalPresence($window.localStorage.getItem('snPresence'));
if (presenceArray)
$timeout(schedulePresence, 100);
else
updatePresence();
}
}
return snRecordPresence.initPresence(t, id);
}
function onPresenceEvent(parms) {
presenceArray = parms;
$timeout(broadcastPresence);
}
function initRootScopes() {
if ($window.NOW.presence_scopes) {
var ps = $window.NOW.presence_scopes;
if (ps.indexOf($rootScope) == -1)
ps.push($rootScope);
} else {
$window.NOW.presence_scopes = [$rootScope];
primary = CustomEvent.isTopWindow();
}
}
function setPresence(data, st) {
var rt = new Date().getTime() - st;
if (rt > 500)
console.log("snPresence response time " + rt + "ms");
if (data.result && data.result.presenceArray) {
presenceArray = data.result.presenceArray;
setLocalPresence(presenceArray);
serverTimeMillis = data.result.serverTimeMillis;
skew = new Date().getTime() - serverTimeMillis;
var t  = Math.floor(skew / 1000);
if (t < -15 )
console.log(">>>>> server ahead " + Math.abs(t) + " seconds");
else if (t > 15)
console.log(">>>>> browser time ahead " + t + " seconds");
}
schedulePresence();
}
function updatePresence(numAttempts) {
presenceArray = getLocalPresence($window.localStorage.getItem('snPresence'));
if (presenceArray) {
determineStatus(presenceArray);
$timeout(schedulePresence);
return;
}
if (!amb.isLoggedIn() || !snTabActivity.isPrimary) {
$timeout(schedulePresence);
return;
}
var p = {
user_agent: navigator.userAgent,
ua_time: new Date().toISOString(),
href: window.location.href,
pathname: window.location.pathname,
search: window.location.search,
path: window.location.pathname + window.location.search
};
st = new Date().getTime();
$http.post(REST.PRESENCE + '?sysparm_auto_request=true&cd=' + st, p).success(function(data) {
setPresence(data, st);
}).error(function(response, status) {
console.log("snPresence " + status);
schedulePresence(numAttempts);
})
}
function schedulePresence(numAttempts) {
numAttempts = isFinite(numAttempts) ? numAttempts + 1 : 0;
var interval = getDecayingRetryInterval(numAttempts);
$timeout(function() {
updatePresence(numAttempts)
}, interval);
determineStatus(presenceArray);
broadcastPresence();
}
function broadcastPresence() {
if (angular.isDefined($window.applyPresenceArray)) {
$window.applyPresenceArray(presenceArray);
}
$rootScope.$emit("sn.presence", presenceArray);
if (!primary)
return;
CustomEvent.fireAll('sn.presence', presenceArray);
}
function determineStatus(presenceArray) {
if (!presenceArray || !presenceArray.forEach)
return;
var t = new Date().getTime();
t -= skew;
presenceArray.forEach(function (p) {
var x = 0 + p.last_on;
var y = t - x;
p.status = "online";
if (y > (5 * RETRY_INTERVAL))
p.status = "offline";
else if (y > (3 * RETRY_INTERVAL))
p.status = "probably offline";
else if (y > (2.5 * RETRY_INTERVAL))
p.status = "maybe offline";
})
}
function setLocalPresence(value) {
var p = {
saved: new $window.Date().getTime(),
presenceArray: value
};
$window.localStorage.setItem('snPresence', angular.toJson(p));
}
function getLocalPresence(p) {
if (!p)
return null;
try {
p = angular.fromJson(p);
} catch (e) {
p = {};
}
if (!p.presenceArray)
return null;
var now = new Date().getTime();
if (now - p.saved >= RETRY_INTERVAL)
return null;
return p.presenceArray;
}
function getDecayingRetryInterval(numAttempts) {
return Math.min(RETRY_INTERVAL * Math.pow(2, numAttempts), MAX_RETRY_DELAY);
}
return {
init: init,
initPresence: initPresence,
_getLocalPresence: getLocalPresence,
_setLocalPresence: setLocalPresence,
_determineStatus: determineStatus
}
});
;
/*! RESOURCE: /scripts/sn/common/presence/factory.snRecordPresence.js */
angular.module("sn.common.presence").factory('snRecordPresence', function($rootScope, $location, amb, $timeout, $window, PRESENCE_DISABLED, snTabActivity) {
"use strict";
var statChannel;
var interval = ($window.NOW.record_presence_interval || 20) * 1000;
var sessions = {};
var primary = false;
var table;
var sys_id;
function initPresence(t, id) {
if(PRESENCE_DISABLED)
return;
if (!t || !id)
return;
if (t == table && id == sys_id)
return;
initRootScopes();
if (!primary)
return;
termPresence();
table = t;
sys_id = id;
var recordPresence = "/sn/rp/" + table + "/" + sys_id;
$rootScope.me = NOW.session_id;
statChannel = amb.getChannel(recordPresence);
statChannel.subscribe(onStatus);
amb.connected.then(function() {
setStatus("entered");
$rootScope.status = "viewing";
});
return statChannel;
}
function initRootScopes() {
if ($window.NOW.record_presence_scopes) {
var ps = $window.NOW.record_presence_scopes;
if (ps.indexOf($rootScope) == -1) {
ps.push($rootScope);
CustomEvent.observe('sn.sessions', onPresenceEvent);
}
} else {
$window.NOW.record_presence_scopes = [$rootScope];
primary = true;
}
}
function onPresenceEvent(sessionsToSend) {
$rootScope.$emit("sn.sessions", sessionsToSend);
$rootScope.$emit("sp.sessions", sessionsToSend);
}
function termPresence() {
if (!statChannel)
return;
statChannel.unsubscribe();
statChannel = table = sys_id = null;
}
function setStatus(status) {
if (status == $rootScope.status)
return;
$rootScope.status = status;
if (Object.keys(sessions).length == 0)
return;
if (getStatusPrecedence(status) > 1)
return;
publish($rootScope.status);
}
function publish(status) {
if (!statChannel)
return;
if (amb.getState() !== "opened")
return;
statChannel.publish({ presences: [{
status : status,
session_id : NOW.session_id,
user_name : NOW.user_name,
user_id: NOW.user_id,
user_display_name : NOW.user_display_name,
user_initials : NOW.user_initials,
user_avatar: NOW.user_avatar,
ua : navigator.userAgent,
table: table,
sys_id: sys_id,
time: new Date().toString().substring(0,24)
}]});
}
function onStatus(message) {
message.data.presences.forEach(function(d){
if (!d.session_id || d.session_id == NOW.session_id)
return;
var s = sessions[d.session_id];
if (s)
angular.extend(s, d);
else
s = sessions[d.session_id] = d;
s.lastUpdated = new Date();
if (s.status == 'exited')
delete sessions[d.session_id];
});
broadcastSessions();
}
function broadcastSessions() {
var sessionsToSend = getUniqueSessions();
$rootScope.$emit("sn.sessions", sessionsToSend);
$rootScope.$emit("sp.sessions", sessionsToSend);
if (primary)
$timeout(function() {CustomEvent.fire('sn.sessions', sessionsToSend);})
}
function getUniqueSessions() {
var uniqueSessionsByUser = {};
var sessionKeys = Object.keys(sessions);
sessionKeys.forEach(function(key) {
var session = sessions[key];
if (session.user_id == NOW.user_id)
return;
if (session.user_id in uniqueSessionsByUser) {
var otherSession = uniqueSessionsByUser[session.user_id];
var thisPrecedence = getStatusPrecedence(session.status);
var otherPrecedence = getStatusPrecedence(otherSession.status);
uniqueSessionsByUser[session.user_id] = thisPrecedence < otherPrecedence ? session : otherSession;
return
}
uniqueSessionsByUser[session.user_id] = session;
});
var uniqueSessions = {};
angular.forEach(uniqueSessionsByUser, function(item) {
uniqueSessions[item.session_id] = item;
});
return uniqueSessions;
}
function getStatusPrecedence(status) {
switch (status) {
case 'typing':
return 0;
case 'viewing':
return 1;
case 'entered':
return 2;
case 'exited':
case 'probably left':
return 4;
case 'offline':
return 5;
default:
return 3;
}
}
$rootScope.$on("record.typing", function(evt, data) {
setStatus(data.status);
});
var idleTable, idleSysID;
snTabActivity.onIdle({
onIdle: function RecordPresenceTabIdle() {
idleTable = table;
idleSysID = sys_id;
sessions = {};
termPresence();
broadcastSessions();
},
onReturn: function RecordPresenceTabActive() {
initPresence(idleTable, idleSysID, true);
idleTable = idleSysID = void(0);
},
delay: interval * 4
});
return {
initPresence: initPresence,
termPresence: termPresence
}
});
;
/*! RESOURCE: /scripts/sn/common/presence/directive.snPresence.js */
angular.module('sn.common.presence').directive('snPresence', function(snPresence, $rootScope, $timeout, i18n) {
'use strict';
$timeout(snPresence.init, 100);
var presenceStatus = {};
i18n.getMessages(['maybe offline', 'probably offline', 'offline', 'online', 'entered', 'viewing'], function (results) {
presenceStatus.maybe_offline = results['maybe offline'];
presenceStatus.probably_offline = results['probably offline'];
presenceStatus.offline = results['offline'];
presenceStatus.online = results['online'];
presenceStatus.entered = results['entered'];
presenceStatus.viewing = results['viewing'];
});
var presences = {};
$rootScope.$on('sn.presence', function (event, presenceArray) {
if (!presenceArray) {
angular.forEach(presences, function (p) {
p.status = "offline";
});
return;
}
presenceArray.forEach(function (presence) {
presences[presence.user] = presence;
});
});
return {
restrict: 'EA',
replace: false,
scope: {
userId: '@?',
snPresence: '=?',
user: '=?',
profile: '=?',
displayName: '=?'
},
link: function (scope, element) {
if (scope.profile) {
scope.user = scope.profile.userID;
scope.profile.tabIndex = -1;
if (scope.profile.isAccessible)
scope.profile.tabIndex = 0;
}
if (!element.hasClass('presence'))
element.addClass('presence');
function updatePresence () {
var id = scope.snPresence || scope.user;
if (!angular.isDefined(id) && angular.isDefined(scope.userId)) {
id = scope.userId;
}
if (presences[id]) {
var status = presences[id].status;
if (status === 'maybe offline' || status === 'probably offline') {
element.removeClass('presence-online presence-offline presence-away');
element.addClass('presence-away');
} else if (status == "offline" && !element.hasClass('presence-offline')) {
element.removeClass('presence-online presence-away');
element.addClass('presence-offline');
} else if ( (status == "online" || status == "entered" || status == "viewing") && !element.hasClass('presence-online')) {
element.removeClass('presence-offline presence-away');
element.addClass('presence-online');
}
status = status.replace(/ /g,"_");
if (scope.profile)
angular.element('div[user-avatar-id="' + id + '"]').attr("aria-label", scope.profile.userName + ' ' + presenceStatus[status]);
else
angular.element('div[user-avatar-id="' + id + '"]').attr("aria-label", scope.displayName + ' ' + presenceStatus[status]);
} else {
if (!element.hasClass('presence-offline'))
element.addClass('presence-offline');
}
}
var unbind = $rootScope.$on('sn.presence', updatePresence);
scope.$on('$destroy', unbind);
updatePresence();
}
};
});
;
/*! RESOURCE: /scripts/sn/common/presence/directive.snComposing.js */
angular.module('sn.common.presence').directive('snComposing', function(getTemplateUrl, snComposingPresence) {
"use strict";
return {
restrict: 'E',
templateUrl: getTemplateUrl("snComposing.xml"),
replace: true,
scope: {
conversation: "="
},
controller: function($scope, $element) {
var child = $element.children();
if (child && child.tooltip)
child.tooltip({
'template':	'<div class="tooltip" style="white-space: pre-wrap" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
'placement': 'top',
'container': 'body'
});
$scope.snComposingPresence = snComposingPresence;
}
}
});
;
/*! RESOURCE: /scripts/sn/common/presence/service.snComposingPresence.js */
angular.module('sn.common.presence').service('snComposingPresence', function(i18n) {
"use strict";
var viewing = {};
var typing = {};
var allStrings = {};
var shortStrings = {};
var typing1="{0} is typing", typing2="{0} and {1} are typing", typingMore="{0}, {1}, and {2} more are typing", viewing1="{0} is viewing",viewing2="{0} and {1} are viewing",viewingMore="{0}, {1}, and {2} more are viewing";
i18n.getMessages(
[
typing1,
typing2,
typingMore,
viewing1,
viewing2,
viewingMore
],
function (results) {
typing1=results[typing1];
typing2=results[typing2];
typingMore=results[typingMore];
viewing1=results[viewing1];
viewing2=results[viewing2];
viewingMore=results[viewingMore];
});
function set(conversationID, newPresenceValues) {
if (newPresenceValues.viewing)
viewing[conversationID] = newPresenceValues.viewing;
if (newPresenceValues.typing)
typing[conversationID] = newPresenceValues.typing;
generateAllString(conversationID, {viewing: viewing[conversationID],typing: typing[conversationID]});
generateShortString(conversationID, {viewing: viewing[conversationID],typing: typing[conversationID]});
return {
viewing: viewing[conversationID],
typing: typing[conversationID]
}
}
function get(conversationID) {
return {
viewing: viewing[conversationID] || [],
typing: typing[conversationID] || []
}
}
function generateAllString(conversationID, members) {
var result = "";
var typingLength = members.typing.length;
var viewingLength = members.viewing.length;
if (typingLength < 4 && viewingLength < 4)
return "";
switch (typingLength) {
case 0:
break;
case 1:
result += i18n.format(typing1, members.typing[0].name); break;
case 2:
result += i18n.format(typing2, members.typing[0].name, members.typing[1].name); break;
default:
var allButLastTyper = "";
for (var i = 0; i < typingLength; i++) {
if (i < typingLength -2)
allButLastTyper += members.typing[i].name + ", ";
else if (i === typingLength-2)
allButLastTyper += members.typing[i].name + ",";
else
result += i18n.format(typing2, allButLastTyper, members.typing[i].name);
}
}
if (viewingLength > 0 && typingLength > 0)
result += "\n\n";
switch (viewingLength) {
case 0:
break;
case 1:
result += i18n.format(viewing1, members.viewing[0].name); break;
case 2:
result += i18n.format(viewing2, members.viewing[0].name, members.viewing[1].name); break;
default:
var allButLastViewer = "";
for (var i = 0; i < viewingLength; i++) {
if (i < viewingLength -2)
allButLastViewer += members.viewing[i].name + ", ";
else if (i === viewingLength - 2)
allButLastViewer += members.viewing[i].name + ",";
else
result += i18n.format(viewing2, allButLastViewer, members.viewing[i].name);
}
}
allStrings[conversationID] = result;
}
function generateShortString(conversationID, members) {
var typingLength = members.typing.length;
var viewingLength = members.viewing.length;
var typingString = "", viewingString = "";
var inBetween = " ";
switch (typingLength ) {
case 0:
break;
case 1:
typingString = i18n.format(typing1, members.typing[0].name); break;
case 2:
typingString = i18n.format(typing2, members.typing[0].name, members.typing[1].name); break;
case 3:
typingString = i18n.format(typing2, members.typing[0].name + ", " + members.typing[1].name + ",",members.typing[2].name); break;
default:
typingString = i18n.format(typingMore, members.typing[0].name, members.typing[1].name, (typingLength - 2));
}
if (viewingLength > 0 && typingLength > 0)
inBetween = ". ";
switch (viewingLength) {
case 0:
break;
case 1:
viewingString = i18n.format(viewing1,  members.viewing[0].name); break;
case 2:
viewingString = i18n.format(viewing2, members.viewing[0].name, members.viewing[1].name); break;
case 3:
viewingString = i18n.format(viewing2, members.viewing[0].name + ", " + members.viewing[1].name + ",", members.viewing[2].name); break;
default:
viewingString = i18n.format(viewingMore, members.viewing[0].name, members.viewing[1].name, (viewingLength - 2));
}
shortStrings[conversationID] = typingString + inBetween + viewingString;
}
function getAllString(conversationID) {
if ((viewing[conversationID] && viewing[conversationID].length > 3)
|| (typing[conversationID] && typing[conversationID].length > 3))
return allStrings[conversationID];
return "";
}
function getShortString(conversationID) {
return shortStrings[conversationID];
}
function remove(conversationID) {
delete viewing[conversationID];
}
return {
set: set,
get: get,
generateAllString: generateAllString,
getAllString: getAllString,
generateShortString: generateShortString,
getShortString: getShortString,
remove: remove
}
});
;
;
/*! RESOURCE: /scripts/sn/common/user_profile/js_includes_user_profile.js */
/*! RESOURCE: /scripts/sn/common/user_profile/_module.js */
angular.module("sn.common.user_profile", ['sn.common.ui']);
;
/*! RESOURCE: /scripts/sn/common/user_profile/directive.snUserProfile.js */
angular.module('sn.common.user_profile').directive('snUserProfile', function(getTemplateUrl, snCustomEvent, $window, avatarProfilePersister, $timeout, $http) {
"use strict";
return {
replace: true,
restrict: 'E',
templateUrl: getTemplateUrl('snUserProfile.xml'),
scope: {
profile: "=",
showDirectMessagePrompt: "="
},
link: function(scope, element) {
scope.showDirectMessagePromptFn = function() {
if (scope.showDirectMessagePrompt) {
var activeUserID = $window.NOW.user_id || "";
return !(!scope.profile
|| activeUserID === scope.profile.sysID
|| (scope.profile.document && activeUserID === scope.profile.document));
} else {
return false;
}
};
$timeout(function() {
element.find("#direct-message-popover-trigger").on("click", scope.openDirectMessageConversation);
}, 0, false);
},
controller: function($scope, snConnectService) {
if ($scope.profile && $scope.profile.userID && avatarProfilePersister.getAvatar($scope.profile.userID)) {
$scope.profile = avatarProfilePersister.getAvatar($scope.profile.userID);
$scope.$emit("sn-user-profile.ready");
} else {
$http.get('/api/now/live/profiles/sys_user.' + $scope.profile.userID).then(function (response) {
angular.merge($scope.profile, response.data.result);
avatarProfilePersister.setAvatar($scope.profile.userID, $scope.profile);
$scope.$emit("sn-user-profile.ready");
})
}
$scope.openDirectMessageConversation = function(evt) {
if (evt && evt.keyCode === 9)
return;
$timeout(function () {
snConnectService.openWithProfile($scope.profile);
}, 0, false);
angular.element('.popover').each(function() {
angular.element('body').off('click.snUserAvatarPopoverClose');
angular.element(this).popover('hide');
});
};
}
}
});
;
;
/*! RESOURCE: /scripts/sn/common/util/js_includes_util.js */
/*! RESOURCE: /scripts/thirdparty/autosizer/autosizer.min.js */
/*!
 Autosize 4.0.0
 license: MIT
 http://www.jacklmoore.com/autosize
 */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(i!==t?"hidden"===o.overflowY&&(n("scroll"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(n("hidden"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,c=function(){e.clientWidth!==u&&l()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:p,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});
/*! RESOURCE: /scripts/sn/common/util/_module.js */
angular.module('sn.common.util', ['sn.common.auth']);
angular.module('sn.util', ['sn.common.util']);
;
/*! RESOURCE: /scripts/sn/common/util/service.dateUtils.js */
angular.module('sn.common.util').factory('dateUtils', function(){
var dateUtils = {
SYS_DATE_FORMAT: "yyyy-MM-dd",
SYS_TIME_FORMAT: "HH:mm:ss",
SYS_DATE_TIME_FORMAT: "yyyy-MM-dd HH:mm:ss",
MONTH_NAMES: new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'),
DAY_NAMES: new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat'),
LZ: function (x) {return(x<0||x>9?"":"0")+x},
isDate: function (val,format) {
var date=this.getDateFromFormat(val,format);
if (date==0) { return false; }
return true;
},
compareDates: function (date1,dateformat1,date2,dateformat2) {
var d1=this.getDateFromFormat(date1,dateformat1);
var d2=this.getDateFromFormat(date2,dateformat2);
if (d1==0 || d2==0) {
return -1;
}
else if (d1 > d2) {
return 1;
}
return 0;
},
formatDateServer: function(date, format) {
var ga = new GlideAjax("DateTimeUtils");
ga.addParam("sysparm_name", "formatCalendarDate");
var browserOffset = date.getTimezoneOffset() * 60000;
var utcTime = date.getTime() - browserOffset;
var userDateTime = utcTime - g_tz_offset;
ga.addParam("sysparm_value", userDateTime);
ga.getXMLWait();
return ga.getAnswer();
},
formatDate: function(date,format) {
if (format.indexOf("z") > 0)
return this.formatDateServer(date, format);
format=format+"";
var result="";
var i_format=0;
var c="";
var token="";
var y=date.getYear()+"";
var M=date.getMonth()+1;
var d=date.getDate();
var E=date.getDay();
var H=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
var value=new Object();
value["M"]=M;
value["MM"]=this.LZ(M);
value["MMM"]=this.MONTH_NAMES[M+11];
value["NNN"]=this.MONTH_NAMES[M+11];
value["MMMM"]=this.MONTH_NAMES[M-1];
value["d"]=d;
value["dd"]=this.LZ(d);
value["E"]=this.DAY_NAMES[E+7];
value["EE"]=this.DAY_NAMES[E];
value["H"]=H;
value["HH"]=this.LZ(H);
if (format.indexOf('w') != -1) {
var wk = date.getWeek();
if (wk >= 52 && M == 1) {
y = date.getYear();
y--;
y = y + "";
}
if (wk == 1 && M == 12) {
y = date.getYear();
y++;
y = y + "";
}
value["w"] = wk;
value["ww"] = this.LZ(wk);
}
var dayOfWeek = (7 + (E + 1) - (g_first_day_of_week - 1)) % 7;
if (dayOfWeek == 0)
dayOfWeek = 7;
value["D"] = dayOfWeek;
if (y.length < 4) {
y=""+(y-0+1900);
}
value["y"]=""+y;
value["yyyy"]=y;
value["yy"]=y.substring(2,4);
if (H==0) {
value["h"]=12;
} else if (H>12){
value["h"]=H-12;
} else {
value["h"]=H;
}
value["hh"]=this.LZ(value["h"]);
if (H>11) {
value["K"]=H-12;
} else {
value["K"]=H;
}
value["k"]=H+1;
value["KK"]=this.LZ(value["K"]);
value["kk"]=this.LZ(value["k"]);
if (H > 11) {
value["a"]="PM";
} else {
value["a"]="AM";
}
value["m"]=m;
value["mm"]=this.LZ(m);
value["s"]=s;
value["ss"]=this.LZ(s);
while (i_format < format.length) {
c=format.charAt(i_format);
token="";
while ((format.charAt(i_format)==c) && (i_format < format.length)) {
token += format.charAt(i_format++);
}
if (value[token] != null) { result=result + value[token]; }
else { result=result + token; }
}
return result;
},
_isInteger: function (val) {
var digits="1234567890";
for (var i=0; i < val.length; i++) {
if (digits.indexOf(val.charAt(i))==-1) { return false; }
}
return true;
},
_getInt: function (str,i,minlength,maxlength) {
for (var x=maxlength; x>=minlength; x--) {
var token=str.substring(i,i+x);
if (token.length < minlength) { return null; }
if (this._isInteger(token)) { return token; }
}
return null;
},
getDateFromFormat: function (val,format) {
val=val+"";
format=format+"";
var i_val=0;
var i_format=0;
var c="";
var token="";
var token2="";
var x,y;
var now=new Date();
var year=now.getYear();
var month=now.getMonth()+1;
var date=0;
var hh=now.getHours();
var mm=now.getMinutes();
var ss=now.getSeconds();
var ampm="";
var week = false;
while (i_format < format.length) {
c=format.charAt(i_format);
token="";
while ((format.charAt(i_format)==c) && (i_format < format.length)) {
token += format.charAt(i_format++);
}
if (token=="yyyy" || token=="yy" || token=="y") {
if (token=="yyyy") { x=4;y=4; }
if (token=="yy")   { x=2;y=2; }
if (token=="y")    { x=2;y=4; }
year=this._getInt(val,i_val,x,y);
if (year==null) { return 0; }
i_val += year.length;
if (year.length==2) {
if (year > 70) { year=1900+(year-0); }
else { year=2000+(year-0); }
}
}
else if (token=="MMM"||token=="NNN"){
month=0;
for (var i=0; i<this.MONTH_NAMES.length; i++) {
var month_name=this.MONTH_NAMES[i];
if (val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()) {
if (token=="MMM"||(token=="NNN"&&i>11)) {
month=i+1;
if (month>12) { month -= 12; }
i_val += month_name.length;
break;
}
}
}
if ((month < 1)||(month>12)){return 0;}
}
else if (token=="EE"||token=="E") {
for (var i=0; i<this.DAY_NAMES.length; i++) {
var day_name=this.DAY_NAMES[i];
if (val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()) {
if (week) {
if (i==0 || i == 7)
date+=6;
else if (i== 2 || i == 9)
date+=1;
else if (i== 3 || i == 10)
date+=2;
else if (i == 4 || i == 11)
date+=3;
else if (i == 5 || i == 12)
date +=4;
else if (i == 6 || i== 13)
date+=5;
}
i_val += day_name.length;
break;
}
}
}
else if (token=="MM"||token=="M") {
month=this._getInt(val,i_val,token.length,2);
if(month==null||(month<1)||(month>12)){return 0;}
i_val+=month.length;}
else if (token=="dd"||token=="d") {
date=this._getInt(val,i_val,token.length,2);
if(date==null||(date<1)||(date>31)){return 0;}
i_val+=date.length;}
else if (token=="hh"||token=="h") {
hh=this._getInt(val,i_val,token.length,2);
if(hh==null||(hh<1)||(hh>12)){return 0;}
i_val+=hh.length;}
else if (token=="HH"||token=="H") {
hh=this._getInt(val,i_val,token.length,2);
if(hh==null||(hh<0)||(hh>23)){return 0;}
i_val+=hh.length;}
else if (token=="KK"||token=="K") {
hh=this._getInt(val,i_val,token.length,2);
if(hh==null||(hh<0)||(hh>11)){return 0;}
i_val+=hh.length;}
else if (token=="kk"||token=="k") {
hh=this._getInt(val,i_val,token.length,2);
if(hh==null||(hh<1)||(hh>24)){return 0;}
i_val+=hh.length;hh--;}
else if (token=="mm"||token=="m") {
mm=this._getInt(val,i_val,token.length,2);
if(mm==null||(mm<0)||(mm>59)){return 0;}
i_val+=mm.length;}
else if (token=="ss"||token=="s") {
ss=this._getInt(val,i_val,token.length,2);
if(ss==null||(ss<0)||(ss>59)){return 0;}
i_val+=ss.length;}
else if (token=="a") {
if (val.substring(i_val,i_val+2).toLowerCase()=="am") {ampm="AM";}
else if (val.substring(i_val,i_val+2).toLowerCase()=="pm") {ampm="PM";}
else {return 0;}
i_val+=2;}
else if (token == "w" || token == "ww") {
var weekNum = this._getInt(val,i_val,token.length, 2);
week = true;
if (weekNum != null) {
var temp = new Date(year, 0, 1, 0, 0, 0);
temp.setWeek(parseInt(weekNum, 10));
year = temp.getFullYear();
month = temp.getMonth()+1;
date = temp.getDate();
}
weekNum += "";
i_val += weekNum.length;
}
else if (token=="D") {
if (week) {
var day = this._getInt(val,i_val,token.length, 1);
if ((day == null) || (day <= 0) || (day > 7))
return 0;
var temp = new Date(year, month-1, date, hh, mm, ss);
var dayOfWeek = temp.getDay();
day = parseInt(day, 10);
day = (day + g_first_day_of_week - 1) % 7;
if (day == 0)
day = 7;
day--;
if (day < dayOfWeek)
day = 7 - (dayOfWeek - day);
else
day -= dayOfWeek;
if (day > 0) {
temp.setDate(temp.getDate() + day);
year = temp.getFullYear();
month = temp.getMonth() + 1;
date = temp.getDate();
}
i_val++;
}
} else if (token =="z")
i_val+=3;
else {
if (val.substring(i_val,i_val+token.length)!=token) {return 0;}
else {i_val+=token.length;}
}
}
if (i_val != val.length) { return 0; }
if (month==2) {
if ( ( (year%4==0)&&(year%100 != 0) ) || (year%400==0) ) {
if (date > 29){ return 0; }
}
else { if (date > 28) { return 0; } }
}
if ((month==4)||(month==6)||(month==9)||(month==11)) {
if (date > 30) { return 0; }
}
if (hh<12 && ampm=="PM") { hh=hh-0+12; }
else if (hh>11 && ampm=="AM") { hh-=12; }
var newdate=new Date(year,month-1,date,hh,mm,ss);
return newdate.getTime();
},
parseDate: function (val) {
var preferEuro=(arguments.length==2)?arguments[1]:false;
generalFormats=new Array('y-M-d','MMM d, y','MMM d,y','y-MMM-d','d-MMM-y','MMM d');
monthFirst=new Array('M/d/y','M-d-y','M.d.y','MMM-d','M/d','M-d');
dateFirst =new Array('d/M/y','d-M-y','d.M.y','d-MMM','d/M','d-M');
yearFirst =new Array( 'yyyyw.F', 'yyw.F');
var checkList=new Array('generalFormats',preferEuro?'dateFirst':'monthFirst',preferEuro?'monthFirst':'dateFirst', 'yearFirst');
var d=null;
for (var i=0; i<checkList.length; i++) {
var l=window[checkList[i]];
for (var j=0; j<l.length; j++) {
d=this.getDateFromFormat(val,l[j]);
if (d!=0) { return new Date(d); }
}
}
return null;
}
};
Date.prototype.getWeek = function() {
var newYear = new Date(this.getFullYear(),0,1);
var day = newYear.getDay() - (g_first_day_of_week - 1);
day = (day >= 0 ? day : day + 7);
var dayNum = Math.floor((this.getTime() - newYear.getTime() - (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
var weekNum;
if (day < 4) {
weekNum = Math.floor((dayNum+day-1)/7) +1;
if (weekNum > 52)
weekNum = this._checkNextYear(weekNum);
return weekNum;
}
weekNum = Math.floor((dayNum+day-1)/7);
if (weekNum < 1)
weekNum = this._lastWeekOfYear();
else if (weekNum > 52)
weekNum = this._checkNextYear(weekNum);
return weekNum;
};
Date.prototype._lastWeekOfYear = function() {
var newYear = new Date(this.getFullYear() - 1,0,1);
var endOfYear = new Date(this.getFullYear() - 1,11,31);
var day = newYear.getDay() - (g_first_day_of_week - 1);
var dayNum = Math.floor((endOfYear.getTime() - newYear.getTime() - (endOfYear.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
return day < 4 ? Math.floor((dayNum+day-1)/7) + 1 : Math.floor((dayNum+day-1)/7);
};
Date.prototype._checkNextYear = function() {
var nYear = new Date(this.getFullYear() + 1,0,1);
var nDay = nYear.getDay() - (g_first_day_of_week-1);
nDay = nDay >= 0 ? nDay : nDay + 7;
return nDay < 4 ? 1 : 53;
};
Date.prototype.setWeek = function(weekNum) {
weekNum--;
var startOfYear = new Date(this.getFullYear(), 0, 1);
var day = startOfYear.getDay() - (g_first_day_of_week - 1);
if (day > 0 && day < 4) {
this.setFullYear(startOfYear.getFullYear() - 1);
this.setDate(31 - day + 1);
this.setMonth(11);
} else if (day > 3)
this.setDate(startOfYear.getDate() + (7-day));
this.setDate(this.getDate() + (7 * weekNum));
};
return dateUtils;
})
;
/*! RESOURCE: /scripts/sn/common/util/service.debounceFn.js */
angular.module("sn.common.util").service("debounceFn", function () {
"use strict";
function debounce(func, wait, immediate) {
var timeout;
return function() {
var context = this, args = arguments;
var later = function() {
timeout = null;
if (!immediate) func.apply(context, args);
};
var callNow = immediate && !timeout;
clearTimeout(timeout);
timeout = setTimeout(later, wait);
if (callNow) func.apply(context, args);
};
}
return {
debounce: debounce
}
});
;
/*! RESOURCE: /scripts/sn/common/util/factory.unwrappedHTTPPromise.js */
angular.module('sn.common.util').factory("unwrappedHTTPPromise", function ($q) {
"use strict";
function isGenericPromise(promise){
return (typeof promise.then === "function" &&
promise.success === undefined &&
promise.error === undefined);
}
return function(httpPromise){
if(isGenericPromise(httpPromise))
return httpPromise;
var deferred = $q.defer();
httpPromise.success(function(data){
deferred.resolve(data);
}).error(function(data, status){
deferred.reject({
data: data,
status: status
})
});
return deferred.promise;
};
});
;
/*! RESOURCE: /scripts/sn/common/util/service.urlTools.js */
angular.module('sn.common.util').constant('angularProcessorUrl', 'angular.do?sysparm_type=');
angular.module('sn.common.util').factory("urlTools", function(getTemplateUrl, angularProcessorUrl) {
"use strict";
function getPartialURL(name, parameters) {
var url = getTemplateUrl(name);
if (parameters) {
if (typeof parameters !== 'string') {
parameters = encodeURIParameters(parameters);
}
if (parameters.length) {
url += "&" + parameters;
}
}
if (window.NOW && window.NOW.ng_cache_defeat)
url += "&t=" + new Date().getTime();
return url;
}
function getURL(name, parameters) {
if (parameters && typeof parameters === 'object')
return urlFor(name, parameters);
var url = angularProcessorUrl;
url += name;
if (parameters)
url += "&" + parameters;
return url;
}
function urlFor(route, parameters) {
var p = encodeURIParameters(parameters);
return angularProcessorUrl + route + (p.length ? '&' + p : '');
}
function getPropertyURL(name) {
var url = angularProcessorUrl + "get_property&name=" + name;
url += "&t=" + new Date().getTime();
return url;
}
function encodeURIParameters(parameters) {
var s = [];
for (var parameter in parameters) {
if (parameters.hasOwnProperty(parameter)) {
var key = encodeURIComponent(parameter);
var value = parameters[parameter] ? encodeURIComponent(parameters[parameter]) : '';
s.push(key + "=" + value);
}
}
return s.join('&');
}
function parseQueryString(qs) {
qs = qs || '';
if (qs.charAt(0) === '?') {
qs = qs.substr(1);
}
var a = qs.split('&');
if (a === "") {
return {};
}
if(a && a[0].indexOf('http') != -1)
a[0] = a[0].split("?")[1];
var b = {};
for (var i = 0; i < a.length; i++) {
var p = a[i].split('=', 2);
if (p.length == 1) {
b[p[0]] = "";
} else {
b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
}
}
return b;
}
return {
getPartialURL: getPartialURL,
getURL: getURL,
urlFor: urlFor,
getPropertyURL: getPropertyURL,
encodeURIParameters: encodeURIParameters,
parseQueryString: parseQueryString
};
});
;
/*! RESOURCE: /scripts/sn/common/util/service.getTemplateUrl.js */
angular.module('sn.common.util').provider('getTemplateUrl', function(angularProcessorUrl) {
'use strict';
var _handlerId = 0;
var _handlers = {};
this.registerHandler = function(handler) {
var registeredId = _handlerId;
_handlers[_handlerId] = handler;
_handlerId++;
return function() {
delete _handlers[registeredId];
};
};
this.$get = function() {
return getTemplateUrl;
};
function getTemplateUrl(templatePath) {
if (_handlerId > 0) {
var path;
var handled = false;
angular.forEach(_handlers, function(handler) {
if (!handled) {
var handlerPath = handler(templatePath);
if (typeof handlerPath !== 'undefined') {
path = handlerPath;
handled = true;
}
}
});
if (handled) {
return path;
}
}
return angularProcessorUrl + 'get_partial&name=' + templatePath;
}
});
;
/*! RESOURCE: /scripts/sn/common/util/service.snTabActivity.js */
angular.module("sn.common.util").service("snTabActivity", function ($window, $timeout, $rootElement, $document) {
"use strict";
var activeEvents = ["keydown", "DOMMouseScroll", "mousewheel", "mousedown", "touchstart", "mousemove", "mouseenter", "input", "focus", "scroll"],
defaultIdle = 75000,
isPrimary = true,
idleTime = 0,
isVisible = true,
idleTimeout = void(0),
pageIdleTimeout = void(0),
hasActed = false,
appName = $rootElement.attr('ng-app') || "",
storageKey = "sn.tabs." + appName + ".activeTab";
var callbacks = {
"tab.primary": [],
"tab.secondary": [],
"activity.active": [],
"activity.idle": [{delay: defaultIdle, cb: function(){}}]
};
$window.tabGUID = $window.tabGUID || createGUID();
function getActiveEvents() {
return activeEvents.join(".snTabActivity ") + ".snTabActivity";
}
function setAppName (an) {
appName = an;
storageKey = "sn.tabs." + appName + ".activeTab";
makePrimary(true);
}
function createGUID(l) {
l = l || 32;
var strResult = '';
while (strResult.length < l)
strResult += (((1+Math.random()+new Date().getTime())*0x10000)|0).toString(16).substring(1);
return strResult.substr(0, l);
}
function ngObjectIndexOf(arr, obj) {
for (var i = 0, len = arr.length; i < len; i++)
if (angular.equals(arr[i], obj))
return i;
return -1;
}
var detectedApi,
apis = [{
eventName: 'visibilitychange',
propertyName: 'hidden'
},{
eventName: 'mozvisibilitychange',
propertyName: 'mozHidden'
},{
eventName: 'msvisibilitychange',
propertyName: 'msHidden'
},{
eventName: 'webkitvisibilitychange',
propertyName: 'webkitHidden'
}];
apis.some(function(api) {
if (angular.isDefined($document[0][api.propertyName])) {
detectedApi = api;
return true;
}
});
if(detectedApi)
$document.on(detectedApi.eventName, function() {
if(!$document[0][detectedApi.propertyName]) {
makePrimary();
isVisible = true;
} else {
if(!idleTimeout && !idleTime)
waitForIdle(0);
isVisible = false;
}
});
angular.element($window).on({
"mouseleave": function(e) {
var destination = angular.isUndefined(e.toElement) ? e.relatedTarget : e.toElement;
if (destination === null && $document[0].hasFocus()) {
waitForIdle(0);
}
},
"storage": function(e) {
if(e.originalEvent.key !== storageKey)
return;
if($window.localStorage.getItem(storageKey) !== $window.tabGUID)
makeSecondary();
}
});
function waitForIdle(index, delayOffset) {
var callback = callbacks['activity.idle'][index];
var numCallbacks = callbacks['activity.idle'].length;
delayOffset = delayOffset || callback.delay;
angular.element($window).off(getActiveEvents());
angular.element($window).one(getActiveEvents(), setActive);
if(index >= numCallbacks)
return;
if(idleTimeout)
$timeout.cancel(idleTimeout);
idleTimeout = $timeout(function() {
idleTime = callback.delay;
callback.cb();
$timeout.cancel(idleTimeout);
idleTimeout = void(0);
angular.element($window).off(getActiveEvents());
angular.element($window).one(getActiveEvents(), setActive);
for( var i = index + 1; i < numCallbacks; i++ ) {
var nextDelay = callbacks['activity.idle'][i].delay;
if(nextDelay <= callback.delay)
callbacks['activity.idle'][i].cb();
else {
waitForIdle(i, nextDelay - callback.delay);
break;
}
}
}, delayOffset, false);
}
function setActive() {
angular.element($window).off(getActiveEvents());
if(idleTimeout) {
$timeout.cancel(idleTimeout);
idleTimeout = void(0);
}
var activeCallbacks =  callbacks['activity.active'];
activeCallbacks.some(function(callback) {
if(callback.delay <= idleTime)
callback.cb();
else
return true;
});
idleTime = 0;
makePrimary();
if(pageIdleTimeout) {
$timeout.cancel(pageIdleTimeout);
pageIdleTimeout = void(0);
}
var minDelay = callbacks['activity.idle'][0].delay;
hasActed = false;
if(!pageIdleTimeout)
pageIdleTimeout = $timeout(pageIdleHandler, minDelay, false);
listenForActivity();
}
function pageIdleHandler() {
if(idleTimeout)
return;
var minDelay = callbacks['activity.idle'][0].delay;
if(hasActed) {
hasActed = false;
if(pageIdleTimeout)
$timeout.cancel(pageIdleTimeout);
pageIdleTimeout = $timeout(pageIdleHandler, minDelay, false);
listenForActivity();
return;
}
var delayOffset = minDelay;
if(callbacks['activity.idle'].length > 1)
delayOffset = callbacks['activity.idle'][1].delay - minDelay;
idleTime = minDelay;
callbacks['activity.idle'][0].cb();
waitForIdle(1, delayOffset);
pageIdleTimeout = void(0);
}
function listenForActivity() {
angular.element($window).off(getActiveEvents());
angular.element($window).one(getActiveEvents(), onActivity);
angular.element("#gsft_main").on("load.snTabActivity", function() {
var src = angular.element(this).attr('src');
if(src.indexOf("/") == 0 || src.indexOf($window.location.origin) == 0 || src.indexOf('http') == -1) {
var iframeWindow = this.contentWindow ? this.contentWindow : this.contentDocument.defaultView;
angular.element(iframeWindow).off(getActiveEvents());
angular.element(iframeWindow).one(getActiveEvents(), onActivity);
}
});
angular.element('iframe').each(function(idx, iframe) {
var src = angular.element(iframe).attr('src');
if (!src)
return;
if(src.indexOf("/") == 0 || src.indexOf($window.location.origin) == 0 || src.indexOf('http') == -1) {
var iframeWindow = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.defaultView;
angular.element(iframeWindow).off(getActiveEvents());
angular.element(iframeWindow).one(getActiveEvents(), onActivity);
}
});
}
function onActivity() {
hasActed = true;
makePrimary();
}
function makePrimary(initial) {
var oldGuid = $window.localStorage.getItem(storageKey);
isPrimary = true;
isVisible = true;
$timeout.cancel(idleTimeout);
idleTimeout = void(0);
if(canUseStorage() && oldGuid !== $window.tabGUID && !initial)
for(var i = 0, len = callbacks["tab.primary"].length; i < len; i++)
callbacks["tab.primary"][i].cb();
try {
$window.localStorage.setItem(storageKey, $window.tabGUID);
} catch (ignored) {
}
if(idleTime && $document[0].hasFocus())
setActive();
}
function makeSecondary() {
isPrimary = false;
isVisible = false;
for(var i = 0, len = callbacks["tab.secondary"].length; i < len; i++)
callbacks["tab.secondary"][i].cb();
}
function registerCallback(event, callback, scope) {
var cbObject = angular.isObject(callback) ? callback : {delay: defaultIdle, cb: callback};
if(callbacks[event]) {
callbacks[event].push(cbObject);
callbacks[event].sort(function(a, b) {
return a.delay - b.delay;
})
}
function destroyCallback() {
if (callbacks[event]) {
var pos = ngObjectIndexOf(callbacks[event], cbObject);
if (pos !== -1)
callbacks[event].splice(pos, 1);
}
}
if(scope)
scope.$on("$destroy", function() {
destroyCallback();
});
return destroyCallback;
}
function registerIdleCallback(options, onIdle, onReturn, scope) {
var delay = options,
onIdleDestroy,
onReturnDestroy;
if(angular.isObject(options)) {
delay = options.delay;
onIdle = options.onIdle || onIdle;
onReturn = options.onReturn || onReturn;
scope = options.scope || scope;
}
if(angular.isFunction(onIdle))
onIdleDestroy = registerCallback("activity.idle", {delay: delay, cb: onIdle});
else if (angular.isFunction(onReturn)) {
onIdleDestroy = registerCallback("activity.idle", {delay: delay, cb: function(){}});
}
if(angular.isFunction(onReturn))
onReturnDestroy = registerCallback("activity.active", {delay: delay, cb: onReturn});
function destroyAll() {
if(angular.isFunction(onIdleDestroy))
onIdleDestroy();
if(angular.isFunction(onReturnDestroy))
onReturnDestroy();
}
if(scope)
scope.$on("$destroy", function() {
destroyAll();
});
return destroyAll;
}
function canUseStorage() {
var canWe = false;
try {
$window.localStorage.setItem(storageKey, $window.tabGUID);
canWe = true;
} catch (ignored) {
}
return canWe;
}
function resetIdleTime() {
if(idleTime > 0) {
idleTime = 0;
if(pageIdleTimeout) {
$timeout.cancel(pageIdleTimeout);
pageIdleTimeout = void(0);
}
}
waitForIdle(0);
}
makePrimary(true);
listenForActivity();
pageIdleTimeout = $timeout(pageIdleHandler, defaultIdle, false);
return {
on: registerCallback,
onIdle: registerIdleCallback,
setAppName: setAppName,
get isPrimary() { return isPrimary; },
get isIdle() { return idleTime > 0; },
get idleTime() { return idleTime; },
get isVisible() { return isVisible; },
get appName() { return appName; },
get defaultIdleTime() { return defaultIdle },
isActive: function() {
return this.idleTime < this.defaultIdleTime && this.isVisible;
},
resetIdleTime: resetIdleTime
}
});
;
/*! RESOURCE: /scripts/sn/common/util/factory.ArraySynchronizer.js */
angular.module("sn.common.util").factory("ArraySynchronizer", function() {
'use strict';
function ArraySynchronizer(){}
function index(key, arr) {
var result = {};
var keys = [];
result.orderedKeys = keys;
angular.forEach(arr, function(item) {
var keyValue = item[key];
result[keyValue] = item;
keys.push(keyValue);
});
return result;
}
function sortByKeyAndModel(arr, key, model) {
arr.sort(function(a, b) {
var aIndex = model.indexOf(a[key]);
var bIndex = model.indexOf(b[key]);
if(aIndex > bIndex)
return 1;
else if (aIndex < bIndex)
return -1;
return 0;
});
}
ArraySynchronizer.prototype = {
add: function(syncField, dest, source, end) {
end = end || "bottom";
var destIndex = index(syncField, dest);
var sourceIndex = index(syncField, source);
angular.forEach(sourceIndex.orderedKeys, function(key) {
if(destIndex.orderedKeys.indexOf(key) === -1) {
if(end === "bottom") {
dest.push(sourceIndex[key]);
} else {
dest.unshift(sourceIndex[key]);
}
}
});
},
synchronize: function(syncField, dest, source, deepKeySyncArray) {
var destIndex = index(syncField, dest);
var sourceIndex = index(syncField, source);
deepKeySyncArray = (typeof deepKeySyncArray === "undefined") ? [] : deepKeySyncArray;
for(var i = destIndex.orderedKeys.length - 1; i >= 0; i--) {
var key = destIndex.orderedKeys[i];
if(sourceIndex.orderedKeys.indexOf(key) === -1) {
destIndex.orderedKeys.splice(i, 1);
dest.splice(i, 1);
}
if (deepKeySyncArray.length > 0) {
angular.forEach(deepKeySyncArray, function(deepKey) {
if (sourceIndex[key] && destIndex[key][deepKey] !== sourceIndex[key][deepKey]) {
destIndex[key][deepKey] = sourceIndex[key][deepKey];
}
});
}
}
angular.forEach(sourceIndex.orderedKeys, function(key) {
if(destIndex.orderedKeys.indexOf(key) === -1)
dest.push(sourceIndex[key]);
});
sortByKeyAndModel(dest, syncField, sourceIndex.orderedKeys);
}
};
return ArraySynchronizer;
});
;
/*! RESOURCE: /scripts/sn/common/util/directive.snBindOnce.js */
angular.module("sn.common.util").directive("snBindOnce", function($sanitize) {
"use strict";
return {
restrict: "A",
link: function(scope, element, attrs) {
var value = scope.$eval(attrs.snBindOnce);
var sanitizedValue = $sanitize(value);
element.append(sanitizedValue);
}
}
})
;
/*! RESOURCE: /scripts/sn/common/util/directive.snCloak.js */
angular.module("sn.common.util").directive("snCloak", function() {
"use strict";
return {
restrict: "A",
compile: function(element, attr) {
return function() {
attr.$set('snCloak', undefined);
element.removeClass('sn-cloak');
}
}
};
})
;
/*! RESOURCE: /scripts/sn/common/util/service.md5.js */
angular.module('sn.common.util').factory('md5', function() {
'use strict';
var md5cycle = function(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];
a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);
a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);
a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);
a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);
x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);
};
var cmn = function(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
};
var ff = function(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
};
var gg = function(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
};
var hh = function(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
};
var ii = function(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
};
var md51 = function(s) {
var txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
};
var md5blk = function(s) {
var md5blks = [], i;
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
};
var hex_chr = '0123456789abcdef'.split('');
var rhex = function(n) {
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
};
var hex = function(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
};
var add32 = function(a, b) {
return (a + b) & 0xFFFFFFFF;
};
return function(s) {
return hex(md51(s));
};
});
;
/*! RESOURCE: /scripts/sn/common/util/service.priorityQueue.js */
angular.module('sn.common.util').factory('priorityQueue', function() {
'use strict';
return function(comparator) {
var items = [];
var compare = comparator || function(a, b) {
return a - b;
};
var swap = function(a, b) {
var temp = items[a];
items[a] = items[b];
items[b] = temp;
};
var bubbleUp = function(pos) {
var parent;
while (pos > 0) {
parent = (pos - 1) >> 1;
if (compare(items[pos], items[parent]) >= 0)
break;
swap(parent, pos);
pos = parent;
}
};
var bubbleDown = function(pos) {
var left, right, min, last = items.length - 1;
while (true) {
left = (pos << 1) + 1;
right = left + 1;
min = pos;
if (left <= last && compare(items[left], items[min]) < 0)
min = left;
if (right <= last && compare(items[right], items[min]) < 0)
min = right;
if (min === pos)
break;
swap(min, pos);
pos = min;
}
};
return {
add: function(item) {
items.push(item);
bubbleUp(items.length - 1);
},
poll: function() {
var first = items[0],
last = items.pop();
if (items.length > 0) {
items[0] = last;
bubbleDown(0);
}
return first;
},
peek: function() {
return items[0];
},
clear: function() {
items = [];
},
inspect: function() {
return angular.toJson(items, true);
},
get size() {
return items.length;
},
get all() {
return items;
},
set comparator(fn) {
compare = fn;
}
};
};
});
;
/*! RESOURCE: /scripts/sn/common/util/service.snResource.js */
angular.module('sn.common.util').factory('snResource', function($http, $q, priorityQueue, md5) {
'use strict';
var methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'jsonp', 'trace'],
queue = priorityQueue(function(a, b) {
return a.timestamp - b.timestamp;
}),
resource = {},
pendingRequests = [],
inFlightRequests = [];
return function() {
var requestInterceptors = $http.defaults.transformRequest,
responseInterceptors = $http.defaults.transformResponse;
var next = function() {
var request = queue.peek();
pendingRequests.shift();
inFlightRequests.push(request.hash);
$http(request.config).then(function(response) {
request.deferred.resolve(response);
}, function(reason) {
request.deferred.reject(reason);
}).finally(function() {
queue.poll();
inFlightRequests.shift();
if (queue.size > 0)
next();
});
};
angular.forEach(methods, function(method) {
resource[method] = function(url, data) {
var deferredRequest = $q.defer(),
promise = deferredRequest.promise,
deferredAbort = $q.defer(),
config = {
method: method,
url: url,
data: data,
transformRequest: requestInterceptors,
transformResponse: responseInterceptors,
timeout: deferredAbort.promise
},
hash = md5(JSON.stringify(config));
pendingRequests.push(hash);
queue.add({
config: config,
deferred: deferredRequest,
timestamp: Date.now(),
hash: hash
});
if (queue.size === 1)
next();
promise.abort = function() {
deferredAbort.resolve('Request cancelled');
};
return promise;
};
});
resource.addRequestInterceptor = function(fn) {
requestInterceptors = requestInterceptors.concat([fn]);
};
resource.addResponseInterceptor = function(fn) {
responseInterceptors = responseInterceptors.concat([fn]);
};
resource.queueSize = function() {
return queue.size;
};
resource.queuedRequests = function() {
return queue.all;
};
return resource;
};
});
;
/*! RESOURCE: /scripts/sn/common/util/service.snConnect.js */
angular.module("sn.common.util").service("snConnectService", function ($http, snCustomEvent) {
"use strict";
var connectPaths = ["/$c.do", "/$chat.do"];
function canOpenInFrameset() {
return window.top.NOW.collaborationFrameset;
}
function isInConnect() {
var parentPath = getParentPath();
return connectPaths.some(function(path) {
return parentPath == path;
});
}
function getParentPath() {
try {
return window.top.location.pathname;
} catch(IGNORED) {
return "";
}
}
function openWithProfile(profile) {
if (isInConnect() || canOpenInFrameset())
snCustomEvent.fireTop('chat:open_conversation', profile);
else
window.open("$c.do#/with/" + profile.sys_id, "_blank");
}
return {
openWithProfile: openWithProfile
}
});
;
/*! RESOURCE: /scripts/sn/common/util/snPolyfill.js */
(function(){
"use strict";
polyfill(String.prototype, 'startsWith', function(prefix) {
return this.indexOf(prefix) === 0;
});
polyfill(String.prototype, 'endsWith', function(suffix) {
return this.indexOf(suffix, this.length - suffix.length) !== -1;
});
polyfill(Number, 'isNaN', function(value) {
return value !== value;
});
polyfill(window, 'btoa', function (input) {
var str = String(input);
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
for (
var block, charCode, idx = 0, map = chars, output = '';
str.charAt(idx | 0) || (map = '=', idx % 1);
output += map.charAt(63 & block >> 8 - idx % 1 * 8)
) {
charCode = str.charCodeAt(idx += 3/4);
if (charCode > 0xFF) {
throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
}
block = block << 8 | charCode;
}
return output;
});
function polyfill(obj, slot, fn) {
if (obj[slot] === void(0)) {
obj[slot] = fn;
}
}
window.console = window.console || { log: function(){} };
})();
;
/*! RESOURCE: /scripts/sn/common/util/directive.snFocus.js */
angular.module('sn.common.util').directive('snFocus', function($timeout) {
'use strict';
return function(scope, element, attrs) {
scope.$watch(attrs.snFocus, function(value) {
if (value !== true)
return;
$timeout(function() {
element[0].focus();
});
});
};
});
;
/*! RESOURCE: /scripts/sn/common/util/directive.snResizeHeight.js */
angular.module('sn.common.util').directive('snResizeHeight', function($window) {
'use strict';
return {
restrict : 'A',
link : function(scope, elem, attrs) {
if (typeof $window.autosize === 'undefined') {
return;
}
$window.autosize(elem);
function _update() {
$window.autosize.update(elem);
}
function _destroy() {
$window.autosize.destroy(elem);
}
if (typeof attrs.disableValueWatcher === "undefined") {
scope.$watch(function() {
return elem.val();
}, function valueWatcher(newValue, oldValue) {
if (newValue === oldValue) {
return;
}
_update();
});
}
elem.on('input.resize', _update());
scope.$on('$destroy', function() {
_destroy();
});
if (attrs.snTextareaAutosizer === 'trim') {
elem.on('blur', function() {
elem.val(elem.val().trim());
_update();
})
}
}
}
});
;
/*! RESOURCE: /scripts/sn/common/util/directive.snBlurOnEnter.js */
angular.module('sn.common.util').directive('snBlurOnEnter', function() {
'use strict';
return function(scope, element) {
element.bind("keydown keypress", function(event) {
if (event.which !== 13)
return;
element.blur();
event.preventDefault();
});
};
});
;
/*! RESOURCE: /scripts/sn/common/util/directive.snStickyHeaders.js */
angular.module('sn.common.util').directive('snStickyHeaders', function() {
"use strict";
return {
restrict : 'A',
transclude: false,
replace: false,
link: function (scope, element, attrs) {
element.addClass('sticky-headers');
var containers;
var scrollContainer = element.find('[sn-sticky-scroll-container]');
scrollContainer.addClass('sticky-scroll-container');
function refreshHeaders () {
if (attrs.snStickyHeaders !== 'false') {
angular.forEach(containers, function (container) {
var stickyContainer = angular.element(container);
var stickyHeader = stickyContainer.find('[sn-sticky-header]');
var stickyOffset = stickyContainer.position().top + stickyContainer.outerHeight();
stickyContainer.addClass('sticky-container');
if (stickyOffset < stickyContainer.outerHeight() && stickyOffset > -stickyHeader.outerHeight()) {
stickyContainer.css('padding-top', stickyHeader.outerHeight());
stickyHeader.css('width', stickyHeader.outerWidth());
stickyHeader.removeClass('sticky-header-disabled').addClass('sticky-header-enabled');
} else {
stickyContainer.css('padding-top', '');
stickyHeader.css('width', '');
stickyHeader.removeClass('sticky-header-enabled').addClass('sticky-header-disabled');
}
});
} else {
element.find('[sn-sticky-container]').removeClass('sticky-container');
element.find('[sn-sticky-container]').css('padding-top', '');
element.find('[sn-sticky-header]').css('width', '');
element.find('[sn-sticky-header]').removeClass('sticky-header-enabled').addClass('sticky-header-disabled');
}
}
scope.$watch(function () {
scrollContainer.find('[sn-sticky-header]').addClass('sticky-header');
containers = element.find('[sn-sticky-container]');
return attrs.snStickyHeaders;
}, refreshHeaders);
scope.$watch(function () {
return scrollContainer[0].scrollHeight;
}, refreshHeaders);
scrollContainer.on('scroll', refreshHeaders);
}
};
});
;
;
/*! RESOURCE: /scripts/sn/common/ui/js_includes_ui.js */
/*! RESOURCE: /scripts/sn/common/ui/_module.js */
angular.module('sn.common.ui', ['sn.common.messaging']);
;
/*! RESOURCE: /scripts/sn/common/ui/popover/js_includes_ui_popover.js */
/*! RESOURCE: /scripts/sn/common/ui/popover/_module.js */
angular.module('sn.common.ui.popover', []);
;
/*! RESOURCE: /scripts/sn/common/ui/popover/directive.snBindPopoverSelection.js */
angular.module('sn.common.ui.popover').directive('snBindPopoverSelection', function(snCustomEvent) {
"use strict";
return {
restrict: "A",
controller: function($scope, $element, $attrs , snCustomEvent) {
snCustomEvent.observe('list.record_select', recordSelectDataHandler);
function recordSelectDataHandler(data, event) {
if (!data || !event)
return;
event.stopPropagation();
var ref = ($scope.field) ? $scope.field.ref : $attrs.ref;
if (data.ref === ref) {
if (window.g_form) {
if ($attrs.addOption) {
addGlideListChoice('select_0' + $attrs.ref, data.value, data.displayValue);
} else {
var fieldValue = typeof $attrs.ref === 'undefined' ? data.ref : $attrs.ref;
window.g_form._setValue(fieldValue, data.value, data.displayValue);
clearDerivedFields(data.value);
}
}
if ($scope.field) {
$scope.field.value = data.value;
$scope.field.displayValue = data.displayValue;
}
}
}
function clearDerivedFields(value) {
if (window.DerivedFields) {
var df = new DerivedFields($scope.field ? $scope.field.ref : $attrs.ref);
df.clearRelated();
df.updateRelated(value);
}
}
}
};
});
;
/*! RESOURCE: /scripts/sn/common/ui/popover/directive.snComplexPopover.js */
angular.module('sn.common.ui.popover').directive('snComplexPopover', function(getTemplateUrl, $q, $http, $templateCache, $compile, $timeout){
"use strict";
return {
restrict: 'E',
replace:true,
templateUrl: function(elem, attrs){
return getTemplateUrl(attrs.buttonTemplate);
},
controller: function($scope, $element, $attrs, $q, $document, snCustomEvent, snComplexPopoverService){
$scope.type = $attrs.complexPopoverType || "complex_popover";
if ($scope.closeEvent){
snCustomEvent.observe($scope.closeEvent, destroyPopover);
$scope.$on($scope.closeEvent, destroyPopover);
}
$scope.$parent.$on('$destroy', destroyPopover);
$scope.$on('$destroy', function() {
snCustomEvent.un($scope.closeEvent, destroyPopover);
});
var newScope;
var open;
var popover;
var content;
var popoverDefaults = {
container: 'body',
html: true,
placement: 'auto',
trigger: 'manual',
template: '<div class="complex_popover popover" role="dialog"><div class="arrow"></div><div class="popover-content"></div></div>'
};
var popoverConfig = angular.extend(popoverDefaults, $scope.popoverConfig);
$scope.loading      = false;
$scope.initialized  = false;
$scope.popOverDisplaying = false;
$scope.togglePopover = function(event) {
if (!open){
showPopover(event);
} else {
destroyPopover();
}
$scope.popOverDisplaying = !$scope.popOverDisplaying;
};
function showPopover(e) {
if ($scope.loading)
return;
$scope.$toggleButton = angular.element(e.target);
$scope.loading = true;
$scope.$emit('list.toggleLoadingState', true);
_getTemplate()
.then(_insertTemplate)
.then(_createPopover)
.then(_bindHtml)
.then(function(){
$scope.initialized = true;
if (!$scope.loadEvent)
_openPopover();
});
}
function destroyPopover() {
if (!newScope)
return;
$scope.$toggleButton.on('hidden.bs.popover', function(){
open = false;
$scope.$toggleButton.data('bs.popover').$element.removeData('bs.popover').off('.popover');
$scope.$toggleButton = null;
snCustomEvent.fire('hidden.complexpopover.' + $scope.ref);
});
$scope.$toggleButton.popover('hide');
snCustomEvent.fire('hide.complexpopover.' + $scope.ref, $scope.$toggleButton);
newScope.$broadcast('$destroy');
newScope.$destroy();
newScope = null;
$scope.initialized = false;
angular.element(window).off({
'click': complexHtmlHandler,
'keydown': keyDownHandler
});
}
function _getTemplate() {
return snComplexPopoverService.getTemplate(getTemplateUrl($attrs.template));
}
function _createPopover() {
$scope.$toggleButton.popover(popoverConfig);
return $q.when(true);
}
function _insertTemplate(response) {
newScope = $scope.$new();
if ($scope.loadEvent)
newScope.$on($scope.loadEvent, _openPopover);
content = $compile(response.data)(newScope);
popoverConfig.content = content;
newScope.open = true;
snCustomEvent.fire('inserted.complexpopover.' + $scope.ref, $scope.$toggleButton);
return $q.when(true);
}
function _bindHtml() {
angular.element(window).on({
'click': complexHtmlHandler,
'keydown': keyDownHandler
});
return $q.when(true);
}
function complexHtmlHandler(e) {
var parentComplexPopoverScope = angular.element(e.target).parents('.popover-content').children().scope();
if (parentComplexPopoverScope && (parentComplexPopoverScope.type = "complex_popover") && $scope.type === "complex_popover")
return;
if (!open || angular.element(e.target).parents('html').length === 0)
return;
if ($scope.initialized && !$scope.loading && !$scope.$toggleButton.is(e.target) && content.parents('.popover').has(angular.element(e.target)).length === 0) {
_eventClosePopover(e);
destroyPopover(e);
}
}
function keyDownHandler(e) {
if (e.keyCode != 27)
return;
if (!open || angular.element(e.target).parents('html').length === 0)
return;
if ($scope.initialized && !$scope.loading && !$scope.$toggleButton.is(e.target) && content.parents('.popover').has(angular.element(e.target)).length > 0) {
_eventClosePopover(e);
destroyPopover();
}
}
function _eventClosePopover(e) {
e.preventDefault();
e.stopPropagation();
}
function createAndActivateFocusTrap(popover) {
var deferred = $q.defer();
if (!window.focusTrap) {
deferred.reject('Focus trap not found');
} else {
if (!$scope.focusTrap) {
$scope.focusTrap = window.focusTrap(popover, { clickOutsideDeactivates: true });
}
try {
$scope.focusTrap.activate({
onActivate: function() {
deferred.resolve();
}
});
} catch(e) {
console.warn("Unable to activate focus trap", e);
}
}
return deferred.promise;
}
function deactivateAndDestroyFocusTrap() {
var deferred = $q.defer();
if (!$scope.focusTrap) {
deferred.reject("Focus trap not found");
} else {
try {
$scope.focusTrap.deactivate({
returnFocus: false,
onDeactivate: function () {
deferred.resolve();
}
});
} catch (e) {
console.warn("Unable to deactivate focus trap", e);
}
$scope.focusTrap = null;
}
return deferred.promise;
}
function _openPopover() {
if (open) {
return;
}
open = true;
$timeout(function() {
$scope.$toggleButton.popover('show');
$scope.loading = false;
snCustomEvent.fire('show.complexpopover.' + $scope.ref, $scope.$toggleButton);
$scope.$toggleButton.on('shown.bs.popover', function(evt) {
var popoverObject = angular.element(evt.target).data('bs.popover'),
$tooltip,
popover;
$tooltip = popoverObject && popoverObject.$tip;
popover = $tooltip && $tooltip[0];
if (popover) {
createAndActivateFocusTrap(popover);
}
snCustomEvent.fire('shown.complexpopover.' + $scope.ref, $scope.$toggleButton);
});
$scope.$toggleButton.on('hide.bs.popover', function () {
deactivateAndDestroyFocusTrap().finally(function() {
$scope.$toggleButton.focus();
});
});
}, 0 );
}
}
};
});
;
/*! RESOURCE: /scripts/sn/common/ui/popover/service.snComplexPopoverService.js */
angular.module('sn.common.ui.popover').service('snComplexPopoverService', function($http, $q, $templateCache){
"use strict";
return {
getTemplate: getTemplate
};
function getTemplate(template){
return $http.get(template, {cache: $templateCache});
}
});
;
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snConfirmModal.js */
angular.module('sn.common.ui').directive('snConfirmModal', function(getTemplateUrl) {
return {
templateUrl: getTemplateUrl('sn_confirm_modal.xml'),
restrict: 'E',
replace: true,
transclude: true,
scope: {
config: '=?',
modalName: '@',
title: '@?',
message: '@?',
cancelButton:  '@?',
okButton: '@?',
alertButton: '@?',
cancel: '&?',
ok: '&?',
alert: '&?'
},
link: function (scope, element) {
element.find('.modal').remove();
},
controller: function($scope, $rootScope) {
$scope.config = $scope.config || {};
function Button(fn, text) {
return { fn: fn, text: text }
}
var buttons = {
'cancelButton': new Button('cancel', 'Cancel'),
'okButton':     new Button('ok',     'OK'),
'alertButton':  new Button('alert',  'Close'),
getText: function(type) {
var button = this[type];
if (button && $scope.get(button.fn))
return button.text;
}
};
$scope.get = function(type) {
if ($scope.config[type])
return $scope.config[type];
if (!$scope[type]) {
var text = buttons.getText(type);
if (text)
return $scope.config[type] = text;
}
return $scope.config[type] = $scope[type];
};
if(!$scope.get('modalName'))
$scope.config.modalName = 'confirm-modal';
function call(type) {
var action = $scope.get(type);
if (action) {
if (angular.isFunction(action))
action();
return true;
}
return !!buttons.getText(type);
}
$scope.cancelPressed = close('cancel');
$scope.okPressed = close('ok');
$scope.alertPressed = close('alert');
function close (type) {
return function () {
actionClosed = true;
$rootScope.$broadcast('dialog.' + $scope.config.modalName + '.close');
call(type);
}
}
var actionClosed;
$scope.$on('dialog.' + $scope.get('modalName') + '.opened', function() {
actionClosed = false;
});
$scope.$on('dialog.' + $scope.get('modalName') + '.closed', function() {
if (actionClosed)
return;
if (call('cancel'))
return;
if (call('alert'))
return;
call('ok');
});
}
};
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snContextMenu.js */
angular.module('sn.common.ui').directive('contextMenu', function ($document, $window, snCustomEvent) {
var $contextMenu, $ul;
var scrollHeight = angular.element("body").get(0).scrollHeight;
var contextMenuItemHeight = 0;
var $triggeringElement;
var _focusTrap;
function setContextMenuPosition(event, $ul){
if (!event.pageX && event.originalEvent.changedTouches)
event = event.originalEvent.changedTouches[0];
if (contextMenuItemHeight === 0)
contextMenuItemHeight = 24;
var cmWidth = 150;
var cmHeight = contextMenuItemHeight * $ul.children().length;
var pageX = event.pageX;
var pageY = event.pageY;
if (!pageX) {
var rect = event.target.getBoundingClientRect();
pageX = rect.left + angular.element(event.target).width();
pageY = rect.top + angular.element(event.target).height();
}
var startX = pageX + cmWidth >= $window.innerWidth ? pageX - cmWidth : pageX;
var startY = pageY + cmHeight >= $window.innerHeight ? pageY - cmHeight : pageY;
$ul.css({
display: 'block',
position: 'absolute',
left: startX,
top: startY
});
}
function renderContextMenuItems($scope, event, options) {
$ul.empty();
angular.forEach(options, function (item) {
var $li = angular.element('<li role="presentation">');
if (item === null) {
$li.addClass('divider');
} else {
var $a = angular.element('<a role="menuitem" href="javascript:void(0)">');
$a.text(typeof item[0] == 'string' ? item[0] : item[0].call($scope, $scope));
$li.append($a);
$li.on('click', function ($event) {
$event.preventDefault();
$scope.$apply(function () {
_clearContextMenus(event);
item[1].call($scope, $scope);
});
});
}
$ul.append($li);
});
setContextMenuPosition(event, $ul);
}
var renderContextMenu = function ($scope, event, options) {
angular.element(event.currentTarget).addClass('context');
$contextMenu = angular.element('<div>', {
'class': 'dropdown clearfix context-dropdown open'
});
$contextMenu.on('click', function (e) {
if (angular.element(e.target).hasClass('dropdown')) {
_clearContextMenus(event);
}
});
$contextMenu.on('contextmenu', function (event) {
event.preventDefault();
_clearContextMenus(event);
});
$contextMenu.on('keydown', function(event) {
if (event.keyCode != 27 && event.keyCode != 9)
return;
event.preventDefault();
_clearContextMenus(event);
});
$contextMenu.css({
position: 'absolute',
top: 0,
height: angular.element("body").get(0).scrollHeight,
left: 0,
right: 0,
zIndex: 9999
});
$document.find('body').append($contextMenu);
$ul = angular.element('<ul>', {
'class': 'dropdown-menu',
'role': 'menu'
});
renderContextMenuItems($scope, event, options);
$contextMenu.append($ul);
$triggeringElement = document.activeElement;
activateFocusTrap();
$contextMenu.data('resizeHandler', function() {
scrollHeight = angular.element("body").get(0).scrollHeight;
$contextMenu.css('height', scrollHeight);
});
snCustomEvent.observe('partial.page.reload', $contextMenu.data('resizeHandler'));
};
function _clearContextMenus(event){
if (!event)
return;
angular.element(event.currentTarget).removeClass('context');
var els = angular.element(".context-dropdown");
angular.forEach(els, function(el){
snCustomEvent.un('partial.page.reload', angular.element(el).data('resizeHandler'));
angular.element(el).remove();
});
deactivateFocusTrap();
}
function activateFocusTrap() {
if (_focusTrap || !window.focusTrap)
return;
_focusTrap = focusTrap($contextMenu[0], {
focusOutsideDeactivates: true,
clickOutsideDeactivates: true
});
_focusTrap.activate();
}
function deactivateFocusTrap() {
if (!_focusTrap || !window.focusTrap)
return;
_focusTrap.deactivate();
_focusTrap = null;
}
return function (scope, element, attrs) {
element.on('contextmenu', function (event) {
if (event.ctrlKey)
return;
if (angular.element(element).attr('context-type'))
return;
showMenu(event);
});
element.on('click', handleClick);
element.on('keydown', function(event) {
if (event.keyCode == 32) {
handleSpace(event);
} else if (event.keyCode === 13) {
handleClick(event);
}
});
var doubleTapTimeout,
doubleTapActive = false,
doubleTapStartPosition;
element.on('touchstart', function(event) {
doubleTapStartPosition = {
x: event.originalEvent.changedTouches[0].screenX,
y: event.originalEvent.changedTouches[0].screenY
};
});
element.on('touchend', function(event) {
var distX = Math.abs(event.originalEvent.changedTouches[0].screenX - doubleTapStartPosition.x);
var distY = Math.abs(event.originalEvent.changedTouches[0].screenY - doubleTapStartPosition.y);
if (distX > 15 || distY > 15) {
doubleTapStartPosition = null;
return;
}
if (doubleTapActive) {
doubleTapActive = false;
clearTimeout(doubleTapTimeout);
showMenu(event);
event.preventDefault();
return;
}
doubleTapActive = true;
event.preventDefault();
doubleTapTimeout = setTimeout(function() {
doubleTapActive = false;
if (event.target)
event.target.click();
}, 300);
});
function handleSpace(evt) {
var $target = angular.element(evt.target);
if ($target.is('button, [role=button]')) {
handleClick(evt);
return;
}
if (!$target.hasClass('list-edit-cursor'))
return;
showMenu(evt);
}
function handleClick(event) {
var $el = angular.element(element);
var $target = angular.element(event.target);
if (!$el.attr('context-type') && !$target.hasClass('context-menu-click'))
return;
showMenu(event);
}
function showMenu(evt) {
scope.$apply(function () {
applyMenu(evt);
clearWindowSelection();
});
}
function clearWindowSelection() {
if (window.getSelection)
if (window.getSelection().empty)
window.getSelection().empty();
else if (window.getSelection().removeAllRanges)
window.getSelection().removeAllRanges();
else if (document.selection)
document.selection.empty();
}
function applyMenu(event) {
var tagName = event.target.tagName;
if (tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'BUTTON') {
return;
}
var menu = scope.$eval(attrs.contextMenu, { event: event });
if (menu instanceof Array) {
if (menu.length > 0) {
event.stopPropagation();
event.preventDefault();
scope.$watch(function(){ return menu; }, function(newValue, oldValue){ if (newValue !== oldValue) renderContextMenuItems(scope, event, menu);}, true);
renderContextMenu(scope, event, menu);
}
} else if (typeof menu !== 'undefined' && typeof menu.then === 'function' ) {
event.stopPropagation();
event.preventDefault();
menu.then(function(response) {
var contextMenu = response;
if (contextMenu.length > 0) {
scope.$watch(function() {
return contextMenu;
}, function(newValue, oldValue) {
if (newValue !== oldValue)
renderContextMenuItems(scope, event, contextMenu);
}, true);
renderContextMenu(scope, event, contextMenu);
} else {
throw '"' + attrs.contextMenu + '" is not an array or promise';
}
});
} else {
throw '"' + attrs.contextMenu + '" is not an array or promise';
}
}
};
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snDialog.js */
angular.module("sn.common.ui").directive("snDialog", function($timeout, $rootScope, $document) {
"use strict";
return {
restrict: "AE",
transclude: true,
scope: {
modal: "=?",
disableAutoFocus: "=?",
classCheck: "="
},
replace: true,
template: '<dialog ng-keyup="escape($event)"><div ng-click="onClickClose()" title="Close" class="close-button icon-button icon-cross"></div></dialog>',
link: function(scope, element, attrs, ctrl, transcludeFn) {
var transcludeScope = {};
scope.isOpen = function() {
return element[0].open;
};
transcludeFn(element.scope().$new(), function(a, b) {
element.append(a);
transcludeScope = b;
});
element.click(function(event) {
event.stopPropagation();
if (event.offsetX < 0 || event.offsetX > element[0].offsetWidth || event.offsetY < 0 || event.offsetY > element[0].offsetHeight)
if (!scope.classCheck)
scope.onClickClose();
else {
var classes = scope.classCheck.split(",");
var found = false;
for (var i = 0; i < classes.length; i++)
if (angular.element(event.target).closest(classes[i]).length > 0)
found = true;
if (!found)
scope.onClickClose();
}
});
scope.show = function() {
var d = element[0];
if (!d.showModal || true) {
dialogPolyfill.registerDialog(d);
d.setDisableAutoFocus(scope.disableAutoFocus);
}
if (scope.modal)
d.showModal();
else
d.show();
if(!angular.element(d).hasClass('sn-alert')) {
$timeout(function() {
if (d.dialogPolyfillInfo && d.dialogPolyfillInfo.backdrop) {
angular.element(d.dialogPolyfillInfo.backdrop).one('click', function(event) {
if (!scope.classCheck || angular.element(event.srcElement).closest(scope.classCheck).length == 0)
scope.onClickClose();
})
}
else {
$document.on('click', function(event) {
if (!scope.classCheck || angular.element(event.srcElement).closest(scope.classCheck).length == 0)
scope.onClickClose();
})
}
});
}
element.find('.btn-primary').eq(0).focus();
};
scope.setPosition = function(data) {
var contextData = scope.getContextData(data);
if (contextData && element && element[0]) {
if (contextData.position) {
element[0].style.top = contextData.position.top + "px";
element[0].style.left = contextData.position.left + "px";
element[0].style.margin = "0px";
}
if (contextData.dimensions) {
element[0].style.width = contextData.dimensions.width + "px";
element[0].style.height = contextData.dimensions.height + "px";
}
}
}
scope.$on("dialog." + attrs.name + ".move", function(event, data) {
scope.setPosition(data);
})
scope.$on("dialog." + attrs.name + ".show", function(event, data) {
scope.setPosition(data);
scope.setKeyEvents(data);
if (scope.isOpen() === true)
scope.close();
else
scope.show();
angular.element(".sn-dialog-menu").each(function(index, value) {
var name = angular.element(this).attr('name');
if(name != attrs.name && !angular.element(this).attr('open')) {
return true;
}
if(name != attrs.name  && angular.element(this).attr('open')) {
$rootScope.$broadcast("dialog." + name + ".close");
}
});
})
scope.onClickClose = function() {
if (scope.isOpen())
$rootScope.$broadcast("dialog." + attrs.name + ".close");
}
scope.escape = function($event) {
if ($event.keyCode === 27) {
scope.onClickClose();
}
};
scope.close = function() {
var d = element[0];
d.close();
scope.removeListeners();
}
scope.ok = function(contextData) {
contextData.ok();
scope.removeListeners();
}
scope.cancel = function(contextData) {
contextData.cancel();
scope.removeListeners();
}
scope.removeListeners = function() {
element[0].removeEventListener("ok", scope.handleContextOk, false);
element[0].removeEventListener("cancel", scope.handleContextCancel, false);
}
scope.setKeyEvents = function(data) {
var contextData = scope.getContextData(data);
if (contextData && contextData.cancel) {
scope.handleContextOk = function() {
scope.ok(contextData);
}
scope.handleContextCancel = function() {
scope.cancel(contextData);
}
element[0].addEventListener("ok", scope.handleContextOk, false);
element[0].addEventListener("cancel", scope.handleContextCancel, false);
}
}
scope.getContextData = function(data) {
var context = attrs.context;
var contextData = null;
if (context && data && context in data) {
contextData = data[context];
transcludeScope[context] = contextData;
}
return contextData;
}
scope.$on("dialog." + attrs.name + ".close", scope.close);
}
}
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snFlyout.js */
angular.module('sn.common.ui').directive('snFlyout', function(getTemplateUrl) {
'use strict';
return {
restrict: 'E',
transclude: true,
replace: 'true',
templateUrl: getTemplateUrl('sn_flyout.xml'),
scope: true,
link: function($scope, element, attrs) {
$scope.open = false;
$scope.more = false;
$scope.position = attrs.position || 'left';
$scope.flyoutControl = attrs.control;
$scope.register = attrs.register;
var body = angular.element('.flyout-body', element);
var header = angular.element('.flyout-header', element);
var tabs = angular.element('.flyout-tabs', element);
var distance = 0;
var position = $scope.position;
var options = {duration: 800, easing: 'easeOutBounce'}
var animation = {};
if ($scope.flyoutControl) {
$('.flyout-handle', element).hide();
var controls = angular.element('#' + $scope.flyoutControl);
controls.click(function() { angular.element(this).trigger("snFlyout.open"); });
controls.on('snFlyout.open', function() {
$scope.$apply(function() { $scope.open = !$scope.open; });
});
}
var animate = function() {
element.velocity(animation, options);
}
var setup = function() {
animation[position] = -distance;
if ($scope.open)
element.css(position, 0);
else
element.css(position, -distance);
}
var calculatePosition = function() {
if ($scope.open) {
animation[position] = 0;
} else {
if ($scope.position === 'left' || $scope.position === 'right')
animation[position] = -body.outerWidth();
else
animation[position] = -body.outerHeight();
}
}
$scope.$watch('open', function(newValue, oldValue) {
if(newValue === oldValue)
return;
calculatePosition();
animate();
});
$scope.$watch('more', function(newValue, oldValue) {
if (newValue === oldValue)
return;
var moreAnimation = {};
if ($scope.more) {
element.addClass('fly-double');
moreAnimation = {width: body.outerWidth() * 2};
}
else {
element.removeClass('fly-double');
moreAnimation = {width: body.outerWidth() / 2};
}
body.velocity(moreAnimation, options);
header.velocity(moreAnimation, options);
});
if ($scope.position === 'left' || $scope.position === 'right') {
$scope.$watch(element[0].offsetWidth, function() {
element.addClass('fly-from-' + $scope.position);
distance = body.outerWidth();
setup();
});
} else if ($scope.position === 'top' || $scope.position === 'bottom') {
$scope.$watch(element[0].offsetWidth, function() {
element.addClass('fly-from-' + $scope.position);
distance = body.outerHeight() + header.outerHeight();
setup();
});
}
$scope.$on($scope.register + ".bounceTabByIndex", function(event, index) {
$scope.bounceTab(index);
});
$scope.$on($scope.register + ".bounceTab", function(event, tab) {
$scope.bounceTab($scope.tabs.indexOf(tab));
});
$scope.$on($scope.register + ".selectTabByIndex", function(event, index) {
$scope.selectTab($scope.tabs[index]);
});
$scope.$on($scope.register + ".selectTab", function(event, tab) {
$scope.selectTab(tab);
});
},
controller: function($scope, $element) {
$scope.tabs = [];
var baseColor, highLightColor;
$scope.selectTab = function(tab) {
if ($scope.selectedTab)
$scope.selectedTab.selected = false;
tab.selected = true;
$scope.selectedTab = tab;
normalizeTab($scope.tabs.indexOf(tab));
}
function expandTab(tabElem) {
tabElem.queue("tabBounce", function(next) {
tabElem.velocity({
width: ["2.5rem", "2.125rem"],
backgroundColorRed: [highLightColor[0], baseColor[0]],
backgroundColorGreen: [highLightColor[1], baseColor[1]],
backgroundColorBlue: [highLightColor[2], baseColor[2]]
},{
easing: "easeInExpo",
duration: 250
});
next();
});
}
function contractTab(tabElem) {
tabElem.queue("tabBounce", function(next) {
tabElem.velocity({
width: ["2.125rem","2.5rem"],
backgroundColorRed: [baseColor[0], highLightColor[0]],
backgroundColorGreen: [baseColor[1], highLightColor[1]],
backgroundColorBlue: [baseColor[2], highLightColor[2]]
},{
easing: "easeInExpo",
duration: 250
});
next();
});
}
$scope.bounceTab = function(index) {
if(index >= $scope.tabs.length || index < 0)
return;
var tabScope = $scope.tabs[index];
if(!tabScope.selected) {
var tabElem =  $element.find('.flyout-tab').eq(index);
if(!baseColor) {
baseColor = tabElem.css('backgroundColor').match(/[0-9]+/g);
for( var i = 0; i < baseColor.length; i++)
baseColor[i] = parseInt(baseColor[i], 10);
}
if(!highLightColor)
highLightColor = invertColor(baseColor);
if(tabScope.highlighted)
contractTab(tabElem);
for(var i = 0; i < 2; i++) {
expandTab(tabElem);
contractTab(tabElem);
}
expandTab(tabElem);
tabElem.dequeue("tabBounce");
tabScope.highlighted = true;
}
}
$scope.toggleOpen = function() {
$scope.open = !$scope.open;
}
this.addTab = function(tab) {
$scope.tabs.push(tab);
if($scope.tabs.length === 1)
$scope.selectTab(tab)
}
function normalizeTab(index) {
if(index < 0 || index >= $scope.tabs.length || !$scope.tabs[index].highlighted)
return;
var tabElem =  $element.find('.flyout-tab').eq(index);
tabElem.velocity({
width: ["2.125rem", "2.5rem"]
},{
easing: "easeInExpo",
duration: 250
});
tabElem.css('backgroundColor', '');
$scope.tabs[index].highlighted = false;
}
function invertColor(rgb) {
if(typeof rgb === "string")
var color = rgb.match(/[0-9]+/g);
else
var color = rgb.slice(0);
for(var i = 0; i < color.length; i++)
color[i] = 255 - parseInt(color[i], 10);
return color;
}
}
}
}).directive("snFlyoutTab", function() {
"use strict";
return {
restrict: "E",
require: "^snFlyout",
replace: true,
scope: true,
transclude: true,
template: "<div ng-show='selected' ng-transclude='' style='height: 100%'></div>",
link: function(scope, element, attrs, flyoutCtrl) {
flyoutCtrl.addTab(scope);
}
}
})
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snModal.js */
angular.module("sn.common.ui").directive("snModal", function($timeout, $rootScope) {
"use strict";
return {
restrict: "AE",
transclude: true,
scope: {},
replace: true,
template: '<div tabindex="-1" aria-hidden="true" class="modal" role="dialog"></div>',
link: function(scope, element, attrs, ctrl, transcludeFn) {
var transcludeScope = {};
transcludeFn(element.scope().$new(), function(a, b) {
element.append(a);
transcludeScope = b;
});
scope.$on("dialog." + attrs.name + ".show", function(event, data) {
if (!isOpen())
show(data);
});
scope.$on("dialog." + attrs.name + ".close", function() {
if (isOpen())
close();
});
function eventFn(eventName) {
return function (e) {
$rootScope.$broadcast("dialog." + attrs.name + "." + eventName, e);
}
}
var events = {
'shown.bs.modal'  : eventFn("opened"),
'hide.bs.modal'   : eventFn("hide"),
'hidden.bs.modal' : eventFn("closed")
};
function show(data) {
var context = attrs.context;
var contextData = null;
if (context && data && context in data) {
contextData = data[context];
transcludeScope[context] = contextData;
}
$timeout(function() {
angular.element('.sn-popover-basic').each(function () {
var $this = angular.element(this);
if (angular.element($this.attr('data-target')).is(':visible')) {
$this.popover('hide');
}
});
});
element.modal('show');
for (var event in events)
if(events.hasOwnProperty(event))
element.on(event, events[event]);
if (attrs.moveBackdrop == 'true')
moveBackdrop(element);
}
function close() {
element.modal('hide');
for (var event in events)
if(events.hasOwnProperty(event))
element.off(event, events[event]);
}
function isOpen() {
return element.hasClass('in');
}
function moveBackdrop(element) {
var backdrop = element.data('bs.modal').$backdrop;
if (!backdrop)
return;
element.after(backdrop.remove());
}
}
}
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snModalShow.js */
angular.module('sn.common.ui').directive('snModalShow', function() {
"use strict";
return {
restrict: 'A',
link: function(scope, element, attrs) {
element.click(function() {
showDialog();
});
function showDialog() {
scope.$broadcast('dialog.' + attrs.snModalShow + '.show');
}
if (window.SingletonKeyboardRegistry) {
SingletonKeyboardRegistry.getInstance().bind('ctrl + alt + i', function () {
scope.$broadcast('dialog.impersonate.show');
}).selector(null, true);
}
}
}
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snTabs.js */
angular.module('sn.common.ui').directive('snTabs', function() {
'use strict';
return {
restrict: 'E',
transclude: true,
replace: 'true',
scope: {
tabData: '='
},
link: function($scope, element, attrs) {
$scope.tabClass = attrs.tabClass;
$scope.register = attrs.register;
attrs.$observe('register', function(value) {
$scope.register = value;
$scope.setupListeners();
});
$scope.bounceTab = function() {
angular.element()
}
},
controller: 'snTabs'
}
}).controller('snTabs', function($scope, $rootScope) {
$scope.selectedTabIndex = 0;
$scope.tabData[$scope.selectedTabIndex].selected = true;
$scope.setupListeners = function() {
$scope.$on($scope.register + '.selectTabByIndex', function(event, index) {
$scope.selectTabByIndex(event, index);
});
}
$scope.selectTabByIndex = function(event, index) {
if (index === $scope.selectedTabIndex)
return;
if (event.stopPropagation)
event.stopPropagation();
$scope.tabData[$scope.selectedTabIndex].selected = false;
$scope.tabData[index].selected = true;
$scope.selectedTabIndex = index;
$rootScope.$broadcast($scope.register + '.selectTabByIndex', $scope.selectedTabIndex);
}
}).directive('snTab', function() {
'use strict';
return {
restrict: 'E',
transclude: true,
replace: 'true',
scope: {
tabData: '=',
index: '='
},
template: '',
controller: 'snTab',
link: function($scope, element, attrs) {
$scope.register = attrs.register;
attrs.$observe('register', function(value) {
$scope.register = value;
$scope.setupListeners();
});
$scope.bounceTab = function() {
alert('Bounce Tab at Index: ' + $scope.index);
}
}
}
}).controller('snTab', function($scope) {
$scope.selectTabByIndex = function(index) {
$scope.$emit($scope.register + '.selectTabByIndex', index);
}
$scope.setupListeners = function() {
$scope.$on($scope.register + '.showTabActivity', function(event, index, type) {
$scope.showTabActivity(index, type);
});
}
$scope.showTabActivity = function(index, type) {
if ($scope.index !== index)
return;
switch (type) {
case 'message':
break;
case 'error':
break;
default:
$scope.bounceTab();
}
}
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snTextExpander.js */
angular.module('sn.common.ui').directive('snTextExpander', function(getTemplateUrl, $timeout) {
'use strict';
return {
restrict: 'E',
replace: true,
templateUrl: getTemplateUrl('sn_text_expander.xml'),
scope: {
maxHeight: '&',
value: '='
},
link: function compile(scope, element, attrs) {
var container = angular.element(element).find('.textblock-content-container');
var content = angular.element(element).find('.textblock-content');
if (scope.maxHeight() === undefined) {
scope.maxHeight = function () {
return 100;
}
}
container.css('overflow-y', 'hidden');
container.css('max-height', scope.maxHeight() + 'px');
},
controller: function ($scope, $element) {
var container = $element.find('.textblock-content-container');
var content = $element.find('.textblock-content');
$scope.value = $scope.value || '';
$scope.toggleExpand = function () {
$scope.showMore = !$scope.showMore;
if ($scope.showMore) {
container.css('max-height', content.height());
} else {
container.css('max-height', $scope.maxHeight());
}
};
$timeout(function () {
if (content.height() > $scope.maxHeight()) {
$scope.showToggle = true;
$scope.showMore = false;
}
});
}
};
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snAttachmentPreview.js */
angular.module('sn.common.ui').directive('snAttachmentPreview', function(getTemplateUrl, snCustomEvent) {
return {
restrict: 'E',
templateUrl: getTemplateUrl('sn_attachment_preview.xml'),
controller: function($scope) {
snCustomEvent.observe('sn.attachment.preview', function(evt, attachment) {
if (evt.stopPropagation)
evt.stopPropagation();
if (evt.preventDefault)
evt.preventDefault();
$scope.image = attachment;
$scope.$broadcast('dialog.attachment_preview.show');
return false;
});
}
}
});
;
/*! RESOURCE: /scripts/sn/common/ui/service.progressDialog.js */
angular.module('sn.common.ui').factory('progressDialog', ['$rootScope', '$compile', '$timeout', '$http', '$templateCache', 'nowServer', 'i18n', function($rootScope, $compile, $timeout, $http, $templateCache, nowServer, i18n) {
'use strict';
i18n.getMessages(['Close']);
return {
STATES : ["Pending", "Running", "Succeeded", "Failed", "Cancelled" ],
STATUS_IMAGES : ["images/workflow_skipped.gif", "images/loading_anim2.gifx",
"images/progress_success.png", "images/progress_failure.png",
'images/request_cancelled.gif' ],
EXPAND_IMAGE : "images/icons/filter_hide.gif",
COLLAPSE_IMAGE : "images/icons/filter_reveal.gif",
BACK_IMAGE : "images/activity_filter_off.gif",
TIMEOUT_INTERVAL : 750,
_findChildMessage: function( statusObject ) {
if ( !statusObject.children ) return null;
for ( var i = 0; i < statusObject.children.length; i++ ) {
var child = statusObject.children[i];
if ( child.state == '1' ) {
var msg = child.message;
var submsg = this._findChildMessage( child );
if ( submsg == null )
return msg;
else
return null;
} else if ( child.state == '0' ) {
return null;
} else {
}
}
return null;
},
create: function(scope, elemid, title, startCallback, endCallback, closeCallback) {
var namespace = this;
var progressItem = scope.$new(true);
progressItem.id = elemid + "_progressDialog";
progressItem.overlayVisible = true;
progressItem.state = 0;
progressItem.message = '';
progressItem.percentComplete = 0;
progressItem.enableChildMessages = false;
if (!title) title = '';
progressItem.title = title;
progressItem.button_close = i18n.getMessage('Close');
var overlayElement;
overlayElement = $compile(
'<div id="{{id}}" ng-show="overlayVisible" class="modal modal-mask" role="dialog" tabindex="-1">' +
'<div class="modal-dialog m_progress_overlay_content">' +
'<div class="modal-content">' +
'<header class="modal-header">' +
'<h4 class="modal-title">{{title}}</h4>' +
'</header>' +
'<div class="modal-body">' +
'<div class="progress" ng-class="{\'progress-danger\': (state == 3)}">' +
'<div class="progress-bar" ng-class="{\'progress-bar-danger\': (state == 3)}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="{{percentComplete}}" ng-style="{width: percentComplete + \'%\'}">' +
'</div>' +
'</div>' +
'<div>{{message}}<span style="float: right;" ng-show="state==1 || state == 2">{{percentComplete}}%</span></div>' +
'</div>' +
'<footer class="modal-footer">' +
'<button class="btn btn-default sn-button sn-button-normal" ng-click="close()" ng-show="state > 1">{{button_close}}</button>' +
'</footer>' +
'</div>' +
'</div>' +
'</div>')(progressItem);
$("body")[0].appendChild(overlayElement[0]);
progressItem.setEnableChildMessages = function( enableChildren ) {
progressItem.enableChildMessages = enableChildren;
}
progressItem.start = function( src, dataArray ) {
$http.post(src, dataArray).success(function(response) {
progressItem.trackerId = response.sys_id;
try { if ( startCallback ) startCallback(response); } catch(e) { }
$timeout(progressItem.checkProgress.bind(progressItem));
})
.error(function(response, status, headers, config) {
progressItem.state = '3';
if (endCallback) endCallback( response );
});
};
progressItem.checkProgress = function() {
var src = nowServer.getURL('progress_status', {sysparm_execution_id: this.trackerId});
$http.post(src).success(function(response) {
if ( $.isEmptyObject(response) ) {
progressItem.state = '3';
if (endCallback) endCallback( response );
return;
}
progressItem.update( response );
if (response.status == 'error' || response.state == '') {
progressItem.state = '3';
if ( response.message )
progressItem.message = response.message;
else
progressItem.message = response;
if (endCallback) endCallback( response );
return;
}
if ( response.state == '0' || response.state == '1' ) {
$timeout(progressItem.checkProgress.bind(progressItem), namespace.TIMEOUT_INTERVAL);
} else {
if (endCallback) endCallback( response );
}
})
.error(function(response, status, headers, config) {
progressItem.state = '3';
progressItem.message = response;
if (endCallback) endCallback( response );
});
};
progressItem.update = function( statusObject ) {
var msg = statusObject.message;
if ( progressItem.enableChildMessages ) {
var childMsg = namespace._findChildMessage( statusObject );
if ( childMsg != null )
msg = childMsg;
}
this.message = msg;
this.state = statusObject.state;
this.percentComplete = statusObject.percent_complete;
};
progressItem.close = function(ev) {
try { if (closeCallback) closeCallback(); } catch(e) { }
$("body")[0].removeChild($("#" + this.id)[0]);
delete namespace.progressItem;
};
return progressItem;
}
}
}]);
;
/*! RESOURCE: /scripts/sn/common/ui/factory.paneManager.js */
angular.module("sn.common.ui").factory("paneManager", ['$timeout', 'userPreferences', 'snCustomEvent', function($timeout, userPreferences, snCustomEvent) {
"use strict";
var paneIndex = {};
function registerPane(paneName) {
if (!paneName in paneIndex) {
paneIndex[paneName] = false;
}
userPreferences.getPreference(paneName + '.opened').then(function(value) {
var isOpen = value !== 'false';
if (isOpen) {
togglePane(paneName, false);
}
});
}
function togglePane(paneName, autoFocusPane) {
for (var currentPane in paneIndex) {
if (paneName != currentPane && paneIndex[currentPane]) {
CustomEvent.fireTop(currentPane + '.toggle');
saveState(currentPane, false);
}
}
snCustomEvent.fireTop(paneName + '.toggle', false, autoFocusPane);
saveState(paneName, !paneIndex[paneName]);
};
function saveState(paneName, state) {
paneIndex[paneName] = state;
userPreferences.setPreference(paneName + '.opened', state);
}
return {
registerPane : registerPane,
togglePane : togglePane
};
}]);
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snBootstrapPopover.js */
angular.module('sn.common.ui').directive('snBootstrapPopover', function ($timeout, $compile, $rootScope) {
'use strict';
return {
restrict: 'A',
link: function (scope, element) {
element.on('click.snBootstrapPopover', function (event) {
$rootScope.$broadcast('sn-bootstrap-popover.close-other-popovers');
createPopover(event);
});
element.on('keypress.snBootstrapPopover', function (event) {
if (event.keyCode != 13 && event.keyCode != 32)
return;
if (event.keyCode ===  32 ) {
event.preventDefault();
}
scope.$broadcast('sn-bootstrap-popover.close-other-popovers');
createPopover(event);
});
var popoverOpen = false;
function _hidePopover() {
popoverOpen = false;
var api = element.data('bs.popover');
if (api) {
api.hide();
element.off('.popover').removeData('bs.popover');
element.data('bs.popover', void(0));
element.focus();
}
}
function _openPopover() {
$timeout(function () {
popoverOpen = true;
element.on('hidden.bs.popover', function () {
_hidePopover();
popoverOpen = false;
});
element.popover('show');
var popoverBody = angular.element(document.getElementById('sn-bootstrap-popover'));
popoverBody.focus();
popoverBody.on('keydown', function (e) {
if (e.keyCode === 27) {
popoverBody.off('keydown');
_hidePopover();
}
});
}, 0, false);
}
function createPopover (evt) {
angular.element('.popover').each(function () {
var object = angular.element(this);
if (!object.is(evt.target) && object.has(evt.target).length === 0 && angular.element('.popover').has(evt.target).length === 0) {
_hidePopover();
object.popover('hide');
}
});
if (scope.disablePopover || evt.keyCode === 9)
return;
if (popoverOpen) {
_hidePopover();
return;
}
var childScope = scope.$new();
evt.stopPropagation();
element.attr('data-toggle', 'popover');
element.attr('data-trigger','focus');
element.attr('tabindex',0);
angular.element(element).popover({
container: 'body',
placement: 'auto top',
html: true,
trigger: 'manual',
content: $compile(scope.template)(childScope)
});
var wait = element.attr('popover-wait-event');
if (wait)
scope.$on(wait, _openPopover);
else
_openPopover();
var bodyClickEvent = angular.element('body').on('click.snBootstrapPopover.body', function (evt) {
angular.element('.popover').each(function () {
var object = angular.element(this);
if (!object.is(evt.target) && object.has(evt.target).length === 0 && angular.element('.popover').has(evt.target).length === 0) {
bodyClickEvent.off();
_hidePopover();
childScope.$destroy();
}
})
});
element.on('$destroy', function () {
bodyClickEvent.off();
_hidePopover();
childScope.$destroy();
})
};
}
}
});
;
/*! RESOURCE: /scripts/sn/common/ui/directive.snFocusEsc.js */
angular.module('sn.common.ui').directive('snFocusEsc', function($document) {
'use strict';
return {
restrict: 'A',
scope: false,
link: function (scope, element, attrs) {
$document.on('keyup', function($event) {
if ($event.keyCode === 27 ) {
var focusedElement = $event.target;
if (focusedElement && element[0].contains(focusedElement)) {
scope.$eval(attrs.snFocusEsc);
}
}
});
}
};
});
;
;
/*! RESOURCE: /scripts/sn/common/stream/js_includes_stream.js */
/*! RESOURCE: /scripts/thirdparty/ment.io/mentio.js */
(function() {
'use strict';
angular.module('mentio', [])
.directive('mentio', ['mentioUtil', '$document', '$compile', '$log', '$timeout',
function (mentioUtil, $document, $compile, $log, $timeout) {
return {
restrict: 'A',
scope: {
macros: '=mentioMacros',
search: '&mentioSearch',
select: '&mentioSelect',
items: '=mentioItems',
typedTerm: '=mentioTypedTerm',
altId: '=mentioId',
iframeElement: '=mentioIframeElement',
requireLeadingSpace: '=mentioRequireLeadingSpace',
suppressTrailingSpace: '=mentioSuppressTrailingSpace',
selectNotFound: '=mentioSelectNotFound',
trimTerm: '=mentioTrimTerm',
ngModel: '='
},
controller: ["$scope", "$timeout", "$attrs", function($scope, $timeout, $attrs) {
$scope.query = function (triggerChar, triggerText) {
var remoteScope = $scope.triggerCharMap[triggerChar];
if ($scope.trimTerm === undefined || $scope.trimTerm) {
triggerText = triggerText.trim();
}
remoteScope.showMenu();
remoteScope.search({
term: triggerText
});
remoteScope.typedTerm = triggerText;
};
$scope.defaultSearch = function(locals) {
var results = [];
angular.forEach($scope.items, function(item) {
if (item.label.toUpperCase().indexOf(locals.term.toUpperCase()) >= 0) {
results.push(item);
}
});
$scope.localItems = results;
};
$scope.bridgeSearch = function(termString) {
var searchFn = $attrs.mentioSearch ? $scope.search : $scope.defaultSearch;
searchFn({
term: termString
});
};
$scope.defaultSelect = function(locals) {
return $scope.defaultTriggerChar + locals.item.label;
};
$scope.bridgeSelect = function(itemVar) {
var selectFn = $attrs.mentioSelect ? $scope.select : $scope.defaultSelect;
return selectFn({
item: itemVar
});
};
$scope.setTriggerText = function(text) {
if ($scope.syncTriggerText) {
$scope.typedTerm = ($scope.trimTerm === undefined || $scope.trimTerm) ? text.trim() : text;
}
};
$scope.context = function() {
if ($scope.iframeElement) {
return {iframe: $scope.iframeElement};
}
};
$scope.replaceText = function (text, hasTrailingSpace) {
$scope.hideAll();
mentioUtil.replaceTriggerText($scope.context(), $scope.targetElement, $scope.targetElementPath,
$scope.targetElementSelectedOffset, $scope.triggerCharSet, text, $scope.requireLeadingSpace,
hasTrailingSpace, $scope.suppressTrailingSpace);
if (!hasTrailingSpace) {
$scope.setTriggerText('');
angular.element($scope.targetElement).triggerHandler('change');
if ($scope.isContentEditable()) {
$scope.contentEditableMenuPasted = true;
var timer = $timeout(function() {
$scope.contentEditableMenuPasted = false;
}, 200);
$scope.$on('$destroy', function() {
$timeout.cancel(timer);
});
}
}
};
$scope.hideAll = function () {
for (var key in $scope.triggerCharMap) {
if ($scope.triggerCharMap.hasOwnProperty(key)) {
$scope.triggerCharMap[key].hideMenu();
}
}
};
$scope.getActiveMenuScope = function () {
for (var key in $scope.triggerCharMap) {
if ($scope.triggerCharMap.hasOwnProperty(key)) {
if ($scope.triggerCharMap[key].visible) {
return $scope.triggerCharMap[key];
}
}
}
return null;
};
$scope.selectActive = function () {
for (var key in $scope.triggerCharMap) {
if ($scope.triggerCharMap.hasOwnProperty(key)) {
if ($scope.triggerCharMap[key].visible) {
$scope.triggerCharMap[key].selectActive();
}
}
}
};
$scope.isActive = function () {
for (var key in $scope.triggerCharMap) {
if ($scope.triggerCharMap.hasOwnProperty(key)) {
if ($scope.triggerCharMap[key].visible) {
return true;
}
}
}
return false;
};
$scope.isContentEditable = function() {
return ($scope.targetElement.nodeName !== 'INPUT' && $scope.targetElement.nodeName !== 'TEXTAREA');
};
$scope.replaceMacro = function(macro, hasTrailingSpace) {
if (!hasTrailingSpace) {
$scope.replacingMacro = true;
$scope.timer = $timeout(function() {
mentioUtil.replaceMacroText($scope.context(), $scope.targetElement,
$scope.targetElementPath, $scope.targetElementSelectedOffset,
$scope.macros, $scope.macros[macro]);
angular.element($scope.targetElement).triggerHandler('change');
$scope.replacingMacro = false;
}, 300);
$scope.$on('$destroy', function() {
$timeout.cancel($scope.timer);
});
} else {
mentioUtil.replaceMacroText($scope.context(), $scope.targetElement, $scope.targetElementPath,
$scope.targetElementSelectedOffset, $scope.macros, $scope.macros[macro]);
}
};
$scope.addMenu = function(menuScope) {
if (menuScope.parentScope && $scope.triggerCharMap.hasOwnProperty(menuScope.triggerChar)) {
return;
}
$scope.triggerCharMap[menuScope.triggerChar] = menuScope;
if ($scope.triggerCharSet === undefined) {
$scope.triggerCharSet = [];
}
$scope.triggerCharSet.push(menuScope.triggerChar);
menuScope.setParent($scope);
};
$scope.$on(
'menuCreated', function (event, data) {
if (
$attrs.id !== undefined ||
$attrs.mentioId !== undefined
)
{
if (
$attrs.id === data.targetElement ||
(
$attrs.mentioId !== undefined &&
$scope.altId === data.targetElement
)
)
{
$scope.addMenu(data.scope);
}
}
}
);
$document.on(
'click', function () {
if ($scope.isActive()) {
$scope.$apply(function () {
$scope.hideAll();
});
}
}
);
$document.on(
'keydown keypress paste', function (event) {
var activeMenuScope = $scope.getActiveMenuScope();
if (activeMenuScope) {
if (event.which === 9 || event.which === 13) {
event.preventDefault();
activeMenuScope.selectActive();
}
if (event.which === 27) {
event.preventDefault();
activeMenuScope.$apply(function () {
activeMenuScope.hideMenu();
});
}
if (event.which === 40) {
event.preventDefault();
activeMenuScope.$apply(function () {
activeMenuScope.activateNextItem();
});
activeMenuScope.adjustScroll(1);
}
if (event.which === 38) {
event.preventDefault();
activeMenuScope.$apply(function () {
activeMenuScope.activatePreviousItem();
});
activeMenuScope.adjustScroll(-1);
}
if (event.which === 37 || event.which === 39) {
event.preventDefault();
}
}
}
);
}],
link: function (scope, element, attrs, $timeout) {
scope.triggerCharMap = {};
scope.targetElement = element;
scope.scrollBarParents = element.parents().filter(function() {
var overflow = angular.element(this).css("overflow");
return this.scrollHeight > this.clientHeight && overflow !== "hidden" && overflow !== "visible";
});
scope.scrollPosition = null;
attrs.$set('autocomplete','off');
if (attrs.mentioItems) {
scope.localItems = [];
scope.parentScope = scope;
var itemsRef = attrs.mentioSearch ? ' mentio-items="items"' : ' mentio-items="localItems"';
scope.defaultTriggerChar = attrs.mentioTriggerChar ? scope.$eval(attrs.mentioTriggerChar) : '@';
var html = '<mentio-menu' +
' mentio-search="bridgeSearch(term)"' +
' mentio-select="bridgeSelect(item)"' +
itemsRef;
if (attrs.mentioTemplateUrl) {
html = html + ' mentio-template-url="' + attrs.mentioTemplateUrl + '"';
}
html = html + ' mentio-trigger-char="\'' + scope.defaultTriggerChar + '\'"' +
' mentio-parent-scope="parentScope"' +
'/>';
var linkFn = $compile(html);
var el = linkFn(scope);
element.parent().append(el);
scope.$on('$destroy', function() {
el.remove();
});
}
if (attrs.mentioTypedTerm) {
scope.syncTriggerText = true;
}
function keyHandler(event) {
function stopEvent(event) {
event.preventDefault();
event.stopPropagation();
event.stopImmediatePropagation();
}
var activeMenuScope = scope.getActiveMenuScope();
if (activeMenuScope) {
if (event.which === 9 || event.which === 13) {
stopEvent(event);
activeMenuScope.selectActive();
return false;
}
if (event.which === 27) {
stopEvent(event);
activeMenuScope.$apply(function () {
activeMenuScope.hideMenu();
});
return false;
}
if (event.which === 40) {
stopEvent(event);
activeMenuScope.$apply(function () {
activeMenuScope.activateNextItem();
});
activeMenuScope.adjustScroll(1);
return false;
}
if (event.which === 38) {
stopEvent(event);
activeMenuScope.$apply(function () {
activeMenuScope.activatePreviousItem();
});
activeMenuScope.adjustScroll(-1);
return false;
}
if (event.which === 37 || event.which === 39) {
stopEvent(event);
return false;
}
}
}
scope.$watch(
'iframeElement', function(newValue) {
if (newValue) {
var iframeDocument = newValue.contentWindow.document;
iframeDocument.addEventListener('click',
function () {
if (scope.isActive()) {
scope.$apply(function () {
scope.hideAll();
});
}
}
);
iframeDocument.addEventListener('keydown', keyHandler, true );
scope.$on ( '$destroy', function() {
iframeDocument.removeEventListener ( 'keydown', keyHandler );
});
}
}
);
scope.$watch(
'ngModel',
function (newValue) {
if ((!newValue || newValue === '') && !scope.isActive()) {
return;
}
if (scope.triggerCharSet === undefined) {
$log.warn('Error, no mentio-items attribute was provided, ' +
'and no separate mentio-menus were specified.  Nothing to do.');
return;
}
if (scope.contentEditableMenuPasted) {
scope.contentEditableMenuPasted = false;
return;
}
if (scope.replacingMacro) {
$timeout.cancel(scope.timer);
scope.replacingMacro = false;
}
var isActive = scope.isActive();
var isContentEditable = scope.isContentEditable();
var mentionInfo = mentioUtil.getTriggerInfo(scope.context(), scope.triggerCharSet,
scope.requireLeadingSpace, isActive);
if (mentionInfo !== undefined &&
(
!isActive ||
(isActive &&
(
(isContentEditable && mentionInfo.mentionTriggerChar ===
scope.currentMentionTriggerChar) ||
(!isContentEditable && mentionInfo.mentionPosition ===
scope.currentMentionPosition)
)
)
)
)
{
if (mentionInfo.mentionSelectedElement) {
scope.targetElement = mentionInfo.mentionSelectedElement;
scope.targetElementPath = mentionInfo.mentionSelectedPath;
scope.targetElementSelectedOffset = mentionInfo.mentionSelectedOffset;
}
scope.setTriggerText(mentionInfo.mentionText);
scope.currentMentionPosition = mentionInfo.mentionPosition;
scope.currentMentionTriggerChar = mentionInfo.mentionTriggerChar;
scope.query(mentionInfo.mentionTriggerChar, mentionInfo.mentionText);
} else {
var currentTypedTerm = scope.typedTerm;
scope.setTriggerText('');
scope.hideAll();
var macroMatchInfo = mentioUtil.getMacroMatch(scope.context(), scope.macros);
if (macroMatchInfo !== undefined) {
scope.targetElement = macroMatchInfo.macroSelectedElement;
scope.targetElementPath = macroMatchInfo.macroSelectedPath;
scope.targetElementSelectedOffset = macroMatchInfo.macroSelectedOffset;
scope.replaceMacro(macroMatchInfo.macroText, macroMatchInfo.macroHasTrailingSpace);
} else if (scope.selectNotFound && currentTypedTerm && currentTypedTerm !== '') {
var lastScope = scope.triggerCharMap[scope.currentMentionTriggerChar];
if (lastScope) {
var text = lastScope.select({
item: {label: currentTypedTerm}
});
if (typeof text.then === 'function') {
text.then(scope.replaceText);
} else {
scope.replaceText(text, true);
}
}
}
}
}
);
}
};
}])
.directive('mentioMenu', ['mentioUtil', '$rootScope', '$log', '$window', '$document', '$timeout',
function (mentioUtil, $rootScope, $log, $window, $document, $timeout) {
return {
restrict: 'E',
scope: {
search: '&mentioSearch',
select: '&mentioSelect',
items: '=mentioItems',
triggerChar: '=mentioTriggerChar',
forElem: '=mentioFor',
parentScope: '=mentioParentScope'
},
templateUrl: function(tElement, tAttrs) {
return tAttrs.mentioTemplateUrl !== undefined ? tAttrs.mentioTemplateUrl : 'mentio-menu.tpl.html';
},
controller: ["$scope", function ($scope) {
$scope.visible = false;
this.activate = $scope.activate = function (item) {
$scope.activeItem = item;
};
this.isActive = $scope.isActive = function (item) {
return $scope.activeItem === item;
};
this.selectItem = $scope.selectItem = function (item) {
if (item.termLengthIsZero) {
item.name = $scope.triggerChar + $scope.typedTerm
}
var text = $scope.select({
item: item
});
if (typeof text.then === 'function') {
text.then($scope.parentMentio.replaceText);
} else {
$scope.parentMentio.replaceText(text);
}
};
$scope.activateNextItem = function () {
var index = $scope.items.indexOf($scope.activeItem);
this.activate($scope.items[(index + 1) % $scope.items.length]);
};
$scope.activatePreviousItem = function () {
var index = $scope.items.indexOf($scope.activeItem);
this.activate($scope.items[index === 0 ? $scope.items.length - 1 : index - 1]);
};
$scope.isFirstItemActive = function () {
var index = $scope.items.indexOf($scope.activeItem);
return index === 0;
};
$scope.isLastItemActive = function () {
var index = $scope.items.indexOf($scope.activeItem);
return index === ($scope.items.length - 1);
};
$scope.selectActive = function () {
$scope.selectItem($scope.activeItem);
};
$scope.isVisible = function () {
return $scope.visible;
};
$scope.showMenu = function () {
if (!$scope.visible) {
$scope.menuElement.css("visibility", "visible");
$scope.requestVisiblePendingSearch = true;
}
};
$scope.setParent = function (scope) {
$scope.parentMentio = scope;
$scope.targetElement = scope.targetElement;
};
var scopeDuplicate = $scope;
$rootScope.$on('mentio.closeMenu', function () {
scopeDuplicate.hideMenu();
})
}],
link: function (scope, element) {
element[0].parentNode.removeChild(element[0]);
$document[0].body.appendChild(element[0]);
scope.menuElement = element;
scope.menuElement.css("visibility", "hidden");
if (scope.parentScope) {
scope.parentScope.addMenu(scope);
} else {
if (!scope.forElem) {
$log.error('mentio-menu requires a target element in tbe mentio-for attribute');
return;
}
if (!scope.triggerChar) {
$log.error('mentio-menu requires a trigger char');
return;
}
$rootScope.$broadcast('menuCreated',
{
targetElement : scope.forElem,
scope : scope
});
}
angular.element($window).bind(
'resize', function () {
if (scope.isVisible()) {
var triggerCharSet = [];
triggerCharSet.push(scope.triggerChar);
mentioUtil.popUnderMention(scope.parentMentio.context(),
triggerCharSet, element, scope.requireLeadingSpace);
}
}
);
scope.$watch('items', function (items) {
if (items && items.length > 0) {
scope.activate(items[0]);
if (!scope.visible && scope.requestVisiblePendingSearch) {
scope.visible = true;
scope.requestVisiblePendingSearch = false;
}
$timeout(function() {
var menu = element.find(".dropdown-menu");
if(menu.length > 0 && menu.offset().top < 0)
menu.addClass("reverse");
}, 0, false);
} else {
scope.activate({
termLengthIsZero: true
});
}
});
scope.$watch('isVisible()', function (visible) {
if (visible) {
var triggerCharSet = [];
triggerCharSet.push(scope.triggerChar);
mentioUtil.popUnderMention(scope.parentMentio.context(),
triggerCharSet, element, scope.requireLeadingSpace);
} else {
element.find(".dropdown-menu").removeClass("reverse");
}
});
var prevScroll;
scope.parentMentio.scrollBarParents.each(function() {
angular.element(this).on("scroll.mentio", function() {
if (!prevScroll)
prevScroll = this.scrollTop;
var scrollDiff = prevScroll - this.scrollTop;
prevScroll = this.scrollTop;
if (element[0].style["position"] === "absolute") {
element[0].style["z-index"] = 9;
element[0].style.top = (parseInt(element[0].style.top) + scrollDiff) + "px";
}
});
});
scope.parentMentio.$on('$destroy', function () {
element.remove();
});
scope.hideMenu = function () {
scope.visible = false;
element.css('display', 'none');
};
scope.adjustScroll = function (direction) {
var menuEl = element[0];
var menuItemsList = menuEl.querySelector('ul');
var menuItem = menuEl.querySelector('[mentio-menu-item].active');
if (scope.isFirstItemActive()) {
return menuItemsList.scrollTop = 0;
} else if(scope.isLastItemActive()) {
return menuItemsList.scrollTop = menuItemsList.scrollHeight;
}
if (direction === 1) {
menuItemsList.scrollTop += menuItem.offsetHeight;
} else {
menuItemsList.scrollTop -= menuItem.offsetHeight;
}
};
}
};
}])
.directive('mentioMenuItem', function () {
return {
restrict: 'A',
scope: {
item: '=mentioMenuItem'
},
require: '^mentioMenu',
link: function (scope, element, attrs, controller) {
scope.$watch(function () {
return controller.isActive(scope.item);
}, function (active) {
if (active) {
element.addClass('active');
} else {
element.removeClass('active');
}
});
element.bind('mouseenter', function () {
scope.$apply(function () {
controller.activate(scope.item);
});
});
element.bind('click', function () {
controller.selectItem(scope.item);
return false;
});
}
};
})
.filter('unsafe', ["$sce", function($sce) {
return function (val) {
return $sce.trustAsHtml(val);
};
}])
.filter('mentioHighlight', function() {
function escapeRegexp (queryToEscape) {
return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
return function (matchItem, query, hightlightClass) {
if (query) {
var replaceText = hightlightClass ?
'<span class="' + hightlightClass + '">$&</span>' :
'<strong>$&</strong>';
return ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), replaceText);
} else {
return matchItem;
}
};
});
'use strict';
angular.module('mentio')
.factory('mentioUtil', ["$window", "$location", "$anchorScroll", "$timeout", function ($window, $location, $anchorScroll, $timeout) {
function popUnderMention (ctx, triggerCharSet, selectionEl, requireLeadingSpace) {
var coordinates;
var mentionInfo = getTriggerInfo(ctx, triggerCharSet, requireLeadingSpace, false);
if (mentionInfo !== undefined) {
if (selectedElementIsTextAreaOrInput(ctx)) {
coordinates = getTextAreaOrInputUnderlinePosition(ctx, getDocument(ctx).activeElement,
mentionInfo.mentionPosition);
} else {
coordinates = getContentEditableCaretPosition(ctx, mentionInfo.mentionPosition);
}
selectionEl.css({
top: coordinates.top + 'px',
left: coordinates.left + 'px',
position: 'absolute',
zIndex: 5000,
display: 'block'
});
$timeout(function(){
scrollIntoView(ctx, selectionEl);
},0);
} else {
selectionEl.css({
display: 'none'
});
}
}
function scrollIntoView(ctx, elem)
{
var reasonableBuffer = 20;
var maxScrollDisplacement = 100;
var clientRect;
var e = elem[0];
while (clientRect === undefined || clientRect.height === 0) {
clientRect = e.getBoundingClientRect();
if (clientRect.height === 0) {
e = e.childNodes[0];
if (e === undefined || !e.getBoundingClientRect) {
return;
}
}
}
var elemTop = clientRect.top;
var elemBottom = elemTop + clientRect.height;
if(elemTop < 0) {
$window.scrollTo(0, $window.pageYOffset + clientRect.top - reasonableBuffer);
} else if (elemBottom > $window.innerHeight) {
var maxY = $window.pageYOffset + clientRect.top - reasonableBuffer;
if (maxY - $window.pageYOffset > maxScrollDisplacement) {
maxY = $window.pageYOffset + maxScrollDisplacement;
}
var targetY = $window.pageYOffset - ($window.innerHeight - elemBottom);
if (targetY > maxY) {
targetY = maxY;
}
$window.scrollTo(0, targetY);
}
}
function selectedElementIsTextAreaOrInput (ctx) {
var element = getDocument(ctx).activeElement;
if (element !== null) {
var nodeName = element.nodeName;
var type = element.getAttribute('type');
return (nodeName === 'INPUT' && type === 'text') || nodeName === 'TEXTAREA';
}
return false;
}
function selectElement (ctx, targetElement, path, offset) {
var range;
var elem = targetElement;
if (path) {
for (var i = 0; i < path.length; i++) {
elem = elem.childNodes[path[i]];
if (elem === undefined) {
return;
}
while (elem.length < offset) {
offset -= elem.length;
elem = elem.nextSibling;
}
if (elem.childNodes.length === 0 && !elem.length) {
elem = elem.previousSibling;
}
}
}
var sel = getWindowSelection(ctx);
range = getDocument(ctx).createRange();
range.setStart(elem, offset);
range.setEnd(elem, offset);
range.collapse(true);
try{sel.removeAllRanges();}catch(error){}
sel.addRange(range);
targetElement.focus();
}
function pasteHtml (ctx, html, startPos, endPos) {
var range, sel;
sel = getWindowSelection(ctx);
range = getDocument(ctx).createRange();
range.setStart(sel.anchorNode, startPos);
range.setEnd(sel.anchorNode, endPos);
range.deleteContents();
var el = getDocument(ctx).createElement('div');
el.innerHTML = html;
var frag = getDocument(ctx).createDocumentFragment(),
node, lastNode;
while ((node = el.firstChild)) {
lastNode = frag.appendChild(node);
}
range.insertNode(frag);
if (lastNode) {
range = range.cloneRange();
range.setStartAfter(lastNode);
range.collapse(true);
sel.removeAllRanges();
sel.addRange(range);
}
}
function resetSelection (ctx, targetElement, path, offset) {
var nodeName = targetElement.nodeName;
if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
if (targetElement !== getDocument(ctx).activeElement) {
targetElement.focus();
}
} else {
selectElement(ctx, targetElement, path, offset);
}
}
function replaceMacroText (ctx, targetElement, path, offset, macros, text) {
resetSelection(ctx, targetElement, path, offset);
var macroMatchInfo = getMacroMatch(ctx, macros);
if (macroMatchInfo.macroHasTrailingSpace) {
macroMatchInfo.macroText = macroMatchInfo.macroText + '\xA0';
text = text + '\xA0';
}
if (macroMatchInfo !== undefined) {
var element = getDocument(ctx).activeElement;
if (selectedElementIsTextAreaOrInput(ctx)) {
var startPos = macroMatchInfo.macroPosition;
var endPos = macroMatchInfo.macroPosition + macroMatchInfo.macroText.length;
element.value = element.value.substring(0, startPos) + text +
element.value.substring(endPos, element.value.length);
element.selectionStart = startPos + text.length;
element.selectionEnd = startPos + text.length;
} else {
pasteHtml(ctx, text, macroMatchInfo.macroPosition,
macroMatchInfo.macroPosition + macroMatchInfo.macroText.length);
}
}
}
function replaceTriggerText (ctx, targetElement, path, offset, triggerCharSet,
text, requireLeadingSpace, hasTrailingSpace, suppressTrailingSpace) {
resetSelection(ctx, targetElement, path, offset);
var mentionInfo = getTriggerInfo(ctx, triggerCharSet, requireLeadingSpace, true, hasTrailingSpace);
if (mentionInfo !== undefined) {
if (selectedElementIsTextAreaOrInput()) {
var myField = getDocument(ctx).activeElement;
if (!suppressTrailingSpace) {
text = text + ' ';
}
var startPos = mentionInfo.mentionPosition;
var endPos = mentionInfo.mentionPosition + mentionInfo.mentionText.length + 1;
myField.value = myField.value.substring(0, startPos) + text +
myField.value.substring(endPos, myField.value.length);
myField.selectionStart = startPos + text.length;
myField.selectionEnd = startPos + text.length;
} else {
if (!suppressTrailingSpace) {
text = text + '\xA0';
}
pasteHtml(ctx, text, mentionInfo.mentionPosition,
mentionInfo.mentionPosition + mentionInfo.mentionText.length + 1);
}
}
}
function getNodePositionInParent (ctx, elem) {
if (elem.parentNode === null) {
return 0;
}
for (var i = 0; i < elem.parentNode.childNodes.length; i++) {
var node = elem.parentNode.childNodes[i];
if (node === elem) {
return i;
}
}
}
function getMacroMatch (ctx, macros) {
var selected, path = [], offset;
if (selectedElementIsTextAreaOrInput(ctx)) {
selected = getDocument(ctx).activeElement;
} else {
var selectionInfo = getContentEditableSelectedPath(ctx);
if (selectionInfo) {
selected = selectionInfo.selected;
path = selectionInfo.path;
offset = selectionInfo.offset;
}
}
var effectiveRange = getTextPrecedingCurrentSelection(ctx);
if (effectiveRange !== undefined && effectiveRange !== null) {
var matchInfo;
var hasTrailingSpace = false;
if (effectiveRange.length > 0 &&
(effectiveRange.charAt(effectiveRange.length - 1) === '\xA0' ||
effectiveRange.charAt(effectiveRange.length - 1) === ' ')) {
hasTrailingSpace = true;
effectiveRange = effectiveRange.substring(0, effectiveRange.length-1);
}
angular.forEach(macros, function (macro, c) {
var idx = effectiveRange.toUpperCase().lastIndexOf(c.toUpperCase());
if (idx >= 0 && c.length + idx === effectiveRange.length) {
var prevCharPos = idx - 1;
if (idx === 0 || effectiveRange.charAt(prevCharPos) === '\xA0' ||
effectiveRange.charAt(prevCharPos) === ' ' ) {
matchInfo = {
macroPosition: idx,
macroText: c,
macroSelectedElement: selected,
macroSelectedPath: path,
macroSelectedOffset: offset,
macroHasTrailingSpace: hasTrailingSpace
};
}
}
});
if (matchInfo) {
return matchInfo;
}
}
}
function getContentEditableSelectedPath(ctx) {
var sel = getWindowSelection(ctx);
var selected = sel.anchorNode;
var path = [];
var offset;
if (selected != null) {
var i;
var ce = selected.contentEditable;
while (selected !== null && ce !== 'true') {
i = getNodePositionInParent(ctx, selected);
path.push(i);
selected = selected.parentNode;
if (selected !== null) {
ce = selected.contentEditable;
}
}
path.reverse();
offset = sel.getRangeAt(0).startOffset;
return {
selected: selected,
path: path,
offset: offset
};
}
}
function getTriggerInfo (ctx, triggerCharSet, requireLeadingSpace, menuAlreadyActive, hasTrailingSpace) {
var selected, path, offset;
if (selectedElementIsTextAreaOrInput(ctx)) {
selected = getDocument(ctx).activeElement;
} else {
var selectionInfo = getContentEditableSelectedPath(ctx);
if (selectionInfo) {
selected = selectionInfo.selected;
path = selectionInfo.path;
offset = selectionInfo.offset;
}
}
var effectiveRange = getTextPrecedingCurrentSelection(ctx);
if (effectiveRange !== undefined && effectiveRange !== null) {
var mostRecentTriggerCharPos = -1;
var triggerChar;
triggerCharSet.forEach(function(c) {
var idx = effectiveRange.lastIndexOf(c);
if (idx > mostRecentTriggerCharPos) {
mostRecentTriggerCharPos = idx;
triggerChar = c;
}
});
if (mostRecentTriggerCharPos >= 0 &&
(
mostRecentTriggerCharPos === 0 ||
!requireLeadingSpace ||
/[\xA0\s]/g.test
(
effectiveRange.substring(
mostRecentTriggerCharPos - 1,
mostRecentTriggerCharPos)
)
)
)
{
var currentTriggerSnippet = effectiveRange.substring(mostRecentTriggerCharPos + 1,
effectiveRange.length);
triggerChar = effectiveRange.substring(mostRecentTriggerCharPos, mostRecentTriggerCharPos+1);
var firstSnippetChar = currentTriggerSnippet.substring(0,1);
var leadingSpace = currentTriggerSnippet.length > 0 &&
(
firstSnippetChar === ' ' ||
firstSnippetChar === '\xA0'
);
if (hasTrailingSpace) {
currentTriggerSnippet = currentTriggerSnippet.trim();
}
if (!leadingSpace && (menuAlreadyActive || !(/[\xA0\s]/g.test(currentTriggerSnippet)))) {
return {
mentionPosition: mostRecentTriggerCharPos,
mentionText: currentTriggerSnippet,
mentionSelectedElement: selected,
mentionSelectedPath: path,
mentionSelectedOffset: offset,
mentionTriggerChar: triggerChar
};
}
}
}
}
function getWindowSelection(ctx) {
if (!ctx) {
return window.getSelection();
} else {
return ctx.iframe.contentWindow.getSelection();
}
}
function getDocument(ctx) {
if (!ctx) {
return document;
} else {
return ctx.iframe.contentWindow.document;
}
}
function getTextPrecedingCurrentSelection (ctx) {
var text;
if (selectedElementIsTextAreaOrInput(ctx)) {
var textComponent = getDocument(ctx).activeElement;
var startPos = textComponent.selectionStart;
text = textComponent.value.substring(0, startPos);
} else {
var selectedElem = getWindowSelection(ctx).anchorNode;
if (selectedElem != null) {
var workingNodeContent = selectedElem.textContent;
var selectStartOffset = getWindowSelection(ctx).getRangeAt(0).startOffset;
if (selectStartOffset >= 0) {
text = workingNodeContent.substring(0, selectStartOffset);
}
}
}
return text;
}
function getContentEditableCaretPosition (ctx, selectedNodePosition) {
var markerTextChar = '\ufeff';
var markerEl, markerId = 'sel_' + new Date().getTime() + '_' + Math.random().toString().substr(2);
var range;
var sel = getWindowSelection(ctx);
var prevRange = sel.getRangeAt(0);
range = getDocument(ctx).createRange();
range.setStart(sel.anchorNode, selectedNodePosition);
range.setEnd(sel.anchorNode, selectedNodePosition);
range.collapse(false);
markerEl = getDocument(ctx).createElement('span');
markerEl.id = markerId;
markerEl.appendChild(getDocument(ctx).createTextNode(markerTextChar));
range.insertNode(markerEl);
sel.removeAllRanges();
sel.addRange(prevRange);
var coordinates = {
left: 0,
top: markerEl.offsetHeight
};
localToGlobalCoordinates(ctx, markerEl, coordinates);
markerEl.parentNode.removeChild(markerEl);
return coordinates;
}
function localToGlobalCoordinates(ctx, element, coordinates) {
var obj = element;
var iframe = ctx ? ctx.iframe : null;
while(obj) {
coordinates.left += obj.offsetLeft;
coordinates.top += obj.offsetTop;
if (obj !== getDocument().body) {
coordinates.top -= obj.scrollTop;
coordinates.left -= obj.scrollLeft;
}
obj = obj.offsetParent;
if (!obj && iframe) {
obj = iframe;
iframe = null;
}
}
}
function getTextAreaOrInputUnderlinePosition (ctx, element, position) {
var properties = [
'direction',
'boxSizing',
'width',
'height',
'overflowX',
'overflowY',
'borderTopWidth',
'borderRightWidth',
'borderBottomWidth',
'borderLeftWidth',
'paddingTop',
'paddingRight',
'paddingBottom',
'paddingLeft',
'fontStyle',
'fontVariant',
'fontWeight',
'fontStretch',
'fontSize',
'fontSizeAdjust',
'lineHeight',
'fontFamily',
'textAlign',
'textTransform',
'textIndent',
'textDecoration',
'letterSpacing',
'wordSpacing'
];
var isFirefox = (window.mozInnerScreenX !== null);
var div = getDocument(ctx).createElement('div');
div.id = 'input-textarea-caret-position-mirror-div';
getDocument(ctx).body.appendChild(div);
var style = div.style;
var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
style.whiteSpace = 'pre-wrap';
if (element.nodeName !== 'INPUT') {
style.wordWrap = 'break-word';
}
style.position = 'absolute';
style.visibility = 'hidden';
properties.forEach(function (prop) {
style[prop] = computed[prop];
});
if (isFirefox) {
style.width = (parseInt(computed.width) - 2) + 'px';
if (element.scrollHeight > parseInt(computed.height))
style.overflowY = 'scroll';
} else {
style.overflow = 'hidden';
}
div.textContent = element.value.substring(0, position);
if (element.nodeName === 'INPUT') {
div.textContent = div.textContent.replace(/\s/g, '\u00a0');
}
var span = getDocument(ctx).createElement('span');
span.textContent = element.value.substring(position) || '.';
div.appendChild(span);
var coordinates = {
top: span.offsetTop + parseInt(computed.borderTopWidth) + parseInt(computed.fontSize),
left: span.offsetLeft + parseInt(computed.borderLeftWidth)
};
localToGlobalCoordinates(ctx, element, coordinates);
getDocument(ctx).body.removeChild(div);
return coordinates;
}
return {
popUnderMention: popUnderMention,
replaceMacroText: replaceMacroText,
replaceTriggerText: replaceTriggerText,
getMacroMatch: getMacroMatch,
getTriggerInfo: getTriggerInfo,
selectElement: selectElement,
getTextAreaOrInputUnderlinePosition: getTextAreaOrInputUnderlinePosition,
getTextPrecedingCurrentSelection: getTextPrecedingCurrentSelection,
getContentEditableSelectedPath: getContentEditableSelectedPath,
getNodePositionInParent: getNodePositionInParent,
getContentEditableCaretPosition: getContentEditableCaretPosition,
pasteHtml: pasteHtml,
resetSelection: resetSelection,
scrollIntoView: scrollIntoView
};
}]);
angular.module("mentio").run(["$templateCache", function($templateCache) {$templateCache.put("mentio-menu.tpl.html","<style>\n.scrollable-menu {\n    height: auto;\n    max-height: 300px;\n    overflow: auto;\n}\n\n.menu-highlighted {\n    font-weight: bold;\n}\n</style>\n<ul class=\"dropdown-menu scrollable-menu\" style=\"display:block\">\n    <li mentio-menu-item=\"item\" ng-repeat=\"item in items track by $index\">\n        <a class=\"text-primary\" ng-bind-html=\"item.label | mentioHighlight:typedTerm:\'menu-highlighted\' | unsafe\"></a>\n    </li>\n</ul>");}]);
})();
;
/*! RESOURCE: /scripts/sn/common/stream/_module.js */
(function() {
var moduleDeps = [ 'sn.base', 'ng.amb', 'sn.messaging', 'sn.common.glide', 'ngSanitize',
'sn.common.avatar', 'sn.common.ui.popover', 'mentio', 'sn.common.controls', 'sn.common.user_profile',
'sn.common.datetime', 'sn.common.mention', 'sn.common.ui'];
if (angular.version.major == 1 && angular.version.minor >= 3)
moduleDeps.push('ngAria');
angular.module("sn.common.stream", moduleDeps);
angular.module("sn.stream.direct", [ 'sn.common.stream']);
})();
;
/*! RESOURCE: /scripts/sn/common/stream/controller.Stream.js */
angular.module("sn.common.stream").controller("Stream", function($rootScope, $scope, snRecordWatcher, $timeout) {
var isForm = NOW.sysId.length > 0;
$scope.showCommentsAndWorkNotes = isForm;
$scope.sessions = {};
$scope.recordStreamOpen = false;
$scope.streamHidden = true;
$scope.recordSysId = '';
$scope.recordDisplayValue = '';
$scope.$on('record.updated', onRecordUpdated);
$rootScope.$on('sn.sessions', onSessions);
$timeout(function() {
if (isForm)
snRecordWatcher.initRecord(NOW.targetTable, NOW.sysId);
else
snRecordWatcher.initList(NOW.targetTable, NOW.tableQuery);
}, 100);
$scope.controls = {
showRecord : function($event, entry, sysId) {
if (sysId !== '')
return;
if ($event.currentTarget != $event.target && $event.target.tagName == 'A')
return;
$scope.recordSysId = entry.document_id;
$scope.recordDisplayValue = entry.display_value;
$scope.recordStreamOpen = true;
$scope.streamHidden = true;
},
openRecord : function() {
var targetFrame = window.self;
var url = NOW.targetTable + ".do?sys_id=" + $scope.recordSysId;
if (NOW.linkTarget == 'form_pane') {
url += "&sysparm_clear_stack=true";
window.parent.CustomEvent.fireTop(
"glide:nav_open_url", {
url : url,
openInForm : true
});
return;
}
if (NOW.streamLinkTarget == 'parent' || NOW.concourse == 'true')
targetFrame = window.parent;
targetFrame.location = url;
},
openAttachment : function(event, sysId) {
event.stopPropagation();
var url = "/sys_attachment.do?view=true&sys_id=" + sysId;
var newTab = window.open(url, '_blank');
newTab.focus();
}
};
$scope.sessionCount = function() {
$scope.sessions.length = Object.keys($scope.sessions.data).length;
return $scope.sessions.length;
};
function onSessions(name, sessions) {
$scope.sessions.data = sessions;
$scope.sessionCount();
}
function onRecordUpdated(name, data) {
}
$scope.showListStream = function () {
$scope.recordStreamOpen = false;
$scope.recordHidden = false;
$scope.streamHidden = false;
angular.element('div.list-stream-record').velocity('snTransition.streamSlideRight', {
duration: 400
});
angular.element('[streamType="list"]').velocity('snTransition.slideIn', {
duration: 400,
complete: function (element) {
angular.element(element).css({display: 'block'});
}
});
};
$scope.$watch(function () {
return angular.element('div.list-stream-record').length
}, function (newValue, oldValue) {
if (newValue == 1) {
angular.element('div.list-stream-record').delay(100).velocity('snTransition.streamSlideLeft', {
begin: function (element) {
angular.element(element).css({visibility: 'visible'});
angular.element('.list-stream-record-header').css({visibility: 'visible'});
},
duration: 400,
complete: function (element) {
angular.element(element).css({transform: "translateX(0)"});
angular.element(element).scrollTop(0);
angular.element(element).css({transform: "initial"});
angular.element('.return-to-stream').focus();
}
});
}
});
});
;
/*! RESOURCE: /scripts/sn/common/stream/controller.snStream.js */
angular.module("sn.common.stream").controller("snStream", function($rootScope, $scope, $attrs, $http, nowStream, snRecordPresence, snCustomEvent, userPreferences, $window, $q, $timeout, $sanitize, $sce, snMention, i18n, getTemplateUrl) {
"use strict";
if (angular.isDefined($attrs.isInline)) {
bindInlineStreamAttributes();
}
function bindInlineStreamAttributes() {
var streamAttributes = {};
if ($attrs.table) {
streamAttributes.table = $attrs.table;
}
if ($attrs.query) {
streamAttributes.query = $attrs.query;
}
if ($attrs.sysId) {
streamAttributes.sysId = $attrs.sysId;
}
if ($attrs.active) {
streamAttributes.active = ($attrs.active == "true");
}
if ($attrs.template) {
streamAttributes.template = $attrs.template;
}
if ($attrs.preferredInput) {
streamAttributes.preferredInput = $attrs.preferredInput;
}
if ($attrs.useMultipleInputs) {
streamAttributes.useMultipleInputs = ($attrs.useMultipleInputs == "true");
}
if ($attrs.expandEntries) {
streamAttributes.expandEntries = ($attrs.expandEntries == "true");
}
if ($attrs.pageSize) {
streamAttributes.pageSize = parseInt($attrs.pageSize, 10);
}
if ($attrs.truncate) {
streamAttributes.truncate = ($attrs.truncate == "true");
}
if ($attrs.attachments) {
streamAttributes.attachments = ($attrs.attachments == "true");
}
if ($attrs.showCommentsAndWorkNotes) {
streamAttributes.attachments = ($attrs.showCommentsAndWorkNotes == "true");
}
angular.extend($scope, streamAttributes)
}
var stream;
var processor = $attrs.processor || "list_history";
var interval;
var FROM_LIST = 'from_list';
var FROM_FORM = 'from_form';
var source = $scope.sysId ? FROM_FORM : FROM_LIST;
var _firstPoll = true;
var _firstPollTimeout;
var fieldsInitialized = false;
var primaryJournalFieldOrder = ["comments", "work_notes"];
var primaryJournalField = null;
$scope.defaultShowCommentsAndWorkNotes = ($scope.sysId != null && !angular.isUndefined($scope.sysId) && $scope.sysId.length > 0);
$scope.canWriteWorkNotes = false;
$scope.inputTypeValue = "";
$scope.entryTemplate = getTemplateUrl($attrs.template || "list_stream_entry");
$scope.isFormStream = $attrs.template === "record_stream_entry.xml";
$scope.allFields = null;
$scope.fields = {};
$scope.fieldColor = "transparent";
$scope.multipleInputs = $scope.useMultipleInputs;
$scope.checkbox = {};
var typing = '{0} is typing', viewing = '{0} is viewing', entered = '{0} has entered';
var probablyLeft = '{0} has probably left', exited = '{0} has exited', offline = '{0} is offline';
i18n.getMessages(
[
typing,
viewing,
entered,
probablyLeft,
exited,
offline
],
function (results) {
typing = results[typing];
viewing = results[viewing];
entered = results[entered];
probablyLeft = results[probablyLeft];
exited = results[exited];
offline = results[offline];
}
);
$scope.parsePresence = function (sessionData) {
var status = sessionData.status;
var name = sessionData.user_display_name;
switch (status) {
case 'typing':
return i18n.format(typing, name);
case 'viewing':
return i18n.format(viewing, name);
case 'entered':
return i18n.format(entered, name);
case 'probably left':
return i18n.format(probablyLeft, name);
case 'exited':
return i18n.format(exited, name);
case 'offline':
return i18n.format(offline, name);
default:
return '';
}
};
$scope.members = [];
$scope.members.loading = true;
var mentionMap = {};
$scope.selectAtMention = function(item) {
if(item.termLengthIsZero)
return (item.name || "") + "\n";
mentionMap[item.name] = item.sys_id;
return "@[" + item.name + "]";
};
var typingTimer;
$scope.searchMembersAsync = function(term) {
$scope.members = [];
$scope.members.loading = true;
$timeout.cancel(typingTimer);
if (term.length === 0) {
$scope.members = [{
termLengthIsZero: true
}];
$scope.members.loading = false;
} else {
typingTimer = $timeout(function() {
snMention.retrieveMembers($scope.table, $scope.sysId, term).then(function(members) {
$scope.members = members;
$scope.members.loading = false;
}, function () {
$scope.members = [{
termLengthIsZero: true
}];
$scope.members.loading = false;
});
}, 500);
}
};
$scope.expandMentions = function(text) {
return stream.expandMentions(text, mentionMap)
};
$scope.reduceMentions = function(text) {
if(!text)
return text;
var regexMentionParts = /[\w\d\s/\']+/gi;
text = text.replace(/@\[[\w\d\s]+:[\w\d\s/\']+\]/gi, function (mention) {
var mentionParts = mention.match(regexMentionParts);
if (mentionParts.length === 2) {
var name = mentionParts[1];
mentionMap[name] = mentionParts[0];
return "@[" + name + "]";
}
return mentionParts;
});
return text;
};
$scope.parseMentions = function(entry) {
var regexMentionParts = /[\w\d\s/\']+/gi;
entry = entry.replace(/@\[[\w\d\s]+:[\w\d\s/\']+\]/gi, function (mention) {
var mentionParts = mention.match(regexMentionParts);
if (mentionParts.length === 2) {
return '<a class="at-mention at-mention-user-' + mentionParts[0] + '">@' + mentionParts[1] + '</a>';
}
return mentionParts;
});
return entry;
};
$scope.parseLinks = function(text) {
var regexLinks = /@L\[([^|]+?)\|([^\]]*)]/gi;
return text.replace(regexLinks, "<a href='$1' target='_blank'>$2</a>");
};
$scope.parseSpecial = function(text) {
var parsedText = $scope.parseLinks($sanitize(text));
parsedText = $scope.parseMentions(parsedText);
return $sce.trustAsHtml(parsedText);
};
$scope.getFullEntryValue = function(entry, event) {
event.stopPropagation();
var index = getEntryIndex(entry);
var journal = $scope.entries[index].entries.journal[0];
journal.loading = true;
$http.get('/api/now/ui/stream_entry/full_entry', {
params: {
sysparm_sys_id: journal.sys_id
}
}).then(function (response) {
journal.new_value = response.data.result.replace(/\n/g, '<br/>');
journal.is_truncated = false;
journal.loading = false;
journal.showMore = true;
});
};
function getEntryIndex(entry) {
for (var i = 0, l = $scope.entries.length; i < l; i++) {
if (entry === $scope.entries[i]) {
return i;
}
}
}
$scope.$watch('active', function(n, o) {
if (n === o)
return;
if ($scope.active)
startPolling();
else
cancelStream();
});
$scope.defaultControls = {
getTitle: function(entry) {
if(entry && entry.short_description) {
return entry.short_description;
} else if(entry && entry.shortDescription) {
return entry.shortDescription;
}
},
showCreatedBy: function() {
return true;
},
hideCommentLabel: function() {
return false;
},
showRecord: function($event, entry) {
},
showRecordLink: function() {
return true;
}
};
if ($scope.controls) {
for (var attr in $scope.controls)
$scope.defaultControls[attr] = $scope.controls[attr];
}
$scope.controls = $scope.defaultControls;
if ($scope.showCommentsAndWorkNotes === undefined) {
$scope.showCommentsAndWorkNotes = $scope.defaultShowCommentsAndWorkNotes;
}
snCustomEvent.observe('sn.stream.change_input_display', function(table, display) {
if (table != $scope.table)
return;
$scope.showCommentsAndWorkNotes = display;
$scope.$apply();
});
$scope.$on("$destroy", function() {
cancelStream();
});
$scope.$on('sn.stream.interval', function($event, time) {
interval = time;
reschedulePoll();
});
$scope.$on("sn.stream.tap", function() {
if (stream)
stream.tap();
else
startPolling();
});
$scope.$on('window_visibility_change', function($event, hidden) {
interval = (hidden) ? 120000 : undefined;
reschedulePoll();
});
$scope.$on("sn.stream.refresh", function(event, data) {
stream._successCallback(data.response);
});
$scope.$on("sn.stream.reload", function() {
startPolling();
});
$scope.$on('sn.stream.input_value', function(otherScope, type, value) {
if(!$scope.multipleInputs) {
$scope.inputType = type;
$scope.inputTypeValue = value;
}
});
$scope.$watchCollection('[table, query, sysId]', startPolling);
$scope.changeInputType = function(field) {
if (!primaryJournalField){
angular.forEach($scope.fields, function(item) {
if (item.isPrimary)
primaryJournalField = item.name;
});
}
$scope.inputType = field.checked ? field.name : primaryJournalField;
userPreferences.setPreference('glide.ui.' + $scope.table + '.stream_input', $scope.inputType);
};
$scope.selectedInputType = function(value) {
if (angular.isDefined(value)) {
$scope.inputType = value;
userPreferences.setPreference('glide.ui.' + $scope.table + '.stream_input', $scope.inputType);
}
return $scope.inputType;
};
$scope.$watch('inputType', function() {
if (!$scope.inputType || !$scope.preferredInput)
return;
$scope.preferredInput = $scope.inputType;
});
$scope.submitCheck = function(event){
var key = event.keyCode || event.which;
if (key === 13) {
$scope.postJournalEntryForCurrent(event);
}
};
$scope.postJournalEntry = function(type, entry, event) {
type = type || primaryJournalFieldOrder[0];
event.stopPropagation();
var requestTable = $scope.table || "board:" + $scope.board.sys_id;
stream.insertForEntry(type, entry.journalText, requestTable, entry.document_id);
entry.journalText = "";
entry.commentBoxVisible = false;
snRecordPresence.termPresence();
};
$scope.postJournalEntryForCurrent = function(event) {
event.stopPropagation();
var entries = [];
if ($scope.multipleInputs) {
angular.forEach($scope.fields, function(item) {
if (!item.isActive || !item.value)
return;
entries.push({
field: item.name,
text: item.value
});
})
} else {
entries.push({
field: $scope.inputType,
text: $scope.inputTypeValue
})
}
var request = stream.insertEntries(entries, $scope.table, $scope.sysId, mentionMap);
if (request) {
request.then(function () {
for (var i = 0; i < entries.length; i++) {
fireInsertEvent(entries[i].field, entries[i].text);
}
});
}
clearInputs();
return false;
};
function fireInsertEvent(name, value) {
snCustomEvent.fire('sn.stream.insert', name, value);
}
function clearInputs() {
$scope.inputTypeValue = "";
angular.forEach($scope.fields, function(item) {
if (!item.isActive)
return;
if (item.value)
item.filled = true;
item.value = "";
});
}
$scope.showCommentBox = function(entry, event) {
event.stopPropagation();
if (entry !== $scope.selectedEntry)
$scope.closeEntry();
$scope.selectedEntry = entry;
entry.commentBoxVisible = !entry.commentBoxVisible;
if (entry.commentBoxVisible) {
snRecordPresence.initPresence($scope.table, entry.document_id);
}
};
$scope.showMore = function(journal, event) {
event.stopPropagation();
journal.showMore = true;
};
$scope.showLess = function(journal, event) {
event.stopPropagation();
journal.showMore = false;
};
$scope.closeEntry = function() {
if ($scope.selectedEntry)
$scope.selectedEntry.commentBoxVisible = false;
};
$scope.previewAttachment = function(evt, attachmentUrl) {
snCustomEvent.fire('sn.attachment.preview', evt, attachmentUrl);
};
$rootScope.$on('sn.sessions', function(someOtherScope, sessions) {
if ($scope.selectedEntry && $scope.selectedEntry.commentBoxVisible)
$scope.selectedEntry.sessions = sessions;
});
$scope.$watch("inputTypeValue", function(n, o) {
if (n !== o) {
emitTyping($scope.inputTypeValue);
}
});
$scope.$watch("selectedEntry.journalText", function(newValue) {
if ($scope.selectedEntry)
emitTyping(newValue || "");
});
$scope.$watch('useMultipleInputs', function() {
setMultipleInputs();
});
function emitTyping(inputValue) {
if (!angular.isDefined(inputValue)){
return;
}
var status = inputValue.length ? "typing" : "viewing";
$scope.$emit("record.typing", {status: status, value: inputValue, table: $scope.table, sys_id: $scope.sys_id});
}
function preloadedData() {
if (typeof window.NOW.snActivityStreamData === 'object'
&& window.NOW.snActivityStreamData[$scope.table + '_' + $scope.sysId]) {
_firstPoll = false;
var data = window.NOW.snActivityStreamData[$scope.table + '_' + $scope.sysId];
stream = nowStream.create($scope.table, $scope.query, $scope.sysId,
processor, interval, source, $scope.attachments);
stream.callback = onPoll;
stream.preRequestCallback = beforePoll;
stream.lastTimestamp = data.sys_timestamp;
if (data.entries && data.entries.length) {
stream.lastEntry = angular.copy(data.entries[0]);
}
_firstPollTimeout = setTimeout(function() {
stream.poll(onPoll, beforePoll);
_firstPollTimeout = false;
}, 20000);
beforePoll();
onPoll(data);
return true;
}
return false;
}
function scheduleNewPoll(lastTimestamp) {
cancelStream();
stream = nowStream.create($scope.table, $scope.query, $scope.sysId,
processor, interval, source, $scope.attachments);
stream.lastTimestamp = lastTimestamp;
stream.poll(onPoll, beforePoll);
}
function reschedulePoll() {
var lastTimestamp = stream ? stream.lastTimestamp : 0;
if (cancelStream()) {
scheduleNewPoll(lastTimestamp);
}
}
function reset() {
removeInlineStream();
$scope.loaded = false;
startPolling();
}
function emitFilterChange() {
$scope.$emit('sn.stream.is_filtered_change', $scope.isFiltered);
}
function startPolling() {
if ($scope.loading && !$scope.loaded)
return;
if (!$scope.active)
return;
$scope.entries = [];
$scope.allEntries = [];
$scope.showAllEntriesButton = false;
$scope.loaded = false;
$scope.loading = true;
if (_firstPoll && preloadedData()) {
return;
}
scheduleNewPoll();
$scope.$emit('sn.stream.entries_change', $scope.entries);
}
function onPoll(response) {
$scope.loading = false;
if (response.primary_fields)
primaryJournalFieldOrder = response.primary_fields;
if (!fieldsInitialized)
processFields(response.fields);
processEntries(response.entries);
if (response.inlineStreamLoaded) {
$scope.inlineStreamLoaded = true;
addInlineStreamEntryClass();
}
if (!$scope.loaded) {
$scope.loaded = true;
$scope.$emit("sn.stream.loaded", response);
}
}
function beforePoll() {
$scope.$emit("sn.stream.requested");
}
function processFields(fields) {
if(!fields || !fields.length)
return;
fieldsInitialized = true;
$scope.allFields = fields;
setShowAllFields();
$scope.fieldsVisible = 0;
var i = 0;
angular.forEach(fields, function(field) {
if (!field.isJournal)
return;
if (i==0)
$scope.firstJournal = field.name;
i++;
if ($scope.fields[field.name]) {
angular.extend($scope.fields[field.name], field);
} else {
$scope.fields[field.name] = field;
}
$scope.fields[field.name].visible = !$scope.formJournalFields;
if ($scope.fields[field.name].visible)
$scope.fieldsVisible++;
if ($scope.fieldsVisible > 1 && !$scope.fields[field.name].canWrite)
$scope.fieldsVisible--;
var fieldColor = field.color;
if (fieldColor)
fieldColor = field.color.replace(/background-color: /, '');
if (!fieldColor || fieldColor == 'transparent')
fieldColor = null;
$scope.fields[field.name].color = fieldColor;
});
setFieldVisibility();
setPrimaryJournalField();
setMultipleInputs();
}
$scope.$watch('formJournalFields', function() {
setFieldVisibility();
setPrimaryJournalField();
setMultipleInputs();
}, true);
function setFieldVisibility() {
if (!$scope.formJournalFields || !$scope.fields || !$scope.showCommentsAndWorkNotes)
return;
$scope.fieldsVisible = 0;
angular.forEach($scope.formJournalFields, function(formField) {
if (!$scope.fields[formField.name])
return;
$scope.fields[formField.name].value = formField.value;
$scope.fields[formField.name].mandatory = formField.mandatory;
$scope.fields[formField.name].label = formField.label;
$scope.fields[formField.name].messages = formField.messages;
$scope.fields[formField.name].visible = formField.visible && !formField.readonly;
if ($scope.fields[formField.name].visible)
$scope.fieldsVisible++;
});
}
$scope.getStubbedFieldModel = function(fieldName) {
if ($scope.fields[fieldName])
return $scope.fields[fieldName];
$scope.fields[fieldName] = {
name: fieldName
};
return $scope.fields[fieldName];
};
function setPrimaryJournalField() {
if (!$scope.fields || !$scope.showCommentsAndWorkNotes)
return;
angular.forEach($scope.fields, function(item) {
item.isPrimary = false;
});
var visibleFields = Object.keys($scope.fields).filter(function(item) {
return $scope.fields[item].visible;
});
if (visibleFields.indexOf($scope.preferredInput) != -1) {
var field = $scope.fields[$scope.preferredInput];
field.checked = true;
field.isPrimary = true;
$scope.inputType = $scope.preferredInput;
primaryJournalField = $scope.preferredInput;
} else {
for (var i = 0; i < primaryJournalFieldOrder.length; i++) {
var fieldName = primaryJournalFieldOrder[i];
if (visibleFields.indexOf(fieldName) != -1) {
$scope.fields[fieldName].isPrimary = true;
primaryJournalField = fieldName;
$scope.inputType = fieldName;
break;
}
}
}
if(visibleFields.length === 0) {
primaryJournalField = '';
$scope.inputType = primaryJournalField;
} else if (!$scope.inputType && visibleFields.length > 0) {
primaryJournalField = visibleFields[0];
$scope.inputType = primaryJournalField;
$scope.fields[primaryJournalField].isPrimary = true;
}
if ($scope.fields && visibleFields.indexOf(primaryJournalField) == -1) {
var keys = Object.keys($scope.fields);
if (keys.length)
$scope.fields[keys[0]].isPrimary = true;
}
}
function setShowAllFields() {
$scope.checkbox.showAllFields = $scope.showAllFields = $scope.allFields && !$scope.allFields.some(function(item) {
return !item.isActive;
});
$scope.hideAllFields = !$scope.allFields || !$scope.allFields.some(function(item) {
return item.isActive;
});
$scope.isFiltered = !$scope.showAllFields || $scope.allFields.some(function(item) {
return !item.isActive;
});
}
$scope.setPrimary = function(entry) {
angular.forEach($scope.fields, function(item) {
item.checked = false;
});
for (var i = 0; i < primaryJournalFieldOrder.length; i++) {
var fieldName = primaryJournalFieldOrder[i];
if (entry.writable_journal_fields.indexOf(fieldName) != -1) {
entry.primaryJournalField = fieldName;
entry.inputType = fieldName;
return;
}
}
if (!entry.inputType) {
var primaryField = entry.writable_journal_fields[0];
entry.primaryJournalField = primaryField;
entry.inputType = primaryField;
}
};
$scope.updateFieldVisibilityAll = function() {
$scope.showAllFields = !$scope.showAllFields;
angular.forEach($scope.allFields, function(item) {
item.isActive = $scope.showAllFields;
});
$scope.updateFieldVisibility();
};
$scope.updateFieldVisibility = function() {
var activeFields = $scope.allFields.map(function(item) {
return item.name + ',' + item.isActive;
});
setShowAllFields();
emitFilterChange();
userPreferences
.setPreference($scope.table + '.activity.filter', activeFields.join(';'))
.then(function() {
reset();
});
};
$scope.configureAvailableFields = function() {
$window.personalizer($scope.table, 'activity', $scope.sysId);
};
$scope.toggleMultipleInputs = function(val) {
userPreferences.setPreference('glide.ui.activity_stream.multiple_inputs', val ? 'true' : 'false')
.then(function() {
$scope.useMultipleInputs = val;
setMultipleInputs();
});
};
$scope.changeEntryInputType = function(fieldName, entry) {
var checked = $scope.fields[fieldName].checked;
entry.inputType = checked ? fieldName : entry.primaryJournalField;
};
function processEntries(entries) {
if (!entries || !entries.length)
return;
entries = entries.reverse();
var newEntries = [];
angular.forEach(entries, function (entry) {
var entriesToAdd = [entry];
if (entry.attachment) {
entry.type = getAttachmentType(entry.attachment);
entry.attachment.extension = getAttachmentExt(entry.attachment);
} else if (entry.is_email === true){
entry.email = {};
var allFields = entry.entries.custom;
for(var i = 0; i < allFields.length; i++){
entry.email[allFields[i].field_name] = {
label: allFields[i]['field_label'],
displayValue: allFields[i]['new_value']
};
}
entry['entries'].custom = [];
} else if ($scope.sysId) {
entriesToAdd = extractJournalEntries(entry);
} else {
entriesToAdd = handleJournalEntriesWithoutExtraction(entry);
}
if (entriesToAdd instanceof Array) {
entriesToAdd.forEach(function (e) {
$scope.entries.unshift(e);
newEntries.unshift(e);
});
}
else {
$scope.entries.unshift(entriesToAdd);
newEntries.unshift(entriesToAdd)
}
if (source != FROM_FORM)
$scope.entries = $scope.entries.slice(0, 49);
if ($scope.maxEntries != undefined) {
var maxNumEntries = parseInt($scope.maxEntries, 10);
$scope.entries = $scope.entries.slice(0, maxNumEntries);
}
});
if ($scope.inlineStreamLoaded) {
if ($scope.entries.length > 0) {
removeInlineStreamEntryClass();
}
}
if ($scope.loaded) {
$scope.$emit("sn.stream.new_entries", newEntries);
triggerResize();
}
else if ($scope.pageSize && $scope.entries.length > $scope.pageSize) {
setUpPaging();
}
$timeout(function() {
$scope.$emit('sn.stream.entries_change', $scope.entries);
});
}
function removeInlineStream() {
angular.element(document).find('#sn_form_inline_stream_container').hide().remove();
}
function removeInlineStreamEntryClass() {
angular.element(document).find('#sn_form_inline_stream_entries').removeClass('sn-form-inline-stream-entries-only');
}
function addInlineStreamEntryClass() {
angular.element(document).find('#sn_form_inline_stream_entries').addClass('sn-form-inline-stream-entries-only');
}
function setUpPaging() {
$scope.showAllEntriesButton = true;
$scope.allEntries = $scope.entries;
$scope.entries = [];
loadEntries(0, $scope.pageSize);
}
$scope.loadMore = function() {
if ($scope.entries.length + $scope.pageSize > $scope.allEntries.length) {
$scope.loadAll();
return;
}
loadEntries($scope.loadedEntries, $scope.loadedEntries + $scope.pageSize);
};
$scope.loadAll = function() {
$scope.showAllEntriesButton = false;
loadEntries($scope.loadedEntries, $scope.allEntries.length);
};
function loadEntries(start, end) {
$scope.entries = $scope.entries.concat($scope.allEntries.slice(start, end));
$scope.loadedEntries = $scope.entries.length;
$scope.$emit('sn.stream.entries_change', $scope.entries);
}
function getAttachmentType(attachment) {
if (attachment.content_type.startsWith('image/') && attachment.size_bytes < 5 * 1024 * 1024 && attachment.path.indexOf(attachment.sys_id) == 0)
return 'attachment-image';
return 'attachment';
}
function getAttachmentExt(attachment) {
var filename = attachment.file_name;
return filename.substring(filename.lastIndexOf('.') + 1);
}
function handleJournalEntriesWithoutExtraction(oneLargeEntry) {
if (oneLargeEntry.entries.journal.length === 0)
return oneLargeEntry;
for (var i = 0; i < oneLargeEntry.entries.journal.length; i++) {
newLinesToBR(oneLargeEntry.entries.journal);
}
return oneLargeEntry;
}
function extractJournalEntries(oneLargeEntry) {
var smallerEntries = [];
if (oneLargeEntry.entries.journal.length === 0)
return oneLargeEntry;
for (var i = 0; i < oneLargeEntry.entries.journal.length; i++) {
var journalEntry = angular.copy(oneLargeEntry);
journalEntry.entries.journal = journalEntry.entries.journal.slice(i, i + 1);
newLinesToBR(journalEntry.entries.journal);
journalEntry.entries.changes = [];
journalEntry.type = 'journal';
smallerEntries.unshift(journalEntry);
}
oneLargeEntry.entries.journal = [];
oneLargeEntry.type = 'changes';
if (oneLargeEntry.entries.changes.length > 0)
smallerEntries.unshift(oneLargeEntry);
return smallerEntries;
}
function newLinesToBR(entries) {
angular.forEach(entries, function(item) {
if (!item.new_value)
return;
item.new_value = item.new_value.replace(/\n/g, '<br/>');
});
}
function cancelStream() {
if (_firstPollTimeout) {
clearTimeout(_firstPollTimeout);
_firstPollTimeout = false;
}
if (!stream)
return false;
stream.cancel();
stream = null;
return true; 
}
function setMultipleInputs() {
$scope.multipleInputs = $scope.useMultipleInputs;
if ($scope.useMultipleInputs === true || !$scope.formJournalFields) {
return;
}
var numAffectedFields = 0;
angular.forEach($scope.formJournalFields, function(item) {
if (item.mandatory || item.value)
numAffectedFields++;
});
if (numAffectedFields > 0)
$scope.multipleInputs = true;
}
function triggerResize() {
if (window._frameChanged)
setTimeout(_frameChanged, 0);
}
});
;
/*! RESOURCE: /scripts/sn/common/stream/directive.snStream.js */
angular.module("sn.common.stream").directive("snStream", function(getTemplateUrl, $http, $sce, $sanitize) {
"use strict";
return {
restrict: "E",
replace: true,
scope: {
table: "=",
query: "=?",
sysId: "=?",
active: "=",
controls: "=?",
showCommentsAndWorkNotes: "=?",
previousActivity: "=?",
sessions: "=",
attachments: "=",
board: "=",
formJournalFields: "=",
useMultipleInputs: "=?",
preferredInput: "=",
labels: "=",
subStream: "=",
expandEntries: "=",
scaleAnimatedGifs: "=",
scaleImages :"=",
pageSize: "=",
maxEntries: "@"
},
templateUrl: getTemplateUrl("ng_activity_stream.xml"),
controller: "snStream",
link: function (scope, element) {
element.on("click", ".at-mention", function(evt) {
var userID = angular.element(evt.target).attr('class').substring("at-mention at-mention-user-".length);
$http({
url: '/api/now/form/mention/user/' + userID,
method: "GET"
}).then(function(response) {
scope.showPopover = true;
scope.mentionPopoverProfile = response.data.result;
scope.clickEvent = evt;
}, function () {
$http({
url: '/api/now/live/profiles/' + userID,
method: "GET"
}).then(function(response) {
scope.showPopover = true;
var tempProfile = response.data.result;
tempProfile.userID = tempProfile.sys_id = response.data.result.document;
scope.mentionPopoverProfile = tempProfile;
scope.mentionPopoverProfile.sysID = response.data.result["userID"];
scope.clickEvent = evt;
})
});
});
scope.toggleEmailIframe = function(email, event){
email.expanded = !email.expanded;
event.preventDefault();
};
}
};
});
;
/*! RESOURCE: /scripts/sn/common/stream/directive.formStreamEntry.js */
angular.module('sn.common.stream').directive('formStreamEntry', function(getTemplateUrl) {
return {
restrict: 'A',
templateUrl: getTemplateUrl('record_stream_entry.xml')
}
});
;
/*! RESOURCE: /scripts/sn/common/stream/directive.snExpandedEmail.js */
angular.module("sn.common.stream").directive("snExpandedEmail", function() {
"use strict";
return {
restrict: "E",
replace: true,
scope: {
email: "="
},
template: "<iframe style='width: 100%;' class='card' src='{{::emailBodySrc}}'></iframe>",
controller: function($scope){
$scope.emailBodySrc = "email_display.do?email_id=" + $scope.email.sys_id.displayValue;
},
link: function(scope, element) {
element.load(function(){
var bodyHeight = $j(this).get(0).contentWindow.document.body.scrollHeight + "px";
$j(this).height(bodyHeight);
});
}
};
});
;
/*! RESOURCE: /scripts/app.form_presence/controller.formStream.js */
(function() {
var journalModel = {};
window.journalModel = journalModel;
CustomEvent.observe('sn.form.journal_field.add', function(name, mandatory, readonly, visible, value, label) {
journalModel[name] = {
name: name,
mandatory: mandatory,
readonly: readonly,
visible: visible,
value: value,
label: label,
messages: []
};
});
CustomEvent.observe('sn.form.journal_field.readonly', function(name, readonly) {
modifyJournalAttribute(name, "readonly", readonly);
});
CustomEvent.observe('sn.form.journal_field.value', function(name, value) {
modifyJournalAttribute(name, "value", value);
});
CustomEvent.observe('sn.form.journal_field.mandatory', function(name, mandatory) {
modifyJournalAttribute(name, "mandatory", mandatory);
});
CustomEvent.observe('sn.form.journal_field.visible', function(name, visible) {
modifyJournalAttribute(name, "visible", visible);
});
CustomEvent.observe('sn.form.journal_field.label', function(name, visible) {
modifyJournalAttribute(name, "label", visible);
});
CustomEvent.observe('sn.form.journal_field.show_msg', function(input, message, type) {
var messages = journalModel[input]['messages'].concat([{
type: type,
message: message
}]);
modifyJournalAttribute(input, 'messages', messages);
});
CustomEvent.observe('sn.form.journal_field.hide_msg', function(input, clearAll) {
if (journalModel[input]['messages'].length == 0)
return;
var desiredValue = [];
if (!clearAll)
desiredValue = journalModel[input]['messages'].slice(1);
modifyJournalAttribute(input, 'messages', desiredValue);
});
CustomEvent.observe('sn.form.hide_all_field_msg', function(type) {
var fields = Object.keys(journalModel);
for (var i = 0; i < fields.length; i++) {
var f = fields[i];
if (journalModel[f].messages.length == 0)
continue;
var messages = [];
if (type) {
var oldMessages = angular.copy(journalModel[f].messages);
for (var j = 0; j < oldMessages.length; j++) {
if (oldMessages[j].type != type)
messages.push(oldMessages[j]);
}
}
modifyJournalAttribute(f, 'messages', messages);
}
});
CustomEvent.observe('sn.stream.insert', function(field, text) {
if (typeof window.g_form !== "undefined")
g_form.getControl(field).value = NOW.STREAM_VALUE_KEY + text;
});
function modifyJournalAttribute(field, prop, value) {
if (journalModel[field][prop] === value)
return;
journalModel[field][prop] = value;
CustomEvent.fire('sn.form.journal_field.changed');
}
angular.module('sn.common.stream').controller('formStream', function($scope, snCustomEvent, i18n) {
var isFiltered = !angular.element('.activity-stream-label-filtered').hasClass('hide');
var _inlineTemplateCache;
function renderLabel(count) {
var processedLabel = _getLabel(count);
angular.element('.activity-stream-label-counter').html(processedLabel);
angular.element('.activity-stream-label-filtered').toggleClass('hide', !isFiltered);
}
function _getLabel(count) {
var label = 'Activities: {0}';
return i18n.getMessage(label).withValues([count]);
}
function _getInlineEntries() {
if (_inlineTemplateCache === 0) {
return 0;
}
_inlineTemplateCache = document.querySelectorAll('#sn_form_inline_stream_container ul.activities-form li.h-card_comments').length;
return _inlineTemplateCache;
}
$scope.$on('sn.stream.entries_change', function(evt, entries) {
var inlineTemplateCount = _getInlineEntries();
var count = inlineTemplateCount + entries.length;
renderLabel(count);
});
$scope.$on('sn.stream.is_filtered_change', function(evt, filtered) {
isFiltered = filtered;
});
$scope.formJournalFields = journalModel;
$scope.formJournalFieldsVisible = false;
setUp();
snCustomEvent.observe('sn.form.journal_field.changed', function() {
setUp();
if (!$scope.$$phase)
$scope.$apply();
});
function setUp() {
setInputValue();
}
function setInputValue() {
angular.forEach($scope.formJournalFields, function(item) {
if (typeof window.g_form === "undefined")
return;
item.value = g_form.getValue(item.name);
if (!item.readonly && item.visible && (item.value !== undefined || item.value !== null) || item.value !== '') {
$scope.$broadcast('sn.stream.input_value', item.name, item.value);
}
});
}
})
})();
;
/*! RESOURCE: /scripts/app.form_presence/directive.scroll_form.js */
angular.module('sn.common.stream').directive('scrollFrom', function() {
"use strict";
var SCROLL_TOP_PAD = 10;
return {
restrict: 'A',
link: function($scope, $element, $attrs) {
var target = $attrs.scrollFrom;
$j(target).click(function(evt) {
if (window.g_form) {
var tab = g_form._getTabNameForElement($element);
if (tab)
g_form.activateTab(tab);
}
var $scrollRoot = $element.closest('.form-group');
if ($scrollRoot.length === 0)
$scrollRoot = $element;
var $scrollParent = $scrollRoot.scrollParent();
var offset = $element.offset().top - $scrollParent.offset().top - SCROLL_TOP_PAD + $scrollParent.scrollTop();
$scrollParent.animate({
scrollTop: offset
}, '500', 'swing');
evt.stopPropagation();
})
}
}
});
;
;
/*! RESOURCE: /scripts/doctype/GlideWebAnalytics.js */
var GlideWebAnalytics = (function() {
function subscribe() {
var webaChannelId = "/weba/config";
var webaCh = window.amb.getClient().getChannel(webaChannelId);
webaCh.subscribe(function(response) {
if (window.NOW.webaConfig == undefined)
window.NOW.webaConfig = {};
var oldConfig = {
siteId : window.NOW.webaConfig.siteId,
trackerURL : window.NOW.webaConfig.trackerURL
};
window.NOW.webaConfig.siteId = response.data.weba_site_id;
window.NOW.webaConfig.trackerURL = response.data.weba_rx_url;
handleConfigUpdate(oldConfig, window.NOW.webaConfig);
});
window.amb.getClient().connect();
}
function handleConfigUpdate(oldConfig, newConfig) {
if (newConfig.siteId == "0")
removeTracker();
else if (oldConfig.siteId != "0" && oldConfig.siteId != newConfig.siteId)
updateTracker(oldConfig, newConfig);
else if (oldConfig.siteId == undefined || oldConfig.siteId == "0")
insertTracker(newConfig);
}
function removeTracker() {
if (!trackerExists())
return;
var document = window.document;
var head = document.head || document.getElementsByTagName('head')[0];
var trackerScriptId = "weba";
var trackEle = document.getElementById(trackerScriptId);
head.removeChild(trackEle);
var asyncTrackEle = document.getElementById('webaScript');
if (asyncTrackEle == undefined)
return;
var src = asyncTrackEle.src;
if (src != undefined && src.indexOf("piwik") > 0)
head.removeChild(asyncTrackEle);
}
function updateTracker(oldConfig, newConfig) {
var trackerScriptId = "weba";
var trackEle = window.document.getElementById(trackerScriptId);
var script = trackEle.text;
if (script != undefined && script != "") {
script = script.replace(oldConfig.siteId, newConfig.siteId);
script = script.replace(oldConfig.trackerURL, newConfig.trackerURL);
trackEle.text = script;
}
}
function insertTracker(newConfig) {
var document = window.document;
var head = document.head || document.getElementsByTagName('head')[0];
if (trackerExists())
return;
if (!isConfigValid(newConfig))
return;
var trackerScript = generateTrackerScript(newConfig);
var trackerElement = getOrCreateTracker();
trackerElement.text = trackerScript;
head.appendChild(trackerElement);
}
function applyTracker() {
insertTracker(window.NOW.webaConfig);
subscribe();
}
function applyTrackEvent(category, key, value, additionalValue) {
if (!isConfigValid(window.NOW.webaConfig))
return;
if (!trackerExists())
applyTracker();
var eventItems = [ "trackEvent", category, key, value, additionalValue ];
var eventScript = "_paq.push(" + JSON.stringify(eventItems) + ");";
var head = document.head || document.getElementsByTagName('head')[0];
var scriptEle = window.document.createElement("script");
scriptEle.text = eventScript;
head.appendChild(scriptEle);
}
function trackerExists() {
var document = window.document;
var head = document.head || document.getElementsByTagName('head')[0];
var trackEle = window.document.getElementById("weba");
if (trackEle != undefined && trackEle != null)
return true;
return false;
}
function isConfigValid(newConfig) {
var zero = "0";
var webaSiteId = (newConfig != undefined) ? newConfig.siteId : zero;
var trackerURL = (newConfig != undefined) ? newConfig.trackerURL : "";
if (webaSiteId == undefined || webaSiteId == "")
return false;
if (webaSiteId == zero )
return false;
if (trackerURL == undefined || trackerURL == "")
return false;
return true;
}
function getOrCreateTracker() {
var trackerScriptId = "weba";
var trackEle = window.document.getElementById(trackerScriptId);
if (trackEle != undefined && trackEle != null)
return trackEle;
trackEle = window.document.createElement("script");
trackEle.id = trackerScriptId;
trackEle.type = "text/javascript";
return trackEle;
}
function getUserId() {
if (window.NOW.user_id != undefined && window.NOW.user_id != "")
return window.NOW.user_id;
else if (window.NOW.session_id != undefined)
return window.NOW.session_id;
else {
var userObj = window.NOW.user;
if (userObj != undefined)
return userObj.userID;
}
}
function generateTrackerScript(webaConfig) {
var trackerURL = webaConfig.trackerURL;
if (trackerURL.endsWith("/"))
trackerURL = webaConfig.trackerURL.substring(0, trackerURL.length - 1);
var userId = getUserId();
var script = "var _paq = _paq || [];";
script += "_paq.push(['setUserId', 'TRACKER_USER_ID']);";
script += "_paq.push(['trackPageView']); _paq.push(['enableLinkTracking']);";
script += "(function() { var u='TRACKER_SERVER_URL';_paq.push(['setTrackerUrl', u]);_paq.push(['setSiteId', SITE_ID]);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.defer=true; g.src='WEBA_SCRIPT_PATH'; g.id='webaScript';s.parentNode.insertBefore(g,s); })();";
script = script.replace("TRACKER_USER_ID", userId);
script = script.replace("TRACKER_SERVER_URL", trackerURL);
script = script.replace("SITE_ID", webaConfig.siteId);
script = script.replace("WEBA_SCRIPT_PATH", webaConfig.webaScriptPath);
return script;
}
var api = {
trackPage: function() {
if (window.document.readyState == "complete")
applyTracker();
else
window.addEventListener("load", function() {
applyTracker();
},	false);
},
trackEvent: function(category, key, value, additionalValue, delayInMs) {
if (delayInMs == undefined)
delayInMs = 3000;
window.setTimeout(function() {
applyTrackEvent(category, key, value, additionalValue);
}, delayInMs);
}
}
return api;
})();
;
;
/*! RESOURCE: /scripts/directive.snBookmark.js */
angular.module('ng.common').directive('snBookmark', function() {
'use strict';
return {
restrict: 'A',
link: function(scope, element, attrs) {
element.bind('dragstart', function(e) {
e.originalEvent.dataTransfer.setData('text', angular.toJson({
type: 'document',
href: attrs.href,
text: attrs.snBookmark
}));
});
}
};
});
;
/*! RESOURCE: /scripts/lib/ngInfiniteScroll-1.0.0/ng-infinite-scroll.min.js */
/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;mod=angular.module("infinite-scroll",[]),mod.directive("infiniteScroll",["$rootScope","$window","$timeout",function(i,n,e){return{link:function(t,l,o){var r,c,f,a;return n=angular.element(n),f=0,null!=o.infiniteScrollDistance&&t.$watch(o.infiniteScrollDistance,function(i){return f=parseInt(i,10)}),a=!0,r=!1,null!=o.infiniteScrollDisabled&&t.$watch(o.infiniteScrollDisabled,function(i){return a=!i,a&&r?(r=!1,c()):void 0}),c=function(){var e,c,u,d;return d=n.height()+n.scrollTop(),e=l.offset().top+l.height(),c=e-d,u=n.height()*f>=c,u&&a?i.$$phase?t.$eval(o.infiniteScroll):t.$apply(o.infiniteScroll):u?r=!0:void 0},n.on("scroll",c),t.$on("$destroy",function(){return n.off("scroll",c)}),e(function(){return o.infiniteScrollImmediateCheck?t.$eval(o.infiniteScrollImmediateCheck)?c():void 0:c()},0)}}}]);
/*! RESOURCE: /scripts/knowledge.ng/knowledge/_module.js */
(function() {
'use strict';
var modulesToInclude = [
'sn.base',
'ngSanitize',
'ngRoute',
'ngAnimate',
'ngAria',
'ngTouch',
'infinite-scroll',
'sn.common',
'sn.common.glide',
'sn.timeAgo',
'sn.knowledge.global',
'sn.knowledge.articles.widget',
'sn.knowledge.articles.browsing'
];
function isMobileOrTablet() {
return navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i);
}
function isIE() {
return navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident") != -1 || navigator.userAgent.indexOf("Edge") != -1;
}
function openArticleAttachment(url, name, external) {
if(external) {
var params = 'toolbar=no,menubar=no,personalbar=no,height='+screen.height + ',' + 'width='+screen.width + ',' + 'scrollbars=yes,resizable=yes,fullscreen=yes';
window.open(url, name, params);
}
else
window.open(url, name, "toolbar=no,menubar=no,personalbar=no,width=800,height=600,scrollbars=yes,resizable=yes");
};
if (!isMobileOrTablet() && (window.kbSystemProperty.deviceType !=="tablet" && window.kbSystemProperty.deviceType !=="mobile" && window.kbSystemProperty.deviceType !=="m")) {
modulesToInclude.push('angularFileUpload');
modulesToInclude.push('sn.knowledge.articles.import');
}
angular.module('sn.knowledge.global', []).value('KnowledgeGlobalData', (function() {
var data = window.kbSystemProperty ? window.kbSystemProperty : {};
data.isMobileOrTablet = isMobileOrTablet();
data.isIE = isIE();
data.openArticleAttachment = openArticleAttachment;
data.isSocialQAInstalled = window.isSocialQAInstalled && window.isSocialQAInstalled !== 'false' ? true : false;
return data;
}()));
angular.module('sn.knowledge', modulesToInclude).config(
function($controllerProvider, $compileProvider, $logProvider, $routeProvider, $locationProvider) {
$logProvider.debugEnabled(
angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.debugging) ?
kbSystemProperty.debugging : false
);
angular.module('sn.knowledge').register = {
controller: $controllerProvider.register,
directive: $compileProvider.directive
};
$locationProvider.html5Mode({
enabled: true,
requiresBase: false
});
}
).run(function($rootScope, $location, $window) {
$rootScope.$on('$locationChangeSuccess', function() {
$rootScope.actualLocation = $location.absUrl();
});
$rootScope.$on('$locationChangeStart', function(event, next, current) {
var hash = $location.hash();
if (hash.indexOf("search") > 0) {
event.preventDefault();
var url = "$knowledge.do";
$window.location = "/$knowledge.do" + hash.replace("/search", "");
}
});
});
})();
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/constant.paramTypes.js */
angular.module('sn.knowledge')
.constant('ParamTypes', (function() {
"use strict";
return {
FILTER_PARAM_TYPE: 'knowledge_search_filter_processor',
SEARCH_PARAM_TYPE: 'ContextSearchService',
KB_STATIC_DATA_PARAM_TYPE: 'knowledge_advanced_search_processor'
};
}()));
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/filter.trim.js */
angular.module('sn.knowledge')
.filter('noMultipleSpaces', function() {
return function(value) {
return (angular.isDefined(value)) ?
value.replace(/\xA0/g,' ').replace(/([ ]{1,})/g, ' ') : '';
};
})
.filter('noWrappingPunctuation', function() {
return function(value) {
return angular.isDefined(value) ?
value.replace(/^([^a-z0-9&<]{1,})/gi, '').replace(/([^a-z0-9&;>]{1,})$/gi, '') : '';
};
})
.filter('noSpacesBeforePunctuation', function() {
return function(value) {
return angular.isDefined(value) ?
value.replace(/[ ][\)|,|\.|?|!]/gi, function(match) {
return match.trim();
}) : '';
};
})
.filter('trim', function() {
return function(value) {
return angular.isDefined(value) ? value.trim() : '';
};
})
.filter('shorten', function() {
return function(value, maxChars) {
if (!angular.isDefined(maxChars)) {
maxChars = 175;
}
if (value.length <= maxChars) {
return value;
}
var escRe = /&#\d{5};/g;
var numRe = /\d{5}/;
var newValue = value;
var found = newValue.match(escRe);
if (found != null) {
var num, char;
for (var i=0; i < found.length; i++) {
num = found[i].match(numRe)[0];
char = String.fromCharCode(parseInt(num, 10));
newValue = newValue.replace(new RegExp(found[i], 'g'), char);
}
}
var words = newValue.split(' ');
while (newValue.length > maxChars) {
words.pop();
newValue = words.join(' ');
}
return newValue;
};
})
.filter('ellipsis', function() {
return function(value) {
return value + '...';
};
})
.filter('capitalize', function() {
return function(value) {
return angular.isDefined(value) ?
value.charAt(0).toUpperCase() + value.slice(1) : '';
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/filter.centerSlice.js */
angular.module('sn.knowledge')
.filter('centerSlice', function() {
return function(input, offset, max) {
if (Math.round(max / 2) == max / 2) max++;
if (max >= input.length) return input;
var start = Math.ceil(offset - (max / 2));
if (start < 0) start = 0;
var end = start + max;
if (end > input.length) {
end = input.length;
start = end - max;
}
return input.slice(start, end);
}
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.applicationState.js */
angular.module('sn.knowledge')
.service('ApplicationState', ['$rootScope', '$location', '$injector', '$log', '$q', 'browser', 'i18n',
function($rootScope, $location, $injector, $log, $q, browser, i18n) {
"use strict";
var hasOwnProperty = Object.prototype.hasOwnProperty;
var FilterGroup, SearchFilterApi, FilterQuery;
var filterTypes = [
{
key: 'all',
actualValue: 'All',
displayValue: 'All'
},
{
key: 'articles',
actualValue: 'Articles',
displayValue: 'Articles'
},
{
key: 'questions',
actualValue: 'Questions',
displayValue: 'Questions'
}
];
var questionFilterTypes = [
{
key: '',
actualValue: 'All',
displayValue: 'All'
},
{
key: 'accepted-questions',
actualValue: 'Accepted',
displayValue: 'Accepted'
},
{
key: 'answered-questions',
actualValue: 'Answered',
displayValue: 'Answered'
},
{
key: 'unanswered-questions',
actualValue: 'Unanswered',
displayValue: 'Unanswered'
}
];
i18n.getMessages(filterTypes.map(function(type) {
return type.displayValue;
}), function(result) {
for (var i = 0; i < filterTypes.length; i++) {
filterTypes[i].displayValue = result[filterTypes[i].actualValue];
}
});
i18n.getMessages(questionFilterTypes.map(function(type) {
return type.displayValue;
}), function(result) {
for (var i = 0; i < questionFilterTypes.length; i++) {
questionFilterTypes[i].displayValue = result[questionFilterTypes[i].actualValue];
}
});
var state = {};
state.paramsKey = {
'RESULTFROM': 'sysparm_resources',
'AUTHORS': 'sysparm_author_ids',
'CATEGORIES': 'sysparm_category_ids',
'FILTERED_KNOWLEDGE_BASES': 'sysparm_kb_ids',
'KNOWLEDGE_BASE': 'sysparm_kb',
'KEYWORDS': 'query',
'SORT_ORDER': 'sysparm_order',
'SELECTED_CATEGORY': 'sysparm_category',
'SELECTED_TAG': 'sysparm_tag',
'BROWSING_TYPE': 'browse_type',
'DEVICE': 'sysparm_device',
'TYPE_FILTER': 'sysparm_type_filter',
'LANGUAGE': 'language'
};
state.knowledgeBases = [];
state.selectedKnowledgeBase = null;
state.selectionCategories = [];
state.selectedCategory = {};
state.selectedTag = {};
state.selectedFilter = 'categories';
state.selectedTypeFilter = {};
state.selectedQuestionFilter = questionFilterTypes[0];
state.typeFilterOptions = filterTypes;
state.questionFilterOptions = questionFilterTypes;
state.selectedLanguage = kbSystemProperty.language;
state.knowledgeBaseLoaded = null;
state.doneStarting = false;
state.queryParams = {};
state.import = {
isInProgress: false
};
state.isKnowledgeBaseLoaded = function(){
return state.knowledgeBaseLoaded;
};
state.setResultFrom = function(names) {
$location.search(state.paramsKey.RESULTFROM, names ? names : null);
};
state.setAuthors = function(ids) {
$location.search(state.paramsKey.AUTHORS, ids ? ids : null);
};
state.setCategories = function(ids) {
$location.search(state.paramsKey.CATEGORIES, ids ? ids : null);
};
state.setFilteredKnowledgeBases = function(ids) {
$location.search(state.paramsKey.FILTERED_KNOWLEDGE_BASES, ids ? ids : null);
};
state.setKnowledgeBase = function(id) {
$location.search(state.paramsKey.KNOWLEDGE_BASE, id ? id : null);
};
state.setLanguage = function(language) {
$location.search(state.paramsKey.LANGUAGE, language ? language : null);
};
state.setSortOrder = function(key) {
$location.search(state.paramsKey.SORT_ORDER, key ? key : null);
};
state.setSelectedCategory = function(category) {
$location.search(state.paramsKey.SELECTED_CATEGORY, category ? category : null);
};
state.setSelectedTag = function(tag) {
$location.search(state.paramsKey.SELECTED_TAG, tag ? tag : null);
};
state.setSelectedTypeFilter = function(typeFilter) {
$location.search(state.paramsKey.TYPE_FILTER, typeFilter ? typeFilter : null);
};
state.isSearchView = function() {
return !isEmpty(state.queryParams[state.paramsKey.KEYWORDS]);
};
state.isHomePageView = function() {
return isEmpty(state.queryParams[state.paramsKey.KEYWORDS]);
};
state.isKBSelectedForBrowsing = function() {
return !isEmpty(state.queryParams[state.paramsKey.KNOWLEDGE_BASE]);
};
state.browseByCategory = function() {
return state.queryParams[state.paramsKey.BROWSING_TYPE] === "categories";
};
state.setKeywords = function(keywords) {
$location.search(state.paramsKey.KEYWORDS, keywords);
};
state.setBrowseType = function(type) {
$location.search(state.paramsKey.BROWSING_TYPE, type ? type : null);
};
state.getBrowseType = function() {
return state.queryParams[state.paramsKey.BROWSING_TYPE];
};
state.isMobileView = function() {
var mobile = !isEmpty(state.queryParams[state.paramsKey.DEVICE]) && state.queryParams[state.paramsKey.DEVICE] == 'mobile';
return mobile || browser.isPhone();
};
state.removeSearchAndFilterParams = function() {
state.setResultFrom();
state.setAuthors();
state.setCategories();
state.setFilteredKnowledgeBases();
state.setSortOrder();
state.setKeywords();
};
state.removeKbAndCategoryParams = function() {
state.setKnowledgeBase();
state.setSelectedCategory();
state.setSelectedTag();
state.setBrowseType('categories');
};
state.setCurrentQueryParams = function(queryParams) {
state.queryParams = queryParams;
};
state.onLoadServiceCalls = function() {
state.getDependentServices();
FilterGroup.init();
FilterQuery.setKeywords(state.queryParams.query);
FilterQuery.setSortOrderByKey(state.queryParams[state.paramsKey.SORT_ORDER]);
FilterQuery.saveFilter(false);
cleanupDynamicFilters();
SearchFilterApi.resetFilterProperties();
if (state.isSearchView()) {
return SearchFilterApi.getFilterData(state.queryParams.query, state.queryParams[state.paramsKey.KNOWLEDGE_BASE], state.selectedLanguage)
.then(getFilterDataSuccess, getFilterDataFailure);
} else {
setSelectedTypeFilter();
var defer = $q.defer();
defer.resolve();
return defer.promise;
}
};
state.getDependentServices = function() {
FilterGroup = $injector.get('FilterGroup');
FilterQuery = $injector.get('FilterQuery');
SearchFilterApi = $injector.get('SearchFilterApi');
};
state.resetBrowsableKnowledgeBase = function() {
state.knowledgeBases = [];
state.selectedKnowledgeBase = null;
};
function transFormSourceData(sources) {
var resultFrom = [];
for (var i = 0; i < sources.length; i++) {
var result = {};
result.title = sources[i].title;
if (sources[i].sys_id === 'kb_knowledge')
result.name = 'knowledge';
else
result.name = 'social';
resultFrom.push(result);
}
return resultFrom;
}
function getFilterDataSuccess(response) {
if (typeof response === "undefined") {
return response;
}
var data = response.data;
loadDynamicFilterData(data);
updateDynamicFilters();
selectDynamicFilters();
return response;
}
function getFilterDataFailure(error) {
$log.error('error fetching filter data:', error);
}
function cleanupDynamicFilters() {
FilterQuery.resetFilterOptions();
FilterQuery.saveFilter(false);
}
function loadDynamicFilterData(data) {
FilterGroup.resetFilterOptions();
FilterGroup.addResultFrom(transFormSourceData(data.sources));
FilterGroup.addAuthors(data.authors);
FilterGroup.addCategories(data.categories);
FilterGroup.addFilteredKnowledgeBases(data.filteredKnowledgeBases);
}
function updateDynamicFilters() {
FilterQuery.selectResultFromByNames(state.queryParams.sysparm_resources);
FilterQuery.selectAuthorsByIds(state.queryParams.sysparm_author_ids);
FilterQuery.selectCategoriesByIds(state.queryParams.sysparm_category_ids);
FilterQuery.selectFilteredKnowledgeBasesByIds(state.queryParams.sysparm_kb_ids);
FilterQuery.saveFilter(false);
}
function selectDynamicFilters() {
FilterGroup.selectChosenResultFrom(FilterQuery.condition.resultFrom);
FilterGroup.selectChosenAuthors(FilterQuery.condition.authors);
FilterGroup.selectChosenCategories(FilterQuery.condition.categories);
FilterGroup.selectChosenFilteredKnowledgeBases(FilterQuery.condition.filteredKnowledgeBases);
}
function setSelectedTypeFilter() {
var typeFilterKey = state.queryParams.sysparm_type_filter
if (isEmpty(typeFilterKey)) {
state.selectedTypeFilter = state.typeFilterOptions[0];
} else {
var foundTypeFilter = find(state.typeFilterOptions, 'key', typeFilterKey);
state.selectedTypeFilter = foundTypeFilter ? foundTypeFilter : state.typeFilterOptions[0];
}
}
function isEmpty(obj) {
if (obj == null) return true;
if (obj.length > 0)    return false;
if (obj.length === 0)  return true;
for (var key in obj) {
if (hasOwnProperty.call(obj, key)) return false;
}
return true;
}
function find(collection, key, value) {
var foundItems = collection.filter(function(item) {
return (item[key] === value);
});
if (!foundItems.length) {
return;
}
return foundItems[0];
}
return state;
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.filterGroup.js */
angular.module('sn.knowledge')
.service('FilterGroup', ['i18n','KnowledgeGlobalData', function(i18n,KnowledgeGlobalData) {
"use strict";
var sortOrder = [
{ "key": "relevancy", "actualValue": "relevancy", "displayValue": "Relevancy", "propertyValue": "relevancy", displayOrder: 1},
{ "key": "last_modified", "actualValue": "last modified", "displayValue": " Last Updated", "propertyValue": "sys_updated_on", displayOrder: 2},
{ "key": "view_count", "actualValue": "view count", "displayValue": "Views", "propertyValue": "views", displayOrder: 3}
];
var sortOrderPreference= {
'relevancy':'relevancy',
'views':'view_count',
'sys_updated_on':'last_modified'
};
var messagesToTranslate = [];
for (var i = 0; i < sortOrder.length; i++) {
messagesToTranslate.push(sortOrder[i].displayValue);
}
i18n.getMessages(messagesToTranslate, function(result) {
for (var i = 0; i < sortOrder.length; i++) {
sortOrder[i].displayValue = result[sortOrder[i].displayValue];
}
});
var group = {
resultFrom: [],
authors: [],
categories: [],
filteredKnowledgeBases: [],
sortOrder: sortOrder,
find : function(collection, key, value) { return find(collection, key, value);}
};
group.addResultFrom = function(newResultFrom) {
group.resultFrom = group.resultFrom.concat(getResultFrom(newResultFrom));
};
group.addAuthors = function(newAuthors) {
group.authors = group.authors.concat(getAuthors(newAuthors));
};
group.addCategories = function(newCategories) {
group.categories = group.categories.concat(getCategories(newCategories));
};
group.addFilteredKnowledgeBases = function(newKnowledgeBases) {
group.filteredKnowledgeBases = group.filteredKnowledgeBases.concat(getFilteredKnowledgeBases(newKnowledgeBases));
};
group.resetResultFrom = function() {
group.resultFrom = [];
};
group.resetAuthors = function() {
group.authors = [];
};
group.resetCategories = function() {
group.categories = [];
};
group.resetFilteredKnowledgeBases = function() {
group.filteredKnowledgeBases = [];
};
group.resetFilterOptions=function(){
group.resetResultFrom();
group.resetAuthors();
group.resetCategories();
group.resetFilteredKnowledgeBases();
};
group.deselectAllResultFrom = function() {
group.resultFrom.forEach(function(result) {
result.isSelected = false;
});
};
group.deselectAllAuthors = function() {
group.authors.forEach(function(author) {
author.isSelected = false;
});
};
group.deselectAllCategories = function() {
group.categories.forEach(function(category) {
category.isSelected = false;
});
};
group.deselectAllFilteredKnowledgeBases = function() {
group.filteredKnowledgeBases.forEach(function(filteredKnowledgeBase) {
filteredKnowledgeBase.isSelected = false;
});
};
group.deselectResultFrom = function(selectedResultFrom) {
var result = find(group.resultFrom, "name", selectedResultFrom.resultFrom.name);
if (!result)
return ;
result.isSelected = false;
};
group.selectAResultFrom = function(selectedResultFrom) {
var result = find(group.resultFrom, "name", selectedResultFrom.resultFrom.name);
if (!result)
return ;
result.isSelected = true;
};
group.deselectAuthor = function(selectedAuthor) {
var author = find(group.authors, 'id', selectedAuthor.author.id);
if (!author) {
return;
}
author.isSelected = false;
};
group.selectAnAuthor = function(selectedAuthor) {
var author = find(group.authors, 'id', selectedAuthor.author.id);
if (!author) {
return;
}
author.isSelected = true;
};
group.deselectCategory = function(selectedCategory) {
var category = find(group.categories, 'id', selectedCategory.category.id);
if (!category) {
return;
}
category.isSelected = false;
};
group.selectACategory = function(selectedCategory) {
var category = find(group.categories, 'id', selectedCategory.category.id);
if (!category) {
return;
}
category.isSelected = true;
};
group.deselectFilteredKnowledgeBase = function(selectedKnowledgeBase) {
var filteredKnowledgeBase = find(group.filteredKnowledgeBases, 'id', selectedKnowledgeBase.filteredKnowledgeBase.id);
if (!filteredKnowledgeBase) {
return;
}
filteredKnowledgeBase.isSelected = false;
};
group.selectAFilteredKnowledgeBase = function(selectedKnowledgeBase) {
var filteredKnowledgeBase = find(group.filteredKnowledgeBases, 'id', selectedKnowledgeBase.filteredKnowledgeBase.id);
if (!filteredKnowledgeBase) {
return;
}
filteredKnowledgeBase.isSelected = true;
};
group.selectChosenResultFrom = function(chosenResultFrom) {
chosenResultFrom.forEach(group.selectAResultFrom);
};
group.selectChosenAuthors = function(chosenAuthors) {
chosenAuthors.forEach(group.selectAnAuthor);
};
group.selectChosenCategories = function(chosenCategories) {
chosenCategories.forEach(group.selectACategory);
};
group.selectChosenFilteredKnowledgeBases = function(chosenKbs) {
chosenKbs.forEach(group.selectAFilteredKnowledgeBase);
};
group.init = function() {
group.resultFrom = [];
group.authors = [];
group.categories = [];
group.filteredKnowledgeBases = [];
group.sortOrder = sortOrder;
};
group.hasFilterOptions = function() {
return (!isEmpty(group.resultFrom) || !isEmpty(group.authors) || !isEmpty(group.categories) || !isEmpty(group.filteredKnowledgeBases));
};
group.getDefaultSortOrder =function(){
var sortOrderSetInProperty = KnowledgeGlobalData.searchOrderSetInProperty;
if(isEmpty(sortOrderSetInProperty)){
return group.sortOrder[0];
}
var sortKey = sortOrderPreference[sortOrderSetInProperty];
if(isEmpty(sortKey)){
return group.sortOrder[0];
}
return find(sortOrder,'key',sortKey);
};
function getResultFrom(resultFrom) {
return resultFrom.map(function(result) {
return {
name: result.name,
title: result.title,
isSelected: false
};
});
};
function getAuthors(authors) {
return authors.map(function(author) {
return {
name: author.author,
id: author.authorId,
isSelected: false
};
});
}
function getCategories(categories) {
return categories.map(function(category) {
return {
name: category.category,
id: category.categoryId,
parentCategories: category.parentCategories,
parentIds: category.parentCategoryIds.join(','),
parentCategoriesString: category.parentCategories.slice().reverse().join(','),
isSelected: false
};
});
}
function getFilteredKnowledgeBases(kbs) {
return kbs.map(function(kb) {
return {
title: kb.title,
id: kb.sys_id,
isSelected: false
};
});
}
function find(collection, key, value) {
var foundItems = collection.filter(function(item) {
return (item[key] === value);
});
if (!foundItems.length) {
return;
}
return foundItems[0];
}
function isEmpty(obj) {
if (obj == null) return true;
if (obj.length > 0)    return false;
if (obj.length === 0)  return true;
for (var key in obj) {
if (hasOwnProperty.call(obj, key)) return false;
}
return true;
}
return group;
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.filterQuery.js */
angular.module('sn.knowledge')
.service('FilterQuery', ['FilterGroup', 'ApplicationState', 'userPreferences', function(FilterGroup, ApplicationState, userPreferences) {
"use strict";
var self = {};
self.keywords = "";
self.pluralizedKeys = {
resultFrom: 'resultFrom',
author: 'authors',
category: 'categories',
filteredKnowledgeBase: 'filteredKnowledgeBases'
};
self.condition = {
resultFrom: [],
authors: [],
categories: [],
knowledgeBase: {},
sortOrder: {},
filteredKnowledgeBases: []
};
self.savedCondition = {
resultFrom: [],
authors: [],
categories: [],
knowledgeBase: {},
sortOrder: {},
filteredKnowledgeBases: []
};
self.add = function(filterTerm) {
var filterKey = getFilterKey(filterTerm);
var key = self.pluralizedKeys[filterKey];
if (!angular.isDefined(key)) {
return;
}
self.condition[key] = self.condition[key].concat(filterTerm);
};
self.remove = function(filterTerm) {
var filterKey = getFilterKey(filterTerm);
var key = self.pluralizedKeys[filterKey];
if (!angular.isDefined(key)) {
return;
}
var allItems = self.condition[key];
self.condition[key] = removeFromCondition(allItems, filterTerm);
};
self.modify = function(filterTerm) {
var filterKey = getFilterKey(filterTerm);
var key = self.pluralizedKeys[filterKey];
self.condition[key] = filterTerm[filterKey];
};
self.resetResultFrom = function() {
self.condition.resultFrom = [];
};
self.resetAuthors = function () {
self.condition.authors = [];
};
self.resetCategories = function () {
self.condition.categories = [];
};
self.resetFilteredKnowledgeBases = function () {
self.condition.filteredKnowledgeBases = [];
};
self.setResultFrom = function(resultFrom) {
self.condition.resultFrom = resultFrom;
};
self.setResultFromByName = function(resultFromName) {
self.condition.resultFrom = find(FilterGroup.resultFrom, 'name', resultFromName);
};
self.setSortOrder = function (sortOrder) {
self.condition.sortOrder = sortOrder;
};
self.setSortOrderByKey = function(sortOrderKey) {
self.condition.sortOrder = find(FilterGroup.sortOrder, 'key', sortOrderKey) || FilterGroup.getDefaultSortOrder();
};
self.selectResultFromByNames = function(resultFromNames) {
if (!isEmpty(resultFromNames)) {
var currentResultFromNames = (typeof resultFromNames === 'string') ? [resultFromNames] : unique(resultFromNames);
var listOfResultFrom = currentResultFromNames.map(function(resultFromName) {
return {resultFrom: find(FilterGroup.resultFrom, 'name', resultFromName)};
});
self.condition.resultFrom = listOfResultFrom.filter(function(selectedResultFrom) {
return typeof selectedResultFrom.resultFrom !== 'undefined';
});
}
};
self.selectAuthorsByIds = function(authorIds) {
if (!isEmpty(authorIds)) {
var currentAuthorIds = (typeof authorIds === "string") ? [authorIds] : unique(authorIds);
var listOfAuthor = currentAuthorIds.map(function(authorId) {
return { author: find(FilterGroup.authors, 'id', authorId)};
});
self.condition.authors = listOfAuthor.filter(function(selectedAuthor) {
return typeof selectedAuthor.author !== "undefined";
});
}
};
self.selectCategoriesByIds = function(categoryIds) {
if (!isEmpty(categoryIds)) {
var currentCategoryIds = (typeof categoryIds === "string") ? [categoryIds] : unique(categoryIds);
var listOfCategory = currentCategoryIds.map(function(categoryId) {
return { category: find(FilterGroup.categories, 'id', categoryId)};
});
self.condition.categories = listOfCategory.filter(function(selectedCategory) {
return typeof selectedCategory.category !== "undefined";
});
}
};
self.selectFilteredKnowledgeBasesByIds = function(kbIds) {
if (!isEmpty(kbIds)) {
var currentKnowledgeBases = (typeof kbIds === "string") ? [kbIds] : unique(kbIds);
var listOfKbs = currentKnowledgeBases.map(function(kbId) {
return { filteredKnowledgeBase: find(FilterGroup.filteredKnowledgeBases, 'id', kbId)};
});
self.condition.filteredKnowledgeBases = listOfKbs.filter(function(selectedKb) {
return typeof selectedKb.filteredKnowledgeBase !== "undefined";
});
}
};
self.initializeSortOrder = function() {
self.condition.sortOrder = FilterGroup.getDefaultSortOrder();
};
self.isFilterOn = function() {
return (isResultFromChanged() ||
isAuthorSelected() ||
isCategorySelected() ||
isKnowledgeBaseSelected());
};
self.getAdditionalParameters = function() {
var additionalParameters = {
'resources': [],
'author': [],
'kb_category': [],
'kb_knowledge_base': []
};
if (self.isFilterOn()) {
additionalParameters['resources'] = getResultFromNames();
additionalParameters['author'] = getAuthorIds();
additionalParameters['kb_category'] = getCategoryIds();
additionalParameters['kb_knowledge_base'] = getFilteredKnowledgeBaseIds();
}
additionalParameters['order'] = getSortOrder();
return additionalParameters;
};
self.saveFilter = function(update) {
self.savedCondition = extend(self.savedCondition, self.condition);
var updateState = (typeof update === "boolean") ? update : true;
if (updateState) {
updateApplicationState();
userPreferences.setPreference('knowledge.search.sort.field', self.savedCondition.sortOrder.propertyValue);
}
};
self.resetFilter = function(update) {
self.condition = extend(self.condition, self.savedCondition);
var updateState = (typeof update === "boolean") ? update : true;
if (updateState) {
updateApplicationState();
}
};
self.initialize = function() {
self.condition = {
resultFrom: [],
authors: [],
categories: [],
knowledgeBase: {},
sortOrder: {},
filteredKnowledgeBases: []
};
self.saveFilter();
};
self.setKeywords = function(keywords) {
self.keywords = keywords;
};
self.isKeywordChanged = function(keywords) {
return self.keywords === keywords;
};
self.resetFilterOptions=function(){
self.resetResultFrom();
self.resetAuthors();
self.resetCategories();
self.resetFilteredKnowledgeBases();
};
function isEmpty(obj) {
if (obj == null) return true;
if (obj.length > 0)    return false;
if (obj.length === 0)  return true;
for (var key in obj) {
if (hasOwnProperty.call(obj, key)) return false;
}
return true;
}
function getFilterKey(obj) {
if (!obj || typeof obj === "boolean") {
return;
}
return Object.keys(obj)[0];
}
function removeFromCondition(allItems, filterToRemove) {
var key = getFilterKey(filterToRemove);
if (key === 'resultFrom') {
return allItems.filter(function(item) {
return item[key]["name"] !== filterToRemove[key]["name"];
});
}
else {
return allItems.filter(function(item) {
return item[key]["id"] !== filterToRemove[key]["id"];
});
}
}
function isKnowledgeBaseSelected() {
return !isEmpty(self.savedCondition.filteredKnowledgeBases);
}
function isResultFromChanged() {
return !isEmpty(self.savedCondition.resultFrom);
}
function isAuthorSelected() {
return !isEmpty(self.savedCondition.authors);
}
function isCategorySelected() {
return !isEmpty(self.savedCondition.categories);
}
function getResultFromNames() {
return self.savedCondition.resultFrom.map(function(selectedResultFrom) {
return selectedResultFrom.resultFrom.name;
});
}
function getAuthorIds() {
return self.savedCondition.authors.map(function(selectedAuthor) {
return selectedAuthor.author.id;
});
}
function getCategoryIds() {
return self.savedCondition.categories.map(function(selectedCategory) {
return selectedCategory.category.id;
});
}
function getFilteredKnowledgeBaseIds() {
return self.savedCondition.filteredKnowledgeBases.map(function(selectedKb) {
return selectedKb.filteredKnowledgeBase.id;
});
}
function getSortOrder() {
return self.savedCondition.sortOrder.actualValue;
}
var extend = function(destination, source) {
for (var property in source) {
destination[property] = source[property];
}
return destination;
};
function updateApplicationState() {
var resultFrom = getResultFromNames();
var authorIds = getAuthorIds();
var categoryIds = getCategoryIds();
var filteredKnowledgeBaseIds = getFilteredKnowledgeBaseIds();
ApplicationState.setResultFrom(resultFrom);
ApplicationState.setAuthors(authorIds);
ApplicationState.setCategories(categoryIds);
ApplicationState.setFilteredKnowledgeBases(filteredKnowledgeBaseIds);
ApplicationState.setSortOrder(self.savedCondition.sortOrder.key);
}
function find(collection, key, value) {
var foundItems = collection.filter(function(item) {
return item[key] === value;
});
if (!foundItems.length) {
return;
}
return foundItems[0];
}
var unique = function(collection) {
return collection.reduce(function(previousValue, currentValue) {
if (previousValue.indexOf(currentValue) < 0) {
return previousValue.concat(currentValue);
}
return previousValue;
}, []);
};
return self;
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.searchFilterApi.js */
angular.module('sn.knowledge')
.factory('SearchFilterApi', ['$log', '$http', '$q', 'SearchProperty', 'ParamTypes', function($log, $http, $q, SearchProperty, ParamTypes) {
"use strict";
var self = this;
self.entity = 'FILTER';
self.filterApiParams = {
paramType	: ParamTypes.FILTER_PARAM_TYPE,
method		: 'getfilters',
filterType	: {
full: 'full'
}
};
self.kbStaticDataApiParams = {
'sysparm_type'	: ParamTypes.KB_STATIC_DATA_PARAM_TYPE,
'method'		: 'getoptions',
'ts'			: new Date()
};
self.searchProperty = Object.create(SearchProperty);
var resetFilterProperties = function() {
self.searchProperty.setProperties(self.entity);
var currentEntity = self.searchProperty.getEntity(self.entity);
return currentEntity.reset();
};
var isBusy = function() {
var currentEntity = self.searchProperty.getEntity(self.entity);
return currentEntity.busy;
};
var isDone = function() {
var currentEntity = self.searchProperty.getEntity(self.entity);
return currentEntity.done;
};
var getFilterData = function(keywords, knowledgeBase, selectedLanguage) {
self.searchProperty.setProperties(self.entity);
var currentEntity = self.searchProperty.getEntity(self.entity);
if (currentEntity.hasKeywordsChanged(keywords)) {
currentEntity.reset();
}
currentEntity.setKeywords(keywords);
if (currentEntity.isNotReady(true)) {
var defer = $q.defer();
defer.resolve();
return defer.promise;
}
currentEntity.setBusy(true);
var params = {
sysparm_type: self.filterApiParams.paramType,
term		: keywords,
method		: self.filterApiParams.method,
filter_type	: self.filterApiParams.filterType.full,
language	: selectedLanguage,
ts			: new Date()
};
if (typeof knowledgeBase === 'string' && knowledgeBase.trim().length) {
params.kb_id = knowledgeBase;
}
var deferredAbort = $q.defer();
var request = $http.get("angular.do", {
params: params,
timeout: deferredAbort.promise
});
var promise = request.then(filterDataSuccess, filterDataFailure);
promise.aborted = false;
promise.done 	= false;
promise.abort = function() {
promise.aborted = true;
deferredAbort.resolve();
};
promise.finally(function() {
promise.abort = angular.noop;
promise.done  = true;
deferredAbort = request = promise = null;
});
return promise;
};
var getKBStaticData = function() {
return $http.get("angular.do", {
params: self.kbStaticDataApiParams
}).then(kbStaticDataSuccess, kbStaticDataFailure);
};
var filterDataSuccess = function(response) {
var currentEntity = self.searchProperty.getEntity(self.entity);
currentEntity.setBusy(false);
return response;
};
var filterDataFailure = function(response) {
if (angular.isDefined(response.status) && response.status != 0) {
$log.error('filter error:', response);
}
var currentEntity = self.searchProperty.getEntity(self.entity);
currentEntity.setBusy(false);
currentEntity.setDone(true);
return $q.reject(response);
};
var kbStaticDataSuccess = function(response) {
return response.data;
};
var kbStaticDataFailure = function(error) {
return $q.reject(error.data);
};
var hasMoreResults = function(meta) {
return angular.isDefined(meta.has_more_results) ? meta.has_more_results : false;
};
return {
getFilterData	: getFilterData,
getKBStaticData	: getKBStaticData,
resetFilterProperties: resetFilterProperties,
isDone	: isDone,
isBusy	: isBusy
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.template.js */
angular.module('sn.knowledge')
.factory('TemplateService', ['$log', '$http', '$q', '$cacheFactory', function($log, $http, $q, $cacheFactory) {
'use strict';
var knowledgeTemplateCache = $cacheFactory('knowledgeTemplateCache');
var getTemplateByName = function(name) {
return $http.get("angular.do", {
params	: {
sysparm_type: 'get_partial',
name		: name,
ts			: new Date()
},
}).then(success, failure);
};
var success = function(response) {
return response.data;
};
var failure = function(response) {
return $q.reject(response.data);
};
return {
getTemplateByName: getTemplateByName
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.search.js */
angular.module('sn.knowledge')
.factory('SearchService', ['$log', '$http', '$q', '$filter', 'SearchProperty', 'ParamTypes',
function($log, $http, $q, $filter, SearchProperty, ParamTypes) {
'use strict';
var self = this;
var trimFilter = 'trim';
var cleanupFilters = [
'noMultipleSpaces', 'shorten',
'noSpacesBeforePunctuation', 'trim', 'ellipsis', 'capitalize'];
self.searchProperty = Object.create(SearchProperty);
var cleanupUsingFilters = function(articles) {
if (angular.isDefined(articles)) {
angular.forEach(articles, function(article) {
article.title = $filter(trimFilter)(article.title);
article.cleanSnippet = article.snippet;
angular.forEach(cleanupFilters, function(name, id) {
try {
article.cleanSnippet = $filter(name)(article.cleanSnippet);
} catch (err) {
cleanupFilters.splice(id, 1);
}
});
});
}
return articles;
};
var resetProperties = function(entity) {
self.searchProperty.setProperties(entity);
var currentEntity = self.searchProperty.getEntity(entity);
return currentEntity.reset();
};
var isDone = function(entity) {
var currentEntity = self.searchProperty.getEntity(entity);
return currentEntity.done;
};
var isBusy = function(entity) {
var currentEntity = self.searchProperty.getEntity(entity);
return currentEntity.busy;
};
var isDebuggingEnabled = function() {
return (angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.debugging) ? kbSystemProperty.debugging : false);
};
var getSearchWindow = function(meta, name) {
var window;
if (angular.isDefined(meta.sources)) {
if (angular.isDefined(meta.sources.interleaved)) {
window = meta.sources.interleaved.window;
} else if (angular.isDefined(meta.sources[name])) {
window = meta.sources[name].window;
} else {
var i = 0;
angular.forEach(meta.sources, function(value, key) {
if (i++ == 0) {
window = value.window;
}
});
}
}
if (!window) {
$log.error('missing source window', meta.sources);
}
return window;
};
var getSearchWindowEnd = function(meta, name) {
var window = getSearchWindow(meta, name);
return angular.isDefined(window) ? parseInt(window.end, 10) : parseInt(self.searchProperty.limit, 10);
};
var hasMoreResults = function(meta) {
return angular.isDefined(meta.has_more_results) ? meta.has_more_results : false;
};
var getConfiguration = function(entity) {
if (entity === '' || entity == 'knowledge')
return self.searchProperty.configuration['articles'];
else if (entity == 'social')
return self.searchProperty.configuration['questions'];
else
return self.searchProperty.configuration[entity];
};
var search = function(entity, keywords, searchParameters, filterParameters, metadata) {
self.searchProperty.setProperties(entity);
var currentEntity = self.searchProperty.getEntity(entity);
if (currentEntity.hasKeywordsChanged(keywords) || !angular.equals(searchParameters, currentEntity.searchParameters)) {
currentEntity.reset();
}
currentEntity.setKeywords(keywords);
currentEntity.setSearchParameters(searchParameters);
if (currentEntity.isNotReady(metadata)) {
var defer = $q.defer();
defer.resolve();
return defer.promise;
}
currentEntity.setBusy(true);
var payload = {
meta	: {
window	: {
'start'	: currentEntity.start(),
'end'	: currentEntity.end(parseInt(self.searchProperty.limit, 10))
},
includePinnedArticles: true,
applyFilter			 : true,
searchWhenEmpty		 : false,
queryForAttachments	 : true
},
context	: getConfiguration(entity).context,
entity	: entity,
query	: {
freetext		: keywords,
searchParameters: searchParameters
},
resources : [],
debug	: isDebuggingEnabled()
};
if (angular.isDefined(metadata)) {
angular.forEach(metadata, function(value, key) {
payload.meta[key] = value;
});
}
if (angular.isDefined(filterParameters) && !isEmpty(filterParameters)) {
for (var key in filterParameters) {
if (key == 'resources') {
payload[key] = filterParameters[key];
} else if(key == "ts_query_kbId"){
payload.meta[key] = filterParameters[key];
}else{
payload.query[key] = filterParameters[key];
}
}
}
var deferredAbort = $q.defer();
var request = $http.get("angular.do", {
params	: {
'sysparm_type'	: ParamTypes.SEARCH_PARAM_TYPE,
'payload'		: payload,
'ts'			: new Date()
},
timeout	: deferredAbort.promise
});
var promise = request.then(searchSuccess, searchFailure);
promise.aborted	= false;
promise.done	= false;
promise.abort = function() {
promise.aborted = true;
deferredAbort.resolve();
};
promise.finally(function() {
promise.abort = angular.noop;
promise.done  = true;
deferredAbort = request = promise = null;
});
return promise;
};
var searchForAlternatePhrases = function(entity, keywords, selectedLanguage) {
self.searchProperty.setProperties(entity);
var currentEntity = self.searchProperty.getEntity(entity);
currentEntity.setKeywords(keywords);
if (currentEntity.isNotReady(true)) {
var defer = $q.defer();
defer.resolve();
return defer.promise;
}
currentEntity.setBusy(true);
var params = {
sysparm_type: 'knowledge_advanced_search_processor',
term		: keywords,
method		: 'getJSONAlternatePhrases',
language    : selectedLanguage,
ts			: new Date()
};
var deferredAbort = $q.defer();
var request = $http.get("angular.do", {
params: params,
timeout: deferredAbort.promise
});
var promise = request.then(searchPhraseSuccess, searchPhraseFailure);
promise.aborted = false;
promise.done 	= false;
var currentEntity = self.searchProperty.getEntity(entity);
currentEntity.setBusy(false);
promise.abort = function() {
promise.aborted = true;
deferredAbort.resolve();
};
promise.finally(function() {
promise.abort = angular.noop;
promise.done  = true;
deferredAbort = request = promise = null;
});
return promise;
};
var searchPhraseSuccess = function(response) {
return response;
};
var searchPhraseFailure = function(response) {
if (angular.isDefined(response.status) && response.status != 0) {
$log.error('searchPhraseFailure error:', response);
}
return $q.reject(response);
};
var searchWithFilter = function(entity, keywords, searchParameters, filterParameters, metadata) {
var isFiltering = angular.isDefined(filterParameters) && !isEmpty(filterParameters);
var currentEntity = self.searchProperty.getEntity(entity);
currentEntity.reset();
currentEntity.setKeywords(keywords);
currentEntity.setSearchParameters(searchParameters);
if (currentEntity.isNotReady(metadata)) {
var defer = $q.defer();
defer.resolve();
return defer.promise;
}
currentEntity.setBusy(true);
var payload = {
meta	: {
window	: {
'start'	: currentEntity.start(),
'end'	: currentEntity.end(parseInt(self.searchProperty.limit, 10))
},
includePinnedArticles: true,
applyFilter			 : true,
searchWhenEmpty		 : false,
queryForAttachments	 : true
},
context	: getConfiguration(entity).context,
entity	: entity,
query	: {
freetext		: keywords,
searchParameters: searchParameters
},
resources : [],
debug	: isDebuggingEnabled()
};
if (isFiltering) {
for (var key in filterParameters) {
if (key == 'resources') {
payload[key] = filterParameters[key];
} else {
payload.query[key] = filterParameters[key];
}
}
}
var deferredAbort = $q.defer();
var request = $http.get("angular.do", {
params: {
'sysparm_type': 'ContextSearchService',
'payload': payload,
'ts': new Date()
},
timeout: deferredAbort.promise
});
var promise = request.then(searchSuccess, searchFailure);
promise.aborted = false;
promise.done 	= false;
promise.abort = function() {
promise.aborted = true;
deferredAbort.resolve();
};
promise.finally(function() {
promise.abort = angular.noop;
promise.done  = true;
deferredAbort = request = promise = null;
});
return promise;
};
var searchSuccess = function(response) {
var data = response.data;
var payload;
var status;
var meta;
var entity;
var currentEntity;
if(!angular.isDefined(response) || !angular.isDefined(data) || !angular.isDefined(data.payload)) {
currentEntity = self.searchProperty.getEntity('');
currentEntity.setBusy(false);
currentEntity.setDone(true);
return response;
}
payload = (typeof data.payload == "string") ? JSON.parse(data.payload) : data.payload;
status = payload.status;
meta = payload.meta;
entity = response.config.params.payload.entity;
currentEntity = self.searchProperty.getEntity(entity);
currentEntity.setBusy(false);
if (status.code === 200) {
payload.reset = (currentEntity.offset === 0);
currentEntity.setOffset(getSearchWindowEnd(meta, getConfiguration(entity).name));
currentEntity.setDone(!hasMoreResults(meta));
var results = payload.results;
var pinnedArticles = [];
if (parseInt(meta.pinnedArticleCount) > 0) {
for (var i = results.length - 1; i >= 0; i--) {
if (results[ i ].meta.source == "pinned") {
pinnedArticles = pinnedArticles.concat(results.splice(i, 1));
}
}
}
payload.results = cleanupUsingFilters(results);
payload.pinnedArticles = cleanupUsingFilters(pinnedArticles);
return payload;
} else {
if (typeof status.err_msg != "undefined" && status.err_msg.length > 0) {
$log.error('search error (status ' + status.code + ': ' + status.err_msg[0] + '):', response);
} else {
$log.error('search error (status ' + status.code + '):', response);
}
return $q.reject(response);
}
};
var searchFailure = function(response) {
if (angular.isDefined(response.status) && response.status != 0) {
$log.error('search error:', response);
}
var entity = response.config.params.payload.entity;
var currentEntity = self.searchProperty.getEntity(entity);
currentEntity.setBusy(false);
return $q.reject(response.data);
};
function isEmpty(obj) {
if (obj == null) return true;
if (obj.length > 0)    return false;
if (obj.length === 0)  return true;
for (var key in obj) {
if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
}
return true;
}
var resetSearchEntities = function(){
self.searchProperty.resetEntities();
}
return {
search	: search,
searchWithFilter : searchWithFilter,
searchForAlternatePhrases : searchForAlternatePhrases,
reset	: resetProperties,
isDone	: isDone,
isBusy	: isBusy,
resetSearchEntities : resetSearchEntities
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.searchProperty.js */
angular.module('sn.knowledge')
.factory('SearchProperty',['KnowledgeGlobalData', function(KnowledgeGlobalData) {
"use strict";
var self = {
defaults	 : {
articleLimit	: 20,
searchCharacterLimit:KnowledgeGlobalData.searchCharacterLimit ? parseInt(KnowledgeGlobalData.searchCharacterLimit,10) : 3
},
limit		 : getArticleLimit(),
configuration: {
articles		: {
name	: 'knowledge',
context	: '03ddb541c31121005655107698ba8f7f'
},
pinnedArticles	: {
name	: 'Pinned',
context	: 'ac821f40bf003100216a85ce2c0739d2'
},
questions: {
name	: 'SocialQA',
context	: '03ddb541c31121005655107698ba8f7f'
}
},
properties	 : {}
};
var property = {
keywords		: "",
searchParameters: {},
offset			: 0,
busy			: false,
done			: false
};
function getArticleLimit() {
if (!angular.isDefined(kbSystemProperty) || !angular.isDefined(kbSystemProperty.articleLimit)) {
return self.defaults.articleLimit;
}
return kbSystemProperty.articleLimit;
}
property.setDone = function(done) {
this.done = done;
};
property.setBusy = function(busy) {
this.busy = busy;
};
property.setOffset = function(offset) {
this.offset = offset;
};
property.start = function() {
return this.offset;
};
property.end = function(limit) {
return this.offset + limit;
};
property.setKeywords = function(keywords) {
this.keywords = keywords;
};
property.setSearchParameters = function(params) {
this.searchParameters = params;
};
property.isNotReady = function(metadata) {
var searchWhenEmpty = false;
if (angular.isDefined(metadata) && angular.isDefined(metadata.searchWhenEmpty)) {
searchWhenEmpty = metadata.searchWhenEmpty;
}
return this.busy || this.done || (!searchWhenEmpty && this.keywords.length < self.defaults.searchCharacterLimit)
};
property.hasKeywordsChanged = function(keywords) {
return keywords != this.keywords;
};
property.reset = function() {
this.keywords			= "";
this.searchParameters 	= {};
this.offset 			= 0;
this.busy 				= false;
this.done 				= false;
};
self.setProperties = function(entity) {
if (this.properties.hasOwnProperty(entity)) {
return;
}
this.addEntity(entity);
};
self.addEntity = function(entity) {
this.properties[entity] = Object.create(property);
};
self.getEntity = function(entity) {
if (!this.properties.hasOwnProperty(entity)) {
this.addEntity(entity);
}
return this.properties[entity];
};
self.resetEntities = function(){
Object.keys(self.properties).forEach(function(key) {
var entity = self.properties[key];
entity.reset();
});
};
return self;
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.myKnowledgeBases.js */
angular.module('sn.knowledge').factory('MyKnowledgeBasesService', ['$http', '$q', '$filter', 'ParamTypes', 'SearchService', 'KnowledgeGlobalData',
function($http, $q, $filter, ParamTypes, SearchService, KnowledgeGlobalData) {
'use strict';
var self = {
defaults: {
articleLimit: 20
},
configuration: {
articlesAndQuestions: {
name: 'knowledge',
context: '03ddb541c31121005655107698ba8f7f'
},
pinnedArticles: {
name: 'Pinned',
context: 'ac821f40bf003100216a85ce2c0739d2'
}
},
entity: ""
};
self.limit = getArticleLimit();
var trimFilter = 'trim';
var cleanupFilters = [
'noMultipleSpaces', 'shorten',
'noSpacesBeforePunctuation', 'trim', 'ellipsis', 'capitalize'];
function getArticleLimit() {
if (!angular.isDefined(KnowledgeGlobalData) || !angular.isDefined(KnowledgeGlobalData.articleLimit)) {
return self.defaults.articleLimit;
}
return KnowledgeGlobalData.articleLimit;
}
function getMyKnowledgeBases() {
return $http.get("angular.do", {
params: {
'sysparm_type': 'my_knowledgebases_processor',
'ts': new Date()
}
}).then(function(response) {
return response.data;
}, function(error) {
return $q.reject(error.data);
});
}
function getCategoriesForKnowledgeBaseSysId(knowledgeBaseSysId,includeEmptyCategories, typeFilter,language) {
var params = {
'sysparm_type': 'my_knowledgebases_processor',
'method': 'getCategoriesForKnowledgeBaseSysId',
'knowledgebase_sys_id': knowledgeBaseSysId,
'language': language,
'type_filter':typeFilter,
'includeEmptyCategories' : includeEmptyCategories,
'ts': new Date()
};
return $http.get("angular.do", {
params: params
}).then(function(response) {
return response.data;
}, function(error) {
return $q.reject(error.data);
});
}
function getArticlesForKnowledgeBaseSysId(knowledgeBaseSysId, page, language) {
return $http.get("angular.do", {
params: {
'sysparm_type': 'my_knowledgebases_processor',
'method': 'getArticlesForKnowledgeBaseSysId',
'knowledgebase_sys_id': knowledgeBaseSysId,
'language': language,
'page': page,
'ts': new Date()
}
}).then(function(response) {
return response.data;
}, function(error) {
return $q.reject(error.data);
});
}
function getArticlesForKnowledgeBaseSysIdInCategorySysId(knowledgeBaseSysId, categorySysId, page, language) {
return $http.get("angular.do", {
params: {
'sysparm_type': 'my_knowledgebases_processor',
'method': 'getArticlesForKnowledgeBaseSysIdInCategorySysId',
'knowledgebase_sys_id': knowledgeBaseSysId,
'category_sys_id': categorySysId,
'language': language,
'page': page,
'ts': new Date()
}
}).then(function(response) {
return response.data;
}, function(error) {
return $q.reject(error.data);
});
}
function getSearchResultsForKnowledgeBaseAndCategory(knowledgeBaseId, categoryIds, sortOrder, window, filterType, language) {
var category = categoryIds ? {type: "category", value: categoryIds} : null;
var payload = getPayload(knowledgeBaseId, category, sortOrder, window, filterType, language);
return $http.post("angular.do","payload="+encodeURIComponent(JSON.stringify(payload)),{
params	: {
'sysparm_type'	: ParamTypes.SEARCH_PARAM_TYPE,
'ts'			: new Date()
},
headers : {'Content-Type': 'application/x-www-form-urlencoded'},
}).then(function(response) {
response.data.payload.results = cleanupUsingFilters(response.data.payload.results);
return response.data;
}, function(error) {
return $q.reject(error.data);
});
}
function getSearchResultsForKnowledgeBaseAndTag(knowledgeBaseId, tagId, sortOrder, window, filterType, language) {
var tag = tagId ? {type: "tag", value: tagId} : null;
var payload = getPayload(knowledgeBaseId, tag, sortOrder, window, filterType, language);
return $http.get("angular.do", {
params: {
'sysparm_type': ParamTypes.SEARCH_PARAM_TYPE,
'payload': payload,
'ts': new Date()
}
}).then(function(response) {
response.data.payload.results = cleanupUsingFilters(response.data.payload.results);
return response.data;
}, function(error) {
return $q.reject(error.data);
});
}
function getSearchResultsForKnowledgeBase(knowledgeBaseId, sortOrder, window, filterType, language) {
var noCategory = null;
return getSearchResultsForKnowledgeBaseAndCategory(knowledgeBaseId, noCategory, sortOrder, window, filterType, language);
}
function getPayload(knowledgeBaseId, browseType, sortOrder, window, filterType, language) {
var payload = {
meta: {
window: {
'start': window.start,
'end': window.end
},
includePinnedArticles: false,
applyFilter: false,
searchWhenEmpty: true
},
context: self.configuration.articlesAndQuestions.context,
entity: self.entity,
query: {
freetext: "",
searchParameters: {
"knowledgeBase": knowledgeBaseId
},
"kb_knowledge_base": [],
"order": sortOrder ? sortOrder : "relevancy"
},
debug: false
};
if(language) {
payload.query.searchParameters.language = language;
} else {
payload.query.searchParameters.language = KnowledgeGlobalData.language;
}
if (browseType && browseType.hasOwnProperty('type') && browseType.type === "tag") {
payload.query.tags = [browseType.value];
} else if (browseType && browseType.hasOwnProperty('type') && browseType.type === "category") {
payload.query.kb_category = browseType.value;
}
if (filterType === "articles") {
payload.resources = ["knowledge"];
} else if (filterType === "questions") {
payload.resources = ["social"];
} else if (filterType === "unanswered-questions") {
payload.resources = ["social"];
payload.query.unansweredQuestionsOnly = true;
} else if (filterType === "answered-questions") {
payload.resources = ["social"];
payload.query.answeredQuestionsOnly = true;
} else if (filterType === "accepted-questions") {
payload.resources = ["social"];
payload.query.acceptedAnswersOnly = true;
} else {
payload.resources = [];
}
return payload;
}
var cleanupUsingFilters = function(results) {
if (angular.isDefined(results)) {
angular.forEach(results, function(result) {
result.title = $filter(trimFilter)(result.title);
result.cleanSnippet = result.snippet;
angular.forEach(cleanupFilters, function(name, id) {
try {
if (name === "shorten") {
result.cleanSnippet = $filter(name)(result.cleanSnippet, 256);
} else {
result.cleanSnippet = $filter(name)(result.cleanSnippet);
}
} catch (err) {
cleanupFilters.splice(id, 1);
}
});
});
}
return results;
};
return {
getMyKnowledgeBases: getMyKnowledgeBases,
getCategoriesForKnowledgeBaseSysId: getCategoriesForKnowledgeBaseSysId,
getArticlesForKnowledgeBaseSysId: getArticlesForKnowledgeBaseSysId,
getArticlesForKnowledgeBaseSysIdInCategorySysId: getArticlesForKnowledgeBaseSysIdInCategorySysId,
getSearchResultsForKnowledgeBaseAndCategory: getSearchResultsForKnowledgeBaseAndCategory,
getSearchResultsForKnowledgeBaseAndTag: getSearchResultsForKnowledgeBaseAndTag,
getSearchResultsForKnowledgeBase: getSearchResultsForKnowledgeBase
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.watcher.js */
angular.module('sn.knowledge').factory('WatcherService', function($log, $window, $timeout) {
'use strict';
var watchers = {};
var delay = 200;
var delayedExecute = function(event, id) {
if (angular.isDefined(watchers[event].timeout)) {
$timeout.cancel(watchers[event].timeout);
}
watchers[event].timeout = $timeout(function() {
execute(event, id);
}, delay);
};
var execute = function(event, id) {
id ? executeSingle(watchers[event].ids[id]) : angular.forEach(watchers[event].ids, executeSingle);
};
var executeSingle = function(config) {
if (!config)
return;
angular.forEach(config.watchers, function(data) {
if (angular.isDefined(data.timeout)) {
$timeout.cancel(data.timeout);
}
data.timeout = $timeout(function() {
config.callback.apply(this, data);
}, 0);
});
};
var register = function(event, identifier, callback, data) {
if (!angular.isDefined(watchers[event])) {
watchers[event] = {
unregister: function() {
},
timeout: null,
ids: {}
};
watchers[event].unregister = angular.element($window).bind(event, function() {
delayedExecute(event);
});
}
if (!angular.isDefined(watchers[event].ids[identifier])) {
watchers[event].ids[identifier] = {
callback: callback,
watchers: []
};
}
watchers[event].ids[identifier].watchers.push(data);
return watchers;
};
var unregister = function(event, identifier) {
if (angular.isDefined(watchers[event])) {
if (angular.isDefined(watchers[event].ids[identifier])) {
delete watchers[event].ids[identifier];
}
}
if (watchers[event].ids.length == 0) {
watchers[event].unregister();
delete watchers[event];
}
return watchers;
};
return {
register: register,
unregister: unregister,
execute: delayedExecute
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/service.browser.js */
angular.module("sn.knowledge")
.factory('browser', function ($window) {
var cache = {};
return {
isHandHeld: function () {
if(cache.isHandHeld === undefined) {
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)) {
cache.isHandHeld = true;
} else {
cache.isHandHeld = false;
}
}
return cache.isHandHeld;
},
isIOS: function () {
if(cache.isIOS === undefined) {
if( navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)) {
cache.isIOS = true;
} else {
cache.isIOS = false;
}
}
return cache.isIOS;
},
isPhone: function () {
if(this.isHandHeld()) {
return this.isSmallScreen();
}
return false;
},
isSmallScreen: function () {
if ($window.matchMedia) {
var mm = $window.matchMedia('(max-width: 549px)');
if (mm) {
return mm.matches;
}
}
var dpr = 1;
if ($window.devicePixelRatio)
dpr = $window.devicePixelRatio;
if (angular.element($window).width() / dpr <= 549)
return true;
return false;
},
getIEVersion: function () {
var rv = -1;
if (navigator.appName == 'Microsoft Internet Explorer') {
var ua = navigator.userAgent;
var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
if (re.exec(ua) != null)
rv = parseFloat( RegExp.$1 );
}
return rv;
},
isMoz: function() {
return navigator.userAgent.indexOf("Firefox") != -1;
},
isIE: function () {
return this.getIEVersion() !== -1;
},
isImagePasteSupport: function(){
if(cache.pasteImageSupport === undefined) {
var reg = /chrome|firefox|rv:11/i;
if(reg.test(navigator.userAgent) && !this.isHandHeld()){
cache.pasteImageSupport = true;
}else{
cache.pasteImageSupport = false;
}
}
return cache.pasteImageSupport;
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/controller.knowledge.js */
angular.module('sn.knowledge')
.controller('KnowledgeController',
['$rootScope', '$log', '$http', '$scope', '$routeParams', '$location', '$timeout', '$window', '$element', 'SearchService', 'SearchProperty', 'SearchFilterApi',
'FilterGroup', 'FilterQuery', 'ApplicationState', 'KnowledgeGlobalData', 'categoryHelper', 'MyKnowledgeBasesService', 'i18n', '$sce',
function($rootScope, $log, $http, $scope, $routeParams, $location, $timeout, $window, $element, SearchService, SearchProperty, SearchFilterApi,
FilterGroup, FilterQuery, ApplicationState, KnowledgeGlobalData, categoryHelper, MyKnowledgeBasesService, i18n, $sce) {
'use strict';
var uiMessages = {};
var self = this;
self.delay = 500;
$scope.filterQuery = FilterQuery;
$scope.filterGroup = FilterGroup;
$scope.requests = {};
$scope.applicationState = ApplicationState;
$scope.knowledgeGlobalData = KnowledgeGlobalData;
i18n.getMessage("Sorry, at least {0} characters are required to perform a valid search.", function(msg){
$scope.searchLimitErrorMessage = msg.replace('{0}', $scope.knowledgeGlobalData.searchCharacterLimit);
});
i18n.getMessage("Search (minimum {0} characters)", function(msg){
$scope.searchPlaceholderText = msg.replace('{0}', $scope.knowledgeGlobalData.searchCharacterLimit);
});
$scope.notOnHomepage = false;
$scope.lastSearchedOn = new Date();
$scope.lastTsQueryId = "";
$scope.searchNav = angular.isDefined(searchNav) && searchNav === 'true';
i18n.getMessage("Your search did not return any results for {0}", function(msg){
$scope.noResultMsg = msg;
});
initializeUIMessages();
$scope.$watch(function() {
return $location.absUrl();
}, function(newLocation, oldLocation) {
if (isPageRefresh(newLocation, oldLocation)) {
return;
}
if (isBrowserBackOrFroward(newLocation)) {
$timeout(function() {
initializeScope();
}, 0);
$timeout(function() {
initializeState();
}, 5);
}
});
$scope.uploadDocument = function() {
$scope.$broadcast('uploadDocumentRequested');
};
$scope.onClickImportArticles = function() {
$scope.$broadcast('importArticlesButtonClicked');
};
$scope.$on('importDialogClosed', function() {
angular.element('#impBtn').focus();
});
$scope.abortRequest = function(type) {
if (!angular.isDefined(type)) return;
if (type instanceof Array) {
angular.forEach(type, function(value) {
$scope.abortRequest(value);
});
} else {
var request = $scope.requests[type];
if (angular.isDefined(request) && angular.isDefined(request.abort)) {
request.abort();
}
}
};
$scope.searchForAlternatePhrases = function(keywords) {
$scope.alternatePhrases = [];
$scope.alternatePhrasesFound = false;
var requestType = 'searchForAlternatePhrases';
var entity = 'alternatePhrases';
if (typeof keywords !== 'string' || !keywords.trim().length) return;
$scope.abortRequest(requestType);
$scope.busy = true;
var promise = SearchService.searchForAlternatePhrases(entity, keywords.trim(), $scope.applicationState.selectedLanguage);
$scope.requests[requestType] = promise;
return promise
.then(onSearchAlternatePhraseSuccess, onSearchAlternatePhraseFailure)
.then(function(response) {
return response;
}, function() {
});
};
$scope.search = function(keywords) {
if (typeof keywords !== 'string' || !keywords.trim().length) {
cleanupSearchAndFilterResults();
$scope.lastSearchedOn = new Date();
FilterQuery.keywords = "";
FilterQuery.resetFilterOptions();
if(!keywords.trim().length){
$scope.hasSearchCharcterLimitError = true;
}
return;
}
if (angular.isDefined(self.searchTimeout)) {
$timeout.cancel(self.searchTimeout);
self.searchTimeout = null;
}
self.searchTimeout = $timeout(function() {
if (!FilterQuery.isKeywordChanged(keywords)) {
if(keywords.trim().length < $scope.knowledgeGlobalData.searchCharacterLimit){
$scope.hasSearchCharcterLimitError = true;
$scope.notOnHomepage = true;
cleanupSearchAndFilterResults();
$scope.lastSearchedOn = new Date();
FilterQuery.keywords = "";
FilterQuery.resetFilterOptions();
return;
}else
$scope.hasSearchCharcterLimitError = false;
cleanupSearchAndFilterResults();
FilterQuery.resetFilterOptions();
FilterQuery.setKeywords(keywords);
FilterQuery.saveFilter(false);
$scope.abortRequest(['search', 'filterData', 'filterSearch']);
$scope.executeSearch(keywords).then(function(response) {
var knowledgeBase = $scope.applicationState.selectedKnowledgeBase.sys_id.length > 0 ? $scope.applicationState.selectedKnowledgeBase.sys_id : "";
$scope.getFilterData(keywords, knowledgeBase);
$scope.lastSearchedOn = new Date();
if(response)
$scope.lastTsQueryId = response.meta.tsQueryId;
});
$scope.searchForAlternatePhrases(keywords);
} else{
$scope.lastSearchedOn = new Date();
}
}, self.delay);
$window.scrollTo(0,0);
};
$scope.getNoSearchResultsErrorMessage = function(instantSearchEnabled) {
var searchKeyword = $scope.getSearchKeyword();
if(instantSearchEnabled) searchKeyword = $scope.keywords;
return $sce.trustAsHtml($scope.noResultMsg.replace('{0}', ('<strong>'+jQuery("<div>").text(searchKeyword).html()+'</strong>')));
};
$scope.makeBusy = function(){
$scope.busy = true;
$scope.done = false;
};
$scope.executeSearch = function(keywords) {
var requestType = 'search';
if (typeof keywords !== 'string' || !keywords.trim().length) {
cleanupSearchAndFilterResults();
return;
}
var additionalParameters = FilterQuery.getAdditionalParameters();
var entity;
if (!additionalParameters['resources'])
entity = '';
else {
var indexOfArticles = additionalParameters['resources'].indexOf('knowledge');
var indexOfQuestions = additionalParameters['resources'].indexOf('social');
if (indexOfArticles === indexOfQuestions)
entity = '';
else if (indexOfArticles !== -1)
entity = 'knowledge';
else if (indexOfQuestions !== -1)
entity = 'social';
else
entity = '';
}
var searchParameters = {
knowledgeBase: $scope.applicationState.selectedKnowledgeBase ? $scope.applicationState.selectedKnowledgeBase.sys_id : "",
language: $scope.applicationState.selectedLanguage
};
if($scope.lastTsQueryId && $scope.lastTsQueryId!=""){
additionalParameters["ts_query_kbId"] = $scope.lastTsQueryId;
}
$scope.abortRequest(requestType);
$scope.makeBusy();
var promise = SearchService.search(entity, keywords.trim(), searchParameters, additionalParameters);
$scope.requests[requestType] = promise;
return promise
.then(onSearchSuccess, onSearchFailure)
.then(function(response) {
setBusyAndDone(entity);
updateFilterAndApplicationState();
return response;
}, function() {
setBusyAndDone(entity);
});
};
$scope.searchWithFilters = function(keywords,shouldUpdateAppState) {
var requestType = 'filterSearch';
$scope.articles = [];
$scope.pinnedArticles = [];
$scope.pinnedArticleIDs = [];
if (typeof keywords !== 'string' || !keywords.trim().length) {
return;
}
$scope.makeBusy();
var additionalParameters = FilterQuery.getAdditionalParameters();
var searchParameters = {
knowledgeBase: $scope.applicationState.selectedKnowledgeBase ? $scope.applicationState.selectedKnowledgeBase.sys_id : "",
language: $scope.applicationState.selectedLanguage
};
var entity;
if (!additionalParameters['resources'])
entity = '';
else {
var indexOfArticles = additionalParameters['resources'].indexOf('knowledge');
var indexOfQuestions = additionalParameters['resources'].indexOf('social');
if (indexOfArticles === indexOfQuestions)
entity = '';
else if (indexOfArticles !== -1)
entity = 'knowledge';
else if (indexOfQuestions !== -1)
entity = 'social';
else
entity = '';
}
var promise = SearchService.searchWithFilter(entity, keywords.trim(), searchParameters, additionalParameters);
$scope.requests[requestType] = promise;
return promise
.then(onSearchSuccess, onSearchFailure)
.then(function(response) {
if(response)
$scope.lastTsQueryId = response.meta.tsQueryId;
setBusyAndDone(entity);
if(shouldUpdateAppState){
updateFilterAndApplicationState();
}
return response;
}, function() {
setBusyAndDone(entity);
});
};
$scope.getFilterData = function(keywords, knowledgeBase) {
var requestType = 'filterData';
if (typeof keywords !== 'string' || !keywords.trim().length) return;
$scope.filterProcessing.isFilterBusy = true;
$scope.filterProcessing.isFilterDone = false;
SearchFilterApi.resetFilterProperties();
$scope.abortRequest(requestType);
if ($scope.hasNoSearchResults()){
$scope.filterProcessing.isFilterBusy = false;
$scope.filterProcessing.isFilterDone = true;
FilterGroup.resetFilterOptions();
return;
}
var promise = SearchFilterApi.getFilterData(keywords.trim(), knowledgeBase, $scope.applicationState.selectedLanguage);
$scope.requests[requestType] = promise;
return promise
.then(getFilterDataSuccess, getFilterDataFailure)
.then(function(response) {
$scope.filterProcessing.isFilterBusy = SearchFilterApi.isBusy();
$scope.filterProcessing.isFilterDone = SearchFilterApi.isDone();
return response;
});
};
$scope.actualArticleId = function(id) {
return id.replace('kb_knowledge:', '');
};
$scope.hasNoSearchResults = function() {
return (!$scope.busy &&
$scope.done &&
isEmpty($scope.articles) &&
isEmpty($scope.pinnedArticles) &&
!isEmpty($scope.keywords) &&
!$scope.hasSearchCharcterLimitError);
};
$scope.getSearchKeyword = function() {
return ApplicationState.queryParams.query;
};
function addTooltipForKbTiles(){
$timeout(function() {
var kbNameEles = $element.find('.kbCard .kbCardOverflow');
for(var i=0;i<kbNameEles.length;){
var ele = kbNameEles[i];
if(ele.scrollWidth > ele.clientWidth){
i++;
} else {
kbNameEles.splice(i,1);
}
}
kbNameEles.tooltip({placement: "top"}).hideFix();
},10);
}
$scope.onClickHome = function() {
$scope.keywords = "";
cleanupSearchAndFilterResults();
$scope.searchbar.$setPristine();
$scope.searchbar.keywords.$pristine = true;
$scope.searchbar.keywords.$dirty = false;
$scope.notOnHomepage = false;
$scope.hasSearchCharcterLimitError = false;
resetBusyAndDone();
FilterQuery.setKeywords("");
SearchProperty.resetEntities();
ApplicationState.removeKbAndCategoryParams();
ApplicationState.removeSearchAndFilterParams();
setDefaultTypeFilter();
$scope.applicationState.selectedKnowledgeBase = ApplicationState.knowledgeBases[0];
addTooltipForKbTiles();
};
$scope.isImportVisible = function() {
if ($scope.knowledgeGlobalData.isMobileOrTablet || $scope.knowledgeGlobalData.deviceType === "tablet"||
$scope.knowledgeGlobalData.deviceType === "mobile" || $scope.knowledgeGlobalData.deviceType === "m" ||
$scope.knowledgeGlobalData.hideImportFunctionality === 'true')
return false;
var canContributeKnowledgeBase = ApplicationState.knowledgeBases.filter(function(kb) {
return kb.canContribute;
});
return canContributeKnowledgeBase.length;
};
$scope.selectKnowledgeBase = function() {
$scope.slidingPanel.isCategoriesVisible = false;
setDefaultTypeFilter();
if (typeof $scope.keywords !== 'string' || !$scope.keywords.trim().length) return;
FilterQuery.resetFilterOptions();
FilterQuery.setKeywords($scope.keywords);
FilterQuery.saveFilter(false);
$scope.searchWithFilters($scope.keywords,true).then(function() {
var knowledgeBase = $scope.applicationState.selectedKnowledgeBase.sys_id.length > 0 ? $scope.applicationState.selectedKnowledgeBase.sys_id : "";
$scope.getFilterData($scope.keywords, knowledgeBase);
});
};
$scope.selectLanguage = function() {
ApplicationState.setLanguage($scope.applicationState.selectedLanguage);
$scope.selectKnowledgeBase();
$scope.searchForAlternatePhrases($scope.keywords);
};
$scope.excludeAll = function(kb) {
return kb.sys_id.length > 0;
};
$scope.toggleSlideNavigationPanel = function() {
if(ApplicationState.isMobileView()) {
angular.element($window).scrollTop(0);
}
if (ApplicationState.isSearchView()) {
$scope.slidingPanel.isFiltersVisible = !$scope.slidingPanel.isFiltersVisible;
} else {
$scope.slidingPanel.isCategoriesVisible = !$scope.slidingPanel.isCategoriesVisible;
}
$timeout(function(){}, 50);
};
$scope.onClickNewArticle = function() {
var url = 'kb_knowledge.do?sys_id=-1';
if(isVersioningInstalled && activeTemplatesFound){
url = "wizard_view.do?sysparm_wizardAction=sysverb_new&sysparm_parent=446e65e30b0003003c328ffe15673a81&sysparm_query=kb_knowledge.do&sys_target=kb_knowledge";
}
var condition = !isEmpty($scope.applicationState.selectedKnowledgeBase) && $scope.applicationState.selectedKnowledgeBase['sys_id'] !== "" && $scope.applicationState.selectedKnowledgeBase["canContribute"];
if (condition) {
url = url + "&sysparm_collection=kb_knowledge_base&sysparm_collection_key=kb_knowledge_base&sysparm_collectionID=" + $scope.applicationState.selectedKnowledgeBase.sys_id
}
$window.location = url;
};
$scope.onClickNewQuestion = function() {
var url = "$social_qa.do?sysparm_cancelable=true&sysparm_view=ask_question";
if($scope.applicationState.isMobileView())
url = url + '&sysparm_device=mobile';
var condition = !isEmpty($scope.applicationState.selectedKnowledgeBase) && $scope.applicationState.selectedKnowledgeBase['sys_id'] !== "" && $scope.applicationState.selectedKnowledgeBase['enable_socialqa'];
if (condition) {
url = url + "&sysparm_kb=" + $scope.applicationState.selectedKnowledgeBase.sys_id
}
$window.location = url;
};
$scope.getCreateQuestionUrl = function() {
var url = "$social_qa.do?sysparm_cancelable=true&sysparm_view=ask_question";
if($scope.applicationState.isMobileView())
url = url + '&sysparm_device=mobile';
var condition = !isEmpty($scope.applicationState.selectedKnowledgeBase) && $scope.applicationState.selectedKnowledgeBase['sys_id'] !== "" && $scope.applicationState.selectedKnowledgeBase['enable_socialqa'];
if (condition) {
url = url + "&sysparm_kb=" + $scope.applicationState.selectedKnowledgeBase.sys_id
}
return url;
};
$scope.back = function() {
$window.history.back();
};
$scope.isWidgetSectionVisible = function() {
if (ApplicationState.selectedKnowledgeBase == null) return false;
var isAll = isEmpty(ApplicationState.selectedKnowledgeBase) ? true : ApplicationState.selectedKnowledgeBase.sys_id.length === 0;
return $scope.searchbar.keywords.$pristine && isAll;
};
$scope.cleanupSearchResults = function() {
$scope.keywords = '';
cleanupSearchAndFilterResults();
};
$scope.isProcessingFilters = function() {
return $scope.filterProcessing.isFilterBusy && !$scope.filterProcessing.isFilterDone;
};
function updateFilterAndApplicationState(){
ApplicationState.setKeywords($scope.keywords);
ApplicationState.setKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id);
ApplicationState.setSelectedCategory();
ApplicationState.setSelectedTag();
ApplicationState.setBrowseType();
ApplicationState.setSelectedTypeFilter($scope.applicationState.selectedTypeFilter.key);
FilterQuery.saveFilter(true);
}
function transFormSourceData(sources) {
var resultFrom = [];
for (var i = 0; i < sources.length; i++) {
var result = {};
result.title = sources[i].title;
if (sources[i].sys_id === 'kb_knowledge')
result.name = 'knowledge';
else
result.name = 'social';
resultFrom.push(result);
}
return resultFrom;
}
$scope.searchUsingAlternatePhrase = function(phrase) {
$scope.keywords = phrase;
$scope.search(phrase);
}
function watchSearchBar() {
var unBindSearchBarWatcher = $scope.$watch('searchbar', function(newSearchBarForm, oldSearchBarForm) {
if (newSearchBarForm && newSearchBarForm !== oldSearchBarForm) {
showView();
unBindSearchBarWatcher();
}
});
}
$scope.$watch('articles', addToolTip);
function showView() {
if (ApplicationState.isSearchView()) {
showSearchView();
} else {
showHomePageView();
}
}
function initializeScope() {
$scope.keywords = "";
$scope.articles = [];
resetBusyAndDone();
FilterQuery.setKeywords("");
SearchProperty.resetEntities();
$scope.filterProcessing = {
isFilterBusy: false,
isFilterDone: false
};
$scope.pinnedArticles = [];
$scope.pinnedArticleIDs = [];
$scope.alternatePhrases = [];
$scope.alternatePhrasesFound = false;
$scope.glideMessages = {};
$scope.panel = {
isOpen: false
};
$scope.featureContentTitle = getFeatureContentTitle();
$scope.slidingPanel = {
isFiltersVisible: false,
isCategoriesVisible: false
};
$scope.isLoadingKnowledgeBase = false;
}
function setBusyAndDone(entity) {
$scope.busy = SearchService.isBusy(entity);
$scope.done = SearchService.isDone(entity);
}
function onSearchSuccess(response) {
if (typeof response === "object") {
if (response.reset) {
$scope.pinnedArticleIDs = getArticleIDs(response.pinnedArticles);
$scope.pinnedArticles = response.pinnedArticles;
$scope.articles = filterOutArticlesByID(response.results, $scope.pinnedArticleIDs);
if (response.meta.sources.knowledge)
$scope.glideMessages = response.meta.sources.knowledge.status;
} else {
$scope.articles = $scope.articles.concat(filterOutArticlesByID(response.results, $scope.pinnedArticleIDs));
}
}
return response;
}
$scope.hasAlternatePhrases = function() {
return $scope.alternatePhrasesFound;
};
function onSearchAlternatePhraseSuccess(response) {
try{
if (!angular.isDefined(response) || !angular.isDefined(response.data)) {
$log.error('onSearchAlternatePhraseSuccess :: response data not defined:');
return response;
}
var data = response.data;
if(data.phrases.length > 0){
$scope.alternatePhrasesFound = true;
$scope.alternatePhrases = data.phrases;
}
}catch(ex){
$log.error('onSearchAlternatePhraseSuccess :: error fetching alternate phrase(s) for search keyword:', ex);
}
return response;
}
function onSearchAlternatePhraseFailure(error) {
$scope.message = "error finding alternate phrase suggestions";
if (angular.isDefined(error.status) && error.status != 0) {
$log.error('onSearchAlternatePhraseFailure error fetching alternate phrase suggestions:', error);
}
return error;
}
function filterOutArticlesByID(articles, ids) {
var removed = 0;
if (angular.isDefined(ids) && ids.length > 0) {
for (var i = articles.length - 1; i >= 0; i--) {
var article = articles[i];
if (ids.indexOf(article.id) > -1) {
removed++;
articles.splice(i, 1);
if (removed >= ids.length) {
break;
}
}
}
}
if($scope.applicationState.isMobileView()) {
for(var i=0;i<articles.length; i++) {
var article = articles[i];
article.link = article.link + '&sysparm_device=mobile';
article.meta.link = article.meta.link + '&sysparm_device=mobile';
}
}
return articles;
}
function getArticleIDs(articles) {
var ids = [];
angular.forEach(articles, function(article) {
ids.push(article.id);
});
return ids;
}
function onSearchFailure(error) {
$scope.message = "";
return error;
}
function getFilterDataSuccess(response) {
if (typeof response === "undefined") {
return response;
}
var data = response.data;
if (!angular.isDefined(response) || !angular.isDefined(data) || !angular.isDefined(data.sources)) {
return response;
}
var data = response.data;
$scope.slidingPanel.isFiltersVisible = false;
FilterGroup.resetFilterOptions();
FilterGroup.addResultFrom(transFormSourceData(data.sources));
FilterGroup.addAuthors(data.authors);
FilterGroup.addCategories(data.categories);
FilterGroup.addFilteredKnowledgeBases(data.filteredKnowledgeBases);
return response;
}
function getFilterDataFailure(error) {
if (angular.isDefined(error.status) && error.status != 0) {
$log.error('error fetching filter data:', error);
}
}
function isEmpty(obj) {
if (obj == null) return true;
if (obj.length > 0)    return false;
if (obj.length === 0)  return true;
for (var key in obj) {
if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
}
return true;
}
function isPageRefresh(newLocation, oldLocation) {
return (oldLocation === newLocation && $rootScope.actualLocation === oldLocation);
}
function isBrowserBackOrFroward(newLocation) {
return ($rootScope.actualLocation === newLocation);
}
function initializeState() {
ApplicationState.setCurrentQueryParams($location.search());
setSelectedLanguage();
loadKnowledgeBases().
then(loadDataAndShowView);
}
function loadDataAndShowView() {
ApplicationState.onLoadServiceCalls().then(function() {
if ($scope.searchbar) {
showView();
} else {
watchSearchBar();
}
});
}
function showSearchView() {
$scope.keywords = ApplicationState.queryParams.query;
$scope.searchbar.$setDirty();
$scope.searchbar.keywords.$pristine = false;
$scope.searchbar.keywords.$dirty = true;
$scope.searchWithFilters($scope.keywords,false);
}
function showHomePageView() {
$scope.searchbar.$setPristine();
$scope.searchbar.keywords.$pristine = true;
$scope.searchbar.keywords.$dirty = false;
selectBrowseView();
addTooltipForKbTiles();
}
function getFeatureContentTitle() {
var location = $location.search();
if (location.hasOwnProperty('sysparm_featured_header') && !isEmpty(location['sysparm_featured_header'])) {
return location['sysparm_featured_header'];
}
return kbSystemProperty.featureContentTitle || "Feature Content";
}
function addToolTip() {
$timeout(function() {
$element.find('.article-icon').tooltip({placement: "right"}).hideFix();
$element.find('.question-icon').tooltip({placement: "right"}).hideFix();
}, 0);
}
function loadKnowledgeBases() {
$scope.applicationState.resetBrowsableKnowledgeBase();
$scope.isLoadingKnowledgeBase = true;
ApplicationState.knowledgeBaseLoaded = false;
return MyKnowledgeBasesService.getMyKnowledgeBases()
.then(onSuccessLoadKnowledgeBases, onErrorLoadKnowledgeBases)
.then(function(){
if(isVersioningInstalled) {
$http.get('api/now/v1/actsub/subscriptions/'+kbSystemProperty.currentUser+'?objType=722d67c367003200d358bb2d07415a9c&getList=true')
.then(function successCallback(response) {
var Ids = response.data.result.subscriptions;
angular.forEach($scope.applicationState.knowledgeBases,function(obj){
if(Ids.indexOf(obj.sys_id) != -1)
obj.isSubscribed = true;
})
} , function errorCallback(response) {
});
}
})
.then(function(response) {
$scope.isLoadingKnowledgeBase = false;
return response;
}).then(function(){
setSelectedKnowledgeBase();
ApplicationState.knowledgeBaseLoaded = true;
ApplicationState.doneStarting = true;
});
}
function onSuccessLoadKnowledgeBases(knowledgeBases) {
addKnowledgeBases(knowledgeBases);
return knowledgeBases;
}
function onErrorLoadKnowledgeBases(error) {
return error;
}
function addKnowledgeBases(knowledgeBases) {
var all = {
"title": i18n.getMessage("All"),
"sys_id": ""
};
if(($scope.knowledgeGlobalData.alwaysShowKbHome == 'true') || (knowledgeBases.length > 1)){
$scope.applicationState.knowledgeBases.push(all);
}
for (var i = 0; i < knowledgeBases.length; i++) {
knowledgeBases[i].isSubscribed = false;
$scope.applicationState.knowledgeBases.push(knowledgeBases[i]);
}
}
function setSelectedKnowledgeBase(response) {
if (ApplicationState.isKBSelectedForBrowsing()) {
var kbId = ApplicationState.queryParams[ApplicationState.paramsKey.KNOWLEDGE_BASE];
$scope.applicationState.selectedKnowledgeBase = find(ApplicationState.knowledgeBases, 'sys_id', kbId);
} else {
$scope.applicationState.selectedKnowledgeBase = ApplicationState.knowledgeBases[0];
}
$timeout(function() {
console.log('Add hover to search bar buttons');
$element.find('.search-bar .buttons .btn').tooltip({placement: "bottom"}).hideFix();
}, 100);
return response;
}
function setSelectedLanguage() {
var urlParams = $location.search();
if (urlParams['language']) {
$scope.applicationState.selectedLanguage = urlParams['language'];
}
}
function selectBrowseView() {
if (ApplicationState.isKBSelectedForBrowsing() && !isEmpty($scope.applicationState.selectedKnowledgeBase)) {
if (ApplicationState.browseByCategory()) {
if (isEmpty($scope.applicationState.selectedFilter) || $scope.applicationState.selectedFilter === "tags") {
$scope.applicationState.selectedFilter = "categories";
}
} else {
if (isEmpty($scope.applicationState.selectedFilter) || $scope.applicationState.selectedFilter === "categories") {
$scope.applicationState.selectedFilter = "tags";
}
}
}
}
function cleanupSearchAndFilterResults() {
$scope.articles = [];
$scope.pinnedArticles = [];
$scope.pinnedArticleIDs = [];
SearchService.resetSearchEntities();
FilterGroup.init();
}
function setDefaultTypeFilter() {
$scope.applicationState.selectedTypeFilter = $scope.applicationState.typeFilterOptions[0];
$scope.applicationState.selectedQuestionFilter = $scope.applicationState.questionFilterOptions[0];
ApplicationState.setSelectedTypeFilter($scope.applicationState.selectedTypeFilter.key);
}
function resetBusyAndDone(){
$scope.busy = false;
$scope.done = false;
}
function find(collection, key, value) {
var foundItems = collection.filter(function(item) {
return item[key] === value;
});
if (!foundItems.length) {
return;
}
return foundItems[0];
}
initializeScope();
initializeState();
if($window.parent.angular) {
var parentScope = $window.parent.angular.element($window.frameElement).scope();
if(parentScope) {
var rightControls = [{event: "kb.home", text: "", 'class': "icon-home"}];
parentScope.$root.$broadcast('@page.ready', 'view', {
title: i18n.getMessage('Knowledge'),
right: rightControls
});
parentScope.$root.$on('kb.home', function() {
$window.open('knowledge_home_launcher.do?sysparm_device=mobile', '_self');
})
}
}
$scope.getSelectedTagName = function() {
if(!$scope.applicationState.selectionTags)
return;
for(var i=0; i<$scope.applicationState.selectionTags.length; i++) {
if($scope.applicationState.selectionTags[i].isSelected)
return $scope.applicationState.selectionTags[i].name;
}
}
$scope.getUIMessage = function(messageKey, params) {
var message = uiMessages[messageKey].translated;
return message.replace(/\{(\d+)\}/g, function() {
return params[arguments[1]];
});
}
function initializeUIMessages() {
uiMessages = {
"SEARCH_RESULTS": {en: "{0} Search Results", translated: "{0} Search Results"}
};
var messageKeys = Object.keys(uiMessages);
var messagesToTranslate = messageKeys.map(function(key) {
return uiMessages[key].en;
});
i18n.getMessages(messagesToTranslate, function(result) {
for (var i = 0; i < messageKeys.length; i++) {
var key = messageKeys[i];
var actualMessage = uiMessages[key];
uiMessages[key].translated = result[actualMessage.en];
}
});
}
}
]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/controller.searchFilter.js */
angular.module('sn.knowledge')
.controller('SearchFilterController', ['$log', '$scope', '$rootScope', '$window','$timeout', 'FilterGroup', 'FilterQuery', 'ApplicationState','KnowledgeGlobalData',
function($log, $scope, $rootScope, $window, $timeout, FilterGroup, FilterQuery, ApplicationState,KnowledgeGlobalData) {
"use strict";
var self = {};
self.timeout;
self.delay = 700;
$scope.applicationState = ApplicationState;
$scope.KnowledgeGlobalData = KnowledgeGlobalData;
$scope.displayDirection = KnowledgeGlobalData.direction === "ltr" ? "right" : "left";
if(ApplicationState.isMobileView())
$scope.isMobileView = 'true';
else
$scope.isMobileView = 'false';
$scope.filterQuery = FilterQuery;
$scope.filterGroup = FilterGroup;
$scope.setFilter = function(type, filterTerm) {
handleSelectionChange(type, filterTerm);
$window.scrollTo(0,0);
};
$scope.resetFilter = function() {
FilterQuery.initialize();
searchWithFilter();
initializeDefaults();
loadNewFilterData();
};
$scope.resetFilterQuery = function() {
FilterQuery.resetFilter();
var knowledgeBase = $scope.applicationState.selectedKnowledgeBase ? $scope.applicationState.selectedKnowledgeBase.sys_id : "";
$scope.getFilterData($scope.keywords,knowledgeBase)
.then(retainFilterSelection);
};
$scope.saveFilterQuery = function() {
FilterQuery.saveFilter();
searchWithFilter();
};
$scope.removeIndividualFilter = function(filter) {
FilterQuery.remove(filter);
FilterQuery.saveFilter();
searchWithFilter();
deselectAuthor(filter);
deselectCategory(filter);
deselectFilteredKnowledgeBase(filter);
};
$scope.openArticleAttachment = function(url, name, external) {
KnowledgeGlobalData.openArticleAttachment(url, name, external);
};
$scope.useDocumentViewer = angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.useDocumentViewer) && kbSystemProperty.useDocumentViewer === 'true';
function handleSelectionChange(type, filterTerm) {
var filter = {};
filter[type] = angular.copy(filterTerm);
if (filterTerm.isSelected) {
FilterQuery.add(filter);
} else {
FilterQuery.remove(filter);
}
saveFilter();
}
function searchWithFilter() {
$scope.searchWithFilters($scope.keywords,true);
}
function loadNewFilterData() {
FilterGroup.resetFilterOptions();
FilterQuery.resetFilterOptions();
var knowledgeBase = $scope.applicationState.selectedKnowledgeBase ? $scope.applicationState.selectedKnowledgeBase.sys_id : "";
$scope.getFilterData($scope.keywords,knowledgeBase);
}
function initializeDefaults() {
FilterQuery.initializeSortOrder();
FilterQuery.saveFilter();
}
function retainFilterSelection() {
if (!FilterQuery.isFilterOn()) {
return;
}
FilterGroup.selectChosenResultFrom(FilterQuery.savedCondition.resultFrom);
FilterGroup.selectChosenAuthors(FilterQuery.savedCondition.authors);
FilterGroup.selectChosenCategories(FilterQuery.savedCondition.categories);
FilterGroup.selectChosenFilteredKnowledgeBases(FilterQuery.savedCondition.filteredKnowledgeBases);
}
function deselectResultFrom(selectedResultFrom) {
if (!selectedResultFrom.hasOwnProperty('resultFrom'))
return ;
FilterGroup.deselectResultFrom(selectedResultFrom);
}
function deselectAuthor(selectedAuthor) {
if (!selectedAuthor.hasOwnProperty('author')) {
return;
}
FilterGroup.deselectAuthor(selectedAuthor);
}
function deselectCategory(selectedCategory) {
if (!selectedCategory.hasOwnProperty('category')) {
return;
}
FilterGroup.deselectCategory(selectedCategory);
}
function deselectFilteredKnowledgeBase(selectedKnowledgeBase) {
if (!selectedKnowledgeBase.hasOwnProperty('filteredKnowledgeBase')) {
return;
}
FilterGroup.deselectFilteredKnowledgeBase(selectedKnowledgeBase);
}
function saveFilter(delay) {
if (self.timeout) {
$timeout.cancel(self.timeout);
}
self.timeout = $timeout(function() {
$scope.saveFilterQuery();
}, delay || self.delay);
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.focus.js */
angular.module('sn.knowledge')
.directive('focus', [ '$timeout', 'ApplicationState', function($timeout, ApplicationState) {
'use strict';
return {
restrict: 'A',
link: function(scope, element, attrs) {
if(ApplicationState.isMobileView())
return;
$timeout(function() {
element[0].focus();
});
}
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.repositionPopover.js */
angular.module('sn.knowledge')
.directive('repositionPopover', [ '$log', function($log) {
'use strict';
var isRightToLeft = function() {
return (angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.direction) && kbSystemProperty.direction === 'rtl');
};
return {
restrict: 'A',
link: function(scope, element, attrs) {
var selector	= element.attr('reposition-popover');
var button 		= element.find('.dropdown-toggle');
var popover		= element.find('.dropdown-menu');
button.on('click', function() {
var width = 0;
jQuery(selector, element).each(function() {
var child = jQuery(this);
if (child.is(':visible')) {
width += child[0].offsetWidth + 10;
}
});
if (isRightToLeft()) {
popover.css({
left: width
});
} else {
popover.css({
right: width
});
}
});
}
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.responsive.js */
angular.module('sn.knowledge')
.directive('responsive', [ '$log', '$window', 'WatcherService', function($log, $window, WatcherService) {
'use strict';
var observeWidth = function(scope, element) {
var width = $window.innerWidth;
var className = getClassForWidth(width);
if (!scope.currentClass) {
element.addClass(className);
scope.currentClass = className;
} else if (className != scope.currentClass) {
element.removeClass(scope.currentClass);
element.addClass(className);
scope.currentClass = className;
}
};
var getClassForWidth = function(width) {
var name;
if (width < 550) {
name = "xs";
} else if (width >= 550 && width < 800) {
name = "sm";
} else if (width >= 800 && width < 1200) {
name = "md";
} else if (width >= 1200) {
name = "lg";
}
return name;
};
return {
restrict: 'A',
terminal: false,
link: function(scope, element, attrs) {
WatcherService.register(
'resize',
'responsive',
observeWidth,
[scope, element]
);
WatcherService.execute('resize');
}
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.knowledgeTemplate.js */
angular.module('sn.knowledge')
.directive('knowledgeTemplate', [ '$log', '$compile', 'TemplateService', function($log, $compile, TemplateService) {
'use strict';
return {
restrict: 'A',
terminal: false,
priority: 1000,
link: function(scope, element, attrs) {
var name = element.attr('knowledge-template');
element.removeAttr('knowledge-template');
TemplateService.getTemplateByName(name)
.then(function(data) {
element.html(data);
$compile(element)(scope);
}, function(error) {
if(error){
$log.error('error loading template: ' + name, error);
element.html('<div class="notification notification-error" role="alert"><strong>Could not load template</strong><br/>Unable to load template \'' + name + '\'');
}
});
}
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.search.js */
angular.module('sn.knowledge')
.directive('search', ['$log', '$compile', '$location', '$rootScope', 'SearchService', 'ApplicationState', 'KnowledgeGlobalData', function($log, $compile, $location, $rootScope, SearchService, ApplicationState, KnowledgeGlobalData) {
'use strict';
var defaultContext = "articles";
var defaultKeywords = kbSystemProperty.defaultContentBlockKeyword ? kbSystemProperty.defaultContentBlockKeyword : "";
var watching = false;
var blockLimit = 10;
var performSearch = function(scope, element, attrs) {
var location = $location.search();
var knowledgeBase = location[ApplicationState.paramsKey.KNOWLEDGE_BASE];
var queryKeywords = (angular.isDefined(location.keywords)) ? location.keywords : defaultKeywords;
var context = (angular.isDefined(attrs.context)) ? attrs.context : defaultContext;
var keywords = (angular.isDefined(attrs.keywords)) ? attrs.keywords : queryKeywords;
var path = (angular.isDefined(attrs.path)) ? String(attrs.path).toLowerCase() == 'true' : true;
var filterParameters = {};
var searchParameters = {
language: ApplicationState.selectedLanguage
};
var metadata = {
applyFilter: true,
searchWhenEmpty: (queryKeywords.length == 0),
metricEntryneeded : false
};
element.html('<div class="loading-indicator-feature-content"><span class="icon icon-loading"></span></div>');
if (angular.isDefined(knowledgeBase)) {
searchParameters.knowledgeBase = knowledgeBase;
}
scope.busy = true;
SearchService.search(context, keywords, searchParameters, filterParameters, metadata)
.then(function(response) {
scope.busy = false;
if (angular.isDefined(response)) {
scope.articles = response.results;
if(ApplicationState.isMobileView()) {
for(var i=0;i<scope.articles.length; i++) {
var article = scope.articles[i];
article.link = article.link + '&sysparm_device=mobile';
if(article.meta && article.meta.link)
article.meta.link = article.meta.link + '&sysparm_device=mobile';
}
}
scope.path = path;
element.html('<div knowledge-template="link-section"></div>');
$compile(element.contents())(scope);
}
return response;
}, function(error) {
scope.busy = false;
element.html('<div class="notification notification-error" role="alert">Unable to load data for search context \'' + context + '\'');
return error;
}).then(function () {
SearchService.reset(context);
});
};
function getArticlesPerBlockLimit() {
if (angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.articlesPerBlockLimit)) {
return kbSystemProperty.articlesPerBlockLimit;
}
return blockLimit;
}
return {
restrict: 'A',
terminal: false,
priority: 1000,
scope: {
isMobileView: "@?",
},
link: function(scope, element, attrs) {
scope.openArticleAttachment = function(url, name, external) {
KnowledgeGlobalData.openArticleAttachment(url, name, external);
};
scope.useDocumentViewer = angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.useDocumentViewer) && kbSystemProperty.useDocumentViewer === 'true';
var watch = (angular.isDefined(attrs.watch)) ? String(attrs.watch).toLocaleLowerCase() === 'true' : true;
scope.articlesPerBlockLimit = getArticlesPerBlockLimit();
if (watch && !watching) {
watching = true;
scope.$watch(function() {
return $rootScope.actualLocation;
}, function(newLocation, oldLocation) {
if ($location.absUrl() === newLocation) {
performSearch(scope, element, attrs);
}
});
} else if (!watch) {
performSearch(scope, element, attrs);
}
}
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.breadcrumbs.js */
angular.module('sn.knowledge')
.directive('breadcrumbs', [ '$log', '$rootScope', 'WatcherService', function($log, $rootScope, WatcherService) {
'use strict';
var defaultDelimiter		= ' > ';
var defaultReverseDelimiter	= ' < ';
var ellipsis				= "...";
var ellipsisLength			= ellipsis.length;
var defaultPlacement		= "top";
var options					= {
delay : { show: 500, hide: 100 }
};
var getDelimiter = function(attrs) {
var delimiter, reverseDelimiter;
if (angular.isDefined(attrs.delimiter) && angular.isDefined(attrs.reverseDelimiter)) {
delimiter		= ' ' + attrs.delimiter + ' ';
reverseDelimiter= ' ' + attrs.reverseDelimiter + ' ';
} else {
delimiter		= defaultDelimiter;
reverseDelimiter= defaultReverseDelimiter;
}
return {
ltr : delimiter,
rtl : reverseDelimiter
};
};
var isRightToLeft = function() {
return (angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.direction) && kbSystemProperty.direction === 'rtl');
};
var joinCrumbs = function(crumbs, attrs) {
var delimiter = getDelimiter(attrs);
if (isRightToLeft()) {
$rootScope.breadCrumbDelimiter = delimiter.rtl;
return crumbs.join(delimiter.rtl);
} else {
var clonedCrumbs = crumbs.slice(0);
$rootScope.breadCrumbDelimiter = delimiter.ltr;
clonedCrumbs.reverse();
return clonedCrumbs.join(delimiter.ltr);
}
};
var setBreadcrumbs = function(element, attrs, crumbs, moreThanTwo) {
var displayCrumbs = crumbs;
if (moreThanTwo) {
displayCrumbs = crumbs.slice(0);
displayCrumbs.splice(1, 0, ellipsis);
}
element.html('<span class="breadcrumbs">' + joinCrumbs(displayCrumbs, attrs).replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span>');
return element[0].firstChild;
};
var setBreadcrumbString = function(element, crumb) {
if(kbSystemProperty.wrapCategoryFilter == 'true')
element.html('<span class="breadcrumbs-wrap">' + crumb.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span>');
else
element.html('<span class="breadcrumbs">' + crumb.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span>');
return element[0].firstChild;
};
var tooWide = function(child, parent) {
var scrollWidth = child.scrollWidth;
var clientWidth = parent[0].clientWidth;
var spacing		= (parent.hasClass("checkbox-label")) ? 32 : 0;
if (scrollWidth <= 0 || clientWidth <= 0) return false;
return (scrollWidth >= (clientWidth - spacing));
};
var updateBreadcrumbsWrapper = function(element, attrs, crumbs, tooltip) {
if (element.is(':visible')) {
element.removeClass('breadcrumb-spinner');
if (crumbs) {
createBreadcrumb(element, attrs, crumbs.slice(0), tooltip);
}
}
};
var calculateAvilableBreadCrumbWidth = function(element) {
var elem;
var breadCrumb;
if(element.parent().parent().parent()[0].lastChild.tagName)
elem = element.parent().parent().parent()[0].lastChild;
else
elem = element.parent().parent()[0].lastChild;
breadCrumb = setBreadcrumbString(element, 'A');
if(elem.tagName.toLowerCase() == "span") {
$rootScope.elementDimensions.breadCrumbTag = 'span';
$rootScope.elementDimensions.breadCrumbCut = 'forward';
$rootScope.elementDimensions.availableWidth = parseInt($j(element[0]).width());
$rootScope.elementDimensions.breadCrumbCharWidth = $j(breadCrumb).width();
$rootScope.elementDimensions.breadCrumbMaxLength = Math.floor($rootScope.elementDimensions.availableWidth/$rootScope.elementDimensions.breadCrumbCharWidth);
} else if(elem.tagName.toLowerCase() == "div") {
$rootScope.elementDimensions.breadCrumbTag = 'div';
$rootScope.elementDimensions.breadCrumbCut = 'backward';
}
};
var updateBreadcrumbs = function(element, attrs, crumbs, tooltip) {
var count		= 0;
var moreThanTwo = (crumbs.length > 2);
var child		= setBreadcrumbs(element, attrs, crumbs, false);
var hasTooltip	= element.hasClass('sn-tooltip-basic');
var exhausted	= false;
element.attr('title', joinCrumbs(crumbs, attrs));
while (!exhausted && tooWide(child, element)) {
count++;
if (crumbs.length > 2) {
crumbs.splice(1, 1);
} else if (crumbs[0].length > (ellipsisLength + 1)) {
crumbs[0] = crumbs[0].substring(0, crumbs[0].length - ellipsisLength - 1) + ellipsis;
} else if (crumbs.length == 2 && crumbs[1].length > (ellipsisLength + 1)) {
crumbs[1] = ellipsis + crumbs[1].substring((ellipsisLength + 1), crumbs[1].length);
} else {
exhausted = true;
break;
}
child = setBreadcrumbs(element, attrs, crumbs, moreThanTwo);
}
if (tooltip.enabled) {
if (hasTooltip) element.tooltip('destroy');
if (count > 0 && typeof element.tooltip == 'function') {
if (!hasTooltip) element.addClass('sn-tooltip-basic');
options.placement = tooltip.placement;
element.tooltip(options);
} else if (hasTooltip) {
element.removeClass('sn-tooltip-basic');
}
}
};
var createBreadcrumb = function(element, attrs, crumbs, tooltip) {
var elementTag = element.parent().parent().parent()[0].lastChild.tagName || element.parent().parent()[0].lastChild.tagName;
elementTag = elementTag.toLowerCase();
var hasTooltip	= element.hasClass('sn-tooltip-basic');
var wasBreadCrumbCut = false;
var newCrumbs = crumbs.slice(0);
var crumbString = joinCrumbs(crumbs, attrs);
var breadCrumbWidth;
var cutForwardDirection;
var delimiterLength = $rootScope.breadCrumbDelimiter.length;
if(elementTag != $rootScope.elementDimensions.breadCrumbTag)
calculateAvilableBreadCrumbWidth(element);
cutForwardDirection = kbSystemProperty.wrapCategoryFilter != 'true' && ($rootScope.elementDimensions.breadCrumbCut == 'forward') ? true : false;
element.attr('title', crumbString);
if(cutForwardDirection) {
breadCrumbWidth = crumbString.length * $rootScope.elementDimensions.breadCrumbCharWidth;
while (newCrumbs.length > 1 && breadCrumbWidth > $rootScope.elementDimensions.availableWidth) {
wasBreadCrumbCut = true;
newCrumbs.pop();
crumbString	= joinCrumbs(newCrumbs, attrs);
breadCrumbWidth = (crumbString.length+delimiterLength) * $rootScope.elementDimensions.breadCrumbCharWidth;
}
if(crumbs.length == 1) {
breadCrumbWidth = crumbs[0].length * $rootScope.elementDimensions.breadCrumbCharWidth;
crumbString = crumbs[0];
}
if(newCrumbs.length >1 && wasBreadCrumbCut) {
if(isRightToLeft())
crumbString = crumbString+$rootScope.breadCrumbDelimiter;
else
crumbString =  $rootScope.breadCrumbDelimiter+crumbString;
}
else {
if(breadCrumbWidth > $rootScope.elementDimensions.availableWidth) {
wasBreadCrumbCut = true;
if(crumbs.length == 1) {
if(isRightToLeft())
crumbString =  ellipsis + crumbString.substring(crumbString.length - $rootScope.elementDimensions.breadCrumbMaxLength).substring(ellipsisLength);
else
crumbString =  crumbString.substring(0,$rootScope.elementDimensions.breadCrumbMaxLength - ellipsisLength) + ellipsis;
}
else {
if(isRightToLeft())
crumbString = ellipsis +crumbString.substring(crumbString.length - $rootScope.elementDimensions.breadCrumbMaxLength).substring(ellipsisLength)+$rootScope.breadCrumbDelimiter;
else
crumbString =  $rootScope.breadCrumbDelimiter+crumbString.substring(0,$rootScope.elementDimensions.breadCrumbMaxLength - ellipsisLength) + ellipsis;
}
}
else {
if(crumbs.length == 1)
crumbString = crumbs[0];
else if(wasBreadCrumbCut) {
if(isRightToLeft())
crumbString = crumbString+$rootScope.breadCrumbDelimiter;
else
crumbString =  $rootScope.breadCrumbDelimiter+crumbString;
}
}
}
}
setBreadcrumbString(element, crumbString);
if (tooltip.enabled) {
if (hasTooltip) element.tooltip('destroy');
if (typeof element.tooltip == 'function') {
if (!hasTooltip) element.addClass('sn-tooltip-basic');
options.placement = tooltip.placement;
element.tooltip(options);
} else if (hasTooltip) {
element.removeClass('sn-tooltip-basic');
}
}
};
return {
restrict: 'A',
scope: {
breadcrumbs: '='
},
terminal: false,
link: function(scope, element, attrs) {
var event = 'resize';
var tooltip = {
enabled		: ((angular.isDefined(attrs.tooltipEnabled)) ? (attrs.tooltipEnabled == 'true') : true),
placement	: ((angular.isDefined(attrs.tooltipPlacement)) ? attrs.tooltipPlacement : defaultPlacement)
};
if(!$rootScope.elementDimensions) {
$rootScope.elementDimensions = {};
$rootScope.elementDimensions.availableWidth = 0;
$rootScope.elementDimensions.breadCrumbTag = '';
}
element.addClass('breadcrumb-spinner');
WatcherService.register(
event,
'breadcrumb',
updateBreadcrumbsWrapper,
[element, attrs, scope.breadcrumbs, tooltip]
);
if (!element.is(':visible')) {
var visibilityWatcher = scope.$watch(
function() {
return element.is(':visible');
},
function(visible) {
if (visible) {
visibilityWatcher();
WatcherService.execute(event);
}
}
);
}
WatcherService.execute(event);
}
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.rating.js */
angular.module('sn.knowledge').directive('kbRating',function(){
return {
restrict: 'E',
scope: {
rating:"="
},
template: '<span ng-repeat="index in [1,2,3,4,5]" ng-class="{\'active-star\':index <= rating, \'inactive-star\':index > rating}" >&#9734;</span>',
link: function(scope){
scope.$watch("rating", function(){
scope.rating = Math.round(scope.rating || 0);
});
}
};
})
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.snip-it.js */
angular.module('sn.knowledge')
.directive('snipIt', [ '$log', 'WatcherService', function($log, WatcherService) {
'use strict';
var ellipsis = "...";
var snipIt = function(element, newValue) {
var parent = element.parent();
var words = newValue.split(" ");
element.text(newValue);
while (element[0].scrollWidth > parent[0].clientWidth && words.length > 1) {
words.splice(words.length - 1, 1);
element.text(words.join(" ") + ellipsis);
}
};
return {
restrict: 'A',
terminal: false,
priority: 1000,
transclude: true,
link: function(scope, element) {
var name = element.attr('snip-it');
var id = element.attr('id');
var watcher = scope.$watch(name, function() {
WatcherService.execute('resize');
watcher();
});
WatcherService.register(
'resize',
'snip-it',
snipIt,
[element, scope.$eval(name)]
);
}
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.detectDevice.js */
angular.module('sn.knowledge')
.directive('detectDevice', ['$log', '$window', function($log, $window) {
'use strict';
return {
restrict: 'A',
terminal: false,
link: function(scope, element, attrs) {
var isIPad = $window.navigator.userAgent.indexOf('iPad') > -1;
if (isIPad) {
element.addClass('ipad');
}
}
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/directive.setIframeScrolling.js */
angular.module('sn.knowledge').directive('setIframeScrolling', [
'$window', function($window) {
return {
restrict:'A',
link: function() {
if (angular.element($window)[0]["frameElement"] !== null) {
var contentWindow = angular.element(angular.element($window)[0].frameElement.contentWindow);
if (angular.element(contentWindow)[0].frameElement.scrolling === "no") {
angular.element(contentWindow)[0].frameElement.scrolling = "auto";
}
}
}
}
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.widget/_articles.widget.js */
angular.module('sn.knowledge.articles.widget', []);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.widget/service.articles.js */
angular.module('sn.knowledge.articles.widget').factory('ArticlesService', ['$log', '$http', '$q', function ($log, $http, $q) {
'use strict';
var self = this;
self.defaults = {
ARTICLES_BLOCK_LIMIT: 10
};
self.articlesLimit;
self.language;
function getArticles(method, knowledgeBaseId) {
return $http.get("angular.do", {
params: getParams(method, knowledgeBaseId)
}).then(function (response) {
return response.data;
}, function (error) {
return $q.reject(error.data);
});
}
function getParams(method, knowledgeBaseId) {
if (!angular.isDefined(knowledgeBaseId) || knowledgeBaseId === null) {
return {
sysparm_type: 'knowledge_top_ranked_articles_processor',
method: method,
maxArticles: angular.isDefined(self.articlesLimit) ? self.articlesLimit : self.defaults.ARTICLES_BLOCK_LIMIT,
language: self.language,
ts: new Date()
};
}
return {
sysparm_type: 'knowledge_top_ranked_articles_processor',
method: method,
maxArticles: angular.isDefined(self.articlesLimit) ? self.articlesLimit : self.defaults.ARTICLES_BLOCK_LIMIT,
knowledgeBase: knowledgeBaseId,
language: self.language,
ts: new Date()
};
}
function setArticlesLimit(limit) {
self.articlesLimit = limit;
}
function setLanguage(language) {
self.language = language;
}
return {
getArticles: getArticles,
setArticlesLimit: setArticlesLimit,
setLanguage: setLanguage
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.widget/controller.articles.js */
angular.module('sn.knowledge.articles.widget')
.controller('ArticlesController', ['$scope', 'ArticlesService', 'KnowledgeGlobalData',
function ($scope, ArticlesService, KnowledgeGlobalData) {
"use strict";
$scope.getArticles = function (knowledgeBase, type, articlesLimit, language) {
ArticlesService.setLanguage(language);
ArticlesService.setArticlesLimit(articlesLimit);
return ArticlesService.getArticles(type, knowledgeBase);
};
$scope.orderByNumber = function(attribute){
return function(article){
return parseInt(article[attribute]);
}
};
$scope.openArticleAttachment = function(url, name, external) {
KnowledgeGlobalData.openArticleAttachment(url, name, external);
};
$scope.useDocumentViewer = angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.useDocumentViewer) && kbSystemProperty.useDocumentViewer === 'true';
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.widget/directive.articlesWidget.js */
angular.module('sn.knowledge.articles.widget')
.directive('articlesWidget', function(getTemplateUrl, ApplicationState) {
'use strict';
return {
restrict: 'AE',
templateUrl: getTemplateUrl("articles.widget") +"&ts="+new Date(),
scope: {
articlesType: '@',
articlesLimit: '@',
language: '@',
knowledgeBase: '@',
isMobileView: '@?',
sortAttribute: '@'
},
controller: "ArticlesController",
link: function(scope, element, attributes) {
scope.isLoadingWidget = false;
attributes.$observe('knowledgeBase', function(knowledgeBase) {
scope.isLoadingWidget = true;
scope.getArticles(knowledgeBase, scope.articlesType, scope.articlesLimit, scope.language)
.then(function(response) {
scope.articles = response;
if(ApplicationState.isMobileView()) {
for(var i=0;i<scope.articles.result.length; i++) {
var article = scope.articles.result[i];
article.link = article.link + '&sysparm_device=mobile';
if(article.meta && article.meta.link)
article.meta.link = article.meta.link + '&sysparm_device=mobile';
}
}
scope.isLoadingWidget = false;
});
})
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/_articles.browsing.js */
angular.module('sn.knowledge.articles.browsing', []);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/directive.categoryBreadcrumb.js */
angular.module('sn.knowledge.articles.browsing')
.directive('categoryBreadcrumb', function (getTemplateUrl) {
"use strict";
return {
restrict: 'AE',
templateUrl: getTemplateUrl('category.breadcrumb') +"&ts="+new Date(),
scope: {
parentCategory: "=",
selectedCategory: "=",
onClickCategory: "="
},
link: function (scope) {
scope.clickCategory = function (category) {
scope.onClickCategory({category: category});
};
}
}
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/directive.articlesContainer.js */
angular.module('sn.knowledge.articles.browsing')
.directive('articlesContainer', function(getTemplateUrl, $timeout, userPreferences, KnowledgeGlobalData) {
"use strict";
return {
restrict: 'AE',
templateUrl: getTemplateUrl('articles.container') +"&ts="+new Date(),
scope: {
onGetAdditionalResults: "&",
browseResults: "=",
browseSortOrder: "=",
browseSelectedSortOrder: "=",
onSelectSortOrder: "&",
parentCategory: "=",
selectedCategory: "=",
selectedTag: '=',
onClickCategory: "&",
isBrowseByCategory: "=",
browseBusy: "=",
isLoadingAccordion: "=",
isMobileView: '@',
typeFilterOptions: "=",
questionFilterOptions: "=",
selectedTypeFilter: "=",
selectedQuestionFilter: "=",
onSelectTypeFilter: "&",
selectedKnowledgeBase:"="
},
link: function(scope) {
scope.getAdditionalArticlesAndQuestions = function() {
scope.onGetAdditionalResults();
};
scope.onClickTag = function(tag) {
scope.$emit('SELECT_TAG_BY_ID', {sys_id: tag.id});
};
scope.selectSortOrder = function() {
$timeout(function() {
scope.onSelectSortOrder({sortOrder: scope.browseSelectedSortOrder});
userPreferences.setPreference('knowledge.search.sort.field', scope.browseSelectedSortOrder.propertyValue);
}, 0);
};
scope.selectTypeFilter = function(index) {
$timeout(function() {
scope.onSelectTypeFilter({typeFilter: scope.selectedTypeFilter})
}, 0);
};
scope.selectFilterType = function(index) {
scope.selectedTypeFilter = scope.typeFilterOptions[index];
scope.selectedQuestionFilter = scope.questionFilterOptions[0];
$timeout(function() {
scope.onSelectTypeFilter({typeFilter: scope.selectedTypeFilter})
}, 0);
};
scope.selectQuestionTypeFilter = function() {
$timeout(function() {
scope.onSelectTypeFilter({typeFilter: scope.selectedTypeFilter})
}, 0);
};
scope.isFilterTypeSelected = function(value) {
return value ==  scope.selectedTypeFilter.key;
};
scope.getCategoryLabel = function() {
if(scope.selectedCategory.sys_id != '-1')
return scope.selectedCategory.label;
return scope.selectedKnowledgeBase.title;
};
scope.openArticleAttachment = function(url, name, external) {
KnowledgeGlobalData.openArticleAttachment(url, name, external);
};
scope.useDocumentViewer = angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.useDocumentViewer) && kbSystemProperty.useDocumentViewer === 'true';
}
}
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/directive.knowledgeBasesCardView.js */
angular.module('sn.knowledge.articles.browsing')
.directive('knowledgeBasesCardView', function (getTemplateUrl,i18n,$timeout) {
var colorArr = ["#278ECF", "#4BD762", "#FFCA1F", "#FF9416", "#D42AE8",
"#535AD7", "#FF402C", "#83BFFF", "#6EDB8F", "#FFE366",
"#FFC266", "#D284BD", "#8784DB", "#FF7B65", "#CAEEFC",
"#9ADBAD", "#FFF1B2", "#FFE0B2", "#FFBEB2", "#B1AFDB"];
var noOfColors = colorArr.length;
return {
restrict: 'AE',
scope: {
knowledgeBases: "=",
onClickKnowledgeBase: "&",
onClickSubscribe: "&",
onClickUnsubscribe: "&",
isMobileView: "@",
},
templateUrl: getTemplateUrl('knowledgebases.cardView') +"&ts="+new Date(),
link: function (scope) {
var ellipsis        = "...";
var ellipsisLength  = ellipsis.length;
var isRightToLeft   = (angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.direction) && kbSystemProperty.direction === 'rtl');
var truncateString = function (value, cutLen) {
var str = value;
if(isRightToLeft)
str =  ellipsis + str.substring(str.length - cutLen).substring(ellipsisLength);
else
str =  str.substring(0,cutLen - ellipsisLength) + ellipsis;
return str;
};
scope.subs_text = '';
scope.subscribedLabel = {};
i18n.getMessage('Unsubscribe');
i18n.getMessage('Subscribed');
i18n.getMessage('Subscribed to {0}');
i18n.getMessage('Unsubscribed from {0}');
scope.hoverIn = function(kb){
scope.subscribedLabel[kb.sys_id] = i18n.getMessage('Unsubscribe');
};
scope.hoverOut = function(kb){
scope.subscribedLabel[kb.sys_id] = i18n.getMessage('Subscribed');
};
scope.clickKnowledgeBase = function (knowledgeBase) {
scope.onClickKnowledgeBase({knowledgeBase: knowledgeBase});
};
scope.clickSubscribe = function (knowledgeBase, $event) {
$event.stopPropagation();
var id = 'unsubscribe'+knowledgeBase.sys_id;
setTimeout(function() { document.getElementById(id).focus(); }, 30);
scope.onClickSubscribe({knowledgeBase: knowledgeBase});
var msg = i18n.getMessage('Subscribed to {0} knowledge Base');
scope.subs_text = msg.replace('{0}',knowledgeBase.title);
};
scope.clickUnsubscribe = function (knowledgeBase, $event) {
$event.stopPropagation();
var id = 'subscribe'+knowledgeBase.sys_id;
setTimeout(function() { document.getElementById(id).focus(); }, 30);
scope.onClickUnsubscribe({knowledgeBase: knowledgeBase});
var msg =  i18n.getMessage('Unsubscribed from {0} knowledge Base');
scope.subs_text = msg.replace('{0}',knowledgeBase.title);
};
scope.excludeAll = function (kb) {
return kb.sys_id.length > 0;
};
scope.getTruncatedTitle = function (title) {
var truncatedStr = title;
if(truncatedStr) {
var titleWords = truncatedStr.split(/[ ]/);
if(titleWords[0].length > 24) {
return truncateString(titleWords[0], 24);
}
else if (truncatedStr.length > 50) {
return truncateString(truncatedStr, 50);
}
}
return truncatedStr;
};
scope.getStyle = function (index,knowledgeBase) {
var colorPicked = knowledgeBase.card_color;
if(!colorPicked){
var thisColorNumber = (index + noOfColors) % noOfColors;
var thisColor = colorArr[thisColorNumber];
}else
var thisColor = colorPicked;
var style = {
'border-left-color': thisColor
};
if(scope.isMobileView == 'false')
style['border-left'] = "4px solid " + thisColor;
else {
style['background-color'] = '' + thisColor;
}
return style;
};
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/directive.tree.js */
angular.module('sn.knowledge.articles.browsing')
.directive('tree', ['$log', '$rootScope', '$timeout', function($log, $rootScope, $timeout) {
var root;
var cachedNode;
var timeout;
var isRightToLeft = function() {
return (angular.isDefined(kbSystemProperty) && angular.isDefined(kbSystemProperty.direction) && kbSystemProperty.direction === 'rtl');
};
var countArticles = function(node) {
var count = 0;
count += parseInt(node.article_count);
if (angular.isDefined(node.childs) && node.childs.length > 0) {
angular.forEach(node.childs, function(child, key) {
count += countArticles(child);
});
}
return count;
};
var countQuestions = function(node) {
var count = 0;
if(!angular.isDefined(node.questions_count))
return count;
count += parseInt(node.questions_count);
if(angular.isDefined(node.childs) && node.childs.length > 0) {
angular.forEach(node.childs, function(child) {
count += countQuestions(child);
});
}
return count;
};
var countItems = function(node) {
var count = countArticles(node);
count += countQuestions(node);
return count;
};
var selectNode = function(node) {
if (node.childs.length || !node.selected) {
$rootScope.$emit('selCat', node);
toggleNode(node, true);
if (node.selected) {
collapseRelatives(root, node);
}
}
};
var toggleNode = function(node, animated) {
node.selected = !node.selected;
if (node.childs.length) {
node.domElement.slideToggle((animated) ? 400 : 0);
if (!node.selected) {
collapseChildren(node.childs);
}
}
};
var collapseChildren = function(children) {
angular.forEach(children, function(node, key) {
if (node.selected) {
toggleNode(node, true);
}
});
};
var collapseRelatives = function(tree, selectedNode) {
angular.forEach(tree, function(node, key) {
if (node.selected) {
if (!isAncestor(node, selectedNode)) {
toggleNode(node, true);
} else if (node.childs.length) {
collapseRelatives(node.childs, selectedNode);
}
}
});
};
var delayedSelectTreeNode = function(tree, selectedNode) {
if (angular.isDefined(timeout)) {
$timeout.cancel(timeout);
}
timeout = $timeout(function() {
selectTreeNode(tree, selectedNode, false);
}, 100);
};
var selectTreeNode = function(tree, selectedNode, animated) {
angular.forEach(tree, function(node, key) {
if (isAncestor(node, selectedNode)) {
if (angular.isDefined(node.domElement)) {
if (!node.selected) {
toggleNode(node, animated);
}
if (node.childs.length) {
selectTreeNode(node.childs, selectedNode);
}
} else if (!node.selected) {
node.selected = true;
}
}
});
collapseRelatives(root, selectedNode);
};
var isAncestor = function(ancestor, selectedNode) {
if (equals(ancestor, selectedNode)) {
return true;
}
for (var i = 0; i < ancestor.childs.length; i++) {
var node = ancestor.childs[ i ];
if (isAncestor(node, selectedNode)) {
return true;
}
}
return false;
};
var equals = function(first, second) {
return (first.$$hashKey === second.$$hashKey);
};
var isSelected = function(node) {
return (node.selected && node.childs.length);
};
var isNotSelectedLTR = function(node) {
return (!node.selected && node.childs.length && !isRightToLeft());
};
var isNotSelectedRTL = function(node) {
return (!node.selected && node.childs.length && isRightToLeft());
};
$rootScope.$on('selectTreeNode', function(event, node) {
if (root.length) {
selectTreeNode(root, node, true);
} else {
cachedNode = node;
}
});
return {
restrict: 'A',
replace	: false,
scope	: {
tree	: '=',
node	: '=',
filterTerm	: '='
},
template: '<div knowledge-template="tree"></div>',
link: function(scope, element, attrs) {
scope.countArticles		= countArticles;
scope.countItems		= countItems;
scope.selectNode		= selectNode;
scope.isSelected		= isSelected;
scope.isNotSelectedLTR 	= isNotSelectedLTR;
scope.isNotSelectedRTL 	= isNotSelectedRTL;
scope.$watch('tree', function() {
if (!angular.isDefined(scope.node)) {
root = scope.tree;
} else {
scope.node.domElement = element;
if (scope.node.childs.length) {
scope.node.selected = true;
toggleNode(scope.node, true);
} else {
scope.node.selected = false;
}
if (cachedNode) {
delayedSelectTreeNode(root, cachedNode);
}
}
});
}
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/directive.categoryTree.js */
angular.module('sn.knowledge.articles.browsing')
.directive('categoryTree', ['$log', '$rootScope', '$compile', '$window','getTemplateUrl', 'categoryHelper',
function($log, $rootScope, $compile, $window ,getTemplateUrl, categoryHelper) {
var compileHelper = function(element, link) {
if (angular.isFunction(link)) {
link = {post: link};
}
var contents = element.contents().remove();
var compiledContents;
return {
pre: (link && link.pre) ? link.pre : null,
post: function(scope, element) {
if (!compiledContents) {
compiledContents = $compile(contents);
}
compiledContents(scope, function(clone) {
element.append(clone);
});
if (link && link.post) {
link.post.apply(null, arguments);
}
}
};
};
return {
restrict: 'A',
replace: false,
scope: {
categories: '=',
selectedCategory: '=',
displayDirection: '@',
onSelectCategory: '&',
onSelectChildCategory: "=",
filterTerm: "="
},
templateUrl: getTemplateUrl('category.tree') +"&ts="+new Date(),
compile: function(element) {
return compileHelper(element, function(scope, element, attrs, controller, transcludeFn) {
scope.selectCategory = function(category) {
category.showChildren = !category.showChildren;
if (!shouldFetchNewData(category)) {
categoryHelper.deselectDownstreamChildren(category);
return;
}
category.isSelected = true;
if (!category.showChildren) {
categoryHelper.collapseDownstreamChildren(category)
}
scope.onSelectCategory({'category': category});
$window.scrollTo(0,0);
};
scope.hasArticleForCategory = function(category) {
return kbSystemProperty.showOnlyPopulatedCategories && kbSystemProperty.showOnlyPopulatedCategories === "true" ? categoryHelper.containArticles(category) > 0 :  true ;
};
scope.hasQuestionsForCategory = function(category) {
return categoryHelper.containQuestions(category) > 0;
};
scope.hasItemsForCategory = function(category) {
return scope.hasArticleForCategory(category) || scope.hasQuestionsForCategory(category);
};
scope.totalArticlesForCategory = categoryHelper.countArticles;
scope.totalItemsForCategory = categoryHelper.countItems;
scope.hasChildren = function(category) {
return category.childs.length > 0 && categoryHelper.countItemsOfChildCategoryOnly(category) > 0;
};
scope.getIconClassName = function(category) {
if (category.showChildren) {
return 'icon-vcr-down'
}
if (scope.displayDirection === "rtl") {
return 'icon-vcr-left';
} else if (scope.displayDirection === "ltr") {
return 'icon-vcr-right';
}
};
function shouldFetchNewData(category) {
return !category.isSelected || category.sys_id !== scope.selectedCategory.sys_id;
}
});
}
};
}]);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/controller.homepage.js */
angular.module('sn.knowledge.articles.browsing')
.controller('HomepageController',
function($rootScope, $log, $http, $scope, $routeParams, $location, $timeout, $element, MyKnowledgeBasesService, ApplicationState, i18n, KnowledgeGlobalData, categoryHelper, KnowledgeTags, FilterGroup, userPreferences) {
"use strict";
$scope.busy = false;
$scope.applicationState = ApplicationState;
$scope.KnowledgeGlobalData = KnowledgeGlobalData;
$scope.selectionCategories = [];
$scope.totalArticlesForCategory = categoryHelper.countArticles;
$scope.categoryFilter = {searchtext: ""};
$scope.tagFilter = {searchtext: ""};
$scope.parentsForSelectedCategory = [];
$scope.browseBusy = false;
$scope.browseResults = [];
$scope.window = {
start: 0,
end: getResultsLimit()
};
$scope.hasMoreResults = false;
var browsingViewInitialized,
allFilterOptions = [];
allFilterOptions = FilterGroup.sortOrder.filter(function(order) {
return order.key != "relevancy";
});
$scope.browseSortOption = {
list: allFilterOptions,
selected: getCategoryDefaultSortOrder(allFilterOptions)
};
$scope.typeFilterOption = {
list: [],
selected: {}
};
$scope.isLoadingAccordion = false;
$scope.selectKB = function(kb) {
$scope.applicationState.selectedKnowledgeBase = kb;
$scope.applicationState.selectedFilter = 'categories';
$scope.applicationState.selectedTypeFilter = $scope.applicationState.typeFilterOptions[0];
$scope.applicationState.selectedQuestionFilter = $scope.applicationState.questionFilterOptions[0];
};
$scope.subscribeKB = function(kb) {
$http.post('api/now/v1/actsub/subscriptions/'+kb.sys_id+'/subscribe',{ "type": '722d67c367003200d358bb2d07415a9c' }
).then(function successCallback(response) {
}, function errorCallback(response) {
});
};
$scope.unsubscribeKB = function(kb) {
$http({
method: 'DELETE',
url: 'api/now/v1/actsub/subscriptions/'+kb.sys_id+'/unsubscribe',
}).then(function successCallback(response) {
}, function errorCallback(response) {
});
};
$scope.isCategoryPanelSelected = function() {
return $scope.applicationState.selectedFilter === 'categories';
};
$scope.isTagsSelected = function() {
return $scope.applicationState.selectedFilter === 'tags';
};
$scope.getArticlesAndQuestions = function() {
if ($scope.hasMoreResults && !$scope.browseBusy) {
$scope.browseBusy = true;
if ($scope.isCategoryPanelSelected()) {
MyKnowledgeBasesService.getSearchResultsForKnowledgeBaseAndCategory($scope.applicationState.selectedKnowledgeBase.sys_id,
getCategoryIdWithChildren($scope.applicationState.selectedCategory),
$scope.browseSortOption.selected.actualValue,
$scope.window, getTypeFilter(), $scope.applicationState.selectedLanguage)
.then(onSuccessScrollSearchResults);
} else {
MyKnowledgeBasesService.getSearchResultsForKnowledgeBaseAndTag($scope.applicationState.selectedKnowledgeBase.sys_id,
$scope.applicationState.selectedTag.sys_id,
$scope.browseSortOption.selected.actualValue,
$scope.window, getTypeFilter(), $scope.applicationState.selectedLanguage)
.then(onSuccessScrollSearchResults);
}
}
};
$scope.selectCategoryBreadCrumb = function(category) {
categoryHelper.selectThisCategory(category);
categoryHelper.collapseDownstreamChildren(category);
$scope.onSelectCategory(category);
};
$scope.onSelectCategory = function(category) {
$scope.browseResults = [];
$scope.applicationState.selectedCategory = category;
$scope.parentsForSelectedCategory = [];
$scope.currentPage = 1;
$scope.window = {
start: 0,
end: getResultsLimit()
};
if (category != null) {
ApplicationState.setKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id);
ApplicationState.setSelectedCategory(category.sys_id);
ApplicationState.removeSearchAndFilterParams();
ApplicationState.setSelectedTypeFilter($scope.applicationState.selectedTypeFilter.key);
categoryHelper.selectParentCategoryOnly($scope.applicationState.selectionCategories, category);
categoryHelper.collapseOtherCategories($scope.applicationState.selectionCategories, category);
$scope.parentsForSelectedCategory = categoryHelper.getSuccessionToCategorySysId(category.sys_id, $scope.applicationState.selectionCategories);
$scope.parentsForSelectedCategory.pop();
$scope.browseBusy = true;
MyKnowledgeBasesService.getSearchResultsForKnowledgeBaseAndCategory($scope.applicationState.selectedKnowledgeBase.sys_id,
getCategoryIdWithChildren(category), $scope.browseSortOption.selected.actualValue, $scope.window, getTypeFilter(),
$scope.applicationState.selectedLanguage)
.then(onSuccessSearchResults);
} else {
if ($scope.applicationState.selectedKnowledgeBase.sys_id.length > 0) {
$scope.browseBusy = true;
MyKnowledgeBasesService.getSearchResultsForKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id,
$scope.browseSortOption.selected.actualValue,
$scope.window, getTypeFilter(), $scope.applicationState.selectedLanguage)
.then(onSuccessSearchResults);
}
}
};
$scope.onSelectTag = function(tag) {
$scope.browseResults = [];
$scope.window = {
start: 0,
end: getResultsLimit()
};
$scope.applicationState.selectedTag = tag;
ApplicationState.setKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id);
ApplicationState.setSelectedTag(tag.sys_id);
ApplicationState.setSelectedTypeFilter($scope.applicationState.selectedTypeFilter.key);
ApplicationState.removeSearchAndFilterParams();
$scope.browseBusy = true;
if ($scope.applicationState.selectedKnowledgeBase) {
MyKnowledgeBasesService.getSearchResultsForKnowledgeBaseAndTag($scope.applicationState.selectedKnowledgeBase.sys_id,
tag.sys_id,
$scope.browseSortOption.selected.actualValue,
$scope.window, getTypeFilter(), $scope.applicationState.selectedLanguage)
.then(onSuccessSearchResults);
}
};
$scope.selectBrowseType = function(type) {
$scope.applicationState.selectedFilter = type;
};
$scope.selectSortOrder = function() {
if ($scope.applicationState.browseByCategory()) {
selectACategoryForKnowledgeBase();
} else {
selectATagForKnowledgeBase();
}
};
$scope.selectTypeFilter = function() {
cleanUpResults();
cleanupFilters();
if ($scope.applicationState.browseByCategory()) {
loadCategoriesForSelectedKnowledgeBase();
} else {
loadTagsForSelectedKnowledgeBase();
}
};
$scope.showCardView = function() {
return $scope.applicationState.selectedKnowledgeBase && $scope.applicationState.selectedKnowledgeBase.sys_id.length === 0 && !$scope.applicationState.isMobileView();
};
$rootScope.$on('SELECT_CATEGORY', function(event, category) {
cleanupFilters();
cleanUpResults();
if (isEmpty($scope.applicationState.selectedKnowledgeBase.sys_id)) {
ApplicationState.removeSearchAndFilterParams();
} else {
loadCategoriesForSelectedKnowledgeBase();
}
});
$rootScope.$on('SELECT_TAG', function(event, tag) {
cleanupFilters();
cleanUpResults();
if (isEmpty($scope.applicationState.selectedKnowledgeBase.sys_id)) {
ApplicationState.removeSearchAndFilterParams();
} else {
loadTagsForSelectedKnowledgeBase();
}
});
$rootScope.$on('SELECT_TAG_BY_ID', function(event, tag) {
cleanupFilters();
cleanUpResults();
if (!$scope.isCategoryPanelSelected()) {
$scope.applicationState.selectionTags.forEach(function(thisTag) {
thisTag.isSelected = thisTag.sys_id === tag.sys_id;
});
$scope.onSelectTag(tag);
}
else {
ApplicationState.setSelectedTag(tag.sys_id);
ApplicationState.setBrowseType('tags');
ApplicationState.setSelectedCategory();
$scope.applicationState.selectedFilter = 'tags';
}
});
$scope.$watch('applicationState.selectedKnowledgeBase', refreshCategoriesOrTags);
$scope.$watch('applicationState.selectedFilter', refreshCategoriesOrTags);
$scope.$watch('browseResults', addToolTip);
$scope.$watch('applicationState.selectedLanguage', refreshCategoriesOrTags);
function initializeBrowsingView() {
if ($scope.applicationState.isKBSelectedForBrowsing() && !isEmpty($scope.applicationState.selectedKnowledgeBase)) {
if ($scope.applicationState.browseByCategory()) {
loadCategoriesForSelectedKnowledgeBase();
} else {
loadTagsForSelectedKnowledgeBase();
}
} else {
showAllKnowledgeBases();
}
}
function refreshCategoriesOrTags(newValue, oldValue) {
if (ApplicationState.isSearchView() || isEmpty($scope.applicationState.selectedKnowledgeBase)) {
return;
}
if (isEmpty($scope.applicationState.selectedKnowledgeBase.sys_id)) {
return;
}
if (isEmpty($scope.applicationState.selectedFilter)) {
$scope.applicationState.selectedFilter = 'categories';
return;
}
setDefaultSortOrder();
cleanupFilters();
if ($scope.isCategoryPanelSelected()) {
refreshCategories();
} else {
refreshTags();
}
}
function refreshCategories() {
cleanUpResults();
if ($scope.applicationState.selectedKnowledgeBase !== null && $scope.applicationState.doneStarting) {
if (isCategoryPresentInQueryParams()) {
loadCategoriesForSelectedKnowledgeBase();
} else {
loadCategoriesAndUpdateQueryParams();
}
}
}
function refreshTags() {
cleanUpResults();
if ($scope.applicationState.selectedKnowledgeBase !== null && $scope.applicationState.doneStarting) {
if (isTagPresentInQueryParams()) {
loadTagsForSelectedKnowledgeBase();
} else {
loadTagsAndUpdateQueryParams();
}
}
}
function loadCategoriesForSelectedKnowledgeBase() {
$scope.isLoadingAccordion = true;
var includeEmptyCategories = kbSystemProperty.showOnlyPopulatedCategories ? kbSystemProperty.showOnlyPopulatedCategories === "false" : true;
MyKnowledgeBasesService.getCategoriesForKnowledgeBaseSysId($scope.applicationState.selectedKnowledgeBase.sys_id,includeEmptyCategories, getTypeFilter(),
$scope.applicationState.selectedLanguage).then(function(data) {
$scope.selectionCategories = data.map(addAdditionalPropertiesToCategory);
$scope.applicationState.selectionCategories = data.map(addAdditionalPropertiesToCategory);
if ($scope.selectionCategories.length > 0) {
selectACategoryForKnowledgeBase();
} else {
ApplicationState.removeSearchAndFilterParams();
ApplicationState.setKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id);
}
$scope.applicationState.doneStarting = true;
$scope.isLoadingAccordion = false;
});
}
function loadTagsForSelectedKnowledgeBase() {
$scope.isLoadingAccordion = true;
KnowledgeTags.getTagsForKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id, getTypeFilter(),
$scope.applicationState.selectedLanguage).then(function(data) {
$scope.selectionTags = addAdditionalTagProperties(data.tags);
$scope.applicationState.selectionTags = addAdditionalTagProperties(data.tags);
if ($scope.applicationState.selectionTags.length > 0) {
selectATagForKnowledgeBase();
} else {
ApplicationState.removeSearchAndFilterParams();
ApplicationState.setKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id);
}
$scope.applicationState.doneStarting = true;
$scope.isLoadingAccordion = false;
});
}
function loadCategoriesAndUpdateQueryParams() {
$scope.isLoadingAccordion = true;
var includeEmptyCategories = true;
MyKnowledgeBasesService.getCategoriesForKnowledgeBaseSysId($scope.applicationState.selectedKnowledgeBase.sys_id,includeEmptyCategories, getTypeFilter(),
$scope.applicationState.selectedLanguage)
.then(function(data) {
$scope.selectionCategories = data.map(addAdditionalPropertiesToCategory);
$scope.applicationState.selectionCategories = data.map(addAdditionalPropertiesToCategory);
var categorySelected = $scope.selectionCategories.length ? getActiveCategoryWithArticle() : null;
if (categorySelected !== null) {
$scope.onSelectCategory(categorySelected);
}
var params = {
knowledgeBaseId: $scope.applicationState.selectedKnowledgeBase.sys_id,
selectedCategory: categorySelected ? categorySelected.sys_id : null,
selectedTag: null,
browseType: $scope.applicationState.selectedFilter
};
cleanUpParams();
updateQueryParams(params);
$scope.isLoadingAccordion = false;
});
}
function loadTagsAndUpdateQueryParams() {
$scope.isLoadingAccordion = true;
KnowledgeTags.getTagsForKnowledgeBase($scope.applicationState.selectedKnowledgeBase.sys_id, getTypeFilter(),
$scope.applicationState.selectedLanguage).then(function(data) {
$scope.selectionTags = addAdditionalTagProperties(data.tags);
$scope.applicationState.selectionTags = addAdditionalTagProperties(data.tags);
var tagSelected = $scope.applicationState.selectionTags.length ? $scope.applicationState.selectionTags[0] : null;
if (tagSelected) {
tagSelected.isSelected = true;
$scope.onSelectTag(tagSelected);
}
var params = {
knowledgeBaseId: $scope.applicationState.selectedKnowledgeBase.sys_id,
selectedCategory: null,
selectedTag: tagSelected ? tagSelected.sys_id : null,
browseType: $scope.applicationState.selectedFilter
};
cleanUpParams();
updateQueryParams(params);
$scope.isLoadingAccordion = false;
});
}
function selectACategoryForKnowledgeBase() {
var urlParams = $location.search();
var categoryFound;
if (isCategoryPresentInQueryParams()) {
categoryFound = categoryHelper.findCategoryBySysId(urlParams[ApplicationState.paramsKey.SELECTED_CATEGORY], $scope.selectionCategories);
}
if (categoryFound) {
categoryHelper.selectThisCategory(categoryFound);
categoryHelper.selectParentCategory($scope.applicationState.selectionCategories, categoryFound);
} else {
categoryFound = getActiveCategoryWithArticle();
}
$scope.onSelectCategory(categoryFound);
}
function selectATagForKnowledgeBase() {
var urlParams = $location.search();
var tagsFound;
if (isTagPresentInQueryParams()) {
var passedTag = urlParams[ApplicationState.paramsKey.SELECTED_TAG];
tagsFound = $scope.applicationState.selectionTags.filter(function(tag) {
return tag.sys_id === passedTag;
});
if (tagsFound.length) {
tagsFound[0].isSelected = true;
$scope.onSelectTag(tagsFound[0]);
} else {
if ($scope.selectionTags.length) {
var firstTag = $scope.selectionTags[0];
firstTag.isSelected = true;
$scope.onSelectTag(firstTag);
}
}
}
}
function getActiveCategoryWithArticle() {
return categoryHelper.getDefaultCategory($scope.applicationState.selectionCategories);
}
function showAllKnowledgeBases() {
$scope.applicationState.doneStarting = true;
$scope.applicationState.selectedKnowledgeBase = $scope.applicationState.knowledgeBases[0];
ApplicationState.setSelectedCategory();
ApplicationState.setSelectedTag();
ApplicationState.setBrowseType();
}
function isCategoryPresentInQueryParams() {
var urlParams = $location.search();
return urlParams[ApplicationState.paramsKey.SELECTED_CATEGORY];
}
function isTagPresentInQueryParams() {
var urlParams = $location.search();
return urlParams[ApplicationState.paramsKey.SELECTED_TAG];
}
function addToolTip() {
$timeout(function() {
$element.find('.article-icon').tooltip({placement: "right"}).hideFix();
$element.find('.question-icon').tooltip({placement: "right"}).hideFix();
}, 0);
}
function onSuccessSearchResults(data) {
$scope.browseBusy = false;
$scope.hasMoreResults = data.payload.meta.has_more_results ? data.payload.meta.has_more_results : false;
$scope.browseResults = data.payload.results;
if ($scope.applicationState.isMobileView()) {
for (var i = 0; i < $scope.browseResults.length; i++) {
var article = $scope.browseResults[i];
article.link = article.link + '&sysparm_device=mobile';
if (article.meta && article.meta.link)
article.meta.link = article.meta.link + '&sysparm_device=mobile';
}
}
if ($scope.hasMoreResults) {
updateSearchWindowForInfiniteScroll(data);
}
}
function onSuccessScrollSearchResults(data) {
$scope.browseBusy = false;
$scope.hasMoreResults = data.payload.meta.has_more_results ? data.payload.meta.has_more_results : false;
$scope.browseResults = $scope.browseResults.concat(data.payload.results);
if ($scope.hasMoreResults) {
updateSearchWindowForInfiniteScroll(data);
}
}
function addAdditionalPropertiesToCategory(category) {
categoryHelper.deselectThisCategory(category);
angular.forEach(category.childs, function(childCategory) {
childCategory = addAdditionalPropertiesToCategory(childCategory);
});
return category;
}
function updateSearchWindowForInfiniteScroll(data) {
var windowEnd = parseInt(getSearchWindowEnd(data.payload.meta), 10);
$scope.window = {
start: windowEnd,
end: windowEnd + getResultsLimit()
};
}
function getResultsLimit() {
var defaultLimit = 20;
if (!angular.isDefined(KnowledgeGlobalData) || !angular.isDefined(KnowledgeGlobalData.articleLimit)) {
return defaultLimit;
}
return parseInt(KnowledgeGlobalData.articleLimit, 10);
}
function getCategoryDefaultSortOrder(sortOptions) {
var sortOrderSetInProperty = KnowledgeGlobalData.searchOrderSetInProperty;
if(isEmpty(sortOrderSetInProperty)){
return sortOptions[0];
}
var sortOrder = FilterGroup.find(sortOptions,'propertyValue',sortOrderSetInProperty);
if(!isEmpty(sortOrder)) {
return sortOrder;
}
return sortOptions[0];
}
function getSearchWindow(meta, name) {
var window;
if (angular.isDefined(meta.sources)) {
if (angular.isDefined(meta.sources.interleaved)) {
window = meta.sources.interleaved.window;
} else if (angular.isDefined(meta.sources[name])) {
window = meta.sources[name].window;
} else {
var i = 0;
angular.forEach(meta.sources, function(value, key) {
if (i++ == 0) {
window = value.window;
}
});
}
}
if (!window) {
$log.error('missing source window', meta.sources);
}
return window;
}
function getSearchWindowEnd(meta, name) {
var window = getSearchWindow(meta, name);
return angular.isDefined(window) ? parseInt(window.end, 10) : getResultsLimit();
}
function addAdditionalTagProperties(tags) {
return tags.map(function(tag) {
tag.isSelected = false;
return tag;
})
}
function getCategoryIdWithChildren(category) {
var categoryIdsWithChildren = [];
if (category.hasOwnProperty('childs') && category.childs.length) {
categoryIdsWithChildren = category.childs.map(function(thisCategory) {
return getCategoryIdWithChildren(thisCategory);
});
}
categoryIdsWithChildren.push(category.sys_id);
return flatten(categoryIdsWithChildren);
}
function flatten(arr) {
return [].concat.apply([], arr)
}
function updateQueryParams(params) {
ApplicationState.setKnowledgeBase(params.knowledgeBaseId);
ApplicationState.setSelectedCategory(params.selectedCategory);
ApplicationState.setSelectedTag(params.selectedTag);
ApplicationState.setBrowseType(params.browseType);
}
function cleanUpParams() {
ApplicationState.setKnowledgeBase();
ApplicationState.setSelectedCategory();
ApplicationState.setSelectedTag();
ApplicationState.setBrowseType();
}
function cleanUpResults() {
$scope.parentsForSelectedCategory = [];
$scope.browseResults = [];
$scope.browseBusy = false;
}
function setDefaultSortOrder() {
var defaultSortOrder = getCategoryDefaultSortOrder($scope.browseSortOption.list);
$scope.browseSortOption.selected = defaultSortOrder;
}
function getTypeFilter() {
var questionFilter;
if (!$scope.applicationState.selectedKnowledgeBase.enable_socialqa ) {
return $scope.applicationState.typeFilterOptions[0].key;
}
questionFilter = getQuestionFilter();
if(questionFilter)
return questionFilter;
return $scope.applicationState.selectedTypeFilter.key;
}
function getQuestionFilter() {
return $scope.applicationState.selectedQuestionFilter.key || '';
}
function cleanupFilters() {
$scope.categoryFilter = {searchtext: ""};
$scope.tagFilter = {searchtext: ""};
}
function isEmpty(obj) {
if (obj == null) return true;
if (obj.length > 0)    return false;
if (obj.length === 0)  return true;
for (var key in obj) {
if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
}
return true;
}
function init(){
if($scope.applicationState.isKnowledgeBaseLoaded()){
initializeBrowsingView();
browsingViewInitialized = true;
}else{
$scope.$watch('applicationState.isKnowledgeBaseLoaded()', function(value){
if(value){
if(!browsingViewInitialized){
initializeBrowsingView();
browsingViewInitialized = true;
}
}
});
}
}
init();
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/filter.treeContains.js */
angular.module('sn.knowledge.articles.browsing')
.filter('categoryTreeStateChange', function() {
function expandFilteredNodeAndChildren(node) {
node.showChildren = true;
if (angular.isDefined(node.childs) && node.childs.length > 0) {
for (var i = 0; i < node.childs.length; i++) {
expandFilteredNodeAndChildren(node.childs[i]);
}
}
}
function expandFilteredNodes(nodes) {
for (var i = 0; i < nodes.length; i++) {
expandFilteredNodeAndChildren(nodes[i]);
}
}
function collapseUnselectedNodes(nodes) {
for (var i = 0; i < nodes.length; i++) {
collapseUnselectedNodeAndChildren(nodes[i]);
}
}
function collapseUnselectedNodeAndChildren(node) {
if (node.isSelected) {
return;
}
node.showChildren = false;
if (angular.isDefined(node.childs) && node.childs.length > 0) {
for (var i = 0; i < node.childs.length; i++) {
collapseUnselectedNodeAndChildren(node.childs[i]);
}
}
}
return function(nodes, filterTerm) {
if (typeof filterTerm === "string" && filterTerm.length > 1) {
expandFilteredNodes(nodes);
} else {
collapseUnselectedNodes(nodes);
}
return nodes;
};
})
.filter('treeContains', function(categoryHelper) {
var contains = function(needle, haystack) {
return (haystack.toLowerCase().indexOf(needle.toLowerCase()) != -1);
};
var matches = function(item, term) {
if (categoryHelper.countItems(item)) {
return (contains(term, item.label));
}
return false;
};
var _treeContains = function(item, term, foundAMatch) {
if (matches(item, term)) {
foundAMatch = true;
}
if (angular.isDefined(item.childs) && item.childs.length > 0) {
for (var i = 0; i < item.childs.length; i++) {
var child = item.childs[i];
if (_treeContains(child, term)) {
return true;
}
}
}
return foundAMatch;
};
return function(items, term) {
var filtered = [];
if (!angular.isDefined(term) || !term.trim()) {
return items;
}
for (var i = 0; i < items.length; i++) {
var item = items[i];
var foundAMatch = false;
if (_treeContains(item, term, foundAMatch)) {
filtered.push(item);
}
}
return filtered;
}
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/service.categoryHelper.js */
angular.module('sn.knowledge.articles.browsing')
.factory('categoryHelper', function () {
var collapseDownstreamChildren = function (category) {
angular.forEach(category.childs, function (childCategory, key) {
deselectThisCategory(childCategory);
collapseDownstreamChildren(childCategory);
});
};
var collapseOtherCategories = function (categoryList, selectedCategory) {
angular.forEach(categoryList, function (category) {
if (!isAncestor(category, selectedCategory)) {
deselectThisCategory(category);
}
collapseOtherCategories(category.childs, selectedCategory);
});
};
var countArticles = function (category) {
var count = 0;
count += parseInt(category.article_count, 10);
if (angular.isDefined(category.childs) && category.childs.length > 0) {
angular.forEach(category.childs, function (child, key) {
count += countArticles(child);
});
}
return count;
};
var containArticles = function (category) {
var count = 0;
count += parseInt(category.article_count, 10);
if(count > 0)
return count;
if (angular.isDefined(category.childs) && category.childs.length > 0) {
for(var i = 0;i<category.childs.length;i++){
count += containArticles(category.childs[i]);
if(count > 0)
break;
};
}
return count;
};
var countArticlesOfChildCategoryOnly = function (category) {
var count = 0;
if (angular.isDefined(category.childs) && category.childs.length > 0) {
angular.forEach(category.childs, function (child, key) {
count += countArticles(child);
});
}
return count;
};
var countQuestions = function(category) {
var count = 0;
if(!angular.isDefined(category.questions_count))
return count;
count += parseInt(category.questions_count, 10);
if(angular.isDefined(category.childs) && category.childs.length > 0) {
angular.forEach(category.childs, function(child) {
count += countQuestions(child);
});
}
return count;
};
var containQuestions = function (category) {
var count = 0;
if(!angular.isDefined(category.questions_count))
return count;
count += parseInt(category.questions_count, 10);
if (angular.isDefined(category.childs) && category.childs.length > 0) {
for(var i = 0;i<category.childs.length;i++){
count += containQuestions(category.childs[i]);
if(count > 0)
break;
};
}
return count;
};
var countQuestionsOfChildCategoryOnly = function(category) {
var count = 0;
if(!angular.isDefined(category.questions_count))
return count;
if(angular.isDefined(category.childs) && category.childs.length > 0) {
angular.forEach(category.childs, function(child) {
count += countQuestions(child);
});
}
return count;
};
var countItems = function(category) {
var count = countArticles(category);
count += countQuestions(category);
return count;
};
var countItemsOfChildCategoryOnly = function(category) {
var count = countArticlesOfChildCategoryOnly(category);
count += countQuestionsOfChildCategoryOnly(category);
return count;
};
var findCategoryByValue = function (categoryValue, categoryList) {
for (var i = 0; i < categoryList.length; i++) {
if (categoryList[i].value == categoryValue) {
return categoryList[i];
}
if (categoryList[i].childs.length > 0) {
var result = findCategoryByValue(categoryValue, categoryList[i].childs);
if (result != null) {
return result;
}
}
}
return null;
};
var getSuccessionToCategorySysId = function (categorySysId, categoryList) {
var result = [];
var foundNothing = false;
var lookingForSysId = categorySysId;
while (!foundNothing) {
var cat = findCategoryBySysId(lookingForSysId, categoryList);
if (cat == null) {
foundNothing = true;
}
else {
lookingForSysId = cat.parent_id;
result.unshift(cat);
}
}
return result;
};
var findCategoryBySysId = function (categorySysId, categoryList) {
for (var i = 0; i < categoryList.length; i++) {
if (categoryList[i].sys_id == categorySysId) {
return categoryList[i];
}
if (categoryList[i].childs.length > 0) {
var result = findCategoryBySysId(categorySysId, categoryList[i].childs);
if (result != null) {
return result;
}
}
}
return null;
};
var getDefaultCategory = function (categoryList) {
var activeCategoriesWithMinimumOneArticle = categoryList.filter(function (category) {
return countArticles(category) > 0 || countQuestions(category) >0
});
var activeCategory = activeCategoriesWithMinimumOneArticle.length ? activeCategoriesWithMinimumOneArticle[0] : null;
if (activeCategory) {
selectThisCategory(activeCategory);
}
return activeCategory;
};
var isAncestor = function (ancestor, selectedNode) {
if (equals(ancestor, selectedNode)) {
return true;
}
for (var i = 0; i < ancestor.childs.length; i++) {
var node = ancestor.childs[i];
if (isAncestor(node, selectedNode)) {
return true;
}
}
return false;
};
var selectParentCategory = function (categoryList, selectedCategory) {
angular.forEach(categoryList, function (category) {
if (isAncestor(category, selectedCategory)) {
selectThisCategory(category);
selectParentCategory(category.childs, selectedCategory);
}
});
};
var selectParentCategoryOnly = function(categoryList, selectedCategory) {
angular.forEach(categoryList, function(category) {
if (isAncestor(category, selectedCategory)) {
if (category.sys_id !== selectedCategory.sys_id) {
selectThisCategory(category)
}
selectParentCategoryOnly(category.childs, selectedCategory);
}
});
};
var selectThisCategory = function (category) {
category.isSelected = true;
category.showChildren = true;
};
var deselectThisCategory = function (category) {
category.isSelected = false;
category.showChildren = false;
};
var deselectDownstreamChildren = function (category) {
angular.forEach(category.childs, function (childCategory, key) {
deselectThisCategory(childCategory);
deselectDownstreamChildren(childCategory);
});
};
var equals = function (first, second) {
return (first.sys_id === second.sys_id);
};
return {
collapseDownstreamChildren: collapseDownstreamChildren,
collapseOtherCategories: collapseOtherCategories,
countArticles: countArticles,
countQuestions: countQuestions,
containArticles: containArticles,
containQuestions: containQuestions,
countItems: countItems,
countItemsOfChildCategoryOnly:countItemsOfChildCategoryOnly,
findCategoryByValue: findCategoryByValue,
getSuccessionToCategorySysId: getSuccessionToCategorySysId,
findCategoryBySysId: findCategoryBySysId,
getDefaultCategory: getDefaultCategory,
isAncestor: isAncestor,
selectParentCategory: selectParentCategory,
selectParentCategoryOnly:selectParentCategoryOnly,
selectThisCategory: selectThisCategory,
deselectThisCategory: deselectThisCategory,
deselectDownstreamChildren: deselectDownstreamChildren
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/directive.tagList.js */
angular.module('sn.knowledge.articles.browsing')
.directive('snTagList', function (getTemplateUrl) {
'use strict';
return {
restrict: 'AE',
scope: {
tags: '=snTagList',
displayDirection: '=',
onSelectTag: '&',
selectedTag: "=",
filterTerm: "="
},
templateUrl: getTemplateUrl('article.tag_list') +"&ts="+new Date(),
link: function (scope) {
scope.clickTag = function (tag) {
tag.isSelected = true;
scope.onSelectTag({tag: tag});
deselectOtherTags(scope.tags, tag);
};
function deselectOtherTags(tags, selectedTag) {
angular.forEach(tags, function (tag) {
if (tag.sys_id !== selectedTag.sys_id) {
tag.isSelected = false;
}
});
}
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.browsing/service.knowledgeTags.js */
angular.module('sn.knowledge.articles.browsing').factory('KnowledgeTags', function ($http, $q) {
'use strict';
function getTagsForKnowledgeBase(knowledgeBase,typeFilter,language) {
return $http.get("angular.do", {
params: {
'sysparm_type': 'knowledge_tags_processor',
'method': 'get_tags_for_knowledge_base',
'kb_id': knowledgeBase,
'language': language,
'type_filter':typeFilter,
'ts': new Date()
}
}).then(function (response) {
return response.data;
}, function (error) {
return $q.reject(error.data);
});
}
return {
getTagsForKnowledgeBase: getTagsForKnowledgeBase
};
});
;
;
