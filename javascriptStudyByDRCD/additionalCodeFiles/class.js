const { query } = require("express");

{
    let a = 10
    {
        let a = 20;
        console.log(a);
    }
    console.log(a);
}

console.log(a);

// function funcBlock(p) {
//     console.log(v);
//     if(p){
//         let v='blue'
//         console.log(v);
//     } else {
//         let v='red'
//         console.log(v);
//     }
//     console.log(v);
// }

// funcBlock(10)
