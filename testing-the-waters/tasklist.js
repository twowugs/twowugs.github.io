var tasklist = document.getElementById("tasklist-container");
tasklist.style.display = 'none';

function toggleTasklist() {    
    if (tasklist.style.display === 'none') {
        tasklist.style.display = 'grid';
    } else {
        tasklist.style.display = 'none';
    }
  }
  