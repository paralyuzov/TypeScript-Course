import { Drink } from "./drink";
export class VendingMachine {

    private buttonCapacity: number;
    private drinks: Drink[];
    get getCount() {
        return this.drinks.length;
    }

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    public addDrink(drink: Drink): void {

        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    public removeDrink(name: string): boolean {
        const findDrink = this.drinks.find(x => x.name == name);

        if (findDrink) {
            const index = this.drinks.indexOf(findDrink);
            this.drinks.splice(index, 1);
            return true
        }
        return false;
    }

    public getLongest(): string {
        const data = [...this.drinks];
        const findBiggestVolume = data.sort((a, b) => b.volume - a.volume)[0];
        return `Name: ${findBiggestVolume.name}, Price: $${findBiggestVolume.price.toFixed(1)}, Volume: ${findBiggestVolume.volume} ml`;
    }

    public getCheapest(): string {
        const data = [...this.drinks];
        const findLowestValue = data.sort((a, b) => a.price - b.price)[0];
        return `Name: ${findLowestValue.name}, Price: $${findLowestValue.price.toFixed(1)}, Volume: ${findLowestValue.volume} ml`;
    }

    public buyDrink(name: string): string | undefined {
        const data = [...this.drinks];
        const findName = data.find(x => x.name == name);
        if (findName) {
            return `Name: ${findName.name}, Price: $${findName.price.toFixed(1)}, Volume: ${findName.volume} ml`;
        }
    }

    public report(): string {
        const output: string[] = [];
        output.push(`Drinks available:`);
        this.drinks.forEach(x => output.push(`Name: ${x.name}, Price: $${x.price.toFixed(1)}, Volume: ${x.volume} ml`));
        return `${output.join("\n")}`;
    }

}


