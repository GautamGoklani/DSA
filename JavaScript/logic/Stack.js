const ReusableFunctions = require("./ReusableFunctions");

const stackElement = new ReusableFunctions();

class StackClass {
    constructor() {
        console.log("Enter 1 for Push\t" + "Enter 2 for Pop");
        console.log("Enter 3 for Peek\t" + "Enter 4 for IsEmpty");
        console.log("Enter 5 for Size\t" + "Enter 6 for Clear");
        console.log("Enter 7 for Search\t" + "Enter exit for Exiting from Stack\n");
        this.items = [];
    }
    async push() {
        const pushElement = await stackElement.takeInput("Enter Element to be Pushed: ");
        this.items.push(pushElement);
        console.log("Pushed the element Successfully!");
    }
    async pop() {
        const pushElement = await stackElement.takeInput("Enter Element to be Pushed: ");
        this.items.push(pushElement);
        console.log("Pushed the element Successfully!");

    }
    async invalidOperation() {
        console.log("Invalid Operation Choice");
    }
}

module.exports = StackClass;