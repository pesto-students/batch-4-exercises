const https = require('https');

const getOptions = {
  host: 'api.coinmarketcap.com',
  port: 80,
  path: '/v2/ticker/',
  method: 'GET',
};

function bitcoinTicker() {
  return new Promise((response, reject) => {
    const reqGet = https.request(getOptions, (res) => {
      res.on('data', (d) => {
        response(d);
      });
    });
    reqGet.end();
    reqGet.on('error', (e) => {
      reject(e);
    });
  });
}

export { bitcoinTicker };
