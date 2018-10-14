/*
 * 使用 jQuery 编写一个事件监听器，需要完成以下要求：
 * 1、触发事件的目标元素为 #target
 * 2、监听的是一个 click 事件
 * 3、当事件触发时，需要增加类名 disabled  到目标元素上
 */
// 绑定事件
$("#target").on('click',function(){
	if($(this).hasClass("disabled")){
		$("#target").removeClass("disabled");
	}
    else{
    	$("#target").addClass("disabled");
    }
})

$('.task').on('click',function(){
     if($(this).hasClass('checked')){
         $(this).removeClass("checked")
     }
     else{
         $(this).addClass("checked")
     }
 })