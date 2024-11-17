import ready from 'Utils/documentReady.js';
import getScrollSize from 'Utils/getScrollSize.js';

ready(function(){

    const appHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    };
    window.addEventListener('resize', appHeight);
    appHeight();

    document.querySelector('.menu__toggle').addEventListener('click', function(e){
        e.preventDefault();
        this.classList.toggle('menu__toggle--active');
        if (this.classList.contains('menu__toggle--active')){
            document.body.style.marginRight = getScrollSize() + 'px';
            document.querySelector('.page__body').classList.add('no-scroll');
            document.querySelector('.menu').classList.add('menu--active');
        }
        else {
            document.body.style.marginRight = 0;
            document.querySelector('.page__body').classList.remove('no-scroll');
            document.querySelector('.menu').classList.remove('menu--active');
        }
    });

    let menuLinkItem = document.querySelectorAll('.menu__link')
    menuLinkItem.forEach(element => {
        element.addEventListener("click", function() {
            let menuActive = document.querySelector('.menu--active')
            let bodyNoScroll = document.querySelector('.no-scroll')
            let menuToggle = document.querySelector('.menu__toggle--active')
            if (menuActive) {
                menuActive.classList.remove('menu--active');
                bodyNoScroll.classList.remove('no-scroll');
                menuToggle.classList.remove('menu__toggle--active');
                document.body.style.marginRight = 0;
            }
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            document.body.style.marginRight = 0;
            document.querySelector('.page__body').classList.remove('no-scroll');
            document.querySelector('.menu').classList.remove('menu--active');
            document.querySelector('.menu__toggle').classList.remove('menu__toggle--active');
        }
    });
});
