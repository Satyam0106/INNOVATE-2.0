document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Show an alert
    alert('Your account has been created.');
    
    // Optional: Redirect to another page (e.g., index.html)
    window.location.href = 'index.html';
});