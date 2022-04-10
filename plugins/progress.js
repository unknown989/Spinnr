const { Plugin } = require("../spinnr");

class Progress extends Plugin {
    constructor() {
        super();
        this.total = 100;
        this.start_val = 0;
        this.fill = "█";
        this.tailfill = "■";
        this.current = this.start_val;
        this.width_threshold = 2; // every +2 the width will add +1
        this.onprogress = true;
    }
    set_total_value(total) {
        this.total = total;
    }
    set_start_value(start) {
        this.start_val = start
    }
    set_fill(fill) {
        this.fill = fill;
    }
    set_tail(tail) {
        this.tailfill(tail)
    }
    set_current_value(val) {
        this.current = val;
    }
    update(current_value) {
        this.current = current_value;
        if (this.current === this.total) {
            this.text = this.fill.repeat(Math.floor(this.total / this.width_threshold))
        } else {
            this.text = this.fill.repeat(Math.floor(current_value / this.width_threshold));
            this.text = this.text.substring(0, this.text.lastIndexOf(this.fill) - 1) + this.tailfill;
        }
        return this.text;
    }
    async start() {

        while (this.onprogress) {
            this.start_custom(this.update(this.current))
            if (this.current >= this.total) {
                this.onprogress = false;
            }
        }
    }
    stop() {
        this.onprogress = false;
    }
}

module.exports = { Progress }