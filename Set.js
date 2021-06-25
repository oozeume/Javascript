// Set 객체는 중복되지 않는 값을 가지는 리스트
// 배열과 유사하지만 배열은 아니다. 


// Set을 이용한 중복 제거방법
const array1 = [0, 1, 2, 3];
const array2 = [3, 4, 5];

const merge = [...new Set([...array1, ...array2])];

console.log(merge);