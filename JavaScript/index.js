const UserChoiceRedirection = require('./app');
const ReusableFunctions = require('./logic/ReusableFunctions');
console.log('Enter 1 for Stack\t' + 'Enter 2 for Queue');
console.log('Enter exit for Exiting from program\n');

const askUserChoice = new ReusableFunctions();
const callDsa = new UserChoiceRedirection();

//Option 1:
(async () => {
    while (true) {
        const userChoice = await askUserChoice.takeInput("Enter Your Choice: ");
        switch (userChoice) {
            case '1':
                await callDsa.stack();
                break;
            case '2':
                await callDsa.queue();
                break;
            default:
                userChoice.toLowerCase() == 'exit' ? process.exit() : callDsa.invalidChoice();
        }
    }
})();

//Option 2:
// askUserChoice.takeInput("Enter Your Choice:").then((userChoice) => {
//     if (userChoice == '1') {
//         callDsa.stack();
//     } else if (userChoice.toLowerCase == 'exit') {
//         process.exit();
//     } else {
//         callDsa.invalidChoice();
//     }
// });