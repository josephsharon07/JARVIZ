const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 


fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;// variable with the value you want to set
    const button = document.getElementById("myLink");
    button.href = "https://files.jarviz.live/"+myData.path;
    console.log(myData.name);
    heading = document.getElementById("head");
    heading.textContent = myData.name;
    filesize = document.getElementById("file-size");
    filesize.textContent = myData.size < 1048576 ? (((myData.size)/(1024)).toFixed(2) + " KB"):(((myData.size)/(1024*1024)).toFixed(2) + " MB");
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  
