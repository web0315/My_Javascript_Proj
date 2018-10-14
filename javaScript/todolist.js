/*
 * 在提供的 HTML 和 CSS 的基础上，补充todoList的功能逻辑，具体要求如下。
 * 1、实现点击添加任务按钮时，获取输入框内容，如果输入框不为空则添加一个新的任务到任务列表中的功能
 * 2、实现点击任务 item 元素时，被点击任务元素如果带有类名 "checked"，则去除类名 "checked", 否则增加类名 "checked" 的功能
 * 3、实现点击任务 item 右边的删除按钮是，删除相应的任务 item 的功能
 */
 $('#js-add-task').on('click',function(){
     var val = $('#add-task-input').val()
     if (val !== ""){
     	$('.todoList-content').append("<li class='task'><p>"+val+"</p><span class='close'>x</span></li>")
     }
 })

 $('.todoList-content').on('click','.task',function(){
 	 $(this).toggleClass("checked")
 	 /*
     if($(this).hasClass('checked')){
         $(this).removeClass("checked")
     }
     else{
         $(this).addClass("checked")
     }
     */
 })

 $('.todoList-content').on('click','.close',function(){
 	 $(this).parent().remove()
 	 return false
 })