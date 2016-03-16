/*window.onload = move;

function move() {
	if(!document.getElementById) return false;
	if(!document.getElementById("mess")) return false;
	var mo = document.getElementById("mess");
	mo.style.fontFamily = "Arial";   //注意要打引号
	mo.style.fontSize = "5em";
	mo.style.color = "gray";
}
*/

function moveElement(elementID,final_x,final_y,interval) {
	//确保浏览器支持DOM方法
	if(!document.getElementById) return false;
	//确保元素存在
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	//parseInt函数能够只获取数值，便于下面的比较
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == final_x && ypos == final_y) {
		return true;
	}
	if(xpos < final_x) {
		xpos++;
	}
	if(xpos > final_x) {
		xpos--;
	}
	if(ypos < final_y) {
		ypos++;
	}
	if(ypos > final_y) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat,interval);
}

function positionMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("mess")) return false;
	var mo = document.getElementById("mess");
	mo.style.position = "absolute";   //注意要打引号
	mo.style.left = "50px";
	mo.style.top = "100px";
	moveElement("mess",500,550,10);
}

window.onload = positionMessage;
