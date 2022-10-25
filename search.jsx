import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "./api";
import "./search.css";

//The function passed by the App component:
function Search({ onSearchChange }) {

  //The variable Search is updated by the setSearch function, and setup to an initial value of null
  const [search, setSearch] = useState(null);

  // handleOnChange method retrieve the data we put into the Input field of asyncPaginate component
  // We use the setSearh method to update our search
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // retrieve the value we putting inside the input (inputValue),
  // then we pass this value to pass into the fetch method and into the URL to get our city
  const loadOptions = (inputValue) => {
    // We return the fetch from the GeoDB API (copied) and import the URL located in api.jsx,
    // as well as the options geoApiOptions (the method and headers)
    // We can choose the min population parameter to filter out small cities (define with group)
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      // We map our response to json which returns us the whole data
      .then((response) => response.json())
      // We need to reformat the data : we will require for our weather API
      // an array of objects with the value and label properties which displays the latitudes and longitudes GPS of the searched city
      // This is the weather URL format : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
      .then((response) => {
        return {
          // 
          options: response.data.map((city) => {
            return {
              // We store the values of latitude and longitude given us by the GeoDB API:
              value: `${city.latitude} ${city.longitude}`,
              // We also store the name and country code of the city:
              label: `${city.name},${city.countryCode}`,
            };
          }),
        };
      })
      // We check for errors and console them out
      .catch((err) => console.error(err));
  };

  return (
    <div className="containerSearch">

      //We import the only component we are gonna use
      <AsyncPaginate

        placeholder="enter location"
        //debounceTimeout is the time between each key press to retrieve data (1.5s)
        debounceTimeout={1500}
        //The value is {search} and is retrieved using useState Hook
        value={search}
        //The onChange method will call handleOnChange
        onChange={handleOnChange}
        //we call the method to load the options: loading the properties through async request
        loadOptions={loadOptions}

      />
    </div>
  );
}

export default Search;

//! TLDR (S63 means seach.jsx line 63 / A17 means App.jsx line 17)
//! 1/ We are calling the handleOnChange everytime we change the input and wait for the debounce timer to run out (S63)
//! 2/ We are passing the data (S14), we are setting the new value (S15) and we are calling the onSearchChange (16)
//! 3/ onSearchChange has been passed from the app.jsx (A17) and that method is returning and splitting the latitudes and longitudes (A9)