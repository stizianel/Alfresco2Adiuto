const fs = require('fs');
const cheerio = require('cheerio');
const parseXml = require('./lib/parse-xml.js');
const ws = require('./lib/adiutoWs.js');


const xml = fs.readFileSync(`${__dirname}/test/testpk09.xml`);

let result = parseXml(xml);

// result.map((r) => {
//     console.log(JSON.stringify({ index: { _id: `pg${r.contentName.match(/[0-9]+/g)}` } }));
//     console.log(JSON.stringify(r));
// });

// const adiuto = new ws();
// let session = adiuto.connect();
// console.log('app ' + session);

console.log(JSON.stringify(result, null, ' '));



