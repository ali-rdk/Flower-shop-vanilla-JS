const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const register_btn = document.getElementById('register-btn');


var empty_field = false;
var duplicated_user = false;

register_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!email.value){
        email.style.border = '1px solid red';
        empty_field = true;
    }else{
        empty_field = false;
        email.style.border = 'transparent';
    }

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
        empty_field = false;
        const new_user = {
            username : username.value,
            password : password.value,
            email : email.value
        };
        const local_storage_users = localStorage.getItem('users');
        const parsed_local_storage_users = JSON.parse(local_storage_users);
        
        parsed_local_storage_users.forEach(element => {
            if (username.value === element.username){
                username.style.border = '1px solid red';
                duplicated_user = true;
            } else{
                username.style.border = 'transparent';
                duplicated_user = false
            }
        });
        
        if (!duplicated_user){
            if (parsed_local_storage_users && parsed_local_storage_users.length > 0){
                const new_user_added = [...parsed_local_storage_users,new_user];
                const stringify_user = JSON.stringify(new_user_added);
                localStorage.setItem('users', stringify_user)
            } else{
                const users = [];
                users.push(new_user);
                const stringify_user = JSON.stringify(users);
                localStorage.setItem('users', stringify_user);
            }
        }
    }
})