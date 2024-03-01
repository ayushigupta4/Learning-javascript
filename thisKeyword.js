"use strict"
console.log(this);

function x() {
    console.log(this);
}

x();

const student = {
    name: "Ayushi",
    printName : function() {
        console.log(this.name);
    }
};

const student2 = {
    name: "Sid"
};

student.printName.call(student2);