const donations = [20, 100, 80];

let total = donations.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

// let total = donations.reduce((total, donation) => {
//     return total + donation;
// }, 0);
console.log( 'Total Donations: ' + total);
//--------------------------------
const numbers = [1, 2, 3, 4, 5,3,5,6,7,4,1,43,4,6,3,2,6,2,8,4];
let totalNumbers = numbers.reduce((total, number) => {
    return total + number
}, 0)
console.log('Total numbers' + totalNumbers); 

//-----------------
let findMax = numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue
})
console.log('Max: ' + findMax);
//------------------------------------------
let calcSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(`Sum of array numbers: ${calcSum}`);


//console.log(Math.max(...numbers));
//-----------
const cart = [
    { name: 'Apple', quantity: 2, price: 3 },
    { name: 'Banana', quantity: 1, price: 1 },
    { name: 'Orange', quantity: 4, price: 2 }
  ];

let sumQuantity = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity
}, 0)
console.log(`Sum of quantity: ${sumQuantity}`);

let sumPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0)
console.log(`Sum of Price: ${sumPrice}`);



