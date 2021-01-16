function checkFirstName(){
    var content = document.getElementById("firstname").value;
    if (content==""){
        document.getElementById("firstname").style.borderColor = "red";
        document.getElementById("firstlabel").style.color = "red";
    } else {
        document.getElementById("firstname").style.borderColor = "";
        document.getElementById("firstlabel").style.color="black";
    }
}

function checkLastName(){
    var content = document.getElementById("lastname").value;
    if (content==""){
        document.getElementById("lastname").style.borderColor = "red";
        document.getElementById("lastlabel").style.color = "red";
    } else {
        document.getElementById("lastname").style.borderColor = "";
        document.getElementById("lastlabel").style.color = "black";
    }
}

function checkEmail(){
    var content = document.getElementById("email").value;
    if (content==""){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("elabel").style.color = "red";
    } else {
        document.getElementById("email").style.borderColor = "";
        document.getElementById("elabel").style.color = "black";
    }
}

function checkNearest(){
    var content = document.getElementById("nearest").value;
    if (content==""){
        document.getElementById("nearest").style.borderColor = "red";
        document.getElementById("nearlabel").style.color = "red";
    } else {
        document.getElementById("nearest").style.borderColor = "";
        document.getElementById("nearlabel").style.color = "black";
    }
}