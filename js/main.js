function copyEmailToClipboard() {
  var email = "alicehon@andrew.cmu.edu";
  navigator.clipboard.writeText(email);
}


/* copied from https://www.w3schools.com/bootstrap5/bootstrap_popover.php */
/* popover animation for Email button */
function loadFunctions() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
}