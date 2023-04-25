const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 
var path;
var naame;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;// variable with the value you want to set
    path = myData.path;
    naame = myData.name;
    console.log(myData.name);
    heading = document.getElementById("head");
    heading.textContent = myData.name;
    filesize = document.getElementById("file-size");
    filesize.textContent = myData.size < 1048576 ? (((myData.size)/(1024)).toFixed(2) + " KB"):(((myData.size)/(1024*1024)).toFixed(2) + " MB");
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  
  function  downloadFile() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://files.jarviz.live/"+path, true);
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
        if (this.status == 200) {
            var blob = new Blob([this.response], {type: 'application/octet-stream'});
            saveAs(blob, naame);
        }
    };

    xhr.send();
}
