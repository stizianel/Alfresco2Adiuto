'use strict'
const cheerio = require('cheerio');

module.exports = xml => {
    const $ = cheerio.load(xml, {xmlMode: true});

    let contents = $('view\\:properties cm\\:content');

    let contarray = contents.toArray();

    let retArray = contarray.map((e) => {
        let retObj = {};

        retObj.contentName  = e.firstChild.data;

        let fName = e.parent.childNodes.filter((val, i) => {
            if (val.type == "tag" && val.name === "cm:name") {
                return val;
            }
        });
        retObj.fileName = fName[0].firstChild.data;

        let foName = $(e).closest('cm\\:folder');
        retObj.folderName = foName[0].attribs;
        
        return retObj;
    });

    return retArray;
};