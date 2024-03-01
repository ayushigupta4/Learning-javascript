//Async fn always return a promise
// async function getData() {
//     return "Namastey";
// }

// const dataPromise = getData();

// dataPromise.then(res => console.log(res));

const p = new Promise((resolve,reject) => {
    setTimeout(() => 
    {
        resolve("Promise resolved value");
    }, 5000);
    
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => 
    {
        resolve("Promise resolved value 2");
    }, 10000);
    
});


// async function getData2() {
//     return p;
// }

// const dataPromise2 = getData2();
// dataPromise2.then(res => console.log(res));

async function handlePromise() {
    
    const val = await p;
    console.log("Namaste Javascript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste Javascript 2");
    console.log(val2);
}

handlePromise()
    .catch((error) => {console.error(error);});