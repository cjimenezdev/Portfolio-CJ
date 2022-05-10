const preloader = document.querySelector('.preloader');
const main = document.querySelector('#wrapper');
const cont = document.querySelector('#page-content');
const sect = document.querySelector('#home');
const footer = document.querySelector('.footer');

function init() {
    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.display = 'none';
        main.style.display = 'flex';
        cont.style.display = 'flex';
        sect.classList.toggle("show");
        footer.style.display = 'flex';
        setTimeout(() => (cont.style.opacity = 1, main.style.opacity = 1, sect.style.opacity = 1, footer.style.opacity = 1), 50);
    }, 2000);
}
init();

$(".sidebar__toggle").click(function() {
    $(".sidebar__menu").toggleClass("show").siblings().removeClass("show");
});