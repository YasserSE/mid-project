const SERVER_URL = "https://my-json-server.typicode.com/YasserSE/db.json/";

window.onload = () => {
  function _retrieveInfo() {
    const email = document.querySelector("#email").value;
    const newSub = {
      email
    };
    _contactVerification(newSub);
  }

  function _contactVerification(contact) {
    if((contact.email.length === 0) || contact.email.indexOf("@") === -1) {alert("Email not valid.")}
    else {_postContact(contact)}
  }

  async function _postContact(contact) {
    fetch(`${SERVER_URL}/newsletter`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((response) =>
        alert("Thank you for subscribing.")
      )
      .catch((err) => alert("Something went wrong", err));
  }

  function _bindButton() {
    const submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", _retrieveInfo);
  }

  _bindButton();
};
