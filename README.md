# **Spinnr** - terminal spinners made easy

<video width="320" controls="false" height="240" autoplay repeat>
<source src="./public/vid.mp4" type="video/mp4">
</video>

## Usage

```js
const { Spinnr, patterns } = require("spinnr");

const spinner = new Spinnr();

// Setting text
spinner.set_text("Loading...");

// Starting the spinner
spinner.start();

// Stopping the spinner after 2 seconds
setTimeout(() => {
	spinner.stop();
}, 2000);
```

## Example

```js
const { Spinr, patterns } = require("spinr");

const kleur = require("kleur");

const spinner = new Spinr();

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
spinner.start();

setTimeout(() => {
	spinner.set_text("Initializing Cold Blood...");
}, 1000);
setTimeout(() => {
	spinner.set_text("Calling Soldiers...");
}, 1000);
setTimeout(() => {
	spinner.set_text("Preparing Trucks...");
}, 1000);
setTimeout(() => {
	spinner.set_text("Dropping Soldiers...");
}, 1000);
setTimeout(() => {
	spinner.set_text("Cold Blood Operation Started");
	spinner.stop();
}, 5000);
```
