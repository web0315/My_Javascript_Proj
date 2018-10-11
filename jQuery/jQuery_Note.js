//<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

//html
/*
<div id="content">
	<h1>"xxx...."</h1>
	<p>"xxx..."</p>
	<div class="questions-list">
		<div class="question1">
			<p class="title first-question-title">xxx...</p>
			<p class="answer">xxx...</p>
		</div>
		<div class="question2">
			<p class="title">xxx...</p>
			<p class="answer">xxx...</p>
		</div>
	</div>
</div>
*/

//jQuery: find qustion1 title

//1
$(".first-question-title");
//2
$(".question1").children().eq(0);
//3
$(".content").find(".first-question-title");
//4
$(".answer").siblings(".first-question-title");

//jQuery: add or remove

//add :append/appendTo prepend/prependTo after/insertAfter before/insertBefore
$("document.body").append('<div>xxx...</div>');
$("document.body").prepend('<div>xxx...</div>');
$('<div>xxx...</div>').appendTo("document.body");
$('<div>xxx...</div>').prependTo("document.body");

//remove :empty remove
$("div:last-child").remove() //remove itself
$("div:last-child").empty() //remove childNodes
