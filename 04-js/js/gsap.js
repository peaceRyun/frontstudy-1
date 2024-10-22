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

// header
// 윈도우가 스크롤 됐을 떄
// window.addEventListener(이벤트, 함수);
window.addEventListener(
    'scroll',
    _.throttle(function () {
        const scrolled = window.scrollY;
        console.log(`스크롤 값 : ${scrolled}`);
        // 만약 y축 스크롤 값(scrolled)이 80보다 크다면
        if (scrolled > 80) {
            // 참일 때 실행할 코드
            // header를 없애고
            gsap.to('#header', { yPercent: -100, duration: 0.3 });
            gsap.to('#to-top', { x: -70, duration: 0.3 });
        } else {
            //  거짓일 때 실행할 코드
            // header를 나타나게 한다.
            gsap.to('#header', { yPercent: 0, duration: 0.3 });
            gsap.to('#to-top', { x: 0, duration: 0.3 });
        }
    })
);
