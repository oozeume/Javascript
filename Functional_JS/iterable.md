## 이터러블 iterable or iterator

: 반복될 수 있는, 반복할 수 있는
list, array, each문을 사용할 수 있는 객체 혹은 자료형

iteration protocol 이터레이션 프로토콜
: 데이터 컬렉션을 순회하기 위한 프로토콜(미리약속된 규칙)
이터레이션 프로토콜을 준수한 객체는 for...of문으로 순회할 수 있고, spread문법의 피연산자가 될 수 있다.

#### 1. 이터러블

이터러블 프로토콜을 준수한 객체
Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체

1-1. 배열은 Symbol.iterator 메소드를 소유한다. 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.
1-2. 일반 객체는 Symbol.iterator 메소드를 소유하지않는다. 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다. 따라서 일반객체는 for...of문에서 순회할 수 없으며 spread 문법의 대상으로 사용할 수 없다.

#### 2. for...of문

```javascript
// 배열
for (const item of ['a', 'b', 'c']) {
  console.log(item);
}

// 문자열
for (const letter of 'abc') {
  console.log(letter);
}

// Map
for (const [key, value] of new Map([
  ['a', '1'],
  ['b', '2'],
])) {
  console.log(`key: ${key} value : ${value}`);
}

// Set
for (const val of new Set([1, 2, 3])) {
  console.log(val);
}
```
