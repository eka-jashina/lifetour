const form = document.querySelector('.callback__form');
const phoneInput = document.querySelector('.callback__input[type="tel"]');
const emailInput = document.querySelector('.callback__input[type="text"]');

const phoneRegex = /^(7|8|\+7)?[\s(]*[0-9]{3}[\s)]*[-]?[\s]*[0-9]{3}[-]?[\s]*[0-9]{2}[-]?[\s]*[0-9]{2}$/;
const emailRegex = /^[A-Za-z\u0400-\u04FF0-9._%+-]+@[A-Za-z\u0400-\u04FF0-9.-]+\.[A-Za-z\u0400-\u04FF]{2,}$/;

function validatePhone() {
  const value = phoneInput.value.trim();
  phoneInput.setCustomValidity('');
  phoneInput.classList.remove('callback__input--error');

  if (value === '') {
    phoneInput.setCustomValidity('Пожалуйста, заполните это поле.');
  } else if (!phoneRegex.test(value)) {
    phoneInput.setCustomValidity('Некорректный формат телефона.');
  }

  if (!phoneInput.checkValidity()) {
    phoneInput.classList.add('callback__input--error');
    phoneInput.reportValidity();
    return false;
  }

  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  emailInput.setCustomValidity('');
  emailInput.classList.remove('callback__input--error');

  if (value === '') {
    emailInput.setCustomValidity('Пожалуйста, заполните это поле.');
  } else if (!emailRegex.test(value)) {
    emailInput.setCustomValidity('Некорректный формат email.');
  }

  if (!emailInput.checkValidity()) {
    emailInput.classList.add('callback__input--error');
    emailInput.reportValidity();
    return false;
  }

  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isPhoneValid = validatePhone();
  const isEmailValid = validateEmail();

  if (isPhoneValid && isEmailValid) {
    form.submit();
    form.reset();
  }
});
