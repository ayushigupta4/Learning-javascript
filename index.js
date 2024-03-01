setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});

const arr = [5, 4, 3, 1, 6, 2];

function isEven(x){
    return x % 2 === 0;
}

function isOdd(x){
    return x % 2;
}

const output = arr.filter(isEven);
console.log(output);

const output2 = arr.filter((x) => x > 4 );
console.log(output2);

const users = [
    {firstName: "ayushi", lastName: "gupta", age: 26 },
    {firstName: "akshit", lastName: "sharma", age: 28},
    {firstName: "aditi", lastName: "jain", age: 35},
    {firstName: "tanay", lastName: "mishra", age: 26}
];

//Print all names
const output3 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output3);

//acc = {26 : 2, 28: 1, 35: 1}

const output4 = users.reduce(function (acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output4);

//First name of the people aged less that 30
const output5 = users.filter((x) => x.age < 30).map( (x) => x.firstName); //chaining
console.log(output5);

const output6 = users.reduce( function(acc, curr){
    if(curr.age < 30)
        acc.push(curr.firstName);
    return acc;
}, []);

console.log(output6);