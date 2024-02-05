// how to check leap year
//rules one কোন সংখ্যা কে ৪ দ্বার ভাগ করে যদি ভাগশেষ না থাকে তাহলে সেই সাল লিপ ইয়ার। তবে সেটা সব সময় সত্য হয়না।
// rules one

// function isLeap(leap) {
//     if (leap % 4 === 0) {
//         return true;
//     }
//     return false;
// }
// const year = isLeap(2254);
// console.log(year); 

// rules two : মেইন নিয়ম ,, কোন সাল যদি ১০০ দিয়ে ভাগ না যায় , কিন্তু ৪ দিয়ে যায় তাহলে সে লিপ ইয়ার।
// অথবা  কোন সাল যদি ১০০ দিয়ে ভাগ যায় ,আবার ৪০০  দিয়েও যায় তাহলে সে লিপ ইয়ার।

function realLeapYear(LeapYear) {
    if (LeapYear % 100 !== 0 && LeapYear % 4 === 0) {
        return true;
    }
    else if (LeapYear % 100 === 0 && LeapYear % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const YourYears = realLeapYear(2028);
console.log(YourYears); 