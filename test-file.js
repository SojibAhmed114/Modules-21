// function problem solving modules 20
//test 1
// inch to height , show Result example: height: 5 ft 3 in

function inchToFeet(inch) {
    const feet = inch / 12;
    const onlyFeets = parseInt(feet);
    const feetRemainder = inch % 12;
    const result = 'height: ' + onlyFeets  + " ft " + feetRemainder + " in";
    return result;
}

const inchData = 70;
const functionContainer = inchToFeet(inchData);
console.log(functionContainer); 