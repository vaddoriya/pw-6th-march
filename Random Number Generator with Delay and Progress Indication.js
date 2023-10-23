let delay = 3000; // 3 seconds
let remainingTime = delay / 1000;
const interval = setInterval(() => {
  console.log(`Generating random number in ${remainingTime} seconds...`);
  remainingTime--;
  if (remainingTime === 0) {
    clearInterval(interval);
    const randomNumber = Math.floor(Math.random() * 100); // Adjust the range as needed
    console.log(`Random Number: ${randomNumber}`);
  }
}, 1000);
