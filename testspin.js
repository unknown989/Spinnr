const { Spinr, patterns } = require("./spinr");

const { Progress } = require("./plugins/progress")

const spinner = new Spinr();
spinner.set_text("Loading...");
spinner.set_interval(75);
spinner.set_pattern(patterns.Ladder);
spinner.start()

setTimeout(() => {
    spinner.set_text("Initializing Cold Blood...");
}, 1000)
setTimeout(() => {
    spinner.set_text("Calling Soldiers...");
}, 1000)
setTimeout(() => {
    spinner.set_text("Preparing Trucks...");
}, 1000)
setTimeout(() => {
    spinner.set_text("Dropping Soldiers...");
}, 1000)
setTimeout(() => { spinner.set_text("Cold Blood Operation Started"); spinner.stop() }, 5000)


// const progress = new Progress();
// (async function(){await progress.start()}());
// for (var i = 0; i < 100; i++) {
//     // setTimeout(() => { }, 10)
// }
// progress.stop();