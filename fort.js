const names = ['im mohamad', 'lara ', 'baraa'];
const name1 = names.find(n => n.includes('m')); 
const name2 = names.find(j => j.indexOf('a')=== 1);



const bookse = [
  {
  title  : 'zoo',
  rating : 4.3
  },
  {
  title  : ['zoo', 'alex'],
  rating : 4.2
  },
  {
  title  : 'zoo',
  rating : 4.5
  }

];

const tit  = bookse.find(r => r.rating >= 4.3);
const tit2 = bookse.find (t => t.title.includes('alex')) ;