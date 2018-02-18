let user = document.getElementById('user');
let password = document.getElementById('password');
let button = document.getElementById('button');

button.addEventListener('click', function() {

    let userName = user.value;
    let passwordUser = password.value;
    let usersA = farrayUsers();
    let passwordA = farrayPassword();

    for (let j = 0; j < usersA.length; j++) {
        if (userName === usersA[j] && passwordUser === passwordA[j]) {
            //alert('j');
            window.location = 'index.html';
        }
    }


});

function farrayUsers() {
    let arrayUsers = [];
    for (let i = 0; i < users.length; i++) {
        arrayUsers.push(users[i].user);
    }
    return arrayUsers;
}

function farrayPassword() {
    let arrayPassword = [];
    for (let i = 0; i < users.length; i++) {
        arrayPassword.push(users[i].password);
    }
    return arrayPassword;
}