# <center>JAVASCRIPT "studied by 생활코딩"</br>javascript part 2</center>


## 1. 유효범위 <span style="font-size : 18px">scope</span>
---

### 1. 지역변수와 전역변수
<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var vscope = 'global'
function fscope() {
    var vscope = 'hello?'
    console.log(vscope)
}
fscope();
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
hello?
```
위의 소스에서 첫번째 줄의 `vscope`는 전역변수(global variable)
함수 안의 `vscope`는 지역변수(local variable)이다.
지역변수는 중괄호와 같이 코드의 블럭 안에서만 작동한다

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var vscope = 'global'
function fscope() {
    var vscope = 'hello?'
}
fscope();

console.log(vscope);
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
global
```
위의 소스에서 vscope를 출력하면 함수가 실행 되었기에
`hello?` 가 출력될 것 같지만 `global`이 출력된다.
이는 javascript의 에서 지역변수와 전역변수를 사용할 시 이름이 같아도 따로
생성하기 때문인데 밑의 그림을 보면서 이해하면 된다

<img src="/imgFolder/javascriptBySHCD2_global_Local_variableIMG1.png" style="width: 60%; height: auto;" >

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var vscope = 'global'
function fscope() {
    var vscope = 'hello?'
    vscope = 'hello?'
}
fscope();

console.log(vscope);
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
global
```
위의 소스에서 여전히 결과값이 `global`로 나오며 이는 전역변수 이다.
이는 함수 안에서 vscope를 호출하였고 이 변수는 지역변수로 취급을 하기 때문이다.
vscope의 전역 값을 바꾸고 싶다면 밑의 소스를 참고하면 된다

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var vscope = 'global'
function fscope() {
    vscope = 'hello?'
}
fscope();

console.log(vscope);
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
hello?
```
위의 소스는 밑의 그림과 같이 함수 안의 vscope를 선언하지 않고 vscope에
문자열을 삽입했다. 이는 vscope라는 전역변수에 직접 대입을 한 것이기 때문에
지역변수는 선언조차 되지 않은 것이다. 밑의 그림을 참고하라.

<img src="/imgFolder/javascriptBySHCD2_global_Local_variableIMG2.png" style="width: 60%; height: auto;" >

**정리하자면 거의 대부분의 상황에서는 지역변수를 쓰는 것이 타당하다. 하지만 프로그램 내에서 전역으로 써야하는 상황이 분명히 존재하므로 1.3 에서 더 자세히 설명하겠다**

### 2. 유효범위의 필요성

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function a() {
  var i=0;
}
for(var i=0; i<5; i++){
  a();
  console.log(i);
}
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
0
1
2
3
4
```

위의 소스는 아무 문제 없이 잘 돌아간다
하지만 밑의 소스는 문제가 생긴다

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
function a() {
  i=0;
}
for(var i=0; i<5; i++){
  a();
  console.log(i);
}
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
0
0
0
....
//0이 계속 출력됨
```
for문의 `var i = 0;`은 전역변수로 취급하는데 함수 안에서 i 역시 선언이 아닌 대입 연산이므로 전역변수로 취급한다.
이로 인해 `i` 는 지속적으로 `0`이 출력될 것이고 `i<5` 라는 조건이 있어야 break 가 되는데 조건을 만족 못하므로 무한 for 문이 된 것이다.

### 3. 전역변수의 사용법
<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var MYAPP={};
MYAPP.calculator={
    'left' : null,
    'right' : null,
}
MYAPP.coordinate={
    'left' : null,
    'right' : null,
}

MYAPP.calculator.left=10;
MYAPP.calculator.right=20;

function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
30
```
위의 소스는 MYAPP 이라는 전역변수를 1번 쓴 것이다.
이조차도 싫고 전역변수를 단 한번도 쓰고 싶지 않다면 밑의 소스를 참고하라.
<span style = "font-size:small">**[SOURCE]**</span>
```javascript
(function(){
var MYAPP={};
MYAPP.calculator={
    'left' : null,
    'right' : null,
}
MYAPP.coordinate={
    'left' : null,
    'right' : null,
}

MYAPP.calculator.left=10;
MYAPP.calculator.right=20;

function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());
}());
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
30
```
이렇게 사용한다면 익명함수로 사용 된 것으로 이 역시 함수이므로 모든 변수가 지역변수로 사용 된 것이다

### 4. 유효범위의 대상

자바스크립트는 다른 언어와는 다르게 함수에서만 지역변수를 제공한다.
많은 프로그래밍 언어들이 블록, 즉 `{}` 안에 있다면 지역변수를 제공하는 것과 다른 점이다

<span style = "font-size:small">**[SOURCE-JAVASCRIPT]**</span>

```javascript
for(var i=0; i<1; i++){
  var name = 'coding everybody'
}
console.log(name);
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
coding everybody
```

<span style = "font-size:small">**[SOURCE-JAVA]**</span>

```java
for(int i=0; i<1; i++){
  String name = 'coding everybody'
}
system.out.println(name);
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
undefined variable of name
```

### 5. javascript 에서의 유효범위

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var i=5;

function a() {
    var i = 10;
    b();
}

function b() {
    console.log(i);
}

a();
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
5
```

위의 소스에서 `b()` 라는 함수 안에서 사용된 `i` 의 **scope는 선언 될 때를 기준으로한다.**
즉 `a()` 라는 함수에서 `b()` 라는 함수를 호출하고 사용하더라도 선언될 때는 전역변수로 사용되었기 때문에 `b()` 함수 안의 `i` 는 전역변수로 취급한다
이러한 변수의 scope를 정하는 방식을 **정적 유효범위**, **lexical scoping** 라고 한다

## 2. 함수<span style="font-size : 18px">  function</span>
---

### 1. 값으로서의 함수

1. javascript 의 함수는 다른 언어와는 그 성격이 조금 다르다.
javascript 에서의 **함수는** 객체이며 **그 자체가 값이 될 수 있다.**
밑의 소스를 보면서 이해해 보자.

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var a = function(){}
```
<span style = "font-size:small">**[SOURCE]**</span>
```javascript
a = {
  b: function(){}
}
```
위의 2개의 소스에서 볼 수 있듯이 javascript는 변수나 객체에 함수를 저장할 수 있다.
또한 객체 안에 저장되어 있는 함수는 method 라고 한다.

2. javascript에서의 함수는 값으로 볼 수 있기에 **함수의 인자로 함수를 전달**할 수 도 있다.
밑의 소스를 보자

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function cal(func, num) {
    return func(num)
}
function increase(num) {
    return num+1
}
function decrease(num) {
    return num-1
}
console.log(cal(increase, 1));
console.log(cal(decrease, 1));
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
2
0
```
위의 소스에서 `cal(func, num)` 이라는 함수는 `func()`이라는 함수를 받는다.
즉 `cal(increase, 1)`의 리턴값은 `increase(1)` 과 같으므로 `2`가 출력된다
이와 같이 함수를 변수처럼 받아서 사용할 수도 있다

3. javascript에서 **함수는 함수 리턴값으로도 사용이 가능**하다
밑의 소스를 보자.

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function cal(mode) {
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
3
1
```
`cal('plus')(2,1)` 을 실행하면 return 부분에서 `func['plus']` 실행후 리턴된다.
`func['plus']`는 func라는 객체 안의 plus 객체의 호출이고 이 plus 객체 안에 함수가 있으므로 함수를 실행하게 된다.
그렇게 되면 `cal('plus')(2,1)` 에서 `func['plus'](2,1)` 에서 `function(2,1)`로 바뀐 것이다.
따라서 `cal('plus')(2,1)`의 값은 `3`이다. `cal('minus')(2,1)` 역시 마찬가지로 이해하면 된다.

4. javascript에서 **함수는 배열의 값으로 사용이 가능**하다

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var process = [
    function (input) {return input + 10;},
    function (input) {return input * input;},
    function (input) {return input / 2;}
]

var input = 1;
for(var i=0; i<process.length; i++){
    input = process[i](input)
}

console.log(input);
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
60.5
```
우선 `process[]` 라는 배열의 구조부터 시각화하면 아래와 같다
|index|0|1|2|
|----|----|----|----|
|elements|function (input) {return input + 10;}|function (input) {return input * input;}|function (input) {return input / 2;}|

for 문 안에서 `i=0` 일 때 `process[0](1)` 과 같고 `process[0]`의 함수는
`function (input) {return input + 10;}` 이므로 여기에 1을 대입하면 11이다.
이 과정을 반복하면 `input`의 값은 `60.5` 이다

위의 1. ~ 4. 처럼 함수는 변수, 매개변수, 리턴값으로도 사용이 가능한 성질을
**first-class citizen(object)** 라고 한다!

### 2. 함수와 콜백

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var numbers=[20, 10, 9,8,7,6,5,4,3,2,1];
console.log(numbers.sort());
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
[ 1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9 ]
```
`numbers[]` 라는 배열을 정렬을 하기 위해 `sort()` 를 썼는데 숫자 크기 순서가 아닌 문자열의 순 서대로 출력이 되었다.
우리가 원하는 숫자 순서로 출력을 하기 위해서는 밑의 소스를 확인하라.

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var numbers=[20, 10, 9,8,7,6,5,4,3,2,1];
var sortFunc = function(a, b) {
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
}
console.log(numbers.sort(sortFunc));
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20 ]
```

`sort()`라는 메소드의 기본동작 방식을 변수에 담긴 함수를 통해 컨트롤 할 수 있다.
이러한 방식을 콜백함수라고 하며 위의 소스에서 `sortFunc`가 콜백함수이다

### 3. 클로저<span style="font-size : 18px">  closure</span>

#### 1. 내부함수

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function outter() {
  function inner() {
    var title='coding everybody'
    console.log(title);
  }
}
```
이 소스에서 `inner()` 라는 함수를 **내부함수**, `outter()` 라는 함수는 **외부함수** 라고 한다.
내부함수는 함수를 함수안에 작성하여 해당함수에서만 사용하는 기능을 하도록 지정한다.
이는 소스 가독성을 올려주며 함수의 관리를 편하게 해 준다

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function outter() {
  var title='coding everybody'
  function inner() {
    console.log(title);
  }
  inner();
}
outter();
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
coding everybody
```
`outter()` 함수 안에 `title` 이라는 변수가 지역변수로 선언 되어 있다.
`inner()` 라는 함수에서 `title`을 사용할 시 `inner()` 안에 지역변수가 없다면 `inner()` 함수 밖에서 `title`을 찾아서 사용한다.

#### 2. 내부함수와 외부함수
<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function outter() {
    var title = 'coding everybody'
    return function () {
        console.log(title);
    }
}

inner=outter();
inner();
```
<span style = "font-size:small">**[CONSOLE]**</span>
```
coding everybody
```
위의 소스에서 `inner` 라는 변수에 `outter()`라는 함수를 실행하여 대입했다.
이렇게 되면 `inner = function(){console.log(title);}` 과 같아진다.
이 때 `inner()`라는 함수를 실행시키면 함수가 실행되며 `title`이라는 변수를 찾게 된다.
다른 언어에서 이러한 소스를 실행시킨다면 `title` 이라는 변수를 찾을 수 없다.
`outter()` 라는 함수는 사용 된 뒤 폐기되기 때문이다.
하지만 javascript 에서는 `outter()` 함수가 사용된 뒤에도 **`outter()`의 요소에 접근이 가능**하다.
이러한 성질이 closure의 특성이다.

#### 3. private variable
<span style = "font-size:small">**[SOURCE]**</span>

```javascript
function factory_movie(title) {
    return {
        get_title:function () {
            return title;
        },
        set_title:function (_title) {
            title=_title
        }
    }
}
ghost = factory_movie('Ghost in the shell')
matrix = factory_movie('Matrix')

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');

console.log(ghost.get_title());
console.log(matrix.get_title());
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
Ghost in the shell
Matrix
공각기동대
Matrix
```

`ghost`라는 변수에서 `factory_movie()`의 실행의 `return` 인 객체의 구조는 아래와 같다
|index|get_title|set_title|
|----|----|----|
|elements|`function(){return title;}`|`function(){title=_title;}`|
|title 의 값|`'Ghost in the shell'`|`'Ghost in the shell'`|

`matrix`라는 변수에서 `factory_movie`의 실행의 `return` 인 객체의 구조는 아래와 같다
|index|get_title|set_title|
|----|----|----|
|elements|`function(){return title;}`|`function(){title=_title;}`|
|title 의 값|`'Matrix'`|`'Matrix'`|

여기서 `title` 이라는 변수는 `factory_movie()` 라는 함수의 지역변수로 사용되었다.
`title` 이라는 변수에 접근하기 위해서는 `factory_movie()` 의 return 의 객체인 `set_title`에서만 수정하고 `title`을 출력할 때도 `get_title`에서만 접근하여 출력할 수 있디.
이러한 title 같은 변수를 **`private variable`** 이라고 한다.
이 같은 `private variable` 은 외부에서 접근이 불가하기에 협업하는 과정에서 코더의 실수로 잘못된 접근이나 사용을 막을 수 있다.

### 4. 함수가 받는 인자의 개수<span style="font-size : 18px">  arguments 객체</span>

arguments는 javascript가 제공하는 객체 중 하나로 배열과 유사하게 동작하며 사용자가 작성한 인자를 담고 있다.
밑의 소스를 보며 이해해 보자

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function sum() {
    var i=0; _sum = 0;
    for(i=0; i<arguments.length; i++){
        console.log(i+' : '+arguments[i]);
        _sum+=arguments[i];
    }
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
0 : 1
1 : 2
2 : 3
3 : 4
result : 10
```

javascript에서는 함수의 매개변수를 작성하지 않고 사용하여도 인자를 사용할 수 있다.
예를 들면 `funcA(){}` 를 선언하고 `funcA('a', 1, 2, 'link')` 이런 식으로 사용하여도 오류가 뜨지 않는다.
그렇기 때문에 함수의 인자로 몇개의 인자가 들어올 지 모를 때 이러한 방식의 선언을 사용한다.
그런 상황에서 함수의 인자가 몇개가 들어오는지 그리고 어떠한 인자가 들어오는지를 컨트롤 하기 위해 arguments라는 객체를 사용한다.
이에 따라 위의 소스에서 `sum(1, 2, 3, 4)` 를 실행한 후의 위의 소스에서 `arguments[0]==1`(`arguments[1]==2`) 이다.
받은 인자가 몇개인지 모를 때 `arguments.length`를 사용하여 받은 인자의 갯수를 알아내어 위의 소스처럼 동작하게 만들 수 있다.

### 5. `functionName.length` 와 `agunemts`

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero('elmt1','elmt1','elmt1','elmt1')
one('elmt1','elmt1','elmt1','elmt1')
two('elmt1','elmt1','elmt1','elmt1')
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
zero.length 0 arguments 4
one.length 1 arguments 4
two.length 2 arguments 4
```

위의 소스에서 매개변수와 인자의 차이를 알아야 이 소스의 동작구조가 이해가 된다. 매개변수는 기본적으로 함수의 선언당시 입력받는 변수를 의미한다. 인자는 함수의 사용시 입력받는 변수 등등을 의미한다. 이에 따라 위의 소스에서 `zero()` 함수의 매개변수는 0개, `one()` 은 1개, `two()`는 2개를 가지고 있다. 또한 `arguments`는 3개의 함수 모두 4개로 함수의 실행시 모두 4개의 변수를 입력했기 때문이다.

<span style="font-size : 12px">참고 : javascript 에서는 변수에 객체, 변수, 함수 등을 모두 받을 수 있으나 위에서는 설명의 용의성을 위해 변수라고만 칭함</span>

### 6. 함수의 호출<span style="font-size : 18px">  apply 메소드</span>

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
function sum(arg1, arg2) {
    return arg1+arg2;
}

ordinaryCall=sum(1,2)
applyCall=sum.apply(null, [1,2])

console.log(ordinaryCall+'\n'+applyCall);
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
3
3
```
함수 호출 시 `funcName()` 으로도 가능하고 `funcName.apply()` 로도 가능하다.
따라서 위의 코드에서 `sum(1,2)` 와 `sum.apply(null, [1,2])`는 같은 값을 도출한다.

위의 코드에서도 확인할 수 있듯이 같은 동작인데 굳이 복잡한 apply를 쓰는 이유는 뭘까?
복잡한 코드인 `apply` 를 사용하는 이유는 밑의 소스에서 확인한다.

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
//source1
function sum() {
    var _sum=0;
    for(name in this){
        if(typeof this[name] !== 'function')
            _sum += this[name]
    }
    return _sum;
}
o1={val1:1, val2:2, val3:3, sum:sum}
o2={v1:10,v2:50,v3:100,v4:25, sum:sum}

console.log(o1.sum());
console.log(o2.sum());
--------------------------------------------------------------------------------
//source2
o1={val1:1, val2:2, val3:3}
o2={v1:10,v2:50,v3:100,v4:25}
function sum() {
    var _sum=0;
    for(name in this){
        _sum += this[name]
    }
    return _sum;
}

console.log(sum.apply(o1));
console.log(sum.apply(o2));
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
6
185
--------------------------------------------------------------------------------
6
185
```

위의 두개의 소스의 결과값은 콘솔창에서 보다싶이 같다.
하지만 source 1에서 보다싶이 `apply`를 쓰지 않고 일반적인 함수의 선언을 쓰고 우리가 원하는 동작을 하게 하려면 객체안에 형식의 일관성을 헤치는 함수를 사용해 주어야 하며 `for문` 안에 함수인지 아닌지를 판별하는 조건문도 작성(**조건문을 작성하지 않은 코드와 결과 값은 밑에 적도록 하겠다**)하여야 한다.
이러한 문제점은 apply를 사용하면 바로 해결이 된다!!

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
function sum() {
    var _sum=0;
    for(name in this){
        _sum += this[name]
    }
    return _sum;
}
o1={val1:1, val2:2, val3:3, sum:sum}
o2={v1:10,v2:50,v3:100,v4:25, sum:sum}

console.log(o1.sum());
console.log(o2.sum());
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
6function sum() {
    var _sum=0;
    for(name in this){
        _sum += this[name]
    }
    return _sum;
}
185function sum() {
    var _sum=0;
    for(name in this){
        _sum += this[name]
    }
    return _sum;
}
```
