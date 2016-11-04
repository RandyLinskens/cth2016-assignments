
// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of persons
var book1_title = "Miss lonelyhearts";
var book1_author = "Nathanial West";
var book1_price = "14,50"; 
var book1_type = "Paperback";

var person2_name = "Lotte";
var person2_age = 32;
var person2_lan = "danish";

var person3_name = "Geert";
var person3_age = 42;
var person3_lan = "dutch";

// initialise program (aka commander) 
program
  .version('0.0.1')
  .option('-t, --title [value]', 'Title', 'empty') // add option --name with default value "empty"
  .parse(process.argv);								

// check what the value of name is regardless of if it matches or not
console.log(program.name); // this line can be commented out

// match value of input's "name" argument
switch(program.title) 
{
    case book1_title: 
        console.log(book1_title);
        console.log(book1_author);
        console.log(book1_price);
        console.log(book1_type);
        break;
}