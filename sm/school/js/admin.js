function changeOrderStatus(oid, x) {
    var oid = oid;
    var x = x;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            alert(t);
            window.location.reload();
        }
    }

    r.open("GET", "accceptOrderProcess.php?oid=" + oid + "&x=" + x, true);
    r.send();
}

var bm;

function addshipping(oid) {

    var oid = oid;

    var shipping = document.getElementById("shippingmodal" + oid);
    bm = new bootstrap.Modal(shipping);

    bm.show();

}

function addtracking(oid) {


    var oid = oid;

    var shipping = document.getElementById("shipping" + oid).value;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            alert(t);
            bm.hide();
            window.location.reload();
        }
    }

    r.open("GET", "addShippingProcess.php?oid=" + oid + "&n=" + shipping, true);
    r.send();

}

function changeShippingStatus(oid, x) {


    var oid = oid;
    var x = x;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);

            window.location.reload();

        }
    }

    r.open("GET", "changeShippingProcess.php?oid=" + oid + "&x=" + x, true);
    r.send();

}

function filterStatus() {

    var s = document.getElementById("filter").value;


    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("tabl").innerHTML = t;



        }
    }

    r.open("GET", "filterShippingProcess.php?s=" + s, true);
    r.send();
}

function changeProductStatus(pid, status) {

    var pid = pid;
    var status = status;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);

            window.location.reload();

        }
    }

    r.open("GET", "changeProductStatusProcess.php?pid=" + pid + "&s=" + status, true);
    r.send();


}

function showinput(pid) {

    var qty1 = document.getElementById("qty1" + pid);
    var qty2 = document.getElementById("qty2" + pid);

    qty1.className = "d-none";
    qty2.className = "";

}

function updateProductQty(pid) {

    var pid = pid;
    var qty = document.getElementById("qty" + pid).value;


    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "1") {
                alert("quantity updated");
                window.location.reload();
            } else {
                alert(t);
            }



        }
    }

    r.open("GET", "updateProductQtyProcess.php?pid=" + pid + "&q=" + qty, true);
    r.send();

}

function filterQty() {

    var s = document.getElementById("filter").value;


    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("tabl").innerHTML = t;

        }
    }

    r.open("GET", "filterQtyProcess.php?s=" + s, true);
    r.send();
}

function changeUserStatus(email, x) {


    if (confirm("Are Your Sure ?")) {
        var email = email;
        var x = x;

        var r = new XMLHttpRequest();

        r.onreadystatechange = function() {
            if (r.readyState == 4) {
                var t = r.responseText;
                window.location.reload();

            }
        }

        r.open("GET", "changeUserStatusProcess.php?e=" + email + "&x=" + x, true);
        r.send();



    }


}

function searchUser() {
    var searchtxt = document.getElementById("searchtxt").value;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            document.getElementById("tabl").innerHTML = t;

        }
    }

    r.open("GET", "searchUserProcess.php?s=" + searchtxt, true);
    r.send();



}

function getpage(p, rsp, nop) {
    var page = p;
    var rsp = rsp;
    var numberOfPages = nop;


    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("tabl").innerHTML = t;
            document.getElementById("dataTable").scrollIntoView();

            for (let index = 1; index <= numberOfPages; index++) {
                if (index == page) {
                    document.getElementById("page" + p).className = "active";
                } else {
                    document.getElementById("page" + index).className = "";
                }

            }



        }
    }

    r.open("GET", "adminUsrPagProcess.php?page=" + page + "&rsp=" + rsp, true);
    r.send();

}

function getpageSearch(p, rsp, nop) {
    var page = p;
    var rsp = rsp;
    var numberOfPages = nop;


    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("tabl").innerHTML = t;
            document.getElementById("dataTable").scrollIntoView();

            for (let index = 1; index <= numberOfPages; index++) {
                if (index == page) {
                    document.getElementById("page" + p).className = "active";
                } else {
                    document.getElementById("page" + index).className = "";
                }

            }



        }
    }

    r.open("GET", "searchrPagProcess.php?page=" + page + "&rsp=" + rsp, true);
    r.send();

}

function loadmsg(umail) {


    var f = new FormData();
    f.append("e", umail);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            window.location.reload();
            var objDiv = document.getElementById("chatarea");
            objDiv.scrollTop = objDiv.scrollHeight;

        }
    }

    r.open("POST", "adminloadmsgProcess.php", true);
    r.send(f);

}

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

    r.open("POST", "adminSendMessageProcess.php", true);
    r.send(f);

}

function refresher(email) {


    window.setInterval(refreshmsgare(email), 500);
    // window.setInterval(refreshrecentarea, 2000);


    var objDiv = document.getElementById("chatarea1");
    objDiv.scrollTop = objDiv.scrollHeight;

}

// refresh msg view area

function refreshmsgare(mail) {

    var chatrow = document.getElementById("chatarea");

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

    r.open("POST", "adminrefreshmsgareaprocess.php", true);
    r.send(f);

}

// refreshrecentarea

function refreshrecentarea() {

    var rcv = document.getElementById("rcv");

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            rcv.innerHTML = t;
        }
    }

    r.open("POST", "adminrefreshrecentareaprocess.php", true);
    r.send();

}

function searchmessage() {
    var st = document.getElementById("st").value;
    var rcv = document.getElementById("rcv");

    var f = new FormData();
    f.append("st", st);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            rcv.innerHTML = t;

        }
    }

    r.open("POST", "adminSearchMsgProcess.php", true);
    r.send(f);

}