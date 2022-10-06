/** SHOW MENU */
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/** MENU SHOW */
/** Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/** MENU HIDDEN */
/** Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/** REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/** CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)
/** HOME SWIPER */
const homeSwiper = new Swiper('.home-swiper', {
    autoplay: {
        delay: 5000
    }, spaceBetween: 16, centeredSlides: true, slidesPerView: 'auto', loop: 'true'
});

/** SERVICES TAB */
const tabs = document.querySelectorAll('[data-target]'), tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('services__active')
        })
        target.classList.add('services__active')
        tabs.forEach(tab => {
            tab.classList.remove('services__active')
        })
        tab.classList.add('services__active')
    })
})

/** SCROLL SECTIONS ACTIVE LINK */
// get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]')

//add an event listener to listen for scroll
window.addEventListener('scroll', navHighlighter)

function navHighlighter() {
    //get current scroll position
    let scrollY = window.pageYOffset;
    // loop through sections to get height, top & ID
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 10;
        let sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
