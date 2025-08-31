const add_button = document.querySelector('.add-button');
const add_container = document.querySelector('.add-container');
const add_close = document.querySelector('.add-close');


add_button.addEventListener('click', () => {
    add_container.classList.add('show');
});

add_close.addEventListener('click', () => {
    add_container.classList.remove('show');
});