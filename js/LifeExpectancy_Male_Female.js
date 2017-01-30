module.exports = function LifeExpectancy_Male_Female(yyyy){
  if(!yyyy)
  {
    throw new Error('Not a number');
  }
  if(isNaN(yyyy))
  {
    throw new Error('Not a number');
  }
let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../inputdata/Indicators.csv')
});
// Initializing variables
let output1 = [];
let sum = 0;
let sum1 = 0;
let year = 1960;
let object = {};
let asiancountry = ['China', 'India', 'Pakistan', 'Singapore', 'Sri Lanka',
 'Thailand', 'Philippines', 'Israel', 'Indonesia', 'Iraq'];
let le = ['SP.DYN.LE00.FE.IN', 'SP.DYN.LE00.MA.IN', 'SP.DYN.LE00.IN'];

lineReader.on('line', function(chunk) {

    let split2 = chunk.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    // To get the male life consistency
    for (let i = 0; i < asiancountry.length; i = i + 1) {
            if (asiancountry[i] === split2[0] && le[1] === split2[3]) {
            sum = sum + Math.round(split2[5]);
        }
    }
    // To get the female life consistency
    for (let i = 0; i < asiancountry.length; i = i + 1) {
        if (asiancountry[i] === split2[0] && le[0] === split2[3]) {
            sum1 = sum1 + Math.round(split2[5]);
        }
    }
    if (year < split2[4] && (le[0] === split2[3] || le[1] === split2[3]) && year <= 2016) {
        object = {
            'year': year,
            'Life expectancy at birth, male (years)': sum,
            'Life expectancy at birth, female (years)': sum1
        };
        year = year + 1;
        // Pushing the data
        output1.push(object);
        sum = 0;
        sum1 = 0;
    }
});
// Write the data on file
lineReader.on('close', function() {
    fs.writeFile('../outputdata/OutputJSONNavin1.json', JSON.stringify(output1));
});
return 'JSON written successfully';
}
