/*
 * 完善函数 unique 的功能。
 * 1、函数 unique 会对传入的参数数组进行去重
 * 2、返回一个去重后的新的数组
 */
function unique(arr){
    var result = [];
    for (var i=0,len=arr.length;i<len;i++){
        if (!result.includes(arr[i])){
            result.push(arr[i])
        }
        else{
            console.log(arr[i]+" alread in result")
        }
    }
    return result
}
