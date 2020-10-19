# javascript Study By CoreJavascript

## 1. Scope(유효범위)
scope 란 변수가 동작할수 있는 범위를 말한다. 해당범위 내에서만 변수를 접근, 초기화등을 할 수 있다. ES5 까지의 javascript 의 Scope 는 function Scope 밖에 없었다. 변수의 유효범위를 설정하는 기준이 함수가 되는 것이다. 하지만 ES6 이후 block(`{}`) 을 기준으로 Scope 를 설정하게 된다. 이러한 block scope를 지원하는 변수 선언이 let 과 const 이다. ES5 까지의 function scope 의 소스를 보자.


### 1. Var Scope
ES6 이전과 이후에 scope 의 기준이 달라졌다. 따라서 javascript 에서는 var 는 ES5 까지의 Scope(function scope), let과 const 는 ES 6 이후의 Scope(Block Scope) 를 지원한다고 보면 된다.

**[SOURCE]**
```javascript
function funcBlock(p) {
    console.log(v);//[1]
    if(p){
        var v='blue'
        console.log(v);//[2]
    } else {
        var v='red'
        console.log(v);//[3]
    }
    console.log(v);//[4]
}

funcBlock(10)
```

**[CONSOLE]**
```
undefined
blue
blue
```

위의 소스에서 [1] 부분은 var hoisting 에 의해서 변수는 선언되었지만 값이 없기 때문에 `undefined` 가 도출된다. [2] 부분은 변수를 받아오면 무조건 `if` 문은 참이므로 `blue` 가 도출된다. [3] 은 출력되지 않으며, [4] 는 function scope 때문에 함수 내에서 사용되었던 변수 `v` 의 값인 `blue` 가 출력된다. 그렇다면 ES6 이후에 적용된 `let` 을 써보자.

**[SOURCE]**
```javascript
function funcBlock(p) {
    console.log(v);
    if(p){
        let v='blue'//[1]
        console.log(v);
    } else {
        let v='red'
        console.log(v);
    }
    console.log(v);
}

funcBlock(10)
```

**[CONSOLE]**
```
ReferenceError: v is not defined
```

위의 소스는 당연히 오류가 뜨게 된다. `let` 의 scope 는 block(`{}`) 인데 [1] 부분에서 block은 if문의 것이므로 다른 곳(if문 밖)에서 접근하면 접근이 불가하다. 이러한 `let` 은 해당 block 안에서 사용되고 바로 사라지기 때문이다. 위의 2개의 소스에서 볼 수 있듯이 var 과 let 의 scope 에는 차이가 있다. 기존의 ES6 이전의 구조를 원하면 var 를 쓰면 되고 ES6 부터는 let을 쓰면 된다. 왠만하면 let 을 쓰는 것을 추천한다.
