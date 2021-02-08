function login(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	var valid = document.getElementById("isValidate");
	console.log('user:' + user.value);
	console.log('pass:' + pass.value);
	if(user.value === 'phimconlon' && pass.value === 'haytuyet'){
		console.log('isLogin: true');
		valid.innerHTML = "Success! Đang chuyển trang ...";
		valid.className = "text-success";
		setTimeout(
			function(){
			window.location = "https://www.google.com/search?source=hp&ei=C9ggYKa9GdCmoATviqjgCA&q=phim+con+heo&oq=phim+con+heo&gs_lcp=CgZwc3ktYWIQAzoFCAAQsQM6CAgAELEDEIMBOgIIADoFCC4QsQM6AgguOgQIABADOggIABDHARCvAVCHIFjiL2CIM2gBcAB4AIABbYgBnweSAQQxMS4xmAEAoAEBqgEHZ3dzLXdperABAA&sclient=psy-ab&ved=0ahUKEwjm7tDE0tnuAhVQE4gKHW8FCowQ4dUDCAc&uact=5";
			}
			, 3000);
		
	}else{
		valid.innerHTML = "Username or Password invalid!";
		valid.className = "text-warning";
		console.log('isLogin: false');
	}
	
	
}

window.onload = function () {
	
}
