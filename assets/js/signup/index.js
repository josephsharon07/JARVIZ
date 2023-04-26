var succalert = document.getElementById("succalert");
succalert.style.display = "none";
const firebaseConfig = {
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

// Get references to Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
// Get the alert element by its ID



// Signup form submission handler
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get values from form inputs
  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const firstName = signupForm.firstname.value;
  const lastName = signupForm.lastname.value;
  const password = signupForm.password.value;
  const dateOfBirth = signupForm.dateofbirth.value;
  const phoneNumber = signupForm.phonenumber.value;

  // Check if username or phone number already exist in Firestore
  db.collection('users').where('username', '==', username).get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        // Username already exists
        alert('Username already exists');
        return;
      }

      db.collection('users').where('phoneNumber', '==', phoneNumber).get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            // Phone number already exists
            alert('Phone number already exists');
            return;
          }

          // Create new user with Firebase Authentication
          auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // User created successfully
              const user = userCredential.user;

              // Add user data to Firestore
              db.collection('users').doc(user.uid).set({
                username: username,
                email: email,
                firstName: firstName,
                lastName: lastName,
                date_Of_Birth: dateOfBirth,
                phoneNumber: phoneNumber
              })
              .then(() => {
                // User data added to Firestore successfully
                alert('Signup Sucessfull!..');
                succalert.style.display = 'block';
                setTimeout(2000);
                window.location.href = ('http://jarviz.live/login/index.html');
              })
              .catch((error) => {
                console.error('Error adding user data to Firestore:', error);
              });
            })
            .catch((error) => {
              console.error('Error creating user with Firebase Authentication:', error);
            });
        })
        .catch((error) => {
          console.error('Error checking if phone number already exists:', error);
        });
    })
    .catch((error) => {
      console.error('Error checking if username already exists:', error);
    });
});
