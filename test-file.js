// function problem solving modules 20
//test 1
// inch to height , show Result example: height: 5 ft 3 in

// function inchitoFeet(inch) {
//     const feet = inch / 12;
//     const onlyFeet = parseInt(feet);
//     const showinchi = inch % 12;
//     const Result = "height:" + onlyFeet + "inchi" + showinchi;
//     return Result;
// }

// console.log(inchitoFeet(54));


// // leap year check
// function isleapYear(yearDate) {
//     if (yearDate % 100 !== 0 && yearDate % 4 === 0) {
//         const resutls = "Yes"+ yearDate + "it is a leap year"
//         return resutls;
//     }
//     else if (yearDate % 100 === 0 && yearDate % 400 === 0) {
//         const resutls = "Yes"+ yearDate + "it is a leap year"
//         return resutls;
//     }
//     else {
//         const nots = "No "+ yearDate + " it is not a leap year";
//         return nots;
//     }
// }

// console.log(isleapYear(2026));


// array even number addition
// function isEven(numbers) {
//     let datapush = [];
//     for (const number of numbers) {
//         if (number % 2 !== 1) {
//             datapush.push(number);
//         }
//     }
//     let sum = 0;
//     for (const newdata of datapush) {
//         sum = sum + newdata;
//     }
//     const avg = sum / numbers.length;
//     return avg;
// }


// const numberData = [14, 25, 36, 47, 58, 69, 22, 44, 21, 32, 31, 78];
// console.log(isEven(numberData));


const randomData = Math.ceil(Math.random() * 10);
console.log(randomData); 