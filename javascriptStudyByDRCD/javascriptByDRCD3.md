# JAVASCRIPT "studied by 드림코딩"</br>javascript part 3

## 4. 배열 _ Array

배열은 데이터들을 순차적으로 저장하는 것을 맗한다. 배열을 선언하고 할당할 때 다른 언어(cpp, java등)는 타입이 고정 되어 있어서 배열 안의 모든 값들은 같은 타입을 가지지만 javascript는 배열 안에서 다른 타입을 가질 수 있다.

### 1. 배열의 선언 _ Declaration

javascript에서 배열의 선언은 크게 2가지로 나뉜다.

* 1. 표준내장객체 Array 사용
* 2. 기본적은 배열선언

**[SOURCE]**
```javascript
const arr1 = new Array(1,5);
const arr2 = [1,2];

console.log(`type : ${typeof arr1}, arr1 : ${arr1}`);
console.log(`type : ${typeof arr2}, arr1 : ${arr2}`);
```

**[CONSOLE]**
```
type : object, arr1 : 1,5
type : object, arr1 : 1,2
```

### 2. 배열의 접근 _ Index position

배열의 **index** 는 **0부터 시작**하며 순차적으로 증가한다.

**[SOURCE]**
```javascript
const arr = ['apple', 'banana', 'melon', 'pear']

console.log(arr);
console.log(arr[0]);//배열의 첫번째 값
console.log(arr[arr.length-1]);//배열의 마지막
```

**[CONSOLE]**
```

```

### 3. 배열의 순회 _ Looping over an array

배열을 순회하며 모든 배열의 요소를 출력하는 방식은 크게 3가지가 있다.

* 1. for 문
* 2. for of 문
* 3. forEach 문

**[SOURCE]**
```javascript
const arr = ['apple', 'banana', 'melon', 'pear']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('--------------------');

for (let arridx of arr) {
    console.log(arridx);
}
console.log('--------------------');

arr.forEach((arr) => console.log(arr));
console.log('--------------------');
```

**[CONSOLE]**
```
apple
banana
melon
pear
--------------------
apple
banana
melon
pear
--------------------
apple
banana
melon
pear
--------------------
```

### 4. 배열의 추가, 삭제 _ Addition, Deletion

* 1. **pop** : 배열의 마지막 삭제
* 2. **push** : 배열의 마지막에 추가
* 3. **unshift** : 배열의 시작부분에 추0(다수 가능)
* 4. **shift** : 배열의 첫번째 삭제

**[SOURCE]**
```javascript
const fruit = ['apple', 'banana', 'melon']

fruit.pop();
console.log(fruit);

fruit.push('tomato')
console.log(fruit);

fruit.unshift('mango', 'grape')
console.log(fruit);

fruit.shift();
console.log(fruit);
```

**[CONSOLE]**
```
[ 'apple', 'banana' ]
[ 'apple', 'banana', 'tomato' ]
[ 'mango', 'grape', 'apple', 'banana', 'tomato' ]
[ 'grape', 'apple', 'banana', 'tomato' ]
```

**주의**
`shift` 와 `unshift` 는 `pop` 과 `push` 에 비해 연산속도가 상당히 느리다. 이는 배열에 대해 조금만 생각해 보면 그 답이 나온다. 우선 `pop` 과 `push` 를 도식화 하면 아래와 같다.

![pop/push 도식화](./imgFolder/DRCD_js_IMG10.png)

`pop` 과 `push` 는 각각 배열에서 제일 끝 부분만 인덱스와 데이터를 삭제, 배열의 제일 끝 부분에서 추가만 하면 된다. 하지만 `shift`와 `unshift` 는 동작구조가 조금 다르다.

![shift/unshift 도식화](./imgFolder/DRCD_js_IMG11.png)

위의 그림을 보면 `shift` 는 일단 모든 배열의 요소를 1칸씩 댕겨서 대입시킨다. 그 후 제일 마지막 인덱스와 값이 비어있는데 그 부분을 삭제하는 것이다. `unshift` 역시 처음에 빈 인덱스를 2개 추가한다. 그 후 앞에서부터 2칸씩 밀어서 뒤로 대입한다. 그렇게 되면 처음 2칸이 비는데 그곳에 우리가 대입하고자 하는 값 2개를 넣는 것이다. 이러한 특징 때문에 배열이 크면 클수록 이러한 낭비가 심해진다. 따라서 shift와 unshift는 반드시 사용해야 할 때만 사용하자.

### 5. splice

splice 는 배열에서 일정부분을 지우고 그 부분에 삽입할 수 있는 메소드 이다.

**[how to use]**

```javascript
array.splice(startIndex, endIndex, insertElmt1, insertElmt2 .....)
```

**[SOURCE]**

```javascript
const fruits = ['apple', 'banana', 'melon', 'mango', 'pear'];
console.log(fruits);

fruits.splice(1, 3, '**', '**2');
console.log(fruits);
```

**[CONSOLE]**

```
[ 'apple', 'banana', 'melon', 'mango', 'pear' ]
[ 'apple', '**', '**2', 'pear' ]
```

### 6. searching

* **includes** : 해당 element 가 배열에 존재하는지를 true, false 로 return
* **indexOf** : 해당 element 가 존재하는 배열의 index를 return(존재하지 않으면 -1)

**[SOURCE]**

```javascript
const fruits = ['apple', 'banana', 'melon', 'mango', 'pear'];

console.log(fruits.includes('apple'));
console.log(fruits.includes('carrot'));
console.log(fruits.includes('pear'));
console.log(fruits.indexOf('carrot'));
```

**[CONSOLE]**

```
true
false
true
-1
```
