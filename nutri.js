// Wait for the HTML document to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get the menu toggle button and navigation list elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', function () {
        // Toggle the 'show' class on the navigation list to control its visibility
        navList.classList.toggle('show');
    });
});

// Function to toggle the visibility of the promotion box
function togglePromotion() {
    // Get the promotion box element by its ID
    const promotionBox = document.getElementById('promotionBox');
    
    // Toggle the display property of the promotion box between 'block' and 'none'
    promotionBox.style.display = (promotionBox.style.display === 'none' || promotionBox.style.display === '') ? 'block' : 'none';
}
