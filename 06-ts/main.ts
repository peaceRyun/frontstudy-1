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
