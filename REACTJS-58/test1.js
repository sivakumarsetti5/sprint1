// Write a code snippet, to get the latitude and longitude using navigator BOM object ?

// Check if the Geolocation API is available in the browser
if (navigator.geolocation) {
    // Request the current position
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Success callback
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}`);
            console.log(`Longitude: ${longitude}`);
        },
        (error) => {
            // Error callback
            console.error(`Error: ${error.message}`);
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}
