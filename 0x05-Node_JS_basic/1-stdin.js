// 1-stdin.js

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for input from stdin
process.stdin.on('data', (input) => {
  // Trim any trailing newline characters from input
  const name = input.toString().trim();
  
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Close the program after displaying the name
  process.stdin.pause(); // Pause the input stream
});

// Handle the end of the process
process.on('SIGINT', () => {
  console.log("\nThis important software is now closing");
  process.exit(); // Exit the process
});
