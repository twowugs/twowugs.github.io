document.querySelectorAll('.grid-item').forEach(el, index); {
    if (index == num - 1) el.classList.add('onstate');
    else el.classList.remove('onstate');
  }
  function onClick() {
    classList.add('onClick');
  }