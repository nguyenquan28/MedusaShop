// Click show from SignIn or SignUp
document
  .getElementById("click-create-account")
  .addEventListener("click", formCreate);
document.getElementById("Click-login").addEventListener("click", formLogin);

function formLogin() {
  document.getElementById("form-create-account").style.display = "none";
  document.getElementById("form-login").style.display = "block";
  document.getElementById("Click-login").style.color = "rgb(27, 168, 255)";
  $("div.btn-signin").css("border-bottom", "3px solid rgb(27, 168, 255)");
  document.getElementById("click-create-account").style.color =
    "rgb(197, 212, 221)";
  $("div.btn-signup").css("border-bottom", "3px solid rgb(197, 212, 221)");
  document.getElementById("title-form-login").innerHTML = "Login";
}

function formCreate() {
  document.getElementById("form-login").style.display = "none";
  document.getElementById("form-create-account").style.display = "block";
  document.getElementById("click-create-account").style.color =
    "rgb(27, 168, 255)";
  $("div.btn-signup").css("border-bottom", "3px solid rgb(27, 168, 255)");
  document.getElementById("Click-login").style.color = "rgb(197, 212, 221)";
  $("div.btn-signin").css("border-bottom", "3px solid rgb(197, 212, 221)");
  document.getElementById("title-form-login").innerHTML = "Create Account";
}

//
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card_item");
  if (c == "all-products") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

$('.js-show-filter').on('click',function(){
    $(this).toggleClass('show-filter');
    $('.panel-filter').slideToggle(400);

    if($('.js-show-search').hasClass('show-search')) {
        $('.js-show-search').removeClass('show-search');
        $('.panel-search').slideUp(400);
    }    
});

$('.js-show-search').on('click',function(){
    $(this).toggleClass('show-search');
    $('.panel-search').slideToggle(400);

    if($('.js-show-filter').hasClass('show-filter')) {
        $('.js-show-filter').removeClass('show-filter');
        $('.panel-filter').slideUp(400);
    }    
});