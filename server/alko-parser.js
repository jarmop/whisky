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

async function downloadXLSX() {
  let xlsxBuffer = await request.get({uri: url, encoding: null});
  console.log('Writing downloaded xlsx file to ' + xlsxTempFilePath);
  fs.writeFileSync(xlsxTempFilePath, xlsxBuffer);
}

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
    country: 'M',
    notes: 'S',
    abv: 'V',
  };

  const whiskyRowNumbers = Object.keys(sheet).filter(key => sheet[key].v === 'viskit').map(key => key.replace(columns.type, ''))
  const timeAdded = new Date();
  timeAdded.setUTCHours(0,0,0,0);
  const getRawValue = cell => cell.v;
  const products = whiskyRowNumbers.map((row, index) => {
    let product = {
      id: getRawValue(sheet[columns.id + row]),
      name: getRawValue(sheet[columns.name + row]),
      producer: getRawValue(sheet[columns.producer + row]),
      size: parseFloat(getRawValue(sheet[columns.size + row]).replace(' l', '').replace(',', '.')),
      price: parseFloat(getRawValue(sheet[columns.price + row])),
      country: getRawValue(sheet[columns.country + row]),
      notes: getRawValue(sheet[columns.notes + row]),
      abv: parseFloat(getRawValue(sheet[columns.abv + row])),
    };
    product.relativePrice = getRelativePrice(product);

    const oldProduct = alkoIdMap.get(product.id);
    product.timeAdded = oldProduct === undefined ? timeAdded : oldProduct.timeAdded;

    return product;
  })

  console.log('Writing json to ' + outputFilePath);
  fs.writeFileSync(outputFilePath, JSON.stringify(products));
}

async function downloadAndParseXLSX() {
  await downloadXLSX();
  parseXlsx();

  fs.unlink(xlsxTempFilePath, () => console.log('Removed ' + xlsxTempFilePath));
}

downloadAndParseXLSX();
