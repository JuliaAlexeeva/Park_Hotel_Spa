// // !!! ДЛЯ ФИКСИРУЮЩЕЙ ШАПКИ:

// // Функция с фиксацией body для IOS, так как там не работает свойство overflow: hidden
// // которое присваивается body через класс lock (в nullstyle)
// let burgerButton = document.querySelector('.header__burger-button');
// let burgerMenu = document.querySelector('.header__burger-menu');
// let mainBody = document.body;
// /*===================================================================================*/
// burgerButton.addEventListener('click', function () {
//     var deviceHeight = mainBody.clientHeight;
//     var currentCoordValue = coordValue() * (-1) + deviceHeight;

//     burgerButton.classList.toggle('active');
//     burgerMenu.classList.toggle('active');
//     mainBody.classList.toggle('lock');

//     // коррелирует с шапкой (header), если ей не задать fixed, а body присваивать, то шапку перекроет
//     mainBody.style.position = 'fixed';
//     mainBody.style.top = currentCoordValue + 'px';
//     if (!(burgerButton.classList.contains('active'))) {
//         mainBody.style.position = '';
//         mainBody.style.top = '';
//         window.scrollTo(0, (-currentCoordValue));
//     }
// });
// /*===================================================================================*/
// // TODO: чтобы при изменении ширины экрана убирался active у Бургера
// window.addEventListener('resize', resizeBurger);
// // переменная для того, чтобы код при resize отработала единожды
// var isResize = false;
// export function resizeBurger() {
//     let currentDeviceWidth = window.innerWidth;
//     // при включенном бургере и изменить ширину более 768px то произойдет скролл в самое начало страницы
//     // не получилось просчитать момент фиксации :(

//     if (currentDeviceWidth >= 768 && !isResize) {
//         burgerButton.classList.remove('active');
//         burgerMenu.classList.remove('active');
//         mainBody.classList.remove('lock');
//         mainBody.style.position = '';
//         mainBody.style.top = '';

//         isResize = true;
//     } else if (currentDeviceWidth < 768 && isResize) {
//         isResize = false;
//     }
// }
// /*===================================================================================*/
// // Функция для определения координаты body при скролле к нужному попапу (для фиксации body на IOS)
// function coordValue() {
//     const currentWindowCoord = document.body.getBoundingClientRect().top;
//     return currentWindowCoord;
// }
// /*===================================================================================*/


// !!! ШАПКА НЕ ФИКСИРУЕТСЯ

// Функция с фиксацией body для IOS, так как там не работает свойство overflow: hidden
// которое присваивается body через класс lock (в nullstyle)
const burgerButton = document.querySelector('.header-action__burger');
const burgerMenu = document.querySelector('.header__burger-menu');
const mainBody = document.body;
const headerBlock = document.querySelector('.header-block');
const headerContainer = document.querySelector('.header__container');
/*----------------------------------------------------------------------*/
burgerButton.addEventListener('click', function () {

    burgerButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    headerContainer.classList.toggle('active-burger');
    mainBody.classList.toggle('lock');
    mainBody.style.position = 'fixed';
    headerBlock.style.background = 'var(--def_background-color)';

    if (!(burgerButton.classList.contains('active'))) {
        mainBody.style.position = '';
        headerBlock.style.background = 'transparent';
    }
});
/*----------------------------------------------------------------------*/
// TODO: чтобы при изменении ширины экрана убирался active у Бургера
// window.addEventListener('resize', resizeBurger);
// // переменная для того, чтобы код при resize отработала единожды
// var isResize = false;
// export function resizeBurger() {
//     let currentDeviceWidth = window.innerWidth;

//     if (currentDeviceWidth >= 768 && !isResize) {
//         burgerButton.classList.remove('active');
//         burgerMenu.classList.remove('active');
//         headerBlock.classList.remove('active-burger');
//         mainBody.classList.remove('lock');
//         mainBody.style.position = '';
//         isResize = true;
//     } else if (currentDeviceWidth < 991 && isResize) {
//         isResize = false;
//     }
// }

// ==================================================================================

// Функция для определения координаты body при скролле (для фиксации body на IOS)
function coordValue() {
    const currentWindowCoord = body.getBoundingClientRect().top;
    return currentWindowCoord;
}