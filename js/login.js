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
    }
    } else {
  }

  //ZAAKIR SHEIKH
  if (form.identifier.value=="abbas.alvi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10272008") {
      window.location.assign('https://assalaminstitute.ca/abbas_alvi.html');
    } else {
    }
    } else {
  }

  //ABDUSSAMAD SIDDIQI
  if (form.identifier.value=="abdussamad.siddiqi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12072008") {
      window.location.assign('https://assalaminstitute.ca/abdussamad_siddiqi.html');
    } else {
    }
    } else {
}

  //ABDUR_RAFAY KHAN
  if (form.identifier.value=="abdur-rafay.khan") { 
    console.log(form.identifier.value)
    if (form.pass.value=="3242009") {
      window.location.assign('https://assalaminstitute.ca/abdur-rafay_khan.html');
    } else {
    }
    } else {
}  
  //ABUZAR
  if (form.identifier.value=="abuzar.popalzai") { 
    console.log(form.identifier.value)
    if (form.pass.value=="4142010") {
      window.location.assign('https://assalaminstitute.ca/abuzar.html');
    } else {
    }
    } else {
}

  //AFFAN SH.
  if (form.identifier.value=="affan.shaikh") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10262006") {
      window.location.assign('https://assalaminstitute.ca/affan_s.html');
    } else {
    }
    } else {
}

  //HAMDAAN ABDUL SABOOR
  if (form.identifier.value=="hamdaan.abdulsuboor") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10232008") {
      window.location.assign('https://assalaminstitute.ca/hamdaan_abdul_saboor.html');
    } else {
    }
    } else {
}

  //HASEEB AZIZ
  if (form.identifier.value=="haseeb.aziz") { 
    console.log(form.identifier.value)
    if (form.pass.value=="4112006") {
      window.location.assign('https://assalaminstitute.ca/haseeb.html');
    } else {
    }
    } else {
}

    



//end of login.js there should be no else statments using last 2 brackets
  }
}
