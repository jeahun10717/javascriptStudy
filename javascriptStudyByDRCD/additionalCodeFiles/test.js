const dog = {
    name : 'mandu',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : ()=> {
        console.log(`${name} can jump`);
    },
    Symbol: Symbol('id')
}


json = JSON.stringify(dog);
const obj = JSON.parse(json, (key, value)=>{
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(dog.birthDate.getDate());
console.log(obj.birthDate.getDate());