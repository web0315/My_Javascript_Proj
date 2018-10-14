/*
 * 实现函数 convertToCamelCase 功能，其会转换传入的字符串参数 string 为驼峰格式。具体要求如下：
 * 1、参数 string 是以中划线（-）连接单词的字符串，需将第二个起的非空单词首字母转为大写,
 * 如 -webkit-border-radius 转换后的结果为 webkitBorderRadius。
 * 2、返回转换后的字符串
 */
function convertToCamelCase(str){
    li = str.split("-").filter(d=>d) //1.截取出传入字符串中的非空单词
    var result = li[0] //第一个单词直接赋值在结果中
    if (li.length>1){  //如果有多个单词，则进入以下逻辑
        for(var i = 1,len = li.length;i<len;i++){
            result += li[i].substring(0,1).toLocaleUpperCase()+li[i].substring(1) //第一个字母大写，其余不变
        }
    }
    return result  //返回结果
}
