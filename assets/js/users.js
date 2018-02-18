    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let button = document.getElementById('button');

button.addEventListener('click', e => {
        
    if (firebase.auth().currentUser) {
    
        firebase.auth().signOut();
        
    }else{
        //Obtener email y password
        const userEmail = email.value;
        const passwordUser = password.value;
        // console.log(userEmail);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(userEmail, passwordUser).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            
            //document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
        });
        
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log('si');
                window.location = "indexSelection.html";
            }
        });
    }
    
});


let logout = document.getElementById('logout');


    logout.addEventListener('click', e => {
        //Obtener email y password
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            logout.classList.remove('hide');
        } else {
            logout.classList.add('hide');
        }
    })