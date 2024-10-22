gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro',
        pin: true, // pin the trigger element while active
        start: 'top 0', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
    },
});

// gsap.to("누구를", { 어떻게 });
// gsap.to('.green', { left: '50%', transform: 'translateX(-50%)' });
// gsap.to('.green', { y: 100, delay: 1 });

tl.fromTo('.yellow', { x: 300, opacity: 0 }, { x: 0, duration: 1, opacity: 1 })
    .fromTo('.orange', { x: -300, opacity: 0 }, { x: 0, duration: 1, opacity: 1 })
    .fromTo('.green', { x: 200, y: -100, opacity: 0 }, { x: 0, duration: 1, opacity: 1 })
    .to('.green', { y: 0, duration: 1 })
    .to('.box-cont', { rotation: 90, duration: 1 })
    .to('.green, .yellow, .orange', { borderRadius: '50%', duration: 1 })
    .from('.intro .txt', { scale: 0, opacity: 0, duration: 1 });

gsap.to('.grow', {
    scrollTrigger: '.grow',
    width: '70%',
    height: '70%',
    fontSize: '3rem',
    duration: 1,
    scrollTrigger: {
        trigger: '.sec-grow',
        pin: true, // pin the trigger element while active
        start: 'top 0', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true,
    },
    delay: 1,
});
