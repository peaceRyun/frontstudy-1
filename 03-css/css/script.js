gsap.registerPlugin(ScrollTrigger);
gsap.to('.box2', {
    scrollTrigger: {
        trigger: '.box2',
        // toggleActions: "none none restart reverse"
    },
    x: 400,
    duration: 2,
});

ScrollTrigger.create({
    onEnter: ONENTER,
    onLeave: ONLEAVE,
    onEnterBack: ONENTERBACK,
    onLeaveBack: ONLEAVEBACK,
});

BODY = document.querySelector('body');
function ONENTER() {
    $('.fix').text('onEnter');
}
function ONLEAVE() {
    $('.fix').text('onLeave');
}
function ONENTERBACK() {
    $('.fix').text('onEnterBack');
}
function ONLEAVEBACK() {
    $('.fix').text('onLeaveBack');
}
