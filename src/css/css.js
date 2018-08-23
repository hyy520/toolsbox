/**
 * 
 * @desc   获取或设置行间样式
 * @param  {HTMLElement} obj 
 * @param  {String} name 
 * @param  {String} value 
 */ 
function css(obj, name, value)
{
    if(arguments.length==2) //获取
    {
        return obj.style[name];
    }
    else //设置
    {
        obj.style[name]=value;
    }
}

module.exports = css;