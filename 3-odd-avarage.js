//odd average in array
function oddAverage(numbers) {
    let pus = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            pus.push(number);
        } 
    }
    let sum = 0;
    for (const num of pus) {
        sum = sum + num;
    }
    const len = pus.length;
    const abb = sum / len;
    return abb;
}

const OddStuents = [21, 52, 35, 39, 50, 41];
const avg = oddAverage(OddStuents);
console.log(avg); 



//even number average in array.
