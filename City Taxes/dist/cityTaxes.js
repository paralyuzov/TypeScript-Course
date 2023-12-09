"use strict";
function cityTaxes(name, population, treasury) {
    const cityObject = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function (procentage) {
            this.population += this.population * (procentage / 100);
        },
        applyRecession: function (procentage) {
            this.treasury -= this.treasury * (procentage / 100);
        }
    };
    return cityObject;
}
// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
//# sourceMappingURL=cityTaxes.js.map