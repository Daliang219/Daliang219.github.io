
 $('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
	//修改密码请改此处
	if(((userName=="六个汤圆" || userName=="王艺" || userName=="Ohh") &&  (pwd=="111" || pwd=="20010119" ))){
			event.preventDefault();
			$('form').fadeOut(500);
		//	$('.page_one').fadeIn(500);
			
			//$('.container').addClass('form-success');//自己写的，对应login.css里的.container.form-success h1
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			setTimeout(function(){
				$('.page_one').fadeIn(1000);
			},500)
			setTimeout(function(){
				//location.href="myhtml.html"; //
				//location.href="happy.html"; //
			},2000);
		} else if (userName != "六个汤圆" && userName !="王艺"&& userName != "Ohh"){
        alert("咋的了，自己的名字都忘记了嘛？");
  	  } else {
		alert("不对不对，自己生日都忘了嘛？");
	}
}); 


$('.button1').click(function () {
	location.href="happy.html";
//	location.href="myhtml.html";
})


function requestFullScreen(element) {
	var element=document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
	element.webkitRequestFullScreen || //Chrome等
	element.mozRequestFullScreen || //FireFox
	element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
		 wscript.SendKeys("{F11}");
		}
	}
}
