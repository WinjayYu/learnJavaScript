
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

//为元素添加className,元素可以有多个className,(class="className1 className2"中间用空格隔开）
function addClass(element,value) {
  if(!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += " ";
    newClassName += value;
    element.className = newClassName;
  }
}

