import { Cloth } from "./cloth";

export class Magazine {
    private type: string;
    private capacity: number;
    private clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type
        this.capacity = capacity
        this.clothes = [];
    }

    public addCloth(cloth: Cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }

    public removeCloth(color: string): boolean {
        const findColor = this.clothes.find(x => x.color == color);
        if (findColor) {
            const index = this.clothes.indexOf(findColor);
            this.clothes.splice(index, 1);
            return true;
        }
        return false;

    }

    public getSmallestCloth(): Cloth {
        const smallestSize = [...this.clothes].sort((a, b) => a.size - b.size)[0];
        return smallestSize;
    }

    public getCloth(color: string): Cloth | undefined {
        const findColor = this.clothes.find(x => x.color === color);
        return findColor;
    }

    public getClothCount(): number {
        return this.clothes.length
    }

    public report() {
        const output: string[] = [];
        output.push(`${this.type} magazine contains:`);

        const sortedBySize = [...this.clothes].sort((a, b) => a.size - b.size);
        sortedBySize.forEach(x => output.push(`Product: ${x.type} with size ${x.size}, color ${x.color}`));

        return `${output.join("\n")}`;

    }
}