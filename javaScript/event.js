/*
 * 题目要求：
 * 为一组按钮元素绑定相关事件
 */

// 获取编辑器元素
var $editor = $('#editor');
$("#js-add-fontsize").on('click',function(){
    document.getElementById('editor').style = 'font-size:20px'
})
$("#js-change-bg").on('click',function(){
    document.getElementById('editor').style = 'background-color:#6b6b6b;color:#fff'
})
$("#js-toggle-opacity").on('click',function(){
    if($editor.css('opacity') > 0){
        $editor.css('opacity', 0);
    }
    else{
        $editor.css('opacity', 1);
    }
})