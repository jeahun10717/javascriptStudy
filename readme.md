# 이 git 파일 안에 있는 문서들은 javascript 를 공부하면서 정리한 것을 올린다

* 기본적으로 md 파일과 관련 img.png 파일을 올린다
* editor는 기본적으로 atom 을 사용하였고 코드의 실행은 node.js 환경이다.
* editor 가 atom 이므로 git 의 viewer에서 호환이 되지 않을 수도 있으므로 html 파일도 같이 올린다
  * git hub에서는 html 태그가 적용이 안되는 걸로 나와있다
* 파일들의 index는 간략히 이 곳에 정리해 두었다

## [addStudy index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyBySHCD/addStudy.md)
*추가공부
* 1. 탬플릿 스트링(templete string)
* 2. 정규표현식
  * 1.1 string
  * 1.2 ^string
  * 1.3 string$
  * example : 1.1~1.3
  * 2.1 .
  * 2.1 [string]
  * 2.2 [char1-char2]
  * 2.3 ``
  * 2.4 [stirng 1|string 2|......|stirng N]
  * 3.1 *, +, ?
  * example : 3.1
  * 4.1 {number 1, number 2}
  * 4.2 *, +, ? & {}
  * 4.3 *?, +?, .?
  * 5.1 \w
  * 5.2 \W
  * 5.3 \d, \D
  * 6.1 \b

## [javascriptBySHCD1 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyBySHCD/javascriptBySHCD1.md)
JAVASCRIPT "studied by 생활코딩" javascript part 1
* 1. 함수(간략히)
  * 1. 선언
  * 2. 함수의 입출력
  * 3. 함수의 여러 호출, 선언 방법
* 2. 배열
  * 1. 선언, 요소접근
  * 2. 배열의 길이(배열과 반복문)
  * 3. 배열의 요소추가
  * 4. 배열의 제거, 정렬
    * 1. 제거
    * 2. 정렬
* 3. 객체(기초만)
  * 1. 객체와 배열
  * 2. 객체의 선언
  * 3. 객체의 요소 접근
  * 4. 객체와 반복문
* 4. javascript에서의 정규표현식
  * 1. 정규표현식의 선언
  * 2. 정규표현식의 사용
  * 3. string.match(pattern)
  * 4. string1.replace(pattern, 'string2')
  * 5. Regular Expression - option
  * 6. Regular Expression - capture
  * 7. 정규표현식의 사용 예

## [javascriptBySHCD2 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyBySHCD/javascriptBySHCD2.md)
JAVASCRIPT "studied by 생활코딩" javascript part 2
* 1. 유효범위 scope
  * 1. 지역변수와 전역변수
  * 2. 유효범위의 필요성
  * 3. 전역변수의 사용법
  * 4. 유효범위의 대상
  * 5. javascript 에서의 유효범위
* 2. 함수 function
  * 1. 값으로서의 함수
  * 2. 함수와 콜백
  * 3. 클로저 closure
    * 1. 내부함수
    * 2. 내부함수와 외부함수
    * 3. private variable
    * 4. 함수가 받는 인자의 개수 arguments 객체
    * 5. functionName.length 와 agunemts
    * 6. 함수의 호출 apply 메소드

## [javascriptBySHCD3 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyBySHCD/javascriptBySHCD3.md)

JAVASCRIPT "studied by 생활코딩" javascript part 3
* 1.객체 Object
  * 1. 객체 기초
  * 2. 생성자와 new
    * 1. 생성자
    * 2. 전역객체 Global Object
      * 1. 브라우저 환경
      * 2. Node.js 환경
  * 3. this
    * 1. 함수와 this
    * 2. 메소드와 this
    * 3. 생성자와 this
    * 4. apply와 this
  * 4. 상속 inheritance
    * 1. 상속의 기본 사용법
    * 2. 상속하는 객체의 기능추가(자식객체의 기능추가)
  * 5. 프로토타입 prototype
  * 6. 표준 내장 객체 Standard Built in Object
    * 1. 표준내장객체의 기본적인 사용법
    * 2. 사용자 정의 객체의 선언과 사용법
    * 3. 표준내장객체-Object
      * Object.method, Object.prototpye.method
    * 4. 모든 객체에서 사용할 수 있는 method 정의
    * 5. Object 확장의 위험성
* 2. 원시 데이터 타입 primitive type
* 3. 복제
  * 1. 복제
  * 2. 참조
  * 3. 함수에서의 참조와 복제

## [javascriptByDRCD1 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyByDRCD/javascriptByDRCD1.md)
JAVASCRIPT "studied by 드림코딩"
* 1. javascript와 html
  * 1. head 에 js 파일 링크(src)
  * 2. body 에 js 파일 링크(src)
  * 3. head 에 js 파일 링크(async src)
  * 4. head 에 js 파일 링크(defer src)
  * 5. asnyc 와 defer 의 성능차이
* 2. 변수 variable
  * 1. var 과 let
  * 2. const
  * 3. 변수의 자료형 variable type
  * 4. Dynamic Typing
* 3. Operators
  * 1. String Concatnation
  * 2. Numberic Operators
  * 3. Increment and Decrement Operators
  * 4. Logical Operators
  * 5. Equality
* 4. 함수 function
  * 1. Parameters
    * 1. premitive parameters, object parameters
    * 2. Default Parameters
    * 3. Rest Parameters
  * 2. Function Expression
    * 1. 함수선언식(Function Declaration)
    * 2. 함수표현식(Function Expression)
  * 3. Arrow Function
  * 4. IIFE(Immediatly Ivoked Function Expression)

## [javascriptByDRCD2 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyByDRCD/javascriptByDRCD2.md)
JAVASCRIPT "studied by 드림코딩"
* 3. Class
  * 1. Class Declaration
  * 2. Getter & Setter
  * 3. Public & Private
  * 4. static
  * 5. inheritance of Class
  * 6. instanceof(class checking)
* 4. Object
  * 1. Literals and Properties
  * 2. Computed Properties
  * 3. Property value Shorthand
  * 4. Constructor Function
  * 5. in Operator
  * 6. for in & for of
  * 7. clone

## [javascriptByDRCD3 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyByDRCD/javascriptByDRCD3.md)
JAVASCRIPT "studied by 드림코딩"
* 4. 배열 _ Array
  * 1. 배열의 선언 _ Declaration
  * 2. 배열의 접근 _ Index position
  * 3. 배열의 순회 _ Looping over an array
  * 4. 배열의 추가, 삭제 _ Addition, Deletion
  * 5. splice
  * 6. searching
* 5. JSON _ javascript 서버통신
  * 1. Object to JSON
  * 2. JSON to Object

## [javascriptByDRCD4 index](https://github.com/jeahun10717/javascriptStudy/blob/master/javascriptStudyByDRCD/javascriptByDRCD4.md)
JAVASCRIPT "studied by 드림코딩"
* 6. Asyncronous 비동기
  * 1. Syncronous & Asyncronous
  * 2. Promise
    * 1. Producer
    * 2. Consumer : then, catch, finally
    * 3. Promise Chaining
    * 4. Promise VS Callback
  * 3. Async & Await
    * 1. async
    * 2. await
    * 3. Promise APIs --> 나중에 복습할 때 다시 해 보기
