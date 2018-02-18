let userRegister = document.getElementById('userRegistro');
let passwordRegister = document.getElementById('passwordRegistro');
let buttonRegister = document.getElementById('buttonRegister');

buttonRegister.addEventListener('click', e => {
    //Obtener email y password
    const userName = userRegister.value;
    const passwordUser = passwordRegister.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(userName, passwordUser);
    promise.cath(e=> console.log(e.message));


});