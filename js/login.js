/*This Script allows people to enter by using a form that asks for a
Username and Password*/

function uid_failed() {
  //this code will run if the username is incorrect
  Swal.fire({
    title: 'oops...',
    text: "Your Username is incorrect",
    icon: 'error',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ok',
  }).then((result) => {
    if (result.isConfirmed) {
      //null
    }
  })
}

function psw_failed() {
  //this code will run if the password is incorrect
  Swal.fire({
    title: 'oops...',
    text: "Your Password is incorrect",
    icon: 'error',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ok',
  }).then((result) => {
    if (result.isConfirmed) {
      //null
    }
  })
}


function pasuser(form) {

 //use these logins for test purposes 
if (form.identifier.value=="admin") { 
console.log(form.identifier.value)
if (form.pass.value=="user") { 
  window.location.assign('https://assalaminstitute.ca/resetsheet.html');
} else {
  psw_failed();
}
//test js end
} else {
    //ZAAKIR SHEIKH
  if (form.identifier.value=="zaakir.sheikh") { 
    console.log(form.identifier.value)
    if (form.pass.value=="6302009") {
      window.location.assign('https://assalaminstitute.ca/zaakirS.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
  }

  //ABBAS ALVI
  if (form.identifier.value=="abbas.alvi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10272008") {
      window.location.assign('https://assalaminstitute.ca/abbas_alvi.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
  }

  //ABDUSSAMAD SIDDIQI
  if (form.identifier.value=="abdussamad.siddiqi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12072008") {
      window.location.assign('https://assalaminstitute.ca/abdussamad_siddiqi.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

   //ABDULLAH MALEK
  if (form.identifier.value=="abdullah.malek") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12082007") {
      window.location.assign('https://assalaminstitute.ca/abdullah_malek.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}  
 
  //ABDUR_RAFAY KHAN
  if (form.identifier.value=="abdur-rafay.khan") { 
    console.log(form.identifier.value)
    if (form.pass.value=="3242009") {
      window.location.assign('https://assalaminstitute.ca/abdur-rafay_khan.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}  
 
  //ABUZAR
  if (form.identifier.value=="abuzar.popalzai") { 
    console.log(form.identifier.value)
    if (form.pass.value=="4142010") {
      window.location.assign('https://assalaminstitute.ca/abuzar.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //AFFAN SHAIKH
  if (form.identifier.value=="affan.shaikh") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10262006") {
      window.location.assign('https://assalaminstitute.ca/affan_s.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //AFNAN MIRZA
  if (form.identifier.value=="afnan.mirza") { 
    console.log(form.identifier.value)
    if (form.pass.value=="6032011") {
      window.location.assign('https://assalaminstitute.ca/afnan_m.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //BASIL AHMED
  if (form.identifier.value=="basil.ahmed") { 
    console.log(form.identifier.value)
    if (form.pass.value=="6062007") {
      window.location.assign('https://assalaminstitute.ca/basil_a.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
   //BILAL M
  if (form.identifier.value=="bilal.mohammed") { 
    console.log(form.identifier.value)
    if (form.pass.value=="7052004") {
      window.location.assign('https://assalaminstitute.ca/bilal_m.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //HAMDAAN ABDUL SUBOOR
  if (form.identifier.value=="hamdaan.abdulsuboor") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10232008") {
      window.location.assign('https://assalaminstitute.ca/hamdaan_abdul_suboor.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //HAMZA MOHAMED
  if (form.identifier.value=="hamza.mohamed") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10092009") {
      window.location.assign('https://assalaminstitute.ca/hamza_m.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
 //HASEEB AZIZ
  if (form.identifier.value=="haseeb.aziz") { 
    console.log(form.identifier.value)
    if (form.pass.value=="4112006") {
      window.location.assign('https://assalaminstitute.ca/haseeb.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //HASSAN
  if (form.identifier.value=="hassan.hussain") { 
    console.log(form.identifier.value)
    if (form.pass.value=="M7242000") {
      window.location.assign('https://assalaminstitute.ca/hassan_h.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //HUMDAAN SYED
  if (form.identifier.value=="humdaan.syed") { 
    console.log(form.identifier.value)
    if (form.pass.value=="1192012") {
      window.location.assign('https://assalaminstitute.ca/humdaanS.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //HUNAYN AFRIDI
  if (form.identifier.value=="Hunayn.afridi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="Afridi") {
      window.location.assign('https://assalaminstitute.ca/hunaynA.html');
    } else {
      psw_failed();
    }
    } else {
}
 
  //HUZAIFAH
  if (form.identifier.value=="huzaifah.popalzai") { 
    console.log(form.identifier.value)
    if (form.pass.value=="7152012") {
      window.location.assign('https://assalaminstitute.ca/huzaifah_popalzai.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //IRFAN SH.
  if (form.identifier.value=="irfan.shaikh") { 
    console.log(form.identifier.value)
    if (form.pass.value=="4012010") {
      window.location.assign('https://assalaminstitute.ca/irfan.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //ISMAEL SHERIF
  if (form.identifier.value=="ismael.sherif") { 
    console.log(form.identifier.value)
    if (form.pass.value=="4022010") {
      window.location.assign('https://assalaminstitute.ca/ismael.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
  
  
  //LUQMAAN SHAIKH
  if (form.identifier.value=="luqmaan.shaikh") { 
    console.log(form.identifier.value)
    if (form.pass.value=="Luqm@@n01") {
      window.location.assign('https://assalaminstitute.ca/luqmaanS.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //MARYAM ABDULLAH
  if (form.identifier.value=="maryam.abdullah") { 
    console.log(form.identifier.value)
    if (form.pass.value=="13302010") {
      window.location.assign('https://assalaminstitute.ca/maryam_a.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //MOHIB MALIK
  if (form.identifier.value=="mohib.malek") { 
    console.log(form.identifier.value)
    if (form.pass.value=="mikail12") {
      window.location.assign('https://assalaminstitute.ca/mohib.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
   
 //MUHAMMAD KHANDWALLA
  if (form.identifier.value=="muhammad.khandwalla") { 
    console.log(form.identifier.value)
    if (form.pass.value=="2142010") {
      window.location.assign('https://assalaminstitute.ca/muhammad-k.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
 //MUHAMMAD MEHRABAN
  if (form.identifier.value=="muhammad.mehraban") { 
    console.log(form.identifier.value)
    if (form.pass.value=="6062009") {
      window.location.assign('https://assalaminstitute.ca/muhammadm.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //MUNIR KHAN
  if (form.identifier.value=="munir.khan") { 
    console.log(form.identifier.value)
    if (form.pass.value=="1092009") {
      window.location.assign('https://assalaminstitute.ca/munir.html');
    } else {   
      psw_failed();
    }
    } else {
      uid_failed();
}

  //MUSTAFA KHAN
if (form.identifier.value=="mustafa.khan") { 
  console.log(form.identifier.value)
  if (form.pass.value=="3152008") {
    window.location.assign('https://assalaminstitute.ca/mustafa.html');
  } else {
    psw_failed();
  }
  } else {
    uid_failed();
}

  //NABIL K
if (form.identifier.value=="nabil.kalifa") { 
  console.log(form.identifier.value)
  if (form.pass.value=="11122009") {
    window.location.assign('https://assalaminstitute.ca/nabil.html');
  } else {
    psw_failed();
  }
  } else {
    uid_failed();
}

   //RAASHID ABDULLAH
  if (form.identifier.value=="raashid.abdullah") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10302008") {
      window.location.assign('https://assalaminstitute.ca/raashid-a.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //RAYAN MIRZA
  if (form.identifier.value=="rayan.mirza") { 
    console.log(form.identifier.value)
    if (form.pass.value=="6102009") {
      window.location.assign('https://assalaminstitute.ca/rayan-m.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //SADIQ M
  if (form.identifier.value=="sadiq.merchant") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12202007") {
      window.location.assign('https://assalaminstitute.ca/sadiq.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //SAFA ALVI
  if (form.identifier.value=="safa.alvi") { 
    console.log(form.identifier.value)
    if (form.pass.value=="5192010") {
      window.location.assign('https://assalaminstitute.ca/safa.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //SIDIK KARATELLA
  if (form.identifier.value=="sidik.karatella") { 
    console.log(form.identifier.value)
    if (form.pass.value=="2162008") {
      window.location.assign('https://assalaminstitute.ca/sidik.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
   //TAHA ABDULLAH
  if (form.identifier.value=="taha.abdullah") { 
    console.log(form.identifier.value)
    if (form.pass.value=="9202007") {
      window.location.assign('https://assalaminstitute.ca/taha.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
   //TALHA KHAN
  if (form.identifier.value=="talha.khan") { 
    console.log(form.identifier.value)
    if (form.pass.value=="5172005") {
      window.location.assign('https://assalaminstitute.ca/talha.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //UMAR SYED
  if (form.identifier.value=="umar.syed") { 
    console.log(form.identifier.value)
    if (form.pass.value=="1142006") {
      window.location.assign('https://assalaminstitute.ca/umar_syed.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //UMER CHAUDHARY
  if (form.identifier.value=="umer.chaudhary") { 
    console.log(form.identifier.value)
    if (form.pass.value=="3152010") {
      window.location.assign('https://assalaminstitute.ca/umerc.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //USMAN CHAUDHARY
  if (form.identifier.value=="usman.chaudhary") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12162011") {
      window.location.assign('https://assalaminstitute.ca/usmanc.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
  //UTHMAN QADRI
  if (form.identifier.value=="uthman.qadri") { 
    console.log(form.identifier.value)
    if (form.pass.value=="9202008") {
      window.location.assign('https://assalaminstitute.ca/uthmanq.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
 
 //YAHHYA MEHRABAN
  if (form.identifier.value=="yahhya.mehraban") { 
    console.log(form.identifier.value)
    if (form.pass.value=="9222011") {
      window.location.assign('https://assalaminstitute.ca/yahhyaM.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
  
  //YOUSUF MEHMOOD
  if (form.identifier.value=="yousuf.mehmood") { 
    console.log(form.identifier.value)
    if (form.pass.value=="11112007") {
      window.location.assign('https://assalaminstitute.ca/yousufM.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}

  //YUSUF AMJAD
  if (form.identifier.value=="yusuf.amjad") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10302007") {
      window.location.assign('https://assalaminstitute.ca/yusufA.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}


  //YUSUF GONZALEZ
  if (form.identifier.value=="yusuf.gonzalez") { 
    console.log(form.identifier.value)
    if (form.pass.value=="5252010") {
      window.location.assign('https://assalaminstitute.ca/yusufG.html');
    } else {
      psw_failed();
    }
    } else {
}

  //YUSUF HUSAINI
  if (form.identifier.value=="yusuf.husaini") { 
    console.log(form.identifier.value)
    if (form.pass.value=="10022007") {
      window.location.assign('https://assalaminstitute.ca/yusufH.html');
    } else {
      psw_failed();
    }
    } else {
}
    
  //ZAIGHAM KHAWAJA
  if (form.identifier.value=="zaigham.khawaja") { 
    console.log(form.identifier.value)
    if (form.pass.value=="8062010") {
      window.location.assign('https://assalaminstitute.ca/zaigham.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
  
  //ZAYD IKRAM
  if (form.identifier.value=="zayd.ikram") { 
    console.log(form.identifier.value)
    if (form.pass.value=="12072009") {
      window.location.assign('https://assalaminstitute.ca/zaydI.html');
    } else {
      psw_failed();
    }
    } else {
      uid_failed();
}
    


//end of login.js there should be no else statments using last 2 brackets
  }
}
