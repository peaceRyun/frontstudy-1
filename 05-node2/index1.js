// 콜백 함수
// 특정 이벤트가 발생하고, 그에 대한 결과가 나올 때까지 기다리지 않고 다음 코드를 실행한다.
// setTimeout(() => {
//     console.log('첫번째 실행');
//     setTimeout(() => {
//         console.log('두번째 실행');
//     }, 2000);
// }, 3000);

//사용자 정의 함수의 동기 처리
// function faker(callback) {
//     callback();
// }

// console.log('첫번째 실행');
// faker(() => {
//     console.log('두번째 실행');
// });
// console.log('세번째 실행');

// //비동기 함수의 동기 처리
// console.log('첫번째 실행');
// setTimeout(() => {
//     console.log('세번째 실행');
// }, 0);
// console.log('두번째 실행');

//콜백 지옥
// setTimeout(() => {
//     console.log('첫번째 실행' + new Date());
//     setTimeout(() => {
//         console.log('두번째 실행' + new Date());
//         setTimeout(() => {
//             console.log('세번째 실행' + new Date());
//         }, 1000);
//     }, 1000);
// }, 1000);

// 이러한 콜백 지옥을 해결하기 위해 Promise나 async/await를 사용한다.

// Promise
// const promise = new Promise((resolve, reject) => {});
const promise = new Promise((resolve, reject) => {
    console.log('데이터를 불러오는 중...');
    setTimeout(() => {
        resolve('커피 완료');
    }, 3000);
    // resolve('성공');
    // reject('실패');
});

// 주문 결과 처리(성공은 then쪽으로 들어온다. result가 바로 '커피 완료'를 받는다.)
promise.then((result) => {
    console.log(result);
});
