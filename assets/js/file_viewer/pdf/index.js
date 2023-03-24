const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 


fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;// variable with the value you want to set
    const myTextarea = document.getElementById('pdf'); // get a reference to the textarea element
    myTextarea.data = "https://chinathanna001.github.io/College/"+myData.path; // set the value of the textarea to the value of the variable
    const button = document.getElementById("myLink");
    button.href = myData.download_url;
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
