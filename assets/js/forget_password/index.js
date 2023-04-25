var firebaseConfig = {
    apiKey: "AIzaSyAF0oB4pUeVsRUxxVFEK9OG76J5oPJ2KtY",
    authDomain: "j-a-r-v-i-z.firebaseapp.com",
    databaseURL: "https://j-a-r-v-i-z-default-rtdb.firebaseio.com",
    projectId: "j-a-r-v-i-z",
    storageBucket: "j-a-r-v-i-z.appspot.co",
    messagingSenderId: "227647255325",
    appId: "1:227647255325:web:12259d56206d8b552a67f4"
  };
  firebase.initializeApp(firebaseConfig);
// Function to reset password
function resetPassword() {
    var email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
        // Password reset email sent
        alert("Password reset email sent");
        window.location.href = "/login/index.html";
    })
    .catch(function(error) {
        // An error occurred
        alert(error.message);
    });
}