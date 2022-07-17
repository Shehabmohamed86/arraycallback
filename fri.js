const numbers = [20,21,22,23,24];
numbers.forEach(function(num){
  console.log(num * 2);
})

function tripple (n){
  console.log(n * 3);
}
numbers.forEach(tripple);

const books = [
  {
    title  : 'A good cat',
    rating : 4.43
  },
  {
    title  : 'A good dog',
    rating : 4.32
  }
]

books.forEach(function(book){
  console.log(book.title.toUpperCase());
})