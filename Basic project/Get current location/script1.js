const button = document.getElementById("get-location-button");

function getLocation(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
  console.log(position);
}

function handleLocationError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    default:
      console.log("An unknown error occurred.");
      break;
  }
}

button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(getLocation, handleLocationError);
});
