// Your code here.
let isDragging = false; // Flag to track dragging state

document.addEventListener("DOMContentLoaded", () => {
    const cubes = document.querySelectorAll(".cube");

    // Set up event listeners for each cube
    cubes.forEach(cube => {
        cube.addEventListener("mousedown", () => {
            isDragging = true;
            cube.classList.add("selected"); // Select the starting cube
        });

        cube.addEventListener("mouseover", () => {
            // If dragging, mark hovered cubes as selected
            if (isDragging) {
                cube.classList.add("selected");
            }
        });
    });

    // Stop dragging on mouseup anywhere in the document
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
