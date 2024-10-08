// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%. 
// Your tasks: 
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement 
// �
// � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!) 
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25” 
// Test data: 
// § Data 1: Test for bill values 275, 40 and 430 
// Hints: 
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// § Value X is between 50 and 300, if it's >= 50 && <= 300
let bill1 = 275
let bill2 = 40
let bill3 = 430
let tip
let calculateTip = (bill) =>(bill >=50 && bill <=300) ? bill*0.15 : bill*0.2

let tip1 = calculateTip(bill1)
let tip2 = calculateTip(bill2)
let tip3 = calculateTip(bill3)


let total = bill1 + tip1
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value: ${total}`)
total = bill2 + tip2
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value: ${total}`)
total = bill3 + tip3
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value: ${total}`)
