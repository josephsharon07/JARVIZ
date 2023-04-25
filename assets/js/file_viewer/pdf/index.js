
const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url');
var path;
var naame;
var sha;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;
    path = myData.path;
    naame = myData.name;
    sha = myData.sha;
    console.log(myData.sha);
    durl = "https://files.jarviz.live/" + myData.path;
    dname = myData.name;
    const myTextarea = document.getElementById('pdf'); // get a reference to the textarea element
    myTextarea.data = durl; // set the value of the textarea to the value of the variable
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
