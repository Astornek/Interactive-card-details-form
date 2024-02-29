const thankYou = document.querySelector(".thank-you-section");
const confirmBtn = document.querySelector(".confirm-btn");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".name");
const cardExp = document.querySelector(".exp-date");
const cardCvc = document.querySelector(".cvc-code");
const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".card-number-input");
const inputExpM = document.querySelector(".exp-m");
const inputExpY = document.querySelector(".exp-y");
const inputCvc = document.querySelector(".cvc-input");
const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".card-error");
const cvcError = document.querySelector(".cvc-error");
const dateError = document.querySelector(".date-error");
const cardSection = document.querySelector(".card-section");
const inputSection = document.querySelector(".input-section");
const continueButton = document.querySelector(".continue-btn");

inputName.addEventListener("input", () => {
  cardName.textContent = inputName.value;
});

inputNumber.addEventListener("input", () => {
  cardNumber.textContent = inputNumber.value;
});

inputExpM.addEventListener("input", () => {
  const month = inputExpM.value.trim();
  const year = inputExpY.value.trim();
  cardExp.textContent = `${month}/${year}`;
});

inputExpY.addEventListener("input", () => {
  const month = inputExpM.value.trim();
  const year = inputExpY.value.trim();
  cardExp.textContent = `${month}/${year}`;
});

inputCvc.addEventListener("input", () => {
  cardCvc.textContent = inputCvc.value;
});

confirmBtn.addEventListener("click", () => {
  let hasErrors = false;
  const nameRegex = /^[A-Za-z]+$/;
  const nameValue = inputName.value.trim();
  if (nameValue === "" || !nameRegex.test(nameValue)) {
    nameError.classList.add("active");
    hasErrors = true;
  } else {
    nameError.classList.remove("active");
  }

  const cardNumberValue = inputNumber.value.trim();
  const cardNumberRegex = /^[0-9]+$/;
  if (cardNumberValue === "" || !cardNumberRegex.test(cardNumberValue)) {
    numberError.classList.add("active");
    hasErrors = true;
  } else {
    numberError.classList.remove("active");
  }

  const cvcValue = inputCvc.value.trim();
  const cvcRegex = /^[0-9]+$/;
  if (cvcValue === "" || !cvcRegex.test(cvcValue)) {
    cvcError.classList.add("active");
    hasErrors = true;
  } else {
    cvcError.classList.remove("active");
  }
  const month = inputExpM.value.trim();
  const year = inputExpY.value.trim();
  const monthRegex = /^(0?[1-9]|1[0-2])$/;
  const yearRegex = /^(20)\d{2}$/;

  if (
    month === "" ||
    !monthRegex.test(month) ||
    year === "" ||
    !yearRegex.test(year)
  ) {
    dateError.classList.add("active");
    hasErrors = true;
  } else {
    dateError.classList.remove("active");
  }
  if (!hasErrors) {
    thankYou.classList.add("active");
    inputSection.classList.add("off");
  } else {
    thankYou.classList.remove("active");
    inputSection.classList.remove("off");
  }
});
continueButton.addEventListener("click", () => {
  thankYou.classList.remove("active");
  inputSection.classList.remove("off");
});
