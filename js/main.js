
// Click show from SignIn or SignUp
document.getElementById("click-create-account").addEventListener("click", formCreate);
document.getElementById("Click-login").addEventListener("click", formLogin );
function formLogin(){
    document.getElementById("form-create-account").style.display = 'none'
    document.getElementById("form-login").style.display = 'block'
    document.getElementById("Click-login").style.color = 'rgb(27, 168, 255)'
    $('div.btn-signin').css('border-bottom', '3px solid rgb(27, 168, 255)');
    document.getElementById("Click-login").style.color = 'rgb(197, 212, 221)';
    $('div.create-account').css('border-bottom', '1px solid rgb(197, 212, 221)');
}
function formCreate() {
    document.getElementById("form-login").style.display = 'none'
    document.getElementById("form-create-account").style.display = 'block'
    document.getElementById("Click-login").style.color = 'rgb(27, 168, 255)'
    $('div.btn-signin').css('border-bottom', '3px solid rgb(27, 168, 255)');    `m`
}