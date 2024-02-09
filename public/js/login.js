//TODO add specific classes for the selectors and listener
const loginFormHandeler = async (event) =>{
    event.preventDefault();
    const email = document.querySelector('#email-id').value.trim();
    const password = document.querySelector('#password-id').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-type': 'application/json'},
        });
        if(response.ok) {
            document.location.replace('/');
        }else{
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.login-formclass')
    .addEventListener('submitbtn',loginFormHandeler);