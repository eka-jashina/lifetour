const form = document.querySelector('.callback__form');
const phoneInput = document.querySelector('.callback__input[type="tel"]');
const emailInput = document.querySelector('.callback__input[type="email"]');

const phoneRegex = /^[\d\s()+-]+$/;
const emailRegex = /^[A-Za-z\u0400-\u04FF0-9._%+-]+@[A-Za-z\u0400-\u04FF0-9.-]+\.[A-Za-z\u0400-\u04FF]{2,}$/;

function validatePhone() {
  const value = phoneInput.value.trim();
  phoneInput.setCustomValidity('');
  phoneInput.classList.remove('callback__input--error');

  if (value === '') {
    phoneInput.setCustomValidity("Пожалуйста, заполните это поле.");
  } else if (!phoneRegex.test(value)) {
    phoneInput.setCustomValidity("Некорректный формат телефона.");
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
    emailInput.setCustomValidity("Пожалуйста, заполните это поле.");
  } else if (!emailRegex.test(value)) {
    emailInput.setCustomValidity("Неверный формат email.");
  }

  if (!emailInput.checkValidity()) {
    emailInput.classList.add('callback__input--error');
    emailInput.reportValidity();
    return false;
  }

  return true;
}

form.addEventListener("submit", function (event) {
  const isPhoneValid = validatePhone();
  const isEmailValid = validateEmail();

  if (!isPhoneValid || !isEmailValid) {
    event.preventDefault();
    return;
  }

  form.reset();
});



