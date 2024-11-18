// 배열 메서드
const arr = [1, 2, 3];

console.log(arr.length); // 3

console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

console.log(arr.at(-1)); // 3

// concat보다는 전개연산자를 이용한 방법을 더 많이 쓴다.

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.filter((item) => item > 1)); // [2, 3, 4, 5]
console.log(arr1.filter((item) => item < 0)); // []
// console.log(
//     arr1.filter((item) => {
//          item > 1;
//     })
// ); // [2, 3, 4, 5]

const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

// 배열이름.filter((item) => {return 조건})
// const children = users.filter((item) => {
//     return item.age <= 7;
// });
const children = users.filter((item) => item.age <= 7);

console.log(children);

// 고길동 찾기
// 배열이름.find((item) => {return 조건})

// item = {name: "고길동", age: 30}
const gogildong = users.find((item) => {
    return item.name === '고길동';
});
console.log(gogildong.name);

// 배열이름.forEach((item)=>{실행문})
const list = ['list1', 'list2', 'list3'];
list.forEach((item) => {
    console.log(item);
});
