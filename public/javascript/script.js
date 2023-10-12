        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
        import {getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
       // Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyDg0HL-lPkTJu2vJ5ohqgJvIlOTmqNuskc",
  authDomain: "ecokraft-eco.firebaseapp.com",
  databaseURL: "https://ecokraft-eco-default-rtdb.firebaseio.com",
  projectId: "ecokraft-eco",
  storageBucket: "ecokraft-eco.appspot.com",
  messagingSenderId: "372550834618",
  appId: "1:372550834618:web:1c5203b34311e7b4c9e583",
  measurementId: "G-N9S2KV5KQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
        var signin=document.getElementById("signin");
        var db=getDatabase(app);
        signin.addEventListener("click",login);
        function login(){
        var email=document.getElementById("emailid").value;
        var password=document.getElementById("pwdid").value;
        set(ref(db,"signin/"),{
            Email:email,
            Password:password,
        })
        .then(()=>{
            alert("Signin Successfull");
            window.location.href="shoppingpage.html";
        })
        .catch((error)=>{
            alert(error);
        })
    }

const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () =>{
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () =>{
    logregBox.classList.remove('active');
});


