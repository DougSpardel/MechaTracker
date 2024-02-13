//TODO add specific classes for the selectors and listener

const loginFormHandler = async (event) =>{
    event.preventDefault();

    const email = document.querySelector('#emailLog').value.trim();
    const password = document.querySelector('#passwordLog').value.trim();
try{
    if(email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-type': 'application/json'},
        });
        if(response.ok) {
            document.location.replace('/');}
        }}catch(err){
            console.log(err)
            alert('Failed to log in');
        }
    
};

document.addEventListener('submit',loginFormHandler);