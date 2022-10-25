
// This data is copied from the GeoDB Cities API: (the key should stay private and not published with source control).
// We split the fetches and put it into the search component
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "67e23d457fmshd8353466d5570cdp1ff9f2jsn842c47bcef4b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
