// 提示范围数据
var data = ['apple', 'banana', 'carambola', 'grape', 'lemon', 'orange', 'watermelon'];

// 获取所有的inputs
var $autocomplete = $('.autocomplete');
var $curInput;
var $window = $(window);
var $body = $(document.body)

/**
 * 1、完善 `input` 框 `focus` 事件绑定逻辑，当事件出发时，设置 `.autocomplete` 提示框显示，并定位到触发事件的输入框的正下方。
 * 注：要求同时只能出现一个 `.autocomplete` 提示框
 */
$body.on('focus', 'input', function() {
    $autocomplete.empty();
    if($(this).val()===""){
        for(var i=0,len=(data.length);i<len;i++){
            $autocomplete.append('<li class="item">'+data[i]+'</li>')
        }
    }    
    var position = $(this).offset()
    $autocomplete.css({
        'left': position.left,
        'top': position.top + $(this).outerHeight(),
        'display': 'block'
    })
    $curInput = $(this)
});
/**
 * 2、完善 `input` 输入框的 `keyup` 事件绑定逻辑，同时获取输入框内容，修改  `.autocomplete` 提示框的提示选项内容
 */
$body.on('keyup', 'input', function() {
    $autocomplete.empty();
    var val = $(this).val();
    for(var i=0,len=(data.length);i<len;i++){
        if(data[i].indexOf(val)!==-1){
            $autocomplete.append('<li class="item">'+data[i]+'</li>')
        }
    }
});/**
 * 3、完善 `.autocomplete .item` 的 `click` 事件绑定逻辑，当点击提示框选项时，填充选项文本数据到相应的input框中
 */
$body.on('click', '.autocomplete .item', function() {
    var itemValue = $(this).text();
	$curInput.val(itemValue)
	$autocomplete.hide()
});

$window.on('click', function(event) {
  var target = event.target;
  if (target.tagName !== 'INPUT') {
    $autocomplete.hide();
  }
});
