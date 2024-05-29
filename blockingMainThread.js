console.log("Start");

setTimeout(function(){
    console.log("Callback function");
}, 5000);

console.log("End");

let startTime = new Date().getTime();
let endTime = startTime +10000;

while(startTime < endTime) {
    startTime = new Date().getTime();
}

console.log("While Expires");