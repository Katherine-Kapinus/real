
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

document.addEventListener('DOMContentLoaded', function () {
    const dealButtons = document.querySelectorAll('.tabs-deals__button');
    const tabsItems = document.querySelectorAll('.item-tabs__items');
    const headerMainButton = document.querySelector('.header-deals__button');
    const dealsItem = document.querySelector('.tabs-deals__item');
    
    if (dealButtons.length > 0) {
        // Спочатку додаємо клас active першій кнопці та табу
        dealButtons[0].classList.add('active');
        tabsItems[0].classList.add('active');
        
        // Додаємо обробник подій на всі кнопки
        dealButtons.forEach((button, index) => {
            button.addEventListener('click', function () {
                // При кліку прибираємо active у всіх
                dealButtons.forEach(btn => btn.classList.remove('active'));
                tabsItems.forEach(item => item.classList.remove('active'));

                // Прибираємо show-all
                dealsItem.classList.remove('show-all');
                
                // Додаємо active тільки тій, на яку натиснули
                this.classList.add('active');
                tabsItems[index].classList.add('active');
            });
        });
    }
    

    if (headerMainButton) {
        headerMainButton.addEventListener('click', function () {
            
            dealButtons.forEach(btn => btn.classList.remove('active'));
            tabsItems.forEach(item => item.classList.remove('active'));
            
            dealsItem.classList.add('show-all');
        });
    }
});

