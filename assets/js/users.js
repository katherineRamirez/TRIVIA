    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let button = document.getElementById('button');

    button.addEventListener('click', e => {
        //Obtener email y password
        const userEmail = email.value;
        const passwordUser = password.value;
        console.log(userEmail);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(userEmail, passwordUser);
        

    });


    let logout = document.getElementById('logout');


    logout.addEventListener('click', e => {
        //Obtener email y password
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            logout.classList.remove('hide');
        }else{
            logout.classList.add('hide');
        }
    })