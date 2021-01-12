function checkFirstName(){
    var content = document.getElementById("firstname").value;
    if (content==""){
        document.getElementById("firstname").style.borderColor = "red";
    } else {
        document.getElementById("firstname").style.borderColor = "";
    }
}

function checkLastName(){
    var content = document.getElementById("lastname").value;
    if (content==""){
        document.getElementById("lastname").style.borderColor = "red";
    } else {
        document.getElementById("lastname").style.borderColor = "";
    }
}

