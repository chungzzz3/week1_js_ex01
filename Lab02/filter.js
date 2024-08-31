// filter creates a new array containing only the elements

const numbers = [1, 2, 3, 4];
const isEvens = (number) => {
        return number % 2 === 0
    }
    //const isEvens = (number) => number % 2 === 0
const evens = numbers.filter(isEvens);
console.log(evens);
//------use foreach
let arr = []
const evensUseForeach = numbers.forEach(element => {
    if(element%2 === 0) 
        arr.push(element);
});
console.log(arr);


//------------------------------------------------------------------
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];



const under90 = students.filter((item) => {
    return item.grade < 90
})
console.log('Under 90 : ' + under90);

//format
const isU90 = function(item) {
    return item.grade <= 90 //return///
}
const u90Arr = students.filter(isU90)
console.log(u90Arr)
    // const isU90 = (arr) => arr.grade <= 90; 
    // const u90Arr = students.filter(isU90);
    // console.log(u90Arr)
    // u90Arr.forEach(item => console.log(item.grade))