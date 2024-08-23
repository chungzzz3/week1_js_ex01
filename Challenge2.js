
let markMass = 78; 
let markHeight = 1.69; 

let johnMass = 95; 
let johnHeight = 1.88; 


let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

if(markBMI > johnBMI){
    console.log("Mark's BMI (${markBMI.toFixed(1)}) higher")
} else if(johnBMI > markBMI){
    console.log("johnMBI higher")
}else{
    console.log("Same")
}
