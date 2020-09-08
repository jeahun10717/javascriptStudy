# <center>JAVASCRIPT "studied by 생활코딩"</br>javascript part 3</center>


## 1.객체<span style="font-size : 18px"> Object</span>
### 1. 객체 기초
객체 안의 변수를 프로퍼티(property), 함수를 메소드(method) 라고 부른다.
밑의 코드에서 확인해 보자.

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var person = {}
person.name='egoing'
person.introduce=function () {
    return 'My name is '+this.name;
}
console.log(person.introduce());
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
My name is egoing
```

위의 코드에서 `person{}` 이라는 객체 안에 `name`이라는 객체 안의 변수인 **property**가 있고 또한 `introduce()`라고 하는 함수인 **method**가 선언되어 있다.

2. 객체를 만드는 과정에서 1. 에서 살펴본 방법은 소스가 분산되어 있다
이러한 문제를 해결하려면 밑의 코드를 참조하라

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var person={
  'name': 'egoing',
  'introduce': function(){
    return 'My name is '+this.name;
  }
}
console.log(person.introduce());
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
My name is egoing
```

### 2. 생성자와 new

#### 1. 생성자

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function person(){}
var p1=person()
var p2=new person()
console.log(p1+'\n'+p2);
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
undefined
person {}
```

위의 코드에서 `p1` 변수에 함수를 저장하면 현재 `person()` 이라는 함수에 리턴값이 없으므로 `undefined` 가 출력된다.
하지만 밑의 `new` 기능을 사용하여 `p2` 변수에 저장하면 `person{}` 이라고 하는 객체를 만들고 이를 `p2`에 저장하는 것이다.
이러한 `javascript`에서의 기능을 생성자라고 한다.

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var person1 = {
  'name':'egoing',
  introduce:function () {
    return 'My name is '+this.name;
  }
}
var person2 = {
  'name':'liali',
  introduce:function () {
    return 'My name is '+this.name;
  }
}
console.log(person1);
console.log(person2);
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
{ name: 'egoing', introduce: [Function: introduce] }
{ name: 'liali', introduce: [Function: introduce] }
```

위의 코드에서 여러사람의 정보를 각각의 객체로 생성할 경우 `introduce : function(){}` 부분은 정확히 같은 소스임에도 지속적으로 반복하여야 한다.
이러한 문제는 생성자와 `new`로 해결이 가능하다.
밑의 소스를 참고하라

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function Person(name) {
  this.name=name;
  this.introduce=function () {
    return 'My name is '+this.name;
  }
}

var p1 = new Person('egoing')
var p2 = new Person('liali')
console.log(p1);
console.log(p2);
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
{ name: 'egoing', introduce: [Function: introduce] }
{ name: 'liali', introduce: [Function: introduce] }
```

이 소스에서 볼 수 있듯 바로 위의 위 코드와는 다르게 `introduce : function(){}` 부분의 코드가 간소화 되었다.
이와 같이 생성자 함수는 객체의 초기화의 기능을 하는 것이다.
이를 통해 코드의 재사용성이 대폭 상승한다.

### 2. 전역객체<span style="font-size : 16px"> Global Object</span>

기본적으로 전역객체는 javascript 가 가지고 있는 기본 객체이다.
전역범위에 접근하기 위해 사용되며 브라우저와 node.js 에서의 환경이 조금씩 다르다.
전역객체의 사용과 환경마다 다르게 적용되는 점을 밑에서 정리하겠다.

#### 1. 브라우저 환경

<span style = "font-size:small">**[SOURCE]**</span>
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <script>
            var o = {'func':function(){
            document.write('hello?');
            }}
            o.func();
            window.o.func();
        </script>
    </body>
</html>
```

<span style = "font-size:small">**[BROWSER]**</span>

<img src="/imgFolder/javascriptBySHCD3_GlobalObjectIMG.png" ></img>

#### 2. Node.js 환경


<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var o = {
  func:function(){
    console.log('hello?');
  }
}
o.func();
global.o.func();
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
hello?
hello?
```

기본적으로 browser 환경에서 전역객체는 `window` 를 사용한다.
하지만 Node.js환경에서는 `global`이 전역객체이다. 또한 Node.js 에서는 file.js 파일 자체를 node file.js 로 실행 할 때 `global`은 전역객체로 취급을 하지 않는다. Node.js 는 기본적으로 파일 자체를 모듈로 취급하기 때문인데 이는 나중에 Node.js 공부할 때 정리하겠다
### 3. this

#### 1. 함수와 this

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function func() {
  if(global===this){
    console.log("global===this");
  }
}

func();
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
global===this
```
위의 소스에서 알 수 있듯이 `func()` 라는 함수 안에서 `this` 와 전역객체인 `global` 과 같음을 알 수 있다.

#### 2. 메소드와 this

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var o = {
  func : function(){
    if(o===this){
      console.log("o===this");
    }
  }
}
o.func();
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
o===this
```
사실 이 결과는 위의 **함수와 this**의 소스와 같은 것을 보여준다.
**함수와 this** 에서의 `func()` 의 `this` 는 브라우저에서의 `window`, nodejs에서의 `global`을 의미한다.
**2. 메소드와 this** 에서의 소스는 `o`라는 객체에 `func`라는 메소드에서의 `this`는 바로 위의 객체인 `o` 를 의미한다.

#### 3. 생성자와 this

<span style = "font-size:small">**[SOURCE]**</span>
```javascript

var funcThis = null;

function Func() {
    funcThis=this;
}
var o1=Func();
if(funcThis===global){
    console.log('global');
}

var o2=new Func();
if(funcThis===o2){
    console.log('o2');
}
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
global
o2
```

`var o1=Func()` 에서는 `Func()` 라는 함수를 실행 한 후 리턴값을 `o1` 에 저장한다.(이 때 리턴 값이 없으므로 `o1` 은 `undefined`가 뜰 것이다.)
`Func()` 라는 함수가 실행 되면 `funcThis`라는 변수에 `this`가 들어가는데 이 때 `this`는 `Func()` 라는 함수가 선언 될 때 전역이기 때문에 `global` 이 들어간다. 따라서 그 밑의 if문은 참이며 ``console.log()`` 가 실행된다.
밑의 `var o2=new Func()` 는 `Func()`라는 함수를 생성자 함수로 만들었다. 이렇게 되면 기본적으로 `Func{}` 라는 객체가 만들어 지고 이를 `o2`에 저장하는 것이다. 이에 따라 `Func()` 라는 함수를 실행하면 `this` 는 `Func{}` 라는 객체를 포함하는 객체인 `o2`를 가리킨다. 이에 따라 바로 밑의 if문은 참이며 `console.log()` 가 실행된다.

#### 4. apply와 this

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
var o={}
var p={}

function func() {
    switch (this) {
        case o:
            console.log('o');
            break;

        case p:
            console.log('p');
            break;
        case global:
            console.log('global');
            break;
    }
}

func()
func.apply(o);
func.apply(p);
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
global
o
p
```

여기서 `func()` 를 했을 때의 `func()`는 전역객체인 `global`의 메소드가 된다.
`func.apply(o)` 를 했을 때의 `func()`는 `o`의 메소드가 되며 `func.apply(p)` 를 했을 때의 `func()`는 `p` 의 메소드가 된다. 이해를 돕기 위해 밑의 그림을 참조하라.

<img src="/imgFolder/javascriptBySHCD3_applyMethodIMG.png"></img>

### 4. 상속 <span style="font-size : 12px"> inheritance</span>

javascript 에서의 상속은 상위 객체의 로직을 이어 받되 자신의 기능을 수정하고 변경하여 새로운 객체를 만들 수 있도록 도와준다.

#### 1. 상속의 기본 사용법

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function Person(name) {
    this.name=name;
}

Person.prototype.name=null;
Person.prototype.introduce=function () {
    return 'My name is '+this.name;
}

function Programmer(name) {
    this.name=name;
}
Programmer.prototype=new Person();

var p1=new Programmer('egoing')
console.log(p1.introduce());
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
My name is egoing
```

위의 `Person()` 이라는 함수 정의 밑에 `Person()` 이라는 객체(기본적으로 javascript에서의 함수는 객체로 취급한다.)에 `name`이라는 프로퍼티를 선언하면서 동시에 `introduce()` 라고 하는 메소드를 선언하였다.

```javascript
Programmer.prototype=new Person();
```

이 부분에서 `Programmer`의 `prototpye`이라는 프로퍼티에 `Person`이라고 하는 객체를 할당하였다. 이러한 할당을 상속이라고 하며 `Programmer`라고 하는 객체에 `Person`이라고 하는 객체를 상속시킨 것이다. 이에 따라 `p1.introduce()`를 하면 `p1` 이라는 변수 안에 `Programmer`라는 객체가 존재하고 `Programmer`라는 객체 안에 `Person` 이라는 객체가 존재하며 `Person` 이라고 하는 객체 안에 `introduce()` 라고 하는 메소드가 존재하므로 `p1.introduce()`는 `My name is egoing` 이라는 결과 값이 나온다.

여기서 당장 이해하기는 힘들다. `prototype` 이라는 프로퍼티에 대해서도 배우지 않았기에 추후에 이러한 프로퍼티들을 공부한 후 제대로 이해하자. 이 부분에서 중요한 것은 부모객체인 `A` 객체에 자식객체인 `B` 객체를 상속시키기 위해서는 `B.prototpye=new A` 같은 형태를 사용해야 함만을 기억하자.



#### 2. 상속하는 객체의 기능추가(자식객체의 기능추가)

바로 위의 상속의 기본 사용에서의 예제는 상속을 굳이 쓸 이유가 없다. 상속은 자식객체가 부모객체의 로직은 그대로 가지고 있되 기능을 추가하거나 수정하여 쓰는 것이 상속의 장점이다. 밑의 예제를 통해 이를 확인해 보자

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function Person(name) {
    this.name=name;
}

Person.prototype.name=null;
Person.prototype.introduce=function () {
    return 'My name is '+this.name;
}

function Programmer(name) {
    this.name=name;
}
Programmer.prototype=new Person();
Programmer.prototype.coding=function () {
    return "hello world"
}

function Designer(name) {
    this.name=name;
}
Designer.prototype=new Person();
Designer.prototype.design=function () {
    return "beautiful!"
}

var p1=new Programmer('egoing');
console.log(p1.introduce());
console.log(p1.coding());

var p2=new Designer('leeche');
console.log(p2.introduce());
console.log(p2.design());
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
My name is egoing
hello world
My name is leezche
beautiful!
```

위의 소스는 `Person` 이라는 부모객체에 `Programmer`, `Designer` 라는 자식객체를 상속시킨다.
`Person` 객체의 기본 기능은 `My name is + this.name` 이라는 문장을 console 에 출력시키는 기능이다. 자식객체인 `Programmer`와 `Designer` 역시 이러한 기능을 가지고 있지만 이 2개의 자식객체는 그 기능에 더해 `hello world` 를 출력하는 `coding`이라는 메소드, `beautiful` 을 출력하는 `design` 메소드를 추가로 가지고 있다. 이것이 상속에서 자식객체가 부모객체의 로직이나 기능은 유지하되 자신의 기능을 추가한 부분이다.

<img src="/imgFolder/javascriptBySHCD3_inheritance_diagram.png"></img>

여기서 만약 부모객체의 정보를 바꾼다면 어떻게 될까?

```javascript
Person.prototype.name=null;
Person.prototype.introduce=function () {
    return 'My name is '+this.name;
}
```

위의 이 소스를 밑의 소스로 바꾸면

```javascript
Person.prototype.name=null;
Person.prototype.introduce=function () {
    return 'My nickname is '+this.name;
}
```

밑의 결과값이 나온다.

<span style = "font-size:small">**[CONSOLE]**</span>

```
My nickname is egoing
hello world
My nickname is leezche
beautiful!
```

위의 결과와 같이 부모객체만 바꾸면 자식객체 역시 출력이 동시에 바뀐다. 이러한 점이 상속의 장점으로 볼 수 있다.

이제까지 상속에 대한 개념과 그 장점에 대해 알아보았다. 하지만 우리는 상속에 쓰이는 `prototpye` 이라는 프로퍼티에 대해 잘 알지 못한다. 밑에서 이제 그 `prototpye` 이라는 프로퍼티에 대해 알아보자.

### 5. 프로토타입<span style = "font-size : medium"> prototype</span>

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
true
```

`new` 라고 하는 속성에 대해 복기해 보자. `var 변수 = new 함수();` 이런식으로 `new` 를 쓰게 되는데 기본적으로 함수를 객체로 return 하여 변수에 저장한다고 이해했다. 하지만 그런 기능만을 가지고 있다면 `var 변수 = 객체;` 이런식으로 선언하면 되는데 굳이 `new` 를 쓰는 이유가 뭘까? 이는 `new 함수` 부분의 함수가 가지고 있는 프로퍼티나 메소드를 쓰고 싶기에 이렇게 쓰는 것이다.
이제 프로토타입에 대해서 알아보자. 프로토타입은 기본적으로 javascript 에서 객체를 상속하고 싶을 때 사용한다. 위의 소스에서 `o` 라는 변수에 `Sub()` 라는 함수를 생성자 함수로서 객체로 저장하였다. 또한 `Sub`의 `prototpye`에 `Super`를 생성자함수로서 객체로 저장하고 `Super`의 `prototpye`에 `Ultra`를 생성자함수로서 객체로 저장하였다. 또한 `Ultra` 라는 객체의 `prototpye`의 프로퍼티로 `ultraProp`에 `true`를 저장하였다. 이러한 과정을 통해 `o.ultraProp` 을 호출하면 `o`라고 객체를 포함하는 변수에 `ultraProp` 이라는 프로퍼티가 직접적으로 존재하지 않아도 호출할 수 있게 된다. 이렇게 상속을 연속적으로 `prototpye` 을 통해 발생시켜 접근할 수 있도록 하는 것을 **prototpye chain** 이라고 한다. 밑의 그림을 참고하라.

<img src="/imgFolder/javascriptBySHCD3_PrototypeChain.png" ></img>


### 6. 표준 내장 객체<span style = "font-size : medium"> Standard Built in Object</span>

표준 내장 객체란 javascript 가 기본적으로 제공하는 객체를 말한다. 우리가 정의하고 만들어낸 객체는 사용자 정의 객체라 하며 표준 내장 객체와 사용자 정의 객체를 적절히 섞어서 사용할 수도 있다.

#### 1. 표준내장객체의 기본적인 사용법

javascript 는 기본적으로 아래와 같은 내장 객체를 가지고 있다

* Object
* Function
* Array
* String
* Boolean
* Number
* Math
* Date
* RegExp

위의 내장객체에 대한 자세한 사용법은 추가공부에서 천천히 공부한다. 밑에서는 표준내장객체의 기본적인 사용법과 사용자가 수정하고 기능을 추가하는 사용자 정의 객체에 대해서 알아보자


<span style = "font-size:small">**[SOURCE]**</span>

```javascript
var arr = new Array('Seoul', 'NewYork', 'Ladarkh', 'Busan', 'Tsukuba')

function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length*Math.random());
    return arr[index];
}
console.log(getRandomValueFromArray(arr));
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
Tsukuba
//값은 랜덤으로 도출됨!
```

위의 소스는 Math, Array 등을 사용하였다. 이러한 표준내장객체 역시 **객체** 이므로 기본적으로 우리가 사용하던 객체의 형식과 문법에 맞게 사용하면 된다.

#### 2. 사용자 정의 객체의 선언과 사용법

사용자정의객체는 표준내장객체를 수정하거나 기능을 추가하여 만들 수 있다. 밑의 소스를 보자.

<span style = "font-size:small">**[SOURCE]**</span>

```javascript
Array.prototype.random = function () {
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var capitalCityArr = new Array('Seoul', 'NewYork', 'Ladarkh', 'Busan', 'Tsukuba')
console.log(capitalCityArr.random());
```

<span style = "font-size:small">**[CONSOLE]**</span>

```
NewYork
//값은 랜덤으로 도출됨!
```

위의 소스를 해석해 보자.
`Array` 라고 하는 표준내장객체의 `prototpye`에 `random()` 이라는 메소드를 선언하고 정의 하였다. 이 때 this는 이 메소드가 사용될 객체 자체를 가르키게 된다. 그렇다면 밑의 `new Array` 를 통해 만들어진 객체인 `capitalCityArr` 를 `random()` 메소드 안의 `this`가 가르키게 되는 것이다. 이렇듯 `Array.random();` 이라는 메소드는 기본적으로 존재하는 메소드가 아니고 우리가 정의하여 사용할 수 있게 되었다. 이러한 기능을 **사용자정의객체** 라고 한다. 이러한 방식으로 코드를 작성한다면 우리는 `random()` 이라고 하는 메소드가 배열과 관련된 객체인 `Array` 의 상속으로 처리되었기에 `random()` 메소드는 배열과 관련되어 있음을 간접적으로 알 수 있다.
