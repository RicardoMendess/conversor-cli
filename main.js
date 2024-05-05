const { program } = require('commander');

program.name('conversor-american-dollar')
.description('CLI for read the number in real and convert the value in dóllar.')
.version('0.1.0')
.command('read-american-dolar')
.argument('<number>', 'value for convert')
.option('--reader', 'reader the value')
.action((n, option) => {
    if(option) {
        convertValueForDollar(n).then(
            (resolve, reject) => {
                if(resolve) {
                    console.log("The new value is: ", resolve);
                }

                if(reject) {
                    console.log("Error, try again.");
                }
            }
        )
    }
});

async function convertValueForDollar(value) {
    try {
        if(value) {
            const dollar = 0.20;

            const newValue = await (value * dollar);

            return newValue;
        }
    } catch (error) {
        
    }
}

program.parse();