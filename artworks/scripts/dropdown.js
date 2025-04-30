//load page with expanded project descriptions hidden
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expanded-block').forEach(block => {
      block.classList.add('hidden');
    });
});

/*toggle expanded description visibility 
when project preview is clicked*/
document.querySelectorAll('.preview').forEach(preview => {
    preview.addEventListener('click', () => {
      const next = preview.nextElementSibling;
      if (next && next.classList.contains('expanded-block')) {
        next.classList.toggle('hidden');
      }
    });
  });
  