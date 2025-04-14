const ReusableFunctions = require('./ReusableFunctions');

const stackLlElement = new ReusableFunctions();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLlClass {
    constructor() {
        console.log("Enter 1 for Push\t" + "Enter 2 for Pop");
        console.log("Enter 3 for Peek\t" + "Enter 4 for IsEmpty");
        console.log("Enter 5 for Size\t" + "Enter 6 for Clear");
        console.log("Enter 7 for Search\t" + "Enter 8 for Print in LL Form");
        console.log("Enter exit for Exiting from Stack With Linked List");
        this.top = null;
        this.sizeOfStack = 0;
    }
    async push() {
        const pushElement = await stackLlElement.takeInput("Enter Element to be Pushed: ");
        if (pushElement == "") {
            console.log("Element Push Unsuccessful: No Input Error");
        } else {
            const newNode = new Node(pushElement);
            newNode.next = this.top;
            this.top = newNode;
            this.sizeOfStack++;
            console.log("Pushed the Element Successfully!");
        }
    }
    async pop() {
        if (this.top) {
            const popElement = this.top.value;
            this.top = this.top.next;
            this.sizeOfStack--;
            console.log("Popped the Element " + popElement + " Successfully");
        } else {
            console.log("Stack is already Empty. No Element for Pop Operation.");
        }
    }
    async peek() {
        if (this.top) {
            const peekElement = this.top.value;
            console.log("The Top Value of the Stack is: " + peekElement);
        } else {
            console.log("Stack is already Empty. There is No Element on the Top of the Stack");
        }
    }
    async isEmpty() {
        this.top ? console.log("Stack is Not Empty") : console.log("Stack is Empty");
    }
    async size() {
        this.sizeOfStack == 0 ? console.log("Stack is Empty") : console.log("Size of Stack is: " + this.sizeOfStack);
    }
    async clear() {
        if (this.top) {
            const clearStackChoice = await stackLlElement.takeInput("Enter Y for Clearing Stack: ");
            if (clearStackChoice.toLowerCase() === 'y') {
                this.top = null;
                console.log("Cleared Stack Successfully!");
            } else {
                console.log("Cancelled the Clear Operation!");
            }
        } else {
            console.log("Stack is already empty");
        }
    }
    async search() {
        if (this.top) {
            const searchElement = await stackLlElement.takeInput("Enter Element to be Searched: ");
            if (searchElement == "") {
                console.log("Element Search Unsuccessful: No Input Error");
            } else {
                let temp = this.top;
                while (temp) {
                    if (temp.value == searchElement) {
                        console.log(searchElement + " is in the stack");
                        return;
                    }
                    temp = temp.next;
                }
                console.log(searchElement + " is not in the stack");
                return;
            }
        } else {
            console.log("Stack is Empty");
            return;
        }

    }
    async printInLl() {
        console.log("\n" + JSON.stringify(this.top) + "\n");
    }
}

module.exports = StackLlClass;