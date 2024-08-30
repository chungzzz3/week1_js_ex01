//the map method is used to create a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];

const square = function(element) {
    return element ** 2
}
console.log(numbers.map(square));

const squared = numbers.map(item => item ** 2) //note

//console.log(squared); // Output: [1, 4, 9, 16, 25]

const students = [
    { name: 'Alice', grade: 88 },
    { name: 'Bob', grade: 91 },
    { name: 'Charlie', grade: 79 }
];

const names = function(item) {
    return item.name
}
const nStudents = students.map(names)
console.log(nStudents);

const eNames = students.map(students => students.name)
console.log(eNames);

//const names = students.map(student => student.name);

// Output: ['Alice', 'Bob', 'Charlie']