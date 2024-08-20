const URL = 'http://127.0.0.1:8000/api/v1/'

const username = document.getElementById('username');
const password = document.getElementById('password');

const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    let info = {
        username: username.value,
        password: password.value,
    }
    fetch(URL+'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(info)
    }).then(response=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error(response.statusText);
        }
    }).then(data=>{
        localStorage.setItem('userToken', data.access)
        window.location.href = 'http://127.0.0.1:5501/home.html'
    })
})