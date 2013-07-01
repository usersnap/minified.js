if(/^u/.test(typeof define)){var def={};this.define=function(m,d){def[m]=d()};this.require=function(m){return def[m]}}
define("minifiedUtil",function(){function m(e){return e.substr(0,3)}function d(e){return null!=e?""+e:""}function j(e){return"string"==typeof e}function n(e){return"function"==typeof e}function g(e){return!!e&&"object"==typeof e}function r(e){return"number"==typeof e}function q(e){return g(e)&&!!e.getDay}function h(e){return!0===e||!1===e}function p(e){var a=typeof e;return"object"==a?!(!e||!e.getDay):"string"==a||"number"==a||h(e)}function s(e){return!!e&&null!=e.length&&!j(e)&&!(e&&e.nodeType)&&
!n(e)}function k(e){return e}function u(e){return e+1}function t(e,a,b){return d(e).replace(a,null!=b?b:"")}function Q(e){return t(e,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function F(e){return t(e,/^\s+|\s+$/g)}function y(e,a){for(var b in e)e.hasOwnProperty(b)&&a(b,e[b]);return e}function B(e,a){if(e)for(var b=0;b<e.length;b++)a(e[b],b);return e}function G(e,a){var b=[];B(e,function(e,c){a(e,c)&&b.push(e)});return b}function R(e,a,b){var c=[];e(a,function(e,a){s(e=b(e,a))?B(e,function(e){c.push(e)}):
null!=e&&c.push(e)});return c}function z(e,a){return R(B,e,a)}function C(e){var a=[];y(e,function(e){a.push(e)});return a}function v(e,a){var b=[];B(e,function(e,c){b.push(a(e,c))});return b}function w(e,a,b){var c=a;B(e,function(e,a){c=b(c,e,a)});return c}function A(e,a){if(s(e)){var b=L(a);return c(L(e).sub(0,b.length),b)}return null!=a&&e.substr(0,a.length)==a}function H(e,a){if(s(e)){var b=L(a);return L(e).sub(-b.length).equals(b)||!b.length}return null!=a&&e.substr(e.length-a.length)==a}function I(e){var a=
e.length;return v(e,function(){return e[--a]})}function U(e,a,b){if(!s(e))return[];var c=e.length,f=0>a?c+a:a,l=null==b?c:0<=b?b:c+b;return G(e,function(e,a){return a>=f&&a<l})}function D(e,a){var b={};B(e,function(e){b[e]=a});return b}function S(e,a,b){y(e,function(e,c){if(null==a[e]||!b)a[e]=c});return a}function a(e,a){for(var b=n(a)?a:function(e,b){if(a===e)return b},c,f=0;f<e.length;f++)if(null!=(c=b(e[f],f)))return c}function b(e,a){if(s(e))for(var b=0;b<e.length;b++)if(e[b]==a)return!0;return!1}
function c(e,b){var f=n(e)?e():e,l=n(b)?b():b;if(f==l)return!0;if(null==f||null==l)return!1;if(p(f)||p(l))return q(f)&&q(l)&&f.getTime()==l.getTime();if(s(f))return f.length!=l.length?!1:!a(f,function(e,a){if(!c(e,l[a]))return!0});if(s(l))return!1;var d=C(f),h=d.length,g=0;y(l,function(){g++});return h!=g?!1:!a(d,function(e){if(!c(f[e],l[e]))return!0})}function f(e,a,b){return e.apply(b&&a,v(b||a,k))}function l(e,a,b){return v(e,function(e){return n(e)?f(e,a,b):V})}function x(e,a,b,c){return function(){return f(e,
a,z([b,arguments,c],k))}}function M(e,a){return E(a,0,0,0,e)}function E(e,a,b,c,f,l,d){function p(e){var a=e.length;return a>d?p(e.substr(0,a-d))+(l||",")+e.substr(a-d):e}var g=0>e,h=/(\d+)(\.(.*))?/.exec((g?-e:e).toFixed(a));e=h[1];for(c=(c||".")+h[3];e.length<(f||1);)e="0"+e;d&&(e=p(e));return(g?"-":"")+e+(a?b?t(c,/[.,]?0+$/):c:"")}function X(e,a,b){return null==a||!e?0:60*parseInt(e[a])+parseInt(e[a+1])+b.getTimezoneOffset()}function aa(e,a){if(1==arguments.length)return aa(null,e);if(/^\?/.test(e)){if(""==
F(a))return null;e=e.substr(1)}var b,c=(b=/[0#]([.,])[_9]/.exec(e))?b[1]:(b=/^[.,]$/.exec(e))?b[0]:".";b=parseFloat(t(t(t(a,","==c?/\./g:/,/g),c,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(b)?V:b}function ba(e){return new Date(e.getTime())}function T(e,a,b){e["set"+a].call(e,e["get"+a].call(e)+b);return e}function N(a,b,c){return 3>arguments.length?N(new Date,a,b):T(ba(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function ca(a,b,c){var f=b.getTime(),l=c.getTime(),d=l-f;if(0>d)return-ca(a,c,b);if(b={milliseconds:1,
seconds:1E3,minutes:6E4,hours:36E5}[a])return d/b;b=a.charAt(0).toUpperCase()+a.substr(1);a=Math.floor(d/{fullYear:31536E6,month:2628E6,date:864E5}[a]-2);f=T(new Date(f),b,a);for(d=a;d<1.2*a+4;d++)if(T(f,b,1).getTime()>l)return d}function da(a){return t(a,/['"\t\n\r]/g,function(a){return ia[a]})}function Y(a,b){if(W[a])return W[a];var c=new Function("obj","each","esc","print","_","with(_.isObject(obj)?obj:{}){"+v(a.split(/{{|}}}?/),function(a,e){var b,c,f=a==(c=t(a,/^{/))?"esc(":"";return e%2?(b=
/^#each\b(.*)/.exec(c))?"each("+(b[1]||"obj")+", function(key, value, index){with(_.isObject(value)?value:{}){":(b=/^#(else\s*)?(if\b)?(.*)/.exec(c))?(b[1]?"}else":"")+(b[2]?"if("+(b[3]||"obj")+")":"")+"{":(b=/^\/(if)?/.exec(c))?b[1]?"}\n":"}});\n":(b=/(.*)::(.*)/.exec(c))?"print("+f+'_.formatValue("'+da(b[2])+'",'+(""==F(b[1])?"obj":b[1])+(f&&")")+"));\n":"print("+f+(""==F(c)?"obj":c)+(f&&")")+");\n":'print("'+da(a)+'");\n'}).join("")+"}");return W[a]=function(a){var e=[];c(a,function(a,b){s(a)?
B(a,function(a,e){b.call(a,e,a,e)}):y(a,b)},b||k,function(){f(e.push,e,arguments)},L);return e.join("")}}function ea(a){return t(a,/[<>'"&]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}function O(a,b){for(var c=0,f=0;f<a.length;f++){var l=a[f];if(b&&s(l))for(var d=0;d<l.length;d++)this[c++]=l[d];else this[c++]=l}this.length=c;this._=!0}function L(){return new O(arguments,!0)}function P(a){return function(b,c){return new O(a(this,b,c))}}function J(a){return function(b,c){return a(this,b,c)}}function K(a){return function(b,
c,f){return new O(a(b,c,f))}}var V,Z="January,February,March,April,May,June,July,August,September,October,November,December".split(/,/),fa=v(Z,m),ga="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(/,/),ja=v(ga,m),ha=["am","pm"],ia={'"':'\\"',"'":"\\'","\n":"\\n","\t":"\\t","\r":"\\r"},W={},W={};S({each:J(B),filter:P(G),collect:P(z),map:P(v),reduce:J(w),toObject:J(D),equals:J(c),sub:P(U),reverse:P(I),find:J(a),startsWith:J(A),endsWith:J(H),contains:J(b),call:P(l),array:function(){return v(this,
k)},func:function(){var a=this;return function(){return new O(l(a,arguments))}},join:function(a){return v(this,k).join(a)},sort:function(a){return new O(v(this,k).sort(a))},uniq:function(){var a={};return this.filter(function(b){if(a[b])return!1;a[b]=1;return!0})},intersection:function(a){var b=D(a,1);return this.filter(function(a){var e=b[a];b[a]=0;return e})},tap:function(a){a(this);return this}},O.prototype);S({bind:x,partial:function(a,b,c){return x(a,null,b,c)},once:function(a){var b=0;return function(){if(!b++)return f(a,
this,arguments)}},nonOp:k,each:B,eachObj:y,toObject:D,filter:K(G),filterObj:function(a,b){var c={};y(a,function(a,e){b(a,e)&&(c[a]=e)});return c},collect:K(z),collectObj:K(function(a,b){return R(y,a,b)}),map:K(v),mapObj:function(a,b){var c={};y(a,function(a,e){c[a]=b(a,e)});return c},reduce:w,find:a,contains:b,sub:K(U),reverse:K(I),startsWith:A,endsWith:H,equals:c,isList:s,isFunction:n,isObject:g,isNumber:r,isBool:h,isDate:q,isValue:p,isString:j,toString:d,escapeRegExp:Q,trim:F,dateClone:ba,dateAdd:N,
dateDiff:ca,dateMidnight:function(a){a=a||new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:E,pad:M,formatValue:function(b,c){b=t(b,/^\?/);if(q(c)){var f,l,p=b,g=c,h={y:["FullYear",k],M:["Month",u],n:["Month",fa],N:["Month",Z],d:["Date",k],m:["Minutes",k],H:["Hours",k],h:["Hours",function(a){return a%12||12}],K:["Hours",u],k:["Hours",function(a){return a%12+1}],s:["Seconds",k],S:["Milliseconds",k],a:["Hours",function(a,b){return(b||ha)[12>a?0:1]}],w:["Day",ja],W:["Day",
ga],z:["TimezoneOffset",function(a){if(f)return f;var b=0<a?a:-a;return(0>a?"+":"-")+M(2,Math.floor(b/60))+M(2,b%60)}]};if(l=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(b))f=l[1],g=N(c,"minutes",X(l,2,c)),p=l[4];return t(p,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(a,b,c,e){if(b=h[b])a=g["get"+(s(b)?b[0]:b)].call(g),e=e&&e.split(","),a=s(b[1])?(e||b[1])[a]:b[1](a,e),null!=a&&!j(a)&&(a=M(c.length+1,a));return a})}return a(b.split(/\s*\|\s*/),function(a){var b,e;if(b=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){a=
c;var f=parseFloat(b[3]);if(isNaN(f)||!r(a))a=null==a?"null":d(a),f=b[3];if(b[1]){if(!b[2]&&a==f||"<"==b[1]&&a>f||">"==b[1]&&a<f)return null}else if(a!=f)return null;a=b[4]}if(r(c)&&(b=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(a))){e=d(b[1])+d(b[2]);var f=d(b[1]).length?t(e,/[.,]/g).length:1,l=t(t(e,/^.*[0#]/),/[^,.]/g),g=d(b[3]).length+d(b[4]).length,p,h;if(e=/([.,])[^.,]+[.,]/.exec(b[0]))p=e[1],h=e[0].length-2;p=E(c,g,d(b[3]).length,l,f,p,h);h=a;a=b.index;b=d(b[0]).length;return h.substr(0,a)+p+h.substr(a+
b)}return a})},parseDate:function(b,c){var f={y:0,M:[1,1],n:[1,fa],N:[1,Z],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ha]},l={},d=1,p,h,g;if(/^\?/.test(b)){if(""==F(c))return null;b=b.substr(1)}if(g=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(b))p=g,b=g[3];if(!(g=RegExp(b.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,e){return/[dmhkyhs]/i.test(b)?(l[d++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(h=d,d+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(l[d++]=[b,e&&e.split(",")],"([a-zA-Z\u0080\ufffd\u1fff]+)"):
/w/i.test(b)?"[a-zA-Z\u0080\ufffd\u1fff]+":/\s/.test(b)?"\\s+":Q(a)})).exec(c)))return V;for(var x=[0,0,0,0,0,0,0],m=1;m<d;m++){var n=g[m],k=l[m];if(s(k)){var E=k[0],j=f[E],q=j[0],k=a(k[1]||j[1],function(a,b){return A(n.toLowerCase(),a.toLowerCase())?b:null});if(null==k)return V;x[q]="a"==E?x[q]+12*k:k}else k&&(E=parseInt(n),j=f[k],s(j)?x[j[0]]+=E-j[1]:x[j]+=E)}f=new Date(x[0],x[1],x[2],x[3],x[4],x[5],x[6]);return N(f,"minutes",-X(p,1,f)-X(g,h,f))},parseNumber:aa,keys:K(C),values:K(function(a){var b=
[];y(a,function(a,c){b.push(c)});return b}),copyObj:S,coal:function(){return a(arguments,k)},format:function(a,b){return Y(a)(b)},escapeHtml:ea,template:Y,htmlTemlplate:function(a){return Y(a,ea)}},L);return{_:L}});/^u/.test(typeof define)&&(def={},this.define=function(m,d){def[m]=d()},this.require=function(m){return def[m]});
define("minified",function(){function m(a){return null!=a?""+a:""}function d(a){return"string"==typeof a}function j(a){return"function"==typeof a&&!a.item}function n(a){return a&&a.nodeType}function g(a){return a&&null!=a.length&&!d(a)&&!n(a)&&!j(a)}function r(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function q(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function h(a,b){var c=[];q(a,function(a,l){b(a,l)&&c.push(a)});return c}function p(a,b){var c=[];q(a,function(a,l){g(a=
b(a,l))?q(a,function(a){c.push(a)}):null!=a&&c.push(a)});return c}function s(a,b){var c=[];r(a,function(a,l){g(a=b(a,l))?q(a,function(a){c.push(a)}):null!=a&&c.push(a)});return c}function k(a,b,c){return m(a).replace(b,c||"")}function u(a){return parseFloat(k(a,/^[^\d-]+/))}function t(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:null},c=a.get(b);a.set(b);b=a.get("$height",!0);a.set(c);return b}function Q(a){a()}function F(){q(H,Q);H=null}function y(a){H?H.push(a):w.setTimeout(a,
0)}function B(a,b,c,f){return function(){var l=z(A.createElement(a));g(b)||"object"!=typeof b?l.add(b):l.set(b).add(c);f&&f(l);return l}}function G(){var a,b=[],c=[],f=function(f,l){null==a&&(a=f,b=l,w.setTimeout(function(){q(c,Q)},0))},l=f.then=function(f,l){var d=G(),g=function(){try{var c=a?f:l;if(j(c)){var g=c.apply(null,b);g&&j(g.then)?g.then(function(a){d(!0,[a])},function(a){d(!1,[a])}):d(!0,[g])}else d(a,b)}catch(p){d(!1,[p])}};null!=a?w.setTimeout(g,0):c.push(g);return d};f.always=function(a){return l(a,
a)};f.error=function(a){return l(0,a)};return f}function R(a){return S[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function z(a,b,c){return j(a)?y(a):new v(C(a,b,c))}function C(a,b,c){function f(a){a=function T(a){return g(a)?p(a,T):a}(a);return l?h(a,function(a){for(;a=a.parentNode;){if(a===l)return!0;if(c)return!1}}):a}var l,j,m,n,q;if(b&&1!=(b=C(b)).length)return p(b,function(b){return C(a,b,c)});l=b&&b[0];if(!d(a))return f(g(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return p(b,
function(a){return C(a,l,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return C(b[2],C(b[1],l),c);if(a!=(b=k(a,/^#/)))return f([A.getElementById(b)]);l=l||A;j=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];n=b[2];b=(m=l.getElementsByClassName&&n)?l.getElementsByClassName(n):l.getElementsByTagName(j||"*");if(j=m?j:n)q=RegExp("\\b"+j+"\\b","i"),b=h(b,function(a){return q.test(a[m?"nodeName":"className"])});return l?f(b):b}function v(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var w=this,A=document,H=[],I=[],
U=w.requestAnimationFrame||function(a){w.setTimeout(a,33)},D=!!A.all&&!H.map,S={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};r({each:function(a){return q(this,a)},filter:function(a){return new v(h(this,a))},collect:function(a){return new v(p(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,f=0<=b?b:this.length+(b||0);return new v(h(this,function(a,b){return b>=c&&b<f}))},find:function(a){for(var b,c=j(a)?a:function(b,c){if(a===b)return c},f=0;f<this.length;f++)if(null!=(b=c(this[f],
f)))return b},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:null})},remove:function(){q(this,function(a){a.parentNode.removeChild(a)})},text:function(){function a(b){var c=n(b);return 1==c?p(b.childNodes,a):5>c?b.data:null}return p(this,a).join("")},get:function(a,b){var c=this,f=c[0];if(f){if(d(a)){var l=k(a,/^[$@]/),p;p="$"==a?f.className:"$$"==a?D?f.style.cssText:f.getAttribute("style"):/\$\$/.test(a)&&("hidden"==f.style.visibility||
"none"==f.style.display)?0:"$$fade"==a?isNaN(p=D?u(f.style.filter)/100:u(f.style.opacity))?1:p:"$$slide"==a?c.get("$height"):/^\$/.test(a)?w.getComputedStyle?w.getComputedStyle(f,null).getPropertyValue(k(l,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(f.currentStyle||f.style)[l]:/^@/.test(a)?f.getAttribute(l):f[l];return b?u(p):p}var h={};(g(a)?q:r)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,f;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(f=u(b))?"visible":
"hidden",$display:"block"}).set("$$fade"==a?D?{$filter:"alpha(opacity = "+100*f+")",$zoom:1}:{$opacity:f}:{$height:/px$/.test(b)?b:function(a,b,c){return f*(f&&t(z(c)))+"px"},$overflow:"hidden"}):q(c,function(c,f){var d=k(a,/^[@$]/),g=c.className||"",p=/^\$/.test(a)?c.style:c,h=j(b)?b(z(c).get(a),f,c):b;"$"==a?null!=h&&(q(h.split(/\s+/),function(a){var b=k(a,/^[+-]/),c=g;g=k(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=k(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?D?p.cssText=
h:null!=h?c.setAttribute("style",h):c.removeAttribute("style"):/^@/.test(a)?null!=h?p.setAttribute(d,h):p.removeAttribute(d):p[d]=h}):d(a)||j(a)?c.set("$",a):r(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return q(this,function(c,f){var l;(function M(a){g(a)?q(a,M):j(a)?M(a(c,f)):null!=a&&(a=n(a)?a:A.createTextNode(a),l?l.parentNode.insertBefore(a,l.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),l=a)})(n(a)&&f?null:a)})},fill:function(a){return q(this,function(a){z(a.childNodes).remove()}).add(a)},
addBefore:function(a){return this.add(a,function(a,c,f){f.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,f){f.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,f){f.replaceChild(a,c)})},clone:function(a){return new v(p(this,function(b){var c=n(b);if(1==c){var f={$:b.className||null,$$:D?b.style.cssText:b.getAttribute("style")};q(b.attributes,function(a){var c=
a.name;"id"!=c&&("style"!=c&&"class"!=c&&b.getAttribute(c))&&(f["@"+c]=a.value)});return B(b.tagName,f,z(b.childNodes).clone(),a)}return 5>c?b.data:null}))},animate:function(a,b,c,f){var d=this,g=[],p=/-?[\d.]+/,h,n=G(),s=j(c)?c:function(a,b,f){return a+f*(b-a)*(c+(1-c)*f*(3-2*f))};f=f||{};f.time=0;f.stop=function(){h();n(!1)};b=b||500;c=c||0;q(d,function(b){var c={o:z(b),e:{}};r(c.s=c.o.get(a),function(b,f){var d=a[b];"$$slide"==b&&(d=d*t(c.o)+"px");c.e[b]=/^[+-]=/.test(d)?k(d.substr(2),p,u(f)+u(k(d,
/\+?=/))):d});g.push(c)});h=z.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(k(a,/[^\d,]+/g).split(",")[b])}f.time=a;a>=b||0>a?(q(g,function(a){a.o.set(a.e)}),h(),f.time=null,n(!0,[d])):q(g,function(f){r(f.s,function(d,g){var l="rgb(",h=f.e[d],j=a/b;if(/^#|rgb\(/.test(h))for(var n=0;3>n;n++)l+=Math.round(s(c(g,n),c(h,n),j))+(2>n?",":")");else l=k(h,p,m(s(u(g),u(h),j)));f.o.set(d,l)})})});return n},toggle:function(a,b,c,f){var d=
this,g={},h=!1,p=/\b(?=\w)/g;return!b?d.toggle(k(a,p,"-"),k(a,p,"+")):d.set(a)&&function(p){p!==h&&(h=!0===p||!1===p?p:!h,c?d.animate(h?b:a,g.stop?g.stop()||g.time:c,f,g):d.set(h?b:a))}},on:function(a,b,c,f){return q(this,function(d,g){q(a.split(/\s/),function(a){var h=k(a,/\|/),p=function(d){d=d||w.event;if((!b.apply(f?c:d.target,f||c||[d,g])||f)&&a==h)d.stopPropagation&&(d.preventDefault(),d.stopPropagation()),d.returnValue=!1,d.cancelBubble=!0};(b.M=b.M||[]).push({e:d,h:p,n:h});d.addEventListener?
d.addEventListener(h,p,!0):d.attachEvent("on"+h,p)})})}},function(a,b){v.prototype[a]=b});r({request:function(a,b,c,f,h,j){var k,q=c,u=0,t=G();try{k=w.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),null!=c&&(f=f||{},!d(c)&&!n(c)&&(q=s(c,function N(a,b){return g(b)?p(b,function(b){return N(a,b)}):encodeURIComponent(a)+(null!=b?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!n(c)&&(!d(c)&&!f["Content-Type"])&&(f["Content-Type"]="application/x-www-form-urlencoded"):
(b+="?"+q,q=null)),k.open(a,b,!0,h,j),r(f,function(a,b){k.setRequestHeader(a,b)}),k.onreadystatechange=function(){4==k.readyState&&!u++&&(200==k.status?t(!0,[k.responseText,k.responseXML]):t(!1,[k.status,k.statusText,k.responseText]))},k.send(q)}catch(y){u||t(!1,[0,null,m(y)])}return t},toJSON:function b(c){return null==c?""+c:d(c=c.valueOf())?'"'+k(c,/[\\\"\x00-\x1f\x22\x5c]/g,R)+'"':g(c)?"["+p(c,b).join()+"]":"object"==typeof c?"{"+s(c,function(c,d){return b(c)+":"+b(d)}).join()+"}":m(c)},parseJSON:w.JSON?
w.JSON.parse:function(b){b=k(b,/[\x00\xad\u0600-\uffff]/g,R);if(/^[[\],:{}\s]*$/.test(k(k(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:y,setCookie:function(b,c,f,d,h,g){A.cookie=b+"="+(g?c:escape(c))+(f?"; expires="+("object"==typeof f?f:new Date((new Date).getTime()+864E5*f)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(h?"; domain="+escape(h):"")},getCookie:function(b,c){var f,d=(f=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(A.cookie))&&f[2];return c?
d:d&&unescape(d)},loop:function(b){var c={c:b,t:(new Date).getTime(),s:function(){for(var b=0;b<I.length;b++)I[b]===c&&I.splice(b--,1)}};2>I.push(c)&&function l(){q(I,function(b){b.c(Math.max(0,(new Date).getTime()-b.t),b.s)}).length&&U(l)}();return c.s},wait:function(b){var c=G();w.setTimeout(function(){c(!0,[b])},b||0);return c},off:function(b){q(b.M,function(b){b.e.removeEventListener?b.e.removeEventListener(b.n,b.h,!0):b.e.detachEvent("on"+b.n,b.h)});b.M=null}},function(b,c){z[b]=c});w.onload=
F;A.addEventListener&&A.addEventListener("DOMContentLoaded",F,!1);return{$:z,$$:function(b){return C(b)[0]},EE:B}});var _=require("minifiedUtil")._;
function parseSourceSections(m){function d(){return{id:"anon"+j++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}m=m.split("\n");var j=100,n=[],g=d(),r=!1;_.each(m,function(j){if(r&&/^.*\*\/\s*$/.test(j))r=!1;else if(r){var h=j.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),p=h.match(/^\s*@([a-z]+)/);p?(p=p[1],h=_.trim(h.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==p||"example"==p?g[p].push(h):"requires"==p?h.length&&_.each(h.split(/\s+/),function(d){g.requires[d]=1}):"param"==
p?g.params.push({name:h.replace(/\s.*$/,""),desc:h.replace(/^\S+\s+/,"")}):"return"==p?g.params.push({name:"@return",desc:h}):"function"==p?g.params[g.params.length-1].funcs.push(h):g[p]=""!=h?h:1):g.params.length?g.params[g.params.length-1].desc+="\n"+_.trim(h):g.example.length?g.example[g.example.length-1]+="\n"+h:g.desc+=h+"\n"}else/^\s*\/\*\$/.test(j)&&!/\*\/\s*$/.test(j)&&(r=!0,n.push(g),g=d());g.src.push(j)});n.push(g);return n}
function createSectionMap(m){var d={};_.each(m,function(j){d[j.id]=j});return d}function completeRequirements(m,d){var j=0;_.each(m,function(n){_.eachObj(n.requires,function(g){var m=d[g];if(!m)throw Error('Unknown id in requirement: "'+g+'"');_.eachObj(m.requires,function(d){n.requires[d]||(j++,n.requires[d]=1)})})});0<j?completeRequirements(m,d):_.each(m,function(j){_.eachObj(j.requires,function(g){d[g].requiredBy[j.id]=1})})}
function calculateDependencies(m,d){var j={};_.eachObj(d,function(n){d[n]&&(j[n]=1,_.eachObj(m[n].requires,function(d){j[d]=1}))});return j}function createDefaultConfigurationMap(m,d){var j={};_.each(m,function(n){if(n.configurable&&("default"==n.configurable||d))j[n.id]=1});return j}
function compile(m,d,j){var n="",g=calculateDependencies(d,j),r=[],q=!0;_.filter(m,function(d){return g[d.id]||!(d.configurable||d.dependency)}).each(function(d){_.each(d.src,function(d){if(/^\s*$/.test(d))q||(n+="\n"),q=!0;else{var h=d.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(h&&"cond"==h[2]&&!!g[h[4]]!=("!"==h[3]))n+=h[1]+h[5]+"\n";else if(h&&"condblock"==h[2])r.unshift(!!g[h[4]]!=("!"==h[3]));else if(r.length&&/^\s*\/\/\s*@condend(\s|$)/.test(d))r.shift();else if(0==r.length||
r[0])n+=d+"\n";q=!1}})});return n}function prepareSections(m){m=parseSourceSections(m);var d=createSectionMap(m);completeRequirements(m,d);var j=createDefaultConfigurationMap(m);return{sections:m,sectionMap:d,enabledSections:j}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections.",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(m,d){var j=_.filter(m,function(d){return d.configurable}),n=_.filter(_.keys(d),function(h){return d[h]}),g,r=[];n.length==j.length?(g=CONFIG_COMMENT+CONFIG_ALL,r=[]):n.length/3>j.length/2?(g=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,r=_.filter(j,function(h){return!d[h.id]}).collect(function(d){return d.id})):(g=CONFIG_COMMENT+CONFIG_ONLY,r=n);var q="// "+CONFIG_START+" use this comment to re-create configuration in the Builder\n"+g,h=50;_(r).sort().each(function(d){h<d.length?
(h=70,q+="\n// - "+d+", "):(q+=d+", ",h-=d.length+2)});return q=q.replace(/,\s*$/,".\n")}function fixConfig(m,d){_.eachObj(d,function(j){m[j]?_.copyObj(m[j].requires,d):delete d[j]});return d}
function deserializeEnabledSections(m,d,j){function n(d){return RegExp("^"+d.replace(/ /g,"\\s+"))}var g=n(CONFIG_START+".*"),r=n(CONFIG_ALL.replace(/\./,"\\.")),q=n(CONFIG_ALL_EXCEPT+"\\s*"),h=n(CONFIG_ONLY+"\\s*"),p=n(CONFIG_COMMENT);j=j.split("\n");for(var s=0;s<j.length;s++){var k=j[s];if(/^\s*\/\/s*/.test(k)&&(k=k.replace(/^\s*\/\/\s*/,""),g.test(k)&&s+1<j.length)){for(var k="",u=s+1;u<j.length;u++)if(p.test(j[u])){if(k+=j[u].replace(p,""),/\s*\.\s*$/.test(j[u]))break}else break;if(r.test(k))return createDefaultConfigurationMap(m,
!0);k=k.replace(/\s*\.\s*$/,"");if(q.test(k)){var t=createDefaultConfigurationMap(m,!0);_.each(k.replace(q,"").split(/\s*,\s*/),function(d){delete t[d]});return fixConfig(d,t)}if(h.test(k))return t={},_.each(k.replace(h,"").split(/\s*,\s*/),function(h){d[h]&&(t[h]=1)}),fixConfig(d,t)}}return null};var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE,_=require("minifiedUtil")._,MAX_SIZE=4095,SRC="/minified-web-src.js",GROUPS="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(m,d,j){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:m,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:d?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(d){j&&j($.parseJSON(d))},function(d,g,m){window.console&&console.log("error",d,g,m);j&&j(null)}).error(function(d){window.console&&console.log(d)})}
function setUpConfigurationUI(m){function d(){$(".modCheck").each(function(d){var g=0;$(".secCheck",d.parentNode.parentNode).each(function(d){d.checked&&g++});d.checked=0<g})}function j(d){var g=m.sectionMap[d.id.substr(4)];d.checked?_.eachObj(g.requires,function(d){$("#sec-"+d).set("checked",!0)}):_.eachObj(g.requiredBy,function(d){$("#sec-"+d).set("checked",!1)})}$("#compile").on("click",function(){var d={};$(".secCheck").each(function(g){g.checked&&(d[g.id.substr(4)]=1)});var g=compile(m.sections,
m.sectionMap,d),j=serializeEnabledSections(m.sections,d);if($$("#compressionAdvanced").checked)$$("#compile").disabled=!0,closureCompile(g,!0,function(d){$$("#compile").disabled=!1;$("#resultDiv").animate({$$slide:1});d?($("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=j+"\n"+d.compiledCode,$("#resultPlain").fill((d.statistics.compressedSize/1024).toFixed(2)+"kb ("+d.statistics.compressedSize+" bytes)"),$("#resultGzippedSize").fill((d.statistics.compressedGzipSize/1024).toFixed(2)+
"kb ("+d.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+d.outputFilePath),$("#resultGzippedComment").set({$$fade:d.statistics.compressedGzipSize>MAX_SIZE?1:0})):alert("Google Closure Service not availble. Try again later.")});else try{$("#resultDiv").animate({$$slide:1}),$$("#resultSrc").value=j+g,$("#resultPlain").fill((g.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"})}catch(k){console.log(k)}return!1});
var n=$("#configSrcDiv").toggle({$$slide:0},{$$slide:1});$("#fromScratch").on("|click",n,[!1]);$("#loadConfig").on("|click",n,[!0]);$("#recreate").on("click",function(){try{var g=$$("#configSrc").value,j=deserializeEnabledSections(m.sections,m.sectionMap,g);j?(_.eachObj(m.sectionMap,function(d){var g=$$("#sec-"+d);g&&(g.checked=!!j[d])}),d()):alert("Can not find configuration in source.")}catch(n){console.log(n)}});$("#sectionCheckboxes").fill();for(var g=1;g<GROUPS.length;g++){var r;$("#sectionCheckboxes").add(r=
EE("div",{"@id":"divMod-"+g},EE("div",{className:"groupDescriptor"},[n=EE("input",{"@id":"mod-"+g,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+g},GROUPS[g])]))());$(n).on("change",function(){var g=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(d){d.checked=g;j(d)});d();return!0});var q;_.filter(m.sections,function(d){return d.group==GROUPS[g]&&d.configurable}).sort(function(d,g){var j=d.name||d.id,k=g.name||g.id;return j==k?0:j>k?1:
-1}).each(function(g){function n(d,g){var h=_.filter(_.keys(g),function(d){return!!g[d].name});if(!h.length)return null;var j=0,k=d;_.each(h,function(d){j++<Math.min(h.length,8)&&(1<j&&(k=j==Math.min(h.length,8)?k+" and ":k+", "),k=8==j&&8<h.length?k+"more":k+(m.sectionMap[d].name||m.sectionMap[d].id))});return k+="."}var s=n("Required by ",g.requiredBy),k=n("Requires ",g.requires);r.add(EE("div",{className:"sectionDescriptor"},[q=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+g.id,
checked:"default"==g.configurable?"checked":null})(),EE("label",{"@for":"sec-"+g.id},g.name||g.id),EE("div",{className:"requirements"},[s?[s,EE("br")]:null,k])]));$(q).on("change",function(){j(this);d();return!0})})}}
$(function(){var m=/MSIE\s([\d.]+)/i.exec(navigator.userAgent);m&&10>parseInt(m[1])?$("#builderDiv").fill("Sorry, the Builder tool requires at least Internet Explorer 10 (or, alternatively, Chrome or Firefox). Earlier versions lack CORS support required to use Google Closure's web service."):$.request("get",SRC,null).then(function(d){setUpConfigurationUI(prepareSections(d))}).error(function(d){window.console&&console.log(d)})});