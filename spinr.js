const { stdout } = require("process");
const kleur = require("kleur");

class Plugin {
    constructor() {
        this.intervalobj = "";
        this.interval = 150;
        this.text = "";
        this.spin = true;
    }
    set_text(text) {
        this.text = "";
    }
    set_interval(interval) {
        if (typeof interval !== "number") {
            throw new Error("the interval you're trying to set is not of type number " + interval)
        }
        this.interval = interval;
    }
    start_custom(text, use_interval = true) {
        this.spin = true;
        if (use_interval) {
            this.intervalobj = setInterval(() => {
                if (this.spin) {
                    stdout.write(`\r${text}`)
                }
            })
        } else {
            stdout.write(`\r${text}`)
        }
    }
    stop_custom() {
        this.spin = false;
        clearInterval(this.intervalobj)
        this.intervalobj = "";
    }
}

class Spinr extends Plugin {
    constructor() {
        super();
        this.pattern = ["░", "▒", "▓", "▒"]
        this.waiting_timeout = 1000;
    }

    start(text = "") {
        if (text) {
            this.text = text
        }
        var i = 0;
        this.intervalobj = setInterval(() => {
            if (this.spin) {
                this.start_custom(`${kleur.blue(this.pattern[i++])} ${kleur.bold().grey(this.text)}`, false)
                i = i % this.pattern.length;
            }
        }, this.interval)
    }
    set_text(text) {
        this.text = text;
    }
    set_pattern(pattern) {
        if (!Array.isArray(pattern)) {
            throw new Error("The pattern you are trying to set are not an array " + Object.toString(patterns))
        }
        this.pattern = pattern;
    }
    set_interval(interval) {
        this.interval = interval;
    }
    set_waiting_timeout(timeout) {
        this.waiting_timeout = timeout;
    }
    stop() {
        this.spin = false;
        stdout.write(`\r${kleur.green("✔")} ${this.text}`);
        setTimeout(() => {
            this.stop_custom();
            stdout.clearLine();
        }, 1000)
    }
}

let patterns = {
    "Ladder":
        ["˥", "˦", "˧", "˨", "˩", "˨", "˧", "˦"],
    "Cake": ["֍", "֎"],
    "Broken Circle": ["֖", "֥", "֙", "֜"],
    "Bars": ["ײ", "ױ", "װ", "ױ"]
};


module.exports = { Spinr, patterns, Plugin }