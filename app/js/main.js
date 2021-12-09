
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




});
