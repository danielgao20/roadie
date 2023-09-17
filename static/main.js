// Get form references
const artistLinkInput = document.getElementById('artistLink');
const locationsInput = document.getElementById('locations');

// Handle form submit
document.getElementById('tourForm').addEventListener('submit', function(e) {
  // Prevent actual submit
  e.preventDefault();
  
  // Get values
  const artistLink = artistLinkInput.value;
  const locations = locationsInput.value;

  // Log or access values
  console.log(artistLink, locations);

  // Redirect to results page with query parameters
  window.location.href = `results?artistLink=${encodeURIComponent(artistLink)}&locations=${encodeURIComponent(locations)}`;
});
