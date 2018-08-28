/**
 * 
 * @desc 洗牌函数（打乱数组）
 * @param {Array} arr 
 * @return {Array}
 */
var randomNum = require('../random/randomNum');
 
function shuffle(arr) {  // 洗牌函数（打乱数组）
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = randomNum(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

module.exports = shuffle;