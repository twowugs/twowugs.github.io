const expandedBlocks = Array.from(document.querySelectorAll('.expanded-block'));

//load page with expanded project descriptions hidden
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expanded-block').forEach(block => {
      block.classList.add('hidden');
    });
});

/*
/*toggle expanded description visibility 
when project preview is clicked
document.querySelectorAll('.preview').forEach(preview => {
    preview.addEventListener('click', () => {
      const next = preview.nextElementSibling;
      if (next && next.classList.contains('expanded-block')) {
        next.classList.toggle('hidden');
      }
    });
  });

  */
  

  const scrollOffset = 200; 

  expandedBlocks.forEach((block, index) => {
    const parent = block.parentElement;
  
    parent.addEventListener('click', (event) => {
      const isVisible = !block.classList.contains('hidden');
  
      expandedBlocks.forEach((b, i) => {
        if (i === index) {
          if (isVisible) {
            b.classList.add('hidden');
          } else {
            b.classList.remove('hidden');
  
            // grab block's Y position relative to the document
            const blockTop = block.getBoundingClientRect().top + window.scrollY;
  
            // scroll to position block at the top of the page
            window.scrollTo({
              top: blockTop - scrollOffset,
              behavior: 'smooth'
            });
          }
        } else {
          b.classList.add('hidden');
        }
      });
  
      console.log('Clicked index:', index);
    });
  });
  
  