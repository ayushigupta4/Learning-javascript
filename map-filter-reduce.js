const users = [
    {firstName:"Ayushi", lastName:"Gupta", age:27},
    {firstName:"Deepika", lastName:"Padukone", age:40},
    {firstName:"Shrey", lastName:"Sharma", age:32},
    {firstName:"Gurneet", lastName:"Kaur", age:27},
];

const output = users.map((x) => x.firstName+ " " + x.lastName);
console.log(output);

const result = users.reduce((acc,curr) => {
    if(acc[curr.age]) {
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(result);

const answer = users.filter((x) => x.age>30).map((x) => x.firstName);
console.log(answer);

const outcome = users.reduce((acc,curr) => {
    if(curr.age>30) acc.push(curr.firstName);
    
    return acc;
},[]);

console.log(outcome);