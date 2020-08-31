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

#### 1. 생성자<span style="font-size : 12px"> Object</span>

<span style = "font-size:small">**[SOURCE]**</span>
```javascript
function person(){}
var p1=person()
var p2=new person()
console.log(p1, p2);
```

<span style = "font-size:small">**[CONSOLE]**</span>
```
undefined person {}
```

위의 코드에서 `p1` 변수에 함수를 저장하면 현재 `person()` 이라는 함수에 리턴값이 없으므로 `undefined` 가 출력된다.
하지만 밑의 `new` 기능을 사용하여 `p2` 변수에 저장하면 `person{}` 이라고 하는 객체가 나오게 된다.
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
