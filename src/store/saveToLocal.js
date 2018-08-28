/**
 * 
 * @desc  本地（localStorage）存储数据, 可用于点赞（我喜欢）等场景的应用
 * @param {Number或String} name
 * @param {String} key 需要存储数据的键名
 * @param {String或Boolean} value 存储的值
 */
function saveToLocal(name, key, value) {  // localStorage存储      
    //定义本地存储的数据为__localData__
    let localData = window.localStorage.__localData__;
    if (!localData) {
        localData = {};
        localData[name] = {};
    } else {
        localData = JSON.parse(localData);
        if (!localData[name]) {
            localData[name] = {};
        }
    }
    localData[name][key] = value;
    window.localStorage.__localData__ = JSON.stringify(localData);
};

module.exports = saveToLocal;