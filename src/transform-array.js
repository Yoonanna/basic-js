const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  arr.map((el, index) => {
    if (el === '--discard-next') {
      let newArr = [];
      let res = arr.slice(0, index) + "," + arr.slice(index + 2);
      newArr.push(res);
      //console.log(newArr);
      return newArr;

    } else if (el === '--discard-prev') {
      let newArr = [];
      let res = arr.slice(0, index - 1) + "," + arr.slice(index + 1);
      newArr.push(res);
      //console.log(newArr);
      return newArr;
    } else if (el === '--double-next') {
      let newArr = [];
      let res = arr.slice(0, index) + "," + arr[index + 1] + "," + arr.slice(index + 1);
      newArr.push(res);
      //console.log(newArr);
      return newArr;
    } else if (el === '--double-prev') {
      let newArr = [];
      let res = arr.slice(0, index) + "," + arr[index - 1] + "," + arr.slice(index + 1);
      newArr.push(res);
      //console.log(newArr);
      return newArr;
    }
  });
};

module.exports = {
  transform
};
