# <span style= 'font-size : 60px'>\*추가공부</span>
## 1. 탬플릿 스트링(templete string)
---
1.  ''기호 사용시

let test1 = '사과'
```javascript
let test2 = '바나나'

console.log(test1+' '+test2)
```

```
PS D:\2. 공부&&과제\nodejs_study> node test123.js
사과 바나나
```

2.  \`\`(탬플릿 스트링) 사용시

```javascript
let test1 = '사과'
let test2 = '바나나'

console.log(`${test1} ${test2}`)
```

```
PS D:\2. 공부&&과제\nodejs_study> node test123.js
사과 바나나
```

위의 2개의 코드에서 볼 수 있듯 기존의 '' 기호나 "" 기호는 공백을 +기호로 따로 표현해야 하나
\` \`기호는 \` \`가 감싸고 있는 공백은 바로 출력 가능하다

## 2. 정규표현식
---
### 1.1 `string`
<span style="color: rgb(34, 139, 180); font-size: 13px;">   string 문자열 그대로 탐</span>

**source : who is who**

Regular Expression : `who`

First Match : `who` is who

All Match : `who` is `who`

### 1.2 `^string`
<span style="color: rgb(34, 139, 180); font-size: 13px;">   문자열 중에 처음으로 나온 string</span>

**source : who is who**

Regular Expression : `^who`

First Match : `who` is who

All Match : `who` is who

### 1.3 `string$`
<span style="color: rgb(34, 139, 180); font-size: 13px;">   문자열 중에 마지막으로 나온 string</span>

**source : who is who**

Regular Expression : `who$`

First Match : who is `who`

All Match : who is `who`

#### example : 1.1~1.3

&emsp;**source : \$12\$\\-\\\$25\$**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `^$`(기능문자+기능문자 이므로 작동 안됨)
&emsp;&emsp;&emsp;&emsp;First Match : \$12\$\\-\\\$25\$
&emsp;&emsp;&emsp;&emsp;All Match : \$12\$\\-\\\$25\$

<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `\$`(기능문자+기능문자를 사용하려면 \\(백틱)사용)
&emsp;&emsp;&emsp;&emsp;First Match : `$`12\$\\-\\\$25\$
&emsp;&emsp;&emsp;&emsp;All Match : `$`12`$`\\-\\`$`25`$`

<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `^\$`
&emsp;&emsp;&emsp;&emsp;First Match : `$`12\$\\-\\\$25\$
&emsp;&emsp;&emsp;&emsp;All Match : `$`12\$\\-\\\$25\$

<span style='color : rgb(34, 139, 180)'>case4 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `\$$`
&emsp;&emsp;&emsp;&emsp;First Match : \$12\$\\-\\\$25`$`
&emsp;&emsp;&emsp;&emsp;All Match : \$12\$\\-\\\$25`$`

### 2.1 `.`
<span style="color: rgb(34, 139, 180); font-size: 13px;">모든 종류의 문자열 탐색</span>

**source : I love apple!!!!!**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `.`
&emsp;&emsp;&emsp;&emsp;First Match : `I` love apple!!!!!
&emsp;&emsp;&emsp;&emsp;All Match : `I love apple!!!!!`
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `...`<span style='color : rgb(34, 139, 180); font-size : small'>  (3개 단위로 끊어서 탐색)</span>
&emsp;&emsp;&emsp;&emsp;First Match : `I l`ove apple!!!!!
&emsp;&emsp;&emsp;&emsp;All Match : `I love apple!!!`!!

### 2.1 `[string]`
<span style="color: rgb(34, 139, 180); font-size: 13px;">대괄호 안의 문자중  하나라도 존재하면 탐색->[stirng]은 1개의 문자 탐색</span>

**source : How do you do?**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[oyu]`
&emsp;&emsp;&emsp;&emsp;First Match : H`o`w do you do?
&emsp;&emsp;&emsp;&emsp;All Match : H`o`w d`o you` d`o`?
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[dH].`
&emsp;&emsp;&emsp;&emsp;First Match : `Ho`w do you do?
&emsp;&emsp;&emsp;&emsp;All Match : `Ho`w `do` you `do`?
<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[owy][yow]`
&emsp;&emsp;&emsp;&emsp;First Match : H`ow` do you do?
&emsp;&emsp;&emsp;&emsp;All Match : H`ow` do `yo`u do?

### 2.2 `[char1-char2]`
<span style="color: rgb(34, 139, 180); font-size: 13px;">char1~char2 사이의 문자열중 1개 탐색</span>

**source : ABCDEFGHabcdefgh1234567**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[C-G]`
&emsp;&emsp;&emsp;&emsp;First Match : AB`C`DEFGHabcdefgh1234567
&emsp;&emsp;&emsp;&emsp;All Match : AB`CDEFG`Habcdefgh1234567
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[C-Ha-d4-6].`
&emsp;&emsp;&emsp;&emsp;First Match : AB`C`DEFGHabcdefgh1234567
&emsp;&emsp;&emsp;&emsp;All Match : AB`CDEFGHabcd`efgh123`456`7

### 2.3 `[^string]`
<span style="color: rgb(34, 139, 180); font-size: 13px;">string안의 모든 문자열을 제외한 문자열 탐색</span>

**source : ABCDEFGHabcdefgh1234567**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[^CDEFefgh1237]`
&emsp;&emsp;&emsp;&emsp;First Match : `A`BCDEFGHabcdefgh1234567
&emsp;&emsp;&emsp;&emsp;All Match : `AB`CDEF`GHabcd`efgh123`456`7
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[^C-1]`
&emsp;&emsp;&emsp;&emsp;First Match : `A`BCDEFGHabcdefgh1234567
&emsp;&emsp;&emsp;&emsp;All Match : `AB`CDEFGHabcdefgh1`234567`

### 2.4 `[stirng 1|string 2|......|stirng N]`
</br><span style="color: rgb(34, 139, 180); font-size: 13px;">string 1, string 2,...,stirng N 안의 문자열들 중 하나라도 일치하면 탐색</span>

**source : Monday Tuesday Friday**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[on|ues|rida]`
&emsp;&emsp;&emsp;&emsp;First Match : M`on`day Tuesday Friday
&emsp;&emsp;&emsp;&emsp;All Match : M`on`day T`ues`day F`rida`y
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[Mon|Tues|Fri]day`
&emsp;&emsp;&emsp;&emsp;First Match : `Monday` Tuesday Friday
&emsp;&emsp;&emsp;&emsp;All Match : `Monday` `Tuesday` `Friday`
<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `..[id|esd|nd]ay`
&emsp;&emsp;&emsp;&emsp;First Match : `Monday` Tuesday Friday
&emsp;&emsp;&emsp;&emsp;All Match : `Monday` `Tuesday` `Friday`

### 3.1 `*`, `+`, `?`
<span style="color: rgb(34, 139, 180); font-size: 13px;"></span>

**source : aabc abc bc**
<span style='color : rgb(34, 139, 180);'>case1 : `*` : <span style="color: rgb(34, 139, 180); font-size: small;">b 기준으로 앞에 a가 **0개~N개** 존재하면 블럭선택(b는 반드시 선택됨)</span></span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `a*b`
&emsp;&emsp;&emsp;&emsp;First Match : `aab`c abc bc
&emsp;&emsp;&emsp;&emsp;All Match : `aab`c `ab`c `b`c
<span style='color : rgb(34, 139, 180);'>case2 : `*` : <span style="color: rgb(34, 139, 180); font-size: small;">b 기준으로 앞에 a가 **1개~N개** 존재하면 블럭선택(b는 반드시 선택됨)</span></span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `a+b`
&emsp;&emsp;&emsp;&emsp;First Match : `aab`c abc bc
&emsp;&emsp;&emsp;&emsp;All Match : `aab`c `ab`c bc
<span style='color : rgb(34, 139, 180);'>case3 : `*` : <span style="color: rgb(34, 139, 180); font-size: small;">b 기준으로 앞에 a가 **0개~1개** 존재하면 블럭선택(b는 반드시 선택됨)</span></span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `a?b`
&emsp;&emsp;&emsp;&emsp;First Match : a`ab`c abc bc
&emsp;&emsp;&emsp;&emsp;All Match : a`ab`c `ab`c bc

#### example : 3.1

**source : -@- \*\*\* -- \"\*\" -- \*\*\* -@-**

1. `*`
<span style='color : rgb(34, 139, 180)'>case1 : </span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `.*`
&emsp;&emsp;&emsp;&emsp;First Match : `-@- *** -- "*" -- *** -@-`
&emsp;&emsp;&emsp;&emsp;All Match : `-@- *** -- "*" -- *** -@-`
<span style='color : rgb(34, 139, 180)'>case2 : </span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `-A*-`
&emsp;&emsp;&emsp;&emsp;First Match : -@- \*\*\* `--` \"\*\" -- \*\*\* -@-
&emsp;&emsp;&emsp;&emsp;All Match : -@- \*\*\* `--` \"\*\" `--` \*\*\* -@-
<span style='color : rgb(34, 139, 180)'>case3 : </span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[-@]*`
&emsp;&emsp;&emsp;&emsp;First Match : `-@-` \*\*\* -- \"\*\" -- \*\*\* -@-
&emsp;&emsp;&emsp;&emsp;All Match : `-@-` \*\*\* `--` \"\*\" `--` \*\*\* `-@-`
2. `+`
<span style='color : rgb(34, 139, 180)'>case1 : </span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `\*+`
&emsp;&emsp;&emsp;&emsp;First Match : -@- `*`\*\* -- \"\*\" -- \*\*\* -@-
&emsp;&emsp;&emsp;&emsp;All Match : -@- `***` -- \"`*`\" -- `***` -@-
<span style='color : rgb(34, 139, 180)'>case2 : </span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `-@+-`
&emsp;&emsp;&emsp;&emsp;First Match : `-@-` \*\*\* -- \"\*\" -- \*\*\* -@-
&emsp;&emsp;&emsp;&emsp;All Match : `-@-` \*\*\* -- \"\*\" -- \*\*\* `-@-`
<span style='color : rgb(34, 139, 180)'>case3 : </span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[^ ]`
&emsp;&emsp;&emsp;&emsp;First Match : `-@-` \*\*\* -- \"\*\" -- \*\*\* -@-
&emsp;&emsp;&emsp;&emsp;All Match : `-@-` `***` `--` `"*"` `--` `***` `-@-`
3. `?`
**source : --XX-@-XX-@@-XX-@@@-XX-@@@@-XX-@@-@@-**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `-X?XX?X`
&emsp;&emsp;&emsp;&emsp;First Match : -`-XX`-@-XX-@@-XX-@@@-XX-@@@@-XX-@@-@@-
&emsp;&emsp;&emsp;&emsp;All Match : -`-XX`-@`-XX`-@@`-XX`-@@@`-XX`-@@@@`-XX`-@@-@@-
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `-@?@?@-`
&emsp;&emsp;&emsp;&emsp;First Match : `--`XX-@-XX-@@-XX-@@@-XX-@@@@-XX-@@-@@-
&emsp;&emsp;&emsp;&emsp;All Match : `--`XX`-@-`XX`-@@-`XX`-@@@-`XX-@@@@-XX`-@@-`@@-
### 4.1 `{number 1, number 2}`
<span style="color: rgb(34, 139, 180); font-size: 13px;"> number1개 이상 number2개 이하의 갯수로 탐색 </span>

**source : One ring to bring them all and in the darkness bind them**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `.{5}` : <span style='color : rgb(34, 139, 180); font-size:small;'>5개 단위로 탐색</span>
&emsp;&emsp;&emsp;&emsp;First Match : `One r`ing to bring them all and in the darkness bind them
&emsp;&emsp;&emsp;&emsp;All Match : `One ring to bring them all and in the darkness bind th`em
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[els]{1,3}` : <span style='color : rgb(34, 139, 180); font-size:small;'>e,l,s가 1개이상 3개이하일 때 탐색</span>
&emsp;&emsp;&emsp;&emsp;First Match : On`e` ring to bring them all and in the darkness bind them
&emsp;&emsp;&emsp;&emsp;All Match : On`e` ring to bring th`e`m a`ll` and in th`e` darkn`ess` bind th`e`m
<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `[a-z]{3,}` : <span style='color : rgb(34, 139, 180); font-size:small;'>a~z 문자들중 3개이상일 때 탐색</span>
&emsp;&emsp;&emsp;&emsp;First Match : One `ring` to bring them all and in the darkness bind them
&emsp;&emsp;&emsp;&emsp;All Match : One `ring` to `bring` `them` `all` `and` in `the` `darkness` `bind` `them`

### 4.2 `*`, `+`, `?` & `{}`
  **source : AA ABA ABBA ABBBA**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `AB*A`\==`AB{0,}A`
&emsp;&emsp;&emsp;&emsp;First Match : `AA` ABA ABBA ABBBA
&emsp;&emsp;&emsp;&emsp;All Match : `AA` `ABA` `ABBA` `ABBBA`
  <span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `AB+A`\==`AB{1,}A`
&emsp;&emsp;&emsp;&emsp;First Match : AA `ABA` ABBA ABBBA
&emsp;&emsp;&emsp;&emsp;All Match : AA `ABA` `ABBA` `ABBBA`
<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `AB?A`\==`AB{0,1}A`
&emsp;&emsp;&emsp;&emsp;First Match : `AA` ABA ABBA ABBBA
&emsp;&emsp;&emsp;&emsp;All Match : `AA` `ABA` ABBA ABBBA

### 4.3 `*?`, `+?`, `.?`
<span style='color : rgb(34, 139, 180)'>case1 : `*?`</span>
<span style='color : rgb(34, 139, 180); font-size : 12px'>`*` 뒤에 `?` 가 오게되면 기존의 의미가 아님</br>여기서 `*`은 0~N개가 아닌 0개로 취급한다</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression : `r.*/`
&emsp;&emsp;&emsp;&emsp;First Match : One `r`ing to bring them all and in the darkness bind them
&emsp;&emsp;&emsp;&emsp;All Match : One `r`ing to b`r`ing them all and in the da`r`kness bind them
<span style='color : rgb(34, 139, 180)'>case2 : `+?`</span>
<span style='color : rgb(34, 139, 180); font-size : 12px'>`+` 뒤에 `?` 가 오게되면 기존의 의미가 아님</br>여기서 `*`은 1~N개가 아닌 1개로 취급한다</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `r.+?`
&emsp;&emsp;&emsp;&emsp;First Match : One `ri`ng to bring them all and in the darkness bind them
&emsp;&emsp;&emsp;&emsp;All Match : One `ri`ng to b`ri`ng them all and in the da`rk`ness bind them
<span style='color : rgb(34, 139, 180)'>case3 : `.?`</span>
<span style='color : rgb(34, 139, 180); font-size : 12px'>`?` 뒤에 `?` 가 오게되면 기존의 의미가 아님</br>여기서 `*`은 0~1개가 아닌 0개로 취급한다</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `r.??`
&emsp;&emsp;&emsp;&emsp;First Match : One ring to bring them all and in the darkness bind them
&emsp;&emsp;&emsp;&emsp;All Match : One ring to bring them all and in the darkness bind them

**`수량자 + ?` 의 사용이유**
**source \<div>test1\</div>\<div>test2\</div>**
위의 소스코드에서 ```<div>txt</div>``` 부분을 추출 하고 싶을 때
<span style='color : rgb(34, 139, 180)'>problem source :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : ```<div>.+<div>```
&emsp;&emsp;&emsp;&emsp;First Match : `<div>test1</div><div>test2</div>`
&emsp;&emsp;&emsp;&emsp;All Match : `<div>test1</div><div>test2</div>`
<span style='color : rgb(34, 139, 180)'>solution source :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `<div>.+?</div>`
&emsp;&emsp;&emsp;&emsp;First Match : `<div>test1</div>`\<div>test2\</div>
&emsp;&emsp;&emsp;&emsp;All Match : `<div>test1</div>` `<div>test2</div>`

<span style="color:darkviolet">위의 case1 같은 경우 나는 앞의 `<div>test1</div>`과 `<div>test2</div>`를 따로 탐색하고 싶은데 같이 탐색이 되어버렸다. 이 같은 경우를 **Greedy Quantifier(탐욕스러운 수량자)** 라고 한다</span>
<span style="color:darkviolet">이러한 **Greedy Quantifier**문제를 해결하기 위해`수량자 + ?`를 사용한다. 이렇게 되면 원하는 대로 탐색이 가능하다. 이를 **Lazy Quantifier(게으른 수량자)** 라고 한다</span>

###5.1 `\w`
<span style="color: rgb(34, 139, 180); font-size: 13px;"> a~z, A~Z, 0~9, _를 포함하는 문자열 탐색</span>

**source : A1 B2 c3 d_4 e:5 ffGG77 --__\_--**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\w`
&emsp;&emsp;&emsp;&emsp;First Match : `A1` B2 c3 d_4 e:5 ffGG77 \-\-\_\_\_\-\-
&emsp;&emsp;&emsp;&emsp;All Match : `A1` `B2` `c3` `d_4` `e`:`5` `ffGG77` \-\-`___`\-\-
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\w*`
&emsp;&emsp;&emsp;&emsp;First Match : `A1` B2 c3 d_4 e:5 ffGG77 \-\-\_\_\_\-\-
&emsp;&emsp;&emsp;&emsp;All Match : `A1` `B2` `c3` `d_4` e:5 ffGG77 \-\-\_\_\_\-\-
<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `[a-z]\w*`
&emsp;&emsp;&emsp;&emsp;First Match : A1 B2 `c3` d_4 e:5 ffGG77 \-\-\_\_\_\-\-
&emsp;&emsp;&emsp;&emsp;All Match : A1 B2 `c3` `d_4` e:5 `ffGG77` \-\-\_\_\_\-\-
<span style='color : rgb(34, 139, 180)'>case4 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\w{5}`
&emsp;&emsp;&emsp;&emsp;First Match : A1 B2 c3 d_4 e:5 `ffGG7`7 \-\-\_\_\_\-\-
&emsp;&emsp;&emsp;&emsp;All Match : A1 B2 c3 d_4 e:5 `ffGG7`7 \-\-\_\_\_\-\-
<span style='color : rgb(34, 139, 180)'>case5 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `[A-z0-9_]`  (`\w`와 완전히 일치)
&emsp;&emsp;&emsp;&emsp;First Match : `A1` B2 c3 d_4 e:5 ffGG77 \-\-\_\_\_\-\-
&emsp;&emsp;&emsp;&emsp;All Match : `A1` `B2` `c3` `d_4` `e`:`5` `ffGG77` \-\-`___`\-\-

###5.2 `\W`
<span style="color: rgb(34, 139, 180); font-size: 13px;"> a~z, A~Z, 0~9, _를 제외한 문자열 탐색 ==> `\w`와 정 반대</span>

**source : AS _34:AS11:23@#%12^\***
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\W`
&emsp;&emsp;&emsp;&emsp;First Match : AS` `_34:AS11:23@#%12^\*
&emsp;&emsp;&emsp;&emsp;All Match : AS` `_34`:`AS11`:`23`@#%`12`^*`
<span style='color : rgb(34, 139, 180)'>case2 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\w`
&emsp;&emsp;&emsp;&emsp;First Match : `AS` _34:AS11:23@#%12^\*
&emsp;&emsp;&emsp;&emsp;All Match : `AS` _`34`:`AS11`:`23`@#%`12`^\*
<span style='color : rgb(34, 139, 180)'>case3 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `[^A-z0-9_]` (`\W`와 완전히 동일)
&emsp;&emsp;&emsp;&emsp;First Match : AS` `_34:AS11:23@#%12^\*
&emsp;&emsp;&emsp;&emsp;All Match : AS` `_34`:`AS11`:`23`@#%`12`^*`

###5.3 `\d`, `\D`
<span style="color: rgb(34, 139, 180); font-size: 13px;"> 0-9의 숫자만 탐색</span>

**source : page : 123; clientID : ann14, mark3, jame!@#**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
<span style='color : rgb(34, 139, 180); font-size : 12px'>`\d` 는 숫자만을 포함하는 문자열</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\d`
&emsp;&emsp;&emsp;&emsp;First Match : page : `123`; clientID : ann14, mark3, jame!@#
&emsp;&emsp;&emsp;&emsp;All Match : page : `123`; clientID : ann`14`, mark`3`, jame!@#
<span style='color : rgb(34, 139, 180)'>case1 :</span>
<span style='color : rgb(34, 139, 180); font-size : 12px'>`\D` 는 숫자를 제외한 문자열</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\D`
&emsp;&emsp;&emsp;&emsp;First Match : `page : `123; clientID : ann14, mark3, jame!@#
&emsp;&emsp;&emsp;&emsp;All Match : `page : `123`; clientID : ann`14`, mark`3`, jame!@#`
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `[0-9]` (`\d`와 완전히 동일)
&emsp;&emsp;&emsp;&emsp;First Match : page : `123`; clientID : ann14, mark3, jame!@#
&emsp;&emsp;&emsp;&emsp;All Match : page : `123`; clientID : ann`14`, mark`3`, jame!@#

###6.1 `\b`
<span style="color: rgb(34, 139, 180); font-size: 13px;"> 단어의 시작점이나 끝 탐색</span>

**source : It will be fine tommorow**
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\b\w`
&emsp;&emsp;&emsp;&emsp;First Match : `I`t will be fine tommorow
&emsp;&emsp;&emsp;&emsp;All Match : `I`t `w`ill `b`e `f`ine `t`ommorow
<span style='color : rgb(34, 139, 180)'>case1 :</span>
&emsp;&emsp;&emsp;&emsp;Regular Expression1 : `\w\b`
&emsp;&emsp;&emsp;&emsp;First Match : I`t` will be fine tommorow
&emsp;&emsp;&emsp;&emsp;All Match : I`t` wil`l` b`e` fin`e` tommoro`w`

## for of / for in 구문
## arrow 함수
## new와 생성자
## this 속성
## 생성자 함수 : var 변수 = new Function('','','', '본문')
## 함수의 선언종류
## for each, map, filter
## sort() 메소드
## 콜백 함수
## closure 자세히
## apply와 call 메소드
