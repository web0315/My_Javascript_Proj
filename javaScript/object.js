/*
 * 完善函数 count 的功能。
 * 1、函数 count 会统计传入的字符串参数其每个字符的的个数，并返回一个结果对象（Object）。
 * 2、属性名称（key）为统计字符(区分大小写，即 a 不等于 A)，属性值（value）为统计字符的个数。
 */

function count(str){
    var obj = new Object();
    for(var i=0,len=str.length;i<len;i++){
        var index = str[i]
        if(index in obj){
            obj[index] += 1;
        }
        else{
            obj[index] = 1;
        }
    }
    return obj
}