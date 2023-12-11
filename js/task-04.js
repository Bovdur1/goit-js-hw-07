'use strict'

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
 event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === "" || password === "") {
        alert('All form fields must be filled in')
    }

    const loginFormValue = {
        email,
        password
    }

    console.log(loginFormValue);
    form.reset();
});


