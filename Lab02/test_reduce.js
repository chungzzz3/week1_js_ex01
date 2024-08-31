const donations = [20, 100, 80];

let total = donations.reduce((accumulator, currentValue) => {
    console.log('accumulator: ' + accumulator);
    console.log('currentValue: ' + currentValue);
    console.log('---------------');
    
    
    return accumulator + currentValue
}, 0)

// let total = donations.reduce((total, donation) => {
//     return total + donation;
// }, 0);
console.log( 'Total Donations: ' + total);