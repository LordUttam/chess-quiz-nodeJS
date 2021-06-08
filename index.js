const readlineSync = require('readline-sync');
const chalk = require('chalk');
const pressAnyKey = require('press-any-key');

console.log(chalk.bgYellow('***WELCOME TO THE CHESS QUIZ***\n\n'));

var username = readlineSync.question(chalk.bold.cyan.bgYellowBright('What is your name?\n'));

console.log(chalk.green.bold(`Hey ${username}, welcome to the chess quiz.\nPlease read the below instructions carefully.`));

// Instructions
console.log('_'.repeat(50));
console.log(chalk.bold.blue('1. The quiz consists of three sections:\n A. Rules of Chess\n B. Chess History\n C. Chess Skills\n\n2. Every correct answer gives you four points and one point will be deducted on wrong answer.\n3. Each section contains five questions.\n4. Type the choice a, b, c or d.\n'));
console.log('_'.repeat(50));

// Leaderboard
var leaderboard = [{name:"Kiteretsu", score:35}, {name:"Kenichi", score:15},{name:"nobita", score:12}];

console.log(chalk.red.green("LeaderBoard:"));

for(let i=0;i<leaderboard.length;i++){
  console.log(chalk.green(`${i+1}. ${leaderboard[i].name} ${leaderboard[i].score}`));
}
console.log("");

// Question sets
var questionsRules = [{
  question: 'Which piece only moves diagonally?',
  options: ['a. Rook', 'b. Knight' ,'c. Bishop', 'd. Pawn'],
  answer: 'c'
},{
  question: 'Which piece only moves diagonally when capturing?',
  options: ['a. Rook', 'b. Knight' ,'c. Bishop', 'd. Pawn'],
  answer: 'd'
},{
  question: 'Which piece can jump over other pieces?',
  options: ['a. Rook', 'b. Knight' ,'c. Bishop', 'd. Pawn'],
  answer: 'b'
},{
  question: 'Which piece can be promoted?',
  options: ['a. Rook', 'b. Knight' ,'c. Bishop', 'd. Pawn'],
  answer: 'd'
},{
  question: 'En passant rule involves which pieces?',
  options: ['a. Rook', 'b. Knight' ,'c. Bishop', 'd. Pawn'],
  answer: 'd'
}]

var questionsHistory = [{
  question: 'Who was the first world chess champion?',
  options: ['a. Alexander Alekhine', 'b. Gary Kasparov' ,'c. Wilhelm Steinitz', 'd. Vishwanathan Anand'],
  answer: 'c'
},{
  question: 'Who was the longest-reigning world chess champion?',
  options: ['a. Emanuel Lasker', 'b. Gary Kasparov' ,'c. Magnus Carlsen', 'd. Vishwanathan Anand'],
  answer: 'a'
},{
  question: 'Who is the youngest female grandmaster?',
  options: ['a. Judit Polgar', 'b. Maia Chiburdanidze' ,'c. Vera Menchik', 'd. Hou Yifan'],
  answer: 'd'
},{
  question: 'Where did chess originate?',
  options: ['a. Britain', 'b. Russia' ,'c. India', 'd. Scandinavia'],
  answer: 'c'
},{
  question: 'Who is/was the first Indian to become World Champion?',
  options: ['a. Vishwanathan Anand', 'b. R. Praggnanandhaa' ,'c. Vidit Gujrathi', 'd. Sultan Khan'],
  answer: 'a'
}]

var questionsSkills = [{
  question: 'Find the mate in one move: 1.f3 e6 2. g4 ____ ',
  options: ['a. Qh4', 'b. a3', 'c. e7', 'd. Qe2'],
  answer: 'a'
},{
  question: 'With a knight on b1, how many moves will it take to get to f6?',
  options: ['a. 5', 'b. 3', 'c. 4', 'd. 2'],
  answer: 'b'
},{
  question: 'With the bishop on a3, would the move Bg8 be legal',
  options: ['a. Yes', 'b. No'],
  answer: 'b'
},{
  question: 'How many moves for the fastest checkmate: Black: Kc2 White: Ke2, Qa3, Nd1 (White to move)',
  options: ['a. 1', 'b. 2', 'c. 3', 'd. 4'],
  answer: 'a'
},{
  question: 'How many moves would it take for a knight to go from b2 to e6',
  options: ['a. 2', 'b. 3', 'c. 4', 'd. 5'],
  answer: 'b'
}]

function mcqQuiz(questions,i){
    console.log(chalk.bold.green(questions[i].question));
    for (let option in questions[i].options){
      console.log(chalk.yellow(questions[i].options[option]));
    }

    //Question in next line which is blank
    var answer = readlineSync.question(chalk.bold.green("\n Your answer: "));  
    
    return answer
}

function startQuiz(){
var scoreHistory = 0;
var scoreRules = 0;
var scoreSkills = 0;

var wrongAnswersRules = 0;
var wrongAnswersHistory = 0;
var wrongAnswersSkills = 0; 

// MAIN LOOPS
console.log(chalk.bold.whiteBright.bgBlueBright('\n\n++++++Rules Of Chess++++++\n\n'));
for(var i=0; i<questionsRules.length; i++){  
  console.log("_".repeat(40));
  console.log("");

  var givenAnswer = mcqQuiz(questionsRules,i);
  
  if(givenAnswer.toLowerCase()===questionsRules[i].answer.toLowerCase()){
    scoreRules=scoreRules+4;

    // Don't display this for the last question
    if(i<questionsRules.length-1){
      console.log(chalk.green(`That was the right answer ${username}. Keep it up.`));
    } 
    
  }
  else {
    wrongAnswersRules++
    console.log(chalk.red('Wrong answer.'));
  }
}

console.log(chalk.bold.whiteBright.bgBlueBright('\n\n++++++History Of Chess++++++\n\n'));

for(var i=0; i<questionsHistory.length; i++){  
  console.log("_".repeat(40));
  console.log("");

  var givenAnswer = mcqQuiz(questionsHistory,i);
  
  if(givenAnswer.toLowerCase()===questionsHistory[i].answer.toLowerCase()){
    scoreHistory=scoreHistory+4;

    // Don't display this for the last question
    if(i<questionsHistory.length-1){
      console.log(`That was the right answer ${username}. Keep it up.`);
    } 
    
  }
  else {
    wrongAnswersHistory++
    console.log('Wrong answer.')
  }
}

console.log(chalk.bold.white.bgBlueBright('\n\n++++++Chess Skills++++++\n\n'));

for(var i=0; i<questionsSkills.length; i++){  
  console.log("_".repeat(40));
  console.log("");

  var givenAnswer = mcqQuiz(questionsSkills,i);
  
  if(givenAnswer.toLowerCase()===questionsSkills[i].answer.toLowerCase()){
    scoreSkills=scoreSkills+4;

    // Don't display this for the last question
    if(i<questionsSkills.length-1){
      console.log(`That was the right answer ${username}. Keep it up.`);
    } 
    
  }
  else {
    wrongAnswersSkills++;
    console.log('Wrong answer');
  }
}

console.log(" ");
console.log(chalk.red("*".repeat(50)));
console.log(" ");

scoreRules = scoreRules - wrongAnswersRules;
scoreHistory = scoreHistory - wrongAnswersHistory;
scoreSkills = scoreSkills - wrongAnswersSkills;

console.log(chalk.bold.yellowBright(`Your scores- \n     Chess Rules: ${scoreRules}/20 \n     Chess History: ${scoreHistory}/20 \n     Chess Skills: ${scoreSkills}/20`));


let totalScore = scoreRules + scoreHistory + scoreSkills;

if(totalScore>=30){
  console.log(chalk.bold.yellowBright.bgRedBright(`Your Total score was ${totalScore} out of 60. Brilliant!.`));
}
else if(totalScore>=10){
  console.log(chalk.bold.yellowBright.bgRedBright(`Your total score was ${totalScore} out of 60. That's good performance.`));
}
else {
  console.log(chalk.bold.yellowBright.bgRedBright(`Your total score was ${totalScore} out of 60. Maybe you are not interested in chess. That's okay.`));
}

var brokeHighScore = false;
for(let i=0;i<leaderboard.length;i++){
  if(totalScore>=leaderboard[i].score){
    console.log(`Congratulations ${username}, you broke a high score. Send me a screenshot so I can update rank ${i+1}.`)
    brokeHighScore = true;
    break;
  }
}
if(!brokeHighScore){
  console.log(`Sorry ${username}, you could not make it top 3.`)
}

}


// Press any key to continue
pressAnyKey("If you have read the instructions, press any key to continue, or CTRL+C to exit.", {
  ctrlC: "reject"
})
  .then(() => {
    startQuiz();
  })
  .catch(() => {
    console.log('You pressed CTRL+C. Start application again to play. Bye Bye!');
  })
