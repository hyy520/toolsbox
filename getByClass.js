/**
 * 
 * @desc  找到父元素下所有含有对应class的项并以数组形式返回
 * @param {HTMLElement} oParent 
 * @param {String} sClass 
 * @return {Arrary}
 */
function getByClass(oParent, sClass)
{
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');
    
    for(var i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    
    return aResult;
}

module.exports = getByClass;


/**
 适用场景举例：
window.onload=function ()
{
    var oUl=document.getElementById('ul1');
    var aBox=getByClass(oUl, 'box');
    
    for(var i=0;i<aBox.length;i++)
    {
        aBox[i].style.background='red';
    }
}; 

HTML:
<ul id="ul1">
    <li class="box"></li>
    <li class="box"></li>
    <li></li>
    <li></li>
    <li></li>
    <li class="box"></li>
    <li></li>
</ul>
 
 */