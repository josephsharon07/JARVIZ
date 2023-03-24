const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 

function base64ToText(base64) {
  return decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

/**
 * Changes the font of the textarea to Arial or a sans-serif font.
 */
function changeTextareaFont() {
    const myTextarea = document.getElementById('myTextarea'); // get a reference to the textarea element
    myTextarea.style.fontFamily = 'Arial, sans-serif'; // set the font family to Arial or a sans-serif font
  }
  
  // call the function to change the textarea font

fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;
    const myVariable = base64ToText(myData.content); // variable with the value you want to set
    const myTextarea = document.getElementById('myTextarea'); // get a reference to the textarea element
    myTextarea.value = myVariable; // set the value of the textarea to the value of the variable
    const button = document.getElementById("myLink");
    button.href = "https://chinathanna001.github.io/College/"+myData.path;
    console.log(myData.name);
    heading = document.getElementById("head");
    heading.textContent = myData.name;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  changeTextareaFont();

  // JavaScript code to copy the content of the textarea to the clipboard
const copyButton = document.getElementById('copyButton'); // get a reference to the copy button element
const myTextarea = document.getElementById('myTextarea'); // get a reference to the textarea element

copyButton.addEventListener('click', () => { // add a click event listener to the copy button
  myTextarea.select(); // select the content of the textarea
  myTextarea.setSelectionRange(0, 99999); // set the selection range to include all the content
  document.execCommand('copy'); // copy the selected content to the clipboard
});
