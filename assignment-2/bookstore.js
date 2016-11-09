//bookstore.js

var book1 = {
	'Title': "Miss lonelyhearts",
	'Author': "Nathanial West",
	'Price': 14.50,
	'Type': "Paperback"
};

var book2 = {
	'Title': "A clockwork orange",
	'Author': "Anthony Burgess",
	'Price': 10.95,
	'Type': "Paperback"
};

var book3 = {
	'Title': "The man in the high castle",
	'Author': "Philip K Dick",
	'Price': 23.95,
	'Type': "Hardcover"
};

//dictionaries hierboven

var array_of_books = [
	{
	'Title': "Miss lonelyhearts",
	'Author': "Nathanial West",
	'Price': 14.50,
	'Type': "Paperback"
	},
	{
	'Title': "A clockwork orange",
	'Author': "Anthony Burgess",
	'Price': 10.95,
	'Type': "Paperback"
	},
	{
	'Title': "The man in the high castle",
	'Author': "Philip K Dick",
	'Price': 23.95,
	'Type': "Hardcover"
}
];



//[] bedoelt voor arrays

//console.log(book1);

//doet hetzelfde:

//console.log(array_of_books.length);

//console.log(array_of_books[0].Price);


/*console.log(book1.Title);
console.log(book1);
console.log(book2);
console.log(book3);*/

//de eerste is altijd 0 in computer taal.

//console.log is a function

//for loop:
/* ++ betekent toevoegen. Variables staan altijd boven.*/

function print_the_book(a_book) {
	console.log('--------------')
	console.log('Title: ' + a_book.Title);
	console.log('Price: ' + a_book.Price);
	console.log('Author: ' + a_book.Author);
	console.log('Type: ' + a_book.Type);
}


for(var i = 0; i < array_of_books.length; i++) {
	print_the_book(array_of_books[i]);
}

