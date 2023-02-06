const username = document.getElementById('username');
const password = document.getElementById('password');
const login_btn = document.getElementById('btn');

let logged_in_users = localStorage.getItem('logged-in');
let empty_field = false

login_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!username.value){
        username.style.border = '1px solid red';
        empty_field = true;
    }else{
        empty_field = false;
        username.style.border = 'transparent';
    }

    if(!password.value){
        password.style.border = '1px solid red';
        empty_field = true;
    }else{
        empty_field = false;
        password.style.border = 'transparent';
    }

    if(!empty_field){
        let found = false
        const users = localStorage.getItem('users');
        const parsed_users = JSON.parse(users);
        if(parsed_users && parsed_users.length > 0){
            parsed_users.forEach((user) => {
                if(username.value == user.username && password.value == user.password){
                    localStorage.setItem('logged-in', true)   
                    found = true;
                }
            });
        } else{
            console.log('no user existed')
        }
        if(found){
            console.log('logged in')
        }
    }else{
        console.log('register')
    }
});