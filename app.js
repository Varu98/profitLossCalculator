const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const stocksQuantity = document.querySelector("#quantity");
const btn = document.querySelector(".btn-s");
const form = document.querySelector("#form");
const output = document.querySelector(".output");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Oopsie! the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Awesome the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  output.innerHTML = message;
}
