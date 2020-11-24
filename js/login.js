function validate() 
{

    //get inputs from user
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const form = document.getElementById("form").value;



    //validate inputs and redirect
    if (username=="admin"&& password=="user") {
        window.location="https://assalaminstitute.ca/abbas_alvi.html";
        alert="login sucsessfull";
        return false;
    }
     
    



//failed login script
//alert="incorrect username or password"
//return false;
}