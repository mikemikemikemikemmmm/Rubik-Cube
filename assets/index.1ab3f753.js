var yo=Object.defineProperty;var Mo=(o,t,e)=>t in o?yo(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Q=(o,t,e)=>(Mo(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cr="146",So=0,yr=1,bo=2,Va=1,wo=2,Mn=3,on=0,Pe=1,di=2,fi=0,rn=1,Mr=2,Sr=3,br=4,To=5,tn=100,Eo=101,Ao=102,wr=103,Tr=104,Co=200,Po=201,Ro=202,Lo=203,Ga=204,Wa=205,Do=206,Io=207,Fo=208,zo=209,No=210,Oo=0,Uo=1,Bo=2,Qs=3,ko=4,Vo=5,Go=6,Wo=7,Ha=0,Ho=1,Xo=2,ii=0,qo=1,Yo=2,jo=3,Zo=4,Ko=5,Xa=300,ln=301,cn=302,tr=303,er=304,fs=306,ir=1e3,Ne=1001,nr=1002,pe=1003,Er=1004,Ar=1005,Ee=1006,$o=1007,ps=1008,Ri=1009,Jo=1010,Qo=1011,qa=1012,tl=1013,wi=1014,Ti=1015,An=1016,el=1017,il=1018,an=1020,nl=1021,sl=1022,Oe=1023,rl=1024,al=1025,Ci=1026,hn=1027,ol=1028,ll=1029,cl=1030,hl=1031,ul=1033,ys=33776,Ms=33777,Ss=33778,bs=33779,Cr=35840,Pr=35841,Rr=35842,Lr=35843,dl=36196,Dr=37492,Ir=37496,Fr=37808,zr=37809,Nr=37810,Or=37811,Ur=37812,Br=37813,kr=37814,Vr=37815,Gr=37816,Wr=37817,Hr=37818,Xr=37819,qr=37820,Yr=37821,jr=36492,Ya=2200,fl=2201,pl=2202,ss=2300,rs=2301,ws=2302,en=2400,nn=2401,as=2402,hr=2500,ml=2501,Li=3e3,Yt=3001,gl=3200,_l=3201,xl=0,vl=1,ti="srgb",Ei="srgb-linear",Ts=7680,yl=519,Zr=35044,Kr="300 es",sr=1035;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $r=1234567;const wn=Math.PI/180,os=180/Math.PI;function zi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oe[o&255]+oe[o>>8&255]+oe[o>>16&255]+oe[o>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[i&255]+oe[i>>8&255]+oe[i>>16&255]+oe[i>>24&255]).toLowerCase()}function le(o,t,e){return Math.max(t,Math.min(e,o))}function ur(o,t){return(o%t+t)%t}function Ml(o,t,e,i,n){return i+(o-t)*(n-i)/(e-t)}function Sl(o,t,e){return o!==t?(e-o)/(t-o):0}function Tn(o,t,e){return(1-e)*o+e*t}function bl(o,t,e,i){return Tn(o,t,1-Math.exp(-e*i))}function wl(o,t=1){return t-Math.abs(ur(o,t*2)-t)}function Tl(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function El(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Al(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Cl(o,t){return o+Math.random()*(t-o)}function Pl(o){return o*(.5-Math.random())}function Rl(o){o!==void 0&&($r=o);let t=$r+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(o){return o*wn}function Dl(o){return o*os}function rr(o){return(o&o-1)===0&&o!==0}function Il(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ls(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Fl(o,t,e,i,n){const s=Math.cos,a=Math.sin,r=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),m=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":o.set(r*h,l*u,l*d,r*c);break;case"YZY":o.set(l*d,r*h,l*u,r*c);break;case"ZXZ":o.set(l*u,l*d,r*h,r*c);break;case"XZX":o.set(r*h,l*g,l*m,r*c);break;case"YXY":o.set(l*m,r*h,l*g,r*c);break;case"ZYZ":o.set(l*g,l*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Sn(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fe(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var qt=Object.freeze({__proto__:null,DEG2RAD:wn,RAD2DEG:os,generateUUID:zi,clamp:le,euclideanModulo:ur,mapLinear:Ml,inverseLerp:Sl,lerp:Tn,damp:bl,pingpong:wl,smoothstep:Tl,smootherstep:El,randInt:Al,randFloat:Cl,randFloatSpread:Pl,seededRandom:Rl,degToRad:Ll,radToDeg:Dl,isPowerOfTwo:rr,ceilPowerOfTwo:Il,floorPowerOfTwo:ls,setQuaternionFromProperEuler:Fl,normalize:fe,denormalize:Sn});class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,s,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],p=n[0],f=n[3],_=n[6],T=n[1],S=n[4],w=n[7],M=n[2],C=n[5],z=n[8];return s[0]=a*p+r*T+l*M,s[3]=a*f+r*S+l*C,s[6]=a*_+r*w+l*z,s[1]=c*p+h*T+u*M,s[4]=c*f+h*S+u*C,s[7]=c*_+h*w+u*z,s[2]=d*p+m*T+g*M,s[5]=d*f+m*S+g*C,s[8]=d*_+m*w+g*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-i*s*h+i*r*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*s,m=c*s-a*l,g=e*u+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(n*c-h*i)*p,t[2]=(r*i-n*a)*p,t[3]=d*p,t[4]=(h*e-n*l)*p,t[5]=(n*s-r*e)*p,t[6]=m*p,t[7]=(i*l-c*e)*p,t[8]=(a*e-i*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*r)+a+t,-n*c,n*l,-n*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),n=this.elements,s=n[0],a=n[3],r=n[6],l=n[1],c=n[4],h=n[7];return n[0]=e*s+i*l,n[3]=e*a+i*c,n[6]=e*r+i*h,n[1]=-i*s+e*l,n[4]=-i*a+e*c,n[7]=-i*r+e*h,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function ja(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function cs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Pi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function es(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Es={[ti]:{[Ei]:Pi},[Ei]:{[ti]:es}},Re={legacyMode:!0,get workingColorSpace(){return Ei},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Es[t]&&Es[t][e]!==void 0){const i=Es[t][e];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Za={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={r:0,g:0,b:0},Le={h:0,s:0,l:0},In={h:0,s:0,l:0};function As(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Fn(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Ei){return this.r=t,this.g=e,this.b=i,Re.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Ei){if(t=ur(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=As(a,s,t+1/3),this.g=As(a,s,t),this.b=As(a,s,t-1/3)}return Re.toWorkingColorSpace(this,n),this}setStyle(t,e=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Re.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Re.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,h,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Re.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Re.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=ti){const i=Za[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Re.fromWorkingColorSpace(Fn(this,$t),t),le($t.r*255,0,255)<<16^le($t.g*255,0,255)<<8^le($t.b*255,0,255)<<0}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ei){Re.fromWorkingColorSpace(Fn(this,$t),e);const i=$t.r,n=$t.g,s=$t.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ei){return Re.fromWorkingColorSpace(Fn(this,$t),e),t.r=$t.r,t.g=$t.g,t.b=$t.b,t}getStyle(t=ti){return Re.fromWorkingColorSpace(Fn(this,$t),t),t!==ti?`color(${t} ${$t.r} ${$t.g} ${$t.b})`:`rgb(${$t.r*255|0},${$t.g*255|0},${$t.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Le),Le.h+=t,Le.s+=e,Le.l+=i,this.setHSL(Le.h,Le.s,Le.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Le),t.getHSL(In);const i=Tn(Le.h,In.h,e),n=Tn(Le.s,In.s,e),s=Tn(Le.l,In.l,e);return this.setHSL(i,n,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}kt.NAMES=Za;let Bi;class Ka{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=cs("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class $a{constructor(t=null){this.isSource=!0,this.uuid=zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Cs(n[a].image)):s.push(Cs(n[a]))}else s=Cs(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Cs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ka.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zl=0;class Be extends pi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Ne,n=Ne,s=Ee,a=ps,r=Oe,l=Ri,c=1,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=zi(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Xa;class re{constructor(t=0,e=0,i=0,n=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(m+1)/2,M=(_+1)/2,C=(h+d)/4,z=(u+p)/4,v=(g+f)/4;return S>w&&S>M?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=C/i,s=z/i):w>M?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=C/n,s=v/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=z/s,n=v/s),this.set(i,n,s,e),this}let T=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(u-p)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Di extends pi{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new Be(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ee,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ja extends Be{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=pe,this.minFilter=pe,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends Be{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=pe,this.minFilter=pe,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Me{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,r){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||l!==d||c!==m||h!==g){let f=1-r;const _=l*d+c*m+h*g+u*p,T=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),C=Math.atan2(M,_*T);f=Math.sin(f*C)/M,r=Math.sin(r*C)/M}const w=r*T;if(l=l*f+d*w,c=c*f+m*w,h=h*f+g*w,u=u*f+p*w,f===1-r){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const r=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=r*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-r*m,t[e+2]=c*g+h*m+r*d-l*u,t[e+3]=h*g-r*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(n/2),u=r(s/2),d=l(i/2),m=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+r+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-n)*m}else if(i>r&&i>u){const m=2*Math.sqrt(1+i-r-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+c)/m}else if(r>u){const m=2*Math.sqrt(1+r-i-u);this._w=(s-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-r);this._w=(a-n)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*r+n*c-s*l,this._y=n*h+a*l+s*r-i*c,this._z=s*h+a*c+i*l-n*r,this._w=a*h-i*r-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,l=t.w,c=l*e+a*n-r*i,h=l*i+r*e-s*n,u=l*n+s*i-a*e,d=-s*e-a*i-r*n;return this.x=c*l+d*-s+h*-r-u*-a,this.y=h*l+d*-a+u*-s-c*-r,this.z=u*l+d*-r+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ps.copy(this).projectOnVector(t),this.sub(Ps)}reflect(t){return this.sub(Ps.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new P,Jr=new Me;class dn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>a&&(a=u),d>r&&(r=d)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>a&&(a=u),d>r&&(r=d)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,r=s.count;a<r;a++)xi.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(xi)}else i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox),Rs.applyMatrix4(t.matrixWorld),this.union(Rs);const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),zn.subVectors(this.max,_n),ki.subVectors(t.a,_n),Vi.subVectors(t.b,_n),Gi.subVectors(t.c,_n),si.subVectors(Vi,ki),ri.subVectors(Gi,Vi),vi.subVectors(ki,Gi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-vi.z,vi.y,si.z,0,-si.x,ri.z,0,-ri.x,vi.z,0,-vi.x,-si.y,si.x,0,-ri.y,ri.x,0,-vi.y,vi.x,0];return!Ls(e,ki,Vi,Gi,zn)||(e=[1,0,0,0,1,0,0,0,1],!Ls(e,ki,Vi,Gi,zn))?!1:(Nn.crossVectors(si,ri),e=[Nn.x,Nn.y,Nn.z],Ls(e,ki,Vi,Gi,zn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return xi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new P,new P,new P,new P,new P,new P,new P,new P],xi=new P,Rs=new dn,ki=new P,Vi=new P,Gi=new P,si=new P,ri=new P,vi=new P,_n=new P,zn=new P,Nn=new P,yi=new P;function Ls(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){yi.fromArray(o,s);const r=n.x*Math.abs(yi.x)+n.y*Math.abs(yi.y)+n.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=i.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Ol=new dn,xn=new P,Ds=new P;class Pn{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ol.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xn.subVectors(t,this.center);const e=xn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(xn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ds.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xn.copy(t.center).add(Ds)),this.expandByPoint(xn.copy(t.center).sub(Ds))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ke=new P,Is=new P,On=new P,ai=new P,Fs=new P,Un=new P,zs=new P;class dr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ke.copy(this.direction).multiplyScalar(e).add(this.origin),Ke.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Is.copy(t).add(e).multiplyScalar(.5),On.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Is);const s=t.distanceTo(e)*.5,a=-this.direction.dot(On),r=ai.dot(this.direction),l=-ai.dot(On),c=ai.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-r,d=a*r-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,m=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+r)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+r)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(On).multiplyScalar(d).add(Is),m}intersectSphere(t,e){Ke.subVectors(t.center,this.origin);const i=Ke.dot(this.direction),n=Ke.dot(Ke)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,l=i+a;return r<0&&l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ke)!==null}intersectTriangle(t,e,i,n,s){Fs.subVectors(e,t),Un.subVectors(i,t),zs.crossVectors(Fs,Un);let a=this.direction.dot(zs),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;ai.subVectors(this.origin,t);const l=r*this.direction.dot(Un.crossVectors(ai,Un));if(l<0)return null;const c=r*this.direction.dot(Fs.cross(ai));if(c<0||l+c>a)return null;const h=-r*ai.dot(zs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,s,a,r,l,c,h,u,d,m,g,p,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=s,_[5]=a,_[9]=r,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*u,g=r*h,p=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-p*c,e[9]=-r*l,e[2]=p-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,p=c*u;e[0]=d+p*r,e[4]=g*r-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=m*r-g,e[6]=p+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,p=c*u;e[0]=d-p*r,e[4]=-a*u,e[8]=g+m*r,e[1]=m+g*r,e[5]=a*h,e[9]=p-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,g=r*h,p=r*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+p,e[1]=l*u,e[5]=p*c+d,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=r*l,p=r*c;e[0]=l*h,e[4]=p-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-p*u}else if(t.order==="XZY"){const d=a*l,m=a*c,g=r*l,p=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+p,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=r*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ul,t,Bl)}lookAt(t,e,i){const n=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),oi.crossVectors(i,_e),oi.lengthSq()===0&&(Math.abs(i.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),oi.crossVectors(i,_e)),oi.normalize(),Bn.crossVectors(_e,oi),n[0]=oi.x,n[4]=Bn.x,n[8]=_e.x,n[1]=oi.y,n[5]=Bn.y,n[9]=_e.y,n[2]=oi.z,n[6]=Bn.z,n[10]=_e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],p=i[6],f=i[10],_=i[14],T=i[3],S=i[7],w=i[11],M=i[15],C=n[0],z=n[4],v=n[8],E=n[12],F=n[1],q=n[5],at=n[9],O=n[13],I=n[2],X=n[6],j=n[10],Z=n[14],G=n[3],D=n[7],N=n[11],tt=n[15];return s[0]=a*C+r*F+l*I+c*G,s[4]=a*z+r*q+l*X+c*D,s[8]=a*v+r*at+l*j+c*N,s[12]=a*E+r*O+l*Z+c*tt,s[1]=h*C+u*F+d*I+m*G,s[5]=h*z+u*q+d*X+m*D,s[9]=h*v+u*at+d*j+m*N,s[13]=h*E+u*O+d*Z+m*tt,s[2]=g*C+p*F+f*I+_*G,s[6]=g*z+p*q+f*X+_*D,s[10]=g*v+p*at+f*j+_*N,s[14]=g*E+p*O+f*Z+_*tt,s[3]=T*C+S*F+w*I+M*G,s[7]=T*z+S*q+w*X+M*D,s[11]=T*v+S*at+w*j+M*N,s[15]=T*E+S*O+w*Z+M*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],p=t[7],f=t[11],_=t[15];return g*(+s*l*u-n*c*u-s*r*d+i*c*d+n*r*m-i*l*m)+p*(+e*l*m-e*c*d+s*a*d-n*a*m+n*c*h-s*l*h)+f*(+e*c*u-e*r*m-s*a*u+i*a*m+s*r*h-i*c*h)+_*(-n*r*h-e*l*u+e*r*d+n*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],p=t[13],f=t[14],_=t[15],T=u*f*c-p*d*c+p*l*m-r*f*m-u*l*_+r*d*_,S=g*d*c-h*f*c-g*l*m+a*f*m+h*l*_-a*d*_,w=h*p*c-g*u*c+g*r*m-a*p*m-h*r*_+a*u*_,M=g*u*l-h*p*l-g*r*d+a*p*d+h*r*f-a*u*f,C=e*T+i*S+n*w+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/C;return t[0]=T*z,t[1]=(p*d*s-u*f*s-p*n*m+i*f*m+u*n*_-i*d*_)*z,t[2]=(r*f*s-p*l*s+p*n*c-i*f*c-r*n*_+i*l*_)*z,t[3]=(u*l*s-r*d*s-u*n*c+i*d*c+r*n*m-i*l*m)*z,t[4]=S*z,t[5]=(h*f*s-g*d*s+g*n*m-e*f*m-h*n*_+e*d*_)*z,t[6]=(g*l*s-a*f*s-g*n*c+e*f*c+a*n*_-e*l*_)*z,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*m+e*l*m)*z,t[8]=w*z,t[9]=(g*u*s-h*p*s-g*i*m+e*p*m+h*i*_-e*u*_)*z,t[10]=(a*p*s-g*r*s+g*i*c-e*p*c-a*i*_+e*r*_)*z,t[11]=(h*r*s-a*u*s-h*i*c+e*u*c+a*i*m-e*r*m)*z,t[12]=M*z,t[13]=(h*p*n-g*u*n+g*i*d-e*p*d-h*i*f+e*u*f)*z,t[14]=(g*r*n-a*p*n-g*i*l+e*p*l+a*i*f-e*r*f)*z,t[15]=(a*u*n-h*r*n+h*i*l-e*u*l-a*i*d+e*r*d)*z,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,l=t.z,c=s*a,h=s*r;return this.set(c*a+i,c*r-n*l,c*l+n*r,0,c*r+n*l,h*r+i,h*l-n*a,0,c*l-n*r,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,c=s+s,h=a+a,u=r+r,d=s*c,m=s*h,g=s*u,p=a*h,f=a*u,_=r*u,T=l*c,S=l*h,w=l*u,M=i.x,C=i.y,z=i.z;return n[0]=(1-(p+_))*M,n[1]=(m+w)*M,n[2]=(g-S)*M,n[3]=0,n[4]=(m-w)*C,n[5]=(1-(d+_))*C,n[6]=(f+T)*C,n[7]=0,n[8]=(g+S)*z,n[9]=(f-T)*z,n[10]=(1-(d+p))*z,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=Wi.set(n[0],n[1],n[2]).length();const a=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],De.copy(this);const c=1/s,h=1/a,u=1/r;return De.elements[0]*=c,De.elements[1]*=c,De.elements[2]*=c,De.elements[4]*=h,De.elements[5]*=h,De.elements[6]*=h,De.elements[8]*=u,De.elements[9]*=u,De.elements[10]*=u,e.setFromRotationMatrix(De),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a){const r=this.elements,l=2*s/(e-t),c=2*s/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,n,s,a){const r=this.elements,l=1/(e-t),c=1/(i-n),h=1/(a-s),u=(e+t)*l,d=(i+n)*c,m=(a+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new P,De=new Pt,Ul=new P(0,0,0),Bl=new P(1,1,1),oi=new P,Bn=new P,_e=new P,Qr=new Pt,ta=new Me;class Rn{constructor(t=0,e=0,i=0,n=Rn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],r=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Rn.DefaultOrder="XYZ";Rn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kl=0;const ea=new P,Hi=new Me,$e=new Pt,kn=new P,vn=new P,Vl=new P,Gl=new Me,ia=new P(1,0,0),na=new P(0,1,0),sa=new P(0,0,1),Wl={type:"added"},ra={type:"removed"};class me extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DefaultUp.clone();const t=new P,e=new Rn,i=new Me,n=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ce}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=me.DefaultMatrixWorldAutoUpdate,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(ia,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ia,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kn.copy(t):kn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(vn,kn,this.up):$e.lookAt(kn,vn,this.up),this.quaternion.setFromRotationMatrix($e),n&&($e.extractRotation(n.matrixWorld),Hi.setFromRotationMatrix($e),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ra)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ra)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,t,Vl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,Gl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const r=n[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];n.animations.push(s(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}me.DefaultUp=new P(0,1,0);me.DefaultMatrixAutoUpdate=!0;me.DefaultMatrixWorldAutoUpdate=!0;const Ie=new P,Je=new P,Ns=new P,Qe=new P,Xi=new P,qi=new P,aa=new P,Os=new P,Us=new P,Bs=new P;class ei{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ie.subVectors(t,e),n.cross(Ie);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ie.subVectors(n,e),Je.subVectors(i,e),Ns.subVectors(t,e);const a=Ie.dot(Ie),r=Ie.dot(Je),l=Ie.dot(Ns),c=Je.dot(Je),h=Je.dot(Ns),u=a*c-r*r;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(c*l-r*h)*d,g=(a*h-r*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Qe),Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getUV(t,e,i,n,s,a,r,l){return this.getBarycoord(t,e,i,n,Qe),l.set(0,0),l.addScaledVector(s,Qe.x),l.addScaledVector(a,Qe.y),l.addScaledVector(r,Qe.z),l}static isFrontFacing(t,e,i,n){return Ie.subVectors(i,e),Je.subVectors(t,e),Ie.cross(Je).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),Ie.cross(Je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return ei.getUV(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,r;Xi.subVectors(n,i),qi.subVectors(s,i),Os.subVectors(t,i);const l=Xi.dot(Os),c=qi.dot(Os);if(l<=0&&c<=0)return e.copy(i);Us.subVectors(t,n);const h=Xi.dot(Us),u=qi.dot(Us);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Xi,a);Bs.subVectors(t,s);const m=Xi.dot(Bs),g=qi.dot(Bs);if(g>=0&&m<=g)return e.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(i).addScaledVector(qi,r);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return aa.subVectors(s,n),r=(u-h)/(u-h+(m-g)),e.copy(n).addScaledVector(aa,r);const _=1/(f+p+d);return a=p*_,r=d*_,e.copy(i).addScaledVector(Xi,a).addScaledVector(qi,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Hl=0;class Ln extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=rn,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rn&&(i.blending=this.blending),this.side!==on&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hs extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new P,Vn=new Dt;class Xe{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Zr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qa extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class to extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ue extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xl=0;const we=new Pt,ks=new me,Yi=new P,xe=new dn,yn=new dn,ie=new P;class ye extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ja(t)?to:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ce().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,i){return we.makeTranslation(t,e,i),this.applyMatrix4(we),this}scale(t,e,i){return we.makeScale(t,e,i),this.applyMatrix4(we),this}lookAt(t){return ks.lookAt(t),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];xe.setFromBufferAttribute(s),this.morphTargetsRelative?(ie.addVectors(this.boundingBox.min,xe.min),this.boundingBox.expandByPoint(ie),ie.addVectors(this.boundingBox.max,xe.max),this.boundingBox.expandByPoint(ie)):(this.boundingBox.expandByPoint(xe.min),this.boundingBox.expandByPoint(xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(xe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ie.addVectors(xe.min,yn.min),xe.expandByPoint(ie),ie.addVectors(xe.max,yn.max),xe.expandByPoint(ie)):(xe.expandByPoint(yn.min),xe.expandByPoint(yn.max))}xe.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ie.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ie));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)ie.fromBufferAttribute(r,c),l&&(Yi.fromBufferAttribute(t,c),ie.add(Yi)),n=Math.max(n,i.distanceToSquared(ie))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<r;F++)c[F]=new P,h[F]=new P;const u=new P,d=new P,m=new P,g=new Dt,p=new Dt,f=new Dt,_=new P,T=new P;function S(F,q,at){u.fromArray(n,F*3),d.fromArray(n,q*3),m.fromArray(n,at*3),g.fromArray(a,F*2),p.fromArray(a,q*2),f.fromArray(a,at*2),d.sub(u),m.sub(u),p.sub(g),f.sub(g);const O=1/(p.x*f.y-f.x*p.y);!isFinite(O)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(O),T.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(O),c[F].add(_),c[q].add(_),c[at].add(_),h[F].add(T),h[q].add(T),h[at].add(T))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let F=0,q=w.length;F<q;++F){const at=w[F],O=at.start,I=at.count;for(let X=O,j=O+I;X<j;X+=3)S(i[X+0],i[X+1],i[X+2])}const M=new P,C=new P,z=new P,v=new P;function E(F){z.fromArray(s,F*3),v.copy(z);const q=c[F];M.copy(q),M.sub(z.multiplyScalar(z.dot(q))).normalize(),C.crossVectors(v,q);const O=C.dot(h[F])<0?-1:1;l[F*4]=M.x,l[F*4+1]=M.y,l[F*4+2]=M.z,l[F*4+3]=O}for(let F=0,q=w.length;F<q;++F){const at=w[F],O=at.start,I=at.count;for(let X=O,j=O+I;X<j;X+=3)E(i[X+0]),E(i[X+1]),E(i[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new P,s=new P,a=new P,r=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),a.fromBufferAttribute(e,f),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ie.fromBufferAttribute(t,e),ie.normalize(),t.setXYZ(e,ie.x,ie.y,ie.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){r.isInterleavedBufferAttribute?m=l[p]*r.data.stride+r.offset:m=l[p]*h;for(let _=0;_<h;_++)d[g++]=c[m++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,i=this.index.array,n=this.attributes;for(const r in n){const l=n[r],c=t(l,i);e.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const oa=new Pt,ji=new dr,Vs=new Pn,li=new P,ci=new P,hi=new P,Gs=new P,Ws=new P,Hs=new P,Gn=new P,Wn=new P,Hn=new P,Xn=new Dt,qn=new Dt,Yn=new Dt,Xs=new P,jn=new P;class He extends me{constructor(t=new ye,e=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),t.ray.intersectsSphere(Vs)===!1)||(oa.copy(s).invert(),ji.copy(t.ray).applyMatrix4(oa),i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1))return;let a;const r=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,m=i.groups,g=i.drawRange;if(r!==null)if(Array.isArray(n))for(let p=0,f=m.length;p<f;p++){const _=m[p],T=n[_.materialIndex],S=Math.max(_.start,g.start),w=Math.min(r.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,C=w;M<C;M+=3){const z=r.getX(M),v=r.getX(M+1),E=r.getX(M+2);a=Zn(this,T,t,ji,l,c,h,u,d,z,v,E),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(r.count,g.start+g.count);for(let _=p,T=f;_<T;_+=3){const S=r.getX(_),w=r.getX(_+1),M=r.getX(_+2);a=Zn(this,n,t,ji,l,c,h,u,d,S,w,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let p=0,f=m.length;p<f;p++){const _=m[p],T=n[_.materialIndex],S=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,C=w;M<C;M+=3){const z=M,v=M+1,E=M+2;a=Zn(this,T,t,ji,l,c,h,u,d,z,v,E),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,T=f;_<T;_+=3){const S=_,w=_+1,M=_+2;a=Zn(this,n,t,ji,l,c,h,u,d,S,w,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function ql(o,t,e,i,n,s,a,r){let l;if(t.side===Pe?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,t.side!==di,r),l===null)return null;jn.copy(r),jn.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(jn);return c<e.near||c>e.far?null:{distance:c,point:jn.clone(),object:o}}function Zn(o,t,e,i,n,s,a,r,l,c,h,u){li.fromBufferAttribute(n,c),ci.fromBufferAttribute(n,h),hi.fromBufferAttribute(n,u);const d=o.morphTargetInfluences;if(s&&d){Gn.set(0,0,0),Wn.set(0,0,0),Hn.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=d[g],_=s[g];f!==0&&(Gs.fromBufferAttribute(_,c),Ws.fromBufferAttribute(_,h),Hs.fromBufferAttribute(_,u),a?(Gn.addScaledVector(Gs,f),Wn.addScaledVector(Ws,f),Hn.addScaledVector(Hs,f)):(Gn.addScaledVector(Gs.sub(li),f),Wn.addScaledVector(Ws.sub(ci),f),Hn.addScaledVector(Hs.sub(hi),f)))}li.add(Gn),ci.add(Wn),hi.add(Hn)}o.isSkinnedMesh&&(o.boneTransform(c,li),o.boneTransform(h,ci),o.boneTransform(u,hi));const m=ql(o,t,e,i,li,ci,hi,Xs);if(m){r&&(Xn.fromBufferAttribute(r,c),qn.fromBufferAttribute(r,h),Yn.fromBufferAttribute(r,u),m.uv=ei.getUV(Xs,li,ci,hi,Xn,qn,Yn,new Dt)),l&&(Xn.fromBufferAttribute(l,c),qn.fromBufferAttribute(l,h),Yn.fromBufferAttribute(l,u),m.uv2=ei.getUV(Xs,li,ci,hi,Xn,qn,Yn,new Dt));const g={a:c,b:h,c:u,normal:new P,materialIndex:0};ei.getNormal(li,ci,hi,g.normal),m.face=g}return m}class Ii extends ye{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(p,f,_,T,S,w,M,C,z,v,E){const F=w/z,q=M/v,at=w/2,O=M/2,I=C/2,X=z+1,j=v+1;let Z=0,G=0;const D=new P;for(let N=0;N<j;N++){const tt=N*q-O;for(let $=0;$<X;$++){const K=$*F-at;D[p]=K*T,D[f]=tt*S,D[_]=I,c.push(D.x,D.y,D.z),D[p]=0,D[f]=0,D[_]=C>0?1:-1,h.push(D.x,D.y,D.z),u.push($/z),u.push(1-N/v),Z+=1}}for(let N=0;N<v;N++)for(let tt=0;tt<z;tt++){const $=d+tt+X*N,K=d+tt+X*(N+1),lt=d+(tt+1)+X*(N+1),Mt=d+(tt+1)+X*N;l.push($,K,Mt),l.push(K,lt,Mt),G+=6}r.addGroup(m,G,E),m+=G,d+=Z}}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ue(o){const t={};for(let e=0;e<o.length;e++){const i=un(o[e]);for(const n in i)t[n]=i[n]}return t}function Yl(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const jl={clone:un,merge:ue};var Zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=Yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class eo extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ae extends eo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(wn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=90,Ki=1;class $l extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Ae(Zi,Ki,t,e);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new P(1,0,0)),this.add(n);const s=new Ae(Zi,Ki,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const a=new Ae(Zi,Ki,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new P(0,1,0)),this.add(a);const r=new Ae(Zi,Ki,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new P(0,-1,0)),this.add(r);const l=new Ae(Zi,Ki,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new Ae(Zi,Ki,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,r,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=ii,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,r),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class io extends Be{constructor(t,e,i,n,s,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ln,super(t,e,i,n,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jl extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new io(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ii(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:fi});s.uniforms.tEquirect.value=e;const a=new He(n,s),r=e.minFilter;return e.minFilter===ps&&(e.minFilter=Ee),new $l(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const qs=new P,Ql=new P,tc=new Ce;class Mi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=qs.subVectors(i,e).cross(Ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(qs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tc.getNormalMatrix(t),n=this.coplanarPoint(qs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Pn,Kn=new P;class no{constructor(t=new Mi,e=new Mi,i=new Mi,n=new Mi,s=new Mi,a=new Mi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],r=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],m=i[9],g=i[10],p=i[11],f=i[12],_=i[13],T=i[14],S=i[15];return e[0].setComponents(r-n,u-l,p-d,S-f).normalize(),e[1].setComponents(r+n,u+l,p+d,S+f).normalize(),e[2].setComponents(r+s,u+c,p+m,S+_).normalize(),e[3].setComponents(r-s,u-c,p-m,S-_).normalize(),e[4].setComponents(r-a,u-h,p-g,S-T).normalize(),e[5].setComponents(r+a,u+h,p+g,S+T).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Kn.x=n.normal.x>0?t.max.x:t.min.x,Kn.y=n.normal.y>0?t.max.y:t.min.y,Kn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Kn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function so(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function ec(o,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,m=h.updateRange;o.bindBuffer(u,c),m.count===-1?o.bufferSubData(u,0,d):(e?o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(o.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:r,update:l}}class pr extends ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,r=Math.floor(i),l=Math.floor(n),c=r+1,h=l+1,u=t/r,d=e/l,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const T=_*d-a;for(let S=0;S<c;S++){const w=S*u-s;g.push(w,-T,0),p.push(0,0,1),f.push(S/r),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<r;T++){const S=T+c*_,w=T+c*(_+1),M=T+1+c*(_+1),C=T+1+c*_;m.push(S,w,C),m.push(w,M,C)}this.setIndex(m),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(p,3)),this.setAttribute("uv",new Ue(f,2))}static fromJSON(t){return new pr(t.width,t.height,t.widthSegments,t.heightSegments)}}var ic=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,nc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lc="vec3 transformed = vec3( position );",cc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,uc=`#ifdef USE_IRIDESCENCE
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
#endif`,dc=`#ifdef USE_BUMPMAP
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
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mc=`#define PI 3.141592653589793
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
}`,Sc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bc=`vec3 transformedNormal = objectNormal;
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
#endif`,wc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Ic=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fc=`#ifdef USE_ENVMAP
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
#endif`,zc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bc=`#ifdef USE_GRADIENTMAP
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
}`,kc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Hc=`uniform bool receiveShadow;
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
#endif`,Xc=`#if defined( USE_ENVMAP )
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
#endif`,qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Kc=`PhysicalMaterial material;
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
#endif`,$c=`struct PhysicalMaterial {
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
}`,Jc=`
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
#endif`,Qc=`#if defined( RE_IndirectDiffuse )
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
#endif`,th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ih=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dh=`#ifdef USE_MORPHNORMALS
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
#endif`,fh=`#ifdef USE_MORPHTARGETS
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
#endif`,ph=`#ifdef USE_MORPHTARGETS
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
#endif`,mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yh=`#ifdef USE_NORMALMAP
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
#endif`,Mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Th=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nh=`float getShadowMask() {
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
}`,Oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uh=`#ifdef USE_SKINNING
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
#endif`,Bh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kh=`#ifdef USE_SKINNING
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
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xh=`#ifdef USE_TRANSMISSION
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
#endif`,qh=`#ifdef USE_TRANSMISSION
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
#endif`,Yh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$h=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,au=`#include <common>
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
}`,ou=`#if DEPTH_PACKING == 3200
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
}`,lu=`#define DISTANCE
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
}`,cu=`#define DISTANCE
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
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`uniform float scale;
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
}`,fu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,mu=`uniform vec3 diffuse;
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
}`,gu=`#define LAMBERT
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
}`,_u=`#define LAMBERT
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
}`,xu=`#define MATCAP
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
}`,vu=`#define MATCAP
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
}`,yu=`#define NORMAL
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
}`,Mu=`#define NORMAL
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
}`,Su=`#define PHONG
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
}`,bu=`#define PHONG
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
}`,wu=`#define STANDARD
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
}`,Tu=`#define STANDARD
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
}`,Eu=`#define TOON
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
}`,Au=`#define TOON
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
}`,Cu=`uniform float size;
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
}`,Pu=`uniform vec3 diffuse;
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
}`,Ru=`#include <common>
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
}`,Lu=`uniform vec3 color;
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
}`,Du=`uniform float rotation;
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
}`,Iu=`uniform vec3 diffuse;
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
}`,Tt={alphamap_fragment:ic,alphamap_pars_fragment:nc,alphatest_fragment:sc,alphatest_pars_fragment:rc,aomap_fragment:ac,aomap_pars_fragment:oc,begin_vertex:lc,beginnormal_vertex:cc,bsdfs:hc,iridescence_fragment:uc,bumpmap_pars_fragment:dc,clipping_planes_fragment:fc,clipping_planes_pars_fragment:pc,clipping_planes_pars_vertex:mc,clipping_planes_vertex:gc,color_fragment:_c,color_pars_fragment:xc,color_pars_vertex:vc,color_vertex:yc,common:Mc,cube_uv_reflection_fragment:Sc,defaultnormal_vertex:bc,displacementmap_pars_vertex:wc,displacementmap_vertex:Tc,emissivemap_fragment:Ec,emissivemap_pars_fragment:Ac,encodings_fragment:Cc,encodings_pars_fragment:Pc,envmap_fragment:Rc,envmap_common_pars_fragment:Lc,envmap_pars_fragment:Dc,envmap_pars_vertex:Ic,envmap_physical_pars_fragment:Xc,envmap_vertex:Fc,fog_vertex:zc,fog_pars_vertex:Nc,fog_fragment:Oc,fog_pars_fragment:Uc,gradientmap_pars_fragment:Bc,lightmap_fragment:kc,lightmap_pars_fragment:Vc,lights_lambert_fragment:Gc,lights_lambert_pars_fragment:Wc,lights_pars_begin:Hc,lights_toon_fragment:qc,lights_toon_pars_fragment:Yc,lights_phong_fragment:jc,lights_phong_pars_fragment:Zc,lights_physical_fragment:Kc,lights_physical_pars_fragment:$c,lights_fragment_begin:Jc,lights_fragment_maps:Qc,lights_fragment_end:th,logdepthbuf_fragment:eh,logdepthbuf_pars_fragment:ih,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:sh,map_fragment:rh,map_pars_fragment:ah,map_particle_fragment:oh,map_particle_pars_fragment:lh,metalnessmap_fragment:ch,metalnessmap_pars_fragment:hh,morphcolor_vertex:uh,morphnormal_vertex:dh,morphtarget_pars_vertex:fh,morphtarget_vertex:ph,normal_fragment_begin:mh,normal_fragment_maps:gh,normal_pars_fragment:_h,normal_pars_vertex:xh,normal_vertex:vh,normalmap_pars_fragment:yh,clearcoat_normal_fragment_begin:Mh,clearcoat_normal_fragment_maps:Sh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:wh,output_fragment:Th,packing:Eh,premultiplied_alpha_fragment:Ah,project_vertex:Ch,dithering_fragment:Ph,dithering_pars_fragment:Rh,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Dh,shadowmap_pars_fragment:Ih,shadowmap_pars_vertex:Fh,shadowmap_vertex:zh,shadowmask_pars_fragment:Nh,skinbase_vertex:Oh,skinning_pars_vertex:Uh,skinning_vertex:Bh,skinnormal_vertex:kh,specularmap_fragment:Vh,specularmap_pars_fragment:Gh,tonemapping_fragment:Wh,tonemapping_pars_fragment:Hh,transmission_fragment:Xh,transmission_pars_fragment:qh,uv_pars_fragment:Yh,uv_pars_vertex:jh,uv_vertex:Zh,uv2_pars_fragment:Kh,uv2_pars_vertex:$h,uv2_vertex:Jh,worldpos_vertex:Qh,background_vert:tu,background_frag:eu,backgroundCube_vert:iu,backgroundCube_frag:nu,cube_vert:su,cube_frag:ru,depth_vert:au,depth_frag:ou,distanceRGBA_vert:lu,distanceRGBA_frag:cu,equirect_vert:hu,equirect_frag:uu,linedashed_vert:du,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:xu,meshmatcap_frag:vu,meshnormal_vert:yu,meshnormal_frag:Mu,meshphong_vert:Su,meshphong_frag:bu,meshphysical_vert:wu,meshphysical_frag:Tu,meshtoon_vert:Eu,meshtoon_frag:Au,points_vert:Cu,points_frag:Pu,shadow_vert:Ru,shadow_frag:Lu,sprite_vert:Du,sprite_frag:Iu},it={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ce},uv2Transform:{value:new Ce},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ce}}},We={basic:{uniforms:ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ue([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ue([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ue([it.points,it.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ue([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ue([it.common,it.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ue([it.sprite,it.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:ue([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:ue([it.lights,it.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};We.physical={uniforms:ue([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function Fu(o,t,e,i,n,s,a){const r=new kt(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(f,_){let T=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?e:t).get(S));const w=o.xr,M=w.getSession&&w.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?p(r,l):S&&S.isColor&&(p(S,1),T=!0),(o.autoClear||T)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),S&&(S.isCubeTexture||S.mapping===fs)?(h===void 0&&(h=new He(new Ii(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:un(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,z,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(u!==S||d!==S.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,m=o.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new He(new pr(2,2),new Fi({name:"BackgroundMaterial",uniforms:un(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,m=o.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,_){i.buffers.color.setClear(f.r,f.g,f.b,_,a)}return{getClearColor:function(){return r},setClearColor:function(f,_=1){r.set(f),l=_,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(r,l)},render:g}}function zu(o,t,e,i){const n=o.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,r={},l=f(null);let c=l,h=!1;function u(I,X,j,Z,G){let D=!1;if(a){const N=p(Z,j,X);c!==N&&(c=N,m(c.object)),D=_(I,Z,j,G),D&&T(I,Z,j,G)}else{const N=X.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==N)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=N,D=!0)}G!==null&&e.update(G,34963),(D||h)&&(h=!1,v(I,X,j,Z),G!==null&&o.bindBuffer(34963,e.get(G).buffer))}function d(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,X,j){const Z=j.wireframe===!0;let G=r[I.id];G===void 0&&(G={},r[I.id]=G);let D=G[X.id];D===void 0&&(D={},G[X.id]=D);let N=D[Z];return N===void 0&&(N=f(d()),D[Z]=N),N}function f(I){const X=[],j=[],Z=[];for(let G=0;G<n;G++)X[G]=0,j[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:Z,object:I,attributes:{},index:null}}function _(I,X,j,Z){const G=c.attributes,D=X.attributes;let N=0;const tt=j.getAttributes();for(const $ in tt)if(tt[$].location>=0){const lt=G[$];let Mt=D[$];if(Mt===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(Mt=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(Mt=I.instanceColor)),lt===void 0||lt.attribute!==Mt||Mt&&lt.data!==Mt.data)return!0;N++}return c.attributesNum!==N||c.index!==Z}function T(I,X,j,Z){const G={},D=X.attributes;let N=0;const tt=j.getAttributes();for(const $ in tt)if(tt[$].location>=0){let lt=D[$];lt===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor));const Mt={};Mt.attribute=lt,lt&&lt.data&&(Mt.data=lt.data),G[$]=Mt,N++}c.attributes=G,c.attributesNum=N,c.index=Z}function S(){const I=c.newAttributes;for(let X=0,j=I.length;X<j;X++)I[X]=0}function w(I){M(I,0)}function M(I,X){const j=c.newAttributes,Z=c.enabledAttributes,G=c.attributeDivisors;j[I]=1,Z[I]===0&&(o.enableVertexAttribArray(I),Z[I]=1),G[I]!==X&&((i.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,X),G[I]=X)}function C(){const I=c.newAttributes,X=c.enabledAttributes;for(let j=0,Z=X.length;j<Z;j++)X[j]!==I[j]&&(o.disableVertexAttribArray(j),X[j]=0)}function z(I,X,j,Z,G,D){i.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(I,X,j,G,D):o.vertexAttribPointer(I,X,j,Z,G,D)}function v(I,X,j,Z){if(i.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const G=Z.attributes,D=j.getAttributes(),N=X.defaultAttributeValues;for(const tt in D){const $=D[tt];if($.location>=0){let K=G[tt];if(K===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const lt=K.normalized,Mt=K.itemSize,H=e.get(K);if(H===void 0)continue;const Ut=H.buffer,xt=H.type,St=H.bytesPerElement;if(K.isInterleavedBufferAttribute){const ot=K.data,Vt=ot.stride,At=K.offset;if(ot.isInstancedInterleavedBuffer){for(let gt=0;gt<$.locationSize;gt++)M($.location+gt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let gt=0;gt<$.locationSize;gt++)w($.location+gt);o.bindBuffer(34962,Ut);for(let gt=0;gt<$.locationSize;gt++)z($.location+gt,Mt/$.locationSize,xt,lt,Vt*St,(At+Mt/$.locationSize*gt)*St)}else{if(K.isInstancedBufferAttribute){for(let ot=0;ot<$.locationSize;ot++)M($.location+ot,K.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ot=0;ot<$.locationSize;ot++)w($.location+ot);o.bindBuffer(34962,Ut);for(let ot=0;ot<$.locationSize;ot++)z($.location+ot,Mt/$.locationSize,xt,lt,Mt*St,Mt/$.locationSize*ot*St)}}else if(N!==void 0){const lt=N[tt];if(lt!==void 0)switch(lt.length){case 2:o.vertexAttrib2fv($.location,lt);break;case 3:o.vertexAttrib3fv($.location,lt);break;case 4:o.vertexAttrib4fv($.location,lt);break;default:o.vertexAttrib1fv($.location,lt)}}}}C()}function E(){at();for(const I in r){const X=r[I];for(const j in X){const Z=X[j];for(const G in Z)g(Z[G].object),delete Z[G];delete X[j]}delete r[I]}}function F(I){if(r[I.id]===void 0)return;const X=r[I.id];for(const j in X){const Z=X[j];for(const G in Z)g(Z[G].object),delete Z[G];delete X[j]}delete r[I.id]}function q(I){for(const X in r){const j=r[X];if(j[I.id]===void 0)continue;const Z=j[I.id];for(const G in Z)g(Z[G].object),delete Z[G];delete j[I.id]}}function at(){O(),h=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:at,resetDefaultState:O,dispose:E,releaseStatesOfGeometry:F,releaseStatesOfProgram:q,initAttributes:S,enableAttribute:w,disableUnusedAttributes:C}}function Nu(o,t,e,i){const n=i.isWebGL2;let s;function a(c){s=c}function r(c,h){o.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(n)d=o,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),e.update(h,s,u)}this.setMode=a,this.render=r,this.renderInstances=l}function Ou(o,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(z){if(z==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),f=o.getParameter(36347),_=o.getParameter(36348),T=o.getParameter(36349),S=d>0,w=a||t.has("OES_texture_float"),M=S&&w,C=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:C}}function Uu(o){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Mi,r=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const g=u.length!==0||d||i!==0||n;return n=d,e=h(u,m,0),i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,m){const g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,_=o.get(u);if(!n||g===null||g.length===0||s&&!f)s?h(null):c();else{const T=s?0:i,S=T*4;let w=_.clippingState||null;l.value=w,w=h(g,d,S,m);for(let M=0;M!==S;++M)w[M]=e[M];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,T=d.matrixWorldInverse;r.getNormalMatrix(T),(f===null||f.length<_)&&(f=new Float32Array(_));for(let S=0,w=m;S!==p;++S,w+=4)a.copy(u[S]).applyMatrix4(T,r),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Bu(o){let t=new WeakMap;function e(a,r){return r===tr?a.mapping=ln:r===er&&(a.mapping=cn),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const r=a.mapping;if(r===tr||r===er)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jl(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const r=a.target;r.removeEventListener("dispose",n);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ku extends eo{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,r=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sn=4,la=[.125,.215,.35,.446,.526,.582],bi=20,Ys=new ku,ca=new kt;let js=null;const Si=(1+Math.sqrt(5))/2,Ji=1/Si,ha=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Si,Ji),new P(0,Si,-Ji),new P(Ji,0,Si),new P(-Ji,0,Si),new P(Si,Ji,0),new P(-Si,Ji,0)];class ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){js=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(js),t.scissorTest=!1,$n(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ln||t.mapping===cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),js=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:An,format:Oe,encoding:Li,depthBuffer:!1},n=da(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vu(s)),this._blurMaterial=Gu(s,t,e)}return n}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,i,n){const r=new Ae(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ca),h.toneMapping=ii,h.autoClear=!1;const m=new hs({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new He(new Ii,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(ca),p=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(r.up.set(0,l[_],0),r.lookAt(c[_],0,0)):T===1?(r.up.set(0,0,l[_]),r.lookAt(0,c[_],0)):(r.up.set(0,l[_],0),r.lookAt(0,0,c[_]));const S=this._cubeSize;$n(n,T*S,_>2?S:0,S,S),h.setRenderTarget(n),p&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===ln||t.mapping===cn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fa());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;$n(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ys)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=ha[(n-1)%ha.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new He(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bi-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):bi;f>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${bi}`);const _=[];let T=0;for(let z=0;z<bi;++z){const v=z/p,E=Math.exp(-v*v/2);_.push(E),z===0?T+=E:z<f&&(T+=2*E)}for(let z=0;z<_.length;z++)_[z]=_[z]/T;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const w=this._sizeLods[n],M=3*w*(n>S-sn?n-S+sn:0),C=4*(this._cubeSize-w);$n(e,M,C,3*w,2*w),l.setRenderTarget(e),l.render(u,Ys)}}function Vu(o){const t=[],e=[],i=[];let n=o;const s=o-sn+1+la.length;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);let l=1/r;a>o-sn?l=la[a-o+sn-1]:a===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,f=2,_=1,T=new Float32Array(p*g*m),S=new Float32Array(f*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const z=C%3*2/3-1,v=C>2?0:-1,E=[z,v,0,z+2/3,v,0,z+2/3,v+1,0,z,v,0,z+2/3,v+1,0,z,v+1,0];T.set(E,p*g*C),S.set(d,f*g*C);const F=[C,C,C,C,C,C];w.set(F,_*g*C)}const M=new ye;M.setAttribute("position",new Xe(T,p)),M.setAttribute("uv",new Xe(S,f)),M.setAttribute("faceIndex",new Xe(w,_)),t.push(M),n>sn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function da(o,t,e){const i=new Di(o,t,e);return i.texture.mapping=fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $n(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function Gu(o,t,e){const i=new Float32Array(bi),n=new P(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function fa(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function pa(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function mr(){return`

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
	`}function Wu(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===tr||l===er,h=l===ln||l===cn;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new ua(o)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new ua(o));const d=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,d),r.addEventListener("dispose",s),d.texture}else return null}}}return r}function n(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Hu(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xu(o,t,e,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)t.update(p[f],34962)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let S=0,w=T.length;S<w;S+=3){const M=T[S+0],C=T[S+1],z=T[S+2];d.push(M,C,C,z,z,M)}}else{const T=g.array;p=g.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const M=S+0,C=S+1,z=S+2;d.push(M,C,C,z,z,M)}}const f=new(ja(d)?to:Qa)(d,1);f.version=p;const _=s.get(u);_&&t.remove(_),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function qu(o,t,e,i){const n=i.isWebGL2;let s;function a(d){s=d}let r,l;function c(d){r=d.type,l=d.bytesPerElement}function h(d,m){o.drawElements(s,m,r,d*l),e.update(m,s,1)}function u(d,m,g){if(g===0)return;let p,f;if(n)p=o,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,r,d*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Yu(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function ju(o,t){return o[0]-t[0]}function Zu(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Ku(o,t,e){const i={},n=new Float32Array(8),s=new WeakMap,a=new re,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,u,d){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let j=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let F=0;w===!0&&(F=1),M===!0&&(F=2),C===!0&&(F=3);let q=h.attributes.position.count*F,at=1;q>t.maxTextureSize&&(at=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const O=new Float32Array(q*at*4*f),I=new Ja(O,q,at,f);I.type=Ti,I.needsUpdate=!0;const X=F*4;for(let Z=0;Z<f;Z++){const G=z[Z],D=v[Z],N=E[Z],tt=q*at*4*Z;for(let $=0;$<G.count;$++){const K=$*X;w===!0&&(a.fromBufferAttribute(G,$),O[tt+K+0]=a.x,O[tt+K+1]=a.y,O[tt+K+2]=a.z,O[tt+K+3]=0),M===!0&&(a.fromBufferAttribute(D,$),O[tt+K+4]=a.x,O[tt+K+5]=a.y,O[tt+K+6]=a.z,O[tt+K+7]=0),C===!0&&(a.fromBufferAttribute(N,$),O[tt+K+8]=a.x,O[tt+K+9]=a.y,O[tt+K+10]=a.z,O[tt+K+11]=N.itemSize===4?a.w:1)}}_={count:f,texture:I,size:new Dt(q,at)},s.set(h,_),h.addEventListener("dispose",j)}let T=0;for(let w=0;w<m.length;w++)T+=m[w];const S=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(o,"morphTargetBaseInfluence",S),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=i[h.id];if(f===void 0||f.length!==p){f=[];for(let M=0;M<p;M++)f[M]=[M,0];i[h.id]=f}for(let M=0;M<p;M++){const C=f[M];C[0]=M,C[1]=m[M]}f.sort(Zu);for(let M=0;M<8;M++)M<p&&f[M][1]?(r[M][0]=f[M][0],r[M][1]=f[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(ju);const _=h.morphAttributes.position,T=h.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const C=r[M],z=C[0],v=C[1];z!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+M)!==_[z]&&h.setAttribute("morphTarget"+M,_[z]),T&&h.getAttribute("morphNormal"+M)!==T[z]&&h.setAttribute("morphNormal"+M,T[z]),n[M]=v,S+=v):(_&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),T&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),n[M]=0)}const w=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(o,"morphTargetBaseInfluence",w),d.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function $u(o,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);return n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function a(){n=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const ro=new Be,ao=new Ja,oo=new Nl,lo=new io,ma=[],ga=[],_a=new Float32Array(16),xa=new Float32Array(9),va=new Float32Array(4);function fn(o,t,e){const i=o[0];if(i<=0||i>0)return o;const n=t*e;let s=ma[n];if(s===void 0&&(s=new Float32Array(n),ma[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function Jt(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Qt(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function ms(o,t){let e=ga[t];e===void 0&&(e=new Int32Array(t),ga[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function Ju(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Qu(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;o.uniform2fv(this.addr,t),Qt(e,t)}}function td(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Jt(e,t))return;o.uniform3fv(this.addr,t),Qt(e,t)}}function ed(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;o.uniform4fv(this.addr,t),Qt(e,t)}}function id(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Jt(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Qt(e,t)}else{if(Jt(e,i))return;va.set(i),o.uniformMatrix2fv(this.addr,!1,va),Qt(e,i)}}function nd(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Jt(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Qt(e,t)}else{if(Jt(e,i))return;xa.set(i),o.uniformMatrix3fv(this.addr,!1,xa),Qt(e,i)}}function sd(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Jt(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Qt(e,t)}else{if(Jt(e,i))return;_a.set(i),o.uniformMatrix4fv(this.addr,!1,_a),Qt(e,i)}}function rd(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function ad(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;o.uniform2iv(this.addr,t),Qt(e,t)}}function od(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;o.uniform3iv(this.addr,t),Qt(e,t)}}function ld(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;o.uniform4iv(this.addr,t),Qt(e,t)}}function cd(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function hd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;o.uniform2uiv(this.addr,t),Qt(e,t)}}function ud(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;o.uniform3uiv(this.addr,t),Qt(e,t)}}function dd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;o.uniform4uiv(this.addr,t),Qt(e,t)}}function fd(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||ro,n)}function pd(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||oo,n)}function md(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||lo,n)}function gd(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ao,n)}function _d(o){switch(o){case 5126:return Ju;case 35664:return Qu;case 35665:return td;case 35666:return ed;case 35674:return id;case 35675:return nd;case 35676:return sd;case 5124:case 35670:return rd;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return ld;case 5125:return cd;case 36294:return hd;case 36295:return ud;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return gd}}function xd(o,t){o.uniform1fv(this.addr,t)}function vd(o,t){const e=fn(t,this.size,2);o.uniform2fv(this.addr,e)}function yd(o,t){const e=fn(t,this.size,3);o.uniform3fv(this.addr,e)}function Md(o,t){const e=fn(t,this.size,4);o.uniform4fv(this.addr,e)}function Sd(o,t){const e=fn(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function bd(o,t){const e=fn(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function wd(o,t){const e=fn(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Td(o,t){o.uniform1iv(this.addr,t)}function Ed(o,t){o.uniform2iv(this.addr,t)}function Ad(o,t){o.uniform3iv(this.addr,t)}function Cd(o,t){o.uniform4iv(this.addr,t)}function Pd(o,t){o.uniform1uiv(this.addr,t)}function Rd(o,t){o.uniform2uiv(this.addr,t)}function Ld(o,t){o.uniform3uiv(this.addr,t)}function Dd(o,t){o.uniform4uiv(this.addr,t)}function Id(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ro,s[a])}function Fd(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||oo,s[a])}function zd(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||lo,s[a])}function Nd(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ao,s[a])}function Od(o){switch(o){case 5126:return xd;case 35664:return vd;case 35665:return yd;case 35666:return Md;case 35674:return Sd;case 35675:return bd;case 35676:return wd;case 5124:case 35670:return Td;case 35667:case 35671:return Ed;case 35668:case 35672:return Ad;case 35669:case 35673:return Cd;case 5125:return Pd;case 36294:return Rd;case 36295:return Ld;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Fd;case 35680:case 36300:case 36308:case 36293:return zd;case 36289:case 36303:case 36311:case 36292:return Nd}}class Ud{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=_d(e.type)}}class Bd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Od(e.type)}}class kd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const r=n[s];r.setValue(t,e[r.id],i)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function ya(o,t){o.seq.push(t),o.map[t.id]=t}function Vd(o,t,e){const i=o.name,n=i.length;for(Zs.lastIndex=0;;){const s=Zs.exec(i),a=Zs.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===n){ya(e,c===void 0?new Ud(r,o,t):new Bd(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new kd(r),ya(e,u)),e=u}}}class is{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Vd(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const r=e[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Ma(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}let Gd=0;function Wd(o,t){const e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function Hd(o){switch(o){case Li:return["Linear","( value )"];case Yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Sa(o,t,e){const i=o.getShaderParameter(t,35713),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Wd(o.getShaderSource(t),a)}else return n}function Xd(o,t){const e=Hd(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function qd(o,t){let e;switch(t){case qo:e="Linear";break;case Yo:e="Reinhard";break;case jo:e="OptimizedCineon";break;case Zo:e="ACESFilmic";break;case Ko:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yd(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bn).join(`
`)}function jd(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zd(o,t){const e={},i=o.getProgramParameter(t,35721);for(let n=0;n<i;n++){const s=o.getActiveAttrib(t,n),a=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function bn(o){return o!==""}function ba(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wa(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ar(o){return o.replace(Kd,$d)}function $d(o,t){const e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ar(e)}const Jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ta(o){return o.replace(Jd,Qd)}function Qd(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ea(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tf(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function ef(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ln:case cn:t="ENVMAP_TYPE_CUBE";break;case fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nf(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case cn:t="ENVMAP_MODE_REFRACTION";break}return t}function sf(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ha:t="ENVMAP_BLENDING_MULTIPLY";break;case Ho:t="ENVMAP_BLENDING_MIX";break;case Xo:t="ENVMAP_BLENDING_ADD";break}return t}function rf(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function af(o,t,e,i){const n=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=tf(e),c=ef(e),h=nf(e),u=sf(e),d=rf(e),m=e.isWebGL2?"":Yd(e),g=jd(s),p=n.createProgram();let f,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(bn).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(bn).join(`
`),_.length>0&&(_+=`
`)):(f=[Ea(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bn).join(`
`),_=[m,Ea(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Tt.tonemapping_pars_fragment:"",e.toneMapping!==ii?qd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,Xd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bn).join(`
`)),a=ar(a),a=ba(a,e),a=wa(a,e),r=ar(r),r=ba(r,e),r=wa(r,e),a=Ta(a),r=Ta(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===Kr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=T+f+a,w=T+_+r,M=Ma(n,35633,S),C=Ma(n,35632,w);if(n.attachShader(p,M),n.attachShader(p,C),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),o.debug.checkShaderErrors){const E=n.getProgramInfoLog(p).trim(),F=n.getShaderInfoLog(M).trim(),q=n.getShaderInfoLog(C).trim();let at=!0,O=!0;if(n.getProgramParameter(p,35714)===!1){at=!1;const I=Sa(n,M,"vertex"),X=Sa(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+I+`
`+X)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(F===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:at,programLog:E,vertexShader:{log:F,prefix:f},fragmentShader:{log:q,prefix:_}})}n.deleteShader(M),n.deleteShader(C);let z;this.getUniforms=function(){return z===void 0&&(z=new is(n,p)),z};let v;return this.getAttributes=function(){return v===void 0&&(v=Zd(n,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Gd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let of=0;class lf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cf(t),e.set(t,i)),i}}class cf{constructor(t){this.id=of++,this.code=t,this.usedTimes=0}}function hf(o,t,e,i,n,s,a){const r=new fr,l=new lf,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,F,q,at){const O=q.fog,I=at.geometry,X=v.isMeshStandardMaterial?q.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),Z=!!j&&j.mapping===fs?j.image.height:null,G=g[v.type];v.precision!==null&&(m=n.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const D=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,N=D!==void 0?D.length:0;let tt=0;I.morphAttributes.position!==void 0&&(tt=1),I.morphAttributes.normal!==void 0&&(tt=2),I.morphAttributes.color!==void 0&&(tt=3);let $,K,lt,Mt;if(G){const Vt=We[G];$=Vt.vertexShader,K=Vt.fragmentShader}else $=v.vertexShader,K=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),Mt=l.getFragmentShaderID(v);const H=o.getRenderTarget(),Ut=v.alphaTest>0,xt=v.clearcoat>0,St=v.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:v.type,vertexShader:$,fragmentShader:K,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:Mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:at.isInstancedMesh===!0,instancingColor:at.isInstancedMesh===!0&&at.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?o.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Li,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===vl,tangentSpaceNormalMap:v.normalMapType===xl,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Yt,clearcoat:xt,clearcoatMap:xt&&!!v.clearcoatMap,clearcoatRoughnessMap:xt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!v.clearcoatNormalMap,iridescence:St,iridescenceMap:St&&!!v.iridescenceMap,iridescenceThicknessMap:St&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===rn,alphaMap:!!v.alphaMap,alphaTest:Ut,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:at.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:ii,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===Pe,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)E.push(F),E.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(_(E,v),T(E,v),E.push(o.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){r.disableAll(),E.isWebGL2&&r.enable(0),E.supportsVertexTextures&&r.enable(1),E.instancing&&r.enable(2),E.instancingColor&&r.enable(3),E.map&&r.enable(4),E.matcap&&r.enable(5),E.envMap&&r.enable(6),E.lightMap&&r.enable(7),E.aoMap&&r.enable(8),E.emissiveMap&&r.enable(9),E.bumpMap&&r.enable(10),E.normalMap&&r.enable(11),E.objectSpaceNormalMap&&r.enable(12),E.tangentSpaceNormalMap&&r.enable(13),E.clearcoat&&r.enable(14),E.clearcoatMap&&r.enable(15),E.clearcoatRoughnessMap&&r.enable(16),E.clearcoatNormalMap&&r.enable(17),E.iridescence&&r.enable(18),E.iridescenceMap&&r.enable(19),E.iridescenceThicknessMap&&r.enable(20),E.displacementMap&&r.enable(21),E.specularMap&&r.enable(22),E.roughnessMap&&r.enable(23),E.metalnessMap&&r.enable(24),E.gradientMap&&r.enable(25),E.alphaMap&&r.enable(26),E.alphaTest&&r.enable(27),E.vertexColors&&r.enable(28),E.vertexAlphas&&r.enable(29),E.vertexUvs&&r.enable(30),E.vertexTangents&&r.enable(31),E.uvsVertexOnly&&r.enable(32),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.skinning&&r.enable(4),E.morphTargets&&r.enable(5),E.morphNormals&&r.enable(6),E.morphColors&&r.enable(7),E.premultipliedAlpha&&r.enable(8),E.shadowMapEnabled&&r.enable(9),E.physicallyCorrectLights&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.specularIntensityMap&&r.enable(15),E.specularColorMap&&r.enable(16),E.transmission&&r.enable(17),E.transmissionMap&&r.enable(18),E.thicknessMap&&r.enable(19),E.sheen&&r.enable(20),E.sheenColorMap&&r.enable(21),E.sheenRoughnessMap&&r.enable(22),E.decodeVideoTexture&&r.enable(23),E.opaque&&r.enable(24),v.push(r.mask)}function S(v){const E=g[v.type];let F;if(E){const q=We[E];F=jl.clone(q.uniforms)}else F=v.uniforms;return F}function w(v,E){let F;for(let q=0,at=c.length;q<at;q++){const O=c[q];if(O.cacheKey===E){F=O,++F.usedTimes;break}}return F===void 0&&(F=new af(o,E,v,s),c.push(F)),F}function M(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:z}}function uf(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function i(s,a,r){o.get(s)[a]=r}function n(){o=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function df(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Aa(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Ca(){const o=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,m,g,p,f){let _=o[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},o[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=f),t++,_}function r(u,d,m,g,p,f){const _=a(u,d,m,g,p,f);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):e.push(_)}function l(u,d,m,g,p,f){const _=a(u,d,m,g,p,f);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):e.unshift(_)}function c(u,d){e.length>1&&e.sort(u||df),i.length>1&&i.sort(d||Aa),n.length>1&&n.sort(d||Aa)}function h(){for(let u=t,d=o.length;u<d;u++){const m=o[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:h,sort:c}}function ff(){let o=new WeakMap;function t(i,n){const s=o.get(i);let a;return s===void 0?(a=new Ca,o.set(i,[a])):n>=s.length?(a=new Ca,s.push(a)):a=s[n],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function pf(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return o[t.id]=e,e}}}function mf(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let gf=0;function _f(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function xf(o,t){const e=new pf,i=mf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,a=new Pt,r=new Pt;function l(h,u){let d=0,m=0,g=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,f=0,_=0,T=0,S=0,w=0,M=0,C=0,z=0,v=0;h.sort(_f);const E=u!==!0?Math.PI:1;for(let q=0,at=h.length;q<at;q++){const O=h[q],I=O.color,X=O.intensity,j=O.distance,Z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=I.r*X*E,m+=I.g*X*E,g+=I.b*X*E;else if(O.isLightProbe)for(let G=0;G<9;G++)n.probe[G].addScaledVector(O.sh.coefficients[G],X);else if(O.isDirectionalLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const D=O.shadow,N=i.get(O);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=O.shadow.matrix,w++}n.directional[p]=G,p++}else if(O.isSpotLight){const G=e.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(I).multiplyScalar(X*E),G.distance=j,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,n.spot[_]=G;const D=O.shadow;if(O.map&&(n.spotLightMap[z]=O.map,z++,D.updateMatrices(O),O.castShadow&&v++),n.spotLightMatrix[_]=D.matrix,O.castShadow){const N=i.get(O);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=Z,C++}_++}else if(O.isRectAreaLight){const G=e.get(O);G.color.copy(I).multiplyScalar(X),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),n.rectArea[T]=G,T++}else if(O.isPointLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*E),G.distance=O.distance,G.decay=O.decay,O.castShadow){const D=O.shadow,N=i.get(O);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,n.pointShadow[f]=N,n.pointShadowMap[f]=Z,n.pointShadowMatrix[f]=O.shadow.matrix,M++}n.point[f]=G,f++}else if(O.isHemisphereLight){const G=e.get(O);G.skyColor.copy(O.color).multiplyScalar(X*E),G.groundColor.copy(O.groundColor).multiplyScalar(X*E),n.hemi[S]=G,S++}}T>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==p||F.pointLength!==f||F.spotLength!==_||F.rectAreaLength!==T||F.hemiLength!==S||F.numDirectionalShadows!==w||F.numPointShadows!==M||F.numSpotShadows!==C||F.numSpotMaps!==z)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=T,n.point.length=f,n.hemi.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+z-v,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=v,F.directionalLength=p,F.pointLength=f,F.spotLength=_,F.rectAreaLength=T,F.hemiLength=S,F.numDirectionalShadows=w,F.numPointShadows=M,F.numSpotShadows=C,F.numSpotMaps=z,n.version=gf++)}function c(h,u){let d=0,m=0,g=0,p=0,f=0;const _=u.matrixWorldInverse;for(let T=0,S=h.length;T<S;T++){const w=h[T];if(w.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(w.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),r.identity(),a.copy(w.matrixWorld),a.premultiply(_),r.extractRotation(a),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),p++}else if(w.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const M=n.hemi[f];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:n}}function Pa(o,t){const e=new xf(o,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function r(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:r}}function vf(o,t){let e=new WeakMap;function i(s,a=0){const r=e.get(s);let l;return r===void 0?(l=new Pa(o,t),e.set(s,[l])):a>=r.length?(l=new Pa(o,t),r.push(l)):l=r[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class yf extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bf=`uniform sampler2D shadow_pass;
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
}`;function wf(o,t,e){let i=new no;const n=new Dt,s=new Dt,a=new re,r=new yf({depthPacking:_l}),l=new Mf,c={},h=e.maxTextureSize,u={0:Pe,1:on,2:di},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Sf,fragmentShader:bf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new He(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va,this.render=function(w,M,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const z=o.getRenderTarget(),v=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),F=o.state;F.setBlending(fi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let q=0,at=w.length;q<at;q++){const O=w[q],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;n.copy(I.mapSize);const X=I.getFrameExtents();if(n.multiply(X),s.copy(I.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/X.x),n.x=s.x*X.x,I.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/X.y),n.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null){const Z=this.type!==Mn?{minFilter:pe,magFilter:pe}:{};I.map=new Di(n.x,n.y,Z),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const j=I.getViewportCount();for(let Z=0;Z<j;Z++){const G=I.getViewport(Z);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),F.viewport(a),I.updateMatrices(O,Z),i=I.getFrustum(),S(M,C,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Mn&&_(I,C),I.needsUpdate=!1}f.needsUpdate=!1,o.setRenderTarget(z,v,E)};function _(w,M){const C=t.update(p);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Di(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(M,null,C,d,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(M,null,C,m,p,null)}function T(w,M,C,z,v,E){let F=null;const q=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(q!==void 0?F=q:F=C.isPointLight===!0?l:r,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const at=F.uuid,O=M.uuid;let I=c[at];I===void 0&&(I={},c[at]=I);let X=I[O];X===void 0&&(X=F.clone(),I[O]=X),F=X}return F.visible=M.visible,F.wireframe=M.wireframe,E===Mn?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:u[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaTest,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(C.matrixWorld),F.nearDistance=z,F.farDistance=v),F}function S(w,M,C,z,v){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Mn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const q=t.update(w),at=w.material;if(Array.isArray(at)){const O=q.groups;for(let I=0,X=O.length;I<X;I++){const j=O[I],Z=at[j.materialIndex];if(Z&&Z.visible){const G=T(w,Z,z,C.near,C.far,v);o.renderBufferDirect(C,null,q,G,w,j)}}}else if(at.visible){const O=T(w,at,z,C.near,C.far,v);o.renderBufferDirect(C,null,q,O,w,null)}}const F=w.children;for(let q=0,at=F.length;q<at;q++)S(F[q],M,C,z,v)}}function Tf(o,t,e){const i=e.isWebGL2;function n(){let A=!1;const k=new re;let Y=null;const rt=new re(0,0,0,0);return{setMask:function(ht){Y!==ht&&!A&&(o.colorMask(ht,ht,ht,ht),Y=ht)},setLocked:function(ht){A=ht},setClear:function(ht,It,ee,ae,mi){mi===!0&&(ht*=ae,It*=ae,ee*=ae),k.set(ht,It,ee,ae),rt.equals(k)===!1&&(o.clearColor(ht,It,ee,ae),rt.copy(k))},reset:function(){A=!1,Y=null,rt.set(-1,0,0,0)}}}function s(){let A=!1,k=null,Y=null,rt=null;return{setTest:function(ht){ht?Ut(2929):xt(2929)},setMask:function(ht){k!==ht&&!A&&(o.depthMask(ht),k=ht)},setFunc:function(ht){if(Y!==ht){switch(ht){case Oo:o.depthFunc(512);break;case Uo:o.depthFunc(519);break;case Bo:o.depthFunc(513);break;case Qs:o.depthFunc(515);break;case ko:o.depthFunc(514);break;case Vo:o.depthFunc(518);break;case Go:o.depthFunc(516);break;case Wo:o.depthFunc(517);break;default:o.depthFunc(515)}Y=ht}},setLocked:function(ht){A=ht},setClear:function(ht){rt!==ht&&(o.clearDepth(ht),rt=ht)},reset:function(){A=!1,k=null,Y=null,rt=null}}}function a(){let A=!1,k=null,Y=null,rt=null,ht=null,It=null,ee=null,ae=null,mi=null;return{setTest:function(Ht){A||(Ht?Ut(2960):xt(2960))},setMask:function(Ht){k!==Ht&&!A&&(o.stencilMask(Ht),k=Ht)},setFunc:function(Ht,je,Se){(Y!==Ht||rt!==je||ht!==Se)&&(o.stencilFunc(Ht,je,Se),Y=Ht,rt=je,ht=Se)},setOp:function(Ht,je,Se){(It!==Ht||ee!==je||ae!==Se)&&(o.stencilOp(Ht,je,Se),It=Ht,ee=je,ae=Se)},setLocked:function(Ht){A=Ht},setClear:function(Ht){mi!==Ht&&(o.clearStencil(Ht),mi=Ht)},reset:function(){A=!1,k=null,Y=null,rt=null,ht=null,It=null,ee=null,ae=null,mi=null}}}const r=new n,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,T=null,S=null,w=null,M=null,C=null,z=null,v=null,E=!1,F=null,q=null,at=null,O=null,I=null;const X=o.getParameter(35661);let j=!1,Z=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=Z>=2);let D=null,N={};const tt=o.getParameter(3088),$=o.getParameter(2978),K=new re().fromArray(tt),lt=new re().fromArray($);function Mt(A,k,Y){const rt=new Uint8Array(4),ht=o.createTexture();o.bindTexture(A,ht),o.texParameteri(A,10241,9728),o.texParameteri(A,10240,9728);for(let It=0;It<Y;It++)o.texImage2D(k+It,0,6408,1,1,0,6408,5121,rt);return ht}const H={};H[3553]=Mt(3553,3553,1),H[34067]=Mt(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(2929),l.setFunc(Qs),ce(!1),Ve(yr),Ut(2884),ne(fi);function Ut(A){d[A]!==!0&&(o.enable(A),d[A]=!0)}function xt(A){d[A]!==!1&&(o.disable(A),d[A]=!1)}function St(A,k){return m[A]!==k?(o.bindFramebuffer(A,k),m[A]=k,i&&(A===36009&&(m[36160]=k),A===36160&&(m[36009]=k)),!0):!1}function ot(A,k){let Y=p,rt=!1;if(A)if(Y=g.get(k),Y===void 0&&(Y=[],g.set(k,Y)),A.isWebGLMultipleRenderTargets){const ht=A.texture;if(Y.length!==ht.length||Y[0]!==36064){for(let It=0,ee=ht.length;It<ee;It++)Y[It]=36064+It;Y.length=ht.length,rt=!0}}else Y[0]!==36064&&(Y[0]=36064,rt=!0);else Y[0]!==1029&&(Y[0]=1029,rt=!0);rt&&(e.isWebGL2?o.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Vt(A){return f!==A?(o.useProgram(A),f=A,!0):!1}const At={[tn]:32774,[Eo]:32778,[Ao]:32779};if(i)At[wr]=32775,At[Tr]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(At[wr]=A.MIN_EXT,At[Tr]=A.MAX_EXT)}const gt={[Co]:0,[Po]:1,[Ro]:768,[Ga]:770,[No]:776,[Fo]:774,[Do]:772,[Lo]:769,[Wa]:771,[zo]:775,[Io]:773};function ne(A,k,Y,rt,ht,It,ee,ae){if(A===fi){_===!0&&(xt(3042),_=!1);return}if(_===!1&&(Ut(3042),_=!0),A!==To){if(A!==T||ae!==E){if((S!==tn||C!==tn)&&(o.blendEquation(32774),S=tn,C=tn),ae)switch(A){case rn:o.blendFuncSeparate(1,771,1,771);break;case Mr:o.blendFunc(1,1);break;case Sr:o.blendFuncSeparate(0,769,0,1);break;case br:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case rn:o.blendFuncSeparate(770,771,1,771);break;case Mr:o.blendFunc(770,1);break;case Sr:o.blendFuncSeparate(0,769,0,1);break;case br:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,M=null,z=null,v=null,T=A,E=ae}return}ht=ht||k,It=It||Y,ee=ee||rt,(k!==S||ht!==C)&&(o.blendEquationSeparate(At[k],At[ht]),S=k,C=ht),(Y!==w||rt!==M||It!==z||ee!==v)&&(o.blendFuncSeparate(gt[Y],gt[rt],gt[It],gt[ee]),w=Y,M=rt,z=It,v=ee),T=A,E=null}function de(A,k){A.side===di?xt(2884):Ut(2884);let Y=A.side===Pe;k&&(Y=!Y),ce(Y),A.blending===rn&&A.transparent===!1?ne(fi):ne(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),r.setMask(A.colorWrite);const rt=A.stencilWrite;c.setTest(rt),rt&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Bt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ut(32926):xt(32926)}function ce(A){F!==A&&(A?o.frontFace(2304):o.frontFace(2305),F=A)}function Ve(A){A!==So?(Ut(2884),A!==q&&(A===yr?o.cullFace(1029):A===bo?o.cullFace(1028):o.cullFace(1032))):xt(2884),q=A}function se(A){A!==at&&(j&&o.lineWidth(A),at=A)}function Bt(A,k,Y){A?(Ut(32823),(O!==k||I!==Y)&&(o.polygonOffset(k,Y),O=k,I=Y)):xt(32823)}function qe(A){A?Ut(3089):xt(3089)}function Ye(A){A===void 0&&(A=33984+X-1),D!==A&&(o.activeTexture(A),D=A)}function b(A,k,Y){Y===void 0&&(D===null?Y=33984+X-1:Y=D);let rt=N[Y];rt===void 0&&(rt={type:void 0,texture:void 0},N[Y]=rt),(rt.type!==A||rt.texture!==k)&&(D!==Y&&(o.activeTexture(Y),D=Y),o.bindTexture(A,k||H[A]),rt.type=A,rt.texture=k)}function x(){const A=N[D];A!==void 0&&A.type!==void 0&&(o.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function B(){try{o.compressedTexImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{o.compressedTexImage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function nt(){try{o.texSubImage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function st(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{o.texStorage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pt(){try{o.texStorage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _t(){try{o.texImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{o.texImage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(A){K.equals(A)===!1&&(o.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function dt(A){lt.equals(A)===!1&&(o.viewport(A.x,A.y,A.z,A.w),lt.copy(A))}function Lt(A,k){let Y=u.get(k);Y===void 0&&(Y=new WeakMap,u.set(k,Y));let rt=Y.get(A);rt===void 0&&(rt=o.getUniformBlockIndex(k,A.name),Y.set(A,rt))}function Wt(A,k){const rt=u.get(k).get(A);h.get(A)!==rt&&(o.uniformBlockBinding(k,rt,A.__bindingPointIndex),h.set(A,rt))}function te(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},D=null,N={},m={},g=new WeakMap,p=[],f=null,_=!1,T=null,S=null,w=null,M=null,C=null,z=null,v=null,E=!1,F=null,q=null,at=null,O=null,I=null,K.set(0,0,o.canvas.width,o.canvas.height),lt.set(0,0,o.canvas.width,o.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Ut,disable:xt,bindFramebuffer:St,drawBuffers:ot,useProgram:Vt,setBlending:ne,setMaterial:de,setFlipSided:ce,setCullFace:Ve,setLineWidth:se,setPolygonOffset:Bt,setScissorTest:qe,activeTexture:Ye,bindTexture:b,unbindTexture:x,compressedTexImage2D:B,compressedTexImage3D:J,texImage2D:_t,texImage3D:ct,updateUBOMapping:Lt,uniformBlockBinding:Wt,texStorage2D:W,texStorage3D:pt,texSubImage2D:et,texSubImage3D:nt,compressedTexSubImage2D:vt,compressedTexSubImage3D:st,scissor:mt,viewport:dt,reset:te}}function Ef(o,t,e,i,n,s,a){const r=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,x){return _?new OffscreenCanvas(b,x):cs("canvas")}function S(b,x,B,J){let et=1;if((b.width>J||b.height>J)&&(et=J/Math.max(b.width,b.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const nt=x?ls:Math.floor,vt=nt(et*b.width),st=nt(et*b.height);p===void 0&&(p=T(vt,st));const W=B?T(vt,st):p;return W.width=vt,W.height=st,W.getContext("2d").drawImage(b,0,0,vt,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+vt+"x"+st+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function w(b){return rr(b.width)&&rr(b.height)}function M(b){return r?!1:b.wrapS!==Ne||b.wrapT!==Ne||b.minFilter!==pe&&b.minFilter!==Ee}function C(b,x){return b.generateMipmaps&&x&&b.minFilter!==pe&&b.minFilter!==Ee}function z(b){o.generateMipmap(b)}function v(b,x,B,J,et=!1){if(r===!1)return x;if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt=x;return x===6403&&(B===5126&&(nt=33326),B===5131&&(nt=33325),B===5121&&(nt=33321)),x===33319&&(B===5126&&(nt=33328),B===5131&&(nt=33327),B===5121&&(nt=33323)),x===6408&&(B===5126&&(nt=34836),B===5131&&(nt=34842),B===5121&&(nt=J===Yt&&et===!1?35907:32856),B===32819&&(nt=32854),B===32820&&(nt=32855)),(nt===33325||nt===33326||nt===33327||nt===33328||nt===34842||nt===34836)&&t.get("EXT_color_buffer_float"),nt}function E(b,x,B){return C(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==pe&&b.minFilter!==Ee?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function F(b){return b===pe||b===Er||b===Ar?9728:9729}function q(b){const x=b.target;x.removeEventListener("dispose",q),O(x),x.isVideoTexture&&g.delete(x)}function at(b){const x=b.target;x.removeEventListener("dispose",at),X(x)}function O(b){const x=i.get(b);if(x.__webglInit===void 0)return;const B=b.source,J=f.get(B);if(J){const et=J[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(b),Object.keys(J).length===0&&f.delete(B)}i.remove(b)}function I(b){const x=i.get(b);o.deleteTexture(x.__webglTexture);const B=b.source,J=f.get(B);delete J[x.__cacheKey],a.memory.textures--}function X(b){const x=b.texture,B=i.get(b),J=i.get(x);if(J.__webglTexture!==void 0&&(o.deleteTexture(J.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)o.deleteFramebuffer(B.__webglFramebuffer[et]),B.__webglDepthbuffer&&o.deleteRenderbuffer(B.__webglDepthbuffer[et]);else{if(o.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&o.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&o.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let et=0;et<B.__webglColorRenderbuffer.length;et++)B.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(B.__webglColorRenderbuffer[et]);B.__webglDepthRenderbuffer&&o.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let et=0,nt=x.length;et<nt;et++){const vt=i.get(x[et]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(b)}let j=0;function Z(){j=0}function G(){const b=j;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),j+=1,b}function D(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function N(b,x){const B=i.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,b,x);return}}e.bindTexture(3553,B.__webglTexture,33984+x)}function tt(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){xt(B,b,x);return}e.bindTexture(35866,B.__webglTexture,33984+x)}function $(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){xt(B,b,x);return}e.bindTexture(32879,B.__webglTexture,33984+x)}function K(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){St(B,b,x);return}e.bindTexture(34067,B.__webglTexture,33984+x)}const lt={[ir]:10497,[Ne]:33071,[nr]:33648},Mt={[pe]:9728,[Er]:9984,[Ar]:9986,[Ee]:9729,[$o]:9985,[ps]:9987};function H(b,x,B){if(B?(o.texParameteri(b,10242,lt[x.wrapS]),o.texParameteri(b,10243,lt[x.wrapT]),(b===32879||b===35866)&&o.texParameteri(b,32882,lt[x.wrapR]),o.texParameteri(b,10240,Mt[x.magFilter]),o.texParameteri(b,10241,Mt[x.minFilter])):(o.texParameteri(b,10242,33071),o.texParameteri(b,10243,33071),(b===32879||b===35866)&&o.texParameteri(b,32882,33071),(x.wrapS!==Ne||x.wrapT!==Ne)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(b,10240,F(x.magFilter)),o.texParameteri(b,10241,F(x.minFilter)),x.minFilter!==pe&&x.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(x.type===Ti&&t.has("OES_texture_float_linear")===!1||r===!1&&x.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(o.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ut(b,x){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",q));const J=x.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const nt=D(x);if(nt!==b.__cacheKey){et[nt]===void 0&&(et[nt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,B=!0),et[nt].usedTimes++;const vt=et[b.__cacheKey];vt!==void 0&&(et[b.__cacheKey].usedTimes--,vt.usedTimes===0&&I(x)),b.__cacheKey=nt,b.__webglTexture=et[nt].texture}return B}function xt(b,x,B){let J=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=35866),x.isData3DTexture&&(J=32879);const et=Ut(b,x),nt=x.source;e.bindTexture(J,b.__webglTexture,33984+B);const vt=i.get(nt);if(nt.version!==vt.__version||et===!0){e.activeTexture(33984+B),o.pixelStorei(37440,x.flipY),o.pixelStorei(37441,x.premultiplyAlpha),o.pixelStorei(3317,x.unpackAlignment),o.pixelStorei(37443,0);const st=M(x)&&w(x.image)===!1;let W=S(x.image,st,!1,h);W=Ye(x,W);const pt=w(W)||r,_t=s.convert(x.format,x.encoding);let ct=s.convert(x.type),mt=v(x.internalFormat,_t,ct,x.encoding,x.isVideoTexture);H(J,x,pt);let dt;const Lt=x.mipmaps,Wt=r&&x.isVideoTexture!==!0,te=vt.__version===void 0||et===!0,A=E(x,W,pt);if(x.isDepthTexture)mt=6402,r?x.type===Ti?mt=36012:x.type===wi?mt=33190:x.type===an?mt=35056:mt=33189:x.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ci&&mt===6402&&x.type!==qa&&x.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=wi,ct=s.convert(x.type)),x.format===hn&&mt===6402&&(mt=34041,x.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=an,ct=s.convert(x.type))),te&&(Wt?e.texStorage2D(3553,1,mt,W.width,W.height):e.texImage2D(3553,0,mt,W.width,W.height,0,_t,ct,null));else if(x.isDataTexture)if(Lt.length>0&&pt){Wt&&te&&e.texStorage2D(3553,A,mt,Lt[0].width,Lt[0].height);for(let k=0,Y=Lt.length;k<Y;k++)dt=Lt[k],Wt?e.texSubImage2D(3553,k,0,0,dt.width,dt.height,_t,ct,dt.data):e.texImage2D(3553,k,mt,dt.width,dt.height,0,_t,ct,dt.data);x.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(3553,A,mt,W.width,W.height),e.texSubImage2D(3553,0,0,0,W.width,W.height,_t,ct,W.data)):e.texImage2D(3553,0,mt,W.width,W.height,0,_t,ct,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&te&&e.texStorage3D(35866,A,mt,Lt[0].width,Lt[0].height,W.depth);for(let k=0,Y=Lt.length;k<Y;k++)dt=Lt[k],x.format!==Oe?_t!==null?Wt?e.compressedTexSubImage3D(35866,k,0,0,0,dt.width,dt.height,W.depth,_t,dt.data,0,0):e.compressedTexImage3D(35866,k,mt,dt.width,dt.height,W.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(35866,k,0,0,0,dt.width,dt.height,W.depth,_t,ct,dt.data):e.texImage3D(35866,k,mt,dt.width,dt.height,W.depth,0,_t,ct,dt.data)}else{Wt&&te&&e.texStorage2D(3553,A,mt,Lt[0].width,Lt[0].height);for(let k=0,Y=Lt.length;k<Y;k++)dt=Lt[k],x.format!==Oe?_t!==null?Wt?e.compressedTexSubImage2D(3553,k,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(3553,k,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(3553,k,0,0,dt.width,dt.height,_t,ct,dt.data):e.texImage2D(3553,k,mt,dt.width,dt.height,0,_t,ct,dt.data)}else if(x.isDataArrayTexture)Wt?(te&&e.texStorage3D(35866,A,mt,W.width,W.height,W.depth),e.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,_t,ct,W.data)):e.texImage3D(35866,0,mt,W.width,W.height,W.depth,0,_t,ct,W.data);else if(x.isData3DTexture)Wt?(te&&e.texStorage3D(32879,A,mt,W.width,W.height,W.depth),e.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,_t,ct,W.data)):e.texImage3D(32879,0,mt,W.width,W.height,W.depth,0,_t,ct,W.data);else if(x.isFramebufferTexture){if(te)if(Wt)e.texStorage2D(3553,A,mt,W.width,W.height);else{let k=W.width,Y=W.height;for(let rt=0;rt<A;rt++)e.texImage2D(3553,rt,mt,k,Y,0,_t,ct,null),k>>=1,Y>>=1}}else if(Lt.length>0&&pt){Wt&&te&&e.texStorage2D(3553,A,mt,Lt[0].width,Lt[0].height);for(let k=0,Y=Lt.length;k<Y;k++)dt=Lt[k],Wt?e.texSubImage2D(3553,k,0,0,_t,ct,dt):e.texImage2D(3553,k,mt,_t,ct,dt);x.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(3553,A,mt,W.width,W.height),e.texSubImage2D(3553,0,0,0,_t,ct,W)):e.texImage2D(3553,0,mt,_t,ct,W);C(x,pt)&&z(J),vt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function St(b,x,B){if(x.image.length!==6)return;const J=Ut(b,x),et=x.source;e.bindTexture(34067,b.__webglTexture,33984+B);const nt=i.get(et);if(et.version!==nt.__version||J===!0){e.activeTexture(33984+B),o.pixelStorei(37440,x.flipY),o.pixelStorei(37441,x.premultiplyAlpha),o.pixelStorei(3317,x.unpackAlignment),o.pixelStorei(37443,0);const vt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,W=[];for(let k=0;k<6;k++)!vt&&!st?W[k]=S(x.image[k],!1,!0,c):W[k]=st?x.image[k].image:x.image[k],W[k]=Ye(x,W[k]);const pt=W[0],_t=w(pt)||r,ct=s.convert(x.format,x.encoding),mt=s.convert(x.type),dt=v(x.internalFormat,ct,mt,x.encoding),Lt=r&&x.isVideoTexture!==!0,Wt=nt.__version===void 0||J===!0;let te=E(x,pt,_t);H(34067,x,_t);let A;if(vt){Lt&&Wt&&e.texStorage2D(34067,te,dt,pt.width,pt.height);for(let k=0;k<6;k++){A=W[k].mipmaps;for(let Y=0;Y<A.length;Y++){const rt=A[Y];x.format!==Oe?ct!==null?Lt?e.compressedTexSubImage2D(34069+k,Y,0,0,rt.width,rt.height,ct,rt.data):e.compressedTexImage2D(34069+k,Y,dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(34069+k,Y,0,0,rt.width,rt.height,ct,mt,rt.data):e.texImage2D(34069+k,Y,dt,rt.width,rt.height,0,ct,mt,rt.data)}}}else{A=x.mipmaps,Lt&&Wt&&(A.length>0&&te++,e.texStorage2D(34067,te,dt,W[0].width,W[0].height));for(let k=0;k<6;k++)if(st){Lt?e.texSubImage2D(34069+k,0,0,0,W[k].width,W[k].height,ct,mt,W[k].data):e.texImage2D(34069+k,0,dt,W[k].width,W[k].height,0,ct,mt,W[k].data);for(let Y=0;Y<A.length;Y++){const ht=A[Y].image[k].image;Lt?e.texSubImage2D(34069+k,Y+1,0,0,ht.width,ht.height,ct,mt,ht.data):e.texImage2D(34069+k,Y+1,dt,ht.width,ht.height,0,ct,mt,ht.data)}}else{Lt?e.texSubImage2D(34069+k,0,0,0,ct,mt,W[k]):e.texImage2D(34069+k,0,dt,ct,mt,W[k]);for(let Y=0;Y<A.length;Y++){const rt=A[Y];Lt?e.texSubImage2D(34069+k,Y+1,0,0,ct,mt,rt.image[k]):e.texImage2D(34069+k,Y+1,dt,ct,mt,rt.image[k])}}}C(x,_t)&&z(34067),nt.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ot(b,x,B,J,et){const nt=s.convert(B.format,B.encoding),vt=s.convert(B.type),st=v(B.internalFormat,nt,vt,B.encoding);i.get(x).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,st,x.width,x.height,x.depth,0,nt,vt,null):e.texImage2D(et,0,st,x.width,x.height,0,nt,vt,null)),e.bindFramebuffer(36160,b),Bt(x)?d.framebufferTexture2DMultisampleEXT(36160,J,et,i.get(B).__webglTexture,0,se(x)):(et===3553||et>=34069&&et<=34074)&&o.framebufferTexture2D(36160,J,et,i.get(B).__webglTexture,0),e.bindFramebuffer(36160,null)}function Vt(b,x,B){if(o.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let J=33189;if(B||Bt(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Ti?J=36012:et.type===wi&&(J=33190));const nt=se(x);Bt(x)?d.renderbufferStorageMultisampleEXT(36161,nt,J,x.width,x.height):o.renderbufferStorageMultisample(36161,nt,J,x.width,x.height)}else o.renderbufferStorage(36161,J,x.width,x.height);o.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const J=se(x);B&&Bt(x)===!1?o.renderbufferStorageMultisample(36161,J,35056,x.width,x.height):Bt(x)?d.renderbufferStorageMultisampleEXT(36161,J,35056,x.width,x.height):o.renderbufferStorage(36161,34041,x.width,x.height),o.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<J.length;et++){const nt=J[et],vt=s.convert(nt.format,nt.encoding),st=s.convert(nt.type),W=v(nt.internalFormat,vt,st,nt.encoding),pt=se(x);B&&Bt(x)===!1?o.renderbufferStorageMultisample(36161,pt,W,x.width,x.height):Bt(x)?d.renderbufferStorageMultisampleEXT(36161,pt,W,x.width,x.height):o.renderbufferStorage(36161,W,x.width,x.height)}}o.bindRenderbuffer(36161,null)}function At(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const J=i.get(x.depthTexture).__webglTexture,et=se(x);if(x.depthTexture.format===Ci)Bt(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,et):o.framebufferTexture2D(36160,36096,3553,J,0);else if(x.depthTexture.format===hn)Bt(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,et):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function gt(b){const x=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,b)}else if(B){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=o.createRenderbuffer(),Vt(x.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=o.createRenderbuffer(),Vt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function ne(b,x,B){const J=i.get(b);x!==void 0&&ot(J.__webglFramebuffer,b,b.texture,36064,3553),B!==void 0&&gt(b)}function de(b){const x=b.texture,B=i.get(b),J=i.get(x);b.addEventListener("dispose",at),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=x.version,a.memory.textures++);const et=b.isWebGLCubeRenderTarget===!0,nt=b.isWebGLMultipleRenderTargets===!0,vt=w(b)||r;if(et){B.__webglFramebuffer=[];for(let st=0;st<6;st++)B.__webglFramebuffer[st]=o.createFramebuffer()}else{if(B.__webglFramebuffer=o.createFramebuffer(),nt)if(n.drawBuffers){const st=b.texture;for(let W=0,pt=st.length;W<pt;W++){const _t=i.get(st[W]);_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&b.samples>0&&Bt(b)===!1){const st=nt?x:[x];B.__webglMultisampledFramebuffer=o.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let W=0;W<st.length;W++){const pt=st[W];B.__webglColorRenderbuffer[W]=o.createRenderbuffer(),o.bindRenderbuffer(36161,B.__webglColorRenderbuffer[W]);const _t=s.convert(pt.format,pt.encoding),ct=s.convert(pt.type),mt=v(pt.internalFormat,_t,ct,pt.encoding,b.isXRRenderTarget===!0),dt=se(b);o.renderbufferStorageMultisample(36161,dt,mt,b.width,b.height),o.framebufferRenderbuffer(36160,36064+W,36161,B.__webglColorRenderbuffer[W])}o.bindRenderbuffer(36161,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,J.__webglTexture),H(34067,x,vt);for(let st=0;st<6;st++)ot(B.__webglFramebuffer[st],b,x,36064,34069+st);C(x,vt)&&z(34067),e.unbindTexture()}else if(nt){const st=b.texture;for(let W=0,pt=st.length;W<pt;W++){const _t=st[W],ct=i.get(_t);e.bindTexture(3553,ct.__webglTexture),H(3553,_t,vt),ot(B.__webglFramebuffer,b,_t,36064+W,3553),C(_t,vt)&&z(3553)}e.unbindTexture()}else{let st=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(r?st=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,J.__webglTexture),H(st,x,vt),ot(B.__webglFramebuffer,b,x,36064,st),C(x,vt)&&z(st),e.unbindTexture()}b.depthBuffer&&gt(b)}function ce(b){const x=w(b)||r,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,et=B.length;J<et;J++){const nt=B[J];if(C(nt,x)){const vt=b.isWebGLCubeRenderTarget?34067:3553,st=i.get(nt).__webglTexture;e.bindTexture(vt,st),z(vt),e.unbindTexture()}}}function Ve(b){if(r&&b.samples>0&&Bt(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,J=b.height;let et=16384;const nt=[],vt=b.stencilBuffer?33306:36096,st=i.get(b),W=b.isWebGLMultipleRenderTargets===!0;if(W)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,st.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,st.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,st.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){nt.push(36064+pt),b.depthBuffer&&nt.push(vt);const _t=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(_t===!1&&(b.depthBuffer&&(et|=256),b.stencilBuffer&&(et|=1024)),W&&o.framebufferRenderbuffer(36008,36064,36161,st.__webglColorRenderbuffer[pt]),_t===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),W){const ct=i.get(x[pt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ct,0)}o.blitFramebuffer(0,0,B,J,0,0,B,J,et,9728),m&&o.invalidateFramebuffer(36008,nt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),W)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,st.__webglColorRenderbuffer[pt]);const _t=i.get(x[pt]).__webglTexture;e.bindFramebuffer(36160,st.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,_t,0)}e.bindFramebuffer(36009,st.__webglMultisampledFramebuffer)}}function se(b){return Math.min(u,b.samples)}function Bt(b){const x=i.get(b);return r&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function qe(b){const x=a.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function Ye(b,x){const B=b.encoding,J=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===sr||B!==Li&&(B===Yt?r===!1?t.has("EXT_sRGB")===!0&&J===Oe?(b.format=sr,b.minFilter=Ee,b.generateMipmaps=!1):x=Ka.sRGBToLinear(x):(J!==Oe||et!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),x}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=N,this.setTexture2DArray=tt,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=ne,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Bt}function Af(o,t,e){const i=e.isWebGL2;function n(s,a=null){let r;if(s===Ri)return 5121;if(s===el)return 32819;if(s===il)return 32820;if(s===Jo)return 5120;if(s===Qo)return 5122;if(s===qa)return 5123;if(s===tl)return 5124;if(s===wi)return 5125;if(s===Ti)return 5126;if(s===An)return i?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===nl)return 6406;if(s===Oe)return 6408;if(s===rl)return 6409;if(s===al)return 6410;if(s===Ci)return 6402;if(s===hn)return 34041;if(s===ol)return 6403;if(s===sl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===sr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===ll)return 36244;if(s===cl)return 33319;if(s===hl)return 33320;if(s===ul)return 36249;if(s===ys||s===Ms||s===Ss||s===bs)if(a===Yt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ss)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cr||s===Pr||s===Rr||s===Lr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dl)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dr||s===Ir)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Dr)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Ir)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fr||s===zr||s===Nr||s===Or||s===Ur||s===Br||s===kr||s===Vr||s===Gr||s===Wr||s===Hr||s===Xr||s===qr||s===Yr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Fr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Or)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ur)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Br)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===jr)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===an?i?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}class Cf extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ai extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const T=new Ai;T.matrixAutoUpdate=!1,T.visible=!1,c.joints[p.jointName]=T,c.add(T)}const _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Rf extends Be{constructor(t,e,i,n,s,a,r,l,c,h){if(h=h!==void 0?h:Ci,h!==Ci&&h!==hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ci&&(i=wi),i===void 0&&h===hn&&(i=an),super(null,n,s,a,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:pe,this.minFilter=l!==void 0?l:pe,this.flipY=!1,this.generateMipmaps=!1}}class Lf extends pi{constructor(t,e){super();const i=this;let n=null,s=1,a=null,r="local-floor",l=null,c=null,h=null,u=null,d=null,m=null;const g=e.getContextAttributes();let p=null,f=null;const _=[],T=[],S=new Ae;S.layers.enable(1),S.viewport=new re;const w=new Ae;w.layers.enable(2),w.viewport=new re;const M=[S,w],C=new Cf;C.layers.enable(1),C.layers.enable(2);let z=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=_[D];return N===void 0&&(N=new Ks,_[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=_[D];return N===void 0&&(N=new Ks,_[D]=N),N.getGripSpace()},this.getHand=function(D){let N=_[D];return N===void 0&&(N=new Ks,_[D]=N),N.getHandSpace()};function E(D){const N=T.indexOf(D.inputSource);if(N===-1)return;const tt=_[N];tt!==void 0&&tt.dispatchEvent({type:D.type,data:D.inputSource})}function F(){n.removeEventListener("select",E),n.removeEventListener("selectstart",E),n.removeEventListener("selectend",E),n.removeEventListener("squeeze",E),n.removeEventListener("squeezestart",E),n.removeEventListener("squeezeend",E),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",q);for(let D=0;D<_.length;D++){const N=T[D];N!==null&&(T[D]=null,_[D].disconnect(N))}z=null,v=null,t.setRenderTarget(p),d=null,u=null,h=null,n=null,f=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(D){if(n=D,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",E),n.addEventListener("selectstart",E),n.addEventListener("selectend",E),n.addEventListener("squeeze",E),n.addEventListener("squeezestart",E),n.addEventListener("squeezeend",E),n.addEventListener("end",F),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,N),n.updateRenderState({baseLayer:d}),f=new Di(d.framebufferWidth,d.framebufferHeight,{format:Oe,type:Ri,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let N=null,tt=null,$=null;g.depth&&($=g.stencil?35056:33190,N=g.stencil?hn:Ci,tt=g.stencil?an:wi);const K={colorFormat:32856,depthFormat:$,scaleFactor:s};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(K),n.updateRenderState({layers:[u]}),f=new Di(u.textureWidth,u.textureHeight,{format:Oe,type:Ri,depthTexture:new Rf(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const lt=t.properties.get(f);lt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(r),G.setContext(n),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function q(D){for(let N=0;N<D.removed.length;N++){const tt=D.removed[N],$=T.indexOf(tt);$>=0&&(T[$]=null,_[$].dispatchEvent({type:"disconnected",data:tt}))}for(let N=0;N<D.added.length;N++){const tt=D.added[N];let $=T.indexOf(tt);if($===-1){for(let lt=0;lt<_.length;lt++)if(lt>=T.length){T.push(tt),$=lt;break}else if(T[lt]===null){T[lt]=tt,$=lt;break}if($===-1)break}const K=_[$];K&&K.dispatchEvent({type:"connected",data:tt})}}const at=new P,O=new P;function I(D,N,tt){at.setFromMatrixPosition(N.matrixWorld),O.setFromMatrixPosition(tt.matrixWorld);const $=at.distanceTo(O),K=N.projectionMatrix.elements,lt=tt.projectionMatrix.elements,Mt=K[14]/(K[10]-1),H=K[14]/(K[10]+1),Ut=(K[9]+1)/K[5],xt=(K[9]-1)/K[5],St=(K[8]-1)/K[0],ot=(lt[8]+1)/lt[0],Vt=Mt*St,At=Mt*ot,gt=$/(-St+ot),ne=gt*-St;N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ne),D.translateZ(gt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const de=Mt+gt,ce=H+gt,Ve=Vt-ne,se=At+($-ne),Bt=Ut*H/ce*de,qe=xt*H/ce*de;D.projectionMatrix.makePerspective(Ve,se,Bt,qe,de,ce)}function X(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(n===null)return;C.near=w.near=S.near=D.near,C.far=w.far=S.far=D.far,(z!==C.near||v!==C.far)&&(n.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,v=C.far);const N=D.parent,tt=C.cameras;X(C,N);for(let K=0;K<tt.length;K++)X(tt[K],N);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.matrix.copy(C.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const $=D.children;for(let K=0,lt=$.length;K<lt;K++)$[K].updateMatrixWorld(!0);tt.length===2?I(C,S,w):C.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(D){u!==null&&(u.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let j=null;function Z(D,N){if(c=N.getViewerPose(l||a),m=N,c!==null){const tt=c.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let $=!1;tt.length!==C.cameras.length&&(C.cameras.length=0,$=!0);for(let K=0;K<tt.length;K++){const lt=tt[K];let Mt=null;if(d!==null)Mt=d.getViewport(lt);else{const Ut=h.getViewSubImage(u,lt);Mt=Ut.viewport,K===0&&(t.setRenderTargetTextures(f,Ut.colorTexture,u.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(f))}let H=M[K];H===void 0&&(H=new Ae,H.layers.enable(K),H.viewport=new re,M[K]=H),H.matrix.fromArray(lt.transform.matrix),H.projectionMatrix.fromArray(lt.projectionMatrix),H.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),K===0&&C.matrix.copy(H.matrix),$===!0&&C.cameras.push(H)}}for(let tt=0;tt<_.length;tt++){const $=T[tt],K=_[tt];$!==null&&K!==void 0&&K.update($,N,l||a)}j&&j(D,N),m=null}const G=new so;G.setAnimationLoop(Z),this.setAnimationLoop=function(D){j=D},this.dispose=function(){}}}function Df(o,t){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,_,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(p,f):f.isMeshToonMaterial?(n(p,f),h(p,f)):f.isMeshPhongMaterial?(n(p,f),c(p,f)):f.isMeshStandardMaterial?(n(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,S)):f.isMeshMatcapMaterial?(n(p,f),m(p,f)):f.isMeshDepthMaterial?n(p,f):f.isMeshDistanceMaterial?(n(p,f),g(p,f)):f.isMeshNormalMaterial?n(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?r(p,f,_,T):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Pe&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Pe&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const w=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*w}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let T;f.map?T=f.map:f.specularMap?T=f.specularMap:f.displacementMap?T=f.displacementMap:f.normalMap?T=f.normalMap:f.bumpMap?T=f.bumpMap:f.roughnessMap?T=f.roughnessMap:f.metalnessMap?T=f.metalnessMap:f.alphaMap?T=f.alphaMap:f.emissiveMap?T=f.emissiveMap:f.clearcoatMap?T=f.clearcoatMap:f.clearcoatNormalMap?T=f.clearcoatNormalMap:f.clearcoatRoughnessMap?T=f.clearcoatRoughnessMap:f.iridescenceMap?T=f.iridescenceMap:f.iridescenceThicknessMap?T=f.iridescenceThicknessMap:f.specularIntensityMap?T=f.specularIntensityMap:f.specularColorMap?T=f.specularColorMap:f.transmissionMap?T=f.transmissionMap:f.thicknessMap?T=f.thicknessMap:f.sheenColorMap?T=f.sheenColorMap:f.sheenRoughnessMap&&(T=f.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let S;f.aoMap?S=f.aoMap:f.lightMap&&(S=f.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,_,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=T*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S;f.map?S=f.map:f.alphaMap&&(S=f.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Pe&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function If(o,t,e,i){let n={},s={},a=[];const r=e.isWebGL2?o.getParameter(35375):0;function l(T,S){const w=S.program;i.uniformBlockBinding(T,w)}function c(T,S){let w=n[T.id];w===void 0&&(g(T),w=h(T),n[T.id]=w,T.addEventListener("dispose",f));const M=S.program;i.updateUBOMapping(T,M);const C=t.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function h(T){const S=u();T.__bindingPointIndex=S;const w=o.createBuffer(),M=T.__size,C=T.usage;return o.bindBuffer(35345,w),o.bufferData(35345,M,C),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,w),w}function u(){for(let T=0;T<r;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=n[T.id],w=T.uniforms,M=T.__cache;o.bindBuffer(35345,S);for(let C=0,z=w.length;C<z;C++){const v=w[C];if(m(v,C,M)===!0){const E=v.value,F=v.__offset;typeof E=="number"?(v.__data[0]=E,o.bufferSubData(35345,F,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):E.toArray(v.__data),o.bufferSubData(35345,F,v.__data))}}o.bindBuffer(35345,null)}function m(T,S,w){const M=T.value;if(w[S]===void 0)return typeof M=="number"?w[S]=M:w[S]=M.clone(),!0;if(typeof M=="number"){if(w[S]!==M)return w[S]=M,!0}else{const C=w[S];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function g(T){const S=T.uniforms;let w=0;const M=16;let C=0;for(let z=0,v=S.length;z<v;z++){const E=S[z],F=p(E);if(E.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,z>0){C=w%M;const q=M-C;C!==0&&q-F.boundary<0&&(w+=M-C,E.__offset=w)}w+=F.storage}return C=w%M,C>0&&(w+=M-C),T.__size=w,T.__cache={},this}function p(T){const S=T.value,w={boundary:0,storage:0};return typeof S=="number"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function f(T){const S=T.target;S.removeEventListener("dispose",f);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),o.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function _(){for(const T in n)o.deleteBuffer(n[T]);a=[],n={},s={}}return{bind:l,update:c,dispose:_}}function Ff(){const o=cs("canvas");return o.style.display="block",o}function co(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Ff(),e=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,T=0,S=null,w=-1,M=null;const C=new re,z=new re;let v=null,E=t.width,F=t.height,q=1,at=null,O=null;const I=new re(0,0,E,F),X=new re(0,0,E,F);let j=!1;const Z=new no;let G=!1,D=!1,N=null;const tt=new Pt,$=new Dt,K=new P,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return S===null?q:1}let H=e;function Ut(y,L){for(let U=0;U<y.length;U++){const R=y[U],V=t.getContext(R,L);if(V!==null)return V}return null}try{const y={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cr}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),H===null){const L=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&L.shift(),H=Ut(L,y),H===null)throw Ut(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let xt,St,ot,Vt,At,gt,ne,de,ce,Ve,se,Bt,qe,Ye,b,x,B,J,et,nt,vt,st,W,pt;function _t(){xt=new Hu(H),St=new Ou(H,xt,o),xt.init(St),st=new Af(H,xt,St),ot=new Tf(H,xt,St),Vt=new Yu,At=new uf,gt=new Ef(H,xt,ot,At,St,st,Vt),ne=new Bu(p),de=new Wu(p),ce=new ec(H,St),W=new zu(H,xt,ce,St),Ve=new Xu(H,ce,Vt,W),se=new $u(H,Ve,ce,Vt),et=new Ku(H,St,gt),x=new Uu(At),Bt=new hf(p,ne,de,xt,St,W,x),qe=new Df(p,At),Ye=new ff,b=new vf(xt,St),J=new Fu(p,ne,de,ot,se,h,a),B=new wf(p,se,St),pt=new If(H,Vt,St,ot),nt=new Nu(H,xt,Vt,St),vt=new qu(H,xt,Vt,St),Vt.programs=Bt.programs,p.capabilities=St,p.extensions=xt,p.properties=At,p.renderLists=Ye,p.shadowMap=B,p.state=ot,p.info=Vt}_t();const ct=new Lf(p,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(E,F,!1))},this.getSize=function(y){return y.set(E,F)},this.setSize=function(y,L,U){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=y,F=L,t.width=Math.floor(y*q),t.height=Math.floor(L*q),U!==!1&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(E*q,F*q).floor()},this.setDrawingBufferSize=function(y,L,U){E=y,F=L,q=U,t.width=Math.floor(y*U),t.height=Math.floor(L*U),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(I)},this.setViewport=function(y,L,U,R){y.isVector4?I.set(y.x,y.y,y.z,y.w):I.set(y,L,U,R),ot.viewport(C.copy(I).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(X)},this.setScissor=function(y,L,U,R){y.isVector4?X.set(y.x,y.y,y.z,y.w):X.set(y,L,U,R),ot.scissor(z.copy(X).multiplyScalar(q).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(y){ot.setScissorTest(j=y)},this.setOpaqueSort=function(y){at=y},this.setTransparentSort=function(y){O=y},this.getClearColor=function(y){return y.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(y=!0,L=!0,U=!0){let R=0;y&&(R|=16384),L&&(R|=256),U&&(R|=1024),H.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ye.dispose(),b.dispose(),At.dispose(),ne.dispose(),de.dispose(),se.dispose(),W.dispose(),pt.dispose(),Bt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",rt),ct.removeEventListener("sessionend",ht),N&&(N.dispose(),N=null),It.stop()};function mt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const y=Vt.autoReset,L=B.enabled,U=B.autoUpdate,R=B.needsUpdate,V=B.type;_t(),Vt.autoReset=y,B.enabled=L,B.autoUpdate=U,B.needsUpdate=R,B.type=V}function Lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Wt(y){const L=y.target;L.removeEventListener("dispose",Wt),te(L)}function te(y){A(y),At.remove(y)}function A(y){const L=At.get(y).programs;L!==void 0&&(L.forEach(function(U){Bt.releaseProgram(U)}),y.isShaderMaterial&&Bt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,U,R,V,ft){L===null&&(L=lt);const yt=V.isMesh&&V.matrixWorld.determinant()<0,Et=go(y,L,U,R,V);ot.setMaterial(R,yt);let wt=U.index;const Ft=U.attributes.position;if(wt===null){if(Ft===void 0||Ft.count===0)return}else if(wt.count===0)return;let Ct=1;R.wireframe===!0&&(wt=Ve.getWireframeAttribute(U),Ct=2),W.setup(V,R,Et,U,wt);let Rt,Xt=nt;wt!==null&&(Rt=ce.get(wt),Xt=vt,Xt.setIndex(Rt));const gi=wt!==null?wt.count:Ft.count,Ni=U.drawRange.start*Ct,Oi=U.drawRange.count*Ct,Ge=ft!==null?ft.start*Ct:0,zt=ft!==null?ft.count*Ct:1/0,Ui=Math.max(Ni,Ge),jt=Math.min(gi,Ni+Oi,Ge+zt)-1,be=Math.max(0,jt-Ui+1);if(be!==0){if(V.isMesh)R.wireframe===!0?(ot.setLineWidth(R.wireframeLinewidth*Mt()),Xt.setMode(1)):Xt.setMode(4);else if(V.isLine){let ni=R.linewidth;ni===void 0&&(ni=1),ot.setLineWidth(ni*Mt()),V.isLineSegments?Xt.setMode(1):V.isLineLoop?Xt.setMode(2):Xt.setMode(3)}else V.isPoints?Xt.setMode(0):V.isSprite&&Xt.setMode(4);if(V.isInstancedMesh)Xt.renderInstances(Ui,be,V.count);else if(U.isInstancedBufferGeometry){const ni=Math.min(U.instanceCount,U._maxInstanceCount);Xt.renderInstances(Ui,be,ni)}else Xt.render(Ui,be)}},this.compile=function(y,L){function U(R,V,ft){R.transparent===!0&&R.side===di?(R.side=Pe,R.needsUpdate=!0,Se(R,V,ft),R.side=on,R.needsUpdate=!0,Se(R,V,ft),R.side=di):Se(R,V,ft)}d=b.get(y),d.init(),g.push(d),y.traverseVisible(function(R){R.isLight&&R.layers.test(L.layers)&&(d.pushLight(R),R.castShadow&&d.pushShadow(R))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(R){const V=R.material;if(V)if(Array.isArray(V))for(let ft=0;ft<V.length;ft++){const yt=V[ft];U(yt,y,R)}else U(V,y,R)}),g.pop(),d=null};let k=null;function Y(y){k&&k(y)}function rt(){It.stop()}function ht(){It.start()}const It=new so;It.setAnimationLoop(Y),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(y){k=y,ct.setAnimationLoop(y),y===null?It.stop():It.start()},ct.addEventListener("sessionstart",rt),ct.addEventListener("sessionend",ht),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(L),L=ct.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,L,S),d=b.get(y,g.length),d.init(),g.push(d),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(tt),D=this.localClippingEnabled,G=x.init(this.clippingPlanes,D,L),u=Ye.get(y,m.length),u.init(),m.push(u),ee(y,L,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(at,O),G===!0&&x.beginShadows();const U=d.state.shadowsArray;if(B.render(U,y,L),G===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(u,y),d.setupLights(p.physicallyCorrectLights),L.isArrayCamera){const R=L.cameras;for(let V=0,ft=R.length;V<ft;V++){const yt=R[V];ae(u,y,yt,yt.viewport)}}else ae(u,y,L);S!==null&&(gt.updateMultisampleRenderTarget(S),gt.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(p,y,L),W.resetDefaultState(),w=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function ee(y,L,U,R){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)U=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){R&&K.setFromMatrixPosition(y.matrixWorld).applyMatrix4(tt);const yt=se.update(y),Et=y.material;Et.visible&&u.push(y,yt,Et,U,K.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Vt.render.frame&&(y.skeleton.update(),y.skeleton.frame=Vt.render.frame),!y.frustumCulled||Z.intersectsObject(y))){R&&K.setFromMatrixPosition(y.matrixWorld).applyMatrix4(tt);const yt=se.update(y),Et=y.material;if(Array.isArray(Et)){const wt=yt.groups;for(let Ft=0,Ct=wt.length;Ft<Ct;Ft++){const Rt=wt[Ft],Xt=Et[Rt.materialIndex];Xt&&Xt.visible&&u.push(y,yt,Xt,U,K.z,Rt)}}else Et.visible&&u.push(y,yt,Et,U,K.z,null)}}const ft=y.children;for(let yt=0,Et=ft.length;yt<Et;yt++)ee(ft[yt],L,U,R)}function ae(y,L,U,R){const V=y.opaque,ft=y.transmissive,yt=y.transparent;d.setupLightsView(U),ft.length>0&&mi(V,L,U),R&&ot.viewport(C.copy(R)),V.length>0&&Ht(V,L,U),ft.length>0&&Ht(ft,L,U),yt.length>0&&Ht(yt,L,U),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function mi(y,L,U){const R=St.isWebGL2;N===null&&(N=new Di(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?An:Ri,minFilter:ps,samples:R&&s===!0?4:0})),p.getDrawingBufferSize($),R?N.setSize($.x,$.y):N.setSize(ls($.x),ls($.y));const V=p.getRenderTarget();p.setRenderTarget(N),p.clear();const ft=p.toneMapping;p.toneMapping=ii,Ht(y,L,U),p.toneMapping=ft,gt.updateMultisampleRenderTarget(N),gt.updateRenderTargetMipmap(N),p.setRenderTarget(V)}function Ht(y,L,U){const R=L.isScene===!0?L.overrideMaterial:null;for(let V=0,ft=y.length;V<ft;V++){const yt=y[V],Et=yt.object,wt=yt.geometry,Ft=R===null?yt.material:R,Ct=yt.group;Et.layers.test(U.layers)&&je(Et,L,U,wt,Ft,Ct)}}function je(y,L,U,R,V,ft){y.onBeforeRender(p,L,U,R,V,ft),y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(p,L,U,R,y,ft),V.transparent===!0&&V.side===di?(V.side=Pe,V.needsUpdate=!0,p.renderBufferDirect(U,L,R,V,y,ft),V.side=on,V.needsUpdate=!0,p.renderBufferDirect(U,L,R,V,y,ft),V.side=di):p.renderBufferDirect(U,L,R,V,y,ft),y.onAfterRender(p,L,U,R,V,ft)}function Se(y,L,U){L.isScene!==!0&&(L=lt);const R=At.get(y),V=d.state.lights,ft=d.state.shadowsArray,yt=V.state.version,Et=Bt.getParameters(y,V.state,ft,L,U),wt=Bt.getProgramCacheKey(Et);let Ft=R.programs;R.environment=y.isMeshStandardMaterial?L.environment:null,R.fog=L.fog,R.envMap=(y.isMeshStandardMaterial?de:ne).get(y.envMap||R.environment),Ft===void 0&&(y.addEventListener("dispose",Wt),Ft=new Map,R.programs=Ft);let Ct=Ft.get(wt);if(Ct!==void 0){if(R.currentProgram===Ct&&R.lightsStateVersion===yt)return xr(y,Et),Ct}else Et.uniforms=Bt.getUniforms(y),y.onBuild(U,Et,p),y.onBeforeCompile(Et,p),Ct=Bt.acquireProgram(Et,wt),Ft.set(wt,Ct),R.uniforms=Et.uniforms;const Rt=R.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=x.uniform),xr(y,Et),R.needsLights=xo(y),R.lightsStateVersion=yt,R.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.directionalShadowMap.value=V.state.directionalShadowMap,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotShadowMap.value=V.state.spotShadowMap,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMap.value=V.state.pointShadowMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix);const Xt=Ct.getUniforms(),gi=is.seqWithValue(Xt.seq,Rt);return R.currentProgram=Ct,R.uniformsList=gi,Ct}function xr(y,L){const U=At.get(y);U.outputEncoding=L.outputEncoding,U.instancing=L.instancing,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function go(y,L,U,R,V){L.isScene!==!0&&(L=lt),gt.resetTextureUnits();const ft=L.fog,yt=R.isMeshStandardMaterial?L.environment:null,Et=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Li,wt=(R.isMeshStandardMaterial?de:ne).get(R.envMap||yt),Ft=R.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ct=!!R.normalMap&&!!U.attributes.tangent,Rt=!!U.morphAttributes.position,Xt=!!U.morphAttributes.normal,gi=!!U.morphAttributes.color,Ni=R.toneMapped?p.toneMapping:ii,Oi=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ge=Oi!==void 0?Oi.length:0,zt=At.get(R),Ui=d.state.lights;if(G===!0&&(D===!0||y!==M)){const ge=y===M&&R.id===w;x.setState(R,y,ge)}let jt=!1;R.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Ui.state.version||zt.outputEncoding!==Et||V.isInstancedMesh&&zt.instancing===!1||!V.isInstancedMesh&&zt.instancing===!0||V.isSkinnedMesh&&zt.skinning===!1||!V.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==wt||R.fog===!0&&zt.fog!==ft||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==x.numPlanes||zt.numIntersection!==x.numIntersection)||zt.vertexAlphas!==Ft||zt.vertexTangents!==Ct||zt.morphTargets!==Rt||zt.morphNormals!==Xt||zt.morphColors!==gi||zt.toneMapping!==Ni||St.isWebGL2===!0&&zt.morphTargetsCount!==Ge)&&(jt=!0):(jt=!0,zt.__version=R.version);let be=zt.currentProgram;jt===!0&&(be=Se(R,L,V));let ni=!1,gn=!1,_s=!1;const he=be.getUniforms(),_i=zt.uniforms;if(ot.useProgram(be.program)&&(ni=!0,gn=!0,_s=!0),R.id!==w&&(w=R.id,gn=!0),ni||M!==y){if(he.setValue(H,"projectionMatrix",y.projectionMatrix),St.logarithmicDepthBuffer&&he.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),M!==y&&(M=y,gn=!0,_s=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const ge=he.map.cameraPosition;ge!==void 0&&ge.setValue(H,K.setFromMatrixPosition(y.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&he.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||V.isSkinnedMesh)&&he.setValue(H,"viewMatrix",y.matrixWorldInverse)}if(V.isSkinnedMesh){he.setOptional(H,V,"bindMatrix"),he.setOptional(H,V,"bindMatrixInverse");const ge=V.skeleton;ge&&(St.floatVertexTextures?(ge.boneTexture===null&&ge.computeBoneTexture(),he.setValue(H,"boneTexture",ge.boneTexture,gt),he.setValue(H,"boneTextureSize",ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xs=U.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0&&St.isWebGL2===!0)&&et.update(V,U,R,be),(gn||zt.receiveShadow!==V.receiveShadow)&&(zt.receiveShadow=V.receiveShadow,he.setValue(H,"receiveShadow",V.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(_i.envMap.value=wt,_i.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),gn&&(he.setValue(H,"toneMappingExposure",p.toneMappingExposure),zt.needsLights&&_o(_i,_s),ft&&R.fog===!0&&qe.refreshFogUniforms(_i,ft),qe.refreshMaterialUniforms(_i,R,q,F,N),is.upload(H,zt.uniformsList,_i,gt)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(is.upload(H,zt.uniformsList,_i,gt),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&he.setValue(H,"center",V.center),he.setValue(H,"modelViewMatrix",V.modelViewMatrix),he.setValue(H,"normalMatrix",V.normalMatrix),he.setValue(H,"modelMatrix",V.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const ge=R.uniformsGroups;for(let vs=0,vo=ge.length;vs<vo;vs++)if(St.isWebGL2){const vr=ge[vs];pt.update(vr,be),pt.bind(vr,be)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return be}function _o(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function xo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,L,U){At.get(y.texture).__webglTexture=L,At.get(y.depthTexture).__webglTexture=U;const R=At.get(y);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=U===void 0,R.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,L){const U=At.get(y);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,U=0){S=y,_=L,T=U;let R=!0,V=null,ft=!1,yt=!1;if(y){const wt=At.get(y);wt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),R=!1):wt.__webglFramebuffer===void 0?gt.setupRenderTarget(y):wt.__hasExternalTextures&&gt.rebindTextures(y,At.get(y.texture).__webglTexture,At.get(y.depthTexture).__webglTexture);const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(yt=!0);const Ct=At.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(V=Ct[L],ft=!0):St.isWebGL2&&y.samples>0&&gt.useMultisampledRTT(y)===!1?V=At.get(y).__webglMultisampledFramebuffer:V=Ct,C.copy(y.viewport),z.copy(y.scissor),v=y.scissorTest}else C.copy(I).multiplyScalar(q).floor(),z.copy(X).multiplyScalar(q).floor(),v=j;if(ot.bindFramebuffer(36160,V)&&St.drawBuffers&&R&&ot.drawBuffers(y,V),ot.viewport(C),ot.scissor(z),ot.setScissorTest(v),ft){const wt=At.get(y.texture);H.framebufferTexture2D(36160,36064,34069+L,wt.__webglTexture,U)}else if(yt){const wt=At.get(y.texture),Ft=L||0;H.framebufferTextureLayer(36160,36064,wt.__webglTexture,U||0,Ft)}w=-1},this.readRenderTargetPixels=function(y,L,U,R,V,ft,yt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){ot.bindFramebuffer(36160,Et);try{const wt=y.texture,Ft=wt.format,Ct=wt.type;if(Ft!==Oe&&st.convert(Ft)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=Ct===An&&(xt.has("EXT_color_buffer_half_float")||St.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ct!==Ri&&st.convert(Ct)!==H.getParameter(35738)&&!(Ct===Ti&&(St.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-R&&U>=0&&U<=y.height-V&&H.readPixels(L,U,R,V,st.convert(Ft),st.convert(Ct),ft)}finally{const wt=S!==null?At.get(S).__webglFramebuffer:null;ot.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(y,L,U=0){const R=Math.pow(2,-U),V=Math.floor(L.image.width*R),ft=Math.floor(L.image.height*R);gt.setTexture2D(L,0),H.copyTexSubImage2D(3553,U,0,0,y.x,y.y,V,ft),ot.unbindTexture()},this.copyTextureToTexture=function(y,L,U,R=0){const V=L.image.width,ft=L.image.height,yt=st.convert(U.format),Et=st.convert(U.type);gt.setTexture2D(U,0),H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment),L.isDataTexture?H.texSubImage2D(3553,R,y.x,y.y,V,ft,yt,Et,L.image.data):L.isCompressedTexture?H.compressedTexSubImage2D(3553,R,y.x,y.y,L.mipmaps[0].width,L.mipmaps[0].height,yt,L.mipmaps[0].data):H.texSubImage2D(3553,R,y.x,y.y,yt,Et,L.image),R===0&&U.generateMipmaps&&H.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(y,L,U,R,V=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=y.max.x-y.min.x+1,yt=y.max.y-y.min.y+1,Et=y.max.z-y.min.z+1,wt=st.convert(R.format),Ft=st.convert(R.type);let Ct;if(R.isData3DTexture)gt.setTexture3D(R,0),Ct=32879;else if(R.isDataArrayTexture)gt.setTexture2DArray(R,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,R.flipY),H.pixelStorei(37441,R.premultiplyAlpha),H.pixelStorei(3317,R.unpackAlignment);const Rt=H.getParameter(3314),Xt=H.getParameter(32878),gi=H.getParameter(3316),Ni=H.getParameter(3315),Oi=H.getParameter(32877),Ge=U.isCompressedTexture?U.mipmaps[0]:U.image;H.pixelStorei(3314,Ge.width),H.pixelStorei(32878,Ge.height),H.pixelStorei(3316,y.min.x),H.pixelStorei(3315,y.min.y),H.pixelStorei(32877,y.min.z),U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Ct,V,L.x,L.y,L.z,ft,yt,Et,wt,Ft,Ge.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ct,V,L.x,L.y,L.z,ft,yt,Et,wt,Ge.data)):H.texSubImage3D(Ct,V,L.x,L.y,L.z,ft,yt,Et,wt,Ft,Ge),H.pixelStorei(3314,Rt),H.pixelStorei(32878,Xt),H.pixelStorei(3316,gi),H.pixelStorei(3315,Ni),H.pixelStorei(32877,Oi),V===0&&R.generateMipmaps&&H.generateMipmap(Ct),ot.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?gt.setTextureCube(y,0):y.isData3DTexture?gt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?gt.setTexture2DArray(y,0):gt.setTexture2D(y,0),ot.unbindTexture()},this.resetState=function(){_=0,T=0,S=null,ot.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zf extends co{}zf.prototype.isWebGL1Renderer=!0;class Nf extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class En extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ra=new P,La=new P,Da=new Pt,$s=new dr,Jn=new Pn;class ns extends me{constructor(t=new ye,e=new En){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Ra.fromBufferAttribute(e,n-1),La.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ra.distanceTo(La);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jn.copy(i.boundingSphere),Jn.applyMatrix4(n),Jn.radius+=s,t.ray.intersectsSphere(Jn)===!1)return;Da.copy(n).invert(),$s.copy(t.ray).applyMatrix4(Da);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){const _=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let S=_,w=T-1;S<w;S+=m){const M=g.getX(S),C=g.getX(S+1);if(c.fromBufferAttribute(f,M),h.fromBufferAttribute(f,C),$s.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),T=Math.min(f.count,a.start+a.count);for(let S=_,w=T-1;S<w;S+=m){if(c.fromBufferAttribute(f,S),h.fromBufferAttribute(f,S+1),$s.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Ia=new P,Fa=new P;class Of extends ns{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ia.fromBufferAttribute(e,n),Fa.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ia.distanceTo(Fa);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uf{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let r=0,l=s-1,c;for(;r<=l;)if(n=Math.floor(r+(l-r)/2),c=i[n]-a,c<0)r=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,m=(a-h)/d;return(n+m)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),r=this.getPoint(s),l=e||(a.isVector2?new Dt:new P);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,n=[],s=[],a=[],r=new P,l=new Pt;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),r.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],r),a[0].crossVectors(n[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),r.crossVectors(n[m-1],n[m]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(le(n[m-1].dot(n[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(r,g))}a[m].crossVectors(n[m],s[m])}if(e===!0){let m=Math.acos(le(s[0].dot(s[t]),-1,1));m/=t,n[0].dot(r.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qn extends Uf{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(t,e){const i=e||new Dt,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const r=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}function ui(o,t,e){return ho(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function ts(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function ho(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Bf(o){function t(n,s){return o[n]-o[s]}const e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function za(o,t,e){const i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){const r=e[s]*t;for(let l=0;l!==t;++l)n[a++]=o[r+l]}return n}function uo(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=o[n++];while(s!==void 0)}class gs{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let r=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){const r=e[1];t<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){const r=i+a>>>1;t<e[r]?a=r:i=r+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kf extends gs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:en,endingEnd:en}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case nn:s=t,r=2*e-i;break;case as:s=n.length-2,r=e+n[s]-n[s+1];break;default:s=t,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nn:a=t,l=2*i-e;break;case as:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(n-e),p=g*g,f=p*g,_=-d*f+2*d*p-d*g,T=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,S=(-1-m)*f+(1.5+m)*p+.5*g,w=m*f-m*p;for(let M=0;M!==r;++M)s[M]=_*a[h+M]+T*a[c+M]+S*a[l+M]+w*a[u+M];return s}}class fo extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==r;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Vf extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class ke{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ts(e,this.TimeBufferType),this.values=ts(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ts(t.times,Array),values:ts(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case rs:e=this.InterpolantFactoryMethodLinear;break;case ws:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return ws}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=ui(i,s,a),this.values=ui(this.values,s*r,a*r)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){const l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(n!==void 0&&ho(n))for(let r=0,l=n.length;r!==l;++r){const c=n[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){const t=ui(this.times),e=ui(this.values),i=this.getValueSize(),n=this.getInterpolation()===ws,s=t.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(n)l=!0;else{const u=r*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){const p=e[u+g];if(p!==e[d+g]||p!==e[m+g]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];const u=r*i,d=a*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++a}}if(s>0){t[a]=t[s];for(let r=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=ui(t,0,a),this.values=ui(e,0,a*i)):(this.times=t,this.values=e),this}clone(){const t=ui(this.times,0),e=ui(this.values,0),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}ke.prototype.TimeBufferType=Float32Array;ke.prototype.ValueBufferType=Float32Array;ke.prototype.DefaultInterpolation=rs;class pn extends ke{}pn.prototype.ValueTypeName="bool";pn.prototype.ValueBufferType=Array;pn.prototype.DefaultInterpolation=ss;pn.prototype.InterpolantFactoryMethodLinear=void 0;pn.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends ke{}po.prototype.ValueTypeName="color";class us extends ke{}us.prototype.ValueTypeName="number";class Gf extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-e)/(n-e);let c=t*r;for(let h=c+r;c!==h;c+=4)Me.slerpFlat(s,0,a,c-r,a,c,l);return s}}class Dn extends ke{InterpolantFactoryMethodLinear(t){return new Gf(this.times,this.values,this.getValueSize(),t)}}Dn.prototype.ValueTypeName="quaternion";Dn.prototype.DefaultInterpolation=rs;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;class mn extends ke{}mn.prototype.ValueTypeName="string";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=ss;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends ke{}ds.prototype.ValueTypeName="vector";class or{constructor(t,e=-1,i,n=hr){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=zi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,r=i.length;a!==r;++a)e.push(Hf(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(ke.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const h=Bf(l);l=za(l,1,h),c=za(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new us(".morphTargetInfluences["+e[r].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=t.length;r<l;r++){const c=t[r],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const r in n)a.push(this.CreateFromMorphTargetSequence(r,n[r],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,m,g,p){if(m.length!==0){const f=[],_=[];uo(m,f,_,g),f.length!==0&&p.push(new u(d,f,_))}},n=[],s=t.name||"default",a=t.fps||30,r=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(const p in m){const f=[],_=[];for(let T=0;T!==d[g].morphTargets.length;++T){const S=d[g];f.push(S.time),_.push(S.morphTarget===p?1:0)}n.push(new us(".morphTargetInfluence["+p+"]",f,_))}l=m.length*a}else{const m=".bones["+e[u].name+"]";i(ds,m+".position",d,"pos",n),i(Dn,m+".quaternion",d,"rot",n),i(ds,m+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,r)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wf(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return po;case"quaternion":return Dn;case"bool":case"boolean":return pn;case"string":return mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Hf(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Wf(o.type);if(o.times===void 0){const e=[],i=[];uo(o.keys,e,i,"value"),o.times=e,o.values=i}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}class Xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Na();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Na(){return(typeof performance>"u"?Date:performance).now()}class qf{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==n;++r)i[s+r]=i[r];a=e}else{a+=e;const r=e/a;this._mixBufferRegion(i,s,0,r,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){r.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){Me.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;Me.multiplyQuaternionsFlat(t,a,t,e,t,i),Me.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let r=0;r!==s;++r){const l=e+r;t[l]=t[l]*a+t[i+r]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const r=e+a;t[r]=t[r]+t[i+a]*n}}}const gr="\\[\\]\\.:\\/",Yf=new RegExp("["+gr+"]","g"),_r="[^"+gr+"]",jf="[^"+gr.replace("\\.","")+"]",Zf=/((?:WC+[\/:])*)/.source.replace("WC",_r),Kf=/(WCOD+)?/.source.replace("WCOD",jf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_r),Jf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_r),Qf=new RegExp("^"+Zf+Kf+$f+Jf+"$"),tp=["material","materials","bones","map"];class ep{constructor(t,e,i){const n=i||Ot.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Ot{constructor(t,e,i){this.path=e,this.parsedPath=i||Ot.parseTrackName(e),this.node=Ot.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Ot.Composite(t,e,i):new Ot(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(t){const e=Qf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);tp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===e||r.uuid===e)return r;const l=i(r.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=Ot.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=ep;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ip{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,r=new Array(a),l={endingStart:en,endingEnd:en};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);r[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const n=this._clip.duration,s=t._clip.duration,a=s/n,r=n/s;t.warp(1,a,e),this.warp(r,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=n._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,c=r.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),r=this._updateWeight(t);if(r>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ml:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(r);break;case hr:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,r)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===pl;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===Ya){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const r=Math.floor(n/e);n-=e*r,s+=Math.abs(r);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=nn,n.endingEnd=nn):(t?n.endingStart=this.zeroSlopeAtStart?nn:en:n.endingStart=as,e?n.endingEnd=this.zeroSlopeAtEnd?nn:en:n.endingEnd=as)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=s,l[0]=e,r[1]=s+t,l[1]=i,this}}const np=new Float32Array(1);class sp extends pi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,r=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],m=d.name;let g=h[m];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const p=e&&e._propertyBindings[u].binding.parsedPath;g=new qf(Ot.create(i,m,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),a[u]=g}r[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const r=a.knownActions;t._byClipCacheIndex=r.length,r.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,r=a[s],l=r.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=r.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,r=a[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete r[s],Object.keys(r).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new fo(new Float32Array(2),new Float32Array(2),1,np),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?or.findByName(n,t):t;const r=a!==null?a.uuid:t,l=this._actionsByClip[r];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=hr),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new ip(this,a,e,i);return this._bindAction(h,c),this._addInactiveAction(h,r,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?or.findByName(i,t):t,a=s?s.uuid:t,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,a);const r=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)r[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let r=0,l=a.length;r!==l;++r){const c=a[r];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const r=i[a].actionByRoot,l=r[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const r=s[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class mo{constructor(t,e,i=0,n=1/0){this.ray=new dr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return lr(t,this,i,e),i.sort(Oa),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)lr(t[n],this,i,e);return i.sort(Oa),i}}function Oa(o,t){return o.distance-t.distance}function lr(o,t,e,i){if(o.layers.test(t.layers)&&o.raycast(t,e),i===!0){const n=o.children;for(let s=0,a=n.length;s<a;s++)lr(n[s],t,e,!0)}}class rp extends Of{constructor(t=10,e=10,i=4473924,n=8947848){i=new kt(i),n=new kt(n);const s=e/2,a=t/e,r=t/2,l=[],c=[];for(let d=0,m=0,g=-r;d<=e;d++,g+=a){l.push(-r,0,g,r,0,g),l.push(g,0,-r,g,0,r);const p=d===s?i:n;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const h=new ye;h.setAttribute("position",new Ue(l,3)),h.setAttribute("color",new Ue(c,3));const u=new En({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cr);const ut={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Nt={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},bt={x:0,y:0},ve={camera:new Pt,gizmos:new Pt},Gt={type:"change"},Fe={type:"start"},Te={type:"end"},ap=new mo,Kt=new P,Ua=new Pt,Ba=new Pt,ze=new P;class op extends pi{constructor(e,i,n=null){super();Q(this,"onWindowResize",()=>{const e=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const i=this._tbRadius/e,s=new Qn(0,0,i,i).getPoints(this._curvePts),a=new ye().setFromPoints(s);for(const r in this._gizmos.children)this._gizmos.children[r].geometry=a;this.dispatchEvent(Gt)});Q(this,"onContextMenu",e=>{if(!!this.enabled){for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==2){e.preventDefault();break}}});Q(this,"onPointerCancel",()=>{this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Nt.NONE});Q(this,"onPointerDown",e=>{if(e.button==0&&e.isPrimary?(this._downValid=!0,this._downEvents.push(e),this._downStart=performance.now()):this._downValid=!1,e.pointerType=="touch"&&this._input!=Nt.CURSOR)switch(this._touchStart.push(e),this._touchCurrent.push(e),this._input){case Nt.NONE:this._input=Nt.ONE_FINGER,this.onSinglePanStart(e,"ROTATE"),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp);break;case Nt.ONE_FINGER:case Nt.ONE_FINGER_SWITCHED:this._input=Nt.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Nt.TWO_FINGER:this._input=Nt.MULT_FINGER,this.onTriplePanStart(e);break}else if(e.pointerType!="touch"&&this._input==Nt.NONE){let i=null;e.ctrlKey||e.metaKey?i="CTRL":e.shiftKey&&(i="SHIFT"),this._mouseOp=this.getOpFromAction(e.button,i),this._mouseOp!=null&&(window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this._input=Nt.CURSOR,this._button=e.button,this.onSinglePanStart(e,this._mouseOp))}});Q(this,"onPointerMove",e=>{if(e.pointerType=="touch"&&this._input!=Nt.CURSOR)switch(this._input){case Nt.ONE_FINGER:this.updateTouchEvent(e),this.onSinglePanMove(e,ut.ROTATE);break;case Nt.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],e)*this._devPxRatio>=this._switchSensibility){this._input=Nt.ONE_FINGER,this.updateTouchEvent(e),this.onSinglePanStart(e,"ROTATE");break}break;case Nt.TWO_FINGER:this.updateTouchEvent(e),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Nt.MULT_FINGER:this.updateTouchEvent(e),this.onTriplePanMove(e);break}else if(e.pointerType!="touch"&&this._input==Nt.CURSOR){let i=null;e.ctrlKey||e.metaKey?i="CTRL":e.shiftKey&&(i="SHIFT");const n=this.getOpStateFromAction(this._button,i);n!=null&&this.onSinglePanMove(e,n)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],e)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)});Q(this,"onPointerUp",e=>{if(e.pointerType=="touch"&&this._input!=Nt.CURSOR){const i=this._touchCurrent.length;for(let n=0;n<i;n++)if(this._touchCurrent[n].pointerId==e.pointerId){this._touchCurrent.splice(n,1),this._touchStart.splice(n,1);break}switch(this._input){case Nt.ONE_FINGER:case Nt.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Nt.NONE,this.onSinglePanEnd();break;case Nt.TWO_FINGER:this.onDoublePanEnd(e),this.onPinchEnd(e),this.onRotateEnd(e),this._input=Nt.ONE_FINGER_SWITCHED;break;case Nt.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Nt.NONE,this.onTriplePanEnd());break}}else e.pointerType!="touch"&&this._input==Nt.CURSOR&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Nt.NONE,this.onSinglePanEnd(),this._button=-1);if(e.isPrimary)if(this._downValid)if(e.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const n=e.timeStamp-this._clickStart,s=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;n<=this._maxInterval&&s<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(e)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)});Q(this,"onWheel",e=>{if(this.enabled&&this.enableZoom){let i=null;e.ctrlKey||e.metaKey?i="CTRL":e.shiftKey&&(i="SHIFT");const n=this.getOpFromAction("WHEEL",i);if(n!=null){e.preventDefault(),this.dispatchEvent(Fe);const s=125;let a=e.deltaY/s,r=1;switch(a>0?r=1/this.scaleFactor:a<0&&(r=this.scaleFactor),n){case"ZOOM":if(this.updateTbState(ut.SCALE,!0),a>0?r=1/Math.pow(this.scaleFactor,a):a<0&&(r=Math.pow(this.scaleFactor,-a)),this.cursorZoom&&this.enablePan){let l;this.camera.isOrthographicCamera?l=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(l=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(r,l))}else this.applyTransformMatrix(this.scale(r,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Gt),this.dispatchEvent(Te);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(ut.FOV,!0),e.deltaX!=0&&(a=e.deltaX/s,r=1,a>0?r=1/Math.pow(this.scaleFactor,a):a<0&&(r=Math.pow(this.scaleFactor,-a))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let c=l/r;c=qt.clamp(c,this.minDistance,this.maxDistance);const h=l*Math.tan(qt.DEG2RAD*this.camera.fov*.5);let u=qt.RAD2DEG*(Math.atan(h/c)*2);u>this.maxFov?u=this.maxFov:u<this.minFov&&(u=this.minFov);const d=h/Math.tan(qt.DEG2RAD*(u/2));r=l/d,this.setFov(u),this.applyTransformMatrix(this.scale(r,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Gt),this.dispatchEvent(Te);break}}}});Q(this,"onSinglePanStart",(e,i)=>{if(this.enabled)switch(this.dispatchEvent(Fe),this.setCenter(e.clientX,e.clientY),i){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Gt)),this.updateTbState(ut.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Gt));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(ut.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,bt.x,bt.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Gt);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Gt)),this.updateTbState(ut.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Gt)),this.updateTbState(ut.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}});Q(this,"onSinglePanMove",(e,i)=>{if(this.enabled){const n=i!=this._state;switch(this.setCenter(e.clientX,e.clientY),i){case ut.PAN:this.enablePan&&(n?(this.dispatchEvent(Te),this.dispatchEvent(Fe),this.updateTbState(i,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case ut.ROTATE:if(this.enableRotate)if(n)this.dispatchEvent(Te),this.dispatchEvent(Fe),this.updateTbState(i,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,bt.x,bt.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,bt.x,bt.y,this.domElement,this._tbRadius));const s=this._startCursorPosition.distanceTo(this._currentCursorPosition),a=this._startCursorPosition.angleTo(this._currentCursorPosition),r=Math.max(s/this._tbRadius,a);this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),r)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=r,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case ut.SCALE:if(this.enableZoom)if(n)this.dispatchEvent(Te),this.dispatchEvent(Fe),this.updateTbState(i,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;a<0?r=1/Math.pow(this.scaleFactor,-a*8):a>0&&(r=Math.pow(this.scaleFactor,a*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(r,this._v3_1))}break;case ut.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(n)this.dispatchEvent(Te),this.dispatchEvent(Fe),this.updateTbState(i,!0),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;a<0?r=1/Math.pow(this.scaleFactor,-a*8):a>0&&(r=Math.pow(this.scaleFactor,a*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let c=l/r;c=qt.clamp(c,this.minDistance,this.maxDistance);const h=l*Math.tan(qt.DEG2RAD*this._fovState*.5);let u=qt.RAD2DEG*(Math.atan(h/c)*2);u=qt.clamp(u,this.minFov,this.maxFov);const d=h/Math.tan(qt.DEG2RAD*(u/2));r=l/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(u),this.applyTransformMatrix(this.scale(r,this._v3_2,!1)),Kt.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/l),this._m4_1.makeTranslation(Kt.x,Kt.y,Kt.z)}break}this.dispatchEvent(Gt)}});Q(this,"onSinglePanEnd",()=>{if(this._state==ut.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const i=Math.abs((this._wPrev+this._wCurr)/2),n=this;this._animationId=window.requestAnimationFrame(function(s){n.updateTbState(ut.ANIMATION_ROTATE,!0);const a=n.calculateRotationAxis(n._cursorPosPrev,n._cursorPosCurr);n.onRotationAnim(s,a,Math.min(i,n.wMax))})}else this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Gt);else this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Gt)}else(this._state==ut.PAN||this._state==ut.IDLE)&&(this.updateTbState(ut.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Gt));this.dispatchEvent(Te)});Q(this,"onDoubleTap",e=>{if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(Fe),this.setCenter(e.clientX,e.clientY);const i=this.unprojectOnObj(this.getCursorNDC(bt.x,bt.y,this.domElement),this.camera);if(i!=null&&this.enableAnimations){const n=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(s){n.updateTbState(ut.ANIMATION_FOCUS,!0),n.onFocusAnim(s,i,n._cameraMatrixState,n._gizmoMatrixState)})}else i!=null&&!this.enableAnimations&&(this.updateTbState(ut.FOCUS,!0),this.focus(i,this.scaleFactor),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Gt))}this.dispatchEvent(Te)});Q(this,"onDoublePanStart",()=>{this.enabled&&this.enablePan&&(this.dispatchEvent(Fe),this.updateTbState(ut.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))});Q(this,"onDoublePanMove",()=>{this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=ut.PAN&&(this.updateTbState(ut.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Gt))});Q(this,"onDoublePanEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Te)});Q(this,"onRotateStart",()=>{this.enabled&&this.enableRotate&&(this.dispatchEvent(Fe),this.updateTbState(ut.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))});Q(this,"onRotateMove",()=>{if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let e;this._state!=ut.ZROTATE&&(this.updateTbState(ut.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),e=this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):e=new P().setFromMatrixPosition(this._gizmoMatrixState);const i=qt.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(e,i)),this.dispatchEvent(Gt)}});Q(this,"onRotateEnd",()=>{this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Te)});Q(this,"onPinchStart",()=>{this.enabled&&this.enableZoom&&(this.dispatchEvent(Fe),this.updateTbState(ut.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))});Q(this,"onPinchMove",()=>{if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const e=12;this._state!=ut.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(ut.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),e*this._devPxRatio);const i=this._currentFingerDistance/this._startFingerDistance;let n;this.enablePan?this.camera.isOrthographicCamera?n=this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(n=this.unprojectOnTbPlane(this.camera,bt.x,bt.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):n=this._gizmos.position,this.applyTransformMatrix(this.scale(i,n)),this.dispatchEvent(Gt)}});Q(this,"onPinchEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Te)});Q(this,"onTriplePanStart",()=>{if(this.enabled&&this.enableZoom){this.dispatchEvent(Fe),this.updateTbState(ut.SCALE,!0);let e=0,i=0;const n=this._touchCurrent.length;for(let s=0;s<n;s++)e+=this._touchCurrent[s].clientX,i+=this._touchCurrent[s].clientY;this.setCenter(e/n,i/n),this._startCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}});Q(this,"onTriplePanMove",()=>{if(this.enabled&&this.enableZoom){let e=0,i=0;const n=this._touchCurrent.length;for(let m=0;m<n;m++)e+=this._touchCurrent[m].clientX,i+=this._touchCurrent[m].clientY;this.setCenter(e/n,i/n);const s=8;this._currentCursorPosition.setY(this.getCursorNDC(bt.x,bt.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;a<0?r=1/Math.pow(this.scaleFactor,-a*s):a>0&&(r=Math.pow(this.scaleFactor,a*s)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let c=l/r;c=qt.clamp(c,this.minDistance,this.maxDistance);const h=l*Math.tan(qt.DEG2RAD*this._fovState*.5);let u=qt.RAD2DEG*(Math.atan(h/c)*2);u=qt.clamp(u,this.minFov,this.maxFov);const d=h/Math.tan(qt.DEG2RAD*(u/2));r=l/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(u),this.applyTransformMatrix(this.scale(r,this._v3_2,!1)),Kt.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/l),this._m4_1.makeTranslation(Kt.x,Kt.y,Kt.z),this.dispatchEvent(Gt)}});Q(this,"onTriplePanEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Te)});Q(this,"setCenter",(e,i)=>{bt.x=e,bt.y=i});Q(this,"initializeMouseActions",()=>{this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")});Q(this,"compareMouseAction",(e,i)=>e.operation==i.operation?e.mouse==i.mouse&&e.key==i.key:!1);Q(this,"setMouseAction",(e,i,n=null)=>{const s=["PAN","ROTATE","ZOOM","FOV"],a=[0,1,2,"WHEEL"],r=["CTRL","SHIFT",null];let l;if(!s.includes(e)||!a.includes(i)||!r.includes(n)||i=="WHEEL"&&e!="ZOOM"&&e!="FOV")return!1;switch(e){case"PAN":l=ut.PAN;break;case"ROTATE":l=ut.ROTATE;break;case"ZOOM":l=ut.SCALE;break;case"FOV":l=ut.FOV;break}const c={operation:e,mouse:i,key:n,state:l};for(let h=0;h<this.mouseActions.length;h++)if(this.mouseActions[h].mouse==c.mouse&&this.mouseActions[h].key==c.key)return this.mouseActions.splice(h,1,c),!0;return this.mouseActions.push(c),!0});Q(this,"unsetMouseAction",(e,i=null)=>{for(let n=0;n<this.mouseActions.length;n++)if(this.mouseActions[n].mouse==e&&this.mouseActions[n].key==i)return this.mouseActions.splice(n,1),!0;return!1});Q(this,"getOpFromAction",(e,i)=>{let n;for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==i)return n.operation;if(i!=null){for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==null)return n.operation}return null});Q(this,"getOpStateFromAction",(e,i)=>{let n;for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==i)return n.state;if(i!=null){for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==null)return n.state}return null});Q(this,"getAngle",(e,i)=>Math.atan2(i.clientY-e.clientY,i.clientX-e.clientX)*180/Math.PI);Q(this,"updateTouchEvent",e=>{for(let i=0;i<this._touchCurrent.length;i++)if(this._touchCurrent[i].pointerId==e.pointerId){this._touchCurrent.splice(i,1,e);break}});Q(this,"calculateAngularSpeed",(e,i,n,s)=>{const a=i-e,r=(s-n)/1e3;return r==0?0:a/r});Q(this,"calculatePointersDistance",(e,i)=>Math.sqrt(Math.pow(i.clientX-e.clientX,2)+Math.pow(i.clientY-e.clientY,2)));Q(this,"calculateRotationAxis",(e,i)=>(this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(e,i).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()));Q(this,"calculateTbRadius",e=>{const i=e.position.distanceTo(this._gizmos.position);if(e.type=="PerspectiveCamera"){const n=qt.DEG2RAD*e.fov*.5,s=Math.atan(e.aspect*Math.tan(n));return Math.tan(Math.min(n,s))*i*this.radiusFactor}else if(e.type=="OrthographicCamera")return Math.min(e.top,e.right)*this.radiusFactor});Q(this,"focus",(e,i,n=1)=>{Kt.copy(e).sub(this._gizmos.position).multiplyScalar(n),this._translationMatrix.makeTranslation(Kt.x,Kt.y,Kt.z),Ua.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Ba.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(i,this._gizmos.position)),this._gizmoMatrixState.copy(Ua),this._cameraMatrixState.copy(Ba)});Q(this,"drawGrid",()=>{if(this.scene!=null){let n,s,a,r;if(this.camera.isOrthographicCamera){const l=this.camera.right-this.camera.left,c=this.camera.bottom-this.camera.top;a=Math.max(l,c),r=a/20,n=a/this.camera.zoom*3,s=n/r*this.camera.zoom}else if(this.camera.isPerspectiveCamera){const l=this.camera.position.distanceTo(this._gizmos.position),c=qt.DEG2RAD*this.camera.fov*.5,h=Math.atan(this.camera.aspect*Math.tan(c));a=Math.tan(Math.max(c,h))*l*2,r=a/20,n=a*3,s=n/r}this._grid==null&&(this._grid=new rp(n,s,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}});Q(this,"dispose",()=>{this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerCancel),this.domElement.removeEventListener("wheel",this.onWheel),this.domElement.removeEventListener("contextmenu",this.onContextMenu),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("resize",this.onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()});Q(this,"disposeGrid",()=>{this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)});Q(this,"easeOutCubic",e=>1-Math.pow(1-e,3));Q(this,"activateGizmos",e=>{const i=this._gizmos.children[0],n=this._gizmos.children[1],s=this._gizmos.children[2];e?(i.material.setValues({opacity:1}),n.material.setValues({opacity:1}),s.material.setValues({opacity:1})):(i.material.setValues({opacity:.6}),n.material.setValues({opacity:.6}),s.material.setValues({opacity:.6}))});Q(this,"getCursorNDC",(e,i,n)=>{const s=n.getBoundingClientRect();return this._v2_1.setX((e-s.left)/s.width*2-1),this._v2_1.setY((s.bottom-i)/s.height*2-1),this._v2_1.clone()});Q(this,"getCursorPosition",(e,i,n)=>(this._v2_1.copy(this.getCursorNDC(e,i,n)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()));Q(this,"setCamera",e=>{e.lookAt(this.target),e.updateMatrix(),e.type=="PerspectiveCamera"&&(this._fov0=e.fov,this._fovState=e.fov),this._cameraMatrixState0.copy(e.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(e.projectionMatrix),this._zoom0=e.zoom,this._zoomState=this._zoom0,this._initialNear=e.near,this._nearPos0=e.position.distanceTo(this.target)-e.near,this._nearPos=this._initialNear,this._initialFar=e.far,this._farPos0=e.position.distanceTo(this.target)-e.far,this._farPos=this._initialFar,this._up0.copy(e.up),this._upState.copy(e.up),this.camera=e,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(e),this.makeGizmos(this.target,this._tbRadius)});Q(this,"makeGizmos",(e,i)=>{const s=new Qn(0,0,i,i).getPoints(this._curvePts),a=new ye().setFromPoints(s),r=new En({color:16744576,fog:!1,transparent:!0,opacity:.6}),l=new En({color:8454016,fog:!1,transparent:!0,opacity:.6}),c=new En({color:8421631,fog:!1,transparent:!0,opacity:.6}),h=new ns(a,r),u=new ns(a,l),d=new ns(a,c),m=Math.PI*.5;if(h.rotation.x=m,u.rotation.y=m,this._gizmoMatrixState0.identity().setPosition(e),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const g=1/this.camera.zoom;this._scaleMatrix.makeScale(g,g,g),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(e.x,e.y,e.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(g){g.isLine&&(g.geometry.dispose(),g.material.dispose())}),this._gizmos.clear(),this._gizmos.add(h),this._gizmos.add(u),this._gizmos.add(d)});Q(this,"onFocusAnim",(e,i,n,s)=>{if(this._timeStart==-1&&(this._timeStart=e),this._state==ut.ANIMATION_FOCUS){const r=(e-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(s),r>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(i,this.scaleFactor),this._timeStart=-1,this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Gt);else{const l=this.easeOutCubic(r),c=1-l+this.scaleFactor*l;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(i,c,l),this.dispatchEvent(Gt);const h=this;this._animationId=window.requestAnimationFrame(function(u){h.onFocusAnim(u,i,n,s.clone())})}}else this._animationId=-1,this._timeStart=-1});Q(this,"onRotationAnim",(e,i,n)=>{if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=e),this._state==ut.ANIMATION_ROTATE){const s=(e-this._timeStart)/1e3;if(n+-this.dampingFactor*s>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(s,2)+n*s+0,this.applyTransformMatrix(this.rotate(i,this._angleCurrent)),this.dispatchEvent(Gt);const r=this;this._animationId=window.requestAnimationFrame(function(l){r.onRotationAnim(l,i,n)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Gt)}else this._animationId=-1,this._timeStart=-1,this._state!=ut.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Gt))});Q(this,"pan",(e,i,n=!1)=>{const s=e.clone().sub(i);if(this.camera.isOrthographicCamera)s.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&n){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const a=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);s.multiplyScalar(1/a)}return this._v3_1.set(s.x,s.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),ve});Q(this,"reset",()=>{this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Gt)});Q(this,"rotate",(e,i)=>{const n=this._gizmos.position;return this._translationMatrix.makeTranslation(-n.x,-n.y,-n.z),this._rotationMatrix.makeRotationAxis(e,-i),this._m4_1.makeTranslation(n.x,n.y,n.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),ve});Q(this,"copyState",()=>{let e;this.camera.isOrthographicCamera?e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(e)});Q(this,"pasteState",()=>{const e=this;navigator.clipboard.readText().then(function(n){e.setStateFromJSON(n)})});Q(this,"saveState",()=>{this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)});Q(this,"scale",(e,i,n=!0)=>{ze.copy(i);let s=1/e;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=e,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,s=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,s=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(s,s,s),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),ze.sub(this._v3_1);const a=ze.clone().multiplyScalar(s);return ze.sub(a),this._m4_1.makeTranslation(ze.x,ze.y,ze.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),ve}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let a=this._v3_1.distanceTo(ze),r=a-a*s;const l=a-r;if(l<this.minDistance?(s=this.minDistance/a,r=a-a*s):l>this.maxDistance&&(s=this.maxDistance/a,r=a-a*s),Kt.copy(ze).sub(this._v3_1).normalize().multiplyScalar(r),this._m4_1.makeTranslation(Kt.x,Kt.y,Kt.z),n){const c=this._v3_2;a=c.distanceTo(ze),r=a-a*s,Kt.copy(ze).sub(this._v3_2).normalize().multiplyScalar(r),this._translationMatrix.makeTranslation(c.x,c.y,c.z),this._scaleMatrix.makeScale(s,s,s),this._m4_2.makeTranslation(Kt.x,Kt.y,Kt.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-c.x,-c.y,-c.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return ve}});Q(this,"setFov",e=>{this.camera.isPerspectiveCamera&&(this.camera.fov=qt.clamp(e,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())});Q(this,"zRotate",(e,i)=>(this._rotationMatrix.makeRotationAxis(this._rotationAxis,i),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._m4_1.makeTranslation(e.x,e.y,e.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,i),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),ve));Q(this,"unprojectOnObj",(e,i)=>{const n=this.getRaycaster();n.near=i.near,n.far=i.far,n.setFromCamera(e,i);const s=n.intersectObjects(this.scene.children,!0);for(let a=0;a<s.length;a++)if(s[a].object.uuid!=this._gizmos.uuid&&s[a].face!=null)return s[a].point.clone();return null});Q(this,"unprojectOnTbSurface",(e,i,n,s,a)=>{if(e.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const r=Math.pow(this._v2_1.x,2),l=Math.pow(this._v2_1.y,2),c=Math.pow(this._tbRadius,2);return r+l<=c*.5?this._v3_1.setZ(Math.sqrt(c-(r+l))):this._v3_1.setZ(c*.5/Math.sqrt(r+l)),this._v3_1}else if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const r=this._v3_1.clone().normalize(),l=e.position.distanceTo(this._gizmos.position),c=Math.pow(a,2),h=this._v3_1.z,u=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(u==0)return r.set(this._v3_1.x,this._v3_1.y,a),r;const d=h/u,m=l;let g=Math.pow(d,2)+1,p=2*d*m,f=Math.pow(m,2)-c,_=Math.pow(p,2)-4*g*f;if(_>=0&&(this._v2_1.setX((-p-Math.sqrt(_))/(2*g)),this._v2_1.setY(d*this._v2_1.x+m),qt.RAD2DEG*this._v2_1.angle()>=45)){const w=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(l-this._v2_1.y,2));return r.multiplyScalar(w),r.z+=l,r}g=d,p=m,f=-c*.5,_=Math.pow(p,2)-4*g*f,this._v2_1.setX((-p-Math.sqrt(_))/(2*g)),this._v2_1.setY(d*this._v2_1.x+m);const T=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(l-this._v2_1.y,2));return r.multiplyScalar(T),r.z+=l,r}});Q(this,"unprojectOnTbPlane",(e,i,n,s,a=!1)=>{if(e.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const r=this._v3_1.clone().normalize(),l=this._v3_1.z,c=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let h;if(a?h=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):h=e.position.distanceTo(this._gizmos.position),c==0)return r.set(0,0,0),r;const u=l/c,d=h,m=-d/u,g=Math.sqrt(Math.pow(d,2)+Math.pow(m,2));return r.multiplyScalar(g),r.z=0,r}});Q(this,"updateMatrixState",()=>{this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)});Q(this,"updateTbState",(e,i)=>{this._state=e,i&&this.updateMatrixState()});Q(this,"update",()=>{if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const i=qt.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(i/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){const i=this.camera.position.distanceTo(this._gizmos.position);if(i>this.maxDistance+1e-6||i<this.minDistance-1e-6){const s=qt.clamp(i,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(s/i,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=qt.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const n=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),n<this._tbRadius-1e-6||n>this._tbRadius+1e-6){const s=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,a=this._tbRadius/s,l=new Qn(0,0,a,a).getPoints(this._curvePts),c=new ye().setFromPoints(l);for(const h in this._gizmos.children)this._gizmos.children[h].geometry=c}}this.camera.lookAt(this._gizmos.position)});Q(this,"setStateFromJSON",e=>{const i=JSON.parse(e);if(i.arcballState!=null){this._cameraMatrixState.fromArray(i.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(i.arcballState.cameraUp),this.camera.near=i.arcballState.cameraNear,this.camera.far=i.arcballState.cameraFar,this.camera.zoom=i.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=i.arcballState.cameraFov),this._gizmoMatrixState.fromArray(i.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const n=new Pt().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(n),this.camera.lookAt(this._gizmos.position),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Gt)}});this.camera=null,this.domElement=i,this.scene=n,this.target=new P,this._currentTarget=new P,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new Dt,this._v3_1=new P,this._v3_2=new P,this._m4_1=new Pt,this._m4_2=new Pt,this._quat=new Me,this._translationMatrix=new Pt,this._rotationMatrix=new Pt,this._scaleMatrix=new Pt,this._rotationAxis=new P,this._cameraMatrixState=new Pt,this._cameraProjectionState=new Pt,this._fovState=1,this._upState=new P,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Pt,this._up0=new P,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Pt,this._gizmoMatrixState0=new Pt,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Nt.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new P,this._startCursorPosition=new P,this._grid=null,this._gridPosition=new P,this._gizmos=new Ai,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new P,this._cursorPosCurr=new P,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=ut.IDLE,this.setCamera(e),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("wheel",this.onWheel),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),window.addEventListener("resize",this.onWindowResize)}applyTransformMatrix(e){if(e.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==ut.ROTATE||this._state==ut.ZROTATE||this._state==ut.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),e.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==ut.SCALE||this._state==ut.FOCUS||this._state==ut.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const i=this.camera.position.distanceTo(this._gizmos.position),n=new dn;n.setFromObject(this._gizmos);const s=new Pn;n.getBoundingSphere(s);const a=Math.max(this._nearPos0,s.radius+s.center.length()),r=i-this._initialNear,l=Math.min(a,r);this.camera.near=i-l;const c=Math.min(this._farPos0,-s.radius+s.center.length()),h=i-this._initialFar,u=Math.min(c,h);this.camera.far=i-u,this.camera.updateProjectionMatrix()}else{let i=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,i=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,i=!0),i&&this.camera.updateProjectionMatrix()}}setGizmosVisible(e){this._gizmos.visible=e,this.dispatchEvent(Gt)}setTbRadius(e){this.radiusFactor=e,this._tbRadius=this.calculateTbRadius(this.camera);const n=new Qn(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),s=new ye().setFromPoints(n);for(const a in this._gizmos.children)this._gizmos.children[a].geometry=s;this.dispatchEvent(Gt)}setTransformationMatrices(e=null,i=null){e!=null?ve.camera!=null?ve.camera.copy(e):ve.camera=e.clone():ve.camera=null,i!=null?ve.gizmos!=null?ve.gizmos.copy(i):ve.gizmos=i.clone():ve.gizmos=null}getRaycaster(){return ap}}const Qi=1,lp=[15401030,4587765,44251,62743,14378240,15456512],Js=.95,ka=.2;class cp{constructor(t,e){Q(this,"raycaster");Q(this,"controls");Q(this,"domEl");Q(this,"mouseXY");Q(this,"render");Q(this,"tempContainerForMouseDown");this.app=t,this.isAnimating=e,this.mouseXY={x:0,y:0},this.tempContainerForMouseDown={},this.domEl=this.app.renderer.domElement,this.raycaster=new mo,this.render=this.app.render.bind(this.app),this.initEventListener(),this.initControl()}initControl(){this.controls=new op(this.app.camera,this.domEl,this.app.scene),this.controls.addEventListener("change",this.render),this.stopControl(),this.controls.setGizmosVisible(!1)}getIntersectObjects(t){this.raycaster.setFromCamera(t,this.app.camera);const e=this.app.scene.children;return this.raycaster.intersectObjects(e,!1)}onMouseDown(){var r;const t={x:this.mouseXY.x,y:this.mouseXY.y};this.tempContainerForMouseDown.mouseStartPosition=t;const e=this.getIntersectObjects(t);if(e.length===0&&!this.isAnimating()){this.startControl();return}const i=(r=e[0])==null?void 0:r.object;if(!e[0]||!i||Cn.getCubePositionType(i.position)==="center")return;const s=Cn.getAxisByPointPosition(e[0].point);this.tempContainerForMouseDown.axisOfTouchedFace=s,this.tempContainerForMouseDown.positionOfTouchedCube=i.position;const a=this.doCubeRotateWhenMouseUp.bind(this);this.domEl.addEventListener("mouseup",a,{once:!0})}doCubeRotateWhenMouseUp(){const t={x:this.mouseXY.x,y:this.mouseXY.y},{mouseTrackvector:e}=this.getMouseTrackVector(t,this.tempContainerForMouseDown.mouseStartPosition),i=this.getCubeRotateData(e);this.app.cube.doRotate(i)}getCubeRotateData(t){const e=this.getAxisLineVectorToScreenVector(this.app.camera),i=this.tempContainerForMouseDown.axisOfTouchedFace,n=this.tempContainerForMouseDown.positionOfTouchedCube,s=this.getAxisToRotate(e,t,i);return{axis:s.axis,axisPosition:n[s.axis],direction:s.direction}}getAxisToRotate(t,e,i){const r=[{axis:"x",dotAbs:0,cross:0},{axis:"y",dotAbs:0,cross:0},{axis:"z",dotAbs:0,cross:0}].filter(h=>h.axis!==i).map(h=>{const u=e.dot(t[h.axis]),d=Math.abs(u),m=e.cross(t[h.axis]);return{axis:h.axis,dotAbs:d,cross:m}}).sort((h,u)=>h.dotAbs-u.dotAbs)[0],l=r.axis,c=r.cross>0?"counterclockwise":"clockwise";return{axis:l,direction:c}}getAxisLineVectorToScreenVector(t){const e=i=>{const n=new P(...i).project(t);return new Dt(n.x,n.y).normalize()};return{x:e([1,0,0]),y:e([0,1,0]),z:e([0,0,1])}}getMouseTrackVector(t,e){const i=new Dt(t.x-e.x,t.y-e.y);return{mouseTrackvectorLength:i.length(),mouseTrackvector:i}}stopControl(){this.controls.enabled=!1}startControl(){this.controls.enabled=!0}setMousePosition(t){this.mouseXY={x:t.clientX/window.innerWidth*2-1,y:-(t.clientY/window.innerHeight)*2+1}}initEventListener(){const t=this.onMouseDown.bind(this),e=this.stopControl.bind(this),i=this.setMousePosition.bind(this);this.domEl.addEventListener("mousedown",t,!1),this.domEl.addEventListener("mouseup",e,!1),this.domEl.addEventListener("mousemove",i,!1)}}class Cn{constructor(t,e,i,n){Q(this,"insideCubeColor");Q(this,"group");Q(this,"animateCubeGroup");this.scene=t,this.setMixer=e,this.cleanMixer=i,this.setIsAnimating=n,this.group=new Ai,this.insideCubeColor=lp.map(s=>new hs({color:s})),this.initBox()}static zeroCountInPosition(t){const{x:e,y:i,z:n}=t;let s=0;return n===0&&(s+=1),i===0&&(s+=1),e===0&&(s+=1),s}static getAxisByPointPosition(t){const e=Object.entries(t);return e.forEach(n=>n[1]=Math.abs(n[1])),e.sort((n,s)=>s[1]-n[1])[0][0]}static getCubePositionType(t){const e=Cn.zeroCountInPosition(t);return e===3?"center":e===2?"face":e===1?"side":"corner"}createCell(){const t=new Ii(Qi,Qi,Qi),e=new hs({opacity:0,transparent:!0}),i=new He(t,e),n=new Ii(Qi*Js,Qi*Js,Qi*Js),s=new He(n,this.insideCubeColor);return s.name="insideCube",i.add(s),i}doRotate(t){this.setIsAnimating(!0);const e=this.getCubeGroup(t.axis,t.axisPosition);this.animateRotate(e,t.axis,t.direction)}fixPosition(t){const e=[t.x,t.y,t.z].map(i=>{if(.5<i&&i<=1.5)return 1;if(-.5<i&&i<=.5)return 0;if(-1.5<=i&&i<=-.5)return-1});return{x:e[0],y:e[1],z:e[2]}}getFixedQuaternion(t){const e=t.clone(),i=[e.x,e.y,e.z,e.w].map(n=>{if(.8<n&&n<=1)return 1;if(.6<=n&&n<=.8)return .707;if(.2<n&&n<=.6)return .5;if(-.2<n&&n<=.2)return 0;if(-.6<n&&n<=-.2)return-.5;if(-.8<n&&n<=-.6)return-.707;if(-1<=n&&n<=-.8)return-1});return new Me(i[0],i[1],i[2],i[3])}animateRotate(t,e,i){const n=Math.PI/2*(i==="clockwise"?-1:1),s=new sp(t),a=[0,ka],r=e==="x"?new P(1,0,0):e==="y"?new P(0,1,0):new P(0,0,1),l=new Me().setFromAxisAngle(r,n),c=t.quaternion,h=new ke(".quaternion",a,[c.x,c.y,c.z,c.w,l.x,l.y,l.z,l.w]),u=new or("rotateGroup",ka,[h]),d=s.clipAction(u);this.setMixer(s);const m=()=>{const g=[];t.children.forEach(p=>{const f=p.getWorldPosition(new P),{x:_,y:T,z:S}=this.fixPosition(f);p.position.setX(_),p.position.setY(T),p.position.setZ(S);const w=p.getWorldQuaternion(new Me),M=this.getFixedQuaternion(w);p.quaternion.x=M.x,p.quaternion.y=M.y,p.quaternion.z=M.z,p.quaternion.w=M.w,g.push(p)}),this.scene.add(...g),this.scene.remove(t),s.removeEventListener("finished",m),this.setIsAnimating(!1),this.cleanMixer()};s.addEventListener("finished",m),d.setLoop(Ya,1),d.play()}getCubeGroup(t,e){const i=new Ai;i.name="cubeGroup",this.scene.add(i);const n=[];return this.scene.children.forEach(s=>{s.position[t]===e&&s.name==="cube"&&n.push(s)}),n.forEach(s=>i.add(s)),i}initBox(){for(let t=0;t<3;t++)for(let e=0;e<3;e++)for(let i=0;i<3;i++){const n=this.createCell();n.name="cube",n.position.setX(i-1),n.position.setY(e-1),n.position.setZ(t-1),this.scene.add(n)}}}class hp{constructor(){Q(this,"scene");Q(this,"camera");Q(this,"renderer");Q(this,"cube");Q(this,"axisLine");Q(this,"clock");Q(this,"isAnimating");Q(this,"mouseEventManager");Q(this,"mixer");this.isAnimating=!1,this.clock=new Xf,this.renderer=this.setInitRenderer(),this.scene=this.setInitScene(),this.camera=this.setInitCamera(),this.appendDOM(this.renderer.domElement),this.mouseEventManager=this.setInitMouseEventManager(),this.cube=this.setInitCube(),this.animate()}setInitMouseEventManager(){const t=this.getIsAnimating.bind(this);return new cp(this,t)}setMixer(t){this.mixer=t}cleanMixer(){}setIsAnimating(t){this.isAnimating=t}getIsAnimating(){return this.isAnimating}animate(){const t=this;requestAnimationFrame(()=>{t.animate()}),t.render(),t.mixer&&t.mixer.update(t.clock.getDelta())}render(){this.renderer.render(this.scene,this.camera)}setInitCube(){const t=this.setMixer.bind(this),e=this.cleanMixer.bind(this),i=this.setIsAnimating.bind(this);return new Cn(this.scene,t,e,i)}setInitScene(){return new Nf}setInitCamera(){const t=new Ae(70,window.innerWidth/window.innerHeight,1,1e3);return t.position.z=5,t.position.x=5,t.position.y=5,t.lookAt(this.scene.position),t.updateMatrixWorld(),t}setInitRenderer(){const t=new co;return t.setPixelRatio(window.devicePixelRatio),t.setClearColor(new kt(16777215)),t.setSize(window.innerWidth,window.innerHeight),this.listenResize(),t}appendDOM(t){document.body.appendChild(t)}listenResize(){window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight)})}}new hp;
