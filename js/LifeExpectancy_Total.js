let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../inputdata/Indicators.csv')
});
// Initializing variables
let output3 = [];
let total = 0;
let year = 1960;
let object3 = {};
let asiancountry = ['China', 'India', 'Pakistan', 'Singapore', 'Thailand'];
let le = ['SP.DYN.LE00.FE.IN', 'SP.DYN.LE00.MA.IN', 'SP.DYN.LE00.IN'];
lineReader.on('line', function(chunk)
{
    let split2 = chunk.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    // To get the total life expectancy
    for (let i = 0; i < asiancountry.length; i = i + 1) {
        for(let j = year; j < 2016; j = j + 1)
        {
            if (asiancountry[i] === split2[0] && le[2] === split2[3] && j === split2[4]) {
              total = total + Math.round(split2[5]);
             }
      }
          if(i < asiancountry.length)
          {
                object3 = {
                'year': asiancountry[i],
                'Highest Life expectancy at birth': total
            }; i = i + 1;
            // Pushing the data
            output3.push(object3);
             total = 0;
           }
    }
});
// Write the data on file
 lineReader.on('close', function() {
  fs.writeFile('../outputdata/OutputJSONNavin3.json', JSON.stringify(output3));
});
