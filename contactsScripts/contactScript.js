const SERVER_URL = "https://my-json-server.typicode.com/YasserSE/db.json/";

window.onload = () => {
  function _retrieveInfo() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const message = document.querySelector("#message").value;

    const newContact = {
      name,
      email,
      phone,
      message,
    };
    _contactVerification(newContact);
  }

  function _contactVerification(contact) {
    if ((typeof(contact.name) != String) && (contact.name.length < 3)) {alert("Name not valid. At least 3 letters.")}
    if ((contact.phone.length < 8) || (contact.phone.length > 14)) {alert("Number invalid. Must be between 9 and 14 numbers.")}
    if((contact.email.length === 0) || contact.email.indexOf("@") === -1) {alert("Email not valid.")}
    else {_postContact(contact)}
  }

  async function _postContact(contact) {
    fetch(`${SERVER_URL}/contacts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((response) =>
        alert("Thank you reaching out. Your request has been sent.")
      )
      .catch((err) => alert("Something went wrong", err));
  }

  function _bindButton() {
    const submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", _retrieveInfo);
  }

  _bindButton();
};
