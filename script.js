// script.js

document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const issueList = button.nextElementSibling;
        issueList.classList.toggle('hidden');

        // Hide other issue lists
        document.querySelectorAll('.issue-list').forEach(list => {
            if (list !== issueList) {
                list.classList.add('hidden');
            }
        });

        // Show the issue list container
        const issueListContainer = document.getElementById('issueListContainer');
        issueListContainer.classList.remove('hidden');
    });
});

// Add event listeners to each issue list item
document.querySelectorAll('.issue-list li').forEach(issue => {
    issue.addEventListener('click', () => {
        const category = issue.parentElement.previousElementSibling.textContent; // Get the category name
        const selectedIssue = issue.textContent; // Get the selected issue name

        //This will help us to redirect our code to the complaint form of the related issue
        window.location.href = `complaintForm.html?category=${encodeURIComponent(category)}&issue=${encodeURIComponent(selectedIssue)}`;
    });
});