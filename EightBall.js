// Eight Ball 


let userName = 'David';
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

let userQuestion = 'What is my dream occupation?';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 0:
        console.log('Lawyer');
        break;
    case 1:
        console.log('Software Engineer');
        break;
    case 2:
        console.log('Police Officer');
        break;
    case 3:
        console.log('Data Anaylst');
        break;
    case 4:
        console.log('Firefighter');
        break;
    case 5:
        console.log('Cybersecurity Anaylst');
        break;
    case 6:
        console.log('Investment Banker');
        break;
    case 7:
        console.log('Diplomat');
        break;
    case 8:
        console.log('Teacher');
        break;
}

console.log('What should my salary be?');

if(randomNumber === 0) {
    console.log(50000);
} else if (randomNumber === 1) {
    console.log(60000);
} else if (randomNumber === 2) {
    console.log(70000);
} else if (randomNumber === 3) {
    console.log(80000);
} else if (randomNumber === 4) {
    console.log(90000);
} else if (randomNumber === 5) {
    console.log(100000);
} else if (randomNumber === 6) {
    console.log(110000);
} else if (randomNumber === 7) {
    console.log(120000);
} else if (randomNumber === 8) {
    console.log(130000);
} else {
    console.log('Invalid');
}