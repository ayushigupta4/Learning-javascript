const cart = ["pants", "jeans", "wallet"];

createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(error){
        console.log(error.message);
    });

function createOrder(cart) {
    const promise = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)) {
            const error = new Error("Cart is not valid!");
            reject(error);
        }

        const orderId = "abc123456";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 3000);
        }
    });

    return promise;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve,reject) {
        resolve("Payment Successful");
        // const error = new Error("Error");
        // reject(error);
    });
}