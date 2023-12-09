"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drink_1 = require("./drink");
const vendingMachine_1 = require("./vendingMachine");
function main() {
    const vendingMachine = new vendingMachine_1.VendingMachine(6);
    const tea = new drink_1.Drink("Tea", 1.5, 300);
    const coffee = new drink_1.Drink("Coffee", 2.0, 120);
    const hotChocolate = new drink_1.Drink("Hot Chocolate", 2.5, 200);
    const latte = new drink_1.Drink("Latte", 3.5, 220);
    const cappuccino = new drink_1.Drink("Cappuccino", 2.8, 180);
    const mocha = new drink_1.Drink("Mocha", 2.1, 150);
    const herbalTea = new drink_1.Drink("Herbal Tea", 1.75, 300);
    console.log(vendingMachine.getCount);
    vendingMachine.addDrink(tea);
    vendingMachine.addDrink(coffee);
    vendingMachine.addDrink(hotChocolate);
    vendingMachine.addDrink(latte);
    vendingMachine.addDrink(cappuccino);
    vendingMachine.addDrink(mocha);
    vendingMachine.addDrink(herbalTea);
    console.log(vendingMachine.getCount);
    console.log(vendingMachine.removeDrink("Herbal Tea"));
    console.log(vendingMachine.removeDrink("Tea"));
    console.log(vendingMachine.getLongest());
    console.log(vendingMachine.getCheapest());
    console.log(vendingMachine.buyDrink("Cappuccino"));
    console.log(vendingMachine.report());
}
main();
//# sourceMappingURL=main.js.map