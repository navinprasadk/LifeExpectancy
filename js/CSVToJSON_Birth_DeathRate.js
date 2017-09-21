let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({input: fs.createReadStream('../inputdata/Indicators.csv')});
// Initializing variables
let output2 = [];
let brate = 0;
let drate = 0;
let year = 1960;
let object2 = {};
let asianCountry = [
  'China',
  'India',
  'Pakistan',
  'Singapore',
  'Sri Lanka',
  'Thailand',
  'Philippines',
  'Israel',
  'Indonesia',
  'Iraq'
];
let bdrate = ['SP.DYN.CBRT.IN', 'SP.DYN.CDRT.IN'];

lineReader.on('line', function(chunk) {
  let split2 = chunk.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  //  To get the birth rate
  for (let i = year; i < 2016; i = i + 1) {
    if (asianCountry[1] === split2[0] && bdrate[0] === split2[3]) {
      brate = Math.round(split2[5], 10);
    }
  }
  // To get the Death rate
  for (let i = year; i < 2016; i = i + 1) {
    if (asianCountry[1] === split2[0] && bdrate[1] === split2[3]) {
      drate = Math.round(split2[5], 10);
    }
  }
  if (year < split2[4] && (bdrate[0] === split2[3] || bdrate[1] === split2[3]) && year <= 2016) {
    object2 = {
      year: year,
      BirthRate: brate,
      Deathrate: drate
    };
    // Pushing the data
    output2.push(object2);
    brate = 0;
    drate = 0;
    year = year + 1;
  }
});
// Write the data on file
lineReader.on('close', function() {
  if (year === 2013) {
    let Object2 = {
      Year: year,
      BirthRate: brate,
      Deathrate: drate
    };
    output2.push(Object2);
  }
  fs.writeFile('../outputdata/OutputJSONNavin2.json', JSON.stringify(output2));
});
