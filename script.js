// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'accordion-header'
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Loop through each accordion header
    accordionHeaders.forEach(header => {
        // Add a click event listener to each header
        header.addEventListener('click', () => {
            // Get the content and the icon for the current header
            const content = header.nextElementSibling;
            const icon = header.querySelector('svg');

            // Toggle the 'active' class on the header and content to show/hide the content
            header.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
});
