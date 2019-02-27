function checkFirstName(){
	var firstNameValue = $('#firstName').val().length;
	if(firstNameValue>=6 && firstNameValue<=15){
		$('#firstNameError').text('');
		return true;
	}
	else{
		$('#firstNameError').text('First Name should be 6 to 15 characters');
		return false;
	}
}

$('#firstName').click(function(){
	checkFirstName();
});

$('#firstName').blur(function(){
	checkFirstName();
});

$('#firstName').keyup(function(){
	checkFirstName();
});

function checkLastName(){
	var lastNameValue = $('#lastName').val().length;
	if(lastNameValue>=6 && lastNameValue<=15){
		$('#lastNameError').text('');
		return true;
	}
	else{
		$('#lastNameError').text('Last Name should be 6 to 15 characters');
		return false;
	}
}

$('#lastName').click(function(){
	checkLastName();
});

$('#lastName').blur(function(){
	checkLastName();
});

$('#lastName').keyup(function(){
	checkLastName();
});

function checkEmail(){
	var pattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i);

	if(pattern.test($('#email').val())){
		$('#emailError').text('');
		return true;
	}
	else{
		$('#emailError').text('Invalid Email');
		return false;
	}
}

$('#email').click(function(){
	checkEmail();
});

$('#email').blur(function(){
	checkEmail();
});

$('#email').keyup(function(){
	checkEmail();
});

function checkPassword(){
	var password=$('#password').val();
	var reg = /^[a-zA-Z]\w{3,14}$/;

	if(reg.test(password)){
		$('#passwordError').text('');
		return true;
	}
	else{
		$('#passwordError').text('Invalid password');
		return false;
	}
}

$('#password').click(function(){
	checkPassword();
});

$('#password').blur(function(){
	checkPassword();
});

$('#password').keyup(function(){
	checkPassword();
});

$('#showHide').click(function(){
	var attrValue = $("#password").attr('type');
	if(attrValue == 'password'){
		$('#password').attr('type','text');
		return true;
	}
	else{
		$('#password').attr('type','password');
		return false;
	}
});


function checkConfirmPassword(){
	var confirmPassword=$('#conPassword').val();
	var password = $('#password').val();

	if(password == confirmPassword){
		$('#conPasswordError').text('');
		return true;
	}
	else{
		$('#conPasswordError').text('Password did not match');
		return false;
	}
}

$('#conPassword').click(function(){
	checkConfirmPassword();
});

$('#conPassword').blur(function(){
	checkConfirmPassword();
});

$('#conPassword').keyup(function(){
	checkConfirmPassword();
});

$('#showHide1').click(function(){
	var attrValue = $("#conPassword").attr('type');
	if(attrValue == 'password'){
		$('#conPassword').attr('type','text');
		return true;
	}
	else{
		$('#conPassword').attr('type','password');
		return false;
	}
});

function checkGender(){
	var genderInfo=$('input[type="radio"]:checked').val();

	if(genderInfo == 'Male' || genderInfo == 'Female'){
		$('#genderError').text('');
		return true;
	}
	else{
		$('#genderError').text('Please select gender');
		return false;
	}
}


function checkCity(){
	var cityValue=$('#city').val();

	if(cityValue == ' '){
		$('#cityError').text('');
		return true;
	}
	else{
		$('#cityError').text('Please select city');
		return false;
	}
}

$('#form').submit(function(){
	if(checkFirstName() == true && checkLastName() == true && checkEmail()== true && checkPassword()== true && checkConfirmPassword()== true && checkGender()== true && checkCity()== true){
		return true;
	}
	else{
		return false;
	}
});

