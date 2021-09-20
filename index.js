var read  = require("readline-sync");
var chalk = require("chalk");
var log = console.log;
var score = 0;
var i;

//Colors that are being used
var cyan  = chalk.cyan;
var blue  = chalk.blue;
var red   = chalk.red;
var green = chalk.green;
var magenta = chalk.magenta;
var yellow = chalk.yellow;

//play function for DC fans
function playDC(ques, ans)
{
var a = read.question(blue(ques + "\n"));
if(a.toUpperCase() == ans.toUpperCase())
{
  console.log(green("You are right!"));
  score++;
}
else{
  console.log(magenta("I'm afraid you are wrong!!"));
  score--;
}
console.log(yellow("Your current score is " + score));
console.log("----------------------------");
}

//play function for Marvel fans
function playMarvel(ques, ans)
{
var a = read.question(red(ques + "\n"));
if(a.toUpperCase() == ans.toUpperCase())
{
  console.log(green("You are right!"));
  score++;
}
else{
  console.log(magenta("I'm afraid you are wrong!!"));
  score--;
}
console.log(yellow("Your current score is " + score));
console.log("----------------------------");
}

//function for throwing questions
function ask(choice)
{
if(choice.toUpperCase() === 'DC')
{
  for( i =0; i<DCques.length; i++)
  {
    playDC(DCques[i].q,DCques[i].a);
  }
}else
{
  for( i =0; i<MarvelQues.length; i++)
  {
    playMarvel(MarvelQues[i].q,MarvelQues[i].a);
  }
}
}

//DC questions
var DCques = [
  {
    q:"Greatest villian ever in DC ? ",
    a: "Darksied"
  },
  {
    q:"Supermans' weakness ?",
    a:"Kryptonite"
  },
  {
    q:"Superman vs Hulk! Who will win ?",
    a:"Superman"
  },
  {
    q:"Batmans' greatest adversary ?",
    a:"Joker"
  },
  {
     q:"How old is Wonder Woman ?",
    a:"5000"
  }
];

//Marvel questions
var MarvelQues = [
  {
    q:"Greatest villian ever in Marvel ? ",
    a: "Thanos"
  },
  {
    q:"Thors' weakness ?",
    a:"Worthiness"
  },
  {
    q:"Metal used to make Captain Americas' Shield ?",
    a:"Vibranium"
  },
  {
    q:"Which stone was in the possession of Dr. Strange,  specifically ?",
    a:"Time Stone"
  },
  {
    q:"Thanos never cried. - True or False ?",
    a:"False"
  }
]

//Recorded scores
var scoreRecord = [
  {
    name:"Superman",
    points:8
  },
  {
    name:"Batman",
    points:6
  },
  {
    name:"Thor",
    points:4
  }
]


var userName = read.question(cyan("Name please ?\n"));
log(cyan("Hello "+userName));
var choice  = read.question(green("Are you a DC guy or a Marvel guy ?\n"));

ask(choice);

if(choice.toUpperCase() === 'DC')
{
  var choice2 = read.question(green("Do you want try your Marvel Knowledge as well ? - Type 'yes' or 'no' !!! \n"));
  if(choice2.toUpperCase() === 'YES')
  {
    ask("marvel");
  }else
  {
    log(green("GAME OVER !!! \nYour final score is "+score));
  }
}
else
{
  var choice2 = read.question(green("Do you want try your DC Knowledge as well ? - Type 'yes' or 'no' !!! \n"));
  if(choice2.toUpperCase() === 'YES')
  {
    ask("dc");
  }else
  {
    log(green("GAME OVER !!! \nYour final score is "+score));
  }
}
if(choice2.toUpperCase() === 'YES')
 {
   log(green("GAME OVER !!! \nYour final score is "+score));
 }

 log(magenta("Score Table"));
  var flag = 0;
 for( i  =0;i<scoreRecord.length; i++)
 {
  
   if(scoreRecord[i].points > score)
   {
     log(cyan(scoreRecord[i].name + " --------> " + scoreRecord[i].points));
   }else
   {
     if(flag == 0){
       log(cyan(userName + " --------> " + score));
       flag++;
     }
     
     log(cyan(scoreRecord[i].name + " --------> " + scoreRecord[i].points));
   }
 }


if(scoreRecord[2].points > score)
{
  log(cyan(userName + " --------> " + score));
  log(yellow("Sorry, you scored the least !"));
}else if(scoreRecord[0].points < score)
{
   log(red("Congratulations, you have scored the highest !!"));
}