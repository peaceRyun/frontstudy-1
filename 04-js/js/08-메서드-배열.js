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

const animals = ['Cat', 'Dog', 'Fish'];
// const animals2 = {animals.map((item,index) => ())}

console.log(animals.includes('cat'));
console.log(animals.includes('코뿔소'));

console.log(animals.join(' 그리고 '));

users.map(function (item) {
    console.log(item);
});

const newUsers = users.map((item) => {
    return { ...item, email: null };
});

console.log(newUsers);
console.log(arr.pop());

console.log(arr.push(4, 5, 6));
console.log(arr);

// 총 나이 합계 (reduce)
const totalAge = users.reduce(function (total, currentValue) {
    return total + currentValue.age;
}, 0);

console.log(totalAge);

// 평균 나이 구하기
const avgAge = totalAge / users.length;
console.log(avgAge.toFixed());

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(0, 3));
