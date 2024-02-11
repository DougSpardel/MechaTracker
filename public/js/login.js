//TODO add specific classes for the selectors and listener
const loginFormHandeler = async (event) =>{
    event.preventDefault();
    const email = document.querySelector('#emailLog').value.trim();
    const password = document.querySelector('#passwordLog').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-type': 'application/json'},
        });
        console.log('got it')
        if(response.ok) {
            document.location.replace('/');
        }else{
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.loginForm')
    .addEventListener('#logBtn',loginFormHandeler);