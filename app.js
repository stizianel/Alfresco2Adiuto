const fs = require('fs');
const cheerio = require('cheerio');
const xml = fs.readFileSync(`${__dirname}/test/test1.xml`);

const $ = cheerio.load(xml, {xmlMode: true});
// let contents = $('cm\\:content').filter((i, el) => {
//    return el.firstChild.data.startsWith("contentUrl");
// });


let contents = $('view\\:properties cm\\:content');

let contarray = contents.toArray();

contarray.map((e) => {
    //console.log(e.name)
    console.log(e.firstChild.data);
    let fName = e.parent.childNodes.filter((val, i) => {
        if (val.type == "tag" && val.name === "cm:name") {
            return val;
        }
    });
    console.log(fName[0].firstChild.data);
    let foName = $(e).closest('cm\\:folder');
    console.log(foName[0].attribs);
});

//console.log(contents);

// let contentFileName = contents[0].firstChild.data;

// console.log(contentFileName);

// let fileNameElement = contents[0].parent.childNodes.filter((val, i) => {
//     if (val.type == "tag" && val.name === "cm:name") {
//         return val;
//     }
// });


//console.log(fileNameElement[0].firstChild.data);

