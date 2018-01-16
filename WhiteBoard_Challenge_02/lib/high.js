const whiteBoard = module.exports = {};

whiteBoard.solution = function(arr) {
  let highest = 0;
  let high = 0;

  if (arr.length === 0) {
    return null;
  }

  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') {
      arr.splice(arr[i],1);
    }

    highest = Math.max(... arr);

    let index = arr.indexOf(highest);
    if(index > -1) {
      arr.splice(index, 1);
    }

    high = Math.max(...arr);

    if (highest === high) {
      let index = arr.indexOf(high);
      if(index > -1) {
        arr.splice(index, 1);
      }
    }

    high = Math.max(...arr);

    let answer = [highest, high];
    return answer;
  }
};
