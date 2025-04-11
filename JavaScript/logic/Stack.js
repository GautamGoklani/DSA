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
        //this.items.push(pushElement);
        this.items = [...this.items, pushElement];
        console.log("Pushed the Element Successfully!");
    }
    async pop() {
        if (this.items.length > 0) {
            // const popElement = await this.items.pop();
            const popElement = this.items[this.items.length - 1];
            this.items.length -= 1;
            console.log("Popped the Element " + popElement + " Successfully");
        } else {
            console.log("Stack is already Empty. No Element for Pop Operation.");
        }
    }
    async peek() {
        if (this.items.length > 0) {
            const peekElement = await this.items[this.items.length - 1];
            console.log("The Top Value of the Stack is: " + peekElement);
        } else {
            console.log("Stack is already Empty. There is No Element on the Top of the Stack");
        }
    }
    async isEmpty() {
        this.items[0] != undefined ? console.log("Stack is Not Empty") : console.log("Stack is Empty");
    }
    async size() {
        const stackSize = this.items.length;
        stackSize == 0 ? console.log("Stack is Empty") : console.log("Size of Stack is: " + stackSize);
    }
    async clear() {
        if (this.items.length > 0) {
            const clearStackChoice = await stackElement.takeInput("Enter Y for Clearing Stack & N for Canceling the Operation: ");
            if (clearStackChoice.toLowerCase() === 'y') this.items = [];
        } else {
            console.log("Stack is already empty");
        }
    }
    async search() {
        if (this.items.length == 0) {
            console.log("Stack is Empty");
            return;
        }
        const searchElement = await stackElement.takeInput("Enter Element to be Searched: ");
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] == searchElement) {
                console.log(this.items[i] + " is in the Stack");
                return;
            } else if (this.items[i] >= this.items.length - 1 && this.items[i] != searchElement) {
                console.log(searchElement + " is not in the Stack");
                return;
            }
        }
    }
    async invalidOperation() {
        console.log("Invalid Operation Choice");
    }
}

module.exports = StackClass;