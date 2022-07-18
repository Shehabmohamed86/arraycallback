const words = ['baraa', 'kayan', 'juwayria'];
const abbrevs = words.map(function(word){
 return word.toUpperCase().split('').join('.');
})


const oddNum = [3,5,7,9];
const dubbble = oddNum.map(function(d){
  return d * 2 ; 
})
const numDetail = oddNum.map(function(j){
  return {
    value : j,
    isEven : j % 2 === 0
  }
})