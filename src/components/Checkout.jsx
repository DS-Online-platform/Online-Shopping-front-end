import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";


function Checkout({amount}) {
async function handleToken(token) {
console.log(token);
await axios.post("http://localhost:8080/api/payment/charge", "",
 {         
   headers: {
  token: token.id,
  amount: {amount},
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });
}
return (
<div className="App">
<Stripe
stripeKey="pk_test_51IslhoEOMRRhSlfPmGQlDnqXK9HAQdYioDt8AYsBwQZoPziV38NAVC10UKt8PGaAJeqbtiXYB7tD5fqCXajEP6mG00NBYc176B"
token={handleToken}
/>
</div>
);
}
export default Checkout;