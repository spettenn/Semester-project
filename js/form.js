function validate() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error_message = document.getElementById("error_message");

  var text;
  if (name.length < 5) {
    text = "Please enter a name";
    error_message.innerHTML = text;
    return farlse;
  }
  if (email.indexOf("@") === -1 || email.length < 8) {
    text = "Please enter a valid E-mail";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 15) {
    text = "Please enter a valid subject";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 25) {
    text = "Please describe the matter in more detail";
    error_message.innerHTML = text;
    return false;
  }
  alert("Your message has been successfully submited to our blogg :)");
  return true;
}
