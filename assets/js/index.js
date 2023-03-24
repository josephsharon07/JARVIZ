if (document.cookie.split(';').some((item) => item.trim().startsWith('jarvizuser='))) {
    // Extract the cookie value
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('jarvizuser='))
        .split('=')[1];

    // Convert the cookie value from a string to an object
    var userData = JSON.parse(cookieValue);

    // Check if the cookie has expired
    var now = new Date();
    var expiryDate = new Date(userData.expiry);
    if (now > expiryDate) {
      // Cookie has expired, delete it
      document.cookie = 'jarvizuser=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
    } else {
      // Cookie is still valid, use the user data
      var firstname = userData.firstName;
      var lastname = userData.lastName;
      var email = userData.email;
      var phone = userData.phone;
      var username = userData.username;
      var dateofbirth = userData.dob;
      userdiaplay(firstname);
    }
  } else {
    document.getElementById("user").style.display = "none";
  }

function userdiaplay(firstname)
{
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "none";
  document.getElementById("welcome").innerHTML = "Welcome "+firstname;
}

function logout()
{
  document.cookie = 'jarvizuser=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
  window.location.href="/index.html";
}