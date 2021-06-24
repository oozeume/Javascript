// 주어진 숫자까지 모든 숫자 더하기 

// for 반복문
let number = [1, 2, 3, 4, 5];
function sumTo(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        count = count + number[i];
    }
    return count;
}

console.log(sumTo(number));

// for문 -> 재귀함수 
// 10이 주어지면 1부터 10까지 모두 더하기
function sumTo(number) {
    if(number === 1) return 1;
    return number + sumTo(number-1);
}

