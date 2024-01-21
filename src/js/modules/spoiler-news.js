// NEWS-PAGE SPOILER

const allNewsCards = document.querySelectorAll('.news-page__item');
const showMoreNewsButton = document.getElementById('more_news');
const showLessNewsButton = document.getElementById('less_news');

for (let i = 0; i < allNewsCards.length; i++) {
    let separateNews = allNewsCards[i];    
    if (i > 7) {
        separateNews.classList.add('hidden-news');
    }
    if (allNewsCards.length <= 8) {
        showMoreNewsButton.style.display = "none";
    }
}

if (showMoreNewsButton) {
    showMoreNewsButton.addEventListener('click', showMoreNews);
}

if (showLessNewsButton) {
    showLessNewsButton.addEventListener('click', showLessNews);
}

function showMoreNews() {
    let allHiddenNews = document.querySelectorAll('.hidden-news');
    if (allHiddenNews.length != 0) {
        if (allHiddenNews.length > 4) {
            for (let i = 0; i < 4; i++) {
                let oneHiddenNews = allHiddenNews[i].classList.remove('hidden-news');
            }
        } else {
            allHiddenNews.forEach(item => {
                item.classList.remove('hidden-news');
            });
            showMoreNewsButton.style.display = "none";
            showLessNewsButton.classList.remove('hidden-button');
        }
    }
    event.preventDefault();
}

function showLessNews() {
    for (let i = 0; i < allNewsCards.length; i++) {
        if ((allNewsCards.length - i) > 8) {
            let mustHiddenNews = allNewsCards[allNewsCards.length - (i + 1)].classList.add('hidden-news');
        }
    }
    showMoreNewsButton.style.display = "flex";
    showLessNewsButton.classList.add('hidden-button');
    event.preventDefault();
}