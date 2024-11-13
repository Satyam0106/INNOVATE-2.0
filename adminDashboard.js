// Check if admin is logged in
if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
    alert('You are not authorized to access this page. Please log in.');
    window.location.href = 'adminLogin.html';
}

// Logout function
document.getElementById('logout').addEventListener('click', function() {
    // Remove login status from localStorage
    localStorage.removeItem('isAdminLoggedIn');
    
    // Redirect to login page
    window.location.href = 'adminLogin.html';
});
