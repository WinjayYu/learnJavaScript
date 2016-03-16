function randomNumer() {
	var count = 10;
	var path = "C:/Users/Administrator/Desktop/testHtml/testImages/";
	var randomNum = Math.floor(Math.random()*count+1);
	// var jpg = ".jpg";
	var url = path + randomNum + ".jpg";
	return url;
}

function backgroundImage() {
	var bodyStyle = document.body.style; 
	// alert(bodyStyle);
	bodyStyle.backgroundImage = " url(" + randomNumer() + ")";
}

window.onload = backgroundImage;