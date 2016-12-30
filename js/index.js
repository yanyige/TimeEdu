$(function() {
	// var pass = prompt('请输入时代教育提供的密码', password);
	// if(pass == 'shidaijiaoyu123') {
	// 	location.href = 'user/main.html';
	// }
	$('#submit').click(function() {
		var password = $("#pass").val();
		if(password == "20SDjy16") {
			localStorage.setItem('login', true);
			window.location.href = "user/login.html";
		}else {
			alert('密码错误！请联系你的老师！');
		}
	});
});