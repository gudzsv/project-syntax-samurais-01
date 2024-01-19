const c=document.querySelector(".header-btn"),l=document.querySelector(".backdrop"),n=document.querySelector(".mobile-menu");c.addEventListener("click",()=>s(l,n));function s(...e){e.forEach(t=>t.classList.toggle("is-open"))}n.addEventListener("click",r);function r(e){const t=e.target.closest(".menu-btn"),o=e.target.closest(".mobile-menu-link");!t&&!o||s(n,l)}const a=document.getElementById("scroll-btn-top");window.onscroll=u;function u(){a.style.display=document.body.scrollTop>250||document.documentElement.scrollTop>250?"flex":"none"}a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i=document.querySelector(".signup-form");function m(e){e.preventDefault();const t={name:e.target.elements.name.value,email:e.target.elements.email.value,message:e.target.elements.message.value},o=`
Hello ${t.name} we have got your data:
-Your Name: ${t.name}
-Your Email: ${t.email}
-Your Message: ${t.message}
Thanks for your Sign Up, we'll get back to you shortly
`;alert(o),e.target.reset()}i.addEventListener("submit",m);
//# sourceMappingURL=scripts-1a8c9163.js.map
