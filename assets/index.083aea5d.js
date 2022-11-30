var Xa=Object.defineProperty;var qa=(a,t,e)=>t in a?Xa(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var et=(a,t,e)=>(qa(a,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qs="146",Ya=0,tr=1,Za=2,xa=1,ja=2,pi=3,ti=0,Ae=1,cn=2,hn=0,Kn=1,er=2,nr=3,ir=4,$a=5,jn=100,Ja=101,Ka=102,sr=103,rr=104,Qa=200,to=201,eo=202,no=203,va=204,Ma=205,io=206,so=207,ro=208,ao=209,oo=210,lo=0,co=1,ho=2,Os=3,uo=4,fo=5,po=6,mo=7,Sa=0,go=1,_o=2,Qe=0,xo=1,vo=2,Mo=3,So=4,yo=5,ya=300,ei=301,ni=302,Us=303,Bs=304,Qi=306,Gs=1e3,Fe=1001,ks=1002,fe=1003,ar=1004,or=1005,we=1006,bo=1007,ts=1008,En=1009,wo=1010,Eo=1011,ba=1012,To=1013,Mn=1014,Sn=1015,Mi=1016,Ao=1017,Co=1018,Qn=1020,Po=1021,Lo=1022,ze=1023,Ro=1024,Do=1025,bn=1026,ii=1027,Io=1028,Fo=1029,zo=1030,No=1031,Oo=1033,rs=33776,as=33777,os=33778,ls=33779,lr=35840,cr=35841,hr=35842,ur=35843,Uo=36196,dr=37492,fr=37496,pr=37808,mr=37809,gr=37810,_r=37811,xr=37812,vr=37813,Mr=37814,Sr=37815,yr=37816,br=37817,wr=37818,Er=37819,Tr=37820,Ar=37821,Cr=36492,Tn=3e3,qt=3001,Bo=3200,Go=3201,ko=0,Vo=1,Je="srgb",yn="srgb-linear",cs=7680,Wo=519,Pr=35044,Lr="300 es",Vs=1035;class Ln{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rr=1234567;const _i=Math.PI/180,ji=180/Math.PI;function ri(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[a&255]+ae[a>>8&255]+ae[a>>16&255]+ae[a>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toLowerCase()}function oe(a,t,e){return Math.max(t,Math.min(e,a))}function Ys(a,t){return(a%t+t)%t}function Ho(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function Xo(a,t,e){return a!==t?(e-a)/(t-a):0}function xi(a,t,e){return(1-e)*a+e*t}function qo(a,t,e,n){return xi(a,t,1-Math.exp(-e*n))}function Yo(a,t=1){return t-Math.abs(Ys(a,t*2)-t)}function Zo(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function jo(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function $o(a,t){return a+Math.floor(Math.random()*(t-a+1))}function Jo(a,t){return a+Math.random()*(t-a)}function Ko(a){return a*(.5-Math.random())}function Qo(a){a!==void 0&&(Rr=a);let t=Rr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tl(a){return a*_i}function el(a){return a*ji}function Ws(a){return(a&a-1)===0&&a!==0}function nl(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function $i(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function il(a,t,e,n,i){const s=Math.cos,o=Math.sin,r=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":a.set(r*h,c*u,c*d,r*l);break;case"YZY":a.set(c*d,r*h,c*u,r*l);break;case"ZXZ":a.set(c*u,c*d,r*h,r*l);break;case"XZX":a.set(r*h,c*g,c*m,r*l);break;case"YXY":a.set(c*m,r*h,c*g,r*l);break;case"ZYZ":a.set(c*g,c*m,r*h,r*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mi(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function de(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Xt=Object.freeze({__proto__:null,DEG2RAD:_i,RAD2DEG:ji,generateUUID:ri,clamp:oe,euclideanModulo:Ys,mapLinear:Ho,inverseLerp:Xo,lerp:xi,damp:qo,pingpong:Yo,smoothstep:Zo,smootherstep:jo,randInt:$o,randFloat:Jo,randFloatSpread:Ko,seededRandom:Qo,degToRad:tl,radToDeg:el,isPowerOfTwo:Ws,ceilPowerOfTwo:nl,floorPowerOfTwo:$i,setQuaternionFromProperEuler:il,normalize:de,denormalize:mi});class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Te{constructor(){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],E=i[1],b=i[4],w=i[7],y=i[2],C=i[5],z=i[8];return s[0]=o*p+r*E+c*y,s[3]=o*f+r*b+c*C,s[6]=o*_+r*w+c*z,s[1]=l*p+h*E+u*y,s[4]=l*f+h*b+u*C,s[7]=l*_+h*w+u*z,s[2]=d*p+m*E+g*y,s[5]=d*f+m*b+g*C,s[8]=d*_+m*w+g*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-n*s*h+n*r*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],u=h*o-r*l,d=r*c-h*s,m=l*s-o*c,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(i*l-h*n)*p,t[2]=(r*n-i*o)*p,t[3]=d*p,t[4]=(h*e-i*c)*p,t[5]=(i*s-r*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*r)+o+t,-i*l,i*c,-i*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],r=i[6],c=i[1],l=i[4],h=i[7];return i[0]=e*s+n*c,i[3]=e*o+n*l,i[6]=e*r+n*h,i[1]=-n*s+e*c,i[4]=-n*o+e*l,i[7]=-n*r+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function wa(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Ji(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function wn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function qi(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const hs={[Je]:{[yn]:wn},[yn]:{[Je]:qi}},Ce={legacyMode:!0,get workingColorSpace(){return yn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.legacyMode||t===e||!t||!e)return a;if(hs[t]&&hs[t][e]!==void 0){const n=hs[t][e];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}},Ea={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={r:0,g:0,b:0},Pe={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function us(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}function Ti(a,t){return t.r=a.r,t.g=a.g,t.b=a.b,t}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=yn){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=yn){if(t=Ys(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=us(o,s,t+1/3),this.g=us(o,s,t),this.b=us(o,s,t-1/3)}return Ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ce.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ce.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ce.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ce.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Je){const n=Ea[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Ce.fromWorkingColorSpace(Ti(this,$t),t),oe($t.r*255,0,255)<<16^oe($t.g*255,0,255)<<8^oe($t.b*255,0,255)<<0}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=yn){Ce.fromWorkingColorSpace(Ti(this,$t),e);const n=$t.r,i=$t.g,s=$t.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const u=o-r;switch(l=h<=.5?u/(o+r):u/(2-o-r),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=yn){return Ce.fromWorkingColorSpace(Ti(this,$t),e),t.r=$t.r,t.g=$t.g,t.b=$t.b,t}getStyle(t=Je){return Ce.fromWorkingColorSpace(Ti(this,$t),t),t!==Je?`color(${t} ${$t.r} ${$t.g} ${$t.b})`:`rgb(${$t.r*255|0},${$t.g*255|0},${$t.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Pe),Pe.h+=t,Pe.s+=e,Pe.l+=n,this.setHSL(Pe.h,Pe.s,Pe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pe),t.getHSL(Ei);const n=xi(Pe.h,Ei.h,e),i=xi(Pe.s,Ei.s,e),s=xi(Pe.l,Ei.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Bt.NAMES=Ea;let Fn;class Ta{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fn===void 0&&(Fn=Ji("canvas")),Fn.width=t.width,Fn.height=t.height;const n=Fn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Aa{constructor(t=null){this.isSource=!0,this.uuid=ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(ds(i[o].image)):s.push(ds(i[o]))}else s=ds(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ds(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ta.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sl=0;class Oe extends Ln{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Fe,i=Fe,s=we,o=ts,r=ze,c=En,l=1,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=ri(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ya)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=ya;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,w=(m+1)/2,y=(_+1)/2,C=(h+d)/4,z=(u+p)/4,v=(g+f)/4;return b>w&&b>y?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=C/n,s=z/n):w>y?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=z/s,i=v/s),this.set(n,i,s,e),this}let E=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(u-p)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends Ln{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:we,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ca extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||c!==d||l!==m||h!==g){let f=1-r;const _=c*d+l*m+h*g+u*p,E=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const y=Math.sqrt(b),C=Math.atan2(y,_*E);f=Math.sin(f*C)/y,r=Math.sin(r*C)/y}const w=r*E;if(c=c*f+d*w,l=l*f+m*w,h=h*f+g*w,u=u*f+p*w,f===1-r){const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-r*m,t[e+2]=l*g+h*m+r*d-c*u,t[e+3]=h*g-r*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),u=r(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>r&&n>u){const m=2*Math.sqrt(1+n-r-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(r>u){const m=2*Math.sqrt(1+r-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-r);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*r+i*l-s*c,this._y=i*h+o*c+s*r-n*l,this._z=s*h+o*l+n*c-i*r,this._w=o*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,c=t.w,l=c*e+o*i-r*n,h=c*n+r*e-s*i,u=c*i+s*n-o*e,d=-s*e-o*n-r*i;return this.x=l*c+d*-s+h*-r-u*-o,this.y=h*c+d*-o+u*-s-l*-r,this.z=u*c+d*-r+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,c=e.z;return this.x=i*c-s*r,this.y=s*o-n*c,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fs.copy(this).projectOnVector(t),this.sub(fs)}reflect(t){return this.sub(fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fs=new P,Dr=new ai;class oi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>r&&(r=d)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>r&&(r=d)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)pn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(pn)}else n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox),ps.applyMatrix4(t.matrixWorld),this.union(ps);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hi),Ai.subVectors(this.max,hi),zn.subVectors(t.a,hi),Nn.subVectors(t.b,hi),On.subVectors(t.c,hi),en.subVectors(Nn,zn),nn.subVectors(On,Nn),mn.subVectors(zn,On);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-mn.z,mn.y,en.z,0,-en.x,nn.z,0,-nn.x,mn.z,0,-mn.x,-en.y,en.x,0,-nn.y,nn.x,0,-mn.y,mn.x,0];return!ms(e,zn,Nn,On,Ai)||(e=[1,0,0,0,1,0,0,0,1],!ms(e,zn,Nn,On,Ai))?!1:(Ci.crossVectors(en,nn),e=[Ci.x,Ci.y,Ci.z],ms(e,zn,Nn,On,Ai))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return pn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qe=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,ps=new oi,zn=new P,Nn=new P,On=new P,en=new P,nn=new P,mn=new P,hi=new P,Ai=new P,Ci=new P,gn=new P;function ms(a,t,e,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){gn.fromArray(a,s);const r=i.x*Math.abs(gn.x)+i.y*Math.abs(gn.y)+i.z*Math.abs(gn.z),c=t.dot(gn),l=e.dot(gn),h=n.dot(gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const al=new oi,ui=new P,gs=new P;class yi{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):al.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ui.subVectors(t,this.center);const e=ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ui,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ui.copy(t.center).add(gs)),this.expandByPoint(ui.copy(t.center).sub(gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new P,_s=new P,Pi=new P,sn=new P,xs=new P,Li=new P,vs=new P;class Zs{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.direction).multiplyScalar(e).add(this.origin),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_s.copy(t).add(e).multiplyScalar(.5),Pi.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(_s);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Pi),r=sn.dot(this.direction),c=-sn.dot(Pi),l=sn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-r,d=o*r-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,m=u*(u+o*d+2*r)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+r)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+r)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+r)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+r)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+r)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Pi).multiplyScalar(d).add(_s),m}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const n=Ye.dot(this.direction),i=Ye.dot(Ye)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,c=n+o;return r<0&&c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(r=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,n,i,s){xs.subVectors(e,t),Li.subVectors(n,t),vs.crossVectors(xs,Li);let o=this.direction.dot(vs),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;sn.subVectors(this.origin,t);const c=r*this.direction.dot(Li.crossVectors(sn,Li));if(c<0)return null;const l=r*this.direction.dot(xs.cross(sn));if(l<0||c+l>o)return null;const h=-r*sn.dot(vs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,c,l,h,u,d,m,g,p,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Un.setFromMatrixColumn(t,0).length(),s=1/Un.setFromMatrixColumn(t,1).length(),o=1/Un.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*u,g=r*h,p=r*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-p*l,e[9]=-r*c,e[2]=p-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,p=l*u;e[0]=d+p*r,e[4]=g*r-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=p+d*r,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,p=l*u;e[0]=d-p*r,e[4]=-o*u,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=p-d*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=r*h,p=r*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+p,e[1]=c*u,e[5]=p*l+d,e[9]=m*l-g,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=r*c,p=r*l;e[0]=c*h,e[4]=p-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-p*u}else if(t.order==="XZY"){const d=o*c,m=o*l,g=r*c,p=r*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+p,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=r*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ol,t,ll)}lookAt(t,e,n){const i=this.elements;return ge.subVectors(t,e),ge.lengthSq()===0&&(ge.z=1),ge.normalize(),rn.crossVectors(n,ge),rn.lengthSq()===0&&(Math.abs(n.z)===1?ge.x+=1e-4:ge.z+=1e-4,ge.normalize(),rn.crossVectors(n,ge)),rn.normalize(),Ri.crossVectors(ge,rn),i[0]=rn.x,i[4]=Ri.x,i[8]=ge.x,i[1]=rn.y,i[5]=Ri.y,i[9]=ge.y,i[2]=rn.z,i[6]=Ri.z,i[10]=ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],E=n[3],b=n[7],w=n[11],y=n[15],C=i[0],z=i[4],v=i[8],T=i[12],F=i[1],q=i[5],at=i[9],O=i[13],I=i[2],X=i[6],Z=i[10],j=i[14],V=i[3],D=i[7],N=i[11],Q=i[15];return s[0]=o*C+r*F+c*I+l*V,s[4]=o*z+r*q+c*X+l*D,s[8]=o*v+r*at+c*Z+l*N,s[12]=o*T+r*O+c*j+l*Q,s[1]=h*C+u*F+d*I+m*V,s[5]=h*z+u*q+d*X+m*D,s[9]=h*v+u*at+d*Z+m*N,s[13]=h*T+u*O+d*j+m*Q,s[2]=g*C+p*F+f*I+_*V,s[6]=g*z+p*q+f*X+_*D,s[10]=g*v+p*at+f*Z+_*N,s[14]=g*T+p*O+f*j+_*Q,s[3]=E*C+b*F+w*I+y*V,s[7]=E*z+b*q+w*X+y*D,s[11]=E*v+b*at+w*Z+y*N,s[15]=E*T+b*O+w*j+y*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],p=t[7],f=t[11],_=t[15];return g*(+s*c*u-i*l*u-s*r*d+n*l*d+i*r*m-n*c*m)+p*(+e*c*m-e*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+f*(+e*l*u-e*r*m-s*o*u+n*o*m+s*r*h-n*l*h)+_*(-i*r*h-e*c*u+e*r*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],p=t[13],f=t[14],_=t[15],E=u*f*l-p*d*l+p*c*m-r*f*m-u*c*_+r*d*_,b=g*d*l-h*f*l-g*c*m+o*f*m+h*c*_-o*d*_,w=h*p*l-g*u*l+g*r*m-o*p*m-h*r*_+o*u*_,y=g*u*c-h*p*c-g*r*d+o*p*d+h*r*f-o*u*f,C=e*E+n*b+i*w+s*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/C;return t[0]=E*z,t[1]=(p*d*s-u*f*s-p*i*m+n*f*m+u*i*_-n*d*_)*z,t[2]=(r*f*s-p*c*s+p*i*l-n*f*l-r*i*_+n*c*_)*z,t[3]=(u*c*s-r*d*s-u*i*l+n*d*l+r*i*m-n*c*m)*z,t[4]=b*z,t[5]=(h*f*s-g*d*s+g*i*m-e*f*m-h*i*_+e*d*_)*z,t[6]=(g*c*s-o*f*s-g*i*l+e*f*l+o*i*_-e*c*_)*z,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*m+e*c*m)*z,t[8]=w*z,t[9]=(g*u*s-h*p*s-g*n*m+e*p*m+h*n*_-e*u*_)*z,t[10]=(o*p*s-g*r*s+g*n*l-e*p*l-o*n*_+e*r*_)*z,t[11]=(h*r*s-o*u*s-h*n*l+e*u*l+o*n*m-e*r*m)*z,t[12]=y*z,t[13]=(h*p*i-g*u*i+g*n*d-e*p*d-h*n*f+e*u*f)*z,t[14]=(g*r*i-o*p*i-g*n*c+e*p*c+o*n*f-e*r*f)*z,t[15]=(o*u*i-h*r*i+h*n*c-e*u*c-o*n*d+e*r*d)*z,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,c=t.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*o,0,l*c-i*r,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,c=e._w,l=s+s,h=o+o,u=r+r,d=s*l,m=s*h,g=s*u,p=o*h,f=o*u,_=r*u,E=c*l,b=c*h,w=c*u,y=n.x,C=n.y,z=n.z;return i[0]=(1-(p+_))*y,i[1]=(m+w)*y,i[2]=(g-b)*y,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(d+_))*C,i[6]=(f+E)*C,i[7]=0,i[8]=(g+b)*z,i[9]=(f-E)*z,i[10]=(1-(d+p))*z,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Un.set(i[0],i[1],i[2]).length();const o=Un.set(i[4],i[5],i[6]).length(),r=Un.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Le.copy(this);const l=1/s,h=1/o,u=1/r;return Le.elements[0]*=l,Le.elements[1]*=l,Le.elements[2]*=l,Le.elements[4]*=h,Le.elements[5]*=h,Le.elements[6]*=h,Le.elements[8]*=u,Le.elements[9]*=u,Le.elements[10]*=u,e.setFromRotationMatrix(Le),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){const r=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=c,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){const r=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-s),u=(e+t)*c,d=(n+i)*l,m=(o+s)*h;return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Un=new P,Le=new Ct,ol=new P(0,0,0),ll=new P(1,1,1),rn=new P,Ri=new P,ge=new P,Ir=new Ct,Fr=new ai;class bi{constructor(t=0,e=0,n=0,i=bi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ir.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ir,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fr.setFromEuler(this),this.setFromQuaternion(Fr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}bi.DefaultOrder="XYZ";bi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class js{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cl=0;const zr=new P,Bn=new ai,Ze=new Ct,Di=new P,di=new P,hl=new P,ul=new ai,Nr=new P(1,0,0),Or=new P(0,1,0),Ur=new P(0,0,1),dl={type:"added"},Br={type:"removed"};class pe extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DefaultUp.clone();const t=new P,e=new bi,n=new ai,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Te}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=pe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pe.DefaultMatrixWorldAutoUpdate,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.premultiply(Bn),this}rotateX(t){return this.rotateOnAxis(Nr,t)}rotateY(t){return this.rotateOnAxis(Or,t)}rotateZ(t){return this.rotateOnAxis(Ur,t)}translateOnAxis(t,e){return zr.copy(t).applyQuaternion(this.quaternion),this.position.add(zr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nr,t)}translateY(t){return this.translateOnAxis(Or,t)}translateZ(t){return this.translateOnAxis(Ur,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Di.copy(t):Di.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(di,Di,this.up):Ze.lookAt(Di,di,this.up),this.quaternion.setFromRotationMatrix(Ze),i&&(Ze.extractRotation(i.matrixWorld),Bn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(dl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Br)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Br)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,t,hl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,ul,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DefaultUp=new P(0,1,0);pe.DefaultMatrixAutoUpdate=!0;pe.DefaultMatrixWorldAutoUpdate=!0;const Re=new P,je=new P,Ms=new P,$e=new P,Gn=new P,kn=new P,Gr=new P,Ss=new P,ys=new P,bs=new P;class Ke{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Re.subVectors(t,e),i.cross(Re);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Re.subVectors(i,e),je.subVectors(n,e),Ms.subVectors(t,e);const o=Re.dot(Re),r=Re.dot(je),c=Re.dot(Ms),l=je.dot(je),h=je.dot(Ms),u=o*l-r*r;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(l*c-r*h)*d,g=(o*h-r*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,s,o,r,c){return this.getBarycoord(t,e,n,i,$e),c.set(0,0),c.addScaledVector(s,$e.x),c.addScaledVector(o,$e.y),c.addScaledVector(r,$e.z),c}static isFrontFacing(t,e,n,i){return Re.subVectors(n,e),je.subVectors(t,e),Re.cross(je).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Re.subVectors(this.c,this.b),je.subVectors(this.a,this.b),Re.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ke.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;Gn.subVectors(i,n),kn.subVectors(s,n),Ss.subVectors(t,n);const c=Gn.dot(Ss),l=kn.dot(Ss);if(c<=0&&l<=0)return e.copy(n);ys.subVectors(t,i);const h=Gn.dot(ys),u=kn.dot(ys);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gn,o);bs.subVectors(t,s);const m=Gn.dot(bs),g=kn.dot(bs);if(g>=0&&m<=g)return e.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(kn,r);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Gr.subVectors(s,i),r=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Gr,r);const _=1/(f+p+d);return o=p*_,r=d*_,e.copy(n).addScaledVector(Gn,o).addScaledVector(kn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let fl=0;class wi extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Kn,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=va,this.blendDst=Ma,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const c=s[r];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ki extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new P,Ii=new Dt;class Ve{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Pr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ii.fromBufferAttribute(this,e),Ii.applyMatrix3(t),this.setXY(e,Ii.x,Ii.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pa extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class La extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pl=0;const ye=new Ct,ws=new pe,Vn=new P,_e=new oi,fi=new oi,ee=new P;class ve extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wa(t)?La:Pa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ye.makeRotationFromQuaternion(t),this.applyMatrix4(ye),this}rotateX(t){return ye.makeRotationX(t),this.applyMatrix4(ye),this}rotateY(t){return ye.makeRotationY(t),this.applyMatrix4(ye),this}rotateZ(t){return ye.makeRotationZ(t),this.applyMatrix4(ye),this}translate(t,e,n){return ye.makeTranslation(t,e,n),this.applyMatrix4(ye),this}scale(t,e,n){return ye.makeScale(t,e,n),this.applyMatrix4(ye),this}lookAt(t){return ws.lookAt(t),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];_e.setFromBufferAttribute(s),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,_e.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,_e.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(_e.min),this.boundingBox.expandByPoint(_e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(_e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(_e.min,fi.min),_e.expandByPoint(ee),ee.addVectors(_e.max,fi.max),_e.expandByPoint(ee)):(_e.expandByPoint(fi.min),_e.expandByPoint(fi.max))}_e.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)ee.fromBufferAttribute(r,l),c&&(Vn.fromBufferAttribute(t,l),ee.add(Vn)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let F=0;F<r;F++)l[F]=new P,h[F]=new P;const u=new P,d=new P,m=new P,g=new Dt,p=new Dt,f=new Dt,_=new P,E=new P;function b(F,q,at){u.fromArray(i,F*3),d.fromArray(i,q*3),m.fromArray(i,at*3),g.fromArray(o,F*2),p.fromArray(o,q*2),f.fromArray(o,at*2),d.sub(u),m.sub(u),p.sub(g),f.sub(g);const O=1/(p.x*f.y-f.x*p.y);!isFinite(O)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(O),E.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(O),l[F].add(_),l[q].add(_),l[at].add(_),h[F].add(E),h[q].add(E),h[at].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let F=0,q=w.length;F<q;++F){const at=w[F],O=at.start,I=at.count;for(let X=O,Z=O+I;X<Z;X+=3)b(n[X+0],n[X+1],n[X+2])}const y=new P,C=new P,z=new P,v=new P;function T(F){z.fromArray(s,F*3),v.copy(z);const q=l[F];y.copy(q),y.sub(z.multiplyScalar(z.dot(q))).normalize(),C.crossVectors(v,q);const O=C.dot(h[F])<0?-1:1;c[F*4]=y.x,c[F*4+1]=y.y,c[F*4+2]=y.z,c[F*4+3]=O}for(let F=0,q=w.length;F<q;++F){const at=w[F],O=at.start,I=at.count;for(let X=O,Z=O+I;X<Z;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,r=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),r.add(h),c.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,u=r.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){r.isInterleavedBufferAttribute?m=c[p]*r.data.stride+r.offset:m=c[p]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const kr=new Ct,Wn=new Zs,Es=new yi,an=new P,on=new P,ln=new P,Ts=new P,As=new P,Cs=new P,Fi=new P,zi=new P,Ni=new P,Oi=new Dt,Ui=new Dt,Bi=new Dt,Ps=new P,Gi=new P;class ke extends pe{constructor(t=new ve,e=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),t.ray.intersectsSphere(Es)===!1)||(kr.copy(s).invert(),Wn.copy(t.ray).applyMatrix4(kr),n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(r!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],E=i[_.materialIndex],b=Math.max(_.start,g.start),w=Math.min(r.count,Math.min(_.start+_.count,g.start+g.count));for(let y=b,C=w;y<C;y+=3){const z=r.getX(y),v=r.getX(y+1),T=r.getX(y+2);o=ki(this,E,t,Wn,c,l,h,u,d,z,v,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(r.count,g.start+g.count);for(let _=p,E=f;_<E;_+=3){const b=r.getX(_),w=r.getX(_+1),y=r.getX(_+2);o=ki(this,i,t,Wn,c,l,h,u,d,b,w,y),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],E=i[_.materialIndex],b=Math.max(_.start,g.start),w=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let y=b,C=w;y<C;y+=3){const z=y,v=y+1,T=y+2;o=ki(this,E,t,Wn,c,l,h,u,d,z,v,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let _=p,E=f;_<E;_+=3){const b=_,w=_+1,y=_+2;o=ki(this,i,t,Wn,c,l,h,u,d,b,w,y),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function ml(a,t,e,n,i,s,o,r){let c;if(t.side===Ae?c=n.intersectTriangle(o,s,i,!0,r):c=n.intersectTriangle(i,s,o,t.side!==cn,r),c===null)return null;Gi.copy(r),Gi.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Gi);return l<e.near||l>e.far?null:{distance:l,point:Gi.clone(),object:a}}function ki(a,t,e,n,i,s,o,r,c,l,h,u){an.fromBufferAttribute(i,l),on.fromBufferAttribute(i,h),ln.fromBufferAttribute(i,u);const d=a.morphTargetInfluences;if(s&&d){Fi.set(0,0,0),zi.set(0,0,0),Ni.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=d[g],_=s[g];f!==0&&(Ts.fromBufferAttribute(_,l),As.fromBufferAttribute(_,h),Cs.fromBufferAttribute(_,u),o?(Fi.addScaledVector(Ts,f),zi.addScaledVector(As,f),Ni.addScaledVector(Cs,f)):(Fi.addScaledVector(Ts.sub(an),f),zi.addScaledVector(As.sub(on),f),Ni.addScaledVector(Cs.sub(ln),f)))}an.add(Fi),on.add(zi),ln.add(Ni)}a.isSkinnedMesh&&(a.boneTransform(l,an),a.boneTransform(h,on),a.boneTransform(u,ln));const m=ml(a,t,e,n,an,on,ln,Ps);if(m){r&&(Oi.fromBufferAttribute(r,l),Ui.fromBufferAttribute(r,h),Bi.fromBufferAttribute(r,u),m.uv=Ke.getUV(Ps,an,on,ln,Oi,Ui,Bi,new Dt)),c&&(Oi.fromBufferAttribute(c,l),Ui.fromBufferAttribute(c,h),Bi.fromBufferAttribute(c,u),m.uv2=Ke.getUV(Ps,an,on,ln,Oi,Ui,Bi,new Dt));const g={a:l,b:h,c:u,normal:new P,materialIndex:0};Ke.getNormal(an,on,ln,g.normal),m.face=g}return m}class Cn extends ve{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function g(p,f,_,E,b,w,y,C,z,v,T){const F=w/z,q=y/v,at=w/2,O=y/2,I=C/2,X=z+1,Z=v+1;let j=0,V=0;const D=new P;for(let N=0;N<Z;N++){const Q=N*q-O;for(let J=0;J<X;J++){const $=J*F-at;D[p]=$*E,D[f]=Q*b,D[_]=I,l.push(D.x,D.y,D.z),D[p]=0,D[f]=0,D[_]=C>0?1:-1,h.push(D.x,D.y,D.z),u.push(J/z),u.push(1-N/v),j+=1}}for(let N=0;N<v;N++)for(let Q=0;Q<z;Q++){const J=d+Q+X*N,$=d+Q+X*(N+1),lt=d+(Q+1)+X*(N+1),St=d+(Q+1)+X*N;c.push(J,$,St),c.push($,lt,St),V+=6}r.addGroup(m,V,T),m+=V,d+=j}}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function si(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function he(a){const t={};for(let e=0;e<a.length;e++){const n=si(a[e]);for(const i in n)t[i]=n[i]}return t}function gl(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}const _l={clone:si,merge:he};var xl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xl,this.fragmentShader=vl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=gl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ra extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ee extends Ra{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(_i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_i*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hn=90,Xn=1;class Ml extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ee(Hn,Xn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const s=new Ee(Hn,Xn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const o=new Ee(Hn,Xn,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const r=new Ee(Hn,Xn,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new P(0,-1,0)),this.add(r);const c=new Ee(Hn,Xn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const l=new Ee(Hn,Xn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Qe,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Da extends Oe{constructor(t,e,n,i,s,o,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ei,super(t,e,n,i,s,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sl extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Da(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cn(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:hn});s.uniforms.tEquirect.value=e;const o=new ke(i,s),r=e.minFilter;return e.minFilter===ts&&(e.minFilter=we),new Ml(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Ls=new P,yl=new P,bl=new Te;class _n{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ls.subVectors(n,e).cross(yl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Ls),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bl.getNormalMatrix(t),i=this.coplanarPoint(Ls).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new yi,Vi=new P;class Ia{constructor(t=new _n,e=new _n,n=new _n,i=new _n,s=new _n,o=new _n){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],E=n[14],b=n[15];return e[0].setComponents(r-i,u-c,p-d,b-f).normalize(),e[1].setComponents(r+i,u+c,p+d,b+f).normalize(),e[2].setComponents(r+s,u+l,p+m,b+_).normalize(),e[3].setComponents(r-s,u-l,p-m,b-_).normalize(),e[4].setComponents(r-o,u-h,p-g,b-E).normalize(),e[5].setComponents(r+o,u+h,p+g,b+E).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Vi.x=i.normal.x>0?t.max.x:t.min.x,Vi.y=i.normal.y>0?t.max.y:t.min.y,Vi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fa(){let a=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function wl(a,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,m=h.updateRange;a.bindBuffer(u,l),m.count===-1?a.bufferSubData(u,0,d):(e?a.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:r,update:c}}class $s extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,u=t/r,d=e/c,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const E=_*d-o;for(let b=0;b<l;b++){const w=b*u-s;g.push(w,-E,0),p.push(0,0,1),f.push(b/r),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<r;E++){const b=E+l*_,w=E+l*(_+1),y=E+1+l*(_+1),C=E+1+l*_;m.push(b,w,C),m.push(w,y,C)}this.setIndex(m),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(p,3)),this.setAttribute("uv",new Ne(f,2))}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var El=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Al=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ll=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rl="vec3 transformed = vec3( position );",Dl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Il=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Fl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ql=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$l=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ql=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ec=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ic=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ac=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,fc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,_c=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,vc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ec=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ac=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ic=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Oc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Bc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$c=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,rh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ah=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ch=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ph=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,mh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_h=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ch=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ph=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,eu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Et={alphamap_fragment:El,alphamap_pars_fragment:Tl,alphatest_fragment:Al,alphatest_pars_fragment:Cl,aomap_fragment:Pl,aomap_pars_fragment:Ll,begin_vertex:Rl,beginnormal_vertex:Dl,bsdfs:Il,iridescence_fragment:Fl,bumpmap_pars_fragment:zl,clipping_planes_fragment:Nl,clipping_planes_pars_fragment:Ol,clipping_planes_pars_vertex:Ul,clipping_planes_vertex:Bl,color_fragment:Gl,color_pars_fragment:kl,color_pars_vertex:Vl,color_vertex:Wl,common:Hl,cube_uv_reflection_fragment:Xl,defaultnormal_vertex:ql,displacementmap_pars_vertex:Yl,displacementmap_vertex:Zl,emissivemap_fragment:jl,emissivemap_pars_fragment:$l,encodings_fragment:Jl,encodings_pars_fragment:Kl,envmap_fragment:Ql,envmap_common_pars_fragment:tc,envmap_pars_fragment:ec,envmap_pars_vertex:nc,envmap_physical_pars_fragment:pc,envmap_vertex:ic,fog_vertex:sc,fog_pars_vertex:rc,fog_fragment:ac,fog_pars_fragment:oc,gradientmap_pars_fragment:lc,lightmap_fragment:cc,lightmap_pars_fragment:hc,lights_lambert_fragment:uc,lights_lambert_pars_fragment:dc,lights_pars_begin:fc,lights_toon_fragment:mc,lights_toon_pars_fragment:gc,lights_phong_fragment:_c,lights_phong_pars_fragment:xc,lights_physical_fragment:vc,lights_physical_pars_fragment:Mc,lights_fragment_begin:Sc,lights_fragment_maps:yc,lights_fragment_end:bc,logdepthbuf_fragment:wc,logdepthbuf_pars_fragment:Ec,logdepthbuf_pars_vertex:Tc,logdepthbuf_vertex:Ac,map_fragment:Cc,map_pars_fragment:Pc,map_particle_fragment:Lc,map_particle_pars_fragment:Rc,metalnessmap_fragment:Dc,metalnessmap_pars_fragment:Ic,morphcolor_vertex:Fc,morphnormal_vertex:zc,morphtarget_pars_vertex:Nc,morphtarget_vertex:Oc,normal_fragment_begin:Uc,normal_fragment_maps:Bc,normal_pars_fragment:Gc,normal_pars_vertex:kc,normal_vertex:Vc,normalmap_pars_fragment:Wc,clearcoat_normal_fragment_begin:Hc,clearcoat_normal_fragment_maps:Xc,clearcoat_pars_fragment:qc,iridescence_pars_fragment:Yc,output_fragment:Zc,packing:jc,premultiplied_alpha_fragment:$c,project_vertex:Jc,dithering_fragment:Kc,dithering_pars_fragment:Qc,roughnessmap_fragment:th,roughnessmap_pars_fragment:eh,shadowmap_pars_fragment:nh,shadowmap_pars_vertex:ih,shadowmap_vertex:sh,shadowmask_pars_fragment:rh,skinbase_vertex:ah,skinning_pars_vertex:oh,skinning_vertex:lh,skinnormal_vertex:ch,specularmap_fragment:hh,specularmap_pars_fragment:uh,tonemapping_fragment:dh,tonemapping_pars_fragment:fh,transmission_fragment:ph,transmission_pars_fragment:mh,uv_pars_fragment:gh,uv_pars_vertex:_h,uv_vertex:xh,uv2_pars_fragment:vh,uv2_pars_vertex:Mh,uv2_vertex:Sh,worldpos_vertex:yh,background_vert:bh,background_frag:wh,backgroundCube_vert:Eh,backgroundCube_frag:Th,cube_vert:Ah,cube_frag:Ch,depth_vert:Ph,depth_frag:Lh,distanceRGBA_vert:Rh,distanceRGBA_frag:Dh,equirect_vert:Ih,equirect_frag:Fh,linedashed_vert:zh,linedashed_frag:Nh,meshbasic_vert:Oh,meshbasic_frag:Uh,meshlambert_vert:Bh,meshlambert_frag:Gh,meshmatcap_vert:kh,meshmatcap_frag:Vh,meshnormal_vert:Wh,meshnormal_frag:Hh,meshphong_vert:Xh,meshphong_frag:qh,meshphysical_vert:Yh,meshphysical_frag:Zh,meshtoon_vert:jh,meshtoon_frag:$h,points_vert:Jh,points_frag:Kh,shadow_vert:Qh,shadow_frag:tu,sprite_vert:eu,sprite_frag:nu},nt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Te},uv2Transform:{value:new Te},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Te}}},Ge={basic:{uniforms:he([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:he([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:he([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:he([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:he([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:he([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:he([nt.points,nt.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:he([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:he([nt.common,nt.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:he([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:he([nt.sprite,nt.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:he([nt.common,nt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:he([nt.lights,nt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Ge.physical={uniforms:he([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};function iu(a,t,e,n,i,s,o){const r=new Bt(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(f,_){let E=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?e:t).get(b));const w=a.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(b=null),b===null?p(r,c):b&&b.isColor&&(p(b,1),E=!0),(a.autoClear||E)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Qi)?(h===void 0&&(h=new ke(new Cn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:si(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,z,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(u!==b||d!==b.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=a.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ke(new $s(2,2),new Pn({name:"BackgroundMaterial",uniforms:si(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=a.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){n.buffers.color.setClear(f.r,f.g,f.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(f,_=1){r.set(f),c=_,p(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(r,c)},render:g}}function su(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},c=f(null);let l=c,h=!1;function u(I,X,Z,j,V){let D=!1;if(o){const N=p(j,Z,X);l!==N&&(l=N,m(l.object)),D=_(I,j,Z,V),D&&E(I,j,Z,V)}else{const N=X.wireframe===!0;(l.geometry!==j.id||l.program!==Z.id||l.wireframe!==N)&&(l.geometry=j.id,l.program=Z.id,l.wireframe=N,D=!0)}V!==null&&e.update(V,34963),(D||h)&&(h=!1,v(I,X,Z,j),V!==null&&a.bindBuffer(34963,e.get(V).buffer))}function d(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?a.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?a.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,X,Z){const j=Z.wireframe===!0;let V=r[I.id];V===void 0&&(V={},r[I.id]=V);let D=V[X.id];D===void 0&&(D={},V[X.id]=D);let N=D[j];return N===void 0&&(N=f(d()),D[j]=N),N}function f(I){const X=[],Z=[],j=[];for(let V=0;V<i;V++)X[V]=0,Z[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:j,object:I,attributes:{},index:null}}function _(I,X,Z,j){const V=l.attributes,D=X.attributes;let N=0;const Q=Z.getAttributes();for(const J in Q)if(Q[J].location>=0){const lt=V[J];let St=D[J];if(St===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;N++}return l.attributesNum!==N||l.index!==j}function E(I,X,Z,j){const V={},D=X.attributes;let N=0;const Q=Z.getAttributes();for(const J in Q)if(Q[J].location>=0){let lt=D[J];lt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),V[J]=St,N++}l.attributes=V,l.attributesNum=N,l.index=j}function b(){const I=l.newAttributes;for(let X=0,Z=I.length;X<Z;X++)I[X]=0}function w(I){y(I,0)}function y(I,X){const Z=l.newAttributes,j=l.enabledAttributes,V=l.attributeDivisors;Z[I]=1,j[I]===0&&(a.enableVertexAttribArray(I),j[I]=1),V[I]!==X&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,X),V[I]=X)}function C(){const I=l.newAttributes,X=l.enabledAttributes;for(let Z=0,j=X.length;Z<j;Z++)X[Z]!==I[Z]&&(a.disableVertexAttribArray(Z),X[Z]=0)}function z(I,X,Z,j,V,D){n.isWebGL2===!0&&(Z===5124||Z===5125)?a.vertexAttribIPointer(I,X,Z,V,D):a.vertexAttribPointer(I,X,Z,j,V,D)}function v(I,X,Z,j){if(n.isWebGL2===!1&&(I.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const V=j.attributes,D=Z.getAttributes(),N=X.defaultAttributeValues;for(const Q in D){const J=D[Q];if(J.location>=0){let $=V[Q];if($===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const lt=$.normalized,St=$.itemSize,H=e.get($);if(H===void 0)continue;const Ot=H.buffer,xt=H.type,yt=H.bytesPerElement;if($.isInterleavedBufferAttribute){const ot=$.data,Gt=ot.stride,At=$.offset;if(ot.isInstancedInterleavedBuffer){for(let gt=0;gt<J.locationSize;gt++)y(J.location+gt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let gt=0;gt<J.locationSize;gt++)w(J.location+gt);a.bindBuffer(34962,Ot);for(let gt=0;gt<J.locationSize;gt++)z(J.location+gt,St/J.locationSize,xt,lt,Gt*yt,(At+St/J.locationSize*gt)*yt)}else{if($.isInstancedBufferAttribute){for(let ot=0;ot<J.locationSize;ot++)y(J.location+ot,$.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ot=0;ot<J.locationSize;ot++)w(J.location+ot);a.bindBuffer(34962,Ot);for(let ot=0;ot<J.locationSize;ot++)z(J.location+ot,St/J.locationSize,xt,lt,St*yt,St/J.locationSize*ot*yt)}}else if(N!==void 0){const lt=N[Q];if(lt!==void 0)switch(lt.length){case 2:a.vertexAttrib2fv(J.location,lt);break;case 3:a.vertexAttrib3fv(J.location,lt);break;case 4:a.vertexAttrib4fv(J.location,lt);break;default:a.vertexAttrib1fv(J.location,lt)}}}}C()}function T(){at();for(const I in r){const X=r[I];for(const Z in X){const j=X[Z];for(const V in j)g(j[V].object),delete j[V];delete X[Z]}delete r[I]}}function F(I){if(r[I.id]===void 0)return;const X=r[I.id];for(const Z in X){const j=X[Z];for(const V in j)g(j[V].object),delete j[V];delete X[Z]}delete r[I.id]}function q(I){for(const X in r){const Z=r[X];if(Z[I.id]===void 0)continue;const j=Z[I.id];for(const V in j)g(j[V].object),delete j[V];delete Z[I.id]}}function at(){O(),h=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:at,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:F,releaseStatesOfProgram:q,initAttributes:b,enableAttribute:w,disableUnusedAttributes:C}}function ru(a,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){a.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=a,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,u),e.update(h,s,u)}this.setMode=o,this.render=r,this.renderInstances=c}function au(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let r=e.precision!==void 0?e.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=a.getParameter(34930),d=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),_=a.getParameter(36348),E=a.getParameter(36349),b=d>0,w=o||t.has("OES_texture_float"),y=b&&w,C=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:C}}function ou(a){const t=this;let e=null,n=0,i=!1,s=!1;const o=new _n,r=new Te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,m,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,m){const g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,_=a.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const E=s?0:n,b=E*4;let w=_.clippingState||null;c.value=w,w=h(g,d,b,m);for(let y=0;y!==b;++y)w[y]=e[y];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const _=m+p*4,E=d.matrixWorldInverse;r.getNormalMatrix(E),(f===null||f.length<_)&&(f=new Float32Array(_));for(let b=0,w=m;b!==p;++b,w+=4)o.copy(u[b]).applyMatrix4(E,r),o.normal.toArray(f,w),f[w+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function lu(a){let t=new WeakMap;function e(o,r){return r===Us?o.mapping=ei:r===Bs&&(o.mapping=ni),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Us||r===Bs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sl(c.height/2);return l.fromEquirectangularTexture(a,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class cu extends Ra{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $n=4,Vr=[.125,.215,.35,.446,.526,.582],vn=20,Rs=new cu,Wr=new Bt;let Ds=null;const xn=(1+Math.sqrt(5))/2,Yn=1/xn,Hr=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,xn,Yn),new P(0,xn,-Yn),new P(Yn,0,xn),new P(-Yn,0,xn),new P(xn,Yn,0),new P(-xn,Yn,0)];class Xr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ds=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ds),t.scissorTest=!1,Wi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ds=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:Mi,format:ze,encoding:Tn,depthBuffer:!1},i=qr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qr(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hu(s)),this._blurMaterial=uu(s,t,e)}return i}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,Rs)}_sceneToCubeUV(t,e,n,i){const r=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wr),h.toneMapping=Qe,h.autoClear=!1;const m=new Ki({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new ke(new Cn,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Wr),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(r.up.set(0,c[_],0),r.lookAt(l[_],0,0)):E===1?(r.up.set(0,0,c[_]),r.lookAt(0,l[_],0)):(r.up.set(0,c[_],0),r.lookAt(0,0,l[_]));const b=this._cubeSize;Wi(i,E*b,_>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ei||t.mapping===ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yr());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const c=this._cubeSize;Wi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Rs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hr[(i-1)%Hr.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ke(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):vn;f>vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vn}`);const _=[];let E=0;for(let z=0;z<vn;++z){const v=z/p,T=Math.exp(-v*v/2);_.push(T),z===0?E+=T:z<f&&(E+=2*T)}for(let z=0;z<_.length;z++)_[z]=_[z]/E;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const w=this._sizeLods[i],y=3*w*(i>b-$n?i-b+$n:0),C=4*(this._cubeSize-w);Wi(e,y,C,3*w,2*w),c.setRenderTarget(e),c.render(u,Rs)}}function hu(a){const t=[],e=[],n=[];let i=a;const s=a-$n+1+Vr.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let c=1/r;o>a-$n?c=Vr[o-a+$n-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,f=2,_=1,E=new Float32Array(p*g*m),b=new Float32Array(f*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const z=C%3*2/3-1,v=C>2?0:-1,T=[z,v,0,z+2/3,v,0,z+2/3,v+1,0,z,v,0,z+2/3,v+1,0,z,v+1,0];E.set(T,p*g*C),b.set(d,f*g*C);const F=[C,C,C,C,C,C];w.set(F,_*g*C)}const y=new ve;y.setAttribute("position",new Ve(E,p)),y.setAttribute("uv",new Ve(b,f)),y.setAttribute("faceIndex",new Ve(w,_)),t.push(y),i>$n&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qr(a,t,e){const n=new An(a,t,e);return n.texture.mapping=Qi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function uu(a,t,e){const n=new Float32Array(vn),i=new P(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Yr(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Zr(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function du(a){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===Us||c===Bs,h=c===ei||c===ni;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new Xr(a)),u=l?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Xr(a));const d=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,d),r.addEventListener("dispose",s),d.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fu(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pu(a,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)t.update(p[f],34962)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let b=0,w=E.length;b<w;b+=3){const y=E[b+0],C=E[b+1],z=E[b+2];d.push(y,C,C,z,z,y)}}else{const E=g.array;p=g.version;for(let b=0,w=E.length/3-1;b<w;b+=3){const y=b+0,C=b+1,z=b+2;d.push(y,C,C,z,z,y)}}const f=new(wa(d)?La:Pa)(d,1);f.version=p;const _=s.get(u);_&&t.remove(_),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:r,update:c,getWireframeAttribute:h}}function mu(a,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let r,c;function l(d){r=d.type,c=d.bytesPerElement}function h(d,m){a.drawElements(s,m,r,d*c),e.update(m,s,1)}function u(d,m,g){if(g===0)return;let p,f;if(i)p=a,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,r,d*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function gu(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _u(a,t){return a[0]-t[0]}function xu(a,t){return Math.abs(t[1])-Math.abs(a[1])}function vu(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new se,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let Z=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var g=Z;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let F=0;w===!0&&(F=1),y===!0&&(F=2),C===!0&&(F=3);let q=h.attributes.position.count*F,at=1;q>t.maxTextureSize&&(at=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const O=new Float32Array(q*at*4*f),I=new Ca(O,q,at,f);I.type=Sn,I.needsUpdate=!0;const X=F*4;for(let j=0;j<f;j++){const V=z[j],D=v[j],N=T[j],Q=q*at*4*j;for(let J=0;J<V.count;J++){const $=J*X;w===!0&&(o.fromBufferAttribute(V,J),O[Q+$+0]=o.x,O[Q+$+1]=o.y,O[Q+$+2]=o.z,O[Q+$+3]=0),y===!0&&(o.fromBufferAttribute(D,J),O[Q+$+4]=o.x,O[Q+$+5]=o.y,O[Q+$+6]=o.z,O[Q+$+7]=0),C===!0&&(o.fromBufferAttribute(N,J),O[Q+$+8]=o.x,O[Q+$+9]=o.y,O[Q+$+10]=o.z,O[Q+$+11]=N.itemSize===4?o.w:1)}}_={count:f,texture:I,size:new Dt(q,at)},s.set(h,_),h.addEventListener("dispose",Z)}let E=0;for(let w=0;w<m.length;w++)E+=m[w];const b=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",b),d.getUniforms().setValue(a,"morphTargetInfluences",m),d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let y=0;y<p;y++)f[y]=[y,0];n[h.id]=f}for(let y=0;y<p;y++){const C=f[y];C[0]=y,C[1]=m[y]}f.sort(xu);for(let y=0;y<8;y++)y<p&&f[y][1]?(r[y][0]=f[y][0],r[y][1]=f[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(_u);const _=h.morphAttributes.position,E=h.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const C=r[y],z=C[0],v=C[1];z!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+y)!==_[z]&&h.setAttribute("morphTarget"+y,_[z]),E&&h.getAttribute("morphNormal"+y)!==E[z]&&h.setAttribute("morphNormal"+y,E[z]),i[y]=v,b+=v):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),E&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const w=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(a,"morphTargetBaseInfluence",w),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function Mu(a,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const za=new Oe,Na=new Ca,Oa=new rl,Ua=new Da,jr=[],$r=[],Jr=new Float32Array(16),Kr=new Float32Array(9),Qr=new Float32Array(4);function li(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=jr[i];if(s===void 0&&(s=new Float32Array(i),jr[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,a[o].toArray(s,r)}return s}function Jt(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function Kt(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function es(a,t){let e=$r[t];e===void 0&&(e=new Int32Array(t),$r[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Su(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function yu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;a.uniform2fv(this.addr,t),Kt(e,t)}}function bu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Jt(e,t))return;a.uniform3fv(this.addr,t),Kt(e,t)}}function wu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;a.uniform4fv(this.addr,t),Kt(e,t)}}function Eu(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Jt(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Kt(e,t)}else{if(Jt(e,n))return;Qr.set(n),a.uniformMatrix2fv(this.addr,!1,Qr),Kt(e,n)}}function Tu(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Jt(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Kt(e,t)}else{if(Jt(e,n))return;Kr.set(n),a.uniformMatrix3fv(this.addr,!1,Kr),Kt(e,n)}}function Au(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Jt(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Kt(e,t)}else{if(Jt(e,n))return;Jr.set(n),a.uniformMatrix4fv(this.addr,!1,Jr),Kt(e,n)}}function Cu(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Pu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;a.uniform2iv(this.addr,t),Kt(e,t)}}function Lu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;a.uniform3iv(this.addr,t),Kt(e,t)}}function Ru(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;a.uniform4iv(this.addr,t),Kt(e,t)}}function Du(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Iu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;a.uniform2uiv(this.addr,t),Kt(e,t)}}function Fu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;a.uniform3uiv(this.addr,t),Kt(e,t)}}function zu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;a.uniform4uiv(this.addr,t),Kt(e,t)}}function Nu(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||za,i)}function Ou(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Oa,i)}function Uu(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ua,i)}function Bu(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Na,i)}function Gu(a){switch(a){case 5126:return Su;case 35664:return yu;case 35665:return bu;case 35666:return wu;case 35674:return Eu;case 35675:return Tu;case 35676:return Au;case 5124:case 35670:return Cu;case 35667:case 35671:return Pu;case 35668:case 35672:return Lu;case 35669:case 35673:return Ru;case 5125:return Du;case 36294:return Iu;case 36295:return Fu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Nu;case 35679:case 36299:case 36307:return Ou;case 35680:case 36300:case 36308:case 36293:return Uu;case 36289:case 36303:case 36311:case 36292:return Bu}}function ku(a,t){a.uniform1fv(this.addr,t)}function Vu(a,t){const e=li(t,this.size,2);a.uniform2fv(this.addr,e)}function Wu(a,t){const e=li(t,this.size,3);a.uniform3fv(this.addr,e)}function Hu(a,t){const e=li(t,this.size,4);a.uniform4fv(this.addr,e)}function Xu(a,t){const e=li(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function qu(a,t){const e=li(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Yu(a,t){const e=li(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Zu(a,t){a.uniform1iv(this.addr,t)}function ju(a,t){a.uniform2iv(this.addr,t)}function $u(a,t){a.uniform3iv(this.addr,t)}function Ju(a,t){a.uniform4iv(this.addr,t)}function Ku(a,t){a.uniform1uiv(this.addr,t)}function Qu(a,t){a.uniform2uiv(this.addr,t)}function td(a,t){a.uniform3uiv(this.addr,t)}function ed(a,t){a.uniform4uiv(this.addr,t)}function nd(a,t,e){const n=this.cache,i=t.length,s=es(e,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||za,s[o])}function id(a,t,e){const n=this.cache,i=t.length,s=es(e,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Oa,s[o])}function sd(a,t,e){const n=this.cache,i=t.length,s=es(e,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ua,s[o])}function rd(a,t,e){const n=this.cache,i=t.length,s=es(e,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Na,s[o])}function ad(a){switch(a){case 5126:return ku;case 35664:return Vu;case 35665:return Wu;case 35666:return Hu;case 35674:return Xu;case 35675:return qu;case 35676:return Yu;case 5124:case 35670:return Zu;case 35667:case 35671:return ju;case 35668:case 35672:return $u;case 35669:case 35673:return Ju;case 5125:return Ku;case 36294:return Qu;case 36295:return td;case 36296:return ed;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return id;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return rd}}class od{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Gu(e.type)}}class ld{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ad(e.type)}}class cd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function ta(a,t){a.seq.push(t),a.map[t.id]=t}function hd(a,t,e){const n=a.name,i=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),o=Is.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===i){ta(e,l===void 0?new od(r,a,t):new ld(r,a,t));break}else{let u=e.map[r];u===void 0&&(u=new cd(r),ta(e,u)),e=u}}}class Yi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);hd(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ea(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let ud=0;function dd(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function fd(a){switch(a){case Tn:return["Linear","( value )"];case qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function na(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+dd(a.getShaderSource(t),o)}else return i}function pd(a,t){const e=fd(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function md(a,t){let e;switch(t){case xo:e="Linear";break;case vo:e="Reinhard";break;case Mo:e="OptimizedCineon";break;case So:e="ACESFilmic";break;case yo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gd(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function _d(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xd(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:r}}return e}function gi(a){return a!==""}function ia(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sa(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(a){return a.replace(vd,Md)}function Md(a,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Hs(e)}const Sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ra(a){return a.replace(Sd,yd)}function yd(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function aa(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bd(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===xa?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===ja?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function wd(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ei:case ni:t="ENVMAP_TYPE_CUBE";break;case Qi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ed(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ni:t="ENVMAP_MODE_REFRACTION";break}return t}function Td(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Sa:t="ENVMAP_BLENDING_MULTIPLY";break;case go:t="ENVMAP_BLENDING_MIX";break;case _o:t="ENVMAP_BLENDING_ADD";break}return t}function Ad(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cd(a,t,e,n){const i=a.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=bd(e),l=wd(e),h=Ed(e),u=Td(e),d=Ad(e),m=e.isWebGL2?"":gd(e),g=_d(s),p=i.createProgram();let f,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(gi).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(gi).join(`
`),_.length>0&&(_+=`
`)):(f=[aa(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),_=[m,aa(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qe?"#define TONE_MAPPING":"",e.toneMapping!==Qe?Et.tonemapping_pars_fragment:"",e.toneMapping!==Qe?md("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,pd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gi).join(`
`)),o=Hs(o),o=ia(o,e),o=sa(o,e),r=Hs(r),r=ia(r,e),r=sa(r,e),o=ra(o),r=ra(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===Lr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=E+f+o,w=E+_+r,y=ea(i,35633,b),C=ea(i,35632,w);if(i.attachShader(p,y),i.attachShader(p,C),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(y).trim(),q=i.getShaderInfoLog(C).trim();let at=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){at=!1;const I=na(i,y,"vertex"),X=na(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+I+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(F===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:at,programLog:T,vertexShader:{log:F,prefix:f},fragmentShader:{log:q,prefix:_}})}i.deleteShader(y),i.deleteShader(C);let z;this.getUniforms=function(){return z===void 0&&(z=new Yi(i,p)),z};let v;return this.getAttributes=function(){return v===void 0&&(v=xd(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=ud++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=C,this}let Pd=0;class Ld{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rd(t),e.set(t,n)),n}}class Rd{constructor(t){this.id=Pd++,this.code=t,this.usedTimes=0}}function Dd(a,t,e,n,i,s,o){const r=new js,c=new Ld,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,F,q,at){const O=q.fog,I=at.geometry,X=v.isMeshStandardMaterial?q.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),j=!!Z&&Z.mapping===Qi?Z.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const D=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,N=D!==void 0?D.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let J,$,lt,St;if(V){const Gt=Ge[V];J=Gt.vertexShader,$=Gt.fragmentShader}else J=v.vertexShader,$=v.fragmentShader,c.update(v),lt=c.getVertexShaderID(v),St=c.getFragmentShaderID(v);const H=a.getRenderTarget(),Ot=v.alphaTest>0,xt=v.clearcoat>0,yt=v.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:v.type,vertexShader:J,fragmentShader:$,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:St,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:at.isInstancedMesh===!0,instancingColor:at.isInstancedMesh===!0&&at.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?a.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Tn,map:!!v.map,matcap:!!v.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:j,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Vo,tangentSpaceNormalMap:v.normalMapType===ko,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===qt,clearcoat:xt,clearcoatMap:xt&&!!v.clearcoatMap,clearcoatRoughnessMap:xt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!v.clearcoatNormalMap,iridescence:yt,iridescenceMap:yt&&!!v.iridescenceMap,iridescenceThicknessMap:yt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Kn,alphaMap:!!v.alphaMap,alphaTest:Ot,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:at.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Qe,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===Ae,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)T.push(F),T.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(_(T,v),E(T,v),T.push(a.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function _(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function E(v,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.map&&r.enable(4),T.matcap&&r.enable(5),T.envMap&&r.enable(6),T.lightMap&&r.enable(7),T.aoMap&&r.enable(8),T.emissiveMap&&r.enable(9),T.bumpMap&&r.enable(10),T.normalMap&&r.enable(11),T.objectSpaceNormalMap&&r.enable(12),T.tangentSpaceNormalMap&&r.enable(13),T.clearcoat&&r.enable(14),T.clearcoatMap&&r.enable(15),T.clearcoatRoughnessMap&&r.enable(16),T.clearcoatNormalMap&&r.enable(17),T.iridescence&&r.enable(18),T.iridescenceMap&&r.enable(19),T.iridescenceThicknessMap&&r.enable(20),T.displacementMap&&r.enable(21),T.specularMap&&r.enable(22),T.roughnessMap&&r.enable(23),T.metalnessMap&&r.enable(24),T.gradientMap&&r.enable(25),T.alphaMap&&r.enable(26),T.alphaTest&&r.enable(27),T.vertexColors&&r.enable(28),T.vertexAlphas&&r.enable(29),T.vertexUvs&&r.enable(30),T.vertexTangents&&r.enable(31),T.uvsVertexOnly&&r.enable(32),v.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.physicallyCorrectLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.specularIntensityMap&&r.enable(15),T.specularColorMap&&r.enable(16),T.transmission&&r.enable(17),T.transmissionMap&&r.enable(18),T.thicknessMap&&r.enable(19),T.sheen&&r.enable(20),T.sheenColorMap&&r.enable(21),T.sheenRoughnessMap&&r.enable(22),T.decodeVideoTexture&&r.enable(23),T.opaque&&r.enable(24),v.push(r.mask)}function b(v){const T=g[v.type];let F;if(T){const q=Ge[T];F=_l.clone(q.uniforms)}else F=v.uniforms;return F}function w(v,T){let F;for(let q=0,at=l.length;q<at;q++){const O=l[q];if(O.cacheKey===T){F=O,++F.usedTimes;break}}return F===void 0&&(F=new Cd(a,T,v,s),l.push(F)),F}function y(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function C(v){c.remove(v)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:w,releaseProgram:y,releaseShaderCache:C,programs:l,dispose:z}}function Id(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function e(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Fd(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function oa(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function la(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,p,f){let _=a[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},a[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=f),t++,_}function r(u,d,m,g,p,f){const _=o(u,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(u,d,m,g,p,f){const _=o(u,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(u,d){e.length>1&&e.sort(u||Fd),n.length>1&&n.sort(d||oa),i.length>1&&i.sort(d||oa)}function h(){for(let u=t,d=a.length;u<d;u++){const m=a[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function zd(){let a=new WeakMap;function t(n,i){const s=a.get(n);let o;return s===void 0?(o=new la,a.set(n,[o])):i>=s.length?(o=new la,s.push(o)):o=s[i],o}function e(){a=new WeakMap}return{get:t,dispose:e}}function Nd(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return a[t.id]=e,e}}}function Od(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Ud=0;function Bd(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Gd(a,t){const e=new Nd,n=Od(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,o=new Ct,r=new Ct;function c(h,u){let d=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,f=0,_=0,E=0,b=0,w=0,y=0,C=0,z=0,v=0;h.sort(Bd);const T=u!==!0?Math.PI:1;for(let q=0,at=h.length;q<at;q++){const O=h[q],I=O.color,X=O.intensity,Z=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=I.r*X*T,m+=I.g*X*T,g+=I.b*X*T;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],X);else if(O.isDirectionalLight){const V=e.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){const D=O.shadow,N=n.get(O);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=O.shadow.matrix,w++}i.directional[p]=V,p++}else if(O.isSpotLight){const V=e.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(I).multiplyScalar(X*T),V.distance=Z,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[_]=V;const D=O.shadow;if(O.map&&(i.spotLightMap[z]=O.map,z++,D.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[_]=D.matrix,O.castShadow){const N=n.get(O);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=j,C++}_++}else if(O.isRectAreaLight){const V=e.get(O);V.color.copy(I).multiplyScalar(X),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[E]=V,E++}else if(O.isPointLight){const V=e.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*T),V.distance=O.distance,V.decay=O.decay,O.castShadow){const D=O.shadow,N=n.get(O);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,i.pointShadow[f]=N,i.pointShadowMap[f]=j,i.pointShadowMatrix[f]=O.shadow.matrix,y++}i.point[f]=V,f++}else if(O.isHemisphereLight){const V=e.get(O);V.skyColor.copy(O.color).multiplyScalar(X*T),V.groundColor.copy(O.groundColor).multiplyScalar(X*T),i.hemi[b]=V,b++}}E>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==p||F.pointLength!==f||F.spotLength!==_||F.rectAreaLength!==E||F.hemiLength!==b||F.numDirectionalShadows!==w||F.numPointShadows!==y||F.numSpotShadows!==C||F.numSpotMaps!==z)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=f,i.hemi.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+z-v,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=v,F.directionalLength=p,F.pointLength=f,F.spotLength=_,F.rectAreaLength=E,F.hemiLength=b,F.numDirectionalShadows=w,F.numPointShadows=y,F.numSpotShadows=C,F.numSpotMaps=z,i.version=Ud++)}function l(h,u){let d=0,m=0,g=0,p=0,f=0;const _=u.matrixWorldInverse;for(let E=0,b=h.length;E<b;E++){const w=h[E];if(w.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),d++}else if(w.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),r.identity(),o.copy(w.matrixWorld),o.premultiply(_),r.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),p++}else if(w.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const y=i.hemi[f];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:i}}function ca(a,t){const e=new Gd(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function r(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function kd(a,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let c;return r===void 0?(c=new ca(a,t),e.set(s,[c])):o>=r.length?(c=new ca(a,t),r.push(c)):c=r[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Vd extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wd extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qd(a,t,e){let n=new Ia;const i=new Dt,s=new Dt,o=new se,r=new Vd({depthPacking:Go}),c=new Wd,l={},h=e.maxTextureSize,u={0:Ae,1:ti,2:cn},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Hd,fragmentShader:Xd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ke(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa,this.render=function(w,y,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const z=a.getRenderTarget(),v=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),F=a.state;F.setBlending(hn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let q=0,at=w.length;q<at;q++){const O=w[q],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const X=I.getFrameExtents();if(i.multiply(X),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null){const j=this.type!==pi?{minFilter:fe,magFilter:fe}:{};I.map=new An(i.x,i.y,j),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();const Z=I.getViewportCount();for(let j=0;j<Z;j++){const V=I.getViewport(j);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),F.viewport(o),I.updateMatrices(O,j),n=I.getFrustum(),b(y,C,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&_(I,C),I.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(z,v,T)};function _(w,y){const C=t.update(p);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(y,null,C,d,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(y,null,C,m,p,null)}function E(w,y,C,z,v,T){let F=null;const q=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(q!==void 0?F=q:F=C.isPointLight===!0?c:r,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const at=F.uuid,O=y.uuid;let I=l[at];I===void 0&&(I={},l[at]=I);let X=I[O];X===void 0&&(X=F.clone(),I[O]=X),F=X}return F.visible=y.visible,F.wireframe=y.wireframe,T===pi?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:u[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaTest,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(C.matrixWorld),F.nearDistance=z,F.farDistance=v),F}function b(w,y,C,z,v){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const q=t.update(w),at=w.material;if(Array.isArray(at)){const O=q.groups;for(let I=0,X=O.length;I<X;I++){const Z=O[I],j=at[Z.materialIndex];if(j&&j.visible){const V=E(w,j,z,C.near,C.far,v);a.renderBufferDirect(C,null,q,V,w,Z)}}}else if(at.visible){const O=E(w,at,z,C.near,C.far,v);a.renderBufferDirect(C,null,q,O,w,null)}}const F=w.children;for(let q=0,at=F.length;q<at;q++)b(F[q],y,C,z,v)}}function Yd(a,t,e){const n=e.isWebGL2;function i(){let A=!1;const G=new se;let Y=null;const rt=new se(0,0,0,0);return{setMask:function(ht){Y!==ht&&!A&&(a.colorMask(ht,ht,ht,ht),Y=ht)},setLocked:function(ht){A=ht},setClear:function(ht,It,te,re,un){un===!0&&(ht*=re,It*=re,te*=re),G.set(ht,It,te,re),rt.equals(G)===!1&&(a.clearColor(ht,It,te,re),rt.copy(G))},reset:function(){A=!1,Y=null,rt.set(-1,0,0,0)}}}function s(){let A=!1,G=null,Y=null,rt=null;return{setTest:function(ht){ht?Ot(2929):xt(2929)},setMask:function(ht){G!==ht&&!A&&(a.depthMask(ht),G=ht)},setFunc:function(ht){if(Y!==ht){switch(ht){case lo:a.depthFunc(512);break;case co:a.depthFunc(519);break;case ho:a.depthFunc(513);break;case Os:a.depthFunc(515);break;case uo:a.depthFunc(514);break;case fo:a.depthFunc(518);break;case po:a.depthFunc(516);break;case mo:a.depthFunc(517);break;default:a.depthFunc(515)}Y=ht}},setLocked:function(ht){A=ht},setClear:function(ht){rt!==ht&&(a.clearDepth(ht),rt=ht)},reset:function(){A=!1,G=null,Y=null,rt=null}}}function o(){let A=!1,G=null,Y=null,rt=null,ht=null,It=null,te=null,re=null,un=null;return{setTest:function(Wt){A||(Wt?Ot(2960):xt(2960))},setMask:function(Wt){G!==Wt&&!A&&(a.stencilMask(Wt),G=Wt)},setFunc:function(Wt,Xe,Me){(Y!==Wt||rt!==Xe||ht!==Me)&&(a.stencilFunc(Wt,Xe,Me),Y=Wt,rt=Xe,ht=Me)},setOp:function(Wt,Xe,Me){(It!==Wt||te!==Xe||re!==Me)&&(a.stencilOp(Wt,Xe,Me),It=Wt,te=Xe,re=Me)},setLocked:function(Wt){A=Wt},setClear:function(Wt){un!==Wt&&(a.clearStencil(Wt),un=Wt)},reset:function(){A=!1,G=null,Y=null,rt=null,ht=null,It=null,te=null,re=null,un=null}}}const r=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,E=null,b=null,w=null,y=null,C=null,z=null,v=null,T=!1,F=null,q=null,at=null,O=null,I=null;const X=a.getParameter(35661);let Z=!1,j=0;const V=a.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=j>=2);let D=null,N={};const Q=a.getParameter(3088),J=a.getParameter(2978),$=new se().fromArray(Q),lt=new se().fromArray(J);function St(A,G,Y){const rt=new Uint8Array(4),ht=a.createTexture();a.bindTexture(A,ht),a.texParameteri(A,10241,9728),a.texParameteri(A,10240,9728);for(let It=0;It<Y;It++)a.texImage2D(G+It,0,6408,1,1,0,6408,5121,rt);return ht}const H={};H[3553]=St(3553,3553,1),H[34067]=St(34067,34069,6),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ot(2929),c.setFunc(Os),le(!1),Ue(tr),Ot(2884),ne(hn);function Ot(A){d[A]!==!0&&(a.enable(A),d[A]=!0)}function xt(A){d[A]!==!1&&(a.disable(A),d[A]=!1)}function yt(A,G){return m[A]!==G?(a.bindFramebuffer(A,G),m[A]=G,n&&(A===36009&&(m[36160]=G),A===36160&&(m[36009]=G)),!0):!1}function ot(A,G){let Y=p,rt=!1;if(A)if(Y=g.get(G),Y===void 0&&(Y=[],g.set(G,Y)),A.isWebGLMultipleRenderTargets){const ht=A.texture;if(Y.length!==ht.length||Y[0]!==36064){for(let It=0,te=ht.length;It<te;It++)Y[It]=36064+It;Y.length=ht.length,rt=!0}}else Y[0]!==36064&&(Y[0]=36064,rt=!0);else Y[0]!==1029&&(Y[0]=1029,rt=!0);rt&&(e.isWebGL2?a.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Gt(A){return f!==A?(a.useProgram(A),f=A,!0):!1}const At={[jn]:32774,[Ja]:32778,[Ka]:32779};if(n)At[sr]=32775,At[rr]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(At[sr]=A.MIN_EXT,At[rr]=A.MAX_EXT)}const gt={[Qa]:0,[to]:1,[eo]:768,[va]:770,[oo]:776,[ro]:774,[io]:772,[no]:769,[Ma]:771,[ao]:775,[so]:773};function ne(A,G,Y,rt,ht,It,te,re){if(A===hn){_===!0&&(xt(3042),_=!1);return}if(_===!1&&(Ot(3042),_=!0),A!==$a){if(A!==E||re!==T){if((b!==jn||C!==jn)&&(a.blendEquation(32774),b=jn,C=jn),re)switch(A){case Kn:a.blendFuncSeparate(1,771,1,771);break;case er:a.blendFunc(1,1);break;case nr:a.blendFuncSeparate(0,769,0,1);break;case ir:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Kn:a.blendFuncSeparate(770,771,1,771);break;case er:a.blendFunc(770,1);break;case nr:a.blendFuncSeparate(0,769,0,1);break;case ir:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,y=null,z=null,v=null,E=A,T=re}return}ht=ht||G,It=It||Y,te=te||rt,(G!==b||ht!==C)&&(a.blendEquationSeparate(At[G],At[ht]),b=G,C=ht),(Y!==w||rt!==y||It!==z||te!==v)&&(a.blendFuncSeparate(gt[Y],gt[rt],gt[It],gt[te]),w=Y,y=rt,z=It,v=te),E=A,T=null}function ue(A,G){A.side===cn?xt(2884):Ot(2884);let Y=A.side===Ae;G&&(Y=!Y),le(Y),A.blending===Kn&&A.transparent===!1?ne(hn):ne(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),r.setMask(A.colorWrite);const rt=A.stencilWrite;l.setTest(rt),rt&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ut(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ot(32926):xt(32926)}function le(A){F!==A&&(A?a.frontFace(2304):a.frontFace(2305),F=A)}function Ue(A){A!==Ya?(Ot(2884),A!==q&&(A===tr?a.cullFace(1029):A===Za?a.cullFace(1028):a.cullFace(1032))):xt(2884),q=A}function ie(A){A!==at&&(Z&&a.lineWidth(A),at=A)}function Ut(A,G,Y){A?(Ot(32823),(O!==G||I!==Y)&&(a.polygonOffset(G,Y),O=G,I=Y)):xt(32823)}function We(A){A?Ot(3089):xt(3089)}function He(A){A===void 0&&(A=33984+X-1),D!==A&&(a.activeTexture(A),D=A)}function S(A,G,Y){Y===void 0&&(D===null?Y=33984+X-1:Y=D);let rt=N[Y];rt===void 0&&(rt={type:void 0,texture:void 0},N[Y]=rt),(rt.type!==A||rt.texture!==G)&&(D!==Y&&(a.activeTexture(Y),D=Y),a.bindTexture(A,G||H[A]),rt.type=A,rt.texture=G)}function x(){const A=N[D];A!==void 0&&A.type!==void 0&&(a.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function B(){try{a.compressedTexImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{a.compressedTexImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(){try{a.texSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function it(){try{a.texSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function vt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function st(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{a.texStorage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pt(){try{a.texStorage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _t(){try{a.texImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{a.texImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(A){$.equals(A)===!1&&(a.scissor(A.x,A.y,A.z,A.w),$.copy(A))}function dt(A){lt.equals(A)===!1&&(a.viewport(A.x,A.y,A.z,A.w),lt.copy(A))}function Rt(A,G){let Y=u.get(G);Y===void 0&&(Y=new WeakMap,u.set(G,Y));let rt=Y.get(A);rt===void 0&&(rt=a.getUniformBlockIndex(G,A.name),Y.set(A,rt))}function Vt(A,G){const rt=u.get(G).get(A);h.get(A)!==rt&&(a.uniformBlockBinding(G,rt,A.__bindingPointIndex),h.set(A,rt))}function Qt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},D=null,N={},m={},g=new WeakMap,p=[],f=null,_=!1,E=null,b=null,w=null,y=null,C=null,z=null,v=null,T=!1,F=null,q=null,at=null,O=null,I=null,$.set(0,0,a.canvas.width,a.canvas.height),lt.set(0,0,a.canvas.width,a.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Ot,disable:xt,bindFramebuffer:yt,drawBuffers:ot,useProgram:Gt,setBlending:ne,setMaterial:ue,setFlipSided:le,setCullFace:Ue,setLineWidth:ie,setPolygonOffset:Ut,setScissorTest:We,activeTexture:He,bindTexture:S,unbindTexture:x,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:_t,texImage3D:ct,updateUBOMapping:Rt,uniformBlockBinding:Vt,texStorage2D:W,texStorage3D:pt,texSubImage2D:tt,texSubImage3D:it,compressedTexSubImage2D:vt,compressedTexSubImage3D:st,scissor:mt,viewport:dt,reset:Qt}}function Zd(a,t,e,n,i,s,o){const r=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,x){return _?new OffscreenCanvas(S,x):Ji("canvas")}function b(S,x,B,K){let tt=1;if((S.width>K||S.height>K)&&(tt=K/Math.max(S.width,S.height)),tt<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const it=x?$i:Math.floor,vt=it(tt*S.width),st=it(tt*S.height);p===void 0&&(p=E(vt,st));const W=B?E(vt,st):p;return W.width=vt,W.height=st,W.getContext("2d").drawImage(S,0,0,vt,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+vt+"x"+st+")."),W}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function w(S){return Ws(S.width)&&Ws(S.height)}function y(S){return r?!1:S.wrapS!==Fe||S.wrapT!==Fe||S.minFilter!==fe&&S.minFilter!==we}function C(S,x){return S.generateMipmaps&&x&&S.minFilter!==fe&&S.minFilter!==we}function z(S){a.generateMipmap(S)}function v(S,x,B,K,tt=!1){if(r===!1)return x;if(S!==null){if(a[S]!==void 0)return a[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let it=x;return x===6403&&(B===5126&&(it=33326),B===5131&&(it=33325),B===5121&&(it=33321)),x===33319&&(B===5126&&(it=33328),B===5131&&(it=33327),B===5121&&(it=33323)),x===6408&&(B===5126&&(it=34836),B===5131&&(it=34842),B===5121&&(it=K===qt&&tt===!1?35907:32856),B===32819&&(it=32854),B===32820&&(it=32855)),(it===33325||it===33326||it===33327||it===33328||it===34842||it===34836)&&t.get("EXT_color_buffer_float"),it}function T(S,x,B){return C(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==fe&&S.minFilter!==we?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function F(S){return S===fe||S===ar||S===or?9728:9729}function q(S){const x=S.target;x.removeEventListener("dispose",q),O(x),x.isVideoTexture&&g.delete(x)}function at(S){const x=S.target;x.removeEventListener("dispose",at),X(x)}function O(S){const x=n.get(S);if(x.__webglInit===void 0)return;const B=S.source,K=f.get(B);if(K){const tt=K[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(S),Object.keys(K).length===0&&f.delete(B)}n.remove(S)}function I(S){const x=n.get(S);a.deleteTexture(x.__webglTexture);const B=S.source,K=f.get(B);delete K[x.__cacheKey],o.memory.textures--}function X(S){const x=S.texture,B=n.get(S),K=n.get(x);if(K.__webglTexture!==void 0&&(a.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)a.deleteFramebuffer(B.__webglFramebuffer[tt]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[tt]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let tt=0;tt<B.__webglColorRenderbuffer.length;tt++)B.__webglColorRenderbuffer[tt]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[tt]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let tt=0,it=x.length;tt<it;tt++){const vt=n.get(x[tt]);vt.__webglTexture&&(a.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(x[tt])}n.remove(x),n.remove(S)}let Z=0;function j(){Z=0}function V(){const S=Z;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),Z+=1,S}function D(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.encoding),x.join()}function N(S,x){const B=n.get(S);if(S.isVideoTexture&&We(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,S,x);return}}e.bindTexture(3553,B.__webglTexture,33984+x)}function Q(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){xt(B,S,x);return}e.bindTexture(35866,B.__webglTexture,33984+x)}function J(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){xt(B,S,x);return}e.bindTexture(32879,B.__webglTexture,33984+x)}function $(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){yt(B,S,x);return}e.bindTexture(34067,B.__webglTexture,33984+x)}const lt={[Gs]:10497,[Fe]:33071,[ks]:33648},St={[fe]:9728,[ar]:9984,[or]:9986,[we]:9729,[bo]:9985,[ts]:9987};function H(S,x,B){if(B?(a.texParameteri(S,10242,lt[x.wrapS]),a.texParameteri(S,10243,lt[x.wrapT]),(S===32879||S===35866)&&a.texParameteri(S,32882,lt[x.wrapR]),a.texParameteri(S,10240,St[x.magFilter]),a.texParameteri(S,10241,St[x.minFilter])):(a.texParameteri(S,10242,33071),a.texParameteri(S,10243,33071),(S===32879||S===35866)&&a.texParameteri(S,32882,33071),(x.wrapS!==Fe||x.wrapT!==Fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(S,10240,F(x.magFilter)),a.texParameteri(S,10241,F(x.minFilter)),x.minFilter!==fe&&x.minFilter!==we&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const K=t.get("EXT_texture_filter_anisotropic");if(x.type===Sn&&t.has("OES_texture_float_linear")===!1||r===!1&&x.type===Mi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(a.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ot(S,x){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",q));const K=x.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const it=D(x);if(it!==S.__cacheKey){tt[it]===void 0&&(tt[it]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[it].usedTimes++;const vt=tt[S.__cacheKey];vt!==void 0&&(tt[S.__cacheKey].usedTimes--,vt.usedTimes===0&&I(x)),S.__cacheKey=it,S.__webglTexture=tt[it].texture}return B}function xt(S,x,B){let K=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=35866),x.isData3DTexture&&(K=32879);const tt=Ot(S,x),it=x.source;e.bindTexture(K,S.__webglTexture,33984+B);const vt=n.get(it);if(it.version!==vt.__version||tt===!0){e.activeTexture(33984+B),a.pixelStorei(37440,x.flipY),a.pixelStorei(37441,x.premultiplyAlpha),a.pixelStorei(3317,x.unpackAlignment),a.pixelStorei(37443,0);const st=y(x)&&w(x.image)===!1;let W=b(x.image,st,!1,h);W=He(x,W);const pt=w(W)||r,_t=s.convert(x.format,x.encoding);let ct=s.convert(x.type),mt=v(x.internalFormat,_t,ct,x.encoding,x.isVideoTexture);H(K,x,pt);let dt;const Rt=x.mipmaps,Vt=r&&x.isVideoTexture!==!0,Qt=vt.__version===void 0||tt===!0,A=T(x,W,pt);if(x.isDepthTexture)mt=6402,r?x.type===Sn?mt=36012:x.type===Mn?mt=33190:x.type===Qn?mt=35056:mt=33189:x.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===bn&&mt===6402&&x.type!==ba&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,ct=s.convert(x.type)),x.format===ii&&mt===6402&&(mt=34041,x.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Qn,ct=s.convert(x.type))),Qt&&(Vt?e.texStorage2D(3553,1,mt,W.width,W.height):e.texImage2D(3553,0,mt,W.width,W.height,0,_t,ct,null));else if(x.isDataTexture)if(Rt.length>0&&pt){Vt&&Qt&&e.texStorage2D(3553,A,mt,Rt[0].width,Rt[0].height);for(let G=0,Y=Rt.length;G<Y;G++)dt=Rt[G],Vt?e.texSubImage2D(3553,G,0,0,dt.width,dt.height,_t,ct,dt.data):e.texImage2D(3553,G,mt,dt.width,dt.height,0,_t,ct,dt.data);x.generateMipmaps=!1}else Vt?(Qt&&e.texStorage2D(3553,A,mt,W.width,W.height),e.texSubImage2D(3553,0,0,0,W.width,W.height,_t,ct,W.data)):e.texImage2D(3553,0,mt,W.width,W.height,0,_t,ct,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&Qt&&e.texStorage3D(35866,A,mt,Rt[0].width,Rt[0].height,W.depth);for(let G=0,Y=Rt.length;G<Y;G++)dt=Rt[G],x.format!==ze?_t!==null?Vt?e.compressedTexSubImage3D(35866,G,0,0,0,dt.width,dt.height,W.depth,_t,dt.data,0,0):e.compressedTexImage3D(35866,G,mt,dt.width,dt.height,W.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(35866,G,0,0,0,dt.width,dt.height,W.depth,_t,ct,dt.data):e.texImage3D(35866,G,mt,dt.width,dt.height,W.depth,0,_t,ct,dt.data)}else{Vt&&Qt&&e.texStorage2D(3553,A,mt,Rt[0].width,Rt[0].height);for(let G=0,Y=Rt.length;G<Y;G++)dt=Rt[G],x.format!==ze?_t!==null?Vt?e.compressedTexSubImage2D(3553,G,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(3553,G,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(3553,G,0,0,dt.width,dt.height,_t,ct,dt.data):e.texImage2D(3553,G,mt,dt.width,dt.height,0,_t,ct,dt.data)}else if(x.isDataArrayTexture)Vt?(Qt&&e.texStorage3D(35866,A,mt,W.width,W.height,W.depth),e.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,_t,ct,W.data)):e.texImage3D(35866,0,mt,W.width,W.height,W.depth,0,_t,ct,W.data);else if(x.isData3DTexture)Vt?(Qt&&e.texStorage3D(32879,A,mt,W.width,W.height,W.depth),e.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,_t,ct,W.data)):e.texImage3D(32879,0,mt,W.width,W.height,W.depth,0,_t,ct,W.data);else if(x.isFramebufferTexture){if(Qt)if(Vt)e.texStorage2D(3553,A,mt,W.width,W.height);else{let G=W.width,Y=W.height;for(let rt=0;rt<A;rt++)e.texImage2D(3553,rt,mt,G,Y,0,_t,ct,null),G>>=1,Y>>=1}}else if(Rt.length>0&&pt){Vt&&Qt&&e.texStorage2D(3553,A,mt,Rt[0].width,Rt[0].height);for(let G=0,Y=Rt.length;G<Y;G++)dt=Rt[G],Vt?e.texSubImage2D(3553,G,0,0,_t,ct,dt):e.texImage2D(3553,G,mt,_t,ct,dt);x.generateMipmaps=!1}else Vt?(Qt&&e.texStorage2D(3553,A,mt,W.width,W.height),e.texSubImage2D(3553,0,0,0,_t,ct,W)):e.texImage2D(3553,0,mt,_t,ct,W);C(x,pt)&&z(K),vt.__version=it.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function yt(S,x,B){if(x.image.length!==6)return;const K=Ot(S,x),tt=x.source;e.bindTexture(34067,S.__webglTexture,33984+B);const it=n.get(tt);if(tt.version!==it.__version||K===!0){e.activeTexture(33984+B),a.pixelStorei(37440,x.flipY),a.pixelStorei(37441,x.premultiplyAlpha),a.pixelStorei(3317,x.unpackAlignment),a.pixelStorei(37443,0);const vt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,W=[];for(let G=0;G<6;G++)!vt&&!st?W[G]=b(x.image[G],!1,!0,l):W[G]=st?x.image[G].image:x.image[G],W[G]=He(x,W[G]);const pt=W[0],_t=w(pt)||r,ct=s.convert(x.format,x.encoding),mt=s.convert(x.type),dt=v(x.internalFormat,ct,mt,x.encoding),Rt=r&&x.isVideoTexture!==!0,Vt=it.__version===void 0||K===!0;let Qt=T(x,pt,_t);H(34067,x,_t);let A;if(vt){Rt&&Vt&&e.texStorage2D(34067,Qt,dt,pt.width,pt.height);for(let G=0;G<6;G++){A=W[G].mipmaps;for(let Y=0;Y<A.length;Y++){const rt=A[Y];x.format!==ze?ct!==null?Rt?e.compressedTexSubImage2D(34069+G,Y,0,0,rt.width,rt.height,ct,rt.data):e.compressedTexImage2D(34069+G,Y,dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(34069+G,Y,0,0,rt.width,rt.height,ct,mt,rt.data):e.texImage2D(34069+G,Y,dt,rt.width,rt.height,0,ct,mt,rt.data)}}}else{A=x.mipmaps,Rt&&Vt&&(A.length>0&&Qt++,e.texStorage2D(34067,Qt,dt,W[0].width,W[0].height));for(let G=0;G<6;G++)if(st){Rt?e.texSubImage2D(34069+G,0,0,0,W[G].width,W[G].height,ct,mt,W[G].data):e.texImage2D(34069+G,0,dt,W[G].width,W[G].height,0,ct,mt,W[G].data);for(let Y=0;Y<A.length;Y++){const ht=A[Y].image[G].image;Rt?e.texSubImage2D(34069+G,Y+1,0,0,ht.width,ht.height,ct,mt,ht.data):e.texImage2D(34069+G,Y+1,dt,ht.width,ht.height,0,ct,mt,ht.data)}}else{Rt?e.texSubImage2D(34069+G,0,0,0,ct,mt,W[G]):e.texImage2D(34069+G,0,dt,ct,mt,W[G]);for(let Y=0;Y<A.length;Y++){const rt=A[Y];Rt?e.texSubImage2D(34069+G,Y+1,0,0,ct,mt,rt.image[G]):e.texImage2D(34069+G,Y+1,dt,ct,mt,rt.image[G])}}}C(x,_t)&&z(34067),it.__version=tt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ot(S,x,B,K,tt){const it=s.convert(B.format,B.encoding),vt=s.convert(B.type),st=v(B.internalFormat,it,vt,B.encoding);n.get(x).__hasExternalTextures||(tt===32879||tt===35866?e.texImage3D(tt,0,st,x.width,x.height,x.depth,0,it,vt,null):e.texImage2D(tt,0,st,x.width,x.height,0,it,vt,null)),e.bindFramebuffer(36160,S),Ut(x)?d.framebufferTexture2DMultisampleEXT(36160,K,tt,n.get(B).__webglTexture,0,ie(x)):(tt===3553||tt>=34069&&tt<=34074)&&a.framebufferTexture2D(36160,K,tt,n.get(B).__webglTexture,0),e.bindFramebuffer(36160,null)}function Gt(S,x,B){if(a.bindRenderbuffer(36161,S),x.depthBuffer&&!x.stencilBuffer){let K=33189;if(B||Ut(x)){const tt=x.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Sn?K=36012:tt.type===Mn&&(K=33190));const it=ie(x);Ut(x)?d.renderbufferStorageMultisampleEXT(36161,it,K,x.width,x.height):a.renderbufferStorageMultisample(36161,it,K,x.width,x.height)}else a.renderbufferStorage(36161,K,x.width,x.height);a.framebufferRenderbuffer(36160,36096,36161,S)}else if(x.depthBuffer&&x.stencilBuffer){const K=ie(x);B&&Ut(x)===!1?a.renderbufferStorageMultisample(36161,K,35056,x.width,x.height):Ut(x)?d.renderbufferStorageMultisampleEXT(36161,K,35056,x.width,x.height):a.renderbufferStorage(36161,34041,x.width,x.height),a.framebufferRenderbuffer(36160,33306,36161,S)}else{const K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let tt=0;tt<K.length;tt++){const it=K[tt],vt=s.convert(it.format,it.encoding),st=s.convert(it.type),W=v(it.internalFormat,vt,st,it.encoding),pt=ie(x);B&&Ut(x)===!1?a.renderbufferStorageMultisample(36161,pt,W,x.width,x.height):Ut(x)?d.renderbufferStorageMultisampleEXT(36161,pt,W,x.width,x.height):a.renderbufferStorage(36161,W,x.width,x.height)}}a.bindRenderbuffer(36161,null)}function At(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,tt=ie(x);if(x.depthTexture.format===bn)Ut(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,tt):a.framebufferTexture2D(36160,36096,3553,K,0);else if(x.depthTexture.format===ii)Ut(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,tt):a.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function gt(S){const x=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,S)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(36160,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=a.createRenderbuffer(),Gt(x.__webglDepthbuffer[K],S,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=a.createRenderbuffer(),Gt(x.__webglDepthbuffer,S,!1);e.bindFramebuffer(36160,null)}function ne(S,x,B){const K=n.get(S);x!==void 0&&ot(K.__webglFramebuffer,S,S.texture,36064,3553),B!==void 0&&gt(S)}function ue(S){const x=S.texture,B=n.get(S),K=n.get(x);S.addEventListener("dispose",at),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=x.version,o.memory.textures++);const tt=S.isWebGLCubeRenderTarget===!0,it=S.isWebGLMultipleRenderTargets===!0,vt=w(S)||r;if(tt){B.__webglFramebuffer=[];for(let st=0;st<6;st++)B.__webglFramebuffer[st]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),it)if(i.drawBuffers){const st=S.texture;for(let W=0,pt=st.length;W<pt;W++){const _t=n.get(st[W]);_t.__webglTexture===void 0&&(_t.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&S.samples>0&&Ut(S)===!1){const st=it?x:[x];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let W=0;W<st.length;W++){const pt=st[W];B.__webglColorRenderbuffer[W]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[W]);const _t=s.convert(pt.format,pt.encoding),ct=s.convert(pt.type),mt=v(pt.internalFormat,_t,ct,pt.encoding,S.isXRRenderTarget===!0),dt=ie(S);a.renderbufferStorageMultisample(36161,dt,mt,S.width,S.height),a.framebufferRenderbuffer(36160,36064+W,36161,B.__webglColorRenderbuffer[W])}a.bindRenderbuffer(36161,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Gt(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(36160,null)}}if(tt){e.bindTexture(34067,K.__webglTexture),H(34067,x,vt);for(let st=0;st<6;st++)ot(B.__webglFramebuffer[st],S,x,36064,34069+st);C(x,vt)&&z(34067),e.unbindTexture()}else if(it){const st=S.texture;for(let W=0,pt=st.length;W<pt;W++){const _t=st[W],ct=n.get(_t);e.bindTexture(3553,ct.__webglTexture),H(3553,_t,vt),ot(B.__webglFramebuffer,S,_t,36064+W,3553),C(_t,vt)&&z(3553)}e.unbindTexture()}else{let st=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(r?st=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,K.__webglTexture),H(st,x,vt),ot(B.__webglFramebuffer,S,x,36064,st),C(x,vt)&&z(st),e.unbindTexture()}S.depthBuffer&&gt(S)}function le(S){const x=w(S)||r,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,tt=B.length;K<tt;K++){const it=B[K];if(C(it,x)){const vt=S.isWebGLCubeRenderTarget?34067:3553,st=n.get(it).__webglTexture;e.bindTexture(vt,st),z(vt),e.unbindTexture()}}}function Ue(S){if(r&&S.samples>0&&Ut(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,K=S.height;let tt=16384;const it=[],vt=S.stencilBuffer?33306:36096,st=n.get(S),W=S.isWebGLMultipleRenderTargets===!0;if(W)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,st.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,st.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){it.push(36064+pt),S.depthBuffer&&it.push(vt);const _t=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(_t===!1&&(S.depthBuffer&&(tt|=256),S.stencilBuffer&&(tt|=1024)),W&&a.framebufferRenderbuffer(36008,36064,36161,st.__webglColorRenderbuffer[pt]),_t===!0&&(a.invalidateFramebuffer(36008,[vt]),a.invalidateFramebuffer(36009,[vt])),W){const ct=n.get(x[pt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ct,0)}a.blitFramebuffer(0,0,B,K,0,0,B,K,tt,9728),m&&a.invalidateFramebuffer(36008,it)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),W)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pt,36161,st.__webglColorRenderbuffer[pt]);const _t=n.get(x[pt]).__webglTexture;e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pt,3553,_t,0)}e.bindFramebuffer(36009,st.__webglMultisampledFramebuffer)}}function ie(S){return Math.min(u,S.samples)}function Ut(S){const x=n.get(S);return r&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function We(S){const x=o.render.frame;g.get(S)!==x&&(g.set(S,x),S.update())}function He(S,x){const B=S.encoding,K=S.format,tt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Vs||B!==Tn&&(B===qt?r===!1?t.has("EXT_sRGB")===!0&&K===ze?(S.format=Vs,S.minFilter=we,S.generateMipmaps=!1):x=Ta.sRGBToLinear(x):(K!==ze||tt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),x}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=ne,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Ut}function jd(a,t,e){const n=e.isWebGL2;function i(s,o=null){let r;if(s===En)return 5121;if(s===Ao)return 32819;if(s===Co)return 32820;if(s===wo)return 5120;if(s===Eo)return 5122;if(s===ba)return 5123;if(s===To)return 5124;if(s===Mn)return 5125;if(s===Sn)return 5126;if(s===Mi)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Po)return 6406;if(s===ze)return 6408;if(s===Ro)return 6409;if(s===Do)return 6410;if(s===bn)return 6402;if(s===ii)return 34041;if(s===Io)return 6403;if(s===Lo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Vs)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Fo)return 36244;if(s===zo)return 33319;if(s===No)return 33320;if(s===Oo)return 36249;if(s===rs||s===as||s===os||s===ls)if(o===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===as)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lr||s===cr||s===hr||s===ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uo)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dr||s===fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===dr)return o===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===fr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pr||s===mr||s===gr||s===_r||s===xr||s===vr||s===Mr||s===Sr||s===yr||s===br||s===wr||s===Er||s===Tr||s===Ar)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===pr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_r)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===br)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Er)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ar)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Cr)return o===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Qn?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class $d extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class Fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const E=new Jn;E.matrixAutoUpdate=!1,E.visible=!1,l.joints[p.jointName]=E,l.add(E)}const _=l.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class Kd extends Oe{constructor(t,e,n,i,s,o,r,c,l,h){if(h=h!==void 0?h:bn,h!==bn&&h!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bn&&(n=Mn),n===void 0&&h===ii&&(n=Qn),super(null,i,s,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:fe,this.minFilter=c!==void 0?c:fe,this.flipY=!1,this.generateMipmaps=!1}}class Qd extends Ln{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const g=e.getContextAttributes();let p=null,f=null;const _=[],E=[],b=new Ee;b.layers.enable(1),b.viewport=new se;const w=new Ee;w.layers.enable(2),w.viewport=new se;const y=[b,w],C=new $d;C.layers.enable(1),C.layers.enable(2);let z=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=_[D];return N===void 0&&(N=new Fs,_[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=_[D];return N===void 0&&(N=new Fs,_[D]=N),N.getGripSpace()},this.getHand=function(D){let N=_[D];return N===void 0&&(N=new Fs,_[D]=N),N.getHandSpace()};function T(D){const N=E.indexOf(D.inputSource);if(N===-1)return;const Q=_[N];Q!==void 0&&Q.dispatchEvent({type:D.type,data:D.inputSource})}function F(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",q);for(let D=0;D<_.length;D++){const N=E[D];N!==null&&(E[D]=null,_[D].disconnect(N))}z=null,v=null,t.setRenderTarget(p),d=null,u=null,h=null,i=null,f=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",F),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,N),i.updateRenderState({baseLayer:d}),f=new An(d.framebufferWidth,d.framebufferHeight,{format:ze,type:En,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let N=null,Q=null,J=null;g.depth&&(J=g.stencil?35056:33190,N=g.stencil?ii:bn,Q=g.stencil?Qn:Mn);const $={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer($),i.updateRenderState({layers:[u]}),f=new An(u.textureWidth,u.textureHeight,{format:ze,type:En,depthTexture:new Kd(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const lt=t.properties.get(f);lt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(r),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function q(D){for(let N=0;N<D.removed.length;N++){const Q=D.removed[N],J=E.indexOf(Q);J>=0&&(E[J]=null,_[J].dispatchEvent({type:"disconnected",data:Q}))}for(let N=0;N<D.added.length;N++){const Q=D.added[N];let J=E.indexOf(Q);if(J===-1){for(let lt=0;lt<_.length;lt++)if(lt>=E.length){E.push(Q),J=lt;break}else if(E[lt]===null){E[lt]=Q,J=lt;break}if(J===-1)break}const $=_[J];$&&$.dispatchEvent({type:"connected",data:Q})}}const at=new P,O=new P;function I(D,N,Q){at.setFromMatrixPosition(N.matrixWorld),O.setFromMatrixPosition(Q.matrixWorld);const J=at.distanceTo(O),$=N.projectionMatrix.elements,lt=Q.projectionMatrix.elements,St=$[14]/($[10]-1),H=$[14]/($[10]+1),Ot=($[9]+1)/$[5],xt=($[9]-1)/$[5],yt=($[8]-1)/$[0],ot=(lt[8]+1)/lt[0],Gt=St*yt,At=St*ot,gt=J/(-yt+ot),ne=gt*-yt;N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ne),D.translateZ(gt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ue=St+gt,le=H+gt,Ue=Gt-ne,ie=At+(J-ne),Ut=Ot*H/le*ue,We=xt*H/le*ue;D.projectionMatrix.makePerspective(Ue,ie,Ut,We,ue,le)}function X(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;C.near=w.near=b.near=D.near,C.far=w.far=b.far=D.far,(z!==C.near||v!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,v=C.far);const N=D.parent,Q=C.cameras;X(C,N);for(let $=0;$<Q.length;$++)X(Q[$],N);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.matrix.copy(C.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const J=D.children;for(let $=0,lt=J.length;$<lt;$++)J[$].updateMatrixWorld(!0);Q.length===2?I(C,b,w):C.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(D){u!==null&&(u.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let Z=null;function j(D,N){if(l=N.getViewerPose(c||o),m=N,l!==null){const Q=l.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let J=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,J=!0);for(let $=0;$<Q.length;$++){const lt=Q[$];let St=null;if(d!==null)St=d.getViewport(lt);else{const Ot=h.getViewSubImage(u,lt);St=Ot.viewport,$===0&&(t.setRenderTargetTextures(f,Ot.colorTexture,u.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(f))}let H=y[$];H===void 0&&(H=new Ee,H.layers.enable($),H.viewport=new se,y[$]=H),H.matrix.fromArray(lt.transform.matrix),H.projectionMatrix.fromArray(lt.projectionMatrix),H.viewport.set(St.x,St.y,St.width,St.height),$===0&&C.matrix.copy(H.matrix),J===!0&&C.cameras.push(H)}}for(let Q=0;Q<_.length;Q++){const J=E[Q],$=_[Q];J!==null&&$!==void 0&&$.update(J,N,c||o)}Z&&Z(D,N),m=null}const V=new Fa;V.setAnimationLoop(j),this.setAnimationLoop=function(D){Z=D},this.dispose=function(){}}}function tf(a,t){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,E,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,b)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?r(p,f,_,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ae&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ae&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const w=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*w}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let E;f.map?E=f.map:f.specularMap?E=f.specularMap:f.displacementMap?E=f.displacementMap:f.normalMap?E=f.normalMap:f.bumpMap?E=f.bumpMap:f.roughnessMap?E=f.roughnessMap:f.metalnessMap?E=f.metalnessMap:f.alphaMap?E=f.alphaMap:f.emissiveMap?E=f.emissiveMap:f.clearcoatMap?E=f.clearcoatMap:f.clearcoatNormalMap?E=f.clearcoatNormalMap:f.clearcoatRoughnessMap?E=f.clearcoatRoughnessMap:f.iridescenceMap?E=f.iridescenceMap:f.iridescenceThicknessMap?E=f.iridescenceThicknessMap:f.specularIntensityMap?E=f.specularIntensityMap:f.specularColorMap?E=f.specularColorMap:f.transmissionMap?E=f.transmissionMap:f.thicknessMap?E=f.thicknessMap:f.sheenColorMap?E=f.sheenColorMap:f.sheenRoughnessMap&&(E=f.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,_,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=E*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ae&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function ef(a,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?a.getParameter(35375):0;function c(E,b){const w=b.program;n.uniformBlockBinding(E,w)}function l(E,b){let w=i[E.id];w===void 0&&(g(E),w=h(E),i[E.id]=w,E.addEventListener("dispose",f));const y=b.program;n.updateUBOMapping(E,y);const C=t.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function h(E){const b=u();E.__bindingPointIndex=b;const w=a.createBuffer(),y=E.__size,C=E.usage;return a.bindBuffer(35345,w),a.bufferData(35345,y,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,b,w),w}function u(){for(let E=0;E<r;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=i[E.id],w=E.uniforms,y=E.__cache;a.bindBuffer(35345,b);for(let C=0,z=w.length;C<z;C++){const v=w[C];if(m(v,C,y)===!0){const T=v.value,F=v.__offset;typeof T=="number"?(v.__data[0]=T,a.bufferSubData(35345,F,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):T.toArray(v.__data),a.bufferSubData(35345,F,v.__data))}}a.bindBuffer(35345,null)}function m(E,b,w){const y=E.value;if(w[b]===void 0)return typeof y=="number"?w[b]=y:w[b]=y.clone(),!0;if(typeof y=="number"){if(w[b]!==y)return w[b]=y,!0}else{const C=w[b];if(C.equals(y)===!1)return C.copy(y),!0}return!1}function g(E){const b=E.uniforms;let w=0;const y=16;let C=0;for(let z=0,v=b.length;z<v;z++){const T=b[z],F=p(T);if(T.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,z>0){C=w%y;const q=y-C;C!==0&&q-F.boundary<0&&(w+=y-C,T.__offset=w)}w+=F.storage}return C=w%y,C>0&&(w+=y-C),E.__size=w,E.__cache={},this}function p(E){const b=E.value,w={boundary:0,storage:0};return typeof b=="number"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function f(E){const b=E.target;b.removeEventListener("dispose",f);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),a.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function _(){for(const E in i)a.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}function nf(){const a=Ji("canvas");return a.style.display="block",a}function Ba(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:nf(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tn,this.physicallyCorrectLights=!1,this.toneMapping=Qe,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,E=0,b=null,w=-1,y=null;const C=new se,z=new se;let v=null,T=t.width,F=t.height,q=1,at=null,O=null;const I=new se(0,0,T,F),X=new se(0,0,T,F);let Z=!1;const j=new Ia;let V=!1,D=!1,N=null;const Q=new Ct,J=new Dt,$=new P,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return b===null?q:1}let H=e;function Ot(M,R){for(let U=0;U<M.length;U++){const L=M[U],k=t.getContext(L,R);if(k!==null)return k}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qs}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),H===null){const R=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&R.shift(),H=Ot(R,M),H===null)throw Ot(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xt,yt,ot,Gt,At,gt,ne,ue,le,Ue,ie,Ut,We,He,S,x,B,K,tt,it,vt,st,W,pt;function _t(){xt=new fu(H),yt=new au(H,xt,a),xt.init(yt),st=new jd(H,xt,yt),ot=new Yd(H,xt,yt),Gt=new gu,At=new Id,gt=new Zd(H,xt,ot,At,yt,st,Gt),ne=new lu(p),ue=new du(p),le=new wl(H,yt),W=new su(H,xt,le,yt),Ue=new pu(H,le,Gt,W),ie=new Mu(H,Ue,le,Gt),tt=new vu(H,yt,gt),x=new ou(At),Ut=new Dd(p,ne,ue,xt,yt,W,x),We=new tf(p,At),He=new zd,S=new kd(xt,yt),K=new iu(p,ne,ue,ot,ie,h,o),B=new qd(p,ie,yt),pt=new ef(H,Gt,yt,ot),it=new ru(H,xt,Gt,yt),vt=new mu(H,xt,Gt,yt),Gt.programs=Ut.programs,p.capabilities=yt,p.extensions=xt,p.properties=At,p.renderLists=He,p.shadowMap=B,p.state=ot,p.info=Gt}_t();const ct=new Qd(p,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const M=xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(T,F,!1))},this.getSize=function(M){return M.set(T,F)},this.setSize=function(M,R,U){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,F=R,t.width=Math.floor(M*q),t.height=Math.floor(R*q),U!==!1&&(t.style.width=M+"px",t.style.height=R+"px"),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(T*q,F*q).floor()},this.setDrawingBufferSize=function(M,R,U){T=M,F=R,q=U,t.width=Math.floor(M*U),t.height=Math.floor(R*U),this.setViewport(0,0,M,R)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(I)},this.setViewport=function(M,R,U,L){M.isVector4?I.set(M.x,M.y,M.z,M.w):I.set(M,R,U,L),ot.viewport(C.copy(I).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(X)},this.setScissor=function(M,R,U,L){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,R,U,L),ot.scissor(z.copy(X).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(M){ot.setScissorTest(Z=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){O=M},this.getClearColor=function(M){return M.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(M=!0,R=!0,U=!0){let L=0;M&&(L|=16384),R&&(L|=256),U&&(L|=1024),H.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),He.dispose(),S.dispose(),At.dispose(),ne.dispose(),ue.dispose(),ie.dispose(),W.dispose(),pt.dispose(),Ut.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",rt),ct.removeEventListener("sessionend",ht),N&&(N.dispose(),N=null),It.stop()};function mt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=Gt.autoReset,R=B.enabled,U=B.autoUpdate,L=B.needsUpdate,k=B.type;_t(),Gt.autoReset=M,B.enabled=R,B.autoUpdate=U,B.needsUpdate=L,B.type=k}function Rt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Vt(M){const R=M.target;R.removeEventListener("dispose",Vt),Qt(R)}function Qt(M){A(M),At.remove(M)}function A(M){const R=At.get(M).programs;R!==void 0&&(R.forEach(function(U){Ut.releaseProgram(U)}),M.isShaderMaterial&&Ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,U,L,k,ft){R===null&&(R=lt);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,Tt=ka(M,R,U,L,k);ot.setMaterial(L,Mt);let wt=U.index;const Ft=U.attributes.position;if(wt===null){if(Ft===void 0||Ft.count===0)return}else if(wt.count===0)return;let Pt=1;L.wireframe===!0&&(wt=Ue.getWireframeAttribute(U),Pt=2),W.setup(k,L,Tt,U,wt);let Lt,Ht=it;wt!==null&&(Lt=le.get(wt),Ht=vt,Ht.setIndex(Lt));const dn=wt!==null?wt.count:Ft.count,Rn=U.drawRange.start*Pt,Dn=U.drawRange.count*Pt,Be=ft!==null?ft.start*Pt:0,zt=ft!==null?ft.count*Pt:1/0,In=Math.max(Rn,Be),Yt=Math.min(dn,Rn+Dn,Be+zt)-1,Se=Math.max(0,Yt-In+1);if(Se!==0){if(k.isMesh)L.wireframe===!0?(ot.setLineWidth(L.wireframeLinewidth*St()),Ht.setMode(1)):Ht.setMode(4);else if(k.isLine){let tn=L.linewidth;tn===void 0&&(tn=1),ot.setLineWidth(tn*St()),k.isLineSegments?Ht.setMode(1):k.isLineLoop?Ht.setMode(2):Ht.setMode(3)}else k.isPoints?Ht.setMode(0):k.isSprite&&Ht.setMode(4);if(k.isInstancedMesh)Ht.renderInstances(In,Se,k.count);else if(U.isInstancedBufferGeometry){const tn=Math.min(U.instanceCount,U._maxInstanceCount);Ht.renderInstances(In,Se,tn)}else Ht.render(In,Se)}},this.compile=function(M,R){function U(L,k,ft){L.transparent===!0&&L.side===cn?(L.side=Ae,L.needsUpdate=!0,Me(L,k,ft),L.side=ti,L.needsUpdate=!0,Me(L,k,ft),L.side=cn):Me(L,k,ft)}d=S.get(M),d.init(),g.push(d),M.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights(p.physicallyCorrectLights),M.traverse(function(L){const k=L.material;if(k)if(Array.isArray(k))for(let ft=0;ft<k.length;ft++){const Mt=k[ft];U(Mt,M,L)}else U(k,M,L)}),g.pop(),d=null};let G=null;function Y(M){G&&G(M)}function rt(){It.stop()}function ht(){It.start()}const It=new Fa;It.setAnimationLoop(Y),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(M){G=M,ct.setAnimationLoop(M),M===null?It.stop():It.start()},ct.addEventListener("sessionstart",rt),ct.addEventListener("sessionend",ht),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(R),R=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,R,b),d=S.get(M,g.length),d.init(),g.push(d),Q.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),j.setFromProjectionMatrix(Q),D=this.localClippingEnabled,V=x.init(this.clippingPlanes,D,R),u=He.get(M,m.length),u.init(),m.push(u),te(M,R,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(at,O),V===!0&&x.beginShadows();const U=d.state.shadowsArray;if(B.render(U,M,R),V===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(u,M),d.setupLights(p.physicallyCorrectLights),R.isArrayCamera){const L=R.cameras;for(let k=0,ft=L.length;k<ft;k++){const Mt=L[k];re(u,M,Mt,Mt.viewport)}}else re(u,M,R);b!==null&&(gt.updateMultisampleRenderTarget(b),gt.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(p,M,R),W.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function te(M,R,U,L){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){L&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const Mt=ie.update(M),Tt=M.material;Tt.visible&&u.push(M,Mt,Tt,U,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Gt.render.frame&&(M.skeleton.update(),M.skeleton.frame=Gt.render.frame),!M.frustumCulled||j.intersectsObject(M))){L&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const Mt=ie.update(M),Tt=M.material;if(Array.isArray(Tt)){const wt=Mt.groups;for(let Ft=0,Pt=wt.length;Ft<Pt;Ft++){const Lt=wt[Ft],Ht=Tt[Lt.materialIndex];Ht&&Ht.visible&&u.push(M,Mt,Ht,U,$.z,Lt)}}else Tt.visible&&u.push(M,Mt,Tt,U,$.z,null)}}const ft=M.children;for(let Mt=0,Tt=ft.length;Mt<Tt;Mt++)te(ft[Mt],R,U,L)}function re(M,R,U,L){const k=M.opaque,ft=M.transmissive,Mt=M.transparent;d.setupLightsView(U),ft.length>0&&un(k,R,U),L&&ot.viewport(C.copy(L)),k.length>0&&Wt(k,R,U),ft.length>0&&Wt(ft,R,U),Mt.length>0&&Wt(Mt,R,U),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function un(M,R,U){const L=yt.isWebGL2;N===null&&(N=new An(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Mi:En,minFilter:ts,samples:L&&s===!0?4:0})),p.getDrawingBufferSize(J),L?N.setSize(J.x,J.y):N.setSize($i(J.x),$i(J.y));const k=p.getRenderTarget();p.setRenderTarget(N),p.clear();const ft=p.toneMapping;p.toneMapping=Qe,Wt(M,R,U),p.toneMapping=ft,gt.updateMultisampleRenderTarget(N),gt.updateRenderTargetMipmap(N),p.setRenderTarget(k)}function Wt(M,R,U){const L=R.isScene===!0?R.overrideMaterial:null;for(let k=0,ft=M.length;k<ft;k++){const Mt=M[k],Tt=Mt.object,wt=Mt.geometry,Ft=L===null?Mt.material:L,Pt=Mt.group;Tt.layers.test(U.layers)&&Xe(Tt,R,U,wt,Ft,Pt)}}function Xe(M,R,U,L,k,ft){M.onBeforeRender(p,R,U,L,k,ft),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(p,R,U,L,M,ft),k.transparent===!0&&k.side===cn?(k.side=Ae,k.needsUpdate=!0,p.renderBufferDirect(U,R,L,k,M,ft),k.side=ti,k.needsUpdate=!0,p.renderBufferDirect(U,R,L,k,M,ft),k.side=cn):p.renderBufferDirect(U,R,L,k,M,ft),M.onAfterRender(p,R,U,L,k,ft)}function Me(M,R,U){R.isScene!==!0&&(R=lt);const L=At.get(M),k=d.state.lights,ft=d.state.shadowsArray,Mt=k.state.version,Tt=Ut.getParameters(M,k.state,ft,R,U),wt=Ut.getProgramCacheKey(Tt);let Ft=L.programs;L.environment=M.isMeshStandardMaterial?R.environment:null,L.fog=R.fog,L.envMap=(M.isMeshStandardMaterial?ue:ne).get(M.envMap||L.environment),Ft===void 0&&(M.addEventListener("dispose",Vt),Ft=new Map,L.programs=Ft);let Pt=Ft.get(wt);if(Pt!==void 0){if(L.currentProgram===Pt&&L.lightsStateVersion===Mt)return Ks(M,Tt),Pt}else Tt.uniforms=Ut.getUniforms(M),M.onBuild(U,Tt,p),M.onBeforeCompile(Tt,p),Pt=Ut.acquireProgram(Tt,wt),Ft.set(wt,Pt),L.uniforms=Tt.uniforms;const Lt=L.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=x.uniform),Ks(M,Tt),L.needsLights=Wa(M),L.lightsStateVersion=Mt,L.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix);const Ht=Pt.getUniforms(),dn=Yi.seqWithValue(Ht.seq,Lt);return L.currentProgram=Pt,L.uniformsList=dn,Pt}function Ks(M,R){const U=At.get(M);U.outputEncoding=R.outputEncoding,U.instancing=R.instancing,U.skinning=R.skinning,U.morphTargets=R.morphTargets,U.morphNormals=R.morphNormals,U.morphColors=R.morphColors,U.morphTargetsCount=R.morphTargetsCount,U.numClippingPlanes=R.numClippingPlanes,U.numIntersection=R.numClipIntersection,U.vertexAlphas=R.vertexAlphas,U.vertexTangents=R.vertexTangents,U.toneMapping=R.toneMapping}function ka(M,R,U,L,k){R.isScene!==!0&&(R=lt),gt.resetTextureUnits();const ft=R.fog,Mt=L.isMeshStandardMaterial?R.environment:null,Tt=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Tn,wt=(L.isMeshStandardMaterial?ue:ne).get(L.envMap||Mt),Ft=L.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Pt=!!L.normalMap&&!!U.attributes.tangent,Lt=!!U.morphAttributes.position,Ht=!!U.morphAttributes.normal,dn=!!U.morphAttributes.color,Rn=L.toneMapped?p.toneMapping:Qe,Dn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Be=Dn!==void 0?Dn.length:0,zt=At.get(L),In=d.state.lights;if(V===!0&&(D===!0||M!==y)){const me=M===y&&L.id===w;x.setState(L,M,me)}let Yt=!1;L.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==In.state.version||zt.outputEncoding!==Tt||k.isInstancedMesh&&zt.instancing===!1||!k.isInstancedMesh&&zt.instancing===!0||k.isSkinnedMesh&&zt.skinning===!1||!k.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==wt||L.fog===!0&&zt.fog!==ft||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==x.numPlanes||zt.numIntersection!==x.numIntersection)||zt.vertexAlphas!==Ft||zt.vertexTangents!==Pt||zt.morphTargets!==Lt||zt.morphNormals!==Ht||zt.morphColors!==dn||zt.toneMapping!==Rn||yt.isWebGL2===!0&&zt.morphTargetsCount!==Be)&&(Yt=!0):(Yt=!0,zt.__version=L.version);let Se=zt.currentProgram;Yt===!0&&(Se=Me(L,R,k));let tn=!1,ci=!1,ns=!1;const ce=Se.getUniforms(),fn=zt.uniforms;if(ot.useProgram(Se.program)&&(tn=!0,ci=!0,ns=!0),L.id!==w&&(w=L.id,ci=!0),tn||y!==M){if(ce.setValue(H,"projectionMatrix",M.projectionMatrix),yt.logarithmicDepthBuffer&&ce.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),y!==M&&(y=M,ci=!0,ns=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const me=ce.map.cameraPosition;me!==void 0&&me.setValue(H,$.setFromMatrixPosition(M.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ce.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||k.isSkinnedMesh)&&ce.setValue(H,"viewMatrix",M.matrixWorldInverse)}if(k.isSkinnedMesh){ce.setOptional(H,k,"bindMatrix"),ce.setOptional(H,k,"bindMatrixInverse");const me=k.skeleton;me&&(yt.floatVertexTextures?(me.boneTexture===null&&me.computeBoneTexture(),ce.setValue(H,"boneTexture",me.boneTexture,gt),ce.setValue(H,"boneTextureSize",me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const is=U.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0&&yt.isWebGL2===!0)&&tt.update(k,U,L,Se),(ci||zt.receiveShadow!==k.receiveShadow)&&(zt.receiveShadow=k.receiveShadow,ce.setValue(H,"receiveShadow",k.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(fn.envMap.value=wt,fn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),ci&&(ce.setValue(H,"toneMappingExposure",p.toneMappingExposure),zt.needsLights&&Va(fn,ns),ft&&L.fog===!0&&We.refreshFogUniforms(fn,ft),We.refreshMaterialUniforms(fn,L,q,F,N),Yi.upload(H,zt.uniformsList,fn,gt)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Yi.upload(H,zt.uniformsList,fn,gt),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ce.setValue(H,"center",k.center),ce.setValue(H,"modelViewMatrix",k.modelViewMatrix),ce.setValue(H,"normalMatrix",k.normalMatrix),ce.setValue(H,"modelMatrix",k.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const me=L.uniformsGroups;for(let ss=0,Ha=me.length;ss<Ha;ss++)if(yt.isWebGL2){const Qs=me[ss];pt.update(Qs,Se),pt.bind(Qs,Se)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Se}function Va(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function Wa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,R,U){At.get(M.texture).__webglTexture=R,At.get(M.depthTexture).__webglTexture=U;const L=At.get(M);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=U===void 0,L.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,R){const U=At.get(M);U.__webglFramebuffer=R,U.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,U=0){b=M,_=R,E=U;let L=!0,k=null,ft=!1,Mt=!1;if(M){const wt=At.get(M);wt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),L=!1):wt.__webglFramebuffer===void 0?gt.setupRenderTarget(M):wt.__hasExternalTextures&&gt.rebindTextures(M,At.get(M.texture).__webglTexture,At.get(M.depthTexture).__webglTexture);const Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const Pt=At.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(k=Pt[R],ft=!0):yt.isWebGL2&&M.samples>0&&gt.useMultisampledRTT(M)===!1?k=At.get(M).__webglMultisampledFramebuffer:k=Pt,C.copy(M.viewport),z.copy(M.scissor),v=M.scissorTest}else C.copy(I).multiplyScalar(q).floor(),z.copy(X).multiplyScalar(q).floor(),v=Z;if(ot.bindFramebuffer(36160,k)&&yt.drawBuffers&&L&&ot.drawBuffers(M,k),ot.viewport(C),ot.scissor(z),ot.setScissorTest(v),ft){const wt=At.get(M.texture);H.framebufferTexture2D(36160,36064,34069+R,wt.__webglTexture,U)}else if(Mt){const wt=At.get(M.texture),Ft=R||0;H.framebufferTextureLayer(36160,36064,wt.__webglTexture,U||0,Ft)}w=-1},this.readRenderTargetPixels=function(M,R,U,L,k,ft,Mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=At.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){ot.bindFramebuffer(36160,Tt);try{const wt=M.texture,Ft=wt.format,Pt=wt.type;if(Ft!==ze&&st.convert(Ft)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Pt===Mi&&(xt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Pt!==En&&st.convert(Pt)!==H.getParameter(35738)&&!(Pt===Sn&&(yt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-L&&U>=0&&U<=M.height-k&&H.readPixels(R,U,L,k,st.convert(Ft),st.convert(Pt),ft)}finally{const wt=b!==null?At.get(b).__webglFramebuffer:null;ot.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(M,R,U=0){const L=Math.pow(2,-U),k=Math.floor(R.image.width*L),ft=Math.floor(R.image.height*L);gt.setTexture2D(R,0),H.copyTexSubImage2D(3553,U,0,0,M.x,M.y,k,ft),ot.unbindTexture()},this.copyTextureToTexture=function(M,R,U,L=0){const k=R.image.width,ft=R.image.height,Mt=st.convert(U.format),Tt=st.convert(U.type);gt.setTexture2D(U,0),H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment),R.isDataTexture?H.texSubImage2D(3553,L,M.x,M.y,k,ft,Mt,Tt,R.image.data):R.isCompressedTexture?H.compressedTexSubImage2D(3553,L,M.x,M.y,R.mipmaps[0].width,R.mipmaps[0].height,Mt,R.mipmaps[0].data):H.texSubImage2D(3553,L,M.x,M.y,Mt,Tt,R.image),L===0&&U.generateMipmaps&&H.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(M,R,U,L,k=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=M.max.x-M.min.x+1,Mt=M.max.y-M.min.y+1,Tt=M.max.z-M.min.z+1,wt=st.convert(L.format),Ft=st.convert(L.type);let Pt;if(L.isData3DTexture)gt.setTexture3D(L,0),Pt=32879;else if(L.isDataArrayTexture)gt.setTexture2DArray(L,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,L.flipY),H.pixelStorei(37441,L.premultiplyAlpha),H.pixelStorei(3317,L.unpackAlignment);const Lt=H.getParameter(3314),Ht=H.getParameter(32878),dn=H.getParameter(3316),Rn=H.getParameter(3315),Dn=H.getParameter(32877),Be=U.isCompressedTexture?U.mipmaps[0]:U.image;H.pixelStorei(3314,Be.width),H.pixelStorei(32878,Be.height),H.pixelStorei(3316,M.min.x),H.pixelStorei(3315,M.min.y),H.pixelStorei(32877,M.min.z),U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Pt,k,R.x,R.y,R.z,ft,Mt,Tt,wt,Ft,Be.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Pt,k,R.x,R.y,R.z,ft,Mt,Tt,wt,Be.data)):H.texSubImage3D(Pt,k,R.x,R.y,R.z,ft,Mt,Tt,wt,Ft,Be),H.pixelStorei(3314,Lt),H.pixelStorei(32878,Ht),H.pixelStorei(3316,dn),H.pixelStorei(3315,Rn),H.pixelStorei(32877,Dn),k===0&&L.generateMipmaps&&H.generateMipmap(Pt),ot.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?gt.setTextureCube(M,0):M.isData3DTexture?gt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?gt.setTexture2DArray(M,0):gt.setTexture2D(M,0),ot.unbindTexture()},this.resetState=function(){_=0,E=0,b=null,ot.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class sf extends Ba{}sf.prototype.isWebGL1Renderer=!0;class rf extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class vi extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new P,ua=new P,da=new Ct,zs=new Zs,Hi=new yi;class Zi extends pe{constructor(t=new ve,e=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ha.fromBufferAttribute(e,i-1),ua.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(i),Hi.radius+=s,t.ray.intersectsSphere(Hi)===!1)return;da.copy(i).invert(),zs.copy(t.ray).applyMatrix4(da);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let b=_,w=E-1;b<w;b+=m){const y=g.getX(b),C=g.getX(b+1);if(l.fromBufferAttribute(f,y),h.fromBufferAttribute(f,C),zs.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),E=Math.min(f.count,o.start+o.count);for(let b=_,w=E-1;b<w;b+=m){if(l.fromBufferAttribute(f,b),h.fromBufferAttribute(f,b+1),zs.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const fa=new P,pa=new P;class af extends Zi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)fa.fromBufferAttribute(e,i),pa.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fa.distanceTo(pa);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class of{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let r=0,c=s-1,l;for(;r<=c;)if(i=Math.floor(r+(c-r)/2),l=n[i]-o,l<0)r=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),r=this.getPoint(s),c=e||(o.isVector2?new Dt:new P);return c.copy(r).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],o=[],r=new P,c=new Ct;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],r),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),r.crossVectors(i[m-1],i[m]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(oe(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(r,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(oe(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(r.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xi extends of{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new Dt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const r=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ga{constructor(t,e,n=0,i=1/0){this.ray=new Zs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Xs(t,this,n,e),n.sort(ma),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Xs(t[i],this,n,e);return n.sort(ma),n}}function ma(a,t){return a.distance-t.distance}function Xs(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)Xs(i[s],t,e,!0)}}class lf extends af{constructor(t=10,e=10,n=4473924,i=8947848){n=new Bt(n),i=new Bt(i);const s=e/2,o=t/e,r=t/2,c=[],l=[];for(let d=0,m=0,g=-r;d<=e;d++,g+=o){c.push(-r,0,g,r,0,g),c.push(g,0,-r,g,0,r);const p=d===s?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const h=new ve;h.setAttribute("position",new Ne(c,3)),h.setAttribute("color",new Ne(l,3));const u=new vi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qs);const ut={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Nt={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},bt={x:0,y:0},xe={camera:new Ct,gizmos:new Ct},kt={type:"change"},De={type:"start"},be={type:"end"},cf=new Ga,jt=new P,ga=new Ct,_a=new Ct,Ie=new P;class hf extends Ln{constructor(e,n,i=null){super();et(this,"onWindowResize",()=>{const e=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const n=this._tbRadius/e,s=new Xi(0,0,n,n).getPoints(this._curvePts),o=new ve().setFromPoints(s);for(const r in this._gizmos.children)this._gizmos.children[r].geometry=o;this.dispatchEvent(kt)});et(this,"onContextMenu",e=>{if(!!this.enabled){for(let n=0;n<this.mouseActions.length;n++)if(this.mouseActions[n].mouse==2){e.preventDefault();break}}});et(this,"onPointerCancel",()=>{this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Nt.NONE});et(this,"onPointerDown",e=>{if(e.button==0&&e.isPrimary?(this._downValid=!0,this._downEvents.push(e),this._downStart=performance.now()):this._downValid=!1,e.pointerType=="touch"&&this._input!=Nt.CURSOR)switch(this._touchStart.push(e),this._touchCurrent.push(e),this._input){case Nt.NONE:this._input=Nt.ONE_FINGER,this.onSinglePanStart(e,"ROTATE"),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp);break;case Nt.ONE_FINGER:case Nt.ONE_FINGER_SWITCHED:this._input=Nt.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Nt.TWO_FINGER:this._input=Nt.MULT_FINGER,this.onTriplePanStart(e);break}else if(e.pointerType!="touch"&&this._input==Nt.NONE){let n=null;e.ctrlKey||e.metaKey?n="CTRL":e.shiftKey&&(n="SHIFT"),this._mouseOp=this.getOpFromAction(e.button,n),this._mouseOp!=null&&(window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this._input=Nt.CURSOR,this._button=e.button,this.onSinglePanStart(e,this._mouseOp))}});et(this,"onPointerMove",e=>{if(e.pointerType=="touch"&&this._input!=Nt.CURSOR)switch(this._input){case Nt.ONE_FINGER:this.updateTouchEvent(e),this.onSinglePanMove(e,ut.ROTATE);break;case Nt.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],e)*this._devPxRatio>=this._switchSensibility){this._input=Nt.ONE_FINGER,this.updateTouchEvent(e),this.onSinglePanStart(e,"ROTATE");break}break;case Nt.TWO_FINGER:this.updateTouchEvent(e),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Nt.MULT_FINGER:this.updateTouchEvent(e),this.onTriplePanMove(e);break}else if(e.pointerType!="touch"&&this._input==Nt.CURSOR){let n=null;e.ctrlKey||e.metaKey?n="CTRL":e.shiftKey&&(n="SHIFT");const i=this.getOpStateFromAction(this._button,n);i!=null&&this.onSinglePanMove(e,i)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],e)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)});et(this,"onPointerUp",e=>{if(e.pointerType=="touch"&&this._input!=Nt.CURSOR){const n=this._touchCurrent.length;for(let i=0;i<n;i++)if(this._touchCurrent[i].pointerId==e.pointerId){this._touchCurrent.splice(i,1),this._touchStart.splice(i,1);break}switch(this._input){case Nt.ONE_FINGER:case Nt.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Nt.NONE,this.onSinglePanEnd();break;case Nt.TWO_FINGER:this.onDoublePanEnd(e),this.onPinchEnd(e),this.onRotateEnd(e),this._input=Nt.ONE_FINGER_SWITCHED;break;case Nt.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Nt.NONE,this.onTriplePanEnd());break}}else e.pointerType!="touch"&&this._input==Nt.CURSOR&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Nt.NONE,this.onSinglePanEnd(),this._button=-1);if(e.isPrimary)if(this._downValid)if(e.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const i=e.timeStamp-this._clickStart,s=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;i<=this._maxInterval&&s<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(e)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)});et(this,"onWheel",e=>{if(this.enabled&&this.enableZoom){let n=null;e.ctrlKey||e.metaKey?n="CTRL":e.shiftKey&&(n="SHIFT");const i=this.getOpFromAction("WHEEL",n);if(i!=null){e.preventDefault(),this.dispatchEvent(De);const s=125;let o=e.deltaY/s,r=1;switch(o>0?r=1/this.scaleFactor:o<0&&(r=this.scaleFactor),i){case"ZOOM":if(this.updateTbState(ut.SCALE,!0),o>0?r=1/Math.pow(this.scaleFactor,o):o<0&&(r=Math.pow(this.scaleFactor,-o)),this.cursorZoom&&this.enablePan){let c;this.camera.isOrthographicCamera?c=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(c=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(r,c))}else this.applyTransformMatrix(this.scale(r,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(kt),this.dispatchEvent(be);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(ut.FOV,!0),e.deltaX!=0&&(o=e.deltaX/s,r=1,o>0?r=1/Math.pow(this.scaleFactor,o):o<0&&(r=Math.pow(this.scaleFactor,-o))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const c=this._v3_1.distanceTo(this._gizmos.position);let l=c/r;l=Xt.clamp(l,this.minDistance,this.maxDistance);const h=c*Math.tan(Xt.DEG2RAD*this.camera.fov*.5);let u=Xt.RAD2DEG*(Math.atan(h/l)*2);u>this.maxFov?u=this.maxFov:u<this.minFov&&(u=this.minFov);const d=h/Math.tan(Xt.DEG2RAD*(u/2));r=c/d,this.setFov(u),this.applyTransformMatrix(this.scale(r,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(kt),this.dispatchEvent(be);break}}}});et(this,"onSinglePanStart",(e,n)=>{if(this.enabled)switch(this.dispatchEvent(De),this.setCenter(e.clientX,e.clientY),n){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(kt)),this.updateTbState(ut.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(kt));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(ut.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,bt.x,bt.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(kt);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(kt)),this.updateTbState(ut.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(kt)),this.updateTbState(ut.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}});et(this,"onSinglePanMove",(e,n)=>{if(this.enabled){const i=n!=this._state;switch(this.setCenter(e.clientX,e.clientY),n){case ut.PAN:this.enablePan&&(i?(this.dispatchEvent(be),this.dispatchEvent(De),this.updateTbState(n,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case ut.ROTATE:if(this.enableRotate)if(i)this.dispatchEvent(be),this.dispatchEvent(De),this.updateTbState(n,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,bt.x,bt.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,bt.x,bt.y,this.domElement,this._tbRadius));const s=this._startCursorPosition.distanceTo(this._currentCursorPosition),o=this._startCursorPosition.angleTo(this._currentCursorPosition),r=Math.max(s/this._tbRadius,o);this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),r)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=r,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case ut.SCALE:if(this.enableZoom)if(i)this.dispatchEvent(be),this.dispatchEvent(De),this.updateTbState(n,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5);const o=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;o<0?r=1/Math.pow(this.scaleFactor,-o*8):o>0&&(r=Math.pow(this.scaleFactor,o*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(r,this._v3_1))}break;case ut.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(i)this.dispatchEvent(be),this.dispatchEvent(De),this.updateTbState(n,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5);const o=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;o<0?r=1/Math.pow(this.scaleFactor,-o*8):o>0&&(r=Math.pow(this.scaleFactor,o*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const c=this._v3_1.distanceTo(this._gizmos.position);let l=c/r;l=Xt.clamp(l,this.minDistance,this.maxDistance);const h=c*Math.tan(Xt.DEG2RAD*this._fovState*.5);let u=Xt.RAD2DEG*(Math.atan(h/l)*2);u=Xt.clamp(u,this.minFov,this.maxFov);const d=h/Math.tan(Xt.DEG2RAD*(u/2));r=c/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(u),this.applyTransformMatrix(this.scale(r,this._v3_2,!1)),jt.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/c),this._m4_1.makeTranslation(jt.x,jt.y,jt.z)}break}this.dispatchEvent(kt)}});et(this,"onSinglePanEnd",()=>{if(this._state==ut.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const n=Math.abs((this._wPrev+this._wCurr)/2),i=this;this._animationId=window.requestAnimationFrame(function(s){i.updateTbState(ut.ANIMATION_ROTATE,!0);const o=i.calculateRotationAxis(i._cursorPosPrev,i._cursorPosCurr);i.onRotationAnim(s,o,Math.min(n,i.wMax))})}else this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(kt);else this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(kt)}else(this._state==ut.PAN||this._state==ut.IDLE)&&(this.updateTbState(ut.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(kt));this.dispatchEvent(be)});et(this,"onDoubleTap",e=>{if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(De),this.setCenter(e.clientX,e.clientY);const n=this.unprojectOnObj(this.getCursorNDC(bt.x,bt.y,this.domElement),this.camera);if(n!=null&&this.enableAnimations){const i=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(s){i.updateTbState(ut.ANIMATION_FOCUS,!0),i.onFocusAnim(s,n,i._cameraMatrixState,i._gizmoMatrixState)})}else n!=null&&!this.enableAnimations&&(this.updateTbState(ut.FOCUS,!0),this.focus(n,this.scaleFactor),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(kt))}this.dispatchEvent(be)});et(this,"onDoublePanStart",()=>{this.enabled&&this.enablePan&&(this.dispatchEvent(De),this.updateTbState(ut.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))});et(this,"onDoublePanMove",()=>{this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=ut.PAN&&(this.updateTbState(ut.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(kt))});et(this,"onDoublePanEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(be)});et(this,"onRotateStart",()=>{this.enabled&&this.enableRotate&&(this.dispatchEvent(De),this.updateTbState(ut.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))});et(this,"onRotateMove",()=>{if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let e;this._state!=ut.ZROTATE&&(this.updateTbState(ut.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),e=this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):e=new P().setFromMatrixPosition(this._gizmoMatrixState);const n=Xt.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(e,n)),this.dispatchEvent(kt)}});et(this,"onRotateEnd",()=>{this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(be)});et(this,"onPinchStart",()=>{this.enabled&&this.enableZoom&&(this.dispatchEvent(De),this.updateTbState(ut.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))});et(this,"onPinchMove",()=>{if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const e=12;this._state!=ut.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(ut.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),e*this._devPxRatio);const n=this._currentFingerDistance/this._startFingerDistance;let i;this.enablePan?this.camera.isOrthographicCamera?i=this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(i=this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):i=this._gizmos.position,this.applyTransformMatrix(this.scale(n,i)),this.dispatchEvent(kt)}});et(this,"onPinchEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(be)});et(this,"onTriplePanStart",()=>{if(this.enabled&&this.enableZoom){this.dispatchEvent(De),this.updateTbState(ut.SCALE,!0);let e=0,n=0;const i=this._touchCurrent.length;for(let s=0;s<i;s++)e+=this._touchCurrent[s].clientX,n+=this._touchCurrent[s].clientY;this.setCenter(e/i,n/i),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}});et(this,"onTriplePanMove",()=>{if(this.enabled&&this.enableZoom){let e=0,n=0;const i=this._touchCurrent.length;for(let m=0;m<i;m++)e+=this._touchCurrent[m].clientX,n+=this._touchCurrent[m].clientY;this.setCenter(e/i,n/i);const s=8;this._currentCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5);const o=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;o<0?r=1/Math.pow(this.scaleFactor,-o*s):o>0&&(r=Math.pow(this.scaleFactor,o*s)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const c=this._v3_1.distanceTo(this._gizmos.position);let l=c/r;l=Xt.clamp(l,this.minDistance,this.maxDistance);const h=c*Math.tan(Xt.DEG2RAD*this._fovState*.5);let u=Xt.RAD2DEG*(Math.atan(h/l)*2);u=Xt.clamp(u,this.minFov,this.maxFov);const d=h/Math.tan(Xt.DEG2RAD*(u/2));r=c/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(u),this.applyTransformMatrix(this.scale(r,this._v3_2,!1)),jt.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/c),this._m4_1.makeTranslation(jt.x,jt.y,jt.z),this.dispatchEvent(kt)}});et(this,"onTriplePanEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(be)});et(this,"setCenter",(e,n)=>{bt.x=e,bt.y=n});et(this,"initializeMouseActions",()=>{this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")});et(this,"compareMouseAction",(e,n)=>e.operation==n.operation?e.mouse==n.mouse&&e.key==n.key:!1);et(this,"setMouseAction",(e,n,i=null)=>{const s=["PAN","ROTATE","ZOOM","FOV"],o=[0,1,2,"WHEEL"],r=["CTRL","SHIFT",null];let c;if(!s.includes(e)||!o.includes(n)||!r.includes(i)||n=="WHEEL"&&e!="ZOOM"&&e!="FOV")return!1;switch(e){case"PAN":c=ut.PAN;break;case"ROTATE":c=ut.ROTATE;break;case"ZOOM":c=ut.SCALE;break;case"FOV":c=ut.FOV;break}const l={operation:e,mouse:n,key:i,state:c};for(let h=0;h<this.mouseActions.length;h++)if(this.mouseActions[h].mouse==l.mouse&&this.mouseActions[h].key==l.key)return this.mouseActions.splice(h,1,l),!0;return this.mouseActions.push(l),!0});et(this,"unsetMouseAction",(e,n=null)=>{for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==e&&this.mouseActions[i].key==n)return this.mouseActions.splice(i,1),!0;return!1});et(this,"getOpFromAction",(e,n)=>{let i;for(let s=0;s<this.mouseActions.length;s++)if(i=this.mouseActions[s],i.mouse==e&&i.key==n)return i.operation;if(n!=null){for(let s=0;s<this.mouseActions.length;s++)if(i=this.mouseActions[s],i.mouse==e&&i.key==null)return i.operation}return null});et(this,"getOpStateFromAction",(e,n)=>{let i;for(let s=0;s<this.mouseActions.length;s++)if(i=this.mouseActions[s],i.mouse==e&&i.key==n)return i.state;if(n!=null){for(let s=0;s<this.mouseActions.length;s++)if(i=this.mouseActions[s],i.mouse==e&&i.key==null)return i.state}return null});et(this,"getAngle",(e,n)=>Math.atan2(n.clientY-e.clientY,n.clientX-e.clientX)*180/Math.PI);et(this,"updateTouchEvent",e=>{for(let n=0;n<this._touchCurrent.length;n++)if(this._touchCurrent[n].pointerId==e.pointerId){this._touchCurrent.splice(n,1,e);break}});et(this,"calculateAngularSpeed",(e,n,i,s)=>{const o=n-e,r=(s-i)/1e3;return r==0?0:o/r});et(this,"calculatePointersDistance",(e,n)=>Math.sqrt(Math.pow(n.clientX-e.clientX,2)+Math.pow(n.clientY-e.clientY,2)));et(this,"calculateRotationAxis",(e,n)=>(this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(e,n).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()));et(this,"calculateTbRadius",e=>{const n=e.position.distanceTo(this._gizmos.position);if(e.type=="PerspectiveCamera"){const i=Xt.DEG2RAD*e.fov*.5,s=Math.atan(e.aspect*Math.tan(i));return Math.tan(Math.min(i,s))*n*this.radiusFactor}else if(e.type=="OrthographicCamera")return Math.min(e.top,e.right)*this.radiusFactor});et(this,"focus",(e,n,i=1)=>{jt.copy(e).sub(this._gizmos.position).multiplyScalar(i),this._translationMatrix.makeTranslation(jt.x,jt.y,jt.z),ga.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),_a.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(n,this._gizmos.position)),this._gizmoMatrixState.copy(ga),this._cameraMatrixState.copy(_a)});et(this,"drawGrid",()=>{if(this.scene!=null){let i,s,o,r;if(this.camera.isOrthographicCamera){const c=this.camera.right-this.camera.left,l=this.camera.bottom-this.camera.top;o=Math.max(c,l),r=o/20,i=o/this.camera.zoom*3,s=i/r*this.camera.zoom}else if(this.camera.isPerspectiveCamera){const c=this.camera.position.distanceTo(this._gizmos.position),l=Xt.DEG2RAD*this.camera.fov*.5,h=Math.atan(this.camera.aspect*Math.tan(l));o=Math.tan(Math.max(l,h))*c*2,r=o/20,i=o*3,s=i/r}this._grid==null&&(this._grid=new lf(i,s,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}});et(this,"dispose",()=>{this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerCancel),this.domElement.removeEventListener("wheel",this.onWheel),this.domElement.removeEventListener("contextmenu",this.onContextMenu),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("resize",this.onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()});et(this,"disposeGrid",()=>{this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)});et(this,"easeOutCubic",e=>1-Math.pow(1-e,3));et(this,"activateGizmos",e=>{const n=this._gizmos.children[0],i=this._gizmos.children[1],s=this._gizmos.children[2];e?(n.material.setValues({opacity:1}),i.material.setValues({opacity:1}),s.material.setValues({opacity:1})):(n.material.setValues({opacity:.6}),i.material.setValues({opacity:.6}),s.material.setValues({opacity:.6}))});et(this,"getCursorNDC",(e,n,i)=>{const s=i.getBoundingClientRect();return this._v2_1.setX((e-s.left)/s.width*2-1),this._v2_1.setY((s.bottom-n)/s.height*2-1),this._v2_1.clone()});et(this,"getCursorPosition",(e,n,i)=>(this._v2_1.copy(this.getCursorNDC(e,n,i)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()));et(this,"setCamera",e=>{e.lookAt(this.target),e.updateMatrix(),e.type=="PerspectiveCamera"&&(this._fov0=e.fov,this._fovState=e.fov),this._cameraMatrixState0.copy(e.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(e.projectionMatrix),this._zoom0=e.zoom,this._zoomState=this._zoom0,this._initialNear=e.near,this._nearPos0=e.position.distanceTo(this.target)-e.near,this._nearPos=this._initialNear,this._initialFar=e.far,this._farPos0=e.position.distanceTo(this.target)-e.far,this._farPos=this._initialFar,this._up0.copy(e.up),this._upState.copy(e.up),this.camera=e,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(e),this.makeGizmos(this.target,this._tbRadius)});et(this,"makeGizmos",(e,n)=>{const s=new Xi(0,0,n,n).getPoints(this._curvePts),o=new ve().setFromPoints(s),r=new vi({color:16744576,fog:!1,transparent:!0,opacity:.6}),c=new vi({color:8454016,fog:!1,transparent:!0,opacity:.6}),l=new vi({color:8421631,fog:!1,transparent:!0,opacity:.6}),h=new Zi(o,r),u=new Zi(o,c),d=new Zi(o,l),m=Math.PI*.5;if(h.rotation.x=m,u.rotation.y=m,this._gizmoMatrixState0.identity().setPosition(e),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const g=1/this.camera.zoom;this._scaleMatrix.makeScale(g,g,g),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(e.x,e.y,e.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(g){g.isLine&&(g.geometry.dispose(),g.material.dispose())}),this._gizmos.clear(),this._gizmos.add(h),this._gizmos.add(u),this._gizmos.add(d)});et(this,"onFocusAnim",(e,n,i,s)=>{if(this._timeStart==-1&&(this._timeStart=e),this._state==ut.ANIMATION_FOCUS){const r=(e-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(s),r>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(n,this.scaleFactor),this._timeStart=-1,this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(kt);else{const c=this.easeOutCubic(r),l=1-c+this.scaleFactor*c;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(n,l,c),this.dispatchEvent(kt);const h=this;this._animationId=window.requestAnimationFrame(function(u){h.onFocusAnim(u,n,i,s.clone())})}}else this._animationId=-1,this._timeStart=-1});et(this,"onRotationAnim",(e,n,i)=>{if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=e),this._state==ut.ANIMATION_ROTATE){const s=(e-this._timeStart)/1e3;if(i+-this.dampingFactor*s>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(s,2)+i*s+0,this.applyTransformMatrix(this.rotate(n,this._angleCurrent)),this.dispatchEvent(kt);const r=this;this._animationId=window.requestAnimationFrame(function(c){r.onRotationAnim(c,n,i)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(kt)}else this._animationId=-1,this._timeStart=-1,this._state!=ut.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(kt))});et(this,"pan",(e,n,i=!1)=>{const s=e.clone().sub(n);if(this.camera.isOrthographicCamera)s.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&i){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const o=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);s.multiplyScalar(1/o)}return this._v3_1.set(s.x,s.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),xe});et(this,"reset",()=>{this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(kt)});et(this,"rotate",(e,n)=>{const i=this._gizmos.position;return this._translationMatrix.makeTranslation(-i.x,-i.y,-i.z),this._rotationMatrix.makeRotationAxis(e,-n),this._m4_1.makeTranslation(i.x,i.y,i.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),xe});et(this,"copyState",()=>{let e;this.camera.isOrthographicCamera?e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(e)});et(this,"pasteState",()=>{const e=this;navigator.clipboard.readText().then(function(i){e.setStateFromJSON(i)})});et(this,"saveState",()=>{this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)});et(this,"scale",(e,n,i=!0)=>{Ie.copy(n);let s=1/e;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=e,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,s=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,s=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(s,s,s),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),Ie.sub(this._v3_1);const o=Ie.clone().multiplyScalar(s);return Ie.sub(o),this._m4_1.makeTranslation(Ie.x,Ie.y,Ie.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),xe}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let o=this._v3_1.distanceTo(Ie),r=o-o*s;const c=o-r;if(c<this.minDistance?(s=this.minDistance/o,r=o-o*s):c>this.maxDistance&&(s=this.maxDistance/o,r=o-o*s),jt.copy(Ie).sub(this._v3_1).normalize().multiplyScalar(r),this._m4_1.makeTranslation(jt.x,jt.y,jt.z),i){const l=this._v3_2;o=l.distanceTo(Ie),r=o-o*s,jt.copy(Ie).sub(this._v3_2).normalize().multiplyScalar(r),this._translationMatrix.makeTranslation(l.x,l.y,l.z),this._scaleMatrix.makeScale(s,s,s),this._m4_2.makeTranslation(jt.x,jt.y,jt.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-l.x,-l.y,-l.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return xe}});et(this,"setFov",e=>{this.camera.isPerspectiveCamera&&(this.camera.fov=Xt.clamp(e,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())});et(this,"zRotate",(e,n)=>(this._rotationMatrix.makeRotationAxis(this._rotationAxis,n),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._m4_1.makeTranslation(e.x,e.y,e.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,n),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),xe));et(this,"unprojectOnObj",(e,n)=>{const i=this.getRaycaster();i.near=n.near,i.far=n.far,i.setFromCamera(e,n);const s=i.intersectObjects(this.scene.children,!0);for(let o=0;o<s.length;o++)if(s[o].object.uuid!=this._gizmos.uuid&&s[o].face!=null)return s[o].point.clone();return null});et(this,"unprojectOnTbSurface",(e,n,i,s,o)=>{if(e.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(n,i,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const r=Math.pow(this._v2_1.x,2),c=Math.pow(this._v2_1.y,2),l=Math.pow(this._tbRadius,2);return r+c<=l*.5?this._v3_1.setZ(Math.sqrt(l-(r+c))):this._v3_1.setZ(l*.5/Math.sqrt(r+c)),this._v3_1}else if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(n,i,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const r=this._v3_1.clone().normalize(),c=e.position.distanceTo(this._gizmos.position),l=Math.pow(o,2),h=this._v3_1.z,u=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(u==0)return r.set(this._v3_1.x,this._v3_1.y,o),r;const d=h/u,m=c;let g=Math.pow(d,2)+1,p=2*d*m,f=Math.pow(m,2)-l,_=Math.pow(p,2)-4*g*f;if(_>=0&&(this._v2_1.setX((-p-Math.sqrt(_))/(2*g)),this._v2_1.setY(d*this._v2_1.x+m),Xt.RAD2DEG*this._v2_1.angle()>=45)){const w=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(c-this._v2_1.y,2));return r.multiplyScalar(w),r.z+=c,r}g=d,p=m,f=-l*.5,_=Math.pow(p,2)-4*g*f,this._v2_1.setX((-p-Math.sqrt(_))/(2*g)),this._v2_1.setY(d*this._v2_1.x+m);const E=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(c-this._v2_1.y,2));return r.multiplyScalar(E),r.z+=c,r}});et(this,"unprojectOnTbPlane",(e,n,i,s,o=!1)=>{if(e.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(n,i,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(n,i,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const r=this._v3_1.clone().normalize(),c=this._v3_1.z,l=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let h;if(o?h=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):h=e.position.distanceTo(this._gizmos.position),l==0)return r.set(0,0,0),r;const u=c/l,d=h,m=-d/u,g=Math.sqrt(Math.pow(d,2)+Math.pow(m,2));return r.multiplyScalar(g),r.z=0,r}});et(this,"updateMatrixState",()=>{this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)});et(this,"updateTbState",(e,n)=>{this._state=e,n&&this.updateMatrixState()});et(this,"update",()=>{if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const n=Xt.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(n/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){const n=this.camera.position.distanceTo(this._gizmos.position);if(n>this.maxDistance+1e-6||n<this.minDistance-1e-6){const s=Xt.clamp(n,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(s/n,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=Xt.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const i=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),i<this._tbRadius-1e-6||i>this._tbRadius+1e-6){const s=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,o=this._tbRadius/s,c=new Xi(0,0,o,o).getPoints(this._curvePts),l=new ve().setFromPoints(c);for(const h in this._gizmos.children)this._gizmos.children[h].geometry=l}}this.camera.lookAt(this._gizmos.position)});et(this,"setStateFromJSON",e=>{const n=JSON.parse(e);if(n.arcballState!=null){this._cameraMatrixState.fromArray(n.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(n.arcballState.cameraUp),this.camera.near=n.arcballState.cameraNear,this.camera.far=n.arcballState.cameraFar,this.camera.zoom=n.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=n.arcballState.cameraFov),this._gizmoMatrixState.fromArray(n.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const i=new Ct().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(i),this.camera.lookAt(this._gizmos.position),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(kt)}});this.camera=null,this.domElement=n,this.scene=i,this.target=new P,this._currentTarget=new P,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new Dt,this._v3_1=new P,this._v3_2=new P,this._m4_1=new Ct,this._m4_2=new Ct,this._quat=new ai,this._translationMatrix=new Ct,this._rotationMatrix=new Ct,this._scaleMatrix=new Ct,this._rotationAxis=new P,this._cameraMatrixState=new Ct,this._cameraProjectionState=new Ct,this._fovState=1,this._upState=new P,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Ct,this._up0=new P,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Ct,this._gizmoMatrixState0=new Ct,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Nt.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new P,this._startCursorPosition=new P,this._grid=null,this._gridPosition=new P,this._gizmos=new Jn,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new P,this._cursorPosCurr=new P,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=ut.IDLE,this.setCamera(e),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("wheel",this.onWheel),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),window.addEventListener("resize",this.onWindowResize)}applyTransformMatrix(e){if(e.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==ut.ROTATE||this._state==ut.ZROTATE||this._state==ut.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),e.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==ut.SCALE||this._state==ut.FOCUS||this._state==ut.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const n=this.camera.position.distanceTo(this._gizmos.position),i=new oi;i.setFromObject(this._gizmos);const s=new yi;i.getBoundingSphere(s);const o=Math.max(this._nearPos0,s.radius+s.center.length()),r=n-this._initialNear,c=Math.min(o,r);this.camera.near=n-c;const l=Math.min(this._farPos0,-s.radius+s.center.length()),h=n-this._initialFar,u=Math.min(l,h);this.camera.far=n-u,this.camera.updateProjectionMatrix()}else{let n=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,n=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,n=!0),n&&this.camera.updateProjectionMatrix()}}setGizmosVisible(e){this._gizmos.visible=e,this.dispatchEvent(kt)}setTbRadius(e){this.radiusFactor=e,this._tbRadius=this.calculateTbRadius(this.camera);const i=new Xi(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),s=new ve().setFromPoints(i);for(const o in this._gizmos.children)this._gizmos.children[o].geometry=s;this.dispatchEvent(kt)}setTransformationMatrices(e=null,n=null){e!=null?xe.camera!=null?xe.camera.copy(e):xe.camera=e.clone():xe.camera=null,n!=null?xe.gizmos!=null?xe.gizmos.copy(n):xe.gizmos=n.clone():xe.gizmos=null}getRaycaster(){return cf}}const Zn=1,uf=.2,df=[15401030,4587765,44251,62743,14378240,15456512],Ns=.95;class ff{constructor(t){et(this,"raycaster");et(this,"controls");et(this,"domEl");et(this,"mouseXY");et(this,"render");et(this,"tempContainerForMouseDown");this.app=t,this.mouseXY={x:0,y:0},this.tempContainerForMouseDown={},this.domEl=this.app.renderer.domElement,this.raycaster=new Ga,this.render=this.app.render.bind(this.app),this.initEventListener(),this.initControl()}initControl(){this.controls=new hf(this.app.camera,this.domEl,this.app.scene),this.controls.addEventListener("change",this.render),this.controls.enabled=!1,this.controls.setGizmosVisible(!1)}getIntersectObjects(t){this.raycaster.setFromCamera(t,this.app.camera);const e=this.app.scene.children;return this.raycaster.intersectObjects(e,!1)}onMouseDown(t){const e={x:this.mouseXY.x,y:this.mouseXY.y};this.tempContainerForMouseDown.mouseStartPosition=e;const n=this.getIntersectObjects(e);if(n.length===0){this.controls.enabled=!0;return}const i=n[0].object;if(Si.getCubePositionType(i.position)==="center")return;const o=Si.getAxisByPointPosition(n[0].point);this.tempContainerForMouseDown.axisOfTouchedFace=o,this.tempContainerForMouseDown.positionOfTouchedCube=i.position;const r=this.doCubeRotateWhenMouseUp.bind(this);this.domEl.addEventListener("mouseup",r,{once:!0})}doCubeRotateWhenMouseUp(){const t={x:this.mouseXY.x,y:this.mouseXY.y},{mouseTrackvector:e,mouseTrackvectorLength:n}=this.getMouseTrackVector(t,this.tempContainerForMouseDown.mouseStartPosition);if(n<uf){console.log("not pass least vector length");return}const i=this.getCubeRotateData(e);this.app.cube.doRotate(i)}getCubeRotateData(t){const e=this.getAxisLineVectorToScreenVector(this.app.camera),n=this.tempContainerForMouseDown.axisOfTouchedFace,i=this.tempContainerForMouseDown.positionOfTouchedCube,s=this.getAxisToRotate(e,t,n);return{axis:s.axis,axisPosition:i[s.axis],direction:s.direction}}getAxisToRotate(t,e,n){const r=[{axis:"x",dotAbs:0,cross:0},{axis:"y",dotAbs:0,cross:0},{axis:"z",dotAbs:0,cross:0}].filter(h=>h.axis!==n).map(h=>{const u=e.dot(t[h.axis]),d=Math.abs(u),m=e.cross(t[h.axis]);return{axis:h.axis,dotAbs:d,cross:m}}).sort((h,u)=>h.dotAbs-u.dotAbs)[0],c=r.axis,l=r.cross>0?"counterclockwise":"clockwise";return{axis:c,direction:l}}getAxisLineVectorToScreenVector(t){const e=n=>{const i=new P(...n).project(t);return new Dt(i.x,i.y).normalize()};return{x:e([1,0,0]),y:e([0,1,0]),z:e([0,0,1])}}getMouseTrackVector(t,e){const n=new Dt(t.x-e.x,t.y-e.y);return{mouseTrackvectorLength:n.length(),mouseTrackvector:n}}stopControl(){this.controls.enabled=!1}setMousePosition(t){this.mouseXY={x:t.clientX/window.innerWidth*2-1,y:-(t.clientY/window.innerHeight)*2+1}}initEventListener(){const t=this.onMouseDown.bind(this),e=this.stopControl.bind(this),n=this.setMousePosition.bind(this);this.domEl.addEventListener("mousedown",t,!1),this.domEl.addEventListener("mouseup",e,!1),this.domEl.addEventListener("mousemove",n,!1)}}class Si{constructor(t,e){et(this,"insideCubeColor");et(this,"group");this.scene=t,this.render=e,this.group=new Jn,this.insideCubeColor=df.map(n=>new Ki({color:n})),this.initBox()}static zeroCountInPosition(t){const{x:e,y:n,z:i}=t;let s=0;return i===0&&(s+=1),n===0&&(s+=1),e===0&&(s+=1),s}static getAxisByPointPosition(t){const e=Object.entries(t);return e.forEach(i=>i[1]=Math.abs(i[1])),e.sort((i,s)=>s[1]-i[1])[0][0]}static getCubePositionType(t){const e=Si.zeroCountInPosition(t);return e===3?"center":e===2?"face":e===1?"side":"corner"}createCell(){const t=new Cn(Zn,Zn,Zn),e=new Ki({opacity:0,transparent:!0}),n=new ke(t,e),i=new Cn(Zn*Ns,Zn*Ns,Zn*Ns),s=new ke(i,this.insideCubeColor);return s.name="insideCube",n.add(s),n}doRotate(t){const e=this.getCubeList(t.axis,t.axisPosition);this.doRotateByCubeArray(e,t.axis,t.direction),this.render()}fixPosition(t){const e=[t.x,t.y,t.z].map(n=>{if(n<1e-6&&n>-1e-6)return 0;if(n>.0999999&&n<1.001111)return 1;if(n<-.0999999&&n>-1.001111)return-1});return{x:e[0],y:e[1],z:e[2]}}doRotateByCubeArray(t,e,n){const i=Math.PI/2*(n==="clockwise"?-1:1);switch(e){case"z":t.forEach(s=>{s.applyMatrix4(new Ct().makeRotationAxis(new P(0,0,1),i));const o=this.fixPosition(s.position);s.position.x=o.x,s.position.y=o.y,s.position.z=o.z});break;case"y":t.forEach(s=>{s.applyMatrix4(new Ct().makeRotationAxis(new P(0,1,0),i));const o=this.fixPosition(s.position);s.position.x=o.x,s.position.y=o.y,s.position.z=o.z});break;case"x":t.forEach(s=>{s.applyMatrix4(new Ct().makeRotationAxis(new P(1,0,0),i));const o=this.fixPosition(s.position);s.position.x=o.x,s.position.y=o.y,s.position.z=o.z});break}}getCubeList(t,e){const n=[];return this.scene.children.forEach(i=>{i.position[t]===e&&i.name==="cube"&&n.push(i)}),n}initBox(){for(let t=0;t<3;t++)for(let e=0;e<3;e++)for(let n=0;n<3;n++){const i=this.createCell();i.name="cube",i.position.setX(n-1),i.position.setY(e-1),i.position.setZ(t-1),this.scene.add(i)}}}class pf{constructor(){et(this,"scene");et(this,"camera");et(this,"renderer");et(this,"cube");et(this,"axisLine");et(this,"mouseEventManager");this.renderer=this.setInitRenderer(),this.scene=this.setInitScene(),this.camera=this.setInitCamera(),this.appendDOM(this.renderer.domElement),this.cube=this.setInitCube(),this.mouseEventManager=new ff(this),this.animate()}animate(){const t=this;requestAnimationFrame(t.animate),t.render()}render(){this.renderer.render(this.scene,this.camera)}setInitCube(){return new Si(this.scene,this.render.bind(this))}setInitScene(){return new rf}setInitCamera(){const t=new Ee(70,window.innerWidth/window.innerHeight,1,1e3);return t.position.z=5,t.position.x=5,t.position.y=5,t.lookAt(this.scene.position),t.updateMatrixWorld(),t}setInitRenderer(){const t=new Ba;return t.setPixelRatio(window.devicePixelRatio),t.setClearColor(new Bt(16777215)),t.setSize(window.innerWidth,window.innerHeight),t}appendDOM(t){document.body.appendChild(t)}}new pf;
