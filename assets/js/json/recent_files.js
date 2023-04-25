fetch('/assets/js/json/recent_files.json')
  .then(response => response.json())
  .then(data => {
    const recentFilesDiv = document.getElementById('recent-files');

    data.forEach(file => {
      const fileLink = document.createElement('a');
      fileLink.href = file.url;
      fileLink.textContent = file.name;

      const fileItem = document.createElement('div');
      fileItem.classList.add('file-item');
      fileItem.appendChild(fileLink);

      recentFilesDiv.appendChild(fileItem);
    });
  });
