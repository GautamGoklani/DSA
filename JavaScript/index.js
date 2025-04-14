const UserChoiceRedirection = require('./app');
const ReusableFunctions = require('./logic/ReusableFunctions');

const askUserChoice = new ReusableFunctions();
const callDsa = new UserChoiceRedirection();

//Option 1:
(async () => {
    askUserChoice.logChoiceList();
    while (true) {
        const userChoice = await askUserChoice.takeInput("Enter Your Choice: ");
        const dsaChoice = {
            '1': () => callDsa.stack(),
            '2': () => callDsa.queue(),
            '3': () => callDsa.stackLl(),
            '4': () => callDsa.queueLl(),
        }
        const action = dsaChoice[userChoice];
        if (action) {
            await action();
        } else if (userChoice.toLowerCase() == 'exit') {
            process.exit();
        } else if (userChoice.toLowerCase() == 'cls') {
            console.clear();
            askUserChoice.logChoiceList();
        } else {
            console.log("Invalid Choice");
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