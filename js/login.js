/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
if (form.identifier.value=="admin") { 
console.log(form.identifier.value)
if (form.pass.value=="user") { 
  window.location.assign('https://assalaminstitute.ca/contact.html');
} else {
alert("Invalid Password");
}

} else {  alert("Invalid UserID");
}
}
