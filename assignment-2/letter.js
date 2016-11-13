//Job resignation letter

var chance = require('chance').Chance();

var wrap = require('word-wrap');



const name = ['Mr. Man', 'Mr. Trump', 'Mr. Gates', 'Mr. Ohlsson', 'Mr. Rose', 'Ms. Anderson', 
				'Ms. Francesca', 'Ms. Jansen', 'Ms. Mayer', 'Ms. Whitman'];

const name2 = ['Randy', 'Willem', 'Marly', 'Lisa', 'Ivan', 'Vladmir', 'Sandra', 'Hans', 'Sjonnie'];

const verbs1 = ['am going to', 'want to', 'would absolutely love to', 'am forced to', 
				'can not do anything else but', 'will'];

const verbs2 = ['quit', 'resign from', 'abandon', 'retire from', 'secede from'];

const verbs3 = ['grows', 'increases', 'decreases', 'subsides'];

const verbs4 = ['hate', 'love', 'despise', 'resent', 'loath', 'fear', 'crave', 'need', 'neglect', 'envy', 'grieve', 'forsake', 'want'];

const adjectives1 = ['terrible', 'horrific', 'inhumain', 'humiliating', 'embarrassing', 'demeaning', 'miserable', 'sickening', 'unbelievable', 'incomprehensable',
						'nightmarish', 'cruel', 'dumb', 'sad', 'foul', 'offensive', 'hurtfull', 'belittling'];

const nouns1 = ['job', 'form of slavery', 'rat race', '9 to 5', 'thing you call a job', 'disgrace of a so called job', 'inprisonment'];

const nouns2 = ['hate', 'disgust', 'resentment', 'misery', 'aversion', 'loathing', 'disgust'];

const nouns3 = ['cunt', 'asshole', 'incompotent fool', 'bastard', 'disgrace of a person', 'pinhead', 'misconception', 'excrement', 'pig',
				'sack of shit'];

const nouns4 = ['acceptance', 'respect', 'pity', 'fear', 'disrespect', 'resentment', 'love', 'admiration', 'dismay', 'awe', 'dread'];

//'Dear' name, 'I', name2, verbs1, verbs2, 'this', adjective1, nouns '. ' 
//Random sentences afterwards: 'My', adjectives1, nouns2, 'towards you', verbs3,', ' 'you', adj1, nouns3
//Random sentence 2: 'Furthermore I ', verbs4 'adj1', 'your', adj1, nouns4.


function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length});
	return array[index];
}

function maybe(array) {
	if(chance.bool()) {
		return choice(array);
	} else {
	return ' '}
}

//Start of the letter:

function short() {
	return 'Dear ' + choice(name) + ', ';
}

//First sentence of the letter:

function long() {
	return 'I, ' + choice(name2) + ', ' + choice(verbs1) + ' ' + choice(verbs2) + ' ' + 'this' + maybe(adjectives1 + ' ')
			 + maybe(adjectives1 + ' ') + choice(nouns1) + '. ';
}

//First random sentence repetition:

function long1() {
	return 'My ' + maybe(adjectives1) + ' ' + choice(nouns2) + ' ' + 'towards you ' + choice(verbs3) + ', ' + 'you ' 
			+ maybe(adjectives1) + ' ' + maybe(adjectives1) + ' ' + choice(nouns3) + '. ';
}

//Second random sentence repetition:

function long2() {
	return 'I ' + choice(verbs4) + ' ' + maybe(adjectives1) + ' your ' + maybe(adjectives1) + ' ' + choice(nouns4) + '. ';
}

//end of the letter:

function end() {
	return 'Kind regards, your ' + maybe(adjectives1) + ' ' + 'employee'; 
}

//The loop for the first random repetition:

var text = '';

for(var i = 0; i < 2; i++) {
	text += (long1());
}

//The loop for the second repetition:

var text = '';

for(var i = 0; i < 5; i++) {
	text += (long2());
}


//The letter itself:

		console.log('\n\n\n\n');

		console.log(short({'width': 60}));

		console.log('\n');

		console.log(long(text, {'width': 60}));

		console.log(wrap(text, {'width': 60}));

		console.log(wrap(text, {'width': 60}));

		console.log('\n');

		console.log(end())

		console.log('\n\n\n\n')

