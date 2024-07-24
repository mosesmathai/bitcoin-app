const btcPriceElement = document.getElementById('btc-price');
const ws = new WebSocket('wss://fstream.binance.com/ws/btcusdt@markPrice');
let lastPrice = null;

ws.onmessage = (event) => {
  let btcObject = JSON.parse(event.data)
  let price = parseFloat(btcObject.p).toFixed(2);
  btcPriceElement.innerText = price;
  btcPriceElement.style.color = !lastPrice || lastPrice === price ? "white" : lastPrice > price ? "red" : "green";

  lastPrice = price;
}