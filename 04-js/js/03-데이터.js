// 데이터

// 1. string (문자열)

const string1 = 'hello';
const string2 = 'javascript';
const string3 = `${string1} world ${string2}`;
const string4 = 'world ' + string1 + ' ' + string2;

console.log(string3);
console.log(string4);

// 2. number (숫자)
const number1 = 123;
console.log(number1 + 1);
console.log(typeof number1);

// 3. boolean (참, 거짓)
const boolean1 = true;
const booblean2 = false;

if (boolean1) {
    console.log('참');
}

// 4. array (배열)
const array1 = [1, 2, 'dog'];
console.log(array1);
console.log(array1[0], array1[2]);
console.log(array1.length);
console.log(array1[array1.length - 1]);

// 5. object (객체)
const user1 = {
    name: '권윤구',
    age: '29',
};
console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(`${user1.name}는 ${user1.age}살 입니다.`);
