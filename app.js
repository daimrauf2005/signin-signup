import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXfZhi0ovpjpGLuRyV5dzT7uEFSaqGHw4",
  authDomain: "mycv-2cf47.firebaseapp.com",
  databaseURL: "https://mycv-2cf47.firebaseio.com",
  projectId: "mycv-2cf47",
  storageBucket: "mycv-2cf47.appspot.com",
  messagingSenderId: "987255097152",
  appId: "1:987255097152:web:27a651a755843bc5549ca5",
};

const app = initializeApp(firebaseConfig);
console.log(app);

const auth = getAuth(app);
console.log(auth);

const email_signup = document.getElementById("email");
const password_signup = document.getElementById("password");
const btn_signup = document.getElementById("signup_btn");

const email_login = document.getElementById("email_login");
const password_login = document.getElementById("password_login");
const login_btn = document.getElementById("login_btn");

const logout_btn = document.getElementById("logout_btn");
const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");
const user_email = document.getElementById("user_email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    console.log("User is logged In", user);
    const uid = user.uid;
  } else {
    console.log("User is signed out");
    auth_container.style.display = "block";
    user_container.style.display = "none";
    
  }
});

btn_signup.addEventListener("click", () => {
  //   console.log("email=>", email_login.value);
  //   console.log("password=>", password_signup.value);
  createUserWithEmailAndPassword(
    auth,
    email_signup.value,
    password_signup.value
  )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorCode, errorMessage);
      alert(errorMessage);
    });
});

login_btn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email_login.value, password_login.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user after login=>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

logout_btn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
    })
    .catch((error) => {
    });
});

const isUser = false;

if (isUser) {
    console.log('user', user)
} else if (isUser == false){}