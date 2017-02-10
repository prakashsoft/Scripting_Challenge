/* Assign variables and reading the input file */

var rl = require('readline').createInterface({
  input: require('fs').createReadStream('./data/input/scripting_challenge_input_file.txt')
});
var fs = require('fs');
var dateFormat = function(datestring){
  return datestring.slice(0,4) + '-' + datestring.slice(4,6) + '-' + datestring.slice(6,8);
};
var ct = 0;

/*output file save in output folder  and reading and writing field name from text file*/

var outputFile = './data/output/scripting_challenge_output_file.txt'

rl.on('line', function (line) {
  fs.writeFile(outputFile, 'Order_id\tOrder_date\tUser_id\tAvg_Item_price\tStart_page_url\tError_msg');
  var avg_item_price = [];
  for (var i = 0; i < line.split('\t').length; i++) {
    if (ct > 0) {
      if (i === 0) {
        fs.appendFile(outputFile,'\n' + line.split('\t')[i].split('\:')[0]);
        if (line.split('\t')[i].split('\:')[1] === undefined || line.split('\t')[i].split('\:')[1] === null || line.split('\t')[i].split('\:')[1] === '' ){
          if (line.split('\t')[i].split('\:')[2] === undefined || line.split('\t')[i].split('\:')[2] === null || line.split('\t')[i].split('\:')[2] === '' ) {
            fs.appendFile(outputFile,'\t');
          }
          else {fs.appendFile(outputFile,'\t' + dateFormat(line.split('\t')[i].split('\:')[2]));}
        }
        else {fs.appendFile(outputFile,'\t' + dateFormat(line.split('\t')[i].split('\:')[1]));}
      }
      if (i === 1) {fs.appendFile(outputFile,'\t' + line.split('\t')[i]);}
      if (i === 2) {if (line.split('\t')[i] > 0) avg_item_price.push(line.split('\t')[i]);}
      if (i === 3) {if (line.split('\t')[i] > 0) avg_item_price.push(line.split('\t')[i]);}
      if (i === 4) {if (line.split('\t')[i] > 0) avg_item_price.push(line.split('\t')[i]);}
      if (i === 5) {
        if (line.split('\t')[i] > 0) avg_item_price.push(Number(line.split('\t')[i]));
          if (avg_item_price.length === 0 ) {fs.appendFile(outputFile,'\t' + 0);}
          else {
            fs.appendFile(outputFile,'\t' + Math.round((eval(avg_item_price.join('+'))/avg_item_price.length)*1000)/1000);
          }
      }
      if (i === 6) {
        if (line.split('\t')[i].slice(0,23) === "http://www.insacart.com") {
          fs.appendFile(outputFile,'\t' + line.split('\t')[i] + '\t');
        }
        else {fs.appendFile(outputFile,'\t' + '\tInvalid URL');}
      }
      if (line.split('\t').length === 6 && i === 5) {fs.appendFile(outputFile,'\t' + '\tInvalid URL');}
    }
  }
    ct++;
});
