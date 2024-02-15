//const api = require('../api.js')

const buttonLogin = document.getElementById('button_login');
const email = document.getElementById('email')
const password = document.getElementById('password')

console.log(buttonLogin);
console.log(email);
console.log(password);

buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()
    login(email.value, password.value)
},false
 
)

const login = (email, password) => {
    const BASE_API = 'https://fakestoreapi.com'


    fetch(BASE_API + '/auth/login',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            username: email,
            password: password
        })
    }).then(async (res)=> {
        if (res.status ==200) {
            window.location.replace("http://127.0.0.1:5500/cypress-shop/shop/index.html")
            return
        }
        alert(await res.text())
    })
}