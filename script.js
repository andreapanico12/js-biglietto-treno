// =================SOLUZIONE 1 =============================
// const distance = parseInt( prompt("Kilometers to travel") );
// const passengerAge = parseInt( prompt ("Passenger age"));

// console.log('Distance: ' , distance, "Km");
// console.log( 'Age:', passengerAge );

// const fullPrice = (distance * 0.21);

// // console.log ('Price' , fullPrice);

// const underagePrice = ( fullPrice - (fullPrice * 0.2));

// // console.log ( 'Underage Price' , underagePrice);

// const overagePrice = ( fullPrice - (fullPrice * 0.4));

// // console.log ( 'Over 65 Price' , overagePrice);


// if ( passengerAge < 18 ) {

//   console.log ( "Price:",  underagePrice.toFixed(2), '€' )

// } else if ( passengerAge >= 65) {

//   console.log ( "Price:", overagePrice.toFixed(2), '€' )

// } else {

//   console.log ("Price:", fullPrice.toFixed(2), '€' )
// };

// =====================SOLUZIONE 2 ================================
// const distance = parseInt( prompt("Kilometers to travel") );
// const passengerAge = parseInt( prompt ("Passenger age"));

// console.log('Distance: ' , distance, "Km");
// console.log( 'Age:', passengerAge );


// const KmCost = 0.21;
// const UrDiscount = 20;
// const OvDiscount = 40;

// const fullPrice = (distance * KmCost);
// const underagePrice = (fullPrice - ((fullPrice / 100) * UrDiscount ));
// const overagePrice = (fullPrice - ((fullPrice / 100) * OvDiscount ));

// if (passengerAge < 18) {
//   console.log ( "Price:", underagePrice.toFixed(2), '€')
// } else if (passengerAge >= 65) {
//   console.log ( "Price:" , overagePrice.toFixed(2) , '€')
// } else {
//   console.log ( "Price:" , fullPrice.toFixed(2), '€')
// }

// =======================SOLUZIONE 3================================
const distance = parseInt( prompt("Kilometers to travel") );
const passengerAge = parseInt( prompt ("Passenger age"));

console.log('Distance: ' , distance, "Km");
console.log( 'Age:', passengerAge );


const kmCost = 0.21;
const UrDiscount = 20;
const OvDiscount = 40;

if (passengerAge < 18 ) {
  const price = ( (distance * kmCost) - ((distance * kmCost / 100) * UrDiscount));
  console.log ("Ticket price:", price.toFixed(2), '€' )
} else if (passengerAge >= 65){
  const price = ((distance * kmCost)- ((distance * kmCost / 100) * OvDiscount));
  console.log ("Ticket price:", price.toFixed(2), '€' )
} else {
  const price = (distance * kmCost)
  console.log ("Ticket price:" , price.toFixed(2), '€')
};




