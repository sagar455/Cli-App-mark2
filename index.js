var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var playerName = readlineSync.question(chalk.yellow('May I have your name? \n'));
console.log(chalk.blue('\n\nHello ',playerName, '...!\n'));

console.log(chalk.cyan('Let\'s start the quizzz...\n'));

questionOne = {
  question:'How many colours are there in our National Flag? ',
  answer: '3',
}

questionTwo = {
  question:'Which is our National Animal? ',
  answer: 'tiger',
}

questionThree = {
  question:'Which is our National Tree? ',
  answer: 'banyan',
  
}

questionFour = {
  question:'Which is our  National Bird? ',
  answer: 'peacock',
}

questionFive = {
  question:'Which is our National Fruit? ',
  answer: 'mango',
}

var quizQuestions =[questionOne,questionTwo,questionThree,questionFour,questionFive];

validation(quizQuestions);






function validation(quizQuestions){
  console.log(chalk.bgRedBright('                                    '));
console.log(chalk.bold.underline.blueBright.bgWhite('..........KNOW YOUR COUNTRY.........'))
console.log(chalk.bgGreen('                                    \n\n'));
for(let i=0;i<5;i++)
{
  var response = readlineSync.question(chalk.red(quizQuestions[i].question));
 
  if(response.toLocaleLowerCase() == quizQuestions[i].answer){
    score++;
     console.log(chalk.green.bold('CORRECT........  \nyourr score.... '+score));
  console.log("\n");
  }
  else{
    score--;
     console.log(chalk.redBright.bold('INCORRECT........  \nyourr score.... '+score));
  console.log("\n");
  }
 
}
console.log(chalk.bgWhite.black.bold("final score.... "+score));
 console.log("\n\n\n");
}

highScore = [
  {
    username:"Sam",
    points: 4
  },
   {
    username:"Rocky",
    points: 5
  },
   {
    username:"Ricky",
    points: 3
  }
];
console.log(chalk.bgYellow(" High Score "));
console.table(highScore);
// getting high score
var max = highScore[0].point;
for (let i = 1; i < highScore.length; ++i) {
  if (highScore[i].points > max) {
    max = highScore[i].points;
  }
}
//checking if user beat the hihg score
if(score>max){
    console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
}
else{
    console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));

}

var choice = readlineSync.question(chalk.yellow.italic('Want to restart the game(yes/no)?????????  '))
console.log("\n\n\n")
while(choice == 'yes'){
  console.clear();
  console.log("\nHiii ",playerName,".....!Lets Start Again\n\n");
  validation(quizQuestions);
  break;
}