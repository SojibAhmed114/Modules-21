//আজকে ডেট জানার জন্য:
const date = new Date();
console.log(date); 

//month number paite caile index number hisabe use kora lagbe
const oneDay = new Date(2025, 5, 22);
console.log(oneDay); 
oneDay.setMonth(10);
console.log(oneDay.toLocaleString()); //output:11/22/2025
console.log(oneDay.toLocaleString("en-GB")); //output:22/11/2025
