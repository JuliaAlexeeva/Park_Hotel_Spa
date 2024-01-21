window.addEventListener('load', sliderButtonsInit);
window.addEventListener('resize', sliderButtonsInit);

const buttonsSliderBlock = document.querySelector('.left-side-prog__buttons');

function sliderButtonsInit() {
    let currentDeviceWidth = window.innerWidth;
    if (currentDeviceWidth < 767.98) {
        $(document).ready(function () {
            $('.left-side-prog__buttons').length && $('.left-side-prog__buttons').not('.slick-initialized').slick({
                arrows: false, // опция для стрелок, по умолчанию true, но если нам стрелки не нужны, то ставим false
                dots: false, // опция для точек управления, по умолчанию false (их отдельно нужно стилизовать)
                
                slidesToShow: 1, // опция, кол-во слайдов, которое показывается за раз, по умолчанию 1
                slidesToScroll: 1, // опция, кол-во слайдо, которое будет прокручиваться при нажатии кнопки, по умолчанию 1
                initialSlide: 0, // опция, стартовый слайд, по умолчанию 0
                
                speed: 1000, // опция, скорость прокрутки слайдов, по умолчанию 300мс
                easing: 'linear', // опция, тип анимации
                infinite: false, // опция, когда прокрутка достигает конца слайдов, то кнопка становится неактивна (добавляется класс slick-disabled) (БЕСКОНЕЧНАЯ ПРОКРУТКА ПРИ TRUE)
                autoplay: false, // опция, автоматический проигрыш слайдов, по умолчанию false
                autoplaySpeed: 10000, // опция, определяет скорость автопроигрыша, по умолчанию 3000мс (хорошо сочетается для большого числа слайдов и когда infinite:true)
                edgeFriction: 0.5, // опция, сопротивление при пролистывании краев небесконечных каруселей, работает при infinite: false значение по умолчанию 0.15 (от 0 до 1)
        
                pauseOnFocus: false, // опция, пауза автопрокрутки при фокусе на слайдере
                pauseOnHover: false, // опция пауза автопрокрутки при наведении на слайдере
                pauseOnDotsHover: false, // опция пауза автопрокрутки при наведении на точки управления
                draggable: true, // опция, включает свайп слайдов на ПК с помощью мыши (по умолчанию true), но на мобильных устройствах все будет работать
                swipe: true, // опция, включает свайп слайдов на моб устройствах (по умолчанию true)
                waitForAnimate: false, // опция, по умолчанию true, разрешает перелистывание ещё до того, как прогрузилась анимация прокрутки (ставим false)
                touchThreshold: 5, // опция, сколько свайпов сделать, чтобы осуществился переход на телефоне
                touchMove: true, // опция, разрешает тянуть слайд, который переключаем
        
                centerMode: false, // опция, по умолчанию false (добавляет класс slick-center для главного слайда) ------------------------------------------------------------------------------------------ эти два сочетания и использовать в работе Base (true)
                variableWidth: true, // опция, по умолчанию false, впихивает по ширине все слайды, обреза с краю, которые не вместились, хорошо работает с centerMode:true --------------------------------- эти два сочетания и использовать в работе Base (true)
                adaptiveHeight: false, // опция, по умолчанию false, слайдер автоматически подстраивается по высоте под конкретный слайд (нужно дописать стиль .slick-track {align-items: flex-start}) ПОЧЕМУ-ТО КОГДА TRUE - ТО ВЫДАЕТ ОШИБКУ WEBPACK
                
                rows: 1, // опция, устанавливаем ряды (этажи для слайдов)
                slidesPerRow: 1, // опция, число слайдов на ряду
                vertical: false, // опция, вертикальный скрол ( по умолчанию flase) (ещё нужно отключить display:flex)
                verticalSwiping: false, // опция, что вертикальный скролл был (по умолчанию false)
        
                // asNavFor: ".main__banner-container", // опция, чтобы связать с другим слайдером
                mobileFirst: false, // опция, если указать true, то все breakpoint будут как min-width то есть только при этом breakpoint и выше будут выполняться настройки
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            // На IOS не работают эти свойства, поэтому просто задавать меньший margin нужно
                            centerMode: false,
                            variableWidth: false,
                            // infinite: true,
                        }
                    },
                ],
            });
        });
    }
    // Отключение slick-slider
    if (currentDeviceWidth > 767.98 && buttonsSliderBlock.classList.contains('slick-initialized')) {
        $('.left-side-prog__buttons').slick('unslick');
    }
}
