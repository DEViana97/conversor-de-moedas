const button = document.getElementById("button");
const select = document.getElementById("currency-select");

const dolar = 5.2;
const euro = 6.9;

function convertValues() {
  const inputValue = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("dolar-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  switch (select.value) {
    case "US$ Dólar Americano":
      currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue / dolar);
      break;
    case "€ Euro":
      currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputValue / euro);
      break;
    default:
      alert("error");
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-image");
  switch (select.value) {
    case "€ Euro":
      currencyName.innerHTML = "Euro";
      currencyImg.src = "./imgs/euro.png";
      break;
    case "US$ Dólar Americano":
      currencyName.innerHTML = "Dólar";
      currencyImg.src = "./imgs/dolar.png";
      break;
    default:
      alert("Error");
  }
  convertValues();
}

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
