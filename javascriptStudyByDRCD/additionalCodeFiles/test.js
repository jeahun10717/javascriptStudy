function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(1000);
    // throw `error`
    return 'apple'
}

async function getBanana() {
    await delay(1000);
    return 'banana'
}

// async function getBanana(){
//     return delay(1000).then(()=> 'banana')
// }

// function pickFruits() {
//     return getApple().then(apple=>{
//         return getBanana().then(banana=>`${apple} + ${banana}`)
//     });
// }

async function pickFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`
    } catch (error) {
        console.log(error);
    }
}

pickFruits().then(console.log);