class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min =min;
        this.max = max;
    }

    guess() {
        this.middle = Math.round((this.max - this.min) / 2) + this.min;
        return this.middle;
    }

    lower() {   
        return this.max = this.middle;
    }

    greater() {
        return this.min = this.middle;
    }
}

module.exports = GuessingGame;
