"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    get getCount() {
        return this.drinks.length;
    }
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const findDrink = this.drinks.find(x => x.name == name);
        if (findDrink) {
            const index = this.drinks.indexOf(findDrink);
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const data = [...this.drinks];
        const findBiggestVolume = data.sort((a, b) => b.volume - a.volume)[0];
        return `Name: ${findBiggestVolume.name}, Price: $${findBiggestVolume.price.toFixed(1)}, Volume: ${findBiggestVolume.volume} ml`;
    }
    getCheapest() {
        const data = [...this.drinks];
        const findLowestValue = data.sort((a, b) => a.price - b.price)[0];
        return `Name: ${findLowestValue.name}, Price: $${findLowestValue.price.toFixed(1)}, Volume: ${findLowestValue.volume} ml`;
    }
    buyDrink(name) {
        const data = [...this.drinks];
        const findName = data.find(x => x.name == name);
        if (findName) {
            return `Name: ${findName.name}, Price: $${findName.price.toFixed(1)}, Volume: ${findName.volume} ml`;
        }
    }
    report() {
        const output = [];
        output.push(`Drinks available:`);
        this.drinks.forEach(x => output.push(`Name: ${x.name}, Price: $${x.price.toFixed(1)}, Volume: ${x.volume} ml`));
        return `${output.join("\n")}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=vendingMachine.js.map