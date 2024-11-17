// import ready from 'Utils/documentReady.js';
import Swiper from 'Utils/swiper-bundle.js';
// import gsap from 'utils/gsap.min.js'
// ready(function(){
require('./utils/gsap.min.js');
require('./utils/ScrollToPlugin.min.js');
require('./utils/ScrollTrigger.min.js');
// });



let sideMenuLink = document.querySelectorAll(".js-anchor-link");

    sideMenuLink.forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            document.querySelector(".section-counter__item--active").classList.remove("section-counter__item--active");
            this.classList.add("section-counter__item--active");
        };
    });


    let anchorLink = document.querySelectorAll('[id*="anchor"]');
    let counter = document.querySelector('.section-counter');

    const createObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                document.querySelector(".section-counter__item--active").classList.remove("section-counter__item--active");
                counter.querySelector(`a[href*="${entry.target.id}"]`).classList.add("section-counter__item--active");

              }
            });
          },
          {
            threshold: 0.2,
          }
        );

        const sections = document.querySelectorAll('[id*="anchor"]');
        sections.forEach((section) => observer.observe(section));
    };

    createObserver();



    // // новый обсервер

    // const sections = document.querySelectorAll('[id*="anchor"]');
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             console.log(entry.isIntersecting, entry.target.id);
    //         }
    //     });
    // }, {
    //     threshold: 0.2,
    // });
    // sections.forEach((section) => observer.observe(section));









const hero = gsap.timeline();
hero.to('.hero__image--1', {opacity: 1, x: '0', duration: 0.5, delay: 0.5,})
hero.to('.hero__image--2', {opacity: 1, x: '0', duration: 0.4}, "-=0.2")



ScrollTrigger.saveStyles(".second, .third, .fourth, .wallpaper__img, .picture--card-blue, .picture--card-green, .picture--card-red");
ScrollTrigger.matchMedia({
	"(min-width: 768px)": function() {

        //section.functional
        gsap.from(".second", {x: '100%',
        scrollTrigger: {
            trigger: ".functional__box--second",
            start: 'top 45%',
            end: 'bottom 20%',
            scrub: true,
            }
        });

        gsap.from(".third", {x: '100%',
            scrollTrigger: {
                trigger: ".functional__box--third",
                start: 'top 45%',
                end: 'bottom 20%',
                scrub: true,
            }
        });

        gsap.from(".fourth", {x: '100%',
            scrollTrigger: {
                trigger: ".functional__box--fourth",
                start: 'top 45%',
                end: 'bottom 20%',
                scrub: true,
            }
        });

        //section.wallpaper
        gsap.from(".wallpaper__img", {opacity: 0, x: '100%',
            scrollTrigger: {
                trigger: ".wallpaper__picture",
                start: 'top 85%',
                end: 'bottom 90%',
                scrub: true,
            }
        });

    },
    "(min-width: 1200px)": function() {
        //section.features
        gsap.from(".picture--card-blue", {opacity: 0, x: '100%',
            scrollTrigger: {
                trigger: ".features",
                start: 'top 85%',
                end: 'bottom 99%',
                scrub: true,
            }
        });

        gsap.from(".picture--card-green", {opacity: 0, x: '330%',
            scrollTrigger: {
                trigger: ".features",
                start: 'top 95%',
                end: 'bottom 80%',
                scrub: true,
            }
        });

        gsap.from(".picture--card-red", {opacity: 0, x: '150%',
            scrollTrigger: {
                trigger: ".features",
                start: 'top 75%',
                end: 'bottom 80%',
                scrub: true,
            }
        });

    }
});



const swiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
