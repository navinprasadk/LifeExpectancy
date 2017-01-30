// var a = [1,2,3,4];
// var b= [2,3,4,5,6];
// var ans = [];
// for(var i of a){
//   if(!b.includes(i)){
//         ans.push(i);
//   }
// }
// for(var i of b){
//   if(!a.includes(i)){
//         ans.push(i);
//   }
// }
// console.log(ans);

// let log4js = require('log4js');
// let logger = log4js.getLogger();
// let a = [1, 2, 3, 4];
// logger.debug(a);

// let log4js = require('log4js');
// let logger = log4js.getLogger();
// let d = new Date();
// let dt = d.getDate();
// if(dt < 10)
// {
// dt = '0' + dt;
// }
// let m = d.getMonth() + 1;
// if(m < 10)
// {
//  m = '0' + m;
// }
// let y = d.getFullYear();
// logger.debug(dt + '/' + m + '/' + y);

// let log4js = require('log4js');
// let logger = log4js.getLogger();
// let temp = 0;
// let arr = [1000, 20, 80, 10, 30];
// for(let i = 0; i < 5; i + 1)
// {
//   if(temp < arr[i])
//   {
//     temp = arr[i];
//   }
// }
// logger.debug(temp);

 // let log4js = require('log4js');
 // let logger = log4js.getLogger();
 // let num = '025468';
 // let arr = Array.from(num);
 // let temp = [];
 // let i;
 //    for(i = 0; i < num.length - 1; i + 1)
 //    {
 //      temp.push(arr[i]);
 //      if(arr[i] % 2 === 0 && arr[i + 1] % 2 === 0)
 //        {
 //            temp.push('-');
 //        }
 //    }
 //    temp.push(arr[i]);
 //    logger.debug(temp.join(''));
 // let log4js = require('log4js');
 // let logger = log4js.getLogger();
 // let arr = ['aswin', 'navin', 'prasad', 'babu'];
 // logger.debug('ascending order is ' + arr.sort().join(' '));
 // logger.debug('decending order is ' + arr.sort().reverse().join(' '));

 // let log4js = require('log4js');
 // let logger = log4js.getLogger();
 // let arr = [23, 48, 33, 17, 19, 34, 23, 25, 48];
 // let a = new Set(arr);
 // logger.debug(Array.from(a));
 //
 // let log4js = require('log4js');
 // let logger = log4js.getLogger();
 // let arr1 = [34, 83, 5, 43, 33, 17, 8, 19, 10];
 // let arr2 = [33, 83, 93, 43, 34, 19, 99, 17, 11];
 // let temp = [];
 // arr1.map(function(x)
 // {
 //  if(!this.includes(x)) { temp.push(x);}
 // }, arr2);
 //
 // arr2.map(function(x)
 // {
 //  if(!this.includes(x)) { temp.push(x);}
 // }, arr1);
 // logger.debug(temp);
