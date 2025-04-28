const form = document.querySelector('.callback__form');
const phoneInput = document.querySelector('.callback__input[type="tel"]');
const emailInput = document.querySelector('.callback__input[type="text"]');

form.addEventListener("submit", function(event) {
  // Проверка телефона: допускаем только цифры, пробелы, (), +, -
  const phoneValue = phoneInput.value.trim();
  if (phoneValue === "" || /[^\d\s()+-]/.test(phoneValue)) {
    alert("Некорректный формат телефона.");
    event.preventDefault();
    return;
  }

  // Проверка email
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    alert("Поле Email не должно быть пустым.");
    event.preventDefault();
    return;
  }

  const emailRegex = /^[A-Za-z\u0400-\u04FF0-9._+-]+@[A-Za-z\u0400-\u04FF0-9.-]+\.[A-Za-z\u0400-\u04FF]{2,6}$/;
  if (!emailRegex.test(emailValue)) {
    alert("Некорректный формат email.");
    event.preventDefault();
    return;
  }
});
