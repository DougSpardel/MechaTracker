//logs user in by comparing email and password an sending a post to routes/api/userRoutes
const loginFormHandler = async (event) =>{
    event.preventDefault();

//query for user input
    const email = document.querySelector('#emailLog').value.trim();
    const password = document.querySelector('#passwordLog').value.trim();
 
// post to the user routes
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
            
            //want to create element not alert
            alert('Failed to log in');
        }
    
};

document.addEventListener('submit',loginFormHandler);