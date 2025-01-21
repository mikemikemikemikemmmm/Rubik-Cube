var bo=Object.defineProperty;var To=(o,t,e)=>t in o?bo(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var $=(o,t,e)=>(To(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cr="146",yo=0,vr=1,Ao=2,Va=1,wo=2,Mn=3,on=0,Ce=1,di=2,fi=0,rn=1,Mr=2,br=3,Tr=4,Eo=5,tn=100,Po=101,Co=102,yr=103,Ar=104,Do=200,Lo=201,Io=202,Ro=203,ka=204,Wa=205,Go=206,Bo=207,Fo=208,No=209,Oo=210,zo=0,Ho=1,Uo=2,$s=3,Vo=4,ko=5,Wo=6,Xo=7,Xa=0,qo=1,Yo=2,ii=0,Ko=1,Zo=2,jo=3,Qo=4,Jo=5,qa=300,ln=301,cn=302,tr=303,er=304,fs=306,ir=1e3,Fe=1001,nr=1002,pe=1003,wr=1004,Er=1005,we=1006,$o=1007,ps=1008,Di=1009,tl=1010,el=1011,Ya=1012,il=1013,yi=1014,Ai=1015,En=1016,nl=1017,sl=1018,an=1020,rl=1021,al=1022,Ne=1023,ol=1024,ll=1025,Pi=1026,hn=1027,cl=1028,hl=1029,ul=1030,dl=1031,fl=1033,vs=33776,Ms=33777,bs=33778,Ts=33779,Pr=35840,Cr=35841,Dr=35842,Lr=35843,pl=36196,Ir=37492,Rr=37496,Gr=37808,Br=37809,Fr=37810,Nr=37811,Or=37812,zr=37813,Hr=37814,Ur=37815,Vr=37816,kr=37817,Wr=37818,Xr=37819,qr=37820,Yr=37821,Kr=36492,Ka=2200,ml=2201,gl=2202,ss=2300,rs=2301,ys=2302,en=2400,nn=2401,as=2402,hr=2500,_l=2501,Li=3e3,Yt=3001,xl=3200,Sl=3201,vl=0,Ml=1,ti="srgb",wi="srgb-linear",As=7680,bl=519,Zr=35044,jr="300 es",sr=1035;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qr=1234567;const yn=Math.PI/180,os=180/Math.PI;function Bi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oe[o&255]+oe[o>>8&255]+oe[o>>16&255]+oe[o>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[i&255]+oe[i>>8&255]+oe[i>>16&255]+oe[i>>24&255]).toLowerCase()}function le(o,t,e){return Math.max(t,Math.min(e,o))}function ur(o,t){return(o%t+t)%t}function Tl(o,t,e,i,n){return i+(o-t)*(n-i)/(e-t)}function yl(o,t,e){return o!==t?(e-o)/(t-o):0}function An(o,t,e){return(1-e)*o+e*t}function Al(o,t,e,i){return An(o,t,1-Math.exp(-e*i))}function wl(o,t=1){return t-Math.abs(ur(o,t*2)-t)}function El(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Pl(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Cl(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Dl(o,t){return o+Math.random()*(t-o)}function Ll(o){return o*(.5-Math.random())}function Il(o){o!==void 0&&(Qr=o);let t=Qr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rl(o){return o*yn}function Gl(o){return o*os}function rr(o){return(o&o-1)===0&&o!==0}function Bl(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ls(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Fl(o,t,e,i,n){const s=Math.cos,a=Math.sin,r=s(e/2),l=a(e/2),h=s((t+i)/2),u=a((t+i)/2),c=s((t-i)/2),d=a((t-i)/2),p=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":o.set(r*u,l*c,l*d,r*h);break;case"YZY":o.set(l*d,r*u,l*c,r*h);break;case"ZXZ":o.set(l*c,l*d,r*u,r*h);break;case"XZX":o.set(r*u,l*g,l*p,r*h);break;case"YXY":o.set(l*p,r*u,l*g,r*h);break;case"ZYZ":o.set(l*g,l*p,r*u,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function bn(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fe(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var qt=Object.freeze({__proto__:null,DEG2RAD:yn,RAD2DEG:os,generateUUID:Bi,clamp:le,euclideanModulo:ur,mapLinear:Tl,inverseLerp:yl,lerp:An,damp:Al,pingpong:wl,smoothstep:El,smootherstep:Pl,randInt:Cl,randFloat:Dl,randFloatSpread:Ll,seededRandom:Il,degToRad:Rl,radToDeg:Gl,isPowerOfTwo:rr,ceilPowerOfTwo:Bl,floorPowerOfTwo:ls,setQuaternionFromProperEuler:Fl,normalize:fe,denormalize:bn});class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,s,a,r,l,h){const u=this.elements;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],l=i[6],h=i[1],u=i[4],c=i[7],d=i[2],p=i[5],g=i[8],m=n[0],f=n[3],_=n[6],A=n[1],b=n[4],y=n[7],M=n[2],P=n[5],B=n[8];return s[0]=a*m+r*A+l*M,s[3]=a*f+r*b+l*P,s[6]=a*_+r*y+l*B,s[1]=h*m+u*A+c*M,s[4]=h*f+u*b+c*P,s[7]=h*_+u*y+c*B,s[2]=d*m+p*A+g*M,s[5]=d*f+p*b+g*P,s[8]=d*_+p*y+g*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*r*h-i*s*u+i*r*l+n*s*h-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],h=t[7],u=t[8],c=u*a-r*h,d=r*l-u*s,p=h*s-a*l,g=e*c+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=c*m,t[1]=(n*h-u*i)*m,t[2]=(r*i-n*a)*m,t[3]=d*m,t[4]=(u*e-n*l)*m,t[5]=(n*s-r*e)*m,t[6]=p*m,t[7]=(i*l-h*e)*m,t[8]=(a*e-i*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*r)+a+t,-n*h,n*l,-n*(-h*a+l*r)+r+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),n=this.elements,s=n[0],a=n[3],r=n[6],l=n[1],h=n[4],u=n[7];return n[0]=e*s+i*l,n[3]=e*a+i*h,n[6]=e*r+i*u,n[1]=-i*s+e*l,n[4]=-i*a+e*h,n[7]=-i*r+e*u,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Za(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function cs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ci(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function es(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ws={[ti]:{[wi]:Ci},[wi]:{[ti]:es}},De={legacyMode:!0,get workingColorSpace(){return wi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(ws[t]&&ws[t][e]!==void 0){const i=ws[t][e];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},Le={h:0,s:0,l:0},Rn={h:0,s:0,l:0};function Es(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Gn(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=wi){return this.r=t,this.g=e,this.b=i,De.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=wi){if(t=ur(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Es(a,s,t+1/3),this.g=Es(a,s,t),this.b=Es(a,s,t-1/3)}return De.toWorkingColorSpace(this,n),this}setStyle(t,e=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,De.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,De.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,h=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,h,u,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,De.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,De.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=ti){const i=ja[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return De.fromWorkingColorSpace(Gn(this,Qt),t),le(Qt.r*255,0,255)<<16^le(Qt.g*255,0,255)<<8^le(Qt.b*255,0,255)<<0}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=wi){De.fromWorkingColorSpace(Gn(this,Qt),e);const i=Qt.r,n=Qt.g,s=Qt.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let l,h;const u=(r+a)/2;if(r===a)l=0,h=0;else{const c=a-r;switch(h=u<=.5?c/(a+r):c/(2-a-r),a){case i:l=(n-s)/c+(n<s?6:0);break;case n:l=(s-i)/c+2;break;case s:l=(i-n)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=wi){return De.fromWorkingColorSpace(Gn(this,Qt),e),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=ti){return De.fromWorkingColorSpace(Gn(this,Qt),t),t!==ti?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Le),Le.h+=t,Le.s+=e,Le.l+=i,this.setHSL(Le.h,Le.s,Le.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Le),t.getHSL(Rn);const i=An(Le.h,Rn.h,e),n=An(Le.s,Rn.s,e),s=An(Le.l,Rn.l,e);return this.setHSL(i,n,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ht.NAMES=ja;let zi;class Qa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=cs("canvas")),zi.width=t.width,zi.height=t.height;const i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ja{constructor(t=null){this.isSource=!0,this.uuid=Bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Ps(n[a].image)):s.push(Ps(n[a]))}else s=Ps(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ps(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Qa.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nl=0;class ze extends pi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=Fe,n=Fe,s=we,a=ps,r=Ne,l=Di,h=1,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Bi(),this.name="",this.source=new Ja(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=qa;class re{constructor(t=0,e=0,i=0,n=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+m)<.1&&Math.abs(g+f)<.1&&Math.abs(h+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,y=(p+1)/2,M=(_+1)/2,P=(u+d)/4,B=(c+m)/4,S=(g+f)/4;return b>y&&b>M?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=P/i,s=B/i):y>M?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=P/n,s=S/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=B/s,n=S/s),this.set(i,n,s,e),this}let A=Math.sqrt((f-g)*(f-g)+(c-m)*(c-m)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(f-g)/A,this.y=(c-m)/A,this.z=(d-u)/A,this.w=Math.acos((h+p+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ii extends pi{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:we,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $a extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=pe,this.minFilter=pe,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=pe,this.minFilter=pe,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Me{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,r){let l=i[n+0],h=i[n+1],u=i[n+2],c=i[n+3];const d=s[a+0],p=s[a+1],g=s[a+2],m=s[a+3];if(r===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(r===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(c!==m||l!==d||h!==p||u!==g){let f=1-r;const _=l*d+h*p+u*g+c*m,A=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const M=Math.sqrt(b),P=Math.atan2(M,_*A);f=Math.sin(f*P)/M,r=Math.sin(r*P)/M}const y=r*A;if(l=l*f+d*y,h=h*f+p*y,u=u*f+g*y,c=c*f+m*y,f===1-r){const M=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=M,h*=M,u*=M,c*=M}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,n,s,a){const r=i[n],l=i[n+1],h=i[n+2],u=i[n+3],c=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=r*g+u*c+l*p-h*d,t[e+1]=l*g+u*d+h*c-r*p,t[e+2]=h*g+u*p+r*d-l*c,t[e+3]=u*g-r*c-l*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,h=r(i/2),u=r(n/2),c=r(s/2),d=l(i/2),p=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*c+h*p*g,this._y=h*p*c-d*u*g,this._z=h*u*g+d*p*c,this._w=h*u*c-d*p*g;break;case"YXZ":this._x=d*u*c+h*p*g,this._y=h*p*c-d*u*g,this._z=h*u*g-d*p*c,this._w=h*u*c+d*p*g;break;case"ZXY":this._x=d*u*c-h*p*g,this._y=h*p*c+d*u*g,this._z=h*u*g+d*p*c,this._w=h*u*c-d*p*g;break;case"ZYX":this._x=d*u*c-h*p*g,this._y=h*p*c+d*u*g,this._z=h*u*g-d*p*c,this._w=h*u*c+d*p*g;break;case"YZX":this._x=d*u*c+h*p*g,this._y=h*p*c+d*u*g,this._z=h*u*g-d*p*c,this._w=h*u*c-d*p*g;break;case"XZY":this._x=d*u*c-h*p*g,this._y=h*p*c-d*u*g,this._z=h*u*g+d*p*c,this._w=h*u*c+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=i+r+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-h)*p,this._z=(a-n)*p}else if(i>r&&i>c){const p=2*Math.sqrt(1+i-r-c);this._w=(u-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+h)/p}else if(r>c){const p=2*Math.sqrt(1+r-i-c);this._w=(s-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+c-i-r);this._w=(a-n)/p,this._x=(s+h)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+a*r+n*h-s*l,this._y=n*u+a*l+s*r-i*h,this._z=s*u+a*h+i*l-n*r,this._w=a*u-i*r-n*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),u=Math.atan2(h,r),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=a*c+this._w*d,this._x=i*c+this._x*d,this._y=n*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,l=t.w,h=l*e+a*n-r*i,u=l*i+r*e-s*n,c=l*n+s*i-a*e,d=-s*e-a*i-r*n;return this.x=h*l+d*-s+u*-r-c*-a,this.y=u*l+d*-a+c*-s-h*-r,this.z=c*l+d*-r+h*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new C,Jr=new Me;class dn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,h=t.length;l<h;l+=3){const u=t[l],c=t[l+1],d=t[l+2];u<e&&(e=u),c<i&&(i=c),d<n&&(n=d),u>s&&(s=u),c>a&&(a=c),d>r&&(r=d)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,h=t.count;l<h;l++){const u=t.getX(l),c=t.getY(l),d=t.getZ(l);u<e&&(e=u),c<i&&(i=c),d<n&&(n=d),u>s&&(s=u),c>a&&(a=c),d>r&&(r=d)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,r=s.count;a<r;a++)xi.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(xi)}else i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox),Ds.applyMatrix4(t.matrixWorld),this.union(Ds);const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),Bn.subVectors(this.max,_n),Hi.subVectors(t.a,_n),Ui.subVectors(t.b,_n),Vi.subVectors(t.c,_n),si.subVectors(Ui,Hi),ri.subVectors(Vi,Ui),Si.subVectors(Hi,Vi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Si.z,Si.y,si.z,0,-si.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-si.y,si.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!Ls(e,Hi,Ui,Vi,Bn)||(e=[1,0,0,0,1,0,0,0,1],!Ls(e,Hi,Ui,Vi,Bn))?!1:(Fn.crossVectors(si,ri),e=[Fn.x,Fn.y,Fn.z],Ls(e,Hi,Ui,Vi,Bn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return xi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new C,new C,new C,new C,new C,new C,new C,new C],xi=new C,Ds=new dn,Hi=new C,Ui=new C,Vi=new C,si=new C,ri=new C,Si=new C,_n=new C,Bn=new C,Fn=new C,vi=new C;function Ls(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){vi.fromArray(o,s);const r=n.x*Math.abs(vi.x)+n.y*Math.abs(vi.y)+n.z*Math.abs(vi.z),l=t.dot(vi),h=e.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>r)return!1}return!0}const zl=new dn,xn=new C,Is=new C;class Cn{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zl.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xn.subVectors(t,this.center);const e=xn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(xn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Is.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xn.copy(t.center).add(Is)),this.expandByPoint(xn.copy(t.center).sub(Is))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new C,Rs=new C,Nn=new C,ai=new C,Gs=new C,On=new C,Bs=new C;class dr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.direction).multiplyScalar(e).add(this.origin),je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Rs.copy(t).add(e).multiplyScalar(.5),Nn.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Rs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Nn),r=ai.dot(this.direction),l=-ai.dot(Nn),h=ai.lengthSq(),u=Math.abs(1-a*a);let c,d,p,g;if(u>0)if(c=a*l-r,d=a*r-l,g=s*u,c>=0)if(d>=-g)if(d<=g){const m=1/u;c*=m,d*=m,p=c*(c+a*d+2*r)+d*(a*c+d+2*l)+h}else d=s,c=Math.max(0,-(a*d+r)),p=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(a*d+r)),p=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-a*s+r)),d=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+h):(c=Math.max(0,-(a*s+r)),d=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+h);else d=a>0?-s:s,c=Math.max(0,-(a*d+r)),p=-c*c+d*(d+2*l)+h;return i&&i.copy(this.direction).multiplyScalar(c).add(this.origin),n&&n.copy(Nn).multiplyScalar(d).add(Rs),p}intersectSphere(t,e){je.subVectors(t.center,this.origin);const i=je.dot(this.direction),n=je.dot(je)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,l=i+a;return r<0&&l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),c>=0?(r=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(r=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,i,n,s){Gs.subVectors(e,t),On.subVectors(i,t),Bs.crossVectors(Gs,On);let a=this.direction.dot(Bs),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;ai.subVectors(this.origin,t);const l=r*this.direction.dot(On.crossVectors(ai,On));if(l<0)return null;const h=r*this.direction.dot(Gs.cross(ai));if(h<0||l+h>a)return null;const u=-r*ai.dot(Bs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,s,a,r,l,h,u,c,d,p,g,m,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=s,_[5]=a,_[9]=r,_[13]=l,_[2]=h,_[6]=u,_[10]=c,_[14]=d,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),h=Math.sin(n),u=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*c,g=r*u,m=r*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=p+g*h,e[5]=d-m*h,e[9]=-r*l,e[2]=m-d*h,e[6]=g+p*h,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*c,g=h*u,m=h*c;e[0]=d+m*r,e[4]=g*r-p,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-r,e[2]=p*r-g,e[6]=m+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*c,g=h*u,m=h*c;e[0]=d-m*r,e[4]=-a*c,e[8]=g+p*r,e[1]=p+g*r,e[5]=a*u,e[9]=m-d*r,e[2]=-a*h,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*c,g=r*u,m=r*c;e[0]=l*u,e[4]=g*h-p,e[8]=d*h+m,e[1]=l*c,e[5]=m*h+d,e[9]=p*h-g,e[2]=-h,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*h,g=r*l,m=r*h;e[0]=l*u,e[4]=m-d*c,e[8]=g*c+p,e[1]=c,e[5]=a*u,e[9]=-r*u,e[2]=-h*u,e[6]=p*c+g,e[10]=d-m*c}else if(t.order==="XZY"){const d=a*l,p=a*h,g=r*l,m=r*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+m,e[5]=a*u,e[9]=p*c-g,e[2]=g*c-p,e[6]=r*u,e[10]=m*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hl,t,Ul)}lookAt(t,e,i){const n=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),oi.crossVectors(i,_e),oi.lengthSq()===0&&(Math.abs(i.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),oi.crossVectors(i,_e)),oi.normalize(),zn.crossVectors(_e,oi),n[0]=oi.x,n[4]=zn.x,n[8]=_e.x,n[1]=oi.y,n[5]=zn.y,n[9]=_e.y,n[2]=oi.z,n[6]=zn.z,n[10]=_e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],l=i[8],h=i[12],u=i[1],c=i[5],d=i[9],p=i[13],g=i[2],m=i[6],f=i[10],_=i[14],A=i[3],b=i[7],y=i[11],M=i[15],P=n[0],B=n[4],S=n[8],w=n[12],G=n[1],q=n[5],at=n[9],N=n[13],R=n[2],X=n[6],K=n[10],Z=n[14],V=n[3],I=n[7],F=n[11],tt=n[15];return s[0]=a*P+r*G+l*R+h*V,s[4]=a*B+r*q+l*X+h*I,s[8]=a*S+r*at+l*K+h*F,s[12]=a*w+r*N+l*Z+h*tt,s[1]=u*P+c*G+d*R+p*V,s[5]=u*B+c*q+d*X+p*I,s[9]=u*S+c*at+d*K+p*F,s[13]=u*w+c*N+d*Z+p*tt,s[2]=g*P+m*G+f*R+_*V,s[6]=g*B+m*q+f*X+_*I,s[10]=g*S+m*at+f*K+_*F,s[14]=g*w+m*N+f*Z+_*tt,s[3]=A*P+b*G+y*R+M*V,s[7]=A*B+b*q+y*X+M*I,s[11]=A*S+b*at+y*K+M*F,s[15]=A*w+b*N+y*Z+M*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],p=t[14],g=t[3],m=t[7],f=t[11],_=t[15];return g*(+s*l*c-n*h*c-s*r*d+i*h*d+n*r*p-i*l*p)+m*(+e*l*p-e*h*d+s*a*d-n*a*p+n*h*u-s*l*u)+f*(+e*h*c-e*r*p-s*a*c+i*a*p+s*r*u-i*h*u)+_*(-n*r*u-e*l*c+e*r*d+n*a*c-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],p=t[11],g=t[12],m=t[13],f=t[14],_=t[15],A=c*f*h-m*d*h+m*l*p-r*f*p-c*l*_+r*d*_,b=g*d*h-u*f*h-g*l*p+a*f*p+u*l*_-a*d*_,y=u*m*h-g*c*h+g*r*p-a*m*p-u*r*_+a*c*_,M=g*c*l-u*m*l-g*r*d+a*m*d+u*r*f-a*c*f,P=e*A+i*b+n*y+s*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=A*B,t[1]=(m*d*s-c*f*s-m*n*p+i*f*p+c*n*_-i*d*_)*B,t[2]=(r*f*s-m*l*s+m*n*h-i*f*h-r*n*_+i*l*_)*B,t[3]=(c*l*s-r*d*s-c*n*h+i*d*h+r*n*p-i*l*p)*B,t[4]=b*B,t[5]=(u*f*s-g*d*s+g*n*p-e*f*p-u*n*_+e*d*_)*B,t[6]=(g*l*s-a*f*s-g*n*h+e*f*h+a*n*_-e*l*_)*B,t[7]=(a*d*s-u*l*s+u*n*h-e*d*h-a*n*p+e*l*p)*B,t[8]=y*B,t[9]=(g*c*s-u*m*s-g*i*p+e*m*p+u*i*_-e*c*_)*B,t[10]=(a*m*s-g*r*s+g*i*h-e*m*h-a*i*_+e*r*_)*B,t[11]=(u*r*s-a*c*s-u*i*h+e*c*h+a*i*p-e*r*p)*B,t[12]=M*B,t[13]=(u*m*n-g*c*n+g*i*d-e*m*d-u*i*f+e*c*f)*B,t[14]=(g*r*n-a*m*n-g*i*l+e*m*l+a*i*f-e*r*f)*B,t[15]=(a*c*n-u*r*n+u*i*l-e*c*l-a*i*d+e*r*d)*B,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,l=t.z,h=s*a,u=s*r;return this.set(h*a+i,h*r-n*l,h*l+n*r,0,h*r+n*l,u*r+i,u*l-n*a,0,h*l-n*r,u*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,h=s+s,u=a+a,c=r+r,d=s*h,p=s*u,g=s*c,m=a*u,f=a*c,_=r*c,A=l*h,b=l*u,y=l*c,M=i.x,P=i.y,B=i.z;return n[0]=(1-(m+_))*M,n[1]=(p+y)*M,n[2]=(g-b)*M,n[3]=0,n[4]=(p-y)*P,n[5]=(1-(d+_))*P,n[6]=(f+A)*P,n[7]=0,n[8]=(g+b)*B,n[9]=(f-A)*B,n[10]=(1-(d+m))*B,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=ki.set(n[0],n[1],n[2]).length();const a=ki.set(n[4],n[5],n[6]).length(),r=ki.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ie.copy(this);const h=1/s,u=1/a,c=1/r;return Ie.elements[0]*=h,Ie.elements[1]*=h,Ie.elements[2]*=h,Ie.elements[4]*=u,Ie.elements[5]*=u,Ie.elements[6]*=u,Ie.elements[8]*=c,Ie.elements[9]*=c,Ie.elements[10]*=c,e.setFromRotationMatrix(Ie),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a){const r=this.elements,l=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),c=(i+n)/(i-n),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return r[0]=l,r[4]=0,r[8]=u,r[12]=0,r[1]=0,r[5]=h,r[9]=c,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,n,s,a){const r=this.elements,l=1/(e-t),h=1/(i-n),u=1/(a-s),c=(e+t)*l,d=(i+n)*h,p=(a+s)*u;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-c,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*u,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ki=new C,Ie=new Ct,Hl=new C(0,0,0),Ul=new C(1,1,1),oi=new C,zn=new C,_e=new C,$r=new Ct,ta=new Me;class Dn{constructor(t=0,e=0,i=0,n=Dn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],r=n[8],l=n[1],h=n[5],u=n[9],c=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $r.makeRotationFromQuaternion(t),this.setFromRotationMatrix($r,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Dn.DefaultOrder="XYZ";Dn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vl=0;const ea=new C,Wi=new Me,Qe=new Ct,Hn=new C,Sn=new C,kl=new C,Wl=new Me,ia=new C(1,0,0),na=new C(0,1,0),sa=new C(0,0,1),Xl={type:"added"},ra={type:"removed"};class me extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DefaultUp.clone();const t=new C,e=new Dn,i=new Me,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Pe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=me.DefaultMatrixWorldAutoUpdate,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(ia,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ia,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hn.copy(t):Hn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Sn,Hn,this.up):Qe.lookAt(Hn,Sn,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Wi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ra)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ra)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,Wl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const r=n[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];s(t.shapes,c)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,h=this.material.length;l<h;l++)r.push(s(t.materials,this.material[l]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];n.animations.push(s(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){const l=[];for(const h in r){const u=r[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}me.DefaultUp=new C(0,1,0);me.DefaultMatrixAutoUpdate=!0;me.DefaultMatrixWorldAutoUpdate=!0;const Re=new C,Je=new C,Fs=new C,$e=new C,Xi=new C,qi=new C,aa=new C,Ns=new C,Os=new C,zs=new C;class ei{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Re.subVectors(t,e),n.cross(Re);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Re.subVectors(n,e),Je.subVectors(i,e),Fs.subVectors(t,e);const a=Re.dot(Re),r=Re.dot(Je),l=Re.dot(Fs),h=Je.dot(Je),u=Je.dot(Fs),c=a*h-r*r;if(c===0)return s.set(-2,-1,-1);const d=1/c,p=(h*l-r*u)*d,g=(a*u-r*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,i,n,s,a,r,l){return this.getBarycoord(t,e,i,n,$e),l.set(0,0),l.addScaledVector(s,$e.x),l.addScaledVector(a,$e.y),l.addScaledVector(r,$e.z),l}static isFrontFacing(t,e,i,n){return Re.subVectors(i,e),Je.subVectors(t,e),Re.cross(Je).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Re.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),Re.cross(Je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return ei.getUV(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,r;Xi.subVectors(n,i),qi.subVectors(s,i),Ns.subVectors(t,i);const l=Xi.dot(Ns),h=qi.dot(Ns);if(l<=0&&h<=0)return e.copy(i);Os.subVectors(t,n);const u=Xi.dot(Os),c=qi.dot(Os);if(u>=0&&c<=u)return e.copy(n);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Xi,a);zs.subVectors(t,s);const p=Xi.dot(zs),g=qi.dot(zs);if(g>=0&&p<=g)return e.copy(s);const m=p*h-l*g;if(m<=0&&h>=0&&g<=0)return r=h/(h-g),e.copy(i).addScaledVector(qi,r);const f=u*g-p*c;if(f<=0&&c-u>=0&&p-g>=0)return aa.subVectors(s,n),r=(c-u)/(c-u+(p-g)),e.copy(n).addScaledVector(aa,r);const _=1/(f+m+d);return a=m*_,r=d*_,e.copy(i).addScaledVector(Xi,a).addScaledVector(qi,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ql=0;class Ln extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=rn,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ka,this.blendDst=Wa,this.blendEquation=tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rn&&(i.blending=this.blending),this.side!==on&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hs extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new C,Un=new It;class Xe{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Zr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix3(t),this.setXY(e,Un.x,Un.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class to extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class eo extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Yl=0;const ye=new Ct,Hs=new me,Yi=new C,xe=new dn,vn=new dn,ie=new C;class ve extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Za(t)?eo:to)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ye.makeRotationFromQuaternion(t),this.applyMatrix4(ye),this}rotateX(t){return ye.makeRotationX(t),this.applyMatrix4(ye),this}rotateY(t){return ye.makeRotationY(t),this.applyMatrix4(ye),this}rotateZ(t){return ye.makeRotationZ(t),this.applyMatrix4(ye),this}translate(t,e,i){return ye.makeTranslation(t,e,i),this.applyMatrix4(ye),this}scale(t,e,i){return ye.makeScale(t,e,i),this.applyMatrix4(ye),this}lookAt(t){return Hs.lookAt(t),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];xe.setFromBufferAttribute(s),this.morphTargetsRelative?(ie.addVectors(this.boundingBox.min,xe.min),this.boundingBox.expandByPoint(ie),ie.addVectors(this.boundingBox.max,xe.max),this.boundingBox.expandByPoint(ie)):(this.boundingBox.expandByPoint(xe.min),this.boundingBox.expandByPoint(xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(xe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(ie.addVectors(xe.min,vn.min),xe.expandByPoint(ie),ie.addVectors(xe.max,vn.max),xe.expandByPoint(ie)):(xe.expandByPoint(vn.min),xe.expandByPoint(vn.max))}xe.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ie.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ie));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],l=this.morphTargetsRelative;for(let h=0,u=r.count;h<u;h++)ie.fromBufferAttribute(r,h),l&&(Yi.fromBufferAttribute(t,h),ie.add(Yi)),n=Math.max(n,i.distanceToSquared(ie))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let G=0;G<r;G++)h[G]=new C,u[G]=new C;const c=new C,d=new C,p=new C,g=new It,m=new It,f=new It,_=new C,A=new C;function b(G,q,at){c.fromArray(n,G*3),d.fromArray(n,q*3),p.fromArray(n,at*3),g.fromArray(a,G*2),m.fromArray(a,q*2),f.fromArray(a,at*2),d.sub(c),p.sub(c),m.sub(g),f.sub(g);const N=1/(m.x*f.y-f.x*m.y);!isFinite(N)||(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(N),A.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(N),h[G].add(_),h[q].add(_),h[at].add(_),u[G].add(A),u[q].add(A),u[at].add(A))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let G=0,q=y.length;G<q;++G){const at=y[G],N=at.start,R=at.count;for(let X=N,K=N+R;X<K;X+=3)b(i[X+0],i[X+1],i[X+2])}const M=new C,P=new C,B=new C,S=new C;function w(G){B.fromArray(s,G*3),S.copy(B);const q=h[G];M.copy(q),M.sub(B.multiplyScalar(B.dot(q))).normalize(),P.crossVectors(S,q);const N=P.dot(u[G])<0?-1:1;l[G*4]=M.x,l[G*4+1]=M.y,l[G*4+2]=M.z,l[G*4+3]=N}for(let G=0,q=y.length;G<q;++G){const at=y[G],N=at.start,R=at.count;for(let X=N,K=N+R;X<K;X+=3)w(i[X+0]),w(i[X+1]),w(i[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new C,s=new C,a=new C,r=new C,l=new C,h=new C,u=new C,c=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),m=t.getX(d+1),f=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,f),u.subVectors(a,s),c.subVectors(n,s),u.cross(c),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),h.fromBufferAttribute(i,f),r.add(u),l.add(u),h.add(u),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),c.subVectors(n,s),u.cross(c),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ie.fromBufferAttribute(t,e),ie.normalize(),t.setXYZ(e,ie.x,ie.y,ie.z)}toNonIndexed(){function t(r,l){const h=r.array,u=r.itemSize,c=r.normalized,d=new h.constructor(l.length*u);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){r.isInterleavedBufferAttribute?p=l[m]*r.data.stride+r.offset:p=l[m]*u;for(let _=0;_<u;_++)d[g++]=h[p++]}return new Xe(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,i=this.index.array,n=this.attributes;for(const r in n){const l=n[r],h=t(l,i);e.setAttribute(r,h)}const s=this.morphAttributes;for(const r in s){const l=[],h=s[r];for(let u=0,c=h.length;u<c;u++){const d=h[u],p=t(d,i);l.push(p)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const h=a[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const p=h[c];u.push(p.toJSON(t.data))}u.length>0&&(n[l]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const h in n){const u=n[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],c=s[h];for(let d=0,p=c.length;d<p;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const oa=new Ct,Ki=new dr,Us=new Cn,li=new C,ci=new C,hi=new C,Vs=new C,ks=new C,Ws=new C,Vn=new C,kn=new C,Wn=new C,Xn=new It,qn=new It,Yn=new It,Xs=new C,Kn=new C;class We extends me{constructor(t=new ve,e=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),t.ray.intersectsSphere(Us)===!1)||(oa.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(oa),i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1))return;let a;const r=i.index,l=i.attributes.position,h=i.morphAttributes.position,u=i.morphTargetsRelative,c=i.attributes.uv,d=i.attributes.uv2,p=i.groups,g=i.drawRange;if(r!==null)if(Array.isArray(n))for(let m=0,f=p.length;m<f;m++){const _=p[m],A=n[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(r.count,Math.min(_.start+_.count,g.start+g.count));for(let M=b,P=y;M<P;M+=3){const B=r.getX(M),S=r.getX(M+1),w=r.getX(M+2);a=Zn(this,A,t,Ki,l,h,u,c,d,B,S,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(r.count,g.start+g.count);for(let _=m,A=f;_<A;_+=3){const b=r.getX(_),y=r.getX(_+1),M=r.getX(_+2);a=Zn(this,n,t,Ki,l,h,u,c,d,b,y,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let m=0,f=p.length;m<f;m++){const _=p[m],A=n[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=b,P=y;M<P;M+=3){const B=M,S=M+1,w=M+2;a=Zn(this,A,t,Ki,l,h,u,c,d,B,S,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=m,A=f;_<A;_+=3){const b=_,y=_+1,M=_+2;a=Zn(this,n,t,Ki,l,h,u,c,d,b,y,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function Kl(o,t,e,i,n,s,a,r){let l;if(t.side===Ce?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,t.side!==di,r),l===null)return null;Kn.copy(r),Kn.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Kn);return h<e.near||h>e.far?null:{distance:h,point:Kn.clone(),object:o}}function Zn(o,t,e,i,n,s,a,r,l,h,u,c){li.fromBufferAttribute(n,h),ci.fromBufferAttribute(n,u),hi.fromBufferAttribute(n,c);const d=o.morphTargetInfluences;if(s&&d){Vn.set(0,0,0),kn.set(0,0,0),Wn.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],_=s[g];f!==0&&(Vs.fromBufferAttribute(_,h),ks.fromBufferAttribute(_,u),Ws.fromBufferAttribute(_,c),a?(Vn.addScaledVector(Vs,f),kn.addScaledVector(ks,f),Wn.addScaledVector(Ws,f)):(Vn.addScaledVector(Vs.sub(li),f),kn.addScaledVector(ks.sub(ci),f),Wn.addScaledVector(Ws.sub(hi),f)))}li.add(Vn),ci.add(kn),hi.add(Wn)}o.isSkinnedMesh&&(o.boneTransform(h,li),o.boneTransform(u,ci),o.boneTransform(c,hi));const p=Kl(o,t,e,i,li,ci,hi,Xs);if(p){r&&(Xn.fromBufferAttribute(r,h),qn.fromBufferAttribute(r,u),Yn.fromBufferAttribute(r,c),p.uv=ei.getUV(Xs,li,ci,hi,Xn,qn,Yn,new It)),l&&(Xn.fromBufferAttribute(l,h),qn.fromBufferAttribute(l,u),Yn.fromBufferAttribute(l,c),p.uv2=ei.getUV(Xs,li,ci,hi,Xn,qn,Yn,new It));const g={a:h,b:u,c,normal:new C,materialIndex:0};ei.getNormal(li,ci,hi,g.normal),p.face=g}return p}class Ri extends ve{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],u=[],c=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(c,2));function g(m,f,_,A,b,y,M,P,B,S,w){const G=y/B,q=M/S,at=y/2,N=M/2,R=P/2,X=B+1,K=S+1;let Z=0,V=0;const I=new C;for(let F=0;F<K;F++){const tt=F*q-N;for(let Q=0;Q<X;Q++){const j=Q*G-at;I[m]=j*A,I[f]=tt*b,I[_]=R,h.push(I.x,I.y,I.z),I[m]=0,I[f]=0,I[_]=P>0?1:-1,u.push(I.x,I.y,I.z),c.push(Q/B),c.push(1-F/S),Z+=1}}for(let F=0;F<S;F++)for(let tt=0;tt<B;tt++){const Q=d+tt+X*F,j=d+tt+X*(F+1),lt=d+(tt+1)+X*(F+1),Mt=d+(tt+1)+X*F;l.push(Q,j,Mt),l.push(j,lt,Mt),V+=6}r.addGroup(p,V,w),p+=V,d+=Z}}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ue(o){const t={};for(let e=0;e<o.length;e++){const i=un(o[e]);for(const n in i)t[n]=i[n]}return t}function Zl(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const jl={clone:un,merge:ue};var Ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ql,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=Zl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class io extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ee extends io{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(yn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=90,ji=1;class $l extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Ee(Zi,ji,t,e);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new C(1,0,0)),this.add(n);const s=new Ee(Zi,ji,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new C(-1,0,0)),this.add(s);const a=new Ee(Zi,ji,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new C(0,1,0)),this.add(a);const r=new Ee(Zi,ji,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new C(0,-1,0)),this.add(r);const l=new Ee(Zi,ji,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const h=new Ee(Zi,ji,t,e);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new C(0,0,-1)),this.add(h)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,r,l,h]=this.children,u=t.getRenderTarget(),c=t.toneMapping,d=t.xr.enabled;t.toneMapping=ii,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,r),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,h),t.setRenderTarget(u),t.toneMapping=c,t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class no extends ze{constructor(t,e,i,n,s,a,r,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:ln,super(t,e,i,n,s,a,r,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tc extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new no(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ri(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:fi});s.uniforms.tEquirect.value=e;const a=new We(n,s),r=e.minFilter;return e.minFilter===ps&&(e.minFilter=we),new $l(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const qs=new C,ec=new C,ic=new Pe;class Mi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=qs.subVectors(i,e).cross(ec.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(qs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ic.getNormalMatrix(t),n=this.coplanarPoint(qs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Cn,jn=new C;class so{constructor(t=new Mi,e=new Mi,i=new Mi,n=new Mi,s=new Mi,a=new Mi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],r=i[3],l=i[4],h=i[5],u=i[6],c=i[7],d=i[8],p=i[9],g=i[10],m=i[11],f=i[12],_=i[13],A=i[14],b=i[15];return e[0].setComponents(r-n,c-l,m-d,b-f).normalize(),e[1].setComponents(r+n,c+l,m+d,b+f).normalize(),e[2].setComponents(r+s,c+h,m+p,b+_).normalize(),e[3].setComponents(r-s,c-h,m-p,b-_).normalize(),e[4].setComponents(r-a,c-u,m-g,b-A).normalize(),e[5].setComponents(r+a,c+u,m+g,b+A).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(jn.x=n.normal.x>0?t.max.x:t.min.x,jn.y=n.normal.y>0?t.max.y:t.min.y,jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ro(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function nc(o,t){const e=t.isWebGL2,i=new WeakMap;function n(h,u){const c=h.array,d=h.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,c,d),h.onUploadCallback();let g;if(c instanceof Float32Array)g=5126;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(c instanceof Int16Array)g=5122;else if(c instanceof Uint32Array)g=5125;else if(c instanceof Int32Array)g=5124;else if(c instanceof Int8Array)g=5120;else if(c instanceof Uint8Array)g=5121;else if(c instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version}}function s(h,u,c){const d=u.array,p=u.updateRange;o.bindBuffer(c,h),p.count===-1?o.bufferSubData(c,0,d):(e?o.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):o.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);u&&(o.deleteBuffer(u.buffer),i.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=i.get(h);c===void 0?i.set(h,n(h,u)):c.version<h.version&&(s(c.buffer,h,u),c.version=h.version)}return{get:a,remove:r,update:l}}class pr extends ve{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,r=Math.floor(i),l=Math.floor(n),h=r+1,u=l+1,c=t/r,d=e/l,p=[],g=[],m=[],f=[];for(let _=0;_<u;_++){const A=_*d-a;for(let b=0;b<h;b++){const y=b*c-s;g.push(y,-A,0),m.push(0,0,1),f.push(b/r),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<r;A++){const b=A+h*_,y=A+h*(_+1),M=A+1+h*(_+1),P=A+1+h*_;p.push(b,y,P),p.push(y,M,P)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(f,2))}static fromJSON(t){return new pr(t.width,t.height,t.widthSegments,t.heightSegments)}}var sc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ac=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hc="vec3 transformed = vec3( position );",uc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,fc=`#ifdef USE_IRIDESCENCE
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
#endif`,pc=`#ifdef USE_BUMPMAP
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
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tc=`#define PI 3.141592653589793
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
}`,yc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ac=`vec3 transformedNormal = objectNormal;
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
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ic=`#ifdef USE_ENVMAP
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
#endif`,Rc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gc=`#ifdef USE_ENVMAP
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
#endif`,Bc=`#ifdef USE_ENVMAP
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
#endif`,Nc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uc=`#ifdef USE_GRADIENTMAP
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
}`,Vc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,qc=`uniform bool receiveShadow;
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
#endif`,Yc=`#if defined( USE_ENVMAP )
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
#endif`,Kc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zc=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Qc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Jc=`PhysicalMaterial material;
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
}`,th=`
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ph=`#ifdef USE_MORPHNORMALS
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
#endif`,mh=`#ifdef USE_MORPHTARGETS
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
#endif`,gh=`#ifdef USE_MORPHTARGETS
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
#endif`,_h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bh=`#ifdef USE_NORMALMAP
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
#endif`,Th=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ah=`#ifdef USE_CLEARCOATMAP
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
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ph=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ih=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oh=`float getShadowMask() {
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
}`,zh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hh=`#ifdef USE_SKINNING
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
#endif`,Uh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vh=`#ifdef USE_SKINNING
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
#endif`,kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yh=`#ifdef USE_TRANSMISSION
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
#endif`,Kh=`#ifdef USE_TRANSMISSION
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
#endif`,Zh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$h=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`#ifdef ENVMAP_TYPE_CUBE
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lu=`#include <common>
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
}`,cu=`#if DEPTH_PACKING == 3200
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
}`,hu=`#define DISTANCE
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
}`,uu=`#define DISTANCE
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pu=`uniform float scale;
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
}`,mu=`uniform vec3 diffuse;
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
}`,gu=`#include <common>
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
}`,_u=`uniform vec3 diffuse;
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
}`,xu=`#define LAMBERT
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
}`,Su=`#define LAMBERT
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
}`,vu=`#define MATCAP
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
}`,Mu=`#define MATCAP
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
}`,bu=`#define NORMAL
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
}`,Tu=`#define NORMAL
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
}`,yu=`#define PHONG
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
}`,Au=`#define PHONG
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
}`,Eu=`#define STANDARD
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
}`,Pu=`#define TOON
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
}`,Cu=`#define TOON
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
}`,Du=`uniform float size;
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
}`,Lu=`uniform vec3 diffuse;
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
}`,Iu=`#include <common>
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
}`,Ru=`uniform vec3 color;
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
}`,Gu=`uniform float rotation;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,At={alphamap_fragment:sc,alphamap_pars_fragment:rc,alphatest_fragment:ac,alphatest_pars_fragment:oc,aomap_fragment:lc,aomap_pars_fragment:cc,begin_vertex:hc,beginnormal_vertex:uc,bsdfs:dc,iridescence_fragment:fc,bumpmap_pars_fragment:pc,clipping_planes_fragment:mc,clipping_planes_pars_fragment:gc,clipping_planes_pars_vertex:_c,clipping_planes_vertex:xc,color_fragment:Sc,color_pars_fragment:vc,color_pars_vertex:Mc,color_vertex:bc,common:Tc,cube_uv_reflection_fragment:yc,defaultnormal_vertex:Ac,displacementmap_pars_vertex:wc,displacementmap_vertex:Ec,emissivemap_fragment:Pc,emissivemap_pars_fragment:Cc,encodings_fragment:Dc,encodings_pars_fragment:Lc,envmap_fragment:Ic,envmap_common_pars_fragment:Rc,envmap_pars_fragment:Gc,envmap_pars_vertex:Bc,envmap_physical_pars_fragment:Yc,envmap_vertex:Fc,fog_vertex:Nc,fog_pars_vertex:Oc,fog_fragment:zc,fog_pars_fragment:Hc,gradientmap_pars_fragment:Uc,lightmap_fragment:Vc,lightmap_pars_fragment:kc,lights_lambert_fragment:Wc,lights_lambert_pars_fragment:Xc,lights_pars_begin:qc,lights_toon_fragment:Kc,lights_toon_pars_fragment:Zc,lights_phong_fragment:jc,lights_phong_pars_fragment:Qc,lights_physical_fragment:Jc,lights_physical_pars_fragment:$c,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:ih,logdepthbuf_fragment:nh,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:ah,map_fragment:oh,map_pars_fragment:lh,map_particle_fragment:ch,map_particle_pars_fragment:hh,metalnessmap_fragment:uh,metalnessmap_pars_fragment:dh,morphcolor_vertex:fh,morphnormal_vertex:ph,morphtarget_pars_vertex:mh,morphtarget_vertex:gh,normal_fragment_begin:_h,normal_fragment_maps:xh,normal_pars_fragment:Sh,normal_pars_vertex:vh,normal_vertex:Mh,normalmap_pars_fragment:bh,clearcoat_normal_fragment_begin:Th,clearcoat_normal_fragment_maps:yh,clearcoat_pars_fragment:Ah,iridescence_pars_fragment:wh,output_fragment:Eh,packing:Ph,premultiplied_alpha_fragment:Ch,project_vertex:Dh,dithering_fragment:Lh,dithering_pars_fragment:Ih,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:Bh,shadowmap_pars_vertex:Fh,shadowmap_vertex:Nh,shadowmask_pars_fragment:Oh,skinbase_vertex:zh,skinning_pars_vertex:Hh,skinning_vertex:Uh,skinnormal_vertex:Vh,specularmap_fragment:kh,specularmap_pars_fragment:Wh,tonemapping_fragment:Xh,tonemapping_pars_fragment:qh,transmission_fragment:Yh,transmission_pars_fragment:Kh,uv_pars_fragment:Zh,uv_pars_vertex:jh,uv_vertex:Qh,uv2_pars_fragment:Jh,uv2_pars_vertex:$h,uv2_vertex:tu,worldpos_vertex:eu,background_vert:iu,background_frag:nu,backgroundCube_vert:su,backgroundCube_frag:ru,cube_vert:au,cube_frag:ou,depth_vert:lu,depth_frag:cu,distanceRGBA_vert:hu,distanceRGBA_frag:uu,equirect_vert:du,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:gu,meshbasic_frag:_u,meshlambert_vert:xu,meshlambert_frag:Su,meshmatcap_vert:vu,meshmatcap_frag:Mu,meshnormal_vert:bu,meshnormal_frag:Tu,meshphong_vert:yu,meshphong_frag:Au,meshphysical_vert:wu,meshphysical_frag:Eu,meshtoon_vert:Pu,meshtoon_frag:Cu,points_vert:Du,points_frag:Lu,shadow_vert:Iu,shadow_frag:Ru,sprite_vert:Gu,sprite_frag:Bu},it={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pe},uv2Transform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}}},ke={basic:{uniforms:ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ht(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ue([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ue([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ht(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ue([it.points,it.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ue([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ue([it.common,it.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ue([it.sprite,it.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:ue([it.common,it.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:ue([it.lights,it.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ke.physical={uniforms:ue([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new It(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function Fu(o,t,e,i,n,s,a){const r=new Ht(0);let l=s===!0?0:1,h,u,c=null,d=0,p=null;function g(f,_){let A=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?e:t).get(b));const y=o.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(b=null),b===null?m(r,l):b&&b.isColor&&(m(b,1),A=!0),(o.autoClear||A)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),b&&(b.isCubeTexture||b.mapping===fs)?(u===void 0&&(u=new We(new Ri(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:un(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,B,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(c!==b||d!==b.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,c=b,d=b.version,p=o.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new We(new pr(2,2),new Gi({name:"BackgroundMaterial",uniforms:un(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||d!==b.version||p!==o.toneMapping)&&(h.material.needsUpdate=!0,c=b,d=b.version,p=o.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null))}function m(f,_){i.buffers.color.setClear(f.r,f.g,f.b,_,a)}return{getClearColor:function(){return r},setClearColor:function(f,_=1){r.set(f),l=_,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(r,l)},render:g}}function Nu(o,t,e,i){const n=o.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,r={},l=f(null);let h=l,u=!1;function c(R,X,K,Z,V){let I=!1;if(a){const F=m(Z,K,X);h!==F&&(h=F,p(h.object)),I=_(R,Z,K,V),I&&A(R,Z,K,V)}else{const F=X.wireframe===!0;(h.geometry!==Z.id||h.program!==K.id||h.wireframe!==F)&&(h.geometry=Z.id,h.program=K.id,h.wireframe=F,I=!0)}V!==null&&e.update(V,34963),(I||u)&&(u=!1,S(R,X,K,Z),V!==null&&o.bindBuffer(34963,e.get(V).buffer))}function d(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function p(R){return i.isWebGL2?o.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?o.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function m(R,X,K){const Z=K.wireframe===!0;let V=r[R.id];V===void 0&&(V={},r[R.id]=V);let I=V[X.id];I===void 0&&(I={},V[X.id]=I);let F=I[Z];return F===void 0&&(F=f(d()),I[Z]=F),F}function f(R){const X=[],K=[],Z=[];for(let V=0;V<n;V++)X[V]=0,K[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:Z,object:R,attributes:{},index:null}}function _(R,X,K,Z){const V=h.attributes,I=X.attributes;let F=0;const tt=K.getAttributes();for(const Q in tt)if(tt[Q].location>=0){const lt=V[Q];let Mt=I[Q];if(Mt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor)),lt===void 0||lt.attribute!==Mt||Mt&&lt.data!==Mt.data)return!0;F++}return h.attributesNum!==F||h.index!==Z}function A(R,X,K,Z){const V={},I=X.attributes;let F=0;const tt=K.getAttributes();for(const Q in tt)if(tt[Q].location>=0){let lt=I[Q];lt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(lt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(lt=R.instanceColor));const Mt={};Mt.attribute=lt,lt&&lt.data&&(Mt.data=lt.data),V[Q]=Mt,F++}h.attributes=V,h.attributesNum=F,h.index=Z}function b(){const R=h.newAttributes;for(let X=0,K=R.length;X<K;X++)R[X]=0}function y(R){M(R,0)}function M(R,X){const K=h.newAttributes,Z=h.enabledAttributes,V=h.attributeDivisors;K[R]=1,Z[R]===0&&(o.enableVertexAttribArray(R),Z[R]=1),V[R]!==X&&((i.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,X),V[R]=X)}function P(){const R=h.newAttributes,X=h.enabledAttributes;for(let K=0,Z=X.length;K<Z;K++)X[K]!==R[K]&&(o.disableVertexAttribArray(K),X[K]=0)}function B(R,X,K,Z,V,I){i.isWebGL2===!0&&(K===5124||K===5125)?o.vertexAttribIPointer(R,X,K,V,I):o.vertexAttribPointer(R,X,K,Z,V,I)}function S(R,X,K,Z){if(i.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const V=Z.attributes,I=K.getAttributes(),F=X.defaultAttributeValues;for(const tt in I){const Q=I[tt];if(Q.location>=0){let j=V[tt];if(j===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const lt=j.normalized,Mt=j.itemSize,W=e.get(j);if(W===void 0)continue;const Ot=W.buffer,xt=W.type,bt=W.bytesPerElement;if(j.isInterleavedBufferAttribute){const ot=j.data,Ut=ot.stride,Et=j.offset;if(ot.isInstancedInterleavedBuffer){for(let gt=0;gt<Q.locationSize;gt++)M(Q.location+gt,ot.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let gt=0;gt<Q.locationSize;gt++)y(Q.location+gt);o.bindBuffer(34962,Ot);for(let gt=0;gt<Q.locationSize;gt++)B(Q.location+gt,Mt/Q.locationSize,xt,lt,Ut*bt,(Et+Mt/Q.locationSize*gt)*bt)}else{if(j.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)M(Q.location+ot,j.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ot=0;ot<Q.locationSize;ot++)y(Q.location+ot);o.bindBuffer(34962,Ot);for(let ot=0;ot<Q.locationSize;ot++)B(Q.location+ot,Mt/Q.locationSize,xt,lt,Mt*bt,Mt/Q.locationSize*ot*bt)}}else if(F!==void 0){const lt=F[tt];if(lt!==void 0)switch(lt.length){case 2:o.vertexAttrib2fv(Q.location,lt);break;case 3:o.vertexAttrib3fv(Q.location,lt);break;case 4:o.vertexAttrib4fv(Q.location,lt);break;default:o.vertexAttrib1fv(Q.location,lt)}}}}P()}function w(){at();for(const R in r){const X=r[R];for(const K in X){const Z=X[K];for(const V in Z)g(Z[V].object),delete Z[V];delete X[K]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const X=r[R.id];for(const K in X){const Z=X[K];for(const V in Z)g(Z[V].object),delete Z[V];delete X[K]}delete r[R.id]}function q(R){for(const X in r){const K=r[X];if(K[R.id]===void 0)continue;const Z=K[R.id];for(const V in Z)g(Z[V].object),delete Z[V];delete K[R.id]}}function at(){N(),u=!0,h!==l&&(h=l,p(h.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:at,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:G,releaseStatesOfProgram:q,initAttributes:b,enableAttribute:y,disableUnusedAttributes:P}}function Ou(o,t,e,i){const n=i.isWebGL2;let s;function a(h){s=h}function r(h,u){o.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,c){if(c===0)return;let d,p;if(n)d=o,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,h,u,c),e.update(u,s,c)}this.setMode=a,this.render=r,this.renderInstances=l}function zu(o,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(B){if(B==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const h=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,c=o.getParameter(34930),d=o.getParameter(35660),p=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),f=o.getParameter(36347),_=o.getParameter(36348),A=o.getParameter(36349),b=d>0,y=a||t.has("OES_texture_float"),M=b&&y,P=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:P}}function Hu(o){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Mi,r=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d,p){const g=c.length!==0||d||i!==0||n;return n=d,e=u(c,p,0),i=c.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,h()},this.setState=function(c,d,p){const g=c.clippingPlanes,m=c.clipIntersection,f=c.clipShadows,_=o.get(c);if(!n||g===null||g.length===0||s&&!f)s?u(null):h();else{const A=s?0:i,b=A*4;let y=_.clippingState||null;l.value=y,y=u(g,d,b,p);for(let M=0;M!==b;++M)y[M]=e[M];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(c,d,p,g){const m=c!==null?c.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const _=p+m*4,A=d.matrixWorldInverse;r.getNormalMatrix(A),(f===null||f.length<_)&&(f=new Float32Array(_));for(let b=0,y=p;b!==m;++b,y+=4)a.copy(c[b]).applyMatrix4(A,r),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function Uu(o){let t=new WeakMap;function e(a,r){return r===tr?a.mapping=ln:r===er&&(a.mapping=cn),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const r=a.mapping;if(r===tr||r===er)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new tc(l.height/2);return h.fromEquirectangularTexture(o,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){const r=a.target;r.removeEventListener("dispose",n);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Vu extends io{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,r=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sn=4,la=[.125,.215,.35,.446,.526,.582],Ti=20,Ys=new Vu,ca=new Ht;let Ks=null;const bi=(1+Math.sqrt(5))/2,Ji=1/bi,ha=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,bi,Ji),new C(0,bi,-Ji),new C(Ji,0,bi),new C(-Ji,0,bi),new C(bi,Ji,0),new C(-bi,Ji,0)];class ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ks=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks),t.scissorTest=!1,Qn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ln||t.mapping===cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:we,minFilter:we,generateMipmaps:!1,type:En,format:Ne,encoding:Li,depthBuffer:!1},n=da(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(s)),this._blurMaterial=Wu(s,t,e)}return n}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,i,n){const r=new Ee(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(ca),u.toneMapping=ii,u.autoClear=!1;const p=new hs({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new We(new Ri,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(ca),m=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(r.up.set(0,l[_],0),r.lookAt(h[_],0,0)):A===1?(r.up.set(0,0,l[_]),r.lookAt(0,h[_],0)):(r.up.set(0,l[_],0),r.lookAt(0,0,h[_]));const b=this._cubeSize;Qn(n,A*b,_>2?b:0,b,b),u.setRenderTarget(n),m&&u.render(g,r),u.render(t,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===ln||t.mapping===cn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fa());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;Qn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ys)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=ha[(n-1)%ha.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new We(this._lodPlanes[n],h),d=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),m=s/g,f=isFinite(s)?1+Math.floor(u*m):Ti;f>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ti}`);const _=[];let A=0;for(let B=0;B<Ti;++B){const S=B/m,w=Math.exp(-S*S/2);_.push(w),B===0?A+=w:B<f&&(A+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/A;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[n],M=3*y*(n>b-sn?n-b+sn:0),P=4*(this._cubeSize-y);Qn(e,M,P,3*y,2*y),l.setRenderTarget(e),l.render(c,Ys)}}function ku(o){const t=[],e=[],i=[];let n=o;const s=o-sn+1+la.length;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);let l=1/r;a>o-sn?l=la[a-o+sn-1]:a===0&&(l=0),i.push(l);const h=1/(r-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],p=6,g=6,m=3,f=2,_=1,A=new Float32Array(m*g*p),b=new Float32Array(f*g*p),y=new Float32Array(_*g*p);for(let P=0;P<p;P++){const B=P%3*2/3-1,S=P>2?0:-1,w=[B,S,0,B+2/3,S,0,B+2/3,S+1,0,B,S,0,B+2/3,S+1,0,B,S+1,0];A.set(w,m*g*P),b.set(d,f*g*P);const G=[P,P,P,P,P,P];y.set(G,_*g*P)}const M=new ve;M.setAttribute("position",new Xe(A,m)),M.setAttribute("uv",new Xe(b,f)),M.setAttribute("faceIndex",new Xe(y,_)),t.push(M),n>sn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function da(o,t,e){const i=new Ii(o,t,e);return i.texture.mapping=fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qn(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function Wu(o,t,e){const i=new Float32Array(Ti),n=new C(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function fa(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function pa(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

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
	`}function Xu(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,h=l===tr||l===er,u=l===ln||l===cn;if(h||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let c=t.get(r);return e===null&&(e=new ua(o)),c=h?e.fromEquirectangular(r,c):e.fromCubemap(r,c),t.set(r,c),c.texture}else{if(t.has(r))return t.get(r).texture;{const c=r.image;if(h&&c&&c.height>0||u&&c&&n(c)){e===null&&(e=new ua(o));const d=h?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,d),r.addEventListener("dispose",s),d.texture}else return null}}}return r}function n(r){let l=0;const h=6;for(let u=0;u<h;u++)r[u]!==void 0&&l++;return l===h}function s(r){const l=r.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function qu(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Yu(o,t,e,i){const n={},s=new WeakMap;function a(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(c,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const g in d)t.update(d[g],34962);const p=c.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)t.update(m[f],34962)}}function h(c){const d=[],p=c.index,g=c.attributes.position;let m=0;if(p!==null){const A=p.array;m=p.version;for(let b=0,y=A.length;b<y;b+=3){const M=A[b+0],P=A[b+1],B=A[b+2];d.push(M,P,P,B,B,M)}}else{const A=g.array;m=g.version;for(let b=0,y=A.length/3-1;b<y;b+=3){const M=b+0,P=b+1,B=b+2;d.push(M,P,P,B,B,M)}}const f=new(Za(d)?eo:to)(d,1);f.version=m;const _=s.get(c);_&&t.remove(_),s.set(c,f)}function u(c){const d=s.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&h(c)}else h(c);return s.get(c)}return{get:r,update:l,getWireframeAttribute:u}}function Ku(o,t,e,i){const n=i.isWebGL2;let s;function a(d){s=d}let r,l;function h(d){r=d.type,l=d.bytesPerElement}function u(d,p){o.drawElements(s,p,r,d*l),e.update(p,s,1)}function c(d,p,g){if(g===0)return;let m,f;if(n)m=o,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,r,d*l,g),e.update(p,s,g)}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=c}function Zu(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function ju(o,t){return o[0]-t[0]}function Qu(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Ju(o,t,e){const i={},n=new Float32Array(8),s=new WeakMap,a=new re,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function l(h,u,c,d){const p=h.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==f){let K=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var g=K;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let G=0;y===!0&&(G=1),M===!0&&(G=2),P===!0&&(G=3);let q=u.attributes.position.count*G,at=1;q>t.maxTextureSize&&(at=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const N=new Float32Array(q*at*4*f),R=new $a(N,q,at,f);R.type=Ai,R.needsUpdate=!0;const X=G*4;for(let Z=0;Z<f;Z++){const V=B[Z],I=S[Z],F=w[Z],tt=q*at*4*Z;for(let Q=0;Q<V.count;Q++){const j=Q*X;y===!0&&(a.fromBufferAttribute(V,Q),N[tt+j+0]=a.x,N[tt+j+1]=a.y,N[tt+j+2]=a.z,N[tt+j+3]=0),M===!0&&(a.fromBufferAttribute(I,Q),N[tt+j+4]=a.x,N[tt+j+5]=a.y,N[tt+j+6]=a.z,N[tt+j+7]=0),P===!0&&(a.fromBufferAttribute(F,Q),N[tt+j+8]=a.x,N[tt+j+9]=a.y,N[tt+j+10]=a.z,N[tt+j+11]=F.itemSize===4?a.w:1)}}_={count:f,texture:R,size:new It(q,at)},s.set(u,_),u.addEventListener("dispose",K)}let A=0;for(let y=0;y<p.length;y++)A+=p[y];const b=u.morphTargetsRelative?1:1-A;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",p),d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=i[u.id];if(f===void 0||f.length!==m){f=[];for(let M=0;M<m;M++)f[M]=[M,0];i[u.id]=f}for(let M=0;M<m;M++){const P=f[M];P[0]=M,P[1]=p[M]}f.sort(Qu);for(let M=0;M<8;M++)M<m&&f[M][1]?(r[M][0]=f[M][0],r[M][1]=f[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(ju);const _=u.morphAttributes.position,A=u.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const P=r[M],B=P[0],S=P[1];B!==Number.MAX_SAFE_INTEGER&&S?(_&&u.getAttribute("morphTarget"+M)!==_[B]&&u.setAttribute("morphTarget"+M,_[B]),A&&u.getAttribute("morphNormal"+M)!==A[B]&&u.setAttribute("morphNormal"+M,A[B]),n[M]=S,b+=S):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),A&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),n[M]=0)}const y=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function $u(o,t,e,i){let n=new WeakMap;function s(l){const h=i.render.frame,u=l.geometry,c=t.get(l,u);return n.get(c)!==h&&(t.update(c),n.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),c}function a(){n=new WeakMap}function r(l){const h=l.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}const ao=new ze,oo=new $a,lo=new Ol,co=new no,ma=[],ga=[],_a=new Float32Array(16),xa=new Float32Array(9),Sa=new Float32Array(4);function fn(o,t,e){const i=o[0];if(i<=0||i>0)return o;const n=t*e;let s=ma[n];if(s===void 0&&(s=new Float32Array(n),ma[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function Jt(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function $t(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function ms(o,t){let e=ga[t];e===void 0&&(e=new Int32Array(t),ga[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function td(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function ed(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;o.uniform2fv(this.addr,t),$t(e,t)}}function id(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Jt(e,t))return;o.uniform3fv(this.addr,t),$t(e,t)}}function nd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;o.uniform4fv(this.addr,t),$t(e,t)}}function sd(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Jt(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),$t(e,t)}else{if(Jt(e,i))return;Sa.set(i),o.uniformMatrix2fv(this.addr,!1,Sa),$t(e,i)}}function rd(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Jt(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),$t(e,t)}else{if(Jt(e,i))return;xa.set(i),o.uniformMatrix3fv(this.addr,!1,xa),$t(e,i)}}function ad(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Jt(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),$t(e,t)}else{if(Jt(e,i))return;_a.set(i),o.uniformMatrix4fv(this.addr,!1,_a),$t(e,i)}}function od(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function ld(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;o.uniform2iv(this.addr,t),$t(e,t)}}function cd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;o.uniform3iv(this.addr,t),$t(e,t)}}function hd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;o.uniform4iv(this.addr,t),$t(e,t)}}function ud(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function dd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;o.uniform2uiv(this.addr,t),$t(e,t)}}function fd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;o.uniform3uiv(this.addr,t),$t(e,t)}}function pd(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;o.uniform4uiv(this.addr,t),$t(e,t)}}function md(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||ao,n)}function gd(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||lo,n)}function _d(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||co,n)}function xd(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||oo,n)}function Sd(o){switch(o){case 5126:return td;case 35664:return ed;case 35665:return id;case 35666:return nd;case 35674:return sd;case 35675:return rd;case 35676:return ad;case 5124:case 35670:return od;case 35667:case 35671:return ld;case 35668:case 35672:return cd;case 35669:case 35673:return hd;case 5125:return ud;case 36294:return dd;case 36295:return fd;case 36296:return pd;case 35678:case 36198:case 36298:case 36306:case 35682:return md;case 35679:case 36299:case 36307:return gd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return xd}}function vd(o,t){o.uniform1fv(this.addr,t)}function Md(o,t){const e=fn(t,this.size,2);o.uniform2fv(this.addr,e)}function bd(o,t){const e=fn(t,this.size,3);o.uniform3fv(this.addr,e)}function Td(o,t){const e=fn(t,this.size,4);o.uniform4fv(this.addr,e)}function yd(o,t){const e=fn(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Ad(o,t){const e=fn(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function wd(o,t){const e=fn(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Ed(o,t){o.uniform1iv(this.addr,t)}function Pd(o,t){o.uniform2iv(this.addr,t)}function Cd(o,t){o.uniform3iv(this.addr,t)}function Dd(o,t){o.uniform4iv(this.addr,t)}function Ld(o,t){o.uniform1uiv(this.addr,t)}function Id(o,t){o.uniform2uiv(this.addr,t)}function Rd(o,t){o.uniform3uiv(this.addr,t)}function Gd(o,t){o.uniform4uiv(this.addr,t)}function Bd(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ao,s[a])}function Fd(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||lo,s[a])}function Nd(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||co,s[a])}function Od(o,t,e){const i=this.cache,n=t.length,s=ms(e,n);Jt(i,s)||(o.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||oo,s[a])}function zd(o){switch(o){case 5126:return vd;case 35664:return Md;case 35665:return bd;case 35666:return Td;case 35674:return yd;case 35675:return Ad;case 35676:return wd;case 5124:case 35670:return Ed;case 35667:case 35671:return Pd;case 35668:case 35672:return Cd;case 35669:case 35673:return Dd;case 5125:return Ld;case 36294:return Id;case 36295:return Rd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return Fd;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Od}}class Hd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Sd(e.type)}}class Ud{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=zd(e.type)}}class Vd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const r=n[s];r.setValue(t,e[r.id],i)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function va(o,t){o.seq.push(t),o.map[t.id]=t}function kd(o,t,e){const i=o.name,n=i.length;for(Zs.lastIndex=0;;){const s=Zs.exec(i),a=Zs.lastIndex;let r=s[1];const l=s[2]==="]",h=s[3];if(l&&(r=r|0),h===void 0||h==="["&&a+2===n){va(e,h===void 0?new Hd(r,o,t):new Ud(r,o,t));break}else{let c=e.map[r];c===void 0&&(c=new Vd(r),va(e,c)),e=c}}}class is{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);kd(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const r=e[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Ma(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}let Wd=0;function Xd(o,t){const e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function qd(o){switch(o){case Li:return["Linear","( value )"];case Yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function ba(o,t,e){const i=o.getShaderParameter(t,35713),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Xd(o.getShaderSource(t),a)}else return n}function Yd(o,t){const e=qd(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Kd(o,t){let e;switch(t){case Ko:e="Linear";break;case Zo:e="Reinhard";break;case jo:e="OptimizedCineon";break;case Qo:e="ACESFilmic";break;case Jo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zd(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tn).join(`
`)}function jd(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qd(o,t){const e={},i=o.getProgramParameter(t,35721);for(let n=0;n<i;n++){const s=o.getActiveAttrib(t,n),a=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Tn(o){return o!==""}function Ta(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ya(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ar(o){return o.replace(Jd,$d)}function $d(o,t){const e=At[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ar(e)}const tf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Aa(o){return o.replace(tf,ef)}function ef(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function wa(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nf(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function sf(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ln:case cn:t="ENVMAP_TYPE_CUBE";break;case fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rf(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case cn:t="ENVMAP_MODE_REFRACTION";break}return t}function af(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Xa:t="ENVMAP_BLENDING_MULTIPLY";break;case qo:t="ENVMAP_BLENDING_MIX";break;case Yo:t="ENVMAP_BLENDING_ADD";break}return t}function of(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function lf(o,t,e,i){const n=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=nf(e),h=sf(e),u=rf(e),c=af(e),d=of(e),p=e.isWebGL2?"":Zd(e),g=jd(s),m=n.createProgram();let f,_,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Tn).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(Tn).join(`
`),_.length>0&&(_+=`
`)):(f=[wa(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tn).join(`
`),_=[p,wa(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?At.tonemapping_pars_fragment:"",e.toneMapping!==ii?Kd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",At.encodings_pars_fragment,Yd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tn).join(`
`)),a=ar(a),a=Ta(a,e),a=ya(a,e),r=ar(r),r=Ta(r,e),r=ya(r,e),a=Aa(a),r=Aa(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=A+f+a,y=A+_+r,M=Ma(n,35633,b),P=Ma(n,35632,y);if(n.attachShader(m,M),n.attachShader(m,P),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),o.debug.checkShaderErrors){const w=n.getProgramInfoLog(m).trim(),G=n.getShaderInfoLog(M).trim(),q=n.getShaderInfoLog(P).trim();let at=!0,N=!0;if(n.getProgramParameter(m,35714)===!1){at=!1;const R=ba(n,M,"vertex"),X=ba(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+w+`
`+R+`
`+X)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(G===""||q==="")&&(N=!1);N&&(this.diagnostics={runnable:at,programLog:w,vertexShader:{log:G,prefix:f},fragmentShader:{log:q,prefix:_}})}n.deleteShader(M),n.deleteShader(P);let B;this.getUniforms=function(){return B===void 0&&(B=new is(n,m)),B};let S;return this.getAttributes=function(){return S===void 0&&(S=Qd(n,m)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Wd++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=P,this}let cf=0;class hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new uf(t),e.set(t,i)),i}}class uf{constructor(t){this.id=cf++,this.code=t,this.usedTimes=0}}function df(o,t,e,i,n,s,a){const r=new fr,l=new hf,h=[],u=n.isWebGL2,c=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S,w,G,q,at){const N=q.fog,R=at.geometry,X=S.isMeshStandardMaterial?q.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),Z=!!K&&K.mapping===fs?K.image.height:null,V=g[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const I=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,F=I!==void 0?I.length:0;let tt=0;R.morphAttributes.position!==void 0&&(tt=1),R.morphAttributes.normal!==void 0&&(tt=2),R.morphAttributes.color!==void 0&&(tt=3);let Q,j,lt,Mt;if(V){const Ut=ke[V];Q=Ut.vertexShader,j=Ut.fragmentShader}else Q=S.vertexShader,j=S.fragmentShader,l.update(S),lt=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);const W=o.getRenderTarget(),Ot=S.alphaTest>0,xt=S.clearcoat>0,bt=S.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:S.type,vertexShader:Q,fragmentShader:j,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:at.isInstancedMesh===!0,instancingColor:at.isInstancedMesh===!0&&at.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Li,map:!!S.map,matcap:!!S.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Z,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Ml,tangentSpaceNormalMap:S.normalMapType===vl,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Yt,clearcoat:xt,clearcoatMap:xt&&!!S.clearcoatMap,clearcoatRoughnessMap:xt&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!S.clearcoatNormalMap,iridescence:bt,iridescenceMap:bt&&!!S.iridescenceMap,iridescenceThicknessMap:bt&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===rn,alphaMap:!!S.alphaMap,alphaTest:Ot,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!R.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:c,skinning:at.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:S.toneMapped?o.toneMapping:ii,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===Ce,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)w.push(G),w.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(_(w,S),A(w,S),w.push(o.outputEncoding)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputEncoding),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.combine),S.push(w.vertexUvs),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function A(S,w){r.disableAll(),w.isWebGL2&&r.enable(0),w.supportsVertexTextures&&r.enable(1),w.instancing&&r.enable(2),w.instancingColor&&r.enable(3),w.map&&r.enable(4),w.matcap&&r.enable(5),w.envMap&&r.enable(6),w.lightMap&&r.enable(7),w.aoMap&&r.enable(8),w.emissiveMap&&r.enable(9),w.bumpMap&&r.enable(10),w.normalMap&&r.enable(11),w.objectSpaceNormalMap&&r.enable(12),w.tangentSpaceNormalMap&&r.enable(13),w.clearcoat&&r.enable(14),w.clearcoatMap&&r.enable(15),w.clearcoatRoughnessMap&&r.enable(16),w.clearcoatNormalMap&&r.enable(17),w.iridescence&&r.enable(18),w.iridescenceMap&&r.enable(19),w.iridescenceThicknessMap&&r.enable(20),w.displacementMap&&r.enable(21),w.specularMap&&r.enable(22),w.roughnessMap&&r.enable(23),w.metalnessMap&&r.enable(24),w.gradientMap&&r.enable(25),w.alphaMap&&r.enable(26),w.alphaTest&&r.enable(27),w.vertexColors&&r.enable(28),w.vertexAlphas&&r.enable(29),w.vertexUvs&&r.enable(30),w.vertexTangents&&r.enable(31),w.uvsVertexOnly&&r.enable(32),S.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.skinning&&r.enable(4),w.morphTargets&&r.enable(5),w.morphNormals&&r.enable(6),w.morphColors&&r.enable(7),w.premultipliedAlpha&&r.enable(8),w.shadowMapEnabled&&r.enable(9),w.physicallyCorrectLights&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.specularIntensityMap&&r.enable(15),w.specularColorMap&&r.enable(16),w.transmission&&r.enable(17),w.transmissionMap&&r.enable(18),w.thicknessMap&&r.enable(19),w.sheen&&r.enable(20),w.sheenColorMap&&r.enable(21),w.sheenRoughnessMap&&r.enable(22),w.decodeVideoTexture&&r.enable(23),w.opaque&&r.enable(24),S.push(r.mask)}function b(S){const w=g[S.type];let G;if(w){const q=ke[w];G=jl.clone(q.uniforms)}else G=S.uniforms;return G}function y(S,w){let G;for(let q=0,at=h.length;q<at;q++){const N=h[q];if(N.cacheKey===w){G=N,++G.usedTimes;break}}return G===void 0&&(G=new lf(o,w,S,s),h.push(G)),G}function M(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:P,programs:h,dispose:B}}function ff(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function i(s,a,r){o.get(s)[a]=r}function n(){o=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function pf(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ea(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Pa(){const o=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(c,d,p,g,m,f){let _=o[t];return _===void 0?(_={id:c.id,object:c,geometry:d,material:p,groupOrder:g,renderOrder:c.renderOrder,z:m,group:f},o[t]=_):(_.id=c.id,_.object=c,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=c.renderOrder,_.z=m,_.group=f),t++,_}function r(c,d,p,g,m,f){const _=a(c,d,p,g,m,f);p.transmission>0?i.push(_):p.transparent===!0?n.push(_):e.push(_)}function l(c,d,p,g,m,f){const _=a(c,d,p,g,m,f);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function h(c,d){e.length>1&&e.sort(c||pf),i.length>1&&i.sort(d||Ea),n.length>1&&n.sort(d||Ea)}function u(){for(let c=t,d=o.length;c<d;c++){const p=o[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:u,sort:h}}function mf(){let o=new WeakMap;function t(i,n){const s=o.get(i);let a;return s===void 0?(a=new Pa,o.set(i,[a])):n>=s.length?(a=new Pa,s.push(a)):a=s[n],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function gf(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ht};break;case"SpotLight":e={position:new C,direction:new C,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new C,halfWidth:new C,halfHeight:new C};break}return o[t.id]=e,e}}}function _f(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let xf=0;function Sf(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function vf(o,t){const e=new gf,i=_f(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new C);const s=new C,a=new Ct,r=new Ct;function l(u,c){let d=0,p=0,g=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let m=0,f=0,_=0,A=0,b=0,y=0,M=0,P=0,B=0,S=0;u.sort(Sf);const w=c!==!0?Math.PI:1;for(let q=0,at=u.length;q<at;q++){const N=u[q],R=N.color,X=N.intensity,K=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=R.r*X*w,p+=R.g*X*w,g+=R.b*X*w;else if(N.isLightProbe)for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],X);else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const I=N.shadow,F=i.get(N);F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,n.directionalShadow[m]=F,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=N.shadow.matrix,y++}n.directional[m]=V,m++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(R).multiplyScalar(X*w),V.distance=K,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[_]=V;const I=N.shadow;if(N.map&&(n.spotLightMap[B]=N.map,B++,I.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[_]=I.matrix,N.castShadow){const F=i.get(N);F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=Z,P++}_++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(R).multiplyScalar(X),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=V,A++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),V.distance=N.distance,V.decay=N.decay,N.castShadow){const I=N.shadow,F=i.get(N);F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,F.shadowCameraNear=I.camera.near,F.shadowCameraFar=I.camera.far,n.pointShadow[f]=F,n.pointShadowMap[f]=Z,n.pointShadowMatrix[f]=N.shadow.matrix,M++}n.point[f]=V,f++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(X*w),V.groundColor.copy(N.groundColor).multiplyScalar(X*w),n.hemi[b]=V,b++}}A>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const G=n.hash;(G.directionalLength!==m||G.pointLength!==f||G.spotLength!==_||G.rectAreaLength!==A||G.hemiLength!==b||G.numDirectionalShadows!==y||G.numPointShadows!==M||G.numSpotShadows!==P||G.numSpotMaps!==B)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=A,n.point.length=f,n.hemi.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=P+B-S,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=S,G.directionalLength=m,G.pointLength=f,G.spotLength=_,G.rectAreaLength=A,G.hemiLength=b,G.numDirectionalShadows=y,G.numPointShadows=M,G.numSpotShadows=P,G.numSpotMaps=B,n.version=xf++)}function h(u,c){let d=0,p=0,g=0,m=0,f=0;const _=c.matrixWorldInverse;for(let A=0,b=u.length;A<b;A++){const y=u[A];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(y.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),r.identity(),a.copy(y.matrixWorld),a.premultiply(_),r.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=n.hemi[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),f++}}}return{setup:l,setupView:h,state:n}}function Ca(o,t){const e=new vf(o,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(c){i.push(c)}function r(c){n.push(c)}function l(c){e.setup(i,c)}function h(c){e.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:r}}function Mf(o,t){let e=new WeakMap;function i(s,a=0){const r=e.get(s);let l;return r===void 0?(l=new Ca(o,t),e.set(s,[l])):a>=r.length?(l=new Ca(o,t),r.push(l)):l=r[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class bf extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tf extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Af=`uniform sampler2D shadow_pass;
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
}`;function wf(o,t,e){let i=new so;const n=new It,s=new It,a=new re,r=new bf({depthPacking:Sl}),l=new Tf,h={},u=e.maxTextureSize,c={0:Ce,1:on,2:di},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:yf,fragmentShader:Af}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new We(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va,this.render=function(y,M,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const B=o.getRenderTarget(),S=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),G=o.state;G.setBlending(fi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let q=0,at=y.length;q<at;q++){const N=y[q],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);const X=R.getFrameExtents();if(n.multiply(X),s.copy(R.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/X.x),n.x=s.x*X.x,R.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/X.y),n.y=s.y*X.y,R.mapSize.y=s.y)),R.map===null){const Z=this.type!==Mn?{minFilter:pe,magFilter:pe}:{};R.map=new Ii(n.x,n.y,Z),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const K=R.getViewportCount();for(let Z=0;Z<K;Z++){const V=R.getViewport(Z);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),G.viewport(a),R.updateMatrices(N,Z),i=R.getFrustum(),b(M,P,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===Mn&&_(R,P),R.needsUpdate=!1}f.needsUpdate=!1,o.setRenderTarget(B,S,w)};function _(y,M){const P=t.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ii(n.x,n.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,P,d,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,P,p,m,null)}function A(y,M,P,B,S,w){let G=null;const q=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(q!==void 0?G=q:G=P.isPointLight===!0?l:r,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const at=G.uuid,N=M.uuid;let R=h[at];R===void 0&&(R={},h[at]=R);let X=R[N];X===void 0&&(X=G.clone(),R[N]=X),G=X}return G.visible=M.visible,G.wireframe=M.wireframe,w===Mn?G.side=M.shadowSide!==null?M.shadowSide:M.side:G.side=M.shadowSide!==null?M.shadowSide:c[M.side],G.alphaMap=M.alphaMap,G.alphaTest=M.alphaTest,G.clipShadows=M.clipShadows,G.clippingPlanes=M.clippingPlanes,G.clipIntersection=M.clipIntersection,G.displacementMap=M.displacementMap,G.displacementScale=M.displacementScale,G.displacementBias=M.displacementBias,G.wireframeLinewidth=M.wireframeLinewidth,G.linewidth=M.linewidth,P.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(P.matrixWorld),G.nearDistance=B,G.farDistance=S),G}function b(y,M,P,B,S){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Mn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const q=t.update(y),at=y.material;if(Array.isArray(at)){const N=q.groups;for(let R=0,X=N.length;R<X;R++){const K=N[R],Z=at[K.materialIndex];if(Z&&Z.visible){const V=A(y,Z,B,P.near,P.far,S);o.renderBufferDirect(P,null,q,V,y,K)}}}else if(at.visible){const N=A(y,at,B,P.near,P.far,S);o.renderBufferDirect(P,null,q,N,y,null)}}const G=y.children;for(let q=0,at=G.length;q<at;q++)b(G[q],M,P,B,S)}}function Ef(o,t,e){const i=e.isWebGL2;function n(){let E=!1;const H=new re;let Y=null;const rt=new re(0,0,0,0);return{setMask:function(ht){Y!==ht&&!E&&(o.colorMask(ht,ht,ht,ht),Y=ht)},setLocked:function(ht){E=ht},setClear:function(ht,Rt,ee,ae,mi){mi===!0&&(ht*=ae,Rt*=ae,ee*=ae),H.set(ht,Rt,ee,ae),rt.equals(H)===!1&&(o.clearColor(ht,Rt,ee,ae),rt.copy(H))},reset:function(){E=!1,Y=null,rt.set(-1,0,0,0)}}}function s(){let E=!1,H=null,Y=null,rt=null;return{setTest:function(ht){ht?Ot(2929):xt(2929)},setMask:function(ht){H!==ht&&!E&&(o.depthMask(ht),H=ht)},setFunc:function(ht){if(Y!==ht){switch(ht){case zo:o.depthFunc(512);break;case Ho:o.depthFunc(519);break;case Uo:o.depthFunc(513);break;case $s:o.depthFunc(515);break;case Vo:o.depthFunc(514);break;case ko:o.depthFunc(518);break;case Wo:o.depthFunc(516);break;case Xo:o.depthFunc(517);break;default:o.depthFunc(515)}Y=ht}},setLocked:function(ht){E=ht},setClear:function(ht){rt!==ht&&(o.clearDepth(ht),rt=ht)},reset:function(){E=!1,H=null,Y=null,rt=null}}}function a(){let E=!1,H=null,Y=null,rt=null,ht=null,Rt=null,ee=null,ae=null,mi=null;return{setTest:function(Wt){E||(Wt?Ot(2960):xt(2960))},setMask:function(Wt){H!==Wt&&!E&&(o.stencilMask(Wt),H=Wt)},setFunc:function(Wt,Ke,be){(Y!==Wt||rt!==Ke||ht!==be)&&(o.stencilFunc(Wt,Ke,be),Y=Wt,rt=Ke,ht=be)},setOp:function(Wt,Ke,be){(Rt!==Wt||ee!==Ke||ae!==be)&&(o.stencilOp(Wt,Ke,be),Rt=Wt,ee=Ke,ae=be)},setLocked:function(Wt){E=Wt},setClear:function(Wt){mi!==Wt&&(o.clearStencil(Wt),mi=Wt)},reset:function(){E=!1,H=null,Y=null,rt=null,ht=null,Rt=null,ee=null,ae=null,mi=null}}}const r=new n,l=new s,h=new a,u=new WeakMap,c=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,_=!1,A=null,b=null,y=null,M=null,P=null,B=null,S=null,w=!1,G=null,q=null,at=null,N=null,R=null;const X=o.getParameter(35661);let K=!1,Z=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=Z>=2);let I=null,F={};const tt=o.getParameter(3088),Q=o.getParameter(2978),j=new re().fromArray(tt),lt=new re().fromArray(Q);function Mt(E,H,Y){const rt=new Uint8Array(4),ht=o.createTexture();o.bindTexture(E,ht),o.texParameteri(E,10241,9728),o.texParameteri(E,10240,9728);for(let Rt=0;Rt<Y;Rt++)o.texImage2D(H+Rt,0,6408,1,1,0,6408,5121,rt);return ht}const W={};W[3553]=Mt(3553,3553,1),W[34067]=Mt(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Ot(2929),l.setFunc($s),ce(!1),Ue(vr),Ot(2884),ne(fi);function Ot(E){d[E]!==!0&&(o.enable(E),d[E]=!0)}function xt(E){d[E]!==!1&&(o.disable(E),d[E]=!1)}function bt(E,H){return p[E]!==H?(o.bindFramebuffer(E,H),p[E]=H,i&&(E===36009&&(p[36160]=H),E===36160&&(p[36009]=H)),!0):!1}function ot(E,H){let Y=m,rt=!1;if(E)if(Y=g.get(H),Y===void 0&&(Y=[],g.set(H,Y)),E.isWebGLMultipleRenderTargets){const ht=E.texture;if(Y.length!==ht.length||Y[0]!==36064){for(let Rt=0,ee=ht.length;Rt<ee;Rt++)Y[Rt]=36064+Rt;Y.length=ht.length,rt=!0}}else Y[0]!==36064&&(Y[0]=36064,rt=!0);else Y[0]!==1029&&(Y[0]=1029,rt=!0);rt&&(e.isWebGL2?o.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ut(E){return f!==E?(o.useProgram(E),f=E,!0):!1}const Et={[tn]:32774,[Po]:32778,[Co]:32779};if(i)Et[yr]=32775,Et[Ar]=32776;else{const E=t.get("EXT_blend_minmax");E!==null&&(Et[yr]=E.MIN_EXT,Et[Ar]=E.MAX_EXT)}const gt={[Do]:0,[Lo]:1,[Io]:768,[ka]:770,[Oo]:776,[Fo]:774,[Go]:772,[Ro]:769,[Wa]:771,[No]:775,[Bo]:773};function ne(E,H,Y,rt,ht,Rt,ee,ae){if(E===fi){_===!0&&(xt(3042),_=!1);return}if(_===!1&&(Ot(3042),_=!0),E!==Eo){if(E!==A||ae!==w){if((b!==tn||P!==tn)&&(o.blendEquation(32774),b=tn,P=tn),ae)switch(E){case rn:o.blendFuncSeparate(1,771,1,771);break;case Mr:o.blendFunc(1,1);break;case br:o.blendFuncSeparate(0,769,0,1);break;case Tr:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case rn:o.blendFuncSeparate(770,771,1,771);break;case Mr:o.blendFunc(770,1);break;case br:o.blendFuncSeparate(0,769,0,1);break;case Tr:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}y=null,M=null,B=null,S=null,A=E,w=ae}return}ht=ht||H,Rt=Rt||Y,ee=ee||rt,(H!==b||ht!==P)&&(o.blendEquationSeparate(Et[H],Et[ht]),b=H,P=ht),(Y!==y||rt!==M||Rt!==B||ee!==S)&&(o.blendFuncSeparate(gt[Y],gt[rt],gt[Rt],gt[ee]),y=Y,M=rt,B=Rt,S=ee),A=E,w=null}function de(E,H){E.side===di?xt(2884):Ot(2884);let Y=E.side===Ce;H&&(Y=!Y),ce(Y),E.blending===rn&&E.transparent===!1?ne(fi):ne(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),r.setMask(E.colorWrite);const rt=E.stencilWrite;h.setTest(rt),rt&&(h.setMask(E.stencilWriteMask),h.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),h.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),zt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Ot(32926):xt(32926)}function ce(E){G!==E&&(E?o.frontFace(2304):o.frontFace(2305),G=E)}function Ue(E){E!==yo?(Ot(2884),E!==q&&(E===vr?o.cullFace(1029):E===Ao?o.cullFace(1028):o.cullFace(1032))):xt(2884),q=E}function se(E){E!==at&&(K&&o.lineWidth(E),at=E)}function zt(E,H,Y){E?(Ot(32823),(N!==H||R!==Y)&&(o.polygonOffset(H,Y),N=H,R=Y)):xt(32823)}function qe(E){E?Ot(3089):xt(3089)}function Ye(E){E===void 0&&(E=33984+X-1),I!==E&&(o.activeTexture(E),I=E)}function T(E,H,Y){Y===void 0&&(I===null?Y=33984+X-1:Y=I);let rt=F[Y];rt===void 0&&(rt={type:void 0,texture:void 0},F[Y]=rt),(rt.type!==E||rt.texture!==H)&&(I!==Y&&(o.activeTexture(Y),I=Y),o.bindTexture(E,H||W[E]),rt.type=E,rt.texture=H)}function x(){const E=F[I];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function J(){try{o.compressedTexImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function nt(){try{o.texSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function St(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function st(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function k(){try{o.texStorage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pt(){try{o.texStorage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function _t(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ct(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function mt(E){j.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),j.copy(E))}function dt(E){lt.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),lt.copy(E))}function Lt(E,H){let Y=c.get(H);Y===void 0&&(Y=new WeakMap,c.set(H,Y));let rt=Y.get(E);rt===void 0&&(rt=o.getUniformBlockIndex(H,E.name),Y.set(E,rt))}function kt(E,H){const rt=c.get(H).get(E);u.get(E)!==rt&&(o.uniformBlockBinding(H,rt,E.__bindingPointIndex),u.set(E,rt))}function te(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},I=null,F={},p={},g=new WeakMap,m=[],f=null,_=!1,A=null,b=null,y=null,M=null,P=null,B=null,S=null,w=!1,G=null,q=null,at=null,N=null,R=null,j.set(0,0,o.canvas.width,o.canvas.height),lt.set(0,0,o.canvas.width,o.canvas.height),r.reset(),l.reset(),h.reset()}return{buffers:{color:r,depth:l,stencil:h},enable:Ot,disable:xt,bindFramebuffer:bt,drawBuffers:ot,useProgram:Ut,setBlending:ne,setMaterial:de,setFlipSided:ce,setCullFace:Ue,setLineWidth:se,setPolygonOffset:zt,setScissorTest:qe,activeTexture:Ye,bindTexture:T,unbindTexture:x,compressedTexImage2D:z,compressedTexImage3D:J,texImage2D:_t,texImage3D:ct,updateUBOMapping:Lt,uniformBlockBinding:kt,texStorage2D:k,texStorage3D:pt,texSubImage2D:et,texSubImage3D:nt,compressedTexSubImage2D:St,compressedTexSubImage3D:st,scissor:mt,viewport:dt,reset:te}}function Pf(o,t,e,i,n,s,a){const r=n.isWebGL2,l=n.maxTextures,h=n.maxCubemapSize,u=n.maxTextureSize,c=n.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,x){return _?new OffscreenCanvas(T,x):cs("canvas")}function b(T,x,z,J){let et=1;if((T.width>J||T.height>J)&&(et=J/Math.max(T.width,T.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const nt=x?ls:Math.floor,St=nt(et*T.width),st=nt(et*T.height);m===void 0&&(m=A(St,st));const k=z?A(St,st):m;return k.width=St,k.height=st,k.getContext("2d").drawImage(T,0,0,St,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+St+"x"+st+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return rr(T.width)&&rr(T.height)}function M(T){return r?!1:T.wrapS!==Fe||T.wrapT!==Fe||T.minFilter!==pe&&T.minFilter!==we}function P(T,x){return T.generateMipmaps&&x&&T.minFilter!==pe&&T.minFilter!==we}function B(T){o.generateMipmap(T)}function S(T,x,z,J,et=!1){if(r===!1)return x;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let nt=x;return x===6403&&(z===5126&&(nt=33326),z===5131&&(nt=33325),z===5121&&(nt=33321)),x===33319&&(z===5126&&(nt=33328),z===5131&&(nt=33327),z===5121&&(nt=33323)),x===6408&&(z===5126&&(nt=34836),z===5131&&(nt=34842),z===5121&&(nt=J===Yt&&et===!1?35907:32856),z===32819&&(nt=32854),z===32820&&(nt=32855)),(nt===33325||nt===33326||nt===33327||nt===33328||nt===34842||nt===34836)&&t.get("EXT_color_buffer_float"),nt}function w(T,x,z){return P(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==pe&&T.minFilter!==we?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function G(T){return T===pe||T===wr||T===Er?9728:9729}function q(T){const x=T.target;x.removeEventListener("dispose",q),N(x),x.isVideoTexture&&g.delete(x)}function at(T){const x=T.target;x.removeEventListener("dispose",at),X(x)}function N(T){const x=i.get(T);if(x.__webglInit===void 0)return;const z=T.source,J=f.get(z);if(J){const et=J[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(T),Object.keys(J).length===0&&f.delete(z)}i.remove(T)}function R(T){const x=i.get(T);o.deleteTexture(x.__webglTexture);const z=T.source,J=f.get(z);delete J[x.__cacheKey],a.memory.textures--}function X(T){const x=T.texture,z=i.get(T),J=i.get(x);if(J.__webglTexture!==void 0&&(o.deleteTexture(J.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)o.deleteFramebuffer(z.__webglFramebuffer[et]),z.__webglDepthbuffer&&o.deleteRenderbuffer(z.__webglDepthbuffer[et]);else{if(o.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&o.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let et=0;et<z.__webglColorRenderbuffer.length;et++)z.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(z.__webglColorRenderbuffer[et]);z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let et=0,nt=x.length;et<nt;et++){const St=i.get(x[et]);St.__webglTexture&&(o.deleteTexture(St.__webglTexture),a.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(T)}let K=0;function Z(){K=0}function V(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function I(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.encoding),x.join()}function F(T,x){const z=i.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(z,T,x);return}}e.bindTexture(3553,z.__webglTexture,33984+x)}function tt(T,x){const z=i.get(T);if(T.version>0&&z.__version!==T.version){xt(z,T,x);return}e.bindTexture(35866,z.__webglTexture,33984+x)}function Q(T,x){const z=i.get(T);if(T.version>0&&z.__version!==T.version){xt(z,T,x);return}e.bindTexture(32879,z.__webglTexture,33984+x)}function j(T,x){const z=i.get(T);if(T.version>0&&z.__version!==T.version){bt(z,T,x);return}e.bindTexture(34067,z.__webglTexture,33984+x)}const lt={[ir]:10497,[Fe]:33071,[nr]:33648},Mt={[pe]:9728,[wr]:9984,[Er]:9986,[we]:9729,[$o]:9985,[ps]:9987};function W(T,x,z){if(z?(o.texParameteri(T,10242,lt[x.wrapS]),o.texParameteri(T,10243,lt[x.wrapT]),(T===32879||T===35866)&&o.texParameteri(T,32882,lt[x.wrapR]),o.texParameteri(T,10240,Mt[x.magFilter]),o.texParameteri(T,10241,Mt[x.minFilter])):(o.texParameteri(T,10242,33071),o.texParameteri(T,10243,33071),(T===32879||T===35866)&&o.texParameteri(T,32882,33071),(x.wrapS!==Fe||x.wrapT!==Fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,10240,G(x.magFilter)),o.texParameteri(T,10241,G(x.minFilter)),x.minFilter!==pe&&x.minFilter!==we&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(x.type===Ai&&t.has("OES_texture_float_linear")===!1||r===!1&&x.type===En&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(o.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ot(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",q));const J=x.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const nt=I(x);if(nt!==T.__cacheKey){et[nt]===void 0&&(et[nt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[nt].usedTimes++;const St=et[T.__cacheKey];St!==void 0&&(et[T.__cacheKey].usedTimes--,St.usedTimes===0&&R(x)),T.__cacheKey=nt,T.__webglTexture=et[nt].texture}return z}function xt(T,x,z){let J=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=35866),x.isData3DTexture&&(J=32879);const et=Ot(T,x),nt=x.source;e.bindTexture(J,T.__webglTexture,33984+z);const St=i.get(nt);if(nt.version!==St.__version||et===!0){e.activeTexture(33984+z),o.pixelStorei(37440,x.flipY),o.pixelStorei(37441,x.premultiplyAlpha),o.pixelStorei(3317,x.unpackAlignment),o.pixelStorei(37443,0);const st=M(x)&&y(x.image)===!1;let k=b(x.image,st,!1,u);k=Ye(x,k);const pt=y(k)||r,_t=s.convert(x.format,x.encoding);let ct=s.convert(x.type),mt=S(x.internalFormat,_t,ct,x.encoding,x.isVideoTexture);W(J,x,pt);let dt;const Lt=x.mipmaps,kt=r&&x.isVideoTexture!==!0,te=St.__version===void 0||et===!0,E=w(x,k,pt);if(x.isDepthTexture)mt=6402,r?x.type===Ai?mt=36012:x.type===yi?mt=33190:x.type===an?mt=35056:mt=33189:x.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Pi&&mt===6402&&x.type!==Ya&&x.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=yi,ct=s.convert(x.type)),x.format===hn&&mt===6402&&(mt=34041,x.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=an,ct=s.convert(x.type))),te&&(kt?e.texStorage2D(3553,1,mt,k.width,k.height):e.texImage2D(3553,0,mt,k.width,k.height,0,_t,ct,null));else if(x.isDataTexture)if(Lt.length>0&&pt){kt&&te&&e.texStorage2D(3553,E,mt,Lt[0].width,Lt[0].height);for(let H=0,Y=Lt.length;H<Y;H++)dt=Lt[H],kt?e.texSubImage2D(3553,H,0,0,dt.width,dt.height,_t,ct,dt.data):e.texImage2D(3553,H,mt,dt.width,dt.height,0,_t,ct,dt.data);x.generateMipmaps=!1}else kt?(te&&e.texStorage2D(3553,E,mt,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,_t,ct,k.data)):e.texImage2D(3553,0,mt,k.width,k.height,0,_t,ct,k.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&te&&e.texStorage3D(35866,E,mt,Lt[0].width,Lt[0].height,k.depth);for(let H=0,Y=Lt.length;H<Y;H++)dt=Lt[H],x.format!==Ne?_t!==null?kt?e.compressedTexSubImage3D(35866,H,0,0,0,dt.width,dt.height,k.depth,_t,dt.data,0,0):e.compressedTexImage3D(35866,H,mt,dt.width,dt.height,k.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(35866,H,0,0,0,dt.width,dt.height,k.depth,_t,ct,dt.data):e.texImage3D(35866,H,mt,dt.width,dt.height,k.depth,0,_t,ct,dt.data)}else{kt&&te&&e.texStorage2D(3553,E,mt,Lt[0].width,Lt[0].height);for(let H=0,Y=Lt.length;H<Y;H++)dt=Lt[H],x.format!==Ne?_t!==null?kt?e.compressedTexSubImage2D(3553,H,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(3553,H,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(3553,H,0,0,dt.width,dt.height,_t,ct,dt.data):e.texImage2D(3553,H,mt,dt.width,dt.height,0,_t,ct,dt.data)}else if(x.isDataArrayTexture)kt?(te&&e.texStorage3D(35866,E,mt,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,_t,ct,k.data)):e.texImage3D(35866,0,mt,k.width,k.height,k.depth,0,_t,ct,k.data);else if(x.isData3DTexture)kt?(te&&e.texStorage3D(32879,E,mt,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,_t,ct,k.data)):e.texImage3D(32879,0,mt,k.width,k.height,k.depth,0,_t,ct,k.data);else if(x.isFramebufferTexture){if(te)if(kt)e.texStorage2D(3553,E,mt,k.width,k.height);else{let H=k.width,Y=k.height;for(let rt=0;rt<E;rt++)e.texImage2D(3553,rt,mt,H,Y,0,_t,ct,null),H>>=1,Y>>=1}}else if(Lt.length>0&&pt){kt&&te&&e.texStorage2D(3553,E,mt,Lt[0].width,Lt[0].height);for(let H=0,Y=Lt.length;H<Y;H++)dt=Lt[H],kt?e.texSubImage2D(3553,H,0,0,_t,ct,dt):e.texImage2D(3553,H,mt,_t,ct,dt);x.generateMipmaps=!1}else kt?(te&&e.texStorage2D(3553,E,mt,k.width,k.height),e.texSubImage2D(3553,0,0,0,_t,ct,k)):e.texImage2D(3553,0,mt,_t,ct,k);P(x,pt)&&B(J),St.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function bt(T,x,z){if(x.image.length!==6)return;const J=Ot(T,x),et=x.source;e.bindTexture(34067,T.__webglTexture,33984+z);const nt=i.get(et);if(et.version!==nt.__version||J===!0){e.activeTexture(33984+z),o.pixelStorei(37440,x.flipY),o.pixelStorei(37441,x.premultiplyAlpha),o.pixelStorei(3317,x.unpackAlignment),o.pixelStorei(37443,0);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,k=[];for(let H=0;H<6;H++)!St&&!st?k[H]=b(x.image[H],!1,!0,h):k[H]=st?x.image[H].image:x.image[H],k[H]=Ye(x,k[H]);const pt=k[0],_t=y(pt)||r,ct=s.convert(x.format,x.encoding),mt=s.convert(x.type),dt=S(x.internalFormat,ct,mt,x.encoding),Lt=r&&x.isVideoTexture!==!0,kt=nt.__version===void 0||J===!0;let te=w(x,pt,_t);W(34067,x,_t);let E;if(St){Lt&&kt&&e.texStorage2D(34067,te,dt,pt.width,pt.height);for(let H=0;H<6;H++){E=k[H].mipmaps;for(let Y=0;Y<E.length;Y++){const rt=E[Y];x.format!==Ne?ct!==null?Lt?e.compressedTexSubImage2D(34069+H,Y,0,0,rt.width,rt.height,ct,rt.data):e.compressedTexImage2D(34069+H,Y,dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(34069+H,Y,0,0,rt.width,rt.height,ct,mt,rt.data):e.texImage2D(34069+H,Y,dt,rt.width,rt.height,0,ct,mt,rt.data)}}}else{E=x.mipmaps,Lt&&kt&&(E.length>0&&te++,e.texStorage2D(34067,te,dt,k[0].width,k[0].height));for(let H=0;H<6;H++)if(st){Lt?e.texSubImage2D(34069+H,0,0,0,k[H].width,k[H].height,ct,mt,k[H].data):e.texImage2D(34069+H,0,dt,k[H].width,k[H].height,0,ct,mt,k[H].data);for(let Y=0;Y<E.length;Y++){const ht=E[Y].image[H].image;Lt?e.texSubImage2D(34069+H,Y+1,0,0,ht.width,ht.height,ct,mt,ht.data):e.texImage2D(34069+H,Y+1,dt,ht.width,ht.height,0,ct,mt,ht.data)}}else{Lt?e.texSubImage2D(34069+H,0,0,0,ct,mt,k[H]):e.texImage2D(34069+H,0,dt,ct,mt,k[H]);for(let Y=0;Y<E.length;Y++){const rt=E[Y];Lt?e.texSubImage2D(34069+H,Y+1,0,0,ct,mt,rt.image[H]):e.texImage2D(34069+H,Y+1,dt,ct,mt,rt.image[H])}}}P(x,_t)&&B(34067),nt.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ot(T,x,z,J,et){const nt=s.convert(z.format,z.encoding),St=s.convert(z.type),st=S(z.internalFormat,nt,St,z.encoding);i.get(x).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,st,x.width,x.height,x.depth,0,nt,St,null):e.texImage2D(et,0,st,x.width,x.height,0,nt,St,null)),e.bindFramebuffer(36160,T),zt(x)?d.framebufferTexture2DMultisampleEXT(36160,J,et,i.get(z).__webglTexture,0,se(x)):(et===3553||et>=34069&&et<=34074)&&o.framebufferTexture2D(36160,J,et,i.get(z).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ut(T,x,z){if(o.bindRenderbuffer(36161,T),x.depthBuffer&&!x.stencilBuffer){let J=33189;if(z||zt(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Ai?J=36012:et.type===yi&&(J=33190));const nt=se(x);zt(x)?d.renderbufferStorageMultisampleEXT(36161,nt,J,x.width,x.height):o.renderbufferStorageMultisample(36161,nt,J,x.width,x.height)}else o.renderbufferStorage(36161,J,x.width,x.height);o.framebufferRenderbuffer(36160,36096,36161,T)}else if(x.depthBuffer&&x.stencilBuffer){const J=se(x);z&&zt(x)===!1?o.renderbufferStorageMultisample(36161,J,35056,x.width,x.height):zt(x)?d.renderbufferStorageMultisampleEXT(36161,J,35056,x.width,x.height):o.renderbufferStorage(36161,34041,x.width,x.height),o.framebufferRenderbuffer(36160,33306,36161,T)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<J.length;et++){const nt=J[et],St=s.convert(nt.format,nt.encoding),st=s.convert(nt.type),k=S(nt.internalFormat,St,st,nt.encoding),pt=se(x);z&&zt(x)===!1?o.renderbufferStorageMultisample(36161,pt,k,x.width,x.height):zt(x)?d.renderbufferStorageMultisampleEXT(36161,pt,k,x.width,x.height):o.renderbufferStorage(36161,k,x.width,x.height)}}o.bindRenderbuffer(36161,null)}function Et(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const J=i.get(x.depthTexture).__webglTexture,et=se(x);if(x.depthTexture.format===Pi)zt(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,et):o.framebufferTexture2D(36160,36096,3553,J,0);else if(x.depthTexture.format===hn)zt(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,et):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function gt(T){const x=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,T)}else if(z){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=o.createRenderbuffer(),Ut(x.__webglDepthbuffer[J],T,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=o.createRenderbuffer(),Ut(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function ne(T,x,z){const J=i.get(T);x!==void 0&&ot(J.__webglFramebuffer,T,T.texture,36064,3553),z!==void 0&&gt(T)}function de(T){const x=T.texture,z=i.get(T),J=i.get(x);T.addEventListener("dispose",at),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=x.version,a.memory.textures++);const et=T.isWebGLCubeRenderTarget===!0,nt=T.isWebGLMultipleRenderTargets===!0,St=y(T)||r;if(et){z.__webglFramebuffer=[];for(let st=0;st<6;st++)z.__webglFramebuffer[st]=o.createFramebuffer()}else{if(z.__webglFramebuffer=o.createFramebuffer(),nt)if(n.drawBuffers){const st=T.texture;for(let k=0,pt=st.length;k<pt;k++){const _t=i.get(st[k]);_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&T.samples>0&&zt(T)===!1){const st=nt?x:[x];z.__webglMultisampledFramebuffer=o.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let k=0;k<st.length;k++){const pt=st[k];z.__webglColorRenderbuffer[k]=o.createRenderbuffer(),o.bindRenderbuffer(36161,z.__webglColorRenderbuffer[k]);const _t=s.convert(pt.format,pt.encoding),ct=s.convert(pt.type),mt=S(pt.internalFormat,_t,ct,pt.encoding,T.isXRRenderTarget===!0),dt=se(T);o.renderbufferStorageMultisample(36161,dt,mt,T.width,T.height),o.framebufferRenderbuffer(36160,36064+k,36161,z.__webglColorRenderbuffer[k])}o.bindRenderbuffer(36161,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,J.__webglTexture),W(34067,x,St);for(let st=0;st<6;st++)ot(z.__webglFramebuffer[st],T,x,36064,34069+st);P(x,St)&&B(34067),e.unbindTexture()}else if(nt){const st=T.texture;for(let k=0,pt=st.length;k<pt;k++){const _t=st[k],ct=i.get(_t);e.bindTexture(3553,ct.__webglTexture),W(3553,_t,St),ot(z.__webglFramebuffer,T,_t,36064+k,3553),P(_t,St)&&B(3553)}e.unbindTexture()}else{let st=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(r?st=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,J.__webglTexture),W(st,x,St),ot(z.__webglFramebuffer,T,x,36064,st),P(x,St)&&B(st),e.unbindTexture()}T.depthBuffer&&gt(T)}function ce(T){const x=y(T)||r,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,et=z.length;J<et;J++){const nt=z[J];if(P(nt,x)){const St=T.isWebGLCubeRenderTarget?34067:3553,st=i.get(nt).__webglTexture;e.bindTexture(St,st),B(St),e.unbindTexture()}}}function Ue(T){if(r&&T.samples>0&&zt(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,J=T.height;let et=16384;const nt=[],St=T.stencilBuffer?33306:36096,st=i.get(T),k=T.isWebGLMultipleRenderTargets===!0;if(k)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,st.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,st.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,st.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){nt.push(36064+pt),T.depthBuffer&&nt.push(St);const _t=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(_t===!1&&(T.depthBuffer&&(et|=256),T.stencilBuffer&&(et|=1024)),k&&o.framebufferRenderbuffer(36008,36064,36161,st.__webglColorRenderbuffer[pt]),_t===!0&&(o.invalidateFramebuffer(36008,[St]),o.invalidateFramebuffer(36009,[St])),k){const ct=i.get(x[pt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ct,0)}o.blitFramebuffer(0,0,z,J,0,0,z,J,et,9728),p&&o.invalidateFramebuffer(36008,nt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),k)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,st.__webglColorRenderbuffer[pt]);const _t=i.get(x[pt]).__webglTexture;e.bindFramebuffer(36160,st.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,_t,0)}e.bindFramebuffer(36009,st.__webglMultisampledFramebuffer)}}function se(T){return Math.min(c,T.samples)}function zt(T){const x=i.get(T);return r&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function qe(T){const x=a.render.frame;g.get(T)!==x&&(g.set(T,x),T.update())}function Ye(T,x){const z=T.encoding,J=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===sr||z!==Li&&(z===Yt?r===!1?t.has("EXT_sRGB")===!0&&J===Ne?(T.format=sr,T.minFilter=we,T.generateMipmaps=!1):x=Qa.sRGBToLinear(x):(J!==Ne||et!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),x}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=F,this.setTexture2DArray=tt,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=ne,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=zt}function Cf(o,t,e){const i=e.isWebGL2;function n(s,a=null){let r;if(s===Di)return 5121;if(s===nl)return 32819;if(s===sl)return 32820;if(s===tl)return 5120;if(s===el)return 5122;if(s===Ya)return 5123;if(s===il)return 5124;if(s===yi)return 5125;if(s===Ai)return 5126;if(s===En)return i?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===rl)return 6406;if(s===Ne)return 6408;if(s===ol)return 6409;if(s===ll)return 6410;if(s===Pi)return 6402;if(s===hn)return 34041;if(s===cl)return 6403;if(s===al)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===sr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===hl)return 36244;if(s===ul)return 33319;if(s===dl)return 33320;if(s===fl)return 36249;if(s===vs||s===Ms||s===bs||s===Ts)if(a===Yt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pr||s===Cr||s===Dr||s===Lr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pl)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ir||s===Rr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Ir)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Rr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gr||s===Br||s===Fr||s===Nr||s===Or||s===zr||s===Hr||s===Ur||s===Vr||s===kr||s===Wr||s===Xr||s===qr||s===Yr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Gr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Br)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Or)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ur)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Kr)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===an?i?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}class Df extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const r=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,i);if(h.joints[m.jointName]===void 0){const A=new Ei;A.matrixAutoUpdate=!1,A.visible=!1,h.joints[m.jointName]=A,h.add(A)}const _=h.joints[m.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),p=.02,g=.005;h.inputState.pinching&&d>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}}class If extends ze{constructor(t,e,i,n,s,a,r,l,h,u){if(u=u!==void 0?u:Pi,u!==Pi&&u!==hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pi&&(i=yi),i===void 0&&u===hn&&(i=an),super(null,n,s,a,r,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:pe,this.minFilter=l!==void 0?l:pe,this.flipY=!1,this.generateMipmaps=!1}}class Rf extends pi{constructor(t,e){super();const i=this;let n=null,s=1,a=null,r="local-floor",l=null,h=null,u=null,c=null,d=null,p=null;const g=e.getContextAttributes();let m=null,f=null;const _=[],A=[],b=new Ee;b.layers.enable(1),b.viewport=new re;const y=new Ee;y.layers.enable(2),y.viewport=new re;const M=[b,y],P=new Df;P.layers.enable(1),P.layers.enable(2);let B=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=_[I];return F===void 0&&(F=new js,_[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=_[I];return F===void 0&&(F=new js,_[I]=F),F.getGripSpace()},this.getHand=function(I){let F=_[I];return F===void 0&&(F=new js,_[I]=F),F.getHandSpace()};function w(I){const F=A.indexOf(I.inputSource);if(F===-1)return;const tt=_[F];tt!==void 0&&tt.dispatchEvent({type:I.type,data:I.inputSource})}function G(){n.removeEventListener("select",w),n.removeEventListener("selectstart",w),n.removeEventListener("selectend",w),n.removeEventListener("squeeze",w),n.removeEventListener("squeezestart",w),n.removeEventListener("squeezeend",w),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",q);for(let I=0;I<_.length;I++){const F=A[I];F!==null&&(A[I]=null,_[I].disconnect(F))}B=null,S=null,t.setRenderTarget(m),d=null,c=null,u=null,n=null,f=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(I){if(n=I,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",w),n.addEventListener("selectstart",w),n.addEventListener("selectend",w),n.addEventListener("squeeze",w),n.addEventListener("squeezestart",w),n.addEventListener("squeezeend",w),n.addEventListener("end",G),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const F={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,F),n.updateRenderState({baseLayer:d}),f=new Ii(d.framebufferWidth,d.framebufferHeight,{format:Ne,type:Di,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let F=null,tt=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,F=g.stencil?hn:Pi,tt=g.stencil?an:yi);const j={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(n,e),c=u.createProjectionLayer(j),n.updateRenderState({layers:[c]}),f=new Ii(c.textureWidth,c.textureHeight,{format:Ne,type:Di,depthTexture:new If(c.textureWidth,c.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const lt=t.properties.get(f);lt.__ignoreDepthValues=c.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(r),V.setContext(n),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function q(I){for(let F=0;F<I.removed.length;F++){const tt=I.removed[F],Q=A.indexOf(tt);Q>=0&&(A[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:tt}))}for(let F=0;F<I.added.length;F++){const tt=I.added[F];let Q=A.indexOf(tt);if(Q===-1){for(let lt=0;lt<_.length;lt++)if(lt>=A.length){A.push(tt),Q=lt;break}else if(A[lt]===null){A[lt]=tt,Q=lt;break}if(Q===-1)break}const j=_[Q];j&&j.dispatchEvent({type:"connected",data:tt})}}const at=new C,N=new C;function R(I,F,tt){at.setFromMatrixPosition(F.matrixWorld),N.setFromMatrixPosition(tt.matrixWorld);const Q=at.distanceTo(N),j=F.projectionMatrix.elements,lt=tt.projectionMatrix.elements,Mt=j[14]/(j[10]-1),W=j[14]/(j[10]+1),Ot=(j[9]+1)/j[5],xt=(j[9]-1)/j[5],bt=(j[8]-1)/j[0],ot=(lt[8]+1)/lt[0],Ut=Mt*bt,Et=Mt*ot,gt=Q/(-bt+ot),ne=gt*-bt;F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ne),I.translateZ(gt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const de=Mt+gt,ce=W+gt,Ue=Ut-ne,se=Et+(Q-ne),zt=Ot*W/ce*de,qe=xt*W/ce*de;I.projectionMatrix.makePerspective(Ue,se,zt,qe,de,ce)}function X(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(n===null)return;P.near=y.near=b.near=I.near,P.far=y.far=b.far=I.far,(B!==P.near||S!==P.far)&&(n.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,S=P.far);const F=I.parent,tt=P.cameras;X(P,F);for(let j=0;j<tt.length;j++)X(tt[j],F);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),I.matrix.copy(P.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const Q=I.children;for(let j=0,lt=Q.length;j<lt;j++)Q[j].updateMatrixWorld(!0);tt.length===2?R(P,b,y):P.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){c!==null&&(c.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let K=null;function Z(I,F){if(h=F.getViewerPose(l||a),p=F,h!==null){const tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let Q=!1;tt.length!==P.cameras.length&&(P.cameras.length=0,Q=!0);for(let j=0;j<tt.length;j++){const lt=tt[j];let Mt=null;if(d!==null)Mt=d.getViewport(lt);else{const Ot=u.getViewSubImage(c,lt);Mt=Ot.viewport,j===0&&(t.setRenderTargetTextures(f,Ot.colorTexture,c.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(f))}let W=M[j];W===void 0&&(W=new Ee,W.layers.enable(j),W.viewport=new re,M[j]=W),W.matrix.fromArray(lt.transform.matrix),W.projectionMatrix.fromArray(lt.projectionMatrix),W.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),j===0&&P.matrix.copy(W.matrix),Q===!0&&P.cameras.push(W)}}for(let tt=0;tt<_.length;tt++){const Q=A[tt],j=_[tt];Q!==null&&j!==void 0&&j.update(Q,F,l||a)}K&&K(I,F),p=null}const V=new ro;V.setAnimationLoop(Z),this.setAnimationLoop=function(I){K=I},this.dispose=function(){}}}function Gf(o,t){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,A,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(m,f):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),h(m,f)):f.isMeshStandardMaterial?(n(m,f),c(m,f),f.isMeshPhysicalMaterial&&d(m,f,b)):f.isMeshMatcapMaterial?(n(m,f),p(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),g(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?r(m,f,_,A):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ce&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ce&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let A;f.map?A=f.map:f.specularMap?A=f.specularMap:f.displacementMap?A=f.displacementMap:f.normalMap?A=f.normalMap:f.bumpMap?A=f.bumpMap:f.roughnessMap?A=f.roughnessMap:f.metalnessMap?A=f.metalnessMap:f.alphaMap?A=f.alphaMap:f.emissiveMap?A=f.emissiveMap:f.clearcoatMap?A=f.clearcoatMap:f.clearcoatNormalMap?A=f.clearcoatNormalMap:f.clearcoatRoughnessMap?A=f.clearcoatRoughnessMap:f.iridescenceMap?A=f.iridescenceMap:f.iridescenceThicknessMap?A=f.iridescenceThicknessMap:f.specularIntensityMap?A=f.specularIntensityMap:f.specularColorMap?A=f.specularColorMap:f.transmissionMap?A=f.transmissionMap:f.thicknessMap?A=f.thicknessMap:f.sheenColorMap?A=f.sheenColorMap:f.sheenRoughnessMap&&(A=f.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function r(m,f,_,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=A*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ce&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function Bf(o,t,e,i){let n={},s={},a=[];const r=e.isWebGL2?o.getParameter(35375):0;function l(A,b){const y=b.program;i.uniformBlockBinding(A,y)}function h(A,b){let y=n[A.id];y===void 0&&(g(A),y=u(A),n[A.id]=y,A.addEventListener("dispose",f));const M=b.program;i.updateUBOMapping(A,M);const P=t.render.frame;s[A.id]!==P&&(d(A),s[A.id]=P)}function u(A){const b=c();A.__bindingPointIndex=b;const y=o.createBuffer(),M=A.__size,P=A.usage;return o.bindBuffer(35345,y),o.bufferData(35345,M,P),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,y),y}function c(){for(let A=0;A<r;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=n[A.id],y=A.uniforms,M=A.__cache;o.bindBuffer(35345,b);for(let P=0,B=y.length;P<B;P++){const S=y[P];if(p(S,P,M)===!0){const w=S.value,G=S.__offset;typeof w=="number"?(S.__data[0]=w,o.bufferSubData(35345,G,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):w.toArray(S.__data),o.bufferSubData(35345,G,S.__data))}}o.bindBuffer(35345,null)}function p(A,b,y){const M=A.value;if(y[b]===void 0)return typeof M=="number"?y[b]=M:y[b]=M.clone(),!0;if(typeof M=="number"){if(y[b]!==M)return y[b]=M,!0}else{const P=y[b];if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(A){const b=A.uniforms;let y=0;const M=16;let P=0;for(let B=0,S=b.length;B<S;B++){const w=b[B],G=m(w);if(w.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,B>0){P=y%M;const q=M-P;P!==0&&q-G.boundary<0&&(y+=M-P,w.__offset=y)}y+=G.storage}return P=y%M,P>0&&(y+=M-P),A.__size=y,A.__cache={},this}function m(A){const b=A.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function f(A){const b=A.target;b.removeEventListener("dispose",f);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function _(){for(const A in n)o.deleteBuffer(n[A]);a=[],n={},s={}}return{bind:l,update:h,dispose:_}}function Ff(){const o=cs("canvas");return o.style.display="block",o}function ho(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Ff(),e=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",h=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let c=null,d=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,_=0,A=0,b=null,y=-1,M=null;const P=new re,B=new re;let S=null,w=t.width,G=t.height,q=1,at=null,N=null;const R=new re(0,0,w,G),X=new re(0,0,w,G);let K=!1;const Z=new so;let V=!1,I=!1,F=null;const tt=new Ct,Q=new It,j=new C,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return b===null?q:1}let W=e;function Ot(v,L){for(let O=0;O<v.length;O++){const D=v[O],U=t.getContext(D,L);if(U!==null)return U}return null}try{const v={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cr}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),W===null){const L=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&L.shift(),W=Ot(L,v),W===null)throw Ot(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let xt,bt,ot,Ut,Et,gt,ne,de,ce,Ue,se,zt,qe,Ye,T,x,z,J,et,nt,St,st,k,pt;function _t(){xt=new qu(W),bt=new zu(W,xt,o),xt.init(bt),st=new Cf(W,xt,bt),ot=new Ef(W,xt,bt),Ut=new Zu,Et=new ff,gt=new Pf(W,xt,ot,Et,bt,st,Ut),ne=new Uu(m),de=new Xu(m),ce=new nc(W,bt),k=new Nu(W,xt,ce,bt),Ue=new Yu(W,ce,Ut,k),se=new $u(W,Ue,ce,Ut),et=new Ju(W,bt,gt),x=new Hu(Et),zt=new df(m,ne,de,xt,bt,k,x),qe=new Gf(m,Et),Ye=new mf,T=new Mf(xt,bt),J=new Fu(m,ne,de,ot,se,u,a),z=new wf(m,se,bt),pt=new Bf(W,Ut,bt,ot),nt=new Ou(W,xt,Ut,bt),St=new Ku(W,xt,Ut,bt),Ut.programs=zt.programs,m.capabilities=bt,m.extensions=xt,m.properties=Et,m.renderLists=Ye,m.shadowMap=z,m.state=ot,m.info=Ut}_t();const ct=new Rf(m,W);this.xr=ct,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const v=xt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=xt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(w,G,!1))},this.getSize=function(v){return v.set(w,G)},this.setSize=function(v,L,O){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=v,G=L,t.width=Math.floor(v*q),t.height=Math.floor(L*q),O!==!1&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(w*q,G*q).floor()},this.setDrawingBufferSize=function(v,L,O){w=v,G=L,q=O,t.width=Math.floor(v*O),t.height=Math.floor(L*O),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(R)},this.setViewport=function(v,L,O,D){v.isVector4?R.set(v.x,v.y,v.z,v.w):R.set(v,L,O,D),ot.viewport(P.copy(R).multiplyScalar(q).floor())},this.getScissor=function(v){return v.copy(X)},this.setScissor=function(v,L,O,D){v.isVector4?X.set(v.x,v.y,v.z,v.w):X.set(v,L,O,D),ot.scissor(B.copy(X).multiplyScalar(q).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(v){ot.setScissorTest(K=v)},this.setOpaqueSort=function(v){at=v},this.setTransparentSort=function(v){N=v},this.getClearColor=function(v){return v.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(v=!0,L=!0,O=!0){let D=0;v&&(D|=16384),L&&(D|=256),O&&(D|=1024),W.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ye.dispose(),T.dispose(),Et.dispose(),ne.dispose(),de.dispose(),se.dispose(),k.dispose(),pt.dispose(),zt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",rt),ct.removeEventListener("sessionend",ht),F&&(F.dispose(),F=null),Rt.stop()};function mt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const v=Ut.autoReset,L=z.enabled,O=z.autoUpdate,D=z.needsUpdate,U=z.type;_t(),Ut.autoReset=v,z.enabled=L,z.autoUpdate=O,z.needsUpdate=D,z.type=U}function Lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function kt(v){const L=v.target;L.removeEventListener("dispose",kt),te(L)}function te(v){E(v),Et.remove(v)}function E(v){const L=Et.get(v).programs;L!==void 0&&(L.forEach(function(O){zt.releaseProgram(O)}),v.isShaderMaterial&&zt.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,O,D,U,ft){L===null&&(L=lt);const vt=U.isMesh&&U.matrixWorld.determinant()<0,wt=xo(v,L,O,D,U);ot.setMaterial(D,vt);let yt=O.index;const Gt=O.attributes.position;if(yt===null){if(Gt===void 0||Gt.count===0)return}else if(yt.count===0)return;let Pt=1;D.wireframe===!0&&(yt=Ue.getWireframeAttribute(O),Pt=2),k.setup(U,D,wt,O,yt);let Dt,Xt=nt;yt!==null&&(Dt=ce.get(yt),Xt=St,Xt.setIndex(Dt));const gi=yt!==null?yt.count:Gt.count,Fi=O.drawRange.start*Pt,Ni=O.drawRange.count*Pt,Ve=ft!==null?ft.start*Pt:0,Bt=ft!==null?ft.count*Pt:1/0,Oi=Math.max(Fi,Ve),Kt=Math.min(gi,Fi+Ni,Ve+Bt)-1,Te=Math.max(0,Kt-Oi+1);if(Te!==0){if(U.isMesh)D.wireframe===!0?(ot.setLineWidth(D.wireframeLinewidth*Mt()),Xt.setMode(1)):Xt.setMode(4);else if(U.isLine){let ni=D.linewidth;ni===void 0&&(ni=1),ot.setLineWidth(ni*Mt()),U.isLineSegments?Xt.setMode(1):U.isLineLoop?Xt.setMode(2):Xt.setMode(3)}else U.isPoints?Xt.setMode(0):U.isSprite&&Xt.setMode(4);if(U.isInstancedMesh)Xt.renderInstances(Oi,Te,U.count);else if(O.isInstancedBufferGeometry){const ni=Math.min(O.instanceCount,O._maxInstanceCount);Xt.renderInstances(Oi,Te,ni)}else Xt.render(Oi,Te)}},this.compile=function(v,L){function O(D,U,ft){D.transparent===!0&&D.side===di?(D.side=Ce,D.needsUpdate=!0,be(D,U,ft),D.side=on,D.needsUpdate=!0,be(D,U,ft),D.side=di):be(D,U,ft)}d=T.get(v),d.init(),g.push(d),v.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights(m.physicallyCorrectLights),v.traverse(function(D){const U=D.material;if(U)if(Array.isArray(U))for(let ft=0;ft<U.length;ft++){const vt=U[ft];O(vt,v,D)}else O(U,v,D)}),g.pop(),d=null};let H=null;function Y(v){H&&H(v)}function rt(){Rt.stop()}function ht(){Rt.start()}const Rt=new ro;Rt.setAnimationLoop(Y),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(v){H=v,ct.setAnimationLoop(v),v===null?Rt.stop():Rt.start()},ct.addEventListener("sessionstart",rt),ct.addEventListener("sessionend",ht),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(L),L=ct.getCamera()),v.isScene===!0&&v.onBeforeRender(m,v,L,b),d=T.get(v,g.length),d.init(),g.push(d),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(tt),I=this.localClippingEnabled,V=x.init(this.clippingPlanes,I,L),c=Ye.get(v,p.length),c.init(),p.push(c),ee(v,L,0,m.sortObjects),c.finish(),m.sortObjects===!0&&c.sort(at,N),V===!0&&x.beginShadows();const O=d.state.shadowsArray;if(z.render(O,v,L),V===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(c,v),d.setupLights(m.physicallyCorrectLights),L.isArrayCamera){const D=L.cameras;for(let U=0,ft=D.length;U<ft;U++){const vt=D[U];ae(c,v,vt,vt.viewport)}}else ae(c,v,L);b!==null&&(gt.updateMultisampleRenderTarget(b),gt.updateRenderTargetMipmap(b)),v.isScene===!0&&v.onAfterRender(m,v,L),k.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?c=p[p.length-1]:c=null};function ee(v,L,O,D){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Z.intersectsSprite(v)){D&&j.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);const vt=se.update(v),wt=v.material;wt.visible&&c.push(v,vt,wt,O,j.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Ut.render.frame&&(v.skeleton.update(),v.skeleton.frame=Ut.render.frame),!v.frustumCulled||Z.intersectsObject(v))){D&&j.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);const vt=se.update(v),wt=v.material;if(Array.isArray(wt)){const yt=vt.groups;for(let Gt=0,Pt=yt.length;Gt<Pt;Gt++){const Dt=yt[Gt],Xt=wt[Dt.materialIndex];Xt&&Xt.visible&&c.push(v,vt,Xt,O,j.z,Dt)}}else wt.visible&&c.push(v,vt,wt,O,j.z,null)}}const ft=v.children;for(let vt=0,wt=ft.length;vt<wt;vt++)ee(ft[vt],L,O,D)}function ae(v,L,O,D){const U=v.opaque,ft=v.transmissive,vt=v.transparent;d.setupLightsView(O),ft.length>0&&mi(U,L,O),D&&ot.viewport(P.copy(D)),U.length>0&&Wt(U,L,O),ft.length>0&&Wt(ft,L,O),vt.length>0&&Wt(vt,L,O),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function mi(v,L,O){const D=bt.isWebGL2;F===null&&(F=new Ii(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?En:Di,minFilter:ps,samples:D&&s===!0?4:0})),m.getDrawingBufferSize(Q),D?F.setSize(Q.x,Q.y):F.setSize(ls(Q.x),ls(Q.y));const U=m.getRenderTarget();m.setRenderTarget(F),m.clear();const ft=m.toneMapping;m.toneMapping=ii,Wt(v,L,O),m.toneMapping=ft,gt.updateMultisampleRenderTarget(F),gt.updateRenderTargetMipmap(F),m.setRenderTarget(U)}function Wt(v,L,O){const D=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ft=v.length;U<ft;U++){const vt=v[U],wt=vt.object,yt=vt.geometry,Gt=D===null?vt.material:D,Pt=vt.group;wt.layers.test(O.layers)&&Ke(wt,L,O,yt,Gt,Pt)}}function Ke(v,L,O,D,U,ft){v.onBeforeRender(m,L,O,D,U,ft),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(m,L,O,D,v,ft),U.transparent===!0&&U.side===di?(U.side=Ce,U.needsUpdate=!0,m.renderBufferDirect(O,L,D,U,v,ft),U.side=on,U.needsUpdate=!0,m.renderBufferDirect(O,L,D,U,v,ft),U.side=di):m.renderBufferDirect(O,L,D,U,v,ft),v.onAfterRender(m,L,O,D,U,ft)}function be(v,L,O){L.isScene!==!0&&(L=lt);const D=Et.get(v),U=d.state.lights,ft=d.state.shadowsArray,vt=U.state.version,wt=zt.getParameters(v,U.state,ft,L,O),yt=zt.getProgramCacheKey(wt);let Gt=D.programs;D.environment=v.isMeshStandardMaterial?L.environment:null,D.fog=L.fog,D.envMap=(v.isMeshStandardMaterial?de:ne).get(v.envMap||D.environment),Gt===void 0&&(v.addEventListener("dispose",kt),Gt=new Map,D.programs=Gt);let Pt=Gt.get(yt);if(Pt!==void 0){if(D.currentProgram===Pt&&D.lightsStateVersion===vt)return xr(v,wt),Pt}else wt.uniforms=zt.getUniforms(v),v.onBuild(O,wt,m),v.onBeforeCompile(wt,m),Pt=zt.acquireProgram(wt,yt),Gt.set(yt,Pt),D.uniforms=wt.uniforms;const Dt=D.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Dt.clippingPlanes=x.uniform),xr(v,wt),D.needsLights=vo(v),D.lightsStateVersion=vt,D.needsLights&&(Dt.ambientLightColor.value=U.state.ambient,Dt.lightProbe.value=U.state.probe,Dt.directionalLights.value=U.state.directional,Dt.directionalLightShadows.value=U.state.directionalShadow,Dt.spotLights.value=U.state.spot,Dt.spotLightShadows.value=U.state.spotShadow,Dt.rectAreaLights.value=U.state.rectArea,Dt.ltc_1.value=U.state.rectAreaLTC1,Dt.ltc_2.value=U.state.rectAreaLTC2,Dt.pointLights.value=U.state.point,Dt.pointLightShadows.value=U.state.pointShadow,Dt.hemisphereLights.value=U.state.hemi,Dt.directionalShadowMap.value=U.state.directionalShadowMap,Dt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Dt.spotShadowMap.value=U.state.spotShadowMap,Dt.spotLightMatrix.value=U.state.spotLightMatrix,Dt.spotLightMap.value=U.state.spotLightMap,Dt.pointShadowMap.value=U.state.pointShadowMap,Dt.pointShadowMatrix.value=U.state.pointShadowMatrix);const Xt=Pt.getUniforms(),gi=is.seqWithValue(Xt.seq,Dt);return D.currentProgram=Pt,D.uniformsList=gi,Pt}function xr(v,L){const O=Et.get(v);O.outputEncoding=L.outputEncoding,O.instancing=L.instancing,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function xo(v,L,O,D,U){L.isScene!==!0&&(L=lt),gt.resetTextureUnits();const ft=L.fog,vt=D.isMeshStandardMaterial?L.environment:null,wt=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Li,yt=(D.isMeshStandardMaterial?de:ne).get(D.envMap||vt),Gt=D.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pt=!!D.normalMap&&!!O.attributes.tangent,Dt=!!O.morphAttributes.position,Xt=!!O.morphAttributes.normal,gi=!!O.morphAttributes.color,Fi=D.toneMapped?m.toneMapping:ii,Ni=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ve=Ni!==void 0?Ni.length:0,Bt=Et.get(D),Oi=d.state.lights;if(V===!0&&(I===!0||v!==M)){const ge=v===M&&D.id===y;x.setState(D,v,ge)}let Kt=!1;D.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Oi.state.version||Bt.outputEncoding!==wt||U.isInstancedMesh&&Bt.instancing===!1||!U.isInstancedMesh&&Bt.instancing===!0||U.isSkinnedMesh&&Bt.skinning===!1||!U.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==yt||D.fog===!0&&Bt.fog!==ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==x.numPlanes||Bt.numIntersection!==x.numIntersection)||Bt.vertexAlphas!==Gt||Bt.vertexTangents!==Pt||Bt.morphTargets!==Dt||Bt.morphNormals!==Xt||Bt.morphColors!==gi||Bt.toneMapping!==Fi||bt.isWebGL2===!0&&Bt.morphTargetsCount!==Ve)&&(Kt=!0):(Kt=!0,Bt.__version=D.version);let Te=Bt.currentProgram;Kt===!0&&(Te=be(D,L,U));let ni=!1,gn=!1,_s=!1;const he=Te.getUniforms(),_i=Bt.uniforms;if(ot.useProgram(Te.program)&&(ni=!0,gn=!0,_s=!0),D.id!==y&&(y=D.id,gn=!0),ni||M!==v){if(he.setValue(W,"projectionMatrix",v.projectionMatrix),bt.logarithmicDepthBuffer&&he.setValue(W,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),M!==v&&(M=v,gn=!0,_s=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const ge=he.map.cameraPosition;ge!==void 0&&ge.setValue(W,j.setFromMatrixPosition(v.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&he.setValue(W,"isOrthographic",v.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||U.isSkinnedMesh)&&he.setValue(W,"viewMatrix",v.matrixWorldInverse)}if(U.isSkinnedMesh){he.setOptional(W,U,"bindMatrix"),he.setOptional(W,U,"bindMatrixInverse");const ge=U.skeleton;ge&&(bt.floatVertexTextures?(ge.boneTexture===null&&ge.computeBoneTexture(),he.setValue(W,"boneTexture",ge.boneTexture,gt),he.setValue(W,"boneTextureSize",ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xs=O.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0&&bt.isWebGL2===!0)&&et.update(U,O,D,Te),(gn||Bt.receiveShadow!==U.receiveShadow)&&(Bt.receiveShadow=U.receiveShadow,he.setValue(W,"receiveShadow",U.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(_i.envMap.value=yt,_i.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),gn&&(he.setValue(W,"toneMappingExposure",m.toneMappingExposure),Bt.needsLights&&So(_i,_s),ft&&D.fog===!0&&qe.refreshFogUniforms(_i,ft),qe.refreshMaterialUniforms(_i,D,q,G,F),is.upload(W,Bt.uniformsList,_i,gt)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(is.upload(W,Bt.uniformsList,_i,gt),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&he.setValue(W,"center",U.center),he.setValue(W,"modelViewMatrix",U.modelViewMatrix),he.setValue(W,"normalMatrix",U.normalMatrix),he.setValue(W,"modelMatrix",U.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const ge=D.uniformsGroups;for(let Ss=0,Mo=ge.length;Ss<Mo;Ss++)if(bt.isWebGL2){const Sr=ge[Ss];pt.update(Sr,Te),pt.bind(Sr,Te)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Te}function So(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function vo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(v,L,O){Et.get(v.texture).__webglTexture=L,Et.get(v.depthTexture).__webglTexture=O;const D=Et.get(v);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=O===void 0,D.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,L){const O=Et.get(v);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,O=0){b=v,_=L,A=O;let D=!0,U=null,ft=!1,vt=!1;if(v){const yt=Et.get(v);yt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),D=!1):yt.__webglFramebuffer===void 0?gt.setupRenderTarget(v):yt.__hasExternalTextures&&gt.rebindTextures(v,Et.get(v.texture).__webglTexture,Et.get(v.depthTexture).__webglTexture);const Gt=v.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);const Pt=Et.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(U=Pt[L],ft=!0):bt.isWebGL2&&v.samples>0&&gt.useMultisampledRTT(v)===!1?U=Et.get(v).__webglMultisampledFramebuffer:U=Pt,P.copy(v.viewport),B.copy(v.scissor),S=v.scissorTest}else P.copy(R).multiplyScalar(q).floor(),B.copy(X).multiplyScalar(q).floor(),S=K;if(ot.bindFramebuffer(36160,U)&&bt.drawBuffers&&D&&ot.drawBuffers(v,U),ot.viewport(P),ot.scissor(B),ot.setScissorTest(S),ft){const yt=Et.get(v.texture);W.framebufferTexture2D(36160,36064,34069+L,yt.__webglTexture,O)}else if(vt){const yt=Et.get(v.texture),Gt=L||0;W.framebufferTextureLayer(36160,36064,yt.__webglTexture,O||0,Gt)}y=-1},this.readRenderTargetPixels=function(v,L,O,D,U,ft,vt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){ot.bindFramebuffer(36160,wt);try{const yt=v.texture,Gt=yt.format,Pt=yt.type;if(Gt!==Ne&&st.convert(Gt)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Pt===En&&(xt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Pt!==Di&&st.convert(Pt)!==W.getParameter(35738)&&!(Pt===Ai&&(bt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-D&&O>=0&&O<=v.height-U&&W.readPixels(L,O,D,U,st.convert(Gt),st.convert(Pt),ft)}finally{const yt=b!==null?Et.get(b).__webglFramebuffer:null;ot.bindFramebuffer(36160,yt)}}},this.copyFramebufferToTexture=function(v,L,O=0){const D=Math.pow(2,-O),U=Math.floor(L.image.width*D),ft=Math.floor(L.image.height*D);gt.setTexture2D(L,0),W.copyTexSubImage2D(3553,O,0,0,v.x,v.y,U,ft),ot.unbindTexture()},this.copyTextureToTexture=function(v,L,O,D=0){const U=L.image.width,ft=L.image.height,vt=st.convert(O.format),wt=st.convert(O.type);gt.setTexture2D(O,0),W.pixelStorei(37440,O.flipY),W.pixelStorei(37441,O.premultiplyAlpha),W.pixelStorei(3317,O.unpackAlignment),L.isDataTexture?W.texSubImage2D(3553,D,v.x,v.y,U,ft,vt,wt,L.image.data):L.isCompressedTexture?W.compressedTexSubImage2D(3553,D,v.x,v.y,L.mipmaps[0].width,L.mipmaps[0].height,vt,L.mipmaps[0].data):W.texSubImage2D(3553,D,v.x,v.y,vt,wt,L.image),D===0&&O.generateMipmaps&&W.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(v,L,O,D,U=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=v.max.x-v.min.x+1,vt=v.max.y-v.min.y+1,wt=v.max.z-v.min.z+1,yt=st.convert(D.format),Gt=st.convert(D.type);let Pt;if(D.isData3DTexture)gt.setTexture3D(D,0),Pt=32879;else if(D.isDataArrayTexture)gt.setTexture2DArray(D,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,D.flipY),W.pixelStorei(37441,D.premultiplyAlpha),W.pixelStorei(3317,D.unpackAlignment);const Dt=W.getParameter(3314),Xt=W.getParameter(32878),gi=W.getParameter(3316),Fi=W.getParameter(3315),Ni=W.getParameter(32877),Ve=O.isCompressedTexture?O.mipmaps[0]:O.image;W.pixelStorei(3314,Ve.width),W.pixelStorei(32878,Ve.height),W.pixelStorei(3316,v.min.x),W.pixelStorei(3315,v.min.y),W.pixelStorei(32877,v.min.z),O.isDataTexture||O.isData3DTexture?W.texSubImage3D(Pt,U,L.x,L.y,L.z,ft,vt,wt,yt,Gt,Ve.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Pt,U,L.x,L.y,L.z,ft,vt,wt,yt,Ve.data)):W.texSubImage3D(Pt,U,L.x,L.y,L.z,ft,vt,wt,yt,Gt,Ve),W.pixelStorei(3314,Dt),W.pixelStorei(32878,Xt),W.pixelStorei(3316,gi),W.pixelStorei(3315,Fi),W.pixelStorei(32877,Ni),U===0&&D.generateMipmaps&&W.generateMipmap(Pt),ot.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?gt.setTextureCube(v,0):v.isData3DTexture?gt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?gt.setTexture2DArray(v,0):gt.setTexture2D(v,0),ot.unbindTexture()},this.resetState=function(){_=0,A=0,b=null,ot.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Nf extends ho{}Nf.prototype.isWebGL1Renderer=!0;class Of extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class wn extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Da=new C,La=new C,Ia=new Ct,Qs=new dr,Jn=new Cn;class ns extends me{constructor(t=new ve,e=new wn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Da.fromBufferAttribute(e,n-1),La.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Da.distanceTo(La);t.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jn.copy(i.boundingSphere),Jn.applyMatrix4(n),Jn.radius+=s,t.ray.intersectsSphere(Jn)===!1)return;Ia.copy(n).invert(),Qs.copy(t.ray).applyMatrix4(Ia);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,h=new C,u=new C,c=new C,d=new C,p=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){const _=Math.max(0,a.start),A=Math.min(g.count,a.start+a.count);for(let b=_,y=A-1;b<y;b+=p){const M=g.getX(b),P=g.getX(b+1);if(h.fromBufferAttribute(f,M),u.fromBufferAttribute(f,P),Qs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:c.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),A=Math.min(f.count,a.start+a.count);for(let b=_,y=A-1;b<y;b+=p){if(h.fromBufferAttribute(f,b),u.fromBufferAttribute(f,b+1),Qs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:c.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Ra=new C,Ga=new C;class zf extends ns{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ra.fromBufferAttribute(e,n),Ga.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ra.distanceTo(Ga);t.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hf{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let r=0,l=s-1,h;for(;r<=l;)if(n=Math.floor(r+(l-r)/2),h=i[n]-a,h<0)r=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const u=i[n],d=i[n+1]-u,p=(a-u)/d;return(n+p)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),r=this.getPoint(s),l=e||(a.isVector2?new It:new C);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,n=[],s=[],a=[],r=new C,l=new Ct;for(let p=0;p<=t;p++){const g=p/t;n[p]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let h=Number.MAX_VALUE;const u=Math.abs(n[0].x),c=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=h&&(h=u,i.set(1,0,0)),c<=h&&(h=c,i.set(0,1,0)),d<=h&&i.set(0,0,1),r.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],r),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),r.crossVectors(n[p-1],n[p]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(le(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(r,g))}a[p].crossVectors(n[p],s[p])}if(e===!0){let p=Math.acos(le(s[0].dot(s[t]),-1,1));p/=t,n[0].dot(r.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $n extends Hf{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(t,e){const i=e||new It,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const r=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(r),h=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*u-p*c+this.aX,h=d*c+p*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}function ui(o,t,e){return uo(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function ts(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function uo(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Uf(o){function t(n,s){return o[n]-o[s]}const e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Ba(o,t,e){const i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){const r=e[s]*t;for(let l=0;l!==t;++l)n[a++]=o[r+l]}return n}function fo(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=o[n++];while(s!==void 0)}class gs{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let r=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){const r=e[1];t<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){const r=i+a>>>1;t<e[r]?a=r:i=r+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vf extends gs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:en,endingEnd:en}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case nn:s=t,r=2*e-i;break;case as:s=n.length-2,r=e+n[s]-n[s+1];break;default:s=t,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nn:a=t,l=2*i-e;break;case as:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-r),this._weightNext=h/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,h=l-r,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(n-e),m=g*g,f=m*g,_=-d*f+2*d*m-d*g,A=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*g+1,b=(-1-p)*f+(1.5+p)*m+.5*g,y=p*f-p*m;for(let M=0;M!==r;++M)s[M]=_*a[u+M]+A*a[h+M]+b*a[l+M]+y*a[c+M];return s}}class po extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,h=l-r,u=(i-e)/(n-e),c=1-u;for(let d=0;d!==r;++d)s[d]=a[h+d]*c+a[l+d]*u;return s}}class kf extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class He{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ts(e,this.TimeBufferType),this.values=ts(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ts(t.times,Array),values:ts(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case rs:e=this.InterpolantFactoryMethodLinear;break;case ys:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return ys}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=ui(i,s,a),this.values=ui(this.values,s*r,a*r)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){const l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(n!==void 0&&uo(n))for(let r=0,l=n.length;r!==l;++r){const h=n[r];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,h),t=!1;break}}return t}optimize(){const t=ui(this.times),e=ui(this.values),i=this.getValueSize(),n=this.getInterpolation()===ys,s=t.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const h=t[r],u=t[r+1];if(h!==u&&(r!==1||h!==t[0]))if(n)l=!0;else{const c=r*i,d=c-i,p=c+i;for(let g=0;g!==i;++g){const m=e[c+g];if(m!==e[d+g]||m!==e[p+g]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];const c=r*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[c+p]}++a}}if(s>0){t[a]=t[s];for(let r=s*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[r+h];++a}return a!==t.length?(this.times=ui(t,0,a),this.values=ui(e,0,a*i)):(this.times=t,this.values=e),this}clone(){const t=ui(this.times,0),e=ui(this.values,0),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=rs;class pn extends He{}pn.prototype.ValueTypeName="bool";pn.prototype.ValueBufferType=Array;pn.prototype.DefaultInterpolation=ss;pn.prototype.InterpolantFactoryMethodLinear=void 0;pn.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends He{}mo.prototype.ValueTypeName="color";class us extends He{}us.prototype.ValueTypeName="number";class Wf extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-e)/(n-e);let h=t*r;for(let u=h+r;h!==u;h+=4)Me.slerpFlat(s,0,a,h-r,a,h,l);return s}}class In extends He{InterpolantFactoryMethodLinear(t){return new Wf(this.times,this.values,this.getValueSize(),t)}}In.prototype.ValueTypeName="quaternion";In.prototype.DefaultInterpolation=rs;In.prototype.InterpolantFactoryMethodSmooth=void 0;class mn extends He{}mn.prototype.ValueTypeName="string";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=ss;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends He{}ds.prototype.ValueTypeName="vector";class or{constructor(t,e=-1,i,n=hr){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Bi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,r=i.length;a!==r;++a)e.push(qf(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(He.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let r=0;r<s;r++){let l=[],h=[];l.push((r+s-1)%s,r,(r+1)%s),h.push(0,1,0);const u=Uf(l);l=Ba(l,1,u),h=Ba(h,1,u),!n&&l[0]===0&&(l.push(s),h.push(h[0])),a.push(new us(".morphTargetInfluences["+e[r].name+"]",l,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=t.length;r<l;r++){const h=t[r],u=h.name.match(s);if(u&&u.length>1){const c=u[1];let d=n[c];d||(n[c]=d=[]),d.push(h)}}const a=[];for(const r in n)a.push(this.CreateFromMorphTargetSequence(r,n[r],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(c,d,p,g,m){if(p.length!==0){const f=[],_=[];fo(p,f,_,g),f.length!==0&&m.push(new c(d,f,_))}},n=[],s=t.name||"default",a=t.fps||30,r=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)p[d[g].morphTargets[m]]=-1;for(const m in p){const f=[],_=[];for(let A=0;A!==d[g].morphTargets.length;++A){const b=d[g];f.push(b.time),_.push(b.morphTarget===m?1:0)}n.push(new us(".morphTargetInfluence["+m+"]",f,_))}l=p.length*a}else{const p=".bones["+e[c].name+"]";i(ds,p+".position",d,"pos",n),i(In,p+".quaternion",d,"rot",n),i(ds,p+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,r)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xf(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return mo;case"quaternion":return In;case"bool":case"boolean":return pn;case"string":return mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function qf(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Xf(o.type);if(o.times===void 0){const e=[],i=[];fo(o.keys,e,i,"value"),o.times=e,o.values=i}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}class Yf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fa(){return(typeof performance>"u"?Date:performance).now()}class Kf{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==n;++r)i[s+r]=i[r];a=e}else{a+=e;const r=e/a;this._mixBufferRegion(i,s,0,r,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,h=e+e;l!==h;++l)if(i[l]!==i[l+e]){r.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){Me.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;Me.multiplyQuaternionsFlat(t,a,t,e,t,i),Me.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let r=0;r!==s;++r){const l=e+r;t[l]=t[l]*a+t[i+r]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const r=e+a;t[r]=t[r]+t[i+a]*n}}}const gr="\\[\\]\\.:\\/",Zf=new RegExp("["+gr+"]","g"),_r="[^"+gr+"]",jf="[^"+gr.replace("\\.","")+"]",Qf=/((?:WC+[\/:])*)/.source.replace("WC",_r),Jf=/(WCOD+)?/.source.replace("WCOD",jf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_r),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_r),ep=new RegExp("^"+Qf+Jf+$f+tp+"$"),ip=["material","materials","bones","map"];class np{constructor(t,e,i){const n=i||Nt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Nt{constructor(t,e,i){this.path=e,this.parsedPath=i||Nt.parseTrackName(e),this.node=Nt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Nt.Composite(t,e,i):new Nt(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zf,"")}static parseTrackName(t){const e=ep.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);ip.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===e||r.uuid===e)return r;const l=i(r.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=Nt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const a=t[n];if(a===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=np;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sp{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,r=new Array(a),l={endingStart:en,endingEnd:en};for(let h=0;h!==a;++h){const u=s[h].createInterpolant(null);r[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ml,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const n=this._clip.duration,s=t._clip.duration,a=s/n,r=n/s;t.warp(1,a,e),this.warp(r,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=n._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,h=r.sampleValues;return l[0]=s,l[1]=s+i,h[0]=t/a,h[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),r=this._updateWeight(t);if(r>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case _l:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(a),h[u].accumulateAdditive(r);break;case hr:default:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(a),h[u].accumulate(n,r)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===gl;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===Ka){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const r=Math.floor(n/e);n-=e*r,s+=Math.abs(r);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const h=t<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=nn,n.endingEnd=nn):(t?n.endingStart=this.zeroSlopeAtStart?nn:en:n.endingStart=as,e?n.endingEnd=this.zeroSlopeAtEnd?nn:en:n.endingEnd=as)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=s,l[0]=e,r[1]=s+t,l[1]=i,this}}const rp=new Float32Array(1);class ap extends pi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,r=t._interpolants,l=i.uuid,h=this._bindingsByRootAndName;let u=h[l];u===void 0&&(u={},h[l]=u);for(let c=0;c!==s;++c){const d=n[c],p=d.name;let g=u[p];if(g!==void 0)++g.referenceCount,a[c]=g;else{if(g=a[c],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const m=e&&e._propertyBindings[c].binding.parsedPath;g=new Kf(Nt.create(i,p,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[c]=g}r[c].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const r=a.knownActions;t._byClipCacheIndex=r.length,r.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,r=a[s],l=r.knownActions,h=l[l.length-1],u=t._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),t._byClipCacheIndex=null;const c=r.actionByRoot,d=(t._localRoot||this._root).uuid;delete c[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,r=a[n],l=e[e.length-1],h=t._cacheIndex;l._cacheIndex=h,e[h]=l,e.pop(),delete r[s],Object.keys(r).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new po(new Float32Array(2),new Float32Array(2),1,rp),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?or.findByName(n,t):t;const r=a!==null?a.uuid:t,l=this._actionsByClip[r];let h=null;if(i===void 0&&(a!==null?i=a.blendMode:i=hr),l!==void 0){const c=l.actionByRoot[s];if(c!==void 0&&c.blendMode===i)return c;h=l.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const u=new sp(this,a,e,i);return this._bindAction(u,h),this._addInactiveAction(u,r,s),u}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?or.findByName(i,t):t,a=s?s.uuid:t,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let h=0;h!==i;++h)e[h]._update(n,t,s,a);const r=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)r[h].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let r=0,l=a.length;r!==l;++r){const h=a[r];this._deactivateAction(h);const u=h._cacheIndex,c=e[e.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,c._cacheIndex=u,e[u]=c,e.pop(),this._removeInactiveBindingsForAction(h)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const r=i[a].actionByRoot,l=r[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const r=s[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class go{constructor(t,e,i=0,n=1/0){this.ray=new dr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return lr(t,this,i,e),i.sort(Na),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)lr(t[n],this,i,e);return i.sort(Na),i}}function Na(o,t){return o.distance-t.distance}function lr(o,t,e,i){if(o.layers.test(t.layers)&&o.raycast(t,e),i===!0){const n=o.children;for(let s=0,a=n.length;s<a;s++)lr(n[s],t,e,!0)}}class op extends zf{constructor(t=10,e=10,i=4473924,n=8947848){i=new Ht(i),n=new Ht(n);const s=e/2,a=t/e,r=t/2,l=[],h=[];for(let d=0,p=0,g=-r;d<=e;d++,g+=a){l.push(-r,0,g,r,0,g),l.push(g,0,-r,g,0,r);const m=d===s?i:n;m.toArray(h,p),p+=3,m.toArray(h,p),p+=3,m.toArray(h,p),p+=3,m.toArray(h,p),p+=3}const u=new ve;u.setAttribute("position",new Oe(l,3)),u.setAttribute("color",new Oe(h,3));const c=new wn({vertexColors:!0,toneMapped:!1});super(u,c),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cr);const ut={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Ft={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},Tt={x:0,y:0},Se={camera:new Ct,gizmos:new Ct},Vt={type:"change"},Ge={type:"start"},Ae={type:"end"},lp=new go,jt=new C,Oa=new Ct,za=new Ct,Be=new C;class cp extends pi{constructor(e,i,n=null){super();$(this,"onWindowResize",()=>{const e=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const i=this._tbRadius/e,s=new $n(0,0,i,i).getPoints(this._curvePts),a=new ve().setFromPoints(s);for(const r in this._gizmos.children)this._gizmos.children[r].geometry=a;this.dispatchEvent(Vt)});$(this,"onContextMenu",e=>{if(!!this.enabled){for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==2){e.preventDefault();break}}});$(this,"onPointerCancel",()=>{this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Ft.NONE});$(this,"onPointerDown",e=>{if(e.button==0&&e.isPrimary?(this._downValid=!0,this._downEvents.push(e),this._downStart=performance.now()):this._downValid=!1,e.pointerType=="touch"&&this._input!=Ft.CURSOR)switch(this._touchStart.push(e),this._touchCurrent.push(e),this._input){case Ft.NONE:this._input=Ft.ONE_FINGER,this.onSinglePanStart(e,"ROTATE"),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp);break;case Ft.ONE_FINGER:case Ft.ONE_FINGER_SWITCHED:this._input=Ft.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Ft.TWO_FINGER:this._input=Ft.MULT_FINGER,this.onTriplePanStart(e);break}else if(e.pointerType!="touch"&&this._input==Ft.NONE){let i=null;e.ctrlKey||e.metaKey?i="CTRL":e.shiftKey&&(i="SHIFT"),this._mouseOp=this.getOpFromAction(e.button,i),this._mouseOp!=null&&(window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this._input=Ft.CURSOR,this._button=e.button,this.onSinglePanStart(e,this._mouseOp))}});$(this,"onPointerMove",e=>{if(e.pointerType=="touch"&&this._input!=Ft.CURSOR)switch(this._input){case Ft.ONE_FINGER:this.updateTouchEvent(e),this.onSinglePanMove(e,ut.ROTATE);break;case Ft.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],e)*this._devPxRatio>=this._switchSensibility){this._input=Ft.ONE_FINGER,this.updateTouchEvent(e),this.onSinglePanStart(e,"ROTATE");break}break;case Ft.TWO_FINGER:this.updateTouchEvent(e),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Ft.MULT_FINGER:this.updateTouchEvent(e),this.onTriplePanMove(e);break}else if(e.pointerType!="touch"&&this._input==Ft.CURSOR){let i=null;e.ctrlKey||e.metaKey?i="CTRL":e.shiftKey&&(i="SHIFT");const n=this.getOpStateFromAction(this._button,i);n!=null&&this.onSinglePanMove(e,n)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],e)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)});$(this,"onPointerUp",e=>{if(e.pointerType=="touch"&&this._input!=Ft.CURSOR){const i=this._touchCurrent.length;for(let n=0;n<i;n++)if(this._touchCurrent[n].pointerId==e.pointerId){this._touchCurrent.splice(n,1),this._touchStart.splice(n,1);break}switch(this._input){case Ft.ONE_FINGER:case Ft.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Ft.NONE,this.onSinglePanEnd();break;case Ft.TWO_FINGER:this.onDoublePanEnd(e),this.onPinchEnd(e),this.onRotateEnd(e),this._input=Ft.ONE_FINGER_SWITCHED;break;case Ft.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Ft.NONE,this.onTriplePanEnd());break}}else e.pointerType!="touch"&&this._input==Ft.CURSOR&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=Ft.NONE,this.onSinglePanEnd(),this._button=-1);if(e.isPrimary)if(this._downValid)if(e.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const n=e.timeStamp-this._clickStart,s=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;n<=this._maxInterval&&s<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(e)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)});$(this,"onWheel",e=>{if(this.enabled&&this.enableZoom){let i=null;e.ctrlKey||e.metaKey?i="CTRL":e.shiftKey&&(i="SHIFT");const n=this.getOpFromAction("WHEEL",i);if(n!=null){e.preventDefault(),this.dispatchEvent(Ge);const s=125;let a=e.deltaY/s,r=1;switch(a>0?r=1/this.scaleFactor:a<0&&(r=this.scaleFactor),n){case"ZOOM":if(this.updateTbState(ut.SCALE,!0),a>0?r=1/Math.pow(this.scaleFactor,a):a<0&&(r=Math.pow(this.scaleFactor,-a)),this.cursorZoom&&this.enablePan){let l;this.camera.isOrthographicCamera?l=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(l=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(r,l))}else this.applyTransformMatrix(this.scale(r,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Vt),this.dispatchEvent(Ae);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(ut.FOV,!0),e.deltaX!=0&&(a=e.deltaX/s,r=1,a>0?r=1/Math.pow(this.scaleFactor,a):a<0&&(r=Math.pow(this.scaleFactor,-a))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let h=l/r;h=qt.clamp(h,this.minDistance,this.maxDistance);const u=l*Math.tan(qt.DEG2RAD*this.camera.fov*.5);let c=qt.RAD2DEG*(Math.atan(u/h)*2);c>this.maxFov?c=this.maxFov:c<this.minFov&&(c=this.minFov);const d=u/Math.tan(qt.DEG2RAD*(c/2));r=l/d,this.setFov(c),this.applyTransformMatrix(this.scale(r,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Vt),this.dispatchEvent(Ae);break}}}});$(this,"onSinglePanStart",(e,i)=>{if(this.enabled)switch(this.dispatchEvent(Ge),this.setCenter(e.clientX,e.clientY),i){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Vt)),this.updateTbState(ut.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Vt));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(ut.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Tt.x,Tt.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Vt);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Vt)),this.updateTbState(ut.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Vt)),this.updateTbState(ut.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}});$(this,"onSinglePanMove",(e,i)=>{if(this.enabled){const n=i!=this._state;switch(this.setCenter(e.clientX,e.clientY),i){case ut.PAN:this.enablePan&&(n?(this.dispatchEvent(Ae),this.dispatchEvent(Ge),this.updateTbState(i,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case ut.ROTATE:if(this.enableRotate)if(n)this.dispatchEvent(Ae),this.dispatchEvent(Ge),this.updateTbState(i,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Tt.x,Tt.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Tt.x,Tt.y,this.domElement,this._tbRadius));const s=this._startCursorPosition.distanceTo(this._currentCursorPosition),a=this._startCursorPosition.angleTo(this._currentCursorPosition),r=Math.max(s/this._tbRadius,a);this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),r)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=r,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case ut.SCALE:if(this.enableZoom)if(n)this.dispatchEvent(Ae),this.dispatchEvent(Ge),this.updateTbState(i,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;a<0?r=1/Math.pow(this.scaleFactor,-a*8):a>0&&(r=Math.pow(this.scaleFactor,a*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(r,this._v3_1))}break;case ut.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(n)this.dispatchEvent(Ae),this.dispatchEvent(Ge),this.updateTbState(i,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;a<0?r=1/Math.pow(this.scaleFactor,-a*8):a>0&&(r=Math.pow(this.scaleFactor,a*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let h=l/r;h=qt.clamp(h,this.minDistance,this.maxDistance);const u=l*Math.tan(qt.DEG2RAD*this._fovState*.5);let c=qt.RAD2DEG*(Math.atan(u/h)*2);c=qt.clamp(c,this.minFov,this.maxFov);const d=u/Math.tan(qt.DEG2RAD*(c/2));r=l/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(c),this.applyTransformMatrix(this.scale(r,this._v3_2,!1)),jt.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/l),this._m4_1.makeTranslation(jt.x,jt.y,jt.z)}break}this.dispatchEvent(Vt)}});$(this,"onSinglePanEnd",()=>{if(this._state==ut.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const i=Math.abs((this._wPrev+this._wCurr)/2),n=this;this._animationId=window.requestAnimationFrame(function(s){n.updateTbState(ut.ANIMATION_ROTATE,!0);const a=n.calculateRotationAxis(n._cursorPosPrev,n._cursorPosCurr);n.onRotationAnim(s,a,Math.min(i,n.wMax))})}else this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Vt);else this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Vt)}else(this._state==ut.PAN||this._state==ut.IDLE)&&(this.updateTbState(ut.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Vt));this.dispatchEvent(Ae)});$(this,"onDoubleTap",e=>{if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(Ge),this.setCenter(e.clientX,e.clientY);const i=this.unprojectOnObj(this.getCursorNDC(Tt.x,Tt.y,this.domElement),this.camera);if(i!=null&&this.enableAnimations){const n=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(s){n.updateTbState(ut.ANIMATION_FOCUS,!0),n.onFocusAnim(s,i,n._cameraMatrixState,n._gizmoMatrixState)})}else i!=null&&!this.enableAnimations&&(this.updateTbState(ut.FOCUS,!0),this.focus(i,this.scaleFactor),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Vt))}this.dispatchEvent(Ae)});$(this,"onDoublePanStart",()=>{this.enabled&&this.enablePan&&(this.dispatchEvent(Ge),this.updateTbState(ut.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))});$(this,"onDoublePanMove",()=>{this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=ut.PAN&&(this.updateTbState(ut.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Vt))});$(this,"onDoublePanEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Ae)});$(this,"onRotateStart",()=>{this.enabled&&this.enableRotate&&(this.dispatchEvent(Ge),this.updateTbState(ut.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))});$(this,"onRotateMove",()=>{if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let e;this._state!=ut.ZROTATE&&(this.updateTbState(ut.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),e=this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):e=new C().setFromMatrixPosition(this._gizmoMatrixState);const i=qt.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(e,i)),this.dispatchEvent(Vt)}});$(this,"onRotateEnd",()=>{this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ae)});$(this,"onPinchStart",()=>{this.enabled&&this.enableZoom&&(this.dispatchEvent(Ge),this.updateTbState(ut.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))});$(this,"onPinchMove",()=>{if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const e=12;this._state!=ut.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(ut.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),e*this._devPxRatio);const i=this._currentFingerDistance/this._startFingerDistance;let n;this.enablePan?this.camera.isOrthographicCamera?n=this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(n=this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):n=this._gizmos.position,this.applyTransformMatrix(this.scale(i,n)),this.dispatchEvent(Vt)}});$(this,"onPinchEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Ae)});$(this,"onTriplePanStart",()=>{if(this.enabled&&this.enableZoom){this.dispatchEvent(Ge),this.updateTbState(ut.SCALE,!0);let e=0,i=0;const n=this._touchCurrent.length;for(let s=0;s<n;s++)e+=this._touchCurrent[s].clientX,i+=this._touchCurrent[s].clientY;this.setCenter(e/n,i/n),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}});$(this,"onTriplePanMove",()=>{if(this.enabled&&this.enableZoom){let e=0,i=0;const n=this._touchCurrent.length;for(let p=0;p<n;p++)e+=this._touchCurrent[p].clientX,i+=this._touchCurrent[p].clientY;this.setCenter(e/n,i/n);const s=8;this._currentCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let r=1;a<0?r=1/Math.pow(this.scaleFactor,-a*s):a>0&&(r=Math.pow(this.scaleFactor,a*s)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let h=l/r;h=qt.clamp(h,this.minDistance,this.maxDistance);const u=l*Math.tan(qt.DEG2RAD*this._fovState*.5);let c=qt.RAD2DEG*(Math.atan(u/h)*2);c=qt.clamp(c,this.minFov,this.maxFov);const d=u/Math.tan(qt.DEG2RAD*(c/2));r=l/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(c),this.applyTransformMatrix(this.scale(r,this._v3_2,!1)),jt.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/l),this._m4_1.makeTranslation(jt.x,jt.y,jt.z),this.dispatchEvent(Vt)}});$(this,"onTriplePanEnd",()=>{this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Ae)});$(this,"setCenter",(e,i)=>{Tt.x=e,Tt.y=i});$(this,"initializeMouseActions",()=>{this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")});$(this,"compareMouseAction",(e,i)=>e.operation==i.operation?e.mouse==i.mouse&&e.key==i.key:!1);$(this,"setMouseAction",(e,i,n=null)=>{const s=["PAN","ROTATE","ZOOM","FOV"],a=[0,1,2,"WHEEL"],r=["CTRL","SHIFT",null];let l;if(!s.includes(e)||!a.includes(i)||!r.includes(n)||i=="WHEEL"&&e!="ZOOM"&&e!="FOV")return!1;switch(e){case"PAN":l=ut.PAN;break;case"ROTATE":l=ut.ROTATE;break;case"ZOOM":l=ut.SCALE;break;case"FOV":l=ut.FOV;break}const h={operation:e,mouse:i,key:n,state:l};for(let u=0;u<this.mouseActions.length;u++)if(this.mouseActions[u].mouse==h.mouse&&this.mouseActions[u].key==h.key)return this.mouseActions.splice(u,1,h),!0;return this.mouseActions.push(h),!0});$(this,"unsetMouseAction",(e,i=null)=>{for(let n=0;n<this.mouseActions.length;n++)if(this.mouseActions[n].mouse==e&&this.mouseActions[n].key==i)return this.mouseActions.splice(n,1),!0;return!1});$(this,"getOpFromAction",(e,i)=>{let n;for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==i)return n.operation;if(i!=null){for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==null)return n.operation}return null});$(this,"getOpStateFromAction",(e,i)=>{let n;for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==i)return n.state;if(i!=null){for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==e&&n.key==null)return n.state}return null});$(this,"getAngle",(e,i)=>Math.atan2(i.clientY-e.clientY,i.clientX-e.clientX)*180/Math.PI);$(this,"updateTouchEvent",e=>{for(let i=0;i<this._touchCurrent.length;i++)if(this._touchCurrent[i].pointerId==e.pointerId){this._touchCurrent.splice(i,1,e);break}});$(this,"calculateAngularSpeed",(e,i,n,s)=>{const a=i-e,r=(s-n)/1e3;return r==0?0:a/r});$(this,"calculatePointersDistance",(e,i)=>Math.sqrt(Math.pow(i.clientX-e.clientX,2)+Math.pow(i.clientY-e.clientY,2)));$(this,"calculateRotationAxis",(e,i)=>(this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(e,i).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()));$(this,"calculateTbRadius",e=>{const i=e.position.distanceTo(this._gizmos.position);if(e.type=="PerspectiveCamera"){const n=qt.DEG2RAD*e.fov*.5,s=Math.atan(e.aspect*Math.tan(n));return Math.tan(Math.min(n,s))*i*this.radiusFactor}else if(e.type=="OrthographicCamera")return Math.min(e.top,e.right)*this.radiusFactor});$(this,"focus",(e,i,n=1)=>{jt.copy(e).sub(this._gizmos.position).multiplyScalar(n),this._translationMatrix.makeTranslation(jt.x,jt.y,jt.z),Oa.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),za.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(i,this._gizmos.position)),this._gizmoMatrixState.copy(Oa),this._cameraMatrixState.copy(za)});$(this,"drawGrid",()=>{if(this.scene!=null){let n,s,a,r;if(this.camera.isOrthographicCamera){const l=this.camera.right-this.camera.left,h=this.camera.bottom-this.camera.top;a=Math.max(l,h),r=a/20,n=a/this.camera.zoom*3,s=n/r*this.camera.zoom}else if(this.camera.isPerspectiveCamera){const l=this.camera.position.distanceTo(this._gizmos.position),h=qt.DEG2RAD*this.camera.fov*.5,u=Math.atan(this.camera.aspect*Math.tan(h));a=Math.tan(Math.max(h,u))*l*2,r=a/20,n=a*3,s=n/r}this._grid==null&&(this._grid=new op(n,s,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}});$(this,"dispose",()=>{this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerCancel),this.domElement.removeEventListener("wheel",this.onWheel),this.domElement.removeEventListener("contextmenu",this.onContextMenu),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("resize",this.onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()});$(this,"disposeGrid",()=>{this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)});$(this,"easeOutCubic",e=>1-Math.pow(1-e,3));$(this,"activateGizmos",e=>{const i=this._gizmos.children[0],n=this._gizmos.children[1],s=this._gizmos.children[2];e?(i.material.setValues({opacity:1}),n.material.setValues({opacity:1}),s.material.setValues({opacity:1})):(i.material.setValues({opacity:.6}),n.material.setValues({opacity:.6}),s.material.setValues({opacity:.6}))});$(this,"getCursorNDC",(e,i,n)=>{const s=n.getBoundingClientRect();return this._v2_1.setX((e-s.left)/s.width*2-1),this._v2_1.setY((s.bottom-i)/s.height*2-1),this._v2_1.clone()});$(this,"getCursorPosition",(e,i,n)=>(this._v2_1.copy(this.getCursorNDC(e,i,n)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()));$(this,"setCamera",e=>{e.lookAt(this.target),e.updateMatrix(),e.type=="PerspectiveCamera"&&(this._fov0=e.fov,this._fovState=e.fov),this._cameraMatrixState0.copy(e.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(e.projectionMatrix),this._zoom0=e.zoom,this._zoomState=this._zoom0,this._initialNear=e.near,this._nearPos0=e.position.distanceTo(this.target)-e.near,this._nearPos=this._initialNear,this._initialFar=e.far,this._farPos0=e.position.distanceTo(this.target)-e.far,this._farPos=this._initialFar,this._up0.copy(e.up),this._upState.copy(e.up),this.camera=e,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(e),this.makeGizmos(this.target,this._tbRadius)});$(this,"makeGizmos",(e,i)=>{const s=new $n(0,0,i,i).getPoints(this._curvePts),a=new ve().setFromPoints(s),r=new wn({color:16744576,fog:!1,transparent:!0,opacity:.6}),l=new wn({color:8454016,fog:!1,transparent:!0,opacity:.6}),h=new wn({color:8421631,fog:!1,transparent:!0,opacity:.6}),u=new ns(a,r),c=new ns(a,l),d=new ns(a,h),p=Math.PI*.5;if(u.rotation.x=p,c.rotation.y=p,this._gizmoMatrixState0.identity().setPosition(e),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const g=1/this.camera.zoom;this._scaleMatrix.makeScale(g,g,g),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(e.x,e.y,e.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(g){g.isLine&&(g.geometry.dispose(),g.material.dispose())}),this._gizmos.clear(),this._gizmos.add(u),this._gizmos.add(c),this._gizmos.add(d)});$(this,"onFocusAnim",(e,i,n,s)=>{if(this._timeStart==-1&&(this._timeStart=e),this._state==ut.ANIMATION_FOCUS){const r=(e-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(s),r>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(i,this.scaleFactor),this._timeStart=-1,this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Vt);else{const l=this.easeOutCubic(r),h=1-l+this.scaleFactor*l;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(i,h,l),this.dispatchEvent(Vt);const u=this;this._animationId=window.requestAnimationFrame(function(c){u.onFocusAnim(c,i,n,s.clone())})}}else this._animationId=-1,this._timeStart=-1});$(this,"onRotationAnim",(e,i,n)=>{if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=e),this._state==ut.ANIMATION_ROTATE){const s=(e-this._timeStart)/1e3;if(n+-this.dampingFactor*s>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(s,2)+n*s+0,this.applyTransformMatrix(this.rotate(i,this._angleCurrent)),this.dispatchEvent(Vt);const r=this;this._animationId=window.requestAnimationFrame(function(l){r.onRotationAnim(l,i,n)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(ut.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Vt)}else this._animationId=-1,this._timeStart=-1,this._state!=ut.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Vt))});$(this,"pan",(e,i,n=!1)=>{const s=e.clone().sub(i);if(this.camera.isOrthographicCamera)s.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&n){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const a=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);s.multiplyScalar(1/a)}return this._v3_1.set(s.x,s.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),Se});$(this,"reset",()=>{this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Vt)});$(this,"rotate",(e,i)=>{const n=this._gizmos.position;return this._translationMatrix.makeTranslation(-n.x,-n.y,-n.z),this._rotationMatrix.makeRotationAxis(e,-i),this._m4_1.makeTranslation(n.x,n.y,n.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),Se});$(this,"copyState",()=>{let e;this.camera.isOrthographicCamera?e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(e)});$(this,"pasteState",()=>{const e=this;navigator.clipboard.readText().then(function(n){e.setStateFromJSON(n)})});$(this,"saveState",()=>{this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)});$(this,"scale",(e,i,n=!0)=>{Be.copy(i);let s=1/e;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=e,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,s=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,s=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(s,s,s),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),Be.sub(this._v3_1);const a=Be.clone().multiplyScalar(s);return Be.sub(a),this._m4_1.makeTranslation(Be.x,Be.y,Be.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),Se}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let a=this._v3_1.distanceTo(Be),r=a-a*s;const l=a-r;if(l<this.minDistance?(s=this.minDistance/a,r=a-a*s):l>this.maxDistance&&(s=this.maxDistance/a,r=a-a*s),jt.copy(Be).sub(this._v3_1).normalize().multiplyScalar(r),this._m4_1.makeTranslation(jt.x,jt.y,jt.z),n){const h=this._v3_2;a=h.distanceTo(Be),r=a-a*s,jt.copy(Be).sub(this._v3_2).normalize().multiplyScalar(r),this._translationMatrix.makeTranslation(h.x,h.y,h.z),this._scaleMatrix.makeScale(s,s,s),this._m4_2.makeTranslation(jt.x,jt.y,jt.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-h.x,-h.y,-h.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return Se}});$(this,"setFov",e=>{this.camera.isPerspectiveCamera&&(this.camera.fov=qt.clamp(e,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())});$(this,"zRotate",(e,i)=>(this._rotationMatrix.makeRotationAxis(this._rotationAxis,i),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._m4_1.makeTranslation(e.x,e.y,e.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,i),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),Se));$(this,"unprojectOnObj",(e,i)=>{const n=this.getRaycaster();n.near=i.near,n.far=i.far,n.setFromCamera(e,i);const s=n.intersectObjects(this.scene.children,!0);for(let a=0;a<s.length;a++)if(s[a].object.uuid!=this._gizmos.uuid&&s[a].face!=null)return s[a].point.clone();return null});$(this,"unprojectOnTbSurface",(e,i,n,s,a)=>{if(e.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const r=Math.pow(this._v2_1.x,2),l=Math.pow(this._v2_1.y,2),h=Math.pow(this._tbRadius,2);return r+l<=h*.5?this._v3_1.setZ(Math.sqrt(h-(r+l))):this._v3_1.setZ(h*.5/Math.sqrt(r+l)),this._v3_1}else if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const r=this._v3_1.clone().normalize(),l=e.position.distanceTo(this._gizmos.position),h=Math.pow(a,2),u=this._v3_1.z,c=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(c==0)return r.set(this._v3_1.x,this._v3_1.y,a),r;const d=u/c,p=l;let g=Math.pow(d,2)+1,m=2*d*p,f=Math.pow(p,2)-h,_=Math.pow(m,2)-4*g*f;if(_>=0&&(this._v2_1.setX((-m-Math.sqrt(_))/(2*g)),this._v2_1.setY(d*this._v2_1.x+p),qt.RAD2DEG*this._v2_1.angle()>=45)){const y=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(l-this._v2_1.y,2));return r.multiplyScalar(y),r.z+=l,r}g=d,m=p,f=-h*.5,_=Math.pow(m,2)-4*g*f,this._v2_1.setX((-m-Math.sqrt(_))/(2*g)),this._v2_1.setY(d*this._v2_1.x+p);const A=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(l-this._v2_1.y,2));return r.multiplyScalar(A),r.z+=l,r}});$(this,"unprojectOnTbPlane",(e,i,n,s,a=!1)=>{if(e.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(i,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const r=this._v3_1.clone().normalize(),l=this._v3_1.z,h=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let u;if(a?u=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):u=e.position.distanceTo(this._gizmos.position),h==0)return r.set(0,0,0),r;const c=l/h,d=u,p=-d/c,g=Math.sqrt(Math.pow(d,2)+Math.pow(p,2));return r.multiplyScalar(g),r.z=0,r}});$(this,"updateMatrixState",()=>{this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)});$(this,"updateTbState",(e,i)=>{this._state=e,i&&this.updateMatrixState()});$(this,"update",()=>{if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const i=qt.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(i/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){const i=this.camera.position.distanceTo(this._gizmos.position);if(i>this.maxDistance+1e-6||i<this.minDistance-1e-6){const s=qt.clamp(i,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(s/i,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=qt.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const n=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),n<this._tbRadius-1e-6||n>this._tbRadius+1e-6){const s=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,a=this._tbRadius/s,l=new $n(0,0,a,a).getPoints(this._curvePts),h=new ve().setFromPoints(l);for(const u in this._gizmos.children)this._gizmos.children[u].geometry=h}}this.camera.lookAt(this._gizmos.position)});$(this,"setStateFromJSON",e=>{const i=JSON.parse(e);if(i.arcballState!=null){this._cameraMatrixState.fromArray(i.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(i.arcballState.cameraUp),this.camera.near=i.arcballState.cameraNear,this.camera.far=i.arcballState.cameraFar,this.camera.zoom=i.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=i.arcballState.cameraFov),this._gizmoMatrixState.fromArray(i.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const n=new Ct().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(n),this.camera.lookAt(this._gizmos.position),this.updateTbState(ut.IDLE,!1),this.dispatchEvent(Vt)}});this.camera=null,this.domElement=i,this.scene=n,this.target=new C,this._currentTarget=new C,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new It,this._v3_1=new C,this._v3_2=new C,this._m4_1=new Ct,this._m4_2=new Ct,this._quat=new Me,this._translationMatrix=new Ct,this._rotationMatrix=new Ct,this._scaleMatrix=new Ct,this._rotationAxis=new C,this._cameraMatrixState=new Ct,this._cameraProjectionState=new Ct,this._fovState=1,this._upState=new C,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Ct,this._up0=new C,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Ct,this._gizmoMatrixState0=new Ct,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Ft.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new C,this._startCursorPosition=new C,this._grid=null,this._gridPosition=new C,this._gizmos=new Ei,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new C,this._cursorPosCurr=new C,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=ut.IDLE,this.setCamera(e),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("wheel",this.onWheel),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),window.addEventListener("resize",this.onWindowResize)}applyTransformMatrix(e){if(e.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==ut.ROTATE||this._state==ut.ZROTATE||this._state==ut.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),e.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==ut.SCALE||this._state==ut.FOCUS||this._state==ut.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const i=this.camera.position.distanceTo(this._gizmos.position),n=new dn;n.setFromObject(this._gizmos);const s=new Cn;n.getBoundingSphere(s);const a=Math.max(this._nearPos0,s.radius+s.center.length()),r=i-this._initialNear,l=Math.min(a,r);this.camera.near=i-l;const h=Math.min(this._farPos0,-s.radius+s.center.length()),u=i-this._initialFar,c=Math.min(h,u);this.camera.far=i-c,this.camera.updateProjectionMatrix()}else{let i=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,i=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,i=!0),i&&this.camera.updateProjectionMatrix()}}setGizmosVisible(e){this._gizmos.visible=e,this.dispatchEvent(Vt)}setTbRadius(e){this.radiusFactor=e,this._tbRadius=this.calculateTbRadius(this.camera);const n=new $n(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),s=new ve().setFromPoints(n);for(const a in this._gizmos.children)this._gizmos.children[a].geometry=s;this.dispatchEvent(Vt)}setTransformationMatrices(e=null,i=null){e!=null?Se.camera!=null?Se.camera.copy(e):Se.camera=e.clone():Se.camera=null,i!=null?Se.gizmos!=null?Se.gizmos.copy(i):Se.gizmos=i.clone():Se.gizmos=null}getRaycaster(){return lp}}var _o={exports:{}};(function(o){/*!mobile-detect v1.4.5 2021-03-13*//*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/(function(t,e){t(function(){var i={};i.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",Pixel:"; \\bPixel\\b",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",Asus:"Asus.*Galaxy|PadFone.*Mobile",Xiaomi:"^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo (3DS|Switch)",Amoi:"Amoi",INQ:"INQ",OnePlus:"ONEPLUS",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",GoogleTablet:"Android.*Pixel C",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z930|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android [0-9.]+; [a-z-]+; \\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9|TECNO DP8D",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",VerizonTablet:"QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",HisenseTablet:"\\b(F5281|E2371)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",iPadOS:"CPU OS 13",SailfishOS:"Sailfish",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",Skyfire:"Skyfire",Edge:"\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",WeChat:"\\bMicroMessenger\\b",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:["Firefox/[VER]","FxiOS/[VER]"],Fennec:"Fennec/[VER]",Edge:"Edge/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]",UCBrowser:["UCWEB[VER]","UC.*Browser/[VER]"],MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",SamsungBrowser:"SamsungBrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",PaleMoon:"PaleMoon/[VER]",SailfishBrowser:"SailfishBrowser/[VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",Goanna:"Goanna/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",Sailfish:"Sailfish [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},i.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,tabletPattern:/android|ipad|playbook|silk/i};var n=Object.prototype.hasOwnProperty,s;i.FALLBACK_PHONE="UnknownPhone",i.FALLBACK_TABLET="UnknownTablet",i.FALLBACK_MOBILE="UnknownMobile",s="isArray"in Array?Array.isArray:function(c){return Object.prototype.toString.call(c)==="[object Array]"};function a(c,d){return c!=null&&d!=null&&c.toLowerCase()===d.toLowerCase()}function r(c,d){var p,g,m=c.length;if(!m||!d)return!1;for(p=d.toLowerCase(),g=0;g<m;++g)if(p===c[g].toLowerCase())return!0;return!1}function l(c){for(var d in c)n.call(c,d)&&(c[d]=new RegExp(c[d],"i"))}function h(c){return(c||"").substr(0,500)}(function(){var d,p,g,m,f,_,A=i.mobileDetectRules;for(d in A.props)if(n.call(A.props,d)){for(p=A.props[d],s(p)||(p=[p]),f=p.length,m=0;m<f;++m)g=p[m],_=g.indexOf("[VER]"),_>=0&&(g=g.substring(0,_)+"([\\w._\\+]+)"+g.substring(_+5)),p[m]=new RegExp(g,"i");A.props[d]=p}l(A.oss),l(A.phones),l(A.tablets),l(A.uas),l(A.utils),A.oss0={WindowsPhoneOS:A.oss.WindowsPhoneOS,WindowsMobileOS:A.oss.WindowsMobileOS}})(),i.findMatch=function(c,d){for(var p in c)if(n.call(c,p)&&c[p].test(d))return p;return null},i.findMatches=function(c,d){var p=[];for(var g in c)n.call(c,g)&&c[g].test(d)&&p.push(g);return p},i.getVersionStr=function(c,d){var p=i.mobileDetectRules.props,g,m,f,_;if(n.call(p,c)){for(g=p[c],f=g.length,m=0;m<f;++m)if(_=g[m].exec(d),_!==null)return _[1]}return null},i.getVersion=function(c,d){var p=i.getVersionStr(c,d);return p?i.prepareVersionNo(p):NaN},i.prepareVersionNo=function(c){var d;return d=c.split(/[a-z._ \/\-]/i),d.length===1&&(c=d[0]),d.length>1&&(c=d[0]+".",d.shift(),c+=d.join("")),Number(c)},i.isMobileFallback=function(c){return i.detectMobileBrowsers.fullPattern.test(c)||i.detectMobileBrowsers.shortPattern.test(c.substr(0,4))},i.isTabletFallback=function(c){return i.detectMobileBrowsers.tabletPattern.test(c)},i.prepareDetectionCache=function(c,d,p){if(c.mobile===e){var g,m,f;if(m=i.findMatch(i.mobileDetectRules.tablets,d),m){c.mobile=c.tablet=m,c.phone=null;return}if(g=i.findMatch(i.mobileDetectRules.phones,d),g){c.mobile=c.phone=g,c.tablet=null;return}i.isMobileFallback(d)?(f=u.isPhoneSized(p),f===e?(c.mobile=i.FALLBACK_MOBILE,c.tablet=c.phone=null):f?(c.mobile=c.phone=i.FALLBACK_PHONE,c.tablet=null):(c.mobile=c.tablet=i.FALLBACK_TABLET,c.phone=null)):i.isTabletFallback(d)?(c.mobile=c.tablet=i.FALLBACK_TABLET,c.phone=null):c.mobile=c.tablet=c.phone=null}},i.mobileGrade=function(c){var d=c.mobile()!==null;return c.os("iOS")&&c.version("iPad")>=4.3||c.os("iOS")&&c.version("iPhone")>=3.1||c.os("iOS")&&c.version("iPod")>=3.1||c.version("Android")>2.1&&c.is("Webkit")||c.version("Windows Phone OS")>=7||c.is("BlackBerry")&&c.version("BlackBerry")>=6||c.match("Playbook.*Tablet")||c.version("webOS")>=1.4&&c.match("Palm|Pre|Pixi")||c.match("hp.*TouchPad")||c.is("Firefox")&&c.version("Firefox")>=12||c.is("Chrome")&&c.is("AndroidOS")&&c.version("Android")>=4||c.is("Skyfire")&&c.version("Skyfire")>=4.1&&c.is("AndroidOS")&&c.version("Android")>=2.3||c.is("Opera")&&c.version("Opera Mobi")>11&&c.is("AndroidOS")||c.is("MeeGoOS")||c.is("Tizen")||c.is("Dolfin")&&c.version("Bada")>=2||(c.is("UC Browser")||c.is("Dolfin"))&&c.version("Android")>=2.3||c.match("Kindle Fire")||c.is("Kindle")&&c.version("Kindle")>=3||c.is("AndroidOS")&&c.is("NookTablet")||c.version("Chrome")>=11&&!d||c.version("Safari")>=5&&!d||c.version("Firefox")>=4&&!d||c.version("MSIE")>=7&&!d||c.version("Opera")>=10&&!d?"A":c.os("iOS")&&c.version("iPad")<4.3||c.os("iOS")&&c.version("iPhone")<3.1||c.os("iOS")&&c.version("iPod")<3.1||c.is("Blackberry")&&c.version("BlackBerry")>=5&&c.version("BlackBerry")<6||c.version("Opera Mini")>=5&&c.version("Opera Mini")<=6.5&&(c.version("Android")>=2.3||c.is("iOS"))||c.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||c.version("Opera Mobi")>=11&&c.is("SymbianOS")?"B":(c.version("BlackBerry")<5||c.match("MSIEMobile|Windows CE.*Mobile")||c.version("Windows Mobile")<=5.2,"C")},i.detectOS=function(c){return i.findMatch(i.mobileDetectRules.oss0,c)||i.findMatch(i.mobileDetectRules.oss,c)},i.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height};function u(c,d){this.ua=h(c),this._cache={},this.maxPhoneWidth=d||600}return u.prototype={constructor:u,mobile:function(){return i.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return i.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return i.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===e&&(this._cache.userAgent=i.findMatch(i.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===e&&(this._cache.userAgents=i.findMatches(i.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===e&&(this._cache.os=i.detectOS(this.ua)),this._cache.os},version:function(c){return i.getVersion(c,this.ua)},versionStr:function(c){return i.getVersionStr(c,this.ua)},is:function(c){return r(this.userAgents(),c)||a(c,this.os())||a(c,this.phone())||a(c,this.tablet())||r(i.findMatches(i.mobileDetectRules.utils,this.ua),c)},match:function(c){return c instanceof RegExp||(c=new RegExp(c,"i")),c.test(this.ua)},isPhoneSized:function(c){return u.isPhoneSized(c||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===e&&(this._cache.grade=i.mobileGrade(this)),this._cache.grade}},typeof window<"u"&&window.screen?u.isPhoneSized=function(c){return c<0?e:i.getDeviceSmallerSide()<=c}:u.isPhoneSized=function(){},u._impl=i,u.version="1.4.5 2021-03-13",u})})(function(t){if(o.exports)return function(e){o.exports=e()};if(typeof t=="function"&&t.amd)return t;if(typeof window<"u")return function(e){window.MobileDetect=e()};throw new Error("unknown environment")}())})(_o);const hp=_o.exports,$i=1,up=[15401030,4587765,44251,62743,14378240,15456512],Js=.95,Ha=.2,Ua=(()=>new hp(window.navigator.userAgent).mobile()!==null)();class dp{constructor(t,e){$(this,"raycaster");$(this,"controls");$(this,"domEl");$(this,"mouseXY");$(this,"render");$(this,"tempContainerForMouseDown");this.app=t,this.getIsAnimating=e,this.mouseXY={x:0,y:0},this.tempContainerForMouseDown={},this.domEl=this.app.renderer.domElement,this.raycaster=new go,this.render=this.app.render.bind(this.app),this.initEventListener(),this.initControl()}initControl(){this.controls=new cp(this.app.camera,this.domEl,this.app.scene),this.controls.addEventListener("change",this.render),this.stopControl(),this.controls.setGizmosVisible(!1)}getIntersectObjects(t){this.raycaster.setFromCamera(t,this.app.camera);const e=this.app.scene.children;return this.raycaster.intersectObjects(e,!1)}onMouseDown(){var r;if(this.getIsAnimating())return;const t={x:this.mouseXY.x,y:this.mouseXY.y};this.tempContainerForMouseDown.mouseStartPosition=t;const e=this.getIntersectObjects(t);if(e.length===0){this.startControl();return}const i=(r=e[0])==null?void 0:r.object;if(!e[0]||!i||Pn.getCubePositionType(i.position)==="center")return;const s=Pn.getAxisByPointPosition(e[0].point);this.tempContainerForMouseDown.axisOfTouchedFace=s,this.tempContainerForMouseDown.positionOfTouchedCube=i.position;const a=this.doCubeRotateWhenMouseUp.bind(this);Ua?this.domEl.addEventListener("touchend",a,{once:!0}):this.domEl.addEventListener("mouseup",a,{once:!0})}doCubeRotateWhenMouseUp(){const t={x:this.mouseXY.x,y:this.mouseXY.y},{mouseTrackvector:e}=this.getMouseTrackVector(t,this.tempContainerForMouseDown.mouseStartPosition),i=this.getCubeRotateData(e);this.app.cube.doRotate(i)}getCubeRotateData(t){const e=this.getAxisLineVectorToScreenVector(this.app.camera),i=this.tempContainerForMouseDown.axisOfTouchedFace,n=this.tempContainerForMouseDown.positionOfTouchedCube,s=this.getAxisToRotate(e,t,i);return{axis:s.axis,axisPosition:n[s.axis],direction:s.direction}}getAxisToRotate(t,e,i){const r=[{axis:"x",dotAbs:0,cross:0},{axis:"y",dotAbs:0,cross:0},{axis:"z",dotAbs:0,cross:0}].filter(u=>u.axis!==i).map(u=>{const c=e.dot(t[u.axis]),d=Math.abs(c),p=e.cross(t[u.axis]);return{axis:u.axis,dotAbs:d,cross:p}}).sort((u,c)=>u.dotAbs-c.dotAbs)[0],l=r.axis,h=r.cross>0?"counterclockwise":"clockwise";return{axis:l,direction:h}}getAxisLineVectorToScreenVector(t){const e=i=>{const n=new C(...i).project(t);return new It(n.x,n.y).normalize()};return{x:e([1,0,0]),y:e([0,1,0]),z:e([0,0,1])}}getMouseTrackVector(t,e){const i=new It(t.x-e.x,t.y-e.y);return{mouseTrackvectorLength:i.length(),mouseTrackvector:i}}stopControl(){this.controls.enabled=!1}startControl(){this.controls.enabled=!0}setMousePosition(t){this.mouseXY={x:t.clientX/window.innerWidth*2-1,y:-(t.clientY/window.innerHeight)*2+1}}onMobileTouchDown(t){this.onMobileMoveTouch(t),this.onMouseDown()}onMobileMoveTouch(t){if(t.preventDefault(),t.touches.length===1){const e=t.touches[0];this.mouseXY={x:e.clientX/window.innerWidth*2-1,y:-(e.clientY/window.innerHeight)*2+1}}}initEventListener(){const t=this.onMouseDown.bind(this),e=this.stopControl.bind(this),i=this.setMousePosition.bind(this),n=this.onMobileTouchDown.bind(this),s=this.onMobileMoveTouch.bind(this);Ua?(this.domEl.addEventListener("touchstart",n,{capture:!1,passive:!1}),this.domEl.addEventListener("touchend",e,!1),this.domEl.addEventListener("touchmove",s,!1)):(this.domEl.addEventListener("mousedown",t,!1),this.domEl.addEventListener("mouseup",e,!1),this.domEl.addEventListener("mousemove",i,!1))}}class Pn{constructor(t,e,i,n){$(this,"insideCubeColor");$(this,"group");$(this,"animateCubeGroup");this.scene=t,this.setMixer=e,this.cleanMixer=i,this.setIsAnimating=n,this.group=new Ei,this.insideCubeColor=up.map(s=>new hs({color:s})),this.initBox()}static zeroCountInPosition(t){const{x:e,y:i,z:n}=t;let s=0;return n===0&&(s+=1),i===0&&(s+=1),e===0&&(s+=1),s}static getAxisByPointPosition(t){const e=Object.entries(t);return e.forEach(n=>n[1]=Math.abs(n[1])),e.sort((n,s)=>s[1]-n[1])[0][0]}static getCubePositionType(t){const e=Pn.zeroCountInPosition(t);return e===3?"center":e===2?"face":e===1?"side":"corner"}createCell(){const t=new Ri($i,$i,$i),e=new hs({opacity:0,transparent:!0}),i=new We(t,e),n=new Ri($i*Js,$i*Js,$i*Js),s=new We(n,this.insideCubeColor);return s.name="insideCube",i.add(s),i}doRotate(t){this.setIsAnimating(!0);const e=this.getCubeGroup(t.axis,t.axisPosition);if(e==="error"){this.setIsAnimating(!1);return}this.animateRotate(e,t.axis,t.direction)}fixPosition(t){const e=[t.x,t.y,t.z].map(i=>{if(.5<i&&i<=1.5)return 1;if(-.5<i&&i<=.5)return 0;if(-1.5<=i&&i<=-.5)return-1});return{x:e[0],y:e[1],z:e[2]}}getFixedQuaternion(t){const e=t.clone(),i=[e.x,e.y,e.z,e.w].map(n=>{if(.8<n&&n<=1)return 1;if(.6<=n&&n<=.8)return .707;if(.2<n&&n<=.6)return .5;if(-.2<n&&n<=.2)return 0;if(-.6<n&&n<=-.2)return-.5;if(-.8<n&&n<=-.6)return-.707;if(-1<=n&&n<=-.8)return-1});return new Me(i[0],i[1],i[2],i[3])}animateRotate(t,e,i){const n=Math.PI/2*(i==="clockwise"?-1:1),s=new ap(t),a=[0,Ha],r=e==="x"?new C(1,0,0):e==="y"?new C(0,1,0):new C(0,0,1),l=new Me().setFromAxisAngle(r,n),h=t.quaternion,u=new He(".quaternion",a,[h.x,h.y,h.z,h.w,l.x,l.y,l.z,l.w]),c=new or("rotateGroup",Ha,[u]),d=s.clipAction(c);this.setMixer(s);const p=()=>{const g=[];t.children.forEach(m=>{const f=m.getWorldPosition(new C),{x:_,y:A,z:b}=this.fixPosition(f);m.position.setX(_),m.position.setY(A),m.position.setZ(b);const y=m.getWorldQuaternion(new Me),M=this.getFixedQuaternion(y);m.quaternion.x=M.x,m.quaternion.y=M.y,m.quaternion.z=M.z,m.quaternion.w=M.w,g.push(m)}),this.scene.add(...g),this.scene.remove(t),s.removeEventListener("finished",p),this.setIsAnimating(!1),this.cleanMixer()};s.addEventListener("finished",p),d.setLoop(Ka,1),d.play()}getCubeGroup(t,e){const i=new Ei;i.name="cubeGroup",this.scene.add(i);const n=[];return this.scene.children.forEach(s=>{s.position[t]===e&&s.name==="cube"&&n.push(s)}),n.length!==9?"error":(n.forEach(s=>i.add(s)),i)}initBox(){for(let t=0;t<3;t++)for(let e=0;e<3;e++)for(let i=0;i<3;i++){const n=this.createCell();n.name="cube",n.position.setX(i-1),n.position.setY(e-1),n.position.setZ(t-1),this.scene.add(n)}}}class fp{constructor(){$(this,"scene");$(this,"camera");$(this,"renderer");$(this,"cube");$(this,"axisLine");$(this,"clock");$(this,"isAnimating");$(this,"mouseEventManager");$(this,"mixer");this.isAnimating=!1,this.clock=new Yf,this.renderer=this.setInitRenderer(),this.scene=this.setInitScene(),this.camera=this.setInitCamera(),this.appendDOM(this.renderer.domElement),this.mouseEventManager=this.setInitMouseEventManager(),this.cube=this.setInitCube(),this.animate()}setInitMouseEventManager(){const t=this.getIsAnimating.bind(this);return new dp(this,t)}setMixer(t){this.mixer=t}cleanMixer(){}setIsAnimating(t){this.isAnimating=t}getIsAnimating(){return this.isAnimating}animate(){const t=this;requestAnimationFrame(()=>{t.animate()}),t.render(),t.mixer&&t.mixer.update(t.clock.getDelta())}render(){this.renderer.render(this.scene,this.camera)}setInitCube(){const t=this.setMixer.bind(this),e=this.cleanMixer.bind(this),i=this.setIsAnimating.bind(this);return new Pn(this.scene,t,e,i)}setInitScene(){return new Of}setInitCamera(){const t=new Ee(70,window.innerWidth/window.innerHeight,1,1e3);return t.position.z=5,t.position.x=5,t.position.y=5,t.lookAt(this.scene.position),t.updateMatrixWorld(),t}setInitRenderer(){const t=new ho;return t.setPixelRatio(window.devicePixelRatio),t.setClearColor(new Ht(16777215)),t.setSize(window.innerWidth,window.innerHeight),this.listenResize(),t}appendDOM(t){document.body.appendChild(t)}listenResize(){window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight)})}}new fp;
