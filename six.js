const word = ['dog', 'dig', 'log','bag', 'wag'];
const all3 = word.every(w => w.length ===3);
const allEndG = word.every(w => {
const last = w.length - 1;
return w[last] === "g";
})
const someStart = word.some(w => w[0] === 'd');



let numberSix = [3, 4, 5, 6, 7];
let numsTotal = numberSix.reduce((a, b) =>{
  return a * b ;
})
const grades = [37, 57, 82, 77, 26];
const maxGrade = grades.reduce((max, curr)=> {
  return Math.max(max, curr);
})

const minGrade = grades.reduce((min, curr)=> {
  return Math.min(min, curr);
})

