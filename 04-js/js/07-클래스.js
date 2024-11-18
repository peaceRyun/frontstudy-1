// 클래스 함수
// 리터럴 방식
// const animals = ['dog', 'cat', 'fish'];

// 자바스크립트에서는 배열도 객체이다?? 출처:chatgpt4
// 생성자 함수
const animals = new Array('dog', 'cat', 'fish');

console.log(animals);
console.log(animals.length);
console.log(animals[0]);
console.log(animals.includes('dog'));

// 우리 커피숍에서 파는 메뉴 출력 자동화

// 생성자 함수
// new Array(1, 2, 3)
const starbucks = new Array('아메리카노', '카페라떼', '카푸치노');

// method 만드는 방법
// 생성자함수.prototype.메소드명 = function(){}
Array.prototype.menu = function () {
    console.log(this);
};

starbucks.menu();

const mega = ['메가리카노', '메가라떼', '메가쑥쑥'];
mega.menu();

// 메소드 재활용
const ame = {
    name: '아메리카노',
    price: 3500,
    orderMenu: function () {
        console.log(`${this.name}는 ${this.price}원 입니다.`);
    },
};

const latte = {
    name: '라떼',
    price: 4000,
    // orderMenu() {
    //     console.log(`${this.name}는 ${this.price}원 입니다.`);
    // },
};

ame.orderMenu();
ame.orderMenu.call(latte);
// latte.orderMenu();

// 생성자 함수를 활용한 메뉴판 만들기
function OrderMenu(name, price) {
    this.name = name;
    this.price = price;
}

OrderMenu.prototype.printMenu = function () {
    console.log(`${this.name}는 ${this.price}원 입니다`);
};

const ame2 = new OrderMenu('아메리카노', 3500);
const latte2 = new OrderMenu('라떼', 5500);

ame2.printMenu();
latte2.printMenu();

console.log(ame2);
console.log(latte2);

// 클래스 문법
class OrderCoffee {
    // 생성자 함수
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // 메서드
    printMenu() {
        console.log(`오늘의 커피는 ${this.name}입니다. 가격은 ${this.price}입니다`);
    }

    making() {
        console.log(`${this.name}을 만들고 있습니다.`);
    }
    made() {
        console.log(`${this.name}가 완성되었습니다.`);
    }
}

const ame3 = new OrderCoffee('americano', 3500);
const latte3 = new OrderCoffee('latte', 4000);

ame3.printMenu();
latte3.printMenu();
ame3.making();
latte3.making();
ame3.made();
latte3.made();
