const args = process.argv;

const request = require('request');
const fs = require('fs');

request('http://www.google.com', (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  let byteSize = body.length;
  let fileName = "index.html";

  fs.writeFile("./"+fileName, body, err => {
    if (err){
      console.log(err);
    }
    console.log(`Downloaded and saved ${byteSize} bytes to ./${fileName}.`);
  })

});
