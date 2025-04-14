const ReusableFunctions = require('./ReusableFunctions');

const queueLlElement = new ReusableFunctions();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueLlClass {
    constructor() {
        console.log("Enter 1 for EnQueue\t" + "Enter 2 for DeQueue");
        console.log("Enter 3 for Peek\t" + "Enter 4 for IsEmpty");
        console.log("Enter 5 for Size\t" + "Enter 6 for Clear");
        console.log("Enter 7 for Search\t" + "Enter 8 for Print in LL Form");
        console.log("Enter exit for Exiting from Queue With Linked List");
        this.front = null;
        this.rear = null;
    }
    async enQueue() {
        const enQueueElement = await queueLlElement.takeInput("Enter Element for End of the Queue: ");
        if (enQueueElement == "") {
            console.log("Element Push Unsuccessful: No Input Error");
        } else {
            const newNode = new Node(enQueueElement);
            this.rear ? this.rear.next = newNode : this.front = newNode;
            this.rear = newNode;
            console.log("Element Added to the End of the Queue Successfully!");
        }
    }
    async deQueue() {
        if (!this.front) {
            console.log("Queue is Already Empty!");
            return;
        }
        const deQueueElement = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        console.log("Removed the First Element " + deQueueElement + " From the Queue Successfully!");
    }
    async peek() {
        this.front
            ? console.log("The First Element in the Queue is:" + this.front.value)
            : console.log("Queue is Empty. There is no Element to show at the Start of the Queue!");
    }
    async isEmpty() {
        this.front ? console.log("Queue is Not Empty!") : console.log("Queue is Empty!");
    }
    async size() {
        if (!this.front) {
            console.log("Queue is Empty!");
            return;
        } else {
            let temp = this.front;
            let sizeOfQueue = 0;
            while (temp) {
                sizeOfQueue++;
                temp = temp.next;
            }
            console.log("Size of Queue is: " + sizeOfQueue);
        }
    }
    async clear() {
        if (!this.front) {
            console.log("Queue is Already Empty!");
            return;
        } else {
            const clearQueueChoice = await queueLlElement.takeInput("Enter Y for Clearing Queue: ");
            if (clearQueueChoice.toLowerCase() == 'y') {
                this.front = null;
                this.rear = null;
                console.log("Queue is Cleared Successfully!");
            } else {
                console.log("Cancelled the Clear Operation!");
            }
        }
    }
    async search() {
        if (!this.front) {
            console.log("Queue is Empty!");
            return;
        } else {
            let temp = this.front;
            const searchElement = await queueLlElement.takeInput("Enter Element to be Searched: ");
            if (searchElement == "") {
                console.log("Element Search Unsuccessful: No Input Error");
            } else {
                while (temp) {
                    if (temp.value == searchElement) {
                        console.log(searchElement + " is in the queue!");
                        return;
                    }
                    temp = temp.next;
                }
                console.log(searchElement + " is not in the queue!");
                return;
            }
        }
    }
    async printInLl() {
        console.log("\n" + JSON.stringify(this.front) + "\n");
    }
}

module.exports = QueueLlClass;