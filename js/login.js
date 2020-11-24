function validate() 
{

    //get inputs from user
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const form = document.getElementById("form").value;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    
    //validate inputs and redirect
    if (username=="abbasalvi1"&& password=="test123") {
        window.location="https://assalaminstitute.ca/abbas_alvi.html";
        alert="login sucsessfull";
        return false;
    }
     
    



//failed login script
//alert="incorrect username or password"
//return false;
}