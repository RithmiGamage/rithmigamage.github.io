// Add interactivity if needed. Example: Log folder download events
document.querySelectorAll('.folder-box a').forEach((link) => {
    link.addEventListener('click', (event) => {
      console.log(`Folder ${event.target.previousElementSibling.textContent} downloaded.`);
    });
  });
  