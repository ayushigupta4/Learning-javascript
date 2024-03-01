//Async fn always return a promise
async function getData() {
    return "Namastey";
}

const dataPromise = getData();

dataPromise.then(res => console.log(res));

const p = new Promise((resolve,reject) => resolve("Promise resolved value"));

async function getData2() {
    return p;
}

const dataPromise2 = getData2();
dataPromise2.then(res => console.log(res));