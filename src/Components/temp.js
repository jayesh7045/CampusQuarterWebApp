import axios from "axios";
// Replace 'YOUR_API_KEY' with your actual Google API key
const apiKey = 'YOUR_API_KEY';
const origin = 'New York, NY';
const destination = 'Los Angeles, CA';

// Construct the API request URL
const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

// Make the API request
axios.get(apiUrl)
  .then(response => {
    // Parse the response and extract the distance
    const distance = response.data.rows[0].elements[0].distance.text;
    console.log(`Distance between ${origin} and ${destination}: ${distance}`);
  })
  .catch(error => {
    console.error('Error fetching distance:', error);
  });
