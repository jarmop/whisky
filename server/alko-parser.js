/**
 * Download and parse data from xlsx-file available in https://www.alko.fi/valikoimat-ja-hinnasto/hinnasto
 **/

const fs = require('fs');
const request = require('request-promise-native');
const XLSX = require('xlsx');

const xlsxTempFilePath = 'file.xlsx';
const url = 'https://www.alko.fi/INTERSHOP/static/WFS/Alko-OnlineShop-Site/-/Alko-OnlineShop/fi_FI/Alkon%20Hinnasto%20Tekstitiedostona/alkon-hinnasto-tekstitiedostona.xlsx';
const outputFilePath = '../app/src/data/alko.json';

const alko = require(outputFilePath);
const alkoIdMap = new Map();
alko.forEach(product => {
  alkoIdMap.set(product.id, product);
});

function getRelativePrice(product) {
  return (40 / product.abv * product.price * (0.7 / product.size));
}

function parseXlsx() {
  const workbook = XLSX.readFile(xlsxTempFilePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const columns = {
    id: 'A',
    name: 'B',
    producer: 'C',
    size: 'D',
    price: 'E',
    type: 'I',
    country: 'L',
    notes: 'R',
    abv: 'U',
  };
  typeColumn = 'I';

  const finalRowNumber = parseInt(sheet['!ref'].replace('A1:', '').replace(/\D/g,''));
  let products = [];
  const timeAdded = new Date();
  timeAdded.setUTCHours(0,0,0,0);
  for (let row = 5; row <= finalRowNumber; row++) {
    if (sheet[columns.type + row] === undefined) {
      continue;
    }
    if (sheet[columns.type + row].v === 'viskit') {
      let product = {
        id: sheet[columns.id + row].v,
        name: sheet[columns.name + row].v,
        producer: sheet[columns.producer + row].v,
        size: parseFloat(sheet[columns.size + row].v.replace(' l', '').replace(',', '.')),
        price: parseFloat(sheet[columns.price + row].v),
        country: sheet[columns.country + row].v,
        notes: sheet[columns.notes + row].v,
        abv: parseFloat(sheet[columns.abv + row].v),
      };
      product.relativePrice = getRelativePrice(product);

      const oldProduct = alkoIdMap.get(product.id);
      product.timeAdded = oldProduct === undefined ? timeAdded : oldProduct.timeAdded;

      products.push(product);
    }
  }

  console.log('Writing json to ' + outputFilePath);
  fs.writeFileSync(outputFilePath, JSON.stringify(products));
}

async function downloadAndParseXLSX() {
  let xlsxBuffer = await request.get({uri: url, encoding: null});
  console.log('Writing downloaded xlsx file to ' + xlsxTempFilePath);
  fs.writeFileSync(xlsxTempFilePath, xlsxBuffer);

  parseXlsx();

  fs.unlink(xlsxTempFilePath, () => console.log('Removed ' + xlsxTempFilePath));
}

downloadAndParseXLSX();
