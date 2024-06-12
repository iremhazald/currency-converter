const amountInput = document.querySelector("#amount");
const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const convertButton = document.querySelector("#convertEvent");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  convertButton.addEventListener("click", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOption =
    firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;

  const secondOption =
    secondCurrencyOption.options[secondCurrencyOption.selectedIndex]
      .textContent;

  currency.exchange(amount, firstOption, secondOption).then((result) => {
    resultInput.value = result.toFixed(3);
  });
}
