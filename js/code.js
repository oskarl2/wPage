'use strict';
let submit = document.querySelector('#a'),
    modal = document.querySelector('.modal');

window.addEventListener('load', modalWin);

function modalWin() {
    setTimeout(showModal, 2000);
}

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
    textInnerModal();
}

function closeModal(e) {
        if (e.keyCode === 27) {
            modal.style.transition = '';
            modal.style.opacity = '0';
            document.removeEventListener('mousedown', noScroll);
            document.removeEventListener('wheel', noScroll);
            document.removeEventListener('keydown', noScroll);
            document.removeEventListener('keyup', closeModal);
            modal.classList.add('hidden');
        }
}

function textInnerModal() {
    let modalContent = document.querySelector('.modal-content');
    let p = document.createElement("p");
    p.style.fontSize = '1vw';
    p.innerHTML = 'или кнопку "Назад" для скрытия модального окна';
    modalContent.appendChild(p);
    let newP = p.cloneNode(true);
    newP.innerHTML = 'Нажми ESC на клавиатуре';
    modalContent.insertBefore(newP, modalContent.children[1]);


}