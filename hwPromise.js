const cart = ["wallet", "bag", "shoes", "shirt"];

createOrder(cart) 
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo.message);
        return showOrderSummary(paymentInfo);
    })
    .then(function(summary){
        updateWallet();
    })
    .catch(function(error){
        console.log(error);
    });

function createOrder(cart) {
    const promise = new Promise(function(resolve,reject){
        
        if(!validateCart) {
            const error = Error("Cart is not valid");
            reject(error);
        }
        else {
            const orderId = "ertyui1234567";
            resolve(orderId);
        }

    })
    return promise;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve,reject){
        const message = "Payment Succesful";
        const amount = 9876;
        resolve({message, amount});
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise(function(resolve,reject){
        console.log("Order value: ", paymentInfo.amount);
        resolve(paymentInfo.amount);
    });
}

function updateWallet(summary) {
    return true;
}