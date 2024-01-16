(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u=document.querySelector(".header-btn"),i=document.querySelector(".backdrop"),l=document.querySelector(".mobile-menu");u.addEventListener("click",()=>c(i,l));function c(...r){r.forEach(t=>t.classList.toggle("is-open"))}l.addEventListener("click",d);function d(r){r.target.closest(".menu-btn")&&c(l,i)}const m=document.querySelector(".signup-form");function f(r){r.preventDefault();const t={name:r.target.elements.name.value,email:r.target.elements.email.value,message:r.target.elements.message.value},n=`
	Hello ${t.name} we have got your data:
	-Your Name: ${t.name}
	-Your Email: ${t.email}
	-Your Message: ${t.message}
	Thanks for your Sign Up, we'll get back to you shortly
	`;alert(n),r.target.reset()}m.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
