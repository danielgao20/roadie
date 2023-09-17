// // Function to calculate the total distance for a given path
// import { LOCATION_TYPES, searchLocationsByTerm } from 'skypicker';
// // const {LOCATION_TYPES, searchLocationsByTerm} = require("skypicker");

// export function calculateTotalDistance(path, distances) {
//     let totalDistance = 0;
//     // loop through each city in the path
//     for (let i = 0; i < path.length - 1; i++) {
//         // Add distance from the current city to the next city to the total distance
//         totalDistance += distances[path[i]][path[i + 1]];
//     }
//     // Add distance from the last city back to the starting city
//     totalDistance += distances[path[path.length - 1]][path[0]];
//     return totalDistance;
// }

// // Function to generate all permutations of an array
// export function generatePermutations(arr) {
//     const permutations = [];
//     const permute = (arr, prefix = []) => {
//         if (arr.length === 0) {
//             permutations.push(prefix);
//         } else {
//             for (let i = 0; i < arr.length; i++) {
//                 const newArr = arr.slice();
//                 const next = newArr.splice(i, 1);
//                 permute(newArr, prefix.concat(next));
//             }
//         }
//     };
//     permute(arr);
//     return permutations;
// }

// // Brute force TSP to find the shortest path
// export function bruteForceTSP(distances) {
//     const numCities = distances.length;
//     const cities = Array.from({ length: numCities }, (_, i) => i);
//     const permutations = generatePermutations(cities);
//     let shortestPath = null;
//     let shortestDistance = Infinity;

//     for (const permutation of permutations) {
//         const distance = calculateTotalDistance(permutation, distances);
//         if (distance < shortestDistance) {
//             shortestDistance = distance;
//             shortestPath = permutation;
//         }
//     }

//     return { shortestPath, shortestDistance };
// }

// // Example distances between cities (replace with your actual distances)
// // const distances = [
// //     [0, 10, 15, 20],
// //     [10, 0, 35, 25],
// //     [15, 35, 0, 30],
// //     [20, 25, 30, 0]
// // ];

// export function distanceBetweenCities(lat1, lat2, long1, long2){
//     lat1 = Math.PI * lat1 / 180.0;
//     lat2 = Math.PI * lat2 / 180.0;
//     long1 = Math.PI * long1 / 180.0;
//     long2 = Math.PI * long2 / 180.0;
//     // console.log(lat1, lat2, long1, long2)
//     return Math.round((3963.0 * Math.acos((Math.sin(lat1) * Math.sin(lat2)) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1))));
// }



// export const LAXAirport = await searchLocationsByTerm({
//     term: 'Seattle',
//     locale: 'en-US',
//     locationTypes: [LOCATION_TYPES.AIRPORT],
//     limit: 3,
// });

// // console.log(LAXAirport.locations[0].location)

// export const BostonAirport = await searchLocationsByTerm({
//     term: 'Miami',
//     locale: 'en-US',
//     locationTypes: [LOCATION_TYPES.AIRPORT],
//     limit: 3,
// });

// // // console.log(BostonAirport.locations[0].location)


// export function distanceToDollar(distance){
//     return Math.round(Math.max(distance/15, 70));
// }

// // const dollar = Math.max(Math.round((distanceBetweenCities(LAXAirport.locations[0].location.lat, BostonAirport.locations[0].location.lat, LAXAirport.locations[0].location.lon, BostonAirport.locations[0].location.lon))/15), 70)

// // total cost of trip, "starting at"
// // console.log(dollar);


// // const result = bruteForceTSP(distances);
// // console.log('Shortest path:', result.shortestPath);
// // console.log('Shortest distance:', result.shortestDistance);