function validate() 
{

    //get inputs from user
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    //validate inputs and redirect
    if (username=="admin"&& password=="user") {
        window.location="https://www.google.com";
        alert("login succesfull!");
        return false;
    }
    else
    {
        alert("Username or password incorrect, please try again");
    }

}