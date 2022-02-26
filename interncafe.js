const firebaseConfig = {
    apiKey: "AIzaSyDXlEr7rFK_Qoy1sflPaQ3eIJOYRe4C0Dw",
    authDomain: "intern-cafe.firebaseapp.com",
    databaseURL: "https://intern-cafe-default-rtdb.firebaseio.com",
    projectId: "intern-cafe",
    storageBucket: "intern-cafe.appspot.com",
    messagingSenderId: "647016656337",
    appId: "1:647016656337:web:6eef99b0556f1dcd7b04f0"
};

// Initialize Firebase
//   const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


// ......................firebase authentication (signup)...............................

auth = firebase.auth();
db = firebase.firestore();
// function to manage signup when we click sign up button

function signup() {
    // initializing variables for the different inputs we have
    email = document.getElementById('email').value;

    password = document.getElementById('password').value;

    userName = document.getElementById('password').value;

    // statement to alert user that he has not put an email

    if (email == "") {
        alert("mail can't be empty!");
    }


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            arguments;
            alert("Successful");
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

}

//forgot password
function Forgotpassword(){
    email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("check your email");
            window.location.href="INTERN_SIGNIN.html"


            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            alert("failed"+errorMessage )
        });
}

function sign_up() {
    // initializing variables for the different inputs we have
    firstname = document.getElementById('firstname').value;

    surname = document.getElementById('surname').value;

    PHONE = document.getElementById('PHONE').value;

    email = document.getElementById('email').value;

    dob = document.getElementById('dob').value;

    check = document.getElementById('check').value;



    password = document.getElementById('password').value;

    userName = document.getElementById('USERNAME').value;

    // statement to alert user that he has not put an email

    if (email == "") {
        alert("mail cant be empty!");
    }


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            alert("sucess!");
            var user = userCredential.user;

            //   code to save userName in Firebase aUth
            user.updateProfile({
                displayName: userName
            }).then(() => {
                //   ......................push user to the main or shop part when he has signed up successfully............................
                window.location.href = "mainshop.html";


            })

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // incase it fails
            alert("creating failed" + errorMessage);

            // ..
        });


} 

//logout code
function log_out(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "INTERN_SIGNIN.html";
    }).catch((error) => {
        // An error happened.
        alert("login failed" + errorMessage);
    });
}

// the code for log in

function signin() {
    email = document.getElementById('email').value;

    password = document.getElementById('password').value;

    // statement to alert user that he has not put an email

    if (email == "") {
        alert("mail can't be empty!");
    }


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            alert("sucess!");
            var user = userCredential.user;
            //   ......................push user to the main or shop part when he has signed up successfully............................
            window.location.href = "intern.html";

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // incase it fails
            alert("login failed" + errorMessage);

            // ..
        });


}


// forgot password implementation

function forgot_pass() {
    email = document.getElementById('Email').value;

    auth.sendPasswordResetEmail(email);
    alert("check your email");

    window.location.href = "index.html";

}







//....................................log out fmction ..................................


function logout() {
    // import { getAuth, signOut } from "firebase/auth";

    auth = firebase.auth();
    auth.signOut().then(() => {


        // Sign-out successful.
        window.location.href = "index.html";
    }).catch((error) => {
        alert("login failed" + errorMessage);
        // An error happened.
    });

}
