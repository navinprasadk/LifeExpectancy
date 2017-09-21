let fs = require('fs');
let rl = require('readline');
let rd = rl.createInterface({input: fs.createReadStream('../inputdata/Indicators.csv'), output: process.stdout, terminal: false});
// Initializing variables
let arr = [];
let countries = ['India', 'China', 'Pakistan', 'Thailand', 'Singapore'];
for (let c = 0; c < countries.length; c = c + 1) {
  let obj = {
    countries: countries[c],
    HighestLifeExpectancy: 0
  };
  arr.push(obj);
}

rd.on('line', function(data) {
  let line = data.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  for (let y = 1960; y < 2016; y = y + 1) {
    for (let j = 0; j < countries.length; j = j + 1) {
      // To get the Highest Life Expectancy
      if (line[0] === countries[j] && line[3] === 'SP.DYN.LE00.IN' && line[4] === y) {
        arr[j].HighestLifeExpectancy = arr[j].HighestLifeExpectancy + Number(Math.round(line[5]));
      }
    }
  }
});
// Write the data into file
rd.on('close', function() {
  fs.writeFile('../outputdata/OutputJSONNavin3.json', JSON.stringify(arr));
});
