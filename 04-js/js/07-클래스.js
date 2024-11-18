// // 클래스 함수
// // 리터럴 방식
// // const animals = ['dog', 'cat', 'fish'];

// // 자바스크립트에서는 배열도 객체이다?? 출처:chatgpt4
// // 생성자 함수
// const animals = new Array('dog', 'cat', 'fish');

// console.log(animals);
// console.log(animals.length);
// console.log(animals[0]);
// console.log(animals.includes('dog'));

// // 우리 커피숍에서 파는 메뉴 출력 자동화

// // 생성자 함수
// // new Array(1, 2, 3)
// const starbucks = new Array('아메리카노', '카페라떼', '카푸치노');

// // method 만드는 방법
// // 생성자함수.prototype.메소드명 = function(){}
// Array.prototype.menu = function () {
//     console.log(this);
// };

// starbucks.menu();

// const mega = ['메가리카노', '메가라떼', '메가쑥쑥'];
// mega.menu();

// // 메소드 재활용
// const ame = {
//     name: '아메리카노',
//     price: 3500,
//     orderMenu: function () {
//         console.log(`${this.name}는 ${this.price}원 입니다.`);
//     },
// };

// const latte = {
//     name: '라떼',
//     price: 4000,
//     // orderMenu() {
//     //     console.log(`${this.name}는 ${this.price}원 입니다.`);
//     // },
// };

// ame.orderMenu();
// ame.orderMenu.call(latte);
// // latte.orderMenu();

// // 생성자 함수를 활용한 메뉴판 만들기
// function OrderMenu(name, price) {
//     this.name = name;
//     this.price = price;
// }

// OrderMenu.prototype.printMenu = function () {
//     console.log(`${this.name}는 ${this.price}원 입니다`);
// };

// const ame2 = new OrderMenu('아메리카노', 3500);
// const latte2 = new OrderMenu('라떼', 5500);

// ame2.printMenu();
// latte2.printMenu();

// console.log(ame2);
// console.log(latte2);

// // 클래스 문법
// class OrderCoffee {
//     // 생성자 함수
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     // 메서드
//     printMenu() {
//         console.log(`오늘의 커피는 ${this.name}입니다. 가격은 ${this.price}입니다`);
//     }

//     making() {
//         console.log(`${this.name}을 만들고 있습니다.`);
//     }
//     made() {
//         console.log(`${this.name}가 완성되었습니다.`);
//     }
// }

// const ame3 = new OrderCoffee('americano', 3500);
// const latte3 = new OrderCoffee('latte', 4000);

// ame3.printMenu();
// latte3.printMenu();
// ame3.making();
// latte3.making();
// ame3.made();
// latte3.made();

// -----------------------------------------------------------------------------------
// 다시해보자

// 클래스 함수 (파스칼 케이스, 매개변수 없음)
class OrderCoffee {
    // 생성자 함수(객체를 생성)(문법이다. 암기하자)
    constructor(name, price) {
        this.name = name; //아빠 만들기?
        this.price = price; //엄마 만들기?
    }

    // 메소드
    order() {
        console.log(`${this.name}은 ${this.price}원 입니다.`);
    }

    // 메소드2
    making() {
        console.log(`${this.name}를 만들고 있습니다.`);
    }

    //
    made() {
        console.log(`${this.name}가 완성되었습니다.`);
    }
}

const ame4 = new OrderCoffee('아메리카노', 3500);

// new OrderCoffee('아메리카노', 3500).order();
// new OrderCoffee('아메리카노', 3500).making();
// new OrderCoffee('아메리카노', 3500).made();

ame4.order();
ame4.making();
ame4.made();

// 라떼로..

const latte4 = new OrderCoffee('라떼', 5000);

latte4.order();
latte4.making();
latte4.made();

// 클래스 상속
class SpecialCoffee extends OrderCoffee {
    constructor(name, price, character) {
        super(name, price); //기존 것 상속
        this.character = character; //누나 만들기?
    }

    // 메소드
    order() {
        console.log(`${this.character} ${this.name}는 ${this.price + 1500}원 입니다`);
    }

    //메소드
    limited() {
        console.log(`${this.character} ${this.name}은 11월 한정판매 입니다.`);
    }
}

const ameSpecial = new SpecialCoffee('아메리카노', 4000, '미니언즈');
const special1 = new SpecialCoffee('라떼', 7000, '미니언즈');

ameSpecial.order();
special1.limited();
