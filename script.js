var images = document.querySelectorAll(".image img");
var container = document.querySelector(".container");
var display = document.getElementById("display");
var closeBtn = document.getElementById("close-btn");

images.forEach(function(image) {
    image.addEventListener("click", function(event) {
        var clickedImage = event.target.cloneNode(true); // Clone the clicked image
        console.log("success");
        
        display.innerHTML = ""; // Clear the previous image
        display.appendChild(clickedImage); // Append the cloned image to display div
        display.appendChild(closeBtn); // Append the close button to display div
        display.classList.remove("hidden"); // Show the display div
        // Optional: Hide the container if needed
        // container.style.display = "none";
        container.style.opacity = "0.5";
    });
});

closeBtn.addEventListener("click", function() {
    display.classList.add("hidden"); // Hide the display div
    container.style.display = "flex"; // Show the container div
    container.style.opacity = "1";
});