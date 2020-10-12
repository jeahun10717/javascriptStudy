# JAVASCRIPT "studied by 드림코딩"</br>javascript part 4

## 1. CallBack

### 1. Syncronous

javascript는 동기(Syncronous)적으로 처리가 되는 언어이다. 동기처리란 코드의 요청과 실행이 연속적으로 일어나는 것을 의미한다.

![Syncronous 도식화](./imgFolder/DRCD_js_IMG13.png)

기본적으로 javascript 는 위의 도식과 같이 동기적으로 하나의 소스가 요청한 것의 결과가 나오고 다음 소스를 요청한다. 하지만 javascript 를 비동기적으로 처리하는 메소드들이 있다.

**[SOURCE]**
```javascript
console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);

console.log('3');
```

**[CONSOLE]**
```
1
3
2
```

위의 소스에서 `setTimeout` 이라는 기능을 통해 `1000`(ms) 의 텀을 두고 실행을 하도록 했다. 그렇기 때문에 `1`, `2`, `3` 순서가 아닌 `1`, `3`, `2` 순서로 출력된 것이다. 이러한 것을 비동기(Asnycronous) 처리 라고 한다. 또한 위의 `setTimeout` 안에서 쓰인 함수는 지정된 시간동안 실행되지 않고 기다렸다가 실행되는데 이러한 함수를 콜백함수(CallBack Function)라고 한다. 하지만 이러한 콜백함수는 비동기에서만 쓰이는 것은 아니다. 동기적으로 사용할 때도 사용을 하는데 아래 내용을 보자.

* **Syncronous callback**
**[SOURCE]**
```javascript
console.log('1');
setTimeout(()=>console.log('hello?'), 1000);
console.log('3');

function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello?'));
```

**[CONSOLE]**
```
1
3
hello?
2
```
위의 소스에서 콜백함수는 print 이다. print 라는 콜백함수는 인자를 받기를 기다리고 있다가 printImmediately 함수의 실행부에서 애로우 함수를 인자로 전달받고 실행된다. 따라서 동기적으로 console.log('1'), console.log('1'), printImmediately() 가 차례로 실행되고 대기하고 있던 비동기함수 setTimeout 이 실행된 것이다.

* **Asyncronous callback**
**[SOURCE]**
```javascript
console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);

console.log('3');

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async callback'), 2000);
```

**[CONSOLE]**
```
1
3
2
async callback
```
위의 소스는 printWithDelay 라고 하는 함수를 콜백함수를 받아서 사용하도록 만들었다. 또한 함수 안에 setTimeout 함수를 통해 비동기적으로 사용할수 있도록 만들었다. 위의 소스를 도식화 하면 아래와 같다.

![Asyncronous callback function](./imgFolder/DRCD_js_IMG14.png)

여기서 콜백함수의 특징을 알 수 있다.
1. 콜백함수는 실행하는 타이밍을 사용자가 설정할 수 있다.
2. 콜백함수는 함수를 변수처럼 함수의 인자로 전달할 수 있다.
3. 콜백함수는 동기와 비동기에서 모두 사용된다.

콜백함수는 위와 같이 유용하게 사용할 수 있지만 콜백함수를 연속적으로 남발하면 문제가 발생한다. 아래는 콜백함수를 연속적으로 사용하는 소스이다.

**[SOURCE-js]**
```javascript
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id==='ellie' && password==='dream') ||
                (id==='coder' && password==='academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='ellie'){
                onSuccess({name : 'ellie', role : 'admin'});
            } else {
                onError(new Error('no access'))
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            id,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, your role is ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)
```

**[SOURCE-html]**
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="test.js" defer></script>
    </head>
    <body></body>
</html>
```

위의 소스는 아래의 역할을 수행하기 위한 소스이다.
1. `UserStorage` 라는 클래스를 선언한다.
2. `UserStorage` 는 `loginUser`, `getRoles` 라는 메소드를 가진다.
2-1. `loginUser` 는 조건문이 `true` 면 `onSuccess`(callback), 그 외는 `onError` 를 실행한다.
2.2. `getRoles` 는 받아온 `user` 가 `ellie` 면 `onSuccess`(callback), 그 외는 `onError`를 실행한다.
3. `userStorage` 라는 변수에 `UserStorage` 라는 클래스를 상속하여 객체를 만든다.
4. `prompt` 로 `id` 와 `password`를 받아온다.
5. `userStorage` 객체의 메소드인 `loginUser` 를 사용한다.
6. `loginUser` 는 `id`, `password`, `user`(callback), `error`(callback) 를 매개변수로 사용한다.
7. `user`(parameter of loginUser) 는 `user`, `userStorage.getRoles`(callback), `error`(callback) 를 매개변수로 사용한다.
8. 받아온 `id` 가 `ellie`, `coder` 일 때 `userWithRole`(callback), 그 외는 `error`(callback) 를 실행한다.

위의 과정에서 볼 수 있듯이 이런식으로 연쇄적으로 callback 을 호출하고 사용하면 이해하기도 힘들 뿐더러(소스가독성 down) 만약에 오류가 발생했을 때 어디서 오류가 발생했는지 확인하기가 어렵다(유지보수 용이성 down). 이러한 이유로 이러한 연쇄 callback 은 잘 사용하지 않고 async-await, promise 름 많이 쓴다. 이것들에 대해서 알아보자.
