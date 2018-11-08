var guy = 22;

console.log("Monkey businges" + guy );

const googleTrends = require('google-trends-api');

googleTrends.interestOverTime({keyword: 'Excel London'})
.then(function(results){
  console.log('These results are awesome', results);
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});
