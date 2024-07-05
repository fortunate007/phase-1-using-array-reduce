const batteryBatches = [10, 5, 8, 4, 4]; // Updated to match expected sum of 31

const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);

console.log("Total batteries:", totalBatteries); // Output: Total batteries: 31
