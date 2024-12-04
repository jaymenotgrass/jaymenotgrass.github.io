// JavaScript for handling "Volunteer Now" button and form submission

// Function to show the volunteer form
function showVolunteerForm() {
    const formContainer = document.getElementById('volunteer-form-container');
    formContainer.style.display = 'block';  // Display the form
}

// Function to handle form submission
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled out
    if (name && email && message) {
        // Get the success container
        const successContainer = document.getElementById('success-message');
        
        // Clear any existing success message before creating a new one
        successContainer.innerHTML = ''; // Clear the previous success message

        // Create and display the success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerText = `Thank you, ${name}! Your message has been received. We will contact you soon!`;

        // Append the new success message to the container
        successContainer.appendChild(successMessage);

        // Display the success container
        successContainer.style.display = 'block';

        // Optionally, hide the form after submission
        document.getElementById('volunteer-form-container').style.display = 'none';

        const volunteerButton = document.getElementById('volunteer-now-button');
        volunteerButton.style.display = 'block'; // Make the button visible again

        // Clear form fields
        document.getElementById('volunteer-form').reset();

        // Hide the success message after 8 seconds
        setTimeout(() => {
            successContainer.style.display = 'none';
        }, 8000);

        // Add a click event to the success message to hide it when clicked
        successMessage.addEventListener('click', () => {
            successContainer.style.display = 'none';
        });
    } else {
        alert('Please fill out all fields.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the "Volunteer Now" button and add an event listener
    const volunteerButton = document.getElementById('volunteer-now-button');
    volunteerButton.addEventListener('click', showVolunteerForm);

    // Get the form and add a submission event listener
    const volunteerForm = document.getElementById('volunteer-form');
    volunteerForm.addEventListener('submit', handleFormSubmission);
});
