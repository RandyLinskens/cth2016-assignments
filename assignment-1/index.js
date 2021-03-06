 
var program = require('commander');

// database of books

var book1_title = "Miss lonelyhearts";
var book1_author = "Nathanial West";
var book1_price = "14,50"; 
var book1_type = "Paperback";

var book2_title = "A clockwork orange";
var book2_author = "Anthony Burgess";
var book2_price = "10,95"; 
var book2_type = "Paperback";

var book3_title = "The man in the high castle";
var book3_author = "Philip K Dick";
var book3_price = "23,95"; 
var book3_type = "Hardcover";

var book4_title = "Kolyma";
var book4_author = "Tom Rob Smith";
var book4_price = "15,00"; 
var book4_type = "Paperback";

var book5_title = "Hoe muziek werkt";
var book5_author = "David Byrne";
var book5_price = "25,00"; 
var book5_type = "Paperback";

// initialise program

program
  .version('0.0.1')
  .option('-t, --title [value]', 'Book title')
  .option('-a, --author [value]', 'Author name')
  .option('-p, --price [value]', 'Book price')
  .option('-T, --type [value]', 'Book type')
  .parse(process.argv);

//console.log(program.title);


switch(program.title)
{
    case book1_title: 
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Type: " + book1_type);
        break;
    case book2_title:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Type: " + book2_type);
        break;
    case book3_title:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Type: " + book3_type);
        break;
    case book4_title:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Type: " + book4_type);
        break;
    case book5_title:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Type: " + book5_type);
        break;
    case "empty":
        break;
    default:
        console.log('No match...');
        break
    }

//console.log(program.author);

switch(program.author)
{
    case book1_author: 
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Type: " + book1_type);
        break;
    case book2_author:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Type: " + book2_type);
        break;
    case book3_author:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Type: " + book3_type);
        break;
    case book4_author:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Type: " + book4_type);
        break;
    case book5_author:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Type: " + book5_type);
        break;
    case "empty":
        break;
    default:
        console.log('no match...');
        break
   }

//console.log(program.price);

switch(program.price)
{
    case book1_price: 
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Type: " + book1_type);
        break;
    case book2_price:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Type: " + book2_type);
        break;
    case book3_price:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Type: " + book3_type);
        break;
    case book4_price:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Type: " + book4_type);
        break;
    case book5_price:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Type: " + book5_type);
        break;
    case "empty":
        break;
    default:
        console.log('no match...');
        break  
    }


//console.log(program.type);
switch(program.type)
{
    case book1_type: 
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Type: " + book1_type);
        break;
    case book2_type:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Type: " + book2_type);
        break;
    case book3_type:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Type: " + book3_type);
        break;
    case book4_type:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Type: " + book4_type);
        break;
    case book5_type:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Type: " + book5_type);
        break;
    case "empty":
        break;
    default:
        console.log('no match...');
        break
   }


