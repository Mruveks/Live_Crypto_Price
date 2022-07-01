let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElement = document.getElementById('ETHUSDT');
let lastPrice = null;

wsETH.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};

let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement2 = document.getElementById('BTCUSDT');
let lastPrice2 = null;

wsBTC.onmessage = (event) => {
    let stockObject2 = JSON.parse(event.data);
    let price2 = parseFloat(stockObject2.p).toFixed(0);
    stockPriceElement2.innerText = price2;
    stockPriceElement2.style.color = !lastPrice2 || lastPrice2 === price2 ? 'black' : price2 > lastPrice2 ? 'green' : 'red';
    lastPrice2 = price2;
};

let wsAAVE = new WebSocket('wss://stream.binance.com:9443/ws/aaveusdt@trade');
let stockPriceElement3 = document.getElementById('AAVEUSDT');
let lastPrice3 = null;

wsAAVE.onmessage = (event) => {
    let stockObject3 = JSON.parse(event.data);
    let price3 = parseFloat(stockObject3.p).toFixed(2);
    stockPriceElement3.innerText = price3;
    stockPriceElement3.style.color = !lastPrice3 || lastPrice3 === price3 ? 'black' : price3 > lastPrice3 ? 'green' : 'red';
    lastPrice3 = price3;
};

let wsAVAX = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
let stockPriceElement4 = document.getElementById('AVAXUSDT');
let lastPrice4 = null;

wsAVAX.onmessage = (event) => {
    let stockObject4 = JSON.parse(event.data);
    let price4 = parseFloat(stockObject4.p).toFixed(2);
    stockPriceElement4.innerText = price4;
    stockPriceElement4.style.color = !lastPrice4 || lastPrice4 === price4 ? 'black' : price4 > lastPrice4 ? 'green' : 'red';
    lastPrice4 = price4;
};

let wsLUNA = new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@trade');
let stockPriceElement5 = document.getElementById('LUNAUSDT');
let lastPrice5 = null;

wsLUNA.onmessage = (event) => {
    let stockObject5 = JSON.parse(event.data);
    let price5 = parseFloat(stockObject5.p).toFixed(2);
    stockPriceElement5.innerText = price5;
    stockPriceElement5.style.color = !lastPrice5 || lastPrice5 === price5 ? 'black' : price5 > lastPrice5 ? 'green' : 'red';
    lastPrice5 = price5;
};

let wsMATIC = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
let stockPriceElement6 = document.getElementById('MATICUSDT');
let lastPrice6 = null;

wsMATIC.onmessage = (event) => {
    let stockObject6 = JSON.parse(event.data);
    let price6 = parseFloat(stockObject6.p).toFixed(2);
    stockPriceElement6.innerText = price6;
    stockPriceElement6.style.color = !lastPrice6 || lastPrice6 === price6 ? 'black' : price6 > lastPrice6 ? 'green' : 'red';
    lastPrice6 = price6;
};

let wsSOL = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let stockPriceElement7 = document.getElementById('SOLUSDT');
let lastPrice7 = null;

wsSOL.onmessage = (event) => {
    let stockObject7 = JSON.parse(event.data);
    let price7 = parseFloat(stockObject7.p).toFixed(2);
    stockPriceElement7.innerText = price7;
    stockPriceElement7.style.color = !lastPrice7 || lastPrice7 === price7 ? 'black' : price7 > lastPrice7 ? 'green' : 'red';
    lastPrice7 = price7;
};

let wsLTC = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
let stockPriceElement8 = document.getElementById('LTCUSDT');
let lastPrice8 = null;

wsLTC.onmessage = (event) => {
    let stockObject8 = JSON.parse(event.data);
    let price8 = parseFloat(stockObject8.p).toFixed(2);
    stockPriceElement8.innerText = price8;
    stockPriceElement8.style.color = !lastPrice8 || lastPrice8 === price8 ? 'black' : price8 > lastPrice8 ? 'green' : 'red';
    lastPrice8 = price8;
};

