const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve,reject) => {
    //setTimeout(() => resolve("P2 Success"), 1000);
    setTimeout(() => reject("P2 Fail"), 5000);

});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P3 Success"), 2000);
});

// Promise.all([p1,p2,p3])
//     .then((res) => console.log(res))
//     .catch((error) => {
//         console.error(error);
//     });

// Promise.allSettled([p1,p2,p3])
//     .then((res) => console.log(res))
//     .catch((error) => {
//         console.error(error);
//     });

// Promise.race([p1,p2,p3])
//     .then((res) => console.log(res))
//     .catch((error) => {
//         console.error(error);
//     });

Promise.any([p1,p2,p3])
    .then((res) => console.log(res))
    .catch((error) => {
        console.error(error);
    });