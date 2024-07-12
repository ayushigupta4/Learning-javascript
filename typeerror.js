function isNumeric(x) {
    return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
    if(!values.every(isNumeric)) {
        throw new TypeError("Parameters should be numbers");
    }

    return values.reduce((a,b) => a+b);
}

console.log(sum(1,2,3));
try {
    sum(3,"a");
} catch(error) {
    console.log(error);
}