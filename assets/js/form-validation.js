document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        successMessage.classList.remove('hidden'); // Show success message
        form.reset(); // Optionally reset the form fields
    });
});
