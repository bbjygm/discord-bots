// Bot names based on containing folders
let bots = [
    'Updater Bot',
    'Fantasy Bot',
];

// Run each bots' index.js file
for (const bot of bots) {
    console.log(`***** STARTING: ${bot} *****`);
    try {
        require(`./${bot}/index.js`);
        console.log(`${bot} successfully started.`);
    } catch (error) {
        console.error(error);
        console.error(`${bot} failed to start.`);
    }
}
