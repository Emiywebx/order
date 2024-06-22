function googleTranslateElementInit(){
	new google.translate.TranslateElement(
	{pageLanguage: 'en'},
	'google_translate_element'
	);
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()  =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()  =>{
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()  =>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}
let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()  =>{
    navBar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });