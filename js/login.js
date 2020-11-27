/*This Script allows people to enter by using a form that asks for a
Username and Password*/
function pasuser(form) {
if (form.identifier.value=="admin") { 
console.log(form.identifier.value)
if (form.pass.value=="user") { 
  window.location.assign('https://assalaminstitute.ca/contact.html');
} else {
alert("Invalid Password");
}
} else {
  //alert("Invalid Username");

  if (form.identifier.value=="zaakir") { 
    console.log(form.identifier.value)
    if (form.pass.value=="sheikh") { 
      window.location.assign('https://assalaminstitute.ca/index.html');
    } else {
    alert("Invalid Password");
    }
    } else {
      alert("Invalid Username");
    }
  }


//end of function there should be now else statments using the end bracket
}
