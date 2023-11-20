// Define the bonus calculation logic
function calculateBonus(salesAmount) {
  const baseSalary = 5000;
  const bonusPercentage = getBonusPercentage(salesAmount);
  const bonus = (bonusPercentage / 100) * baseSalary;
  return baseSalary + bonus;
}

// Determine the bonus percentage based on sales amount
function getBonusPercentage(salesAmount) {
  if (salesAmount >= 100000) {
    return 10; // 10% bonus for sales over $100,000
  } else if (salesAmount >= 50000) {
    return 5; // 5% bonus for sales over $50,000
  } else {
    return 2; // 2% bonus for all other sales
  }
}

// Export the calculateBonus function for external use
module.exports = calculateBonus;
