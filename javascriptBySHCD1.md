# <center>JAVASCRIPT "studied by 생활코딩"</br>javascript part 1

## 1. 함수(간략히)
---
### 1. 선언
```javascript
function 함수명(인자, 인자, 인자){
  코드
  return 반환값;
}
```
### 2. 함수의 입출력
```javascript
function get_argument(arg/*함수의 입력*/){
  return arg/*함수의 출력*/;
}
get_argument('hello');
```
arg라는 입력값을 받고 return 을 arg로 함

### 3. 함수의 여러 호출, 선언 방법
1. 함수명 = function
```javascript
함수명 = function(인자,....){
    코드
    return 반환값;
}
```
2. 익명함수 : ==선언하면서== 바로 실행(1회성)
```javascript
(function(){
  코드
})
```

## 2. 배열
---
### 1. 선언, 요소접근
**선언**
```javascript
var 배열명 = [요소1, 요소2,.....,요소N]
```
**example**
```javascript
var name = ['Mark', 'Ann', 'Kim'];
console.log(name[0], name[2]);
```
**콘솔창**
```
Mark Kim
```
### 2. 배열의 길이(배열과 반복문)
```javascript
function get_members() {
    return ['aaa','bbb','ccc']
  }
  members=get_members()
  //javascript 는 자료형 없이 변수 선언 가능
  //get_members() 라는 함수 사용 시 리턴 값은 배열
  //즉 members 라는 변수는 ['aaa','bbb','ccc']인 배열이다
  for(let i=0;i<members.length; i++){
    console.log(members[i]);
  }
```
### 3. 배열의 요소추가
1. **`li.push('f')`** : <span style='font-size:12px'>element **1**개를 배열 **제일 끝**에 추가</span>
```javascript
var li = ['a','b','c','d','e']
li.push('f');
console.log(li);
```
&emsp;<콘솔창>
```
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
```
</br>

2. **`li=li.concat(['f','g'])`** : <span style='font-size:12px'>element **N**개를 배열 **제일 끝**에 추가</span>
```javascript
var li = ['a','b','c','d','e']
li=li.concat(['f','g'])//concat()의 return은 'f', 'g'를 포함한 배열
console.log(li)
```
&emsp;<콘솔창>
```
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
```
</br>

3. **`li.unshift('z')`** : <span style='font-size:12px'>element 1개를 배열 제일 앞에 추가</span>
```javascript
var li = ['a','b','c','d','e']
li.unshift('z')
console.log(li)
```
&emsp;<콘솔창>
```
[ 'z', 'a', 'b', 'c', 'd', 'e' ]
```
</br>

4. **`li.splice(start: number, deleteCount?: number, emt 1, emt 2,...,emt N)`**
<span style='font-size:12px'>시작 index 부터 deleteCount 개 만큼 삭제 후 emt 1~emt N 을 배열에 추가</span>
```javascript
var li = ['a','b','c','d','e']
li.splice(1,3,'x','y')
console.log(li)
```
&emsp;<콘솔창>
```
[ 'a', 'x', 'y', 'e' ]
```
</br>

### 4. 배열의 제거, 정렬
#### 1. 제거
1. `li.shift()` : <span style='font-size:10px'>제일 첫번째 요소 제거</span>
```javascript
var li=['a','b','c','d','e']
li.shift()
console.log(li)
```
&emsp;<콘솔창>

```
[ 'b', 'c', 'd', 'e' ]
```
</br>

2. `li.pop()` : <span style='font-size:10px'>제일 마지막 요소 제거</span>
```javascript
var li=['a','b','c','d','e']
li.pop()
console.log(li)
```
&emsp;<콘솔창>
```
[ 'a', 'b', 'c', 'd' ]
```

#### 2. 정렬
1. `li.sort()` : <span style='font-size:10px'>정방향 정렬</span>
```javascript
var li=['b','e','a','d','c']
li.sort()
console.log(li)
```
&emsp;<콘솔창>
```
[ 'a', 'b', 'c', 'd', 'e' ]
```
</br>

2. `li.reverse()` : <span style='font-size:10px'>역방향 정렬</span>
```javascript
var li=['a','b','c','d','e']
li.reverse()
console.log(li)
```
&emsp;<콘솔창>
```
[ 'e', 'd', 'c', 'b', 'a' ]
```
</br>

## 3. 객체(기초만)
---

### 1. 객체와 배열
1. 배열

|index|0|1|2|
|----|----|----|----|
|elements|abc|ㄱㄴㄷ|123|

2. 객체 : <span style='font-size : 12px'>객체의 index는 string 으로 선언 가능하다</span>

|index|eng|kor|num|
|----|----|----|----|
|elements|abc|ㄱㄴㄷ|123|

### 2. 객체의 선언
1. 객체 리터럴로 선언
```javascript
var objectName = {eng: 'abc', kor: 'ㄱㄴㄷ', num: 123}
```
2. 기본 객체 생성자 함수를 이용한 선언
```javascript
var objectName=new Object();
objectName['eng']= 'abc'
//위의 코드와 objectName.eng='abc' 는 완전히 같음
objectName['kor']= 'ㄱㄴㄷ'
objectName['num']= 123
```
3. 생성자 함수를 통한 선언
```javascript
var objectName = function(eng, kor, num){
    this.eng='eng'
    this.kor='kor'
    this.num='num'
}

objName=new objectName('abc', 'ㄱㄴㄷ', 123);
```

### 3. 객체의 요소 접근
1. `[]`사용
```javascript
var language={eng: 'abc', kor: 'ㄱㄴㄷ', num: 123}
console.log(language['eng']);
```
&emsp;<콘솔창>
```
abc
```

<span style='color:red; font-size:12px'>* 객체 호출 시 `[]` 안에는 무조건 문자열이 들어가야 함</br>*`obj[변수]` 라는 문법은 존재하지 않음</span>

2. `.` 사용
```javascript
var language={eng: 'abc', kor: 'ㄱㄴㄷ', num: 123}
console.log(language.eng);
```
&emsp;<콘솔창>
```
abc
```

### 4. 객체와 반복문
**\*`for in` 문**
**\*문법**
```
for(변수 in 객체이름){
  코드
}
```
**example**
```javascript
var lang={eng: 'abc', kor: 'ㄱㄴㄷ', num: 123}
for(key in lang){
  console.log(`key : ${key} value : ${lang[key]}`);
}
```
&emsp;<콘솔창>
```
key : eng value : abc
key : kor value : ㄱㄴㄷ
key : num value : 123
```

## 4. javascript에서의 정규표현식
필요한 정보를 추출, 필요한 정보가 있는지 확인, 검색한 정보를 치환하는 일을 하도록 도와주는 요소

### 1. 정규표현식의 선언
```javascript
var pattern=/a/;
```
```javascript
var pattern=new RegExp('a');
```
위의 두 소스는 완전히 같은 내용임

### 2. 정규표현식의 사용
1.  `pattern.exec('string')`

<span style='font-size:12px'>

`exec('string')` 메소드는 string이 존재하는지 확인하고 **추출**하는 메소드
이 메소드의 리턴값은 찾고자 하는 값이 있으면 `string` 리턴, 찾고자 하는 값이 없으면 `null` 리턴

<span>

```javascript
var pattern=/ap/;//이 부분이 사용할 정규표현식
console.log(pattern.exec('apple'));
console.log(pattern.exec('banana'));
```
&emsp;<콘솔창>
```
[ 'ap', index: 0, input: 'apple', groups: undefined ]
null
```
2. `pattern.test('string')`
<span style='font-size:12px'>
`test('string')` 메소드는 string이 **존재**하면 `true`, **존재하지 않**으면 `false` 리턴
</span>

```javascript
var pattern=/ap/;//이 부분이 사용할 정규표현식
console.log(pattern.test('apple'));
console.log(pattern.test('banana'));
```
&emsp;<콘솔창>
```
true
false
```
### 3. `string.match(pattern)`
<span style='font-size:12px'>

`string`이나 `변수`가 `pattern`을 만족하면 `string`이나 `변수` 출력(배열형태)
`pattern`을 만족하지 못하면 `null` 출력

</span>

```javascript
var pattern=/ap/
var pattern2='k'
var str='apple'
console.log(str.match(pattern));
console.log(str.match(pattern2));
```
&emsp;<콘솔창>
```
[ 'ap', index: 0, input: 'apple', groups: undefined ]
null
```

### 4. `string1.replace(pattern, 'string2')`
<span style='font-size:12px'>

`string1` 에서 `pattern`에 맞는 **문자열을 탐색후 지우고** **`string2` 의 문자열로 대체**

</span>

```javascript
var pattern=/app/
var str='apple'
console.log(str.replace(pattern, 'a APP'));
//apple에서 app제거 후 a APP로 대체하면
//a APPle이 됨
```

&emsp;<콘솔창>

```
a APPle
```

### 5. Regular Expression - option
1. `/pattern/i`

<span style='font-size:12px'>

정규표현식 패턴 뒤에 `i` 가 붙으면 **대소문자 구분 없이** 탐색

</span>

```javascript
var xi = /a/;
console.log("Abcde".match(xi));
var oi = /a/i;
console.log("Abcde".match(oi));
```
&emsp;<콘솔창>
```
null
[ 'A', index: 0, input: 'Abcde', groups: undefined ]
```

2. `/pattern/g`

<span style='font-size:12px'>

정규표현식 패턴 뒤에 `g`가 붙으면 조건에 맞는 문자열을 **모두 탐색**

</span>

```javascript
var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og));
```

&emsp;<콘솔창>
```
[ 'a', index: 0, input: 'abcdea', groups: undefined ]
[ 'a', 'a' ]
```

### 6. Regular Expression - capture

```javascript
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
//(\w+)\s(\w+) 에서 앞의 (\w+)가 $1, 뒤의 (\w+)가 $2 이다.
//$number 기호는 괄호로 표기된 그룹의 이름이다
console.log(result);
```
&emsp;<콘솔창>
```
everybody, coding
```

### 7. 정규표현식의 사용 예
<span style='font-size:12px'>

`핀터레스트 : https://www.pinterest.co.kr/ 입니다. 구글 : https://www.google.com/ 입니다.`
위의 문자열에서 링크를 추출하여 a 태그 안에 넣는 기능을 정규표현식을 이용해 만들 수 있다

</span>

```javascript
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim
var content = '핀터레스트 : https://www.pinterest.co.kr/ 입니다.'
                +'\n'+'구글 : https://www.google.com/ 입니다.';
var result = content.replace(urlPattern, function(url){
    return `<a href="'+url+'">`+url+'</a>';
});
console.log(result);
});
```
&emsp;<콘솔창>
```
핀터레스트 : <a href="'+url+'">https://www.pinterest.co.kr/</a> 입니다.
구글 : <a href="'+url+'">https://www.google.com/</a> 입니다.
```
