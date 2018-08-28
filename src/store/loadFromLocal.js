/**
 * 
 * @desc  读取localStorage数据
 * @param {Number或String} name
 * @param {String} key 需要存储数据的键名
 * @param {String或Boolean} def为默认读取数据
 */ 
function loadFromLocal(name, key, def) {
    let localData = window.localStorage.__localData__;
    if (!localData) {
        return def;
    }
    localData = JSON.parse(localData)[name];
    if (!localData) {
        return def;
    }
    let ret = localData[key];
    return ret || def;
};

module.exports = loadFromLocal;