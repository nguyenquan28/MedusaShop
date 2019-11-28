
var carts = [];
var total = 0;
var discount = 0;

// function css
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

function order_confirm(){
    debugger;

    var name = document.getElementById('fullname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    

    if (name == "" || phone == "" || email == "" || address == "") {
        alert('Please enter again')
        document.getElementById('fullname').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('address').value = "";
    } else {
        document.getElementById('add_newaddress').style.display = 'none';
        
        document.getElementById('bill_username').innerHTML = name;
        document.getElementById('bill_phone').innerHTML = phone;
        document.getElementById('bill_email').innerHTML = email;
        document.getElementById('bill_address').innerHTML = address;
    }    
}

// getdata in session
function getsData() {
    var str = sessionStorage.getItem('sessionAccount');
    if (str != null)
    sessions = JSON.parse(str);
}


// function show Product 
function showCart(){
    debugger;
    var sessionCarts = JSON.parse(sessionStorage.getItem("sessionCarts"));
    var product = '';
    var a = 0;
    sessionCarts.forEach(function(element) {
                product += `<div class="box_orderproduct">
                                <img class="img_orderproduct"  src="img/${element.image}" alt="">
                                <div class="box_orderTT">
                                    <h5 class="orderTT_name"><h5>${element.name}</h5>
                                    <p class="orderTT_id">${element.id}</p>
                                </div>
                                <div class="box_orderprice">
                                    <h5 class="orderprice price_order">${element.price}$</h5>
                                    <h5 class="orderoldprice price_order"><strike>${element.oldprice}$</strike></h5>

                                </div>
                                <div class="quantity buttons_added">
                                  <input type="button"  value="-" class="minus">
                                  <input type="number" id="mount" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
                                  <input type="button"  value="+" class="plus">
                                </div>
                                <a class="fas fa-trash-alt" style="color: red; padding: 15px 50px;" onclick="delCarts(${a})"></a>
                                <a class="fas fa-trash-alt" style="color: red; padding: 15px 50px;" onclick="updateCarts(${a})"></a>
                            </div>
                            <hr>`;
                a++;
        });
        document.getElementById("box_orderproduct").innerHTML = product;
}

// function updateCarts(item){
//     var sessionCarts = JSON.parse(sessionStorage.getItem("sessionCarts"));
//     sessionStorage.clear();
//     var product = '';
//     var a = 0;
//     var totals = 0;
//     sessionCarts.forEach(function(element) {

//     var mount = document.getElementById('mount').value;
//                 totals = parseInt(mount*element.price);
//                 product += `<div class="box_orderproduct">
//                                 <img class="img_orderproduct"  src="img/${element.image}" alt="">
//                                 <div class="box_orderTT">
//                                     <h5 class="orderTT_name"><h5>${element.name}</h5>
//                                     <p class="orderTT_id">${element.id}</p>
//                                 </div>
//                                 <div class="box_orderprice">
//                                     <h5 class="orderprice price_order">${totals}$</h5>
//                                     <h5 class="orderoldprice price_order"><strike>${element.oldprice}$</strike></h5>

//                                 </div>
//                                 <div class="quantity buttons_added">
//                                   <input type="button" value="-" class="minus">
//                                   <input type="number" id="mount" step="1" min="1" max="" name="quantity" value="${mount}" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
//                                   <input type="button" value="+" class="plus">
//                                 </div>
//                                 <a class="fas fa-trash-alt" style="color: red; padding: 15px 50px;" onclick="delCarts(${a})"></a>
//                             </div>
//                             <hr>`;
//                 a++;
//             getsData()
//             sessionCarts.push(element)
//             sessionStorage.setItem('sessionCarts',JSON.stringify(sessionCarts));

//         });
//     document.getElementById("box_orderproduct").innerHTML = product;

// }


// Delete product in Carts
function delCarts(item){
    debugger;
    var arr = JSON.parse(sessionStorage.getItem("sessionCarts"));
    var index = arr[item];
    if (arr.length == 1) {
        alert('DO YOU WANT TO DETELE ALL????');
        arr.splice(0,1);
        sessionStorage.setItem('sessionCarts',JSON.stringify(arr));
        location.reload (true);
    } else {
        for( var i = 0; i <= arr.length; i++)
        { 
           if ( arr[i] == index)
           {
             arr.splice(i, 1); 
           }
        }

    sessionStorage.setItem('sessionCarts',JSON.stringify(arr));
    showCart();
    }
}


// function pay carts
function payCarts(){
    debugger;
    var selectBox = document.getElementById("select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value; 
    var sessionCarts = JSON.parse(sessionStorage.getItem("sessionCarts"));
    sessionCarts.forEach(function(sessionCart){
        total += parseInt(sessionCart.price);
    })
    discount = parseInt(total*selectedValue);
    document.getElementById('total').innerHTML =  total + '$';
    document.getElementById('discount').innerHTML = discount + '$';
}

