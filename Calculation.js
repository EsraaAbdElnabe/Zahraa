// Import the salesBonusCalculator module
const calculateBonus = require('./HelperFunction.js');

// Example sales amounts
const salesAmount1 = 75000;
const salesAmount2 = 120000;

// Calculate bonuses
const bonus1 = calculateBonus(salesAmount1);
const bonus2 = calculateBonus(salesAmount2);

// Display the results
console.log(`Sales Amount: $${salesAmount1}`);
console.log(`Bonus: $${bonus1.toFixed(2)}`);
console.log('------------------------');
console.log(`Sales Amount: $${salesAmount2}`);
console.log(`Bonus: $${bonus2.toFixed(2)}`);