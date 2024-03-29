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

/* discount */
let discount;
if (!isNaN(kmRoute) && !isNaN(clientAge)) {
  /* Calculate discounts */
  /*!!!!! Underage discount */
  if (clientAge < 18) {
    discount = (priceOnlyByKm / 100) * 20;
    console.log(discount);
  } else if (clientAge >= 66) {
    /*!!!!! NO discount */
    discount = (priceOnlyByKm / 100) * 40;
    console.log(discount);
  } else if (clientAge >= 18) {
    /*  !!!!! OVER65 discount */
    discount = (priceOnlyByKm / 100) * 0;
    console.log(discount);
  }

  /* Final price */
  const finalPrice = priceOnlyByKm - discount;

  /* Print final price */
  const labelPrice =
    "Il tuo biglietto del treno costerà: " + finalPrice.toFixed(2) + "€";
  resultElement.innerText = labelPrice;
} else {
  alert(
    "Dati inseriti non corretti, inserire km con SOLO tasti numerici ed età SOLO con tasti numerici. Ricarica la pagina."
  );
}
