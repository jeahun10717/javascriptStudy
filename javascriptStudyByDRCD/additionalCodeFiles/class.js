const user = {name : 'ellie', age : 20}
const user2 = user;
console.log(user);

const user3 = {};
Object.assign(user3, user)

user3.name='jeahun'

console.log(user3);