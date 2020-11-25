function validate() 
{

    //get inputs from user
    //var username = document.getElementById("username").value;
    //var password = document.getElementById("password").value;

    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var username = url.SearchParams.get("username");
    var password = url.SearchParams.get("password");

    //validate inputs and redirect
    if (username=="admin"&& password=="user") {
        alert="login sucsessfull";
        // similar behavior as an HTTP redirect
window.location.replace("https://assalaminstitute.ca/methods.html");

// similar behavior as clicking on a link
window.location.href = "https://assalaminstitute.ca/methods.html";
    }
    else {
       alert("the username " + username + ", or the password " + password + ", was not correct"); 
    }
     
    



//failed login script
//alert="incorrect username or password"
//return false;
}
