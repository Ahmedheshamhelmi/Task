var firstName = document.getElementById('Firstname')
var Surname = document.getElementById('Surname')
var email = document.getElementById('email')
var password = document.getElementById('password')
var signUpBtn = document.getElementById('signUpBtn')
var info_container = []
signUpBtn.addEventListener('click',function(e){
    e.preventDefault()
    var user_info = {
        firstName : firstName.value,
        Surname : Surname.value,
        email : email.value,
        password : password.value,
    }
    info_container.push(user_info)
    window.localStorage.setItem('user data',JSON.stringify(info_container))
    window.location.assign('Log in.html')
})









