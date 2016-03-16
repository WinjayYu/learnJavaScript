function slideshow() {
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src", "img/book.jpg");
	preview.setAttribute("id", "preview");
	slideshow.appendChild(preview);//preview不要引号
	preview.style.position= "absolute";
	preview.style.top = "0px";
	preview.style.left = "0px";
	var linklist = document.getElementById("linklist");
	insertAfter(slideshow,linklist);
	var links = linklist.getElementsByTagName("a");
//alert(typeof links[0]);
	 links[0].onmouseover = function() {  //function后面的括号记得打
	 	moveElement("preview",-200,0,10);
	 }
	 links[1].onmouseover = function() {
	 	moveElement("preview",-300,0,10);
	 }
	 links[2].onmouseover = function() {
	 	moveElement("preview",-400,0,10);
	 }
	}


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

//在targetElement元素后面添加一个元素，DOM只提供了insertBefore函数
//inserAfter函数需要自己根据现有的函数自己编写
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


window.onload = slideshow;