const URL = 'http://127.0.0.1:8000/api/v1/'
const token = localStorage.getItem('userToken')
const hello = document.getElementById('hi');
console.log(hello);

fetch(URL+'user/current_user', {
    method: 'GET',
    headers:{
        'Authorization': `Bearer ${token}`
    } 
})
.then(response=>{
    if (response.ok){
       return response.json()
    }else{
        throw new Error(response.statusText)
    }})
.then(data=>{
    hello.innerHTML = `Hello ${data.first_name}`
    
    
    
}).catch(err =>{
    window.location.href = 'http://127.0.0.1:5501/register.html'
    
})