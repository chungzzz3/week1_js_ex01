let temp = [17,21,23]
let temp1 = [12, 5, -5, 0, 4];

let printForecast = (arr) =>{
    var toStringForecast = []
    arr.forEach(element => {
        let index = arr.indexOf(element)
        toStringForecast.push(` ${element}ºC in ${index + 1} days`)
    });
    var result = toStringForecast.join(',');
    //var result = toStringForecast.toString();
    console.log(result);
}
printForecast(temp)
printForecast(temp1)