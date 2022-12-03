import '../css/main.sass';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

let animationWrapper = document.querySelector('#animated-content'),
    title = document.querySelector('#title'),
    listItems = gsap.utils.toArray('ul li'),
    decoItems = gsap.utils.toArray('#decorative div');

if(window.matchMedia("(min-width: 768px)").matches) {
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: animationWrapper,
            pin: true,
            start: 'top top',
            end: '+=6000 0',
            scrub: 1,
            // markers: true,
            pin: animationWrapper
        }
    });
    
    tl.from('#h1-bg', {
        borderRadius: '50%',
        duration: 1
    });
    
    tl.from(title, {
        left: (animationWrapper.clientWidth / 2) - (title.clientWidth / 2),
        top: (animationWrapper.clientHeight / 2) - (title.clientHeight / 1.5),
        duration: 1.5
    });
    
    tl.from('#h1-bg', {
        transform: 'rotate(90deg)',
        duration: 1.5
    },
    "-=1.7");

    listItems.forEach(item => {
        tl.from(item, {
            opacity: '0',
            left: animationWrapper.clientWidth / 2,
            duration: 1.2
        },
        "-=0.5")
    });
    
    tl.from(animationWrapper, {
        "background-position-y": "100vh",
        "background-repeat": "no-repeat",
        duration: 1.5
    });

    decoItems.forEach(item => {
        tl.from(item, {
            opacity: '0',
            bottom: "-30vh",
            top: 'inherit',
            duration: .7
        })
    });
    
    tl.to(animationWrapper, {
        animationName: "bg-arrows-desktop",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        duration: 0
    });
    
    /** Borders */
    tl.from('#borders #right', {
        height: 0,
        duration: 2.5
    },
    "-=9");
    tl.from('#borders #bottom', {
        width: 0,
        duration: 2.5
    },
    "-=6.5");
    tl.from('#borders #left', {
        height: 0,
        duration: 2.5
    },
    "-=4");
    tl.from('#borders #top', {
        width: 0,
        duration: 2.5
    },
    "-=1.5");
    /** End Borders */

}