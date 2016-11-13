var chance = require('chance').Chance();

var wrap = require('word-wrap');

var program = require('commander');

//Hilary and Donald, debate generator.

const question1 = ['do you think you would', 'would you ever', 'are you going to', 'will you', 'could you', 'will you be able to'];

const verbs1 = ['solve', 'get rid of', 'create', 'make', 'accept', 'end', 'start', 'accept', 'end',
				'finish', 'bomb', 'unify', 'seperate', 'incubate', 'love', 'register', 'visualise', 'cast out',
				'destroy', 'nuke', 'delete', 'secure', 'rely on', 'defy', 'neglect'];

const adjectives = ['the immense', 'the beautifull', 'the great', 'the repulsive', 'the lovable', 'the respectable', 'the inconceivable',
					'the incomprehensable', 'the problematic', 'the attainable', 'the mystifying', 'the grande', 'the miniscule', 'the negligible',
					'the fierce', 'the stupid', 'the idiotic', 'the smelly', 'the exciting', 'the nervewrecking', 'the bitter', 'the shitty',
					'the unreliable', 'the untrustworthy', 'the trustworthy', 'the reliable', 'the uprising', 'the emerging', 'the submerging', 'the silly',
					'the dirty', 'the unbelievable', 'the dreadfull'];

const nouns1 = ['mexicans', 'economy recessions', 'unemployment issues', 'job shortages', 'healthcare systems', 'the Arabs', 'the muslims', 'ISIS threats', 'Middle Eastern problems',
				'extremists', 'religious groups', 'segregational divides', 'discriminaters', 'racists', 'facists', 'white supremacists', 'gun laws', 'abortions', 'adoptions',
				'LGBTs', 'mass shootings', 'shootings', 'Bernie Sanders supporters', 'democrats', 'communists', 'Russians', 'Puttin followers', 'Koreans', 'Chinese', 'Iranians',
				'republicans', 'jurisdictions', 'school systems', 'education systems', 'the Geneva agreements', 'Sharia enthusiast', 'muslim laws', 'African-Americans',
				'immigrants', 'environnemental issues', 'stock markets', 'cults', 'problems', 'debts'];

const aanspr1 = ['you silly', 'my dear', 'you ignorant', 'you lovable', 'you intresting', 'you unreliable', 'you smelly', 'you old', 'you conservative', 'you little', 'you sweet', 'you adorable'];

const aanspr2 = ['fuck', 'colleague', 'fool', 'shithead', 'pinhead', 'motherfucker', 'son of a bitch', 'boy', 'grandpa', 'darling', 'sweatheart', 'pig', 'rival', 'cunt'];

const aanspr3 = ['you know what I would do to', 'you know what I think about', 'that is an intresting question about', 'I really dont know what to do about', 'I guess my solution to', 'the best solution to',
				 'the only solution to', 'youve got it al wrong about', 'there is no other option considering', 'Really? Is your question actually about'];

const antw1 = ['About', 'Considering', 'Talking about', 'Discussing', 'Looking at', 'Taking a stance on'];

const AV = ['those', 'these', 'our', 'their', 'the', 'the countries', 'the national', 'for the', 'considering'];

const antw2 = ['I', 'I would', 'I dont'];

const verst = ['politely', 'strongly', 'firmly', 'absolutely'];

const verbs2 = ['dont consider', 'recommend', 'detest', 'suggest', 'believe', 'accept', 'loathe', 'think', 'find', 'like', 'say', 'wish']; 

const continous = ['nuking', 'forgetting', 'expanding', 'wrecking', 'denying', 'deleting', 'accepting', 'bombing', 'creating', 'leaving',
				 'attacking', 'defending', 'making', 'getting rid of', 'ending', 'starting', 'finishing', 'unifying', 'loving', 'deleting',
				  'relying on', 'neglecting', 'entertaining']; 

const antw3 = ['is the answer', 'is the solution', 'would solve the problem', 'would solve everything', 'would solve it', 'would make me cry',
				 'would make you cry', 'would make them cry', 'would be best for us', 'would be best for them', 'would make earth a better place', 'would America great again'];



//creating the functions for the sentence generation

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

	



	//the question generator:


	 function short(){
	 	return 'Now listen Hillary' + ', ';
	 }

	 function long(){
	 	return 'How ' + choice(question1) + ' ' + choice(verbs1) + ' ' + maybe(adjectives) + ' ' + choice(nouns1) + '?';
	 }


	//the answer generator:

	 function long1(){
	 	return 'Well ' + maybe(aanspr1 + ' ') + choice(aanspr2) + ' ' +  choice(aanspr3) + ' ' + maybe(adjectives) + ' ' + choice(nouns1) + '. ';
	 }

	 function long2(){
	 	return choice(antw1) + ' ' + choice(AV) + ' ' + maybe(adjectives) + ' ' + choice(nouns1) + ' ' + choice(antw2) + ' ' + maybe(verst) + ' ' +
	 	choice(verbs2) + ' ' + choice(continous) + ' ' + choice(AV) + ' ' + maybe(adjectives) + ' ' + choice(nouns1) + ' ' + maybe(antw3) + '. ';
	 }





var question = 'Donald'
var answer = 'Donald'

//The option to trigger a question or an answer

program
  .version('0.0.1')
  .option('-q, --question [value]', 'Question generation')
  .option('-a, --answer [value]', 'Answer generation')
  .parse(process.argv);


//Start of the discussion

switch(program.question)
{ 
	case question:
		console.log('\n\n\n\n');
	 	console.log(short());
	 	console.log('\n');
	 	console.log(long());
	 	console.log('\n\n\n\n');
	break;
}

switch(program.answer)
{ 
	case answer:
		console.log('\n\n\n\n');
		console.log(long1());
		console.log(long2());
		console.log('\n\n\n\n');
	break;
}

