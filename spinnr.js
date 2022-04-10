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

class Spinnr extends Plugin {
    constructor() {
        super();
        this.pattern = ["░", "▒", "▓", "▒"]
        this.waiting_timeout = 1000;
        this.delete = false;
        this.done_flag = "✔";
        this.loading_edit = kleur.blue;
        this.text_edit = kleur.bold().grey;
    }

    start(text = "") {
        if (text) {
            this.text = text
        }
        var i = 0;
        this.intervalobj = setInterval(() => {
            if (this.spin) {
                this.start_custom(`${this.loading_edit(this.pattern[i++])} ${this.text_edit(this.text)}`, false)
                i = i % this.pattern.length;
            }
        }, this.interval)
    }
    set_loading_edit(f) {
        if (typeof f !== "function") {
            throw new Error(kleur.red("The edit you are trying to set are not a function " + f))
        }
        this.loading_edit = f;
    }
    set_text_edit(f) {
        if (typeof f !== "function") {
            throw new Error(kleur.red("The edit you are trying to set are not a function " + f))
        }
        this.text_edit = f;
    }
    set_done_flag(flag) {
        this.done_flag = flag;
    }
    set_delete(del) {
        this.delete = del;
    }
    set_text(text) {
        this.text = text;
    }
    set_pattern(pattern) {
        if (!Array.isArray(pattern)) {
            throw new Error(kleur.red("The pattern you are trying to set are not an array " + Object.toString(patterns)))
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
        stdout.write(`\r${kleur.green(this.done_flag)} ${this.text}`);
        setTimeout(() => {
            this.stop_custom();
            if (this.delete) {
                stdout.clearLine();
            }
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


module.exports = { Spinnr, patterns, Plugin }