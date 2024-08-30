const donations = [20, 100, 80];

let total = donations.reduce((total, donation) => {
    return total + donation;
}, 0);
console.log(total); // 200
//--------------------------------
const numbers = [1, 2, 3, 4, 5];
let totalNumbers = numbers.reduce((total, number) => {
    return total + number
}, 0)
console.log(totalNumbers); //15