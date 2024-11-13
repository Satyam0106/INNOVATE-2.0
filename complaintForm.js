document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');

    // Add event listener for form submission
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Show an alert message
        alert('Your feedback has been recorded.');

        // Optionally, you can clear the form fields after submission
        feedbackForm.reset();

        // If you want to send data to a server, add your fetch/axios code here
    });
});
