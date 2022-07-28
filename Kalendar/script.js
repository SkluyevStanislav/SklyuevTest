// Всплывающее окно быстрого добавления
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('fast-popup-clouse');
const popUp = document.getElementById('fast__popup');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

// Главное всплывающее окно добавления

const openPopUp1 = document.querySelector('.main__table');
const closePopUp1 = document.getElementById('fast-popup-clouse-1');
const popUp1 = document.getElementById('key-popup');

openPopUp1.addEventListener('click', function(e){
    e.preventDefault();
    popUp1.classList.add('active');
})

closePopUp1.addEventListener('click', () => {
    popUp1.classList.remove('active');
})