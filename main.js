// Get form references
const nameInput = document.getElementById('name');
const listenersInput = document.getElementById('listeners');
const locationsInput = document.getElementById('locations');

// Handle form submit
document.getElementById('tourForm').addEventListener('submit', function(e) {
  // Prevent actual submit
  e.preventDefault();
  
  // Get values
  const name = nameInput.value;
  const listeners = listenersInput.value;
  const locations = locationsInput.value;

  // Log or access values
  console.log(name, listeners, locations);

  // Redirect to results page with query parameters
  window.location.href = `results.html?name=${encodeURIComponent(name)}&listeners=${encodeURIComponent(listeners)}&locations=${encodeURIComponent(locations)}`;
});
