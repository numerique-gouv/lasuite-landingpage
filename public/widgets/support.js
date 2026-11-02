"use strict";(()=>{var pn=Object.create;var at=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var In=Object.getOwnPropertyNames;var hn=Object.getPrototypeOf,_n=Object.prototype.hasOwnProperty;var mn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var yn=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of In(t))!_n.call(e,o)&&o!==n&&at(e,o,{get:()=>t[o],enumerable:!(r=fn(t,o))||r.enumerable});return e};var Bn=(e,t,n)=>(n=e!=null?pn(hn(e)):{},yn(t||!e||!e.__esModule?at(n,"default",{value:e,enumerable:!0}):n,e));var Ht=mn((zr,Qe)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var o="",a=0;a<arguments.length;a++){var A=arguments[a];A&&(o=r(o,n(A)))}return o}function n(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var A in o)e.call(o,A)&&o[A]&&(a=r(a,A));return a}function r(o,a){return a?o?o+" "+a:o+a:o}typeof Qe!="undefined"&&Qe.exports?(t.default=t,Qe.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var h,At,En,L,Me,ye,st,_e,ct,qe,De,lt,ce=Symbol.for("pv"),Be={},Ee=[],wn=/^m(i|n|o|s|text|space)$/,we=Array.isArray,dt=Ee.slice,$=Object.assign;function Z(e){e&&e.parentNode&&e.remove()}function me(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:ce,__v:o||++At,__i:-1,__u:0};return!o&&h.vnode&&h.vnode(a),a}function Q(e){return e.children}function J(e,t){this.props=e,this.context=t,this.__g=0}function K(e,t){if(t==null)return e.__&&K(e.__,e.__i+1);for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!="function"||e.props.__P?null:K(e)}function gt(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),gt(e)}function Se(e){(8&e.__g||(e.__g|=8,L.push(e),ye++))&&Me==h.debounceRendering||((Me=h.debounceRendering)||queueMicrotask)(ut)}function ut(){var e,t,n,r,o,a,A,s,l;try{for(t=1;L.length;)L.length>t&&L.sort(st),e=L.shift(),t=L.length,8&e.__g&&(r=void 0,o=void 0,a=(o=(n=e).__v).__e,A=[],s=[],(l=n.__P)&&((r=$({constructor:ce},o)).__v=o.__v+1,h.vnode&&h.vnode(r),ze(l,r,o,n.__n,l.namespaceURI,32&o.__u?[a]:null,A,a||K(o),32&o.__u,s),r.__v=o.__v,r.__.__k[r.__i]=r,ht(A,r,s),o.__=o.__e=null,r.__e!=a&&gt(r)))}finally{(ye=L.length)&&(Me||queueMicrotask)(ut)}}function pt(e,t,n,r,o,a,A,s,l,g,c){var f,u,i,p,I,_,y=r.__k||Ee,m=t.length;for(l=bn(n,t,y,l,m),f=0;f<m;f++)(i=n.__k[f])!=null&&(u=~i.__i&&y[i.__i]||Be,i.__i=f,_=ze(e,i,u,o,a,A,s,l,g,c),p=i.__e,(u.ref!=i.ref||8&u.__u)&&(u.ref&&He(u.ref,null,i,u),i.ref&&c.push(i.ref,i.__c||p,i)),I=I||p,4&i.__u?(l=ft(i,l,e,!u.__v),u.__e&&(u.__e=null)):typeof i.type=="function"&&_!==void 0?l=_:p&&(l=p.nextSibling),i.__u&=-21);return n.__e=I,l}function bn(e,t,n,r,o){var a,A,s,l,g,c,f,u,i,p=n.length,I=p,_=0,y=0,m=e.__k=Array(o);for(a=0;a<o;a++)(A=t[a])!=null&&typeof A!="boolean"&&typeof A!="function"?(typeof A!="object"||A.constructor===String?A=m[a]=me(null,A):we(A)?A=m[a]=me(Q,{children:A}):A.constructor===ce&&A.__b?A=m[a]=me(A.type,A.props,A.key,A.ref,A.__v):m[a]=A,l=a+_,A.__=e,A.__b=e.__b+1,s=null,~(g=A.__i=Cn(A,n,l,I))&&(I--,(s=n[g])&&(s.__u|=2)),s&&s.__v?(A.__u|=16,g==l-1?_--:g==l+1?_++:g!=l&&(g>l?_--:_++,y=1)):(~g||(o>p?_--:o<p&&_++),typeof A.type!="function"&&(A.__u|=4))):m[a]=null;if(y){for(c=[],f=[],a=0;a<o;a++)if((A=m[a])&&16&A.__u){for(_=0,u=c.length;_<u;)c[i=_+u>>1]<A.__i?_=i+1:u=i;c[_]=A.__i,f[a]=_+1}for(_=c.length;a--;)f[a]&&(f[a]==_?_--:m[a].__u|=4)}if(I)for(a=0;a<p;a++)!(s=n[a])||2&s.__u||(s.__e==r&&(r=K(s)),Fe(s,s));return r}function ft(e,t,n,r){var o,a,A,s;if(typeof e.type=="function"){if(e.props.__P)return t;if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&(o[a].__=e,t=ft(o[a],t,n,!1));return t}for(t&&!t.parentNode&&(t=K(e))&&!t.parentNode&&(t=null),A=e.__e,s=t;s&&s.nodeType==8;)s=s.nextSibling;for(A!=s&&(!r&&n.moveBefore&&A.parentNode?n.moveBefore(A,t):n.insertBefore(A,t||null)),t=A;(t=t&&t.nextSibling)&&t.nodeType==8&&!t.data.startsWith("$s"););return t}function be(e,t){return t=t||[],e!=null&&typeof e!="boolean"&&(we(e)?e.some(function(n){be(n,t)}):t.push(e)),t}function Cn(e,t,n,r){var o,a=e.key,A=e.type,s=t[n],l=s&&!(2&s.__u);if(s===null&&a==null||l&&a==s.key&&A==s.type)return n;if(r>(l?1:0)){for(o=n-1;o>=0;o--)if((s=t[o])&&!(2&s.__u)&&a==s.key&&A==s.type)return o;for(o=n+1;o<t.length;o++)if((s=t[o])&&!(2&s.__u)&&a==s.key&&A==s.type)return o}return-1}function it(e,t,n){n==null&&(n=""),t[0]=="-"?e.setProperty(t,n):e[t]=n}function he(e,t,n,r,o){var a,A;if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||it(e.style,t);if(n)for(t in n)r&&n[t]==r[t]||it(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")(e.__e||(e.__e={}))[t]=n,n&&r||(A=De[t]||(De[t]=Qn(t)),(e.__a||(e.__a={}))[t]=qe,a=t!=(t=t.replace(ct,"$1")),(t=t.slice(2))[0]<"a"&&(t=t.toLowerCase()),n?e.addEventListener(t,A,a):e.removeEventListener(t,A,a));else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{return void(e[t]=n==null?"":n)}catch(s){}if(typeof n=="function")return;n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n)}}function Qn(e){return function(t){var n=this.__e;if(n){if(n=n[e],t[_e]==null)t[_e]=qe++;else if(t[_e]<this.__a[e])return;return n(h.event?h.event(t):t)}}}function ze(e,t,n,r,o,a,A,s,l,g){var c,f,u,i,p,I,_,y,m,b,E,B,T,W,F,U,S,H,N=t.type;if(t.constructor!==ce)return null;128&n.__u&&(l=32&n.__u,c=n.__c.__z)&&(t.__u|=l,f=a=[],c.nodeType==8?s=Re(c,a):a.push(c),s=a[0]||s),(c=h.__b)&&c(t);e:if(typeof N=="function"){u=A.length;try{if(y=t.props,m=(c=N.prototype)&&c.render,b=(c=N.contextType)&&r[c.__c],E=c?b?b.props.value:c.__:r,(i=n.__c)?(t.__c=i,2&i.__g&&(i.__g|=1)):(m?t.__c=i=new N(y,E):(t.__c=i=new J(y,E),i.constructor=N,i.render=vn),b&&b.sub(i),i.state||(i.state={}),i.__n=r,i.__g|=8,i.__h=[],i.__k=[]),m&&(i.__s||(i.__s=i.state),N.getDerivedStateFromProps&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,N.getDerivedStateFromProps(y,i.__s)))),p=i.props,I=i.state,i.__v=t,n.__c){if(y!==p&&m&&!N.getDerivedStateFromProps&&i.componentWillReceiveProps&&i.componentWillReceiveProps(y,E),t.__v==n.__v&&!(8&i.__g)||!(4&i.__g)&&i.shouldComponentUpdate&&i.shouldComponentUpdate(y,i.__s,E)===!1){t.__v!=n.__v&&(i.props=y,i.state=i.__s,i.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(k){k&&(k.__=t)}),Ee.push.apply(i.__h,i.__k),i.__k=[],i.__h.length&&A.push(i),s=K(n);break e}i.componentWillUpdate&&i.componentWillUpdate(y,i.__s,E),m&&i.componentDidUpdate&&i.__h.push(function(){i.componentDidUpdate(p,I,_)})}else m&&!N.getDerivedStateFromProps&&i.componentWillMount&&i.componentWillMount(),m&&i.componentDidMount&&i.__h.push(i.componentDidMount);if(i.context=E,i.props=y,i.__P=e,i.__g&=-5,B=h.__r,T=0,m)i.state=i.__s,i.__g&=-9,B&&B(t),c=i.render(i.props,i.state,i.context),Ee.push.apply(i.__h,i.__k),i.__k=[];else do i.__g&=-9,B&&B(t),c=i.render(i.props,i.state,i.context),i.state=i.__s;while(8&i.__g&&++T<25);i.state=i.__s,i.getChildContext&&(r=$({},r,i.getChildContext())),m&&n.__c&&i.getSnapshotBeforeUpdate&&(_=i.getSnapshotBeforeUpdate(p,I)),W=c&&c.type===Q&&c.key==null?c.props.children:c,y.__P&&(c=s,o=(e=y.__P).namespaceURI,l=a=null,n.props&&n.props.__P!=e&&(n.__k.some(function(k){k&&Fe(k,k)}),n.__k=null),s=n.__k?K(n,0):null),s=pt(e,we(W)?W:[W],t,n,r,o,a,A,s,l,g),y.__P&&(t.__e=null,s=c),t.__u&=-161,f&&f.some(Z),i.__h.length&&A.push(i),1&i.__g&&(i.__g&=-4)}catch(k){if(A.length=u,t.__v=null,l||a)if(k.then){if(F=0,t.__u|=128|l,a){for(~(S=a.indexOf(s||void 0))||(S=a.length);(H=a[S-1])&&H.nodeType==8;)S--;for(;S<a.length;S++)if(H=a[S]){if(a[S]=null,H.nodeType==8){if(H.data.startsWith("$s"))F++||(U=H);else if(F&&H.data.startsWith("/$s")&&!--F)break}else if(!F)break}}if(!U){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;U=s}(c=Re(U=t.__c.__z||(t.__c.__z=U)))?(t.__e=U,s=c):t.__e=s,s=s&&s.nextSibling}else a&&a.some(Z);else t.__e=n.__e;t.__k||(t.__k=n.__k||[]),k.then||It(t),h.__e(k,t,n)}}else s=t.__e=xn(n.__e,t,n,r,o,a,A,l,g,e);return(c=h.diffed)&&c(t),s}function Re(e,t){if(e&&e.nodeType==8&&e.data.startsWith("$s"))for(var n=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith("$s"))n++;else if(e.data.startsWith("/$s")&&!--n)return e}t&&t.push(e)}}function It(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(It))}function ht(e,t,n){for(var r=0;r<n.length;)He(n[r++],n[r++],n[r++]);h.__c&&h.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){h.__e(a,o.__v)}})}function xn(e,t,n,r,o,a,A,s,l,g){var c,f,u,i,p,I,_,y,m,b=n.props||Be,E=t.props,B=t.type;if(B=="svg"?o="http://www.w3.org/2000/svg":B=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a){for(c=0;c<a.length;c++)if((p=a[c])&&(B?p.localName==B:p.nodeType==3)){e=p,a[c]=null;break}}if(!e){if(y=g.ownerDocument||document,!B)return y.createTextNode(E);e=y.createElementNS(o,B,E.is&&E),s&&(h.__m&&h.__m(t,a),s=!1),a=null}if(B){if(g=B=="template"&&e.content||e,a=B=="textarea"&&E.defaultValue!=null?null:a&&dt.call(g.childNodes),!s&&a)for(b={},c=0;c<e.attributes.length;c++)b[(p=e.attributes[c]).name]=p.value;for(c in b)p=b[c],c=="dangerouslySetInnerHTML"?u=p:c=="children"||c in E||c=="value"&&"defaultValue"in E||c=="checked"&&"defaultChecked"in E||he(e,c,null,p,o);for(c in m=1&n.__u,E)p=E[c],c=="children"?i=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?I=p:c=="checked"?_=p:s&&typeof p!="function"||!(b[c]!==p||m&&p!=null)||he(e,c,p,b[c],o);f?(s||u&&(f.__html==u.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[]):(u&&(e.textContent=""),(B=="foreignObject"||o=="http://www.w3.org/1998/Math/MathML"&&wn.test(B))&&(o="http://www.w3.org/1999/xhtml"),pt(g,we(i)?i:[i],t,n,r,o,a,A,a?a[0]:n.__k&&K(n,0),s,l),a&&a.some(Z)),s&&B!="textarea"||(c="value",B=="progress"&&I==null?e.removeAttribute(c):I==null||I===e[c]&&(B!="progress"||I)||he(e,c,I,b[c],o),c="checked",_!=null&&_!=e[c]&&he(e,c,_,b[c],o))}else b===E||s&&e.data==E||(e.data=E);return e}function He(e,t,n,r){try{typeof e=="function"?t?t.__x=e(t)||1:r&&(r=r.__c||r.__e)&&(t=r.__x)&&(r.__x=null,typeof t=="function"?t():e(null)):e.current=t}catch(o){h.__e(o,n)}}function Fe(e,t,n){var r,o,a,A;if(h.unmount&&h.unmount(e),!(r=e.ref)||r.current&&r.current!=e.__e||He(r,null,t,e),r=e.__c){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){h.__e(s,t)}r.__P=r.__n=null}if(r=e.__k)for(A=0;A<r.length;A++)r[A]&&Fe(r[A],t,typeof e.type!="function"||n&&!e.props.__P);!n&&(r=e.__c)&&(r=r.__z)&&(o=Re(r,a=[]))&&(r==e.__e&&a.some(Z),Z(o),Z(r)),(r=e.__e)&&(n||Z(r),r.__e&&(r.__e=null)),e.__e=e.__c=e.__=null}function vn(e,t,n){return this.constructor(e,n)}function Te(e,t){var n,r,o,a;h.__&&h.__(e,t),t.nodeType==9&&(t=t.documentElement),r=(n=e&&32&e.__u)?null:t.__k,t.__k=me(Q,{children:[e]}),o=[],a=[],ze(t,t.__k,r||Be,Be,t.namespaceURI,r?null:t.firstChild?dt.call(t.childNodes):null,o,r?r.__e:t.firstChild,n,a),ht(o,t.__k,a),t.__k.props.children=null}function Ce(e){function t(n){var r,o;return this.getChildContext||(r=new Set,(o={})[t.__c]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(a){this.props.value!=a.value&&r.forEach(function(A){A.__g|=4,Se(A)})},this.sub=function(a){r.add(a);var A=a.componentWillUnmount;a.componentWillUnmount=function(){r.delete(a),A&&A.call(a)}}),n.children}return t.__c="__cC"+lt++,t.__=e,t.Provider=(t.Consumer=function(n,r){return n.children(r)}).contextType=t,t}h={__e:function(e,t,n,r){for(var o,a,A;t=t.__;)if((o=t.__c)&&!(1&o.__g)){o.__g|=4;try{if((A=(a=o.constructor)&&a.getDerivedStateFromError)&&o.setState(a.getDerivedStateFromError(e)),o.componentDidCatch&&(o.componentDidCatch(e,r||{}),A=1),A&&8&o.__g)return void(o.__g|=2)}catch(s){e=s}}throw ye=0,e}},At=0,En=function(e){return e!=null&&e.constructor===ce},J.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=$({},this.state)),typeof e=="function"&&(e=e($({},n),this.props)),e&&($(n,e),this.__v&&(t&&this.__k.push(t),Se(this)))},J.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Se(this))},J.prototype.render=Q,L=[],ye=0,st=function(e,t){return e.__v.__b-t.__v.__b},_e=Symbol(),ct=/(PointerCapture)$|Capture$/i,qe=0,De={},lt=0;var P,w,Ue,_t,Ge=Object.is,ne=0,xt=[],Le=[],C=h,mt=C.__b,yt=C.__r,Bt=C.diffed,Et=C.__c,wt=C.unmount,bt=C.__;function re(e,t){C.__h&&C.__h(w,e,ne||t),ne=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function x(e){return ne=1,vt(Nt,e)}function vt(e,t,n){var r=re(P++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Nt(void 0,t),function(a){var A=r.__N?r.__N[0]:r.__[0],s=r.t(A,a);Ge(A,s)||(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.__f)){w.__f=!0;var o=w.shouldComponentUpdate;w.shouldComponentUpdate=function(a,A,s){var l=this.__H;if(!l)return!0;var g=!1,c=this.props!=a;if(l.__.some(function(u){u.__N&&(g=!0,Ge(u.__[0],u.__N[0])||(c=!0))}),o){var f=o.call(this,a,A,s);return g?f||c:f}return!g||c}}return r.__}function R(e,t){var n=re(P++,3);!C.__s&&Oe(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,w.__H.__h.push(n))}function kt(e,t){var n=re(P++,4);!C.__s&&Oe(n.__H,t)&&(n.__P=!1,n.__=e,n.u=t,w.__h.push(n))}function D(e){return ne=5,Pe(function(){return{current:e}},[])}function Ke(e,t,n){ne=6,kt(function(){if(typeof e=="function"){var r=e(t());return function(){e(null),r&&typeof r=="function"&&r()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function Pe(e,t){var n=re(P++,7);return Oe(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function ee(e,t){return ne=8,Pe(function(){return e},t)}function Xe(e){var t=w.context[e.__c],n=re(P++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(w)),t.props.value):e.__}function je(){var e=re(P++,11);if(!e.__){for(var t=w.__v;!t.__m&&t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function kn(){var e;do{for(;e=Le.shift();)try{le(e)}catch(n){C.__e(n,{__:(e=e.__P)&&e.__v})}for(;e=xt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(le),t.__h.some(Je),t.__h=[]}catch(n){t.__h=[],C.__e(n,e.__v)}}}while(Le.length)}C.__b=function(e){w=null,mt&&mt(e)},C.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),bt&&bt(e,t)},C.__r=function(e){yt&&yt(e),P=0;var t=(w=e.__c).__H;t&&(Ue==w?w.__h=[]:(t.__h.some(le),t.__h.some(Je),P=0),t.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})),Ue=w},C.diffed=function(e){Bt&&Bt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&Qt(xt.push(t)),t.__H.__.some(function(n){n.u&&(n.__H=n.u)})),Ue=w=null},C.__c=function(e,t){t.some(function(n){try{n.__h.some(le),n.__h=n.__h.filter(function(r){return!r.__||Je(r)})}catch(r){n.__h=[function(){throw r}]}}),Et&&Et(e,t)},C.unmount=function(e){wt&&wt(e);var t,n,r=e.__c;r&&r.__H&&(r.__H.__.some(function(o){try{if(o.__P&&o.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n=n&&n.__c}o.__P=n,Qt(Le.push(o))}else le(o)}catch(a){t=a}}),r.__H=void 0,t&&C.__e(t,r.__v))};var Ct=typeof requestAnimationFrame=="function";function Nn(e){var t,n=function(){clearTimeout(r),Ct&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Ct&&(t=requestAnimationFrame(n))}function Qt(e){e!=1&&_t==C.requestAnimationFrame||((_t=C.requestAnimationFrame)||Nn)(kn)}function le(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function Je(e){var t=w;e.__c=e.__(),w=t}function Oe(e,t){return!e||e.length!=t.length||t.some(function(n,r){return!Ge(n,e[r])})}function Nt(e,t){return typeof t=="function"?t(e):t}var We=Object.assign;var Sn=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini|asp|fill|st)/;var Rn=Symbol.for("react.forward_ref");function St(e){function t(n){var r=We({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Rn,t.render=e,t.prototype.isReactComponent=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var qn=Symbol.for("react.element"),zn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Hn=/[A-Z0-9]/g,Fn=typeof document<"u";var Tn=function(e){return/fil|che|rad/.test(e)};function Rt(e,t,n){return t.__k==null&&(t.textContent=""),Te(e,t),typeof n=="function"&&n(),e?e.__c:null}J.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(J.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Mt=h.event;h.event=function(e){return Mt&&(e=Mt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Un={configurable:!0,get:function(){return this.class}},Dt=h.vnode;h.vnode=function(e){if(typeof e.type=="string")(function(r){var o=r.props,a=r.type,A={},s=a.indexOf("-")==-1;for(var l in o){var g=o[l];if(!(l=="value"&&"defaultValue"in o&&g==null||Fn&&l=="children"&&a=="noscript"||l=="class"||l=="className")){if(l=="style"&&g&&g.constructor==Object){var c=void 0;for(var f in g)typeof g[f]!="number"||Sn.test(f)||(c||(c=g=We({},g)),g[f]+="px")}else if(l=="defaultValue"&&"value"in o&&o.value==null)l="value";else if(l=="download"&&g===!0)g="";else if(l=="translate"&&g==="no")g=!1;else if(l[0]=="o"&&l[1]=="n"){var u=l.toLowerCase();u=="ondoubleclick"?l="ondblclick":u!="onchange"||a!="input"&&a!="textarea"||Tn(o.type)?u=="onfocus"?l="onfocusin":u=="onblur"&&(l="onfocusout"):u=l="oninput",u=="oninput"&&A[l=u]&&(l="oninputCapture")}else s&&zn.test(l)?l=l.replace(Hn,"-$&").toLowerCase():g===null&&(g=void 0);A[l]=g}}a=="select"&&(A.multiple&&Array.isArray(A.value)&&(A.value=be(o.children).forEach(function(i){i.props.selected=A.value.indexOf(i.props.value)!=-1})),A.defaultValue!=null&&(A.value=be(o.children).forEach(function(i){i.props.selected=A.multiple?A.defaultValue.indexOf(i.props.value)!=-1:A.defaultValue==i.props.value}))),o.class&&!o.className?(A.class=o.class,Object.defineProperty(A,"className",Un)):o.className&&(A.class=A.className=o.className),r.props=A})(e);else if(typeof e.type=="function"&&("ref"in e.props&&"prototype"in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=We({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!("ref"in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=qn,Dt&&Dt(e)};var yr=Symbol.for("pv");function qt(e){return!!e.__k&&(Te(null,e),!0)}function zt(e){return{render:function(t){Rt(t,e)},unmount:function(){qt(e)}}}var Gn=Symbol.for("pv"),Ln=0,vr=Array.isArray;function d(e,t,n,r,o,a){t||(t={});var A,s,l=t;if("ref"in l&&typeof e!="function")for(s in l={},t)s=="ref"?A=t[s]:l[s]=t[s];var g={type:e,props:l,key:n,ref:A,__k:null,__:null,__b:0,__e:null,__c:null,constructor:Gn,__v:--Ln,__i:-1,__u:0};return(o||a)&&(g.__source=o,g.__self=a),h.vnode&&h.vnode(g),g}function Ve({href:e,children:t,...n}){return d("a",{href:e,...n,children:t})}var Jt=Bn(Ht());var xe=(e,t,n=void 0)=>{let r=Array.isArray(t)?t:t.replace(/(\[(\d)\])/g,".$2").replace(/^\./,"").split(".");if(!r.length||r[0]===void 0)return e;let o=r[0];return typeof e!="object"||e===null||!(o in e)||e[o]===void 0?n:xe(e[o],r.slice(1),n)};var de={support:{footer_link:"Contacter l\u2019\xE9quipe",title:"Contacter l\u2019\xE9quipe",subtitle:"Bug, id\xE9e, question ou compliment, l\u2019\xE9quipe lit tout et vous r\xE9pond si besoin.",email_label:"E-mail",email_invalid:"Veuillez saisir une adresse e-mail valide.",subject_label:"Objet",message_label:"Votre message",upload:"Ajouter un fichier",remove_file:"Retirer le fichier",file_too_large:"Fichier trop volumineux (max 10 Mo).",file_too_many:"Un seul fichier autoris\xE9.",file_type_invalid:"Type de fichier non accept\xE9 (jpg, png, gif ou txt).",file_read_error:"Impossible de lire le fichier.",cancel:"Annuler",send:"Envoyer",sending:"Envoi\u2026",close:"Fermer le formulaire de contact",success:"Merci pour votre retour !",error:"Une erreur est survenue. R\xE9essayez plus tard.",altcha_required:"Veuillez attendre la v\xE9rification anti-spam avant d\u2019envoyer."}};var Ft={support:{footer_link:"Contact the team",title:"Contact the team",subtitle:"Bug, idea, question, or praise, the team reads everything and will get back to you if needed.",email_label:"E-mail",email_invalid:"Please enter a valid e-mail address.",subject_label:"Subject",message_label:"Your message",upload:"Upload a file",remove_file:"Remove file",file_too_large:"File too large (max 10 MB).",file_too_many:"Only one file is allowed.",file_type_invalid:"File type not allowed (jpg, png, gif, or txt).",file_read_error:"Unable to read file.",cancel:"Cancel",send:"Send",sending:"Sending\u2026",close:"Close the contact form",success:"Thank you for your feedback!",error:"Something went wrong. Please try again later.",altcha_required:"Please wait for the anti-spam check to finish before sending."}};var Tt={support:{}};var Ut={support:{}};var Gt=Ce(de),Jn={fr:de,en:Ft,de:Tt,nl:Ut};function Lt({locale:e="fr",children:t}){let n=Jn[e];return d(Gt.Provider,{value:n,children:t})}function X({useFallback:e=!1}={}){let n=Xe(Gt)||de;return function(o,a={}){let A=xe(n,o);if(!A&&e&&(A=xe(de,o)),!A)return console.warn(`Translation for key "${o}" not found`),o;if(Object.keys(a).length){let s=[];if(Object.keys(a).forEach(g=>{typeof a[g]!="string"&&s.push(g)}),!s.length)return A.replace(/{(\w+)}/g,(g,c)=>a[c]);let l=A.split(/{(.*?)}/);return d(Q,{children:l.map(g=>g in a?a[g]:g)})}return A}}var q="transition ease-in-out delay-50 duration-300",z="flex rounded rounded-1 justify-center items-center text-base w-full md:w-fit text-left gap-[7px] px-4 h-10",j={primary_brand:`${z} ${q} font-medium text-brand-050 bg-brand-550 hover:bg-brand-650`,secondary_brand:`${z} ${q} font-medium bg-brand-100 text-brand-550 hover:bg-brand-150`,tertiary_brand:`${z} ${q} font-medium text-brand-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,tertiary_brand_bordered:`${z} ${q} font-medium text-brand-550 bg-transparent border border-gray-150 hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,neutral_bordered:`${z} ${q} font-medium text-gray-550 bg-transparent border border-gray-150 hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,primary_neutral:`${z} ${q} font-medium text-white bg-gray-550 hover:backdrop-brightness-95`,secondary_neutral:`${z} ${q} font-medium bg-transparent border border-2 border-grey-4 text-gray-550 hover:backdrop-brightness-95`,tertiary_neutral:`${z} ${q} font-medium text-gray-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,primary_info:`${z} ${q} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,secondary_info:`${z} ${q} font-medium bg-transparent border border-2 border-grey-4 text-brand-550 hover:backdrop-brightness-95`,tertiary_info:`${z} ${q} font-medium text-blue-1 bg-transparent hover:bg-primary-300`,tertiary_bordered:`${z} ${q} bg-transparent font-medium border border-gray-150 text-brand-550 hover:backdrop-brightness-95 hover:bg-transparent`,none:"text-blue-1 underline underline-offset-2 hover:no-underline",large:"!text-xl md:!py-4 md:!px-8",medium:"md:!py-2 md:!px-4 h-8",small:"md:!py-1 h-8 text-xs",nano:"text-xs py-1 h-auto !px-2",fullWidth:"!w-full"},Ye=({children:e,href:t,target:n,icon:r,iconPosition:o="left",variant:a,size:A,fullWidth:s=!1,"aria-label":l,className:g,style:c,onClick:f,type:u="button"})=>{let i=X(),p=a||"primary_brand",I=p==="none",_=p,y=p==="tertiary bordered"?" border border-2 border-grey-4":"",m=(0,Jt.default)(j[_]||j.primary_brand,{[j.none]:I,[j.large]:A==="large"&&!I,[j.medium]:A==="medium"&&!I,[j.small]:A==="small"&&!I,[j.nano]:A==="nano"&&!I,[j.fullWidth]:s&&!I},y,g),b=t!=null&&t.startsWith("#")?"a":Ve,E=n==="_blank"?l?`${l} - ${i("common.new_window")}`:typeof e=="string"?`${e} - ${i("common.new_window")}`:void 0:l,B=d(Q,{children:[r&&o==="left"&&d("span",{className:"flex","aria-hidden":"true",children:r}),d("span",{children:e}),r&&o==="right"&&d("span",{"aria-hidden":"true",children:r})]}),T={...c};return t?d(b,{href:t,target:n,className:m,"aria-label":E,style:T,onClick:f,children:B}):d("button",{className:m,"aria-label":E,style:T,onClick:f,type:u,children:B})};function Ze({src:e,type:t,onLoad:n,onError:r}){return R(()=>{let o=document.querySelector(`script[src="${e}"]`);if(o){o.dataset.loaded==="1"?n==null||n():(o.addEventListener("load",()=>n==null?void 0:n(),{once:!0}),o.addEventListener("error",()=>r==null?void 0:r(),{once:!0}));return}let a=document.createElement("script");a.src=e,t&&(a.type=t),a.onload=()=>{a.dataset.loaded="1",n==null||n()},a.onerror=()=>r==null?void 0:r(),document.head.appendChild(a)},[e,t,n,r]),null}var Kn="https://cdn.jsdelivr.net/npm/altcha@3.3.0/dist/main/altcha.min.js",Pn="/altcha/workers/scrypt.js",Xn="/api/support/challenge",$e=null;function Kt(e){$e||($e=URL.createObjectURL(new Blob([e],{type:"application/javascript"})));let t=$e;return()=>new Worker(t)}async function jn(e){let t=window.$altcha;if(!t)return!1;if(t.algorithms.has("SCRYPT"))return!0;let n=new URL(e,window.location.href).href;if(n.startsWith(window.location.origin))return t.algorithms.set("SCRYPT",()=>new Worker(n)),!0;let o=window.__LASUITE_ALTCHA_SCRYPT_SOURCE__;if(o)return t.algorithms.set("SCRYPT",Kt(o)),!0;try{let a=await fetch(n);if(!a.ok)return console.error("ALTCHA scrypt worker fetch failed",a.status),!1;let A=await a.text();return t.algorithms.set("SCRYPT",Kt(A)),!0}catch(a){return console.error("ALTCHA scrypt worker unavailable cross-origin",a),!1}}var Pt=St(function({remountKey:t,onPayloadChange:n,challengeUrl:r=Xn,scryptWorkerUrl:o=Pn},a){let A=D(null),s=D(""),[l,g]=x(!1),[c,f]=x(!1);return R(()=>{if(!window.$altcha&&!l)return;let u=!1;return jn(o).then(i=>{u||f(i)}),()=>{u=!0}},[l,o]),R(()=>{let u=A.current;if(!u||!c)return;let i=p=>{let I=p.detail;(I==null?void 0:I.state)==="verified"&&I.payload?(s.current=I.payload,n(I.payload)):(s.current="",n(""))};return u.addEventListener("statechange",i),()=>u.removeEventListener("statechange",i)},[c,t,n]),Ke(a,()=>({verify:async()=>{if(s.current)return s.current;let u=A.current;if(!(u!=null&&u.verify))return"";let i=await u.verify();return s.current?s.current:i&&typeof i=="object"&&i.payload?(s.current=i.payload,n(i.payload),i.payload):""}}),[n]),d(Q,{children:[d(Ze,{type:"module",src:Kn,strategy:"afterInteractive",onLoad:()=>g(!0)}),c?d("altcha-widget",{ref:A,challenge:r,auto:"off",display:"invisible",style:{display:"none"},"aria-hidden":"true"},t):null]})});var et=["image/png","image/jpeg","image/gif","text/plain"],Xt=[".jpg",".jpeg",".png",".gif",".txt"],jt=[...Xt,...et].join(",");function Ot(e){let t=e.type.toLowerCase();if(t&&et.includes(t))return!0;let n=e.name.toLowerCase();return Xt.some(r=>n.endsWith(r))}function Wt(e){let t=e.type.toLowerCase();if(t&&et.includes(t))return t;let n=e.name.toLowerCase();return n.endsWith(".png")?"image/png":n.endsWith(".jpg")||n.endsWith(".jpeg")?"image/jpeg":n.endsWith(".gif")?"image/gif":n.endsWith(".txt")?"text/plain":t||"application/octet-stream"}var On=/^data:[^;]+;base64,/i;function Wn(e){return e.replace(On,"")}function Vt(e,t=18){if(e.length<=t)return e;let n=e.lastIndexOf("."),r=n>0?e.slice(n):"",o=Math.max(8,t-r.length-1);return`${e.slice(0,o)}\u2026${r}`}function Yt(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let o=r.result;if(typeof o!="string"){n(new Error("Unable to read file"));return}t(Wn(o))},r.onerror=()=>n(new Error("Unable to read file")),r.readAsDataURL(e)})}var Zt=({attachments:e,onChange:t,onError:n,disabled:r})=>{let o=X(),a=D(null),A=async s=>{if(!(s!=null&&s.length))return;n("");let l=[...e];for(let g of Array.from(s)){if(l.length>=1){n(o("support.file_too_many"));break}if(!Ot(g)){n(o("support.file_type_invalid"));continue}if(g.size>10485760){n(o("support.file_too_large"));continue}try{let c=await Yt(g);l.push({fileName:g.name,mimeType:Wt(g),data:c})}catch(c){n(o("support.file_read_error"))}}t(l),a.current&&(a.current.value="")};return d("div",{className:"flex flex-wrap items-center gap-2",children:[d("input",{ref:a,type:"file",className:"hidden",accept:jt,disabled:r||e.length>=1,onChange:s=>void A(s.target.files)}),e.map((s,l)=>d("div",{className:"inline-flex h-6 max-w-full items-center gap-1.5 rounded bg-[#dee2e9] px-2 text-[13px] leading-none text-[#555E74]",children:[d(Yn,{}),d("span",{className:"max-w-[120px] truncate",title:s.fileName,id:`support-attachment-${l}`,children:Vt(s.fileName)}),d("button",{type:"button",disabled:r,"aria-label":o("support.remove_file"),"aria-describedby":`support-attachment-${l}`,onClick:()=>t(e.filter((g,c)=>c!==l)),className:"flex h-4 w-4 shrink-0 items-center justify-center rounded hover:bg-gray-100",children:d("svg",{"aria-hidden":"true",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:d("path",{d:"M12.5 3.5 3.5 12.5M3.5 3.5l9 9",stroke:"#555E74",strokeWidth:"1.5",strokeLinecap:"round"})})})]},`${s.fileName}-${l}`)),d("button",{type:"button",disabled:r||e.length>=1,onClick:()=>{var s;return(s=a.current)==null?void 0:s.click()},className:"inline-flex h-6 items-center gap-1 rounded border border-[#cbcfd8] bg-white px-1.5 text-xs font-medium leading-none text-[#555E74] hover:bg-gray-050 disabled:pointer-events-none disabled:opacity-55",children:[d(Zn,{}),d("span",{children:o("support.upload")})]})]})},Yn=()=>d("svg",{className:"h-4 w-4 shrink-0",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"#555E74",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),d("path",{d:"M14 3v5h5"}),d("path",{d:"M9 13h6M9 17h4"})]}),Zn=()=>d("svg",{className:"h-[15px] w-[15px] shrink-0",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"#555E74",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M12 15V4"}),d("path",{d:"M7 9l5-5 5 5"}),d("path",{d:"M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"})]});var $t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,$n=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function er(e){return e.endsWith("/")?e:`${e}/`}function tr(e){return[...e.querySelectorAll($n)].filter(t=>t.checkVisibility?t.checkVisibility():t.getClientRects().length>0)}var en=({channel:e,email:t,open:n,onClose:r,onOpen:o,onSuccess:a,apiBase:A="/api/support/",position:s="bottom-left"})=>{let l=X(),g=je(),c=D(null),f=D(null),u=D(null),i=D(null),p=er(A),I=/^https?:\/\//i.test(p),_=`${p}challenge`,y=`${p}deliver/`,m=I?`${new URL(p).origin}/altcha/workers/scrypt.js`:"/altcha/workers/scrypt.js",[b,E]=x(""),[B,T]=x(""),[W,F]=x(t||""),[U,S]=x(!1),[H,N]=x([]),[k,ae]=x("idle"),[nt,ie]=x(""),[cn,Ae]=x(""),[ln,ke]=x(0),dn=ee(v=>{Ae(v)},[]);if(R(()=>{if(!n)return;ae("idle"),ie(""),Ae(""),N([]),S(!1),F(t||""),ke(M=>M+1);let v=window.setTimeout(()=>{var M;return(M=u.current)==null?void 0:M.focus()},0);return()=>window.clearTimeout(v)},[n,t]),R(()=>{!n||!c.current||o==null||o(c.current)},[n,o]),R(()=>{if(!n)return;let v=M=>{if(M.key==="Escape"){r();return}if(M.key!=="Tab")return;let pe=c.current;if(!pe)return;let Y=tr(pe);if(!Y.length)return;let fe=Y[0],se=Y[Y.length-1],te=pe.getRootNode(),G=(te instanceof Document||te instanceof ShadowRoot?te.activeElement:null)||document.activeElement;M.shiftKey&&G===fe?(M.preventDefault(),se.focus()):!M.shiftKey&&G===se&&(M.preventDefault(),fe.focus())};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[n,r]),!n)return null;let V=(t||W).trim(),rt=!t,ue=rt&&U&&!!V&&!$t.test(V),gn=!V||$t.test(V),ot=b.trim().length>0&&B.trim().length>0&&k!=="submitting"&&gn,un=async v=>{var se,te;if(v.preventDefault(),!ot)return;ie(""),ae("submitting");let M=new FormData(v.currentTarget),Y=String(M.get("altcha")||"").trim()||cn.trim()||await((se=i.current)==null?void 0:se.verify())||"";if(!Y){ae("error"),ie(l("support.altcha_required")),Ae(""),ke(G=>G+1);return}let fe={subject:b.trim(),textBody:B.trim(),...V?{email:V}:{},channel:e,altcha:Y,notify_sender:!!V,attachments:H};try{let Ie=await(await fetch(y,{method:"POST",headers:{"Content-Type":"application/json","X-Channel-ID":e},body:JSON.stringify(fe)})).json();if(!Ie.success)throw new Error(Ie.detail||l("support.error"));E(""),T(""),Ae(""),N([]),S(!1),t||F(""),(te=f.current)==null||te.reset(),ae("idle"),a==null||a(),r()}catch(G){ae("error"),ie(G instanceof Error?G.message:l("support.error")),Ae(""),ke(Ie=>Ie+1)}},Ne="w-full rounded border border-[#cbcfd8] bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]";return d("div",{ref:c,role:"dialog","aria-modal":"true","aria-labelledby":g,className:`fixed z-[1000] inset-0 w-full max-w-none max-h-none rounded-none overflow-auto bg-white text-left shadow-none md:w-[min(400px,calc(100vw-24px))] md:max-h-[calc(100vh-40px)] md:rounded-lg md:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)] ${s==="top-right"?"md:inset-auto md:top-20 md:right-5 md:bottom-auto md:left-auto":s==="bottom-right"?"md:inset-auto md:bottom-5 md:right-5 md:left-auto md:top-auto":"md:inset-auto md:bottom-5 md:left-5 md:right-auto md:top-auto"}`,children:[d("button",{type:"button",onClick:r,"aria-label":l("support.close"),className:"absolute right-[6px] top-[6px] z-10 flex h-7 w-7 items-center justify-center rounded-md hover:bg-greyscale-050",children:d("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{d:"M12.5 3.5 3.5 12.5M3.5 3.5l9 9",stroke:"#626A80",strokeWidth:"1.5",strokeLinecap:"round"})})}),d("div",{className:"px-5 pt-5 pr-10",children:[d("h2",{id:g,className:"m-0 text-xl font-bold leading-tight text-greyscale-950",children:l("support.title")}),d("p",{className:"mt-2 mb-0 text-[13px] leading-snug text-greyscale-500",children:l("support.subtitle")})]}),d("div",{className:"px-5 pb-5 pt-4",children:d("form",{ref:f,className:"flex flex-col gap-3.5",onSubmit:un,noValidate:!0,children:[d("div",{className:"flex flex-col gap-1.5",children:[d("label",{htmlFor:"support-subject",className:"text-sm font-medium leading-[18px]",children:l("support.subject_label")}),d("input",{ref:u,id:"support-subject",type:"text",required:!0,value:b,onChange:v=>E(v.target.value),className:Ne})]}),d("div",{className:"flex flex-col gap-1.5",children:[d("label",{htmlFor:"support-message",className:"text-sm font-medium leading-[18px]",children:l("support.message_label")}),d("textarea",{id:"support-message",required:!0,rows:5,value:B,onChange:v=>T(v.target.value),className:`min-h-24 resize-y ${Ne}`})]}),d(Zt,{attachments:H,onChange:N,onError:ie,disabled:k==="submitting"}),rt&&d("div",{className:"flex flex-col gap-1.5",children:[d("label",{htmlFor:"support-email",className:"text-sm font-medium leading-[18px]",children:l("support.email_label")}),d("div",{className:"relative",children:[d("input",{id:"support-email",type:"email",autoComplete:"email",value:W,onChange:v=>F(v.target.value),onBlur:()=>S(!0),"aria-invalid":ue,className:ue?"w-full rounded border border-[#ce0500] bg-transparent px-3 py-2.5 pr-10 text-sm text-greyscale-950 outline-none focus:border-[#ce0500] focus:shadow-[0_0_0_1px_#ce0500]":Ne}),ue&&d("span",{"aria-hidden":"true",className:"pointer-events-none absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#ce0500] text-[11px] font-bold text-white",children:"!"})]}),ue&&d("p",{className:"m-0 mt-1 text-[13px] text-[#ce0500]",role:"alert",children:l("support.email_invalid")})]}),d(Pt,{ref:i,remountKey:ln,onPayloadChange:dn,challengeUrl:_,scryptWorkerUrl:m}),nt&&d("p",{className:"m-0 text-[13px] text-[#ce0500]",role:"alert",children:nt}),d("div",{className:"mt-1 flex justify-end gap-2",children:[d(Ye,{type:"button",variant:"tertiary_brand_bordered",onClick:r,className:"!min-w-10 !flex-1",children:l("support.cancel")}),d(Ye,{type:"submit",variant:"primary_brand",className:`!min-w-10 !flex-1${ot?"":" !opacity-55 !pointer-events-none"}`,children:l(k==="submitting"?"support.sending":"support.send")})]})]})})]})};var nr=1e3,tn=({open:e,onDismiss:t})=>{let n=X();return R(()=>{if(!e)return;let r=window.setTimeout(t,nr);return()=>window.clearTimeout(r)},[e,t]),e?d("div",{role:"status","aria-live":"polite",className:"fixed z-[1000] bottom-5 left-5 right-5 flex w-auto max-w-[min(400px,calc(100vw-40px))] items-center gap-2 rounded-lg border border-brand-150 bg-brand-050 px-3 py-2 text-sm font-medium text-brand-650 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.1)] md:right-auto",children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"23",viewBox:"0 0 22 23",fill:"none","aria-hidden":"true",className:"shrink-0",children:[d("path",{d:"M11 1C11.5522 1.00004 12 1.44775 12 2C12 2.55226 11.5523 2.99996 11 3H5.79981C4.94338 3 4.36119 3.00133 3.91113 3.03809C3.47277 3.0739 3.24819 3.1381 3.0918 3.21777C2.71554 3.40949 2.40953 3.71556 2.21778 4.0918C2.13808 4.2482 2.07293 4.47272 2.03711 4.91113C2.00035 5.36117 2 5.9434 2 6.7998V13.2002C2 14.0566 2.00035 14.6388 2.03711 15.0889C2.07293 15.5273 2.13809 15.7518 2.21778 15.9082C2.40953 16.2844 2.71554 16.5905 3.0918 16.7822C3.2482 16.8619 3.47277 16.9261 3.91113 16.9619C4.36119 16.9987 4.94338 17 5.79981 17H11.3232C11.3529 17 11.493 16.996 11.6357 17.0225C11.6899 17.0325 11.7434 17.0459 11.7959 17.0625L11.9492 17.1211C12.0812 17.1812 12.1933 17.2651 12.2178 17.2822L15.5 19.5781V18.4697C15.5 18.4235 15.4911 18.1991 15.5488 17.9902C15.6596 17.5897 15.9473 17.2658 16.3242 17.1064L16.4902 17.0488L16.6475 17.0166C16.8005 16.9949 16.935 17 16.9697 17C17.9933 17 18.3038 16.9908 18.5322 16.9277C19.2102 16.7404 19.7404 16.2102 19.9277 15.5322C19.9908 15.3038 20 14.9938 20 13.9707V10C20 9.44772 20.4477 9 21 9C21.5523 9 22 9.44772 22 10V13.9707C22 14.8618 22.009 15.5097 21.8555 16.0654C21.4808 17.4213 20.4214 18.4808 19.0654 18.8555C18.6261 18.9769 18.1291 18.9961 17.5 18.999V20.4248C17.5 20.5789 17.5005 20.7638 17.4863 20.9189C17.4732 21.0622 17.4361 21.3687 17.2207 21.6494C16.9778 21.9659 16.6076 22.1593 16.209 22.1768C15.8556 22.1922 15.5829 22.047 15.458 21.9756C15.3227 21.8982 15.1712 21.7905 15.0449 21.7021L11.1855 19H5.79981C4.97627 19 4.29845 19.001 3.74805 18.9561C3.18595 18.9101 2.66893 18.8117 2.1836 18.5645C1.43096 18.181 0.819036 17.5681 0.435549 16.8154C0.188466 16.3303 0.0898631 15.8138 0.0439473 15.252C-0.00101957 14.7016 1.78953e-06 14.0237 1.94883e-06 13.2002V6.7998C1.79968e-06 5.97634 -0.00101987 5.29842 0.0439473 4.74805C0.0898627 4.18621 0.188468 3.66971 0.435549 3.18457C0.819035 2.43193 1.43096 1.81904 2.1836 1.43555C2.66893 1.18826 3.18595 1.08987 3.74805 1.04395C4.29845 0.998978 4.97627 1 5.79981 1H11Z",fill:"#223E9E"}),d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.876 0C19.7045 1.26278e-07 20.4991 0.329187 21.085 0.915039C21.6708 1.5009 22 2.29552 22 3.12402C22 3.95253 21.6708 4.74715 21.085 5.33301L16.0723 10.3428L16.0713 10.3418C15.7149 10.6982 15.2748 10.9593 14.791 11.1006L11.9209 11.9385C11.6629 12.0137 11.3893 12.0178 11.1289 11.9512C10.8684 11.8844 10.6306 11.7487 10.4404 11.5586C10.2503 11.3685 10.1146 11.1305 10.0479 10.8701C9.98122 10.6098 9.98534 10.3361 10.0605 10.0781L10.8984 7.20801L10.957 7.02832C11.1065 6.61517 11.3445 6.23849 11.6563 5.92676L16.667 0.915039C17.2529 0.329187 18.0474 5.05224e-07 18.876 0ZM18.876 2C18.5779 2 18.2919 2.11832 18.0811 2.3291L13.0713 7.34082C12.9525 7.45961 12.8655 7.60726 12.8184 7.76855L12.2363 9.7627L14.2314 9.18066C14.3924 9.1335 14.5396 9.04637 14.6582 8.92773L19.6709 3.91895L19.7451 3.83691C19.9092 3.63684 20 3.38503 20 3.12402C20 2.82595 19.8817 2.53988 19.6709 2.3291C19.4601 2.11832 19.1741 2 18.876 2Z",fill:"#223E9E"})]}),d("span",{children:n("support.success")})]}):null};var nn='/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-marianne),ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-5{bottom:1.25rem}.left-5{left:1.25rem}.right-3{right:.75rem}.right-5{right:1.25rem}.right-\\[6px\\]{right:6px}.top-1\\/2{top:50%}.top-\\[6px\\]{top:6px}.z-10{z-index:10}.z-\\[1000\\]{z-index:1000}.m-0{margin:0}.mb-0{margin-bottom:0}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-10{height:2.5rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[15px\\]{height:15px}.h-auto{height:auto}.max-h-none{max-height:none}.min-h-24{min-height:6rem}.\\!w-full{width:100%!important}.w-4{width:1rem}.w-5{width:1.25rem}.w-7{width:1.75rem}.w-\\[15px\\]{width:15px}.w-auto{width:auto}.w-full{width:100%}.\\!min-w-10{min-width:2.5rem!important}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[min\\(400px\\2c calc\\(100vw-40px\\)\\)\\]{max-width:min(400px,calc(100vw - 40px))}.max-w-full{max-width:100%}.max-w-none{max-width:none}.\\!flex-1{flex:1 1 0%!important}.shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize-y{resize:vertical}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-3\\.5{gap:.875rem}.gap-\\[7px\\]{gap:7px}.overflow-auto{overflow:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.border{border-width:1px}.border-2{border-width:2px}.border-\\[\\#cbcfd8\\]{--tw-border-opacity:1;border-color:rgb(203 207 216/var(--tw-border-opacity))}.border-\\[\\#ce0500\\]{--tw-border-opacity:1;border-color:rgb(206 5 0/var(--tw-border-opacity))}.border-brand-150{--tw-border-opacity:1;border-color:rgb(200 211 255/var(--tw-border-opacity))}.border-gray-150{--tw-border-opacity:1;border-color:rgb(207 213 222/var(--tw-border-opacity))}.border-grey-1{--tw-border-opacity:1;border-color:rgb(127 126 126/var(--tw-border-opacity))}.border-grey-4{--tw-border-opacity:1;border-color:rgb(221 221 221/var(--tw-border-opacity))}.bg-\\[\\#ce0500\\]{--tw-bg-opacity:1;background-color:rgb(206 5 0/var(--tw-bg-opacity))}.bg-\\[\\#dee2e9\\]{--tw-bg-opacity:1;background-color:rgb(222 226 233/var(--tw-bg-opacity))}.bg-blue-1{--tw-bg-opacity:1;background-color:rgb(0 0 145/var(--tw-bg-opacity))}.bg-brand-050{--tw-bg-opacity:1;background-color:rgb(237 240 255/var(--tw-bg-opacity))}.bg-brand-100{--tw-bg-opacity:1;background-color:rgb(218 226 255/var(--tw-bg-opacity))}.bg-brand-550{--tw-bg-opacity:1;background-color:rgb(62 93 231/var(--tw-bg-opacity))}.bg-gray-550{--tw-bg-opacity:1;background-color:rgb(98 106 128/var(--tw-bg-opacity))}.bg-transparent{background-color:initial}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.\\!px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.pb-5{padding-bottom:1.25rem}.pr-10{padding-right:2.5rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.text-left{text-align:left}.\\!text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.leading-\\[18px\\]{line-height:18px}.leading-none{line-height:1}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.text-\\[\\#555E74\\]{--tw-text-opacity:1;color:rgb(85 94 116/var(--tw-text-opacity))}.text-\\[\\#ce0500\\]{--tw-text-opacity:1;color:rgb(206 5 0/var(--tw-text-opacity))}.text-blue-1{--tw-text-opacity:1;color:rgb(0 0 145/var(--tw-text-opacity))}.text-brand-050{--tw-text-opacity:1;color:rgb(237 240 255/var(--tw-text-opacity))}.text-brand-550{--tw-text-opacity:1;color:rgb(62 93 231/var(--tw-text-opacity))}.text-brand-650{--tw-text-opacity:1;color:rgb(40 69 193/var(--tw-text-opacity))}.text-gray-550{--tw-text-opacity:1;color:rgb(98 106 128/var(--tw-text-opacity))}.text-greyscale-500{--tw-text-opacity:1;color:rgb(124 124 124/var(--tw-text-opacity))}.text-greyscale-950{--tw-text-opacity:1;color:rgb(30 30 30/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.\\!opacity-55{opacity:.55!important}.shadow{--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-\\[0_2px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.06\\)\\2c 0_8px_24px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\]{--tw-shadow:0 2px 8px #0000000f,0 8px 24px #0000001a;--tw-shadow-colored:0 2px 8px var(--tw-shadow-color),0 8px 24px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid #0000;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}#lasuite-support-mount{font-family:Marianne,arial,sans-serif}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-\\[\\#f2f5f4\\]:hover{--tw-bg-opacity:1;background-color:rgb(242 245 244/var(--tw-bg-opacity))}.hover\\:bg-brand-150:hover{--tw-bg-opacity:1;background-color:rgb(200 211 255/var(--tw-bg-opacity))}.hover\\:bg-brand-650:hover{--tw-bg-opacity:1;background-color:rgb(40 69 193/var(--tw-bg-opacity))}.hover\\:bg-dsfr-blue-2:hover{--tw-bg-opacity:1;background-color:rgb(18 18 255/var(--tw-bg-opacity))}.hover\\:bg-gray-050:hover{--tw-bg-opacity:1;background-color:rgb(238 241 244/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(223 226 234/var(--tw-bg-opacity))}.hover\\:bg-greyscale-050:hover{--tw-bg-opacity:1;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.hover\\:bg-primary-300:hover{--tw-bg-opacity:1;background-color:rgb(202 202 251/var(--tw-bg-opacity))}.hover\\:bg-transparent:hover{background-color:initial}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.hover\\:decoration-2:hover{text-decoration-thickness:2px}.hover\\:underline-offset-4:hover{text-underline-offset:4px}.hover\\:backdrop-brightness-95:hover{--tw-backdrop-brightness:brightness(.95);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.focus\\:border-\\[\\#ce0500\\]:focus{--tw-border-opacity:1;border-color:rgb(206 5 0/var(--tw-border-opacity))}.focus\\:border-brand-550:focus{--tw-border-opacity:1;border-color:rgb(62 93 231/var(--tw-border-opacity))}.focus\\:shadow-\\[0_0_0_1px_\\#3e5de7\\]:focus{--tw-shadow:0 0 0 1px #3e5de7;--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color)}.focus\\:shadow-\\[0_0_0_1px_\\#3e5de7\\]:focus,.focus\\:shadow-\\[0_0_0_1px_\\#ce0500\\]:focus{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:shadow-\\[0_0_0_1px_\\#ce0500\\]:focus{--tw-shadow:0 0 0 1px #ce0500;--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color)}.active\\:bg-\\[\\#f2f5f4\\]:active{--tw-bg-opacity:1;background-color:rgb(242 245 244/var(--tw-bg-opacity))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-55:disabled{opacity:.55}@media (min-width:48em){.md\\:inset-auto{inset:auto}.md\\:bottom-5{bottom:1.25rem}.md\\:bottom-auto{bottom:auto}.md\\:left-5{left:1.25rem}.md\\:left-auto{left:auto}.md\\:right-5{right:1.25rem}.md\\:right-auto{right:auto}.md\\:top-20{top:5rem}.md\\:top-auto{top:auto}.md\\:max-h-\\[calc\\(100vh-40px\\)\\]{max-height:calc(100vh - 40px)}.md\\:w-\\[min\\(400px\\2c calc\\(100vw-24px\\)\\)\\]{width:min(400px,calc(100vw - 24px))}.md\\:w-fit{width:-moz-fit-content;width:fit-content}.md\\:rounded-lg{border-radius:.5rem}.md\\:\\!px-4{padding-left:1rem!important;padding-right:1rem!important}.md\\:\\!px-8{padding-left:2rem!important;padding-right:2rem!important}.md\\:\\!py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.md\\:\\!py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.md\\:\\!py-4{padding-top:1rem!important;padding-bottom:1rem!important}.md\\:shadow-\\[0_2px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.06\\)\\2c 0_12px_32px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\]{--tw-shadow:0 2px 8px #0000000f,0 12px 32px #0000001f;--tw-shadow-colored:0 2px 8px var(--tw-shadow-color),0 12px 32px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}';var rn=`(function() {
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
`;window.__LASUITE_ALTCHA_SCRYPT_SOURCE__=rn;var ve="support",rr="lasuite-widget-support-root",an="lasuite-widget";function ge(e,t){document.dispatchEvent(new CustomEvent(`${an}-${ve}-${e}`,{detail:t}))}function on(e,t){let n=`${an}-${ve}-${e}`,r=o=>t(o.detail);return document.addEventListener(n,r),()=>document.removeEventListener(n,r)}function or(e){return e.endsWith("/")?e:`${e}/`}var oe=null,O=null;function An(){oe==null||oe.unmount(),oe=null,O==null||O.remove(),O=null}function sn(){An(),ge("closed")}function ar({apiBase:e,channel:t,email:n,position:r,onOpen:o,onDismiss:a}){let[A,s]=x(!0),[l,g]=x(!1),c=D(!1),f=ee(()=>{c.current=!0,g(!0),ge("success")},[]),u=ee(()=>{s(!1),c.current||a()},[a]),i=ee(()=>{c.current=!1,g(!1),a()},[a]);return d(Q,{children:[d(en,{channel:t,email:n,open:A,apiBase:e,position:r,onOpen:o,onClose:u,onSuccess:f}),d(tn,{open:l,onDismiss:i})]})}function ir(e){if(!e.api||!e.channel){console.error("Support widget requires an API URL and a channel ID");return}An(),O=document.createElement("div"),O.id=rr,document.body.appendChild(O);let t=O.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=nn,t.appendChild(n);let r=document.createElement("div");r.id="lasuite-support-mount",t.appendChild(r),oe=zt(r);let o=or(e.api),a=e.locale||document.documentElement.lang||"fr";oe.render(d(Lt,{locale:a.split("-")[0],children:d(ar,{apiBase:o,channel:e.channel,email:e.email,position:e.position||"bottom-right",onOpen:A=>{ge("opened",{...e,dialogElement:A})},onDismiss:sn})}))}function Ar(){window._lasuite_widget=window._lasuite_widget||[];let e=window._lasuite_widget;e._loaded||(e._loaded={});let t=2;if(e._loaded[ve]===t)return;let n=e.push.bind(e);e.push=(...o)=>{var a;for(let A of o){let s=A;((a=e._loaded)==null?void 0:a[s[0]])===t?ge(s[1],s[2]):n(A)}return e.length},e._loaded[ve]=t,on("init",ir),on("close",()=>sn());let r=e.splice(0,e.length);for(let o of r)e.push(o);ge("loaded")}Ar();})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
