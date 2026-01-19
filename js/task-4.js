const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const forms = [
    {
      email: `${email}`,
      password: `${password}`,
    },
  ];
  forms.push(email);
  forms.push(password);
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(forms);

  form.reset();
});
