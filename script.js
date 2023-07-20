function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
   
    if (name === "" || email === "" || message === "") {
      alert("All fields are required");
      return false;
    }
    return true;
  }

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      form.submit();
    }
  });