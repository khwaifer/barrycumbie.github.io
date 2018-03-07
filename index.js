console.log("I'm in.");

$(document).ready(function(){
	var nodeList = document.body.childNodes;
		for (i=0; i < nodeList.length; i++) {
			console.log(document.body.childNodes[i]);
		};
};
