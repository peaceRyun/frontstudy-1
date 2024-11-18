// 숫자 메서드
const num = 3.1415926535;

console.log(num.toFixed(2)); // 3.14
console.log(typeof num.toFixed(2)); // string

const num2 = 100000000;

console.log(num2.toLocaleString()); // 100,000,000
console.log(num2.toLocaleString() + '원'); // 100,000,000원

console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-1)); // true
console.log(Number.isInteger(3.14)); // false

console.log(Number.isNaN(1)); // false
console.log(Number.isNaN(NaN)); // true

console.log(Math.abs(-10)); // 10
console.log(Math.abs('-10')); // 10

// 랜덤 메서드
console.log(Math.random()); // 0이상 1 미만의 난수

// 특정 범위의 랜덤 정수 반환 함수
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // 1부터 9까지의 수 중에 랜덤하게 반환된다.
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(1, 100));

console.log(Math.round(10.49)); // 10
