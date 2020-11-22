function validate() 
{

    //get inputs from user
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    //validate inputs and redirect
    if (username=="admin"&& password=="user") {
        window.location="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBnbgVNqcYnZUp2HSoup84n1YCjNVZ299Php1bbT2EBKzrLOL-7f5t_h7fQr3392tIVIu9uU0hjecs/pubhtml?gid=0&single=true";
        return false;

    } 
    



//failed login script
//return false;
}