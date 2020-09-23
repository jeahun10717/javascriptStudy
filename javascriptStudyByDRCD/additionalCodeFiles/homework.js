// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on("line", function(line) {
    
//     console.log('연산종류 수1 수2 형태로 입력하세요 : ');
//     rl.close();
// }).on("close", function() {
//     (function calculator(line, a, b) {
//         switch (line) {
//             case 'plus':
//                 console.log(a+b);
//                 break;
//             case 'minus':
//                 console.log(a-b);
//                 break;
//             case 'multiply':
//                 console.log(a*b);
//                 break;
//             case 'divide':
//                 console.log(a/b);
//                 break;
//             case 'remainer':
//                 console.log(a**b);
//                 break;
//             default:
//                 console.log('잘못된 command 입력입니다.');
//                 break;
//         }
//     })();
//     process.exit();
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});