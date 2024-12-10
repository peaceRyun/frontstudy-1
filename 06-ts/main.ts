//typescript

let hello: string = 'Hello World';

hello = '111';

console.log(hello);

// 구문

// 변수명: 타입 = 값;
const str: string = 'hello';
const num: number = 10;
const bool: boolean = true;
const arr: number[] = [1, 2, 3];
const obj: { name: string; age: number } = { name: '김겨울', age: 30 };

// 함수
// function 함수이름(매개변수: 타입): 반환타입 {반환코드}
// hello 함수 만들고 name 매개변수를 받아서 안녕! 겨울 반환
function hello2(name: string): void {
    console.log(`name: ${name}`);
}

hello2('겨울');

function hello3(name: string): string {
    return name;
}

console.log(hello3('겨울'));

const hello4 = function (age: number): number {
    return age;
};
console.log(hello4(20));

const hello5 = (name: string): string => {
    return `안녕, ${name}!`;
};

console.log(hello5('겨울아'));

interface Person {
    name: string;
    age: number;
}

const user1: Person = { name: '김겨울', age: 30 };
const user2: Person = { name: '김여름', age: 20 };

//객체 타입
const a: { name: string; age: number } = { name: 'kim', age: 20 };
const b: { name: string; age: number } = { name: 'jeong', age: 30 };

// interface
interface Ab {
    name: string;
    age: number;
}

const aa: Ab = { name: 'kim', age: 20 };
const bb: Ab = { name: 'jeong', age: 30 };

// 배열 타입
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['가', '나', '다'];
const arr3: any[] = [1, '가', true];

// 객체 배열 타입
interface UserProp {
    name: string;
    age: number;
}
const user: UserProp[] = [
    { name: '김가을', age: 3 },
    { name: '김겨을', age: 2 },
];

// 객체 내부 객체 타입
interface Address {
    city: string;
    dong: string;
}

interface User3 {
    name: string;
    age?: number;
    address: Address;
}

const user3: User3 = {
    name: '김봄',
    address: {
        city: 'seoul',
        dong: 'gangnam',
    },
};

//일반 함수
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));

//화살표 함수 타입
const sum2: (a: number, b: number) => number = (a, b) => {
    return a + b;
};
console.log(sum2(1, 2));
