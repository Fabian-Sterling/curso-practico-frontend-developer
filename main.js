const MenuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

MenuEmail.addEventListener('click' , toggleDesktopMenu);

function toggleDesktopMenu (){
    DesktopMenu.classList.toggle('inactive');
}