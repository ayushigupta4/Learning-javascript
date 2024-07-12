const arr = [5,4,3,2,1];

const output = arr.map(function(x) {
    return 2*x;
})

console.log(output);

function triple(x) {
    return 3*x;
}

console.log(arr.map(triple));

