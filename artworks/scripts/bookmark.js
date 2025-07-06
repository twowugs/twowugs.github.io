

  const bookmarks = document.querySelectorAll('.bookmark');
  const spacer = document.querySelector('.spacer');

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      const isActive = bookmark.classList.contains('active');

      // remove active class from all bookmarks
      bookmarks.forEach(b => b.classList.remove('active'));

      // if clicked bookmark wasn't active, activate it and update spacer color
      if (!isActive) {
        bookmark.classList.add('active');

        // update background color to match clicked bookmark
        const bgColor = window.getComputedStyle(bookmark).backgroundColor;
        spacer.style.backgroundColor = bgColor;
      } else {
        // if deselected, reset spacer color 
        spacer.style.backgroundColor = '#292929'; 
      }
    });
  });

