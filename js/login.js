/*This Script allows people to enter by using a form that asks for a
Username and Password*/




function pasuser(form) {

 //use these logins for test purposes 
if (form.identifier.value=="admin") { 
console.log(form.identifier.value)
if (form.pass.value=="user") { 
  window.location.assign('https://assalaminstitute.ca/contact.html');
} else {
alert("Invalid Password");
}
//test js end
} else {
    //ABBAS ALVI
  if (form.identifier.value=="zaakir.sheikh") { 
    console.log(form.identifier.value)
    if (form.pass.value=="6302009") {
      window.location.assign('https://assalaminstitute.ca/zaakirS.html');
    } else {
    alert("Invalid Password");
    }
    } else {
    alert("Invalid Username");
    }

  //ZAAKIR SHEIKH
  if (form.identifier.value=="abbas.alvi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10272008") {
      window.location.assign('https://assalaminstitute.ca/abbas_alvi.html');
    } else {
    alert("Invalid Password");
    }
    } else {
    alert("Invalid Username");
  }

  //ABDUSSAMAD SIDDIQI
  if (form.identifier.value=="abdussamad.siddiqi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12072008") {
      window.location.assign('https://assalaminstitute.ca/abdussamad_siddiqi.html');
    } else {
    alert("Invalid Password");
    }
    } else {
    alert("Invalid Username");
    }
    



//end of login.js there should be no else statments using last 2 brackets
  }
}
