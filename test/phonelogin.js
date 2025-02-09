import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

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
auth.languageCode = 'en';

const sendOTPBtn = document.getElementById("sendOTP-btn");

// render invisible recaptcha
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

//Send verification code

const onSignInSubmit = sendOTPBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const phoneNumber = document.getElementById("mobile").value
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        document.getElementById("otpContainer").style.display = "block";
        document.getElementById("submitBtn").style.display = "block";
        // ...
        }).catch((error) => {
        // Error; SMS not sent
        console.log(error.message)
        appVerifier.render().then(function(widgetId) {
            grecaptcha.reset(widgetId);
          });
        // ...
        });
    
})


//Verify code
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (event) => {
const code = document.getElementById("otp").value;
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
}); 
});
