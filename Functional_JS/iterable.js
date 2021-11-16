// [1] 홀수 n개 더하기

// 명령형 코드로 작성
const f1 = (limit, list) => {
  let acc = 0;
  for (const a of list) {
    if (a % 2) {
      const b = a * a; // 할당
      acc += b; // 축약
      // 홀수가 3번 나올때까지만 for문을 순회
      if (--limit == 0) break;  // limit을 하나씩 빼주면서 0이 되었을 때 break (break로 효율높임)
    }
  }
  console.log(acc);
}
f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 선언적 코드로 변경
// 1. if를 filter로
// if-else문이 아닌 if문은 filter로 추상화시킨다.

const f2 = (limit, list) => {
  let acc = 0;
  for (const a of L.filter(a => a % 2, list)) {
    const b = a * a; // 할당
    acc += b; // 축약
    // 홀수가 3번 나올때까지만 for문을 순회
    if (--limit == 0) break;  // limit을 하나씩 빼주면서 0이 되었을 때 break (break로 효율높임)
  }
  console.log(acc);
}
f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2. 값 변화 후 변수 할당을 map으로

const f3 = (limit, list) => {
  let acc = 0;
  for (const a of L.map(a => a * a, L.filter(a => a % 2, list))) {
    acc += a; // 축약
    // 홀수가 3번 나올때까지만 for문을 순회
    if (--limit == 0) break;  // limit을 하나씩 빼주면서 0이 되었을 때 break (break로 효율높임)
  }
  console.log(acc);
}
f3(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 3. break를 take로

const f4 = (limit, list) => {
  let acc = 0;
  for (const a of L.take(limit, L.map(a => a * a, L.filter(a => a % 2, list)))) {
    acc += a; // 축약
    // 홀수가 3번 나올때까지만 for문을 순회
    if (--limit == 0) break;  // limit을 하나씩 빼주면서 0이 되었을 때 break (break로 효율높임)
  }
  console.log(acc);
}
f4(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 4. 축약 및 합산을 reduce로
// 상위 스코프에 어떤 값을 둔다음에 모든 값을 합산을 하는 경우에는 reduce를 써야겠구나로 생각할 수 있다. 

const add = (a, b) => a + b;

const f5 = (limit, list) => {
  console.log( // 5. 출력
    _.reduce(add, // _.reduce((acc, a) => acc + a, 0)를 add 함수로 뺐음 // 4. add로 축약
      L.take(limit, // 3. limit값 까지만 뽑기로 하고
        L.map(a => a * a, // 2. 제곱을 한 후
          L.filter(a => a % 2, list))))); // 1.list에서 시작해서 홀수만 거른 다음에
}
f5(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// 명령형 코드 while문
const f6 = (end) => {
  let i = 0;
  while (i < end) {
    console.log(i);
    i++;
  }
}
f6(10)

// 선언적 코드 
// while문을 range로 추상화
const f7 = (end) => {
  L.range(end);
}
f7(10)

// 선언적 코드 
// while문을 range로 추상화 + 홀수만 출력
const f8 = (end) => {
  _.each(console.log, L.range(1, end, 2));
}
f8(10)

// if문 없이 명령형 코드로 홀수만 출력
const f9 = (end) => {
  let i = 1;
  while (i < end) {
    console.log(i);
    i += 2;
  }
}
f9(10)

// 효과를 each로 구분



