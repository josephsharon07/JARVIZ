const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 
const type = urlParams.get('type'); 
var typee = type;
var path;
var naame;
console.log(type);
fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;
    console.log(type);
    path = myData.path;
    naame = myData.name;
    filesize = document.getElementById("file-size");
    filesize.textContent = myData.size < 1048576 ? (((myData.size)/(1024)).toFixed(2) + " KB"):(((myData.size)/(1024*1024)).toFixed(2) + " MB");    
    if (typee=="ipynb")
    {
      document.getElementById("view").style.display="block";
    }
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

function openincolab() {
  var openincolab = "https://colab.research.google.com/github/chinathanna001/College/blob/main/"+path;
  window.open(openincolab, '_blank');
}