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

  // Initialize Firestore
  const db = firebase.firestore();


  const signUpBtn = document.querySelector("#signup");
  signUpBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get input values
    const email = document.querySelector("#Email").value;
    const username = document.querySelector("#Username").value;
    const firstName = document.querySelector("#FirstName").value;
    const lastName = document.querySelector("#LastName").value;
    const dob = document.querySelector("#DOB").value;
    const phone = document.querySelector("#Phone").value;
    const password = document.querySelector("#Password").value;
    
    // Call the function to create a user with email and password
    createUserWithEmail(email, password, username, firstName, lastName, dob, phone);
  });

    async function checkUserExists(email, username, phone) {
      let userExists = false;

      // Check if the email already exists
      const emailSnapshot = await db
        .collection("users")
        .where("email", "==", email)
        .get();
      if (!emailSnapshot.empty) {
        userExists = true;
        alert("Email already exists");
        return userExists;
      }

      // Check if the username already exists
      const usernameSnapshot = await db
        .collection("users")
        .where("username", "==", username)
        .get();
      if (!usernameSnapshot.empty) {
        userExists = true;
        alert("Username already exists");
        return userExists;
      }

      // Check if the phone number already exists
      const phoneSnapshot = await db
        .collection("users")
        .where("phone", "==", phone)
        .get();
      if (!phoneSnapshot.empty) {
        userExists = true;
        alert("Phone number already exists");
        return userExists;
      }

      return userExists;
    }
async function createUserWithEmail(email, password, username, firstName, lastName, dob, phone) {
  // Check if the user already exists
  const userExists = await checkUserExists(email, username, phone);
  if (userExists) {
    alert("User already exists");
    return;
  }

  try {
    // Create user with email and password
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    // Get the User UID
    const uid = user.uid;
    
    // Store user details in Firestore database
    await db.collection("users").doc(uid).set({
      email,
      username,
      firstName,
      lastName,
      dob,
      phone,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    alert("Signup successfully");
    window.location.href = "/sign-in/index.html";
  } catch (error) {
    console.error(error);
  }
}