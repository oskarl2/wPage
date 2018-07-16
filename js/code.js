'use strict';
let modal = document.querySelector('.modal'),
    modalBtn = document.querySelector('#modalBtn'),
    gallery = document.querySelector('.art-photo');

//events
window.addEventListener('load', modalWin);
modalBtn.addEventListener('click', closeModal);

// show modal after page loading
function modalWin() {
    setTimeout(showModal, 2000);
}

//no scroll bar without overflow:hidden;
function noScroll(e) {
    if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 33 ||
        e.keyCode === 34 || e.button === 1 || e.type === 'wheel') {
        e.preventDefault();
    }
}

//show modal window
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

//close modal window
function closeModal(e) {
        if (e.keyCode === 27 || e.type === 'click') {
            modal.style.transition = '';
            modal.style.opacity = '0';
            document.removeEventListener('mousedown', noScroll);
            document.removeEventListener('wheel', noScroll);
            document.removeEventListener('keydown', noScroll);
            document.removeEventListener('keyup', closeModal);
            modal.classList.add('hidden');
        }
}

//creating text in the modal window
function textInnerModal() {
    let modalContent = document.querySelector('.modal-content');
    let p = document.createElement("p");
    p.classList.add('modal-descr');
    p.innerHTML = 'или кнопку "Назад" для скрытия модального окна';
    modalContent.appendChild(p);
    let newP = p.cloneNode(true);
    newP.innerHTML = 'Нажми ESC на клавиатуре';
    modalContent.insertBefore(newP, modalContent.children[1]);
}

//gallery items
let images = ['1.jpg', 'moraine3.jpg', 'gandex.jpg'],
    currentImage = 0;

//change image in 3s
setInterval(loop, 3000);

//image on start
gallery.src = `./img/${images[currentImage]}`;

//change images
function loop() {
   if (currentImage < images.length - 1) {
       currentImage++;
   } else {
       currentImage = 0;
   }
   gallery.src = `./img/${images[currentImage]}`;
}