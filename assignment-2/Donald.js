/*Welcome, this is part of the alternative American election debate generator. However this is only Donald Trumps half of the conversation. In order 
to enjoy this full two-way debate, please consult Hillary.js which can be found in Rahul Gandolahage's github directory. Have fun!*/


var chance = require('chance').Chance();

var wrap = require('word-wrap');

var program = require('commander');


//Hillary and Donald alternative debate generator.

const aanhef = ['Now listen', 'Well hello there', 'Hello', 'Hi', 'Dear', 'My dear', 'My', 'Âllo', 'Goodmorning', 'Good to see you', 'Tell me'];

const question1 = [' do you think you would', ' would you ever', ' are you going to', ' will you', ' could you', ' could you ever', ' will you be able to'];

const verbs1 = [' solve', ' get rid of', ' create', ' make', ' accept', ' end', ' start', ' accept', ' end',
				' finish', ' bomb', ' unify', ' seperate', ' incubate', ' evaporate', ' register', ' visualise', ' cast out',
				' destroy', ' nuke', ' delete', ' secure', ' rely on', ' defy', ' neglect', ' refuse'];

const adjectives = [' immense', ' ugly', ' great', ' repulsive', ' filthy', ' respectable', ' inconceivable',
					' incomprehensable', ' problematic', ' attainable', ' mystifying', ' grand', ' miniscule', ' negligible',
					' fierce', ' stupid', ' idiotic', ' smelly', ' exciting', ' nervewrecking', ' bitter', ' shitty',
					' unreliable', ' untrustworthy', ' trustworthy', ' reliable', ' uprising', ' emerging', ' submerging', ' silly',
					' thirsty', ' unbelievable', ' dreadful', ' religous']; 
	//always maybe 

const nouns = [' mexicans', ' economic recessions', ' unemployment issues', ' job shortages', ' healthcare systems', ' Arabs', ' muslims', ' ISIS threats', ' Middle Eastern shitstorms',
				' extremists', ' foreigners', ' segregational divides', ' discriminaters', ' racists', ' facists', ' gun laws', ' abortions', ' adoptions',
				' LGBTs', ' shootings', ' Bernie Sanders butt kissers', ' democrats', ' commies', ' Russians', ' Koreans', ' Chinese people', ' Iranians',
				' jurisdictions', ' school systems', ' education systems', ' Geneva agreements', ' Sharia enthusiast', ' muslim laws', ' African-Americans',
				' immigrants', ' environnemental issues', ' stock markets', ' cults', ' problems', ' E-mails', ' debts', ' walls', ' refugees', ' conspiracy theorists', ' media', ' taxes', ' wages',
				' tax payers', ' women', ' police brutality'];

const aanspr1 = [' silly', ' ignorant', ' unreliable', ' smelly', ' old', ' conservative', ' little', ' filthy', ' illiterate', ' stuck-up', ' self-centered', ' demeaning', ' brainless',
				' democratic', ' left-wing'];

	//always maybe

const aanspr2 = [' fuck', ' fool', ' shithead', ' pinhead', ' motherfucker', ' woman', ' bitch', ' granny', ' sweetheart', ' pig', ' cunt', ' piss-stain', ' dog', ' boar'];

const aanspr3 = [' you know what I would do to', ' you know what I think about', ' that is an intresting question about', ' I really dont know what to do about', ' I guess this is what I would do about', ' I think this is the best solution for the',
				 ' the only solution to', ' youve got it al wrong about', ' there is no other option considering', ' really? Is your question actually about', ' just listen to', ' just look at'];

const antw1 = ['About', 'Considering', 'Talking about', 'Discussing', 'Looking at', 'Taking a stance on'];

const AV = [' those', ' these', ' our', ' their', ' the', ' the countries', ' the states', ' your', ' some', ' all'];
	//always maybe

const antw2 = [' I', ' I would', ' I will', ' I am going to'];

const verst = [' politely', ' strongly', ' firmly', ' absolutely', ' faithfully'];
	//always maybe

const verbs2 = [' suggest', ' consider',  ' accept', ' deny', ' detest', ' refuse', ' propose', ' allege', ' suggest', ' preach', ' enjoy'];

 
const continous = [' nuking', ' invading', ' forgetting', ' expanding', ' wrecking', ' denying', ' deleting', ' accepting', ' bombing', ' creating', ' leaving',
				 ' attacking', ' defending', ' getting rid of', ' ending', ' starting', ' finishing', ' unifying', ' deleting',
				  ' relying on', ' neglecting', ' conquering', ' seperating', ' getting rid of', ' securing', ' finishing', ' destroying', ' breaking']; 

const antw3 = [' is the answer', ' is the solution', ' is the only answer', ' is the only solution', ' is going to solve the problem', ' is going to get us rich', ' is going to create jobs', 
				' is going to solve everything', ' will solve it', ' would make me happy', ' is going to make you cry', ' is going to make them cry', ' is going to be best for us', ' is going to be best for them', 
				' is going to make earth a better place', ' is going to make America great again', ' till the end', ' till it is over', ' till death', ' till death do us apart', ' at home', 
				' at the White House', ' at the Oval Office', ' with Uncle Sam', ' in America', ' in Mexico', ' is going to secure the economy'];
	//always maybe


// Question/Answer variations Donald

var question = 'Donald';
var answer = 'Donald';

//The option to trigger a question or an answer

program
  .version('The Donald Q&A generator 1.0')
  .option('-q, --question [Vraag]', 'Question generation: i.e. Type -> "-q Donald"')
  .option('-a, --answer [Antwoord]', 'Answer generation: i.e. Type -> "-a Donald"')
  .option('-w, --width [Breedte]', 'Width of the answer: i.e. Type -> "60"')
  .option('-s, --sentences [Aantal]', 'Number of sentences (usable when genereating an answer): i.e. Type -> "5"')
  .parse(process.argv);




//creating the functions for the sentence generation

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index]; 
}


function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
		} else {
			return '';
	} 
} 
	


//the question generator:

 function shortvr() {
 	return choice(aanhef) + ' Hillary, ';
 }

function longvr() {
 	return 'How' + choice(question1) + choice(verbs1) + maybe(adjectives) + choice(nouns) + '? ';
 }



//the answer generator:

 function shortantw() {
 	return 'Well, you' + maybe(aanspr1) + choice(aanspr2) + ',' + choice(aanspr3) + maybe(adjectives) + choice(nouns) + ': ';
 }


  function longantw() {
 	return choice(antw1) + maybe(AV) + maybe(adjectives) + choice(nouns) + ',' + 
 	choice(antw2) + maybe(verst) + choice(verbs2) + choice(continous) + maybe(AV) + maybe(adjectives) + choice(nouns) + maybe(antw3) + '. '; 
 }
//antw1 + (AV) + (adjectives) + nouns, + antw2 + (verst) + verbs2 + continous + (AV) + (adjectives) + nouns + (antw3).
//Example:	[Talking about]+[(our)]+[(great)]+[muslims], +[I]+[(firmly)]+[recommend]+[accepting]+[(their)]+[(lovable)]+[shootings]+[would make America great again].



//Variable for width

	var width = parseInt(program.width);

//Variable for number of sentences

	var sentences = parseInt(program.sentences)



//Word-wrap shortvr

	var text1 = shortvr();

//Word-wrap longvr

	var text2 = longvr();

//Word-wrap Answer(1)
	var text3 = shortantw();
		

//Word-wrap Answer(2)	inserted a parseInt to control the amount of sentences that will be printed. 

	 var text4 = '';
 		for(var i = 0; i < parseInt(program.sentences); i++){

 			 text4 += longantw();
	}
//only necessary loop



//Start of the discussion 




switch(program.question) { 
	case question:
		console.log('\n\n');
	 	console.log(wrap(text1, {width}));
	 	console.log('\n');
	 	console.log(wrap(text2, {width}));
	 	console.log('\n\n');
	 	break;
}

switch(program.answer) {
	case answer:
		console.log('\n\n')
		console.log(wrap(text3, {width}));
		console.log('\n')
		console.log(wrap(text4, {width}));
	 	console.log('\n\n');
		break;
}
