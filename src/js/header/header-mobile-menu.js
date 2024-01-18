const burgerBtn = document.querySelector('.header-btn');
const backdrop = document.querySelector('.backdrop');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', () => toggleModal(backdrop, mobileMenu));

function toggleModal(...elements) {
  elements.forEach(element => element.classList.toggle('is-open'));
}

mobileMenu.addEventListener('click', handleModalButtonClick);

function handleModalButtonClick(e) {
  const isMenuBtn = e.target.closest('.menu-btn');
  const isMobileMenuLink = e.target.closest('.mobile-menu-link');
  if (!isMenuBtn && !isMobileMenuLink) return;

  toggleModal(mobileMenu, backdrop);
}

///------- To top Button -----//

const btnTop = document.getElementById('scroll-btn-top');
window.onscroll = scrollFunction;

function scrollFunction() {
  btnTop.style.display =
    document.body.scrollTop > 250 || document.documentElement.scrollTop > 250
      ? 'flex'
      : 'none';
}

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
