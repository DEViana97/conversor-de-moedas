const button = document.getElementById("button");
const select = document.getElementById("currency-select");

async function convertValues() {
  const inputValue = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("dolar-value-text");

  const data = await fetch(
    "http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolar = data.USDBRL.high;
  const euro = data.BTCBRL.high;
  const bitcoin = data.BTCBRL.high;

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
    case "Bitcoin BTC":
      currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue / bitcoin);
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
    case "Bitcoin BTC":
      currencyName.innerHTML = "Bitcoin";
      currencyImg.src = "./imgs/bitcoin.png";
      break;
    default:
      alert("Error");
  }
  convertValues();
}

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
