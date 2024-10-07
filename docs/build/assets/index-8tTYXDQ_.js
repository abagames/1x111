(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var hd={exports:{}},xo={},gd={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jl=Symbol.for("react.element"),Wm=Symbol.for("react.portal"),Hm=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),bm=Symbol.for("react.suspense"),Zm=Symbol.for("react.memo"),qm=Symbol.for("react.lazy"),Ga=Symbol.iterator;function eh(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,wd={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||yd}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=Pr.prototype;function Du(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||yd}var Mu=Du.prototype=new Sd;Mu.constructor=Du;vd(Mu,Pr.prototype);Mu.isPureReactComponent=!0;var Wa=Array.isArray,_d=Object.prototype.hasOwnProperty,Au={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)_d.call(t,r)&&!xd.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),a=0;a<s;a++)u[a]=arguments[a+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:jl,type:e,key:i,ref:o,props:l,_owner:Au.current}}function th(e,t){return{$$typeof:jl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===jl}function nh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ha=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nh(""+e.key):t.toString(36)}function gi(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case jl:case Wm:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ho(o,0):r,Wa(l)?(n="",e!=null&&(n=e.replace(Ha,"$&/")+"/"),gi(l,t,n,"",function(a){return a})):l!=null&&(zu(l)&&(l=th(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ha,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Wa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Ho(i,s);o+=gi(i,t,n,u,l)}else if(u=eh(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Ho(i,s++),o+=gi(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yl(e,t,n){if(e==null)return e;var r=[],l=0;return gi(e,r,"","",function(i){return t.call(n,i,l++)}),r}function rh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},yi={transition:null},lh={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:yi,ReactCurrentOwner:Au};function kd(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Yl,forEach:function(e,t,n){Yl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yl(e,function(){t++}),t},toArray:function(e){return Yl(e,function(t){return t})||[]},only:function(e){if(!zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Pr;V.Fragment=Hm;V.Profiler=Qm;V.PureComponent=Du;V.StrictMode=Km;V.Suspense=bm;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lh;V.act=kd;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Au.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)_d.call(t,u)&&!xd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var a=0;a<u;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:jl,type:e.type,key:l,ref:i,props:r,_owner:o}};V.createContext=function(e){return e={$$typeof:Ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jm,_context:e},e.Consumer=e};V.createElement=Ed;V.createFactory=function(e){var t=Ed.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Xm,render:e}};V.isValidElement=zu;V.lazy=function(e){return{$$typeof:qm,_payload:{_status:-1,_result:e},_init:rh}};V.memo=function(e,t){return{$$typeof:Zm,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};V.unstable_act=kd;V.useCallback=function(e,t){return Te.current.useCallback(e,t)};V.useContext=function(e){return Te.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};V.useEffect=function(e,t){return Te.current.useEffect(e,t)};V.useId=function(){return Te.current.useId()};V.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Te.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};V.useRef=function(e){return Te.current.useRef(e)};V.useState=function(e){return Te.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Te.current.useTransition()};V.version="18.3.1";gd.exports=V;var D=gd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=D,oh=Symbol.for("react.element"),sh=Symbol.for("react.fragment"),uh=Object.prototype.hasOwnProperty,ah=ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ch={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)uh.call(t,r)&&!ch.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:oh,type:e,key:i,ref:o,props:l,_owner:ah.current}}xo.Fragment=sh;xo.jsx=Cd;xo.jsxs=Cd;hd.exports=xo;var M=hd.exports,Pd={exports:{}},Be={},Rd={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(v,x){var N=v.length;v.push(x);e:for(;0<N;){var B=N-1>>>1,fe=v[B];if(0<l(fe,x))v[B]=x,v[N]=fe,N=B;else break e}}function n(v){return v.length===0?null:v[0]}function r(v){if(v.length===0)return null;var x=v[0],N=v.pop();if(N!==x){v[0]=N;e:for(var B=0,fe=v.length,Ql=fe>>>1;B<Ql;){var dn=2*(B+1)-1,Wo=v[dn],fn=dn+1,Jl=v[fn];if(0>l(Wo,N))fn<fe&&0>l(Jl,Wo)?(v[B]=Jl,v[fn]=N,B=fn):(v[B]=Wo,v[dn]=N,B=dn);else if(fn<fe&&0>l(Jl,N))v[B]=Jl,v[fn]=N,B=fn;else break e}}return x}function l(v,x){var N=v.sortIndex-x.sortIndex;return N!==0?N:v.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],a=[],m=1,p=null,h=3,g=!1,_=!1,w=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(v){for(var x=n(a);x!==null;){if(x.callback===null)r(a);else if(x.startTime<=v)r(a),x.sortIndex=x.expirationTime,t(u,x);else break;x=n(a)}}function S(v){if(w=!1,f(v),!_)if(n(u)!==null)_=!0,ut(k);else{var x=n(a);x!==null&&At(S,x.startTime-v)}}function k(v,x){_=!1,w&&(w=!1,d(L),L=-1),g=!0;var N=h;try{for(f(x),p=n(u);p!==null&&(!(p.expirationTime>x)||v&&!de());){var B=p.callback;if(typeof B=="function"){p.callback=null,h=p.priorityLevel;var fe=B(p.expirationTime<=x);x=e.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),f(x)}else r(u);p=n(u)}if(p!==null)var Ql=!0;else{var dn=n(a);dn!==null&&At(S,dn.startTime-x),Ql=!1}return Ql}finally{p=null,h=N,g=!1}}var T=!1,R=null,L=-1,K=5,A=-1;function de(){return!(e.unstable_now()-A<K)}function F(){if(R!==null){var v=e.unstable_now();A=v;var x=!0;try{x=R(!0,v)}finally{x?st():(T=!1,R=null)}}else T=!1}var st;if(typeof c=="function")st=function(){c(F)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,Gn=yt.port2;yt.port1.onmessage=F,st=function(){Gn.postMessage(null)}}else st=function(){O(F,0)};function ut(v){R=v,T||(T=!0,st())}function At(v,x){L=O(function(){v(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(v){v.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,ut(k))},e.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<v?Math.floor(1e3/v):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(v){switch(h){case 1:case 2:case 3:var x=3;break;default:x=h}var N=h;h=x;try{return v()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(v,x){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var N=h;h=v;try{return x()}finally{h=N}},e.unstable_scheduleCallback=function(v,x,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,v){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=N+fe,v={id:m++,callback:x,priorityLevel:v,startTime:N,expirationTime:fe,sortIndex:-1},N>B?(v.sortIndex=N,t(a,v),n(u)===null&&v===n(a)&&(w?(d(L),L=-1):w=!0,At(S,N-B))):(v.sortIndex=fe,t(u,v),_||g||(_=!0,ut(k))),v},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(v){var x=h;return function(){var N=h;h=x;try{return v.apply(this,arguments)}finally{h=N}}}})(Td);Rd.exports=Td;var dh=Rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh=D,$e=dh;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,ml={};function Vn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(ml[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=Object.prototype.hasOwnProperty,ph=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},Qa={};function mh(e){return Es.call(Qa,e)?!0:Es.call(Ka,e)?!1:ph.test(e)?Qa[e]=!0:(Ka[e]=!0,!1)}function hh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gh(e,t,n,r){if(t===null||typeof t>"u"||hh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var ju=/[\-:]([a-z])/g;function Vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ju,Vu);Se[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ju,Vu);Se[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ju,Vu);Se[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fu(e,t,n,r){var l=Se.hasOwnProperty(t)?Se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gh(t,n,l,r)&&(n=null),r||l===null?mh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),ks=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Od=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),Ps=Symbol.for("react.suspense_list"),Bu=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Nd=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Ko;function Wr(e){if(Ko===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ko=t&&t[1]||""}return`
`+Ko+e}var Qo=!1;function Jo(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var l=a.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function yh(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function Rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Qn:return"Portal";case ks:return"Profiler";case Uu:return"StrictMode";case Cs:return"Suspense";case Ps:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Od:return(e.displayName||"Context")+".Consumer";case Id:return(e._context.displayName||"Context")+".Provider";case $u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bu:return t=e.displayName||null,t!==null?t:Rs(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Rs(e(t))}catch{}}return null}function vh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rs(t);case 8:return t===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wh(e){var t=Dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){e._valueTracker||(e._valueTracker=wh(e))}function Md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ts(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ad(e,t){t=t.checked,t!=null&&Fu(e,"checked",t,!1)}function Ls(e,t){Ad(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Is(e,t.type,n):t.hasOwnProperty("defaultValue")&&Is(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Is(e,t,n){(t!=="number"||Ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Hr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function zd(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zl,Vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sh=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){Sh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function Fd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function Ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Fd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var _h=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,t){if(t){if(_h[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,ur=null,ar=null;function qa(e){if(e=Ul(e)){if(typeof zs!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ro(t),zs(e.stateNode,e.type,t))}}function $d(e){ur?ar?ar.push(e):ar=[e]:ur=e}function Bd(){if(ur){var e=ur,t=ar;if(ar=ur=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function Gd(e,t){return e(t)}function Wd(){}var Yo=!1;function Hd(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return Gd(e,t,n)}finally{Yo=!1,(ur!==null||ar!==null)&&(Wd(),Bd())}}function gl(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var js=!1;if(It)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){js=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{js=!1}function xh(e,t,n,r,l,i,o,s,u){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(m){this.onError(m)}}var Xr=!1,Di=null,Mi=!1,Vs=null,Eh={onError:function(e){Xr=!0,Di=e}};function kh(e,t,n,r,l,i,o,s,u){Xr=!1,Di=null,xh.apply(Eh,arguments)}function Ch(e,t,n,r,l,i,o,s,u){if(kh.apply(this,arguments),Xr){if(Xr){var a=Di;Xr=!1,Di=null}else throw Error(E(198));Mi||(Mi=!0,Vs=a)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ec(e){if(Fn(e)!==e)throw Error(E(188))}function Ph(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ec(l),e;if(i===r)return ec(l),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Qd(e){return e=Ph(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jd(e);if(t!==null)return t;e=e.sibling}return null}var Yd=$e.unstable_scheduleCallback,tc=$e.unstable_cancelCallback,Rh=$e.unstable_shouldYield,Th=$e.unstable_requestPaint,le=$e.unstable_now,Lh=$e.unstable_getCurrentPriorityLevel,Wu=$e.unstable_ImmediatePriority,Xd=$e.unstable_UserBlockingPriority,Ai=$e.unstable_NormalPriority,Ih=$e.unstable_LowPriority,bd=$e.unstable_IdlePriority,Eo=null,mt=null;function Oh(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Mh,Nh=Math.log,Dh=Math.LN2;function Mh(e){return e>>>=0,e===0?32:31-(Nh(e)/Dh|0)|0}var ql=64,ei=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Kr(s):(i&=o,i!==0&&(r=Kr(i)))}else o=n&~l,o!==0?r=Kr(o):i!==0&&(r=Kr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function Ah(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=Ah(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zd(){var e=ql;return ql<<=1,!(ql&4194240)&&(ql=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function jh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var H=0;function qd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ef,Ku,tf,nf,rf,Us=!1,ti=[],Jt=null,Yt=null,Xt=null,yl=new Map,vl=new Map,Bt=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":yl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(t.pointerId)}}function Dr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ul(t),t!==null&&Ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Fh(e,t,n,r,l){switch(t){case"focusin":return Jt=Dr(Jt,e,t,n,r,l),!0;case"dragenter":return Yt=Dr(Yt,e,t,n,r,l),!0;case"mouseover":return Xt=Dr(Xt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return yl.set(i,Dr(yl.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,vl.set(i,Dr(vl.get(i)||null,e,t,n,r,l)),!0}return!1}function lf(e){var t=vn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kd(n),t!==null){e.blockedOn=t,rf(e.priority,function(){tf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=Ul(n),t!==null&&Ku(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){vi(e)&&n.delete(t)}function Uh(){Us=!1,Jt!==null&&vi(Jt)&&(Jt=null),Yt!==null&&vi(Yt)&&(Yt=null),Xt!==null&&vi(Xt)&&(Xt=null),yl.forEach(rc),vl.forEach(rc)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Uh)))}function wl(e){function t(l){return Mr(l,e)}if(0<ti.length){Mr(ti[0],e);for(var n=1;n<ti.length;n++){var r=ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Mr(Jt,e),Yt!==null&&Mr(Yt,e),Xt!==null&&Mr(Xt,e),yl.forEach(t),vl.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&Bt.shift()}var cr=Mt.ReactCurrentBatchConfig,ji=!0;function $h(e,t,n,r){var l=H,i=cr.transition;cr.transition=null;try{H=1,Qu(e,t,n,r)}finally{H=l,cr.transition=i}}function Bh(e,t,n,r){var l=H,i=cr.transition;cr.transition=null;try{H=4,Qu(e,t,n,r)}finally{H=l,cr.transition=i}}function Qu(e,t,n,r){if(ji){var l=$s(e,t,n,r);if(l===null)os(e,t,r,Vi,n),nc(e,r);else if(Fh(l,e,t,n,r))r.stopPropagation();else if(nc(e,r),t&4&&-1<Vh.indexOf(e)){for(;l!==null;){var i=Ul(l);if(i!==null&&ef(i),i=$s(e,t,n,r),i===null&&os(e,t,r,Vi,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var Vi=null;function $s(e,t,n,r){if(Vi=null,e=Gu(r),e=vn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lh()){case Wu:return 1;case Xd:return 4;case Ai:case Ih:return 16;case bd:return 536870912;default:return 16}default:return 16}}var Ht=null,Ju=null,wi=null;function sf(){if(wi)return wi;var e,t=Ju,n=t.length,r,l="value"in Ht?Ht.value:Ht.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return wi=l.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function lc(){return!1}function Ge(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:lc,this.isPropagationStopped=lc,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=Ge(Rr),Fl=ne({},Rr,{view:0,detail:0}),Gh=Ge(Fl),bo,Zo,Ar,ko=ne({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(bo=e.screenX-Ar.screenX,Zo=e.screenY-Ar.screenY):Zo=bo=0,Ar=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),ic=Ge(ko),Wh=ne({},ko,{dataTransfer:0}),Hh=Ge(Wh),Kh=ne({},Fl,{relatedTarget:0}),qo=Ge(Kh),Qh=ne({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=Ge(Qh),Yh=ne({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xh=Ge(Yh),bh=ne({},Rr,{data:0}),oc=Ge(bh),Zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eg[e])?!!t[e]:!1}function Xu(){return tg}var ng=ne({},Fl,{key:function(e){if(e.key){var t=Zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rg=Ge(ng),lg=ne({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=Ge(lg),ig=ne({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),og=Ge(ig),sg=ne({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ug=Ge(sg),ag=ne({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cg=Ge(ag),dg=[9,13,27,32],bu=It&&"CompositionEvent"in window,br=null;It&&"documentMode"in document&&(br=document.documentMode);var fg=It&&"TextEvent"in window&&!br,uf=It&&(!bu||br&&8<br&&11>=br),uc=" ",ac=!1;function af(e,t){switch(e){case"keyup":return dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function pg(e,t){switch(e){case"compositionend":return cf(t);case"keypress":return t.which!==32?null:(ac=!0,uc);case"textInput":return e=t.data,e===uc&&ac?null:e;default:return null}}function mg(e,t){if(Yn)return e==="compositionend"||!bu&&af(e,t)?(e=sf(),wi=Ju=Ht=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hg[e.type]:t==="textarea"}function df(e,t,n,r){$d(r),t=Fi(t,"onChange"),0<t.length&&(n=new Yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,Sl=null;function gg(e){xf(e,0)}function Co(e){var t=Zn(e);if(Md(t))return e}function yg(e,t){if(e==="change")return t}var ff=!1;if(It){var es;if(It){var ts="oninput"in document;if(!ts){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),ts=typeof dc.oninput=="function"}es=ts}else es=!1;ff=es&&(!document.documentMode||9<document.documentMode)}function fc(){Zr&&(Zr.detachEvent("onpropertychange",pf),Sl=Zr=null)}function pf(e){if(e.propertyName==="value"&&Co(Sl)){var t=[];df(t,Sl,e,Gu(e)),Hd(gg,t)}}function vg(e,t,n){e==="focusin"?(fc(),Zr=t,Sl=n,Zr.attachEvent("onpropertychange",pf)):e==="focusout"&&fc()}function wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Sl)}function Sg(e,t){if(e==="click")return Co(t)}function _g(e,t){if(e==="input"||e==="change")return Co(t)}function xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:xg;function _l(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Es.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var n=pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pc(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=Ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mf(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=mc(n,i);var o=mc(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kg=It&&"documentMode"in document&&11>=document.documentMode,Xn=null,Bs=null,qr=null,Gs=!1;function hc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gs||Xn==null||Xn!==Ni(r)||(r=Xn,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&_l(qr,r)||(qr=r,r=Fi(Bs,"onSelect"),0<r.length&&(t=new Yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},ns={},gf={};It&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Po(e){if(ns[e])return ns[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gf)return ns[e]=t[n];return e}var yf=Po("animationend"),vf=Po("animationiteration"),wf=Po("animationstart"),Sf=Po("transitionend"),_f=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){_f.set(e,t),Vn(t,[e])}for(var rs=0;rs<gc.length;rs++){var ls=gc[rs],Cg=ls.toLowerCase(),Pg=ls[0].toUpperCase()+ls.slice(1);un(Cg,"on"+Pg)}un(yf,"onAnimationEnd");un(vf,"onAnimationIteration");un(wf,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Sf,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ch(r,t,void 0,e),e.currentTarget=null}function xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,a=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;yc(l,s,a),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,a=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;yc(l,s,a),i=u}}}if(Mi)throw e=Vs,Mi=!1,Vs=null,e}function X(e,t){var n=t[Js];n===void 0&&(n=t[Js]=new Set);var r=e+"__bubble";n.has(r)||(Ef(t,e,2,!1),n.add(r))}function is(e,t,n){var r=0;t&&(r|=4),Ef(n,e,r,t)}var li="_reactListening"+Math.random().toString(36).slice(2);function xl(e){if(!e[li]){e[li]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(Rg.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[li]||(t[li]=!0,is("selectionchange",!1,t))}}function Ef(e,t,n,r){switch(of(t)){case 1:var l=$h;break;case 4:l=Bh;break;default:l=Qu}n=l.bind(null,t,n,e),l=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function os(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=vn(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Hd(function(){var a=i,m=Gu(n),p=[];e:{var h=_f.get(e);if(h!==void 0){var g=Yu,_=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":g=rg;break;case"focusin":_="focus",g=qo;break;case"focusout":_="blur",g=qo;break;case"beforeblur":case"afterblur":g=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=og;break;case yf:case vf:case wf:g=Jh;break;case Sf:g=ug;break;case"scroll":g=Gh;break;case"wheel":g=cg;break;case"copy":case"cut":case"paste":g=Xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=sc}var w=(t&4)!==0,O=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var c=a,f;c!==null;){f=c;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,d!==null&&(S=gl(c,d),S!=null&&w.push(El(c,S,f)))),O)break;c=c.return}0<w.length&&(h=new g(h,_,null,n,m),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==As&&(_=n.relatedTarget||n.fromElement)&&(vn(_)||_[Ot]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=a,_=_?vn(_):null,_!==null&&(O=Fn(_),_!==O||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=a),g!==_)){if(w=ic,S="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=sc,S="onPointerLeave",d="onPointerEnter",c="pointer"),O=g==null?h:Zn(g),f=_==null?h:Zn(_),h=new w(S,c+"leave",g,n,m),h.target=O,h.relatedTarget=f,S=null,vn(m)===a&&(w=new w(d,c+"enter",_,n,m),w.target=f,w.relatedTarget=O,S=w),O=S,g&&_)t:{for(w=g,d=_,c=0,f=w;f;f=Wn(f))c++;for(f=0,S=d;S;S=Wn(S))f++;for(;0<c-f;)w=Wn(w),c--;for(;0<f-c;)d=Wn(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=Wn(w),d=Wn(d)}w=null}else w=null;g!==null&&vc(p,h,g,w,!1),_!==null&&O!==null&&vc(p,O,_,w,!0)}}e:{if(h=a?Zn(a):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=yg;else if(cc(h))if(ff)k=_g;else{k=wg;var T=vg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Sg);if(k&&(k=k(e,a))){df(p,k,n,m);break e}T&&T(e,h,a),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Is(h,"number",h.value)}switch(T=a?Zn(a):window,e){case"focusin":(cc(T)||T.contentEditable==="true")&&(Xn=T,Bs=a,qr=null);break;case"focusout":qr=Bs=Xn=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,hc(p,n,m);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":hc(p,n,m)}var R;if(bu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Yn?af(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(uf&&n.locale!=="ko"&&(Yn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Yn&&(R=sf()):(Ht=m,Ju="value"in Ht?Ht.value:Ht.textContent,Yn=!0)),T=Fi(a,L),0<T.length&&(L=new oc(L,e,null,n,m),p.push({event:L,listeners:T}),R?L.data=R:(R=cf(n),R!==null&&(L.data=R)))),(R=fg?pg(e,n):mg(e,n))&&(a=Fi(a,"onBeforeInput"),0<a.length&&(m=new oc("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:a}),m.data=R))}xf(p,t)})}function El(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=gl(e,n),i!=null&&r.unshift(El(e,i,l)),i=gl(e,t),i!=null&&r.push(El(e,i,l))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,a=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&a!==null&&(s=a,l?(u=gl(n,i),u!=null&&o.unshift(El(n,u,s))):l||(u=gl(n,i),u!=null&&o.push(El(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Tg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(Tg,`
`).replace(Lg,"")}function ii(e,t,n){if(t=wc(t),wc(e)!==t&&n)throw Error(E(425))}function Ui(){}var Ws=null,Hs=null;function Ks(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc<"u"?function(e){return Sc.resolve(null).then(e).catch(Ng)}:Qs;function Ng(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),wl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);wl(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),pt="__reactFiber$"+Tr,kl="__reactProps$"+Tr,Ot="__reactContainer$"+Tr,Js="__reactEvents$"+Tr,Dg="__reactListeners$"+Tr,Mg="__reactHandles$"+Tr;function vn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[pt])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function Ul(e){return e=e[pt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ro(e){return e[kl]||null}var Ys=[],qn=-1;function an(e){return{current:e}}function b(e){0>qn||(e.current=Ys[qn],Ys[qn]=null,qn--)}function J(e,t){qn++,Ys[qn]=e.current,e.current=t}var rn={},Ce=an(rn),De=an(!1),On=rn;function hr(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Me(e){return e=e.childContextTypes,e!=null}function $i(){b(De),b(Ce)}function xc(e,t,n){if(Ce.current!==rn)throw Error(E(168));J(Ce,t),J(De,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(E(108,vh(e)||"Unknown",l));return ne({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,On=Ce.current,J(Ce,e),J(De,De.current),!0}function Ec(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=kf(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,b(De),b(Ce),J(Ce,e)):b(De),J(De,n)}var _t=null,To=!1,us=!1;function Cf(e){_t===null?_t=[e]:_t.push(e)}function Ag(e){To=!0,Cf(e)}function cn(){if(!us&&_t!==null){us=!0;var e=0,t=H;try{var n=_t;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,To=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),Yd(Wu,cn),l}finally{H=t,us=!1}}return null}var er=[],tr=0,Gi=null,Wi=0,We=[],He=0,Nn=null,Et=1,kt="";function mn(e,t){er[tr++]=Wi,er[tr++]=Gi,Gi=e,Wi=t}function Pf(e,t,n){We[He++]=Et,We[He++]=kt,We[He++]=Nn,Nn=e;var r=Et;e=kt;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Et=1<<32-rt(t)+l|n<<l|r,kt=i+e}else Et=1<<i|n<<l|r,kt=e}function qu(e){e.return!==null&&(mn(e,1),Pf(e,1,0))}function ea(e){for(;e===Gi;)Gi=er[--tr],er[tr]=null,Wi=er[--tr],er[tr]=null;for(;e===Nn;)Nn=We[--He],We[He]=null,kt=We[--He],We[He]=null,Et=We[--He],We[He]=null}var Ue=null,Fe=null,q=!1,tt=null;function Rf(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Et,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Fe=null,!0):!1;default:return!1}}function Xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bs(e){if(q){var t=Fe;if(t){var n=t;if(!kc(e,t)){if(Xs(e))throw Error(E(418));t=bt(n.nextSibling);var r=Ue;t&&kc(e,t)?Rf(r,n):(e.flags=e.flags&-4097|2,q=!1,Ue=e)}}else{if(Xs(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Ue=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function oi(e){if(e!==Ue)return!1;if(!q)return Cc(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ks(e.type,e.memoizedProps)),t&&(t=Fe)){if(Xs(e))throw Tf(),Error(E(418));for(;t;)Rf(e,t),t=bt(t.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ue?bt(e.stateNode.nextSibling):null;return!0}function Tf(){for(var e=Fe;e;)e=bt(e.nextSibling)}function gr(){Fe=Ue=null,q=!1}function ta(e){tt===null?tt=[e]:tt.push(e)}var zg=Mt.ReactCurrentBatchConfig;function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function si(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function Lf(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=tn(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,f,S){return c===null||c.tag!==6?(c=hs(f,d.mode,S),c.return=d,c):(c=l(c,f),c.return=d,c)}function u(d,c,f,S){var k=f.type;return k===Jn?m(d,c,f.props.children,S,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&Pc(k)===c.type)?(S=l(c,f.props),S.ref=zr(d,c,f),S.return=d,S):(S=Ri(f.type,f.key,f.props,null,d.mode,S),S.ref=zr(d,c,f),S.return=d,S)}function a(d,c,f,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=gs(f,d.mode,S),c.return=d,c):(c=l(c,f.children||[]),c.return=d,c)}function m(d,c,f,S,k){return c===null||c.tag!==7?(c=kn(f,d.mode,S,k),c.return=d,c):(c=l(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=hs(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xl:return f=Ri(c.type,c.key,c.props,null,d.mode,f),f.ref=zr(d,null,c),f.return=d,f;case Qn:return c=gs(c,d.mode,f),c.return=d,c;case Ft:var S=c._init;return p(d,S(c._payload),f)}if(Hr(c)||Or(c))return c=kn(c,d.mode,f,null),c.return=d,c;si(d,c)}return null}function h(d,c,f,S){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:s(d,c,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xl:return f.key===k?u(d,c,f,S):null;case Qn:return f.key===k?a(d,c,f,S):null;case Ft:return k=f._init,h(d,c,k(f._payload),S)}if(Hr(f)||Or(f))return k!==null?null:m(d,c,f,S,null);si(d,f)}return null}function g(d,c,f,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(f)||null,s(c,d,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xl:return d=d.get(S.key===null?f:S.key)||null,u(c,d,S,k);case Qn:return d=d.get(S.key===null?f:S.key)||null,a(c,d,S,k);case Ft:var T=S._init;return g(d,c,f,T(S._payload),k)}if(Hr(S)||Or(S))return d=d.get(f)||null,m(c,d,S,k,null);si(c,S)}return null}function _(d,c,f,S){for(var k=null,T=null,R=c,L=c=0,K=null;R!==null&&L<f.length;L++){R.index>L?(K=R,R=null):K=R.sibling;var A=h(d,R,f[L],S);if(A===null){R===null&&(R=K);break}e&&R&&A.alternate===null&&t(d,R),c=i(A,c,L),T===null?k=A:T.sibling=A,T=A,R=K}if(L===f.length)return n(d,R),q&&mn(d,L),k;if(R===null){for(;L<f.length;L++)R=p(d,f[L],S),R!==null&&(c=i(R,c,L),T===null?k=R:T.sibling=R,T=R);return q&&mn(d,L),k}for(R=r(d,R);L<f.length;L++)K=g(R,d,L,f[L],S),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?L:K.key),c=i(K,c,L),T===null?k=K:T.sibling=K,T=K);return e&&R.forEach(function(de){return t(d,de)}),q&&mn(d,L),k}function w(d,c,f,S){var k=Or(f);if(typeof k!="function")throw Error(E(150));if(f=k.call(f),f==null)throw Error(E(151));for(var T=k=null,R=c,L=c=0,K=null,A=f.next();R!==null&&!A.done;L++,A=f.next()){R.index>L?(K=R,R=null):K=R.sibling;var de=h(d,R,A.value,S);if(de===null){R===null&&(R=K);break}e&&R&&de.alternate===null&&t(d,R),c=i(de,c,L),T===null?k=de:T.sibling=de,T=de,R=K}if(A.done)return n(d,R),q&&mn(d,L),k;if(R===null){for(;!A.done;L++,A=f.next())A=p(d,A.value,S),A!==null&&(c=i(A,c,L),T===null?k=A:T.sibling=A,T=A);return q&&mn(d,L),k}for(R=r(d,R);!A.done;L++,A=f.next())A=g(R,d,L,A.value,S),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?L:A.key),c=i(A,c,L),T===null?k=A:T.sibling=A,T=A);return e&&R.forEach(function(F){return t(d,F)}),q&&mn(d,L),k}function O(d,c,f,S){if(typeof f=="object"&&f!==null&&f.type===Jn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Xl:e:{for(var k=f.key,T=c;T!==null;){if(T.key===k){if(k=f.type,k===Jn){if(T.tag===7){n(d,T.sibling),c=l(T,f.props.children),c.return=d,d=c;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&Pc(k)===T.type){n(d,T.sibling),c=l(T,f.props),c.ref=zr(d,T,f),c.return=d,d=c;break e}n(d,T);break}else t(d,T);T=T.sibling}f.type===Jn?(c=kn(f.props.children,d.mode,S,f.key),c.return=d,d=c):(S=Ri(f.type,f.key,f.props,null,d.mode,S),S.ref=zr(d,c,f),S.return=d,d=S)}return o(d);case Qn:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=l(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=gs(f,d.mode,S),c.return=d,d=c}return o(d);case Ft:return T=f._init,O(d,c,T(f._payload),S)}if(Hr(f))return _(d,c,f,S);if(Or(f))return w(d,c,f,S);si(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,f),c.return=d,d=c):(n(d,c),c=hs(f,d.mode,S),c.return=d,d=c),o(d)):n(d,c)}return O}var yr=Lf(!0),If=Lf(!1),Hi=an(null),Ki=null,nr=null,na=null;function ra(){na=nr=Ki=null}function la(e){var t=Hi.current;b(Hi),e._currentValue=t}function Zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Ki=e,na=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Ki===null)throw Error(E(308));nr=e,Ki.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var wn=null;function ia(e){wn===null?wn=[e]:wn.push(e)}function Of(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ia(t)):(n.next=l.next,l.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Nt(e,n)}return l=r.interleaved,l===null?(t.next=t,ia(r)):(t.next=l.next,l.next=t),r.interleaved=t,Nt(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hu(e,n)}}function Rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var l=e.updateQueue;Ut=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,a=u.next;u.next=null,o===null?i=a:o.next=a,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=a:s.next=a,m.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;o=0,m=a=u=null,s=i;do{var h=s.lane,g=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,w=s;switch(h=t,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){p=_.call(g,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(g,p,h):_,h==null)break e;p=ne({},p,h);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(a=m=g,u=p):m=m.next=g,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(u=p),l.baseState=u,l.firstBaseUpdate=a,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=p}}function Tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(E(191,l));l.call(r)}}}var $l={},ht=an($l),Cl=an($l),Pl=an($l);function Sn(e){if(e===$l)throw Error(E(174));return e}function sa(e,t){switch(J(Pl,t),J(Cl,e),J(ht,$l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ns(t,e)}b(ht),J(ht,t)}function vr(){b(ht),b(Cl),b(Pl)}function Df(e){Sn(Pl.current);var t=Sn(ht.current),n=Ns(t,e.type);t!==n&&(J(Cl,e),J(ht,n))}function ua(e){Cl.current===e&&(b(ht),b(Cl))}var ee=an(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function aa(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var xi=Mt.ReactCurrentDispatcher,cs=Mt.ReactCurrentBatchConfig,Dn=0,te=null,se=null,me=null,Yi=!1,el=!1,Rl=0,jg=0;function _e(){throw Error(E(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function da(e,t,n,r,l,i){if(Dn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?$g:Bg,e=n(r,l),el){i=0;do{if(el=!1,Rl=0,25<=i)throw Error(E(301));i+=1,me=se=null,t.updateQueue=null,xi.current=Gg,e=n(r,l)}while(el)}if(xi.current=Xi,t=se!==null&&se.next!==null,Dn=0,me=se=te=null,Yi=!1,t)throw Error(E(300));return e}function fa(){var e=Rl!==0;return Rl=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?te.memoizedState=me=e:me=me.next=e,me}function Xe(){if(se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=me===null?te.memoizedState:me.next;if(t!==null)me=t,se=e;else{if(e===null)throw Error(E(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},me===null?te.memoizedState=me=e:me=me.next=e}return me}function Tl(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=Xe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=se,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,a=i;do{var m=a.lane;if((Dn&m)===m)u!==null&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var p={lane:m,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};u===null?(s=u=p,o=r):u=u.next=p,te.lanes|=m,Mn|=m}a=a.next}while(a!==null&&a!==i);u===null?o=r:u.next=s,ot(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,te.lanes|=i,Mn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fs(e){var t=Xe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);ot(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mf(){}function Af(e,t){var n=te,r=Xe(),l=t(),i=!ot(r.memoizedState,l);if(i&&(r.memoizedState=l,Ne=!0),r=r.queue,pa(Vf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Ll(9,jf.bind(null,n,r,l,t),void 0,null),ge===null)throw Error(E(349));Dn&30||zf(n,t,l)}return l}function zf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jf(e,t,n,r){t.value=n,t.getSnapshot=r,Ff(t)&&Uf(e)}function Vf(e,t,n){return n(function(){Ff(t)&&Uf(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Uf(e){var t=Nt(e,1);t!==null&&lt(t,e,1,-1)}function Lc(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:e},t.queue=e,e=e.dispatch=Ug.bind(null,te,e),[t.memoizedState,e]}function Ll(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $f(){return Xe().memoizedState}function Ei(e,t,n,r){var l=ct();te.flags|=e,l.memoizedState=Ll(1|t,n,void 0,r===void 0?null:r)}function Lo(e,t,n,r){var l=Xe();r=r===void 0?null:r;var i=void 0;if(se!==null){var o=se.memoizedState;if(i=o.destroy,r!==null&&ca(r,o.deps)){l.memoizedState=Ll(t,n,i,r);return}}te.flags|=e,l.memoizedState=Ll(1|t,n,i,r)}function Ic(e,t){return Ei(8390656,8,e,t)}function pa(e,t){return Lo(2048,8,e,t)}function Bf(e,t){return Lo(4,2,e,t)}function Gf(e,t){return Lo(4,4,e,t)}function Wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hf(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4,4,Wf.bind(null,t,e),n)}function ma(){}function Kf(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jf(e,t,n){return Dn&21?(ot(n,t)||(n=Zd(),te.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function Vg(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=cs.transition;cs.transition={};try{e(!1),t()}finally{H=n,cs.transition=r}}function Yf(){return Xe().memoizedState}function Fg(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xf(e))bf(t,n);else if(n=Of(e,t,n,r),n!==null){var l=Re();lt(n,e,r,l),Zf(n,t,r)}}function Ug(e,t,n){var r=en(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xf(e))bf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,ot(s,o)){var u=t.interleaved;u===null?(l.next=l,ia(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Of(e,t,l,r),n!==null&&(l=Re(),lt(n,e,r,l),Zf(n,t,r))}}function Xf(e){var t=e.alternate;return e===te||t!==null&&t===te}function bf(e,t){el=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hu(e,n)}}var Xi={readContext:Ye,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},$g={readContext:Ye,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4194308,4,Wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ei(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fg.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Lc,useDebugValue:ma,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Lc(!1),t=e[0];return e=Vg.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,l=ct();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ge===null)throw Error(E(349));Dn&30||zf(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ic(Vf.bind(null,r,i,e),[e]),r.flags|=2048,Ll(9,jf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=ge.identifierPrefix;if(q){var n=kt,r=Et;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bg={readContext:Ye,useCallback:Kf,useContext:Ye,useEffect:pa,useImperativeHandle:Hf,useInsertionEffect:Bf,useLayoutEffect:Gf,useMemo:Qf,useReducer:ds,useRef:$f,useState:function(){return ds(Tl)},useDebugValue:ma,useDeferredValue:function(e){var t=Xe();return Jf(t,se.memoizedState,e)},useTransition:function(){var e=ds(Tl)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Af,useId:Yf,unstable_isNewReconciler:!1},Gg={readContext:Ye,useCallback:Kf,useContext:Ye,useEffect:pa,useImperativeHandle:Hf,useInsertionEffect:Bf,useLayoutEffect:Gf,useMemo:Qf,useReducer:fs,useRef:$f,useState:function(){return fs(Tl)},useDebugValue:ma,useDeferredValue:function(e){var t=Xe();return se===null?t.memoizedState=e:Jf(t,se.memoizedState,e)},useTransition:function(){var e=fs(Tl)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Af,useId:Yf,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),l=en(e),i=Rt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,l),t!==null&&(lt(t,e,l,r),_i(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),l=en(e),i=Rt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,l),t!==null&&(lt(t,e,l,r),_i(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=en(e),l=Rt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Zt(e,l,r),t!==null&&(lt(t,e,r,n),_i(t,e,r))}};function Oc(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!_l(n,r)||!_l(l,i):!0}function qf(e,t,n){var r=!1,l=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(l=Me(t)?On:Ce.current,r=t.contextTypes,i=(r=r!=null)?hr(e,l):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function eu(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},oa(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ye(i):(i=Me(t)?On:Ce.current,l.context=hr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qs(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Io.enqueueReplaceState(l,l.state,null),Qi(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var n="",r=t;do n+=yh(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function ep(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,du=r),tu(e,t)},n}function tp(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){tu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){tu(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Dc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wg;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=l0.bind(null,e,t,n),t.then(e,e))}function Mc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ac(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var Hg=Mt.ReactCurrentOwner,Ne=!1;function Pe(e,t,n,r){t.child=e===null?If(t,null,n,r):yr(t,e.child,n,r)}function zc(e,t,n,r,l){n=n.render;var i=t.ref;return dr(t,l),r=da(e,t,n,r,i,l),n=fa(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(q&&n&&qu(t),t.flags|=1,Pe(e,t,r,l),t.child)}function jc(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!xa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,np(e,t,i,r,l)):(e=Ri(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(o,r)&&e.ref===t.ref)return Dt(e,t,l)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function np(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(_l(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Dt(e,t,l)}return nu(e,t,n,r,l)}function rp(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(lr,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(lr,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(lr,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(lr,je),je|=r;return Pe(e,t,l,n),t.child}function lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function nu(e,t,n,r,l){var i=Me(n)?On:Ce.current;return i=hr(t,i),dr(t,l),n=da(e,t,n,r,i,l),r=fa(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(q&&r&&qu(t),t.flags|=1,Pe(e,t,n,l),t.child)}function Vc(e,t,n,r,l){if(Me(n)){var i=!0;Bi(t)}else i=!1;if(dr(t,l),t.stateNode===null)ki(e,t),qf(t,n,r),eu(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,a=n.contextType;typeof a=="object"&&a!==null?a=Ye(a):(a=Me(n)?On:Ce.current,a=hr(t,a));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==a)&&Nc(t,o,r,a),Ut=!1;var h=t.memoizedState;o.state=h,Qi(t,r,o,l),u=t.memoizedState,s!==r||h!==u||De.current||Ut?(typeof m=="function"&&(qs(t,n,m,r),u=t.memoizedState),(s=Ut||Oc(t,n,s,r,h,u,a))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=a,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Nf(e,t),s=t.memoizedProps,a=t.type===t.elementType?s:qe(t.type,s),o.props=a,p=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ye(u):(u=Me(n)?On:Ce.current,u=hr(t,u));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==u)&&Nc(t,o,r,u),Ut=!1,h=t.memoizedState,o.state=h,Qi(t,r,o,l);var _=t.memoizedState;s!==p||h!==_||De.current||Ut?(typeof g=="function"&&(qs(t,n,g,r),_=t.memoizedState),(a=Ut||Oc(t,n,a,r,h,_,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=u,r=a):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ru(e,t,n,r,i,l)}function ru(e,t,n,r,l,i){lp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ec(t,n,!1),Dt(e,t,i);r=t.stateNode,Hg.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=yr(t,e.child,null,i),t.child=yr(t,null,s,i)):Pe(e,t,s,i),t.memoizedState=r.state,l&&Ec(t,n,!0),t.child}function ip(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),sa(e,t.containerInfo)}function Fc(e,t,n,r,l){return gr(),ta(l),t.flags|=256,Pe(e,t,n,r),t.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,n){var r=t.pendingProps,l=ee.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(ee,l&1),e===null)return bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Do(o,r,0,null),e=kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=iu(n),t.memoizedState=lu,e):ha(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Kg(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=tn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=tn(s,i):(i=kn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?iu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=lu,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ha(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,r){return r!==null&&ta(r),yr(t,e.child,null,n),e=ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kg(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ps(Error(E(422))),ui(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Do({mode:"visible",children:r.children},l,0,null),i=kn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yr(t,e.child,null,o),t.child.memoizedState=iu(o),t.memoizedState=lu,i);if(!(t.mode&1))return ui(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=ps(i,r,void 0),ui(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ne||s){if(r=ge,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Nt(e,l),lt(r,e,l,-1))}return _a(),r=ps(Error(E(421))),ui(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=i0.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Fe=bt(l.nextSibling),Ue=t,q=!0,tt=null,e!==null&&(We[He++]=Et,We[He++]=kt,We[He++]=Nn,Et=e.id,kt=e.overflow,Nn=t),t=ha(t,r.children),t.flags|=4096,t)}function Uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zs(e.return,t,n)}function ms(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function sp(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,n,t);else if(e.tag===19)Uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ee,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ji(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ms(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ji(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ms(t,!0,n,null,i);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qg(e,t,n){switch(t.tag){case 3:ip(t),gr();break;case 5:Df(t);break;case 1:Me(t.type)&&Bi(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;J(Hi,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?op(e,t,n):(J(ee,ee.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);J(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sp(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,rp(e,t,n)}return Dt(e,t,n)}var up,ou,ap,cp;up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};ap=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Sn(ht.current);var i=null;switch(n){case"input":l=Ts(e,l),r=Ts(e,r),i=[];break;case"select":l=ne({},l,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":l=Os(e,l),r=Os(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ui)}Ds(n,r);var o;n=null;for(a in l)if(!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null)if(a==="style"){var s=l[a];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ml.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null));for(a in r){var u=r[a];if(s=l!=null?l[a]:void 0,r.hasOwnProperty(a)&&u!==s&&(u!=null||s!=null))if(a==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(a,n)),n=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(a,u)):a==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(ml.hasOwnProperty(a)?(u!=null&&a==="onScroll"&&X("scroll",e),i||s===u||(i=[])):(i=i||[]).push(a,u))}n&&(i=i||[]).push("style",n);var a=i;(t.updateQueue=a)&&(t.flags|=4)}};cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jg(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Me(t.type)&&$i(),xe(t),null;case 3:return r=t.stateNode,vr(),b(De),b(Ce),aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(mu(tt),tt=null))),ou(e,t),xe(t),null;case 5:ua(t);var l=Sn(Pl.current);if(n=t.type,e!==null&&t.stateNode!=null)ap(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return xe(t),null}if(e=Sn(ht.current),oi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[kl]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(l=0;l<Qr.length;l++)X(Qr[l],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Ya(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":ba(r,i),X("invalid",r)}Ds(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ii(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ii(r.textContent,s,e),l=["children",""+s]):ml.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":bl(r),Xa(r,i,!0);break;case"textarea":bl(r),Za(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ui)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[kl]=r,up(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ms(n,r),n){case"dialog":X("cancel",e),X("close",e),l=r;break;case"iframe":case"object":case"embed":X("load",e),l=r;break;case"video":case"audio":for(l=0;l<Qr.length;l++)X(Qr[l],e);l=r;break;case"source":X("error",e),l=r;break;case"img":case"image":case"link":X("error",e),X("load",e),l=r;break;case"details":X("toggle",e),l=r;break;case"input":Ya(e,r),l=Ts(e,r),X("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ne({},r,{value:void 0}),X("invalid",e);break;case"textarea":ba(e,r),l=Os(e,r),X("invalid",e);break;default:l=r}Ds(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Ud(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&hl(e,u):typeof u=="number"&&hl(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ml.hasOwnProperty(i)?u!=null&&i==="onScroll"&&X("scroll",e):u!=null&&Fu(e,i,u,o))}switch(n){case"input":bl(e),Xa(e,r,!1);break;case"textarea":bl(e),Za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ui)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Sn(Pl.current),Sn(ht.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return xe(t),null;case 13:if(b(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Fe!==null&&t.mode&1&&!(t.flags&128))Tf(),gr(),t.flags|=98560,i=!1;else if(i=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[pt]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else tt!==null&&(mu(tt),tt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):_a())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return vr(),ou(e,t),e===null&&xl(t.stateNode.containerInfo),xe(t),null;case 10:return la(t.type._context),xe(t),null;case 17:return Me(t.type)&&$i(),xe(t),null;case 19:if(b(ee),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)jr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ji(e),o!==null){for(t.flags|=128,jr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>Sr&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ji(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!q)return xe(t),null}else 2*le()-i.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=ee.current,J(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Sa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Yg(e,t){switch(ea(t),t.tag){case 1:return Me(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),b(De),b(Ce),aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(b(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ee),null;case 4:return vr(),null;case 10:return la(t.type._context),null;case 22:case 23:return Sa(),null;case 24:return null;default:return null}}var ai=!1,Ee=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,P=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function su(e,t,n){try{n()}catch(r){re(e,t,r)}}var $c=!1;function bg(e,t){if(Ws=ji,e=hf(),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,a=0,m=0,p=e,h=null;t:for(;;){for(var g;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++a===l&&(s=o),h===i&&++m===r&&(u=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hs={focusedElem:e,selectionRange:n},ji=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,O=_.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:qe(t.type,w),O);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){re(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return _=$c,$c=!1,_}function tl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&su(t,n,i)}l=l.next}while(l!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[kl],delete t[Js],delete t[Dg],delete t[Mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fp(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ui));else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}function cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}var ye=null,et=!1;function zt(e,t,n){for(n=n.child;n!==null;)pp(e,t,n),n=n.sibling}function pp(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:Ee||rr(n,t);case 6:var r=ye,l=et;ye=null,zt(e,t,n),ye=r,et=l,ye!==null&&(et?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(et?(e=ye,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),wl(e)):ss(ye,n.stateNode));break;case 4:r=ye,l=et,ye=n.stateNode.containerInfo,et=!0,zt(e,t,n),ye=r,et=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&su(n,t,o),l=l.next}while(l!==r)}zt(e,t,n);break;case 1:if(!Ee&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,zt(e,t,n),Ee=r):zt(e,t,n);break;default:zt(e,t,n)}}function Gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xg),t.forEach(function(r){var l=o0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,et=!1;break e;case 3:ye=s.stateNode.containerInfo,et=!0;break e;case 4:ye=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(ye===null)throw Error(E(160));pp(i,o,l),ye=null,et=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(a){re(l,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mp(t,e),t=t.sibling}function mp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),at(e),r&4){try{tl(3,e,e.return),Oo(3,e)}catch(w){re(e,e.return,w)}try{tl(5,e,e.return)}catch(w){re(e,e.return,w)}}break;case 1:be(t,e),at(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(be(t,e),at(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var l=e.stateNode;try{hl(l,"")}catch(w){re(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ad(l,i),Ms(s,o);var a=Ms(s,i);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?Ud(l,p):m==="dangerouslySetInnerHTML"?Vd(l,p):m==="children"?hl(l,p):Fu(l,m,p,a)}switch(s){case"input":Ls(l,i);break;case"textarea":zd(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?sr(l,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?sr(l,!!i.multiple,i.defaultValue,!0):sr(l,!!i.multiple,i.multiple?[]:"",!1))}l[kl]=i}catch(w){re(e,e.return,w)}}break;case 6:if(be(t,e),at(e),r&4){if(e.stateNode===null)throw Error(E(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){re(e,e.return,w)}}break;case 3:if(be(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(w){re(e,e.return,w)}break;case 4:be(t,e),at(e);break;case 13:be(t,e),at(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(va=le())),r&4&&Gc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(a=Ee)||m,be(t,e),Ee=a):be(t,e),at(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(p=P=m;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:tl(4,h,h.return);break;case 1:rr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(w){re(r,n,w)}}break;case 5:rr(h,h.return);break;case 22:if(h.memoizedState!==null){Hc(p);continue}}g!==null?(g.return=h,P=g):Hc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,a?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Fd("display",o))}catch(w){re(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(w){re(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:be(t,e),at(e),r&4&&Gc(e);break;case 21:break;default:be(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(hl(l,""),r.flags&=-33);var i=Bc(e);cu(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Bc(e);au(e,s,o);break;default:throw Error(E(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zg(e,t,n){P=e,hp(e)}function hp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||ai;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||Ee;s=ai;var a=Ee;if(ai=o,(Ee=u)&&!a)for(P=l;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?Kc(l):u!==null?(u.return=o,P=u):Kc(l);for(;i!==null;)P=i,hp(i),i=i.sibling;P=l,ai=s,Ee=a}Wc(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,P=i):Wc(e)}}function Wc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Tc(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var m=a.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&wl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ee||t.flags&512&&uu(t)}catch(h){re(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Hc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Kc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){re(t,l,u)}}var i=t.return;try{uu(t)}catch(u){re(t,i,u)}break;case 5:var o=t.return;try{uu(t)}catch(u){re(t,o,u)}}}catch(u){re(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var qg=Math.ceil,bi=Mt.ReactCurrentDispatcher,ga=Mt.ReactCurrentOwner,Je=Mt.ReactCurrentBatchConfig,U=0,ge=null,oe=null,we=0,je=0,lr=an(0),ce=0,Il=null,Mn=0,No=0,ya=0,nl=null,Oe=null,va=0,Sr=1/0,St=null,Zi=!1,du=null,qt=null,ci=!1,Kt=null,qi=0,rl=0,fu=null,Ci=-1,Pi=0;function Re(){return U&6?le():Ci!==-1?Ci:Ci=le()}function en(e){return e.mode&1?U&2&&we!==0?we&-we:zg.transition!==null?(Pi===0&&(Pi=Zd()),Pi):(e=H,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function lt(e,t,n,r){if(50<rl)throw rl=0,fu=null,Error(E(185));Vl(e,n,r),(!(U&2)||e!==ge)&&(e===ge&&(!(U&2)&&(No|=n),ce===4&&Gt(e,we)),Ae(e,r),n===1&&U===0&&!(t.mode&1)&&(Sr=le()+500,To&&cn()))}function Ae(e,t){var n=e.callbackNode;zh(e,t);var r=zi(e,e===ge?we:0);if(r===0)n!==null&&tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tc(n),t===1)e.tag===0?Ag(Qc.bind(null,e)):Cf(Qc.bind(null,e)),Og(function(){!(U&6)&&cn()}),n=null;else{switch(qd(r)){case 1:n=Wu;break;case 4:n=Xd;break;case 16:n=Ai;break;case 536870912:n=bd;break;default:n=Ai}n=Ep(n,gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gp(e,t){if(Ci=-1,Pi=0,U&6)throw Error(E(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=zi(e,e===ge?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var l=U;U|=2;var i=vp();(ge!==e||we!==t)&&(St=null,Sr=le()+500,En(e,t));do try{n0();break}catch(s){yp(e,s)}while(!0);ra(),bi.current=i,U=l,oe!==null?t=0:(ge=null,we=0,t=ce)}if(t!==0){if(t===2&&(l=Fs(e),l!==0&&(r=l,t=pu(e,l))),t===1)throw n=Il,En(e,0),Gt(e,r),Ae(e,le()),n;if(t===6)Gt(e,r);else{if(l=e.current.alternate,!(r&30)&&!e0(l)&&(t=eo(e,r),t===2&&(i=Fs(e),i!==0&&(r=i,t=pu(e,i))),t===1))throw n=Il,En(e,0),Gt(e,r),Ae(e,le()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:hn(e,Oe,St);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=va+500-le(),10<t)){if(zi(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Qs(hn.bind(null,e,Oe,St),t);break}hn(e,Oe,St);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qg(r/1960))-r,10<r){e.timeoutHandle=Qs(hn.bind(null,e,Oe,St),r);break}hn(e,Oe,St);break;case 5:hn(e,Oe,St);break;default:throw Error(E(329))}}}return Ae(e,le()),e.callbackNode===n?gp.bind(null,e):null}function pu(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=eo(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&mu(t)),e}function mu(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function e0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!ot(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~ya,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Qc(e){if(U&6)throw Error(E(327));fr();var t=zi(e,0);if(!(t&1))return Ae(e,le()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=Fs(e);r!==0&&(t=r,n=pu(e,r))}if(n===1)throw n=Il,En(e,0),Gt(e,t),Ae(e,le()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Oe,St),Ae(e,le()),null}function wa(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Sr=le()+500,To&&cn())}}function An(e){Kt!==null&&Kt.tag===0&&!(U&6)&&fr();var t=U;U|=1;var n=Je.transition,r=H;try{if(Je.transition=null,H=1,e)return e()}finally{H=r,Je.transition=n,U=t,!(U&6)&&cn()}}function Sa(){je=lr.current,b(lr)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ig(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:vr(),b(De),b(Ce),aa();break;case 5:ua(r);break;case 4:vr();break;case 13:b(ee);break;case 19:b(ee);break;case 10:la(r.type._context);break;case 22:case 23:Sa()}n=n.return}if(ge=e,oe=e=tn(e.current,null),we=je=t,ce=0,Il=null,ya=No=Mn=0,Oe=nl=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}wn=null}return e}function yp(e,t){do{var n=oe;try{if(ra(),xi.current=Xi,Yi){for(var r=te.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yi=!1}if(Dn=0,me=se=te=null,el=!1,Rl=0,ga.current=null,n===null||n.return===null){ce=1,Il=t,oe=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=we,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Mc(o);if(g!==null){g.flags&=-257,Ac(g,o,s,i,t),g.mode&1&&Dc(i,a,t),t=g,u=a;var _=t.updateQueue;if(_===null){var w=new Set;w.add(u),t.updateQueue=w}else _.add(u);break e}else{if(!(t&1)){Dc(i,a,t),_a();break e}u=Error(E(426))}}else if(q&&s.mode&1){var O=Mc(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ac(O,o,s,i,t),ta(wr(u,s));break e}}i=u=wr(u,s),ce!==4&&(ce=2),nl===null?nl=[i]:nl.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=ep(i,u,t);Rc(i,d);break e;case 1:s=u;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qt===null||!qt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=tp(i,s,t);Rc(i,S);break e}}i=i.return}while(i!==null)}Sp(n)}catch(k){t=k,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function vp(){var e=bi.current;return bi.current=Xi,e===null?Xi:e}function _a(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||!(Mn&268435455)&&!(No&268435455)||Gt(ge,we)}function eo(e,t){var n=U;U|=2;var r=vp();(ge!==e||we!==t)&&(St=null,En(e,t));do try{t0();break}catch(l){yp(e,l)}while(!0);if(ra(),U=n,bi.current=r,oe!==null)throw Error(E(261));return ge=null,we=0,ce}function t0(){for(;oe!==null;)wp(oe)}function n0(){for(;oe!==null&&!Rh();)wp(oe)}function wp(e){var t=xp(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Sp(e):oe=t,ga.current=null}function Sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yg(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,oe=null;return}}else if(n=Jg(n,t,je),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ce===0&&(ce=5)}function hn(e,t,n){var r=H,l=Je.transition;try{Je.transition=null,H=1,r0(e,t,n,r)}finally{Je.transition=l,H=r}return null}function r0(e,t,n,r){do fr();while(Kt!==null);if(U&6)throw Error(E(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jh(e,i),e===ge&&(oe=ge=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ci||(ci=!0,Ep(Ai,function(){return fr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var o=H;H=1;var s=U;U|=4,ga.current=null,bg(e,n),mp(n,e),Eg(Hs),ji=!!Ws,Hs=Ws=null,e.current=n,Zg(n),Th(),U=s,H=o,Je.transition=i}else e.current=n;if(ci&&(ci=!1,Kt=e,qi=l),i=e.pendingLanes,i===0&&(qt=null),Oh(n.stateNode),Ae(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zi)throw Zi=!1,e=du,du=null,e;return qi&1&&e.tag!==0&&fr(),i=e.pendingLanes,i&1?e===fu?rl++:(rl=0,fu=e):rl=0,cn(),null}function fr(){if(Kt!==null){var e=qd(qi),t=Je.transition,n=H;try{if(Je.transition=null,H=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,qi=0,U&6)throw Error(E(331));var l=U;for(U|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var a=s[u];for(P=a;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:tl(8,m,i)}var p=m.child;if(p!==null)p.return=m,P=p;else for(;P!==null;){m=P;var h=m.sibling,g=m.return;if(dp(m),m===a){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var _=i.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var O=w.sibling;w.sibling=null,w=O}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tl(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){o=P;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,P=f;else e:for(o=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oo(9,s)}}catch(k){re(s,s.return,k)}if(s===o){P=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,P=S;break e}P=s.return}}if(U=l,cn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{H=n,Je.transition=t}}return!1}function Jc(e,t,n){t=wr(n,t),t=ep(e,t,1),e=Zt(e,t,1),t=Re(),e!==null&&(Vl(e,1,t),Ae(e,t))}function re(e,t,n){if(e.tag===3)Jc(e,e,n);else for(;t!==null;){if(t.tag===3){Jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=wr(n,e),e=tp(t,e,1),t=Zt(t,e,1),e=Re(),t!==null&&(Vl(t,1,e),Ae(t,e));break}}t=t.return}}function l0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(we&n)===n&&(ce===4||ce===3&&(we&130023424)===we&&500>le()-va?En(e,0):ya|=n),Ae(e,t)}function _p(e,t){t===0&&(e.mode&1?(t=ei,ei<<=1,!(ei&130023424)&&(ei=4194304)):t=1);var n=Re();e=Nt(e,t),e!==null&&(Vl(e,t,n),Ae(e,n))}function i0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_p(e,n)}function o0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),_p(e,n)}var xp;xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,Qg(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,q&&t.flags&1048576&&Pf(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var l=hr(t,Ce.current);dr(t,n),l=da(null,t,r,e,l,n);var i=fa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Bi(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,oa(t),l.updater=Io,t.stateNode=l,l._reactInternals=t,eu(t,r,e,n),t=ru(null,t,r,!0,i,n)):(t.tag=0,q&&i&&qu(t),Pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=u0(r),e=qe(r,e),l){case 0:t=nu(null,t,r,e,n);break e;case 1:t=Vc(null,t,r,e,n);break e;case 11:t=zc(null,t,r,e,n);break e;case 14:t=jc(null,t,r,qe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:qe(r,l),nu(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:qe(r,l),Vc(e,t,r,l,n);case 3:e:{if(ip(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Nf(e,t),Qi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=wr(Error(E(423)),t),t=Fc(e,t,r,n,l);break e}else if(r!==l){l=wr(Error(E(424)),t),t=Fc(e,t,r,n,l);break e}else for(Fe=bt(t.stateNode.containerInfo.firstChild),Ue=t,q=!0,tt=null,n=If(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===l){t=Dt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Df(t),e===null&&bs(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ks(r,l)?o=null:i!==null&&Ks(r,i)&&(t.flags|=32),lp(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&bs(t),null;case 13:return op(e,t,n);case 4:return sa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:qe(r,l),zc(e,t,r,l,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,J(Hi,r._currentValue),r._currentValue=o,i!==null)if(ot(i.value,o)){if(i.children===l.children&&!De.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Rt(-1,n&-n),u.tag=2;var a=i.updateQueue;if(a!==null){a=a.shared;var m=a.pending;m===null?u.next=u:(u.next=m.next,m.next=u),a.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Zs(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(E(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Zs(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,dr(t,n),l=Ye(l),r=r(l),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,l=qe(r,t.pendingProps),l=qe(r.type,l),jc(e,t,r,l,n);case 15:return np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:qe(r,l),ki(e,t),t.tag=1,Me(r)?(e=!0,Bi(t)):e=!1,dr(t,n),qf(t,r,l),eu(t,r,l,n),ru(null,t,r,!0,e,n);case 19:return sp(e,t,n);case 22:return rp(e,t,n)}throw Error(E(156,t.tag))};function Ep(e,t){return Yd(e,t)}function s0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new s0(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u0(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$u)return 11;if(e===Bu)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")xa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jn:return kn(n.children,l,i,t);case Uu:o=8,l|=8;break;case ks:return e=Qe(12,n,t,l|2),e.elementType=ks,e.lanes=i,e;case Cs:return e=Qe(13,n,t,l),e.elementType=Cs,e.lanes=i,e;case Ps:return e=Qe(19,n,t,l),e.elementType=Ps,e.lanes=i,e;case Nd:return Do(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Id:o=10;break e;case Od:o=9;break e;case $u:o=11;break e;case Bu:o=14;break e;case Ft:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Qe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function kn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Nd,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function a0(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,r,l,i,o,s,u){return e=new a0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oa(i),e}function c0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kp(e){if(!e)return rn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Me(n))return kf(e,n,t)}return t}function Cp(e,t,n,r,l,i,o,s,u){return e=Ea(n,r,!0,e,l,i,o,s,u),e.context=kp(null),n=e.current,r=Re(),l=en(n),i=Rt(r,l),i.callback=t??null,Zt(n,i,l),e.current.lanes=l,Vl(e,l,r),Ae(e,r),e}function Mo(e,t,n,r){var l=t.current,i=Re(),o=en(l);return n=kp(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(l,t,o),e!==null&&(lt(e,l,o,i),_i(e,l,o)),o}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ka(e,t){Yc(e,t),(e=e.alternate)&&Yc(e,t)}function d0(){return null}var Pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}Ao.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Mo(e,t,null,null)};Ao.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Mo(null,e,null,null)}),t[Ot]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&lf(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function f0(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var a=to(o);i.call(a)}}var o=Cp(t,r,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=o,e[Ot]=o.current,xl(e.nodeType===8?e.parentNode:e),An(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var a=to(u);s.call(a)}}var u=Ea(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=u,e[Ot]=u.current,xl(e.nodeType===8?e.parentNode:e),An(function(){Mo(t,u,n,r)}),u}function jo(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=to(o);s.call(u)}}Mo(t,o,e,l)}else o=f0(n,t,e,l,r);return to(o)}ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(Hu(t,n|1),Ae(t,le()),!(U&6)&&(Sr=le()+500,cn()))}break;case 13:An(function(){var r=Nt(e,1);if(r!==null){var l=Re();lt(r,e,1,l)}}),ka(e,1)}};Ku=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Re();lt(t,e,134217728,n)}ka(e,134217728)}};tf=function(e){if(e.tag===13){var t=en(e),n=Nt(e,t);if(n!==null){var r=Re();lt(n,e,t,r)}ka(e,t)}};nf=function(){return H};rf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};zs=function(e,t,n){switch(t){case"input":if(Ls(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ro(r);if(!l)throw Error(E(90));Md(r),Ls(r,l)}}}break;case"textarea":zd(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};Gd=wa;Wd=An;var p0={usingClientEntryPoint:!1,Events:[Ul,Zn,Ro,$d,Bd,wa]},Vr={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!di.isDisabled&&di.supportsFiber)try{Eo=di.inject(m0),mt=di}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(E(200));return c0(e,t,null,n)};Be.createRoot=function(e,t){if(!Pa(e))throw Error(E(299));var n=!1,r="",l=Pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,r,l),e[Ot]=t.current,xl(e.nodeType===8?e.parentNode:e),new Ca(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Qd(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return An(e)};Be.hydrate=function(e,t,n){if(!zo(t))throw Error(E(200));return jo(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!Pa(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Pp;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cp(t,null,e,1,n??null,l,!1,i,o),e[Ot]=t.current,xl(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ao(t)};Be.render=function(e,t,n){if(!zo(t))throw Error(E(200));return jo(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!zo(e))throw Error(E(40));return e._reactRootContainer?(An(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Be.unstable_batchedUpdates=wa;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return jo(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp)}catch(e){console.error(e)}}Rp(),Pd.exports=Be;var h0=Pd.exports,Tp,bc=h0;Tp=bc.createRoot,bc.hydrateRoot;function g0(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function y0(...e){return t=>e.forEach(n=>g0(n,t))}var Lp=D.forwardRef((e,t)=>{const{children:n,...r}=e,l=D.Children.toArray(n),i=l.find(w0);if(i){const o=i.props.children,s=l.map(u=>u===i?D.Children.count(o)>1?D.Children.only(null):D.isValidElement(o)?o.props.children:null:u);return M.jsx(hu,{...r,ref:t,children:D.isValidElement(o)?D.cloneElement(o,void 0,s):null})}return M.jsx(hu,{...r,ref:t,children:n})});Lp.displayName="Slot";var hu=D.forwardRef((e,t)=>{const{children:n,...r}=e;if(D.isValidElement(n)){const l=_0(n);return D.cloneElement(n,{...S0(r,n.props),ref:t?y0(t,l):l})}return D.Children.count(n)>1?D.Children.only(null):null});hu.displayName="SlotClone";var v0=({children:e})=>M.jsx(M.Fragment,{children:e});function w0(e){return D.isValidElement(e)&&e.type===v0}function S0(e,t){const n={...t};for(const r in t){const l=e[r],i=t[r];/^on[A-Z]/.test(r)?l&&i?n[r]=(...s)=>{i(...s),l(...s)}:l&&(n[r]=l):r==="style"?n[r]={...l,...i}:r==="className"&&(n[r]=[l,i].filter(Boolean).join(" "))}return{...e,...n}}function _0(e){var r,l;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ip(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ip(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function x0(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ip(e))&&(r&&(r+=" "),r+=t);return r}const Zc=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,qc=x0,E0=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return qc(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:l,defaultVariants:i}=t,o=Object.keys(l).map(a=>{const m=n==null?void 0:n[a],p=i==null?void 0:i[a];if(m===null)return null;const h=Zc(m)||Zc(p);return l[a][h]}),s=n&&Object.entries(n).reduce((a,m)=>{let[p,h]=m;return h===void 0||(a[p]=h),a},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((a,m)=>{let{class:p,className:h,...g}=m;return Object.entries(g).every(_=>{let[w,O]=_;return Array.isArray(O)?O.includes({...i,...s}[w]):{...i,...s}[w]===O})?[...a,p,h]:a},[]);return qc(e,o,u,n==null?void 0:n.class,n==null?void 0:n.className)};function Op(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=Op(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function k0(){for(var e,t,n=0,r="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=Op(e))&&(r&&(r+=" "),r+=t);return r}const Ra="-",C0=e=>{const t=R0(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const s=o.split(Ra);return s[0]===""&&s.length!==1&&s.shift(),Np(s,t)||P0(o)},getConflictingClassGroupIds:(o,s)=>{const u=n[o]||[];return s&&r[o]?[...u,...r[o]]:u}}},Np=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),l=r?Np(e.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const i=e.join(Ra);return(o=t.validators.find(({validator:s})=>s(i)))==null?void 0:o.classGroupId},ed=/^\[(.+)\]$/,P0=e=>{if(ed.test(e)){const t=ed.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},R0=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return L0(Object.entries(e.classGroups),n).forEach(([i,o])=>{gu(o,r,i,t)}),r},gu=(e,t,n,r)=>{e.forEach(l=>{if(typeof l=="string"){const i=l===""?t:td(t,l);i.classGroupId=n;return}if(typeof l=="function"){if(T0(l)){gu(l(r),t,n,r);return}t.validators.push({validator:l,classGroupId:n});return}Object.entries(l).forEach(([i,o])=>{gu(o,td(t,i),n,r)})})},td=(e,t)=>{let n=e;return t.split(Ra).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},T0=e=>e.isThemeGetter,L0=(e,t)=>t?e.map(([n,r])=>{const l=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,s])=>[t+o,s])):i);return[n,l]}):e,I0=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const l=(i,o)=>{n.set(i,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return l(i,o),o},set(i,o){n.has(i)?n.set(i,o):l(i,o)}}},Dp="!",O0=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,l=t[0],i=t.length,o=s=>{const u=[];let a=0,m=0,p;for(let O=0;O<s.length;O++){let d=s[O];if(a===0){if(d===l&&(r||s.slice(O,O+i)===t)){u.push(s.slice(m,O)),m=O+i;continue}if(d==="/"){p=O;continue}}d==="["?a++:d==="]"&&a--}const h=u.length===0?s:s.substring(m),g=h.startsWith(Dp),_=g?h.substring(1):h,w=p&&p>m?p-m:void 0;return{modifiers:u,hasImportantModifier:g,baseClassName:_,maybePostfixModifierPosition:w}};return n?s=>n({className:s,parseClassName:o}):o},N0=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},D0=e=>({cache:I0(e.cacheSize),parseClassName:O0(e),...C0(e)}),M0=/\s+/,A0=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:l}=t,i=[],o=e.trim().split(M0);let s="";for(let u=o.length-1;u>=0;u-=1){const a=o[u],{modifiers:m,hasImportantModifier:p,baseClassName:h,maybePostfixModifierPosition:g}=n(a);let _=!!g,w=r(_?h.substring(0,g):h);if(!w){if(!_){s=a+(s.length>0?" "+s:s);continue}if(w=r(h),!w){s=a+(s.length>0?" "+s:s);continue}_=!1}const O=N0(m).join(":"),d=p?O+Dp:O,c=d+w;if(i.includes(c))continue;i.push(c);const f=l(w,_);for(let S=0;S<f.length;++S){const k=f[S];i.push(d+k)}s=a+(s.length>0?" "+s:s)}return s};function z0(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Mp(t))&&(r&&(r+=" "),r+=n);return r}const Mp=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Mp(e[r]))&&(n&&(n+=" "),n+=t);return n};function j0(e,...t){let n,r,l,i=o;function o(u){const a=t.reduce((m,p)=>p(m),e());return n=D0(a),r=n.cache.get,l=n.cache.set,i=s,s(u)}function s(u){const a=r(u);if(a)return a;const m=A0(u,n);return l(u,m),m}return function(){return i(z0.apply(null,arguments))}}const Y=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Ap=/^\[(?:([a-z-]+):)?(.+)\]$/i,V0=/^\d+\/\d+$/,F0=new Set(["px","full","screen"]),U0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,B0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,G0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,W0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,vt=e=>pr(e)||F0.has(e)||V0.test(e),jt=e=>Lr(e,"length",Z0),pr=e=>!!e&&!Number.isNaN(Number(e)),ys=e=>Lr(e,"number",pr),Fr=e=>!!e&&Number.isInteger(Number(e)),H0=e=>e.endsWith("%")&&pr(e.slice(0,-1)),z=e=>Ap.test(e),Vt=e=>U0.test(e),K0=new Set(["length","size","percentage"]),Q0=e=>Lr(e,K0,zp),J0=e=>Lr(e,"position",zp),Y0=new Set(["image","url"]),X0=e=>Lr(e,Y0,ey),b0=e=>Lr(e,"",q0),Ur=()=>!0,Lr=(e,t,n)=>{const r=Ap.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Z0=e=>$0.test(e)&&!B0.test(e),zp=()=>!1,q0=e=>G0.test(e),ey=e=>W0.test(e),ty=()=>{const e=Y("colors"),t=Y("spacing"),n=Y("blur"),r=Y("brightness"),l=Y("borderColor"),i=Y("borderRadius"),o=Y("borderSpacing"),s=Y("borderWidth"),u=Y("contrast"),a=Y("grayscale"),m=Y("hueRotate"),p=Y("invert"),h=Y("gap"),g=Y("gradientColorStops"),_=Y("gradientColorStopPositions"),w=Y("inset"),O=Y("margin"),d=Y("opacity"),c=Y("padding"),f=Y("saturate"),S=Y("scale"),k=Y("sepia"),T=Y("skew"),R=Y("space"),L=Y("translate"),K=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],de=()=>["auto",z,t],F=()=>[z,t],st=()=>["",vt,jt],yt=()=>["auto",pr,z],Gn=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ut=()=>["solid","dashed","dotted","double","none"],At=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],v=()=>["start","end","center","between","around","evenly","stretch"],x=()=>["","0",z],N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>[pr,z];return{cacheSize:500,separator:":",theme:{colors:[Ur],spacing:[vt,jt],blur:["none","",Vt,z],brightness:B(),borderColor:[e],borderRadius:["none","","full",Vt,z],borderSpacing:F(),borderWidth:st(),contrast:B(),grayscale:x(),hueRotate:B(),invert:x(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[H0,jt],inset:de(),margin:de(),opacity:B(),padding:F(),saturate:B(),scale:B(),sepia:x(),skew:B(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[Vt]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Gn(),z]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Fr,z]}],basis:[{basis:de()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:x()}],shrink:[{shrink:x()}],order:[{order:["first","last","none",Fr,z]}],"grid-cols":[{"grid-cols":[Ur]}],"col-start-end":[{col:["auto",{span:["full",Fr,z]},z]}],"col-start":[{"col-start":yt()}],"col-end":[{"col-end":yt()}],"grid-rows":[{"grid-rows":[Ur]}],"row-start-end":[{row:["auto",{span:[Fr,z]},z]}],"row-start":[{"row-start":yt()}],"row-end":[{"row-end":yt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...v()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...v(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...v(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[c]}],px:[{px:[c]}],py:[{py:[c]}],ps:[{ps:[c]}],pe:[{pe:[c]}],pt:[{pt:[c]}],pr:[{pr:[c]}],pb:[{pb:[c]}],pl:[{pl:[c]}],m:[{m:[O]}],mx:[{mx:[O]}],my:[{my:[O]}],ms:[{ms:[O]}],me:[{me:[O]}],mt:[{mt:[O]}],mr:[{mr:[O]}],mb:[{mb:[O]}],ml:[{ml:[O]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",z,t]}],"min-w":[{"min-w":[z,t,"min","max","fit"]}],"max-w":[{"max-w":[z,t,"none","full","min","max","fit","prose",{screen:[Vt]},Vt]}],h:[{h:[z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Vt,jt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ys]}],"font-family":[{font:[Ur]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",pr,ys]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",vt,z]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ut(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",vt,jt]}],"underline-offset":[{"underline-offset":["auto",vt,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Gn(),J0]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Q0]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},X0]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...ut(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:ut()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...ut()]}],"outline-offset":[{"outline-offset":[vt,z]}],"outline-w":[{outline:[vt,jt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:st()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[vt,jt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Vt,b0]}],"shadow-color":[{shadow:[Ur]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...At(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":At()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Vt,z]}],grayscale:[{grayscale:[a]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[p]}],saturate:[{saturate:[f]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[a]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[f]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Fr,z]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[vt,jt,ys]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ny=j0(ty);function ry(...e){return ny(k0(e))}const ly=E0("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Ze=D.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...l},i)=>{const o=r?Lp:"button";return M.jsx(o,{className:ry(ly({variant:t,size:n,className:e})),ref:i,...l})});Ze.displayName="Button";const iy="modulepreload",oy=function(e,t){return new URL(e,t).href},nd={},y=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(n.map(a=>{if(a=oy(a,r),a in nd)return;nd[a]=!0;const m=a.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(!!r)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===a&&(!m||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":iy,m||(g.as="script"),g.crossOrigin="",g.href=a,u&&g.setAttribute("nonce",u),document.head.appendChild(g),m)return new Promise((_,w)=>{g.addEventListener("load",_),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return l.then(o=>{for(const s of o||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function ln(e,t=0,n=1){return Math.max(t,Math.min(e,n))}function no(e,t,n){const r=n-t,l=e-t;if(l>=0)return l%r+t;{let i=r+l%r+t;return i>=n&&(i-=r),i}}function ro(e,t,n){return t<=e&&e<n}function jp(e){return[...Array(e).keys()]}function Vp(e,t){return jp(e).map(n=>t(n))}function Fp(e,t){let n=[];for(let r=0,l=0;r<e.length;l++)t(e[r],l)?(n.push(e[r]),e.splice(r,1)):r++;return n}function Up(e){return[...e].reduce((t,[n,r])=>(t[n]=r,t),{})}function $p(e){return Object.keys(e).map(t=>[t,e[t]])}function sy(e,t){return String.fromCharCode(e.charCodeAt(0)+t)}function $r(e){return e.x!=null&&e.y!=null}class G{constructor(t,n){this.x=0,this.y=0,this.set(t,n)}set(t=0,n=0){return $r(t)?(this.x=t.x,this.y=t.y,this):(this.x=t,this.y=n,this)}add(t,n){return $r(t)?(this.x+=t.x,this.y+=t.y,this):(this.x+=t,this.y+=n,this)}sub(t,n){return $r(t)?(this.x-=t.x,this.y-=t.y,this):(this.x-=t,this.y-=n,this)}mul(t){return this.x*=t,this.y*=t,this}div(t){return this.x/=t,this.y/=t,this}clamp(t,n,r,l){return this.x=ln(this.x,t,n),this.y=ln(this.y,r,l),this}wrap(t,n,r,l){return this.x=no(this.x,t,n),this.y=no(this.y,r,l),this}addWithAngle(t,n){return this.x+=Math.cos(t)*n,this.y+=Math.sin(t)*n,this}swapXy(){const t=this.x;return this.x=this.y,this.y=t,this}normalize(){return this.div(this.length),this}rotate(t){if(t===0)return this;const n=this.x;return this.x=n*Math.cos(t)-this.y*Math.sin(t),this.y=n*Math.sin(t)+this.y*Math.cos(t),this}angleTo(t,n){return $r(t)?Math.atan2(t.y-this.y,t.x-this.x):Math.atan2(n-this.y,t-this.x)}distanceTo(t,n){let r,l;return $r(t)?(r=t.x-this.x,l=t.y-this.y):(r=t-this.x,l=n-this.y),Math.sqrt(r*r+l*l)}isInRect(t,n,r,l){return ro(this.x,t,t+r)&&ro(this.y,n,n+l)}equals(t){return this.x===t.x&&this.y===t.y}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}get angle(){return Math.atan2(this.y,this.x)}}const Bp=["transparent","white","red","green","yellow","blue","purple","cyan","black","light_red","light_green","light_yellow","light_blue","light_purple","light_cyan","light_black"],uy="twrgybpclRGYBPCL";let ll;const ay=[15658734,15277667,5025616,16761095,4149685,10233776,240116,6381921];function cy(e){const[t,n,r]=vs(0,e);if(ll=Up(Bp.map((l,i)=>{if(i<1)return[l,{r:0,g:0,b:0,a:0}];if(i<9){const[a,m,p]=vs(i-1,e);return[l,{r:a,g:m,b:p,a:1}]}const[o,s,u]=vs(i-9+1,e);return[l,{r:Math.floor(e?o*.5:t-(t-o)*.5),g:Math.floor(e?s*.5:r-(r-s)*.5),b:Math.floor(e?u*.5:n-(n-u)*.5),a:1}]})),e){const l=ll.blue;ll.white={r:Math.floor(l.r*.15),g:Math.floor(l.g*.15),b:Math.floor(l.b*.15),a:1}}}function vs(e,t){t&&(e===0?e=7:e===7&&(e=0));const n=ay[e];return[(n&16711680)>>16,(n&65280)>>8,n&255]}function _r(e,t=1){const n=ll[e];return Math.floor(n.r*t)<<16|Math.floor(n.g*t)<<8|Math.floor(n.b*t)}function Ol(e,t=1){const n=ll[e],r=Math.floor(n.r*t),l=Math.floor(n.g*t),i=Math.floor(n.b*t);return n.a<1?`rgba(${r},${l},${i},${n.a})`:`rgb(${r},${l},${i})`}const dy=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float width;
uniform float height;

float gridValue(vec2 uv, float res) {
  vec2 grid = fract(uv * res);
  return (step(res, grid.x) * step(res, grid.y));
}

void main(void) {
  vec4 color = texture2D(uSampler, vTextureCoord);  
  vec2 grid_uv = vTextureCoord.xy * vec2(width, height);
  float v = gridValue(grid_uv, 0.2);
  gl_FragColor.rgba = color * v;
}
`;function fy(e,t){return new PIXI.Filter(void 0,dy,{width:e,height:t})}const $=new G;let ue,it,Q,pe=new G;const rd=5;document.createElement("img");let ie,il,ol=1,yu="black",ke,Gp,xr=!1,W,Wp,xt,Hp,Kp;const lo=new G(100,6*5);function py(e,t,n,r,l,i,o,s){$.set(e),W=s,yu=n;const u=`
position: absolute;
left: 50%;
top: 60%;
transform: translate(-50%, -50%);
`,a=`
image-rendering: -moz-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: -o-crisp-edges;
image-rendering: pixelated;
`,m=`
position: absolute;
left: 50%;
top: 12%;
transform: translate(-50%, -50%);
`;if(pe.set($),W.isUsingPixi){pe.mul(rd);const p=new PIXI.Application({width:pe.x,height:pe.y});if(ue=p.view,Q=new PIXI.Graphics,Q.scale.x=Q.scale.y=rd,PIXI.settings.SCALE_MODE=PIXI.SCALE_MODES.NEAREST,p.stage.addChild(Q),Q.filters=[],W.name==="crt"&&Q.filters.push(Wp=new PIXI.filters.CRTFilter({vignettingAlpha:.7})),W.name==="pixel"&&Q.filters.push(fy(pe.x,pe.y)),W.name==="pixel"||W.name==="shapeDark"){const h=new PIXI.filters.AdvancedBloomFilter({threshold:.1,bloomScale:W.name==="pixel"?1.5:1,brightness:W.name==="pixel"?1.5:1,blur:8});Q.filters.push(h)}Q.lineStyle(0),ue.style.cssText=u}else ue=document.createElement("canvas"),ue.width=pe.x,ue.height=pe.y,Kp=it=ue.getContext("2d"),it.imageSmoothingEnabled=!1,ue.style.cssText=u+a;if(document.body.appendChild(ue),xt=document.createElement("canvas"),Hp=xt.getContext("2d"),xt.width=lo.x,xt.height=lo.y,xt.style.cssText=m+a,document.body.appendChild(xt),window.addEventListener("resize",vu),vu(),r){ie=document.createElement("canvas");let p;l?(ie.width=pe.x,ie.height=pe.y,p=i):(pe.x<=pe.y*2?(ie.width=pe.y*2,ie.height=pe.y):(ie.width=pe.x,ie.height=pe.x/2),ie.width>400&&(ol=400/ie.width,ie.width=400,ie.height*=ol),p=Math.round(400/ie.width)),il=ie.getContext("2d"),il.fillStyle=t,gcc.setOptions({scale:p,capturingFps:60,isSmoothingEnabled:!1,durationSec:o})}}function ld(){it=Kp}function my(){it=Hp}function hy(){window.removeEventListener("resize",vu),document.body.removeChild(ue),document.body.removeChild(xt),ue=void 0}function vu(){const t=innerWidth/innerHeight,n=pe.x/pe.y,r=t<n,l=r?.7*innerWidth:.7*innerHeight*n,i=r?.7*innerWidth/n:.7*innerHeight;ue.style.width=`${l}px`,ue.style.height=`${i}px`,xt.style.width=`${Math.floor(l*lo.x/$.x)}px`,xt.style.height=`${Math.floor(i*lo.y/$.y)}px`}function Bl(){if(W.isUsingPixi){Q.clear(),Q.beginFill(_r(yu,W.isDarkColor?.15:1)),Q.drawRect(0,0,$.x,$.y),Q.endFill(),Q.beginFill(_r(ke)),xr=!0;return}it.fillStyle=Ol(yu,W.isDarkColor?.15:1),it.fillRect(0,0,$.x,$.y),it.fillStyle=Ol(ke)}function Tt(e){if(e===ke){W.isUsingPixi&&!xr&&io(_r(ke));return}if(ke=e,W.isUsingPixi){xr&&Q.endFill(),io(_r(ke));return}it.fillStyle=Ol(e)}function io(e){Vo(),Q.beginFill(e),xr=!0}function Vo(){xr&&(Q.endFill(),xr=!1)}function Gl(){Gp=ke}function Wl(){Tt(Gp)}function sl(e,t,n,r){if(W.isUsingPixi){W.name==="shape"||W.name==="shapeDark"?Q.drawRoundedRect(e,t,n,r,2):Q.drawRect(e,t,n,r);return}it.fillRect(e,t,n,r)}function gy(e,t,n,r,l){const i=_r(ke);io(i),Q.drawCircle(e,t,l*.5),Q.drawCircle(n,r,l*.5),Vo(),Q.lineStyle(l,i),Q.moveTo(e,t),Q.lineTo(n,r),Q.lineStyle(0)}function yy(){Wp.time+=.2}function vy(){if(il.fillRect(0,0,ie.width,ie.height),ol===1)il.drawImage(ue,(ie.width-ue.width)/2,(ie.height-ue.height)/2);else{const e=ue.width*ol,t=ue.height*ol;il.drawImage(ue,(ie.width-e)/2,(ie.height-t)/2,e,t)}gcc.capture(ie)}const id=[`
l
l
l

l
`,`
l l
l l



`,`
 l l
lllll
 l l
lllll
 l l
`,`
 lll
l l
 lll
  l l
 lll
`,`
l   l
l  l
  l
 l  l
l   l
`,`
 l
l l
 ll l
l  l
 ll l
`,`
l
l



`,`
 l
l
l
l
 l
`,`
l
 l
 l
 l
l
`,`
  l
l l l
 lll
l l l
  l
`,`
  l
  l
lllll
  l
  l
`,`



 l
l
`,`


lllll


`,`




l
`,`
    l
   l
  l
 l
l
`,`
 lll
l  ll
l l l
ll  l
 lll
`,`
 ll
l l
  l
  l
lllll
`,`
 lll
l   l
  ll
 l
lllll
`,`
llll
    l
  ll
    l
llll
`,`
  ll
 l l
l  l
lllll
   l
`,`
lllll
l
llll
    l
llll
`,`
 lll
l
llll
l   l
 lll
`,`
lllll
l   l
   l
  l
 l
`,`
 lll
l   l
 lll
l   l
 lll
`,`
 lll
l   l
 llll
    l
 lll
`,`

l

l

`,`

 l

 l
l
`,`
   ll
 ll
l
 ll
   ll
`,`

lllll

lllll

`,`
ll
  ll
    l
  ll
ll
`,`
 lll
l   l
  ll

  l
`,`
 lll
l   l
l lll
l
 lll
`,`
 lll
l   l
lllll
l   l
l   l
`,`
llll
l   l
llll
l   l
llll
`,`
 llll
l
l
l
 llll
`,`
llll
l   l
l   l
l   l
llll
`,`
lllll
l
llll
l
lllll
`,`
lllll
l
llll
l
l
`,`
 lll
l
l  ll
l   l
 llll
`,`
l   l
l   l
lllll
l   l
l   l
`,`
lllll
  l
  l
  l
lllll
`,`
  lll
   l
   l
   l
lll
`,`
l   l
l  l
lll
l  l
l   l
`,`
l
l
l
l
lllll
`,`
l   l
ll ll
l l l
l   l
l   l
`,`
l   l
ll  l
l l l
l  ll
l   l
`,`
 lll
l   l
l   l
l   l
 lll
`,`
llll
l   l
llll
l
l
`,`
 lll
l   l
l   l
l  ll
 llll
`,`
llll
l   l
llll
l   l
l   l
`,`
 llll
l
 lll
    l
llll
`,`
lllll
  l
  l
  l
  l
`,`
l   l
l   l
l   l
l   l
 lll
`,`
l   l
l   l
l   l
 l l
  l
`,`
l   l
l l l
l l l
l l l
 l l
`,`
l   l
 l l
  l
 l l
l   l
`,`
l   l
 l l
  l
  l
  l
`,`
lllll
   l
  l
 l
lllll
`,`
  ll
  l
  l
  l
  ll
`,`
l
 l
  l
   l
    l
`,`
 ll
  l
  l
  l
 ll
`,`
  l
 l l



`,`




lllll
`,`
 l
  l



`,`

 lll
l  l
l  l
 lll
`,`
l
l
lll
l  l
lll
`,`

 lll
l  
l
 lll
`,`
   l
   l
 lll
l  l
 lll
`,`

 ll
l ll
ll
 ll
`,`
  l
 l 
lll
 l
 l
`,`
 ll
l  l
 lll
   l
 ll
`,`
l
l
ll
l l
l l
`,`

l

l
l
`,`
 l

 l
 l
l
`,`
l
l
l l
ll
l l
`,`
ll
 l
 l
 l
lll
`,`

llll
l l l
l l l
l   l
`,`

lll
l  l
l  l
l  l
`,`

 ll
l  l
l  l
 ll
`,`

lll
l  l
lll
l
`,`

 lll
l  l
 lll
   l
`,`

l ll
ll
l
l
`,`

 lll
ll
  ll
lll
`,`

 l
lll
 l
  l
`,`

l  l
l  l
l  l
 lll
`,`

l  l
l  l
 ll
 ll
`,`

l   l
l l l
l l l
 l l
`,`

l  l
 ll
 ll
l  l
`,`

l  l
 ll
 l
l
`,`

llll
  l
 l
llll
`,`
 ll
 l
l
 l
 ll
`,`
l
l
l
l
l
`,`
ll
 l
  l
 l
ll
`,`

 l
l l l
   l

`],wy=[`
 l
 l
 l

 l
`,`
l l
l l



`,`
l l
lll
l l
lll
l l
`,`
 ll
ll
lll
 ll
ll
`,`
l l
  l
 l
l
l l
`,`
ll
ll
lll
l 
lll
`,`
 l
 l



`,`
  l
 l
 l
 l
  l
`,`
l
 l
 l
 l
l
`,`
 l
lll
 l
lll
 l
`,`
 l
 l
lll
 l
 l
`,`



 l
l
`,`


lll


`,`




 l
`,`
  l
 l
 l
 l
l
`,`
lll
l l
l l
l l
lll
`,`
  l
  l
  l
  l
  l
`,`
lll
  l
lll
l
lll
`,`
lll
  l
lll
  l
lll
`,`
l l
l l
lll
  l
  l
`,`
lll
l
lll
  l
lll
`,`
l
l
lll
l l
lll
`,`
lll
  l
  l
  l
  l
`,`
lll
l l
lll
l l
lll
`,`
lll
l l
lll
  l
  l
`,`

 l

 l

`,`

 l

 l
l
`,`
  l
 l
l
 l
  l
`,`

lll

lll

`,`
l
 l
  l
 l
l
`,`
lll
  l
 ll

 l
`,`

lll
l l
l
 ll
`,`
lll
l l
lll
l l
l l
`,`
ll
l l
lll
l l
ll
`,`
lll
l
l
l
lll
`,`
ll
l l
l l
l l
ll
`,`
lll
l
lll
l
lll
`,`
lll
l
lll
l
l
`,`
lll
l
l l
l l
 ll
`,`
l l
l l
lll
l l
l l
`,`
 l
 l
 l
 l
 l
`,`
  l
  l
  l
  l
ll
`,`
l l
l l
ll
l l
l l
`,`
l
l
l
l
lll
`,`
l l
lll
l l
l l
l l
`,`
l l
lll
lll
lll
l l
`,`
lll
l l
l l
l l
lll
`,`
lll
l l
lll
l
l
`,`
lll
l l
l l
lll
lll
`,`
ll
l l
ll
l l
l l
`,`
lll
l
lll
  l
lll
`,`
lll
 l
 l
 l
 l
`,`
l l
l l
l l
l l
lll
`,`
l l
l l
l l
l l
 l
`,`
l l
l l
lll
lll
l l
`,`
l l
l l
 l
l l
l l
`,`
l l
l l
lll
 l
 l
`,`
lll
  l
 l
l
lll
`,`
 ll
 l
 l
 l
 ll
`,`
l
 l
 l
 l
  l
`,`
ll
 l
 l
 l
ll
`,`
 l
l l



`,`




lll
`,`
l
 l



`,`


 ll
l l
 ll
`,`

l
lll
l l
lll
`,`


lll
l
lll
`,`

  l
lll
l l
lll
`,`


lll
l
 ll
`,`

 ll
 l
lll
 l
`,`

lll
lll
  l
ll
`,`

l
l
lll
l l
`,`

 l

 l
 l
`,`

 l

 l
ll
`,`

l
l l
ll
l l
`,`

 l
 l
 l
 l
`,`


lll
lll
l l
`,`


ll
l l
l l
`,`


lll
l l
lll
`,`


lll
lll
l
`,`


lll
lll
  l
`,`


lll
l
l
`,`


 ll
lll
ll
`,`


lll
 l
 l
`,`


l l
l l
lll
`,`


l l
l l
 l
`,`


l l
lll
l l
`,`


l l
 l
l l
`,`


l l
 l
l
`,`


lll
 l
lll
`,`
 ll
 l
l
 l
 ll
`,`
 l
 l
 l
 l
 l
`,`
ll
 l
  l
 l
ll
`,`

l
lll
  l

`];let Er,oo;function Sy(){Er=[],oo=[]}function Qp(){Er=Er.concat(oo),oo=[]}function Jp(e){let t={isColliding:{rect:{},text:{},char:{}}};return Er.forEach(n=>{_y(e,n)&&(t={...t,...Ta(n.collision.isColliding.rect),isColliding:{rect:{...t.isColliding.rect,...n.collision.isColliding.rect},text:{...t.isColliding.text,...n.collision.isColliding.text},char:{...t.isColliding.char,...n.collision.isColliding.char}}})}),t}function _y(e,t){const n=t.pos.x-e.pos.x,r=t.pos.y-e.pos.y;return-t.size.x<n&&n<e.size.x&&-t.size.y<r&&r<e.size.y}function Ta(e){if(e==null)return{};const t={transparent:"tr",white:"wh",red:"rd",green:"gr",yellow:"yl",blue:"bl",purple:"pr",cyan:"cy",black:"lc"};let n={};return $p(e).forEach(([r,l])=>{const i=t[r];l&&i!=null&&(n[i]=!0)}),n}function Yp(e,t,n,r){return Xp(!1,e,t,n,r)}function xy(e,t,n,r){return Xp(!0,e,t,n,r)}function Xp(e,t,n,r,l){if(typeof n=="number"){if(typeof r=="number")return Z(t,n,r,{isCharacter:e,isCheckingCollision:!0,color:ke,...l});throw"invalid params"}else return Z(t,n.x,n.y,{isCharacter:e,isCheckingCollision:!0,color:ke,...r})}const Jr=6,Ey=4,ir=1,j=Jr*ir,Nl=Ey*ir;let bp,Zp,La,so,uo=!1,Qt,Cn,ul,Ti;const ws={color:"black",backgroundColor:"transparent",rotation:0,mirror:{x:1,y:1},scale:{x:1,y:1},isSmallText:!1,isCharacter:!1,isCheckingCollision:!1};function ky(){Qt=document.createElement("canvas"),Qt.width=Qt.height=j,Cn=Qt.getContext("2d"),ul=document.createElement("canvas"),Ti=ul.getContext("2d"),bp=id.map((e,t)=>({...Li(e),hitBox:al(String.fromCharCode(33+t),!1)})),Zp=wy.map((e,t)=>({...Li(e),hitBox:al(String.fromCharCode(33+t),!1)})),La=id.map((e,t)=>({...Li(e),hitBox:al(String.fromCharCode(33+t),!0)})),so={}}function Cy(e,t){const n=t.charCodeAt(0)-33;e.forEach((r,l)=>{La[n+l]={...Li(r),hitBox:al(String.fromCharCode(33+n+l),!0)}})}function Py(){uo=!0}function Ry(){uo=!1,so={}}function Z(e,t,n,r={}){const l=qp(r);t-=j/2*l.scale.x,n-=j/2*l.scale.y;const i=Math.floor(t);let o=e,s=i,u=Math.floor(n),a={isColliding:{rect:{},text:{},char:{}}};const m=l.isSmallText?Nl:j;for(let p=0;p<o.length;p++){const h=o[p];if(h===`
`){s=i,u+=j*l.scale.y;continue}const g=Ty(h,s,u,l);l.isCheckingCollision&&(a={isColliding:{rect:{...a.isColliding.rect,...g.isColliding.rect},text:{...a.isColliding.text,...g.isColliding.text},char:{...a.isColliding.char,...g.isColliding.char}}}),s+=m*l.scale.x}return a}function Ty(e,t,n,r){const l=e.charCodeAt(0);if(l<32||l>126)return{isColliding:{rect:{},text:{},char:{}}};const i=qp(r);if(i.backgroundColor!=="transparent"&&(Gl(),Tt(i.backgroundColor),sl(t,n,j*i.scale.x,j*i.scale.y),Wl()),l<=32)return{isColliding:{rect:{},text:{},char:{}}};const o=l-33,s=i.isCharacter?La[o]:i.isSmallText?Zp[o]:bp[o],u=no(i.rotation,0,4);if(i.color==="black"&&u===0&&i.mirror.x===1&&i.mirror.y===1&&(!W.isUsingPixi||i.scale.x===1&&i.scale.y===1))return Ss(s,t,n,i.scale,i.isCheckingCollision,!0);const a=JSON.stringify({c:e,options:i}),m=so[a];if(m!=null)return Ss(m,t,n,i.scale,i.isCheckingCollision,i.color!=="transparent");let p=!1;W.isUsingPixi&&(i.scale.x!==1||i.scale.y!==1)&&(ul.width=j*i.scale.x,ul.height=j*i.scale.y,Ti.imageSmoothingEnabled=!1,Ti.scale(i.scale.x,i.scale.y),od(Ti,u,i,s),p=!0),Cn.clearRect(0,0,j,j),od(Cn,u,i,s);const h=al(e,i.isCharacter);let g;if(uo||W.isUsingPixi){const _=document.createElement("img");if(_.src=Qt.toDataURL(),W.isUsingPixi){const w=document.createElement("img");w.src=(p?ul:Qt).toDataURL(),g=PIXI.Texture.from(w)}uo&&(so[a]={image:_,texture:g,hitBox:h})}return Ss({image:Qt,texture:g,hitBox:h},t,n,i.scale,i.isCheckingCollision,i.color!=="transparent")}function od(e,t,n,r){t===0&&n.mirror.x===1&&n.mirror.y===1?e.drawImage(r.image,0,0):(e.save(),e.translate(j/2,j/2),e.rotate(Math.PI/2*t),(n.mirror.x===-1||n.mirror.y===-1)&&e.scale(n.mirror.x,n.mirror.y),e.drawImage(r.image,-j/2,-j/2),e.restore()),n.color!=="black"&&(e.globalCompositeOperation="source-in",e.fillStyle=Ol(n.color==="transparent"?"black":n.color),e.fillRect(0,0,j,j),e.globalCompositeOperation="source-over")}function Ss(e,t,n,r,l,i){if(i&&(r.x===1&&r.y===1?sd(e,t,n):sd(e,t,n,j*r.x,j*r.y)),!l)return;const o={pos:{x:t+e.hitBox.pos.x*r.x,y:n+e.hitBox.pos.y*r.y},size:{x:e.hitBox.size.x*r.x,y:e.hitBox.size.y*r.y},collision:e.hitBox.collision},s=Jp(o);return i&&Er.push(o),s}function sd(e,t,n,r,l){if(W.isUsingPixi){Vo(),Q.beginTextureFill({texture:e.texture,matrix:new PIXI.Matrix().translate(t,n)}),Q.drawRect(t,n,r??j,l??j),io(_r(ke));return}r==null?it.drawImage(e.image,t,n):it.drawImage(e.image,t,n,r,l)}function Li(e,t=!0){Cn.clearRect(0,0,j,j);let n=e.split(`
`);t&&(n=n.slice(1,n.length-1));let r=0;n.forEach(u=>{r=Math.max(u.length,r)});const l=Math.max(Math.ceil((Jr-r)/2),0),i=n.length,o=Math.max(Math.ceil((Jr-i)/2),0);n.forEach((u,a)=>{if(!(a+o>=Jr))for(let m=0;m<Jr-l;m++){const p=u.charAt(m);let h=uy.indexOf(p);p!==""&&h>=1&&(Cn.fillStyle=Ol(Bp[h]),Cn.fillRect((m+l)*ir,(a+o)*ir,ir,ir))}});const s=document.createElement("img");return s.src=Qt.toDataURL(),W.isUsingPixi?{image:s,texture:PIXI.Texture.from(s)}:{image:s}}function al(e,t){const n={pos:new G(j,j),size:new G,collision:{isColliding:{char:{},text:{}}}};t?n.collision.isColliding.char[e]=!0:n.collision.isColliding.text[e]=!0;const r=Cn.getImageData(0,0,j,j).data;let l=0;for(let i=0;i<j;i++)for(let o=0;o<j;o++)r[l+3]>0&&(o<n.pos.x&&(n.pos.x=o),i<n.pos.y&&(n.pos.y=i)),l+=4;l=0;for(let i=0;i<j;i++)for(let o=0;o<j;o++)r[l+3]>0&&(o>n.pos.x+n.size.x-1&&(n.size.x=o-n.pos.x+1),i>n.pos.y+n.size.y-1&&(n.size.y=i-n.pos.y+1)),l+=4;return n}function qp(e){let t={...ws,...e};return e.scale!=null&&(t.scale={...ws.scale,...e.scale}),e.mirror!=null&&(t.mirror={...ws.mirror,...e.mirror}),t}let Pn=!1,Hl=!1,Fo=!1;const em=["Escape","Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Enter","ControlLeft","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backquote","ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","NumpadMultiply","AltLeft","Space","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","Pause","ScrollLock","Numpad7","Numpad8","Numpad9","NumpadSubtract","Numpad4","Numpad5","Numpad6","NumpadAdd","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","IntlBackslash","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","IntlYen","Undo","Paste","MediaTrackPrevious","Cut","Copy","MediaTrackNext","NumpadEnter","ControlRight","LaunchMail","AudioVolumeMute","MediaPlayPause","MediaStop","Eject","AudioVolumeDown","AudioVolumeUp","BrowserHome","NumpadDivide","PrintScreen","AltRight","Help","NumLock","Pause","Home","ArrowUp","PageUp","ArrowLeft","ArrowRight","End","ArrowDown","PageDown","Insert","Delete","OSLeft","OSRight","ContextMenu","BrowserSearch","BrowserFavorites","BrowserRefresh","BrowserStop","BrowserForward","BrowserBack"];let Ia;const Ly={onKeyDown:void 0};let wu,Uo=!1,ao=!1,co=!1,Oa={},Su={},_u={};const tm=e=>{Uo=ao=!0,Oa[e.code]=Su[e.code]=!0,wu.onKeyDown!=null&&wu.onKeyDown(),(e.code==="AltLeft"||e.code==="AltRight"||e.code==="ArrowRight"||e.code==="ArrowDown"||e.code==="ArrowLeft"||e.code==="ArrowUp")&&e.preventDefault()},nm=e=>{Uo=!1,co=!0,Oa[e.code]=!1,_u[e.code]=!0};function rm(e){wu={...Ly,...e},Ia=Up(em.map(t=>[t,{isPressed:!1,isJustPressed:!1,isJustReleased:!1}])),Pn=Hl=Fo=!1,Uo=ao=co=!1,document.addEventListener("keydown",tm),document.addEventListener("keyup",nm)}function lm(){document.removeEventListener("keydown",tm),document.removeEventListener("keyup",nm)}function im(){Hl=!Pn&&ao,Fo=Pn&&co,ao=co=!1,Pn=Uo,$p(Ia).forEach(([e,t])=>{t.isJustPressed=!t.isPressed&&Su[e],t.isJustReleased=t.isPressed&&_u[e],t.isPressed=!!Oa[e]}),Su={},_u={}}function om(){Hl=!1,Pn=!0}const Iy=Object.freeze(Object.defineProperty({__proto__:null,clearJustPressed:om,get code(){return Ia},codes:em,init:rm,get isJustPressed(){return Hl},get isJustReleased(){return Fo},get isPressed(){return Pn},terminate:lm,update:im},Symbol.toStringTag,{value:"Module"}));class $o{constructor(t=null){this.setSeed(t)}get(t=1,n){return n==null&&(n=t,t=0),this.next()/4294967295*(n-t)+t}getInt(t,n){n==null&&(n=t,t=0);const r=Math.floor(t),l=Math.floor(n);return l===r?r:this.next()%(l-r)+r}getPlusOrMinus(){return this.getInt(2)*2-1}select(t){return t[this.getInt(t.length)]}setSeed(t,n=123456789,r=362436069,l=521288629,i=32){this.w=t!=null?t>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=n>>>0,this.y=r>>>0,this.z=l>>>0;for(let o=0;o<i;o++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const t=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(t^t>>>8))>>>0,this.w}}const cl=new G;let ft=!1,zn=!1,kr=!1,Oy={isDebugMode:!1,anchor:new G,padding:new G,onPointerDownOrUp:void 0},Ie,nt,ve;const Br=new $o,yn=new G,wt=new G;let dl=!1,Dl=new G,Bo=!1,fo=!1,po=!1;const sm=e=>{ym(e.pageX,e.pageY)},um=e=>{ym(e.touches[0].pageX,e.touches[0].pageY)},am=e=>{vm(e.pageX,e.pageY)},cm=e=>{e.preventDefault(),vm(e.touches[0].pageX,e.touches[0].pageY)},dm=e=>{wm()},fm=e=>{e.preventDefault(),e.target.click(),wm()};function pm(e,t,n){ve={...Oy,...n},Ie=e,nt=new G(t.x+ve.padding.x*2,t.y+ve.padding.y*2),Dl.set(Ie.offsetLeft+Ie.clientWidth*(.5-ve.anchor.x),Ie.offsetTop+Ie.clientWidth*(.5-ve.anchor.y)),ve.isDebugMode&&yn.set(Ie.offsetLeft+Ie.clientWidth*(.5-ve.anchor.x),Ie.offsetTop+Ie.clientWidth*(.5-ve.anchor.y)),ft=zn=kr=!1,Bo=fo=po=!1,document.addEventListener("mousedown",sm),document.addEventListener("touchstart",um),document.addEventListener("mousemove",am),document.addEventListener("touchmove",cm,{passive:!1}),document.addEventListener("mouseup",dm),document.addEventListener("touchend",fm,{passive:!1})}function mm(){document.removeEventListener("mousedown",sm),document.removeEventListener("touchstart",um),document.removeEventListener("mousemove",am),document.removeEventListener("touchmove",cm),document.removeEventListener("mouseup",dm),document.removeEventListener("touchend",fm)}function hm(){Ny(Dl.x,Dl.y,cl),ve.isDebugMode&&!cl.isInRect(0,0,nt.x,nt.y)?(Dy(),cl.set(yn),zn=!ft&&dl,kr=ft&&!dl,ft=dl):(zn=!ft&&fo,kr=ft&&po,ft=Bo),fo=po=!1}function gm(){zn=!1,ft=!0}function Ny(e,t,n){Ie!=null&&(n.x=Math.round(((e-Ie.offsetLeft)/Ie.clientWidth+ve.anchor.x)*nt.x-ve.padding.x),n.y=Math.round(((t-Ie.offsetTop)/Ie.clientHeight+ve.anchor.y)*nt.y-ve.padding.y))}function Dy(){wt.length>0?(yn.add(wt),!ro(yn.x,-nt.x*.1,nt.x*1.1)&&yn.x*wt.x>0&&(wt.x*=-1),!ro(yn.y,-nt.y*.1,nt.y*1.1)&&yn.y*wt.y>0&&(wt.y*=-1),Br.get()<.05&&wt.set(0)):Br.get()<.1&&(wt.set(0),wt.addWithAngle(Br.get(Math.PI*2),(nt.x+nt.y)*Br.get(.01,.03))),Br.get()<.05&&(dl=!dl)}function ym(e,t){Dl.set(e,t),Bo=fo=!0,ve.onPointerDownOrUp!=null&&ve.onPointerDownOrUp()}function vm(e,t){Dl.set(e,t)}function wm(e){Bo=!1,po=!0,ve.onPointerDownOrUp!=null&&ve.onPointerDownOrUp()}const My=Object.freeze(Object.defineProperty({__proto__:null,clearJustPressed:gm,init:pm,get isJustPressed(){return zn},get isJustReleased(){return kr},get isPressed(){return ft},pos:cl,terminate:mm,update:hm},Symbol.toStringTag,{value:"Module"}));let Un=new G,$n=!1,Bn=!1,Ir=!1;function Sm(e){rm({onKeyDown:e}),pm(ue,$,{onPointerDownOrUp:e,anchor:new G(.5,.5)})}function _m(){im(),hm(),Un=cl,$n=Pn||ft,Bn=Hl||zn,Ir=Fo||kr}function Na(){om(),gm()}function Kl(e){Un.set(e.pos),$n=e.isPressed,Bn=e.isJustPressed,Ir=e.isJustReleased}const Ay=Object.freeze(Object.defineProperty({__proto__:null,clearJustPressed:Na,init:Sm,get isJustPressed(){return Bn},get isJustReleased(){return Ir},get isPressed(){return $n},get pos(){return Un},set:Kl,update:_m},Symbol.toStringTag,{value:"Module"}));let ud,Da;const xm=68,_s=1e3/xm;let Gr=0;const zy={viewSize:{x:100,y:100},bodyBackground:"#111",viewBackground:"black",isCapturing:!1,isCapturingGameCanvasOnly:!1,isSoundEnabled:!0,captureCanvasScale:1,theme:{name:"simple",isUsingPixi:!1,isDarkColor:!1}};let ze,xu,Ma,Eu;function jy(e,t,n){ud=e,Da=t,ze={...zy,...n},cy(ze.theme.isDarkColor),py(ze.viewSize,ze.bodyBackground,ze.viewBackground,ze.isCapturing,ze.isCapturingGameCanvasOnly,ze.captureCanvasScale,ze.captureDurationSec,ze.theme),Sm(ze.isSoundEnabled?sss.startAudio:()=>{}),ky(),ud(),Ma=!0,xu=10,Ry(),Em()}function Vy(){Ma=!1,hy()}function Fy(){Da=()=>{}}function Uy(e){Eu=e}function Em(){if(!Ma)return;requestAnimationFrame(Em);const e=window.performance.now();e<Gr-xm/12||(Gr+=_s,(Gr<e||Gr>e+_s*2)&&(Gr=e+_s),ze.isSoundEnabled&&sss.update(),_m(),Da(),Eu!=null&&Eu(),ze.isCapturing&&vy(),xu--,xu===0&&Py())}let mo;const fi=new $o;function Aa(){mo=[]}function ad(e,t=16,n=1,r=0,l=Math.PI*2){if(t<1){if(fi.get()>t)return;t=1}for(let i=0;i<t;i++){const o=r+fi.get(l)-l/2,s={pos:new G(e),vel:new G(n*fi.get(.5,1),0).rotate(o),color:ke,ticks:ln(fi.get(10,20)*Math.sqrt(Math.abs(n)),10,60)};mo.push(s)}}function ho(){Gl(),mo=mo.filter(e=>(e.ticks--,e.ticks<0?!1:(e.pos.add(e.vel),e.vel.mul(.98),Tt(e.color),sl(Math.floor(e.pos.x),Math.floor(e.pos.y),1,1),!0))),Wl()}function ku(e,t,n,r){return km(!1,e,t,n,r)}function $y(e,t,n,r){return km(!0,e,t,n,r)}function By(e,t,n,r,l=.5,i=.5){typeof e!="number"&&(i=l,l=r,r=n,n=t,t=e.y,e=e.x);const o=new G(n).rotate(l),s=new G(e-o.x*i,t-o.y*i);return za(s,o,r)}function Gy(e,t,n=3,r=3,l=3){const i=new G,o=new G;if(typeof e=="number")if(typeof t=="number")typeof n=="number"?(i.set(e,t),o.set(n,r)):(i.set(e,t),o.set(n),l=r);else throw"invalid params";else if(typeof t=="number")if(typeof n=="number")i.set(e),o.set(t,n),l=r;else throw"invalid params";else if(typeof n=="number")i.set(e),o.set(t),l=n;else throw"invalid params";return za(i,o.sub(i),l)}function Wy(e,t,n,r,l,i){let o=new G;typeof e=="number"?o.set(e,t):(o.set(e),i=l,l=r,r=n,n=t),r==null&&(r=3),l==null&&(l=0),i==null&&(i=Math.PI*2);let s,u;if(l>i?(s=i,u=l-i):(s=l,u=i-l),u=ln(u,0,Math.PI*2),u<.01)return;const a=ln(Math.ceil(u*Math.sqrt(n*.25)),1,36),m=u/a;let p=s,h=new G(n).rotate(p).add(o),g=new G,_=new G,w={isColliding:{rect:{},text:{},char:{}}};for(let O=0;O<a;O++){p+=m,g.set(n).rotate(p).add(o),_.set(g).sub(h);const d=za(h,_,r,!0);w={...w,...Ta(d.isColliding.rect),isColliding:{rect:{...w.isColliding.rect,...d.isColliding.rect},text:{...w.isColliding.text,...d.isColliding.text},char:{...w.isColliding.char,...d.isColliding.char}}},h.set(g)}return Qp(),w}function km(e,t,n,r,l){if(typeof t=="number"){if(typeof n=="number")return typeof r=="number"?l==null?gn(e,t,n,r,r):gn(e,t,n,r,l):gn(e,t,n,r.x,r.y);throw"invalid params"}else if(typeof n=="number"){if(r==null)return gn(e,t.x,t.y,n,n);if(typeof r=="number")return gn(e,t.x,t.y,n,r);throw"invalid params"}else return gn(e,t.x,t.y,n.x,n.y)}function za(e,t,n,r=!1){let l=!0;(W.name==="shape"||W.name==="shapeDark")&&(ke!=="transparent"&&gy(e.x,e.y,e.x+t.x,e.y+t.y,n),l=!1);const i=Math.floor(ln(n,3,10)),o=Math.abs(t.x),s=Math.abs(t.y),u=ln(Math.ceil(o>s?o/i:s/i)+1,3,99);t.div(u-1);let a={isColliding:{rect:{},text:{},char:{}}};for(let m=0;m<u;m++){const p=gn(!0,e.x,e.y,n,n,!0,l);a={...a,...Ta(p.isColliding.rect),isColliding:{rect:{...a.isColliding.rect,...p.isColliding.rect},text:{...a.isColliding.text,...p.isColliding.text},char:{...a.isColliding.char,...p.isColliding.char}}},e.add(t)}return r||Qp(),a}function gn(e,t,n,r,l,i=!1,o=!0){let s=o;(W.name==="shape"||W.name==="shapeDark")&&s&&ke!=="transparent"&&(e?sl(t-r/2,n-l/2,r,l):sl(t,n,r,l),s=!1);let u=e?{x:Math.floor(t-r/2),y:Math.floor(n-l/2)}:{x:Math.floor(t),y:Math.floor(n)};const a={x:Math.trunc(r),y:Math.trunc(l)};if(a.x===0||a.y===0)return{isColliding:{rect:{},text:{},char:{}}};a.x<0&&(u.x+=a.x,a.x*=-1),a.y<0&&(u.y+=a.y,a.y*=-1);const m={pos:u,size:a,collision:{isColliding:{rect:{}}}};m.collision.isColliding.rect[ke]=!0;const p=Jp(m);return ke!=="transparent"&&((i?oo:Er).push(m),s&&sl(u.x,u.y,a.x,a.y)),p}function Cu({pos:e,size:t,text:n,isToggle:r=!1,onClick:l=()=>{},isSmallText:i=!0}){return{pos:e,size:t,text:n,isToggle:r,onClick:l,isPressed:!1,isSelected:!1,isHovered:!1,toggleGroup:[],isSmallText:i}}function Pu(e){const t=new G(Un).sub(e.pos);e.isHovered=t.isInRect(0,0,e.size.x,e.size.y),e.isHovered&&zn&&(e.isPressed=!0),e.isPressed&&!e.isHovered&&(e.isPressed=!1),e.isPressed&&kr&&(e.onClick(),e.isPressed=!1,e.isToggle&&(e.toggleGroup.length===0?e.isSelected=!e.isSelected:(e.toggleGroup.forEach(n=>{n.isSelected=!1}),e.isSelected=!0))),go(e)}function go(e){Gl(),Tt(e.isPressed?"blue":"light_blue"),ku(e.pos.x,e.pos.y,e.size.x,e.size.y),e.isToggle&&!e.isSelected&&(Tt("white"),ku(e.pos.x+1,e.pos.y+1,e.size.x-2,e.size.y-2)),Tt(e.isHovered?"black":"blue"),Yp(e.text,e.pos.x+3,e.pos.y+3,{isSmallText:e.isSmallText}),Wl()}let gt,fl,jn,ja;function Hy(e){gt={randomSeed:e,inputs:[]}}function Ky(e){gt.inputs.push(e)}function Cm(){return gt!=null}function Qy(e){fl=0,e.setSeed(gt.randomSeed)}function Jy(){fl>=gt.inputs.length||(Kl(gt.inputs[fl]),fl++)}function Yy(){jn=[]}function Xy(e,t,n){jn.push({randomState:n.getState(),gameState:cloneDeep(e),baseState:cloneDeep(t)})}function by(e){const t=jn.pop(),n=t.randomState;return e.setSeed(n.w,n.x,n.y,n.z,0),ja={pos:new G(Un),isPressed:$n,isJustPressed:Bn,isJustReleased:Ir},Kl(gt.inputs.pop()),t}function Zy(e){const t=jn[jn.length-1],n=t.randomState;return e.setSeed(n.w,n.x,n.y,n.z,0),ja={pos:new G(Un),isPressed:$n,isJustPressed:Bn,isJustReleased:Ir},Kl(gt.inputs[gt.inputs.length-1]),t}function qy(){Kl(ja)}function ev(){return jn.length===0}function tv(){const e=fl-1;if(!(e>=gt.inputs.length))return jn[e]}const C=window,nv=Math.PI,rv=Math.abs,lv=Math.sin,iv=Math.cos,ov=Math.atan2,sv=Math.sqrt,uv=Math.pow,av=Math.floor,cv=Math.round,dv=Math.ceil;C.ticks=0;C.difficulty=1;C.score=0;C.time=0;C.isReplaying=!1;function fv(e=1,t){return Lt.get(e,t)}function pv(e=2,t){return Lt.getInt(e,t)}function mv(e=1,t){return Lt.get(e,t)*Lt.getPlusOrMinus()}function Va(e="GAME OVER"){I.isShowingTime&&(time=void 0),Dm()}function hv(e="COMPLETE"){Dm()}function gv(e,t,n){if(isReplaying||(score+=e,t==null))return;const r=`${e>=1?"+":""}${Math.floor(e)}`;let l=new G;typeof t=="number"?l.set(t,n):l.set(t),l.x-=r.length*(I.isUsingSmallText?Nl:j)/2,l.y-=j/2,yo.push({str:r,pos:l,vy:-2,ticks:30})}function Pm(e){Tt(e)}function yv(e,t,n,r,l,i){let o=new G;typeof e=="number"?(o.set(e,t),s(o,n,r,l,i)):(o.set(e),s(o,t,n,r,l));function s(u,a,m,p,h){if(Av(a)){const g=a;ad(u,g.count,g.speed,g.angle,g.angleWidth)}else ad(u,a,m,p,h)}}function Rm(e,t){return new G(e,t)}function Tm(e,t){!Al&&!Rn&&I.isSoundEnabled&&(t!=null&&typeof sss.playSoundEffect=="function"?sss.playSoundEffect(e,t):sss.play(Sv[e]))}let Ru;function Fa(){typeof sss.generateMml=="function"?Ru=sss.playMml(sss.generateMml()):sss.playBgm()}function Go(){Ru!=null?sss.stopMml(Ru):sss.stopBgm()}function vv(e){if(Al){const t=Zy(Lt),n=t.baseState;return score=n.score,ticks=n.ticks,cloneDeep(t.gameState)}else if(Rn){const t=by(Lt),n=t.baseState;return score=n.score,ticks=n.ticks,t.gameState}else{if(isReplaying)return tv().gameState;if(on==="inGame"){const t={score,ticks};Xy(e,t,Lt)}}return e}function wv(){Rn||(!isReplaying&&I.isRewindEnabled?Iv():Va())}const Sv={coin:"c",laser:"l",explosion:"e",powerUp:"p",hit:"h",jump:"j",select:"s",lucky:"u",random:"r",click:"i",synth:"y",tone:"t"},cd={isPlayingBgm:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,captureDurationSec:5,isShowingScore:!0,isShowingTime:!1,isReplayEnabled:!1,isRewindEnabled:!1,isDrawingParticleFront:!1,isDrawingScoreFront:!1,isUsingSmallText:!0,isMinifying:!1,isSoundEnabled:!0,viewSize:{x:100,y:100},audioSeed:0,seed:0,audioVolume:1,theme:"simple"},_v=new $o,Lt=new $o;let on,xv={title:Tv,inGame:Pv,gameOver:Lv,rewind:Ov},Ml=0,Ii,pi=!0,Kn=0,I,pn,yo,Al=!1,Rn=!1,pl,vo,Tu,wo,Lu,Ua;function Ev(e){const t=window;t.update=e.update,t.title=e.title,t.description=e.description,t.characters=e.characters,t.options=e.options,e.initialDifficulty==null?Lu=1:Lu=e.initialDifficulty,Ua=!!e.isTimeAttack,Om()}function Lm(){Im(),mm(),lm(),Vy()}function Im(){I.isPlayingBgm&&I.isSoundEnabled&&Go()}function Om(){typeof options<"u"&&options!=null?I={...cd,...options}:I=cd;const e={name:"simple",isUsingPixi:!1,isDarkColor:!1};I.theme!=="simple"&&I.theme!=="dark"&&(e.isUsingPixi=!0),(I.theme==="pixel"||I.theme==="shapeDark"||I.theme==="crt"||I.theme==="dark")&&(e.isDarkColor=!0),pn={viewSize:{x:100,y:100},bodyBackground:e.isDarkColor?"#101010":"#e0e0e0",viewBackground:e.isDarkColor?"blue":"white",theme:e,isSoundEnabled:I.isSoundEnabled},Kn=I.audioSeed+I.seed,pn.isCapturing=I.isCapturing,pn.isCapturingGameCanvasOnly=I.isCapturingGameCanvasOnly,pn.captureCanvasScale=I.captureCanvasScale,pn.captureDurationSec=I.captureDurationSec,pn.viewSize=I.viewSize,I.isMinifying&&jv(),jy(kv,Cv,pn)}let dd=!1;function kv(){typeof description<"u"&&description!=null&&description.trim().length>0&&(pi=!1,Kn+=md(description)),typeof title<"u"&&title!=null&&title.trim().length>0&&(pi=!1,Kn+=md(title),wo=`1x111-${encodeURIComponent(title)}-${Kn}`,Ua||(Ml=Mv())),pi=!0,score=0,typeof characters<"u"&&characters!=null&&Cy(characters,"a"),I.isSoundEnabled&&(dd?sss.setSeed(Kn):(sss.init(Kn),sss.setVolume(.1*I.audioVolume),dd=!0)),Tt("black"),pi?(Nm(),ticks=0):Rv()}function Cv(){difficulty=ticks/3600+Lu,ticks;const e=score,t=time;mi=score;const n=mi;Sy(),xv[on](),W.isUsingPixi&&(Vo(),W.name==="crt"&&yy()),ticks++,isReplaying?(score=e,time=t):mi!==n&&(score=mi)}function Nm(){on="inGame",ticks=-1,Aa();const e=Math.floor(score);e>Ml&&(Ml=e),I.isShowingTime&&time!=null&&(Ii==null||Ii>time)&&(Ii=time),score=0,time=0,yo=[],I.isPlayingBgm&&I.isSoundEnabled&&Fa();const t=_v.getInt(999999999);Lt.setSeed(t),(I.isReplayEnabled||I.isRewindEnabled)&&(Hy(t),Yy(),isReplaying=!1),Na()}function Pv(){Bl(),I.isDrawingParticleFront||ho(),I.isDrawingScoreFront||pd(),(I.isReplayEnabled||I.isRewindEnabled)&&Ky({pos:Rm(Un),isPressed:$n,isJustPressed:Bn,isJustReleased:Ir}),typeof update=="function"&&update(),I.isDrawingParticleFront&&ho(),I.isDrawingScoreFront&&pd(),$a(),I.isShowingTime&&time!=null&&time++}function Rv(){on="title",ticks=-1,Aa(),Bl(),Cm()&&(Qy(Lt),isReplaying=!0)}function Tv(){if(Bn){Nm();return}if(Bl(),I.isReplayEnabled&&Cm()&&(Jy(),I.isDrawingParticleFront||ho(),update(),I.isDrawingParticleFront&&ho()),$a(),typeof title<"u"&&title!=null){let e=0;title.split(`
`).forEach(n=>{n.length>e&&(e=n.length)});const t=Math.floor(($.x-e*j)/2);title.split(`
`).forEach((n,r)=>{Z(n,t,Math.floor($.y*.25)+r*j)})}if(typeof description<"u"&&description!=null){let e=0;description.split(`
`).forEach(r=>{r.length>e&&(e=r.length)});const t=I.isUsingSmallText?Nl:j,n=Math.floor(($.x-e*t)/2);description.split(`
`).forEach((r,l)=>{Z(r,n,Math.floor($.y/2)+l*j,{isSmallText:I.isUsingSmallText})})}}function Dm(){if(on!=="gameOver"&&(on="gameOver",isReplaying||Na(),ticks=-1,g1(),I.isPlayingBgm&&I.isSoundEnabled&&Go(),!Ua)){const e=Math.floor(score);e>Ml&&Dv(e)}}function Lv(){}function Iv(){on="rewind",Al=!0,pl=Cu({pos:{x:$.x-39,y:11},size:{x:36,y:7},text:"Rewind",isSmallText:I.isUsingSmallText}),vo=Cu({pos:{x:$.x-39,y:$.y-19},size:{x:36,y:7},text:"GiveUp",isSmallText:I.isUsingSmallText}),I.isPlayingBgm&&I.isSoundEnabled&&Go(),W.isUsingPixi&&(go(pl),go(vo))}function Ov(){Bl(),update(),$a(),qy(),Rn?(go(pl),(ev()||!$n)&&Nv()):(Pu(pl),Pu(vo),pl.isPressed&&(Rn=!0,Al=!1)),vo.isPressed&&(Al=Rn=!1,Va()),I.isShowingTime&&time!=null&&time++}function Nv(){Rn=!1,on="inGame",Aa(),I.isPlayingBgm&&I.isSoundEnabled&&Fa()}function $a(){if(I.isShowingTime)fd(time,3,3),fd(Ii,$.x-7*(I.isUsingSmallText?Nl:j),3);else if(I.isShowingScore){Z(`${Math.floor(score)}`,3,3,{isSmallText:I.isUsingSmallText});const e=`HI ${Ml}`;Z(e,$.x-e.length*(I.isUsingSmallText?Nl:j),3,{isSmallText:I.isUsingSmallText})}}function fd(e,t,n){if(e==null)return;let r=Math.floor(e*100/50);r>=10*60*100&&(r=10*60*100-1);const l=xs(Math.floor(r/6e3),1)+"'"+xs(Math.floor(r%6e3/100),2)+'"'+xs(Math.floor(r%100),2);Z(l,t,n,{isSmallText:I.isUsingSmallText})}function xs(e,t){return("0000"+e).slice(-t)}function pd(){Gl(),Tt("black"),yo=yo.filter(e=>(Z(e.str,e.pos.x,e.pos.y,{isSmallText:I.isUsingSmallText}),e.pos.y+=e.vy,e.vy*=.9,e.ticks--,e.ticks>0)),Wl()}function md(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t=(t<<5)-t+r,t|=0}return t}function Dv(e){if(wo!=null)try{const t={highScore:e};localStorage.setItem(wo,JSON.stringify(t))}catch(t){console.warn("Unable to save high score:",t)}}function Mv(){try{const e=localStorage.getItem(wo);if(e)return JSON.parse(e).highScore}catch(e){console.warn("Unable to load high score:",e)}return 0}function Av(e){return e!=null&&e.constructor===Object}function zv(){let e=window.location.search.substring(1);if(e=e.replace(/[^A-Za-z0-9_-]/g,""),e.length===0)return;const t=document.createElement("script");Tu=`${e}/main.js`,t.setAttribute("src",Tu),document.head.appendChild(t)}function jv(){fetch(Tu).then(e=>e.text()).then(e=>{const t=Terser.minify(e+"update();",{toplevel:!0}).code,n="function(){",r=t.indexOf(n),l="options={",i=t.indexOf(l);let o=t;if(r>=0)o=t.substring(t.indexOf(n)+n.length,t.length-4);else if(i>=0){let s=1,u;for(let a=i+l.length;a<t.length;a++){const m=t.charAt(a);if(m==="{")s++;else if(m==="}"&&(s--,s===0)){u=a+2;break}}s===0&&(o=t.substring(u))}Mm.forEach(([s,u])=>{o=o.split(s).join(u)}),console.log(o),console.log(`${o.length} letters`)})}function Vv(...e){return Pm.apply(this,e)}function Fv(...e){return Tm.apply(this,e)}function Uv(...e){return Vp.apply(this,e)}function $v(...e){return Fp.apply(this.args)}let mi;const Bv="transparent",Gv="white",Wv="red",Hv="green",Kv="yellow",Qv="blue",Jv="purple",Yv="cyan",Xv="black",bv="coin",Zv="laser",qv="explosion",e1="powerUp",t1="hit",n1="jump",r1="select",l1="lucky";let Mm=[["===","=="],["!==","!="],["input.pos","inp.p"],["input.isPressed","inp.ip"],["input.isJustPressed","inp.ijp"],["input.isJustReleased","inp.ijr"],["color(","clr("],["play(","ply("],["times(","tms("],["remove(","rmv("],["ticks","tc"],["difficulty","df"],["score","sc"],[".isColliding.rect.transparent",".tr"],[".isColliding.rect.white",".wh"],[".isColliding.rect.red",".rd"],[".isColliding.rect.green",".gr"],[".isColliding.rect.yellow",".yl"],[".isColliding.rect.blue",".bl"],[".isColliding.rect.purple",".pr"],[".isColliding.rect.cyan",".cy"],[".isColliding.rect.black",".lc"],['"transparent"',"tr"],['"white"',"wh"],['"red"',"rd"],['"green"',"gr"],['"yellow"',"yl"],['"blue"',"bl"],['"purple"',"pr"],['"cyan"',"cy"],['"black"',"lc"],['"coin"',"cn"],['"laser"',"ls"],['"explosion"',"ex"],['"powerUp"',"pw"],['"hit"',"ht"],['"jump"',"jm"],['"select"',"sl"],['"lucky"',"uc"]];C.PI=nv;C.abs=rv;C.addGameScript=zv;C.addScore=gv;C.addWithCharCode=sy;C.arc=Wy;C.atan2=ov;C.bar=By;C.bl=Qv;C.box=$y;C.ceil=dv;C.char=xy;C.clamp=ln;C.clr=Vv;C.cn=bv;C.color=Pm;C.complete=hv;C.cos=iv;C.cy=Yv;C.end=Va;C.ex=qv;C.floor=av;C.frameState=vv;C.getButton=Cu;C.gr=Hv;C.ht=t1;C.input=Ay;C.jm=n1;C.keyboard=Iy;C.lc=Xv;C.line=Gy;C.ls=Zv;C.minifyReplaces=Mm;C.onLoad=Om;C.particle=yv;C.play=Tm;C.playBgm=Fa;C.ply=Fv;C.pointer=My;C.pow=uv;C.pr=Jv;C.pw=e1;C.range=jp;C.rd=Wv;C.rect=ku;C.remove=Fp;C.rewind=wv;C.rmv=$v;C.rnd=fv;C.rndi=pv;C.rnds=mv;C.round=cv;C.sin=lv;C.sl=r1;C.sqrt=sv;C.stopBgm=Go;C.text=Yp;C.times=Vp;C.tms=Uv;C.tr=Bv;C.uc=l1;C.updateButton=Pu;C.vec=Rm;C.wh=Gv;C.wrap=no;C.yl=Kv;const Am=[{title:"THUNDER",targetScore:36},{title:"PIN CLIMB",targetScore:140},{title:"LLAND",targetScore:3},{title:"IN TOW",targetScore:10},{title:"BALL TOUR",targetScore:9},{title:"BASERUNNER DASH",targetScore:2},{title:"UP 1 WAY",targetScore:2},{title:"BOX SNAKE",targetScore:50},{title:"UP SHOT",targetScore:100},{title:"GRAPPLING H",targetScore:20},{title:"CYWALL",targetScore:150},{title:"PAKU PAKU",targetScore:60},{title:"STOMPING BUBBLES",targetScore:250},{title:"WAVY BIRD",targetScore:50},{title:"VINE CLIMBER",targetScore:2},{title:"SUNFLOWER SWAY",targetScore:100},{title:"ROTATION ROD",targetScore:150},{title:"STAGE SEPARATION",targetScore:100},{title:"CATCHING WHEEL",targetScore:20},{title:"SLIME STRETCHER",targetScore:22},{title:"JUGGLING ACT",targetScore:7},{title:"WINDOW WASHER",targetScore:10},{title:"TWIN JUMPERS",targetScore:80},{title:"ELASTIC HERO",targetScore:1},{title:"BLADE DANCER",targetScore:10},{title:"WIND POWER",targetScore:100},{title:"SKY RAFTSMAN",targetScore:100},{title:"GRAVITY WELL",targetScore:60},{title:"PULSE PIPER",targetScore:50},{title:"FALL BOUNCE",targetScore:100},{title:"LIGHT DARK",targetScore:120},{title:"FROOOOG",targetScore:50},{title:"REFLECTOR",targetScore:10},{title:"SHINY",targetScore:1},{title:"FLIP O",targetScore:5},{title:"TIMBER TEST",targetScore:100},{title:"SURVIVOR",targetScore:9},{title:"GROWTH",targetScore:1e3},{title:"REBIRTH",targetScore:2},{title:"CAST N",targetScore:12},{title:"NUMBER BALL",targetScore:9},{title:"ORBIT MAN",targetScore:20},{title:"TAPE J",targetScore:300},{title:"BAMBOO",targetScore:100},{title:"DESCENT S",targetScore:100},{title:"R WHEEL",targetScore:25},{title:"SCRAMBIRD",targetScore:10},{title:"CLEAN ROBO",targetScore:5},{title:"FRACAVE",targetScore:5},{title:"FISH GRILL",targetScore:30},{title:"MONKEY T",targetScore:8},{title:"JUMP ON",targetScore:30},{title:"LEVITATION",targetScore:20},{title:"G PRESS",targetScore:70},{title:"SQUARE BAR",targetScore:5},{title:"TURBULENT",targetScore:80},{title:"CATE P",targetScore:5},{title:"GEOCENT",targetScore:1},{title:"HEXMIN",targetScore:25},{title:"LADDER DROP",targetScore:1},{title:"ARCFIRE",targetScore:10},{title:"SLALOM",targetScore:20},{title:"CLOCK TURRET",targetScore:5},{title:"METEO PLANET",targetScore:16},{title:"ROLL HOLD",targetScore:50},{title:"FOOT LASER",targetScore:30},{title:"LASER FORTRESS",targetScore:100},{title:"PIZZA ARROW",targetScore:200},{title:"ACCEL B",targetScore:15},{title:"UP DOWN PRESS",targetScore:5},{title:"COUNTER B",targetScore:3},{title:"M RIDER",targetScore:10},{title:"S SHAKE",targetScore:10},{title:"ZONE B",targetScore:1},{title:"M JAMMING",targetScore:50},{title:"FLIPBOMB",targetScore:20},{title:"D LASER",targetScore:50},{title:"GRENADIER",targetScore:50},{title:"KITE",targetScore:500},{title:"CATAPULT",targetScore:30},{title:"HOLES",targetScore:300},{title:"NS CLIMB",targetScore:500},{title:"SNAKY",targetScore:15},{title:"MIRROR FLOOR",targetScore:4},{title:"SUB JUMP",targetScore:10},{title:"ROLL S",targetScore:7},{title:"T PUNCH",targetScore:100},{title:"MORTAR",targetScore:25},{title:"GRAVELER",targetScore:30},{title:"THROW M",targetScore:8},{title:"AERIAL BAR",targetScore:100},{title:"SCAFFOLD",targetScore:2},{title:"BS FISH",targetScore:100},{title:"NUMBER LINE",targetScore:10},{title:"D MISSILE",targetScore:10},{title:"D PISTOLS",targetScore:50},{title:"UD CAVE",targetScore:80},{title:"SLASHES",targetScore:100},{title:"UNCTRL",targetScore:50},{title:"CIRCLE W",targetScore:2500},{title:"TWO FACED",targetScore:5},{title:"TR BEAM",targetScore:50},{title:"BOARDING",targetScore:30},{title:"SWINGBY",targetScore:300},{title:"M FIELD",targetScore:20},{title:"PARKING",targetScore:100},{title:"EAROCK",targetScore:1},{title:"TAPPUMP",targetScore:300},{title:"SNAKE 1",targetScore:2},{title:"FLOORS 5",targetScore:300},{title:"LIFT UP",targetScore:15}],Iu="1x111",zm="1.0.0",Ou=11,Tn=Am.length;let So,Ln,In,sn,Cr;const jm={};let dt,$t=times(Tn,e=>e),Ct;const Vm=11;let _n,ae,Ve;const Nu=80,zl=300;let Ke,Pt;const i1=5;let Wt,he;const o1=5;let xn;async function s1(){await x1(),Fm(),u1()}function Fm(){sn=times(Tn,e=>{const t=Am[e];return{id:e+1,title:t.title,screenshot:`./screenshots/${t.title.replace(/\s+/g,"").toLowerCase()}.png`,state:e<Ou?"open":"closed",targetScore:t.targetScore}}),So=0,In=0,Ln=Ou}function u1(){try{const e=localStorage.getItem(Iu);if(e==null)return;const t=JSON.parse(e);if(t.version!==zm)return;sn.forEach(n=>{n.state=t.state[n.id]||n.state}),So=t.gameModeIndex,In=t.starCount,Ln=t.unlockedGameCount}catch(e){console.error("Error loading game state:",e)}}let Um,$m,or,Oi,_o=!1;function a1(e,t,n,r,l){if(!_o){if(_o=!0,sn=n.map(i=>({...i})),Um=r,$m=l,t.id===-1){switch(ae="timeAttack",Wt=Ct=0,he=0,times(555,()=>{const i=Math.floor(Math.random()*$t.length),o=Math.floor(Math.random()*$t.length),s=$t[i];$t[i]=$t[o],$t[o]=s}),e){case 0:or=1,Oi=1;break;case 1:or=1.5,Oi=1.2;break;case 2:or=2,Oi=1.5;break;case 3:or=1,he=3,ae="endless";break}Bm();return}ae="single",Gm(t,1)}}function c1(){_o&&(_o=!1,Lm())}function Bm(){if(ae==="timeAttack"&&Wt>=i1){w1();return}Wt>0&&Lm();let e;for(let n=0;n<Tn*2&&(e=sn[$t[Ct]],Ct++,Ct>=Tn&&(Ct=0),!(e.state==="open"||n>=Tn&&e.state==="banned"));n++);const t=ae==="timeAttack"?or:or+Math.sqrt(Wt)*.1;Gm(e,t),Wt++,ae==="endless"&&Wt%10===0&&he<3&&he++}function Gm(e,t){Cr=e,dt=jm[e.title],_n=Vm*60,Ve="playing",Pt=50,Ba=addWithCharCode("a",dt.characters.length-1),Uy(d1);let n={...dt.options};ae!=="single"&&(n.isShowingScore=!1),Ev({update:dt.update,title:dt.title,description:dt.description,characters:dt.characters,options:n,initialDifficulty:t,isTimeAttack:ae!=="single"})}function d1(){if(Gl(),f1(),ae==="endless"&&p1(),m1(),my(),Bl(),Ve==="end"||ae==="endless"&&Ve==="failure"&&he===0||ae==="single"&&Ve==="failure"){ld(),Ke--,(Ke<0||Ke<zl-40&&input.isJustPressed)&&Um();return}y1(),ae!=="single"&&(_n--,v1(),Ve==="playing"&&score>=Cr.targetScore?h1():Ve==="playing"&&_n<=0&&(play("explosion"),end()),_n<=0&&(_n=1)),Wl(),ld(),Ve!=="playing"&&(Ke--,Ke<=0&&Bm())}function f1(){if(Pt>0){Pt>50&&(Pt=50);const e=Pt*($.y/2)/50;color("light_black"),rect(0,0,$.x,e),rect(0,$.y,$.x,-e)}}function p1(){he!==0&&(color("black"),Z(Ba.repeat(he),3,3,{isCharacter:!0}))}function m1(){switch(color("black"),Ve){case"playing":Pt>0&&(ae!=="single"&&(Z(`GAME ${Wt}`,($.x-4*5)/2+3,49,{isSmallText:!0}),Z(Cr.title,($.x-4*Cr.title.length)/2+3,59,{isSmallText:!0})),Pt-=2);break;case"success":Z("SUCCESS!",($.x-6*8)/2+3,49),Pt++;break;case"failure":ae==="single"||ae==="endless"&&he===0?Z("GAME OVER",($.x-6*9)/2+3,49):Z("OOPS!",($.x-6*5)/2+3,49),ae==="endless"&&he===0&&Z(`REACH ROUND ${Wt}!`,($.x-4*15)/2+3,60,{isSmallText:!0}),ae!=="single"&&Pt++;break;case"end":Z("YOU GOT",($.x-6*7)/2+3,30);let e=zl-Ke,t=Math.floor(e/12);if(t>=he?t=he:e%12===11&&play("coin",{seed:7}),Z(Ba.repeat(t),($.x-6*he)/2+3,40,{isCharacter:!0}),xn.length>0){Z("UNLOCK NEW GAMES",($.x-4*16)/2+3,55,{isSmallText:!0});let n=Math.floor(e/60);n>=xn.length?n=xn.length:e%60===59&&play("powerUp",{seed:7});for(let r=0;r<n;r++){const l=xn[r];Z(l,($.x-4*l.length)/2+3,65+r*7,{isSmallText:!0})}}break}}function h1(){Ve==="playing"&&(play("powerUp",{seed:7}),Ve="success",Ke=Nu,ae!=="endless"&&(he+=Oi))}function g1(){if(Ve==="playing")switch(Ve="failure",ae){case"endless":he--,he===0?Ke=zl:Ke=Nu;break;case"single":Ke=zl;break;case"timeAttack":Ke=Nu;break}}function y1(){Z(dt.title,3,3,{isSmallText:!0});let e=0;dt.description.split(`
`).forEach(r=>{r.length>e&&(e=r.length)});const t=Math.floor((100-e*4)/2);let n=9;dt.description.split(`
`).forEach((r,l)=>{r.length!==0&&(Z(r,t,n,{isSmallText:!0}),n+=6)})}function v1(){color("light_blue");const e=100*score/Cr.targetScore;rect(e,18,100-e,6),Z(`${Math.floor(score)}`,3,21,{isSmallText:!0});const t=`target ${Cr.targetScore}`;Z(t,100-t.length*4,21,{isSmallText:!0}),color("light_red");const n=ceil(100*_n/(Vm*60));rect(100-n,24,n,6),Z(`${Math.floor(_n/60)}`,3,27,{isSmallText:!0})}function w1(){Im(),Fy(),he=Math.round(he),In+=he;let t=Math.floor(In/o1)+Ou-Ln;xn=[],t>0&&(xn=times(t,S1).filter(n=>n!=null),Ln+=xn.length),$m(sn,In,Ln),Ve="end",Ke=zl}function S1(){let e;for(let t=0;t<Tn;t++){if(e=sn[$t[Ct]],e.state==="closed")return e.state="open",e.title;Ct++,Ct>=Tn&&(Ct=0)}}const _1=`
  yy
 yyyy
yyyyyy
 yyyy
 yyyy
yy  yy
`;let Ba;async function x1(){const e=Object.assign({"./games/accelb.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a),[],import.meta.url),"./games/aerialbar.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.b),[],import.meta.url),"./games/arcfire.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.c),[],import.meta.url),"./games/balltour.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.d),[],import.meta.url),"./games/bamboo.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.e),[],import.meta.url),"./games/baserunnerdash.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.f),[],import.meta.url),"./games/bladedancer.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.g),[],import.meta.url),"./games/boarding.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.h),[],import.meta.url),"./games/boxsnake.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.i),[],import.meta.url),"./games/bsfish.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.j),[],import.meta.url),"./games/castn.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.k),[],import.meta.url),"./games/catapult.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.l),[],import.meta.url),"./games/catchingwheel.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.m),[],import.meta.url),"./games/catep.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.n),[],import.meta.url),"./games/circlew.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.o),[],import.meta.url),"./games/cleanrobo.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.p),[],import.meta.url),"./games/clockturret.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.q),[],import.meta.url),"./games/counterb.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.r),[],import.meta.url),"./games/cywall.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.s),[],import.meta.url),"./games/descents.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.t),[],import.meta.url),"./games/dlaser.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.u),[],import.meta.url),"./games/dmissile.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.v),[],import.meta.url),"./games/dpistols.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.w),[],import.meta.url),"./games/earock.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.x),[],import.meta.url),"./games/elastichero.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.y),[],import.meta.url),"./games/fallbounce.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.z),[],import.meta.url),"./games/fishgrill.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.A),[],import.meta.url),"./games/flipbomb.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.B),[],import.meta.url),"./games/flipo.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.C),[],import.meta.url),"./games/floors5.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.D),[],import.meta.url),"./games/footlaser.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.E),[],import.meta.url),"./games/fracave.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.F),[],import.meta.url),"./games/froooog.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.G),[],import.meta.url),"./games/geocent.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.H),[],import.meta.url),"./games/gpress.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.I),[],import.meta.url),"./games/grapplingh.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.J),[],import.meta.url),"./games/graveler.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.K),[],import.meta.url),"./games/gravitywell.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.L),[],import.meta.url),"./games/grenadier.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.M),[],import.meta.url),"./games/growth.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.N),[],import.meta.url),"./games/hexmin.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.O),[],import.meta.url),"./games/holes.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.P),[],import.meta.url),"./games/intow.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.Q),[],import.meta.url),"./games/jugglingact.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.R),[],import.meta.url),"./games/jumpon.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.S),[],import.meta.url),"./games/kite.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.T),[],import.meta.url),"./games/ladderdrop.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.U),[],import.meta.url),"./games/laserfortress.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.V),[],import.meta.url),"./games/levitation.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.W),[],import.meta.url),"./games/liftup.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.X),[],import.meta.url),"./games/lightdark.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.Y),[],import.meta.url),"./games/lland.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.Z),[],import.meta.url),"./games/meteoplanet.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t._),[],import.meta.url),"./games/mfield.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.$),[],import.meta.url),"./games/mirrorfloor.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a0),[],import.meta.url),"./games/mjamming.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a1),[],import.meta.url),"./games/monkeyt.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a2),[],import.meta.url),"./games/mortar.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a3),[],import.meta.url),"./games/mrider.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a4),[],import.meta.url),"./games/nsclimb.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a5),[],import.meta.url),"./games/numberball.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a6),[],import.meta.url),"./games/numberline.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a7),[],import.meta.url),"./games/orbitman.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a8),[],import.meta.url),"./games/pakupaku.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.a9),[],import.meta.url),"./games/parking.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aa),[],import.meta.url),"./games/pinclimb.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ab),[],import.meta.url),"./games/pizzaarrow.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ac),[],import.meta.url),"./games/pulsepiper.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ad),[],import.meta.url),"./games/rebirth.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ae),[],import.meta.url),"./games/reflector.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.af),[],import.meta.url),"./games/rollhold.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ag),[],import.meta.url),"./games/rolls.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ah),[],import.meta.url),"./games/rotationrod.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ai),[],import.meta.url),"./games/rwheel.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aj),[],import.meta.url),"./games/scaffold.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ak),[],import.meta.url),"./games/scrambird.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.al),[],import.meta.url),"./games/shiny.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.am),[],import.meta.url),"./games/skyraftsman.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.an),[],import.meta.url),"./games/slalom.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ao),[],import.meta.url),"./games/slashes.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ap),[],import.meta.url),"./games/slimestretcher.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aq),[],import.meta.url),"./games/snake1.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ar),[],import.meta.url),"./games/snaky.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.as),[],import.meta.url),"./games/squarebar.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.at),[],import.meta.url),"./games/sshape.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.au),[],import.meta.url),"./games/stageseparation.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.av),[],import.meta.url),"./games/stompingbubbles.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aw),[],import.meta.url),"./games/subjump.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ax),[],import.meta.url),"./games/sunflowersway.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.ay),[],import.meta.url),"./games/survivor.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.az),[],import.meta.url),"./games/swingby.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aA),[],import.meta.url),"./games/tapej.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aB),[],import.meta.url),"./games/tappump.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aC),[],import.meta.url),"./games/throwm.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aD),[],import.meta.url),"./games/thunder.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aE),[],import.meta.url),"./games/timbertest.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aF),[],import.meta.url),"./games/tpunch.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aG),[],import.meta.url),"./games/trbeam.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aH),[],import.meta.url),"./games/turbulent.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aI),[],import.meta.url),"./games/twinjumpers.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aJ),[],import.meta.url),"./games/twofaced.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aK),[],import.meta.url),"./games/udcave.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aL),[],import.meta.url),"./games/unctrl.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aM),[],import.meta.url),"./games/up1way.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aN),[],import.meta.url),"./games/updownpress.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aO),[],import.meta.url),"./games/upshot.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aP),[],import.meta.url),"./games/vineclimber.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aQ),[],import.meta.url),"./games/wavybird.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aR),[],import.meta.url),"./games/windowwasher.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aS),[],import.meta.url),"./games/windpower.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aT),[],import.meta.url),"./games/zoneb.js":()=>y(()=>import("./games-D6CeRlWV.js").then(t=>t.aU),[],import.meta.url)});for(const t in e){const n=await e[t](),r=n.default||n;r.options.theme=r.options.theme==="dark"||r.options.theme==="crt"||r.options.theme==="pixel"||r.options.theme==="shapeDark"?"dark":"simple",r.characters.push(_1),jm[r.title]=r}}const hi=["Normal","Hard","Expert","Endless"],Hn={id:-1,title:"",screenshot:"",state:"closed",targetScore:0},E1=()=>{const[e,t]=D.useState(sn),[n,r]=D.useState(Hn),[l,i]=D.useState(So),[o,s]=D.useState(!1),[u,a]=D.useState(In),[m,p]=D.useState(Ln),[h,g]=D.useState(!1),[_,w]=D.useState(!1),[O,d]=D.useState({width:0,height:0}),c=D.useRef(null),f=D.useRef(0);D.useEffect(()=>{const v=()=>{d({width:window.innerWidth,height:window.innerHeight})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),D.useEffect(()=>{const v=x=>{x.key.startsWith("Arrow")||x.key==="PageUp"||x.key==="PageDown"||x.key==="Home"||x.key==="End"||x.key==="Tab"||x.key==="Escape"||x.ctrlKey||x.altKey||S()};return!o&&(n.id===Hn.id||n.state==="open")&&addEventListener("keydown",v),()=>{removeEventListener("keydown",v)}},[o,n]),D.useEffect(()=>{const v=x=>{x.key==="Escape"&&(x.preventDefault(),k())};return o&&addEventListener("keydown",v),()=>{removeEventListener("keydown",v)}},[o]),D.useEffect(()=>{At()},[e,l,u,m]),D.useEffect(()=>{o?(f.current=0,a1(l,n,e,k,T)):c1()},[o]),D.useEffect(()=>{c.current&&(c.current.style.display="none",c.current.offsetHeight,c.current.style.display="")},[o,O]);const S=()=>{s(!0)},k=D.useCallback(()=>{s(!1),c.current&&(c.current.style.display="none",c.current.offsetHeight,c.current.style.display="")},[]),T=D.useCallback((v,x,N)=>{t(v),a(x),p(N)},[]),R=D.useCallback(()=>{const v=e.every(x=>x.state==="banned"||x.state==="closed");w(v)},[e]);D.useEffect(()=>{R()},[e,R]);const L=D.useCallback(v=>{f.current=0,r(x=>x.id===v.id?Hn:v)},[]),K=D.useCallback(v=>{t(x=>x.map(N=>N.id===v?{...N,state:A(N.state)}:N)),r(x=>x&&x.id===v?{...x,state:A(x.state)}:x)},[]),A=v=>{switch(v){case"open":return"banned";case"banned":return"open";case"closed":return"closed"}},de=D.useCallback(v=>{i(x=>v==="next"?(x+1)%hi.length:(x-1+hi.length)%hi.length)},[]),F=D.useCallback(v=>{let x;switch(v.state){case"open":x=M.jsx("img",{src:v.screenshot,alt:v.title,className:"w-[50px] h-[50px] object-cover",loading:"lazy"});break;case"closed":x=M.jsx("div",{className:"w-[50px] h-[50px] bg-gray-400"});break;case"banned":x=M.jsxs("div",{className:"relative w-[50px] h-[50px]",children:[M.jsx("img",{src:v.screenshot,alt:v.title,className:"w-full h-full object-cover",loading:"lazy"}),M.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:M.jsx("span",{className:"text-red-600 text-4xl font-bold",children:"X"})})]});break;default:x=null}return M.jsx("div",{className:"w-[50px] h-[50px] cursor-pointer hover:shadow-lg transition-shadow",onClick:()=>L(v),children:x},v.id)},[L]),st=()=>{g(!0)},yt=D.useCallback(()=>{f.current=0,Fm(),t(sn),r(Hn),i(So),a(In),p(Ln),g(!1),localStorage.removeItem(Iu)},[]),Gn=D.useCallback(()=>{g(!1),f.current++,f.current===5&&(t(v=>v.map(x=>x.state==="closed"?{...x,state:"open"}:x)),p(e.length))},[e.length]),ut=D.useCallback(()=>{const v=_?"open":"banned";t(x=>x.map(N=>N.state!=="closed"?{...N,state:v}:N)),r(x=>x&&x.state!=="closed"?{...x,state:v}:x)},[_]);if(o)return M.jsx("div",{className:"fixed inset-0 z-50",children:M.jsx(Ze,{className:"absolute top-4 right-4",onClick:k,children:"Exit Game"})});return M.jsxs("div",{className:"container mx-auto p-4",ref:c,children:[M.jsxs("div",{className:"bg-gray-800 p-4 mb-4 flex justify-between items-center",children:[M.jsx(Ze,{onClick:()=>{r(Hn),S()},variant:"outline",size:"sm",children:"Play"}),M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(Ze,{onClick:()=>de("prev"),variant:"outline",size:"sm",children:"<"}),M.jsx("span",{className:"text-sm font-medium w-20 text-center text-white",children:hi[l]}),M.jsx(Ze,{onClick:()=>de("next"),variant:"outline",size:"sm",children:">"})]})]}),n.id>=0&&M.jsxs("div",{className:"mb-4 p-4 border rounded flex items-center space-x-4",children:[F(n),M.jsx("div",{children:M.jsx("p",{className:"text-sm font-bold",children:n.state==="closed"?"???":n.title})}),M.jsxs("div",{children:[M.jsx(Ze,{onClick:S,size:"sm",className:"mr-2",disabled:n.state==="closed"||n.state==="banned",children:"Play"}),n.state!=="closed"&&M.jsx(Ze,{onClick:()=>K(n.id),variant:"outline",size:"sm",children:n.state==="banned"?"Open":"Ban"})]})]}),n.id===Hn.id&&M.jsx("div",{className:"mb-4 p-4 border rounded flex items-center space-x-4",children:F(n)}),M.jsxs("div",{className:"mb-4 p-4 border rounded flex items-center space-x-4",children:[M.jsx("div",{children:M.jsxs("p",{className:"text-m font-bold",children:["★ x ",u]})}),M.jsx("div",{children:M.jsxs("p",{className:"text-m",children:[m," games unlocked"]})})]}),M.jsx("div",{className:"flex flex-wrap gap-1",children:e.map(F)}),M.jsxs("div",{className:"mt-4 flex justify-between items-center",children:[M.jsx(Ze,{onClick:ut,variant:"outline",size:"sm",children:_?"Open All Games":"Ban All Games"}),M.jsx("div",{className:"space-x-2",children:h?M.jsxs(M.Fragment,{children:[M.jsx(Ze,{onClick:yt,variant:"destructive",size:"sm",children:"Confirm Reset"}),M.jsx(Ze,{onClick:Gn,variant:"outline",size:"sm",children:"Cancel Reset"})]}):M.jsx(Ze,{onClick:st,variant:"destructive",size:"sm",children:"Reset Game"})})]})]});function At(){try{const v={version:zm,state:{},gameModeIndex:l,starCount:u,unlockedGameCount:m};e.forEach(x=>{v.state[x.id]=x.state}),localStorage.setItem(Iu,JSON.stringify(v))}catch(v){console.error("Error saving game state:",v)}}};(async function(){await s1(),Tp(document.getElementById("root")).render(M.jsx(D.StrictMode,{children:M.jsx(E1,{})}))})();
