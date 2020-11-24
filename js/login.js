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
        window.location="https://assalaminstitute.ca/abbas_alvi.html";
        alert="login successfull";
        return false;
    }
     if (username=="zaakirsheikh"&& password=="6302009") {
        window.location="https://assalaminstitute.ca/zaakirS.html";
        alert="login successfull";
        return false; 
    



//failed login script
//alert="incorrect username or password"
//return false;
}
