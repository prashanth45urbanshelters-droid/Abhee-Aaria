document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#form-message');
  note.textContent = 'Thank you. Our team will contact you shortly.';
  note.classList.add('success');
  document.querySelector('#plan-gate').classList.add('unlocked');
  document.querySelector('#unlock-note').textContent = 'Your master plan is now unlocked.';
  event.currentTarget.reset();
});
