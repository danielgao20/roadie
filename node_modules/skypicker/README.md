# skypicker-client

![Skypicker Client](https://github.com/jaebradley/skypicker-client/workflows/Skypicker%20Client/badge.svg)
[![npm](https://img.shields.io/npm/v/skypicker.svg)](https://www.npmjs.com/package/skypicker)
[![npm](https://img.shields.io/npm/dt/skypicker.svg)](https://www.npmjs.com/package/skypicker)

## Introduction

The [`skypicker` API](skypickerpublicapi.docs.apiary.io) is a nifty `REST` API for obtaining flight and airline data. `skypicker` is a thin `NodeJS` wrapper around the API.

## Install

```
npm install skypicker --save
```

## API

* [`searchLocationsByTerm`](#searchlocationsbyterm)
* [`searchLocationsByRadius`](#searchlocationsbyradius)
* [`searchLocationsByBox`](#searchlocationsbybox)
* [`getLocationById`](#getlocationbyid)
* [`getLocationDump`](#getlocationdump)
* [`getAirlines`](#getairlines)
* [`getAirlineIcon`](#getairlineicon)
* [`searchFlights`](#searchflights)

### `searchLocationsByTerm`

* `term: (required; string)` - The search parameter used to identify a airport, city, country, etc.
* `locale: (optional; string)` - The returned output matches the `locale` specified. The default value is `en`.
* `locationTypes: (optional; array)` - There are six types of locations: airports, autonomous territories, cities, countries, stations, and subdivisions. These location types are captured in the `LOCATION_TYPES` constant. The default behavior is to search all location types.
* `limit: (optional; positive integer)` - This specifies the number of records returned by the API. The default value is `20`.
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/locations/locations-collection/search-by-query)

#### Example

```javascript
import { searchLocationsByTerm, LOCATION_TYPES } from 'skypicker';

const tenAirportsThatMatchLoganWithSpanishOutput = await searchLocationsByTerm({
  term: 'Logan',
  locale: 'es-ES',
  locationTypes: [LOCATION_TYPES.AIRPORT],
  limit: 10,
});
```

### `searchLocationsByRadius`

* `coordinate: (required; object)` - An object with `latitude` and `longitude` properties that represents a point
* `radius: (optional; non-negative integer)` - Represents the `kilometers` from the specified `coordinate` to search. Defaults to `250 kilometers`.
* `locale: (optional; string)` - The returned output matches the `locale` specified. The default value is `en`.
* `locationTypes: (optional; array)` - There are six types of locations: airports, autonomous territories, cities, countries, stations, and subdivisions. These location types are captured in the `LOCATION_TYPES` constant. The default behavior is to search all location types.
* `limit: (optional; positive integer)` - This specifies the number of records returned by the API. The default value is `20`.
* `sort: (optional: LOCATION_RESULTS_SORT_TYPES)` - Specifies whether output should be sorted by `name` or `rank` in an ascending or descending manner
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/locations/locations-collection/search-by-radius)

#### Example

```javascript
import { searchLocationsByRadius, LOCATION_TYPES, LOCATION_RESULTS_SORT_TYPES } from 'skypicker';

const tenAirportsWithinA100KilometerRadiusOfNewYorkCityWithSpanishOutput = await searchLocationsByRadius({
  coordinate: {
    latitude: 40.7128,
    longitude: -74.0059,
  },
  radius: 100,
  locale: 'es-ES',
  locationTypes: [LOCATION_TYPES.AIRPORT],
  limit: 10,
  sort: LOCATION_RESULTS_SORT_TYPES.DESCENDING_RANK,
})
```

### `searchLocationsByBox`

* `lowCoordinate: (required; object)` - Specifies a `coordinate` object with `latitude` and `longitude` properties that represent the southwest corner of the geo search box.
* `highCoordinate: (required; object)` - Specifies a `coordinate` object with `latitude` and `longitude` properties that represent the northeast corner of the geo search box.
* `locale: (optional; string)` - The returned output matches the `locale` specified. The default value is `en`.
* `locationTypes: (optional; array)` - There are six types of locations: airports, autonomous territories, cities, countries, stations, and subdivisions. These location types are captured in the `LOCATION_TYPES` constant. The default behavior is to search all location types.
* `limit: (optional; positive integer)` - This specifies the number of records returned by the API. The default value is `20`.
* `sort: (optional: LOCATION_RESULTS_SORT_TYPES)` - Specifies whether output should be sorted by `name` or `rank` in an ascending or descending manner
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/locations/locations-collection/search-by-box)

#### Example

```javascript
import { searchLocationsByBox, LOCATION_TYPES, LOCATION_RESULTS_SORT_TYPES } from 'skypicker';

const boxSearch = await searchLocationsByBox({
  lowCoordinate: {
    latitude: 40.200610,
    longitude: -74.624328,
  },
  highCoordinate: {
    latitude: 44.763212,
    longitude: -73.376543,
  },
  locale: 'es-ES',
  locationTypes: [LOCATION_TYPES.AIRPORT],
  limit: 10,
  sort: LOCATION_RESULTS_SORT_TYPES.DESCENDING_RANK,
})
```

### `getLocationById`

* `id: (required; string)` - Specifies the IATA airport or [ISO-3166 location code](https://en.wikipedia.org/wiki/ISO_3166)
* `locale: (optional; string)` - The returned output matches the `locale` specified. The default value is `en`.
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/locations/locations-collection/get-by-id)

### `getLocationDump`

* `locale: (optional; string)` - The returned output matches the `locale` specified. The default value is `en`.
* `locationTypes: (optional; array)` - There are six types of locations: airports, autonomous territories, cities, countries, stations, and subdivisions. These location types are captured in the `LOCATION_TYPES` constant. The default behavior is to search all location types.
* `limit: (optional; positive integer)` - This specifies the number of records returned by the API. The default value is `20`.
* `sort: (optional: LOCATION_RESULTS_SORT_TYPES)` - Specifies whether output should be sorted by `name` or `rank` in an ascending or descending manner
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/locations/locations-collection/get-dump)

#### Example

```javascript
import { getLocationDump, LOCATION_TYPES, LOCATION_RESULTS_SORT_TYPES } from 'skypicker';

const locationDump = await getLocationDump({
  locationTypes: [LOCATION_TYPES.AIRPORT],
  limit: 10,
  sort: LOCATION_RESULTS_SORT_TYPES.DESCENDING_RANK,
})
```

### `getAirlines`

* Gets all airlines (both `LC (legacy carrier)` and `LCC (low-cost carrier)`)
* No parameters needed
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/airlines/get-dump)

### `getAirlineIcon`

* `airlineCode: (required; string)` - Specifies the airline's `IATA` code
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/airline-logos/get-dump)

### `searchFlights`

* `departureIdentifier: (required; string, array[string])` - Any `Skypicker` location id(s), like airport codes, city IDs, two-letter country codes, etc.
* `departureDateTimeRange: (required; object)` - Specifies the departure date and time-of-day ranges. The departure date values should be in [`ISO-8601` format (`YYYY-MM-DD`)](https://www.iso.org/iso-8601-date-and-time-format.html), while the time of day values should be in `HH:mm` format where the hour and minute values span `00-23` and `00-59`, respectively.

```javascript
{
  date: {
    start: '2018-01-01',
    end: '2018-01-15',
  },
  timeOfDay: {
    start: '02:30',
    end: '14:15',
  },
};
```

* `returnDepartureDateTimeRange: (required if round-trip flight; object)` - Specifies the departure date and time-of-day ranges. Object should be in the same format as the `departureDateTimeRange` variable.
* `arrivalIdentifier: (optional; string, array[string])` - Any `Skypicker` location id(s). If this is not specified, you'll get results for all airports in the world
* `maximumHoursInFlight: (optional; non-negative integers)` - Maximum flight duration, in hours
* `passengerCount: (optional; positive integers)` - Number of passengers. Default value is `1`.
* `directFlightsOnly: (optional; boolean)` - When `true`, only direct flights are considered. By default, `false`.
* `currencyCode: (optional; string)` - The currency in which prices and other relevant values are expressed. Follows [`ISO-4217` currency codes](https://en.wikipedia.org/wiki/ISO_4217). By default, `EUR`.
* `priceRange: (optional; object)` - Only tickets within the specified range are returned. Values should be represented as non-negative integers.

```javascript
{
  start: 0,
  end: 100,
}
```

* `maximumStopOverCount: (optional; non-negative integer)` - Maximum number of stopovers
* `airlinesFilter: (optional; object)` - Either *excludes* or *includes* the specified airlines. The `airlinesFilter` object has two properties: `airlines` (an `array` of `IATA` codes) and `type` (an `AIRLINES_FILTER_TYPE` value).
* `partner: (optional; string)` - The Skypicker Partner ID assigned to your account. Use `picky` for testing.

```javascript
{
  airlines: [B6],
  type: AIRLINES_FILTER_TYPE.EXCLUDE,
}
```

* `locale: (optional; string)` - The returned output matches the `locale` specified. The default value is `en`.
* `offset: (optional; non-negative integer)` - Specified for paginating through requests
* `limit: (optional; positive integer)` - This specifies the number of records returned by the API. The default value is `20`.
* `sortType: (optional; FLIGHT_RESULTS_SORT_TYPES)` - Specifies whether to sort results by date, duration, price, or quality
* [`REST` API documentation](https://skypickerpublicapi.docs.apiary.io/#reference/flights/flights/get)
