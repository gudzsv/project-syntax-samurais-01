(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const d=document.querySelector(".header-btn"),i=document.querySelector(".backdrop"),l=document.querySelector(".mobile-menu");d.addEventListener("click",()=>u(i,l));function u(...o){o.forEach(t=>t.classList.toggle("is-open"))}l.addEventListener("click",m);function m(o){const t=o.target.closest(".menu-btn"),r=o.target.closest(".mobile-menu-link");!t&&!r||u(l,i)}const a=document.getElementById("scroll-btn-top");window.onscroll=f;function f(){a.style.display=document.body.scrollTop>250||document.documentElement.scrollTop>250?"flex":"none"}a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const g=document.querySelector(".signup-form");function p(o){o.preventDefault();const t={name:o.target.elements.name.value,email:o.target.elements.email.value,message:o.target.elements.message.value},r=`
Hello ${t.name} we have got your data:
-Your Name: ${t.name}
-Your Email: ${t.email}
-Your Message: ${t.message}
Thanks for your Sign Up, we'll get back to you shortly
`;alert(r),o.target.reset()}g.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
