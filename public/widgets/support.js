"use strict";(()=>{var Cn=Object.create;var It=Object.defineProperty;var Qn=Object.getOwnPropertyDescriptor;var vn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,kn=Object.prototype.hasOwnProperty;var Mn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Nn=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of vn(t))!kn.call(e,o)&&o!==n&&It(e,o,{get:()=>t[o],enumerable:!(r=Qn(t,o))||r.enumerable});return e};var Dn=(e,t,n)=>(n=e!=null?Cn(xn(e)):{},Nn(t||!e||!e.__esModule?It(n,"default",{value:e,enumerable:!0}):n,e));var Ot=Mn((Zr,ve)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var o="",i=0;i<arguments.length;i++){var a=arguments[i];a&&(o=r(o,n(a)))}return o}function n(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var i="";for(var a in o)e.call(o,a)&&o[a]&&(i=r(i,a));return i}function r(o,i){return i?o?o+" "+i:o+i:o}typeof ve!="undefined"&&ve.exports?(t.default=t,ve.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var m,mt,Sn,K,He,Be,_t,_e,yt,Le,Te,Bt,de=Symbol.for("pv"),Ee={},we=[],zn=/^m(i|n|o|s|text|space)$/,be=Array.isArray,Et=we.slice,$=Object.assign;function Z(e){e&&e.parentNode&&e.remove()}function ye(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:de,__v:o||++mt,__i:-1,__u:0};return!o&&m.vnode&&m.vnode(i),i}function Q(e){return e.children}function P(e,t){this.props=e,this.context=t,this.__g=0}function X(e,t){if(t==null)return e.__&&X(e.__,e.__i+1);for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!="function"||e.props.__P?null:X(e)}function wt(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),wt(e)}function Ue(e){(8&e.__g||(e.__g|=8,K.push(e),Be++))&&He==m.debounceRendering||((He=m.debounceRendering)||queueMicrotask)(bt)}function bt(){var e,t,n,r,o,i,a,A,l;try{for(t=1;K.length;)K.length>t&&K.sort(_t),e=K.shift(),t=K.length,8&e.__g&&(r=void 0,o=void 0,i=(o=(n=e).__v).__e,a=[],A=[],(l=n.__P)&&((r=$({constructor:de},o)).__v=o.__v+1,m.vnode&&m.vnode(r),Je(l,r,o,n.__n,l.namespaceURI,32&o.__u?[i]:null,a,i||X(o),32&o.__u,A),r.__v=o.__v,r.__.__k[r.__i]=r,xt(a,r,A),o.__=o.__e=null,r.__e!=i&&wt(r)))}finally{(Be=K.length)&&(He||queueMicrotask)(bt)}}function Ct(e,t,n,r,o,i,a,A,l,g,d){var f,u,s,p,I,h,y=r.__k||we,_=t.length;for(l=Rn(n,t,y,l,_),f=0;f<_;f++)(s=n.__k[f])!=null&&(u=~s.__i&&y[s.__i]||Ee,s.__i=f,h=Je(e,s,u,o,i,a,A,l,g,d),p=s.__e,(u.ref!=s.ref||8&u.__u)&&(u.ref&&Ke(u.ref,null,s,u),s.ref&&d.push(s.ref,s.__c||p,s)),I=I||p,4&s.__u?(l=Qt(s,l,e,!u.__v),u.__e&&(u.__e=null)):typeof s.type=="function"&&h!==void 0?l=h:p&&(l=p.nextSibling),s.__u&=-21);return n.__e=I,l}function Rn(e,t,n,r,o){var i,a,A,l,g,d,f,u,s,p=n.length,I=p,h=0,y=0,_=e.__k=Array(o);for(i=0;i<o;i++)(a=t[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a!="object"||a.constructor===String?a=_[i]=ye(null,a):be(a)?a=_[i]=ye(Q,{children:a}):a.constructor===de&&a.__b?a=_[i]=ye(a.type,a.props,a.key,a.ref,a.__v):_[i]=a,l=i+h,a.__=e,a.__b=e.__b+1,A=null,~(g=a.__i=qn(a,n,l,I))&&(I--,(A=n[g])&&(A.__u|=2)),A&&A.__v?(a.__u|=16,g==l-1?h--:g==l+1?h++:g!=l&&(g>l?h--:h++,y=1)):(~g||(o>p?h--:o<p&&h++),typeof a.type!="function"&&(a.__u|=4))):_[i]=null;if(y){for(d=[],f=[],i=0;i<o;i++)if((a=_[i])&&16&a.__u){for(h=0,u=d.length;h<u;)d[s=h+u>>1]<a.__i?h=s+1:u=s;d[h]=a.__i,f[i]=h+1}for(h=d.length;i--;)f[i]&&(f[i]==h?h--:_[i].__u|=4)}if(I)for(i=0;i<p;i++)!(A=n[i])||2&A.__u||(A.__e==r&&(r=X(A)),Pe(A,A));return r}function Qt(e,t,n,r){var o,i,a,A;if(typeof e.type=="function"){if(e.props.__P)return t;if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&(o[i].__=e,t=Qt(o[i],t,n,!1));return t}for(t&&!t.parentNode&&(t=X(e))&&!t.parentNode&&(t=null),a=e.__e,A=t;A&&A.nodeType==8;)A=A.nextSibling;for(a!=A&&(!r&&n.moveBefore&&a.parentNode?n.moveBefore(a,t):n.insertBefore(a,t||null)),t=a;(t=t&&t.nextSibling)&&t.nodeType==8&&!t.data.startsWith("$s"););return t}function Ce(e,t){return t=t||[],e!=null&&typeof e!="boolean"&&(be(e)?e.some(function(n){Ce(n,t)}):t.push(e)),t}function qn(e,t,n,r){var o,i=e.key,a=e.type,A=t[n],l=A&&!(2&A.__u);if(A===null&&i==null||l&&i==A.key&&a==A.type)return n;if(r>(l?1:0)){for(o=n-1;o>=0;o--)if((A=t[o])&&!(2&A.__u)&&i==A.key&&a==A.type)return o;for(o=n+1;o<t.length;o++)if((A=t[o])&&!(2&A.__u)&&i==A.key&&a==A.type)return o}return-1}function ht(e,t,n){n==null&&(n=""),t[0]=="-"?e.setProperty(t,n):e[t]=n}function me(e,t,n,r,o){var i,a;if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ht(e.style,t);if(n)for(t in n)r&&n[t]==r[t]||ht(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")(e.__e||(e.__e={}))[t]=n,n&&r||(a=Te[t]||(Te[t]=Fn(t)),(e.__a||(e.__a={}))[t]=Le,i=t!=(t=t.replace(yt,"$1")),(t=t.slice(2))[0]<"a"&&(t=t.toLowerCase()),n?e.addEventListener(t,a,i):e.removeEventListener(t,a,i));else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{return void(e[t]=n==null?"":n)}catch(A){}if(typeof n=="function")return;n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n)}}function Fn(e){return function(t){var n=this.__e;if(n){if(n=n[e],t[_e]==null)t[_e]=Le++;else if(t[_e]<this.__a[e])return;return n(m.event?m.event(t):t)}}}function Je(e,t,n,r,o,i,a,A,l,g){var d,f,u,s,p,I,h,y,_,C,E,B,J,H,T,U,D,F,S=t.type;if(t.constructor!==de)return null;128&n.__u&&(l=32&n.__u,d=n.__c.__z)&&(t.__u|=l,f=i=[],d.nodeType==8?A=Ge(d,i):i.push(d),A=i[0]||A),(d=m.__b)&&d(t);e:if(typeof S=="function"){u=a.length;try{if(y=t.props,_=(d=S.prototype)&&d.render,C=(d=S.contextType)&&r[d.__c],E=d?C?C.props.value:d.__:r,(s=n.__c)?(t.__c=s,2&s.__g&&(s.__g|=1)):(_?t.__c=s=new S(y,E):(t.__c=s=new P(y,E),s.constructor=S,s.render=Tn),C&&C.sub(s),s.state||(s.state={}),s.__n=r,s.__g|=8,s.__h=[],s.__k=[]),_&&(s.__s||(s.__s=s.state),S.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=$({},s.__s)),$(s.__s,S.getDerivedStateFromProps(y,s.__s)))),p=s.props,I=s.state,s.__v=t,n.__c){if(y!==p&&_&&!S.getDerivedStateFromProps&&s.componentWillReceiveProps&&s.componentWillReceiveProps(y,E),t.__v==n.__v&&!(8&s.__g)||!(4&s.__g)&&s.shouldComponentUpdate&&s.shouldComponentUpdate(y,s.__s,E)===!1){t.__v!=n.__v&&(s.props=y,s.state=s.__s,s.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(k){k&&(k.__=t)}),we.push.apply(s.__h,s.__k),s.__k=[],s.__h.length&&a.push(s),A=X(n);break e}s.componentWillUpdate&&s.componentWillUpdate(y,s.__s,E),_&&s.componentDidUpdate&&s.__h.push(function(){s.componentDidUpdate(p,I,h)})}else _&&!S.getDerivedStateFromProps&&s.componentWillMount&&s.componentWillMount(),_&&s.componentDidMount&&s.__h.push(s.componentDidMount);if(s.context=E,s.props=y,s.__P=e,s.__g&=-5,B=m.__r,J=0,_)s.state=s.__s,s.__g&=-9,B&&B(t),d=s.render(s.props,s.state,s.context),we.push.apply(s.__h,s.__k),s.__k=[];else do s.__g&=-9,B&&B(t),d=s.render(s.props,s.state,s.context),s.state=s.__s;while(8&s.__g&&++J<25);s.state=s.__s,s.getChildContext&&(r=$({},r,s.getChildContext())),_&&n.__c&&s.getSnapshotBeforeUpdate&&(h=s.getSnapshotBeforeUpdate(p,I)),H=d&&d.type===Q&&d.key==null?d.props.children:d,y.__P&&(d=A,o=(e=y.__P).namespaceURI,l=i=null,n.props&&n.props.__P!=e&&(n.__k.some(function(k){k&&Pe(k,k)}),n.__k=null),A=n.__k?X(n,0):null),A=Ct(e,be(H)?H:[H],t,n,r,o,i,a,A,l,g),y.__P&&(t.__e=null,A=d),t.__u&=-161,f&&f.some(Z),s.__h.length&&a.push(s),1&s.__g&&(s.__g&=-4)}catch(k){if(a.length=u,t.__v=null,l||i)if(k.then){if(T=0,t.__u|=128|l,i){for(~(D=i.indexOf(A||void 0))||(D=i.length);(F=i[D-1])&&F.nodeType==8;)D--;for(;D<i.length;D++)if(F=i[D]){if(i[D]=null,F.nodeType==8){if(F.data.startsWith("$s"))T++||(U=F);else if(T&&F.data.startsWith("/$s")&&!--T)break}else if(!T)break}}if(!U){for(;A&&A.nodeType==8&&A.nextSibling;)A=A.nextSibling;U=A}(d=Ge(U=t.__c.__z||(t.__c.__z=U)))?(t.__e=U,A=d):t.__e=A,A=A&&A.nextSibling}else i&&i.some(Z);else t.__e=n.__e;t.__k||(t.__k=n.__k||[]),k.then||vt(t),m.__e(k,t,n)}}else A=t.__e=Hn(n.__e,t,n,r,o,i,a,l,g,e);return(d=m.diffed)&&d(t),A}function Ge(e,t){if(e&&e.nodeType==8&&e.data.startsWith("$s"))for(var n=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith("$s"))n++;else if(e.data.startsWith("/$s")&&!--n)return e}t&&t.push(e)}}function vt(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(vt))}function xt(e,t,n){for(var r=0;r<n.length;)Ke(n[r++],n[r++],n[r++]);m.__c&&m.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){m.__e(i,o.__v)}})}function Hn(e,t,n,r,o,i,a,A,l,g){var d,f,u,s,p,I,h,y,_,C=n.props||Ee,E=t.props,B=t.type;if(B=="svg"?o="http://www.w3.org/2000/svg":B=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i){for(d=0;d<i.length;d++)if((p=i[d])&&(B?p.localName==B:p.nodeType==3)){e=p,i[d]=null;break}}if(!e){if(y=g.ownerDocument||document,!B)return y.createTextNode(E);e=y.createElementNS(o,B,E.is&&E),A&&(m.__m&&m.__m(t,i),A=!1),i=null}if(B){if(g=B=="template"&&e.content||e,i=B=="textarea"&&E.defaultValue!=null?null:i&&Et.call(g.childNodes),!A&&i)for(C={},d=0;d<e.attributes.length;d++)C[(p=e.attributes[d]).name]=p.value;for(d in C)p=C[d],d=="dangerouslySetInnerHTML"?u=p:d=="children"||d in E||d=="value"&&"defaultValue"in E||d=="checked"&&"defaultChecked"in E||me(e,d,null,p,o);for(d in _=1&n.__u,E)p=E[d],d=="children"?s=p:d=="dangerouslySetInnerHTML"?f=p:d=="value"?I=p:d=="checked"?h=p:A&&typeof p!="function"||!(C[d]!==p||_&&p!=null)||me(e,d,p,C[d],o);f?(A||u&&(f.__html==u.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[]):(u&&(e.textContent=""),(B=="foreignObject"||o=="http://www.w3.org/1998/Math/MathML"&&zn.test(B))&&(o="http://www.w3.org/1999/xhtml"),Ct(g,be(s)?s:[s],t,n,r,o,i,a,i?i[0]:n.__k&&X(n,0),A,l),i&&i.some(Z)),A&&B!="textarea"||(d="value",B=="progress"&&I==null?e.removeAttribute(d):I==null||I===e[d]&&(B!="progress"||I)||me(e,d,I,C[d],o),d="checked",h!=null&&h!=e[d]&&me(e,d,h,C[d],o))}else C===E||A&&e.data==E||(e.data=E);return e}function Ke(e,t,n,r){try{typeof e=="function"?t?t.__x=e(t)||1:r&&(r=r.__c||r.__e)&&(t=r.__x)&&(r.__x=null,typeof t=="function"?t():e(null)):e.current=t}catch(o){m.__e(o,n)}}function Pe(e,t,n){var r,o,i,a;if(m.unmount&&m.unmount(e),!(r=e.ref)||r.current&&r.current!=e.__e||Ke(r,null,t,e),r=e.__c){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(A){m.__e(A,t)}r.__P=r.__n=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Pe(r[a],t,typeof e.type!="function"||n&&!e.props.__P);!n&&(r=e.__c)&&(r=r.__z)&&(o=Ge(r,i=[]))&&(r==e.__e&&i.some(Z),Z(o),Z(r)),(r=e.__e)&&(n||Z(r),r.__e&&(r.__e=null)),e.__e=e.__c=e.__=null}function Tn(e,t,n){return this.constructor(e,n)}function Xe(e,t){var n,r,o,i;m.__&&m.__(e,t),t.nodeType==9&&(t=t.documentElement),r=(n=e&&32&e.__u)?null:t.__k,t.__k=ye(Q,{children:[e]}),o=[],i=[],Je(t,t.__k,r||Ee,Ee,t.namespaceURI,r?null:t.firstChild?Et.call(t.childNodes):null,o,r?r.__e:t.firstChild,n,i),xt(o,t.__k,i),t.__k.props.children=null}function Qe(e){function t(n){var r,o;return this.getChildContext||(r=new Set,(o={})[t.__c]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!=i.value&&r.forEach(function(a){a.__g|=4,Ue(a)})},this.sub=function(i){r.add(i);var a=i.componentWillUnmount;i.componentWillUnmount=function(){r.delete(i),a&&a.call(i)}}),n.children}return t.__c="__cC"+Bt++,t.__=e,t.Provider=(t.Consumer=function(n,r){return n.children(r)}).contextType=t,t}m={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!(1&o.__g)){o.__g|=4;try{if((a=(i=o.constructor)&&i.getDerivedStateFromError)&&o.setState(i.getDerivedStateFromError(e)),o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=1),a&&8&o.__g)return void(o.__g|=2)}catch(A){e=A}}throw Be=0,e}},mt=0,Sn=function(e){return e!=null&&e.constructor===de},P.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=$({},this.state)),typeof e=="function"&&(e=e($({},n),this.props)),e&&($(n,e),this.__v&&(t&&this.__k.push(t),Ue(this)))},P.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Ue(this))},P.prototype.render=Q,K=[],Be=0,_t=function(e,t){return e.__v.__b-t.__v.__b},_e=Symbol(),yt=/(PointerCapture)$|Capture$/i,Le=0,Te={},Bt=0;var j,w,je,kt,Oe=Object.is,re=0,Ht=[],We=[],b=m,Mt=b.__b,Nt=b.__r,Dt=b.diffed,St=b.__c,zt=b.unmount,Rt=b.__;function oe(e,t){b.__h&&b.__h(w,e,re||t),re=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function v(e){return re=1,Tt(Gt,e)}function Tt(e,t,n){var r=oe(j++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Gt(void 0,t),function(i){var a=r.__N?r.__N[0]:r.__[0],A=r.t(a,i);Oe(a,A)||(r.__N=[A,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.__f)){w.__f=!0;var o=w.shouldComponentUpdate;w.shouldComponentUpdate=function(i,a,A){var l=this.__H;if(!l)return!0;var g=!1,d=this.props!=i;if(l.__.some(function(u){u.__N&&(g=!0,Oe(u.__[0],u.__N[0])||(d=!0))}),o){var f=o.call(this,i,a,A);return g?f||d:f}return!g||d}}return r.__}function q(e,t){var n=oe(j++,3);!b.__s&&tt(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,w.__H.__h.push(n))}function Ut(e,t){var n=oe(j++,4);!b.__s&&tt(n.__H,t)&&(n.__P=!1,n.__=e,n.u=t,w.__h.push(n))}function x(e){return re=5,Ze(function(){return{current:e}},[])}function Ye(e,t,n){re=6,Ut(function(){if(typeof e=="function"){var r=e(t());return function(){e(null),r&&typeof r=="function"&&r()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function Ze(e,t){var n=oe(j++,7);return tt(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function ie(e,t){return re=8,Ze(function(){return e},t)}function $e(e){var t=w.context[e.__c],n=oe(j++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(w)),t.props.value):e.__}function et(){var e=oe(j++,11);if(!e.__){for(var t=w.__v;!t.__m&&t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Un(){var e;do{for(;e=We.shift();)try{ge(e)}catch(n){b.__e(n,{__:(e=e.__P)&&e.__v})}for(;e=Ht.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(ge),t.__h.some(Ve),t.__h=[]}catch(n){t.__h=[],b.__e(n,e.__v)}}}while(We.length)}b.__b=function(e){w=null,Mt&&Mt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Rt&&Rt(e,t)},b.__r=function(e){Nt&&Nt(e),j=0;var t=(w=e.__c).__H;t&&(je==w?w.__h=[]:(t.__h.some(ge),t.__h.some(Ve),j=0),t.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})),je=w},b.diffed=function(e){Dt&&Dt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&Ft(Ht.push(t)),t.__H.__.some(function(n){n.u&&(n.__H=n.u)})),je=w=null},b.__c=function(e,t){t.some(function(n){try{n.__h.some(ge),n.__h=n.__h.filter(function(r){return!r.__||Ve(r)})}catch(r){n.__h=[function(){throw r}]}}),St&&St(e,t)},b.unmount=function(e){zt&&zt(e);var t,n,r=e.__c;r&&r.__H&&(r.__H.__.some(function(o){try{if(o.__P&&o.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n=n&&n.__c}o.__P=n,Ft(We.push(o))}else ge(o)}catch(i){t=i}}),r.__H=void 0,t&&b.__e(t,r.__v))};var qt=typeof requestAnimationFrame=="function";function Gn(e){var t,n=function(){clearTimeout(r),qt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);qt&&(t=requestAnimationFrame(n))}function Ft(e){e!=1&&kt==b.requestAnimationFrame||((kt=b.requestAnimationFrame)||Gn)(Un)}function ge(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function Ve(e){var t=w;e.__c=e.__(),w=t}function tt(e,t){return!e||e.length!=t.length||t.some(function(n,r){return!Oe(n,e[r])})}function Gt(e,t){return typeof t=="function"?t(e):t}var nt=Object.assign;var Kn=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini|asp|fill|st)/;var Pn=Symbol.for("react.forward_ref");function Kt(e){function t(n){var r=nt({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Pn,t.render=e,t.prototype.isReactComponent=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Xn=Symbol.for("react.element"),jn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,On=/[A-Z0-9]/g,Wn=typeof document<"u";var Vn=function(e){return/fil|che|rad/.test(e)};function Pt(e,t,n){return t.__k==null&&(t.textContent=""),Xe(e,t),typeof n=="function"&&n(),e?e.__c:null}P.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Lt=m.event;m.event=function(e){return Lt&&(e=Lt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Yn={configurable:!0,get:function(){return this.class}},Jt=m.vnode;m.vnode=function(e){if(typeof e.type=="string")(function(r){var o=r.props,i=r.type,a={},A=i.indexOf("-")==-1;for(var l in o){var g=o[l];if(!(l=="value"&&"defaultValue"in o&&g==null||Wn&&l=="children"&&i=="noscript"||l=="class"||l=="className")){if(l=="style"&&g&&g.constructor==Object){var d=void 0;for(var f in g)typeof g[f]!="number"||Kn.test(f)||(d||(d=g=nt({},g)),g[f]+="px")}else if(l=="defaultValue"&&"value"in o&&o.value==null)l="value";else if(l=="download"&&g===!0)g="";else if(l=="translate"&&g==="no")g=!1;else if(l[0]=="o"&&l[1]=="n"){var u=l.toLowerCase();u=="ondoubleclick"?l="ondblclick":u!="onchange"||i!="input"&&i!="textarea"||Vn(o.type)?u=="onfocus"?l="onfocusin":u=="onblur"&&(l="onfocusout"):u=l="oninput",u=="oninput"&&a[l=u]&&(l="oninputCapture")}else A&&jn.test(l)?l=l.replace(On,"-$&").toLowerCase():g===null&&(g=void 0);a[l]=g}}i=="select"&&(a.multiple&&Array.isArray(a.value)&&(a.value=Ce(o.children).forEach(function(s){s.props.selected=a.value.indexOf(s.props.value)!=-1})),a.defaultValue!=null&&(a.value=Ce(o.children).forEach(function(s){s.props.selected=a.multiple?a.defaultValue.indexOf(s.props.value)!=-1:a.defaultValue==s.props.value}))),o.class&&!o.className?(a.class=o.class,Object.defineProperty(a,"className",Yn)):o.className&&(a.class=a.className=o.className),r.props=a})(e);else if(typeof e.type=="function"&&("ref"in e.props&&"prototype"in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=nt({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!("ref"in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=Xn,Jt&&Jt(e)};var qr=Symbol.for("pv");function Xt(e){return!!e.__k&&(Xe(null,e),!0)}function jt(e){return{render:function(t){Pt(t,e)},unmount:function(){Xt(e)}}}var Zn=Symbol.for("pv"),$n=0,Kr=Array.isArray;function c(e,t,n,r,o,i){t||(t={});var a,A,l=t;if("ref"in l&&typeof e!="function")for(A in l={},t)A=="ref"?a=t[A]:l[A]=t[A];var g={type:e,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:Zn,__v:--$n,__i:-1,__u:0};return(o||i)&&(g.__source=o,g.__self=i),m.vnode&&m.vnode(g),g}function rt({href:e,children:t,...n}){return c("a",{href:e,...n,children:t})}var en=Dn(Ot());var xe=(e,t,n=void 0)=>{let r=Array.isArray(t)?t:t.replace(/(\[(\d)\])/g,".$2").replace(/^\./,"").split(".");if(!r.length||r[0]===void 0)return e;let o=r[0];return typeof e!="object"||e===null||!(o in e)||e[o]===void 0?n:xe(e[o],r.slice(1),n)};var ue={support:{footer_link:"Contacter l\u2019\xE9quipe",title:"Contacter l\u2019\xE9quipe",subtitle:"Bug, id\xE9e, question ou compliment, l\u2019\xE9quipe lit tout et vous r\xE9pond si besoin.",email_label:"E-mail",email_required:"L'e-mail est obligatoire. Format: nom@domaine.fr",email_invalid:"E-mail invalide. Exemple: mdupont@lasuite.gouv.fr",subject_label:"Objet",subject_required:"L'objet est obligatoire",message_label:"Votre message",message_required:"Le message est obligatoire",upload:"Ajouter un fichier",upload_hint:"Image (png, jpg, gif) ou fichier texte (txt) de 10 Mo maximum",remove_file:"Retirer le fichier",file_too_large:"Fichier trop volumineux. Taille maximale autoris\xE9e : 10 m\xE9gaoctets",file_too_many:"Un seul fichier autoris\xE9",file_type_invalid:"Le fichier doit \xEAtre de type jpg, png, gif ou txt",file_read_error:"Impossible de lire le fichier.",cancel:"Annuler",send:"Envoyer",sending:"Envoi\u2026",close:"Fermer le formulaire de contact",success_title:"Merci pour votre retour",success_text:"Si besoin, un membre de notre \xE9quipe support vous contactera par e-mail.",success_close:"Fermer",error:"Une erreur est survenue. R\xE9essayez plus tard.",altcha_required:"Veuillez attendre la v\xE9rification anti-spam avant d\u2019envoyer."}};var Wt={support:{footer_link:"Contact the team",title:"Contact the team",subtitle:"Bug, idea, question, or praise, the team reads everything and will get back to you if needed.",email_label:"Email",email_required:"The email is required. Format: name@domain.com",email_invalid:"Invalid email address. Example: m.dupont@lasuite.gouv.fr",subject_label:"Subject",subject_required:"The subject is required",message_label:"Your message",message_required:"The message is required",upload:"Upload a file",upload_hint:"Image (png, jpg, gif) or text file (txt), up to 10 MB",remove_file:"Remove file",file_too_large:"File is too large. Maximum size allowed: 10 megabytes",file_too_many:"Only one file is allowed",file_type_invalid:"File must be of type jpg, png, gif, or txt",file_read_error:"Unable to read file.",cancel:"Cancel",send:"Send",sending:"Sending\u2026",close:"Close the contact form",success_title:"Thank you for your feedback",success_text:"If needed, a member of our support team will contact you by email.",success_close:"Close",error:"Something went wrong. Please try again later.",altcha_required:"Please wait for the anti-spam check to finish before sending."}};var Vt={support:{}};var Yt={support:{}};var Zt=Qe(ue),er={fr:ue,en:Wt,de:Vt,nl:Yt};function $t({locale:e="fr",children:t}){let n=er[e];return c(Zt.Provider,{value:n,children:t})}function ee({useFallback:e=!1}={}){let n=$e(Zt)||ue;return function(o,i={}){let a=xe(n,o);if(!a&&e&&(a=xe(ue,o)),!a)return console.warn(`Translation for key "${o}" not found`),o;if(Object.keys(i).length){let A=[];if(Object.keys(i).forEach(g=>{typeof i[g]!="string"&&A.push(g)}),!A.length)return a.replace(/{(\w+)}/g,(g,d)=>i[d]);let l=a.split(/{(.*?)}/);return c(Q,{children:l.map(g=>g in i?i[g]:g)})}return a}}var z="transition ease-in-out delay-50 duration-300",R="flex rounded rounded-1 justify-center items-center text-base w-full md:w-fit text-left gap-[7px] px-4 h-10",O={primary_brand:`${R} ${z} font-medium text-brand-050 bg-brand-550 hover:bg-brand-650`,secondary_brand:`${R} ${z} font-medium bg-brand-100 text-brand-550 hover:bg-brand-150`,tertiary_brand:`${R} ${z} font-medium text-brand-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,tertiary_brand_bordered:`${R} ${z} font-medium text-brand-550 bg-transparent border border-gray-150 hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,neutral_bordered:`${R} ${z} font-medium text-gray-550 bg-transparent border border-gray-150 hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,primary_neutral:`${R} ${z} font-medium text-white bg-gray-550 hover:backdrop-brightness-95`,secondary_neutral:`${R} ${z} font-medium bg-transparent border border-2 border-grey-4 text-gray-550 hover:backdrop-brightness-95`,tertiary_neutral:`${R} ${z} font-medium text-gray-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,primary_info:`${R} ${z} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,secondary_info:`${R} ${z} font-medium bg-transparent border border-2 border-grey-4 text-brand-550 hover:backdrop-brightness-95`,tertiary_info:`${R} ${z} font-medium text-blue-1 bg-transparent hover:bg-primary-300`,tertiary_bordered:`${R} ${z} bg-transparent font-medium border border-gray-150 text-brand-550 hover:backdrop-brightness-95 hover:bg-transparent`,none:"text-blue-1 underline underline-offset-2 hover:no-underline",large:"!text-xl md:!py-4 md:!px-8",medium:"md:!py-2 md:!px-4 h-8",small:"md:!py-1 h-8 text-xs",nano:"text-xs py-1 h-auto !px-2",fullWidth:"!w-full"},ke=({children:e,href:t,target:n,icon:r,iconPosition:o="left",variant:i,size:a,fullWidth:A=!1,"aria-label":l,className:g,style:d,onClick:f,type:u="button"})=>{let s=ee(),p=i||"primary_brand",I=p==="none",h=p,y=p==="tertiary bordered"?" border border-2 border-grey-4":"",_=(0,en.default)(O[h]||O.primary_brand,{[O.none]:I,[O.large]:a==="large"&&!I,[O.medium]:a==="medium"&&!I,[O.small]:a==="small"&&!I,[O.nano]:a==="nano"&&!I,[O.fullWidth]:A&&!I},y,g),C=t!=null&&t.startsWith("#")?"a":rt,E=n==="_blank"?l?`${l} - ${s("common.new_window")}`:typeof e=="string"?`${e} - ${s("common.new_window")}`:void 0:l,B=c(Q,{children:[r&&o==="left"&&c("span",{className:"flex","aria-hidden":"true",children:r}),c("span",{children:e}),r&&o==="right"&&c("span",{"aria-hidden":"true",children:r})]}),J={...d};return t?c(C,{href:t,target:n,className:_,"aria-label":E,style:J,onClick:f,children:B}):c("button",{className:_,"aria-label":E,style:J,onClick:f,type:u,children:B})};function ot({src:e,type:t,onLoad:n,onError:r}){return q(()=>{let o=document.querySelector(`script[src="${e}"]`);if(o){o.dataset.loaded==="1"?n==null||n():(o.addEventListener("load",()=>n==null?void 0:n(),{once:!0}),o.addEventListener("error",()=>r==null?void 0:r(),{once:!0}));return}let i=document.createElement("script");i.src=e,t&&(i.type=t),i.onload=()=>{i.dataset.loaded="1",n==null||n()},i.onerror=()=>r==null?void 0:r(),document.head.appendChild(i)},[e,t,n,r]),null}var tr="https://cdn.jsdelivr.net/npm/altcha@3.3.0/dist/main/altcha.min.js",nr="/altcha/workers/scrypt.js",rr="/api/support/challenge",it=null;function tn(e){it||(it=URL.createObjectURL(new Blob([e],{type:"application/javascript"})));let t=it;return()=>new Worker(t)}async function or(e){let t=window.$altcha;if(!t)return!1;if(t.algorithms.has("SCRYPT"))return!0;let n=new URL(e,window.location.href).href;if(n.startsWith(window.location.origin))return t.algorithms.set("SCRYPT",()=>new Worker(n)),!0;let o=window.__LASUITE_ALTCHA_SCRYPT_SOURCE__;if(o)return t.algorithms.set("SCRYPT",tn(o)),!0;try{let i=await fetch(n);if(!i.ok)return console.error("ALTCHA scrypt worker fetch failed",i.status),!1;let a=await i.text();return t.algorithms.set("SCRYPT",tn(a)),!0}catch(i){return console.error("ALTCHA scrypt worker unavailable cross-origin",i),!1}}var nn=Kt(function({remountKey:t,onPayloadChange:n,challengeUrl:r=rr,scryptWorkerUrl:o=nr},i){let a=x(null),A=x(""),[l,g]=v(!1),[d,f]=v(!1);return q(()=>{if(!window.$altcha&&!l)return;let u=!1;return or(o).then(s=>{u||f(s)}),()=>{u=!0}},[l,o]),q(()=>{let u=a.current;if(!u||!d)return;let s=p=>{let I=p.detail;(I==null?void 0:I.state)==="verified"&&I.payload?(A.current=I.payload,n(I.payload)):(A.current="",n(""))};return u.addEventListener("statechange",s),()=>u.removeEventListener("statechange",s)},[d,t,n]),Ye(i,()=>({verify:async()=>{if(A.current)return A.current;let u=a.current;if(!(u!=null&&u.verify))return"";let s=await u.verify();return A.current?A.current:s&&typeof s=="object"&&s.payload?(A.current=s.payload,n(s.payload),s.payload):""}}),[n]),c(Q,{children:[c(ot,{type:"module",src:tr,strategy:"afterInteractive",onLoad:()=>g(!0)}),d?c("altcha-widget",{ref:a,challenge:r,auto:"off",display:"invisible",style:{display:"none"},"aria-hidden":"true"},t):null]})});var at=["image/png","image/jpeg","image/gif","text/plain"],rn=[".jpg",".jpeg",".png",".gif",".txt"],on=[...rn,...at].join(",");function an(e){let t=e.type.toLowerCase();if(t&&at.includes(t))return!0;let n=e.name.toLowerCase();return rn.some(r=>n.endsWith(r))}function sn(e){let t=e.type.toLowerCase();if(t&&at.includes(t))return t;let n=e.name.toLowerCase();return n.endsWith(".png")?"image/png":n.endsWith(".jpg")||n.endsWith(".jpeg")?"image/jpeg":n.endsWith(".gif")?"image/gif":n.endsWith(".txt")?"text/plain":t||"application/octet-stream"}var ir=/^data:[^;]+;base64,/i;function ar(e){return e.replace(ir,"")}function An(e,t=18){if(e.length<=t)return e;let n=e.lastIndexOf("."),r=n>0?e.slice(n):"",o=Math.max(8,t-r.length-1);return`${e.slice(0,o)}\u2026${r}`}function cn(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let o=r.result;if(typeof o!="string"){n(new Error("Unable to read file"));return}t(ar(o))},r.onerror=()=>n(new Error("Unable to read file")),r.readAsDataURL(e)})}var ln=({attachments:e,onChange:t,onError:n,disabled:r})=>{let o=ee(),i=x(null),a=async A=>{if(!(A!=null&&A.length))return;n("");let l=[...e];for(let g of Array.from(A)){if(l.length>=1){n(o("support.file_too_many"));break}if(!an(g)){n(o("support.file_type_invalid"));continue}if(g.size>10485760){n(o("support.file_too_large"));continue}try{let d=await cn(g);l.push({fileName:g.name,mimeType:sn(g),data:d})}catch(d){n(o("support.file_read_error"))}}t(l),i.current&&(i.current.value="")};return c("div",{className:"flex w-full min-w-0 flex-col items-start gap-1.5",children:[c("input",{ref:i,type:"file",className:"hidden",accept:on,disabled:r||e.length>=1,onChange:A=>void a(A.target.files)}),c("div",{className:"flex flex-wrap items-center gap-2",children:[e.map((A,l)=>c("div",{className:"inline-flex h-6 max-w-full items-center gap-1.5 rounded bg-[#dee2e9] px-2 text-xs leading-none text-[#555E74]",children:[c(Ar,{}),c("span",{className:"max-w-[120px] truncate",title:A.fileName,id:`support-attachment-${l}`,children:An(A.fileName)}),c("button",{type:"button",disabled:r,"aria-label":o("support.remove_file"),"aria-describedby":`support-attachment-${l}`,onClick:()=>t(e.filter((g,d)=>d!==l)),className:"flex h-4 w-4 shrink-0 items-center justify-center rounded hover:bg-gray-100",children:c("svg",{"aria-hidden":"true",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:c("path",{d:"M12.5 3.5 3.5 12.5M3.5 3.5l9 9",stroke:"#555E74",strokeWidth:"1.5",strokeLinecap:"round"})})})]},`${A.fileName}-${l}`)),c("button",{type:"button",disabled:r||e.length>=1,onClick:()=>{var A;return(A=i.current)==null?void 0:A.click()},"aria-describedby":"support-upload-hint",className:"inline-flex h-6 items-center gap-1 rounded border border-[#cbcfd8] bg-white px-1.5 text-xs font-medium leading-none text-[#555E74] hover:bg-gray-050 disabled:pointer-events-none disabled:opacity-55",children:[c(cr,{}),c("span",{children:o("support.upload")})]})]}),c("span",{id:"support-upload-hint",className:"text-xs leading-snug text-greyscale-500",children:o("support.upload_hint")})]})},Ar=()=>c("svg",{className:"h-4 w-4 shrink-0",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"#555E74",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),c("path",{d:"M14 3v5h5"}),c("path",{d:"M9 13h6M9 17h4"})]}),cr=()=>c("svg",{className:"h-[15px] w-[15px] shrink-0",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"#555E74",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[c("path",{d:"M12 15V4"}),c("path",{d:"M7 9l5-5 5 5"}),c("path",{d:"M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"})]});var lr="w-full rounded border border-[#cbcfd8] bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]",dr="w-full rounded border border-[#ce0500] bg-transparent px-3 py-2.5 pr-10 text-sm text-greyscale-950 outline-none focus:border-[#ce0500] focus:shadow-[0_0_0_1px_#ce0500]";function Me({id:e,label:t,error:n,value:r,onChange:o,required:i,as:a="input",inputRef:A,type:l="text",autoComplete:g,rows:d}){let f=a,u=!!n,s=`${e}-invalid`,p=a==="textarea";return c("div",{className:"flex flex-col gap-1.5",children:[c("label",{htmlFor:e,className:"text-sm font-medium",children:t}),c("div",{className:"relative",children:[c(f,{ref:A,id:e,required:i,value:r,onChange:I=>o(I.target.value),"aria-invalid":u,"aria-describedby":u?s:void 0,className:`${p?"min-h-24 resize-y ":""}${u?dr:lr}`,...p?{rows:d}:{type:l,autoComplete:g}}),u&&c("span",{"aria-hidden":"true",className:`pointer-events-none leading-none absolute right-3 flex h-5 w-5 items-center justify-center ${p?"top-3":"top-1/2 -translate-y-1/2"}`,children:c("svg",{"aria-hidden":"true",className:"w-full h-full",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c("path",{d:"M7.33984 9.33333C7.70803 9.33333 8.00651 9.63181 8.00651 10C8.00651 10.3682 7.70803 10.6667 7.33984 10.6667H7.33333C6.96514 10.6667 6.66667 10.3682 6.66667 10C6.66667 9.63181 6.96514 9.33333 7.33333 9.33333H7.33984Z",fill:"#CF202D"}),c("path",{d:"M7.33333 4C7.70152 4 8 4.29848 8 4.66667V7.33333C8 7.70152 7.70152 8 7.33333 8C6.96514 8 6.66667 7.70152 6.66667 7.33333V4.66667C6.66667 4.29848 6.96514 4 7.33333 4Z",fill:"#CF202D"}),c("path",{d:"M7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0ZM7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333Z","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#CF202D"})]})})]}),u&&c("p",{id:s,className:"m-0 text-xs text-[#ce0500]",children:n})]})}var At={subject:null,message:null,email:null},dn=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,gr=1500;function ur(e){return new Promise(t=>{window.setTimeout(t,e)})}var pr=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function fr(e){return e.endsWith("/")?e:`${e}/`}function Ir(e){return[...e.querySelectorAll(pr)].filter(t=>t.checkVisibility?t.checkVisibility():t.getClientRects().length>0)}function hr(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"80",fill:"none",viewBox:"0 0 80 80",children:[c("defs",{children:[c("linearGradient",{id:"bubbleFill",x1:"40",x2:"40",y1:"14.75",y2:"56",gradientUnits:"userSpaceOnUse",children:[c("stop",{stopColor:"#FFF"}),c("stop",{offset:"1",stopColor:"#F6F8F9"})]}),c("linearGradient",{id:"bubbleStroke",x1:"40",x2:"40",y1:"15",y2:"65",gradientUnits:"userSpaceOnUse",children:[c("stop",{stopColor:"#dbdee3"}),c("stop",{offset:"1",stopColor:"#dbdee3"})]}),c("filter",{id:"shadow",width:"92",height:"92",x:"-6",y:"-4",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[c("feGaussianBlur",{in:"SourceAlpha",result:"blur",stdDeviation:"3"}),c("feOffset",{dy:"2",in:"blur",result:"offset"}),c("feComponentTransfer",{in:"offset",result:"shadow",children:c("feFuncA",{slope:"0.05",type:"linear"})}),c("feFlood",{floodColor:"#181B24",result:"shadowColor"}),c("feComposite",{in:"shadowColor",in2:"shadow",operator:"in",result:"coloredShadow"}),c("feMerge",{children:[c("feMergeNode",{in:"coloredShadow"}),c("feMergeNode",{in:"SourceGraphic"})]})]})]}),c("g",{filter:"url(#shadow)",children:[c("path",{fill:"url(#bubbleFill)",stroke:"url(#bubbleStroke)",strokeLinejoin:"round",strokeWidth:"2",d:"M51.185 65.248q1.16 0 1.81-.743.65-.742.65-2.019v-6.59h2.111q3.225 0 5.709-1.37 2.46-1.369 3.875-3.921 1.392-2.552 1.392-6.08V26.146q0-3.527-1.369-6.08a9.43 9.43 0 0 0-3.898-3.921q-2.553-1.393-6.103-1.393H24.638q-3.551 0-6.103 1.393a9.26 9.26 0 0 0-3.899 3.922q-1.37 2.552-1.369 6.08v18.378q0 3.528 1.37 6.08a9.26 9.26 0 0 0 3.898 3.922q2.552 1.368 6.103 1.369h14.665l8.703 7.727q.95.86 1.67 1.23.72.395 1.509.395Z"}),c("path",{fill:"#c6cbd3",d:"M20.168 24.841c0-.982.796-1.777 1.778-1.777h36.11a1.778 1.778 0 1 1 0 3.555h-36.11a1.78 1.78 0 0 1-1.778-1.778m0 5.334c0-.982.796-1.778 1.778-1.778h36.11a1.778 1.778 0 1 1 0 3.555h-36.11a1.78 1.78 0 0 1-1.778-1.777m0 5.333c0-.982.796-1.778 1.778-1.778h36.11a1.778 1.778 0 0 1 0 3.556h-36.11a1.78 1.78 0 0 1-1.778-1.778m0 5.333c0-.982.796-1.778 1.778-1.778h14.11a1.778 1.778 0 1 1 0 3.556h-14.11a1.78 1.78 0 0 1-1.778-1.778"})]})]})}function mr({titleId:e,onClose:t}){let n=ee(),r=x(null);return q(()=>{window.setTimeout(()=>{var o,i;(i=(o=r.current)==null?void 0:o.querySelector("button"))==null||i.focus()},0)},[]),c("div",{className:"flex flex-col items-center px-5 pb-5 pt-10 text-center",children:[c("div",{role:"status",className:"flex flex-col items-center",children:[c(hr,{}),c("h2",{id:e,className:"m-0 mt-4 text-lg font-bold leading-tight text-greyscale-950",children:n("support.success_title")}),c("p",{className:"mt-2 mb-2 text-sm leading-snug text-greyscale-500",children:n("support.success_text")})]}),c("div",{ref:r,className:"mt-6 w-full",children:c(ke,{type:"button",variant:"secondary_brand",onClick:t,fullWidth:!0,children:n("support.success_close")})})]})}var gn=({channel:e,email:t,open:n,onClose:r,onOpen:o,onSuccess:i,apiBase:a="/api/support/",position:A="bottom-left"})=>{let l=ee(),g=et(),d=x(null),f=x(null),u=x(null),s=x(null),p=x(null),I=x(null),h=fr(a),y=/^https?:\/\//i.test(h),_=`${h}challenge`,C=`${h}deliver/`,E=y?`${new URL(h).origin}/altcha/workers/scrypt.js`:"/altcha/workers/scrypt.js",B=(t||"").trim(),J=dn.test(B)?B:"",H=!J,[T,U]=v(""),[D,F]=v(""),[S,k]=v(""),[De,Se]=v(At),[ct,ze]=v([]),[fe,te]=v("idle"),[lt,se]=v(""),[_n,Ae]=v(""),[yn,Re]=v(0),ce=x(0),Bn=ie(G=>{Ae(G)},[]);if(q(()=>{if(!n){ce.current+=1,te("idle");return}te("idle"),se(""),Ae(""),ze([]),Se(At),k(""),Re(M=>M+1);let G=window.setTimeout(()=>{var M;return(M=u.current)==null?void 0:M.focus()},0);return()=>window.clearTimeout(G)},[n,t]),q(()=>{!n||!d.current||o==null||o(d.current)},[n,o]),q(()=>{if(!n)return;let G=M=>{if(M.key==="Escape"){r();return}if(M.key!=="Tab")return;let ne=d.current;if(!ne)return;let V=Ir(ne);if(!V.length)return;let Ie=V[0],le=V[V.length-1],Y=ne.getRootNode(),he=(Y instanceof Document||Y instanceof ShadowRoot?Y.activeElement:null)||document.activeElement;M.shiftKey&&he===Ie?(M.preventDefault(),le.focus()):!M.shiftKey&&he===le&&(M.preventDefault(),Ie.focus())};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[n,r]),!n)return null;let qe=H?S.trim():J,En=async G=>{var gt,ut,pt;if(G.preventDefault(),fe==="submitting")return;let M=T.trim().length>0,ne=D.trim().length>0,V=dn.test(qe),Ie={subject:M?null:l("support.subject_required"),message:ne?null:l("support.message_required"),email:!H||V?null:l(qe?"support.email_invalid":"support.email_required")};Se(Ie);let le=[{ok:M,el:u.current},{ok:ne,el:s.current},...H?[{ok:V,el:p.current}]:[]].find(N=>!N.ok);if(le){(gt=le.el)==null||gt.focus();return}let Y=++ce.current,he=Date.now(),Fe=async()=>{let N=gr-(Date.now()-he);N>0&&await ur(N)};se(""),te("submitting");let wn=new FormData(G.currentTarget),dt=String(wn.get("altcha")||"").trim()||_n.trim()||await((ut=I.current)==null?void 0:ut.verify())||"";if(!dt){if(await Fe(),Y!==ce.current)return;te("error"),se(l("support.altcha_required")),Ae(""),Re(N=>N+1),window.setTimeout(()=>{var N,L,ft;(ft=(L=(N=d.current)==null?void 0:N.querySelector("altcha"))==null?void 0:L.focus)==null||ft.call(L)},0);return}let bn={subject:T.trim(),textBody:D.trim(),email:qe,channel:e,altcha:dt,notify_sender:!0,attachments:ct};try{let L=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json","X-Channel-ID":e},body:JSON.stringify(bn)})).json();if(!L.success)throw new Error(L.detail||l("support.error"));if(await Fe(),Y!==ce.current)return;U(""),F(""),Ae(""),ze([]),Se(At),k(""),(pt=f.current)==null||pt.reset(),te("success"),i==null||i()}catch(N){if(await Fe(),Y!==ce.current)return;te("error"),se(N instanceof Error?N.message:l("support.error")),Ae(""),Re(L=>L+1)}};return c("div",{ref:d,role:"dialog","aria-modal":"true","aria-labelledby":g,className:`fixed z-[1000] inset-0 w-full max-w-none max-h-none rounded-none overflow-auto bg-white text-left shadow-none md:w-[min(400px,calc(100vw-24px))] md:max-h-[calc(100vh-40px)] md:rounded-lg md:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)] ${A==="top-right"?"md:inset-auto md:top-20 md:right-5 md:bottom-auto md:left-auto":A==="bottom-right"?"md:inset-auto md:bottom-5 md:right-5 md:left-auto md:top-auto":"md:inset-auto md:bottom-5 md:left-5 md:right-auto md:top-auto"}`,children:[c("button",{type:"button",onClick:r,"aria-label":l("support.close"),className:"absolute right-[6px] top-[6px] z-10 flex h-7 w-7 items-center justify-center rounded-md hover:bg-greyscale-050",children:c("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{d:"M12.5 3.5 3.5 12.5M3.5 3.5l9 9",stroke:"#626A80",strokeWidth:"1.5",strokeLinecap:"round"})})}),fe==="success"?c(mr,{titleId:g,onClose:r}):c(Q,{children:[c("div",{className:"px-5 pt-5 pr-10",children:[c("h2",{id:g,className:"m-0 text-lg font-bold leading-tight text-greyscale-950",children:l("support.title")}),c("p",{className:"mt-2 mb-0 text-sm leading-snug text-greyscale-500",children:l("support.subtitle")})]}),c("div",{className:"px-5 pb-5 pt-4",children:c("form",{ref:f,className:"flex flex-col gap-3.5",onSubmit:En,noValidate:!0,children:[c(Me,{id:"support-subject",label:l("support.subject_label"),error:De.subject,value:T,onChange:U,inputRef:u,required:!0}),c(Me,{as:"textarea",id:"support-message",label:l("support.message_label"),error:De.message,value:D,onChange:F,inputRef:s,required:!0,rows:5}),c(ln,{attachments:ct,onChange:ze,onError:se,disabled:fe==="submitting"}),H&&c(Me,{id:"support-email",label:l("support.email_label"),error:De.email,value:S,onChange:k,inputRef:p,type:"email",autoComplete:"email",required:!0}),c(nn,{ref:I,remountKey:yn,onPayloadChange:Bn,challengeUrl:_,scryptWorkerUrl:E}),lt&&c("p",{className:"m-0 text-xs text-[#ce0500]",role:"alert",children:lt}),c("div",{className:"mt-1 flex justify-end gap-2",children:[c(ke,{type:"button",variant:"tertiary_brand_bordered",onClick:r,className:"!min-w-10 !flex-1",children:l("support.cancel")}),c(ke,{type:"submit",variant:"primary_brand",className:"!min-w-10 !flex-1",children:l(fe==="submitting"?"support.sending":"support.send")})]})]})})]})]})};var un='/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-marianne),ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.right-3{right:calc(var(--widget-font-size, 1rem)*.75)}.right-\\[6px\\]{right:6px}.top-1\\/2{top:50%}.top-3{top:calc(var(--widget-font-size, 1rem)*.75)}.top-\\[6px\\]{top:6px}.z-10{z-index:10}.z-\\[1000\\]{z-index:1000}.m-0{margin:0}.mb-0{margin-bottom:0}.mb-2{margin-bottom:calc(var(--widget-font-size, 1rem)*.5)}.mt-1{margin-top:calc(var(--widget-font-size, 1rem)*.25)}.mt-2{margin-top:calc(var(--widget-font-size, 1rem)*.5)}.mt-4{margin-top:calc(var(--widget-font-size, 1rem)*1)}.mt-6{margin-top:calc(var(--widget-font-size, 1rem)*1.5)}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-10{height:calc(var(--widget-font-size, 1rem)*2.5)}.h-4{height:calc(var(--widget-font-size, 1rem)*1)}.h-5{height:calc(var(--widget-font-size, 1rem)*1.25)}.h-6{height:calc(var(--widget-font-size, 1rem)*1.5)}.h-7{height:calc(var(--widget-font-size, 1rem)*1.75)}.h-8{height:calc(var(--widget-font-size, 1rem)*2)}.h-\\[15px\\]{height:15px}.h-auto{height:auto}.h-full{height:100%}.max-h-none{max-height:none}.min-h-24{min-height:calc(var(--widget-font-size, 1rem)*6)}.\\!w-full{width:100%!important}.w-4{width:calc(var(--widget-font-size, 1rem)*1)}.w-5{width:calc(var(--widget-font-size, 1rem)*1.25)}.w-7{width:calc(var(--widget-font-size, 1rem)*1.75)}.w-\\[15px\\]{width:15px}.w-full{width:100%}.\\!min-w-10{min-width:calc(var(--widget-font-size, 1rem)*2.5)!important}.min-w-0{min-width:0}.max-w-\\[120px\\]{max-width:120px}.max-w-full{max-width:100%}.max-w-none{max-width:none}.\\!flex-1{flex:1 1 0%!important}.shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize-y{resize:vertical}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-1{gap:calc(var(--widget-font-size, 1rem)*.25)}.gap-1\\.5{gap:calc(var(--widget-font-size, 1rem)*.375)}.gap-2{gap:calc(var(--widget-font-size, 1rem)*.5)}.gap-3{gap:calc(var(--widget-font-size, 1rem)*.75)}.gap-3\\.5{gap:calc(var(--widget-font-size, 1rem)*.875)}.gap-\\[7px\\]{gap:7px}.overflow-auto{overflow:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.border{border-width:1px}.border-2{border-width:2px}.border-\\[\\#cbcfd8\\]{--tw-border-opacity:1;border-color:rgb(203 207 216/var(--tw-border-opacity))}.border-\\[\\#ce0500\\]{--tw-border-opacity:1;border-color:rgb(206 5 0/var(--tw-border-opacity))}.border-gray-150{--tw-border-opacity:1;border-color:rgb(207 213 222/var(--tw-border-opacity))}.border-grey-1{--tw-border-opacity:1;border-color:rgb(127 126 126/var(--tw-border-opacity))}.border-grey-4{--tw-border-opacity:1;border-color:rgb(221 221 221/var(--tw-border-opacity))}.bg-\\[\\#dee2e9\\]{--tw-bg-opacity:1;background-color:rgb(222 226 233/var(--tw-bg-opacity))}.bg-blue-1{--tw-bg-opacity:1;background-color:rgb(0 0 145/var(--tw-bg-opacity))}.bg-brand-100{--tw-bg-opacity:1;background-color:rgb(218 226 255/var(--tw-bg-opacity))}.bg-brand-550{--tw-bg-opacity:1;background-color:rgb(62 93 231/var(--tw-bg-opacity))}.bg-gray-550{--tw-bg-opacity:1;background-color:rgb(98 106 128/var(--tw-bg-opacity))}.bg-transparent{background-color:initial}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.\\!px-2{padding-left:calc(var(--widget-font-size, 1rem)*.5)!important;padding-right:calc(var(--widget-font-size, 1rem)*.5)!important}.px-1{padding-left:calc(var(--widget-font-size, 1rem)*.25);padding-right:calc(var(--widget-font-size, 1rem)*.25)}.px-1\\.5{padding-left:calc(var(--widget-font-size, 1rem)*.375);padding-right:calc(var(--widget-font-size, 1rem)*.375)}.px-2{padding-left:calc(var(--widget-font-size, 1rem)*.5);padding-right:calc(var(--widget-font-size, 1rem)*.5)}.px-3{padding-left:calc(var(--widget-font-size, 1rem)*.75);padding-right:calc(var(--widget-font-size, 1rem)*.75)}.px-4{padding-left:calc(var(--widget-font-size, 1rem)*1);padding-right:calc(var(--widget-font-size, 1rem)*1)}.px-5{padding-left:calc(var(--widget-font-size, 1rem)*1.25);padding-right:calc(var(--widget-font-size, 1rem)*1.25)}.py-1{padding-top:calc(var(--widget-font-size, 1rem)*.25);padding-bottom:calc(var(--widget-font-size, 1rem)*.25)}.py-2{padding-top:calc(var(--widget-font-size, 1rem)*.5);padding-bottom:calc(var(--widget-font-size, 1rem)*.5)}.py-2\\.5{padding-top:calc(var(--widget-font-size, 1rem)*.625);padding-bottom:calc(var(--widget-font-size, 1rem)*.625)}.pb-5{padding-bottom:calc(var(--widget-font-size, 1rem)*1.25)}.pr-10{padding-right:calc(var(--widget-font-size, 1rem)*2.5)}.pt-10{padding-top:calc(var(--widget-font-size, 1rem)*2.5)}.pt-4{padding-top:calc(var(--widget-font-size, 1rem)*1)}.pt-5{padding-top:calc(var(--widget-font-size, 1rem)*1.25)}.text-left{text-align:left}.text-center{text-align:center}.\\!text-xl{font-size:calc(var(--widget-font-size, 1rem)*1.25)!important;line-height:calc(var(--widget-font-size, 1rem)*1.75)!important}.text-base{font-size:calc(var(--widget-font-size, 1rem)*1);line-height:calc(var(--widget-font-size, 1rem)*1.5)}.text-lg{font-size:calc(var(--widget-font-size, 1rem)*1.125);line-height:calc(var(--widget-font-size, 1rem)*1.75)}.text-sm{font-size:calc(var(--widget-font-size, 1rem)*.875);line-height:calc(var(--widget-font-size, 1rem)*1.25)}.text-xs{font-size:calc(var(--widget-font-size, 1rem)*.75);line-height:calc(var(--widget-font-size, 1rem)*1)}.font-bold{font-weight:700}.font-medium{font-weight:500}.leading-none{line-height:1}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.text-\\[\\#555E74\\]{--tw-text-opacity:1;color:rgb(85 94 116/var(--tw-text-opacity))}.text-\\[\\#ce0500\\]{--tw-text-opacity:1;color:rgb(206 5 0/var(--tw-text-opacity))}.text-blue-1{--tw-text-opacity:1;color:rgb(0 0 145/var(--tw-text-opacity))}.text-brand-050{--tw-text-opacity:1;color:rgb(237 240 255/var(--tw-text-opacity))}.text-brand-550{--tw-text-opacity:1;color:rgb(62 93 231/var(--tw-text-opacity))}.text-gray-550{--tw-text-opacity:1;color:rgb(98 106 128/var(--tw-text-opacity))}.text-greyscale-500{--tw-text-opacity:1;color:rgb(124 124 124/var(--tw-text-opacity))}.text-greyscale-950{--tw-text-opacity:1;color:rgb(30 30 30/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.shadow{--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.outline-none{outline:2px solid #0000;outline-offset:2px}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}#lasuite-support-mount{font-family:Marianne,arial,sans-serif}:host{--widget-font-size:1rem;font-size:var(--widget-font-size)}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-\\[\\#f2f5f4\\]:hover{--tw-bg-opacity:1;background-color:rgb(242 245 244/var(--tw-bg-opacity))}.hover\\:bg-brand-150:hover{--tw-bg-opacity:1;background-color:rgb(200 211 255/var(--tw-bg-opacity))}.hover\\:bg-brand-650:hover{--tw-bg-opacity:1;background-color:rgb(40 69 193/var(--tw-bg-opacity))}.hover\\:bg-dsfr-blue-2:hover{--tw-bg-opacity:1;background-color:rgb(18 18 255/var(--tw-bg-opacity))}.hover\\:bg-gray-050:hover{--tw-bg-opacity:1;background-color:rgb(238 241 244/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(223 226 234/var(--tw-bg-opacity))}.hover\\:bg-greyscale-050:hover{--tw-bg-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.hover\\:bg-primary-300:hover{--tw-bg-opacity:1;background-color:rgb(202 202 251/var(--tw-bg-opacity))}.hover\\:bg-transparent:hover{background-color:initial}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.hover\\:decoration-2:hover{text-decoration-thickness:2px}.hover\\:underline-offset-4:hover{text-underline-offset:4px}.hover\\:backdrop-brightness-95:hover{--tw-backdrop-brightness:brightness(.95);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.focus\\:border-\\[\\#ce0500\\]:focus{--tw-border-opacity:1;border-color:rgb(206 5 0/var(--tw-border-opacity))}.focus\\:border-brand-550:focus{--tw-border-opacity:1;border-color:rgb(62 93 231/var(--tw-border-opacity))}.focus\\:shadow-\\[0_0_0_1px_\\#3e5de7\\]:focus{--tw-shadow:0 0 0 1px #3e5de7;--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color)}.focus\\:shadow-\\[0_0_0_1px_\\#3e5de7\\]:focus,.focus\\:shadow-\\[0_0_0_1px_\\#ce0500\\]:focus{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:shadow-\\[0_0_0_1px_\\#ce0500\\]:focus{--tw-shadow:0 0 0 1px #ce0500;--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color)}.active\\:bg-\\[\\#f2f5f4\\]:active{--tw-bg-opacity:1;background-color:rgb(242 245 244/var(--tw-bg-opacity))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-55:disabled{opacity:.55}@media (min-width:48em){.md\\:inset-auto{inset:auto}.md\\:bottom-5{bottom:calc(var(--widget-font-size, 1rem)*1.25)}.md\\:bottom-auto{bottom:auto}.md\\:left-5{left:calc(var(--widget-font-size, 1rem)*1.25)}.md\\:left-auto{left:auto}.md\\:right-5{right:calc(var(--widget-font-size, 1rem)*1.25)}.md\\:right-auto{right:auto}.md\\:top-20{top:calc(var(--widget-font-size, 1rem)*5)}.md\\:top-auto{top:auto}.md\\:max-h-\\[calc\\(100vh-40px\\)\\]{max-height:calc(100vh - 40px)}.md\\:w-\\[min\\(400px\\2c calc\\(100vw-24px\\)\\)\\]{width:min(400px,calc(100vw - 24px))}.md\\:w-fit{width:-moz-fit-content;width:fit-content}.md\\:rounded-lg{border-radius:.5rem}.md\\:\\!px-4{padding-left:calc(var(--widget-font-size, 1rem)*1)!important;padding-right:calc(var(--widget-font-size, 1rem)*1)!important}.md\\:\\!px-8{padding-left:calc(var(--widget-font-size, 1rem)*2)!important;padding-right:calc(var(--widget-font-size, 1rem)*2)!important}.md\\:\\!py-1{padding-top:calc(var(--widget-font-size, 1rem)*.25)!important;padding-bottom:calc(var(--widget-font-size, 1rem)*.25)!important}.md\\:\\!py-2{padding-top:calc(var(--widget-font-size, 1rem)*.5)!important;padding-bottom:calc(var(--widget-font-size, 1rem)*.5)!important}.md\\:\\!py-4{padding-top:calc(var(--widget-font-size, 1rem)*1)!important;padding-bottom:calc(var(--widget-font-size, 1rem)*1)!important}.md\\:shadow-\\[0_2px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.06\\)\\2c 0_12px_32px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\]{--tw-shadow:0 2px 8px #0000000f,0 12px 32px #0000001f;--tw-shadow-colored:0 2px 8px var(--tw-shadow-color),0 12px 32px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}';var pn=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, [])).next());
    });
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  class Mutex {
    constructor() {
      this.mutex = Promise.resolve();
    }
    lock() {
      let begin = () => {
      };
      this.mutex = this.mutex.then(() => new Promise(begin));
      return new Promise((res) => {
        begin = res;
      });
    }
    dispatch(fn) {
      return __awaiter(this, void 0, void 0, function* () {
        const unlock = yield this.lock();
        try {
          return yield Promise.resolve(fn());
        } finally {
          unlock();
        }
      });
    }
  }
  var _a;
  function getGlobal() {
    if (typeof globalThis !== "undefined")
      return globalThis;
    if (typeof self !== "undefined")
      return self;
    if (typeof window !== "undefined")
      return window;
    return global;
  }
  const globalObject = getGlobal();
  const nodeBuffer = (_a = globalObject.Buffer) !== null && _a !== void 0 ? _a : null;
  const textEncoder = globalObject.TextEncoder ? new globalObject.TextEncoder() : null;
  function hexCharCodesToInt(a, b) {
    return (a & 15) + (a >> 6 | a >> 3 & 8) << 4 | (b & 15) + (b >> 6 | b >> 3 & 8);
  }
  function writeHexToUInt8(buf, str) {
    const size = str.length >> 1;
    for (let i = 0; i < size; i++) {
      const index = i << 1;
      buf[i] = hexCharCodesToInt(str.charCodeAt(index), str.charCodeAt(index + 1));
    }
  }
  function hexStringEqualsUInt8(str, buf) {
    if (str.length !== buf.length * 2) {
      return false;
    }
    for (let i = 0; i < buf.length; i++) {
      const strIndex = i << 1;
      if (buf[i] !== hexCharCodesToInt(str.charCodeAt(strIndex), str.charCodeAt(strIndex + 1))) {
        return false;
      }
    }
    return true;
  }
  const alpha = "a".charCodeAt(0) - 10;
  const digit = "0".charCodeAt(0);
  function getDigestHex(tmpBuffer, input, hashLength) {
    let p = 0;
    for (let i = 0; i < hashLength; i++) {
      let nibble = input[i] >>> 4;
      tmpBuffer[p++] = nibble > 9 ? nibble + alpha : nibble + digit;
      nibble = input[i] & 15;
      tmpBuffer[p++] = nibble > 9 ? nibble + alpha : nibble + digit;
    }
    return String.fromCharCode.apply(null, tmpBuffer);
  }
  const getUInt8Buffer = nodeBuffer !== null ? (data) => {
    if (typeof data === "string") {
      const buf = nodeBuffer.from(data, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
    }
    if (nodeBuffer.isBuffer(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.length);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
    throw new Error("Invalid data type!");
  } : (data) => {
    if (typeof data === "string") {
      return textEncoder.encode(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
    throw new Error("Invalid data type!");
  };
  const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const base64Lookup = new Uint8Array(256);
  for (let i = 0; i < base64Chars.length; i++) {
    base64Lookup[base64Chars.charCodeAt(i)] = i;
  }
  function getDecodeBase64Length(data) {
    let bufferLength = Math.floor(data.length * 0.75);
    const len = data.length;
    if (data[len - 1] === "=") {
      bufferLength -= 1;
      if (data[len - 2] === "=") {
        bufferLength -= 1;
      }
    }
    return bufferLength;
  }
  function decodeBase64(data) {
    const bufferLength = getDecodeBase64Length(data);
    const len = data.length;
    const bytes = new Uint8Array(bufferLength);
    let p = 0;
    for (let i = 0; i < len; i += 4) {
      const encoded1 = base64Lookup[data.charCodeAt(i)];
      const encoded2 = base64Lookup[data.charCodeAt(i + 1)];
      const encoded3 = base64Lookup[data.charCodeAt(i + 2)];
      const encoded4 = base64Lookup[data.charCodeAt(i + 3)];
      bytes[p] = encoded1 << 2 | encoded2 >> 4;
      p += 1;
      bytes[p] = (encoded2 & 15) << 4 | encoded3 >> 2;
      p += 1;
      bytes[p] = (encoded3 & 3) << 6 | encoded4 & 63;
      p += 1;
    }
    return bytes;
  }
  const MAX_HEAP = 16 * 1024;
  const WASM_FUNC_HASH_LENGTH = 4;
  const wasmMutex = new Mutex();
  const wasmModuleCache = /* @__PURE__ */ new Map();
  function WASMInterface(binary, hashLength) {
    return __awaiter(this, void 0, void 0, function* () {
      let wasmInstance = null;
      let memoryView = null;
      let initialized = false;
      if (typeof WebAssembly === "undefined") {
        throw new Error("WebAssembly is not supported in this environment!");
      }
      const writeMemory = (data, offset = 0) => {
        memoryView.set(data, offset);
      };
      const getMemory = () => memoryView;
      const getExports = () => wasmInstance.exports;
      const setMemorySize = (totalSize) => {
        wasmInstance.exports.Hash_SetMemorySize(totalSize);
        const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
        const memoryBuffer = wasmInstance.exports.memory.buffer;
        memoryView = new Uint8Array(memoryBuffer, arrayOffset, totalSize);
      };
      const getStateSize = () => {
        const view = new DataView(wasmInstance.exports.memory.buffer);
        const stateSize = view.getUint32(wasmInstance.exports.STATE_SIZE, true);
        return stateSize;
      };
      const loadWASMPromise = wasmMutex.dispatch(() => __awaiter(this, void 0, void 0, function* () {
        if (!wasmModuleCache.has(binary.name)) {
          const asm = decodeBase64(binary.data);
          const promise = WebAssembly.compile(asm);
          wasmModuleCache.set(binary.name, promise);
        }
        const module = yield wasmModuleCache.get(binary.name);
        wasmInstance = yield WebAssembly.instantiate(module, {
          // env: {
          //   emscripten_memcpy_big: (dest, src, num) => {
          //     const memoryBuffer = wasmInstance.exports.memory.buffer;
          //     const memView = new Uint8Array(memoryBuffer, 0);
          //     memView.set(memView.subarray(src, src + num), dest);
          //   },
          //   print_memory: (offset, len) => {
          //     const memoryBuffer = wasmInstance.exports.memory.buffer;
          //     const memView = new Uint8Array(memoryBuffer, 0);
          //     console.log('print_int32', memView.subarray(offset, offset + len));
          //   },
          // },
        });
      }));
      const setupInterface = () => __awaiter(this, void 0, void 0, function* () {
        if (!wasmInstance) {
          yield loadWASMPromise;
        }
        const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
        const memoryBuffer = wasmInstance.exports.memory.buffer;
        memoryView = new Uint8Array(memoryBuffer, arrayOffset, MAX_HEAP);
      });
      const init = (bits = null) => {
        initialized = true;
        wasmInstance.exports.Hash_Init(bits);
      };
      const updateUInt8Array = (data) => {
        let read = 0;
        while (read < data.length) {
          const chunk = data.subarray(read, read + MAX_HEAP);
          read += chunk.length;
          memoryView.set(chunk);
          wasmInstance.exports.Hash_Update(chunk.length);
        }
      };
      const update = (data) => {
        if (!initialized) {
          throw new Error("update() called before init()");
        }
        const Uint8Buffer = getUInt8Buffer(data);
        updateUInt8Array(Uint8Buffer);
      };
      const digestChars = new Uint8Array(hashLength * 2);
      const digest = (outputType, padding = null) => {
        if (!initialized) {
          throw new Error("digest() called before init()");
        }
        initialized = false;
        wasmInstance.exports.Hash_Final(padding);
        if (outputType === "binary") {
          return memoryView.slice(0, hashLength);
        }
        return getDigestHex(digestChars, memoryView, hashLength);
      };
      const save = () => {
        if (!initialized) {
          throw new Error("save() can only be called after init() and before digest()");
        }
        const stateOffset = wasmInstance.exports.Hash_GetState();
        const stateLength = getStateSize();
        const memoryBuffer = wasmInstance.exports.memory.buffer;
        const internalState = new Uint8Array(memoryBuffer, stateOffset, stateLength);
        const prefixedState = new Uint8Array(WASM_FUNC_HASH_LENGTH + stateLength);
        writeHexToUInt8(prefixedState, binary.hash);
        prefixedState.set(internalState, WASM_FUNC_HASH_LENGTH);
        return prefixedState;
      };
      const load = (state) => {
        if (!(state instanceof Uint8Array)) {
          throw new Error("load() expects an Uint8Array generated by save()");
        }
        const stateOffset = wasmInstance.exports.Hash_GetState();
        const stateLength = getStateSize();
        const overallLength = WASM_FUNC_HASH_LENGTH + stateLength;
        const memoryBuffer = wasmInstance.exports.memory.buffer;
        if (state.length !== overallLength) {
          throw new Error(\`Bad state length (expected \${overallLength} bytes, got \${state.length})\`);
        }
        if (!hexStringEqualsUInt8(binary.hash, state.subarray(0, WASM_FUNC_HASH_LENGTH))) {
          throw new Error("This state was written by an incompatible hash implementation");
        }
        const internalState = state.subarray(WASM_FUNC_HASH_LENGTH);
        new Uint8Array(memoryBuffer, stateOffset, stateLength).set(internalState);
        initialized = true;
      };
      const isDataShort = (data) => {
        if (typeof data === "string") {
          return data.length < MAX_HEAP / 4;
        }
        return data.byteLength < MAX_HEAP;
      };
      let canSimplify = isDataShort;
      switch (binary.name) {
        case "argon2":
        case "scrypt":
          canSimplify = () => true;
          break;
        case "blake2b":
        case "blake2s":
          canSimplify = (data, initParam) => initParam <= 512 && isDataShort(data);
          break;
        case "blake3":
          canSimplify = (data, initParam) => initParam === 0 && isDataShort(data);
          break;
        case "xxhash64":
        // cannot simplify
        case "xxhash3":
        case "xxhash128":
        case "crc64":
          canSimplify = () => false;
          break;
      }
      const calculate = (data, initParam = null, digestParam = null) => {
        if (!canSimplify(data, initParam)) {
          init(initParam);
          update(data);
          return digest("hex", digestParam);
        }
        const buffer = getUInt8Buffer(data);
        memoryView.set(buffer);
        wasmInstance.exports.Hash_Calculate(buffer.length, initParam, digestParam);
        return getDigestHex(digestChars, memoryView, hashLength);
      };
      yield setupInterface();
      return {
        getMemory,
        writeMemory,
        getExports,
        setMemorySize,
        init,
        update,
        digest,
        save,
        load,
        calculate,
        hashLength
      };
    });
  }
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  var name$a = "sha256";
  var data$a = "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c2pBx6KerX1qIhkgASADcyACcSABIANxcyABQR53IAFBE3dzIAFBCndzaiAaaiICaiIJIBMgEnNxIBJzaiAJQRp3IAlBFXdzIAlBB3dzakHRxqk2aiIaIAIgAXMgA3EgAiABcXMgAkEedyACQRN3cyACQQp3c2ogGGoiA2oiESAJIBNzcSATc2ogEUEadyARQRV3cyARQQd3c2pB59KkoQFqIhggAyACcyABcSADIAJxcyADQR53IANBE3dzIANBCndzaiAUaiIBaiISIBEgCXNxIAlzaiASQRp3IBJBFXdzIBJBB3dzakGFldy9AmoiFCABIANzIAJxIAEgA3FzIAFBHncgAUETd3MgAUEKd3NqIBdqIgJqIhMgI2ogJiASaiAiIBFqICUgCWogEyASIBFzcSARc2ogE0EadyATQRV3cyATQQd3c2pBuMLs8AJqIhcgAiABcyADcSACIAFxcyACQR53IAJBE3dzIAJBCndzaiAZaiIDaiIJIBMgEnNxIBJzaiAJQRp3IAlBFXdzIAlBB3dzakH827HpBGoiGSADIAJzIAFxIAMgAnFzIANBHncgA0ETd3MgA0EKd3NqIBpqIgFqIhEgCSATc3EgE3NqIBFBGncgEUEVd3MgEUEHd3NqQZOa4JkFaiIaIAEgA3MgAnEgASADcXMgAUEedyABQRN3cyABQQp3c2ogGGoiAmoiEiARIAlzcSAJc2ogEkEadyASQRV3cyASQQd3c2pB1OapqAZqIhggAiABcyADcSACIAFxcyACQR53IAJBE3dzIAJBCndzaiAUaiIDaiITaiAoIBJqICQgEWogJyAJaiATIBIgEXNxIBFzaiATQRp3IBNBFXdzIBNBB3dzakG7laizB2oiFCADIAJzIAFxIAMgAnFzIANBHncgA0ETd3MgA0EKd3NqIBdqIgFqIgkgEyASc3EgEnNqIAlBGncgCUEVd3MgCUEHd3NqQa6Si454aiIXIAEgA3MgAnEgASADcXMgAUEedyABQRN3cyABQQp3c2ogGWoiAmoiESAJIBNzcSATc2ogEUEadyARQRV3cyARQQd3c2pBhdnIk3lqIhkgAiABcyADcSACIAFxcyACQR53IAJBE3dzIAJBCndzaiAaaiIDaiISIBEgCXNxIAlzaiASQRp3IBJBFXdzIBJBB3dzakGh0f+VemoiGiADIAJz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";
  var hash$a = "8c18dd94";
  var wasmJson$a = {
    name: name$a,
    data: data$a,
    hash: hash$a
  };
  new Mutex();
  new Mutex();
  function createSHA256() {
    return WASMInterface(wasmJson$a, 32).then((wasm) => {
      wasm.init(256);
      const obj = {
        init: () => {
          wasm.init(256);
          return obj;
        },
        update: (data) => {
          wasm.update(data);
          return obj;
        },
        // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
        digest: (outputType) => wasm.digest(outputType),
        save: () => wasm.save(),
        load: (data) => {
          wasm.load(data);
          return obj;
        },
        blockSize: 64,
        digestSize: 32
      };
      return obj;
    });
  }
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  new Mutex();
  function calculateKeyBuffer(hasher, key) {
    const { blockSize } = hasher;
    const buf = getUInt8Buffer(key);
    if (buf.length > blockSize) {
      hasher.update(buf);
      const uintArr = hasher.digest("binary");
      hasher.init();
      return uintArr;
    }
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
  }
  function calculateHmac(hasher, key) {
    hasher.init();
    const { blockSize } = hasher;
    const keyBuf = calculateKeyBuffer(hasher, key);
    const keyBuffer = new Uint8Array(blockSize);
    keyBuffer.set(keyBuf);
    const opad = new Uint8Array(blockSize);
    for (let i = 0; i < blockSize; i++) {
      const v = keyBuffer[i];
      opad[i] = v ^ 92;
      keyBuffer[i] = v ^ 54;
    }
    hasher.update(keyBuffer);
    const obj = {
      init: () => {
        hasher.init();
        hasher.update(keyBuffer);
        return obj;
      },
      update: (data) => {
        hasher.update(data);
        return obj;
      },
      digest: ((outputType) => {
        const uintArr = hasher.digest("binary");
        hasher.init();
        hasher.update(opad);
        hasher.update(uintArr);
        return hasher.digest(outputType);
      }),
      save: () => {
        throw new Error("save() not supported");
      },
      load: () => {
        throw new Error("load() not supported");
      },
      blockSize: hasher.blockSize,
      digestSize: hasher.digestSize
    };
    return obj;
  }
  function createHMAC(hash, key) {
    if (!hash || !hash.then) {
      throw new Error('Invalid hash function is provided! Usage: createHMAC(createMD5(), "key").');
    }
    return hash.then((hasher) => calculateHmac(hasher, key));
  }
  function calculatePBKDF2(digest, salt, iterations, hashLength, outputType) {
    return __awaiter(this, void 0, void 0, function* () {
      const DK = new Uint8Array(hashLength);
      const block1 = new Uint8Array(salt.length + 4);
      const block1View = new DataView(block1.buffer);
      const saltBuffer = getUInt8Buffer(salt);
      const saltUIntBuffer = new Uint8Array(saltBuffer.buffer, saltBuffer.byteOffset, saltBuffer.length);
      block1.set(saltUIntBuffer);
      let destPos = 0;
      const hLen = digest.digestSize;
      const l = Math.ceil(hashLength / hLen);
      let T = null;
      let U = null;
      for (let i = 1; i <= l; i++) {
        block1View.setUint32(salt.length, i);
        digest.init();
        digest.update(block1);
        T = digest.digest("binary");
        U = T.slice();
        for (let j = 1; j < iterations; j++) {
          digest.init();
          digest.update(U);
          U = digest.digest("binary");
          for (let k = 0; k < hLen; k++) {
            T[k] ^= U[k];
          }
        }
        DK.set(T.subarray(0, hashLength - destPos), destPos);
        destPos += hLen;
      }
      if (outputType === "binary") {
        return DK;
      }
      const digestChars = new Uint8Array(hashLength * 2);
      return getDigestHex(digestChars, DK, hashLength);
    });
  }
  const validateOptions$2 = (options) => {
    if (!options || typeof options !== "object") {
      throw new Error("Invalid options parameter. It requires an object.");
    }
    if (!options.hashFunction || !options.hashFunction.then) {
      throw new Error('Invalid hash function is provided! Usage: pbkdf2("password", "salt", 1000, 32, createSHA1()).');
    }
    if (!Number.isInteger(options.iterations) || options.iterations < 1) {
      throw new Error("Iterations should be a positive number");
    }
    if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
      throw new Error("Hash length should be a positive number");
    }
    if (options.outputType === void 0) {
      options.outputType = "hex";
    }
    if (!["hex", "binary"].includes(options.outputType)) {
      throw new Error(\`Insupported output type \${options.outputType}. Valid values: ['hex', 'binary']\`);
    }
  };
  function pbkdf2(options) {
    return __awaiter(this, void 0, void 0, function* () {
      validateOptions$2(options);
      const hmac = yield createHMAC(options.hashFunction, options.password);
      return calculatePBKDF2(hmac, options.salt, options.iterations, options.hashLength, options.outputType);
    });
  }
  var name$3 = "scrypt";
  var data$3 = "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cyICajYCOCAAIAAoAjwgAiAKakESdyAGc2o2AjwLvxIDFX8Bfg5/AkAgAkUNACAAQQd0IgNBQGoiBEEAKAKACCIFIAMgAmwiBmogAyABbGoiByADaiIIaiEJIAAgAkEHdCIKIAFBB3RqIgtsIQwgACALQYABamwhDSAAQQV0IgtBASALQQFLGyILQWBxIQ4gC0EBcSEPIAdBeGohECAHQXBqIREgB0FoaiESIAdBYGohEyAHQVhqIRQgB0FQaiEVIAdBSGohFiAHQUBqIRcgAa1Cf3whGCAEIAdqIRkgByAAQQh0IhpqIRsgACAKQYABamwhHCALQQRJIR1BACEeQQAhHwNAQQAoAoAIIiAgAyAfbGohIQJAIABFDQBBACEiAkAgHQ0AICAgHmohI0EAIQtBACEiA0AgByALaiIEICMgC2oiJCgCADYCACAEQQRqICRBBGooAgA2AgAgBEEIaiAkQQhqKAIANgIAIARBDGogJEEMaigCADYCACALQRBqIQsgDiAiQQRqIiJHDQALCyAPRQ0AIAcgIkECdCILaiAhIAtqKAIANgIACwJAIAFFDQBBACElIBwhIyAGISYDQCAFISQgACEiAkACQCAADQAgGyAXKQMANwMAIBsgFikDADcDCCAbIBUpAwA3AxAgGyAUKQMANwMYIBsgEykDADcDICAbIBIpAwA3AyggGyARKQMANwMwIBsgECkDADcDOAwBCwNAICQgJmoiCyAkIAxqIgQpAwA3AwAgC0EIaiAEQQhqKQMANwMAIAtBEGogBEEQaikDADcDACALQRhqIARBGGopAwA3AwAgC0EgaiAEQSBqKQMANwMAIAtBKGogBEEoaikDADcDACALQTBqIARBMGopAwA3AwAgC0E4aiAEQThqKQMANwMAIAtBwABqIARBwABqKQMANwMAIAtByABqIARByABqKQMANwMAIAtB0ABqIARB0ABqKQMANwMAIAtB2ABqIARB2ABqKQMANwMAIAtB4ABqIARB4ABqKQMANwMAIAtB6ABqIARB6ABqKQMANwMAIAtB8ABqIARB8ABqKQMANwMAIAtB+ABqIARB+ABqKQMANwMAICRBgAFqISQgIkF/aiIiDQALIAcgCCAbIAAQAiAFISQgACEiA0AgJCAjaiILICQgDWoiBCkDADcDACALQQhqIARBCGopAwA3AwAgC0EQaiAEQRBqKQMANwMAIAtBGGogBEEYaikDADcDACALQSBqIARBIGopAwA3AwAgC0EoaiAEQShqKQMANwMAIAtBMGogBEEwaikDADcDACALQThqIARBOGopAwA3AwAgC0HAAGogBEHAAGopAwA3AwAgC0HIAGogBEHIAGopAwA3AwAgC0HQAGogBEHQAGopAwA3AwAgC0HYAGogBEHYAGopAwA3AwAgC0HgAGogBEHgAGopAwA3AwAgC0HoAGogBEHoAGopAwA3AwAgC0HwAGogBEHwAGopAwA3AwAgC0H4AGogBEH4AGopAwA3AwAgJEGAAWohJCAiQX9qIiINAAsLIAggByAbIAAQAiAjIBpqISMgJiAaaiEmICVBAmoiJSABSQ0AC0EAISUDQAJAAkAgAA0AIBsgFykDADcDACAbIBYpAwA3AwggGyAVKQMANwMQIBsgFCkDADcDGCAbIBMpAwA3AyAgGyASKQMANwMoIBsgESkDADcDMCAbIBApAwA3AzgMAQsgACAKIBkpAgAgGIOnQQd0amwhJiAFISQgACEiA0AgJCAMaiILIAspAwAgJCAmaiIEKQMAhTcDACALQQhqIiMgIykDACAEQQhqKQMAhTcDACALQRBqIiMgIykDACAEQRBqKQMAhTcDACALQRhqIiMgIykDACAEQRhqKQMAhTcDACALQSBqIiMgIykDACAEQSBqKQMAhTcDACALQShqIiMgIykDACAEQShqKQMAhTcDACALQTBqIiMgIykDACAEQTBqKQMAhTcDACALQThqIiMgIykDACAEQThqKQMAhTcDACALQcAAaiIjICMpAwAgBEHAAGopAwCFNwMAIAtByABqIiMgIykDACAEQcgAaikDAIU3AwAgC0HQAGoiIyAjKQMAIARB0ABqKQMAhTcDACALQdgAaiIjICMpAwAgBEHYAGopAwCFNwMAIAtB4ABqIiMgIykDACAEQeAAaikDAIU3AwAgC0HoAGoiIyAjKQMAIARB6ABqKQMAhTcDACALQfAAaiIjICMpAwAgBEHwAGopAwCFNwMAIAtB+ABqIgsgCykDACAEQfgAaikDAIU3AwAgJEGAAWohJCAiQX9qIiINAAsgByAIIBsgABACIAAgCiAJKQIAIBiDp0EHdGpsISYgBSEkIAAhIgNAICQgDWoiCyALKQMAICQgJmoiBCkDAIU3AwAgC0EIaiIjICMpAwAgBEEIaikDAIU3AwAgC0EQaiIjICMpAwAgBEEQaikDAIU3AwAgC0EYaiIjICMpAwAgBEEYaikDAIU3AwAgC0EgaiIjICMpAwAgBEEgaikDAIU3AwAgC0EoaiIjICMpAwAgBEEoaikDAIU3AwAgC0EwaiIjICMpAwAgBEEwaikDAIU3AwAgC0E4aiIjICMpAwAgBEE4aikDAIU3AwAgC0HAAGoiIyAjKQMAIARBwABqKQMAhTcDACALQcgAaiIjICMpAwAgBEHIAGopAwCFNwMAIAtB0ABqIiMgIykDACAEQdAAaikDAIU3AwAgC0HYAGoiIyAjKQMAIARB2ABqKQMAhTcDACALQeAAaiIjICMpAwAgBEHgAGopAwCFNwMAIAtB6ABqIiMgIykDACAEQegAaikDAIU3AwAgC0HwAGoiIyAjKQMAIARB8ABqKQMAhTcDACALQfgAaiILIAspAwAgBEH4AGopAwCFNwMAICRBgAFqISQgIkF/aiIiDQALCyAIIAcgGyAAEAIgJUECaiIlIAFJDQALCwJAIABFDQBBACEiAkAgHQ0AICAgHmohI0EAIQtBACEiA0AgIyALaiIEIAcgC2oiJCgCADYCACAEQQRqICRBBGooAgA2AgAgBEEIaiAkQQhqKAIANgIAIARBDGogJEEMaigCADYCACALQRBqIQsgDiAiQQRqIiJHDQALCyAPRQ0AICEgIkECdCILaiAHIAtqKAIANgIACyAeIANqIR4gH0EBaiIfIAJHDQALCws=";
  var hash$3 = "b32721f8";
  var wasmJson$3 = {
    name: name$3,
    data: data$3,
    hash: hash$3
  };
  function scryptInternal(options) {
    return __awaiter(this, void 0, void 0, function* () {
      const { costFactor, blockSize, parallelism, hashLength } = options;
      const SHA256Hasher = createSHA256();
      const blockData = yield pbkdf2({
        password: options.password,
        salt: options.salt,
        iterations: 1,
        hashLength: 128 * blockSize * parallelism,
        hashFunction: SHA256Hasher,
        outputType: "binary"
      });
      const scryptInterface = yield WASMInterface(wasmJson$3, 0);
      const VSize = 128 * blockSize * costFactor;
      const XYSize = 256 * blockSize;
      scryptInterface.setMemorySize(blockData.length + VSize + XYSize);
      scryptInterface.writeMemory(blockData, 0);
      scryptInterface.getExports().scrypt(blockSize, costFactor, parallelism);
      const expensiveSalt = scryptInterface.getMemory().subarray(0, 128 * blockSize * parallelism);
      const outputData = yield pbkdf2({
        password: options.password,
        salt: expensiveSalt,
        iterations: 1,
        hashLength,
        hashFunction: SHA256Hasher,
        outputType: "binary"
      });
      if (options.outputType === "hex") {
        const digestChars = new Uint8Array(hashLength * 2);
        return getDigestHex(digestChars, outputData, hashLength);
      }
      return outputData;
    });
  }
  const isPowerOfTwo = (v) => v && !(v & v - 1);
  const validateOptions$1 = (options) => {
    if (!options || typeof options !== "object") {
      throw new Error("Invalid options parameter. It requires an object.");
    }
    if (!Number.isInteger(options.blockSize) || options.blockSize < 1) {
      throw new Error("Block size should be a positive number");
    }
    if (!Number.isInteger(options.costFactor) || options.costFactor < 2 || !isPowerOfTwo(options.costFactor)) {
      throw new Error("Cost factor should be a power of 2, greater than 1");
    }
    if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
      throw new Error("Parallelism should be a positive number");
    }
    if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
      throw new Error("Hash length should be a positive number.");
    }
    if (options.outputType === void 0) {
      options.outputType = "hex";
    }
    if (!["hex", "binary"].includes(options.outputType)) {
      throw new Error(\`Insupported output type \${options.outputType}. Valid values: ['hex', 'binary']\`);
    }
  };
  function scrypt(options) {
    return __awaiter(this, void 0, void 0, function* () {
      validateOptions$1(options);
      return scryptInternal(options);
    });
  }
  new Mutex();
  new Mutex();
  async function deriveKey(parameters, salt, password) {
    const { cost, keyLength = 32, memoryCost = 8, parallelism = 1 } = parameters;
    assertAlgorithm(parameters.algorithm, ["SCRYPT"]);
    return {
      parameters: {
        memoryCost,
        parallelism
      },
      derivedKey: await scrypt({
        password,
        salt,
        blockSize: memoryCost,
        costFactor: cost,
        hashLength: keyLength,
        parallelism,
        outputType: "binary"
      })
    };
  }
  handler({
    deriveKey
  });
})();
`;window.__LASUITE_ALTCHA_SCRYPT_SOURCE__=pn;var Ne="support",_r="lasuite-widget-support-root",In="lasuite-widget";function pe(e,t){document.dispatchEvent(new CustomEvent(`${In}-${Ne}-${e}`,{detail:t}))}function fn(e,t){let n=`${In}-${Ne}-${e}`,r=o=>t(o.detail);return document.addEventListener(n,r),()=>document.removeEventListener(n,r)}function yr(e){return e.endsWith("/")?e:`${e}/`}var ae=null,W=null;function hn(){ae==null||ae.unmount(),ae=null,W==null||W.remove(),W=null}function mn(){hn(),pe("closed")}function Br({apiBase:e,channel:t,email:n,position:r,onOpen:o,onDismiss:i}){let[a,A]=v(!0),l=ie(()=>{pe("success")},[]),g=ie(()=>{A(!1),i()},[i]);return c(gn,{channel:t,email:n,open:a,apiBase:e,position:r,onOpen:o,onClose:g,onSuccess:l})}function Er(e){if(!e.api||!e.channel){console.error("Support widget requires an API URL and a channel ID");return}hn(),W=document.createElement("div"),W.id=_r,document.body.appendChild(W);let t=W.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=un,t.appendChild(n);let r=document.createElement("div");r.id="lasuite-support-mount",t.appendChild(r),ae=jt(r);let o=yr(e.api),i=e.locale||document.documentElement.lang||"fr";ae.render(c($t,{locale:i.split("-")[0],children:c(Br,{apiBase:o,channel:e.channel,email:e.email,position:e.position||"bottom-right",onOpen:a=>{pe("opened",{...e,dialogElement:a})},onDismiss:mn})}))}function wr(){window._lasuite_widget=window._lasuite_widget||[];let e=window._lasuite_widget;e._loaded||(e._loaded={});let t=2;if(e._loaded[Ne]===t)return;let n=e.push.bind(e);e.push=(...o)=>{var i;for(let a of o){let A=a;((i=e._loaded)==null?void 0:i[A[0]])===t?pe(A[1],A[2]):n(a)}return e.length},e._loaded[Ne]=t,fn("init",Er),fn("close",()=>mn());let r=e.splice(0,e.length);for(let o of r)e.push(o);pe("loaded")}wr();})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
