"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const findColor = this.clothes.find(x => x.color == color);
        if (findColor) {
            const index = this.clothes.indexOf(findColor);
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        const smallestSize = [...this.clothes].sort((a, b) => a.size - b.size)[0];
        return smallestSize;
    }
    getCloth(color) {
        const findColor = this.clothes.find(x => x.color === color);
        return findColor;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const output = [];
        output.push(`${this.type} magazine contains:`);
        const sortedBySize = [...this.clothes].sort((a, b) => a.size - b.size);
        sortedBySize.forEach(x => output.push(`Product: ${x.type} with size ${x.size}, color ${x.color}`));
        return `${output.join("\n")}`;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=magazine.js.map