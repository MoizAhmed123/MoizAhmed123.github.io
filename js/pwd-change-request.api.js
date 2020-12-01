window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("pwd-c-r");
    var status = document.getElementById("pwd-submit-button");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "Thanks!";
      //window.location.assign('https://assalaminstitute.ca/redirect.html');
      sw2();
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      window.location.assign('https://assalaminstitute.ca/pwd.or.uid.request.failed.html');
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}

function sw2() {
  Swal.fire({
    title: 'ttest',
    text: "test",
    icon: 'success',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ok'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.assign('https://assalaminstitute.ca/index.html');
    }
  })
}