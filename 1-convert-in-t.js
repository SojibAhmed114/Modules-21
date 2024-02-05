// page one: convert inch, feet, miles, kilometers
//inch to feet convert in javaScript:

//inch to feet convert : 12 diye vag korlei hobe.
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const inchData = 65;
const outputData = inchToFeet(inchData);
console.log("Your height:", outputData);

// way two: show height values and inch values
function inchToFeet2 (inch2) {
    const feets = inch2 / 12;
    const onlyFeet = parseInt(feets);
    const inchRemaining = inch2 % 12;
    const result = "Feet:"+ onlyFeet + " Inch:"+ inchRemaining;
    return result;
}
const number = 65;
const outputData2 = inchToFeet2 (number);
console.log(outputData2);


//miles to kilometer 
function milesToKilometer(miles) {
    const mile = miles * 1.60934;
    return mile;
}
const milesData = 65;
const outputData3 = milesToKilometer (milesData);
console.log(outputData3);


// kilometer to miles 
function kilometerToMiles(kilometer) {
    const km =  kilometer * 0.621371;
    return km;
}

const kilometerData = 65;
const outputkm = kilometerToMiles(kilometerData);
console.log(outputkm);