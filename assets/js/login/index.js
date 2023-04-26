var firebaseConfig = {
    apiKey: "AIzaSyAF0oB4pUeVsRUxxVFEK9OG76J5oPJ2KtY",
    authDomain: "j-a-r-v-i-z.firebaseapp.com",
    databaseURL: "https://j-a-r-v-i-z-default-rtdb.firebaseio.com",
    projectId: "j-a-r-v-i-z",
    storageBucket: "j-a-r-v-i-z.appspot.co",
    messagingSenderId: "227647255325",
    appId: "1:227647255325:web:12259d56206d8b552a67f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  const signUpBtn = document.querySelector("#login");
  signUpBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  var email = document.getElementById('Input').value;
  var password = document.getElementById('Password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var uid = user.uid;

      // Search for user data in Firestore
      firebase.firestore().collection('users').doc(uid).get()
        .then((doc) => {
          if (doc.exists) {
            // User document found, get user data
            var data = doc.data();

            // Store user data in a cookie
            var expires = new Date();
            expires.setTime(expires.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days
            document.cookie = `jarvizuser=${JSON.stringify(data)};expires=${expires.toUTCString()};path=/`;
            console.log("User data stored");
            alert('Login Sucessfull!!...');
            // Redirect to home page
            window.location.href = '/index.html';
          }
        });
      });
    });
