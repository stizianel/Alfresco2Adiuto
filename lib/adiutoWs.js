'use strict'
const fs = require('fs');
const soap = require('soap');
const url = 'http://adiuto:8080/adiJed/services/AdiJedWS?WSDL';
const args = {user: 'immission', password: 'immission'};
let argsInsert = {};

class AdiutoWs {
    constructor(session) {
        // invokes the setter
        this.session = session;
      }
    connect(){
        soap.createClient(url, (err, client) => {
            let servizi = client.describe();   
        
            client.remoteLogin(args, (err, res) => {
                this.session =  res.loginResult;
                console.log('funz ' + res.loginResult);
                argsInsert.session = this.session;
                argsInsert.file = fs.readFileSync('c:/temp/99233.pdf', 'base64');
                argsInsert.filename = 'file di test';
                argsInsert.familyId = 1001;
                argsInsert.fieldsId = [1001];
                argsInsert.values = ['campo1'];
                client.insertDocument(argsInsert, (err, res) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(res);
                    }
                });
            });           
        return this.session;
        })
    }
}
module.exports = AdiutoWs;
