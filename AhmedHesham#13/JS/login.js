var email = document.getElementById('email')
var password = document.getElementById('password')
var logInBtn = document.getElementById('logInBtn')
var info_container = []

if (window.localStorage.getItem('user data')){
    info_container = JSON.parse(window.localStorage.getItem('user data'))
}

logInBtn.addEventListener('click',function(e){
    e.preventDefault()
    if (info_container[0].email == email.value){
        window.location.assign('Homepage.html')
    }
    else{
        window.location.assign('Sign up.html')
    }
})
