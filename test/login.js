import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-9VZCOJSjPdtE9gK5o2jOwZwGtau-kA8",
    authDomain: "unique-deals-4627c.firebaseapp.com",
    projectId: "unique-deals-4627c",
    storageBucket: "unique-deals-4627c.firebasestorage.app",
    messagingSenderId: "584787751433",
    appId: "1:584787751433:web:c837c521be96368d8cbed8",
    measurementId: "G-5PYZD1HGZ8"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Loggin in user");
        window.location.href = "../index.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        alert(errorMessage);
        // ...
    });
    alert("User has been logged in successfully");
});