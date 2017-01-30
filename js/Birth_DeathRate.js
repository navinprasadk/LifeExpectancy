let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../inputdata/Indicators.csv')
});

/* insializing variables*/
// let indexCountry = '';
// let indexindicatorcode = '';
// let indexyear = 0;
// let indexvalue = 0;
// let count = 0;
let output2 = [];

let brate = 0;
let drate = 0;
let year = 1960;
// let object = {};
let object2 = {};
let asiancountry = ['China', 'India', 'Pakistan', 'Singapore', 'Sri Lanka',
 'Thailand', 'Philippines', 'Israel', 'Indonesia', 'Iraq'];
// let le = new Array('SP.DYN.LE00.FE.IN', 'SP.DYN.LE00.MA.IN', 'SP.DYN.LE00.IN');
let bdrate = ['SP.DYN.CBRT.IN', 'SP.DYN.CDRT.IN'];

// Handle stream events --> data, end, and error
lineReader.on('line', function(chunk) {
    let split2 = chunk.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    // console.log(split2[5])
    for (let i = year; i < 2016; i = i + 1) {
        // console.log(asiancountry[i]);
        if (asiancountry[1] === split2[0] && bdrate[0] === split2[3]) {
            brate = Math.round(split2[5], 10);
            //  console.log(sum);
        }
    }
    // To get the Death rate
    for (let i = year; i < 2016; i = i + 1) {
        //  console.log('program started');
        if (asiancountry[1] === split2[0] && bdrate[1] === split2[3]) {
            drate = Math.round(split2[5], 10);
            //  console.log(sum1);
        }
    }

    if (year < split2[4] && (bdrate[0] === split2[3] || bdrate[1] === split2[3]) && year <= 2016) {
        object2 = {
            'year': year,
            'Birth rate, crude (per 1,000 people)': brate,
            'Death rate, crude (per 1,000 people)': drate
        };
        output2.push(object2);
        brate = 0;
        drate = 0;
        year = year + 1;
    }
});
lineReader.on('close', function() {
    fs.writeFile('../outputdata/OutputJSONNavin2.json', JSON.stringify(output2));
    // console.log(output2);
    //   console.log("Birth_Death_Rate.json was created")
});
