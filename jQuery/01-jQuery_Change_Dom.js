/*
 * 根据题目文档示意图，修改 DOM 树结构
 * 1、去除ID为 "tree1" 的元素其带有类名为 "etc" 的子元素 p
 * 2、给 ID为 "tree1" 的 div 元素增加一个兄弟元素 div，该兄弟元素 ID 为 "tree2"
 * 3、为 ID 为 "tree2" 的 div 元素增加子元素 div, 该子元素带有类名 "item";
 */

// 去除ID为 "tree1" 的元素其带有类名为 "etc" 的子元素 p

// 给 ID为 "tree1" 的 div 元素增加一个兄弟元素 div，该兄弟元素 ID 为 "tree2"

// 为 ID 为 "tree2" 的 div 元素增加子元素 div, 该子元素带有类名 "item";

$("#tree1 .etc").remove();

$("#tree1").after("<div id='tree2'></div>");

$("#tree2").append("<div class='item'></div>")