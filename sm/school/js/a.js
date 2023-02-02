function goToCart() {
    window.location = "cart.php";
}

function goToSignin() {
    alert("Please Sign In First")
    window.location = "signin.php";
}

function signup() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var mobile = document.getElementById("mobile");
    var gender = document.getElementById("gender");

    var form = new FormData();
    form.append("fname", fname.value);
    form.append("lname", lname.value);
    form.append("email", email.value);
    form.append("password", password.value);
    form.append("mobile", mobile.value);
    form.append("gender", gender.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            text = r.responseText;
            if (text == "success") {
                fname.value = "";
                lname.value = "";
                email.value = "";
                password.value = "";
                mobile.value = "";
                document.getElementById("msg").innerHTML = "Registration Sucessfull";
                window.location = "signin.php";

            } else {
                document.getElementById("msg").innerHTML = text;
            }
        }
    }
    r.open("POST", "signUpProcess.php", true);
    r.send(form);
}

function signin() {
    var email2 = document.getElementById("email2");
    var password2 = document.getElementById("password2");
    var remember = document.getElementById("remember");

    var form = new FormData();

    form.append("email", email2.value);
    form.append("password", password2.value);
    form.append("remember", remember.checked);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            if (text == "1") {
                window.location = "index.php";
            } else {
                document.getElementById("msg2").innerHTML = text;
            }
        }
    }
    r.open("post", "signinprocess.php", true);
    r.send(form);

}
var bm;

function forgotPassword() {

    var email2 = document.getElementById("email2");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            if (text == 'Success') {
                alert("Verification code sent.Please check your email");
                var m = document.getElementById("forgetPasswordModal");
                bm = new bootstrap.Modal(m);
                bm.show();
            } else {
                alert(text);
            }

        }
    }
    r.open("GET", "forgotPasswordProcess.php?email=" + email2.value, true);
    r.send();

}

function showPassword1() {
    var np = document.getElementById("np");
    var npb = document.getElementById("npb");

    if (npb.innerHTML == "Show") {
        np.type = "text";
        npb.innerHTML = "Hide";
    } else {
        np.type = "password";
        npb.innerHTML = "Show";
    }

}

function showPassword2() {
    var np = document.getElementById("rnp");
    var npb = document.getElementById("rnpb");

    if (npb.innerHTML == "Show") {
        np.type = "text";
        npb.innerHTML = "Hide";
    } else {
        np.type = "password";
        npb.innerHTML = "Show";
    }

}

function resetPassword() {

    var e = document.getElementById("email2");
    var np = document.getElementById("np");
    var rnp = document.getElementById("rnp");
    var vc = document.getElementById("vc");

    var form = new FormData();
    form.append("e", e.value);
    form.append("np", np.value);
    form.append("rnp", rnp.value);
    form.append("vc", vc.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            if (text == 'Success') {
                alert("Password Reset Success");
                bm.hide();
            } else {
                alert(text);
            }

        }
    }
    r.open("POST", "resetPassword.php", true);
    r.send(form);

}

function gotoaddproduct() {
    window.location = "addproduct.php";
}

function changeimage() {
    var image = document.getElementById("imguploader");
    var view = document.getElementById("prev");

    image.onchange = function() {
        var file = this.files[0];
        var url = window.URL.createObjectURL(file);

        view.src = url;
    }
}

function addproduct() {
    var category = document.getElementById("ca");
    var brand = document.getElementById("br");
    var title = document.getElementById("ti");

    var condition;
    if (document.getElementById("bn").checked) {
        condition = 3;
    } else if (document.getElementById("us").checked) {
        condition = 4;
    }

    var qty = document.getElementById("qty");
    var price = document.getElementById("price");
    var dilivery_within_colombo = document.getElementById("dwc");
    var dilivery_outof_colombo = document.getElementById("doc");
    var description = document.getElementById("desc");
    var image = document.getElementById("imguploader");

    var form = new FormData();
    form.append("c", category.value);
    form.append("b", brand.value);
    form.append("t", title.value);
    form.append("co", condition);
    form.append("qty", qty.value);
    form.append("p", price.value);
    form.append("dwc", dilivery_within_colombo.value);
    form.append("doc", dilivery_outof_colombo.value);
    form.append("desc", description.value);
    form.append("img", image.files[0]);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            alert(text);
            category.value = "0";
            brand.value = "0";
            title.value = "";
            qty.value = "";
            price.value = "";
            description.value = "";
            dilivery_outof_colombo.value = "";
            dilivery_within_colombo.value = "";
            window.location.reload();

        }
    }
    r.open("POST", "addproduct_process.php", true);
    r.send(form);

}

function productUpdate(pid) {
    var pid = pid;

    var title = document.getElementById("ti");
    var qty = document.getElementById("qty");
    var dilivery_within_colombo = document.getElementById("dwc");
    var dilivery_outof_colombo = document.getElementById("doc");
    var description = document.getElementById("desc");

    var form = new FormData();
    form.append("t", title.value);
    form.append("qty", qty.value);
    form.append("dwc", dilivery_within_colombo.value);
    form.append("doc", dilivery_outof_colombo.value);
    form.append("desc", description.value);
    form.append("pid", pid);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;

            if (text == "1") {
                alert("Product Updated Successfully");
                window.location = "seller_product_view.php";
            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "updateProduct_process.php", true);
    r.send(form);


}

function signout() {
    window.location = "signout.php";
}


function changeProductview() {
    var add = document.getElementById("addproductbox");
    var update = document.getElementById("updateproductbox");

    add.classList.toggle("d-none");
    update.classList.toggle("d-none");

}

function updateProfile() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var mobile = document.getElementById("mobile");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var city = document.getElementById("city");
    var img = document.getElementById("profileimg");

    var f = new FormData();
    f.append("fname", fname.value);
    f.append("lname", lname.value);
    f.append("mobile", mobile.value);
    f.append("line1", line1.value);
    f.append("line2", line2.value);
    f.append("city", city.value);
    f.append("img", img.files[0]);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            alert(text);
        }
    }
    r.open("POST", "update_profile_process.php", true);
    r.send(f);

}

function changeStatus(id) {

    var productid = id;
    var statuschange = document.getElementById(id);
    var statuslabel = document.getElementById("checklabel" + productid);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {

        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "1") {
                statuslabel.innerHTML = "Make Your Product Active";
            } else {
                statuslabel.innerHTML = "Make Your Product Deactive";
            }
        }

    }

    r.open("GET", "statusChangeProcess.php?p=" + productid, true)
    r.send();

}

function deleteModal(id2) {
    var id2 = id2;
    var dm = document.getElementById("deletemodal" + id2);
    k = new bootstrap.Modal(dm);
    k.show();
}

function deleteProduct(id3) {
    var productid = id3;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (request.readyState == 4) {
            var t = request.responseText;
            if (t == '1') {
                k.hide();
                alert("Product Deleted");
                window.location = "seller_product_view.php";
            } else {
                alert(t);
            }
        }

    }

    request.open("GET", "deleteProductProcess.php?p=" + productid, true)
    request.send();

}

function addFilters() {
    var search = document.getElementById("s");

    var age;
    if (document.getElementById("n").checked) {
        age = 1;
    } else if (document.getElementById("o").checked) {
        age = 2;
    } else {
        age = 0;
    }

    var qty;
    if (document.getElementById("l").checked) {
        qty = 1;
    } else if (document.getElementById("h").checked) {
        qty = 2;
    } else {
        qty = 0;
    }

    var condition;
    if (document.getElementById("b").checked) {
        condition = 1;
    } else if (document.getElementById("u").checked) {
        condition = 2;
    } else {
        condition = 0;
    }

    var f = new FormData();

    f.append("s", search.value);
    f.append("a", age);
    f.append("q", qty);
    f.append("c", condition);

    var rr = new XMLHttpRequest();

    rr.onreadystatechange = function() {
        if (rr.readyState == 4) {
            var text = rr.responseText;

            var arr = JSON.parse(text);

            for (var i = 0; i < arr.length; i++) {

                var row = arr[i];
                alert(row["title"]);
                alert(row['img']);

            }
        }
    }

    rr.open("POST", "filterProcess.php", true);
    rr.send(f);

}

function searchToUpdate() {
    var id = document.getElementById("searchToUpdate").value;
    var title = document.getElementById("ti");

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            var text = req.responseText;
            var object = JSON.parse(text);
            // alert(object["title"]);

            title.value = object["title"];


        }
    }

    req.open("GET", "searchToUpdateProcess.php?id=" + id, true);
    req.send();
}

function sendid(id) {

    var id = id;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (request.readyState == 4) {
            var t = request.responseText;

            window.location = "updateProduct.php";
        }

    }

    request.open("GET", "sendProductProcess.php?id=" + id, true)
    request.send();

}

function loadMainImg(i) {
    var img = document.getElementById("pimg" + i).src;
    var mainimg = document.getElementById("mainimg");

    mainimg.src = img;
}

function qty_inc(qty, pid) {
    var pid = pid;
    var input = document.getElementById("qtytext" + pid);
    var pqty = qty;
    if (input.value < pqty) {
        var newvalue = parseInt(input.value) + 1;
        input.value = newvalue.toString();

    } else {
        alert("Maximum quantity count has been exceded");
    }

}

function qty_dec(pid) {

    var input = document.getElementById("qtytext" + pid);

    if (input.value > 1) {
        var newvalue = parseInt(input.value) - 1;
        input.value = newvalue.toString();

    } else {
        alert("Minimum quantity count has been exceded");
    }

}

function basic_search() {
    var searchText = document.getElementById("basic_search_text").value;
    var searchSelect = document.getElementById("basic_search_select").value;

    var cardRow = document.getElementById("pdetails");
    cardRow.className = "d-none";

    // var cardcat = document.getElementById("pcat");
    // cardcat.className = "d-none";

    var rr = new XMLHttpRequest();

    rr.onreadystatechange = function() {

        if (rr.readyState == 4) {
            var text = rr.responseText;


            document.getElementById("searchdiv").innerHTML = text;
            document.getElementById("productView").innerHTML = "";

        }

    }

    rr.open("GET", "basicSearch_view.php?st=" + searchText + "&ss=" + searchSelect, true)
    rr.send();
}

function addToWatchlist(id) {
    var pid = id;


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);
        }
    }

    r.open("GET", "addToWatchlistProcess.php?id=" + pid, true)
    r.send();

}

function deleteFromWatchlist(id) {
    var pid = id;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t = 'success') {
                window.location = "watchlist.php";
            } else {
                alert("Please Try again");
            }
        }
    }

    r.open("GET", "removeToWatchlistProcess.php?id=" + pid, true)
    r.send();
}

function addToCart(id) {
    var qtytxt = document.getElementById("qtytext" + id).value;
    var pid = id;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "item added to cart") {
                swal({
                    icon: "success",
                    text: "item added to cart",
                });
            } else {
                swal({
                    icon: "warning",
                    text: t,
                });

            }
        }
    }

    r.open("GET", "addToCartProcess.php?id=" + pid + "&txt=" + qtytxt, true)
    r.send();


}

function removefromcart(id) {


    var cid = id;
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == '1') {
                window.location.reload();
            } else {
                alert("Cannot Delete This Product");
            }
        }
    }

    r.open("GET", "removefromcart.php?id=" + cid, true)
    r.send();

}

function removeAllfromcart() {
    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == '1') {
                alert("cart is empty");
                window.location.reload();
            }
        }
    }

    r.open("GET", "emptycart.php", true)
    r.send();
}

function paymentMethodModal(id, price) {
    var id = id;
    var price = price;
    var pop = document.getElementById("paymentMethod");

    var cashButton = document.getElementById("cash-payment");
    cashButton.style.display = "none";
    var cardButton = document.getElementById("payhere-payment");
    cardButton.style.display = "block";

    k = new bootstrap.Modal(pop);
    k.show();
    modalQty(id, price);

}


// cart modal start 
var a;

function checkoutModal() {


    var pop = document.getElementById("cartpaymentMethod");
    a = new bootstrap.Modal(pop);
    a.show();

}

function getorderDetails() {

    var no = document.getElementById("no").value;
    var line1 = document.getElementById("line1").value;
    var city = document.getElementById("city").value;
    var card = document.getElementById("card");
    var cash = document.getElementById("cod");

    var pm;
    if (card.checked) {
        pm = "1";
    } else {
        pm = "2";
    }



    var f = new FormData();
    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);
    f.append("pm", pm);

    var total = 0;
    var a;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            var arr = JSON.parse(t);

            if (t == 1) {
                alert("Please Enter NO");
            } else if (t == 2) {
                alert("Please Enter Address Line 01");
            } else if (t == 3) {
                alert("Please Select Your City");
            } else {


                for (var index = 0; index < arr.length; index++) {
                    document.getElementById(index).innerHTML = arr[index];
                    a = parseInt(arr[index]);
                    total = total + a;

                }

                cartShippingCalculation(total);

            }




        }
    }
    r.open("POST", "getOrderdetailsProcess.php", true);
    r.send(f);

    cartpaymentButton();
}

function cartpaymentButton() {

    var x = document.getElementById("cash-payment");
    var y = document.getElementById("payhere-payment");

    var card = document.getElementById("card");
    var cash = document.getElementById("cod");

    if (card.checked) {
        x.style.display = "none";
        y.style.display = "block";
    } else if (cash.checked) {
        x.style.display = "block";
        y.style.display = "none";

    }

}

function cartShippingCalculation(totalshipping) {


    var totship;
    totship = parseInt(totalshipping);

    var subto = document.getElementById("subtotal").innerHTML;


    var shipping = document.getElementById("totalshipping");
    shipping.innerHTML = totship;


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("total").innerHTML = t;

        }
    }

    r.open("GET", "cartCalProcess.php?totalshipping=" + totship + "&subtotal=" + subto, true);
    r.send();


}

function cartPayment() {

    var no = document.getElementById("no").value;
    var line1 = document.getElementById("line1").value;
    var city = document.getElementById("city").value;

    var card = document.getElementById("card");
    var cash = document.getElementById("cod");

    var pm;
    if (card.checked) {
        pm = "1";
    } else {
        pm = "2";
    }

    var total = document.getElementById("total").innerHTML;

    var f = new FormData();
    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);
    f.append("pm", pm);
    f.append("total", total);

    var total = 0;
    var a;

    var b = document.getElementById("next");




    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            var ar = JSON.parse(t);

            var oid = ar["oid"];
            var x = ar["x"];

            if (x == "1") {
                window.location = "invoice.php?id=" + oid;
            } else if (x == "2") {
                alert("card");
            } else {
                alert(x);
            }




        }
    }
    r.open("POST", "cartPamentProcess.php", true);
    r.send(f);


}

function cartpaynow() {

    var no = document.getElementById("no").value;
    var line1 = document.getElementById("line1").value;
    var city = document.getElementById("city").value;

    var f = new FormData();

    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {

            var t = r.responseText;

            if (t == "1") {
                alert("Please Select a City");
            } else if (t == "2") {
                alert("Please Enter Number Of Your Address");
            } else if (t == "3") {
                alert("Please Enter Your Address line");
            } else if (true) {


                var obj = JSON.parse(t);

                var mail = obj["email"];
                var orderId = obj["id"];
                var amount = obj["amount"];

                // Called when user completed the payment. It can be a successful payment or failure
                payhere.onCompleted = function onCompleted(orderId) {
                    console.log("Payment completed. OrderID:" + orderId);
                    saveInvoicecart(orderId, no, line1, city, amount);

                };

                // Called when user closes the payment without completing
                payhere.onDismissed = function onDismissed() {
                    //Note: Prompt user to pay again or show an error page
                    console.log("Payment dismissed");
                };

                // Called when error happens when initializing payment such as invalid parameters
                payhere.onError = function onError(error) {
                    // Note: show an error page
                    console.log("Error:" + error);
                };

                // Put the payment variables here
                var payment = {
                    "sandbox": true,
                    "merchant_id": "1217905", // Replace your Merchant ID
                    "return_url": "http://localhost/eshop/singleProductView.php? + id",
                    "cancel_url": "http://localhost/eshop/singleProductView.php? + id",
                    "notify_url": "http://sample.com/notify",
                    "order_id": obj["id"],
                    "items": obj["item"],
                    "amount": obj["amount"] + ".00",
                    "currency": "LKR",
                    "first_name": obj["fname"],
                    "last_name": obj["lname"],
                    "email": obj["email"],
                    "phone": obj["mobile"],
                    "address": obj["address"],
                    "city": obj["city"],
                    "country": "Sri Lanka",
                    "delivery_address": obj["address"],
                    "delivery_city": obj["city"],
                    "delivery_country": "Sri Lanka",
                    "custom_1": "",
                    "custom_2": ""
                };

                // Show the payhere.js popup, when "PayHere Pay" is clicked
                document.getElementById('payhere-payment').onclick = function(e) {
                    payhere.startPayment(payment);
                };

            }
        }
    }
    r.open("POST", "cartBuyNowProcess.php", true)
    r.send(f);
}


function saveInvoicecart(orderID, no, line1, city, total) {

    var orderID = orderID;
    var no = no;
    var line1 = line1;
    var city = city;
    var total = total;

    var f = new FormData();
    f.append("oid", orderID);
    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);
    f.append("total", total);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "1") {
                window.location = "invoice.php?id=" + orderID;
            }
        }
    }

    r.open("POST", "cartSaveinvoice.php", true)
    r.send(f);

}

// cart modal end 

function paymentButton() {
    var x = document.getElementById("cash-payment");
    var y = document.getElementById("payhere-payment");

    var card = document.getElementById("card");
    var cash = document.getElementById("cod");

    if (card.checked) {
        x.style.display = "none";
        y.style.display = "block";
    } else if (cash.checked) {
        x.style.display = "block";
        y.style.display = "none";

    }
}

function modalQty(pid, price) {



    var qtyinput = document.getElementById("qtytext" + pid).value;
    var qty = document.getElementById("qty");

    var total = document.getElementById("total");
    total.innerHTML = price * qtyinput;

    var dilivery = document.getElementById("diliveryfee").innerHTML = "00";


    qty.innerHTML = qtyinput;

}

function modalTotal(pid, price) {
    var id = pid;
    var city = document.getElementById("city").value;
    var qty = document.getElementById("qty").innerHTML;
    var dilivery = document.getElementById("diliveryfee");


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            const obj = JSON.parse(t);
            total.innerHTML = obj["total"];
            dilivery.innerHTML = obj["diliveryFee"];
        }
    }

    r.open("GET", "diliverfeeProcess.php?city=" + city + "&id=" + id + "&qty=" + qty, true);
    r.send();

}


//payhere

function placeOrder(pid, email, price) {

    var pid = pid;
    var email = email;
    var price = price;
    var pqty = document.getElementById("qtytext" + pid).value;
    var total = price * pqty;

    var card = document.getElementById("card");
    var cash = document.getElementById("cod");

    var paymentMethod;

    if (card.checked) {
        paymentMethod = "1";
    } else {
        paymentMethod = "2";
    }


    var no = document.getElementById("no").value;
    var line1 = document.getElementById("line1").value;

    var city = document.getElementById("city").value;

    var f = new FormData();
    f.append("pm", paymentMethod)
    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);
    f.append("pid", pid);
    f.append("email", email);
    f.append("pqty", pqty);
    f.append("total", total);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            var response = JSON.parse(t);

            var x = response["x"];
            if (x == "1") {

                oid = response["oid"];

                // alert("Order Placed Successfully");
                window.location = "invoice.php?id=" + oid;

            } else if (x == "2") {
                alert("Please Select a Payment Method");

            }

        }
    }

    r.open("POST", "placeOrderProcess.php", true);
    r.send(f);
}

function paynow(id) {

    var pqty = document.getElementById("qtytext" + id).value;
    var no = document.getElementById("no").value;
    var line1 = document.getElementById("line1").value;
    var city = document.getElementById("city").value;

    var f = new FormData();
    f.append("id", id);
    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);
    f.append("pqty", pqty);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "1") {
                alert("Please Select a City");
            } else if (t == "2") {
                alert("Please Enter Number Of Your Address");
            } else if (t == "3") {
                alert("Please Enter Your Address line");
            } else {

                var obj = JSON.parse(t);

                var mail = obj["email"];
                var orderID = obj["id"];
                var amount = obj["amount"];
                var qty = obj["qty"];

                // Called when user completed the payment. It can be a successful payment or failure
                payhere.onCompleted = function onCompleted(orderId) {
                    console.log("Payment completed. OrderID:" + orderId);
                    saveInvoice(orderID, id, mail, amount, pqty, no, line1, city);
                };

                // Called when user closes the payment without completing
                payhere.onDismissed = function onDismissed() {
                    //Note: Prompt user to pay again or show an error page
                    console.log("Payment dismissed");
                };

                // Called when error happens when initializing payment such as invalid parameters
                payhere.onError = function onError(error) {
                    // Note: show an error page
                    console.log("Error:" + error);
                };

                // Put the payment variables here
                var payment = {
                    "sandbox": true,
                    "merchant_id": "1217905", // Replace your Merchant ID
                    "return_url": "http://localhost/eshop/singleProductView.php? + id",
                    "cancel_url": "http://localhost/eshop/singleProductView.php? + id",
                    "notify_url": "http://sample.com/notify",
                    "order_id": obj["id"],
                    "items": obj["item"],
                    "amount": obj["amount"] + ".00",
                    "currency": "LKR",
                    "first_name": obj["fname"],
                    "last_name": obj["lname"],
                    "email": obj["email"],
                    "phone": obj["mobile"],
                    "address": obj["address"],
                    "city": obj["city"],
                    "country": "Sri Lanka",
                    "delivery_address": obj["address"],
                    "delivery_city": obj["city"],
                    "delivery_country": "Sri Lanka",
                    "custom_1": "",
                    "custom_2": ""
                };

                // Show the payhere.js popup, when "PayHere Pay" is clicked
                document.getElementById('payhere-payment').onclick = function(e) {
                    payhere.startPayment(payment);
                };

            }
        }
    }
    r.open("POST", "buyNowProcess.php", true)
    r.send(f);
}


function saveInvoice(orderId, id, mail, amount, qty, no, line1, city) {
    var orderID = orderId;
    var pid = id;
    var email = mail;
    var total = amount;
    var pqty = qty;
    var no = no;
    var line1 = line1;
    var city = city;

    var f = new FormData();
    f.append("oid", orderId);
    f.append("pid", pid);
    f.append("email", email);
    f.append("total", total);
    f.append("pqty", qty);
    f.append("no", no);
    f.append("line1", line1);
    f.append("city", city);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "1") {
                window.location = "invoice.php?id=" + orderId;
            }
        }
    }

    r.open("POST", "saveinvoice.php", true)
    r.send(f);


}


function printinvoice() {
    var restorepage = document.body.innerHTML;
    var page = document.getElementById("GFG").innerHTML;
    document.body.innerHTML = page;
    window.print();
    document.body.innerHTML = restorepage;
}

function addfeedback(id) {
    var feedmodel = document.getElementById("feedbackmodal" + id);
    k = new bootstrap.Modal(feedmodel);

    k.show();
}

function savefeedback(id) {
    var pid = id;
    var feedback = document.getElementById("feedback" + id).value;

    var f = new FormData();
    f.append("i", pid);
    f.append("ft", feedback);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "1") {
                k.hide();
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "saveFeedbackProcess.php", true);
    r.send(f);

}

// admin 

function adminVerification() {
    var e = document.getElementById("e").value;



    var f = new FormData();
    f.append("e", e);
    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (true) {

                alert("email Sent, Please Check Your inbox");

                document.getElementById("a").className = "d-none";
                document.getElementById("b").className = "d-block";
                document.getElementById("c").className = "d-block user-box";



            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "process/adminVerificationProcess.php", true);
    r.send(f);

}

function verify() {
    var verficationcode = document.getElementById("verCode").value;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "success") {
                var verficationModal = document.getElementById("exampleModal");
                k = new bootstrap.Modal(verficationModal);
                k.hide();

                alert("login success");

                // window.location = "adminpanel.php";
            } else {
                alert(t);
            }

        }
    }

    r.open("GET", "process/verifyProcess.php?v=" + verficationcode, true);
    r.send();
}

function blockuser(email) {

    var email = email;
    var blockbtn = document.getElementById("btn" + email);

    var f = new FormData();
    f.append("e", email);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "1") {
                blockbtn.className = "btn btn-danger";
                blockbtn.innerHTML = "Block";
            } else if (t == "2") {
                blockbtn.className = "btn btn-success";
                blockbtn.innerHTML = "Unblock";
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "blockuserProcess.php?", true);
    r.send(f);
}

function blockproduct(id) {

    var pid = id;
    var blockbtn = document.getElementById("btn" + id);

    var f = new FormData();
    f.append("pid", pid);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "1") {
                blockbtn.className = "btn btn-danger";
                blockbtn.innerHTML = "Block";
            } else if (t == "2") {
                blockbtn.className = "btn btn-success";
                blockbtn.innerHTML = "Unblock";
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "blockproductProcess.php", true);
    r.send(f);
}

function searchUser() {
    var text = document.getElementById("searchtxt").value;

    var searchdiv = document.getElementById("searchdiv");

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "please add a name to search") {
                alert(t);
            } else {
                searchdiv.innerHTML = t;
            }
        }
    }

    r.open("GET", "searchUser.php?s=" + text, true);
    r.send();
}

function searchproduct() {
    var text = document.getElementById("searchtxt").value;

    var searchdiv = document.getElementById("searchdiv");

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "please add a name to search") {
                alert(t);
            } else {
                searchdiv.innerHTML = t;
            }
        }
    }

    r.open("GET", "searchProduct.php?s=" + text, true);
    r.send();
}

function searchProductsAdmin(dfrom, dto) {
    var dfrom = dfrom;
    var dto = dto;

    var text = document.getElementById("searchtxt").value;

    var searchdiv = document.getElementById("pview");

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "please add a name to search") {
                alert(t);
            } else {
                document.getElementById("pview").innerHTML = "hi";
                searchdiv.innerHTML = t;
            }
        }
    }

    r.open("GET", "searchProductAdmin.php?s=" + text, true);
    r.send();
}

function dailyselling() {
    var fromdate = document.getElementById("fromdate").value;
    var todate = document.getElementById("todate").value;
    var link = document.getElementById("link");

    link.href = "sellingHistory.php?f=" + fromdate + "&t=" + todate;

}

var k;

function viewsgmodal(email) {

    var email = email;
    var pop = document.getElementById("msgmodal");

    addtosession(email);

    k = new bootstrap.Modal(pop);
    k.show();

    setInterval(refreshModalmsg(email), 500);

}

function addtosession(email) {
    var email = email;

    var f = new FormData();
    f.append("e", email);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

        }
    }

    r.open("POST", "addtosessionProcess.php", true);
    r.send(f);
}

function sendMessageModal(email) {
    var email = email;
    var msgtxt = document.getElementById("msgtxt").value;

    var f = new FormData();
    f.append("e", email);
    f.append("t", msgtxt);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {
                document.getElementById("msgtxt").value = "";
                setInterval(refreshModalmsg(email), 500);
            }
        }
    }

    r.open("POST", "messageModalProcess.php", true);
    r.send(f);
}

function refreshModalmsg(email) {
    var email = email;
    var chatrow = document.getElementById("chatrow");

    var f = new FormData();
    f.append("e", email);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            chatrow.innerHTML = t;


        }
    }

    r.open("POST", "refreshModalmsg.php", true);
    r.send(f);
}

function addnewmodal() {

    var pop = document.getElementById("addnewmodal");

    k = new bootstrap.Modal(pop);
    k.show();
}

function savecategory() {

    var c = document.getElementById("ca").value;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "1") {
                k.hide();
                alert("Category Added");
                window.location = "manageproduct.php";
            } else {
                alert(t);
            }

        }
    }

    r.open("GET", "saveCategoryProcess.php?c=" + c, true);
    r.send();
}

function singleviewmodal(id) {

    var pop = document.getElementById("singleproductview" + id);

    k = new bootstrap.Modal(pop);
    k.show();
}

function deletepurchase(id) {

    var id = id;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == 1) {
                window.location = "purchasehistory.php";
            } else {

            }
        }
    }

    r.open("GET", "deletePurchaseProcess.php?id=" + id, true);
    r.send();

}
// sendmessage

function sendmessage(mail) {

    var email = mail;
    var msgtxt = document.getElementById("msgtxt").value;

    var f = new FormData();
    f.append("e", email);
    f.append("t", msgtxt);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "success") {
                document.getElementById("msgtxt").value = "";
                refresher(email);


            } else {
                alert(t);
            }
        }
    }

    r.open("POST", "sendmessageprocess.php", true);
    r.send(f);

}

// refresher

function refresher(email) {

    // setInterval(refreshrecentarea, 500);
    window.setInterval(refreshmsgare(email), 500);

    var objDiv = document.getElementById("s");


}

// refres msg view area

function refreshmsgare(mail) {

    var chatrow = document.getElementById("chatrow");

    var f = new FormData();
    f.append("e", mail);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            chatrow.innerHTML = t;
            refresher(mail);

        }
    }

    r.open("POST", "refreshmsgareaprocess.php", true);
    r.send(f);

}


function advancedSearch(x) {
    // alert(x);
    // var x = 1;
    var s = document.getElementById("s1").value;
    var ca = document.getElementById("ca1").value;
    var br = document.getElementById("br1").value;
    var mo = document.getElementById("mo1").value;
    var co = document.getElementById("co1").value;
    var col = document.getElementById("col1").value;
    var prif = document.getElementById("prif1").value;
    var prit = document.getElementById("prit2").value;
    var sort = document.getElementById("sort").value;

    var form = new FormData();
    form.append("page", x);
    form.append("s", s);
    form.append("c", ca);
    form.append("b", br);
    form.append("m", mo);
    form.append("co", co);
    form.append("col", col);
    form.append("prif", prif);
    form.append("prit", prit);
    form.append("sort", sort);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            // 
            document.getElementById("filter").innerHTML = text;
        }
    };
    r.open("POST", "advancedSearchpro.php", true);
    r.send(form);

}

function getpage(p, rsp, nop) {
    var page = p;
    var rsp = rsp;
    var numberOfPages = nop;


    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("pdetails").innerHTML = t;
            document.getElementById("pdetails").scrollIntoView();

            for (let index = 1; index <= numberOfPages; index++) {
                if (index == page) {
                    document.getElementById("page" + p).className = "active";
                } else {
                    document.getElementById("page" + index).className = "";
                }

            }


        }
    }

    r.open("GET", "paginationProcess.php?page=" + page + "&rsp=" + rsp, true);
    r.send();

}

function cartqty(id) {

    var id = id;
    var qty = document.getElementById("qty").value;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            alert(t);

            // if (t == "1") {
            //     alert("quantity Updated");
            // } else {
            //     alert(t);
            // }

        }
    }

    r.open("GET", "cartQtyProcess.php?id=" + id + "&qty=" + qty, true);
    r.send();
}