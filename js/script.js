
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    // необов'язково, якщо потрібно:
    // autoplay: {
    // delay: 3000,
    // disableOnInteraction: false,
    // },
    speed: 800,
    effect: 'slide', // або 'fade', 'cube', 'coverflow'
});

const hamNenu = document.querySelector('.header__ham-menu');
const navigation = document.querySelector('.navigation');
hamNenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamNenu.classList.toggle('active');
});