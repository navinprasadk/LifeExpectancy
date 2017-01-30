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
// var data = '';

/* insializing variables*/
// let indexCountry = '';
// let indexindicatorcode = '';
// let indexyear = 0;
// let indexvalue = 0;
// let count = 0;
//
let output1 = [];
// let output2 = [];
let sum = 0;
let sum1 = 0;
// let brate = 0;
// let drate = 0;
let year = 1960;
let object = {};
// let object2 = {};
let asiancountry = ['China', 'India', 'Pakistan', 'Singapore', 'Sri Lanka',
 'Thailand', 'Philippines', 'Israel', 'Indonesia', 'Iraq'];
let le = ['SP.DYN.LE00.FE.IN', 'SP.DYN.LE00.MA.IN', 'SP.DYN.LE00.IN'];
// let bd_rate = new Array('SP.DYN.CBRT.IN', 'SP.DYN.CDRT.IN');

// Handle stream events --> data, end, and error
lineReader.on('line', function(chunk) {
    let split2 = chunk.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    // console.log(split2[5]);
    // To get the female life consistency
    for (let i = 0; i < asiancountry.length; i = i + 1) {
        // console.log(asiancountry[i]);
        if (asiancountry[i] === split2[0] && le[1] === split2[3]) {
            sum = sum + Math.round(split2[5], 10);
            //  console.log(sum);
        }
    }
    // To get the male life consistency
    for (let i = 0; i < asiancountry.length; i = i + 1) {
        //  console.log('program started');
        if (asiancountry[i] === split2[0] && le[0] === split2[3]) {
            sum1 = sum1 + Math.round(split2[5], 10);
            //  console.log(sum1);
        }
    }
    if (year < split2[4] && (le[0] === split2[3] || le[1] === split2[3]) && year <= 2016) {
        object = {
            'year': year,
            'Life expectancy at birth, male (years)': sum,
            'Life expectancy at birth, female (years)': sum1
        };
        year = year + 1;
        output1.push(object);
        sum = 0;
        sum1 = 0;
    }
});
lineReader.on('close', function() {
    fs.writeFile('../outputdata/OutputJSONNavin1.json', JSON.stringify(output1));
});
return 'JSON written successfully';
}

// readerStream.on('end',function(){
//    console.log(data);
// });
//
// readerStream.on('error', function(err){
//    console.log(err.stack);
// });
