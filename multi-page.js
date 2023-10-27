/*
  Overview:
  This sketch demonstrates a simple way to manage multiple pages or scenes within a single p5.js canvas. 
  While this method is great for small projects, larger projects may benefit from using multiple p5 instances 
  or separate HTML files for each canvas, though the latter requires web hosting and isn't feasible in the p5 web editor.

  Key Concepts:

  1. Page Management: Declare a variable to keep track of the current page.
  2. Navigation: Use the `page` variable to navigate between pages.
  3. Switch Statement: Handles the display logic for each page.
  4. Navigation Buttons: Update the `page` variable based on user interaction.

  You'll find more detailed explanations of these concepts within the code comments below.
*/

let button1, button2;
let page; // Declare a variable to manage the current page.

// Function to navigate to Page 1
function goToPage1() {
  page = 1; // Navigate to the first page.
}

// Function to navigate to Page 2
function goToPage2() {
  page = 2; // Navigate to the second page.
}

function setup() {
  createCanvas(400, 400);

  // Create buttons for navigation
  button1 = createButton("Go to Page 1"); // Button to navigate to Page 1
  button1.position(0, 0);
  button1.mousePressed(goToPage1); // Link button press to function that sets `page` to 1

  button2 = createButton("Go to Page 2"); // Button to navigate to Page 2
  button2.position(100, 0);
  button2.mousePressed(goToPage2); // Link button press to function that sets `page` to 2

  // Initialize the canvas based on the current page
  switch (page) { 
    default: // Default case for invalid or undefined page numbers
      background(0, 255, 0);
      break;
    case 1:
      break;
    case 2:
      break;
  }
}

function draw() {
  // Use a switch statement to handle page display logic
  switch (page) {
    case 1: // Code block for the first page
      background(0, 0, 255);
      fill(255, 0, 0);
      rect(250, 250, 100, 100);
      break;
    case 2: // Code block for the second page
      background(255, 0, 0);
      fill(0, 255, 0);
      rect(50, 50, 100, 100);
      break;
  }
}

// Placeholder for mouse interactions on different pages
function mousePressed() {
  switch (page) {
    case 1:
      break;
    case 2:
      break;
  }
}

// Placeholder for drag interactions on different pages
function mouseDragged() {
  switch (page) {
    case 1:
      break;
    case 2:
      break;
  }
}
