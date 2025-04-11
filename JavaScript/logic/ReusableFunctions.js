const readline = require('readline');

class ReusableFunctions {
    async takeInput(question) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        const answer = await new Promise((resolve) => {
            rl.question(question, (answer) => {
                resolve(answer);
                rl.close();
            })
        })
        return answer;
    }
    async logChoiceList() {
        console.log('Enter 1 for Stack\t' + 'Enter 2 for Queue');
        console.log('Enter cls for clearing console.\n' + 'Enter exit for Exiting from program.\n');
    }
}

module.exports = ReusableFunctions;