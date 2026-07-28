const LEAD_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbysztFDbBsFtg4EaYsXujONh5Oa7KfrIO31ge9I6GwLWrodxsztPls6A4kyDpaAHxQiUA/exec';

const leadFrame = document.createElement('iframe');
leadFrame.name = 'abhee-lead-sink';
leadFrame.hidden = true;
document.body.appendChild(leadFrame);

document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const note = document.querySelector('#form-message');
  const button = form.querySelector('button');
  const source = document.createElement('input');

  source.type = 'hidden';
  source.name = 'source';
  source.value = 'Abhee Aaria Website';
  form.appendChild(source);

  form.action = LEAD_ENDPOINT;
  form.method = 'POST';
  form.target = leadFrame.name;
  form.submit();

  source.remove();
  button.disabled = true;
  note.textContent = 'Thank you. Our team will contact you shortly.';
  note.classList.add('success');
  document.querySelector('#plan-gate').classList.add('unlocked');
  document.querySelector('#unlock-note').textContent =
    'Your master plan is now unlocked.';
  form.reset();

  window.setTimeout(() => {
    button.disabled = false;
    button.innerHTML = 'Request a call <span>↗</span>';
  }, 1000);
});
