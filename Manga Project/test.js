
function check_login(){
    var login = document.getElementById('email').value;
    var password = document.getElementById('senha').value;
    var link = document.getElementById("teste").href;
    if( login == "test@gmail.com" && password == "1234"){
        alert("success");
        document.getElementById('teste').href = "main.html";
    }
    else{
        alert("Wrong");
    }
}
