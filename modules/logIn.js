'use strict'

export function logIn(){
    fetch('../users.json')
    .then(users => users.json())
    .then( users => {
        console.log(users);
        let logInBtn = document.getElementById('login-btn');
        logInBtn.addEventListener('click', (e)=> {
            checkLogIn(users);
        });
        function checkLogIn(users) {
            let inputPassword = document.getElementById('password-input').value;
                console.log('inputPassword = ');
                console.log(inputPassword);

            let inputName = document.getElementById('name-input').value;
                console.log('inputName = ');
                console.log(inputName);

            let usernameArray = users.map(user => user.username);
                console.log('usernameArray = ');
                console.log(usernameArray);

            let passwordArray = users.map(user => user.password);
                console.log('passwordArray = ');
                console.log(passwordArray);
                
            let checkedUserName = usernameArray.find(user => user === inputName);
                console.log('checkedUserName = ');
                console.log(checkedUserName);
                
            let checkedPassword = passwordArray.find(password => password === inputPassword);
                console.log('checkedPassword = ');
                console.log(checkedPassword);

            // Login successfull
            if(checkedUserName && checkedPassword){ 
                console.log('checkedUserName is true');
                console.log(checkedUserName);
                logInBtn.setAttribute('href', './loggedinpage.html')
                localStorage.setItem('checkedUsername', checkedUserName);
            // Login fail
            }else {
                console.log('checkedUserName is false'); 
                console.log(checkedUserName);
                logInBtn.setAttribute('href', './error.html')

            }
        }// checkLogin(users) ends
    });// .then ends
}// login() ends