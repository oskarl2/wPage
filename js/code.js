'use strict';
let body = document.querySelector('body'),
    submit = document.querySelector('#a'),
    modal = document.querySelector('.modal');
submit.style.height = 20 + 'px';

submit.addEventListener('click', showModal);
document.addEventListener('keyup', closeModal);

// document.addEventListener('mousewheel', horizontalScroll);
// document.addEventListener('DOMMouseScroll', horizontalScroll);

// function horizontalScroll(e) {
//     e.preventDefault();
// }

function showModal() {
    body.classList.add('no-scroll');
    // modal.addEventListener('mousewheel', horizontalScroll);
    // modal.addEventListener('DOMMouseScroll', horizontalScroll);
    modal.classList.remove('hidden');
}

function closeModal(e) {
        if (e.keyCode === 27) {
            body.classList.remove('no-scroll');
            // document.removeEventListener('mousewheel', horizontalScroll);
            // document.removeEventListener('DOMMouseScroll', horizontalScroll);
            modal.classList.add('hidden');
        }
}

