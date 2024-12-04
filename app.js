// app.js - Fetch volunteer opportunities from the VolunteerConnector API

// URL of the API endpoint
const apiUrl = 'https://www.volunteerconnector.org/api/search/'; // Adjust the URL as necessary

// Function to fetch data from the API
function fetchVolunteerOpportunities() {
    fetch(apiUrl)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log(data); // Log the data to see the structure in the console

            // Get the container where we'll display the opportunities
            const container = document.getElementById('opportunities-container');
            container.innerHTML = ''; // Clear any existing content

            // Loop through each opportunity and create an element to display it
            data.results.forEach(opportunity => {
                const opportunityElement = document.createElement('div');
                opportunityElement.classList.add('opportunity');
                
                opportunityElement.innerHTML = `
                    <h2>${opportunity.title}</h2>
                    <p><strong>Organization:</strong> <a href="${opportunity.organization.url}" target="_blank">${opportunity.organization.name}</a></p>
                    <p><strong>Description:</strong> ${opportunity.description}</p>
                    <p><strong>Activity:</strong> ${opportunity.activities.map(activity => activity.name).join(', ')}</p>
                    <p><strong>Dates:</strong> ${opportunity.dates}</p>
                    <p><strong>Location:</strong> ${opportunity.audience.scope === 'regional' ? opportunity.audience.regions.join(', ') : 'Local'}</p>
                    <p><strong>Remote:</strong> ${opportunity.remote_or_online ? 'Yes' : 'No'}</p>
                    <p><a href="${opportunity.url}" target="_blank" class="more-info">More Info</a></p>
                `;

                // Append the opportunity element to the container
                container.appendChild(opportunityElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data from the API:', error);
        });
}

// Fetch the data when the page is loaded
document.addEventListener('DOMContentLoaded', fetchVolunteerOpportunities);
