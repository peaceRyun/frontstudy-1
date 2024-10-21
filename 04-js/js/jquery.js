// 제일 바깥에 function함수(=준비 event)는 반복해서 쓰지 말자.
// btn을 클릭했을 때
$('.btn1')
    .on('mouseenter', function () {
        // .box를 보이기
        $('.box').stop().slideDown(1000);
    })
    .on('mouseleave', function () {
        // .box를 없애기
        $('.box').stop().slideUp(1000);
    });

$('.btn2')
    .mouseenter(function () {
        $('.box2').hide();
    })
    .mouseleave(function () {
        $('.box2').show();
    });

// animate
// .btn3을 클릭했을 때
$('.btn3').click(function () {
    $('.box3').animate({ left: '300px', top: 500, width: '+=150px' }, 1000);
});
// .box3가 1초 동안 왼쪽으로 100px 이동

// loading 되면 bg-color를 lightblue로 변경
$('body').css({ 'background-color': 'lightblue', 'font-size': '200%' });
