// Инициализация Swiper
new Swiper('.allincl-benefits__slider', {
    // Стрелки
    navigation: {
        nextEl: '.allincl-benefits__slider-next',
        prevEl: '.allincl-benefits__slider-prev'
    },

    // Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания (не понял, что делает)
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Управление клавиатурой
    // keyboard: {
    //     // Включить/выключить
    //     enabled: true,
    //     // Включить/выключить только когда слайдер в пределах вьюпорта (то есть когда до него доскролили и только тогда)
    //     onlyInViewport: true,
    //     // Включить/выключить управление клавишами pageUp, pageDown
    //     pageUpDown: true,
    // },

    // Управление колесом мыши
    // mousewheel: {
    //     // Чувствительность колеса мыши
    //     sensitivity: 1,
    //     // Класс объекта, на котором будет срабатывать прокрутка мышью
    //     // Если же много таких слайдеров, то будут переключаться все, в таком случае, параметр лучше оставлять по умолчанию
    //     // eventTarget: ".image-slider",
    // },

    // Автовысота, если слайды разной высоты
    // тогда высота всего слайдера плавно подстраивается под высоту контента в слайде
    autoHeight: false,

    // Количество слайдов для показа (можно и не целые значения писать)
    // также можно указать свойство auto, при этом swiper-slide надо добавить width: auto
    slidesPerView: 1,

    // Отключение функционала, если слайдов меньше, чем нужно (например, указали выше 3, а слайдов 2, то слайдер отключится)
    watchOverflow: true,

    // Отпступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру: (хорошо работает, когда число пролистываемых слайдов = 1)
    centeredSlides: true,

    // Свободный режим прокрутки
    freeMode: false,

    // Скорость смены слайда
    speed: 800,

    // ЭФФЕКТЫ ПЕРЕКЛЮЧЕНИЯ СЛАЙДОВ
    // Листание
    // effect: 'slide', // этот по умолчанию

    // Смена прозрачности (для одного слайда только)
    // effect: 'fade',
    // Дополнение к fade
    // fadeEffect: {
    //     // Параллельная смена прозрачности
    //     crossFade: true,
    // },

    // // Переворот
    // effect: 'flip',
    // // Дополнение к flip
    // flipEffect: {
    //     // Тень
    //     slideShadows: true,
    //     // Показ только активного слайда
    //     limitRotation: true,
    // },

    // Куб (также надо в стилях ограничить ширину всего слайдера image-slider: width: 500px)
    effect: 'cube',
    // Дополнение к cube
    cubeEffect: {
        // Настройка тени
        slideShadow: false,
        shadow: false,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    // Эффект потока (слайда как бы накладываются друг на друга с небольшим наклоном)
    // effect: 'coverflow',
    // // Дополнение к coverflow
    // coverflowEffect: {
    //     // Угол
    //     rotate: 20,
    //     // Наложение
    //     stretch: 50,
    //     // Тень
    //     slideShadows: true,
    // }

    // БРЕЙК ПОИНТЫ (АДАПТИВ)
    // Ширина экрана (mobile first, то есть сработает тогда, когда ширина болешь, чем указано)
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     991: {
    //         slidesPerView: 2,
    //     },
    //     1146: {
    //         slidesPerView: 3,
    //     },
    // },
    
    // // LAZY LOADING
    // // Отключить предзагрузка всех картинок
    // preloadImages: false,
    // // Lazy Loading (подгрузка картинок)
    // lazy: {
    //     // Подгружать на старте переключения слайда
    //     loadOnTransitionStart: false,
    //     // Подгрузить предыдущую и следующую картинки
    //     loadPrevNext: false,
    // },
    // // Включать эти два значения надо тогда, когда slidesPerView: auto или больше, чем 1
    // // Слежка за видимыми слайдами
    // watchSlidesProgress: true,
    // // Добавление класса видимым слайдам
    // watchSlidesVisibility: true,
});
