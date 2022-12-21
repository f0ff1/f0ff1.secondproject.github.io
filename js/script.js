

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        lazyLoad: "progressive",

    });

    
    
    $('.quotes-small-slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        lazyLoad: "progressive",
        asNavFor: '.quotes-big-slider'
    });
    

    $('.quotes-big-slider').slick({
        asNavFor: '.quotes-small-slider',
        speed: 1500,
        autoplaySpeed: 4000,
        // fade: true,
        appendArrows: '.big-slider-arrows'
    });
    AOS.init();
    
});


const animateCSS = (node, animation, prefix = 'animate__') =>
  // We create a Promise and return it
    new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
    event.stopPropagation();
    node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});


const AllServicesItems = document.querySelectorAll('.our-services-item');

AllServicesItems.forEach((ServiceItem) => {
    const overlay = ServiceItem.querySelector('.services-overlay');
    const knowMoreBtn = ServiceItem.querySelector('.know-more-btn');
    const closeBtn = overlay.querySelector('.close-btn');

    function onKnowMoreBtnClick() {
        overlay.style.visibility = 'visible';
        overlay.style.setProperty('--animate-duration', '0.7s');
        animateCSS(overlay, 'fadeIn');
        
    }

    function onCloseBtnClick() {
        overlay.style.setProperty('animation-duration', '.4s');
        animateCSS(overlay, 'fadeOut').then(() => {
            overlay.style.visibility = 'hidden';
        });   
        
    }

    knowMoreBtn.addEventListener('click', onKnowMoreBtnClick);
    closeBtn.addEventListener('click', onCloseBtnClick);
});

