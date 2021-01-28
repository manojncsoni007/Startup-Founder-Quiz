var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question('What is your name? ');
console.log('Welcome ' + chalk.bold.red(userName));

console.log(`let's play quiz about startup founder`);
console.log(chalk.bgMagenta('----------------- Toh Chaliye Shuru Krte Hain -----------------'));
// console.log(\n);

var score = 0; 
// array of question list
var questionList = [{
  que: '1. Who is founder of OYO? \n A. Bhavish Agrawal \n B. Ritesh Agarwal \n C. Namami Agrawal \n',
  ans: 'b'
},{
  que: '2. Who is founder of PayTm? \n A. Vijay Sekhar Sharma \n B. Binny Bansal \n C. Piyush Shah \n',
  ans: 'a' 
},{
  que: '3. Who is founder of CRED? \n A. Sachin Bansal \n B. Manoj Soni \n C. Kunal Shah \n' ,
  ans: 'c'
},{
  que: '4. Who is founder of Unacademy? \n A. Deepinder Goayal \n B. Shiv Nadar \n C. Roman Saini \n',
  ans: 'c'
},{
  que: '5. Who is founder of DRAEM11? \n A. Harsh Jain \n B. Divyank Turkhia \n C. Tanay Kukareja \n' ,
  ans: 'a'
}]

// function of printing questionList
function Question(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() == answer){
    score = score + 10;
    console.log(chalk.green('You are right'));
    console.log(chalk.bgMagenta('Your Score: ' + score));
    console.log('---------------------------------');
  } else {
    console.log(chalk.red('You are wrong'));
    console.log(chalk.bgMagenta('Your Score: ' + score));
    console.log('---------------------------------');
  }
}

// for loop for priting wuestion from array
for(i=0; i<questionList.length; i++){
  Question(questionList[i].que,questionList[i].ans);
}

console.log(chalk.bgRed('Hey '+ userName + ' your Final Score is: ' + score));

// To share use ?embed=1&output=1 at the end of the URL of your app