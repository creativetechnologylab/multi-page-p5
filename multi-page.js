/*
  This sketch demonstrates a simple way to manage multiple pages or scenes within a single p5.js canvas. 
  While this method is great for small projects, larger projects may benefit from using multiple p5 instances 
  (check out the advanced multiple canvas example). Another option is to have separate HTML files for each canvas, 
  but this requires web hosting and isn't feasible in the p5 web editor.

  Key Concept: Page Management

  1. Declare a variable to keep track of the current page:
    let page;

  2. To navigate between pages, we use the `page` variable. 
    Setting "page = 1" means "navigate to the first page."
    Setting "page = 2" means "navigate to the second page."

  3. The main logic for navigation happens in a 'switch statement':

    switch (page) {
      case 1:
        // Code for first page
        break;
      case 2:
        // Code for second page
        break;
    }

  Understanding the Switch Statement:

  - The "case" keyword specifies the code that should run for a particular page number.
  - "break" ends the code block for each page, allowing us to transition to the next case or exit the switch statement.
  - "default" is an optional case, executed if no other cases match. It's good for handling invalid or undefined page numbers.

  Navigation Buttons:

  We create simple functions that update the `page` variable:

  function goToPage1() {
    page = 1;
  }

  These functions are then linked to button presses:

  button1.mousePressed(goToPage1);

  Try adding your own buttons and pages as needed. For example, can you add a "Home" button that takes you to a default page?
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
