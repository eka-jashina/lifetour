const form = document.querySelector('.callback__form');
const phoneInput = document.querySelector('.callback__input[type="tel"]');
const emailInput = document.querySelector('.callback__input[type="email"]');

const phoneRegex = /^(7|8|\+7)?[\s(]*[0-9]{3}[\s)]*[-]?[\s]*[0-9]{3}[-]?[\s]*[0-9]{2}[-]?[\s]*[0-9]{2}$/;
const emailRegex = /^[A-Za-z\u0400-\u04FF0-9._%+-]+@[A-Za-z\u0400-\u04FF0-9.-]+\.[A-Za-z\u0400-\u04FF]{2,}$/;

function validatePhone(value) {
  if (value === '') {
    return 'Пожалуйста, заполните это поле.';
  } else if (!phoneRegex.test(value)) {
    return 'Некорректный формат телефона.';
  }
  return '';
}

function validateEmail(value) {
  if (value === '') {
    return 'Пожалуйста, заполните это поле.';
  } else if (!emailRegex.test(value)) {
    return 'Некорректный формат email.';
  }
  return '';
}

phoneInput.addEventListener('input', () => {
  phoneInput.setCustomValidity('');
  phoneInput.classList.remove('callback__input--error');
});

emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity('');
  emailInput.classList.remove('callback__input--error');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const phoneValue = phoneInput.value.trim();
  const phoneError = validatePhone(phoneValue);

  if (phoneError) {
    phoneInput.setCustomValidity(phoneError);
    phoneInput.classList.add('callback__input--error');
    phoneInput.reportValidity();
    return;
  }

  const emailValue = emailInput.value.trim();
  const emailError = validateEmail(emailValue);

  if (emailError) {
    emailInput.setCustomValidity(emailError);
    emailInput.classList.add('callback__input--error');
    emailInput.reportValidity();
    return;
  }

  form.noValidate = true;
  form.submit();
  form.reset();
});
