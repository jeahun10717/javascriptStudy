# JAVASCRIPT "studied by 드림코딩"</br>javascript part 1

## 1. javascript와 html

javascript 와 html 파일을 연결하여 프론트엔드 작업을 할 때 소스의 구성에 따라 페이지의 로드 속도가 다를 수 있다. 밑에서 여러 종류의 js와 html 파일의 연결을 알아보고 어떻게 사용하는 게 효율적인지 알아보자.

### 1. head 에 js 파일 링크(src)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <script src="main.js"></script>
    </head>
    <body></body>
</html>
```

<img src="./imgFolder/DRCD_js_IMG1.png">

* **기능**</br>
위의 방식은 제일 기본적인 js 파일을 로드하는 방식이다. html 파일을 리딩하는 도중 js 파일을 만나면 js 파일을 먼저 리딩하고 실행하는데 이 js 파일을 다루는 시간에 html 파일리딩은 멈추게 된다.
* **장점**</br>
가장 기본적인 js 파일을 가져오는 방식이다
* **단점** </br>
위의 방식으로 실행 될 때 만약 js 파일의 덩치가 엄청나게 크다면 페이지를 로드할 때 js 파일을 로드하는 시간동안은 페이지 로드가 막히게 된다. 이 block 이 되는 시간이 길어지면 길어질수록 사용자는 불편해 진다.

### 2. body 에 js 파일 링크(src)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
    </head>
    <body>
      <script src="main.js"></script>
    </body>
</html>
```

<img src="./imgFolder/DRCD_js_IMG2.png">

* **기능**</br>
위의 방식은 html 의 모든 소스를 리딩한 후 페이지가 준비된 상태에서 js 파일을 리딩하고 실행한다.
* **장점**</br>
위의 방식으로 사용할 때 js 파일을 다루기 전에 이미 페이지의 로드를 마쳐놓았기 때문에 js 파일의 크기가 크더라도 사용자 입장에서는 이미 로드가 끝나게 되었기 때문에 불편이 줄어든다.
* **단점**</br>
사용자가 html의 기본적인 컨텐츠를 빨리 볼 수 있지만 전체 프로그램에서 js 에 의한 애니메이션 컨트롤, 서버에서 js 파일이 많은 것 등 프로그램이 js 에 대한 의존도가 높다면 프로그램 전체의 로드 속도가 느려진다.

### 3. head 에 js 파일 링크(async src)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <script async src="main.js"></script>
    </head>
    <body></body>
</html>
```

<img src="./imgFolder/DRCD_js_IMG3.png">


* **기능**</br>
위의 방식을 사용할 때 기본적으로 html 파일을 읽고 읽는 도중 js 파일을 만나면 병렬로 js 파일을 읽는다. 이후 html파일 중 js 가 속해 있는 소스까지 리딩이 끝나는 시점에 js 파일을 실행한다. 이후 html 파일을 마저 리딩한다.
* **장점**</br>
이렇게 한다면 fetching이 html 을 읽는 도중에 일어난다. 이렇게 되면 기존 src 방법에서 js파일을 리딩(fetching)할 때 멈춰 있는 것에 반해 위의 방식은 html을 읽을 수 있어서 전체 시간에 있어서 이득을 볼 수 있다.
* **단점**</br>
js 파일을 읽고 실행할 때 이후의 html 을 읽지 않았기 때문에 호이스팅 부분에서 문제가 생길 수 있다. 또한 js 파일의 실행시간동안 소스의 리딩이 멈추기 때문에 js 파일의 실행시간이 길다면 사용자가 기다리는 시간이 길어질 수 있다.

### 4. head 에 js 파일 링크(defer src)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <script defer src="main.js"></script>
    </head>
    <body></body>
</html>
```

<img src="./imgFolder/DRCD_js_IMG4.png">


* **기능**</br>
html 파일을 읽는 동안 js 파일을 리딩(fetching)한다. 이후 html 파일의 리딩이 끝났을 때 미리 리딩해 두었던 js 파일을 실행한다.
* **장점**</br>
이러한 방식이 js 파일이 많을 때 가장 효율적이며 가장 많이 쓰는 방법이다.
* **단점**</br>
대부분의 상황에서 이 defer 가 장점으로 작용한다. 단점이 없다고 볼 수는 없으나 크게 체감하지 못한다.


### 5. asnyc 와 defer 의 성능차이

asnyc와 defer 의 기능상의 차이를 알아보자

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <script async src="a.js"></script>
        <script async src="b.js"></script>
        <script async src="c.js"></script>
    </head>
    <body></body>
</html>
```

<img src="./imgFolder/DRCD_js_IMG5.png">


* **asnyc의 문제점 1**<br>
위의 도표에서 볼 수 있듯 js 실행블록에서 다른 작업을 하지 못하여 시간낭비가 심하다.
* **asnyc의 문제점 2**<br>
만약 a.js 파일이 먼저 실행이 되어야 b.js 파일을 실행 할 수 있을 때 위의 도표에서 b.js 를 먼저 실행하였으므로 오류가 뜰 가능성이 높다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <script defer src="a.js"></script>
        <script defer src="b.js"></script>
        <script defer src="c.js"></script>
    </head>
    <body></body>
</html>
```

<img src="./imgFolder/DRCD_js_IMG6.png">


위의 도표에서 알 수 있듯이 defer는 js 파일을 fetching할 때 순서대로 끝나지는 않지만 실행은 html 의 모든 소스를 리딩한 후 선언순서대로 하기 때문에 asnyc에서 나타난 문제가 나타나지 않는다.
