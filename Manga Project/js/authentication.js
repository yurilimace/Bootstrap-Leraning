
var act_button = document.getElementById('action');
var login = document.getElementById('email_add');
var password = document.getElementById('senha');



act_button.addEventListener('click', function () {
    firebase.auth().signInWithEmailAndPassword(login.value, password.value)
    .then(function(result){
        alert(login.value);
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
            alert('Wrong password or user doesnt exist');
          } else {
            alert(errorMessage);
          }
          console.log(error);
      });
});

