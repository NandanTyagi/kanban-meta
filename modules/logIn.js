'use strict'

export function logIn(){
    fetch('../users.json')
    .then(users => users.json())
    .then( users => {
        console.log(users);
        checkLogIn(users);
    });
}
function checkLogIn(users) {
    let logInBtn = document.getElementById('login-btn');
    let count = 0;
    document.getElementById('password-input').addEventListener('blur', (e) => {
        users.forEach(user => {
            let nameInput = document.getElementById('name-input').value;
            let passwordInput = document.getElementById('password-input').value;
            
            // if() {
            //     console.log('Found!');
            //     logInBtn.setAttribute('href','./loggedinpage.html')
            //     break
            // }else {
            //     console.log('Not found!');
            //     logInBtn.setAttribute('href','./error.html')
            // }
            // cout++;
        });
    })

    
}