// 메서드 문자

const str = 'hello world';

// length
console.log(str.length); // 11

console.log(str.includes('hello'));
console.log(str.includes('rrrr'));
console.log(str.includes('Hello')); //false

const str2 = '12345';
console.log(str2.padStart(10, '0'));
console.log(str2.padEnd(10, '0'));
console.log(str2.padEnd(3, '0')); //12345

const str3 = 'hello winter winter';
console.log(str3.replace('winter', 'summer')); //hello summer winter
console.log(str3.replace(/winter/g, 'summer')); //hello summer summer
console.log(str3); // hello winter winter 메모리에만 저장한다

const str4 = 'hello world';
console.log(str4.slice(0, 5)); //hello (0번째 인덱스부터 5번째 인덱스 직전까지 추출)
console.log(str4.slice(6)); // world (6번째 인덱스부터 끝까지 추출)
console.log(str4.slice(-5)); // world (-1번째 인덱스부터 -5번째 인덱스까지 추출)
console.log(str4); // hello world (원본은 변경되지 않는다.)

const str5 = 'Spring, Summer, Fall, Winter';
console.log(str5.split(', ')); // ['Spring', 'Summer', 'Fall', 'Winter']
console.log(str5.toLowerCase()); // spring, summer, fall, winter
console.log(str5.toUpperCase()); // SPRING, SUMMER, FALL, WINTER

const str6 = ' hello world ';
console.log(str6.trim()); // hello world
console.log(str6); // hello world (원본은 변경되지 않는다.)
