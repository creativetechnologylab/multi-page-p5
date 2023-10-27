# Managing Multiple Pages in a Single p5.js Canvas

## Introduction

In the world of web development and creative coding, managing multiple scenes or pages on a single canvas can be quite a challenge. But fear not, because in this guide, we're going to break down a straightforward method to accomplish just that using p5.js! This approach is particularly useful for small projects or quick prototypes. For larger endeavors, you might consider employing multiple p5.js instances or using separate HTML files for each canvas.

## Table of Contents
- [Key Concepts](#key-concepts)
  - [Page Management](#page-management)
  - [Navigation](#navigation)
  - [Switch Statement](#switch-statement)
  - [Navigation Buttons](#navigation-buttons)
- [Code Example](#code-example)
- [Further Exploration](#further-exploration)

## Key Concepts

### Page Management
In essence, you will need a variable to keep track of which page or scene is currently active. In our example, this variable is aptly named `page`.

```javascript
let page; // Declare a variable to manage the current page.
```

### Navigation
Navigating between the pages is as simple as updating the `page` variable. For example, setting `page = 1` would navigate to the first page, and `page = 2` would take you to the second.

```javascript
// Function to navigate to Page 1
function goToPage1() {
  page = 1; // Navigate to the first page.
}
```

### Switch Statement
The core logic of our page navigation lies in a `switch` statement. This block of code contains the display and interaction logic for each page, handled by the `case` keyword. Each case block ends with a `break` statement to terminate the logic for that page.

```javascript
// Use a switch statement to handle page display logic
switch (page) {
  case 1:
    // Code block for the first page
    break;
  case 2:
    // Code block for the second page
    break;
}
```

#### Understanding the `switch` statement
- The `case` keyword specifies which block of code to execute for each page.
- The `break` keyword terminates the block of code for a particular page.
- The `default` case handles invalid or undefined page numbers, offering a kind of 'fallback' functionality.

### Navigation Buttons
To make the navigation even more interactive, you can use buttons that, when pressed, update the `page` variable. 

```javascript
button1 = createButton("Go to Page 1"); 
button1.mousePressed(goToPage1); // Link button press to function that sets `page` to 1
```

## Code Example
You can find the full code [here](#multi-page.js). It incorporates all the key concepts discussed above into a working p5.js sketch.

## Further Exploration
Why not extend this example by adding more features? For instance, you could create a "Home" button that takes the user back to a default page. The possibilities are endless!

So go ahead, grab your favorite text editor, and start coding. Happy creating!
