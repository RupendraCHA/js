// Callback hell

const cart = ["Jeans", "Shirts", "Electronics"];

function createOrder(){

}

function proceedToPayment(){

}

function orderSummary(){

}
function updateWallet(){

}

createOrder(cart, function () {
  proceedToPayment(function () {
    orderSummary(function () {
      updateWallet();
    });
  });
});

// Async handling using callbacks causes Callback Hell & inversion of control
// to avoid this problem we use promises to handle async tasks

const promise = createOrder(cart);

console.log(promise)

promise.then(function (orderId){
    console.log(orderId)
})

// Promise Chain

// promise
//   .then((paymentInfo) => proceedToPayment(orderId))
//   .then((orderId) => orderSummary(paymentInfo))
//   .then((paymentInfo) => updateWallet());

function validateCart(){
    return true
}


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject){

        if (!validateCart(cart)){
            const err = new Error("Provide valid cart details.")
            reject(err)
        }

        const orderId = {
            message: true,
            orderId: "12345"}

        if (orderId){
            // console.log(orderId)

            setTimeout(function(){

                resolve(orderId)
            },5000)
        }
    })

    return pr
}
