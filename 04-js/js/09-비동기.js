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
            .then((res) => {
                // 실패시 처리
                if (!res.ok) {
                    throw new Error(`${userId}번 유저를 찾을 수 없습니다.`);
                }
                // 성공시 처리
                return res.json();
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
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
    })
    .catch((error) => {
        console.log(error);
    })
    // 무조건 실행
    .finally(() => {
        console.log('모두 완료');
    });

// async await로 수정해보자
const printUser = async () => {
    try {
        const user1 = await getUser(1);
        console.log(user1.title);

        const user2 = await getUser(2);
        console.log(user2.title);

        const user3 = await getUser(3);
        console.log(user3.title);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('모두 완료');
    }
};

printUser();

// aa, bb

const aa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('aa');
            resolve();
        }, 1000);
    });
};
const bb = () => {
    console.log('bb');
};

// aa().then(() => {
//     return bb();
// });

const main = async () => {
    await aa();
    bb();
};

// fetch 함수를 사용하여 JSONPlaceholder API를 호출합니다.
// console.log(fetch('https://jsonplaceholder.typicode.com/users'));

// 결과값
fetch('https://jsonplaceholder.typicode.com/users').then((res) => console.log(res.json()));
