const https = require('https');

function bitcoinTicker() {
  return new Promise((resolve) => {
    https.get('https://api.coinmarketcap.com/v2/ticker/', (resp) => {
      resp.on('data', data => resolve(JSON.parse(JSON.stringify(data))));
    });
  });
}

export { bitcoinTicker };
