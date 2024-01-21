const imgBlockCategories = document.querySelector('.gallery-page__items');

if (imgBlockCategories) {
    imgBlockCategories.addEventListener('click', function(event) {       
        showImgCollection(event);
    });
}

function showImgCollection(event) {
    let currentDeviceWidth = window.innerWidth;
    if (event.target.closest('.gall-item__img')) {
        // Получаем установленное значение data-атрибута, в данном случае data-category
        let separateCategory = event.target.dataset.category; // при разрешении менее 991 уже другое содержимое event.target

        // Для планшетов и телефонов, так как там разный вывод event содержимого и нет привязанного класса,
        // только атрибут img и alt, вот alt нам и нужен, он будет аналогом атрибута data-category, который для > 991 экранов
        let altValueCategory = event.target.getAttribute('alt');

        if (currentDeviceWidth > 991) {
            let categoryClassName = `.gall-item__lightbox-${separateCategory}`;
            startLightboxView(categoryClassName);
        } else {
            let categoryClassName = `.gall-item__lightbox-${altValueCategory}`;
            startLightboxView(categoryClassName);
        }
    }
}

function startLightboxView(categoryClassName) {
    // Здесь мы получаем коллекцию изображений внутри конкретной категории и каждом задаём значение атрибута для lightbox
    // чтобы отображались картинки только конкретной категории    
    let lightBoxContainer = document.querySelector(categoryClassName);
    let lightBoxContainerChildrens = lightBoxContainer.querySelectorAll('.gall-item__collection');
    
    lightBoxContainerChildrens.forEach(children => {
        children.dataset.fslightbox = 'gallery';
    });
        
    // Получаем весь блок с картинками данной категории и первый элемент внутри для имитации нажатия
    // чтобы запустить работу lightbox
    let galleryLightboxView = document.querySelector(categoryClassName).children[0];
    if (galleryLightboxView) {
        galleryLightboxView.click();
    }
}

