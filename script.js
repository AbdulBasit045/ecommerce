const navbar = document.getElementById('navbar');
const header = document.getElementById('btn');
const close = document.getElementById('close');

if(btn) {
    btn.addEventListener('click', () => {
        navbar.classList.add('active');
    });
};

if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
};