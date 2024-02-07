// Math.max মানে হলো এরে এর মধ্যে সবচেয়ে বড় একটি সংখ্যা বেরা করা।

const maxValues = Math.max(14, 25, 8, 4, 5, 4, 8, 85, 8, 5, 855, 9, 9665, 45, 4, 7)
console.log(maxValues); 
//..................................
// Math.min মানে হলো এরে এর মধ্যে সবচেয়ে একটি ছোট সংখ্যা বেরা করা।

console.log(Math.min(14, 25, 8, 4, 5, 4, 8, 85, 8, 5, 855, 9, 9665, 45, 4, 7)); 

//..........................

// Math.PI পাই এর নাম
console.log(Math.PI); 

//abs এর মানে হলো মাইনেস চিহ্ন থাকলে সেটা বাদ দিয়ে দিবে । যেমন: -14 থেকে 14.

console.log(Math.abs(-5)); //output: 5
console.log(Math.abs(5 - 10));  //output: 5

// Math.round এর কাজ হলো দশমিক সংখ্যা কে নিকটবর্তী পূর্ণসংখ্যা করা । যেমন: 2.9 output: 3
console.log(Math.round(2.2)); 

//Math.floor এর কাজ হলো দশমিক সংখ্যা কে দশমিক পরের অংশ বাদ দিয়ে দিবে। যেমন: 2.9 output: 2
console.log(Math.floor(3.999)); // output: 3

//Math.ceil এর কাজ হলো দশমিক এর পরে যেকোন সংখ্যা থাকলেই তা বাদ দিয়ে পরের সংখার পূর্ণসংখ্যা  করবে। সংখ্যা যেমন: 1.0000001 output: 2
console.log(Math.ceil(1.00000001)); // output: 2

//Math.random এর কাজ হলো 0 থেকে 1 এর মধ্যে এলোমেলো ভাবে সংখ্যা দিবে।
console.log(Math.random()); 
//1 theke 10 ar moddhe caile 
console.log(Math.random() * 10); 

// 1-10 এর মধ্যে randomly বার বার পূর্ণ সংখ্যা পাইলে হলে Math.round/ceil/floor এর মধ্যে math.random ব্যবহার করলেই হবে।
const randomData = math.round(Math.random()*10)
console.log(randomData); 