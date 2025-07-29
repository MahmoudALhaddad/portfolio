document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  let valid = true;

  function validateField(id) {
    const field = form.querySelector(`#${id}`);
    if (!field.value.trim()) {
      field.classList.add('is-invalid');
      valid = false;
    } else {
      field.classList.remove('is-invalid');
    }
  }

  validateField('name');

  const emailField = form.querySelector('#email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value.trim())) {
    emailField.classList.add('is-invalid');
    valid = false;
  } else {
    emailField.classList.remove('is-invalid');
  }

  validateField('subject');
  validateField('message');

  if (valid) {
    alert('Thank you for contacting me! I will get back to you soon.');
    form.reset();
  }
});
