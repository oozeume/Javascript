// Array.method

// filter()
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 5, 6, 7];

let arr3 = arr1.filter(item => arr2.includes(item));

console.log(arr3);

// filter() 특정 요소 제거 
const number = [1, 1, 2, 2, 3, 4, 5];

let arr = number.filter((item, index) => 
    number.indexOf(item) === index
);

console.log(arr);

// reduce()
const arr = [1,2,3,4]
let sum = arr.reduce((acc, cur) => acc + cur, 0)

console.log(sum);

// reduce() 평균 구하기
const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((acc, cur, index) => {
    return index === arr.length - 1 ? (acc + cur) / arr.length : acc + cur
}, 0);

console.log(average);

// reduce() 중복 횟수 구하기
const alphabet = ['a', 'b', 'c', 'b', 'd'];

const count = alphabet.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(count); // { a: 1, b: 2, c: 1, d: 1 }
// 초기값인 빈 객체에 요소값인 cur을 property key로, 요소의 개수를 value로 할당한다. 

// forEach()
const arr = [1, 2, 3];

const newArr = arr.forEach(item => item ** 2);
console.log(newArr); // undefined
// // forEach 메소드의 반환값은 언제나 undefined다. 

const arr = [1, 2, 3];
const newArr = [];

const arr2 = arr.forEach(item => newArr.push(item ** 2));
console.log(newArr); // [1, 4, 9]

