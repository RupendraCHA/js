let cart = ["Shoes", "Jeans", "Shirts"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.orderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

const GitHub_API = "https://api.github.com/users/RupendraCHA"

const user = fetch(GitHub_API)

console.log(user)

user.then(function(data) {
    console.log(data)
})

