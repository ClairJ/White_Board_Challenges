function exponentSum(int, exp) {
  if(!int || !exp || typeof int !== 'number' || typeof exp !== 'number') return null;
  let exponentArr = Math.pow(int, exp).toString().split('');
  let counter = 0;
  for(var i=0; i < exponentArr.length; i++) {
    counter += parseInt(exponentArr[i]);
  }
  return counter;
}

module.exports = exponentSum;
