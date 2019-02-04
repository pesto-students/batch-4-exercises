import https from 'https';

const apiEndPoint = 'https://api.coinmarketcap.com/v2/ticker/';

const convertObjToQueryString = (paramObject) => {
  let queryString = '?';
  for (const [key, value] of Object.entries(paramObject)) {
    queryString += `${key}=${value}`;
  }

  return queryString;
};

function bitcoinTicker(params) {
  const queryString = convertObjToQueryString(params);

  return new Promise((resolve) => {
    https.get(`${apiEndPoint}${queryString}`, { query: params }, (res) => {
      let response = '';
      res.setEncoding('utf-8');

      res.on('data', (chunk) => {
        response += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(response));
      });
    });
  });
}

export { bitcoinTicker };
