let menu = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => { 
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fas-times'); 
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0; 

function next() {
    console.log('Current index before removing active class:', index);
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    console.log('New index after increment:', index);
    slides[index].classList.add('active');
}

function prev() {
    console.log('Current index before removing active class:', index);
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    console.log('New index after decrement:', index);
    slides[index].classList.add('active');
}
