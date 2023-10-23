const inventory = {
  item1: 50,  // Price in USD
  item2: 75,
  item3: 100,
};

const exchangeRate = 80;  // 1 USD to 80 INR

const convertedInventory = Object.keys(inventory).reduce((result, item) => {
  result[item] = inventory[item] * exchangeRate;
  return result;
}, {});

console.log(convertedInventory);
