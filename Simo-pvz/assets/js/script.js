const main = document.querySelector('main');
const mainClose = main.querySelector('.main__close');
const mainOpen = document.querySelector('.main__open');
mainClose.addEventListener('click', () => {
    main.classList.add('hidden');
    mainOpen.classList.add('active');
});
mainOpen.addEventListener('click', () => {
    main.classList.remove('hidden');
    mainOpen.classList.remove('active');
});