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
}

module.exports = ReusableFunctions;