const ReusableFunctions = require("./ReusableFunctions");
const queueElement = new ReusableFunctions();

class QueueClass {
    constructor() {
        console.log("Enter 1 for EnQueue\t" + "Enter 2 for DeQueue");
        console.log("Enter 3 for Peek\t" + "Enter 4 for IsEmpty");
        console.log("Enter 5 for Size\t" + "Enter 6 for Clear");
        console.log("Enter 7 for Search\t" + "Enter exit for Exiting from Queue\n");
        this.items = [];
        this.first = 0;
    }
    async enQueue() {
        const enQueueElement = await queueElement.takeInput("Enter Element for End of the Queue: ");
        if (enQueueElement == "") {
            console.log("Element Add Operation Unsuccessful: No Input Error");
        } else {
            this.items = [...this.items, enQueueElement];
            console.log("Element Added to the End of the Queue!");
        }
    }
    async deQueue() {
        if (this.items[this.first]) {
            const deQueueElement = this.items[this.first];
            console.log("Removed the First Element " + deQueueElement + " From the Queue Successfully!");
            this.first++;
        } else {
            console.log("Queue is Already Empty");
        }
    }
    async peek() {
        if (this.items[this.first]) {
            console.log("The First Element in the Queue is:" + this.items[this.first]);
        } else {
            console.log("Queue is Already Empty. There is no Element to show at the Start of the Queue!");
        }
    }
    async isEmpty() {
        this.items[this.first] ? console.log("Queue is Not Empty!") : console.log("Queue is Empty!")
    }
    async size() {
        const queueSize = this.items.length - this.first;
        queueSize == 0 ? console.log("Queue is Empty!") : console.log("Size of Queue is: " + queueSize);
    }
    async clear() {
        if (this.items[this.first]) {
            const clearQueueChoice = await queueElement.takeInput("Enter Y for Clearing Queue:");
            if (clearQueueChoice.toLowerCase() == 'y') {
                this.first = this.items.length;
                console.log("Queue is Cleared Successfully!");
            } else {
                console.log("Cancelled the Clear Operation!");
            }
        } else {
            console.log("Queue is already Empty!");
        }
    }
    async search() {
        if (this.items[this.first]) {
            const searchElement = await queueElement.takeInput("Enter Element to be Searched: ");
            if (searchElement == "") {
                console.log("Element Search Unsuccessful: No Input Error");
            } else {
                for (let i = this.first; i < this.items.length; i++) {
                    if (this.items[i] == searchElement) {
                        console.log(searchElement + " is in the Queue!");
                        return;
                    } else if (i >= this.items.length - 1) {
                        console.log(searchElement + " is not in the Queue!");
                        return;
                    }
                }
            }
        } else {
            console.log("Queue is Already Empty!");
        }
    }
}

module.exports = QueueClass;