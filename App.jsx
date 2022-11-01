import "./App.css";
import Search from "@components/search/search";

function App() {
  //We create 2 hooks to store the 2 promises
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // we received the searchData from search component, and transform it into 2 string constants
  // representing the GPS Latitudes (lat) and Longitudes (lon) of the searched city
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.warn(lat);
    console.warn(lon);
    //We create 2 fetches and store them into variables and pass that to the array of the Promise.all:
    //We convert them to metric
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    //We use Promise.all and pass the arrays
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        //Once we get the responses and they are mapped to json, we can update them:
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      //If it fails, we catch and console.warn:
      .catch(console.warn());

    //These console.warn show the 2 responses we get from the current Weather API and the Forecast API
    console.warn(currentWeather);
    console.warn(forecast);

    return (
      <div>
        //We import the Search Component in the App
        <Search onSearchChange={handleOnSearchChange} />
        //We pass in the CurrentWeather variable. //the && means = If it exists:
        show it / If it doesn't: don't show anything
        {currentWeather && <MainContainer data={currentWeather} />}
      </div>
    );
  };
}

export default App;
