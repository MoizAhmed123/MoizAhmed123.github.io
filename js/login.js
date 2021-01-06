function checkIfUserIsLoggedIn() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(!user){
      window.location.assign('https://assalaminstitute.ca/login.html')
    }
  })
}

function checkIfUserIsLoggedOut() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      login();
    }
  })
}

function checkUser(UID, FILE) {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      if(user.uid === UID) return window.location = FILE
    } else {
      let email = document.getElementById("emailInput1").value;
      let password = document.getElementById("passwordInput1").value;
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        Swal.fire({
          title: `${email} Logged in`,
          timer: 10000,
          timerProgressBar: true,
          didOpen: () => {
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
            window.location = FILE
        })
      }).catch((error) => {
        Swal.fire({
          title: error.message,
          timer: 10000,
          timerProgressBar: true,
          didOpen: () => {
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          return;
        })
      })
    }
  })
}

function logout(){
  firebase.auth().onAuthStateChanged(function(user) {
      if(user){
          firebase.auth().signOut().then(() => {
              window.location="login.html"
            }).catch((error) => {
              Swal.fire({
                  title: error.message,
                  timer: 10000,
                  timerProgressBar: true,
                  didOpen: () => {
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent()
                      if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                          b.textContent = Swal.getTimerLeft()
                        }
                      }
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
              }).then((result) => {
                return;
              })
          });
      } else {
          window.location="login.html"
      }
  })
}

function login() {
  checkUser('NyA8iRKneeUKBPQWpS1MPUO03tu2', 'resetsheet.html'); //admin account
  checkUser('N5B94byvBUddRH53kQ7Yhhp1nAC3', 'zaakirS.html'); //Zaakir
  checkUser('uEcv5sBHqDfxVf0IiCkdBSzzITX2', 'abbas_alvi.html'); //abbas
  checkUser('ppDqqgHmXchKk7dGS90hkQz9yUq1', 'abdussamad_siddiqi.html'); //abdussamad
  checkUser('yL8qHbpfUFZD7045BvYmZybtXR73', 'abdullah_malek.html'); //Abdullah Malek
  checkUser('pts6EzfsQyQWhxD7onzvU4pBehh1', 'abdur-rafay_khan.html'); //Abdurrafay
  checkUser('S3Ti5aS9EmYKVNmSN0rSKj01H113', 'abuzar.html'); //Abuzar
  checkUser('lZt8XdMWpiarmnZmcrZQV48qem83', 'affan_s.html'); //Affan Shaikh
  checkUser('gC7uRVGvIsewk9plmLebQomT6A62', 'afnan_m.html'); //afnan Mirza
  checkUser('0bHaYkVi04UWRBSWj4n5k2EqjE03', 'basil_a.html'); //Basil Ahmed
  checkUser('IsmVwhDQqDOWpQ3EIXKBabpPVD73', 'bilal_m.html'); //Bilal muhammad
  checkUser('OmnvjCIScSUTS7J86aS3qj4gG8L2', 'hamdaan_abdul_suboor.html'); //Hamdaan abdul saboor
  checkUser('YzrbedTmcNNtWCb3uB61x7wdNR72', 'hamza_m.html'); //Hamza Muhammad


/** dont uncomment yet 
 
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

**/
    
}