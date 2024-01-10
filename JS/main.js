/* Const ref to train-ticket-price */
const resultElement = document.getElementById("train-ticket-price");

/* Kilometers route */
const kmRoute = parseInt(prompt("Quanti Km devi percorrere?"));
console.log(kmRoute);

/* Client Age */
const clientAge = parseInt(prompt("Quanti anni hai?"));
console.log(clientAge);

/* Price only by km */
const priceOnlyByKm = kmRoute * 0.21;
console.log(priceOnlyByKm);

/* Calculate discounts */
