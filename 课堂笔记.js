
function windowBack() {
	window.history.back();
}
function windowForward() {
	window.history.forward();
}


var num = 0;
var count = 0;
var left = document.getElementById("left");
var right = document.getElementById("right");
left.onclick = function(){
	if(count == 0){
		count += 1;
		var msg = setInterval(function(){
			if(document.getElementById("slide").style.left == 0+"px"){
				document.getElementById("slide").style.left = -6144 + "px";
			}
			var Now = parseInt(document.getElementById("slide").style.left)
			document.getElementById("slide").style.left = Now + 1 + "px"
			num++;
			if(num == 1536){
				clearInterval(msg)
				num = 0;
				count = 0;
			}
		}, 1)
	}
}
right.onclick = function(){
		if(count == 0){
			count += 1;
			var msg = setInterval(function(){
				if(document.getElementById("slide").style.left == -6144+"px"){
					document.getElementById("slide").style.left = 0 + "px";
				}
				var Now = parseInt(document.getElementById("slide").style.left)
				document.getElementById("slide").style.left = Now - 1 + "px"
				num++;
				if(num == 1536){
					clearInterval(msg)
					num = 0;
					count = 0;
				}
			}, 1)
		}
}

var tool = document.getElementById("tool");
tool.onmouseover = function(e){
    this.myTitle = "购买此游戏！"
    var tooltip = document.createElement("div");
    tooltip.id="tooltip";
    tooltip.innerHTML=this.myTitle;
    tooltip.style.left=e.clientX+10+"px";
    tooltip.style.top=e.clientY+10+"px";
    document.body.appendChild(tooltip);
}
tool.onmousemove = function(e){
	var tooltip = document.getElementById("tooltip")
	tooltip.style.left = e.clientX+10+"px";
    tooltip.style.top=e.clientY+10+"px";
}
tool.onmouseout = function(e){
	var tooltip = document.getElementById("tooltip")
	document.body.removeChild(tooltip)
}

