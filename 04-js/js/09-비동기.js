// // new Promise (함수, 몇초후에 실행할지)

// const a = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('첫번째 비동기');
//             resolve();
//         }, 1000);
//     });
// };

// const b = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('두번째 비동기');
//             resolve(); // 성공 시 호출
//         }, 1000);
//     });
// };

// const c = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('세번째 비동기');
//             resolve(); // 성공 시 호출
//         }, 1000);
//     });
// };

// const d = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('네번째 비동기');
//             resolve(); // 성공 시 호출
//         }, 1000);
//     });
// };

// Promise.all([a(), b(), c(), d()]).then(() => {
//     console.log('모두 완료');
// });

// a()
//     .then(b)
//     .then(c)
//     .then(d)
//     .then(() => {
//         console.log('all complete');
//     });
// a().then(() => {
//     console.log('a함수 완료');
//     b().then(() => {
//         console.log('b함수 완료');
//         c().then(() => {
//             console.log('c함수 완료');
//             d().then(() => {
//                 console.log('d함수 완료');
//             });
//         });
//     });
// });

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

getUser(1)
    .then((data) => {
        console.log(data.title);
        return getUser(2);
    })
    .then((data) => {
        console.log(data.title);
        return getUser(3);
    })
    .then((data) => {
        console.log(data.title);
    });
