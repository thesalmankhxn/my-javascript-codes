/**
 * Counts up to a number and then back down to zero
 * @param {number} n - The number to count up to
 * @returns {void}
 * @throws {Error} If n is not a positive number
 */
const count = (n) => {
  // Input validation
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Please provide a positive integer");
  }

  console.log("Starting countdown...");
  // Count up
  for (let i = 0; i <= n; i++) {
    console.log(`↑ ${i}`);
  }

  console.log(`Reached ${n}! Now counting down...`);
  // Count down
  for (let j = n - 1; j >= 0; j--) {
    console.log(`↓ ${j}`);
  }

  console.log("Countdown complete!");
};

count(10);
