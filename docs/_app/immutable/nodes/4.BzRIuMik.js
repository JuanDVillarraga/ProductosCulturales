import{s as B,f as p,a as E,h as $,j as T,d as _,c as w,C as N,r as D,i as v,l as x,n as j,D as M,t as z,k as F,m as G}from"../chunks/scheduler.Ku3LWE4j.js";import{S as J,i as K,c as O,a as S,m as y,t as C,b as H,d as L}from"../chunks/index.jOx7AaNw.js";import{P as Q}from"../chunks/Page.DeYLaP8m.js";import{e as k}from"../chunks/Footer.FB7A4pMF.js";import{b as U}from"../chunks/paths.BmY9Xi_v.js";import{m as W}from"../chunks/metadata.D17Hbm7s.js";import{S as X,m as Y}from"../chunks/md.BYHfBo5p.js";function P(o,t,n){const a=o.slice();return a[1]=t[n],a}function q(o,t,n){const a=o.slice();return a[4]=t[n],a}function I(o,t,n){const a=o.slice();return a[7]=t[n],a}function R(o){let t,n=o[7]+"",a;return{c(){t=p("th"),a=z(n)},l(l){t=$(l,"TH",{});var e=T(t);a=F(e,n),e.forEach(_)},m(l,e){v(l,t,e),x(t,a)},p(l,e){e&1&&n!==(n=l[7]+"")&&G(a,n)},d(l){l&&_(t)}}}function V(o){let t,n=o[4]+"",a;return{c(){t=p("td"),a=z(n)},l(l){t=$(l,"TD",{});var e=T(t);a=F(e,n),e.forEach(_)},m(l,e){v(l,t,e),x(t,a)},p(l,e){e&1&&n!==(n=l[4]+"")&&G(a,n)},d(l){l&&_(t)}}}function A(o){let t,n,a=k(Object.values(o[1])),l=[];for(let e=0;e<a.length;e+=1)l[e]=V(q(o,a,e));return{c(){t=p("tr");for(let e=0;e<l.length;e+=1)l[e].c();n=E()},l(e){t=$(e,"TR",{});var i=T(t);for(let c=0;c<l.length;c+=1)l[c].l(i);n=w(i),i.forEach(_)},m(e,i){v(e,t,i);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(t,null);x(t,n)},p(e,i){if(i&1){a=k(Object.values(e[1]));let c;for(c=0;c<a.length;c+=1){const h=q(e,a,c);l[c]?l[c].p(h,i):(l[c]=V(h),l[c].c(),l[c].m(t,n))}for(;c<l.length;c+=1)l[c].d(1);l.length=a.length}},d(e){e&&_(t),M(l,e)}}}function Z(o){let t,n,a,l,e,i,c=`<a download="" target="_blank" rel="noreferrer" href="${`${U}/data/metadata.csv`}"><button class="default-button">Descargar</button></a>`,h=k(Object.keys(o[0][0])),f=[];for(let s=0;s<h.length;s+=1)f[s]=R(I(o,h,s));let b=k(o[0]),m=[];for(let s=0;s<b.length;s+=1)m[s]=A(P(o,b,s));return{c(){t=p("div"),n=p("table"),a=p("tr");for(let s=0;s<f.length;s+=1)f[s].c();l=E();for(let s=0;s<m.length;s+=1)m[s].c();e=E(),i=p("div"),i.innerHTML=c,this.h()},l(s){t=$(s,"DIV",{class:!0});var u=T(t);n=$(u,"TABLE",{class:!0});var r=T(n);a=$(r,"TR",{});var d=T(a);for(let g=0;g<f.length;g+=1)f[g].l(d);d.forEach(_),l=w(r);for(let g=0;g<m.length;g+=1)m[g].l(r);r.forEach(_),u.forEach(_),e=w(s),i=$(s,"DIV",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-1q8afvp"&&(i.innerHTML=c),this.h()},h(){D(n,"class","metadata-table"),D(t,"class","metadata-table-container svelte-1akrh8d"),D(i,"class","button-container")},m(s,u){v(s,t,u),x(t,n),x(n,a);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m(a,null);x(n,l);for(let r=0;r<m.length;r+=1)m[r]&&m[r].m(n,null);v(s,e,u),v(s,i,u)},p(s,[u]){if(u&1){h=k(Object.keys(s[0][0]));let r;for(r=0;r<h.length;r+=1){const d=I(s,h,r);f[r]?f[r].p(d,u):(f[r]=R(d),f[r].c(),f[r].m(a,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=h.length}if(u&1){b=k(s[0]);let r;for(r=0;r<b.length;r+=1){const d=P(s,b,r);m[r]?m[r].p(d,u):(m[r]=A(d),m[r].c(),m[r].m(n,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=b.length}},i:j,o:j,d(s){s&&(_(t),_(e),_(i)),M(f,s),M(m,s)}}}function tt(o,t,n){let{metadata:a}=t;return o.$$set=l=>{"metadata"in l&&n(0,a=l.metadata)},[a]}class et extends J{constructor(t){super(),K(this,t,tt,Z,B,{metadata:0})}}function at(o){let t,n,a,l;return t=new X({props:{source:o[0]}}),a=new et({props:{metadata:W}}),{c(){O(t.$$.fragment),n=E(),O(a.$$.fragment)},l(e){S(t.$$.fragment,e),n=w(e),S(a.$$.fragment,e)},m(e,i){y(t,e,i),v(e,n,i),y(a,e,i),l=!0},p:j,i(e){l||(C(t.$$.fragment,e),C(a.$$.fragment,e),l=!0)},o(e){H(t.$$.fragment,e),H(a.$$.fragment,e),l=!1},d(e){e&&_(n),L(t,e),L(a,e)}}}function lt(o){let t,n;return t=new Q({props:{$$slots:{default:[at]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment)},l(a){S(t.$$.fragment,a)},m(a,l){y(t,a,l),n=!0},p(a,[l]){const e={};l&2&&(e.$$scope={dirty:l,ctx:a}),t.$set(e)},i(a){n||(C(t.$$.fragment,a),n=!0)},o(a){H(t.$$.fragment,a),n=!1},d(a){L(t,a)}}}function nt(o){return[Y.metadata.body]}class _t extends J{constructor(t){super(),K(this,t,nt,lt,B,{})}}export{_t as component};
