// Import necessary functions from distanceCalculator.js
// import {
//   calculateTotalDistance,
//   generatePermutations,
//   bruteForceTSP,
//   distanceBetweenCities,
//   LAXAirport,
//   BostonAirport,
//   distanceToDollar,
// } from "./distanceCalculation.js";

// Get form references
const artistLinkInput = document.getElementById('artistLink');
const locationsInput = document.getElementById('locations');

// Handle form submit
document.getElementById('tourForm').addEventListener('submit', async function(e) {
  // Prevent actual submit
  e.preventDefault();
  
  // Get values
  const artistLink = artistLinkInput.value;
  const locations = locationsInput.value;

  // total cost
  // const dollar = Math.max(Math.round((distanceBetweenCities(LAXAirport.locations[0].location.lat, BostonAirport.locations[0].location.lat, LAXAirport.locations[0].location.lon, BostonAirport.locations[0].location.lon))/15), 70)

  // turn locations into a list
  // const cities = locations.split(',');

  // loop through cities and create a matrix of distances between cities
  // const distances = [];
  // for (let i = 0; i < cities.length; i++) {
  //     distances[i] = [];
  //     for (let j = 0; j < cities.length; j++) {
  //         if (i === j) {
  //             distances[i][j] = 0;
  //             continue;
  //         }
  //         const city1 = await searchLocationsByTerm({
  //             term: cities[i],
  //             locale: 'en-US',
  //             locationTypes: [LOCATION_TYPES.AIRPORT],
  //             limit: 1,
  //         });
  //         const city2 = await searchLocationsByTerm({
  //             term: cities[j],
  //             locale: 'en-US',
  //             locationTypes: [LOCATION_TYPES.AIRPORT],
  //             limit: 1,
  //         });
  //         distances[i][j] = distanceToDollar(distanceBetweenCities(city1.locations[0].location.lat, city2.locations[0].location.lat, city1.locations[0].location.lon, city2.locations[0].location.lon));
  //         console.log("City: " + cities[i] + distances[i][j]);
  //     }
  // }

  // const result = bruteForceTSP(distances);

  // // sorted tour
  // const airportCodes = result.shortestPath.map(async index => {
  //   const city = cities[index];
  // });

// console.log(distances);

  // Log or access values
  // console.log(artistLink, locations);

  // Redirect to results page with query parameters
  window.location.href = `results?artistLink=${encodeURIComponent(artistLink)}&locations=${encodeURIComponent(locations)}`;
  // window.location.href = `results?artistLink=${encodeURIComponent(artistLink)}&locations=${encodeURIComponent(locations)}&dollar=${dollar}&distances=${encodeURIComponent(JSON.stringify(distances))}`;

});
