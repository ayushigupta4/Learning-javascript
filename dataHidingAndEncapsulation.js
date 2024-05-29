function Counter() {
    var count=0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementtCounter = function() {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.decrementtCounter();
