/**
 * 
 * @desc   封装事件绑定，实现一种事件绑定多个事件处理函数  http://www.hyy01.top/a/qianduan/2018/0823/220.html
 * @param  {HTMLElement} obj 
 * @param  {String} ev   
 * @param  {Function} fn  
 */ 
function addEvent(obj, ev, fn)
{
    if(obj.attachEvent) //IE
    {
        obj.attachEvent('on'+ev, fn);
    }
    else //主流浏览器
    {
        obj.addEventListener(ev, fn, false);
    }
}

module.exports = addEvent;