(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/OPJ":function(t,n,e){var r=e("0Dky"),o=e("2oRo").RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},"/qmn":function(t,n,e){var r=e("2oRo");t.exports=r.Promise},"1E5z":function(t,n,e){var r=e("m/L8").f,o=e("Gi26"),i=e("tiKp")("toStringTag");t.exports=function(t,n,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:n})}},"58Bg":function(t,n,e){"use strict";var r,o=this&&this.__extends||(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var c=a(e("NCWt")),u=a(e("q1tI")),s=function(t){function n(n){var e=t.call(this,n)||this;return e.wrapper=null,e.state=i(i({},n),{canvas:null,wrapper:e.wrapper}),e}return o(n,t),n.getDerivedStateFromProps=function(t,n){if(n.sketch!==t.sketch){var e=t.sketch,r=new c.default(e,n.wrapper);return n.canvas.remove(),i(i({},n),{sketch:e,canvas:r})}return n.canvas&&n.canvas.myCustomRedrawAccordingToNewPropsHandler&&n.canvas.myCustomRedrawAccordingToNewPropsHandler(t),n},n.prototype.componentDidMount=function(){var t=new c.default(this.state.sketch,this.wrapper);t.myCustomRedrawAccordingToNewPropsHandler&&t.myCustomRedrawAccordingToNewPropsHandler(this.props),this.setState(i(i({},this.state),{canvas:t,wrapper:this.wrapper}))},n.prototype.componentWillUnmount=function(){null!==this.state.canvas&&this.state.canvas.remove()},n.prototype.render=function(){var t=this;return u.default.createElement("div",i({},this.state.attributes,{ref:function(n){return t.wrapper=n},"data-testid":"canvas-wrapper"}),this.props.children)},n}(u.default.Component);n.default=s},"8GlL":function(t,n,e){"use strict";var r=e("We1y"),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},DhMN:function(t,n,e){e("ofBz")},EHx7:function(t,n,e){var r=e("0Dky"),o=e("2oRo").RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},FMNM:function(t,n,e){var r=e("2oRo"),o=e("xluM"),i=e("glrk"),a=e("Fib7"),c=e("xrYK"),u=e("kmMV"),s=r.TypeError;t.exports=function(t,n){var e=t.exec;if(a(e)){var r=o(e,t,n);return null!==r&&i(r),r}if("RegExp"===c(t))return o(u,t,n);throw s("RegExp#exec called on incompatible receiver")}},"G+Rx":function(t,n,e){var r=e("0GbY");t.exports=r("document","documentElement")},"N+g0":function(t,n,e){var r=e("g6v/"),o=e("rtlb"),i=e("m/L8"),a=e("glrk"),c=e("/GqU"),u=e("33Wh");n.f=r&&!o?Object.defineProperties:function(t,n){a(t);for(var e,r=c(n),o=u(n),s=o.length,l=0;s>l;)i.f(t,e=o[l++],r[e]);return t}},QFcT:function(t,n,e){var r=e("I+eb"),o=Math.hypot,i=Math.abs,a=Math.sqrt;r({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,n){for(var e,r,o=0,c=0,u=arguments.length,s=0;c<u;)s<(e=i(arguments[c++]))?(o=o*(r=s/e)*r+1,s=e):o+=e>0?(r=e/s)*r:e;return s===1/0?1/0:s*a(o)}})},ROdP:function(t,n,e){var r=e("hh1v"),o=e("xrYK"),i=e("tiKp")("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},SEBh:function(t,n,e){var r=e("glrk"),o=e("UIe5"),i=e("tiKp")("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[i])?n:o(e)}},UIe5:function(t,n,e){var r=e("2oRo"),o=e("aO6C"),i=e("DVFp"),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a constructor")}},ZUd8:function(t,n,e){var r=e("4zBA"),o=e("WSbT"),i=e("V37c"),a=e("HYAF"),c=r("".charAt),u=r("".charCodeAt),s=r("".slice),l=function(t){return function(n,e){var r,l,p=i(a(n)),f=o(e),d=p.length;return f<0||f>=d?t?"":void 0:(r=u(p,f))<55296||r>56319||f+1===d||(l=u(p,f+1))<56320||l>57343?t?c(p,f):r:t?s(p,f,f+2):l-56320+(r-55296<<10)+65536}};t.exports={codeAt:l(!1),charAt:l(!0)}},aO6C:function(t,n,e){var r=e("4zBA"),o=e("0Dky"),i=e("Fib7"),a=e("9d/t"),c=e("0GbY"),u=e("iSVu"),s=function(){},l=[],p=c("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),v=!f.exec(s),h=function(t){if(!i(t))return!1;try{return p(s,l,t),!0}catch(n){return!1}},x=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!d(f,u(t))}catch(n){return!0}};x.sham=!0,t.exports=!p||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?x:h},fHMY:function(t,n,e){var r,o=e("glrk"),i=e("N+g0"),a=e("eDl+"),c=e("0BK2"),u=e("G+Rx"),s=e("zBJ4"),l=e("93I0"),p=l("IE_PROTO"),f=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n},h=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var t,n;h="undefined"!=typeof document?document.domain&&r?v(r):((n=s("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F):v(r);for(var e=a.length;e--;)delete h.prototype[a[e]];return h()};c[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=o(t),e=new f,f.prototype=null,e[p]=t):e=h(),void 0===n?e:i.f(e,n)}},iqWW:function(t,n,e){"use strict";var r=e("ZUd8").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},kmMV:function(t,n,e){"use strict";var r,o,i=e("xluM"),a=e("4zBA"),c=e("V37c"),u=e("rW0t"),s=e("n3/R"),l=e("VpIT"),p=e("fHMY"),f=e("afO8").get,d=e("/OPJ"),v=e("EHx7"),h=l("native-string-replace",String.prototype.replace),x=RegExp.prototype.exec,g=x,y=a("".charAt),w=a("".indexOf),m=a("".replace),b=a("".slice),R=(o=/b*/g,i(x,r=/a/,"a"),i(x,o,"a"),0!==r.lastIndex||0!==o.lastIndex),E=s.BROKEN_CARET,I=void 0!==/()??/.exec("")[1];(R||I||E||d||v)&&(g=function(t){var n,e,r,o,a,s,l,d=this,v=f(d),O=c(t),A=v.raw;if(A)return A.lastIndex=d.lastIndex,n=i(g,A,O),d.lastIndex=A.lastIndex,n;var k=v.groups,P=E&&d.sticky,_=i(u,d),M=d.source,S=0,T=O;if(P&&(_=m(_,"y",""),-1===w(_,"g")&&(_+="g"),T=b(O,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==y(O,d.lastIndex-1))&&(M="(?: "+M+")",T=" "+T,S++),e=new RegExp("^(?:"+M+")",_)),I&&(e=new RegExp("^"+M+"$(?!\\s)",_)),R&&(r=d.lastIndex),o=i(x,P?e:d,T),P?o?(o.input=b(o.input,S),o[0]=b(o[0],S),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:R&&o&&(d.lastIndex=d.global?o.index+o[0].length:r),I&&o&&o.length>1&&i(h,o[0],e,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&k)for(o.groups=s=p(null),a=0;a<k.length;a++)s[(l=k[a])[0]]=o[l[1]];return o}),t.exports=g},"n3/R":function(t,n,e){var r=e("0Dky"),o=e("2oRo").RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||r((function(){return!o("a","y").sticky})),c=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:i}},ntOU:function(t,n,e){"use strict";var r=e("rpNk").IteratorPrototype,o=e("fHMY"),i=e("XGwC"),a=e("1E5z"),c=e("P4y1"),u=function(){return this};t.exports=function(t,n,e,s){var l=n+" Iterator";return t.prototype=o(r,{next:i(+!s,e)}),a(t,l,!1,!0),c[l]=u,t}},ofBz:function(t,n,e){"use strict";var r=e("I+eb"),o=e("2oRo"),i=e("xluM"),a=e("4zBA"),c=e("ntOU"),u=e("HYAF"),s=e("UMSQ"),l=e("V37c"),p=e("glrk"),f=e("xrYK"),d=e("OpvP"),v=e("ROdP"),h=e("rW0t"),x=e("3Eq5"),g=e("busE"),y=e("0Dky"),w=e("tiKp"),m=e("SEBh"),b=e("iqWW"),R=e("FMNM"),E=e("afO8"),I=e("xDBR"),O=w("matchAll"),A=E.set,k=E.getterFor("RegExp String Iterator"),P=RegExp.prototype,_=o.TypeError,M=a(h),S=a("".indexOf),T=a("".matchAll),B=!!T&&!y((function(){T("a",/./)})),D=c((function(t,n,e,r){A(this,{type:"RegExp String Iterator",regexp:t,string:n,global:e,unicode:r,done:!1})}),"RegExp String",(function(){var t=k(this);if(t.done)return{value:void 0,done:!0};var n=t.regexp,e=t.string,r=R(n,e);return null===r?{value:void 0,done:t.done=!0}:t.global?(""===l(r[0])&&(n.lastIndex=b(e,s(n.lastIndex),t.unicode)),{value:r,done:!1}):(t.done=!0,{value:r,done:!1})})),F=function(t){var n,e,r,o,i,a,c=p(this),u=l(t);return n=m(c,RegExp),void 0===(e=c.flags)&&d(P,c)&&!("flags"in P)&&(e=M(c)),r=void 0===e?"":l(e),o=new n(n===RegExp?c.source:c,r),i=!!~S(r,"g"),a=!!~S(r,"u"),o.lastIndex=s(c.lastIndex),new D(o,u,i,a)};r({target:"String",proto:!0,forced:B},{matchAll:function(t){var n,e,r,o,a=u(this);if(null!=t){if(v(t)&&(n=l(u("flags"in P?t.flags:M(t))),!~S(n,"g")))throw _("`.matchAll` does not allow non-global regexes");if(B)return T(a,t);if(void 0===(r=x(t,O))&&I&&"RegExp"==f(t)&&(r=F),r)return i(r,t,a)}else if(B)return T(a,t);return e=l(a),o=new RegExp(t,"g"),I?i(F,o,e):o[O](e)}}),I||O in P||g(P,O,F)},p532:function(t,n,e){"use strict";var r=e("I+eb"),o=e("xDBR"),i=e("/qmn"),a=e("0Dky"),c=e("0GbY"),u=e("Fib7"),s=e("SEBh"),l=e("zfnd"),p=e("busE");if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=s(this,c("Promise")),e=u(t);return this.then(e?function(e){return l(n,t()).then((function(){return e}))}:t,e?function(e){return l(n,t()).then((function(){throw e}))}:t)}}),!o&&u(i)){var f=c("Promise").prototype.finally;i.prototype.finally!==f&&p(i.prototype,"finally",f,{unsafe:!0})}},rW0t:function(t,n,e){"use strict";var r=e("glrk");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},rpNk:function(t,n,e){"use strict";var r,o,i,a=e("0Dky"),c=e("Fib7"),u=e("fHMY"),s=e("4WOD"),l=e("busE"),p=e("tiKp"),f=e("xDBR"),d=p("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(r=o):v=!0),null==r||a((function(){var t={};return r[d].call(t)!==t}))?r={}:f&&(r=u(r)),c(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},zfnd:function(t,n,e){var r=e("glrk"),o=e("hh1v"),i=e("8GlL");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}}}]);
//# sourceMappingURL=17-f7f6cd4f1651ab4b243d.js.map