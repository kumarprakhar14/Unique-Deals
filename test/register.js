import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

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
  
const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", (event) => {
    event.preventDefault();

    //inputs
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("User has been registered successfully");
        window.location.href = "login.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
    alert("User has been registered successfully");
});