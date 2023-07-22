const prices: (number | string)[] = [1,2,3,4, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = ['dieguidev', 15];
// user = ['12', 15];

// user = [];
// user = ['dieguidev'];
// user = ['dieguidev', 12];
user = ['dieguidev', 12, true];
const [username, age] = user;
console.log(username);
console.log(age);



