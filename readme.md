# 이 git 파일 안에 있는 문서들은 javascript 를 공부하면서 정리한 것을 올린다

* 기본적으로 md 파일과 관련 img.png 파일을 올린다
* editor는 기본적으로 atom 을 사용하였고 코드의 실행은 node.js 환경이다.
* editor 가 atom 이므로 git 의 viewer에서 호환이 되지 않을 수도 있으므로 html 파일도 같이 올린다
* 파일들의 index는 간략히 이 곳에 정리해 두었다(readme.md)

## addStudy index
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

## javascriptBySHCD1 index
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

## javascriptBySHCD2 index
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

## javascriptBySHCD3 index
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
