document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Ensure first name is not empty
        const firstNameField = document.querySelector("#id_first_name");
        if (!firstNameField.value.trim()) {
            alert("First name is required.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});

function confirmDelete(memberId) {
    if(confirm("Are you sure you want to delete this team member?")) {
        fetch(`/delete/${memberId}/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'), // Function to get CSRF token
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/'; // Redirect after deletion
            } else {
                alert('Error occurred during deletion.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
