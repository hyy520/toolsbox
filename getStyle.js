/**
 * 
 * @desc   获取非行间样式
 * @param  {HTMLElement} obj 
 * @param  {String} name   
 */ 
function getStyle(obj, name)
{
    if(obj.currentStyle) //兼容IE
    {
        return obj.currentStyle[name];
    }
    else //兼容火狐谷歌
    {
        return getComputedStyle(obj, false)[name];
    }
}

module.exports = getStyle;