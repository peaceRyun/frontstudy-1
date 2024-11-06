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
console.log(`${user1.name}는 ${user1.age}살입니다.`);

const userA = {
    name: '겨울',
    age: 2,
};

console.log(userA);
console.log(userA.name, userA.age); // 겨울 2
// 겨울이는 2살입니다.
console.log(`${userA.name}이는 ${userA.age}살입니다.`);

const userB = {
    name: 'odada',
    age: 100,
    parent: userA,
};

console.log(userB);
console.log(userB.parent.name); //겨울 (점표기법)
console.log(userB['parent']['name']); //겨울 (대괄호표기법 - 많이 사용은 안하지만, 사용하는 사람이 더러 있다)

const user = [userA, userB];
console.log(user);
console.log(user[0].name); //겨울 (점표기법)
console.log(user[0]['name']); //겨울 (대괄호표기법)

// 6. function (함수)

// 함수 선언
function add(a, b) {
    console.log(a + b);
}

add(1, 3); // 함수 실행(call)

// 함수 표현식(익명 함수)
const add2 = function (a, b) {
    console.log(a + b);
};
// 함수실행
add2(1, 2);

// 화살표 함수 (es6+)
const add3 = (a, b) => {
    console.log(a + b);
};

add3(1, 2);
