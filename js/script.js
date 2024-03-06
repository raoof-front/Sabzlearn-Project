const $ = document
const menuItemsMObile = $.querySelectorAll('.menu__item-mobile')
const wrapperMenuMobile = $.querySelector('.wrapper-menu__mobile')
const closeMenuMobileIcon = $.querySelector('.wrapper-top-menu__mobile-close')
const burgerMenu = $.querySelector('.wrapper__burger-menu')
menuItemsMObile.forEach(item => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('menu__item-mobile--active')){
            menuItemsMObile.forEach(item => {
                item.classList.remove('menu__item-mobile--active')
            })
        }
        
        item.classList.toggle('menu__item-mobile--active')
    })
})

burgerMenu.addEventListener('click', () => {
    wrapperMenuMobile.style.right = 0
    burgerMenu.style.opacity = 0
})

closeMenuMobileIcon.addEventListener('click', () => {
    wrapperMenuMobile.style.right = '-27rem'
    burgerMenu.style.opacity = "1"
})