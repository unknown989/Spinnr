# **Spinnr** - terminal spinners made easy

![](https://github.com/unknown989/Spinnr/raw/main/public/presentation.gif)

## Content Table

> - [Install](#install)
> - [Usage](#usafe)
> - [Features](#feautures)
> - [Example](#example)
> - [Documentation](#documentation)
> - - [Setting Text](#setting-text)
> - - [Setting Interval](#setting-interval)
> - - [Setting Pattern](#setting-pattern)
> - - [Setting Delete](#setting-delete)
> - - [Setting Waiting Timeout](#setting-waiting-timeout)
> - - [Setting the finishing text](#setting-the-finishing-text)
> - - [Customizing Loading Spinner](#customizing-loading-spinner)
> - - [Customizing Text](#customizing-the-text)
> - [Patterns](#patterns)
> - [Plugins](#plugins)
> - [Authors](#authors)

## Install

`npm install spinnr` or `yarn add spinnr`

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

## Feautures

- Fully customizable ( literally )
- Plugin expandable
- Very light
- Can be dependency-free if colours removed
- Can work well with other libraries like `kleur`

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

# Documentation

- ### **Setting Text**

  Setting the text to show

  ```js
  const spinner = new Spinnr();
  spinner.set_text(text);
  ```

  > **text** (String) : the text you wanna show

- ### **Setting Interval**
  How long each pattern character takes
  ```js
  const spinner = new Spinnr();
  spinner.set_interval(interval);
  ```
  > **interval** (Number) : the time each pattern character takes in **ms**
- ### **Setting Pattern**

  the spinner pattern

  ```js
  const { Spinnr, patterns } = require("spinnr");

  const spinner = new Spinnr();
  const pattern = patterns.Bar;

  spinner.set_patterns(pattern);
  ```

  > **pattern** (Array) : a pattern for the spinner

  Using [`patterns`](#patterns) is recommended

- ### **Setting Delete**

  Choosing if the spinner is going to be deleted after it is done

  ```js
  const spinner = new Spinnr();
  spinner.set_delete(true);
  ```

  > **del** (Bool) : the option to delete

  if specificied the spinner will be deleted for the line and will live a blank line,
  if not nothing will happen

- ### **Setting Waiting Timeout**

  Specifiying the time the spinner will take to break when it's done

  ```js
  const spinner = new Spinnr();
  spinner.set_waiting_timeout(1000); // 1s
  ```

  > **waiting_timeout** (Number) : the timeout duration in **ms**

  if can accept `0` which means the spinner won't wait

- ### **Setting the finishing text**

  Setting up the text that will be shown instead of the pattern when the loading is done

  **won't work if `waiting_timeout` is 0**

  ```js
  const spinner = new Spinnr();
  spinner.set_done_flag("✔");
  ```

  > **flag** (Text) : the flag to show

  the flag is also affected by [`set_loading_edit`](#customizing-loading-spinner)

- ### **Customizing Loading Spinner**

  Customizing the loading spinner

  ```js
  const kleur = require("kleur");
  const spinner = new Spinnr();

  spinner.set_loading_edit(kleur.bold().red);
  ```

  > **edit** (Function) : the function to customize loading spinner

  It calls the `edit` on the loading pattern so that it can be customized.

  in the example above the loading pattern is normally black and has normal styles but once we added the `set_loading_edit` function, it'll show up in a red colour with bold style

  using [`kleur`](https://github.com/lukeed/kleur) is recommended

- ### **Customizing the text**

  Customizing the shown text

  ```js
  const kleur = require("kleur");
  const spinner = new Spinnr();

  spinner.set_text_edit(kleur.underline().green);
  ```

  > **edit** (Function) : the function to customize the text

  It calls the `edit` on the text so that it can be customized.

  in the example above the text is normally black and has normal styles but once we added the `set_text_edit` function, it'll show up in a green colour with a line under

  using [`kleur`](https://github.com/lukeed/kleur) is recommended

## Patterns

```js
let patterns = {
	Ladder: ["˥", "˦", "˧", "˨", "˩", "˨", "˧", "˦"],
	Cake: ["֍", "֎"],
	"Broken Circle": ["֖", "֥", "֙", "֜"],
	Bars: ["ײ", "ױ", "װ", "ױ"],
};
```

## Plugins

see `plugins/progress.js` for reference.

**NOTE**: the plugin is not yet finished

its's a progress bar re-implemented using the base class of `Spinnr` which is `Plugin`. _you can check it in the source file_ **`spinnr.js`**

## Authors

[<img src="https://github.com/unknown989.png" height=32>](https://github.com/unknown989)
