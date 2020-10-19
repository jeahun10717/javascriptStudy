function fetchUser(){
    return new Promise((resolve, reject)=>{
        //do newwork request in 10 secs...
        resolve('ellie');
    })
}
const user = fetchUser();
user.then(console.log);

//some soure of UI...