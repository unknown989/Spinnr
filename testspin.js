const { Spinr, patterns } = require("./spinr");

const { Progress } = require("./plugins/progress")

const spinner = new Spinr();
spinner.set_text("Loading....");
spinner.set_interval(75);
spinner.set_pattern(patterns.Ladder);
spinner.start()

setTimeout(() => { spinner.stop() }, 10000)


// const progress = new Progress();
// (async function(){await progress.start()}());
// for (var i = 0; i < 100; i++) {
//     // setTimeout(() => { }, 10)
// }
// progress.stop();