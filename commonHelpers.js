(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const u=document.querySelector(".header-btn"),a=document.querySelector(".backdrop"),l=document.querySelector(".mobile-menu");u.addEventListener("click",()=>c(a,l));function c(...o){o.forEach(t=>t.classList.toggle("is-open"))}l.addEventListener("click",m);function m(o){const t=o.target.closest(".menu-btn"),r=o.target.closest(".mobile-menu-link");!t&&!r||c(l,a)}const d=document.querySelector(".signup-form");function f(o){o.preventDefault();const t={name:o.target.elements.name.value,email:o.target.elements.email.value,message:o.target.elements.message.value},r=`
Hello ${t.name} we have got your data:
-Your Name: ${t.name}
-Your Email: ${t.email}
-Your Message: ${t.message}
Thanks for your Sign Up, we'll get back to you shortly
`;alert(r),o.target.reset()}d.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
