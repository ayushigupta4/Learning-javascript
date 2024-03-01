let name = {
    firstName: "Anushka",
    lastName: "Sharma",
}

let printName =  function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

printName.call(name, "Dehradun", "Uttrakhand");

let name2 = {
    firstName: "Virat",
    lastName: "Kohli"
}

//function borrowing
printName.call(name2, "Delhi", "");

//Apply method - arguments are passed in array list
printName.apply(name, ["Dehradun", "Uttrakhand"]);

//bind method - binds the specified method with the object and returns the copy of the method
let printFullName = printName.bind(name, "Dehradun", "Uttrakhand");
console.log(printFullName);
printFullName();
