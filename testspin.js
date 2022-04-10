const { Spinnr, patterns } = require("./spinnr");

const kleur = require("kleur")

const spinner = new Spinnr();

// Text to show
spinner.set_text("Loading...");
// How long each pattern character takes
spinner.set_interval(75);
// Setting a pattern for the spinner
spinner.set_pattern(patterns.Ladder);
// Customizing the loading pattern (must be a function)
spinner.set_loading_edit(kleur.gray);
// Customizing the text to show (must be a function)
spinner.set_text_edit(kleur.bold().red);
// not deleting the line after finishing
spinner.set_delete(false);
// How long should the spinner wait before stopping
spinner.set_waiting_timeout(1000);
// what to show instead of the spinner pattern if it was stopped
spinner.set_done_flag("✔");

// Starting
spinner.start()

setTimeout(() => {
    spinner.set_text("Starting Cold Blood...");
}, 1000)
setTimeout(() => {
    spinner.set_text("Calling Soldiers...");
}, 2000)
setTimeout(() => {
    spinner.set_text("Preparing Trucks...");
}, 3000)
setTimeout(() => {
    spinner.set_text("Dropping Soldiers...");
}, 4000)
setTimeout(() => { spinner.set_text("Cold Blood Operation Started"); spinner.stop() }, 5000)