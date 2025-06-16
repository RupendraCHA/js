// Callback hell

const cart = ["Jeans", "Shirts", "Electronics"];

function createOrder() {}

function proceedToPayment() {}

function orderSummary() {}
function updateWallet() {}

createOrder(cart, function () {
  proceedToPayment(function () {
    orderSummary(function () {
      updateWallet();
    });
  });
});

// Async handling using callbacks causes Callback Hell & inversion of control
// to avoid this problem we use promises to handle async tasks

// const promise = createOrder(cart);

// console.log(promise)

// // console.log(promise);
// function placeOrder(){
//     try {
//         promise
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function (err) {
//     // alert(err.message)
//     console.log(err.message);
//   });
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// placeOrder()

try {
    createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .then(function (paymentInfo) {
    return orderSummary(paymentInfo);
  })
  .then(function (orderSummaryData) {
    console.log(orderSummaryData);
  })
  .catch(function (err) {
    console.log(err.message);
  });
} catch (error) {
    console.log(error)
}

function validateCart(cart) {
  return true;
}
function validateOrderId(orderId) {
  return false;
}

function validatePayment(paymentInfo){
    return false
}

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    const orderId = {
      message: true,
      orderId: "12345",
    };
    if (!validateCart(cart)) {
      const err = Error("Provide valid cart details.");

      return reject(err);
    } else {
      setTimeout(function () {
        resolve(orderId);
      }, 3000);
    }
  });
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!validateOrderId(orderId)) {
      const err = new Error("OrderId is not Valid.");

      return reject(err);
    } else {
      setTimeout(function () {
        resolve("Payment Successful");
      }, 3000);
    }
  });
}


function orderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        if(!validatePayment(paymentInfo)){
            const err = new Error("This is not a valid payment")
            reject(err)
        }else{
            const orderSummary = {
                totalItems: 5,
                totalValue: "1,23,780/-",
                deliveryAddress: "Rudravaram, S.N.Padu, Prakasam, Andhra Pradesh, 523225"
            }
            setTimeout(function(){
                resolve(orderSummary)
            }, 3000)
        }
    
    })
}