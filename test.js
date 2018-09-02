
function check_login(){
    var login = document.getElementById('email').value;
    var password = document.getElementById('senha').value;

    if( login == "test@gmail.com" && password == "1234"){
        alert("Success");
    }
    else{
        alert("Wrong");
    }
}