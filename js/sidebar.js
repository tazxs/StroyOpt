const BtnMenu = document.querySelector('.sidebar__mobile-menu');
const BtnCross = document.querySelector('.cross')
const Header = document.querySelector('.header');
const HeaderMobile = document.querySelector('.header__adaptive');
const Footer = document.querySelector('.footer');
const Main = document.querySelector('.main');
const Path = document.querySelector('.path');
const Title = document.querySelector('.title');
const SideBarPC = document.querySelector('.sidebar__content');
const SideBarMobile = document.querySelector('.sidebar__content_mobile');

BtnMenu.addEventListener('click', function() {
    HeaderMobile.style.display = 'none';
    Header.classList.add('none');
    Footer.classList.add('none');
    Main.classList.add('none');
    Path.classList.add('none');
    Title.classList.add('none');
    SideBarPC.classList.add('none');
    SideBarMobile.classList.remove('none');
});

BtnCross.addEventListener('click', function() {
    HeaderMobile.style.display = 'block';
    Header.classList.remove('none');
    Footer.classList.remove('none');
    Main.classList.remove('none');
    Path.classList.remove('none');
    Title.classList.remove('none');
    SideBarPC.classList.remove('none');
    SideBarMobile.classList.add('none');
});