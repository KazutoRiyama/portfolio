// secretimg.js

document.addEventListener('DOMContentLoaded', () => {
    // Find ALL buttons
    document.querySelectorAll('.secret-button').forEach(button => {
        
        button.addEventListener('click', () => {
            // Find the closest wrapper → then find the image inside it
            const wrapper = button.closest('.screenshot-wrapper');
            const img = wrapper?.querySelector('.secret-img');
            
            if (img) {
                // Toggle display
                img.style.display = img.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});