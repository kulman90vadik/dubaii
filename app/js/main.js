
window.addEventListener("load", function(){

//  ВЫБОР ЯЗЫКА НА СТРАНИЦЕ    
    const headerList = document.querySelector('.header__list');
    const headerBtn = document.querySelector('.header__btn');
    const headerArrow = document.querySelector('.header__arrow');
    headerBtn.addEventListener('click', function(){
        headerList.classList.toggle('header__list--active');
        headerArrow.classList.toggle('header__arrow--active');
    });

    document.querySelectorAll('.header__option').forEach(option => {
        option.addEventListener('click', function(){
            headerList.classList.toggle('header__list--active');
            headerBtn.value =  option.value;
            headerArrow.classList.toggle('header__arrow--active');
            document.querySelector('.header__text').innerHTML = option.value;
        });
    });
//  МОДАЛЬНОЕ ОКНО
    const popupContent = document.querySelector('.popup__content');
    document.querySelector('.home__btn').addEventListener('click', function(){
        document.querySelector('.popup').classList.toggle('popup--active');
        popupContent.classList.toggle('popup__content--active');
    });
    //  ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
    document.querySelector('.popup__btn-exit').addEventListener('click', function(){
        popupContent.classList.toggle('popup__content--active');
        document.querySelector('.popup').classList.toggle('popup--active');
    });

    let reservationBtnNumber = document.querySelector('.reservation__btn--number');
    let reservationBtnBottom =  document.querySelector('.reservation__btn--bottom');

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
    document.querySelector('.reservation__btn--select').addEventListener('click', function(){
        document.querySelector('.reservation__select').classList.toggle('reservation__select--active');
    });
    document.querySelectorAll('.reservation__items').forEach(item => {
        item.addEventListener('click', function(){
            let valueItem = item.textContent;
            document.querySelector('.reservation__btn--select').innerHTML = valueItem;
            document.querySelector('.reservation__btn--select').value = valueItem;
            document.querySelector('.reservation__select').classList.toggle('reservation__select--active');
        });
    });
    
// КАТАЛОГ ФИЛЬТР -- SELECT

    let sidebarButtons = document.querySelectorAll('.sidebar__button');
    sidebarButtons.forEach(btn => {
        btn.addEventListener('click', function(){
            let sidebarFilter = btn.closest('.sidebar__filter');
            sidebarFilter.querySelector('.sidebar__list').classList.toggle('sidebar__list--active');
        });
    });


//  РАЗВЕРНУТЬ/СКРЫИТ catalogs-card
    let catalogsDots = document.querySelector('.catalogs-card__text--dots');
    let catalogsMore = document.querySelector('.catalogs-card__text--more');
    let catalogsBtnSpan = document.querySelector('.catalogs-card__add span')
    document.querySelector('.catalogs-card__add').addEventListener('click', function(){
        document.querySelector('.catalogs-card__icon').classList.toggle('catalogs-card__icon--active');
        if(catalogsDots.style.display === 'none') {
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
    // СДЕЛАТЬ МНОЖЕСТВЕННЫЙ ВЫБОР КАРД
        
});
