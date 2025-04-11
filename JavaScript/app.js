const ReusableFunctions = require("./logic/ReusableFunctions");
const StackClass = require("./logic/Stack");
const QueueClass = require("./logic/Queue");

const userChoiceOperation = new ReusableFunctions();

class UserChoiceRedirection {
    async stack() {
        const stackOperation = new StackClass();
        while (true) {
            const choiceOperation = await userChoiceOperation.takeInput("Enter Operation You Want to Perform in Stack: ");
            if (choiceOperation.toLowerCase() == 'exit') {
                console.clear();
                userChoiceOperation.logChoiceList();
                break;
            }
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
            if (operation)
                await operation();
            else
                console.log("Invalid Choice!");
        }
    }
    async queue() {
        const queueOperation = new QueueClass();
        while (true) {
            const choiceOperation = await userChoiceOperation.takeInput("Enter Operation You Want to Perform in Queue:");
            if (choiceOperation.toLowerCase() == 'exit') {
                console.clear();
                userChoiceOperation.logChoiceList();
                break;
            }
            const operationMap = {
                '1': () => queueOperation.enQueue(),
                '2': () => queueOperation.deQueue(),
                '3': () => queueOperation.peek(),
                '4': () => queueOperation.isEmpty(),
                '5': () => queueOperation.size(),
                '6': () => queueOperation.clear(),
                '7': () => queueOperation.search(),
            }
            const operation = operationMap[choiceOperation];
            if (operation)
                await operation();
            else
                console.log("Invalid Choice!");
        }
    }
}

module.exports = UserChoiceRedirection;