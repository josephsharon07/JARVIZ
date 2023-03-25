const urlParams = new URLSearchParams(window.location.search); // get the URL parameters
const url = urlParams.get('url'); 

fetch(url)
  .then(response => response.json())
  .then(data => {
    const myData = data;
    filesize = document.getElementById("file-size");
    filesize.textContent = myData.size < 1048576 ? (((myData.size)/(1024)).toFixed(2) + " KB"):(((myData.size)/(1024*1024)).toFixed(2) + " MB") 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  let icon = document.querySelector('ion-icon');
  icon.onclick = function(){
    icon.classList.toggle('active');
  }

  $(function() {
    $(".heart").on("click", function() {
      $(this).toggleClass("is-active");
    });
  });

  