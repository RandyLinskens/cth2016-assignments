//Job resignation letter

var chance = require('chance').Chance();

var wrap = require('word-wrap');



const name = ['Mr. Man', 'Mr. Trump', 'Mr. Gates', 'Mr. Ohlsson', 'Mr. Rose', 'Ms. Anderson', 
				'Ms. Francesca', 'Ms. Jansen', 'Ms. Mayer', 'Ms. Whitman'];

const name2 = ['Randy', 'Willem', 'Marly', 'Lisa', 'Ivan', 'Vladmir', 'Sandra', 'Hans', 'Sjonnie'];

const verbs1 = ['am going to', 'want to', 'would absolutely love to', 'am forced to', 
				'can not do anything else but', 'will'];

const verbs2 = ['quit', 'resign', 'abandon', 'retire', 'secede'];

const verbs3 = ['grows', 'increases', 'decreases', 'subsides'];

const adjectives1 = ['terrible', 'horrific', 'inhumain', 'humiliating', 'embarrassing', 'demeaning', 'miserable'];

const adjectives2 = ['nightmarish', 'cruel', 'dumb', 'sad', 'foul', 'offensive', 'hurtfull', 'belittling'];

const nouns1 = ['job', 'form of slavery', 'rat race', '9 to 5', 'thing you call a job', 'disgrace of a so called job', 'inprisonment'];

const nouns2 = ['hate', 'disgust', 'resentment', 'misery', 'aversion', 'loathing', 'disgust'];

const nouns3 = ['cunt', 'asshole', 'incompotent fool', 'bastard', 'disgrace of a person', 'pinhead', 'misconception', 'excrement', 'pig'];

//'Dear' name, 'I', name2, verbs1, verbs2, 'this', adjective1/2, nouns '. ' 
//Random sentences afterwards: 'My', adjectives1, nouns2, 'towards you', verbs3,', ' 'you', adj1/2, nouns3

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length});
	return array[index];
}



