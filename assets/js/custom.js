// Prevent image copying
document.addEventListener('contextmenu', event => {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
}, false);
