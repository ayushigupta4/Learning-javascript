"use strict"
console.log(this);

function x() {
    console.log(this);
}

x();
window.x();

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

const obj = {
    a: 10,
    y: () => {
        console.log(this);
    }
}

obj.y();

const obj2 = {
    r:40,
    f: function() {
        const h = () => {
            console.log(this);
        }
        h();
    }
};

obj2.f();