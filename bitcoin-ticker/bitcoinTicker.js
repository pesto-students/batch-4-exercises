import http from 'http';

function bitcoinTicker(options) {
  const cryptoData = new Promise((resolve) => {
    let rawData = '';

    http.get('http://api.coinmarketcap.com/v2/ticker/', options, (response) => {
      response.on('data', (chunk) => {
        rawData += chunk;
      });

      response.on('end', () => {
        resolve(rawData);
      });
    });
  });

  return cryptoData;
}

export {
  bitcoinTicker,
};
