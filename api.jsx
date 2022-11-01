
// This data is copied from the GeoDB Cities API: (the key should stay private and not published with source control).
// We split the fetches and put it into the search component
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "//*not published in this repository",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";


//We do the same with the weather API:
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "//*not published in this repository";
