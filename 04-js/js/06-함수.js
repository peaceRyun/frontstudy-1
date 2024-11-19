// 함수
// 1.  함수 선언식
hello(); //호이스팅이 일어나면서 자동으로 밑에 구문을 끌어올려준다.

function hello() {
    console.log('hello');
}

// 2. 함수 표현식
const helloB = function () {
    console.log('helloB');
};

helloB(); //호이스팅이 안된다. 무조건 밑에다가 실행구문을 적어야 한다<div class=""></div>

// return문 : 함수를 호출한 곳으로 값을 반환 및 종료
function h1() {
    return 'hello';
    console.log('world'); //reurn 밑의 코드는 다 실행되지 않는다.
}

console.log(h1());

function h2() {
    return;
}
console.log(h2()); //undefined

function h3() {
    return 1;
    return 2;
}
console.log(h3());

//매개변수
function sum(a = 0, b = 0) {
    return a + b;
}
console.log(sum(1, 2));
console.log(sum(1)); // 1 + undefined = NaN(고객은 이걸 이해 못하기 때문에 "하나를 덜 입력하셨습니다"와 같은 메세지를 주자.)아니면, 기본값을 할당하자.

// 함수의 구조 분해
// 객체 분해
const user = {
    name: 'winter',
    age: 24,
};
function getName({ name, age, email = '이메일이 없습니다.' }) {
    // const { name, age } = props; //구조 분해 할당

    console.log(name);
    console.log(`윈터는 ${age}살입니다.`);
    console.log(email);
}

getName(user);

// 배열 분해
const animals = ['dog', '캣', 'turtle'];

function getSecond([, b = '없음']) {
    // const arr = ['dog', 'cat', 'turtle'];
    // const [, b] = arr; //만약 ,가 없다면 순서대로

    console.log(b);
}

getSecond(animals);

// rest 매개변수
function print(...num) {
    console.log(num);
}
print(1, 2, 3, 4, 5);

// 화살표 함수
function helloA() {}
helloA();

const hello3 = function () {};
hello3();

const hello4 = () => {
    console.log('hello4');
};
hello4();

// 화살표 함수의 축약형
const a = () => {};
const b = (x) => {}; //prettier가 붙여주기는 하지만, x 의 괄호는 없어도 된다.
const c = (x, y) => {};
const d = (x, y) => x + y; //중괄호와 return을 생략 가능함
const e = (x, y) => {
    console.log('hello');
    return x + y;
}; //앞쪽에 무언가 있다면(console.log~) 생략 못함
const f = () => ({
    name: '윈터',
}); //객체의 중괄호인지, 함수의 중괄호인지 헷갈리기 때문에, 소괄호로 한번 묶어준다.
const g = () => [1, 2, 3];

const ani = { cat: 'cat', fish: 'fish', dog: 'dog' };
const o = 1;

console.log(0, ani);

// 3초 후에 콘솔창

const setTime = setTimeout(() => {
    console.log('3초 됐다! 해피 크리스마스~~');
}, 3000);

const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', () => {
    console.log('취소되었습니다.');
    clearTimeout(setTime);
});

// setInterval
const setInt = setInterval(() => {
    console.log('축하축하');
}, 3000);

const stopBtn2 = document.querySelector('.stop2');
stopBtn2.addEventListener('click', () => {
    console.log('"축하축하"가 취소되었습니다.');
    clearInterval(setInt);
});

// 콜백 함수
// 원하는 시점에 호출할 수 있도록 하는 함수

const a11 = (cb) => {
    cb();
    console.log('a');
};
const b11 = () => {
    console.log('b');
};

a11(b11);
b11();

// this

// 일반 함수 this
// 일반 함수는 호출 위치에서 this가 결정된다.
// 화살표 함수는 자신이 선언된 함수 범위에서 this가 결정된다.

function userss() {
    this.firstName = '윈터';
    this.lastName = '이';

    return {
        getFullName: () => {
            return `${this.lastName}${this.firstName}`;
        },
    };
}

const user2 = userss();
console.log(user2.getFullName());

const obj1 = {
    firstName: '윈터',
    lastName: '김',

    // 메서드
    // fullName: function () {
    //     return `${this.lastName}${this.firstName}`;
    // },
    fullName() {
        return `${this.lastName}${this.firstName}`;
    },
};

console.log(obj1.fullName());
