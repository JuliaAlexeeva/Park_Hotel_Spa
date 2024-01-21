// DropDown blocks
const dropDownBlocksHeader = document.querySelectorAll('.drop-down__block-nav');

document.addEventListener('click', function() {
    if (!event.target.closest('.drop-down__block-nav')) {
        dropDownBlocksHeader.forEach(button => {
            button.classList.remove('active');
        });
    }
});

dropDownBlocksHeader.forEach(button => {
    button.addEventListener('click', function(e) {
        button.classList.toggle('active');
    });
});