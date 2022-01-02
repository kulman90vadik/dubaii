
window.addEventListener("load", function () {






    //  ВЫБОР ЯЗЫКА НА СТРАНИЦЕ    
    const headerList = document.querySelector('.header__list');
    const headerBtn = document.querySelector('.header__btn');
    const headerArrow = document.querySelector('.header__arrow');
    headerBtn.addEventListener('click', function () {
        headerList.classList.toggle('header__list--active');
        headerArrow.classList.toggle('header__arrow--active');
    });

    document.querySelectorAll('.header__option').forEach(option => {
        option.addEventListener('click', function () {
            headerList.classList.toggle('header__list--active');
            headerBtn.value = option.value;
            headerArrow.classList.toggle('header__arrow--active');
            document.querySelector('.header__text').innerHTML = option.value;
        });
    });
    //  МОДАЛЬНОЕ ОКНО

    document.querySelectorAll('.popup-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            let section = btn.closest('.popup-modal');
            let popupContent = section.querySelector('.popup__content');
            section.querySelector('.popup').classList.toggle('popup--active');
            popupContent.classList.toggle('popup__content--active');
        });
    });

    //  ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
    document.querySelectorAll('.popup__btn-exit').forEach(exit => {
        exit.addEventListener('click', function () {
            let section = exit.closest('.popup-modal');
            let popupContent = section.querySelector('.popup__content');
            popupContent.classList.toggle('popup__content--active');
            section.querySelector('.popup').classList.toggle('popup--active');
        });
    });
    // ЗАГРУЗКА ФОТОГРАФИИ ДЛЯ ОТЗЫВА
    let inputFile = document.querySelector('.popup__input-file');
    inputFile.addEventListener('input', function () {
        // console.log(inputFile.value);
        let inputFileValue = inputFile.value;
        document.querySelector('.popup__image').setAttribute('src', inputFileValue);
    });


    // let reservationBtnNumber = document.querySelector('.reservation__btn--number');
    // let reservationBtnBottom =  document.querySelector('.reservation__btn--bottom');
    // 1 
    // reservationBtnNumber.addEventListener('click', function(){
    //     reservationBtnBottom.classList.toggle('reservation__btn--mann');
    // });
    // 2
    // reservationBtnBottom.addEventListener('click', function(){
    //     reservationBtnBottom.value = reservationBtnNumber.value;
    //     reservationBtnBottom.querySelector('.reservation__text').innerHTML = reservationBtnNumber.value;
    //     reservationBtnBottom.classList.toggle('reservation__btn--mann');
    //     reservationBtnNumber.value = reservationBtnBottom.value;
    //     reservationBtnNumber.querySelector('.reservation__text').innerHTML = reservationBtnBottom.value;
    // });

    //  ВЫПАДАЮЩИЙ СПИСОК - ВЫБОР ГОРОДА
    document.querySelector('.reservation__btn--select').addEventListener('click', function () {
        document.querySelector('.reservation__select').classList.toggle('reservation__select--active');
    });
    document.querySelectorAll('.reservation__items').forEach(item => {
        item.addEventListener('click', function () {
            let valueItem = item.textContent;
            document.querySelector('.reservation__btn--select').innerHTML = valueItem;
            document.querySelector('.reservation__btn--select').value = valueItem;
            document.querySelector('.reservation__select').classList.toggle('reservation__select--active');
        });
    });

    // КАТАЛОГ ФИЛЬТР -- SELECT

    // let sidebarButtons = document.querySelectorAll('.sidebar__button');
    // sidebarButtons.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         let sidebarFilter = btn.closest('.sidebar__filter');
    //         sidebarFilter.querySelector('.sidebar__list').classList.toggle('sidebar__list--active');
    //     });
    // });


    const sidebarButton = document.querySelectorAll('.sidebar__button');
    sidebarButton.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('sidebar__button--active');
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } 
            else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } 
        });
    });

    //  РАЗВЕРНУТЬ/СКРЫИТ catalogs-card

    document.querySelectorAll('.catalogs-card__add').forEach(link => {
        link.addEventListener('click', function () {
            let card = link.closest('.catalogs-card');
            card.querySelector('.catalogs-card__icon').classList.toggle('catalogs-card__icon--active');
            let catalogsDots = card.querySelector('.catalogs-card__text--dots');
            let catalogsMore = card.querySelector('.catalogs-card__text--more');
            let catalogsBtnSpan = card.querySelector('.catalogs-card__add span');

            if (catalogsDots.style.display === 'none') {
                catalogsDots.style.display = 'inline';
                catalogsBtnSpan.innerHTML = 'Развернуть';
                catalogsMore.style.display = 'none';
            }
            else {
                catalogsDots.style.display = 'none';
                catalogsBtnSpan.innerHTML = 'Скрыть';
                catalogsMore.style.display = 'inline';
            }
        });
    });

    //  slider reviews    
    const swiper = new Swiper('.reviews__slider', {
        loop: true,
        slideClass: 'reviews__slide',
        wrapperClass: 'reviews__wrapper',
        spaceBetween: 25,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });








    const questionsBtns = document.querySelectorAll('.questions__btn');
    questionsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('questions__btn--active');
            let panel = this.nextElementSibling;
            let closest = this.closest('.questions__item');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                closest.style.marginLeft = 0;
                this.style.marginLeft = 0;
            } 
            else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                closest.style.marginLeft = '13px';
                this.style.marginLeft = '-13px';
            } 
        });
    });

 ///////////////////////////////////////////////////////////////





});
