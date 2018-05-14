const fs = require('fs');
const cheerio = require('cheerio');
const parseXml = require('./lib/parse-xml.js');


const xml = fs.readFileSync(`${__dirname}/test/test1.xml`);

let result = parseXml(xml);
console.log('fine');

