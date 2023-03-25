const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 

fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;
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

