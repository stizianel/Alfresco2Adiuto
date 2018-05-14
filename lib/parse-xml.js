'use strict'
const cheerio = require('cheerio');

module.exports = xml => {
    const $ = cheerio.load(xml);

    const file = {};

    file.id = $('cm\\:content').attr('contentUrl')
    console.log(file);

    return file;
};