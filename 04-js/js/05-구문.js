// 구조 분해 할당(개별 포장)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식

const arr = [1, 2, 3];
// console.log(arr[0], arr[1], arr[2]); // 1 2 3
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [, b, c] = arr;

console.log(b, c); // 2 3

// 재할당
let x = 0;
let y = 0;
const arr1 = [1, 2];

[x, y] = arr1;
console.log(x, y); // 1 2

// 나머지 할당
const arr2 = [1, 2, 3, 4, 5];
const [d, ...rest] = arr2;

console.log(d, rest); // 1 [2, 3, 4, 5]

// 객체 구조 분해
const mini = {
    w: 100,
    // h: 200,
    bg: 'red',
};

// 항상 엄마를 쓰기 어려우니
// console.log(mini.w, mini.h, mini.bg); // 100 200 red

const { w: width, h = 100, bg } = mini; //h의 기본값을 부여했다.
console.log(width, h, bg); // 변수이름을 바꿨기 때문에 w를 써도 에러가 난다.

// 선택적 체이닝
const user = null;
console.log(user?.name); //에러가 발생하는 대신, undefined가 된다.

const user1 = {
    name: 'Mike',
    age: 30,
};
const user2 = {
    name: 'mija',
};
// console.log(user2?.age);
function printAge(user) {
    console.log(user?.age || '나이 정보 없음');
}

printAge(user1); // 30
printAge(user2); // 30

// 조건문
// if문
// if (조건) {
//     // 조건1이 참일 때
// } else if (조간2) {
//     // 조건2가 참일 때
// } else {
//     // 조건이 거짓일 댸 실행
// }

function isPositive(num) {
    console.log(num);
    if (num > 0) {
        console.log('양수입니다.');
    } else if (num < 0) {
        console.log('음수입니다.');
    } else {
        console.log('0입니다');
    }
}

isPositive(5); // 5

// switch 문
// switch (조건) {
//     case 값1:
//         // 값 1일 때 실행
//         break;
//     case 값2:
//         // 값 2일 때 실행
//         break;
//     default:
//         // 이도저도 아니다
//         break;
// }

function header(type) {
    switch (type) {
        case 'type1':
            return '타입1 header 출력';
        case 'type2':
            return '타입2 header 출력';
        default:
            return '타입3 header 출력';
    }
}
console.log(header('type1'));
console.log(header('type2'));

// if 문으로 변경
function header2(type) {
    if (type === 'type1') return '타입1 header 출력';
    if (type === 'type2') return '타입2 header 출력';
    return '타입3 header 출력';
}

console.log(header2('type1'));
console.log(header2('type2'));
console.log(header2('type3'));

// 반복문
// for문
// for(초기값; 조건; 증감) {실행문}

// 콘솔창에 0부터 9까지 출력
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 9부터 0까지 출력
for (let i = 9; i > -1; i--) {
    console.log(i);
}

// 9부터 2단위로 줄어들면서 출력
for (let i = 9; i > -1; i -= 2) {
    console.log(i);
}

// break 조건 추가
for (let i = 9; i > -1; i -= 2) {
    if (i < 4) {
        break;
    }

    console.log(i);
}
// continure 문(하단에 있는 코드를 건너띤다.)
for (let i = 9; i > 0; i--) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(`i : ${i}`);
}

// for of문 (배열)
const animals = ['dog', 'cat', 'turtle'];

for (let animal of animals) {
    console.log(`내가 좋아하는 동물은 ${animal}`);
}

// for in 문
const user3 = {
    name: 'Winter',
    age: 2,
    city: 'Seoul',
};

for (let key in user3) {
    console.log(key); //name, age, city
    console.log(user3[key]); //name, age, city
}

// while문
// while (조건) {실행문}
let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum);

// do while 문

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
