const rbtn = document.querySelector(".btn-reg");

rbtn.addEventListener("click", () => {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var confirmPass = document.getElementById('confirmPass').value
  var birthdate = document.getElementById('birthdate').value
  var checkbox = document.querySelector('input[id="checkbox"]:checked')

  let condition = true;

  if(name.length == 0){
    alert('Name cannot be empty!')
    condition = false
  }

  if(password.length == 0){
    alert('Password cannot be empty!')
    condition = false
  }

  if(email.length == 0){
    alert('Email cannot be empty!')
    condition = false
  }

  if(birthdate == null || birthdate == ''){
    alert('Date of Birth cannot be empty!')
    condition = false
  }

  if(checkbox == null){
    alert('Checkbox needs to be checked!')
    condition = false
  }

  if(name.length < 3){
    alert('Full Name minimum character is 3!')
    condition = false
  }

  if(validateEmail(email) == false){
    condition = false
  }

  if(password.length < 8){
    alert('Password minimum length is 8 characters!')
    condition = false
  }

  if(passValidation(password) == false){
    condition = false
  }

  if(confirmPass != password){
    alert('Confirm Password is wrong!')
    condition = false
  }

  console.log(condition);
  if (condition == true) {
    event.preventDefault();
    var link = document.createElement("a");
    link.href = "homepageregistered.html";
    link.click();
  }
});

function passValidation(password){
  // password harus mengandung angka dan kata
  var word = false
  var number = false

  for (let index = 0; index < password.length; index++) {
    if(password[index] >= 'a' && password[index] <= 'z'){
      word = true
    } else if(password[index] >= 'A' && password[index] <= 'Z'){
      word = true
    } else if(password[index] >= '0' && password[index] <= '9'){
      number = true
    }
  }
  if((word == false) && (number == false)){
    alert('Password needs to have word and number!')
    return false
  } else if(word == false){
    alert('Password needs to have word!')
    return false
  } else if(number == false){
    alert('Password needs to have number!')
    return false
  } else{
    return true
  }
}

function validateEmail(email){
  // email harus punya '@'
  if(email.indexOf('@') == -1){     
    alert('Email requires @')
    return false
  }
  // harus ada titik
  if(email.indexOf('.') == -1){
    alert('Email requires .')
    return false
  }
  // tidak boleh diawali '@'
  if(email.indexOf('@') == 0){
    alert('Email cannot be started with @')
    return false
  }
  // tidak boleh diawali '.'
  if(email.indexOf('.') == 0){
    alert('Email cannot be started with .')
    return false
  }

  if(email.indexOf('@')+2 > email.indexOf('.')){
    alert('Email server is invalid!')
    return false
  }

  if(email.length < email.indexOf('.')+1){
    alert('Email domain is invalid!')
  }

  return true
}