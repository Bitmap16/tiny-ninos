// Utility function for dragging elements
function makeDraggable(el, handle) {
  handle = handle || el;
  handle.style.cursor = 'move';
  handle.addEventListener('mousedown', function(e) {
    let offsetX = e.clientX - el.getBoundingClientRect().left;
    let offsetY = e.clientY - el.getBoundingClientRect().top;
    function mouseMoveHandler(e) {
      el.style.left = (e.clientX - offsetX) + 'px';
      el.style.top = (e.clientY - offsetY) + 'px';
    }
    function reset() {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', reset);
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', reset);
  });
}

// Show the window when the icon is clicked
document.getElementById('myAppIcon').addEventListener('click', function() {
  let win = document.getElementById('myAppWindow');
  win.style.left = '150px'; // initial position
  win.style.top = '150px';
  win.classList.add('active');
});

// Close the window when the close button is clicked
document.getElementById('closeMyApp').addEventListener('click', function() {
  document.getElementById('myAppWindow').classList.remove('active');
});

// Make the window draggable using the titlebar as the handle
makeDraggable(document.getElementById('myAppWindow'), document.getElementById('myAppTitlebar'));
