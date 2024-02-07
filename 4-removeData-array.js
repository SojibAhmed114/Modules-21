//delete duplicate item in array.  (ata important); notin ar array list a rakha jabe.

// const friendName = ['sojib', 'rakib', 'sojib', 'shohan', 'musfik', 'sojib', 'safi', 'alomgir', 'karun', 'alomgir'];


// function duplicateDelete(number) {
//     let onlyOne = [];
//     for (const vlaues of number) {
//         if (onlyOne.includes(vlaues) === false) {
//             onlyOne.push(vlaues)
//         }
//     }
//     return onlyOne;
// }

// console.log(duplicateDelete(friendName)); 




//............practice file.........
// const friendMark = [52, 52, 24, 14, 58, 95, 32, 37, 39, 58, 32, 32, 39];

// function deleteduplicate(numbers) {
//     const outputs = [];
//     for (const number of numbers) {
//         if (outputs.includes(number) === false) {
//             outputs.push(number)
//         }
//     }
//     return outputs;
// }

// console.log(deleteduplicate(friendMark)); 


//..............more practce file............

const data = [25, 24, 25, 24, 33, 58, 58, 66, 66, 99, 99]

function arrayDataRemove(num) {
    const puts = [];
    for (const finds of num) {
        if (puts.includes(finds) === false) {
            puts.push(finds);
        }
    }
    return puts;
}

console.log(arrayDataRemove(data)); 