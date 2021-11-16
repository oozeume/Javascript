// 1. 홀수 n개 더하기
// 명령형 스타일
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


// if를 filter로
// if-else문이 아닌 if문은 filter로 추상화시킨다.

const f2 = (limit, list) => {
  let acc = 0;
  for (const a of list.filter(a => a % 2, list)) {
    const b = a * a; // 할당
    acc += b; // 축약
    // 홀수가 3번 나올때까지만 for문을 순회
    if (--limit == 0) break;  // limit을 하나씩 빼주면서 0이 되었을 때 break (break로 효율높임)
  }
  console.log(acc);
}
f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 값 변화 후 변수 할당을 map으로

const f3 = (limit, list) => {
  let acc = 0;
  for (const a of list.map(a => a * a, list.filter(a => a % 2, list))) {
    acc += a; // 축약
    // 홀수가 3번 나올때까지만 for문을 순회
    if (--limit == 0) break;  // limit을 하나씩 빼주면서 0이 되었을 때 break (break로 효율높임)
  }
  console.log(acc);
}
f3(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 4. break를 take로

// 5. 축약 및 합산을 reduce로
// 누적
