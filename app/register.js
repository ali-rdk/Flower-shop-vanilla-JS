const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const register_btn = document.getElementById('register-btn');

const users = [];

register_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!email.value){
        console.log('email is empty');
    }else if(!username.value){
        console.log('username misiing');
    }else if(!password.value){
        console.log('password missing');
    }else{
        const new_user = {
            username : username.value,
            password : password.value,
            email : email.value
        };
        const local_storage_users = localStorage.getItem('users');
        const parsed_local_storage_users = JSON.parse(local_storage_users);
        if (parsed_local_storage_users && parsed_local_storage_users.length > 0){
            const new_user_added = [...users,new_user];
            const stringify_user = JSON.stringify(new_user_added);
            localStorage.setItem('users', stringify_user)
        } else{
            users.push(new_user);
            const stringify_user = JSON.stringify(users);
            localStorage.setItem('users', stringify_user);
        }
    }
})