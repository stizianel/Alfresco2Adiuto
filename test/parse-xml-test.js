'use strict'

const fs = require('fs');
const expect = require('chai').expect;
const parseXML = require('../lib/parse-xml.js');

const xml = fs.readFileSync(`${__dirname}/test1.xml`);

describe('parseXML', () => {
    it('should be a function', () => {
        expect(parseXML).to.be.a('function');
    });
    it('should parse XML content', () => {
        const file = parseXML(xml);
        expect(file).to.be.an('object');
    });
})