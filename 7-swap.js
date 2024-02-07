//Swap variable মানে হলো variable এর মান গুলো কে অলদবদল করা।

let x = 100;
let y = 300;
console.log(x, y); 

const tempo = x;

x = y;
y = tempo;
console.log(x,y); 

//or

let mark1 = 500;
let mark2 = 1000;

[mark1, mark2] = [mark2, mark1];
console.log(mark1 , mark2); 



/////// more practice ...........

let sojibMarks = 20;
let KarunMarks = 10;

const temp = sojibMarks;

sojibMarks = KarunMarks;
KarunMarks = temp;

console.log(sojibMarks, KarunMarks); 