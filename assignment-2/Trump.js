var chance = require('chance').Chance();

var wrap = require('word-wrap');

var program = require('commander');


//Hillary and Donald alternative debate generator.

const aanhef = ['Now listen', 'Well hello there', 'Hello', 'Hi', 'Dear', 'My dear', 'My', 'Âllo', 'Goodmorning', 'Good to see you', 'Tell me']

const question1 = [' do you think you would', ' would you ever', ' are you going to', ' will you', ' could you', ' could you ever', ' will you be able to'];

const verbs1 = [' solve', ' get rid of', ' create', ' make', ' accept', ' end', ' start', ' accept', ' end',
				' finish', ' bomb', ' unify', ' seperate', ' incubate', ' love', ' register', ' visualise', ' cast out',
				' destroy', ' nuke', ' delete', ' secure', ' rely on', ' defy', ' neglect', ' refuse'];

const adjectives = [' immense', ' beautiful', ' great', ' repulsive', ' lovable', ' respectable', ' inconceivable',
					' incomprehensable', ' problematic', ' attainable', ' mystifying', ' grand', ' miniscule', ' negligible',
					' fierce', ' stupid', ' idiotic', ' smelly', ' exciting', ' nervewrecking', ' bitter', ' shitty',
					' unreliable', ' untrustworthy', ' trustworthy', ' reliable', ' uprising', ' emerging', ' submerging', ' silly',
					' thirsty', ' unbelievable', ' dreadful', ' religous']; 
	//always maybe 

const nouns = [' mexicans', ' economy recessions', ' unemployment issues', ' job shortages', ' healthcare systems', ' Arabs', ' muslims', ' ISIS threats', ' Middle Eastern problems',
				' extremists', ' ethnic groups', ' segregational divides', ' discriminaters', ' racists', ' facists', ' white supremacists', ' gun laws', ' abortions', ' adoptions',
				' LGBTs', ' mass shootings', ' shootings', ' Bernie Sanders supporters', ' democrats', ' communists', ' Russians', ' Putin followers', ' Koreans', ' Chinese', ' Iranians',
				' republicans', ' jurisdictions', ' school systems', ' education systems', ' Geneva agreements', ' Sharia enthusiast', ' muslim laws', ' African-Americans',
				' immigrants', ' environnemental issues', ' stock markets', ' cults', ' problems', ' E-mails', ' debts', ' walls', ' refugees', ' conspiracy theorists', ' media'];

const aanspr1 = [' my dear', ' my love', ' you silly', ' you ignorant', ' you lovable', ' you intresting', ' you unreliable', ' you smelly', ' you old', ' you conservative', ' you little', ' you sweet', ' you adorable'];

const aanspr2 = [' fuck', ' colleague', ' fool', ' shithead', ' pinhead', ' motherfucker', ' son of a bitch', ' boy', ' grandpa', ' darling', ' sweetheart', ' pig', ' rival', ' cunt', ' Messiah'];

const aanspr3 = [' you know what I would do to', ' you know what I think about', ' that is an intresting question about', ' I really dont know what to do about', ' I guess this is what I would do about', ' I think this is the best solution for the',
				 ' the only solution to', ' youve got it al wrong about', ' there is no other option considering', ' really? Is your question actually about', ' just listen to', ' just look at'];

const antw1 = ['About', 'Considering', 'Talking about', 'Discussing', 'Looking at', 'Taking a stance on'];

const AV = [' those', ' these', ' our', ' their', ' the', ' the countries', ' the states', ' your', ' the voters', ' some', ' all'];
	//always maybe

const antw2 = [' I', ' I would', ' I will', ' I am going to'];

const verst = [' politely', ' strongly', ' firmly', ' absolutely', ' faithfully'];
	//always maybe

const verbs2 = [' suggest', ' consider',  ' accept', ' deny', ' detest', ' loathe', ' refuse', ' propose', ' allege', ' suggest', ' preach', ' enjoy']
					//' recommend', ' like', --> kan alleen zónder antw3
					//' think', ' find', ' hope', ' say' --> kan alleen mét antw3
 
const continous = [' nuking', ' forgetting', ' expanding', ' wrecking', ' denying', ' deleting', ' accepting', ' bombing', ' creating', ' leaving',
				 ' attacking', ' defending', ' tickling', ' getting rid of', ' ending', ' starting', ' finishing', ' unifying', ' loving', ' deleting',
				  ' relying on', ' neglecting', ' entertaining', ' seperating', ' getting rid of', ' securing', ' finishing', ' destroying', ' breaking']; 

const antw3 = [' is the answer', ' is the solution', ' is the only answer', ' is the only solution', ' will solve the problem', ' will get us rich', ' is going to create jobs', 
				' will solve everything', ' will solve it', ' would make me happy', ' will make you cry', ' will make them cry', ' will be best for us', ' will be best for them', 
				' will make earth a better place', ' will make America great again', ' till the end', ' till it is over', ' till death', ' till death do us apart', ' at home', 
				' at the White House', ' at the Oval Office', ' with Uncle Sam', ' in America', ' in Mexico', ' wil secure the economy'];
	//always maybe


// Question/Answer variations Donald

var question = 'Donald'
var answer = 'Donald'

//The option to trigger a question or an answer

program
  .version('The Hillary Q&A generator 1.0')
  .option('-q, --question [Vraag]', 'Question generation')
  .option('-a, --answer [Antwoord]', 'Answer generation')
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
 	return choice(aanhef) + ' Donald, ';
 }

function longvr() {
 	return 'How' + choice(question1) + choice(verbs1) + maybe(adjectives) + choice(nouns) + '? ';
 }



//the answer generator:

 function shortantw() {
 	return 'Well,' + maybe(aanspr1) + choice(aanspr2) + ',' + choice(aanspr3) + maybe(adjectives) + choice(nouns) + ': ';
 }


  function longantw() {
 	return choice(antw1) + maybe(AV) + maybe(adjectives) + choice(nouns) + ',' + 
 	choice(antw2) + maybe(verst) + choice(verbs2) + choice(continous) + maybe(AV) + maybe(adjectives) + choice(nouns) + maybe(antw3) + '. '; 
 }
//antw1 + (AV) + (adjectives) + nouns, + antw2 + (verst) + verbs2 + continous + (AV) + (adjectives) + nouns + (antw3).
//Example:	[Talking about]+[(our)]+[(great)]+[muslims], +[I]+[(firmly)]+[recommend]+[accepting]+[(their)]+[(lovable)]+[shootings]+[would make America great again].




//Word-wrap Answer(1)
	var text1 = shortantw();
		
	

//Word-wrap Answer(2)	
	 var text2 = '';
 		for(var i = 0; i < 3; i++){

 			text2 += longantw();
	}
//Word-wrap for question not secessary (not a long sentence)


//Start of the discussion 

switch(program.question) { 
	case question:
		console.log('\n\n');
	 	console.log(shortvr());
	 	console.log('\n');
	 	console.log(longvr());
	 	console.log('\n\n');
	 	break;
/*	default:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<! Defaultproblem
		console.log("Now answer my question.")
		console.log('\n\n\n\n')
		break;
*/
}

switch(program.answer) {
	case answer:
		console.log('\n\n')
		console.log(wrap(text1, {'width': 65}));
		console.log('\n')
		console.log(wrap(text2, {'width': 65}));
	 	console.log('\n\n');
		break;
/*	default:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<! Defaultproblem
		console.log("Give me your answer.")
		console.log('\n\n\n\n')
		break;
*/
}
