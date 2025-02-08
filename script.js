// Firebase configuration

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-9VZCOJSjPdtE9gK5o2jOwZwGtau-kA8",
  authDomain: "unique-deals-4627c.firebaseapp.com",
  projectId: "unique-deals-4627c",
  storageBucket: "unique-deals-4627c.firebasestorage.app",
  messagingSenderId: "584787751433",
  appId: "1:584787751433:web:c837c521be96368d8cbed8",
  measurementId: "G-5PYZD1HGZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const auth = getAuth();
auth.languageCode = 'en';

const googleLoginBtn = document.getElementById('google-login-btn');

googleLoginBtn.addEventListener('click', function() {
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    window.location.href = 'index.html';
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});

function updateUSerProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    // Update the profile section with the user data
    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-email').textContent = userEmail;
    document.getElementById('user-profile-picture').src = userProfilePicture;
}

updateUSerProfile()
// Sign out
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});





// document.querySelectorAll('#left-content #prod-desc h3').forEach(h3 => {
//     h3.addEventListener('click', () => {
//         document.querySelectorAll('#left-content #prod-desc p').forEach(p => p.style.display = 'none');
//         h3.nextElementSibling.style.display = 'block';
//     });
// });

document.querySelectorAll('#left-content #prod-desc h3').forEach(h3 => {
    h3.addEventListener('click', () => {
        // Remove .active class from all p elements
        document.querySelectorAll('#left-content #prod-desc p').forEach(p => p.classList.remove('active'));
        // Add .active class to the p sibling of the clicked h3
        h3.nextElementSibling.classList.add('active');
    });
});

// Show the first paragraph by default
document.querySelector('#left-content #prod-desc #des p').classList.add('active');