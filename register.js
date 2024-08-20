const URL = ' http://127.0.0.1:8000/api/v1/'
const username = document.getElementById('username');
const password = document.getElementById('password');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const registrationForm = document.getElementById('register_form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    

    const data = {
        username: username.value,
        password: password.value,
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value
    };

    fetch(URL+'auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.status)
        }
        else{
            return response.json();
        }
        
    })
    .then((data) => {
        localStorage.setItem('UserData', JSON.stringify(data))
        window.location.href = 'http://127.0.0.1:5501/home.html'
    })
    .catch((error) => console.error(error));
});


