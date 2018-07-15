'use strict';
let submit = document.querySelector('#a'),
    modal = document.querySelector('.modal');

submit.style.height = 20 + 'px';

submit.addEventListener('click', showModal);

function noScroll(e) {
    if (e.keyCode === 40 || e.keyCode === 38 || e.button === 1 || e.type === 'wheel' ) {
        e.preventDefault();
    }
}

function showModal() {
    modal.style.transition = '2s';
    modal.style.opacity = '1';
    document.addEventListener('mousedown', noScroll);
    document.addEventListener('wheel', noScroll);
    document.addEventListener('keydown', noScroll);
    document.addEventListener('keyup', closeModal);
    modal.classList.remove('hidden');
}

function closeModal(e) {
        if (e.keyCode === 27) {
            modal.style.transition = 'none';
            document.removeEventListener('mousedown', noScroll);
            document.removeEventListener('wheel', noScroll);
            document.removeEventListener('keydown', noScroll);
            document.removeEventListener('keyup', closeModal);
            modal.classList.add('hidden');
        }
}

