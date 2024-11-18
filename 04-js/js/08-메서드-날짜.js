// 날짜 메서드

// get
const now = new Date();
console.log(now); // Mon Nov 18 2024 14:32:47 GMT+0900 (한국 표준시)
console.log(now.getFullYear()); // 2024
console.log(now.getMonth() + 1); // 11
console.log(now.getDate()); // 18
console.log(now.getDay()); // 1
console.log(now.getHours()); // 14
console.log(now.getMinutes()); // 44
console.log(now.getSeconds()); // 27
console.log(now.getMilliseconds()); // 792
console.log(now.getTime()); // 1731908871559 1970년 1월 1일 부터 경과한 숫자 정확한 숫자

// set
const now2 = new Date(2024, 4, 5, 12, 30, 30); // 5월 5일
console.log(now2);
