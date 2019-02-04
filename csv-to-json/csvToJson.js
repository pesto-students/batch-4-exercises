const fs = require('fs');
const readLine = require('readline');

function csvToJson(csvFile) {
  const jsonOutput = [];
  let lineIndex = 1;
  let columns = [];
  const readLineInterface = readLine.createInterface({
    input: fs.createReadStream(csvFile),
    output: process.stdout,
    console: false,
  });
  readLineInterface.on('line', (line) => {
    const jsonRow = {};
    if (lineIndex === 0) {
      columns = line.split(',');
    } else {
      const rowValues = line.split(',');
      for (const [index, column] of columns.entries()) {
        jsonRow[column] = rowValues[index];
      }
      jsonOutput.push(jsonRow);
    }
    lineIndex += 1;
  });

  return jsonOutput;
}

export {
  csvToJson,
};
