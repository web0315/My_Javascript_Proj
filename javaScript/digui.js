/*
 * 题目要求：
 * 完善函数 `gcd` 的功能。函数 gcd 会计算并返回传入的两个正整数参数之间最大的公约数
 * 如 25 和 10 之间最大公约数为 5
 */
function gcd(num1,num2){
    if (num1<num2){
        var tmp = 0;
        tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    if (num1%num2 === 0){
        return num2
    }
    else{
        return gcd(num2,num1%num2)
    }
} 