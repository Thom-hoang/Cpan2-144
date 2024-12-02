function calculateArea(width, height) {
    if (width <= 0 || height <= 0 || isNaN(width) || isNaN(height)) {
        console.log("Invalid input! Please enter positive numbers for width and height.");
        return;
    }
    let area = width * height;
    console.log("The area of the rectangle is: " + area);
}

// Example usage
calculateArea(5, 3); // Output: 15
calculateArea(10, 7); // Output: 70
