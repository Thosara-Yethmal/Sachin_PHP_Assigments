function signin(userType) {

    var email = document.getElementById("e").value;
    var password = document.getElementById("p").value;
    var userType = userType;

    var f = new FormData();
    f.append("e", email);
    f.append("p", password);
    f.append("ut", userType);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == 'success') {

                window.location = "home.php";
            } else if (t == '1') {
                document.getElementById("vcDiv").className = "d-block user-box";
                document.getElementById("loginbtn").className = "d-none";
                document.getElementById("verifybtn").className = "text-center d-block";
                alert("Enter Verification Code");
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "process/signinProcess.php", true);
    r.send(f);


}

function verify(userType) {

    var email = document.getElementById("e").value;
    var password = document.getElementById("p").value;
    var code = document.getElementById("vc").value;
    var userType = userType;

    var f = new FormData();
    f.append("e", email);
    f.append("p", password);
    f.append("ut", userType);
    f.append("vc", code);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == 'success') {

                window.location = "home.php";
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "process/verifyProcess.php", true);
    r.send(f);

}

function signout() {
    window.location = "process/signoutProcess.php";
}

function teacherRegistration() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var nic = document.getElementById("nic");
    var subject = document.getElementById("subject");
    var grade = document.getElementById("grade");
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var form = new FormData();
    form.append("fname", fname.value);
    form.append("lname", lname.value);
    form.append("email", email.value);
    form.append("nic", nic.value);
    form.append("subject", subject.value);
    form.append("grade", grade.value);
    form.append("username", username.value);
    form.append("password", password.value);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        text = r.responseText;
        if (r.readyState == 4) {


            if (text == "success") {
                fname.value = "";
                lname.value = "";
                email.value = "";
                nic.value = "";
                subject.value = "";
                grade.value = "";
                username.value = "";
                password.value = "";
                alert("Registration Sucessfull");


            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "process/teacherRegisterProcess.php", true);
    r.send(form);
}

function studentRegistration() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var bday = document.getElementById("bday");
    var subject = document.getElementById("subject");
    var grade = document.getElementById("grade");
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var form = new FormData();
    form.append("fname", fname.value);
    form.append("lname", lname.value);
    form.append("email", email.value);
    form.append("bday", bday.value);
    form.append("subject", subject.value);
    form.append("grade", grade.value);
    form.append("username", username.value);
    form.append("password", password.value);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        text = r.responseText;
        if (r.readyState == 4) {


            if (text == "success") {
                fname.value = "";
                lname.value = "";
                email.value = "";
                bday.value = "";
                subject.value = "";
                grade.value = "";
                username.value = "";
                password.value = "";
                alert("Registration Sucessfull");


            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "process/studentRegisterProcess.php", true);
    r.send(form);
}

function academicRegistration() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var nic = document.getElementById("nic");
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var form = new FormData();
    form.append("fname", fname.value);
    form.append("lname", lname.value);
    form.append("email", email.value);
    form.append("nic", nic.value);
    form.append("username", username.value);
    form.append("password", password.value);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        text = r.responseText;
        if (r.readyState == 4) {


            if (text == "success") {
                fname.value = "";
                lname.value = "";
                email.value = "";
                nic.value = "";
                username.value = "";
                password.value = "";
                alert("Registration Sucessfull");


            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "process/academicRegisterProcess.php", true);
    r.send(form);
}

function sendInvitations(userId, ut) {

    var uid = userId;
    var ut = ut;

    var form = new FormData();
    form.append("uid", uid);
    form.append("ut", ut);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        text = r.responseText;
        if (r.readyState == 4) {

            if (text == "success") {

                alert("Registration Sucessfull");


            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "process/sendInvitationProcess.php", true);
    r.send(form);
}

function updateDetails(column, n) {
    var text = document.getElementById("inputVal" + n);

    var clsName = text.className;

    var form = new FormData();
    form.append("col", column);
    form.append("text", text.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        text = r.responseText;
        if (r.readyState == 4) {

            if (text == "success") {

                alert("Registration Sucessfull");

            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "process/updateProfileProcess.php", true);
    r.send(form);

}

function uploadAssigment() {

    var name = document.getElementById("name");
    var assingment = document.getElementById("assignment");
    var startDate = document.getElementById("startDate");
    var endDate = document.getElementById("endDate");
    var subject = document.getElementById("subject");
    var grade = document.getElementById("grade");

    var form = new FormData();
    form.append("name", name.value);
    form.append("assignment", assingment.files[0]);
    form.append("sDate", startDate.value);
    form.append("eDate", endDate.value);
    form.append("subject", subject.value);
    form.append("grade", grade.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;

            if (text == 'success') {
                alert("Assignment Uploaded SuccessFully");
                window.location.reload();
            } else {
                alert(text);
            }



        }
    }
    r.open("POST", "process/uploadAssignmentProcess.php", true);
    r.send(form);

}

function uploadAnswer(aid) {

    var assingment = document.getElementById("assignment");

    var form = new FormData();

    form.append("aid", aid);
    form.append("as", assingment.files[0]);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;

            if (text == 'success') {
                alert("Assignment Uploaded SuccessFully");
                window.location.reload();
            } else {
                alert(text);
            }



        }
    }
    r.open("POST", "process/uploadAnswerProcess.php", true);
    r.send(form);


}

function submitAnswer(sid, eid) {
    var marks = document.getElementById("marks");
    var result = document.getElementById("result");
    var comment = document.getElementById("comment");

    var form = new FormData();
    form.append("marks", marks.value);
    form.append("result", result.value);
    form.append("comment", comment.value);
    form.append("sid", sid.value);
    form.append("eid", eid);


    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        text = r.responseText;
        if (r.readyState == 4) {


            if (text == "success") {
                alert("Marks Added Successfull");
                window.location.reload();

            } else {
                alert(text);
            }
        }
    }
    r.open("POST", "process/submitMarksProcess.php", true);
    r.send(form);
}