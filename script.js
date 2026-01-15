document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active'); // Toggles the 'active' class
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none'; // Toggles display
  });
});
