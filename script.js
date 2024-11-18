document.querySelectorAll('.card').forEach((card, index) => {
    card.style.setProperty('--delay', index + 1);
  });
  