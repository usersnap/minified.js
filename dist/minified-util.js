if(/^u/.test(typeof define)){var aa={};this.define=function(a,b){aa[a]=b()},this.require=function(a){return aa[a]}}module.g=function(){function a(a){return a.substr(0,3)}function b(a){return a!=hb?""+a:""}function c(a){return"string"==typeof a}function d(a){return!!a&&"object"==typeof a}function e(a){return"number"==typeof a}function f(a){return d(a)&&!!a.getDay}function g(a){return a===ib||a===jb}function h(a){var b=typeof a;return"object"==b?!(!a||!a.getDay):"string"==b||"number"==b||g(a)}function i(a){return a}function j(a){return a+1}function k(a,c,d){return b(a).replace(c,d!=hb?d:"")}function l(a){return k(a,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function m(a){return k(a,/^\s+|\s+$/g)}function n(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function o(a,b){if(a)for(var c=0;c<a.length;c++)b(a[c],c);return a}function p(a,b){var c=[],d=cb(b)?b:function(a){return b!=a};return o(a,function(a,b){d(a,b)&&c.push(a)}),c}function q(a,b,c){var d=[];return a(b,function(a,b){db(a=c(a,b))?o(a,function(a){d.push(a)}):a!=hb&&d.push(a)}),d}function r(a,b){return q(o,a,b)}function s(a){var b=0;return n(a,function(){b++}),b}function t(a){var b=[];return n(a,function(a){b.push(a)}),b}function u(a,b){var c=[];return o(a,function(a,d){c.push(b(a,d))}),c}function v(a,b){if(db(a)){var c=fb(b);return K(fb(a).sub(0,c.length),c)}return b!=hb&&a.substr(0,b.length)==b}function w(a,b){if(db(a)){var c=fb(b);return fb(a).sub(-c.length).f(c)||!c.length}return b!=hb&&a.substr(a.length-b.length)==b}function x(a){var b=a.length;return u(a,function(){return a[--b]})}function y(a,b,c){if(!a)return[];var d=C(a,b,0),e=C(a,c,a.length);return p(a,function(a,b){return b>=d&&e>b})}function z(a,b){var c={};return o(a,function(a){c[a]=b}),c}function A(a,b,c){return n(a,function(a,d){b[a]!=hb&&c||(b[a]=d)}),b}function B(a){return cb(a)?a:function(b,c){return a===b?c:void 0}}function C(a,b,c){return b==hb?c:0>b?a.length+b:b}function D(a,b,c,d){b=B(b),d=C(a,d,a.length);for(var e=C(a,c,0);d>e;e++)if((c=b(a[e],e))!=hb)return c}function E(a,b,c,d){b=B(b),d=C(a,d,-1);for(var e=C(a,c,a.length-1);e>d;e--)if((c=b(a[e],e))!=hb)return c}function F(a){return u(a,i)}function G(a){return function(){return new eb(M(a,arguments))}}function H(a){var b={};return p(a,function(a){return b[a]?jb:b[a]=1})}function I(a,b){var c=z(b,1);return p(a,function(a){var b=c[a];return c[a]=0,b})}function J(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return ib;return jb}function K(a,b){var c,d=cb(a)?a():a,e=cb(b)?b():b;return d==e?ib:d==hb||e==hb?jb:h(d)||h(e)?f(d)&&f(e)&&d.getTime()==e.getTime():db(d)?d.length!=e.length?jb:!D(d,function(a,b){return K(a,e[b])?void 0:ib}):db(e)?jb:(c=t(d),c.length!=s(e)?jb:!D(c,function(a){return K(d[a],e[a])?void 0:ib}))}function L(a,b,c){return a.apply(c&&b,u(c||b,i))}function M(a,b,c){return u(a,function(a){return cb(a)?L(a,b,c):gb})}function N(a,b,c,d){return function(){return L(a,b,r([c,arguments,d],i))}}function O(a,b,c,d){return a.substr(0,b)+d+a.substr(b+c)}function P(a,b){for(var c=0>b?"-":"",d=k((c?-b:b).toFixed(0),/\..*/);d.length<a;)d="0"+d;return c+d}function Q(a,b,c){return b!=hb&&a?60*parseInt(a[b])+parseInt(a[b+1])+c.getTimezoneOffset():0}function R(a,b){if(1==arguments.length)return R(hb,a);if(/^\?/.test(a)){if(""==m(b))return hb;a=a.substr(1)}var c=/(^|[^0#.,])(,|[0#.]*,[0#]+|[0#]+\.[0#]+\.[0#.,]*)($|[^0#.,])/.test(a)?",":".",c=parseFloat(k(k(k(b,","==c?/\./g:/,/g),c,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(c)?gb:c}function S(a){return new Date(a.getTime())}function T(a,b,c){return a["set"+b].call(a,a["get"+b].call(a)+c),a}function U(a,b,c){return 3>arguments.length?U(new Date,a,b):T(S(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function V(a,b,c){var d=b.getTime(),e=c.getTime(),f=e-d;if(0>f)return-V(a,c,b);if(b={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5}[a])return f/b;for(b=a.charAt(0).toUpperCase()+a.substr(1),a=Math.floor(f/{fullYear:31536e6,month:2628e6,date:864e5}[a]-2),d=T(new Date(d),b,a),f=a;1.2*a+4>f;f++)if(T(d,b,1).getTime()>e)return f}function W(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function X(a){return k(a,/[\x00-\x1f'"\u2028\u2029]/g,W)}function Y(a,b){for(var c,d=0,e=[];c=b.exec(a);)e.push(a.substring(d,c.index)),d=c.index+c[0].length;return e.push(a.substr(d)),e}function Z(a,b){function c(a,c){var d=[];return e.call(c||a,a,function(a,b){db(a)?o(a,function(a,c){b.call(a,a,c)}):n(a,function(a,c){b.call(c,a,c)})},b||i,function(){L(d.push,d,arguments)},fb),d.join("")}if(sb[a])return sb[a];var d="with(_.isObject(obj)?obj:{}){"+u(Y(a,/{{|}}}?/g),function(a,b){var c,d=m(a),e=k(d,/^{/),d=d==e?"esc(":"";return b%2?(c=/^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(e))?"each("+(""==m(c[4])?"this":c[4])+", function("+c[2]+"){":(c=/^if\b(.*)/.exec(e))?"if("+c[1]+"){":(c=/^else\b\s*(if\b(.*))?/.exec(e))?"}else "+(c[1]?"if("+c[2]+")":"")+"{":(c=/^\/(if)?/.exec(e))?c[1]?"}\n":"});\n":(c=/^(var\s.*)/.exec(e))?c[1]+";":(c=/^#(.*)/.exec(e))?c[1]:(c=/(.*)::\s*(.*)/.exec(e))?"print("+d+'_.formatValue("'+X(c[2])+'",'+(""==m(c[1])?"this":c[1])+(d&&")")+"));\n":"print("+d+(""==m(e)?"this":e)+(d&&")")+");\n":""!=a?'print("'+X(a)+'");\n':void 0}).join("")+"}",e=Function("obj","each","esc","print","_",d);return tb.push(c)>rb&&delete sb[tb.shift()],sb[a]=c}function $(a){return k(a,/[<>'"&]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}function _(a){return function(b,c){return new eb(a(this,b,c))}}function ab(a){return function(b,c){return a(this,b,c)}}function bb(a){return function(b,c,d){return new eb(a(b,c,d))}}function cb(a){return"function"==typeof a}function db(a){return!(!a||a.length==hb||c(a)||a&&a.nodeType||cb(a))}function eb(a,b){var c,d,e,f;for(c=0,d=0;d<a.length;d++)if(e=a[d],b&&db(e))for(f=0;f<e.length;f++)this[c++]=e[f];else this[c++]=e;this.length=c,this._=ib}function fb(){return new eb(arguments,ib)}var gb,hb=null,ib=!0,jb=!1,kb=Y("January,February,March,April,May,June,July,August,September,October,November,December",/,/g),lb=u(kb,a),mb=Y("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",/,/g),nb=u(mb,a),ob=["am","pm"],pb={y:["FullYear",i],Y:["FullYear",function(a){return a%100}],M:["Month",j],n:["Month",lb],N:["Month",kb],d:["Date",i],m:["Minutes",i],H:["Hours",i],h:["Hours",function(a){return a%12||12}],k:["Hours",j],K:["Hours",function(a){return a%12}],s:["Seconds",i],S:["Milliseconds",i],a:["Hours",function(a,b){return(b||ob)[12>a?0:1]}],w:["Day",nb],W:["Day",mb],z:["TimezoneOffset",function(a,b,c){return c?c:(b=a>0?a:-a,(0>a?"+":"-")+P(2,Math.floor(b/60))+P(2,b%60))}]},qb={y:0,Y:[0,-2e3],M:[1,1],n:[1,lb],N:[1,kb],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ob]},rb=99,sb={},tb=[];return A({only:function(a){return p(this,function(b,c){return c==a})},each:ab(o),filter:_(p),collect:_(r),map:_(u),toObject:ab(z),equals:ab(K),sub:_(y),reverse:_(x),find:ab(D),findLast:ab(E),startsWith:ab(v),endsWith:ab(w),contains:ab(J),call:_(M),array:ab(F),unite:ab(G),uniq:_(H),intersection:_(I),join:function(a){return u(this,i).join(a)},sort:function(a){return new eb(u(this,i).sort(a))},e:0},eb.prototype),A({filter:bb(p),collect:bb(r),map:bb(u),sub:bb(y),reverse:bb(x),each:o,toObject:z,find:D,findLast:E,contains:J,startsWith:v,endsWith:w,equals:K,call:bb(M),array:F,unite:G,uniq:bb(H),intersection:bb(I),keys:bb(t),values:bb(function(a,b){var c=[];return b?o(b,function(b){c.push(a[b])}):n(a,function(a,b){c.push(b)}),c}),copyObj:A,extend:function(a){for(var b=0;b<arguments.length;b++)n(arguments[b],function(b,c){c!=gb&&(a[b]=c)});return a},range:function(a,b){for(var c=[],d=b==hb?a:b,e=b!=hb?a:0;d>e;e++)c.push(e);return new eb(c)},bind:N,partial:function(a,b,c){return N(a,hb,b,c)},eachObj:n,mapObj:function(a,b){var c={};return n(a,function(a,d){c[a]=b(a,d)}),c},filterObj:function(a,b){var c={};return n(a,function(a,d){b(a,d)&&(c[a]=d)}),c},isList:db,isFunction:cb,isObject:d,isNumber:e,isBool:g,isDate:f,isValue:h,isString:c,toString:b,dateClone:S,dateAdd:U,dateDiff:V,dateMidnight:function(a){return a=a||new Date,new Date(a.getFullYear(),a.getMonth(),a.getDate())},pad:P,formatValue:function(a,d){if(a=k(a,/^\?/),f(d)){var g,h,i=a,j=d;return(h=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(a))&&(g=h[1],j=U(d,"minutes",Q(h,2,d)),i=h[4]),k(i,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(a,b,d,e){return(b=pb[b])&&(a=j["get"+b[0]].call(j),e=e&&e.split(","),a=db(b[1])?(e||b[1])[a]:b[1](a,e,g),a==hb||c(a)||(a=P(d.length+1,a))),a})}return D(a.split(/\s*\|\s*/),function(a){var c,f,g,h,i,j,l,m,n,o;if(c=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){if(a=d,f=parseFloat(c[3]),(isNaN(f)||!e(a))&&(a=a==hb?"null":b(a),f=c[3]),c[1]){if(!c[2]&&a==f||"<"==c[1]&&a>f||">"==c[1]&&f>a)return hb}else if(a!=f)return hb;f=c[4]}else f=a;return e(d)&&(c=/[0#]([0#.,]*[0#])?/.exec(f))?(i=c[0],(a=/\.([0#]*)[.,]|,([0#]*)[.,]/.exec(i))&&(g=a[0].charAt(0),h=null!=a[1]?a[1].length:a[2].length,i=k(i,"."==g?/\./g:/,/g)),j=/([0#]+)(([.,])([0#]+))?/.exec(i),i=k(j[2],/#/g).length,l=0>d?"-":"",m=/(\d+)(\.(\d+))?/.exec((l?-d:d).toFixed(j[2]?j[4].length:0)),n=P(k(j[1],/#/g).length,parseInt(m[1])),j=(j[3]||".")+m[3],a&&(o=function(a){var b=a.length;return b>h?o(a.substr(0,b-h))+g+a.substr(b-h):a},n=o(n)),O(f,c.index,b(c[0]).length,l+n+(m[2]?j.length>i?k(j.substr(0,i)+k(j.substr(i),/0+$/),/[.,]$/):j:""))):f})},parseDate:function(a,b){var c,d,e,f,g,h,i,j,k,n,o={},p=1;if(/^\?/.test(a)){if(""==m(b))return hb;a=a.substr(1)}if((e=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))&&(c=e,a=e[3]),!(e=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,e){return/[dmhkyhs]/i.test(b)?(o[p++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(d=p,p+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(o[p++]=[b,e&&e.split(",")],"([a-zA-Z�῿]+)"):/w/i.test(b)?"[a-zA-Z�῿]+":/\s/.test(b)?"\\s+":l(a)})).exec(b)))return gb;for(f=[0,0,0,0,0,0,0],g=1;p>g;g++)if(h=e[g],i=o[g],db(i)){if(j=i[0],k=qb[j],n=k[0],i=D(i[1]||k[1],function(a,b){return v(h.toLowerCase(),a.toLowerCase())?b:hb}),i==hb)return gb;f[n]="a"==j?f[n]+12*i:i}else i&&(j=parseInt(h),k=qb[i],db(k)?f[k[0]]+=j-k[1]:f[k]+=j);return f=new Date(f[0],f[1],f[2],f[3],f[4],f[5],f[6]),U(f,"minutes",-Q(c,1,f)-Q(e,d,f))},parseNumber:R,trim:m,escapeRegExp:l,escapeHtml:$,format:function(a,b,c){return Z(a,c)(b)},template:Z,formatHtml:function(a,b){return Z(a,$)(b)}},fb),fb.b=eb,fb.c=fb}();