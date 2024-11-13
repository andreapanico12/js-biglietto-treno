const distance = parseInt( prompt("Kilometers to travel") );
const passengerAge = parseInt( prompt ("Passenger age"));

console.log('Distance: ' , distance);
console.log( 'Age', passengerAge );

const fullPrice = (distance * 0.21);

console.log ('Price' , fullPrice);

const underagePrice = ( fullPrice - (fullPrice * 0.2));

console.log ( 'Underage Price' , underagePrice);

const overagePrice = ( fullPrice - (fullPrice * 0.4));

console.log ( 'Over 65 Price' , overagePrice);





