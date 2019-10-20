/**
 * Parse data from csv created from xlsx-file available in https://www.alko.fi/valikoimat-ja-hinnasto/hinnasto
 **/

const readline = require('readline');
const fs = require('fs');
const results = [];

const filePath = process.argv[2];

const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
});

function getRelativePrice(product) {
  return (40 / product.abv * product.price * (0.7 / product.size));
}

const separator = ';';
let lineNumber = 1;
readInterface.on('line', function(line) {
  if (lineNumber > 4) {
    let values = line.split(separator);
    if (values[8] === 'viskit') {
      let product = {
        id: values[0],
        name: values[1],
        producer: values[2],
        size: parseFloat(values[3].replace(' l', '').replace(',', '.')),
        price: parseFloat(values[4]),
        country: values[11],
        notes: values[17],
        abv: parseFloat(values[20]),
      };
      product.relativePrice = getRelativePrice(product);

      results.push(product);
    }
  }
  lineNumber++;
}).on('close', () => {
  fs.writeFileSync('alko.json', JSON.stringify(results));
});