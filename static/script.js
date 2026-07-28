const LEAD_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbysztFDbBsFtg4EaYsXujONh5Oa7KfrIO31ge9I6GwLWrodxsztPls6A4kyDpaAHxQiUA/exec';

document.querySelector('#enquiry-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const note = document.querySelector('#form-message');
  const button = form.querySelector('button');
  const lead = Object.fromEntries(new FormData(form).entries());

  button.disabled = true;
  button.textContent = 'Sending…';

  try {
    await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(lead),
    });

    note.textContent = 'Thank you. Our team will contact you shortly.';
    note.classList.add('success');
    document.querySelector('#plan-gate').classList.add('unlocked');
    document.querySelector('#unlock-note').textContent =
      'Your master plan is now unlocked.';
    form.reset();
  } catch {
    note.textContent = 'Unable to send your enquiry. Please try again.';
  } finally {
    button.disabled = false;
    button.innerHTML = 'Request a call <span>↗</span>';
  }
});
