document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get the entered username and password
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();

    // Simple hard-coded login credentials for demonstration
    const validUsername = "admin";
    const validPassword = "admin123";

    // Validate the credentials
    if (username === validUsername && password === validPassword) {
        // Store login status in localStorage
        localStorage.setItem('isAdminLoggedIn', 'true');

        // Show a success message
        alert('Login successful! Redirecting to Admin Dashboard...');

        // Redirect to the admin dashboard
        window.location.href = 'adminDashboard.html';
    } else {
        // Show an error message if the credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
});
