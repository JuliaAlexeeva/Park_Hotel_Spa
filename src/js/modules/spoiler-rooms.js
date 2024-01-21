const allRoomsCards = document.querySelectorAll('.rooms-apart__card');
const showMoreRoomsButton = document.getElementById('more_rooms');
const showLessRoomsButton = document.getElementById('less_rooms');

if (allRoomsCards.length > 0) {
    window.addEventListener('load', showRoomsCards);
    window.addEventListener('resize', showRoomsCards);
}

if (showMoreRoomsButton) {
    showMoreRoomsButton.addEventListener('click', showMoreRooms);
}

if (showLessRoomsButton) {
    showLessRoomsButton.addEventListener('click', showLessRooms);
}

function showRoomsCards() {
    let currentDeviceWidth = window.innerWidth;
    if (currentDeviceWidth < 768) {
        for (let i = 0; i < allRoomsCards.length; i++) {
            if ((allRoomsCards.length - i) > 6) {
                let hiddenRoomsItem = allRoomsCards[allRoomsCards.length - (i + 1)].classList.add('hidden-rooms');
            }
        }
        if (allRoomsCards.length > 5) {
            showLessRoomsButton.style.setProperty('display', 'none', 'important');
        } else {
            showLessRoomsButton.style.setProperty('display', 'none', 'important');
            showMoreRoomsButton.style.setProperty('display', 'none', 'important');
        }
    } else {
        for (let i = 0; i < allRoomsCards.length; i++) {
            let hiddenRoomsItem = allRoomsCards[i];
            if (hiddenRoomsItem.classList.contains('hidden-rooms')) {
                hiddenRoomsItem.classList.remove('hidden-rooms');
            }
        }
    }
}

function showMoreRooms() {
    let allHiddenRooms = document.querySelectorAll('.hidden-rooms');
    if (allHiddenRooms.length != 0) {
        if (allHiddenRooms.length > 3) {
            for (let i = 0; i < 3; i++) {
                let oneHiddenRoomsItem = allHiddenRooms[i].classList.remove('hidden-rooms');
            }
        } else {
            allHiddenRooms.forEach(item => {
                item.classList.remove('hidden-rooms');
            });
            showMoreRoomsButton.style.setProperty('display', 'none', 'important');
            showLessRoomsButton.style.setProperty('display', 'flex', 'important');
        }
    }
    event.preventDefault();
}

function showLessRooms() {
    for (let i = 0; i < allRoomsCards.length; i++) {
        if ((allRoomsCards.length - i) > 6) {
            let hiddenRoomsItem = allRoomsCards[allRoomsCards.length - (i + 1)].classList.add('hidden-rooms');
        }
    }
    showMoreRoomsButton.style.setProperty('display', 'flex', 'important');
    showLessRoomsButton.style.setProperty('display', 'none', 'important');
    event.preventDefault();
}