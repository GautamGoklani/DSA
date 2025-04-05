const ReusableFunctions = require("./logic/ReusableFunctions");
const StackClass = require("./logic/Stack");

const userChoiceOperation = new ReusableFunctions();

class UserChoiceRedirection {
    async stack() {
        const stackOperation = new StackClass();
        while (true) {
            const choiceOperation = await userChoiceOperation.takeInput("Enter Operation You Want to Perform in Stack: ");
            if (choiceOperation.toLowerCase() == 'exit') break;
            switch (choiceOperation) {
                case '1':
                    stackOperation.push();
                    break;
                default:
                    stackOperation.invalidOperation();
                    break;
            }
        }
    }
    async queue() {
        console.log("Queue");
    }
    async invalidChoice() {
        console.log("Invalid Choice");
    }
}

module.exports = UserChoiceRedirection;