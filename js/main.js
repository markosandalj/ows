
window.addEventListener('DOMContentLoaded', () => {
    const mobileNavOpen = document.querySelector('.header__mobile-menu-open')
    const mobileNavClose = document.querySelector('.header__mobile-menu-close')
    const mainNav = document.querySelector('.main-nav')
    
    
    mobileNavOpen.addEventListener('click', () => {
        mobileNavOpen.hidden = true;
        mobileNavClose.hidden = false;
        mainNav.classList.add('active');
    })
    
    mobileNavClose.addEventListener('click', () => {
        mobileNavClose.hidden = true;
        mobileNavOpen.hidden = false;
        mainNav.classList.remove('active');
    })
    
    const mainNavItemsWithSubmenu = document.querySelectorAll('.main-nav__item--with-submenu')
    
    console.log(mainNavItemsWithSubmenu)
    mainNavItemsWithSubmenu.forEach(el => {
        el.addEventListener('click', () => {
            const submenu = el.querySelector('.submenu')
            submenu.classList.toggle('active')
        })
    });
})