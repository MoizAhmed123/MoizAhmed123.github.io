function validate() 
{

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (username=="admin"&& password=="user") {
        window.location="https://assalaminstitute.ca/abbas_alvi.html"
        alert("login succesfull!");
        return false;
    }
    else
    {
        alert("login failed");
    }

}