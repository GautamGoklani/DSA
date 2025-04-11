const ReusableFunctions = require("./logic/ReusableFunctions");
const StackClass = require("./logic/Stack");

const userChoiceOperation = new ReusableFunctions();

class UserChoiceRedirection {
    async stack() {
        const stackOperation = new StackClass();
        while (true) {
            const choiceOperation = await userChoiceOperation.takeInput("Enter Operation You Want to Perform in Stack: ");
            if (choiceOperation.toLowerCase() == 'exit') break;
            const operationMap = {
                '1': () => stackOperation.push(),
                '2': () => stackOperation.pop(),
                '3': () => stackOperation.peek(),
                '4': () => stackOperation.isEmpty(),
                '5': () => stackOperation.size(),
                '6': () => stackOperation.clear(),
                '7': () => stackOperation.search(),
            };
            
            const operation = operationMap[choiceOperation];
            if (operation) {
                await operation();
            } else {
                stackOperation.invalidOperation();
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