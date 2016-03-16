

function addLoadEvent(func) {    //只有一个参数，func是传入进来的函数。功能详细见我的印象笔记
     var oldonload = window.onload;
     if (typeof window.onload != 'function') {
          window.onload = func;
     } else {
          window.onload = function() {
          oldonload();
          func();
       }
     }
}

addLoadEvent(prearePlaceholder);
addLoadEvent(gallery);

function gallery() {
	if(!document.getElementById) return false; //检测浏览器是否支持DOM
	if(!document.getElementsByTagName) return false;  //检测浏览器是否支持DOM
	if(!document.getElementById("links")) return false; //检测是否有叫links的Id
	var gall = document.getElementById("links");
	var hrefs = gall.getElementsByTagName("a");
	for(var i=0; i<hrefs.length; i++) {
		hrefs[i].onclick = function() {
			if(showPic(this)) {
				return false;
			} else {
				return true;
			}
		}
	}
}

function prearePlaceholder() {
	if (!document.createElement) return false;
	if (!document.getElementById) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById("links")) return false;
	var defaultImg = document.createElement("img");
	defaultImg.setAttribute("id", "defaultImg");
	defaultImg.setAttribute("src", "img/leaf.jpg");
	defaultImg.setAttribute("alt", "my image");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("links");
	insertAfter(defaultImg, gallery);
	insertAfter(description,defaultImg);
}

function showPic(pic) {
	if(!document.getElementById("defaultImg")) return false;
	var defaultImg = document.getElementById("defaultImg");
	var source = pic.getAttribute("href");//获取href的值
	if(defaultImg.nodeName != "IMG") return false; //检查对象的类型是否为图片，注意返回的为大写字母
	defaultImg.setAttribute("src", source);
	if(document.getElementById("description")) {
		var description = document.getElementById("description");
		var txt = pic.getAttribute("alt");
		if(description.firstChild.nodeType == 3) { //检测对象类型是否为文本类型，3代表文本类型
	    description.childNodes[0].nodeValue = txt;//注意要写childNodes[]
		}
    }
    return true;
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